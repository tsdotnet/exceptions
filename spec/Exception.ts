import Exception from '../src/Exception';
import ArgumentException from '../src/ArgumentException';

const message = 'Test';

// test import and compilation.
new ArgumentException('x', message);

describe('Error', () => {
	it('instanceof should work', () => {
		const te = new TypeError(message);
		expect(te instanceof Error).toBeTrue();

		try
		{
			// noinspection ExceptionCaughtLocallyJS
			throw new TypeError(message);
		}
		catch(e)
		{
			expect(e.name).toBe('TypeError');
			if(!(e instanceof TypeError)) fail('Not expected type.');
		}
	});
});

describe('Exception', () => {
	it('should behave as an Error', () => {
		expect(() => { throw message; }).toThrow(message);

		const ex = new Exception(message);
		expect(ex instanceof Exception).toBeTrue();
		expect(ex.stack).not.toBeNull();
		expect(ex.stack.length).not.toBe(0);
		expect(ex.message).toBe(message);

		try
		{
			// noinspection ExceptionCaughtLocallyJS
			throw new Exception(message);
		}
		catch(e)
		{
			expect(e.stack).not.toBeNull();
			expect(e.stack.length).not.toBe(0);
			expect(e.name).toBe('Exception');
			if(!(e instanceof Exception)) fail('Throw did not provide expected type.');
		}
	});
});
