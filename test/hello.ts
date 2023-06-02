/* _____________ ここにコードを記入 _____________ */

type HelloWorld = string // expected to be a string

/* _____________ テストケース _____________ */
import type { Equal, Expect, NotAny } from '../utils'

type cases = [
  Expect<NotAny<HelloWorld>>,
  Expect<Equal<HelloWorld, string>>,
]
