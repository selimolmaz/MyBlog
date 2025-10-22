import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from '../common/LanguageSwitcher'

function Header() {
  const { t } = useTranslation()

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {t('common.blog')}
        </Typography>
        
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          <Button color="inherit" component={Link} to="/">
            {t('common.welcome')}
          </Button>
          <Button color="inherit" component={Link} to="/blog">
            {t('common.blog')}
          </Button>
          
          <LanguageSwitcher />
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header