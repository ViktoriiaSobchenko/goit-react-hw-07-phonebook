import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};
const extraOperations = [fetchContacts, addContact, deleteContact];
const getOperations = type => extraOperations.map(operation => operation[type]);
const fetchContactsSuccessReducer = (state, action) => {
  state.items = action.payload;
};
const addContactSuccessReducer = (state, action) => {
  state.items.push(action.payload);
};
const deleteContactSuccessReducer = (state, action) => {
  const index = state.items.findIndex(
    contact => contact.id === action.payload.id
  );
  state.items.splice(index, 1);
};
const pendingReducer = state => {
  state.isLoading = true;
};
const rejectedReducer = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const fulfilledReducer = (state, action) => {
  state.isLoading = false;
  state.error = null;
};

const contactsSlice = createSlice({
  name: 'contact',
  initialState: contactsInitialState,

  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, fetchContactsSuccessReducer)
      .addCase(addContact.fulfilled, addContactSuccessReducer)
      .addCase(deleteContact.fulfilled, deleteContactSuccessReducer)
      .addMatcher(isAnyOf(...getOperations('pending')), pendingReducer)
      .addMatcher(isAnyOf(...getOperations('rejected')), rejectedReducer)
      .addMatcher(isAnyOf(...getOperations('fulfilled')), fulfilledReducer),
});

export const contactsReducer = contactsSlice.reducer;
