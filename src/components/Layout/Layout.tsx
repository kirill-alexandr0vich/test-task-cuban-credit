import { Outlet } from 'react-router-dom';
import { Header } from '../Header';

import s from './Layout.module.scss';

export const Layout = () => {

  return (
    <main className={s.wrap}>
      <Header/>
      <Outlet/>
    </main>
  );
};
