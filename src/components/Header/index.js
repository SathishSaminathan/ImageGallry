import React, { Component } from "react";
import { Button, Input, Progress } from "semantic-ui-react";

import "./Header.css";

class Header extends Component {
  state = {
    storageRef:this.props.storageRef,
    firebaseDatabaseRef: this.props.firebaseDatabaseRef,
    file: null,
    progress: 0,
    url: null,
  };

  

  handleChange = e => {
    this.setState(
      {
        file: e.target.files[0]
      },
      () => console.log("file...", this.state.file)
    );
  };

  uploadImage = () => {
    const { storageRef, file } = this.state;
    const uploadImage = storageRef.child(this.state.file.name).put(file);
    uploadImage.on(
      "state_changed",
      snapshot => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        this.setState({
          progress
        });
      },
      err => {
        console.log(err);
      },
      completed => {
        storageRef
          .child(this.state.file.name)
          .getDownloadURL()
          .then(url => {
            this.setState(
              {
                url
              },
              () => {
                console.log("working!!!");
                this.createImage(this.state.url);
              }
            );
          });

        console.log("completed");
        this.setState({ progress: 0 });
      }
    );
  };

  createImage = url => {
    const { firebaseDatabaseRef } = this.state;
    console.log("url...", url);
    firebaseDatabaseRef.push({ url });
    console.log("check data");
  };

  render() {
    const { progress } = this.state;
    return (
      <React.Fragment>
        {progress > 0 && (
          <Progress
            className="progress"
            percent={progress}
            indicating
            progress
            size="large"
            inverted
          />
        )}
        <div className="header_container">
          <div className="header">
            <Input type="file" onChange={this.handleChange} />
            <Button color="green" onClick={this.uploadImage}>
              Upload
            </Button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Header;
