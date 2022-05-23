const env = process.env;
const config = {
  db: {
    host: env.DB_HOST || "localhost",
    user: env.DB_USER || "root",
    password: env.DB_PASSWORD || "password",
    database: env.DB_NAME || "database_name",
    waitForConnections: true,
    connectionsLimit: env.DB_CONN_LIMIT || 2,
    queueLimit: 0,
    debug: env.DB_DEBUG || false,
  },
};

module.exports = config;
