import express from 'express'
import {getUsers,getUserId,getUserById,createUser} from '../controllers/users.js'

const router = express.Router()
router.get('/id/:id',getUserById)
router.get('/search',getUserId)
router.get('/',getUsers)
router.post('/',createUser)

export default router