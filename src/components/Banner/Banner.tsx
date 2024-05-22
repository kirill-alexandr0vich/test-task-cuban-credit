import BannerImage from '../../assets/preview.jpg'

import s from './Banner.module.scss'

export const Banner = () => {

  const today = new Date().toLocaleString('ru',
    {
      day: 'numeric',
      month: 'long',
    });

  return (
    <div className={s.container}>
      <img className={s.image} src={BannerImage} alt="Фото баннера" />
      <p className={s.text}>баскетбольный сезон стартует с очередной сенсации, которая шокировала фанатов спорта</p>
      <div className={s.today}><p>Новости</p><p>{today}</p></div>
    </div>
  );
};
