const mongoose = require("mongoose");

mongoose
  .connect(process.env.DATABASE_URL)
  .then((db) =>
    console.log(
      `${db.connection.host} / ${db.connection.name} / ${db.connection.port}`
    )
  );
