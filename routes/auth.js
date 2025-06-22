import express from 'express';
import { register, login } from '../controller/auth.js';

export const authRoute = express.Router();

authRoute.post('/register', register);
authRoute.post('/login', login);