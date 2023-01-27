
// export const myAction = ( state ) => {

// }

export const setEntries = ( state, entries ) => {

    state.entries = [ ...state.entries, ...entries ]
    state.isLoading = false

}

export const updateEntry = ( state, entry ) => { // entry actualizada

    //state.entries => un arreglo...
    const idx = state.entries.map( e => e.id).indexOf( entry.id )
    state.entries[idx] = entry

    // state.entries = ... entry

}

export const addEntry = ( state, entry ) => {
    // state -> entries -> la nueva entrada debe ser la primera
    state.entries = [ entry, ...state.entries ]
}

export const deleteEntry = ( state, id ) => {

    state.entries = state.entries.filter( entry => entry.id !== id )
    
}
