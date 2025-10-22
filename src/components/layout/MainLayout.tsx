import { Outlet } from 'react-router-dom'
import { Box, Container } from '@mui/material'
import Header from './Header'
import Footer from './Footer'

function MainLayout() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      
      <Container 
        component="main" 
        maxWidth="lg" 
        sx={{ flex: 1, py: 4 }}
      >
        <Outlet />
      </Container>
      
      <Footer />
    </Box>
  )
}

export default MainLayout