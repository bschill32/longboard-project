import axios from "axios"

let initialState = {
  boards: []
}

const GET_BOARDS = "GET_BOARDS"

export function getAllBoards() {
  let boards = axios.get(`/api/boards`).then(res => {
    // console.log(res.data)
    return res.data
  })
  return {
    type: GET_BOARDS,
    payload: boards
  }
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_BOARDS + "_FULFILLED":
      return { ...state, boards: action.payload }
    default:
      return state
  }
}
