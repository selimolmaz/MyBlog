import { Box, Container, Typography } from '@mui/material'

function Footer() {
  return (
    <Box 
      component="footer" 
      sx={{ 
        py: 4,
        backgroundColor: '#f5f5f7',
        borderTop: '1px solid rgba(0, 0, 0, 0.1)'
      }}
    >
      <Container maxWidth="xl">
        <Typography 
          variant="body2" 
          sx={{ 
            color: '#6e6e73',
            textAlign: 'center',
            fontSize: '0.875rem'
          }}
        >
          © {new Date().getFullYear()} My Blog. Tüm hakları saklıdır. <br />
        </Typography>
      </Container>
    </Box>
  )
}

export default Footer