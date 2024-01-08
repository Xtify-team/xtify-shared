import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
    failOnWarn:false,
    name: 'bundle', // 设置构建生成的文件名为 "bundle"
    externals: ['debug'],
    declaration: true,
    clean: true,
    rollup: {
        output: {
            format: 'esm'
        }
    },
    replace: {
        __DEV__: JSON.stringify(process.env.NODE_ENV === 'development'),
    },
})