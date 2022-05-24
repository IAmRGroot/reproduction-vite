import { defineConfig, UserConfigExport } from 'vite';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default (): UserConfigExport => {
    return defineConfig({
        plugins: [vue()],
        root: 'src',
        base: '/',
        resolve: { alias: { '@': resolve(__dirname, './src') } },
        server: { host: '0.0.0.0' },
    });
};
