const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const knex = require("knex");
const bookshelf = require("./db/models/bookshelf");
const methodOverride = require("method-override");

// const RedisStore = require("connect-redis")(session);
// const passport = require("passport");

const hbs = require("express-handlebars");

const Gallery = require("./db/models/Gallery");
const Users = require("./db/models/Users");

const PORT = process.env.PORT || 3030;

const galleryRoutes = require("./routes/gallery");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");

app.engine(
  ".hbs",
  hbs({
    defaultLayout: "main",
    extname: ".hbs"
  })
);
app.set("view engine", ".hbs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(
//   session({
//     store: new RedisStore(),
//     secret: "ennui",
//     resave: false,
//     saveUninitialized: true
//   })
// );

app.use(
  methodOverride((req, res) => {
    if (req.body && typeof req.body === "object" && "_method" in req.body) {
      const method = req.body._method;
      delete req.body._method;
      return method;
    }
  })
);

app.use(galleryRoutes);
// app.use(userRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
