import { Router } from 'express'
import * as puppiesCtrl from '../controllers/puppies.js'

const router = Router()

router.post('/', puppiesCtrl.create)

export {
  router
}
