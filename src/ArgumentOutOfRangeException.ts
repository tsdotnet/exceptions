/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 * Based upon: https://msdn.microsoft.com/en-us/library/System.Exception%28v=vs.110%29.aspx
 */

import ArgumentException from './ArgumentException';

type Primitive = string | number | boolean;

const NAME: string = 'ArgumentOutOfRangeException';

export class ArgumentOutOfRangeException
	extends ArgumentException
{
	constructor (
		paramName: string,
		public readonly actualValue: Primitive | null | undefined,
		message: string = ' ',
		innerException?: Error
	)
	{
		super(paramName, `(${actualValue}) ` + message, innerException);
	}

	protected getName (): string
	{
		return NAME;
	}
}

export default ArgumentOutOfRangeException;
