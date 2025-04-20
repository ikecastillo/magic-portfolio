const baseURL = "ikecastillo.com";

const routes = {
  "/": true,
  "/about": true,
  "/work": true,
  "/blog": false,
  "/gallery": false,
};

// Enable password protection on selected routes
// Set password in the .env file, refer to .env.example
const protectedRoutes = {
  // No protected routes by default
};

const style = {
  theme: "dark",
  neutral: "slate",
  brand: "emerald",
  accent: "cyan",
  solid: "contrast",
  solidStyle: "flat",
  border: "conservative",
  surface: "translucent",
  transition: "micro",
};

const effects = {
  mask: {
    cursor: false,
    x: 0,
    y: 0,
    radius: 75,
  },
  gradient: {
    display: true,
    x: 50,
    y: 0,
    width: 100,
    height: 100,
    tilt: 0,
    colorStart: "brand-background-strong",
    colorEnd: "static-transparent",
    opacity: 20,
  },
  dots: {
    display: false,
    size: 2,
    color: "brand-on-background-weak",
    opacity: 20,
  },
  lines: {
    display: false,
    color: "neutral-alpha-weak",
    opacity: 100,
  },
  grid: {
    display: false,
    color: "neutral-alpha-weak",
    opacity: 100,
  },
};

const display = {
  location: false,
  time: false,
};

export { routes, protectedRoutes, effects, style, display, baseURL };
