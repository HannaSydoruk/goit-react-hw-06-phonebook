const initialState = {
    contacts: JSON.parse(localStorage.getItem('contacts')) ?? [],
    filter: ''
}

export const contactsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'contacts/addContact': {
            return { ...state, contacts: [...state.contacts, action.payload] };
        }
        case 'contacts/removeContact': {
            return {
                ...state, contacts: state.contacts.filter(contact => contact.id !== action.payload),
            }
        }
        case 'contacts/setFilter': {
            return { ...state, filter: action.payload };
        }
        default:

            return state;
    }
}

export const addContact = payload => {
    return {
        type: 'contacts/addContact',
        payload,
    }
}

export const removeContact = payload => {
    return {
        type: 'contacts/removeContact',
        payload,
    }
}

export const setFilter = payload => {
    return {
        type: 'contacts/setFilter',
        payload,
    }
}