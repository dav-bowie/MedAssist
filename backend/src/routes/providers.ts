import { Router } from 'express';

const router = Router();

// GET /api/providers
router.get('/', async (req, res) => {
  // TODO: List/search providers from Supabase
  res.json({ message: 'List providers endpoint (to be implemented)' });
});

// GET /api/providers/:id
router.get('/:id', async (req, res) => {
  // TODO: Get provider details from Supabase
  res.json({ message: 'Provider details endpoint (to be implemented)' });
});

// GET /api/providers/:id/reviews
router.get('/:id/reviews', async (req, res) => {
  // TODO: List reviews for provider from Supabase
  res.json({ message: 'Provider reviews endpoint (to be implemented)' });
});

// POST /api/providers/:id/reviews
router.post('/:id/reviews', async (req, res) => {
  // TODO: Add review for provider in Supabase
  res.json({ message: 'Add provider review endpoint (to be implemented)' });
});

export default router; 