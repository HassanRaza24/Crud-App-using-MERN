import express from 'express';
import { getUsers , createUsers , updateUser , deleteUser } from './user.js'
import { isValidated, validateUser } from "./Middle Wave/validator.js";

const router = express.Router()

router.get('/', getUsers)
router.post('/' , validateUser, isValidated, createUsers)
router.put('/:userId', updateUser)
router.delete('/:userId', deleteUser)

export default router
