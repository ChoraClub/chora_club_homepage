/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "2xm": "850px", 
        "xs": "475px", 
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",

        "home-info-texture": "url('../assets/home/bg-info.png')",
        "home-working-texture": "url('../assets/home/bg-working.png')",
        "home-working-texture2": "url('../assets/home/bg-working2.png')",
        "home-working-texture3": "url('../assets/home/bg-working3.png')",
      },
      colors: {
        "light-navy-blue": "#004DFF",
      },
      fontFamily: {
        quanty: ["var(--font-quanty)"],
        poppins: ["var(--font-poppins)"],
      },
    },
  },
  plugins: [],
};
