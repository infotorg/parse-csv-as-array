import babel from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';

export default {
  input: 'src/parse-csv-as-array.js',
  output: [
    {
      file: 'dist/parse-csv-as-array.cjs',
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
    },
    {
      file: 'dist/parse-csv-as-array.esm.js',
      exports: 'named',
      format: 'esm',
    },
    {
      file: 'dist/parse-csv-as-array.umd.js',
      format: 'umd',
      name: 'parseAsBoolean',
      esModule: false,
      exports: 'named',
      sourcemap: true,
    },
  ],
  plugins: [
    babel({
      babelHelpers: 'runtime',
      exclude: 'node_modules/**',
    }),
    terser(),
  ],
};
