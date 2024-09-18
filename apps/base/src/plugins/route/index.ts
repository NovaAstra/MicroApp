import { type App } from 'vue';
import { router } from "@/router"

export async function setupRoute(app: App<Element>) {
    app.use(router)

    await router.isReady();
}