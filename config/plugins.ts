export default ({ env }: { env: (key: string) => string }) => ({
  upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        accessKeyId: env("DO_SPACE_ACCESS_KEY"),
        secretAccessKey: env("DO_SPACE_SECRET_KEY"),
        endpoint: env("DO_SPACE_ENDPOINT"),
        region: env("DO_SPACE_REGION"),
        params: {
          Bucket: env("DO_SPACE_BUCKET"),
        },
      },
    },
  },
});
