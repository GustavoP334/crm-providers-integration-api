import { enqueue } from '../queues/providerUpdate.queue.js';

export const enqueueUpdate = async (payload) => {
  return enqueue(payload);
};
