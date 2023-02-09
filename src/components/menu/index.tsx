import { useEffect, useState } from "react";
import { Menu as MenuIcon } from '@mui/icons-material';
import { AppBar, Box, Button, Container, Divider, Drawer, IconButton, Link, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from "@mui/material";
import { PATH } from "@/routes/routes";


type Item = {
    label: string;
    href: string;
    children?: Item[]
}

type NavItems = Array<Item>

const drawerWidth = 240;

const navItems: NavItems = [
    { label: 'Conceitos gerais', href: PATH.root },
    {
        label: 'Segurança', href: PATH.security.root, children: [
            { label: 'Dados', href: PATH.security.dados },
            { label: 'Perímetro', href: PATH.security.perimetro },
            { label: 'Software', href: PATH.security.software },
            { label: 'Nuvem', href: PATH.security.nuvem },
        ]
    },
    { label: 'Podcasts', href: '' }
];


export default function Menu() {
    const [mobileOpen, setMobileOpen] = useState(false);

    const [container, setContainer] = useState<HTMLElement>();

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                Segurança de sistemas
            </Typography>
            <Divider />
            <List>
                {navItems.map(({ label, href }) => (
                    <Link key={label} href={href}>
                        <ListItem disablePadding>
                            <ListItemButton sx={{ textAlign: 'center' }}>
                                <ListItemText primary={label} />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                ))}
            </List>
        </Box>
    );

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setContainer(window.document.body)
            return
        }
        setContainer(undefined)
    }, [])

    return (
        <>
            <AppBar component="nav">
                <Container maxWidth="xl">
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                        >
                            MUI
                        </Typography>
                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                            {navItems.map(({ label, href }) => (
                                <Link key={label} href={href}>
                                    <Button sx={{ color: '#fff' }}>
                                        {label}
                                    </Button>
                                </Link>
                            ))}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>

            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box >
        </>
    )
}