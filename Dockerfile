FROM node:18-alpine
WORKDIR /app
COPY . .
RUN yarn --registry=https://registry.npmmirror.com && npm run build
CMD yarn dev
EXPOSE 3000