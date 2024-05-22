import { EventItem } from '../../services/newsApi.ts';
import { useNavigate } from 'react-router';

import s from './NewsCard.module.scss'

export const NewsCard = (props: EventItem) => {

  const navigate = useNavigate();

  return (
    <div role={'button'} onClick={() => navigate(`/news/${props.id}`, { state: { ...props } })} className={s.card}>
      <div className={s.text}>
        <div className={s.title}>{props.title}</div>
        <div className={s.description}>{props.description}</div>
      </div>
      <img src={props.image} alt={'Ошибка'} className={s.image} />
    </div>
  );
};
