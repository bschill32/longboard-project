import React, { Component } from "react"

class EachBoard extends Component {
  render() {
    let { name, phrase, speed, shape, range, image, price } = this.props.board
    return (
      <div>
        <img src={image} alt="" />
        <span>
          <h1>{name}</h1>
          <h1>{phrase}</h1>
          <h1>{speed}</h1>
          <h1>{shape}</h1>
          <h1>{range}</h1>
          <h1>${price}</h1>
        </span>
      </div>
    )
  }
}

export default EachBoard
