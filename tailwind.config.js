module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx,css}",
    "./src/components/**/*.{html,js,ts,jsx,tsx,css}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      blue: "#1fb6ff",
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
      black: "#000000",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      // backgroundImage: {
      //   Photo: 'url(".assets/Photo.png")',
      // },
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
        1: "8px",
        2: "12px",
        3: "16px",
        4: "24px",
        5: "32px",
        6: "48px",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
};
