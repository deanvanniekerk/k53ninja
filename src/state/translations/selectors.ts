import { Translations } from '@/data';
import { RootState } from '@/state/rootReducer';
import { createSelector } from 'reselect';
import { TranslationsState } from './reducer';

const rootSelector = (state: RootState): TranslationsState => state.translations;

export const translationsSelector: (state: RootState) => Translations = createSelector(
  rootSelector,
  (root) => root.translations,
);
