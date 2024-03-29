/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 * Based upon: https://msdn.microsoft.com/en-us/library/System.Exception%28v=vs.110%29.aspx
 */

import SystemException from './SystemException';

const NAME: string = 'ArgumentException';

export default class ArgumentException
	extends SystemException
{
	readonly paramName: string;

	// For simplicity and consistency, lets stick with 1 signature.
	constructor (
		paramName: string,
		message?: string,
		innerException?: unknown)
	{
		if(message && paramName)
			message = `{${paramName}} ${message}`;
		super(message, innerException);
		this.paramName = paramName;
	}

	protected getName (): string
	{
		return NAME;
	}
}
