import React from "react";
import "../../../stylesheet.css";

export default class PetImage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <img src={this.props.image_url} className="pet-image" />;
  }
}
