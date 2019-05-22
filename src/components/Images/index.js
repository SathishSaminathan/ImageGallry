import React, { Component } from "react";

import "./image.css";

class Image extends Component {
  render() {
    // console.log("this.props.image", this.props.imageUrl);
    const { imageUrl } = this.props;
    return (
      <div>
        <a href={imageUrl} download={imageUrl}>
          <img className="image_style" src={imageUrl} />
        </a>
      </div>
    );
  }
}

export default Image;
