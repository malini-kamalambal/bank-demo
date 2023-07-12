FROM node:19-alpine as base

# Make a directory for the app
RUN mkdir -p /opt/app
WORKDIR /opt/app

# Install dependencies
COPY package.json package-lock.json /opt/app/

FROM base as build

RUN npm ci

COPY . /opt/app

RUN npm run build

RUN npm prune --production

FROM base as final

COPY --from=build /opt/app/node_modules /opt/app/node_modules
COPY --from=build /opt/app/dist /opt/app

# Serve the app
CMD ["node", "server.js"]
