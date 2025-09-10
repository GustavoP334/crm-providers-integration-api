import { Queue } from 'bullmq';
import IORedis from 'ioredis';

const connection = new IORedis(process.env.REDIS_URL, {
  maxRetriesPerRequest: null
});

const queue = new Queue('provider-updates', { connection });

export { queue, connection };
