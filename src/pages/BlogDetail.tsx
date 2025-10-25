import { useParams, useNavigate } from 'react-router-dom'
import { Box, Container, Typography, Button, Chip } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { blogPosts } from '../data/blogData'

function BlogDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const post = blogPosts.find(p => p.id === id)

  if (!post) {
    return (
      <Container>
        <Typography variant="h4">Blog yazısı bulunamadı</Typography>
      </Container>
    )
  }

  return (
    <Box>
      <Container maxWidth="md">
        <Button 
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate('/blog')}
          sx={{ mb: 4 }}
        >
          Geri Dön
        </Button>

        <Box sx={{ mb: 4 }}>
          <Chip 
            label={post.category} 
            sx={{ mb: 2, fontWeight: 600 }} 
          />
          <Typography 
            variant="h2" 
            component="h1"
            sx={{
              fontWeight: 700,
              mb: 2,
              fontSize: { xs: '2rem', md: '3rem' }
            }}
          >
            {post.title}
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, color: 'text.secondary' }}>
            <Typography variant="body2">{post.author}</Typography>
            <Typography variant="body2">•</Typography>
            <Typography variant="body2">
              {new Date(post.date).toLocaleDateString('tr-TR')}
            </Typography>
          </Box>
        </Box>

        <Box
          component="img"
          src={post.image}
          alt={post.title}
          sx={{
            width: '100%',
            height: 'auto',
            borderRadius: 3,
            mb: 4
          }}
        />

        <Typography 
          variant="body1" 
          sx={{ 
            lineHeight: 1.8,
            fontSize: '1.125rem',
            color: 'text.secondary'
          }}
        >
          {post.description}
        </Typography>
      </Container>
    </Box>
  )
}

export default BlogDetail