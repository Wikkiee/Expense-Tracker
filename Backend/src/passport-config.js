import { Strategy } from "passport-local";
import bcrypt from "bcrypt";
import client from "./database.js";
export const initialize = (passport) => {
  const db = client.db(process.env.DATABASE_NAME).collection("userData");
  const authenticateUser = async (email, password, done) => {
    const result = await db.findOne({ "userInfo.userEmail": email });
    if (result === null) {
      return done(null, false, { message: "No user found" });
    }
    try {
      if (await bcrypt.compare(password, result.userInfo.userPassword)) {
        return done(null, result, { message: "Correct pass" });
      } else {
        return done(null, false);
      }
    } catch (err) {
      return done(err);
    }
  };
  passport.use(
    new Strategy(
      { usernameField: "userEmail", passwordField: "userPassword" },
      authenticateUser
    )
  );
  passport.serializeUser((user, done) => {
    done(null, { userID: user.userInfo.userId });
  });
  passport.deserializeUser(async (user, done) => {
    try {
      const result = await db.findOne({ "userInfo.userId": user.userID });
      done(null, result.userInfo.userId === user.userID);
    } catch (err) {
      done(err);
    }
  });
};
