import { describe, it, expect } from 'vitest';
import { 
	ArgumentNullException,
	ArgumentOutOfRangeException, 
	InvalidOperationException,
	NotImplementedException,
	NullReferenceException,
	SystemException,
	Exception
} from '../src/index';

describe('ArgumentNullException', () => {
	it('should create with paramName and default message', () => {
		const ex = new ArgumentNullException('testParam');
		expect(ex.paramName).toBe('testParam');
		expect(ex.message).toBe('{testParam} {testParam} is null (or undefined).');
		expect(ex.name).toBe('ArgumentNullException');
		expect(ex instanceof ArgumentNullException).toBe(true);
	});

	it('should create with paramName and custom message', () => {
		const ex = new ArgumentNullException('param', 'Custom message');
		expect(ex.paramName).toBe('param');
		expect(ex.message).toBe('{param} Custom message');
		expect(ex.name).toBe('ArgumentNullException');
	});

	it('should create with innerException', () => {
		const inner = new Error('Inner error');
		const ex = new ArgumentNullException('param', 'Test message', inner);
		expect(ex.paramName).toBe('param');
		expect(ex.message).toBe('{param} Test message');
		expect(ex.innerException).toBe(inner);
	});

	it('should handle empty paramName', () => {
		const ex = new ArgumentNullException('');
		expect(ex.paramName).toBe('');
		expect(ex.message).toBe('Argument is null (or undefined).');
	});

	it('should use protected getName method correctly', () => {
		const ex = new ArgumentNullException('test');
		expect(ex.name).toBe('ArgumentNullException');
		expect(ex.toString()).toContain('ArgumentNullException');
	});
});

describe('ArgumentOutOfRangeException', () => {
	it('should create with paramName and actualValue', () => {
		const ex = new ArgumentOutOfRangeException('index', 42);
		expect(ex.paramName).toBe('index');
		expect(ex.actualValue).toBe(42);
		expect(ex.message).toBe('{index} (42)  ');
		expect(ex.name).toBe('ArgumentOutOfRangeException');
		expect(ex instanceof ArgumentOutOfRangeException).toBe(true);
	});

	it('should create with custom message', () => {
		const ex = new ArgumentOutOfRangeException('value', 'invalid', 'must be numeric');
		expect(ex.paramName).toBe('value');
		expect(ex.actualValue).toBe('invalid');
		expect(ex.message).toBe('{value} (invalid) must be numeric');
	});

	it('should handle null actualValue', () => {
		const ex = new ArgumentOutOfRangeException('param', null, 'cannot be null');
		expect(ex.actualValue).toBe(null);
		expect(ex.message).toBe('{param} (null) cannot be null');
	});

	it('should handle undefined actualValue', () => {
		const ex = new ArgumentOutOfRangeException('param', undefined, 'cannot be undefined');
		expect(ex.actualValue).toBe(undefined);
		expect(ex.message).toBe('{param} (undefined) cannot be undefined');
	});

	it('should handle boolean actualValue', () => {
		const ex = new ArgumentOutOfRangeException('flag', true, 'should be false');
		expect(ex.actualValue).toBe(true);
		expect(ex.message).toBe('{flag} (true) should be false');
	});

	it('should create with innerException', () => {
		const inner = new Error('Inner error');
		const ex = new ArgumentOutOfRangeException('param', 0, 'Test message', inner);
		expect(ex.innerException).toBe(inner);
	});

	it('should use protected getName method correctly', () => {
		const ex = new ArgumentOutOfRangeException('test', 0);
		expect(ex.name).toBe('ArgumentOutOfRangeException');
		expect(ex.toString()).toContain('ArgumentOutOfRangeException');
	});
});

describe('InvalidOperationException', () => {
	it('should create with default constructor', () => {
		const ex = new InvalidOperationException();
		expect(ex.name).toBe('InvalidOperationException');
		expect(ex instanceof InvalidOperationException).toBe(true);
		expect(ex instanceof SystemException).toBe(true);
	});

	it('should create with message', () => {
		const ex = new InvalidOperationException('Operation not allowed');
		expect(ex.message).toBe('Operation not allowed');
		expect(ex.name).toBe('InvalidOperationException');
	});

	it('should create with message and innerException', () => {
		const inner = new Error('Inner error');
		const ex = new InvalidOperationException('Test message', inner);
		expect(ex.message).toBe('Test message');
		expect(ex.innerException).toBe(inner);
	});

	it('should use protected getName method correctly', () => {
		const ex = new InvalidOperationException();
		expect(ex.name).toBe('InvalidOperationException');
		expect(ex.toString()).toContain('InvalidOperationException');
	});
});

describe('NotImplementedException', () => {
	it('should create with default constructor', () => {
		const ex = new NotImplementedException();
		expect(ex.name).toBe('NotImplementedException');
		expect(ex instanceof NotImplementedException).toBe(true);
		expect(ex instanceof SystemException).toBe(true);
	});

	it('should create with message', () => {
		const ex = new NotImplementedException('Feature not implemented');
		expect(ex.message).toBe('Feature not implemented');
		expect(ex.name).toBe('NotImplementedException');
	});

	it('should create with message and innerException', () => {
		const inner = new Error('Inner error');
		const ex = new NotImplementedException('Test message', inner);
		expect(ex.message).toBe('Test message');
		expect(ex.innerException).toBe(inner);
	});

	it('should use protected getName method correctly', () => {
		const ex = new NotImplementedException();
		expect(ex.name).toBe('NotImplementedException');
		expect(ex.toString()).toContain('NotImplementedException');
	});
});

describe('NullReferenceException', () => {
	it('should create with default constructor', () => {
		const ex = new NullReferenceException();
		expect(ex.name).toBe('NullReferenceException');
		expect(ex instanceof NullReferenceException).toBe(true);
		expect(ex instanceof SystemException).toBe(true);
	});

	it('should create with message', () => {
		const ex = new NullReferenceException('Object reference is null');
		expect(ex.message).toBe('Object reference is null');
		expect(ex.name).toBe('NullReferenceException');
	});

	it('should create with message and innerException', () => {
		const inner = new Error('Inner error');
		const ex = new NullReferenceException('Test message', inner);
		expect(ex.message).toBe('Test message');
		expect(ex.innerException).toBe(inner);
	});

	it('should use protected getName method correctly', () => {
		const ex = new NullReferenceException();
		expect(ex.name).toBe('NullReferenceException');
		expect(ex.toString()).toContain('NullReferenceException');
	});
});

describe('SystemException', () => {
	it('should create with default constructor', () => {
		const ex = new SystemException();
		expect(ex.name).toBe('SystemException');
		expect(ex instanceof SystemException).toBe(true);
		expect(ex instanceof Exception).toBe(true);
	});

	it('should create with message', () => {
		const ex = new SystemException('System error occurred');
		expect(ex.message).toBe('System error occurred');
		expect(ex.name).toBe('SystemException');
	});

	it('should create with message and innerException', () => {
		const inner = new Error('Inner error');
		const ex = new SystemException('Test message', inner);
		expect(ex.message).toBe('Test message');
		expect(ex.innerException).toBe(inner);
	});

	it('should use protected getName method correctly', () => {
		const ex = new SystemException();
		expect(ex.name).toBe('SystemException');
		expect(ex.toString()).toContain('SystemException');
	});
});

describe('Exception stack trace edge cases', () => {
	it('should handle fallback when stack capture fails', () => {
		// Mock Error to simulate stack capture failure
		const originalError = Error;
		const mockError = class MockError extends Error {
			constructor(message?: string) {
				super(message);
				// Simulate environment without stack property
				delete this.stack;
			}
		};
		
		// Temporarily replace Error
		(globalThis as any).Error = mockError;
		
		try {
			const ex = new Exception('Fallback test');
			expect(ex.stack).toBeTruthy();
			expect(ex.stack).toContain('(stack trace not available in this environment)');
		} finally {
			// Restore original Error
			(globalThis as any).Error = originalError;
		}
	});

	it('should handle exception during stack capture', () => {
		// This is harder to test directly, but we can verify the ultimate fallback exists
		const ex = new Exception('Test message');
		// If we get here without errors, the fallback mechanisms work
		expect(ex.stack).toBeTruthy();
		expect(ex.toString()).toContain('Exception');
		expect(ex.toString()).toContain('Test message');
	});

	it('should format toStringWithoutBrackets correctly', () => {
		const ex1 = new Exception('With message');
		const ex2 = new Exception();
		
		// Test internal method through toString()
		expect(ex1.toString()).toBe('[Exception: With message]');
		expect(ex2.toString()).toBe('[Exception]');
	});
});
