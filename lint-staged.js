module.exports = {
  "*.{js,jsx,ts,tsx}": [
    "eslint --max-warnings=0",
    "react-scripts test --bail --watchAll=false --findRelatedTests --passWithNoTests",
    () => "tsc-files --noEmit",
  ],
  "*.{js,jsx,ts,tsx,css,js}": ["prettier --write"],
};
