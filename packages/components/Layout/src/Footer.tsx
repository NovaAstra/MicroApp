import { defineComponent } from "vue"

import { bem } from "../layout.data"

const { name, n } = bem

const displayName = `${name}Footer` as const

export const Footer = defineComponent({
    name: displayName,
    setup(props, ctx) {
        return () => (
            <footer class={n('footer')}>
                {ctx.slots.default?.()}
            </footer>
        )
    }
})