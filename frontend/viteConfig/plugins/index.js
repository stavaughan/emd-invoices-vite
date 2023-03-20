import react from '@vitejs/plugin-react';
import { splitVendorChunkPlugin } from 'vite'
import configPwaPlugin from './pwa';

const configPlugins = (mode) => {
  return [
    react(),
    configPwaPlugin(mode),
    splitVendorChunkPlugin()
  ];
};

export default configPlugins;
