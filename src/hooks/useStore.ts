import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Account {
  name: string;
  lastName: string;
  email: string;
  password: string;
}

interface UserStore {
  user: Account | undefined;
  accounts: Account[];
  isLogged: boolean;
  setUser: (account: Account) => void;
  setAccounts: (account: Account) => void;
  setLogged: (status: boolean) => void;
}

const useUserStore = create(
  persist<UserStore>(
    (set) => ({
      user: undefined,
      accounts: [],
      isLogged: false,
      setUser: (user) => set(() => ({ user })),
      setAccounts: (account) =>
        set((state) => ({ accounts: [...state.accounts, account] })),
      setLogged: (status) => set(() => ({ isLogged: status })),
    }),
    {
      name: 'user',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

export default useUserStore;
