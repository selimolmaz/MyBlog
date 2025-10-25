export interface BlogPost {
  id: string
  title: string
  description: string
  image: string
  date: string
  author: string
  category: string
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'React 19 Yenilikleri',
    description: 'React 19 ile gelen yenilikler ve performans iyileştirmeleri hakkında detaylı bir inceleme.',
    image: 'https://media.licdn.com/dms/image/v2/D5622AQEdIO9nuNaUGQ/feedshare-shrink_2048_1536/B56ZnfxzkQJoAw-/0/1760396001415?e=1762992000&v=beta&t=yfKbBGnw6-bGauuwEsuq-e-k8RqIzJ_2djHB8E33zMo',
    date: '2024-01-15',
    author: 'Ahmet Yılmaz',
    category: 'React'
  },
  {
    id: '2',
    title: 'TypeScript ile Tip Güvenliği',
    description: 'TypeScript kullanarak daha güvenli ve sürdürülebilir kod yazmanın yolları.',
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&q=80',
    date: '2024-01-10',
    author: 'Mehmet Demir',
    category: 'TypeScript'
  },
  {
    id: '3',
    title: 'Modern Web Tasarımı',
    description: 'Kullanıcı deneyimini önemseyen modern web tasarım prensipleri ve uygulamaları.',
    image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&q=80',
    date: '2024-01-05',
    author: 'Ayşe Kaya',
    category: 'Design'
  },
  {
    id: '4',
    title: 'Material-UI ile Hızlı Geliştirme',
    description: 'MUI component kütüphanesi ile profesyonel arayüzler oluşturma rehberi.',
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&q=80',
    date: '2024-01-01',
    author: 'Can Öztürk',
    category: 'UI/UX'
  }
]