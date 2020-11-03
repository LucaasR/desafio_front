import React, { useState } from 'react';
import Header from '../Header';
import menuIndex from './menuIndex';
import MenuBar from '../DrawerSite';

import { useStyles } from './styles';

const MenuSite = () => {
  const [mobileOpen, setMobileOpen] = useState(true);
  const classes = useStyles();

  return (
    <div className={classes.header}>
      <MenuBar menuItems={menuIndex} mobileOpen={mobileOpen} />
      <Header mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
    </div>
  );
};

export default MenuSite;
