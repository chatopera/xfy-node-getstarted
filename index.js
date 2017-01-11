/**
 * Test API
 */
const xfyclient = require('xfy-node');

let file_name = "pro_16k/627b62fb776f833bad37efaf55954e1f_16.wav";

let params = {
    username: null, // 账号名称
    password: null, // 账号密码 
    appid: '5864ae2d', // AppID
    // 语言
    // zh_cn:简体中文
    // zh_tw:繁体中文
    // en_us:英语
    // 默认为zh_cn
    lang: 'en_us',
    // 口音
    // mandarin:普通话
    // cantonese:粤语
    // 默认为mandarin
    accent: 'mandarin',
    // 音频格式
    // 8000, 16000, 默认为16000
    sample_rate: 16000,
    // 音频文件位置，绝对路径
    audio_file: `/home/hain/git/xfy-node-getstarted/data.vioces/${file_name}`
}

xfyclient.iat(params)
	.then(function (result) {
	    console.log('result', result);
	}, function(err){
	    console.log('err', err);
	});
