const exec = require('child_process').exec
console.log('[Pluto BuildTools] Building project \'Pluto\' as target Debug to \'out/debug/\'')
exec('npx tsc --outDir out/debug')
