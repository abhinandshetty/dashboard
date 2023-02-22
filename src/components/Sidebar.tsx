import React from 'react'
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material'
import styled from '@emotion/styled'
import { Link, useLocation } from 'react-router-dom'
import { FC } from 'react'

const Title = styled(Typography)`
  font-weight: 700;
  padding: 40px 30px 20px;
  color: #a507d6;
  margin-bottom: 10px;
`

const MenuItem = styled(ListItem)`
  text-decoration: none;
`

const drawerWidth = 260
const container = window !== undefined ? () => window.document.body : undefined

const PATHS = [
  {
    name: 'Analytical',
    path: 'analytical',
  },
  {
    name: 'Ecommerce',
    path: 'ecommerce',
  },
  {
    name: 'Notes',
    path: 'notes',
  },
  {
    name: 'Calendar',
    path: 'calendar',
  },
  {
    name: 'Extras',
    path: 'extras',
  },
]

const Sidebar: FC<{ mobileOpen: boolean; handleDrawerToggle: () => void }> = ({
  mobileOpen,
  handleDrawerToggle,
}) => {
  const location = useLocation()

  const drawer = (
    <>
      <Title variant="h4">Dashboard</Title>
      <List>
        {PATHS.map((record) => (
          <Link
            key={record.path}
            to={record.path}
            style={{
              textDecoration: 'none',
              color: `/${record.path}` === location.pathname ? '#a507d6' : '#000',
            }}
          >
            <MenuItem>
              <ListItemButton>
                <ListItemText primary={record.name} />
              </ListItemButton>
            </MenuItem>
          </Link>
        ))}
      </List>
    </>
  )

  return (
    <>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="dashboard sidebar"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            'display': { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            'display': { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  )
}

export default Sidebar
