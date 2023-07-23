import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import envCompatible from 'vite-plugin-env-compatible';
import tsConfigPaths from 'vite-tsconfig-paths';

export default defineConfig(({ command, mode }) => {
    // Load env file based on `mode` in the current working directory
    return {
      // build specific config
      envPrefix: 'REACT_APP_',
        devtool: 'cheap-module-source-map',
        plugins: [
            react(),
            envCompatible(),
            tsConfigPaths(),
        ],
        server: {
            port: 3001,
            strictPort: false,
        },
        preview: {
            port: 3001,
            strictPort: false,
        },
        build: {
            target: "esnext",
            minify: false,
            cssCodeSplit: false,
        },
    }
})