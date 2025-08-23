import {describe, it, expect} from 'vitest';
import { ArgumentException, Exception } from '../src/index';

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

	it('should capture proper stack trace without eval', () => {
		const ex = new Exception('Stack trace test');
		
		// Stack should exist and be non-empty
		expect(ex.stack).toBeTruthy();
		expect(ex.stack!.length).toBeGreaterThan(0);
		
		// Stack should not contain 'Error' at the beginning (cleaned by regex)
		expect(ex.stack).not.toMatch(/^Error\n/);
		
		// Should contain the exception message 
		expect(ex.stack).toContain('Stack trace test');
		
		// Should contain 'Exception:' from toStringWithoutBrackets()
		expect(ex.stack).toContain('Exception:');
		
		// Basic validation that it looks like a stack trace
		expect(ex.stack).toMatch(/at .+/); // Should have "at" lines
		
		console.log('✅ Stack trace captured successfully:', ex.stack?.substring(0, 100) + '...');
	});

	it('should handle environments without stack support gracefully', () => {
		// We can't easily mock Error.stack in tests, but we can verify
		// that the fallback messages are properly formatted
		const ex = new Exception('Fallback test');
		
		// Should always have some stack content (either real or fallback)
		expect(ex.stack).toBeTruthy();
		expect(ex.stack).toContain('Exception:');
		expect(ex.stack).toContain('Fallback test');
		
		// Should not be empty even in worst case
		expect(ex.stack!.length).toBeGreaterThan(10);
	});

	it('should handle errors during stack capture', () => {
		// Create a scenario where stack capture might fail
		// We'll temporarily break Error constructor to trigger catch block
		const originalError = global.Error;
		
		try {
			// Mock Error to throw during construction
			let mockCalled = false;
			global.Error = function(this: any) {
				mockCalled = true;
				throw new TypeError('Mocked error during stack capture');
			} as any;
			
			const ex = new Exception('Error capture test');
			
			// Should have fallback content even if stack capture fails
			expect(ex.stack).toBeTruthy();
			expect(ex.stack).toContain('Exception:');
			expect(ex.stack).toContain('Error capture test');
			
			// Should contain the ultimate fallback message
			expect(ex.stack).toContain('(unable to capture stack trace)');
			
			// Verify our mock was called
			expect(mockCalled).toBe(true);
		} finally {
			// Always restore original Error
			global.Error = originalError;
		}
	});

	it('should handle environments with no stack property', () => {
		// Mock Error to return undefined stack
		const originalError = global.Error;
		
		try {
			global.Error = function(this: any) {
				this.stack = undefined; // No stack property
			} as any;
			
			const ex = new Exception('No stack test');
			
			// Should use fallback message
			expect(ex.stack).toBeTruthy();
			expect(ex.stack).toContain('Exception:');
			expect(ex.stack).toContain('No stack test');
			expect(ex.stack).toContain('(stack trace not available in this environment)');
		} finally {
			global.Error = originalError;
		}
	});

	it('should handle environments with empty stack', () => {
		// Mock Error to return empty stack
		const originalError = global.Error;
		
		try {
			global.Error = function(this: any) {
				this.stack = ''; // Empty stack
			} as any;
			
			const ex = new Exception('Empty stack test');
			
			// Should use fallback message when stack is empty
			expect(ex.stack).toBeTruthy();
			expect(ex.stack).toContain('Exception:');
			expect(ex.stack).toContain('Empty stack test');
			expect(ex.stack).toContain('(stack trace not available in this environment)');
		} finally {
			global.Error = originalError;
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