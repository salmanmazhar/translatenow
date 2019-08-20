import ACTIONS from '../actions/actions';
import { searchQuery } from '../actions';

//TODO define interface for actions

const search: any = (state: Array<any> = [{ searchQuery: 'Search Something' }], action: any) => {
    switch (action.type) {
        case ACTIONS.SET_SEARCH_QUERY:
            return [
                ...state,
                { searchQuery: action.value }
            ]
        default:
        return state
    }
}

export default search;
