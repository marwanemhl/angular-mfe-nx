import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run remote-section-c:serve:development',
        production: 'nx run remote-section-c:serve:production',
      },
      ciWebServerCommand: 'nx run remote-section-c:serve-static',
    }),
    baseUrl: 'http://localhost:4204',
  },
});
