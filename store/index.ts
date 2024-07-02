import { create, StateCreator } from 'zustand';
import { createJSONStorage, persist, devtools, PersistOptions } from 'zustand/middleware';
import { ILoginTokenResponse } from '../types';


type Store = {
  authUser: ILoginTokenResponse | null;
  requestLoading: boolean;
  requestEmail: string | null;
  setAuthUser: (user: ILoginTokenResponse | null) => void;
  setRequestLoading: (isLoading: boolean) => void;
  setRequestEmail: (email: string | null) => void;
};

type MyPersist = (
  config: StateCreator<Store>,
  options: PersistOptions<Store>
) => StateCreator<Store>

// const useStore = create<Store>((set, get): Store => ({
//   authUser: null,
//   authToken: null,
//   requestLoading: false,
//   setAuthUser: (user) => set((state) => ({ ...state, authUser: user })),
//   setAuthToken: (token) => set({ authToken: token }),
//   setRequestLoading: (isLoading) => set((state) => ({ ...state, requestLoading: isLoading })),
//   }),
// );

const useStore = create<Store, []>(
  (persist as MyPersist)((set, get): Store => ({
  authUser: null,
  requestEmail: null,
  requestLoading: false,
  setAuthUser: (user) => set((state) => ({ ...state, authUser: user })),
  setRequestEmail: (email) => set((state) => ({ ...state, requestEmail: email })),
  setRequestLoading: (isLoading) => set((state) => ({ ...state, requestLoading: isLoading })),
  }),
  {
    name: 'authUserStore',
    storage: createJSONStorage(() => localStorage),
  },
  )
);

export default useStore;
