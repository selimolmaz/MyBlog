import { Box, Typography, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { type BlogPost } from '../../data/blogData'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

interface BlogCardProps {
  post: BlogPost
}

function BlogCard({ post }: BlogCardProps) {
  const navigate = useNavigate()

  return (
    <Box
      sx={{
        position: 'relative',
        height: '550px',
        borderRadius: '28px',
        overflow: 'hidden',
        backgroundColor: '#f5f5f7',
        backgroundImage: `url(/rec_black.svg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          p: { xs: 3, md: 5 }
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Typography
            sx={{
              fontSize: '0.6875rem',
              fontWeight: 600,
              color: '#000000ff',
              mb: 1.5,
              letterSpacing: '1px',
              textTransform: 'uppercase',
              opacity: 0.8
            }}
          >
            {post.category}
          </Typography>

          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: '1.875rem', md: '2.375rem' },
              fontWeight: 700,
              color: '#000000ff',
              mb: 2,
              lineHeight: 1.08,
              letterSpacing: '-0.8px'
            }}
          >
            {post.title}
          </Typography>

          <Typography
            sx={{
              fontSize: '0.9375rem',
              color: 'rgba(0, 0, 0, 0.86)',
              lineHeight: 1.47,
              mb: 3
            }}
          >
            {post.description}
          </Typography>

          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              onClick={(e) => {
                e.stopPropagation()
                navigate(`/blog/${post.id}`)
              }}
              sx={{
                backgroundColor: '#0071e3',
                color: 'white',
                textTransform: 'none',
                borderRadius: '980px',
                fontSize: '0.875rem',
                fontWeight: 400,
                px: 2.5,
                py: 1,
                '&:hover': {
                  backgroundColor: '#0077ED'
                }
              }}
            >
              Oku
            </Button>

            <Button
              onClick={(e) => {
                e.stopPropagation()
                navigate(`/blog/${post.id}`)
              }}
              endIcon={<ArrowForwardIcon sx={{ fontSize: '1rem' }} />}
              sx={{
                color: '#2997ff',
                textTransform: 'none',
                fontSize: '0.875rem',
                fontWeight: 400,
                px: 0,
                '&:hover': {
                  backgroundColor: 'transparent',
                  textDecoration: 'underline'
                }
              }}
            >
              Daha fazla bilgi
            </Button>
          </Box>
        </Box>

        {/* Image Section - FIXED */}
        <Box
          sx={{
            height: '247px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-end',
            mt: 2,
          }}
        >
          {post.image && (
            <Box
              component="img"
              src={post.image}
              alt={post.title}
              onError={(e) => {
                console.error('Image failed to load:', post.image)
                e.currentTarget.style.display = 'none'
              }}
              sx={{
                maxHeight: '100%',
                maxWidth: '85%',
                objectFit: 'contain',
                display: 'block'
              }}
            />
          )}
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
          <Typography sx={{ fontSize: '0.75rem', color: 'rgba(245, 245, 247, 0.56)' }}>
            {post.author}
          </Typography>
          <Typography sx={{ fontSize: '0.75rem', color: 'rgba(245, 245, 247, 0.56)' }}>
            {new Date(post.date).toLocaleDateString('tr-TR')}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default BlogCard