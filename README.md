# Text chat VP Extension with SkyWay
Version 0.5.0   

# Description | 説明
1 on 1 Text Chatting extension for VP with [SkyWay](https://skyway.ntt.com/ja/) by NTT.
NTTの[SkyWay](https://skyway.ntt.com/ja/)を使ったVisual Programming向けの2者間テキストチャット機能拡張モジュールです。 
> **Warning**
> We are using old version of SkyWay.  
> 旧版のSkyWayを使っていますので、ご注意ください。

# How to Use | 使い方
## Get API Key | APIキーを取得する
こちらの手順でAPIキー取得してください。  
以下のようなIDが取得できますので、コピペできるようにご準備ください。
```
// API Key
12345678-abcd-ef12-3456-7890abcdef01
```

## Load extension | 拡張機能をロードする
以下は＊＊＊に組み込んだ時の例の手順です。  
最初にAPI Keyを入力するプロンプトが出るので、上記でコピーしたAPI Keyをペーストしてください。  

> **Note**
> ここで誤ってキャンセルしてしまっても、後ほど入室時に再度入力できますので、ご安心下さい。

ブロックカテゴリの一番下に"チャット"が表示されれば、準備完了です。

## ブロックを使う
まずは、チャットをする2つのPeer A, Peer Bにおいて、同じ部屋番号を指定して、入室します。

双方で入室ができたら、Peer AからPeer Bにチャットテキストを送ってみましょう。  
受信側となるPeer Bで、以下のブロックを使い受信の準備をします。

次に、Peer A側で以下のブロックを使って、`hello`というテキストを送付してみましょう。すぐあとにPeer B側で受け取った文字列が画面に表示されると完了です。B→Aについても同様に対応することで、双方向通信を実現することができます。

# Samples | サンプル
## Chatting application | チャットアプリ

## Robot application | ロボットアプリ


# Blocks | ブロック詳細仕様
## 入/退室 関連ブロック
## テキスト送付ブロック
## テキスト受け取り時のブロック
## 




# License⚖️
Copyright (c) 2023 [Tetsunori Nakayama](https://github.com/tetunori). MIT License.

# Reference📖

## Forked from
[scratch-extension-gamepad](https://github.com/eqot/scratch-extension-gamepad) by [eqot](https://github.com/eqot). MIT License.
