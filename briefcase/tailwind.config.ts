import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: " #F4741c",
        darkBg: "121424"
      },

      backgroundImage: {
        "gradient-cover": 
          "linear-gradiente(90.21deg, rgba(70,54,124,0.5)-5,91%,rgba(74,47,189,0.5)111.58%)",
}
      
    },
  },
  plugins: [],
};
export default config;
