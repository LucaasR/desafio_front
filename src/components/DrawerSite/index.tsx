import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ListItemText,
  Collapse,
  Drawer,
  ListItem,
  List,
} from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import { useStyles } from './styles';

interface MenuProps {
  menuItems: any;
  mobileOpen: any;
}

const MenuBar = ({ menuItems, mobileOpen }: MenuProps) => {
  const classes = useStyles();
  const [handleValue, sethandleValue] = useState<any>({});
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleClick = (item: any) => {
    sethandleValue({ [item]: !handleValue[item] });
  };

  const handler = (children: any) => {
    return children.map((subOption: any) => {
      if (!subOption.children) {
        return (
          <div key={subOption.name}>
            <ListItem button key={subOption.name}>
              <Link to={subOption.url} className={classes.menuItem}>
                {subOption.icon}
                {drawerOpen && (
                  <ListItemText
                    style={{ transition: '1s' }}
                    className={classes.itemName}
                    primary={subOption.name}
                  />
                )}
              </Link>
            </ListItem>
          </div>
        );
      }

      return (
        <div key={subOption.name}>
          <ListItem button onClick={() => handleClick(subOption.name)}>
            <ListItemText
              className={classes.itemName}
              primary={subOption.name}
            />
            {handleValue[subOption.name] ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse
            in={handleValue[subOption.name]}
            timeout="auto"
            unmountOnExit
          >
            {handler(subOption.children)}
          </Collapse>
        </div>
      );
    });
  };

  return (
    <div>
      <Drawer
        variant="persistent"
        anchor="left"
        open={mobileOpen}
        className={classes.drawer}
        onMouseEnter={() => setDrawerOpen(true)}
        onMouseLeave={() => setDrawerOpen(false)}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div>
          <List>{handler(menuItems.data)}</List>
        </div>
      </Drawer>
    </div>
  );
};
export default MenuBar;
