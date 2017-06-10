# Higher Expectations

This project is split into two parts:

* `src/` - A Vue.js app.
* `server/` - An Express app that exposes an API for the client.

## Development Setup

Ensure you have at minimum:

* Node.js >= 7.x

``` bash
# Install dependencies
npm install

# If you have Yarn
yarn
```

The dev server uses webpack middleware for hot reloading of the client source.

### Environment Variables

Create a copy of `.env.example` named `.env`. Populate the values as needed.

#### Launch Dev Server

Once you have the environment variables set, simply launch the dev server:

```bash
# npm
npm run dev

# Yarn
yarn dev
```

## Production

Before deploying, be sure to run the `build` script to bundle the client source:

```bash
# npm
npm run build

# Yarn
yarn build
```

This is done locally as we don't want to install dev dependencies on the server; waste of space/time.

### Heroku/Dokku

Ensure you have set the environment variables via `config:set`.

#### Deployment

Simply push to `heroku/dokku` and if all is well, the app _should_ start up.
