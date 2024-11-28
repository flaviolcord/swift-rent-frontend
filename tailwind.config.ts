import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        bgHeaderVeligo: '#25303b',
        blueVeligo: '#64B5F6',
        blueTextVeligo: '#0050AA',
      },
    },
  },
  plugins: [],
} satisfies Config;
