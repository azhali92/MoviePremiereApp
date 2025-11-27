import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Movie } from '../types/Movie';

interface UserPrefState {
  watchlist: Movie[];
  addMovieToWatchlist: (movie: Movie) => void;
  removeMovieFromWatchlist: (id: number) => void;
}

export const useUserPrefStore = create<UserPrefState>()(
  persist(
    (set, get) => ({
      watchlist: [],
      addMovieToWatchlist: movie =>
        set({ watchlist: [...get().watchlist, movie] }),
      removeMovieFromWatchlist: id =>
        set({ watchlist: get().watchlist.filter(m => m.id !== id) }),
    }),
    {
      name: 'mytheresa-storage', // storage key
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
