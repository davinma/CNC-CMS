### About

ChinaNetCenter content manage system，即网宿科技内容管理系统，主要功能是推送 URLs 和 文件目录。

### Status

| 返回结果 | 说明 |
| :---------------- | :---------- |
| success append purge tasks... | 推送成功[1] |
| url or dir is lack | url 或 dir 缺失[2] |
| *** md5 validate failure... | MD5 校验错误失败[3] |
| url invalid ... | 更新的 url 错误[4] |
| can't purge channel[... ] | 推送的 url 错误[5] |

Tips:
[1]. 推送生效一般需要 2 - 4 分钟左右，请耐心等待。
[2]. url 或 dir 填写不完整，两者至少需要填写一项。
[3]. 请确认 MD5 的校验内容是否按顺序进行组合，或者密码是否正确。
[4]. 可能提交了不属于该用户名的 url，请确认所推送的 url 是否正确。
[5]. 省略号表示具体的域名，多个域名用逗号分隔，这表明可能提交了不属于当前用户名下的域名 url，请确认推送的 url 是否正确。


### License

Under the [MIT License](http://opensource.org/licenses/mit-license.php).
