import types from '../types/user';

const registrationReducer = (state = {}, action) => {
  switch (action.type) {
    case types.REGISTER_REQUEST:
      return { registering: true };
    case types.REGISTER_SUCCESS:
      return {};
    case types.REGISTER_FAILURE:
      return {};
    default:
      return state
  }
}

export default registrationReducer