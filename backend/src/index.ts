import express from "express";
import * as Sentry from "@sentry/node";
import cors from "cors";
import dotenv from "dotenv";
import protectedRoutes from './routes/protected';
import authRoutes from './routes/auth';
import appointmentRoutes from './routes/appointments';
import providerRoutes from './routes/providers';
import aiRoutes from './routes/ai';

dotenv.config();

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  tracesSampleRate: 1.0,
});

const app = express();
app.use(Sentry.Handlers.requestHandler());
app.use(cors());
app.use(express.json());
app.use('/api', protectedRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/appointments', appointmentRoutes);
app.use('/api/providers', providerRoutes);
app.use('/api/ai', aiRoutes);

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.use(Sentry.Handlers.errorHandler());

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Backend listening on port ${PORT}`);
}); 