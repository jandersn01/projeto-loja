export default{
    root: 'src',
    base: '/',
    build: {
        outDir: '../dist',
        rollupOpitons: {
            input:{
                main: '/index.html'
            }
        }
    },
};