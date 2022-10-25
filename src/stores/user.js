import create from 'zustand';

const sliceUser = (set) => ({
    // dark mode
    userData: null,
    
    // action
    setUserData: (data) =>
        set((state) => ({
            ...state,
            userData: data
        }
        )),
});

const useUserStore = create(sliceUser);

export const selectUserData = (state) => state.userData;
export const selectsetUserData = (state) => state.setUserData;

// export
export default useUserStore;