(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.tsdotnet = global.tsdotnet || {}, global.tsdotnet.exceptions = global.tsdotnet.exceptions || {})));
})(this, (function (exports) { 'use strict';

    /*!
     * @author electricessence / https://github.com/electricessence/
     * Licensing: MIT
     * Based upon: https://msdn.microsoft.com/en-us/library/System.Exception%28v=vs.110%29.aspx
     */
    const NAME$7 = 'Exception';
    class Exception {
        message;
        innerException;
        name;
        stack;
        constructor(message = '', innerException) {
            this.message = message;
            this.innerException = innerException;
            this.name = this.getName();
            this.stack = this.captureStackTrace();
        }
        captureStackTrace() {
            try {
                const testError = new Error();
                if (typeof testError.stack === 'string' && testError.stack.length > 0) {
                    const stack = testError.stack
                        .replace(/^Error\n/, '')
                        .replace(/(.|\n)+\s+at new.+/, '') || '';
                    return this.toStringWithoutBrackets() + stack;
                }
                else {
                    return this.toStringWithoutBrackets() + '\n    (stack trace not available in this environment)';
                }
            }
            catch {
                return this.toStringWithoutBrackets() + '\n    (unable to capture stack trace)';
            }
        }
        toString() {
            return `[${this.toStringWithoutBrackets()}]`;
        }
        getName() {
            return NAME$7;
        }
        toStringWithoutBrackets() {
            const m = this.message;
            return this.name + (m ? ': ' + m : '');
        }
    }

    /*!
     * @author electricessence / https://github.com/electricessence/
     * Licensing: MIT
     * Based upon: https://msdn.microsoft.com/en-us/library/system.systemexception%28v=vs.110%29.aspx
     */
    const NAME$6 = 'SystemException';
    class SystemException extends Exception {
        getName() {
            return NAME$6;
        }
    }

    /*!
     * @author electricessence / https://github.com/electricessence/
     * Licensing: MIT
     * Based upon: https://msdn.microsoft.com/en-us/library/System.Exception%28v=vs.110%29.aspx
     */
    const NAME$5 = 'ArgumentException';
    class ArgumentException extends SystemException {
        paramName;
        constructor(paramName, message, innerException) {
            if (message && paramName)
                message = `{${paramName}} ${message}`;
            super(message, innerException);
            this.paramName = paramName;
        }
        getName() {
            return NAME$5;
        }
    }

    /*!
     * @author electricessence / https://github.com/electricessence/
     * Licensing: MIT
     * Based upon: https://msdn.microsoft.com/en-us/library/System.Exception%28v=vs.110%29.aspx
     */
    const NAME$4 = 'ArgumentNullException';
    class ArgumentNullException extends ArgumentException {
        constructor(paramName, message = (paramName ? `{${paramName}}` : 'Argument') + ' is null (or undefined).', innerException) {
            super(paramName, message, innerException);
        }
        getName() {
            return NAME$4;
        }
    }

    /*!
     * @author electricessence / https://github.com/electricessence/
     * Licensing: MIT
     * Based upon: https://msdn.microsoft.com/en-us/library/System.Exception%28v=vs.110%29.aspx
     */
    const NAME$3 = 'ArgumentOutOfRangeException';
    class ArgumentOutOfRangeException extends ArgumentException {
        actualValue;
        constructor(paramName, actualValue, message = ' ', innerException) {
            super(paramName, `(${actualValue}) ` + message, innerException);
            this.actualValue = actualValue;
        }
        getName() {
            return NAME$3;
        }
    }

    /*!
     * @author electricessence / https://github.com/electricessence/
     * Licensing: MIT
     * Based upon: https://msdn.microsoft.com/en-us/library/System.Exception%28v=vs.110%29.aspx
     */
    const NAME$2 = 'InvalidOperationException';
    class InvalidOperationException extends SystemException {
        getName() {
            return NAME$2;
        }
    }

    /*!
     * @author electricessence / https://github.com/electricessence/
     * Licensing: MIT
     * Based upon: https://msdn.microsoft.com/en-us/library/System.Exception%28v=vs.110%29.aspx
     */
    const NAME$1 = 'NotImplementedException';
    class NotImplementedException extends SystemException {
        getName() {
            return NAME$1;
        }
    }

    /*!
     * @author electricessence / https://github.com/electricessence/
     * Licensing: MIT
     * Based upon: https://msdn.microsoft.com/en-us/library/System.Exception%28v=vs.110%29.aspx
     */
    const NAME = 'NullReferenceException';
    class NullReferenceException extends SystemException {
        getName() {
            return NAME;
        }
    }

    exports.ArgumentException = ArgumentException;
    exports.ArgumentNullException = ArgumentNullException;
    exports.ArgumentOutOfRangeException = ArgumentOutOfRangeException;
    exports.Exception = Exception;
    exports.InvalidOperationException = InvalidOperationException;
    exports.NotImplementedException = NotImplementedException;
    exports.NullReferenceException = NullReferenceException;
    exports.SystemException = SystemException;
    exports.default = Exception;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=exceptions.js.map
