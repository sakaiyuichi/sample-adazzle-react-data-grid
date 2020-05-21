# sample-adazzle-react-data-grid

## インストール

```
> yarn add react-data-grid
> yarn add @material-ui/core
```

## GitHub

https://github.com/adazzle/react-data-grid

## WebSite

https://adazzle.github.io/react-data-grid/

## 画面イメージ

![Image01](./Image01.png)

## 動作説明

- 「値の表示」ボタン押下で、現在のスプレッドのデータが表示される
- 商品SELECTを変更すると、商品に対する単価が自動セットされる
- 列ヘッダの列と列の境目をドラッグすることで、列の幅を変更可能
- セルを選択して Ctrl+C、その後、別のセルを選択して Ctrl+V で値をコピペできる
- セルを選択して、セルの右下のハンドルをドラッグすることで、同じ値を複数行（列）にコピー可能

## 問題点＆課題

- 最新のバージョンは7だが、どうもドキュメントのバージョンが5のようで、サンプル通りのプログラムを作成してもエラーが発生する場合がある  
サンプルについては、以下のコードが、色々な機能を包括しておいて参考になる  
https://github.com/adazzle/react-data-grid/blob/canary/stories/demos/CommonFeatures.tsx
- キーマップについては、引き続き要調査
