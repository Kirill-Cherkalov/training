import { takeEvery } from 'redux-saga/effects';

const AUTHENTICATE_REQUEST = 'auth/AUTHENTICATE_REQUEST';
const AUTHENTICATE_SUCCESS = 'auth/AUTHENTICATE_SUCCESS';
const AUTHENTICATE_FAILURE = 'auth/AUTHENTICATE_FAILURE';

const initialState = {
  authenticated: false,
  user: {},
  error: '',
  loading: false,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case AUTHENTICATE_REQUEST:
      return { ...state, authenticated: false, loading: true };
    case AUTHENTICATE_SUCCESS:
      return {
        ...state,
        authenticated: true,
        user: action.payload,
        loading: false,
      };
    case AUTHENTICATE_FAILURE:
      return {
        ...state,
        authenticated: false,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}

// <<<ACTIONS>>>
export const authenticate = () => {};

// <<<WORKERS>>>
function* onAuthenction() {
  // try {

  // } catch () {

  // }
}

// <<<WATCHERS>>>
export function* watchLogout() {
  yield takeEvery(AUTHENTICATE_REQUEST, onAuthenction);
}
