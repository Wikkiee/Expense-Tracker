
import { Strategy } from "passport-local";
import bcrypt from "bcrypt";
import db from './database.js'

export const initialize = (passport)=>{
    const authenticateUser = async(email,password,done)=>{
        console.log(email,password)
        const result = await db.findOne({ "userInfo.userEmail": email })
        console.log(result);
        if(result === null){
          console.log("no user found");
          return done(null,false,{message:"No user found"})
        }
        try{
          if(await bcrypt.compare(password,result.userInfo.userPassword)){
            console.log("Correct pass");
            return done(null,result,{message:"Correct pass"})
          }else{
            console.log("incorrect pass")
            return done(null,false)
          }
        }catch(err){
          return done(err)
        }
        
    }
    passport.use(new Strategy({usernameField:'userEmail',passwordField:'userPassword'},authenticateUser))
    passport.serializeUser((user, done) =>{
        console.log("Serialize");
        console.log(user);
        done(null,{userID:user.userInfo.userId})
    })
    passport.deserializeUser(async(user, done) => {
      try{
        const result = await db.findOne({"userInfo.userId":user.userID})
        console.log("deserialize");
        console.log(result);
        done(null,result.userInfo.userId === user.userID)
      }catch(err){
        done(err)
      }
    })
    

}
