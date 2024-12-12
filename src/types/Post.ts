export interface Post {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  image_url: string;
  date: string;
  author: string;
  tags: string[];
  read_time: string;
  category_slug: string;
}