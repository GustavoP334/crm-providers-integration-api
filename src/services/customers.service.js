import { list as listRepo } from '../repositories/customers.repo.js';

export const list = async (page = 1, limit = 20) => {
  const { items, total } = await listRepo(page, limit);
  return { items, page, limit, total };
};
