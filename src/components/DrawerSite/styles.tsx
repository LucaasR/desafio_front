import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

export const ImgBrand = styled.img`
  max-height: 40px;
`;

export const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      // width: drawerWidth,
      flexShrink: 0,
    },
    transition: 'width 1s',
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    // width: drawerWidth,
    height: 'calc(100% - 55px)',
    backgroundColor: 'rgba(0, 0, 0, 0.65)',
    position: 'fixed',
    top: '55px',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  closeMenuButton: {
    marginRight: 'auto',
    marginLeft: 0,
  },
  menuItem: {
    display: 'flex',
    alignItems: 'center',
    color: 'white',
    height: '50px',
    transition: 'width 2s',
  },
  itemName: {
    paddingLeft: '30px',
    animationDuration: '1s',
    animation: 'slidein',
  },
}));
