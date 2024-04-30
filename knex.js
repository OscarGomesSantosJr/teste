module.exports = {
  client: "postgresql",
  connection: {
    host: "localhost",
    port: "5432",
    database: "teste",
    user: "postgres",
    password: "213254",
  },
  pool: {
    min: 2,
    max: 10,
  },
};
