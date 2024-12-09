import { NextFunction, Request, Response } from 'express';
import { Dog } from './types/dog.ts';
import * as log from '@std/log';

export async function getRandomDogImage(_req: Request, res: Response) {
	/**
	 * Docs: https://docs.deno.com/examples/http-requests
	 * Use the fetch api to make a GET request to the following API
	 * https://random.dog/woof.json
	 */

	try {
		const dogResponse = await fetch('https://random.dog/woof.json');
		const dogData = await dogResponse.json() as Dog;
		res.json(dogData.url);
	} catch (error) {
		log.error(error);
		res.status(500).json({ message: 'Internal server error' });
	}
}
