### About

ChinaNetCenter content manage system，即网宿科技内容管理系统，主要功能是推送 URLs 和 文件目录。

### Status

| 返回结果 | 说明 |
| :---------------- | :---------- |
| `success append purge tasks...` | 推送成功 ① |
| `url or dir is lack` | url 或 dir 缺失 ② |
| `*** md5 validate failure...` | MD5 校验错误失败 ③ |
| `url invalid ...` | 更新的 url 错误 ④ |
| `can't purge channel[... ]` | 推送的 url 错误 ⑤ |

Tips:<br>
① 推送生效一般需要 2 - 4 分钟左右，请耐心等待。<br>
② url 或 dir 填写不完整，两者至少需要填写一项。<br>
③ 请确认 MD5 的校验内容是否按顺序进行组合，或者密码是否正确。<br>
④ 可能提交了不属于该用户名的 url，请确认所推送的 url 是否正确。<br>
⑤ 省略号表示具体的域名，多个域名用逗号分隔，这表明可能提交了不属于当前用户名下的域名 url，请确认推送的 url 是否正确。

### Update

**2015-06-03**<br>
修改部分使用说明；<br>
**2015-05-27**<br>
增强部分易用性；<br>
**2015-05-26**<br>
合并部分代码，减少 http 请求；<br>
**2015-05-15**<br>
修改部分界面样式；<br>
新增系统 API 指南；<br>
**2015-05-14**<br>
增加预取和推送延迟功能；<br>
改善脚本逻辑；<br>
新增部分使用方法。<br>
**2015-05-13**<br>
修改和新增部分使用方法，体验更好。<br>
**2015-05-12**<br>
新增 dir 目录推送功能，改善脚本逻辑；<br>
之后的版本将增加预取和推送延迟功能，官方暂无任务查询相关的 API 接口。<br>
**2015-05-06**<br>
当前版本仅支持推送 url，dir 目录和推送延迟的功能将在以后的版本中逐渐添加。<br>
**2015-05-05**<br>
新增了使用说明，更新记录和关于部分，方便新手入门；<br>
省去/禁用用户名和密码输入部分，节省推送时间。

### License

Under the [MIT License](http://opensource.org/licenses/mit-license.php).
