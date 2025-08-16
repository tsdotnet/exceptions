import {expect} from 'chai';
import Exception from '../dist/esm/';
import ArgumentException from '../dist/esm/ArgumentException';
import * as IndexModule from '../dist/esm/index';

describe('Module Validation', () =>
{
	it('should import individual classes from dist', () =>
	{
		expect(Exception).to.be.a('function');
		expect(ArgumentException).to.be.a('function');
		
		const ex = new Exception('test');
		expect(ex.message).to.equal('test');
	});

	it('should import from main index', () =>
	{
		expect(IndexModule.Exception).to.be.a('function');
		expect(IndexModule.ArgumentException).to.be.a('function');
		
		const ex = new IndexModule.Exception('test');
		expect(ex.message).to.equal('test');
	});
});