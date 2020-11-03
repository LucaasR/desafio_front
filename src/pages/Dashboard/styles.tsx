import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

export const Container = styled.div`
  text-align: center;
  heigth: 100%;
  margin-top: 25px;
  margin-bottom: 50px;
`;

export const useStyles = makeStyles(() => ({
  dashboardContainer: {
    width: '80%',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  charts: {
    margin: '20px 0',
    height: '300px',
  },
  card: {
    margin: '20px 0',
    width: '100%',
    height: 'auto',
  },
  loaderContainer: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loader: {
    color: '#58d00f',
  },
  divider: {
    height: '80%',
  },
}));
