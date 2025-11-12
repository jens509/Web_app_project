import React from 'react';
import { Outlet, Routes, Route, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, IconButton, Box, Drawer, List, ListItem, ListItemIcon, ListItemText, Avatar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { DashboardPage, EmployesPage } from '../pages';
import navItems from './NavItems';

const drawerWidth = 210;

export default function MainLayout() {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ height: '100%', bgcolor: 'primary.main', color: 'white' }}>
      <Toolbar>
        <Typography variant="h6" noWrap>ODVA Administration</Typography>
      </Toolbar>
      <List>
        {navItems.map((item) => (
          <ListItem button key={item.text} onClick={() => navigate(item.path)}>
            <ListItemIcon sx={{ color: 'white' }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, bgcolor: 'primary.dark', height: 56, justifyContent: 'center' }}>
        <Toolbar variant="dense" sx={{ minHeight: 56 }}>
          <IconButton color="inherit" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2, display: { sm: 'none' } }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>ODVA Administration</Typography>
          <Avatar sx={{ width: 28, height: 28, ml: 2 }}>U</Avatar>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', bgcolor: 'primary.main', color: 'white' },
          display: { xs: 'none', sm: 'block' },
        }}
        open
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', bgcolor: 'primary.main', color: 'white' },
        }}
      >
        {drawer}
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', pt: 7, pl: { sm: `${drawerWidth}px` }, minHeight: '100vh' }}
      >
        <Routes>
          <Route path='/' element={<DashboardPage />} />
          <Route path='/employes' element={<EmployesPage />} />
          {/* Autres routes CRUD à brancher ici plus tard */}
        </Routes>
        <Outlet />
      </Box>
    </Box>
  );
}
