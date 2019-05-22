import React, { Component } from "react";
import { Header } from "semantic-ui-react";

import './imagelist.css'
import Image from "../Images";

class ImageList extends Component {
  state = {
    images: this.props.images
  };

  componentDidMount() {}

  componentWillReceiveProps(nextProps) {
    // console.log("nextProps", nextProps);
    // this.renderImage(nextProps.images);
    this.setState(
      {
        images: nextProps.images
      },
      () => this.renderImage()
    );
  }

  renderImage = () => {
    const imageTemplate = [];
    const { images } = this.state;
    // console.log("loaded image", images);
    images.map((image, i) =>
      imageTemplate.push(<Image key={i} imageUrl={image.url} />)
    );
    return imageTemplate;
  };

  render() {
    return (
      <div>
        <Header as="h1">Images</Header>
        <div className="images_area">{this.renderImage()}</div>
      </div>
    );
  }
}

export default ImageList;
