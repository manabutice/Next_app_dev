# 1. ベースイメージを指定（軽量な Node.js イメージ）
FROM node:18-alpine

# 2. 作業ディレクトリを設定
WORKDIR /app

# 3. package.json をコピー
COPY package.json ./


RUN npm install
