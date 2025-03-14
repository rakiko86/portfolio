import React, { useState, useEffect } from "react";
import Brightness2OutlinedIcon from "@mui/icons-material/Brightness2Outlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import { IconButton } from "@mui/material";
import "../styles/pages/index.scss";

const DarkMode = () => {
  const lightTheme = "light";
  const darkTheme = "dark";

  // Récupérer le thème enregistré ou par défaut (light)
  const storedTheme = localStorage.getItem("theme") || lightTheme;
  const [themeMode, setThemeMode] = useState(storedTheme);

  // Appliquer le thème au chargement
  useEffect(() => {
    document.body.classList.remove(lightTheme, darkTheme);
    document.body.classList.add(themeMode);
    localStorage.setItem("theme", themeMode);
  }, [themeMode]); // Exécute cette fonction lorsque themeMode change

  // Basculer le thème
  const switchTheme = () => {
    setThemeMode((prevTheme) =>
      prevTheme === darkTheme ? lightTheme : darkTheme
    );
  };

  return (
    <div>
      <IconButton
        className="dark"
        onClick={switchTheme}
        aria-label={
          themeMode === darkTheme
            ? "Activer le mode clair"
            : "Activer le mode sombre"
        }
        title={themeMode === darkTheme ? "Mode clair" : "Mode sombre"}
      >
        {themeMode === darkTheme ? (
          <WbSunnyOutlinedIcon />
        ) : (
          <Brightness2OutlinedIcon />
        )}
      </IconButton>
    </div>
  );
};

export default DarkMode;
