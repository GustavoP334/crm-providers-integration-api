import prisma from '../config/database.js';

export const updateCustomer = async ({ customerId, status, plan, idempotencyKey }) => {

  const updated = await prisma.customer.update({
    where: { id: Number(customerId) },
    data: {
      status,
      plan
    }
  });

  return { ok: true, provider: 'A', idempotencyKey, updated };
};
