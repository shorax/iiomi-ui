const execSync = require('child_process').execSync;

const DIST_DIR = 'dist';

exec(`rimraf ${DIST_DIR}`);
exec(`tsc -p tsconfig.json`);
exec(`tsc-esm-fix --target ${DIST_DIR}`);

function exec(command) {
    execSync(command, { stdio: 'inherit' });
}