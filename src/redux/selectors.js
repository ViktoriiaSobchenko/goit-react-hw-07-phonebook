// import { createSelector } from '@reduxjs/toolkit';
export const selectContacts = state => state.contacts.items;
export const selectFilter = state => state.filter;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

// export const selectVisibleContacts = state => {
//   const normalizedFilter = selectFilter(state).toLowerCase();

//   return selectContacts(state).filter(contact => {
//     console.log(contact.name);
//     return contact.name.toLowerCase().includes(normalizedFilter);
//   });
// };
// export const selectVisibleContacts = createSelector(
//   [selectContacts, selectFilter],
//   (contacts, contactFilter) => {
//     // const normalisedFilter = contactFilter.toLowerCase();
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(contactFilter.toLowerCase())
//     );
//   }
// );
