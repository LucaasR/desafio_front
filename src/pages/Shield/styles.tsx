import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  container: {
    width: '80%',
    margin: '25px auto',
  },
  img: {
    width: '100%',
  },
  defaultText: {
    color: '#737a81',
  },
  textFocus: {
    fontWeight: 'bold',
    color: '#737a81',
  },
  certificates: {
    margin: '50px 0',
  },
  divider: {
    margin: '10px 0',
    width: '80%',
  },
  dividerGreen: {
    margin: '20px auto',
    width: '80%',
    borderBottom: '1px solid #58d00f',
  },
  productsContainer: {
    margin: '25px 0',
  },
  securityImg: {
    width: 40,
    marginRight: 10,
  },
  button: {
    backgroundColor: '#6bc634',
    color: 'white',
    fontWeight: 'bold',
    border: 'none',
    textTransform: 'uppercase',
  },
}));
