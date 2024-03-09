const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sky: {
          "300": "#83B7FC",
        },
        gray: {
          "100": "#EEEFF2",
          "200": "#1e1e1e",
          "300": "rgba(0, 0, 0, 0.75)",
        },

        primary: {
          "100": "#B4D4FD",
          "200": "#83B7FC",
          "300": "#519AFA",
          "400": "#1F7DF9",
          "500": "#0664E0",
          "600": "#054EAE",
          "700": "#03377C",
          "800": "#02214B",
          "900": "#010B19",
        },
        sidebar: {
          bg: "#fff",
          text: "#2C2C2C",
          "hover-text": "#0664E0",
          "400": "#1F7DF9",
          "500": "#0664E0",
        },
        home: {
          "100": "#fff",
          "200": "#83B7FC",
          "300": "#519AFA",
          "400": "#1F7DF9",
          "500": "#0664E0",
        },
        btn: {
          "100": "#FFF",
          "200": "#999999",
          "300": "#00000080",
          "400": "#464343",
          "500": "#262626",
          bg: "#FFFFFF",
          text: "#3950C6",
          "hover-text": "#FFFFFF",
          hover: "#0664E0",
          border: "#0664E0",
        },
        input: {
          bg: "#FFFFFF",
          text: "#565656",
          border: "#B4D4FD",
          "400": "#C7C5C5",
          "500": "#0664E0",
          "600": "#054EAE",
          "700": "#03377C",
          "800": "#02214B",
          "900": "#010B19",
        },
        text: {
          "100": "#FFFFFF",
        },
        error: {
          "100": "",
          "200": "",
          "300": "#FF3B30",
          "400": "",
        },
        success: {
          "100": "",
          "200": "",
          "300": "#34C759",
          "400": "",
        },
        bodyBackground: "#EEEFF2",
        article: {
          border: "#a4b0eb",
          menuColor: "#9b9091",
          backGround : "#f1f2f4"
        },
        white: "#fff",
        gainsboro: "#d9d9d9",
        black: "#000",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
        montserrat: "Montserrat",
      },
      borderRadius: {
        "81xl": "100px",
      },
    },
    fontSize: {
      base: "16px",
      xl: "0.875rem",
      "3xl": "1.25rem",
      "5xl": "24px",
      xs: "0.75rem",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
};
export default config;
