import profile from '../../src/assets/images/Profile.jpg';
import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import classnames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';

const cardStyle = theme => ({
  cardSize: {
    width: 150,
    fontSize: '16px',
    padding: '15px',
    margin: '10px',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  media: {
    height: 140,
  },

});


class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
    this.handleExpandClick =
   this.handleExpandClick.bind(this);
  }

  handleExpandClick(){
    if (this.state.expanded === false){
      this.setState({expanded: true});
    } else {
      this.setState({expanded: false});
    }
  }

  render() {
    const classes = this.props;

    return(
      <div>
        <Card className={classes.cardSize}>
        <img src={profile}/>
          <Typography variant="display1" align="left">About:</Typography>
          <CardActions>
            <IconButton className={classnames(classes.expand, {[classes.expandOpen]: this.state.expanded,})}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}>
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <p>A highly focused, result-oriented, team player, with an established performance record in educational and operational environments. Expert in public speaking, presentations, and international integration. Demonstrated success with C#, JavaScript, React, and Angular computer languages. Continuing to master skills in software development, people management, finance, and chess.</p>
              <p>I have lived and worked in many diverse cities, including; Los Angeles, New York City, Paris, and Portland. I speak basic French and Spanish, and have a proclivity for math, music, and the written word. Thank you for exploring.</p>

            </CardContent>
          </Collapse>
        </Card>

      </div>
    );
  }
}

Main.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(cardStyle)(Main);
