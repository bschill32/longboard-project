import React, { Component } from "react"
import { connect } from "react-redux"

import EachBoard from "../EachBoard/EachBoard"
import { getAllBoards } from "./../../ducks/reducers/boardReducer"

class AllBoards extends Component {
  componentDidMount() {
    this.props.getAllBoards()
  }

  render() {
    // console.log("11111", this.props)
    let allBoards = this.props.allBoards.map((val, i, arr) => {
      return <EachBoard key={val.id} board={val} />
    })

    return (
      <div>
        <h1>Longboards</h1>
        <div>{allBoards}</div>
      </div>
    )
  }
}

function mapStateToProps(reduxStoreState) {
  return {
    allBoards: reduxStoreState.allBoards.boards
  }
}

export default connect(
  mapStateToProps,
  { getAllBoards }
)(AllBoards)
