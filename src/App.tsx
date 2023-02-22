import React, { FC } from 'react'
import Sidebar from 'components/Sidebar'
import Analytical from 'containers/Analytical'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import WorkInProgress from 'containers/WorkInProgress'
import MenuIcon from '@mui/icons-material/Menu'
import { Grid, Hidden, IconButton } from '@mui/material'

const Init: FC = () => {
  const [mobileOpen, setMobileOpen] = React.useState(true)

  const handleDrawerToggle = () => {
    console.log(mobileOpen)
    setMobileOpen(!mobileOpen)
  }

  return (
    <>
      <Sidebar mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
      <Grid container>
        <Hidden smUp>
          <IconButton onClick={handleDrawerToggle} sx={{ marginLeft: 4, marginTop: 1 }}>
            <MenuIcon />
          </IconButton>
        </Hidden>
        <Outlet />
      </Grid>
    </>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Init />,
    children: [
      {
        path: '/analytical',
        element: <Analytical />,
      },
      {
        path: '/ecommerce',
        element: <WorkInProgress />,
      },
      {
        path: '/notes',
        element: <WorkInProgress />,
      },
      {
        path: '/calendar',
        element: <WorkInProgress />,
      },
      {
        path: '/extras',
        element: <WorkInProgress />,
      },
    ],
  },
])

function App() {
  return (
    <div style={{ display: 'flex' }}>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
