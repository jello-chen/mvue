import { observe } from "./observer/index";

export function initState(vm) {
    const options = vm.$options;
    if (options.props) {
        initProps(vm, options);
    }
    if (options.data) {
        initData(vm);
    }
}

function initProps(vm, options) {

}

function initData(vm) {
    let data = vm.$options.data;
    data = vm._data = typeof data === 'function' ? data.call(vm) : data;
    observe(data);
}

function initMethods(vm, options) {
    
}

function initComputed(vm, options) {
    
}

function initWatch(vm, options) {
    
}