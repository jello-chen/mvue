import { isObject } from "../util/index";
import { arrayMethods } from "./array";

export function observe(value) {
    if (!isObject(value)) {
        return value;
    }
    let observer = new Observer(value);
    return observer;
}

export function defineReactive(obj, key, value) {
    observe(value);  // Observe deeply 
    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get: function() {
            return value;
        },
        set: function(newVal) {
            if (value === newVal) {
                return;
            }
            observe(newVal);  // Observe the new object you assign
            value = newVal;
        }
    })
}

export class Observer {

    constructor(value) {
        this.value = value;
        if (Array.isArray(value)) {
            value.__proto__ = arrayMethods;
            this.observeArray(value);
        }
        else {
            this.walk(value);
        }
    }

    walk(obj) {
        const keys = Object.keys(obj);
        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            defineReactive(obj, key, obj[key]);
        }
    }

    observeArray(items) {
        for(let i = 0, l = items.length; i < l; i++) {
            observe(items[i]);
        }
    }
}