/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 * Based upon: https://msdn.microsoft.com/en-us/library/System.Exception%28v=vs.110%29.aspx
 */
export default class Exception implements Error {
    readonly message: string;
    readonly innerException?: unknown;
    readonly name: string;
    readonly stack: string;
    constructor(message?: string, innerException?: unknown);
    private captureStackTrace;
    toString(): string;
    protected getName(): string;
    protected toStringWithoutBrackets(): string;
}
