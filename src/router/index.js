import { Router } from 'express';
import * as Customers from '../controllers/customers.controller.js';
import * as Providers from '../controllers/providers.controller.js';
import { listCustomers, updateProviderCustomer } from '../validators/schemas.js';
import validate from '../middlewares/validateCustomer.js';

const router = Router();

router.get('/customers', validate(listCustomers), Customers.list);

router.patch(
  '/providers/:providerId/customers/:customerId',
  validate(updateProviderCustomer),
  Providers.updateCustomer
);

export default router;
