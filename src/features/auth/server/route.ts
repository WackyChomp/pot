import { Hono } from "hono";
import { z } from 'zod';
import { zValidator } from '@hono/zod-validator';     // middleware
import { loginSchema, registerSchema } from "../schemas";

const app = new Hono()
  .post(
    '/login', 
    zValidator('json', loginSchema), 
    async (c) => {
      const { email, password } = c.req.valid('json')

      console.log({ email, password})
      return c.json({ success: 'login is actually working <(;o_o;)>', email, password})
    }
  )
  .post(
    '/register',
    zValidator('json', registerSchema),
    async (c) => {
      const { name, email, password } = c.req.valid('json')

      console.log({ name, email, password })
      return c.json({ succes:'registration really worked! (O__o)', name, email, password })
    }
  )

export default app;