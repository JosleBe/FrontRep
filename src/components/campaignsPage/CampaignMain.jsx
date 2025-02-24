import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Link from '@mui/joy/Link';
import { NavLink } from 'react-router-dom';
const CampaignMain = () => {
    const [alignment, setAlignment] = useState("Campañas");
    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment)
    }

    const location = useLocation();
    return (
        <div>
            <Box sx={{ flex: 1, width: '100%' }}>
                <Box sx={{ px: { xs: 2, md: 6 } }}>
                    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        {/* Título Campañas */}
                        <Box sx={{ flexShrink: 0 }}>
                            <Box
                                sx={{
                                    position: 'sticky',
                                    top: { sm: -100, md: -110 },
                                    bgcolor: 'background.body',
                                    zIndex: 9995,
                                }}
                            >
                                <Box sx={{ px: { xs: 2, md: 6 } }}>
                                    <Typography level="h2" component="h1" sx={{ mt: 1, mb: 2, color: 'black' }}>
                                        Campañas
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>

                        {/* Botones de navegación */}
                        <Box sx={{ width: 'auto' }}>
                            <ToggleButtonGroup
                                value={alignment}
                                exclusive
                                onChange={handleChange}
                                aria-label="Platform"
                                sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}
                            >
                                <ToggleButton
                                    value="web"
                                    sx={{
                                        bgcolor: location.pathname === '/campaigns' ? '#896447' : 'transparent', // Fondo personalizado
                                        color: location.pathname === '/campaigns' ? 'white' : '#896447', // Texto con color personalizado
                                        borderRadius: '20px', // Bordes redondeados
                                        padding: '10px 20px', // Espaciado interno
                                        fontSize: 16,
                                        fontWeight: 500,
                                        textTransform: 'none',
                                        '&:hover': {
                                            bgcolor: location.pathname === '/campaigns' ? '#6f4f33' : 'rgba(0, 0, 0, 0.1)', // Fondo más oscuro al hover
                                            color: 'white', // Cambiar el color del texto al hacer hover
                                        },
                                        transition: 'all 0.3s ease', // Transición suave
                                    }}
                                >
                                    <NavLink to="/campaigns" style={{ textDecoration: 'none' }}>
                                        <Typography sx={{ color: location.pathname === '/campaigns' ? 'white' : '#896447' }}>
                                            Campañas
                                        </Typography>
                                    </NavLink>
                                </ToggleButton>

                                <ToggleButton
                                    value="android"
                                    sx={{
                                        bgcolor: location.pathname === '/campaigns-register' ? '#896447' : 'transparent', // Fondo personalizado
                                        color: location.pathname === '/campaigns-register' ? 'white' : '#896447', // Texto con color personalizado
                                        borderRadius: '20px', // Bordes redondeados
                                        padding: '10px 20px', // Espaciado interno
                                        fontSize: 16,
                                        fontWeight: 500,
                                        textTransform: 'none',
                                        '&:hover': {
                                            bgcolor: location.pathname === '/campaigns-register' ? '#6f4f33' : 'rgba(0, 0, 0, 0.1)', // Fondo más oscuro al hover
                                            color: 'white', // Cambiar el color del texto al hacer hover
                                        },
                                        transition: 'all 0.3s ease', // Transición suave
                                    }}
                                >
                                    <NavLink to="/campaigns-register" style={{ textDecoration: 'none' }}>
                                        <Typography sx={{ color: location.pathname === '/campaigns-register' ? 'white' : '#896447' }}>
                                            Registrar campañas
                                        </Typography>
                                    </NavLink>
                                </ToggleButton>
                            </ToggleButtonGroup>
                        </Box>
                    </Box>
                </Box>
            </Box>

        </div>
    )
}

export default CampaignMain
