import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run remote-header:serve:development',
        production: 'nx run remote-header:serve:production',
      },
      ciWebServerCommand: 'nx run remote-header:serve-static',
    }),
    baseUrl: 'http://localhost:4202',
  },
});
