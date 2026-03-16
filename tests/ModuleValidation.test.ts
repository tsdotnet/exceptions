import {describe, it, expect} from 'vitest';
import Exception from '../src/index.js';
import ArgumentException from '../src/ArgumentException.js';
import * as IndexModule from '../src/index.js';

describe('Module Validation', () => {
	it('should import individual classes from dist', () => {
		expect(typeof Exception).toBe('function');
		expect(typeof ArgumentException).toBe('function');

		const ex = new Exception('test');
		expect(ex.message).toBe('test');
	});

	it('should import from main index', () => {
		expect(typeof IndexModule.Exception).toBe('function');
		expect(typeof IndexModule.ArgumentException).toBe('function');

		const ex = new IndexModule.Exception('test');
		expect(ex.message).toBe('test');
	});
});