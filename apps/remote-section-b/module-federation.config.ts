import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote-section-b',
  exposes: {
    './Routes': 'apps/remote-section-b/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
