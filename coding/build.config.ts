import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig( {
    entries: [
        "./src/index",
        {
            builder: "mkdist",
            input: "./src",
        },
    ],
    name: 'ts-study',
    declaration: true,
    clean: true,
    rollup: {
        emitCJS: true
    }
})
