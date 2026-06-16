/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        "courier-prime-regular": ['"Courier Prime"', "monospace"],
        "courier-prime-bold": ['"Courier Prime"', "monospace"],
        "courier-prime-regular-italic": ['"Courier Prime"', "monospace"],
        "courier-prime-bold-italic": ['"Courier Prime"', "monospace"],
        expletus: ['"Expletus Sans"', "sans-serif"],
        nunito: ['"Nunito Sans"', "sans-serif"],
        josefin: ['"Josefin Sans"', "sans-serif"],
        encode: ['"Encode Sans"', "sans-serif"],
        "pt-caption": ['"PT Sans Caption"', "sans-serif"],
        poppins: ['"Poppins"', "sans-serif"],
        "m-plus-2": ['"M PLUS 2"', "sans-serif"],
        ubuntu: ['"Ubuntu"', "sans-serif"],
        kodchasan: ['"Kodchasan"', "sans-serif"],
        // Premium
        "peignior-sans-serif": ['"Peignior Sans Serif"', "sans-serif"],
        "north-culture": ['"North Culture"', "sans-serif"],
        "compel-geometric": ['"Compel Geometric"', "sans-serif"],
        "fibon-sans": ['"Fibon Sans"', "sans-serif"],
        kanakira: ['"Kanakira"', "sans-serif"],
        gemsbuck: ['"Gemsbuck"', "sans-serif"],
        "theater-bold-sans-serif": ['"Theater Bold Sans Serif"', "sans-serif"],
        tulisans: ['"Tulisans"', "sans-serif"],
        "fresty-script": ['"Fresty Script"', "cursive"],
        aboreto: ['"Aboreto"', "system-ui"],
        "bruno-ace-sc": ['"Bruno Ace SC"', "sans-serif"],
        "castoro-titling": ['"Castoro Titling"', "serif"],
        "julius-sans-one": ['"Julius Sans One"', "sans-serif"],
        michroma: ['"Michroma"', "sans-serif"],
        "nerko-one": ['"Nerko One"', "cursive"],
        "dm-sans": ['"DM Sans"', "sans-serif"],
        montserrat: ['"Montserrat"', "sans-serif"],
        "league-spartan": ['"League Spartan"', "sans-serif"],
        "bodoni-moda-sc": ['"Bodoni Moda SC"', "serif"],
        "pt-mono": ['"PT Mono"', "monospace"],
      },

      colors: {
        whatsappColor: "#25D366",
        fbColor: "#4267B2",
        twitterColor: "#1DA1F2",
        microsoftOrange: "#F25022",
        microsoftGreen: "#7FBA00",
        microsoftBlue: "#00A4EF",
        microsoftYellow: "#FFB900",
        microsoftGray: "#737373",
        hpColor: "#0096D6",
        goldenYellow: "#ffdf00",

        b: "#00a4fae",
        c1: "#01377d", // Yale Blue
        c2: "#009dd1", // Blue Green
        c3: "#97e7f5", // Non Photo Blue
        c4: "#7ed348", // SGBUS Green
        c5: "#26b170", // Jade
        c6: "#001840", // Oxford Blue
        c7: "#102a71", // Royal Blue (Traditional)
        c8: "#f5c400", // Jonquil
        c9: "#ffdc5f", // Mustard
        c10: "#fffdf0", // Ivory
        c11: "#395a7f", // YInMn Blue
        c12: "#6e9fc1", // Air Superiority Blue
        c13: "#a3cae9", // Uranian Blue
        c14: "#e9ecee", // Anti-Flash White
        c15: "#acacac", // Silver
        c16: "#560bad", // Chrysler Blue
        c17: "#7209b7", // Grape
        c18: "#b5179e", // Fandango
        c19: "#4895ef", // Chefchaouen Blue
        c20: "#3f37c9", // Palatinate Blue
        c21: "#fd7979", // Light Red
        c22: "#ffa77f", // Atomic Tangerine
        c23: "#ffcc8f", // Sunset
        c24: "#7dc9ff", // Maya Blue
        c25: "#68a8f1", // Ruddy Blue
        c26: "#016180", // Lapis Lazuli
        c27: "#4a8cb0", // Air Force Blue
        c28: "#f8ede5", // Linen
        c29: "#8c5c47", // Raw Umber
        c30: "#4c2c17", // Café Noir
        c31: "#ed0101", // Off Red
        c32: "#a70107", // Turkey Red
        c33: "#ffc2d9", // Orchid Pink
        c34: "#ff99be", // Amaranth Pink
        c35: "#4e8bc4", // Silver Lake Blue
        c36: "#96cbfc", // Light Sky Blue
        c37: "#c2e1fc", // Uranian Blue
        c38: "#ffc2d9", // Orchid Pink
        c39: "#f6f7f0", // Baby Powder
        c40: "#bff4ff", // Non Photo Blue
        c41: "#b1e5ff", // Uranian Blue
        c42: "#a3d5ff", // Light Sky Blue
        c43: "#8dbee1", // Carolina Blue
        c44: "#00367b", // Yale Blue
        c45: "#006ca5", // Bice Blue
        c46: "#0496c7", // Blue Green
        c47: "#04bade", // Aero
        c48: "#55e2e9", // Electric Blue
        c49: "#033047", // Prussian Blue
        c50: "#304c62", // Charcoal
        c51: "#5c677d", // Payne's Gray
        c52: "#d9d9d9", // Platinum
        c53: "#f4f3ee", // Isabelline
        c54: "#6a5acd", // Slate Blue
        c55: "#4f478c", // Ultra Violet
        c56: "#34344a", // Space Cadet
        c57: "#485872", // YInMn Blue
        c58: "#5b7c99", // Air Force Blue

        // Premiun taken from
        // https://hookagency.com/blog/website-color-schemes-2020/

        // Global Color Schemes
        "brightly-orange": "#ff1e00",
        "dimly-blue": "#e8f9fd",
        "alert-green": "#59ce8f",

        // Cuberto's Color Schemes
        "brightly-orange-2": "#f43a09",
        "grandpa-orange": "#ffb766",
        "grey-blue-green": "#c2edda",
        "live-green": "#68d388",

        // Juliene Renvoy's Color Schemes
        pinky: "#fbe3e8",
        "blue-greeny": "#5cbdb9",
        "teeny-greeny": "#ebf6f5",

        // 2020 Color Schemes
        "bright-green": "#beef00",
        "electric-red": "#ff0028",
        "deep-green": "#657a00",
        "power-blue": "#1400c6",

        // Tan, Purple, Yellow Color Schemes
        "background-tan": "#fceed1",
        "purple-y": "#7d3cff",
        "yellow-gloves": "#f2d53c",
        redhead: "#c80e13",

        // Deep Blue and Tan Color Palette
        "sand-tan": "#e1b382",
        "sand-tan-shadow": "#c89666",
        "night-blue": "#2d545e",
        "night-blue-shadow": "#12343b",

        // Tan, Pink, and Red Color Scheme
        "ragin-beige": "#fff5d7",
        "coral-pink": "#ff5e6c",
        "sleuthe-yellow": "#feb300",
        "pink-leaf": "#ffaaab",

        // Pink, Green, and Purple Color Scheme
        "grassy-green": "#9bc400",
        "purple-mountains-majesty": "#8076a3",
        "misty-mountain-pink": "#f9c5bd",
        "factory-stone-purple": "#7c677f",

        // Bright and Colorful Scheme for 2020
        "green-treeline": "#478559",
        "purple-baseline": "#161748",
        "pink-highlight": "#f95d9b",
        "bluewater-lowlight": "#39a0ca",

        // Yellow, Red/Pink/Orange Bright Scheme
        "yellow-background": "#ffde22",
        "pink-red-circle": "#ff414e",
        "orange-circle": "#ff8928",
        "white-layover": "#ffffff",

        // 2019 Website Color Schemes
        "mountain-shadow-blue": "#101357",
        "old-makeup-pink": "#fea49f",
        "goldenrod-yellow": "#fbaf08",
        "bluebell-light-blue": "#00a0a0",
        "bold-2019-green": "#007f4f",

        "lightning-blue": "#51d0de",
        "lightning-purple": "#bf4aa8",
        "brain-wrinkle-white": "#d9d9d9",

        "blue-popsicle": "#0f2862",
        redline: "#9e363a",
        "purple-shadow": "#091f36",
        "grey-blue-leaf": "#4f5f76",

        blueberry: "#6b7a8f",
        apricot: "#f7882f",
        citrus: "#f7c331",
        "apple-core": "#dcc7aa",

        "left-blue": "#1561ad",
        "right-blue-muted": "#1c77ac",
        "blue-green": "#1dbab4",
        "red-orange": "#fc5226",

        "redder-than-you": "#ff3a22",
        "goldi-lots": "#c7af6b",
        "darker-gold": "#a4893d",
        "silver-tongue": "#628078",

        "barely-green": "#acb7ae",
        "the-brown-shirts": "#82716e",
        "tan-blonde": "#e4decd",
        blondey: "#c2b490",

        "green-mountain": "#3d7c47",
        "blue-mountain": "#09868b",
        "light-blue-backdrop": "#76c1d4",
        "barely-gray-edge": "#f7f7f7",

        "grey-silver": "#bccbde",
        "lightsaber-blue": "#c2dde6",
        purple: "#431c5d",
        orange: "#e05915",
        yellowbrite: "#cdd422",

        "painful-red": "#eb1736",
        "35-years-old-purple": "#5252d4",
        "lighter-purple-on-gradient": "#7575dd",
        "shadow-purple-red": "#781a44",

        green: "#8bf0ba",
        "ironic-blues": "#0e0fed",
        "blue-underling": "#94f0f1",
        "pinky-ring": "#f2b1d8",
        "egg-yellows": "#ffdc6a",

        "light-blue-green": "#6ed3cf",
        "soft-purple": "#9068be",
        "tasty-eighties-grey": "#e1e8f0",
        "rich-red": "#e62739",

        "french-laundry-blue": "#3a4660",
        "comfortably-tan": "#c9af98",
        "peachy-kreme": "#ed8a63",
        "brown-bonnet": "#845007",

        "are-ya-yellow": "#feda6a",
        "silver-fox": "#d4d4dc",
        "deep-matte-grey": "#393f4d",
        "dark-slate": "#1d1e22",

        "simpler-lime-green": "#7dce94",
        "scuffed-dark-grey": "#3d3d3f",
        "vanilla-grey": "#f6f5f3",
        "white-ish": "#f9f8fd",

        "rose-gold": "#bd8c7d",
        "soft-gold": "#d1bfa7",
        silver: "#8e8e90",
        onyx: "#49494b",

        "yellow-hand": "#fbf579",
        "lonely-blue": "#005995",
        "stationary-pink-red": "#fa625f",
        purpled: "#600473",

        "red-overlaid": "#cd5554",
        "photographed-brown": "#91684a",
        "algae-green": "#00c07f",
        "heritage-blue": "#313d4b",

        "stark-contrast-slate": "#262626",
        "stark-contrast-secondhand-grey": "#3f3f3f",
        "stark-contrast-whitish": "#f5f5f5",
        "stark-contrast-light-grey": "#dcdcdc",

        black: "#000000",
        white: "#ffffff",

        "golden-wheat": "#a39274",
        "soft-wheat": "#dfd8c8",
        "deep-gray": "#252523",

        mint: "#4cb69f",
        "touch-of-grey": "#f5f5f5",
        "deep-purple": "#201d3a",

        "dark-blue-purple": "#111c30",
        "dark-pink-makeup": "#9a4d55",
        "comfortable-couch-beige": "#80756b",

        "tiny-sweet-blue": "#b5e9e9",
        "creamy-light-tan": "#fef6dd",
        "pinkie-pie": "#ffe1d0",
        "yellow-horse": "#fff1b5",
        "green-thumb": "#dcf3d0",

        "deep-purple": "#1d1145",
        "trapper-keeper-green": "#0db4b9",
        "pink-boot": "#f2a1a1",
        "modern-pink-backpack": "#e76d89",

        "red-branches": "#de493c",
        "green-trees": "#608074",
        "blue-green-mist": "#daefd9",

        "deep-rusted-red": "#c1432e",
        "silver-head-dress": "#4b6777",
        "rusted-gold": "#ce9e62",
        "black-for-contrast": "#2c2c2c",
      },

      fontWeight: {
        thin: 100,
        extralight: 200,
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
      },
    },
  },
  plugins: [],
};
