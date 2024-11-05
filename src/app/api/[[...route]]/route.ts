import { Hono } from 'hono';
import { handle } from 'hono/vercel';

const app = new Hono().basePath('/api');

app.get('/ellomoto', (c) => {
  return c.json({ ello: 'hello welcome to life' });
})

app.get('/project/:projectId', (c) => {
  const { projectId } = c.req.param();
  return c.json({ project: projectId})
})

export const GET = handle(app);
