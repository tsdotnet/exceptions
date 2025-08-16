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
		// Node has a .stack, let's use it...
		try
		{
			// To avoid unnecessary imports, use eval.
			// tslint:disable-next-line:no-eval
			const stack: string = eval('new Error()')
				.stack?.replace(/^Error\n/, '').replace(/(.|\n)+\s+at new.+/, '') || '';

			this.stack = this.toStringWithoutBrackets() + stack;
		}
		catch
		{
			this.stack = '';
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

