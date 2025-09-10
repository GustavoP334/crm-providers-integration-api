import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const list = async (page, limit) => {
  const limitInt = Number(limit);
  const pageInt = Number(page);

  const [items, total] = await Promise.all([
    prisma.customer.findMany({
      skip: (pageInt - 1) * limitInt,
      take: limitInt,
      orderBy: { id: 'asc' }
    }),
    prisma.customer.count()
  ]);

  return { items, total };
};
