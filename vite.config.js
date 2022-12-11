import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import eslint from "vite-plugin-eslint";

export default defineConfig(({ command, mode }) => {
    return {
        build: {
            target: ["es2019", "chrome80"],
            minify: mode === "development" ? false : "esbuild",
            outDir: "dist",
            sourcemap: command === "serve" ? "inline" : false,
            cssCodeSplit: true,
        },
        plugins: [
            vue(),
            eslint({
                failOnWarning: false,
                failOnError: true,
            }),
        ],
    };
});
