import { useTranslation } from 'react-i18next'

function Home() {
  const { t } = useTranslation()

  return (
    <div>
      <h1>{t('common.welcome')}</h1>
      <p>Ana Sayfa</p>
    </div>
  )
}

export default Home