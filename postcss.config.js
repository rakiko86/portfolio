module.exports = {
    plugins: [
      require("autoprefixer"), // Ajoute automatiquement les préfixes pour la compatibilité des navigateurs
      require("cssnano")({ preset: "default" }) // Minifie le CSS en production
    ]
  };