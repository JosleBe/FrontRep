import React, { useState, useEffect } from 'react';
import UserService from '../../service/UserService.js';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import IconButton from '@mui/joy/IconButton';
import Stack from '@mui/joy/Stack';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Typography from '@mui/joy/Typography';
import Breadcrumbs from '@mui/joy/Breadcrumbs';
import { NavLink } from 'react-router-dom';
import Link from '@mui/joy/Link';
import Card from '@mui/joy/Card';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import { useLocation } from 'react-router-dom';
import Button from '@mui/joy/Button';
import './EditProfile.css';

const EditProfie = () => {
    const [profileInfo, setProfileInfo] = useState({});
    const location = useLocation();
    const [bgColor, setBgColor] = useState('white');
    useEffect(() => {
        fetchProfileInfo();
    }, []);
    const handleMouseEnter = () => {
        // Cambiar el fondo cuando el mouse entra al botón
        setBgColor('#896447'); // Por ejemplo, un color amarillo
    };

    const handleMouseLeave = () => {
        // Volver al color original cuando el mouse sale del botón
        setBgColor('white');
    };
    const fetchProfileInfo = async () => {
        try {
            const token = localStorage.getItem('token'); // Retrieve the token from localStorage
            const response = await UserService.getYourProfile(token);
            setProfileInfo(response.user);
            console.log(response.user);
        } catch (error) {
            console.error('Error fetching profile information:', error);
        }
    };

    const handleUpdate = () => {
        // Lógica para actualizar el perfil
        console.log('Actualizando perfil...', profileInfo);
    };

    const handleReset = () => {
        // Resetea los campos a la información original
        fetchProfileInfo();
    };

    return (
        <div>
            <Box sx={{ flex: 1, width: '100%' }}>
                <Box sx={{ px: { xs: 2, md: 6 } }}>
                    <Breadcrumbs
                        size="sm"
                        aria-label="breadcrumbs"
                        separator={<ChevronRightRoundedIcon fontSize="sm" />}
                        sx={{ pl: 0 }}
                    >
                        <NavLink to="/profile">
                            <Link sx={{ fontSize: 16, fontWeight: 500, color: location.pathname === '/profile' ? 'black' : 'gray' }}> Mi perfil</Link>
                        </NavLink>
                        <NavLink to="/editProfile">
                            <Link sx={{ fontSize: 16, fontWeight: 500, color: location.pathname === '/editProfile' ? 'black' : 'gray' }}> Editar perfil</Link>
                        </NavLink>
                    </Breadcrumbs>
                </Box>
                <Box sx={{ position: 'sticky', top: { sm: -100, md: -110 }, bgcolor: 'background.body', zIndex: 9995 }}>
                    <Box sx={{ px: { xs: 2, md: 6 } }}>
                        <Typography level="h2" component="h1" sx={{ mt: 1, mb: 2, color: '#896447' }}>
                            Editar perfil
                        </Typography>
                    </Box>
                </Box>
                <Stack spacing={4} sx={{ display: 'flex', maxWidth: '100%', mx: 'auto', px: { xs: 2, md: 6 }, py: { xs: 2, md: 3 }, border: 'none' }}>
                    <Card sx={{ p: 3, flexGrow: 1, border: 'none', boxShadow: 'sm', borderRadius: 'md' }}>
                        <Stack direction="row" spacing={3} sx={{ display: { xs: 'none', md: 'flex', border: 'none' }, my: 1 }}>
                            <Stack direction="column" spacing={1}>
                                <AspectRatio ratio="1" maxHeight={200} sx={{ flex: 1, minWidth: 160, borderRadius: '100%' }}>
                                    <img
                                        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286"
                                        srcSet="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286&dpr=2 2x"
                                        loading="lazy"
                                        alt=""
                                    />
                                </AspectRatio>
                                <IconButton
                                    aria-label="upload new picture"
                                    size="sm"
                                    variant="outlined"
                                    color="neutral"
                                    sx={{
                                        bgcolor: 'background.body',
                                        position: 'absolute',
                                        zIndex: 2,
                                        borderRadius: '50%',
                                        left: 100,
                                        top: 170,
                                        boxShadow: 'sm',
                                    }}
                                >
                                    <EditRoundedIcon />
                                </IconButton>
                            </Stack>
                            <Stack spacing={2} sx={{ flexGrow: 1 }}>
                                <Stack spacing={1}>
                                    <FormLabel>Editar nombre</FormLabel>
                                    <FormControl sx={{ display: { sm: 'flex-column', md: 'flex-row' }, gap: 2 }}>
                                        <Input size="md" placeholder="First name" value={profileInfo.firstName} onChange={(e) => setProfileInfo({ ...profileInfo, firstName: e.target.value })} />
                                        <Input size="md" placeholder="Last name" sx={{ flexGrow: 1 }} value={profileInfo.lastName} onChange={(e) => setProfileInfo({ ...profileInfo, lastName: e.target.value })} />
                                    </FormControl>
                                </Stack>
                                <Stack direction="row" spacing={2}>
                                    <FormControl>
                                        <FormLabel>Role</FormLabel>
                                        <Input size="md" defaultValue="UI Developer" />
                                    </FormControl>
                                    <FormControl sx={{ flexGrow: 1 }}>
                                        <FormLabel>Email</FormLabel>
                                        <Input
                                            size="md"
                                            type="email"
                                            startDecorator={<EmailRoundedIcon />}
                                            placeholder="email"
                                            defaultValue="siriwatk@test.com"
                                            sx={{ flexGrow: 1 }}
                                        />
                                    </FormControl>
                                </Stack>
                            </Stack>
                        </Stack>
                        <Stack direction="row" spacing={2}>
                            <FormControl sx={{ flexGrow: 1 }}>
                                <FormLabel>Teléfono</FormLabel>
                                <Input size="md" type="tel" placeholder="Número de teléfono" />
                            </FormControl>
                            <FormControl sx={{ flexGrow: 1 }}>
                                <FormLabel>Dirección</FormLabel>
                                <Input size="md" placeholder="Dirección" />
                            </FormControl>
                        </Stack>
                        <Stack direction="row" spacing={1}>
                            <FormControl sx={{ flexGrow: 1 }}>
                                <FormLabel>Fecha de nacimiento</FormLabel>
                                <Input type="date" name="" id="" />

                            </FormControl>
                            <FormControl sx={{ flexGrow: 1 }}>
                                <FormLabel>Sexo</FormLabel>
                                <Select size="md" defaultValue="">
                                    <Option value="">Opcional</Option>
                                    <Option value="male">Masculino</Option>
                                    <Option value="female">Femenino</Option>
                                    <Option value="other">Otro</Option>
                                </Select>
                            </FormControl>
                        </Stack>
                        <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
                            <Button
                                variant="outlined"
                                className="btn-actualizar"
                                style={{
                                    border: '2px solid #896447',
                                    color: 'black',
                                    background: bgColor,
                                    cursor: 'pointer',
                                }}
                                onMouseEnter={handleMouseEnter}  // Al pasar el mouse
                                onMouseLeave={handleMouseLeave}  // Al salir el mouse
                            >
                                Actualizar
                            </Button>
                            <Button  style={{background:'black'}} onClick={handleReset}>Limpiar</Button>
                        </Stack>
                    </Card>
                </Stack>
            </Box>
        </div>
    );
};

export default EditProfie;
