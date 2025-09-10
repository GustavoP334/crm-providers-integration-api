import asyncHandler from '../middlewares/asyncHandler.js';
import { enqueueUpdate } from '../services/providers.service.js';

export const updateCustomer = asyncHandler(async (req, res) => {
  const { providerId, customerId } = req.params;
  const { status, plan, idempotencyKey } = req.body;

  const job = await enqueueUpdate({
    providerId,
    customerId,
    status,
    plan,
    idempotencyKey,
    correlationId: req.headers['x-correlation-id'] || null
  });

  res.status(202).json({ jobId: job.id, status: 'queued' });
});
