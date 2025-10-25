import { useTranslation } from 'react-i18next'
import { Box, Typography, Button, Container } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

function Home() {
  const { t } = useTranslation()
  const navigate = useNavigate()

  return (
    <Box>
      <Container maxWidth="lg">
        <Box
          sx={{
            minHeight: '70vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            py: 8
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontWeight: 700,
              fontSize: { xs: '3rem', md: '5rem' },
              mb: 3,
              background: 'linear-gradient(45deg, #1976d2 30%, #42a5f5 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            {t('common.welcome')}
          </Typography>
          
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{
              mb: 6,
              maxWidth: 600,
              fontSize: { xs: '1.25rem', md: '1.5rem' }
            }}
          >
            {t('home.main_idea')}
          </Typography>

          <Button
            variant="contained"
            size="large"
            endIcon={<ArrowForwardIcon />}
            onClick={() => navigate('/blog')}
            sx={{
              py: 1.5,
              px: 4,
              fontSize: '1.1rem',
              borderRadius: 2,
              textTransform: 'none'
            }}
          >
            {t('home.learn_more')}
          </Button>
        </Box>
      </Container>
    </Box>
  )
}

export default Home