/*eslint-disable*/
import {
  SHOW_DETAIL
} from '../constants/Project'


export function showDetail(payload) {
  return (dispatch) => {
    dispatch({
      type: SHOW_DETAIL,
      payload: Object.assign({}, payload)
    })
  }
}


/*eslint-enable*/
