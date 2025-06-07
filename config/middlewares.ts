export default [
  "strapi::logger",
  "strapi::errors",
  "strapi::security",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",

            "*.fra1.digitaloceanspaces.com",
            "fra1.digitaloceanspaces.com",
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",

            "*.fra1.digitaloceanspaces.com",
            "fra1.digitaloceanspaces.com",
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },

  // {
  //   name: "strapi::cors",
  //   config: {
  //     origin: [
  //       "http://localhost:3000",
  //       "https://167.172.102.131:3000",
  //       "https://167.172.102.131",
  //       "https://esperanza-five.vercel.app",
  //     ], // include frontend origins
  //     credentials: true,

  //     methods: ["GET", "POST", "PUT", "DELETE"],
  //     headers: ["Content-Type", "Authorization"],
  //   },
  // },

  {
    name: "strapi::cors",
    config: {
      origin: [
        "https://esperanza-five.vercel.app",
        "https://esperanza-five.vercel.app/en",
        "http://localhost:3000",
        "https://esperanza-app-a6wlj.ondigitalocean.app",
      ], // update with your real frontend domain
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
      headers: "*",
      credentials: true,
    },
  },

  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
