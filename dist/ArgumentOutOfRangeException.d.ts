/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 * Based upon: https://msdn.microsoft.com/en-us/library/System.Exception%28v=vs.110%29.aspx
 */
import ArgumentException from './ArgumentException';
declare type Primitive = string | number | boolean;
export declare class ArgumentOutOfRangeException extends ArgumentException {
    readonly actualValue: Primitive | null | undefined;
    constructor(paramName: string, actualValue: Primitive | null | undefined, message?: string, innerException?: Error);
    protected getName(): string;
}
export default ArgumentOutOfRangeException;
