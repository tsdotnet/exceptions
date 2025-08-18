/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 * Based upon: https://msdn.microsoft.com/en-us/library/System.Exception%28v=vs.110%29.aspx
 */

const NAME: string = 'Exception';

/*
 * NOTE:
 * An 'Error' is an implementation that may vary per platform.
 * Using instanceof is only assured if not extending from Error.
 */

/**
 * Represents errors that occur during application execution.
 */
export default class Exception
implements Error
{
	readonly name: string;
	readonly stack: string;

	/**
	 * Initializes a new instance of the Exception class with a specified error message and optionally a reference to the inner exception that is the cause of this exception.
	 * @param message
	 * @param innerException
	 */
	constructor (
		public readonly message: string = '',
		public readonly innerException?: unknown)
	{
		this.name = this.getName();
		this.stack = this.captureStackTrace();
	}

	/**
	 * Captures stack trace with fallbacks for different environments
	 */
	private captureStackTrace(): string
	{
		try
		{
			// Check if Error.stack is supported
			const testError = new Error();
			if (typeof testError.stack === 'string' && testError.stack.length > 0)
			{
				// Use native stack trace with cleanup
				const stack = testError.stack
					.replace(/^Error\n/, '')
					.replace(/(.|\n)+\s+at new.+/, '') || '';
				
				return this.toStringWithoutBrackets() + stack;
			}
			else
			{
				// Fallback: No native stack support
				return this.toStringWithoutBrackets() + '\n    (stack trace not available in this environment)';
			}
		}
		catch
		{
			// Ultimate fallback: Error during stack capture
			return this.toStringWithoutBrackets() + '\n    (unable to capture stack trace)';
		}
	}

	/**
	 * The string representation of the Exception instance.
	 */
	toString (): string
	{
		return `[${this.toStringWithoutBrackets()}]`;
	}

	/**
	 * A string representation of the error type.
	 */
	protected getName (): string
	{
		return NAME;
	}

	protected toStringWithoutBrackets (): string
	{
		const m = this.message;
		return this.name + (m ? ': ' + m : '');
	}

}

