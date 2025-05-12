export default ({ env }) => ({
  upload: {
    config: {
      provider: "@strapi/provider-upload-aws-s3",
      providerOptions: {
        accessKeyId: env("DO_SPACE_ACCESS_KEY"),
        secretAccessKey: env("DO_SPACE_SECRET_KEY"),
        region: "us-east-1", // DO ignores this, just needs a valid AWS region string
        endpoint: env("DO_SPACE_ENDPOINT"), // must include https://
        s3ForcePathStyle: true, // required for DO Spaces compatibility
        params: {
          Bucket: env("DO_SPACE_BUCKET"),
        },
      },
    },
  },
});
