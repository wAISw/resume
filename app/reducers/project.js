import {
  SHOW_DETAIL
} from '../constants/Project'

const initialState = {};

export default function projectstate(state = initialState, action) {

  switch (action.type) {

    case SHOW_DETAIL:
      return {...state, project: action.payload.project};


    default:
      return state
  }
}
