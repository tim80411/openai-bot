# openai-bot
## 介紹
基於openai davinci 的discord bot

## 依賴
| dependency         | name                    |
| ------------------ | ----------------------- |
| runtime            | node 16.18              |
| process management | pm2                     |
| linter             | eslint + airbnb         |
| logger             | pino + pino-pretty(dev) |
| sensitive data     | dotenv                  |

## discord bot運行

### 前置
- node
- (optional)pm2
- (optional)pino-pretty
### 步驟
- 安裝依賴: `npm i`
- 建立.env檔案並參考.env.example放入兩個TOKEN: discord, openai
- 使用 `node index.js` or `node index | pino-pretty`

## 部署
### server
使用 [fly.io 與 flyctl](https://fly.io/docs/languages-and-frameworks/node/)

### 方法1: flyctl部署
適合只是想嘗試看看bot而沒有要額外修改開發的人
- 登入：flyctl auth login
- 部署：flyctl deploy

### 方法2: github action
適合想延伸目前的專案繼續開發者
- 透過指令取得fly.io token: `flyctl auth token`
- 設定 github repo secret: FLY_API_TOKEN
- 當新的feature push到main branch後就會觸發github action並開始部署

## 功能
目前是針對發送訊息時會針對特定訊息做處理
- `ping`: 會回應一個gif
- `-talk`: 會回應talk back ok
- `-ai <內容>`: 輸入內容，openai的server就會回應了