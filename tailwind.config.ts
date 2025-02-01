const safelist = [
  { pattern: /(?<!\s)-(primary|lightblue|accent|turtle|lightGray|medGray)/ },
  /(bottom|top|left|right|h|max-h|min-h|w|z|origin-x-|-origin-x-|translate-x|-translate-x|border)-\b[0-9]{1,3}\b/,
];

/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist
};
