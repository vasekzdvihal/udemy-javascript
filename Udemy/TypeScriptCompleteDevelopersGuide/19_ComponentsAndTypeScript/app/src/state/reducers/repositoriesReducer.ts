interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

interface SearchRepositoriesAction {
  type: 'search_repositories';
}
interface SearchRepositoriesSuccessAction {
  type: 'search_repositories_success';
  payload: string[];
}
interface SearchRepositoriesErrorAction {
  type: 'search_repositories_error';
  payload: string;
}

const reducer = (
  state: RepositoriesState,
  action: SearchRepositoriesAction | SearchRepositoriesSuccessAction | SearchRepositoriesErrorAction
): RepositoriesState => {

  // if (action.type === 'search_repositories_success') is type guard and inside this if we know for 100% that
  // we're using SearchRepositoriesSuccessAction interface. Same think happened with switch-case, behave like type guard
  // so we know (and TS knows) that inside payload is either string[] or string;

  switch (action.type) {
    case 'search_repositories':
      return { loading: true, error: null, data: [] }
    case 'search_repositories_success':
      return { loading: false, error: null, data: action.payload }
    case 'search_repositories_error':
      return { loading: false, error: action.payload, data: [] }
    default:
      return state;
  }
};

export default reducer;
