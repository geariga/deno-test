import * as csv from '@std/csv';
import * as denoAsync from '@std/async';
import { readFileAsString } from '../helpers.ts';

(async () => {
    if (import.meta.main) {
        const csvData = await readFileAsString(`${Deno.cwd()}/data/titanic.csv`);

        // Print the parsed CSV and wait for 5 seconds
        const records = csv.parse(csvData);
        console.log(records[1]);
        await denoAsync.delay(7000);

        // Print the stringified CSV
        const recordsString = csv.stringify(records);
        console.log(recordsString);
    }
})();

// deno run --allow-read=src/data/titanic.csv src/examples/2_csv.ts