import React from 'react';
import { useLocation } from 'react-router';
import { useFetchDataForState } from '../../utils/useFetchDataForState.ts';
import { Banner, NewsCard } from '../../components';

import s from './Core.module.scss';

export const Core = () => {
  const location = useLocation();

  return (
    <section className={s.container}>
      <Banner />
      <div className={s.newsList}>
        {useFetchDataForState(location.state?.id || 0).map(item => (
          <React.Fragment key={item.id}>
            <NewsCard {...item} />
          </React.Fragment>
        ))}
      </div>
    </section>
);
};
