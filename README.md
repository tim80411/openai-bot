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
- npm i
- 建立.env檔案並參考.env.example放入兩個TOKEN: discord, openai

## 功能
目前是針對發送訊息時會針對特定訊息做處理
- `ping`: 會回應一個gif
- `-talk`: 會回應talk back ok
- `-ai <內容>`: 輸入內容，openai的server就會回應了