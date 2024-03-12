import {configureStore } from '@reduxjs/toolkit';
import CurrencyReducer from './CurrencyReducer';

export default configureStore({
  reducer: {
  currency:CurrencyReducer,
}
});
