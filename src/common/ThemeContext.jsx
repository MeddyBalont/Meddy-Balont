import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

//Sauvegarde dans le localstorage le theme light ou dark
export const ThemeProvider = ({ children }) => {
     const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

     // Importer les données sauvegarder du localStorage pour l'implementer dans le body
     useEffect(() => {
          document.body.setAttribute("data-theme", theme);
          localStorage.setItem("theme", theme);
     }, [theme]);

     //Méthode pour changer le theme en dark ou light
     const toggleTheme = () => {
          setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
     };

     return (
          <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
     );
};
