/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        gray: {
          100: "#EBF2F1",
          200: "#DFE6E4",
          300: "#C6CCCB",
          400: "#A1A6A6",
          500: "#636666",
          600: "#141414",
        },
        blue: {
          100: "#838DD1",
          200: "#99A5F2",
          300: "#919CE6",
          400: "#6871A6",
          500: "#404566",
        },
        green: {
          100: "#52D1A5",
          200: "#5EF2BF",
          300: "#5AE6B5",
          400: "#286650",
          500: "#41A682",
        },
        red: {
          100: "#D65663",
          200: "#F2616F",
          300: "#E65C6A",
          400: "#66292F",
          500: "#A6424C",
        },
      },
    },
  },
  plugins: [],
};
