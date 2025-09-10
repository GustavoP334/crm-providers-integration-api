import { describe, it, expect, vi } from 'vitest';

vi.mock('../src/services/providers.service.js', () => ({
  enqueueUpdate: vi.fn(async () => ({ id: 'job-999' }))
}));

import { updateCustomer } from '../src/controllers/providers.controller.js';
import { enqueueUpdate } from '../src/services/providers.service.js';

describe('ProvidersController.updateCustomer', () => {
  it('returns 202 and jobId when body is valid', async () => {
    // mocks
    const req = {
      params: { providerId: 'provA', customerId: '11111111-1111-1111-1111-111111111111' },
      body: {
        status: 'active',
        plan: 'Premium',
        idempotencyKey: '550e8400-e29b-41d4-a716-446655440000'
      },
      headers: {}
    };

    const res = {
      status: vi.fn().mockReturnThis(),
      json: vi.fn()
    };

    await updateCustomer(req, res);

    expect(res.status).toHaveBeenCalledWith(202);
    expect(res.json).toHaveBeenCalledWith({
      jobId: 'job-999',
      status: 'queued'
    });

    expect(enqueueUpdate).toHaveBeenCalledWith(expect.objectContaining({
      providerId: 'provA',
      customerId: '11111111-1111-1111-1111-111111111111',
      status: 'active',
      plan: 'Premium'
    }));
  });
});
