module.exports = app => {

  // Base URLS
  app.use('/', require('./index.routes'))
  app.use('/', require('./auth.routes'))
  app.use('/pilots', require('./pilots.routes'))
  app.use('/circuits', require('./circuits.routes'))
  app.use('/constructors', require('./constructors.routes'))
  app.use('/profile', require('./user.routes.js'))
    
}