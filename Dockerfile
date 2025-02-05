# 1. ベースイメージ
FROM node:18-alpine

# 2. 作業ディレクトリを設定
WORKDIR /app

# 3. package.json と package-lock.json をコピー
COPY package.json package-lock.json ./

# 4. 依存関係をインストール
RUN npm install

# 5. アプリのコードをコピー
COPY . .

# 6. ポートを公開
EXPOSE 3000

# 7. コンテナ起動時のコマンド
CMD ["npm", "run", "dev"]
