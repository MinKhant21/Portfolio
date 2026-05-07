import { createContext, useReducer, useEffect } from "react";

let ThemeContext = createContext();

const ThemeReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_THEME":
      return { ...state, theme: action.payload };
    default:
      return state;
  }
};

const ThemeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ThemeReducer, {
    theme: localStorage.getItem("theme") || "dark",
  });

  const ChangeTheme = (theme) => {
    dispatch({ type: "CHANGE_THEME", payload: theme });
  };

  useEffect(() => {
    localStorage.setItem("theme", state.theme);
    if (state.theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [state.theme]);

  return (
    <ThemeContext.Provider value={{ ...state, ChangeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeContextProvider };


