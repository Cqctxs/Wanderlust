/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    colors: {
      or: "#ff6128",
      wh: "#f7f5f2",
      bla: "#252221",
      blu: "#2176ff",
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-vinson)"],
        offbit: ["var(--font-offbit)"]
      },
      dropShadow: {
        or: [
          "0 1px 3px rgba(235, 64, 52, 0.2)",
          "0 6px 12px rgba(235, 64, 52, 0.16)"
        ],
        wh: [
          "0 1px 3px rgba(238, 233, 227, 0.2)",
          "0 6px 12px rgba(238, 233, 227, 0.16)"
        ],
        bla: [ 
          "0 1px 3px rgba(41, 37, 36, 0.2)",
          "0 6px 12px rgba(41, 37, 36, 0.16)"
        ],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        home: {
          DEFAULT: "#ffaf1b",
          dark: "#cc6f0b",
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      textShadow: {
        'sm': '1px 1px 1px rgba(0, 0, 0, 0.5)',
        'DEFAULT': '2px 2px 2px rgba(0, 0, 0, 0.5)',
        'md': '3px 3px 3px rgba(0, 0, 0, 0.5)',
        'lg': '4px 4px 4px rgba(0, 0, 0, 0.5)',
        'xl': '5px 5px 5px rgba(0, 0, 0, 0.2)',
      },
      gradientColorStops: {
        'transparent': 'transparent',
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [

    require("tailwindcss-animate"),
    require('tailwindcss-highlights'),
    function({ addUtilities, e, theme }) {
      const textShadow = theme('textShadow');
      const textShadowUtilities = Object.keys(textShadow).map(key => {
        return {
          [`.${e(`text-shadow-${key}`)}`]: {
            textShadow: textShadow[key],
          },
        };
      });
      addUtilities(textShadowUtilities, ['responsive', 'hover']);
    },
    function({ addUtilities, e, theme }) {
      addUtilities(
        {
          '.bg-radial-gradient': {
            backgroundImage: 'radial-gradient(circle, var(--tw-gradient-stops))',
          },
        },
        ['responsive', 'hover']
      );
    },
  ],
};
