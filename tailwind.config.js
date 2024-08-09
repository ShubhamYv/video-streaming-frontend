import flowbite from "flowbite-react/tailwind";

// Export the Tailwind CSS configuration
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content()
  ],
  theme: {
    extend: {},
  },
  plugins: [
    flowbite.plugin()
  ],
  darkMode: "class"
}
