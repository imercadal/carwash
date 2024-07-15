import * as React from 'react';
import {
    Box,
    BottomNavigation,
    BottomNavigationAction,
    Typography
} from '@mui/material';
//import RestoreIcon from '@mui/icons-material/Restore';
//import FavoriteIcon from '@mui/icons-material/Favorite';
//import LocationOnIcon from '@mui/icons-material/LocationOn';
import KeyIcon from '@mui/icons-material/Key';

import { useNavigate } from "react-router-dom";

const BottomNavBar = () => {
    const [value, setValue] = React.useState(0);
    const navigate = useNavigate();

    const irAAccesoFuncionarios = () => {
        navigate("/funcionarios/registro");
    }

    return (
        <Box >
        <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
            setValue(newValue);
            }}
            sx={{ 
                justifyContent: 'space-around', 
                backgroundColor: 'primary.main',
                height: '10vh',
                alignItems: 'flex-start'
            }}
        >

            <BottomNavigationAction 
            label={
                <Typography variant="body2" sx={{ color: '#32479E', fontWeight: "600" }}>
                Acceso Funcionarios
                </Typography>
            }
            icon={<KeyIcon sx={{ color: '#32479E' }} />}
            sx={{ color: '#32479E', '& .Mui-selected': { color: '#32479E' } }} 
            onClick={ irAAccesoFuncionarios }
            />

            
        </BottomNavigation>
        </Box>
    );
}

//<BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
//<BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />

export default BottomNavBar;