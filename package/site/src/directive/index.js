import * as range from "./module/range";
import * as loading from "./module/loading";

export function createDirective() {
    return {
        install(app) {
            const modules = {
                range,
                loading,
            };

            for (const name in modules) {
                app.directive(name, modules[name].install);
            }
        },
    };
}
