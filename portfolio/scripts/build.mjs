process.env.NODE_ENV = 'production';
const { createBuilder } = await import('vite');
import { access } from 'node:fs/promises';
import path from 'node:path';

// Use the same build and prerender phases as the Vinext CLI, but let Node
// close naturally. Forced CLI exit crashes native handles on Windows.
const vinextEntry = import.meta.resolve('vinext');
const internal = (file) => import(new URL(file, vinextEntry).href);
const { runWithPreviewBuildCredentials } = await internal('./build/preview-credentials.js');
const { runPrerender } = await internal('./build/run-prerender.js');
const { loadNextConfig, resolveNextConfig } = await internal('./config/next-config.js');
const { cleanBuildOutput } = await internal('./build/clean-output.js');
const root = process.cwd();
const output = path.resolve(root, 'dist');
if (output !== path.join(root, 'dist')) throw new Error('Unexpected build output');
cleanBuildOutput({ root, outDir: output });
await runWithPreviewBuildCredentials(async () => {
  const builder = await createBuilder({ mode: 'production' });
  await builder.buildApp();
});
const nextConfig = await resolveNextConfig(await loadNextConfig(root, 'phase-production-build'), root);
const result = await runPrerender({ root, nextConfig });
if (!result || result.routes.some((route) => route.status === 'error')) {
  throw new Error('Static rendering failed');
}
await access(path.join(output, 'client', 'index.html'));
await access(path.join(output, 'client', 'CV-Facundo-Mendoza.pdf'));
console.log('Static portfolio ready in dist/client');

