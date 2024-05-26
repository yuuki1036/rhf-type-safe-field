type ArrayIndex = number

type FieldPath<T> = keyof T extends string
  ? {
      [K in keyof T]: T[K] extends object
        ? T[K] extends unknown[]
          ? [K] | [...[K], ArrayIndex, ...FieldPath<T[K][ArrayIndex]>]
          : [K] | [...[K], ...FieldPath<T[K]>]
        : [K]
    }[keyof T]
  : never

/**
 * RHF フィールドパスが API 型と一致しているか検証する
 *
 * フィールドパスを返します
 * 型指定後に使い回せるように高階関数にしています
 * path の配列を引数に指定してください
 * 配列の展開には対応していないので各階層の path を明示的に指定してください
 *
 * @example
 * const validateField = createFieldPathValidator<InputDataType>()
 * const index = 0
 * validateField(['path1', 'path2', index, 'path3']) // 'path1.path2.0.path3'
 *
 * const prefix = ['path1', 'path2']
 * validateField([...prefix, index, 'path3']) // Error
 */
export const createFieldPathValidator = <T>() => {
  return function <P extends FieldPath<T>>(path: [...P]): string {
    return path.join('.')
  }
}
