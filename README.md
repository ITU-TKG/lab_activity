# lab_activity
## 更新履歴
### 2026/2/10
2/10時点での進捗状況を反映  
fileのrenameとそれぞれの役割を記載  

### 2026/2/13  
messages.jsonにpos neg neuのラベルを追加
qualtrics_notification_sys.jsにラベルごとにランダム化する機能を追加
feat, fixブランチにマージ　以後はこちらで作業すること

### 2026/2/23
README一部書き直し  

### 2026/3/2  
random group functionの削除　qualtrics_notification_sys.jsコードの見直し  

### 2026/3/25  
vercelにてmessages.jsonをデプロイすることでサーバー側の負担を減らす  

## ファイル説明
qualtrics_pro/messages.json --- 通知システムにより表示するテキスト  
qualtrics_pro/qualtrics_notification_sys.js --- qualtrics上で通知システムを動かす  
qualtrics_pro/json_display_localhost.js --- messages.jsonをlocalhost上で表示させqualtricsが認識できるようにする  
qualtrics_pro/test.js --- qualtrics上で設定したテキストの通知を表示するコード  
data/~　--- messages.jsonにいずれ書き写す下書きのようなもの  
img/ ~ --- 実験で使用する画像ファイル　qualtrics内にインポートされる  

＊"qualtrics_pro/qualtrics_notification_sys.js"　及び　"qualtrics_pro/test.js"　は　qualtrics内部で使用するファイルのコピー  
＊"qualtrics_pro/messages.json"　と　"qualtrics_pro/json_display_localhost.js"　は　ローカルで動かす  　

## 研究について（進捗など順を追って記載する）
### テーマ：個人の認知に他者感情が与える影響の分析 affective frame choice
例)  
・SNSで他人の投稿を見ていたら何か気分悪くなってきた  
・誹謗中傷  
・訃報  
・陰謀論  
・政府批判  
・ジェンダー論  
・ネタバレ 等々  
自分に関係しないところでの発言が行動に及ぼす影響について  

## 背景
心理学・認知科学で「論理的に等価な状況でも、それをどのように表現するか」を検証する研究がある  
＊参照　https://www.science.org/doi/10.1126/science.7455683  (the framing of decisions and Psychology of choice Tversky & Kahneman 1981)

### 参照点仮説とは  
自分の中での「参照点」(基準点)に基づいて表現(フレーム)を選択しているという考え方  

今回はフレーム選択課題を実験デザインに組み込む  
### フレーム選択課題について
<img width="601" height="916" alt="image" src="https://github.com/user-attachments/assets/77fc3f67-a8f7-43b6-8dcc-1df86db45388" />

画像引用元：Frontiers | Do People Explicitly Make a Frame Choice Based on the Reference Point?

上図の画像のうち一つ提示、続いて右の画像を提示しグラス内の水量を  
“半分も入っているか(half full)”   
“半分しか入っていない(half empty)”  
 のどちらで表現する方がより自然であるか問う課題  


次に以下の画像を提示する

<img width="200" height="300" alt="water250" src="https://github.com/user-attachments/assets/cd24934d-8c87-49a1-a1e6-f2e4dbacf8d2" />  

この時貴方は"半分も入っている(half full)","半分しか入っていない(half empty)"  
どちらの表現がより自然であるか問うという課題である。

このフレーム選択課題を用いて人の参照点仮説に基づくフレーム選択には感情が介入するのかを検証する　というのが私の研究テーマである。

## 実験デザイン

実験参加者をポジティブグループとネガティブグループ、ニュートラルグループに分けてそれぞれポジティブテキスト、ネガティブテキスト、ニュートラルテキストを提示します  
バックストーリーとして提示するのは  

「目の前の500mlのグラスには0mlの水が入っています。その後、少し部屋を離れた際友人からメッセージが届きました。  
10分後に戻ると、水の水量は250mlに達していました。今、このグラスを最も自然に表現する方法は何でしょうか?」




全体の方法としては

1, グラスを表示  
2, 水量の回答  
3, テキスト表示  
4, 現在の気分回答とテキストの評価する  
5, 250mlグラスを表示して　半分も入っている・半分しか入っていないどちらがより自然であるか問う  

設問数は各グループそれぞれ6＊56の336問程度になる

実験参加者をポジティブグループとネガティブグループ、ニュートラルグループに分けて
それぞれポジティブテキスト、ネガティブテキスト、ニュートラルテキストを提示します



## 今後の展望
・認知プロセスのモデル化の検討　検討中モデル = drift diffusion model
Drift diffusion modelは
二択問題の意思決定に関する認知過程のモデル
判断に至るまでの過程がわかる  

<img width="927" height="377" alt="image" src="https://github.com/user-attachments/assets/9dd4cd62-49ae-4234-83d6-89b486c16593" />  
画像参考元：
https://pmc.ncbi.nlm.nih.gov/articles/PMC2474742/#S2
(the diffusion decision model: theory and data for two-choice decision tasks
Roger Rtcliff, Gail McKoon 2009)  


## アンケートで通知システムを動かすには
nodejs環境使用  
json_diplay_localhost.jsをターミナル上で実行すると  

<img width="306" height="57" alt="image" src="https://github.com/user-attachments/assets/7f739579-1655-464a-a7f0-b3d2828766a2" />  

上の通り待機状態になる。この際localhost上でmessages.jsonが表示されるようになっているが、今回は同一ネット上以外からもアクセスできるようにしたい。    
これの実現はvscode上で実装されている機能を使った。  

詳細はこちら参考 https://code.visualstudio.com/docs/debugtest/port-forwarding  

ポート開放をして外部からアクセスできるURLを作成した。qualtrics上にはqualtrics_notification_sys.jsが組み込まれている。このコード上にはアクセスできるurlが張り付けられており(＊実験はまだ行ってないのでアクセスできないようになっているはず)、外部ネットワークから回答したとしてもmessages.jsonに記載された通知内容を表示することができるようになっている。  

<img width="1356" height="374" alt="image" src="https://github.com/user-attachments/assets/70d49d5f-6d9c-4fe2-9d28-2f23bc247770" />  

上が通知例  

