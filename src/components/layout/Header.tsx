import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from '../common/LanguageSwitcher'
import bacony from '../../assets/balcony.svg'

function Header() {
  const { t } = useTranslation()

  return (
    <AppBar 
      position="sticky" 
      elevation={0}
      sx={{ 
        backgroundColor: 'rgba(255, 255, 255, 0.72)',
        backdropFilter: 'saturate(180%) blur(20px)',
        borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
        color: '#1d1d1f'
      }}
    >
      <Container maxWidth="lg">
        <Toolbar 
          sx={{ 
            justifyContent: 'space-between', 
            minHeight: '44px !important',
            py: 0
          }}
        >
          <Typography 
            variant="h6" 
            component={Link} 
            to="/"
            sx={{ 
              fontWeight: 600,
              textDecoration: 'none',
              color: 'inherit',
              fontSize: '1.1rem',
              letterSpacing: '-0.3px'
            }}
          >
            <img src={bacony} alt="" />
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
            <Button 
              color="inherit" 
              component={Link} 
              to="/blog"
              sx={{ 
                textTransform: 'none',
                fontSize: '0.875rem',
                fontWeight: 400,
                minWidth: 'auto',
                px: 1,
                py: 0.5,
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.04)'
                }
              }}
            >
              {t('common.blog')}
            </Button>
            
            <LanguageSwitcher />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header