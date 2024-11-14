import { Hono } from "hono";
import { z } from 'zod';
import { zValidator } from '@hono/zod-validator';     // middleware
import { deleteCookie, setCookie } from 'hono/cookie'
import { loginSchema, registerSchema } from "../schemas";

import { createAdminClient } from "@/lib/appwrite";
import { ID } from 'node-appwrite';
import { AUTH_COOKIE } from "../constants";
import { sessionMiddleware } from "@/lib/session-middleware";

const app = new Hono()
  .post(
    '/login', 
    zValidator('json', loginSchema), 
    async (c) => {
      const { email, password } = c.req.valid('json')

      const { account } = await createAdminClient();
      const session = await account.createEmailPasswordSession(
        email,
        password,
      );

      setCookie(c, AUTH_COOKIE, session.secret, {
        path: '/',
        httpOnly: true,
        secure: true,
        sameSite: 'strict',
        maxAge: 60 * 60 * 24 * 30,
      })

      console.log({ email, password})
      return c.json({ success: `login is actually working <(;o_o;)> ${true}`, email, password})
    }
  )
  .post(
    '/register',
    zValidator('json', registerSchema),
    async (c) => {
      const { name, email, password } = c.req.valid('json')

      const { account } = await createAdminClient();
      const user = await account.create(
        ID.unique(),
        email,
        password,
        name,
      );

      const session = await account.createEmailPasswordSession(
        email,
        password,
      );
      
      setCookie(c, AUTH_COOKIE, session.secret, {
        path: '/',
        httpOnly: true,
        secure: true,
        sameSite: 'strict',
        maxAge: 60 * 60 * 24 * 30,
      })

      console.log({ name, email, password })
      return c.json({ data: user, succes: `registration really worked! (O__o) ${true}`, name, email, password })
    }
  )

  .post('/logout', sessionMiddleware, async (c) => {
    const account = c.get('account')

    deleteCookie(c, AUTH_COOKIE);

    await account.deleteSession('current')

    return c.json({ success: `coooookie is eviscerated ${true}`})
  })

export default app;