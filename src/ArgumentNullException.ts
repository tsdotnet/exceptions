/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 * Based upon: https://msdn.microsoft.com/en-us/library/System.Exception%28v=vs.110%29.aspx
 */

import ArgumentException from './ArgumentException';

const NAME: string = 'ArgumentNullException';

export default class ArgumentNullException
	extends ArgumentException
{
	constructor (
		paramName: string,
		message: string = (paramName ? `{${paramName}}` : 'Argument') + ' is null (or undefined).',
		innerException?: unknown)
	{
		super(paramName, message, innerException);
	}

	protected getName (): string
	{
		return NAME;
	}
}
