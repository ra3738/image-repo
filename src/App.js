import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
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
  },
  buttons: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  upload: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
}));

export default function App() {
  const classes = useStyles();
  var imageData = Object.keys(imageDetections)

  return (
    <div className={classes.root}>
      <div className={classes.search}>
        <h1>Image Repo</h1>
        <br/><br/>

        <TextField fullWidth="true" id="outlined-basic" label="Search" variant="outlined" />
        <br/><br/>

        <div className={classes.buttons}>
          <Button variant="contained" color="primary" startIcon={<AddIcon/>} onClick={() => { console.log('onClick'); }}>
            Add
          </Button>
          <Button variant="contained" color="primary" startIcon={<SearchIcon/>} onClick={() => { console.log('onClick'); }}>
            Search
          </Button>
          <Button variant="contained" color="secondary" startIcon={<DeleteIcon/>} onClick={() => { console.log('onClick'); }}>
            Reset
          </Button>
        </div>
        <br/><br/>

        <h2>Keywords</h2>
        <br/><br/><br/><br/>

        <div className={classes.upload}>
          <input
            accept="image/*"
            className={classes.input}
            id="contained-button-file"
            multiple
            type="file"
          />
          <label htmlFor="contained-button-file">
            <Button variant="contained" color="primary" component="span">
              Upload
            </Button>
          </label>
          <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
          <label htmlFor="icon-button-file">
            <IconButton color="primary" aria-label="upload picture" component="span">
              <PhotoCamera />
            </IconButton>
          </label>
        </div>
      </div>
      
      <GridList cellHeight={180} className={classes.gridList} cols={3}>
        {imageData.map((tile, index) => (
          (index%10 === 0 || (index-6)%10 === 0) ?
          (<GridListTile key={tile} cols={2}>
            <img src={tile} alt={tile} />
          </GridListTile>)
          :
          (<GridListTile key={tile} cols={1}>
            <img src={tile} alt={tile} />
          </GridListTile>)
        ))}
      </GridList>
    </div>
  );
}
