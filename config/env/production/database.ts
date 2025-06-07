import { parse } from "pg-connection-string";

export default ({ env }) => {
  const config = parse(env("DATABASE_URL"));

  return {
    connection: {
      client: "postgres",
      connection: {
        host: config.host,
        port: config.port ? parseInt(config.port) : undefined, // Parse port as integer
        database: config.database,
        user: config.user,
        password: config.password,
        // DigitalOcean's managed Postgres usually requires SSL
        // They often handle the root cert, so rejectUnauthorized: false is common for basic setups,
        // but it's more secure to use rejectUnauthorized: true if you can properly handle certs.
        // For App Platform, the DATABASE_URL often implies SSL is needed.
        ssl: env.bool("DATABASE_SSL", true) && {
          // Assume SSL is true by default for DO
          rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false), // Set to true if you have specific CA handling
        },
      },
      debug: false,
    },
  };
};
