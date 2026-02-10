# lab_activity
## 更新履歴
2/10時点での進捗状況を反映  
fileのrenameとそれぞれの役割を記載  

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
### テーマ：個人の認知に他者感情が与える影響の分析
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
<img width="208" height="310" alt="watar500" src="https://github.com/user-attachments/assets/bf880a6a-4e66-423d-9c94-a41c84c0e928" />
<img width="245" height="365" alt="water0" src="https://github.com/user-attachments/assets/3587399d-901e-4483-902a-ce87136c6d54" />  

上のどちらかの画像を提示する  
その後何らかの用で部屋を出たのち、戻ってきた所(という想定)コップは以下の通りになっていた  

<img width="215" height="318" alt="water250" src="https://github.com/user-attachments/assets/cd24934d-8c87-49a1-a1e6-f2e4dbacf8d2" />  

この時貴方は"半分も入っている(half full)","半分しか入っていない(half empty)"  
どちらの表現がより自然であるか問うという課題である。

このフレーム選択課題を用いて人の参照点仮説に基づくフレーム選択には感情が介入するのかを検証する　というのが私の研究テーマである。

## 実験デザイン
<img width="1600" height="900" alt="image" src="https://github.com/user-attachments/assets/92c2d8e6-254c-4093-b072-8a4f9117f438" />

<img width="1600" height="900" alt="image" src="https://github.com/user-attachments/assets/84ed1fc5-604d-4162-b32c-36d90fc077c4" />

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

aか0どちらかの閾値に達すると判断が行われる


