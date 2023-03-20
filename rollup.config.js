import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  input: "src/scripts/main.js",
  output: {
    file: "build/js/main.min.js",
    format: "iife",
  },
  plugins: [nodeResolve()]
};
