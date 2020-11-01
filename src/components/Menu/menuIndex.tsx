import React from 'react';
import { Build, Dashboard, Lock, Security, Store } from '@material-ui/icons';

const menuIndex = {
  data: [
    {
      name: 'Dashboard',
      icon: <Dashboard />,
      url: '/item1',
    },
    {
      name: 'Certificados SSL',
      icon: <Lock />,
      url: '/item1',
    },
    {
      name: 'Blindagem de site',
      icon: <Security />,
      url: '/item1',
    },
    {
      name: 'Loja',
      icon: <Store />,
      url: '/item2',
    },
    // {
    //   name: 'WAF',
    //   children: [
    //     {
    //       name: 'Child31',
    //       url: '/child31',
    //     },
    //     {
    //       name: 'Child32',
    //       url: '/child32',
    //     },
    //     {
    //       name: 'Child33',
    //       url: '/child33',
    //     },
    //   ],
    // },
  ],
  system: [
    {
      name: 'Sistema',
      icon: <Build />,
      url: '/item1',
    },
    // {
    //   name: 'Organizações',
    //   children: [
    //     {
    //       name: 'Child41',
    //       url: '/child41',
    //     },
    //     {
    //       name: 'Child42',
    //       url: '/child42',
    //     },
    //   ],
    // },
  ],
};

export default menuIndex;
