// @deno-types="npm:@types/express"
import express from 'express';
import * as log from '@std/log';
import * as helpers from './helpers.ts';
import * as routes from './routes.ts';

const app = express();

app.use(express.json());

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
	app.get('/dog', routes.getRandomDogImage);

	app.listen(3000, () => {
		log.debug('Server is running on http://localhost:3000');
		log.info('Server is running on http://localhost:3000');
		log.critical(
			`Time for cup of coffee #${helpers.getRandomNumber(10) + 1}`,
		);
	});
}
