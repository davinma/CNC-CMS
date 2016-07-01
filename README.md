### About

ChinaNetCenter content manage system，即网宿科技内容管理系统，主要功能是推送 URLs 和 文件目录。

### Official help docs
to do

### How to

1. **推送 url 有什么规则？**<br>
每个 url 一行，以协议://开头，如（`http://` 或者 `mms://`）开头。 <br>
例如： <br>
`http://www.example.com/index.html`<br>
推送的 url 需要区分大小写。<br>
可以一次推送多个 url，每个 url 以回车分割，每日可推送的 url 数目为 5,000。

2. **推送 dir 有什么规则？**<br>
要更新的目录名，必须以 dir= 开头，如果要刷新多个目录，请以分号(;)隔开，目录名要给全名。 <br>
例如： <br>
`www.example.com/imgs/`<br>
表示更新 `www.example.com` 域名的 `imgs` 目录下所有文件。 <br>
请注意：目录开头不带 `http://`，每日可推送的 dir 数目为 500。

3. **推送内容包含空格怎么办？**<br>
由于空格是不符合 HTTP 协议的字符，所以需要对空格进行转义处理。具体做法是将推送内容中的 （空格）替换成%20。

4. **什么是预取？**<br>
1). 预取，CDN 节点在删除文件的同时回源获取新文件；<br>
2). 非预取，CDN 节点在接到下一个访问请求时，回源更新数据并缓存文件；<br>
3). 对于大文件，预取方式可能导致回源量突增，因此推荐使用非预取的方式。<br>
预取功能目前仅针对于 url 资源。

5. **延迟推送功能怎么用？**<br>
延迟推送表示需要推迟多少时间后开始推送任务，时间单位为分钟。如果需要将 url / dir<br> 延迟推送，请在上面的延迟输入框内输入非负整数，默认不延迟推送。

6. **推送密码生效的时间？**<br>
修改密码后的 10 分钟内，推送系统会自动同步。请在推送密码修改后 10 分钟再行启用新的推送密码进行 MD5 计算。

### Status

| 返回结果 | 说明 |
| :---------------- | :---------- |
| `success append purge tasks...` | 推送成功 ① |
| `url or dir is lack` | url 或 dir 缺失 ② |
| `*** md5 validate failure...` | MD5 校验错误失败 ③ |
| `url invalid ...` | 更新的 url 错误 ④ |
| `can't purge channel[... ]` | 推送的 url 错误 ⑤ |
| `running url or dir[...], please ...` | 重复的提交操作 ⑤ |
| `missing url or dir.` | 推送内容为空 ⑤ |

Tips:<br>
① 推送生效一般需要 2 - 4 分钟左右，请耐心等待。<br>
② url 或 dir 填写不完整，两者至少需要填写一项。<br>
③ 请确认 MD5 的校验内容是否按顺序进行组合，或者密码是否正确。<br>
④ 可能提交了不属于该用户名的 url，请确认所推送的 url 是否正确。<br>
⑤ 省略号表示具体的域名，多个域名用逗号分隔，这表明可能提交了不属于当前用户名下的域名 url，请确认推送的 url 是否正确。
⑥ 提交的内容产生重复，请在一分钟后再试。
⑦ 推送内容为空。

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
