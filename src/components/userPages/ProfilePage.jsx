import React, { useState, useEffect } from 'react';
import UserService from '../../service/UserService.js';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Divider from '@mui/joy/Divider';
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
import Card from '@mui/joy/Card';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import { useLocation } from 'react-router-dom';
import Link from '@mui/joy/Link';
import Avatar from '@mui/joy/Avatar';
import List from '@mui/joy/List';
import ListDivider from '@mui/joy/ListDivider';
import ListItem from '@mui/joy/ListItem';
import ListItemButton, { listItemButtonClasses } from '@mui/joy/ListItemButton';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
const data = [
    {
        name: 'Alex Jonnold',
        avatar: 'https://i.pravatar.cc/40?img=3',
        avatar2x: 'https://i.pravatar.cc/80?img=3',
        date: '21 Oct 2022',
        title: 'Details for our Yosemite Park hike',
        body: 'Hello, my friend! So, it seems that we are getting there…',
        color: 'warning.400',
    },
    {
        name: 'Pete Sand',
        avatar: 'https://i.pravatar.cc/40?img=4',
        avatar2x: 'https://i.pravatar.cc/80?img=4',
        date: '06 Jul 2022',
        title: 'Tickets for our upcoming trip',
        body: 'Good day, mate! It seems that our tickets just arrived…',
        color: 'success.400',
    },
    {
        name: 'Kate Gates',
        avatar: 'https://i.pravatar.cc/40?img=5',
        avatar2x: 'https://i.pravatar.cc/80?img=5',
        date: '16 May 2022',
        title: 'Brunch this Saturday?',
        body: "Hey! I'll be around the city this weekend, how about a…",
        color: 'primary.500',
    },
    {
        name: 'John Snow',
        avatar: 'https://i.pravatar.cc/40?img=7',
        avatar2x: 'https://i.pravatar.cc/80?img=7',
        date: '10 May 2022',
        title: 'Exciting News!',
        body: 'Hello there! I have some exciting news to share with you...',
        color: 'danger.500',
    },
    {
        name: 'Michael Scott',
        avatar: 'https://i.pravatar.cc/40?img=8',
        avatar2x: 'https://i.pravatar.cc/80?img=8',
        date: '13 Apr 2022',
        title: 'Upcoming Product Launch',
        body: 'Dear customers and supporters, I am thrilled to announc...',
        color: 'danger.500',
    },
    {
        name: 'Michael Scott',
        avatar: 'https://i.pravatar.cc/40?img=8',
        avatar2x: 'https://i.pravatar.cc/80?img=8',
        date: '13 Apr 2022',
        title: 'Upcoming Product Launch',
        body: 'Dear customers and supporters, I am thrilled to announc...',
        color: 'danger.500',
    },
    {
        name: 'Michael Scott',
        avatar: 'https://i.pravatar.cc/40?img=8',
        avatar2x: 'https://i.pravatar.cc/80?img=8',
        date: '13 Apr 2022',
        title: 'Upcoming Product Launch',
        body: 'Dear customers and supporters, I am thrilled to announc...',
        color: 'danger.500',
    },
    {
        name: 'Michael Scott',
        avatar: 'https://i.pravatar.cc/40?img=8',
        avatar2x: 'https://i.pravatar.cc/80?img=8',
        date: '13 Apr 2022',
        title: 'Upcoming Product Launch',
        body: 'Dear customers and supporters, I am thrilled to announc...',
        color: 'danger.500',
    },

];
function ProfilePage() {
    const [profileInfo, setProfileInfo] = useState({});
    const location = useLocation();

    useEffect(() => {
        fetchProfileInfo();
    }, []);

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

    return (
        <Box sx={{ flex: 1, width: '100%' }}>
            <Box sx={{ px: { xs: 2, md: 6 } }}>
                <Breadcrumbs
                    size="sm"
                    aria-label="breadcrumbs"
                    separator={<ChevronRightRoundedIcon fontSize="sm" />}
                    sx={{ pl: 0 }}
                >
                    <NavLink
                        to="/profile" // Cambia a la ruta de tu perfil si es necesario
                    >
                        <Link // Cambia a la ruta de tu perfil si es necesario
                            sx={{
                                fontSize: 16, fontWeight: 500, color: location.pathname === '/profile' ? 'black' : 'gray', // Si la ruta es /profile, ponlo negro, si no, gris
                            }}> Mi perfil</Link>

                    </NavLink>
                    <NavLink
                        to="/editProfile" // Cambia a la ruta de tu perfil si es necesario
                    >
                        <Link // Cambia a la ruta de tu perfil si es necesario
                            sx={{
                                fontSize: 16, fontWeight: 500, color: location.pathname === '/editProfile' ? 'black' : 'gray', // Si la ruta es /profile, ponlo negro, si no, gris
                            }}> Editar perfil</Link>

                    </NavLink>
                </Breadcrumbs>
            </Box>
            <Box
                sx={{
                    position: 'sticky',
                    top: { sm: -100, md: -110 },
                    bgcolor: 'background.body',
                    zIndex: 9995,
                }}
            >
                <Box sx={{ px: { xs: 2, md: 6 } }}>
                    <Typography level="h2" component="h1" sx={{ mt: 1, mb: 2, color:'black' }}>
                        Mi perfil
                    </Typography>
                </Box>

            </Box>
            <Stack
                direction="row"
                spacing={4}
                sx={{
                    maxWidth: '100%',
                    border: 'none',
                }}
            >
                {/* Formulario */}
                <Card sx={{ p: 3, flex: 1, border: 'none', width:400, background:'#F1F0EC' }}>
                    <Stack
                        direction="row"
                        spacing={3}
                        sx={{ display: { xs: 'none', md: 'flex' }, my: 1 }}
                    >
                        <Stack direction="column" spacing={1}>
                            <AspectRatio
                                ratio="1"
                                maxHeight={300}
                                sx={{ flex: 1, minWidth: 100, borderRadius: '100%' }}
                            >
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
                                <FormLabel>Name</FormLabel>
                                <FormControl
                                    sx={{ display: { sm: 'flex-column', md: 'flex-row' }, gap: 2 }}
                                >
                                    <Input size="sm" placeholder="First name" />
                                    <Input size="sm" placeholder="Last name" sx={{ flexGrow: 1 }} />
                                </FormControl>
                            </Stack>
                            <Stack direction="row" spacing={2}>
                                <FormControl>
                                    <FormLabel>Role</FormLabel>
                                    <Input size="sm" defaultValue="UI Developer" />
                                </FormControl>
                                <FormControl sx={{ flexGrow: 1 }}>
                                    <FormLabel>Email</FormLabel>
                                    <Input
                                        size="sm"
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
                </Card>

                {/* Lista al lado del formulario */}
                <Box sx={{ flex: 1, px: { xs: 2, md: 6 }, mt: 4 }}>
                    <Typography level="h3" sx={{ mb: 2 }}>

                        <span style={{fontWeight:700,}}>Notificaciones</span>
                    </Typography>
                    <List
                        sx={{
                            maxHeight: "500px",  // 🔹 Ajusta este valor según lo que necesites
                            overflowY: "auto",   // 🔹 Permite desplazamiento si crece demasiado
                            
                           
                            [`& .${listItemButtonClasses.root}.${listItemButtonClasses.selected}`]: {
                                borderLeft: '2px solid',
                                borderLeftColor: 'var(--joy-palette-primary-outlinedBorder)',
                            },
                        }}
                    >
                        {data.map((item, index) => (
                            <React.Fragment key={index}>
                                <ListItem>
                                    <ListItemButton
                                        {...(index === 0 && {
                                            selected: true,
                                            color: 'neutral',
                                        })}
                                        sx={{ p: 2 }}
                                    >
                                        <ListItemDecorator sx={{ alignSelf: 'flex-start' }}>
                                            <Avatar alt="" srcSet={item.avatar2x} src={item.avatar} />
                                        </ListItemDecorator>
                                        <Box sx={{ pl: 2, width: '100%' }}>
                                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                                    <Typography level="body-xs">{item.name}</Typography>
                                                    <Box
                                                        sx={{
                                                            width: '8px',
                                                            height: '8px',
                                                            borderRadius: '99px',
                                                            bgcolor: item.color,
                                                        }}
                                                    />
                                                </Box>
                                                <Typography level="body-xs" textColor="text.tertiary">
                                                    {item.date}
                                                </Typography>
                                            </Box>
                                            <div>
                                                <Typography level="title-sm" sx={{ mb: 0.5 }}>
                                                    {item.title}
                                                </Typography>
                                                <Typography level="body-sm">{item.body}</Typography>
                                            </div>
                                        </Box>
                                    </ListItemButton>
                                </ListItem>
                                <ListDivider sx={{ m: 0 }} />
                            </React.Fragment>
                        ))}
                    </List>
                </Box>
            </Stack>
        </Box>

    );
}

export default ProfilePage;
