import React from 'react';
import { Dashboard, Lock, Security } from '@material-ui/icons';

const menuIndex = {
  data: [
    {
      name: 'Dashboard',
      icon: <Dashboard />,
      url: '/',
    },
    {
      name: 'Blindagem de site',
      icon: <Security />,
      url: '/security',
    },
    {
      name: 'Certificados SSL',
      icon: <Lock />,
      url: '/ssl ',
    },
    // {
    //   name: 'Loja',
    //   icon: <Store />,
    //   url: '/item2',
    // },
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
  // system: [
  //   {
  //     name: 'Sistema',
  //     icon: <Build />,
  //     url: '/item1',
  //   },
  //   // {
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
  // ],
};

export default menuIndex;
