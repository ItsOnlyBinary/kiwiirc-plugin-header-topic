# Add topic to the channel header for [Kiwi IRC](https://kiwiirc.com)

This plugin replaces the default kiwiirc channel header with one containing the topic

#### Dependencies
* node (https://nodejs.org/)
* yarn (https://yarnpkg.com/)

#### Building and installing

1. Build the plugin

   ```console
   $ yarn
   $ yarn build
   ```

   The plugin will then be created at `dist/plugin-header-topic.js`

2. Copy the plugin to your Kiwi webserver

   The plugin file must be loadable from a webserver. Creating a `plugins/` folder with your KiwiIRC files is a good place to put it.

3. Add the plugin to KiwiIRC

   In your kiwi `config.json` file, find the `plugins` section and add:
   ```json
   {"name": "topic-header", "url": "/plugins/plugin-topic-header.js"}
   ```

## License

[Licensed under the Apache License, Version 2.0](LICENSE).
