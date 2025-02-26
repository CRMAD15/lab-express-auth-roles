module.exports = app => {

  // Base routes
  const indexRouter = require("./index.routes");
  app.use("/", indexRouter);

  // Auth routes
  const authRouter = require("./auth.routes");

  app.use("/", authRouter);


  //Students routes
  const stundentsRouter = require('./students.routes')
  app.use('/', stundentsRouter)

  //Courses routes
  const coursesRouter = require('./courses.routes')
  app.use('/', coursesRouter)
}
