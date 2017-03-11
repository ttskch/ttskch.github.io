---
layout: post
title: 我が家の照明とエアコン周りのソリューション
tags: ライフハック
eye_catch: https://cloud.githubusercontent.com/assets/4360663/23817893/1b26e2da-063a-11e7-9a8c-5d3e4dae4b43.png
---

我が家の現在の照明とエアコン周りのソリューションを晒してみます。どこかの誰かの参考になれば。

# 1. 活用しているガジェット

## IRKit

<div class="bgcolor" style="padding: 1em; margin-bottom: 1em;">
<div class="amazlet-box" style="margin-bottom:0px;"><div class="amazlet-image" style="float:left;margin:0px 12px 1px 0px;"><a href="http://www.amazon.co.jp/exec/obidos/ASIN/B00H91KK26/ttskch-22/ref=nosim/" name="amazletlink" target="_blank"><img src="https://images-fe.ssl-images-amazon.com/images/I/31HuSy3ACXL._SL160_.jpg" alt="IRKit - iPhone,iPadを使って外出先からエアコン等の家電を操作できる学習リモコン" style="border: none;" /></a></div><div class="amazlet-info" style="line-height:120%; margin-bottom: 10px"><div class="amazlet-name" style="margin-bottom:10px;line-height:120%"><a href="http://www.amazon.co.jp/exec/obidos/ASIN/B00H91KK26/ttskch-22/ref=nosim/" name="amazletlink" target="_blank">IRKit - iPhone,iPadを使って外出先からエアコン等の家電を操作できる学習リモコン</a><div class="amazlet-powered-date" style="font-size:80%;margin-top:5px;line-height:120%">posted with <a href="http://www.amazlet.com/" title="amazlet" target="_blank">amazlet</a> at 17.03.11</div></div><div class="amazlet-detail">maaash.jp <br />売り上げランキング: 4,039<br /></div><div class="amazlet-sub-info" style="float: left;"><div class="amazlet-link" style="margin-top: 5px"><a href="http://www.amazon.co.jp/exec/obidos/ASIN/B00H91KK26/ttskch-22/ref=nosim/" name="amazletlink" target="_blank">Amazon.co.jpで詳細を見る</a></div></div></div><div class="amazlet-footer" style="clear: left"></div></div>
</div>

[IRKit](http://getirkit.com/) はWi-Fi機能付きの赤外線学習リモコン。

自宅のWi-Fiに常時接続してくれるので、自宅内はもちろん外出先からでも任意のリモコン信号を発信させることができる。スマホアプリ（[iOS](https://itunes.apple.com/jp/app/id778790928?mt=8) / [Android](https://play.google.com/store/apps/details?id=com.getirkit.irkitsimpleremote&hl=ja)）からだけでなく [HTTPリクエスト経由でも操作できる](http://getirkit.com/#IRKit-Device-API) ので、ハッカーにとっては夢が広がるデバイス。

> 厳密にはIRKit自体が信号を覚えるわけではないので、学習リモコンというよりただの赤外線信号送出装置。

![](https://cloud.githubusercontent.com/assets/4360663/23583973/f8d3045e-0196-11e7-999d-6bbf70dfec2f.png)

こんな感じでiPhone（やAndroid）から家電を操作するのが基本的な使い方。ウィジェットにも対応していて便利。

## flic

<div class="bgcolor" style="padding: 1em; margin-bottom: 1em;">
<div class="amazlet-box" style="margin-bottom:0px;"><div class="amazlet-image" style="float:left;margin:0px 12px 1px 0px;"><a href="http://www.amazon.co.jp/exec/obidos/ASIN/B013WZFMGQ/ttskch-22/ref=nosim/" name="amazletlink" target="_blank"><img src="https://images-fe.ssl-images-amazon.com/images/I/31wnzmQFoSL._SL160_.jpg" alt="Flic The Wireless Smart Button フリックザワイヤレススマートボタン [並行輸入品]" style="border: none;" /></a></div><div class="amazlet-info" style="line-height:120%; margin-bottom: 10px"><div class="amazlet-name" style="margin-bottom:10px;line-height:120%"><a href="http://www.amazon.co.jp/exec/obidos/ASIN/B013WZFMGQ/ttskch-22/ref=nosim/" name="amazletlink" target="_blank">Flic The Wireless Smart Button フリックザワイヤレススマートボタン [並行輸入品]</a><div class="amazlet-powered-date" style="font-size:80%;margin-top:5px;line-height:120%">posted with <a href="http://www.amazlet.com/" title="amazlet" target="_blank">amazlet</a> at 17.03.11</div></div><div class="amazlet-detail">AfterMarket-Generic <br />売り上げランキング: 380,140<br /></div><div class="amazlet-sub-info" style="float: left;"><div class="amazlet-link" style="margin-top: 5px"><a href="http://www.amazon.co.jp/exec/obidos/ASIN/B013WZFMGQ/ttskch-22/ref=nosim/" name="amazletlink" target="_blank">Amazon.co.jpで詳細を見る</a></div></div></div><div class="amazlet-footer" style="clear: left"></div></div>
</div>

[flic](https://flic.io/) は様々なWebサービスやデジタルガジェットと連携できるシンプルなスマートボタン。

何やかんや色々できるけど、結局自分は今のところ自宅内での家電の操作にしか使ってない :sweat_smile:

# 2. 照明について

## 別々のコンセントに繋いだ間接照明をまとめて操作

まずどうしても譲れないポイントとして、別々のコンセントに繋いでいる間接照明をまとめてON/OFFしたいというのがあった。

そこで、

<div class="bgcolor" style="padding: 1em; margin-bottom: 1em;">
<div class="amazlet-box" style="margin-bottom:0px;"><div class="amazlet-image" style="float:left;margin:0px 12px 1px 0px;"><a href="http://www.amazon.co.jp/exec/obidos/ASIN/B01ABMGGQ8/ttskch-22/ref=nosim/" name="amazletlink" target="_blank"><img src="https://images-fe.ssl-images-amazon.com/images/I/41QDbjbxMbL._SL160_.jpg" alt="リモコンコンセント OCR-05W OCR-05W" style="border: none;" /></a></div><div class="amazlet-info" style="line-height:120%; margin-bottom: 10px"><div class="amazlet-name" style="margin-bottom:10px;line-height:120%"><a href="http://www.amazon.co.jp/exec/obidos/ASIN/B01ABMGGQ8/ttskch-22/ref=nosim/" name="amazletlink" target="_blank">リモコンコンセント OCR-05W OCR-05W</a><div class="amazlet-powered-date" style="font-size:80%;margin-top:5px;line-height:120%">posted with <a href="http://www.amazlet.com/" title="amazlet" target="_blank">amazlet</a> at 17.03.11</div></div><div class="amazlet-detail">(株)オーム電機 <br />売り上げランキング: 3,277<br /></div><div class="amazlet-sub-info" style="float: left;"><div class="amazlet-link" style="margin-top: 5px"><a href="http://www.amazon.co.jp/exec/obidos/ASIN/B01ABMGGQ8/ttskch-22/ref=nosim/" name="amazletlink" target="_blank">Amazon.co.jpで詳細を見る</a></div></div></div><div class="amazlet-footer" style="clear: left"></div></div>
</div>

とりあえずこれを3台（照明を繋いでいるコンセントの数）使って、このリモコン1つですべての間接照明をまとめてON/OFFできるようにした。

![](https://cloud.githubusercontent.com/assets/4360663/23583952/36d2fa76-0196-11e7-9427-abd4902346a1.png)

ただ、このリモコンがとにかくダサすぎて絶対に部屋に置いておきたくなかった（笑）ので、ちょうど持て余していたflicボタンをリモコン代わりに使うことにした。（本体も十分にダサいのでもっとかっこいいやつ誰か作ってほしい）

方法は簡単で、flicボタンを押したらIRKitがリモコンコンセントのリモコン信号を送出するように設定するだけ。flicボタンのクリックで間接照明ON、ダブルクリックまたは長押しで間接照明OFFという風に設定した。

これで、間接照明がflicボタン1つでON/OFFできるようになってとてもスッキリ。

![](https://cloud.githubusercontent.com/assets/4360663/23583895/4eeb3bfc-0194-11e7-98cc-a79bed2dee52.gif)

## 毎日一定の時刻になったら間接照明を自動でON/OFF

間接照明をIRKitからON/OFFできるようになったので、[IFTTT](https://ifttt.com/) を使って

* 毎日20:00になったら間接照明を自動でON
* 毎日23:00になったら間接照明を自動でOFF（寝ろの合図）

するようにしてみた。

IFTTTで [Date & Time](https://ifttt.com/date_and_time) と [Maker](https://ifttt.com/maker) を使えば、特定の時刻に任意のHTTPリクエストを送出できる。

## 天井照明のリモコン化

天井照明は間接照明に比べると普通にリモコン式のものが多いのであまり問題にならないと思うけど、おしゃれなペンダントライトとかだとリモコン式じゃなかったりするので、そういう照明を使う場合は

<div class="bgcolor" style="padding: 1em; margin-bottom: 1em;">
<div class="amazlet-box" style="margin-bottom:0px;"><div class="amazlet-image" style="float:left;margin:0px 12px 1px 0px;"><a href="http://www.amazon.co.jp/exec/obidos/ASIN/B01ABMGF1Y/ttskch-22/ref=nosim/" name="amazletlink" target="_blank"><img src="https://images-fe.ssl-images-amazon.com/images/I/31ivGVKTb3L._SL160_.jpg" alt="オーム 天井照明器具専用 リモコンスイッチOHM OCR-04W(07-8250)" style="border: none;" /></a></div><div class="amazlet-info" style="line-height:120%; margin-bottom: 10px"><div class="amazlet-name" style="margin-bottom:10px;line-height:120%"><a href="http://www.amazon.co.jp/exec/obidos/ASIN/B01ABMGF1Y/ttskch-22/ref=nosim/" name="amazletlink" target="_blank">オーム 天井照明器具専用 リモコンスイッチOHM OCR-04W(07-8250)</a><div class="amazlet-powered-date" style="font-size:80%;margin-top:5px;line-height:120%">posted with <a href="http://www.amazlet.com/" title="amazlet" target="_blank">amazlet</a> at 17.03.11</div></div><div class="amazlet-detail">オーム <br />売り上げランキング: 5,663<br /></div><div class="amazlet-sub-info" style="float: left;"><div class="amazlet-link" style="margin-top: 5px"><a href="http://www.amazon.co.jp/exec/obidos/ASIN/B01ABMGF1Y/ttskch-22/ref=nosim/" name="amazletlink" target="_blank">Amazon.co.jpで詳細を見る</a></div></div></div><div class="amazlet-footer" style="clear: left"></div></div>
</div>

これ使えばシーリングをリモコン化できるので、必要に応じて導入してみてもいいと思う。（例によってリモコンがとてもダサいけど笑）

# 3. エアコンについて

## エアコンの操作って、実はON/OFFしか使ってなくね？

これに気付いたときは思わずガッツポーズした。

エアコンって夏は冷房、冬は暖房しか使わないし、部屋の環境が特に変動しないので温度も風量も風向きも別に変更したくなることない（もちろん人によると思うけど）。つまり部屋にエアコンのリモコンなんて置いてなくても、flicボタン1つあれば特に困らない。

というわけで、間接照明と同様に、flicボタンのクリックでエアコンON、ダブルクリックまたは長押しでエアコンOFF、という風にしてみた。思ったとおり何も困らないし、部屋からエアコンのリモコンを追い出せてとてもハッピーになった。

> エアコンON時に冷房を入れるか暖房を入れるかは季節が変わったタイミングでflicの設定を変えるという運用

## 毎日一定の時刻になったらエアコンを自動でOFF

こちらも間接照明と同様に、[IFTTT](https://ifttt.com/) で自動OFFをセットしてみた。

* 平日の朝8:00になったらエアコンを自動でOFF（そろそろ出社）
* 毎日22:30になったらエアコンを自動でOFF（そろそろ寝る準備）

## 冬の朝は寝室の布団の中からリビングのエアコンをON

スマホからIRKit経由でリビングのエアコンを操作できると、冬の朝が本当に助かる。

<blockquote class="twitter-tweet" data-lang="ja"><p lang="ja" dir="ltr">IRKitのおかげで寝室のベッドの中からリビングのエアコンをONにできて冬は本当に助かる。目覚める→エアコンONにする→布団の中でツイッター見たりネットニュース見たりしてる間に目が冴えてくる→30分ぐらい経ったら布団から出てリビングへ行く→暖かい→最高、というルーティン。</p>&mdash; たつきち (@ttskch) <a href="https://twitter.com/ttskch/status/822192410327281664">2017年1月19日</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

> これも時刻で自動化しちゃってもいい気もするけど、間接照明と違ってエアコンは電気代がちょっと気になるので、今のところONは自動化してない。

# 4. Macからの操作

## BitBar

<div style="float:right;margin-left:2em;">
<img src="https://cloud.githubusercontent.com/assets/4360663/23584074/8eb9f4bc-0199-11e7-8c02-29f6818713c2.png">
</div>

自宅ではMacの前にいることが多いので、MacのメニューバーからもIRKitを操作できるようにしている。とても便利。

[BitBar](https://getbitbar.com/) というツールを使うとMacのメニューバー上で任意のスクリプトを実行することができるので、これを使っている。（[公式のMac用ランチャー](https://github.com/irkit/osx-launcher) もあるので普通はこっちを使えばいいと思う。）

実際にIRKitに信号の送出を命令するためのShell Scriptは以下のような感じ。ただのcurlのワンライナー。

```sh
#!/bin/sh

curl -i "http://192.168.xxx.xxx/messages" -H "X-Requested-With: curl" -d '{"format":"raw","freq":38,"data":[4878,5408,1514,1798,1514,1798,1514,3968,1463,3968,1463,3968,1463,3968,1463,1738,1567,1738,1567,65535,0,42612,4878,5408,1514,1927,1463,1927,1463,3834,1514,3834,1514,3834,1514,3834,1514,1861,1463,1861,1463]}'
```

<div style="clear:both;"></div>

## HaxWithFlic

<div style="float:right;margin-left:2em;">
<img src="https://cloud.githubusercontent.com/assets/4360663/23584103/3d1d4c98-019a-11e7-89dd-b456ff885266.png">
</div>

Flicはもともとスマホアプリを母艦にして使う製品だけど、APIが公開されていて [HaxWithFlic](https://github.com/50ButtonsEach/hax-with-flic-osx) というMac用のアプリもある。

初めはiPhoneを母艦にして使ってたけど、なぜかflicボタンとiPhoneのbluetoothペアリングがしょっちゅう切れて使い物にならなかった（多分iPhoneの問題）ので、常時起動してるMacを母艦にしたらとても快適になった。

下図のような感じで任意のスクリプトをアクションとして割り当てられるので、BitBarで使ってるShell Scriptをそのまま使い回せたのも嬉しい。（iPhoneのflicアプリでアクションにHTTPリクエストを割り当てるの地味にめんどくさかった）

<div style="clear:both;"></div>

![](https://cloud.githubusercontent.com/assets/4360663/23584113/9459ce00-019a-11e7-8faa-0dfe9783b124.png)

# おまけ：flicボタンでMacからBGMを再生

ついでにflicボタンでBGMの再生/停止を制御できるようにしてみた。osascriptコマンドを使ってiTunesを制御するShell Scriptを書いただけ。

**MacのボリュームをセットしてiTunesの「BGM」というプレイリストをランダム再生** （クリック）

```sh
#!/bin/sh

osascript -e 'set Volume 1'
osascript -e 'tell application "iTunes"' -e "set new_playlist to \"BGM\" as string" -e "play playlist new_playlist" -e "end tell";
osascript -e 'tell application "iTunes" to set shuffle of current playlist to 1';
```

**iTunesの再生を停止** （ダブルクリックまたは長押し）

```sh
#!/bin/sh

osascript -e 'tell application "iTunes" to stop';
```

これで、flicボタンを押すと小気味良いジャズが流れ出すという謎のおしゃれ仕様になったｗ
