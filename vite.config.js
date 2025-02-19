import { resolve } from "path";
import { defineConfig } from "vite";
import {ViteEjsPlugin} from "vite-plugin-ejs";

export default defineConfig({
    plugins: [ViteEjsPlugin(),],
    base: "/CSE330-Project/",
    root: "src/",
    build: {
        outDir: "../dist",
        rollupOptions: {
            input: {
                main: resolve(__dirname, "src/index.html"),
            },
        },
    },
});