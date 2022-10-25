import { createContext } from "react";
const MenuContext = createContext({
  menuContext: 0,
  setMenuContext: () => {},
});

export default MenuContext;
