import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

declare const process: { env: Record<string, string | undefined> };

// BASE_PATH is set by the GitHub Pages workflow: "/" for a user site (atheeq2003.github.io),
// "/<repo-name>/" for a project site. Local dev and preview use "/".
export default defineConfig({
  base: process.env.BASE_PATH || '/',
  plugins: [react()]
});
