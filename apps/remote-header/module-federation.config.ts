import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote-header',
  exposes: {
    './Component': 'apps/remote-header/src/app/remote-entry/entry.component.ts',
  },
};

export default config;
