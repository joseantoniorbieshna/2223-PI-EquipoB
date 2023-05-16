import express from 'express'
import {getUsers,getUserId,getUserById,createUser} from '../controllers/users.js'

const router = express.Router()
router.get('/',getUsers)
router.get('/id/:id',getUserById)
router.get('/search',getUserId)
router.post('/',createUser)

export default router