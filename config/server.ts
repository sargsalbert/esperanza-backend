export default ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: {
    keys: env.array(
      "XOUzL2RAd4hRDB6xtDqfCts0E4jzeJbYyvS6pDkCgVE=,gn5l1MLHb1oE0jHjOqeS/COSn64PbO1g3D17z14KgVE="
    ),
  },
});
