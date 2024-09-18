import { createApp } from "vue"

import App from "@/App.vue"
import { setupRoute } from "@/plugins/route"
import { setupMicro } from "@/plugins/micro"

export async function bootstrap() {
    const app = createApp(App);

    await setupRoute(app)

    setupMicro(app)

    app.mount('#app');
}

