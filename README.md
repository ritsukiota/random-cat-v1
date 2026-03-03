# Random Cat - ランダム猫画像ジェネレータ

ボタンを押すだけでランダムな猫画像を表示するWebアプリです。[TheCatAPI](https://thecatapi.com/) を使用して猫画像を取得します。

## 技術スタック

- [Next.js](https://nextjs.org) 16 (App Router)
- [React](https://react.dev) 19
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) 4

## 始め方

依存関係をインストールします:

```bash
npm install
```

開発サーバーを起動します:

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてください。

## 機能

- サーバーサイドレンダリングによる初期画像の取得
- 「他のにゃんこも見る」ボタンでクライアントサイドで新しい猫画像を取得
- ダークモード対応
