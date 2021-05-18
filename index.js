'use strict';

// モジュールの呼び出し
const line = require('@line/bot-sdk');

// インスタンス生成
const config = {
    channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
    channelSecret: process.env.CHANNEL_SECRET,
}
const client = new line.Client(config);

// PushMessage先のユーザID
const userId = process.env.USER_ID;

// Lambdaのイベントハンドラ
// 磁気センサーが離れる度（郵便受けに郵便が届く度）に呼び出され実行される
exports.handler = (event, context) => {

    // センサーからの情報を試しに見てみる
    console.log(event);
    // センサーから得られる情報は以下の通り
    // {
    //     clickType: 3,
    //     clickTypeName: 'LONG',
    //     batteryLevel: 1,
    //     binaryParserEnabled: true
    // }

    context.succeed('End Function');
}