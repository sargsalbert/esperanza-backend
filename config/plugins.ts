export default ({ env }: { env: (key: string) => string }) => {
  console.log("DigitalOcean Config:", {
    key: env("DO_SPACE_ACCESS_KEY"),
    secret: env("DO_SPACE_SECRET_KEY"),
    endpoint: env("DO_SPACE_ENDPOINT"),
    space: env("DO_SPACE_BUCKET"),
  });

  return {
    upload: {
      config: {
        provider: "strapi-provider-upload-do",
        providerOptions: {
          accessKeyId: env("DO_SPACE_ACCESS_KEY"),
          secretAccessKey: env("DO_SPACE_SECRET_KEY"),
          endpoint: env("DO_SPACE_ENDPOINT"),
          space: env("DO_SPACE_BUCKET"),
          //   directory: env("DO_SPACE_DIRECTORY"),
          //     cdn: env('DO_SPACE_CDN'),
        },
      },
    },
  };
};
