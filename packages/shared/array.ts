import { isArray } from './is'

export type ClassName = string | undefined | null

export type Classes = (ClassName | [any, ClassName, ClassName?])[]

export const classes = (...classes: Classes): any[] =>
    classes.map((className) => {
        if (isArray(className)) {
            const [condition, truthy, falsy = null] = className
            return condition ? truthy : falsy
        }

        return className
    })
