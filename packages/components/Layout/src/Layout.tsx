import { defineComponent } from "vue"

import { bem } from "../layout.data"

const { name, n } = bem

export const Layout = defineComponent({
    name,
    setup(props, ctx) {
        return () => (
            <div class={n()}></div>
        )
    }
})