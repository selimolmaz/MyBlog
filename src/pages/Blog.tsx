import { useTranslation } from 'react-i18next'
import { Grid, Typography, Box, Container } from '@mui/material'
import BlogCard from '../components/blog/BlogCard'
import { blogPosts } from '../data/blogData'

function Blog() {
  const { t } = useTranslation()

  return (
    <Box sx={{ backgroundColor: '#f5f5f762', minHeight: 'calc(100vh - 44px)', py: 3 }}>
      <Container maxWidth="lg">
        <Grid container spacing={2.5}>
          {blogPosts.map((post) => (
            <Grid size={{ xs: 12, md: 6 }} key={post.id}>
              <BlogCard post={post} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default Blog