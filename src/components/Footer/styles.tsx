import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    bottom: '0',
    zIndex: 1201,
    width: '100%',
    height: '30px',
    backgroundColor: '#292c32',
    color: 'white',
  },
}));
