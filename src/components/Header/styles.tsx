import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

export const ImgBrand = styled.img`
  max-height: 40px;
`;

export const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: '#292c32',
  },
  logo: {
    display: 'flex',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));
