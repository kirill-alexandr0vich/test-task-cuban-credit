import { baseUrl } from './api.ts';

type Category = {
  id: number
  name: string
}

type Source = Category

export type EventItem = {
  category_id: number
  date: string
  description: string
  id: number
  image: string
  lang: string
  source_id: number
  title: string
}

type News = {
  categories: Category[]
  items: EventItem[]
  sources: Source[]
}

export const newsApi = {

  async get(id: number): Promise<News> {
    const { data } = await baseUrl.get(`/news/${id}`)
    return data
  },
};