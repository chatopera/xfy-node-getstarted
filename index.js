/**
 * Test API
 */
const xfyclient = require('xfy-node');

let file_name = "82ee0a11d9b71a1b8b93d15d2d9d257a_16.wav";

let params = {
    username: null, // 账号名称
    password: null, // 账号密码 
    appid: '5864ae2d', // AppID
    // 语言
    // zh_cn:简体中文
    // zh_tw:繁体中文
    // en_us:英语
    // 默认为zh_cn
    lang: 'zh_cn',
    // 口音
    // mandarin:普通话
    // cantonese:粤语
    // 默认为mandarin
    accent: 'mandarin',
    // 音频格式
    // 8000, 16000, 默认为16000
    sample_rate: 16000,
    // 音频文件位置，绝对路径
    audio_file: `data.vioces/${file_name}`
}

xfyclient.iat(params, function (result) {
    console.log(result);
})