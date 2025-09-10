import asyncHandler from '../middlewares/asyncHandler.js';
import { list as listCustomers } from '../services/customers.service.js';

export const list = asyncHandler(async (req, res) => {
  const data = await listCustomers(req.query.page, req.query.limit);
  res.json(data);
});
