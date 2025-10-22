import { useParams } from 'react-router-dom'

function BlogDetail() {
  const { id } = useParams()

  return (
    <div>
      <h1>Blog Detay</h1>
      <p>Blog ID: {id}</p>
    </div>
  )
}

export default BlogDetail