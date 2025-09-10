import * as ProviderA from './providerA.adapter.js';
import * as ProviderB from './providerB.adapter.js';

const map = {
  provA: ProviderA,
  provB: ProviderB
};

export default {
  get: (id) => {
    const adapter = map[id];
    
    if (!adapter) {
      throw new Error(`Provider ${id} not supported`)
    };

    return adapter;
  },
  list: () => Object.keys(map)
};
