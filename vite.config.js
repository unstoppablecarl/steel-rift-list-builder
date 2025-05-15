import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import {BootstrapVueNextResolver} from 'bootstrap-vue-next';
import vueDevTools from 'vite-plugin-vue-devtools';
import path from 'path';
import vitePluginSvgsIcons from 'vite-plugin-svgs-icons';

export default defineConfig({
    base: '/steel-rift-list-builder/',
    build: {
        outDir: 'dist',
    },
    plugins: [
        vitePluginSvgsIcons({
            dir: path.resolve(__dirname, 'public', 'icons'),
        }),
        vue(),
        // vueDevTools(),
        Components({
            resolvers: [BootstrapVueNextResolver()],
        }),
    ],
    css: {
        preprocessorOptions: {
            scss: {
                api: 'modern-compiler',
                importers: [
                    // ...
                ],
            },
        },
    },
});