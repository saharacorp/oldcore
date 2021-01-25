const exec = require('child_process').exec
console.log('[Pluto BuildTools] Building project \'Pluto\' as target Release to \'out/release/\'')
exec('npx tsc --outDir out/release')
