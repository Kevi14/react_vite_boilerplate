import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '')
  return {
    // vite config
    plugins: [react()],
    define: {
      __APP_ENV__: env.APP_ENV,
    },
    resolve: {
      alias: {
        // Add your aliases here
        '@components': path.resolve(__dirname, 'src/components'),
        '@hooks': path.resolve(__dirname, 'src/hooks'),
        '@utils': path.resolve(__dirname, 'src/utils'),
        '@queries': path.resolve(__dirname, 'src/queries'),
      },
    },
  }
})
