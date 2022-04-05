import { initState } from "./state";

export function initMixin(MVue) {
    MVue.prototype._init = function(options) {
        const vm = this;
        vm.$options = options;
        initState(vm);
    }
}