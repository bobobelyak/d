import React from 'react';
import {compose, lifecycle, withState} from 'recompose';
import {connect} from 'react-redux';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import Typography from '@material-ui/core/Typography';
import UA from '../../../public/icons/ukraine.svg';
import EN from '../../../public/icons/united-kingdom.svg';
import GridList from '../common/grid-list';
import TextField from '../common/text-field';
import {Navigation} from '../layout/navigation';
import {PopularSight, RightPlace} from './popular-sight';
import logo from './logo.jpg';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const selectedLanguage = localStorage.getItem('language');



const setLanguage = language => {
  localStorage.setItem('language', language);
  if (selectedLanguage !== language) {
    location.reload();
  }
};

const Transition = props => <Slide direction="left" {...props}/>;

// TODO CREATE LAYOUT FOR APPBAR
const Sights = props => {
  const {history, places, classes} = props;

  const goCreatePlace = () => history.push('/create-place');
  return (
    <Dialog
      fullScreen
      open
      TransitionComponent={Transition}
    >
      <AppBar style={{boxShadow: 'none', position: 'relative'}}>
        <Toolbar style={{backgroundColor: '#5be391'}}>
          <Navigation white/>
          <div style={{flexGrow: 1}}/>
          <img onClick={() => setLanguage('en')} src={EN} width={20} height={20} style={{marginTop: 0}} className={selectedLanguage === 'en' ? 'selected-language' : 'selected-language-inactive selected-language'}/>
          <img onClick={() => setLanguage('ua')} src={UA} width={20} height={20} style={{marginTop: 0}} className={selectedLanguage === 'ua' ? 'selected-language' : 'selected-language-inactive selected-language'}/>
          <IconButton style={{cursor: 'pointer'}}><AddIcon onClick={goCreatePlace} style={{fontSize: '1.3em', color: 'white'}}/></IconButton>
        </Toolbar>
      </AppBar>
      <Grid container style={{marginLeft: 200, marginTop: 50}}>
        <img width="35%" src={logo} alt={logo} />
          <Typography variant="h2" style={{fontSize: '2em', textTransform: 'uppercase', fontWeight: 'lighter', padding: 10}}> Covid-19 Analyses</Typography>
        <Button className={classes.root} style={{marginLeft: 100}}>Details</Button>
      </Grid>



    </Dialog>
  );
};

const styles = theme => ({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
  underline: {
    '&:after': {
      borderBottomColor: 'sandybrown',
    },
    '&:hover': {
      borderBottomColor: 'sandybrown',
    },
    '&:before': {
      borderBottomColor: 'sandybrown',
    },
    '&:hover:before': {
      borderBottomColor: 'sandybrown',
    },
  },
  inputRoot: {
    backgroundColor: 'white',
    paddingTop: 10,
    borderRadius: 0,
    '&:focused': {
      backgroundColor: '#fcfcfc',
    },
    '&:hover': {
      backgroundColor: '#fcfcfc',
    },
    '&:blur': {
      backgroundColor: '#fcfcfc',
    },
  },
});

const mapStateToProps = state => ({
  places: state.placesState.places,
});

export default compose(
  connect(mapStateToProps, {}),
  withStyles(styles),
)(Sights);
