import { useTranslation } from 'react-i18next'

function Blog() {
  const { t } = useTranslation()

  return (
    <div>
      <h1>{t('common.blog')}</h1>
      <p>Blog Listesi</p>
    </div>
  )
}

export default Blog