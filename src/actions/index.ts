import actions from './actions'

//TODO: define interfaces for actions

export const searchQuery: any = (searchText: string) => ({
    type: actions.SET_SEARCH_QUERY,
    value: searchText,    
})

