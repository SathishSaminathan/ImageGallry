import React, { Component } from "react";

import "./image.css";
import Loader from "../Loader";

class Image extends Component {
  state = {
    isLoaded: false
  };

  onLoadImage = () => {
    this.setState({
      isLoaded: true
    });
  };

  render() {
    // console.log("this.props.image", this.props.imageUrl);
    const {isLoaded} = this.state
    const { imageUrl } = this.props;
    return (
      <div className="image_container">
        <a href={imageUrl} target="_blank" download={imageUrl} className="">
          {!isLoaded && <Loader/>}
          <img
            className="image_style"
            src={imageUrl}
            onLoad={this.onLoadImage}
          />
        </a>
      </div>
    );
  }
}

export default Image;
