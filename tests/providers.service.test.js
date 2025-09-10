import { describe, it, expect, vi } from 'vitest';

const addMock = vi.fn(async () => ({ id: 'job-123' }));

vi.mock('../src/queues/providerUpdate.queue.js', () => ({
  enqueue: (payload) => addMock(payload)
}));

import { enqueueUpdate } from '../src/services/providers.service.js';

describe('ProvidersService.enqueueUpdate', () => {
  it('queues payload and returns job', async () => {
    const payload = { providerId: 'provA', customerId: '1', status: 'active', plan: 'Plus', idempotencyKey: 'uuid' };
    const job = await enqueueUpdate(payload);
    expect(job).toEqual({ id: 'job-123' });
    expect(addMock).toHaveBeenCalledWith(payload);
  });
});