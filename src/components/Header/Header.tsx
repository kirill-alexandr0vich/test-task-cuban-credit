import { NavLink } from 'react-router-dom';
import Logo from '../../assets/logo.svg'

import s from './Header.module.scss';

const navList = [
  { id: 0, title: 'Главная', link: '/'},
  { id: 1, title: 'Технологии', link: 'technologies' },
  { id: 3, title: 'Мода', link: 'fashion' },
  { id: 2, title: 'Спорт', link: 'sport' },
  { id: 6, title: 'Karpov', link: 'karpov' }
];

export const Header = () => {

  return (
    <header className={s.container}>
      <img src={Logo} alt="" />
      {navList.map(navItem => (
        <NavLink
          key={navItem.id}
          to={navItem.link}
          state={{id: navItem.id}}
          className={({isActive}) => isActive ? s.active : s.inActive}
        >
          {navItem.title}
        </NavLink>
      ))}
    </header>
  );
};
