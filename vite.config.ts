import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext',
    cssMinify: true,
  },
  server: {
    warmup: {
      clientFiles: [
        './src/main.tsx',
        './src/App.tsx',
        './src/App.css',
        './src/index.css',
        './src/pages/Home.tsx',
        './src/components/MainLayout.tsx',
        './src/components/Header.tsx',
        './src/components/Footer.tsx',
        './src/components/Hero.tsx',
        './src/components/Section.tsx',
        './src/components/Card.tsx',
        './src/components/Button.tsx',
        './src/components/Badge.tsx',
        './src/components/ScrollToTop.tsx',
        './src/data/projects.ts',
        './src/hooks/usePageTitle.tsx',
        './src/hooks/useMobileMenu.tsx',
      ]
    }
  }
})
