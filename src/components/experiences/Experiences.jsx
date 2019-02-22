import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

import placesHome from '../../../src/assets/images/Places-Home.jpg';
import creativeHome from '../../../src/assets/images/Creative-Home.jpg';
import hobbiesHome from '../../../src/assets/images/Hobbies-Home.jpg';
import modelingHome from '../../../src/assets/images/Modeling-Home.jpg';
import professionalHome from '../../../src/assets/images/Professional-Home.jpg';
import actingHome from '../../../src/assets/images/Acting-Home.jpg';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});

const tileData = [
  {
    img: placesHome,
    title: 'Places',
  },
  {
    img: creativeHome,
    title: 'Writing',
  },
  {
    img: actingHome,
    title: 'Acting',
  },
  {
    img: hobbiesHome,
    title: 'Hobbies',
  },
  {
    img: professionalHome,
    title: 'Professional',
  },
  {
    img: modelingHome,
    title: 'Modeling',
  },
];

function TitlebarGridList(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <GridList cellHeight={300} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">Click on Experiences:</ListSubheader>
        </GridListTile>
        {tileData.map(tile => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              actionIcon={
                <IconButton className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

TitlebarGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TitlebarGridList);
