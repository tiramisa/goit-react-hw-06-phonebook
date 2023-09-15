import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 'id-1', name: 'Rosie Simpson', phone: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', phone: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', phone: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', phone: '227-91-26' },
];

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact(state, action) {
      console.log('action', action);
    },
    deleteContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});
// Генераторы экшенов
export const { addContact, deleteContact } = contactSlice.actions;
// Редюсер слайса
export const contactReducer = contactSlice.reducer;
