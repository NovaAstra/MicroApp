import { classes } from './array'
import { pascalCase } from './string'

export type BEM<S extends string | undefined, N extends string, NC extends string> = S extends undefined
    ? NC
    : S extends `$--${infer CM}`
    ? `${N}--${CM}`
    : S extends `--${infer M}`
    ? `${NC}--${M}`
    : `${NC}__${S}`


export function createNamespace<N extends string>(namespace: N) {
    return <P extends string>(name: P) => {
        const scope = `${namespace}-${name}` as const;

        const createBEM = <S extends string | undefined = undefined>(
            suffix?: S
        ): BEM<S, typeof namespace, typeof scope> => {
            if (!suffix) return scope as any

            if (suffix[0] === '$') return suffix.replace('$', namespace) as any

            if (suffix.startsWith('--')) return `${scope}${suffix}` as any

            return `${scope}__${suffix}` as any
        }

        return {
            name: pascalCase(scope),
            n: createBEM,
            classes
        }
    }
}