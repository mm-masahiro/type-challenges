/*
  11 - Tuple to Object
  -------
  by sinoon (@sinoon) #初級 #object-keys

  ### 質問

  タプルを受け取り、その各値のkey/valueを持つオブジェクトの型に変換する型を実装します。

  例えば：

  ```ts
  const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
  const tuple = [1,2,3,4] as const

  type result = TupleToObject<typeof tuple> // expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
  ```

  > GitHubで確認する：https://tsch.js.org/11/ja
*/

/* _____________ ここにコードを記入 _____________ */

type TupleToObject<T extends readonly (string | number)[]> = {
  [K in T[number]]: K;
}

/* _____________ テストケース _____________ */
import type { Equal, Expect } from '../utils'

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
const tupleNumber = [1, 2, 3, 4] as const
const tupleMix = [1, '2', 3, '4'] as const

type cases = [
  Expect<Equal<TupleToObject<typeof tuple>, { tesla: 'tesla'; 'model 3': 'model 3'; 'model X': 'model X'; 'model Y': 'model Y' }>>,
  Expect<Equal<TupleToObject<typeof tupleNumber>, { 1: 1; 2: 2; 3: 3; 4: 4 }>>,
  Expect<Equal<TupleToObject<typeof tupleMix>, { 1: 1; '2': '2'; 3: 3; '4': '4' }>>,
]

// @ts-expect-error
type error = TupleToObject<[[1, 2], {}]>
