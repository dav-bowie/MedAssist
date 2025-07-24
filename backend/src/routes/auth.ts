import { Router } from 'express';

const router = Router();

// POST /api/auth/register
router.post('/register', async (req, res) => {
  // TODO: Integrate with Supabase Auth for registration
  res.json({ message: 'Register endpoint (to be implemented)' });
});

// POST /api/auth/login
router.post('/login', async (req, res) => {
  // TODO: Integrate with Supabase Auth for login
  res.json({ message: 'Login endpoint (to be implemented)' });
});

// POST /api/auth/logout
router.post('/logout', async (req, res) => {
  // TODO: Integrate with Supabase Auth for logout
  res.json({ message: 'Logout endpoint (to be implemented)' });
});

export default router; 