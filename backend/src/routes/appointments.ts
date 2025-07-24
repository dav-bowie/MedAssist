import { Router } from 'express';
import { authenticateJWT } from '../middleware/auth';

const router = Router();

// POST /api/appointments
router.post('/', authenticateJWT, async (req, res) => {
  // TODO: Create appointment in Supabase
  res.json({ message: 'Create appointment endpoint (to be implemented)' });
});

// GET /api/appointments
router.get('/', authenticateJWT, async (req, res) => {
  // TODO: List user's appointments from Supabase
  res.json({ message: 'List appointments endpoint (to be implemented)' });
});

export default router; 