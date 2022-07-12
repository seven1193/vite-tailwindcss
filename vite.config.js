import path from 'path'

export default {
    // config options
    root: 'src',
    build: {
        outDir: '../dist',
        rollupOptions: {
            input: require('fast-glob').sync(['./src/**/*.html']).map(entry => path.resolve(__dirname, entry))
        }
    }
}