import authRoute from "./AuthRoute.js";
import userRoute from "./UserRoute.js";
import postRoute from "./PostRoute.js";

const initRoute = (app) => {
  app.use("/auth", authRoute);
  app.use("/user", userRoute);
  app.use("/post", postRoute);
};

export default initRoute;
