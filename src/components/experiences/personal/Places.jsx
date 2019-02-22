import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { v4 } from 'uuid';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import classnames from 'classnames';
import Collapse from '@material-ui/core/Collapse';

import oklahoma from '../../../../src/assets/images/Oklahoma.jpg';
import la from '../../../../src/assets/images/LA.jpg';
import nyc from '../../../../src/assets/images/NYC.jpg';
import paris from '../../../../src/assets/images/Paris.jpg';
import portland from '../../../../src/assets/images/Portland.jpg';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
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
  }
});

const tileData = [
  {
    img: oklahoma,
    title: 'Oklahoma',
    id: v4(),
  },
  {
    img: la,
    title: 'Los Angeles',
    id: v4(),
  },
  {
    img: nyc,
    title: 'New York City',
    id: v4(),
  },
  {
    img: paris,
    title: 'Paris',
    id: v4(),
  },
  {
    img: portland,
    title: 'Portland',
    id: v4(),
  },
];

class Places extends React.Component {

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
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <h2>Places:</h2>
        <GridList className={classes.gridList} cols={2.5}>
          {tileData.map(tile => (
            <GridListTile key={tile.img}>
              <img src={tile.img} alt={tile.title} />
              <GridListTileBar
                title={tile.title}
                classes={{
                  root: classes.titleBar,
                  title: classes.title,
                }}
                actionIcon={
                  <IconButton
                    className={classnames(classes.expand, {[classes.expandOpen]: this.state.expanded,})}
                    onClick={this.handleExpandClick}
                    aria-expanded={this.state.expanded}>
                    <ExpandMoreIcon />
                  </IconButton>
                }
                <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>

                    <p>It is Working.</p>

                </Collapse>
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }
}

Places.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Places);
