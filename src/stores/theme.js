import create from "zustand";

const sliceTheme = (set) => ({
    // dark mode
    darkMode: true,
    
    // action
    setDarkMode: () =>
        set((state) => ({
            darkMode: !state.darkMode
        }
        )),
});

// hooks
const useThemeStore = create(sliceTheme);

// selector
export const selectTheme = (state) => state.darkMode;
export const selectSetDarkMode = (state) => state.setDarkMode;

export default useThemeStore;