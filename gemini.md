[11:30:13.561] Running build in Washington, D.C., USA (East) – iad1
[11:30:13.562] Build machine configuration: 2 cores, 8 GB
[11:30:13.584] Cloning github.com/darrinmc1/intelappv4 (Branch: master, Commit: 832399f)
[11:30:13.706] Previous build caches not available
[11:30:21.254] Cloning completed: 7.670s
[11:30:21.582] Found .vercelignore
[11:30:21.820] Removed 1841 ignored files defined in .vercelignore
[11:30:21.820]   /.env
[11:30:21.820]   /.git/config
[11:30:21.820]   /.git/description
[11:30:21.820]   /.git/FETCH_HEAD
[11:30:21.820]   /.git/HEAD
[11:30:21.820]   /.git/hooks/applypatch-msg.sample
[11:30:21.821]   /.git/hooks/commit-msg.sample
[11:30:21.821]   /.git/hooks/fsmonitor-watchman.sample
[11:30:21.821]   /.git/hooks/post-update.sample
[11:30:21.821]   /.git/hooks/pre-applypatch.sample
[11:30:22.720] Running "vercel build"
[11:30:23.796] Vercel CLI 44.4.3
[11:30:24.196] Installing dependencies...
[11:30:28.905] npm warn deprecated critters@0.0.25: Ownership of Critters has moved to the Nuxt team, who will be maintaining the project going forward. If you'd like to keep using Critters, please switch to the actively-maintained fork at https://github.com/danielroe/beasties
[11:30:40.822] 
[11:30:40.822] added 655 packages in 16s
[11:30:40.822] 
[11:30:40.822] 187 packages are looking for funding
[11:30:40.823]   run `npm fund` for details
[11:30:40.892] Detected Next.js version: 15.4.2
[11:30:40.893] Running "npm run build:clean"
[11:30:41.007] 
[11:30:41.007] > intel-academy-v2@0.1.0 build:clean
[11:30:41.007] > npm run clear-cache && next build
[11:30:41.007] 
[11:30:41.122] 
[11:30:41.125] > intel-academy-v2@0.1.0 clear-cache
[11:30:41.126] > node clear-cache.js
[11:30:41.126] 
[11:30:41.155] Clearing Next.js cache...
[11:30:41.155] .next does not exist, skipping...
[11:30:41.156] node_modules/.cache does not exist, skipping...
[11:30:41.156] Cache clearing complete. Please run "npm run dev" to restart your application.
[11:30:41.965]  ⚠ Invalid next.config.mjs options detected: 
[11:30:41.966]  ⚠     Expected object, received boolean at "experimental.serverActions"
[11:30:41.966]  ⚠ See more info here: https://nextjs.org/docs/messages/invalid-next-config
[11:30:41.974] Attention: Next.js now collects completely anonymous telemetry regarding usage.
[11:30:41.974] This information is used to shape Next.js' roadmap and prioritize features.
[11:30:41.974] You can learn more, including how to opt-out if you'd not like to participate in this anonymous program, by visiting the following URL:
[11:30:41.974] https://nextjs.org/telemetry
[11:30:41.974] 
[11:30:42.034]    ▲ Next.js 15.4.2
[11:30:42.035]    - Environments: .env.production
[11:30:42.035]    - Experiments (use with caution):
[11:30:42.035]      ✓ serverActions
[11:30:42.035]      ✓ scrollRestoration
[11:30:42.035]      · optimizePackageImports
[11:30:42.035] 
[11:30:42.124]    Creating an optimized production build ...
[11:31:20.357] Failed to compile.
[11:31:20.357] 
[11:31:20.358] ./app/page.tsx
[11:31:20.358] Error:   [31mx[0m Expression expected
[11:31:20.359]    ,-[[36;1;4m/vercel/path0/app/page.tsx[0m:6:1]
[11:31:20.359]  [2m3[0m | export default function HomePage() {
[11:31:20.359]  [2m4[0m |   redirect('/(main)');
[11:31:20.359]  [2m5[0m |   return null;
[11:31:20.360]  [2m6[0m |   )
[11:31:20.360]    : [35;1m  ^[0m
[11:31:20.360]  [2m7[0m | }
[11:31:20.360]    `----
[11:31:20.360] 
[11:31:20.360] Caused by:
[11:31:20.360]     Syntax Error
[11:31:20.360] 
[11:31:20.360] Import trace for requested module:
[11:31:20.360] ./app/page.tsx
[11:31:20.360] 
[11:31:20.361] 
[11:31:20.361] > Build failed because of webpack errors
[11:31:20.450] Error: Command "npm run build:clean" exited with 1
[11:31:20.759] 
[11:31:23.631] Exiting build container