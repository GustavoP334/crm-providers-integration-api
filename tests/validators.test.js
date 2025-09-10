import { describe, it, expect } from 'vitest';
import { listCustomers, updateProviderCustomer } from '../src/validators/schemas.js';

describe('Validators', () => {
  it('valid listCustomers (query)', () => {
    const { error, value } = listCustomers.query.validate({ page: '1', limit: '5' });
    
    expect(error).toBeUndefined();

    expect(value).toEqual({ page: 1, limit: 5 });
  });

  it('reject invalid providerId', () => {
    const { error } = updateProviderCustomer.params.validate({ providerId: 'provX', customerId: '1' });
    
    expect(error).toBeDefined();
  });
});