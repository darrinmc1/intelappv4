[11:16:18.995] Running build in Washington, D.C., USA (East) – iad1
[11:16:18.995] Build machine configuration: 2 cores, 8 GB
[11:16:19.034] Cloning github.com/darrinmc1/intelappv4 (Branch: master, Commit: 6903ab3)
[11:16:19.282] Previous build caches not available
[11:16:26.921] Cloning completed: 7.887s
[11:16:27.231] Found .vercelignore
[11:16:27.436] Removed 1841 ignored files defined in .vercelignore
[11:16:27.436]   /.env
[11:16:27.437]   /.git/config
[11:16:27.437]   /.git/description
[11:16:27.437]   /.git/FETCH_HEAD
[11:16:27.437]   /.git/HEAD
[11:16:27.437]   /.git/hooks/applypatch-msg.sample
[11:16:27.437]   /.git/hooks/commit-msg.sample
[11:16:27.437]   /.git/hooks/fsmonitor-watchman.sample
[11:16:27.437]   /.git/hooks/post-update.sample
[11:16:27.437]   /.git/hooks/pre-applypatch.sample
[11:16:29.107] Running "vercel build"
[11:16:29.526] Vercel CLI 44.4.3
[11:16:29.909] Installing dependencies...
[11:16:34.584] npm warn deprecated critters@0.0.25: Ownership of Critters has moved to the Nuxt team, who will be maintaining the project going forward. If you'd like to keep using Critters, please switch to the actively-maintained fork at https://github.com/danielroe/beasties
[11:16:46.341] 
[11:16:46.342] added 655 packages in 16s
[11:16:46.342] 
[11:16:46.342] 187 packages are looking for funding
[11:16:46.343]   run `npm fund` for details
[11:16:46.398] Detected Next.js version: 15.4.2
[11:16:46.399] Running "npm run build:clean"
[11:16:46.505] 
[11:16:46.505] > intel-academy-v2@0.1.0 build:clean
[11:16:46.505] > npm run clear-cache && next build
[11:16:46.505] 
[11:16:46.614] 
[11:16:46.614] > intel-academy-v2@0.1.0 clear-cache
[11:16:46.614] > node clear-cache.js
[11:16:46.614] 
[11:16:46.645] Clearing Next.js cache...
[11:16:46.646] .next does not exist, skipping...
[11:16:46.646] node_modules/.cache does not exist, skipping...
[11:16:46.646] Cache clearing complete. Please run "npm run dev" to restart your application.
[11:16:47.217]  ⚠ Invalid next.config.mjs options detected: 
[11:16:47.218]  ⚠     Expected object, received boolean at "experimental.serverActions"
[11:16:47.218]  ⚠ See more info here: https://nextjs.org/docs/messages/invalid-next-config
[11:16:47.225] Attention: Next.js now collects completely anonymous telemetry regarding usage.
[11:16:47.225] This information is used to shape Next.js' roadmap and prioritize features.
[11:16:47.226] You can learn more, including how to opt-out if you'd not like to participate in this anonymous program, by visiting the following URL:
[11:16:47.226] https://nextjs.org/telemetry
[11:16:47.226] 
[11:16:47.285]    ▲ Next.js 15.4.2
[11:16:47.286]    - Environments: .env.production
[11:16:47.286]    - Experiments (use with caution):
[11:16:47.286]      ✓ serverActions
[11:16:47.286]      ✓ scrollRestoration
[11:16:47.286]      · optimizePackageImports
[11:16:47.287] 
[11:16:47.368]    Creating an optimized production build ...
[11:17:34.285]  ✓ Compiled successfully in 46s
[11:17:34.290]    Skipping validation of types
[11:17:34.290]    Skipping linting
[11:17:34.577]    Collecting page data ...
[11:17:41.053]    Generating static pages (0/191) ...
[11:17:42.029] Error occurred prerendering page "/". Read more: https://nextjs.org/docs/messages/prerender-error
[11:17:42.029] [Error: Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: object.] {
[11:17:42.030]   digest: '512221389'
[11:17:42.030] }
[11:17:42.030] Export encountered an error on /page: /, exiting the build.
[11:17:42.045]  ⨯ Next.js build worker exited with code: 1 and signal: null
[11:17:42.118] Error: Command "npm run build:clean" exited with 1
[11:17:42.399] 
[11:17:45.465] Exiting build container