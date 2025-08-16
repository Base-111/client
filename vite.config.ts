import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
    plugins: [svgr(), react()],
    optimizeDeps: {
        extensions: ['.css'],
        esbuildOptions: {
            plugins: [
                (await import('esbuild-sass-plugin')).sassPlugin({
                    type: 'style',
                }),
            ],
        },
    },
});
