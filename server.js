import 'dotenv/config.js'
import createError from 'http-errors'
import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import logger from 'morgan'

// import routers
import { router as puppiesRouter } from './routes/puppies.js'

// set up app
const app = express()

import('./config/database.js')


// middleware
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(
  express.static(
    path.join(path.dirname(fileURLToPath(import.meta.url)), 'public')
  )
)

// mounted routers

app.use('/api/puppies', puppiesRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  

  // render the error page
  res.status(err.status || 500).json({"err":err.message})
  
})

export {
  app
}
