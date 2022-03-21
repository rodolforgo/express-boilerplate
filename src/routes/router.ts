import express from 'express';
import { createUserController } from '../use-cases/users';

export const userRouter = express.Router();

userRouter.post('/signup', (req, res) => { return createUserController.execute(req, res) });