import React from "react"
import { connect } from "react-redux"

function AllBoards() {
  return (
    <div>
      <h1>Longboards</h1>
      <div>{allBoards}</div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    allBoards: state.allBoards
  }
}

export default connect(mapStateToProps)(AllBoards)
