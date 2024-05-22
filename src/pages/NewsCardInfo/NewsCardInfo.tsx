import { useLocation, useNavigate, useParams } from 'react-router';

import s from './NewsCardInfo.module.scss'

export const NewsCardInfo = () => {

  const {id} = useParams()
  const navigate = useNavigate();
  const location = useLocation()

  return (
    <div className={s.container}>
      <button onClick={() => navigate(-1)}>Вернуться</button>
      <div>Вы открыли карточку с этим id: {id}</div>
      <img className={s.image} src={location.state.image} alt="" />
    </div>
  )
};
