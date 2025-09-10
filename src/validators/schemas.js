import Joi from 'joi';
import providers from '../providers/index.js';

const validProviders = providers.list();

export const listCustomers = {
  query: Joi.object({
    page: Joi.number().integer().min(1).default(1),
    limit: Joi.number().integer().min(1).max(100).default(20)
  })
};

export const updateProviderCustomer = {
  params: Joi.object({
    providerId: Joi.string().valid(...validProviders).required(),
    customerId: Joi.string().required()
  }),
  body: Joi.object({
    status: Joi.string().valid('active','suspended','cancelled').required(),
    plan: Joi.string().required(),
    idempotencyKey: Joi.string().uuid().required()
  })
};
