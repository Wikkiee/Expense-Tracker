import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import db from "./database.js";
import bcrypt from "bcrypt";
import session from "express-session";
import passport from "passport";
import { initialize } from "./passport-config.js";
import cookieParser from "cookie-parser"
initialize(passport);

const PORT = 5000;
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser())
app.use(
  cors({
    origin: "http://localhost:4000",
    credentials: true,
  })
);
app.use(
  session({
    secret: process.env.SESSION_SECRETS,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 9000000000000,
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.get("/", checkAuthenticated, (req, res) => {
  console.log(req.isAuthenticated());
  console.log(req.session);
  res.json(
    {
      isAuthenticated: req.isAuthenticated(),
    }
  );
});

app.get("/login", checkNotAuthenticated, (req, res) => {
  console.log("login");
  res.json(JSON.stringify({ isAuthenticated: req.isAuthenticated() }));
});

app.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res
        .status(401)
        .json(
          {
            message: "Authentication failed",
            error: true,
            isAuthenticated: false,
          }
        );
    }
    req.login(user, (err) => {
      if (err) {
        return next(err);
      }
      return res
        .status(202)
        .json(
          {
            message: "Authentication succeed",
            error: false,
            isAuthenticated: req.isAuthenticated(),
          }
        );
    });
  })(req, res, next);
});

app.post("/register", async (req, res) => {
  const userID = Date.now().toString();
  const data = {
    userInfo: {
      userId: userID,
      userEmail: req.body.userEmail,
      userPassword: await bcrypt.hash(req.body.userPassword, 10),
    },
    userAppData: 1,
  };

  await db
    .insertOne(data)
    .then(async (response) => {
      console.log(response);
      const user = await db.findOne({ "userInfo.userId": userID });
      req.login(user, (err) => {
        if (err) {
          console.log(err);
          res.json({isAuthenticated:req.isAuthenticated()});
        } else {
          res.json({ isAuthenticated: req.isAuthenticated()});
          console.log(req.isAuthenticated());
        }
      });
    })
    .catch((err) => {
      console.log(err);
      res.json({ success: false });
    });
});

function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.json({
    message: "Not Authenticated",
    isAuthenticated: req.isAuthenticated(),
  });
}

function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    res.json({
      message: "Already Authenticated",
      isAuthenticated: req.isAuthenticated(),
    });
  }
  next();
}

app.listen(PORT, (error) => {
  if (error) {
    throw error;
  } else {
    console.log(`Server Started on http://localhost:${PORT}`);
  }
});
