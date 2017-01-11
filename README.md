# xfy-node-getstarted
从Node.js客户端调用科大讯飞API.

> 仅支持Linux64
Read ```https://www.npmjs.com/package/xfy-node```.

## 准备工作
```
git clone git@git.oschina.net:ubiware/xfy-node-getstarted.git
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
阅读 index.js
```


## Trouble Shooting

### 转码

> 官方案例的数据格式: sox --info wav/iflytek01.wav
Input File     : 'wav/iflytek01.wav'
Channels       : 1
Sample Rate    : 16000
Precision      : 16-bit
Duration       : 00:00:04.36 = 69699 samples ~ 326.714 CDDA sectors
File Size      : 139k
Bit Rate       : 256k
Sample Encoding: 16-bit Signed Integer PCM

* 批量转码
```
cd data.vioces
find . -name "*.wav" -print0 | xargs -0 -I file sox file -r 16000 pro_16k/file
```

[科大讯飞API 英语 - IAT 听写接口识别不准确 Node.js, Linux](http://bbs.xfyun.cn/forum.php?mod=viewthread&tid=22602&pid=95376&page=1&extra=#pid95376)