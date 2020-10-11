[![chatoper banner][co-banner-image]][co-url]

[co-banner-image]: https://user-images.githubusercontent.com/3538629/42217321-3d5e44f6-7ef7-11e8-94e7-1574bfa1dbb8.png
[co-url]: https://www.chatopera.com

# xfy-node-getstarted
从Node.js客户端调用科大讯飞API.

> 仅支持Linux64, 仅支持听写接口
Read ```https://www.npmjs.com/package/xfy-node```.

![](https://raw.githubusercontent.com/Samurais/xfy-node-getstarted/master/resources/1.png)

## 准备工作
```
git clone git@github.com:Samurais/xfy-node-getstarted.git
cd resources
sudo unzip xfyun_Linux_voice_1135_5864ae2d.zip -d /opt/xfy-sdk
```

## 资源文件
**data.vioces**

*.silk 文件 - N/A
*.wav 文件 - 16k, 单通道
*.flac 文件 - 22k, 单通道

## 测试
```
cd xfy-node-getstarted
npm install
node index.js
```

## 解释
```
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

xfyclient.iat(params) // 返回Promise
	.then(function (result) {
	    console.log('result', result);
	}, function(err){
	    console.log('err', err);
	});
```


## Trouble Shooting

### 转码

> 官方案例的数据格式: sox --info wav/iflytek01.wav

```
Input File     : 'wav/iflytek01.wav'

Channels       : 1

Sample Rate    : 16000

Precision      : 16-bit

Duration       : 00:00:04.36 = 69699 samples ~ 326.714 CDDA sectors

File Size      : 139k

Bit Rate       : 256k

Sample Encoding: 16-bit Signed Integer PCM
```

* 批量转码

```
cd data.vioces
find . -name "*.wav" -print0 | xargs -0 -I file sox file -r 16000 pro_16k/file
```

[科大讯飞API 英语 - IAT 听写接口识别不准确 Node.js, Linux](http://bbs.xfyun.cn/forum.php?mod=viewthread&tid=22602&pid=95376&page=1&extra=#pid95376)

# Copyright & License

Code & Docs 2017© Hai Liang Wang hailiang.hl.wang@gmail.com

Code released under the ISC license

Docs released under Creative Commons



## Chatopera 云服务

[https://bot.chatopera.com/](https://bot.chatopera.com/)

[Chatopera 云服务](https://bot.chatopera.com)是一站式实现聊天机器人的云服务，按接口调用次数计费。Chatopera 云服务是 [Chatopera 机器人平台](https://docs.chatopera.com/products/chatbot-platform/index.html)的软件即服务实例。在云计算基础上，Chatopera 云服务属于**聊天机器人即服务**的云服务。

Chatopera 机器人平台包括知识库、多轮对话、意图识别和语音识别等组件，标准化聊天机器人开发，支持企业 OA 智能问答、HR 智能问答、智能客服和网络营销等场景。企业 IT 部门、业务部门借助 Chatopera 云服务快速让聊天机器人上线！

<details>
<summary>展开查看 Chatopera 云服务的产品截图</summary>
<p>

<p align="center">
  <b>自定义词典</b><br>
  <img src="https://static-public.chatopera.com/assets/images/64530072-da92d600-d33e-11e9-8656-01c26caff4f9.png" width="800">
</p>

<p align="center">
  <b>自定义词条</b><br>
  <img src="https://static-public.chatopera.com/assets/images/64530091-e41c3e00-d33e-11e9-9704-c07a2a02b84e.png" width="800">
</p>

<p align="center">
  <b>创建意图</b><br>
  <img src="https://static-public.chatopera.com/assets/images/64530169-12018280-d33f-11e9-93b4-9db881cf4dd5.png" width="800">
</p>

<p align="center">
  <b>添加说法和槽位</b><br>
  <img src="https://static-public.chatopera.com/assets/images/64530187-20e83500-d33f-11e9-87ec-a0241e3dac4d.png" width="800">
</p>

<p align="center">
  <b>训练模型</b><br>
  <img src="https://static-public.chatopera.com/assets/images/64530235-33626e80-d33f-11e9-8d07-fa3ae417fd5d.png" width="800">
</p>

<p align="center">
  <b>测试对话</b><br>
  <img src="https://static-public.chatopera.com/assets/images/64530253-3d846d00-d33f-11e9-81ea-86e6d47020d8.png" width="800">
</p>

<p align="center">
  <b>机器人画像</b><br>
  <img src="https://static-public.chatopera.com/assets/images/64530312-6442a380-d33f-11e9-869c-85fb6a835a97.png" width="800">
</p>

<p align="center">
  <b>系统集成</b><br>
  <img src="https://static-public.chatopera.com/assets/images/64530281-4ecd7980-d33f-11e9-8def-c53251f30138.png" width="800">
</p>

<p align="center">
  <b>聊天历史</b><br>
  <img src="https://static-public.chatopera.com/assets/images/64530295-5856e180-d33f-11e9-94d4-db50481b2d8e.png" width="800">
</p>

</p>
</details>


<p align="center">
  <b>立即使用</b><br>
  <a href="https://bot.chatopera.com" target="_blank">
      <img src="https://static-public.chatopera.com/assets/images/64531083-3199aa80-d341-11e9-86cd-3a3ed860b14b.png" width="800">
  </a>
</p>
