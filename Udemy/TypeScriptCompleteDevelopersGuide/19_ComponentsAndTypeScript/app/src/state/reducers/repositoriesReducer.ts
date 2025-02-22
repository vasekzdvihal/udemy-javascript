import { ActionType } from "../action-types";
import { Action } from "../actions";

interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const reducer = (state: RepositoriesState, action: Action): RepositoriesState => {

  // if (action.type === 'search_repositories_success') is type guard and inside this if we know for 100% that
  // we're using SearchRepositoriesSuccessAction interface. Same think happened with switch-case, behave like type guard
  // so we know (and TS knows) that inside payload is either string[] or string;

  switch (action.type) {
    case ActionType.SEARCH_REPOSITORIES:
      return { loading: true, error: null, data: [] }
    case ActionType.SEARCH_REPOSITORIES_SUCCESS:
      return { loading: false, error: null, data: action.payload }
    case ActionType.SEARCH_REPOSITORIES_ERROR:
      return { loading: false, error: action.payload, data: [] }
    default:
      return state;
  }
};

export default reducer;
