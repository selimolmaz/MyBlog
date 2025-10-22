import { useTranslation } from 'react-i18next'

function App() {
  const { t, i18n } = useTranslation()

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>{t('common.welcome')}</h1>
      <h2>{t('common.blog')}</h2>
      
      <div style={{ marginTop: '20px' }}>
        <button onClick={() => changeLanguage('tr')}>Türkçe</button>
        <button onClick={() => changeLanguage('en')} style={{ marginLeft: '10px' }}>
          English
        </button>
      </div>
      
      <p style={{ marginTop: '20px' }}>
        Aktif Dil: <strong>{i18n.language}</strong>
      </p>
    </div>
  )
}

export default App