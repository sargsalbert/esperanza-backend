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

  "strapi::cors",

  {
    name: "strapi::cors",
    config: {
      origin: ["http://localhost:3000", "https://esperanza-five.vercel.app"], // include frontend origins
      methods: ["GET", "POST", "PUT", "DELETE"],
      headers: "*",
    },
  },

  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
