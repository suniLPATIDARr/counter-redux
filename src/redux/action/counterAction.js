import {ActionTypes} from '../constants/action.types';
import {services} from '../services/services'

const requestDispatch= (amount)=> {
    return {
        type: ActionTypes.REQUEST,
        status: 'requesting'
    }
}
const successDispatch =(amount) =>{
  return {
    type: ActionTypes.SUCCESS,
    status: 'success',
    count:amount,
  }
}
const failureSispatch =(amount) =>{
  return {
    type: ActionTypes.FAILURE,
    status: 'failed',
  }
}

export function getData(dat) {
  return (dispatch) => {
  dispatch(requestDispatch())
    services.get('https://interview-8e4c5-default-rtdb.firebaseio.com/front-end/sunil.json')
    .then(function (response) {
      const dat = response.data || 1
    dispatch(successDispatch(dat))
    }).catch((err)=>{
      dispatch(failureSispatch(err))
    })
  }
  }

  export function updateData(dat) {
    return (dispatch) => {
    dispatch(requestDispatch())
    const payload={sunil: dat}
      services.put('https://interview-8e4c5-default-rtdb.firebaseio.com/front-end.json',payload)
      .then(function (response) {
      dispatch(getData());
      }).catch((err)=>{
        dispatch(failureSispatch(err))
      })
    }
    }
