import { Hono } from 'hono';
import { handle } from 'hono/vercel';

import auth from '@/features/auth/server/route';
// import users


// Will chain all api routes here

const app = new Hono().basePath('/api');

// Example 1
app.get('/ellomoto', (c) => {
  return c.json({ ello: 'hello welcome to life' });
})
// Example 2
app.get('/project/:projectId', (c) => {
  const { projectId } = c.req.param();
  return c.json({ project: projectId})
})

const routes = app
  .route('/auth', auth)

export const GET = handle(app);

