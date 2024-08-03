import * as React from "react";
import logoBlanco from '../../assets/logo/Logo-auto-blanco.png';
import { useAuth } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { 
    AppBar,
    Toolbar, 
    Typography, 
    Button,
    Box,
    Stack,
    Popper,
    Grow,
    Paper,
    ClickAwayListener,
    MenuList,
    MenuItem
} from "@mui/material";


const Navbar = (props) => {
    const { isAuthenticated, funcionario, logout } = useAuth();
    const navigate = useNavigate();

    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
        return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        } else if (event.key === 'Escape') {
            setOpen(false);
        }
    }

      // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
        React.useEffect(() => {
            if (prevOpen.current === true && open === false) {
                anchorRef.current.focus();
            }
        
            prevOpen.current = open;
        }, [open]);

    const irAlPerfil = () => {
        navigate("/perfil");
    }

    const irAlInicio = () => {
        navigate('/');
    }

    return (
    <AppBar position="static" sx={{ backgroundColor: "#33489E", width: "100%"}}>
            <Toolbar sx={{display: "flex", justifyContent: "space-between"}}>
                <Box sx={{display: "flex", alignItems: "center", cursor: "pointer" }} onClick={ irAlInicio }>
                    <img src={logoBlanco} alt="logo" className="logo" height={50}/>
                    <Typography variant="h4" component="div" sx={{ flexGrow: 1, fontWeight: "500",color: "whitesmoke", fontFamily: "Roots" }}>
                        LavAutos
                    </Typography>
                </Box>
                <Box sx={{display: "flex", alignItems: "center"}}>
                    <div className="buttonHeader">
                        <Button onClick={props.onClick1}>
                            {props.linkName1}    
                        </Button>
                        <Button onClick={props.onClick2}>
                            {props.linkName2}    
                        </Button>
                        <Button onClick={props.onClick3}>
                            {props.linkName3}    
                        </Button>
                        <Button onClick={props.onClick4}>
                            {props.linkName4}    
                        </Button>
                    </div>
                        {isAuthenticated ? 
                        <Stack direction="row" spacing={2}>
                            <Button
                            ref={anchorRef}
                            id="composition-button"
                            aria-controls={open ? 'composition-menu' : undefined}
                            aria-expanded={open ? 'true' : undefined}
                            aria-haspopup="true"
                            onClick={handleToggle}
                            >
                            { funcionario.nombreFuncionario }
                            </Button>
                            <Popper
                            open={open}
                            anchorEl={anchorRef.current}
                            role={undefined}
                            placement="bottom-start"
                            transition
                            disablePortal
                            >
                            {({ TransitionProps, placement }) => (
                                <Grow
                                {...TransitionProps}
                                style={{
                                    transformOrigin:
                                    placement === 'bottom-start' ? 'left top' : 'left bottom',
                                }}
                                >
                                <Paper>
                                    <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList
                                        autoFocusItem={open}
                                        id="composition-menu"
                                        aria-labelledby="composition-button"
                                        onKeyDown={handleListKeyDown}
                                    >
                                        <MenuItem onClick={ irAlPerfil }>Mi perfil</MenuItem>
                                        <MenuItem onClick={ logout }>Cerrar sesión</MenuItem>
                                    </MenuList>
                                    </ClickAwayListener>
                                </Paper>
                                </Grow>
                            )}
                            </Popper>
                        </Stack>
                        : null}
                    
                </Box>

            </Toolbar> 
    </AppBar>
    )
}
export default Navbar