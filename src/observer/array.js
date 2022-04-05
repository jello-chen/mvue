
const arrayProto = Array.prototype;
export const arrayMethods = Object.create(arrayProto);
const methodsToPatch = [
    'push',
    'pop',
    'shift',
    'unshift',
    'splice',
    'sort',
    'reverse'
];

methodsToPatch.forEach(method => {
    arrayMethods[method] = function(...args) {
        console.log('array');
        return arrayProto[method].apply(this, args);
    }
});
