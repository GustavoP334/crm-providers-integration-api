export const updateCustomer = async ({ customerId, status, plan, idempotencyKey }) => {

  return { ok: true, provider: 'B', idempotencyKey };
};
