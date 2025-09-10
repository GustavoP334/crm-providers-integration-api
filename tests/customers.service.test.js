import { describe, it, expect, vi } from 'vitest';

vi.mock('../src/repositories/customers.repo.js', () => ({
  list: vi.fn(async (page, limit) => {
    return { items: [{ id: 1 }, { id: 2 }], total: 2 };
  })
}));

import { list } from '../src/services/customers.service.js';

describe('CustomersService.list', () => {
  it('returns paginated items with total', async () => {
    const res = await list(1, 2);
    expect(res).toEqual({
      items: [{ id: 1 }, { id: 2 }],
      page: 1,
      limit: 2,
      total: 2
    });
  });
});