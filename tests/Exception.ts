import {expect} from 'chai';
import { ArgumentException } from '../dist/esm/index.js';

const message = 'Test';

// test import and compilation.
new ArgumentException('x', message);

describe('Error', () => {
	it('instanceof should work', () => {
		const te = new TypeError(message);
		expect(te instanceof Error).to.be.true;

		try
		{
			// noinspection ExceptionCaughtLocallyJS
			throw new TypeError(message);
		}
		catch(e:any)
		{
			expect(e.name).equal('TypeError');
			if(!(e instanceof TypeError)) throw new Error('Not expected type.');
		}
	});
});

describe('Exception', () => {
	it('should behave as an Error', () => {
		expect(() => { throw message; }).throw(message);

		const ex = new Exception(message);
		expect(ex instanceof Exception).to.be.true;
		expect(ex.stack).not.to.be.null;
		expect(ex.stack.length).not.equal(0);
		expect(ex.message).equal(message);

		try
		{
			// noinspection ExceptionCaughtLocallyJS
			throw new Exception(message);
		}
		catch(e:any)
		{
			expect(e.stack).not.to.be.null;
			expect(e.stack.length).not.equal(0);
			expect(e.name).equal('Exception');
			if(!(e instanceof Exception)) throw new Error('Throw did not provide expected type.');
		}
	});
});

describe('ArgumentException', ()=>{
	it('paramName should be the same as what was provided.', ()=>{
		const param = 'param';
		const aex = new ArgumentException(param);
		expect(aex.paramName).equal(param);
	});
});