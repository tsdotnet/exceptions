import {describe, it, expect} from 'vitest';
import { ArgumentException, Exception } from '../src/index.ts';

const message = 'Test';

// test import and compilation.
new ArgumentException('x', message);

describe('Error', () => {
	it('instanceof should work', () => {
		const te = new TypeError(message);
		expect(te instanceof Error).toBe(true);

		try {
			// noinspection ExceptionCaughtLocallyJS
			throw new TypeError(message);
		} catch(e: any) {
			expect(e.name).toBe('TypeError');
			if (!(e instanceof TypeError)) throw new Error('Not expected type.');
		}
	});
});

describe('Exception', () => {
	it('should behave as an Error', () => {
		expect(() => { throw message; }).toThrow(message);

		const ex = new Exception(message);
		expect(ex instanceof Exception).toBe(true);
		expect(ex.stack).not.toBeNull();
		expect(ex.stack.length).not.toBe(0);
		expect(ex.message).toBe(message);

		try {
			// noinspection ExceptionCaughtLocallyJS
			throw new Exception(message);
		} catch(e: any) {
			expect(e.stack).not.toBeNull();
			expect(e.stack.length).not.toBe(0);
			expect(e.name).toBe('Exception');
			if (!(e instanceof Exception)) throw new Error('Throw did not provide expected type.');
		}
	});
});

describe('ArgumentException', () => {
	it('paramName should be the same as what was provided.', () => {
		const param = 'param';
		const aex = new ArgumentException(param);
		expect(aex.paramName).toBe(param);
	});
});