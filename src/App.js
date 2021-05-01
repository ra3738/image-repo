import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import tileData from './tileData';
import TextField from '@material-ui/core/TextField';
import imageDetections from './imageDetections.json'
import labels from './labels.json'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    padding: '50px',
    marginRight: '50px'
  },
  gridList: {
    width: 600,
  },
  search: {
    flex: '1',
    paddingLeft: '50px',
    paddingRight: '100px',
    paddingBottom: '50px'
  }
}));

export default function App() {
  const classes = useStyles();
  console.log(imageDetections)
  console.log(labels)
  return (
    <div className={classes.root}>
      <div className={classes.search}>
        <h1>Image Repo</h1>
        <br/><br/><br/><br/><br/>
        <TextField fullWidth="true" id="outlined-basic" label="Search" variant="outlined" />
      </div>
      <GridList cellHeight={180} className={classes.gridList} cols={3}>
        {tileData.map((tile, index) => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
