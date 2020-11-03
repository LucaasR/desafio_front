import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  cardRoot: {
    width: '100%',
  },
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignContent: 'flex-start',
    padding: '0 30px',
  },
  cardTitle: {
    margin: '10px',
  },
  titleItem: {
    fontWeight: 'bold',
  },
  itemFooter: {
    margin: '15px',
  },
  divider: {
    borderRight: '1px solid #58d00f',
  },
}));
