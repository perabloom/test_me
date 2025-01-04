import { TanStackRouterVite } from "@tanstack/router-vite-plugin"
import react from "@vitejs/plugin-react-swc"
import { defineConfig } from "vite"

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',     // Binds to all network interfaces, making it externally accessible
    port: process.env.PORT || 3000,   // Dynamically use the PORT environment variable, or default to 3000
  },
  plugins: [react(), TanStackRouterVite()],
})
