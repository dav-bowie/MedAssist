import { Router } from 'express';

const router = Router();

// POST /api/ai/analyze
router.post('/analyze', async (req, res) => {
  // TODO: Integrate with Ollama or Hugging Face for symptom analysis
  res.json({ message: 'AI symptom analysis endpoint (to be implemented)' });
});

export default router; 