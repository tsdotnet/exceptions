/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 * Based upon: https://msdn.microsoft.com/en-us/library/System.Exception%28v=vs.110%29.aspx
 */
/**
 * Represents errors that occur during application execution.
 */
export default class Exception implements Error {
    readonly message: string;
    readonly innerException?: unknown;
    readonly name: string;
    readonly stack: string;
    /**
     * Initializes a new instance of the Exception class with a specified error message and optionally a reference to the inner exception that is the cause of this exception.
     * @param message
     * @param innerException
     */
    constructor(message?: string, innerException?: unknown);
    /**
     * The string representation of the Exception instance.
     */
    toString(): string;
    /**
     * A string representation of the error type.
     */
    protected getName(): string;
    protected toStringWithoutBrackets(): string;
}
