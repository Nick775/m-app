import { TrackAction, TrackActionsTypes, TrackState } from '../../types/track';

const initialState: TrackState = {
  tracks: [],
  error: '',
};
export const trackReducer = (
  state = initialState,
  action: TrackAction
): TrackState => {
  switch (action.type) {
    case TrackActionsTypes.FETCH_TRACKS_ERROR:
      return { ...state, error: action.payload };
    case TrackActionsTypes.FETCH_TRACKS:
      return { error: '', tracks: action.payload };
    default:
      return state;
  }
};
