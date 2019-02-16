import React from 'react';
import Personal from './personal/Personal';
import Creative from './creative/Creative';
import Professional from './professional/Professional';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import styles from '../Styles';

function Experiences(props){
  const { classes } = props;
  return (

    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Paper className={classes.paper}><Personal/></Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}><Creative/></Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}><Professional/></Paper>
        </Grid>
      </Grid>
    </div>
  );
}

Experiences.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Experiences);