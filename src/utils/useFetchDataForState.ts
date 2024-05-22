import { useEffect, useState } from 'react';
import { EventItem, newsApi } from '../services/newsApi.ts';

export const useFetchDataForState = (id: number) => {
  const [data, setData] = useState<EventItem[]>([]);

  useEffect(() => {
    newsApi.get(id).then(result => setData(result.items))
  }, [id])

  return data
};
