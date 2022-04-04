import babel from 'rollup-plugin-babel';
import serve from 'rollup-plugin-serve';

export default {
    input: './src/index.js', // entry file
    output: {
        file: 'dist/mvue.js',
        format: 'umd',
        name: 'MVue',
        sourceMap: true
    },
    plugins: [
        babel({
            exclude: 'node_modules/**'
        }),
        serve({
            port: 8000,
            contentBase: '',
            openPage: '/index.html'
        })
    ]
}