import { Dispatch } from 'react';
import { TrackAction, TrackActionsTypes } from '../../types/track';
import axios from 'axios';

export const fetchTracks = () => {
  return async (dispatch: Dispatch<TrackAction>) => {
    try {
      const responce = await axios.get('http://localhost:5000/tracks');
      dispatch({
        type: TrackActionsTypes.FETCH_TRACKS,
        payload: responce.data,
      });
    } catch (e) {
      dispatch({
        type: TrackActionsTypes.FETCH_TRACKS_ERROR,
        payload: 'Произошла ошибка при загрузке',
      });
    }
  };
};
