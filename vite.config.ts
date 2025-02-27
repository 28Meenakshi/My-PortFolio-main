import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define:{
    "process.env":{
      VITE_FIREBASE_APIKEY : process.env.VITE_FIREBASE_APIKEY,
      VITE_FIREBASE_AUTH_DOMAIN :process.env.VITE_FIREBASE_AUTH_DOMAIN,
      VITE_FIREBASE_PROJECT_ID : process.env.VITE_FIREBASE_PROJECT_ID,
      VITE_FIREBASE_STORAGE_BUCKET : process.env.VITE_FIREBASE_STORAGE_BUCKET,
      VITE_FIREBASE_MESSAGING_SENDER_ID : process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
      VITE_FIREBASE_APP_ID : process.env.VITE_FIREBASE_APP_ID,
      VITE_DEFAULT_PROFILE_URL : process.env.VITE_DEFAULT_PROFILE_URL
    }
  }
})
