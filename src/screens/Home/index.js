import React, { Component } from "react";

import firebase from "../../config/firebase";
import Header from "../../components/Header";
import ImageList from "../../components/ImageList";

class Home extends Component {
  state = {
    storageRef: firebase.storage().ref("images"),
    firebaseDatabaseRef: firebase.database().ref("images"),
    images: []
  };

  componentDidMount() {
    let images = [];
    const { firebaseDatabaseRef } = this.state;
    firebaseDatabaseRef.on("child_added", snapshot => {
      let image = snapshot.val();
      images.push(image);
      this.setState({
        images
      });
      console.log("images...", this.state.images);
    });
  }

  render() {
    const { storageRef, firebaseDatabaseRef, images } = this.state;
    return (
      <div>
        <Header
          storageRef={storageRef}
          firebaseDatabaseRef={firebaseDatabaseRef}
        />
        <ImageList images={images} />
      </div>
    );
  }
}

export default Home;
