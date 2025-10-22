import { useTranslation } from 'react-i18next'
import { Button, ButtonGroup } from '@mui/material'

function LanguageSwitcher() {
  const { i18n } = useTranslation()

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }

  return (
    <ButtonGroup size="small" variant="outlined">
      <Button 
        onClick={() => changeLanguage('tr')}
        variant={i18n.language === 'tr' ? 'contained' : 'outlined'}
      >
        TR
      </Button>
      <Button 
        onClick={() => changeLanguage('en')}
        variant={i18n.language === 'en' ? 'contained' : 'outlined'}
      >
        EN
      </Button>
    </ButtonGroup>
  )
}

export default LanguageSwitcher