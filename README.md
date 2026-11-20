<a href="https://tsdotnet.github.io/exceptions/"><img src="https://cdn.jsdelivr.net/gh/tsdotnet/exceptions@master/assets/banner.svg" alt="@tsdotnet/exceptions: Errors with meaning. The .NET exception types, in TS."></a>

[![npm version](https://img.shields.io/npm/v/@tsdotnet/exceptions.svg?style=flat-square)](https://www.npmjs.com/package/@tsdotnet/exceptions)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/tsdotnet/exceptions/blob/master/LICENSE)

Familiar .NET style exception classes, such as `ArgumentException` and `InvalidOperationException`, for TypeScript.

## Install

```sh
npm install @tsdotnet/exceptions
```

## Usage

```ts
import { ArgumentException, ArgumentOutOfRangeException } from '@tsdotnet/exceptions';

function setAge(age: number) {
	if (age < 0) throw new ArgumentOutOfRangeException('age', age, 'must not be negative.');
	if (Number.isNaN(age)) throw new ArgumentException('age', 'is not a number.');
}
```

Also included: `Exception`, `SystemException`, `ArgumentNullException`, `InvalidOperationException`, `NotImplementedException` and `NullReferenceException`.

## Use it from

ESM (`import { ArgumentException, ArgumentOutOfRangeException } from '@tsdotnet/exceptions';`) or CommonJS (`const { ArgumentException, ArgumentOutOfRangeException } = require('@tsdotnet/exceptions');`).

<details><summary>In a browser, without a bundler</summary>

```html
<script src="https://cdn.jsdelivr.net/npm/@tsdotnet/exceptions@1/dist/umd/exceptions.min.js"></script>
<script>
  const { ArgumentException, ArgumentOutOfRangeException } = tsdotnet.exceptions;
</script>
```

</details>

## Docs

[tsdotnet.github.io/exceptions](https://tsdotnet.github.io/exceptions/)
