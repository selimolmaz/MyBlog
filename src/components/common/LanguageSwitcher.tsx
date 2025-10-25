import { useTranslation } from 'react-i18next'
import { ButtonGroup, Button } from '@mui/material'

function LanguageSwitcher() {
  const { i18n } = useTranslation()

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }

  return (
    <ButtonGroup 
      size="small" 
      sx={{
        '& .MuiButton-root': {
          textTransform: 'none',
          fontSize: '0.75rem',
          minWidth: '32px',
          height: '28px',
          border: '1px solid rgba(0, 0, 0, 0.1)',
          color: '#1d1d1f',
          px: 1,
          '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.04)',
            border: '1px solid rgba(0, 0, 0, 0.1)',
          }
        }
      }}
    >
      <Button 
        onClick={() => changeLanguage('tr')}
        variant={i18n.language === 'tr' ? 'contained' : 'outlined'}
        sx={i18n.language === 'tr' ? {
          backgroundColor: '#0066CC !important',
          color: 'white !important',
          '&:hover': {
            backgroundColor: '#0077ED !important'
          }
        } : {}}
      >
        TR
      </Button>
      <Button 
        onClick={() => changeLanguage('en')}
        variant={i18n.language === 'en' ? 'contained' : 'outlined'}
        sx={i18n.language === 'en' ? {
          backgroundColor: '#0066CC !important',
          color: 'white !important',
          '&:hover': {
            backgroundColor: '#0077ED !important'
          }
        } : {}}
      >
        EN
      </Button>
    </ButtonGroup>
  )
}

export default LanguageSwitcher