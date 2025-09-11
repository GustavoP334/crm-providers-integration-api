import { Worker } from 'bullmq';
import { queue, connection } from './index.js';
import adapters from '../providers/index.js';

export const enqueue = (payload) => {
  return queue.add('update', payload, {
    attempts: 3,
    backoff: { type: 'exponential', delay: 2000 },
    removeOnComplete: true,
    removeOnFail: false
  });
};

export const createWorker = () => new Worker(
  'provider-updates',
  async (job) => {
    const { providerId, customerId, status, plan, idempotencyKey } = job.data;
    const adapter = adapters.get(providerId);
    if (!adapter) throw new Error(`Provider ${providerId} not supported`);
    await adapter.updateCustomer({ customerId, status, plan, idempotencyKey });

    console.log(`Job ${job.id} finished for provider ${providerId}, client ${customerId}`);
  },
  { connection }
);

if (process.env.NODE_ENV !== 'test') {
  createWorker();
}
