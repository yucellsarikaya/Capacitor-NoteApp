import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.note.app',
  appName: 'note-app',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
