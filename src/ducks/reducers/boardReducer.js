let intialState = {
  boards: []
}

const GET_ALLBOARDS = "GET_ALLBOARDS"

export function getAllBoards(allBoards) {
  return {
    type: GET_ALLBOARDS,
    payload: allBoards
  }
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALLBOARDS:
      return { ...state, boards: action.payload }
    default:
      return state
  }
}
