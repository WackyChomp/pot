import { Hono } from "hono";
import { z } from 'zod';
import { zValidator } from '@hono/zod-validator';     // middleware
import { loginSchema } from "../schemas";

const app = new Hono()
  .post(
    '/login', 
    zValidator('json', loginSchema), 
    (c) => {
      return c.json({ success: 'login is actually working <(;o_o;)>'})
    }
  )

export default app;