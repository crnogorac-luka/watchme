import { Movie } from '../../../models/Movie';
import { ActionType } from '../../action-types/index';

interface RequestMoviesAction {
  type: ActionType.REQUEST
}

interface SuccessMoviesAction {
  type: ActionType.SUCCESS,
  payload: Movie[]
}

interface FailureMoviesAction {
  type: ActionType.FAILURE,
  payload: string | null
}

export type MoviesAction = RequestMoviesAction | SuccessMoviesAction | FailureMoviesAction;



  