import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import CloseIcon from '@material-ui/icons/Close';
import imageDetections from './imageDetections.json'
import labels from './labels.json'
import { render } from '@testing-library/react';
import { ContactsTwoTone } from '@material-ui/icons';

const useStyles = theme => ({
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
});

class App extends React.Component {
  constructor(props) {
    super(props)
    var imageDataKeys = Object.keys(imageDetections)
    this.state = {
      imageData: imageDataKeys,
      keywords: [],
      textFieldValue: '',
      imageInput: null
    }
    this.handleTextFieldChange = this.handleTextFieldChange.bind(this);
    this.handleImageInput = this.handleImageInput.bind(this);
  }

  handleTextFieldChange(event) {
    this.setState({
      textFieldValue: event.target.value
    })
  }

  handleImageInput(event) {
    this.setState({
      imageInput: URL.createObjectURL(event.target.files[0])
    }, () => {
      console.log(this.state.imageInput)
    })
  }

  addOnClick() {
    console.log("Add")
    var allKeywords = this.state.keywords
    allKeywords.push(this.state.textFieldValue)
    this.setState({
      keywords: allKeywords
    })
    return
  }

  searchOnClick() {
    console.log("Search")
    const imageSet = new Set()
    var word
    for (word in this.state.keywords) {
      word = this.state.keywords[word].toLowerCase()
      console.log(this.state.keywords)
      console.log(word)
      var detection
      for (detection in Object.keys(labels)) {
        detection = Object.keys(labels)[detection]
        console.log(detection.includes(word))
        if (detection.includes(word)) {
          var image
          for (image in labels[detection]) {
            image = labels[detection][image]
            imageSet.add(image)
          }
        }
      }
    }
    console.log(imageSet)
    this.setState({
      imageData: Array.from(imageSet)
    })
    return
  }

  resetOnClick() {
    console.log("Reset")
    var imageDataKeys = Object.keys(imageDetections)
    this.setState({
      keywords: [],
      imageData: imageDataKeys
    })
    return
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.search}>
          <h1>Image Repo</h1>
          <br/><br/>
  
          <TextField value={this.state.textFieldValue} onChange={this.handleTextFieldChange} fullWidth="true" id="outlined-basic" label="Search" variant="outlined" />
          <br/><br/>
  
          <div className={classes.buttons}>
            <Button variant="contained" color="primary" startIcon={<AddIcon/>} onClick={() => { this.addOnClick(); }}>
              Add
            </Button>
            <Button variant="contained" color="primary" startIcon={<SearchIcon/>} onClick={() => { this.searchOnClick(); }}>
              Search
            </Button>
            <Button variant="contained" color="secondary" startIcon={<DeleteIcon/>} onClick={() => { this.resetOnClick(); }}>
              Reset
            </Button>
          </div>
          <br/><br/>
  
          <h2>Keywords</h2>
          <div className={classes.buttons}>
            {this.state.keywords.map((word) => (
              <Button variant="contained" color="primary">
                {word}
              </Button>
            ))}
          </div>
          <br/><br/>
  
          <div className={classes.upload}>
            <img src={this.state.imageInput} width="225" height="225"/>
            <br/>
            <input
              accept="image/*"
              onChange={this.handleImageInput}
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
            <input accept="image/*" onChange={this.handleImageInput} className={classes.input} id="icon-button-file" type="file" />
            <label htmlFor="icon-button-file">
              <IconButton color="primary" aria-label="upload picture" component="span">
                <PhotoCamera />
              </IconButton>
            </label>
          </div>
        </div>
        
        <GridList cellHeight={180} className={classes.gridList} cols={3}>
          {this.state.imageData.map((tile, index) => (
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
}

export default withStyles(useStyles)(App)