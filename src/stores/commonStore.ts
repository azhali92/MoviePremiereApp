import { create } from 'zustand';
import { Genre } from '../types/Genre';

interface AppState {
  searchText: string;
  setSearchText: (text: string) => void;
  genres: Genre[];
  setGenres: (genres: Genre[]) => void;
}

export const useCommonStore = create<AppState>(set => ({
  searchText: '',
  genres: [],
  setSearchText: text => set(() => ({ searchText: text })),
  setGenres: genres => set(() => ({ genres: genres })),
}));
