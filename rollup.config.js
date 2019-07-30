import vue from 'rollup-plugin-vue';
// Must import commonjs plugin, per https://stackoverflow.com/a/54435814
import commonjs from 'rollup-plugin-commonjs';
import buble from 'rollup-plugin-buble';
import resolve from 'rollup-plugin-node-resolve';

const external = ['vue', 'vuetify'];
const extensions = ['.js', '.vue'];
const isProduction = !process.env.ROLLUP_WATCH;
const globals = { vue: 'Vue', vuetify: 'Vuetify' };

const plugins = [
  resolve(),
  commonjs(),
  vue({
    template: {
      isProduction,
      compilerOptions: { preserveWhitespace: false }
    },
    css: true,
  }),
  buble(),
];

export default {
  external,
  plugins,
  input: './app.js',
  output: {
    globals,
    file: 'dist/app-bundle.js',
    format: 'iife'
  }
};
