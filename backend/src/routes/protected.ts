import { Router } from 'express';
import { authenticateJWT } from '../middleware/auth';

const router = Router();

router.get('/profile', authenticateJWT, (req, res) => {
  res.json({ user: (req as any).user });
});

export default router; 