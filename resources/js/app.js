import "./bootstrap";
import "../css/app.css";

import { createApp, h } from "vue";
import { createInertiaApp } from "@inertiajs/inertia-vue3";
import { createPinia } from "pinia";
import { InertiaProgress } from "@inertiajs/progress";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { ZiggyVue } from "../../vendor/tightenco/ziggy/dist/vue.m";

// Get the application name from the document title, or set it to 'Laravel' if not found
const appName =
    window.document.getElementsByTagName("title")[0]?.innerText || "Laravel";

// Set up the Inertia app, with options for the page title, page component resolution, and app setup
createInertiaApp({
    // Set the page title to include the app name
    title: (title) => `${title} - ${appName}`,
    // Resolve the path to a page component using the Laravel Vite Plugin
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.vue`,
            import.meta.glob("./Pages/**/*.vue")
        ),
    // Set up the Vue app, with plugins for Inertia, Pinia, and Ziggy
    setup({ el, app, props, plugin }) {
        return createApp({ render: () => h(app, props) })
            .use(plugin)
            .use(createPinia())
            .use(ZiggyVue, Ziggy)
            .mount(el);
    },
});
// Initialize the Inertia progress bar with a specific color
InertiaProgress.init({ color: "#4B5563" });
