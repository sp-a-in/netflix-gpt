// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'


// export default defineConfig({
//   // esbuild: {
//   //   loader: 'jsx', // Treat .js files as JSX
//   //   jsx: 'automatic', // Enable the new JSX runtime
//   // },
//   plugins: [
//     // {
//     //   name: 'treat-js-files-as-jsx',
//     //   async transform(code, id) {
//     //     if (!id.match(/src\/.*\.js$/))  return null

//     //     // Use the exposed transform from vite, instead of directly
//     //     // transforming with esbuild
//     //     return transformWithEsbuild(code, id, {
//     //       loader: 'jsx',
//     //       jsx: 'automatic',
//     //     })
//     //   },
//     // },
//     tailwindcss(),
//     react({
//       jsxRuntime: 'automatic', // Enable the new JSX runtime
//     }),
//   ],

//   optimizeDeps: {
//     force: true,
//     esbuildOptions: {
//       loader: {
//         '.js': 'jsx',
//       },
//     },
//   },
// })

// // react({
// //   babel: {
// //     babelrc: true, // Use the .babelrc file
// //   },
// // }),


import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    tailwindcss(),
    react({
      jsxRuntime: 'automatic', // Enable the new JSX runtime
      babel: {
        babelrc: true, // Use the .babelrc file
      },
    }),
  ],
  optimizeDeps: {
    force: true,
    esbuildOptions: {
      loader: {
        '.js': 'jsx', // Treat .js files as JSX
      },
    },
  },
  server: {
    host: '0.0.0.0', // 👈 Crucial for Docker networking
    port: 5173,
  },
});