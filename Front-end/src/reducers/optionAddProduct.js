import {ActionTypes} from '../core/constants';

const initialState = [];

export default function(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.OPTIONADDPRODUCT_SET:
      return setTracks(state, action);
  }

  return state;
}

function setTracks(state, action) {
  const {option} = action;
  return [...state, ...option];
}