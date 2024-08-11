// src/components/AdminLayout.js
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Box, Drawer, List, ListItem, ListItemText, Toolbar } from '@mui/material';
import AdminNavbar from './AdminNavbar';

const AdminLayout = () => {
  const drawerWidth = 240;

  return (
    <Box sx={{ display: 'flex' }}>
      <AdminNavbar />
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            <ListItem button component={Link} to="/admin/user-management">
              <ListItemText primary="User Management" />
            </ListItem>
            <ListItem button component={Link} to="/admin/book-management">
              <ListItemText primary="Book Management" />
            </ListItem>
            <ListItem button component={Link} to="/admin/subscription">
              <ListItemText primary="Subscription" />
            </ListItem>
            <ListItem button component={Link} to="/admin/settings">
              <ListItemText primary="Settings" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default AdminLayout;
