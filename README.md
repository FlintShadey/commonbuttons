# commonbuttons

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build

### after build then move dist back to to the root folder
cp -R dist/* .


```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## Project Setup and Deployment Instructions

### Initialize Vue Project and Add Vuetify

1. Create a Vue project in the root directory:
   ```bash
   npx @vue/cli create .
   ```
2. Add Vuetify:
   ```bash
   vue add vuetify
   ```

### Configure Secure WebSocket and GitHub Pages

1. Create or edit `vue.config.js` with the following:
   ```javascript
   const { defineConfig } = require('@vue/cli-service');
   module.exports = defineConfig({
     transpileDependencies: true,
     devServer: {
       client: {
         webSocketURL: {
           protocol: 'wss', // Secure WebSocket
           hostname: '0.0.0.0', // Generic hostname
         },
       },
     },
     publicPath: './', // Relative paths for GitHub Pages
   });
   ```

###

### Build and Deploy

1. Build the project:
   ```bash
   npm run build
   ```
2. Copy build files to the root directory:
   ```bash
   cp -R dist/* .
   ```

