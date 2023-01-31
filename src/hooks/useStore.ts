import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface UserStore {
  user: any;
  registered: boolean;
  isLogged: boolean;
  setUser: (user: any) => void;
  setLogged: (status: boolean) => void;
  setRegistered: (status: boolean) => void;
}

const useUserStore = create(
  persist<UserStore>(
    (set, get) => ({
      user: {},
      registered: false,
      isLogged: false,
      setUser: (user) => set((_state) => ({ user })),
      setLogged: (status) => set((state) => ({ isLogged: status })),
      setRegistered: (status) => set((state) => ({ registered: status })),
    }),
    {
      name: 'user',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

export default useUserStore;
