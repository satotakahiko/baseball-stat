# 環境
- Next.js
- TypeScript
- tailwindcss 
- Firebase
- microCMS

# Firebaseの設定
1. **lib\FirebaseConfig.js** を作成
1. **.env** を作成
1. `npm install --save-dev firebase-tools`（ツールのインストール）
1. `firebase login`
1. `firebase init`
1. `npm run build`
1. `firebase deploy`

# MLB stats 日本語訳
## 投手
### G, Games , Games Played
登板試合数
先発
20試合～25試合=少ない
26試合～30試合=平均
31試合～35試合=多い
リリーフ 
50試合～60試合=平均
61試合～70試合=やや多い
71試合～80試合=多い
### GS, Games Started
先発登板数
MLBの規定投球回が162回なので1試合6イニングを投げたとして27登板になるがあくまでも目安
### GO, Ground Outs
ゴロアウト数
### AO, Air Outs
フライアウト数
### R, Runs
失点数
### Doubles
被２塁打
### Triples
被３塁打
### Home Runs
被本塁打
### SO, Strike Outs
奪三振数
### BB, Bases on Balls
与四球数
### IBB, Intentional Bases on Balls, Intentional Walks
敬遠・故意四球数
### H, Hits
被安打数
### HB, HBP, Hits Batsmen, Hit by Pitch
与死球数
### AVG, Batting Average
被安打率
### AB, At Bats
対打席数（四死球、犠打、犠飛、打撃妨害、走塁妨害の数を除いた回数）
### OBP, On-base Percentage
被出塁率
### SLG, Slugging Percentage
被長打率
### OPS, On-base plus slugging
被出塁率 + 被長打率
### CS, Caught Stealing
被盗塁失敗数
### SB, Stolen Bases
被盗塁数（暴投はカウントされない）
### SB%, Stolen Base Percentage
被盗塁成功率
### GIDP, Ground Into Double Play
ダブルプレー数
### NP, Number of Pitches
投球数
### ERA, Earned Run Average
防御率
### IP, Innings Pitched
投球回数
### W, Win, Wins
勝数
### L, Loss, Losses
負数
### SV, Save, Saves
セーブ数
### SVO
セーブ機会数
### HLD, Holds
ホールド数
### BS, Blown Save
セーブ失敗数
### ER, Earned Runs
自責点
### WHIP, Walks And Hits Per Inning Pitched
１イニングあたりに出す走者の数
### BF, Batters Faced
対戦打者数
### O, Out, Outs
奪ったアウトの数
### Games Pitched
登板数？？？
### CG, Complete Games
完投数
### SHO, Shutouts
完封数
### Strikes
ストライク数
### Strike Percentage
ストライク率
### Balks
ボーク数
### WP, Wild Pitches
暴投
### PK, Pick-offs
奪った牽制アウト数
### TB, Total Bases
塁打総数
### GO/AO, Groundout-to-Airout Ratio
ゴロアウト率
ゴロアウトの総数をフライアウトの総数で割り、ゴロアウトとフライアウトの比率を調べる。同じ数の場合は1となり、これより数値が大きくなるほどゴロアウトの割合が高く、数値が小さくなって0に近付くほどフライアウトの割合が高い投手である事が分かる。
ゴロアウトが多い投手はツーシームなどの動く球を主体としている場合が多い
フライアウトが多い投手は空振りを取れるフォーシームを主体としている場合が多い
### WPCT, Win Percentage
勝率（勝数 / （勝数 ＋ 負数））
### P/IP, Pitches Per Inning
１イニングの平均投球数（投球数の合計 / 投球イニング数）
### GF, Games Finished
先発を除く、その試合で最後の投手となった数
### K/BB, Strikeout Walk Ratio
三振と四球の割合（奪三振数 / 与四球）
### K/9, Strikeouts per Nine Innings
奪三振（奪三振数 / 投球イニング数 * ９）
### BB/9, Walks per Nine Innings
９イニングあたりの四球割合
### H/9, Hits Per Nine Innings
９イニングあたりの被安打率
### RA9, Runs Allowed Per Nine Innings
９イニングあたりの失点率
### HR/9, Home Runs Per Nine Innings
９イニングあたりのホームラン率
### IR, Inherited Runners
リリーフ投手が登板時に背負った走者の数
### IR-A, Inherited Runners Allowed
リリーフ投手が登板時に背負った走者のうち、ホームに生還した割合
### IRS, Inherited Runners Scored
リリーフ投手が交代する際に、その投手が残した走者が後の投手によって失点された回数
### Catchers Interference
キャッチャーにおける打撃妨害回数
### SAC, Sacrifice Bunts
被犠打数
### SF, Sacrifice Flies
被犠牲フライ数

## 打者
### G, Games Played
出場試合数
### GO, Ground Outs
ゴロアウト数
### AO, Air Outs
フライアウト数
### R, Runs, Runs Scored
得点
### 2B, Two Base Hit , Double, Doubles
２塁打
### 3B, Three Base Hit , Triple, Triples
３塁打
### HR, Home Runs
本塁打
### SO, Strike Outs
三振数
### BB, Base On Balls
四球数
### IBB, Intentional Walks
敬遠数
### H, Hit, Hits
安打数
### HBP, Hit by Pitch
死球数
### Avg, Average
打率
### AB, At Bats
打席数（四死球、犠打、犠飛、打撃妨害、走塁妨害の数を除いた回数）
### OBP, On-Base Percentage
出塁率
### SLG, Slugging Percentage
長打率
### OPS, On-base plus slugging
出塁率 + 長打率
### CS, Caught Stealing
盗塁失敗数
### SB, Stolen Base
盗塁数
### SB%, Stolen Base Percentage
盗塁成功率
### GIDP, Ground Into Double Play
併殺打数
### NP, Number of Pitches
打席中に相手投手が投げた投球数
### TPA, PA, Total Plate Appearances, Plate Appearances
総打席数
### TB, Total Bases
塁打数
### RBI, Runs Batted In
打点
### LOB, Left On Base
残塁数
### SAC, Sacrifice Bunts
犠打数
### SF, Sacrifice Flies
犠牲フライ数
### BABIP, Batting Average on Balls In Play
本塁打、犠打を除くグラウンド内に飛んだ打球が安打になった割合（（安打 - 本塁打） / （打数 - 三振 - 本塁打 + 犠飛））
### GO/AO, Groundout-to-Airout Ratio
ゴロアウト率（ゴロアウト数 / フライアウト数）
### Catchers Interference
キャッチャーにおける打撃妨害回数
### AB/HR, At Bats per Home Run
本塁打を記録するまでにかかる打席数（打数 / 本塁打）
