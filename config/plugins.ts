export default ({ env }) => ({
  // email: {
  //   config: {
  //     provider: "strapi-provider-email-resend",
  //     providerOptions: {
  //       apiKey: env("SMTP_PASS"), // Required
  //     },
  //     settings: {
  //       defaultFrom: env("SMTP_USER"),
  //       defaultReplyTo: env("SMTP_USER"),
  //       host: env("SMTP_HOST"),
  //       port: env.int("SMTP_PORT"),
  //       auth: {
  //         user: env("SMTP_USER"),
  //         pass: env("SMTP_PASS"),
  //       },
  //     },
  //   },
  // },

  upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        credentials: {
          accessKeyId: env("SCALEWAY_ACCESS_KEY_ID"),
          secretAccessKey: env("SCALEWAY_ACCESS_SECRET"),
        },
        region: env("SCALEWAY_REGION"),
        endpoint: env("SCALEWAY_ENDPOINT"),
        params: {
          Bucket: env("SCALEWAY_BUCKET"),
        },
      },
    },
  },

  graphql: {
    config: {
      endpoint: "/graphql",
      shadowCRUD: true,
      playgroundAlways: true, // only for development
      depthLimit: 7,
      amountLimit: 100,
    },
  },
});
