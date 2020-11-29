import React, {Component} from 'react';
import storage from './config/fire';
import {Button} from 'semantic-ui-react'

class ImageUpload extends Component{
      constructor(props) {
        super(props);
        this.state = {
          image : null,
          url : ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
      }
      handleChange = e => {
        if(e.target.files[0]){
          const image = e.target.files[0];
          this.setState(() => ({image}));
        }
      }
      handleUpload = () => {
          const {image} = this.state;
          const uploadTask = storage.ref('images/').put(image);
          uploadTask.on('state_changed',
          (snapshot) => {

          }, (error) => {
            console.log(error);
          },
          () => {
            storage.ref('images').child(image.name).getDownloadURL().then(url => {
              console.log(url);
              this.setState({url});
            })
          });
      }
      render() {
        return (
          <div>
              <input type="file" onChange={this.handleChange} />
              <br/><br/>
              <Button onClick = {this.handleUpload} className = "ui blue button">Upload</Button>
              <br/><br/>
              <img src={this.state.url || 'http://via.placeholder.com/400x300'} alt = "Uploaded images" height="300" width="400"/>
          </div>
        )
      }
}
export default ImageUpload;
