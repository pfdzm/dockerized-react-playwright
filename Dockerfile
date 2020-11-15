FROM mcr.microsoft.com/playwright:bionic

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

RUN yarn --frozen-lockfile

COPY . .

RUN yarn build --prod

EXPOSE 5000

CMD ["npx", "serve", "-s", "build"]