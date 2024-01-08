import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
    failOnWarn:false,
    name: 'bundle', // 设置构建生成的文件名为 "bundle"
    externals: ['debug'],
    replace: {
        __DEV__: JSON.stringify(process.env.NODE_ENV === 'development'),
    },
})