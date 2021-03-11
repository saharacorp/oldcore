// Pluto - src/oob_modules/cli/arguments/ArgumentHandler.ts
// Written by Quinn Lane - https://brndnln.dev/

import {Command, Option} from "commander";
import config from "../../../configuration/config";

const program = new Command()
program.version(config.cli.version, '-v, --version', 'Output the current version of PlutoCore')
