# Github 多账号连接

教程展示 2 个 github 账号, 使用 ssh key 的方式拉取代码, 多个账号方法依次类推.

## 生成两个 SSH key

### 注意事项

1. 运行两次这个命令
2. 邮箱分别填写不同的, 需要连接的 `Github` 账号邮箱
3. 回车后, 第一个提示输入 `key`, 分别输入不同的路径名称, 示例: `/Users/zainjane[用户名]/.ssh/id_zain[生成的文件名]`
4. 其它提示都默认回车就可以了

```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
```

### 成果

最终会在 `/Users/zainjane[用户名]/.ssh/` 目录下, 生成四个文件, 类似:

```
id_zain
id_zain.pub
id_jane
id_jane.pub
```

## Github 配置公钥

将 `id_zain.pub` 和 `id_jane.pub` 中的内容, 分别配置到 `Github` 账号的 SSH 设置中.

可参考官方或其它教程: [新增 SSH 密钥到 GitHub 帐户](https://docs.github.com/cn/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)

## 添加 SSH 配置文件

在 `/Users/zainjane[用户名]/.ssh/` 目录下, 新增 `config` 文件

在 `config` 文件中写入下列内容

```bash
# zain
Host zain.github.com
Hostname github.com
IdentityFile ~/.ssh/id_zain
User zain

# jane
Host jane.github.com
Hostname github.com
IdentityFile ~/.ssh/id_jane
User jane
```

## 测试 SSH 连接

```bash
ssh -T git@zain.github.com
ssh -T git@jane.github.com
```

出现下列提示, 连接正常:

Hi ZainChen! You've successfully authenticated, but GitHub does not provide shell access.

Hi JaneMe! You've successfully authenticated, but GitHub does not provide shell access.

## Git 远程分支链接设置

修改在 `Github` 上复制到的 `SSH` 链接

```bash
git@github.com:ZainChen/zaindoc.git
# 修改成下面的样子(根据需要连接的不同 Github 账号, 修改成 config 中设置的不同 Host)
git@zain.github.com:ZainChen/zaindoc.git

# 拉取项目直接
git clone git@zain.github.com:ZainChen/zaindoc.git
```

## 通过 HTTPS 端口使用 SSH

防火墙或其它原因可能导致 `SSH` 连接超时.

可尝试通过 `HTTPS` 端口, 建立 `SSH` 连接.

### HTTPS 端口测试

```bash
ssh -T -p 443 git@ssh.github.com
```

出现下列提示, 说明可以通过 `HTTPS` 端口使用 `SSH`

Hi username! You've successfully authenticated, but GitHub does not provide shell access.

### 通过 HTTPS 启用 SSH 连接

修改或添加 `/Users/zainjane[用户名]/.ssh/` 目录下, `config` 文件

```bash
# zain
Host zain.github.com
Hostname ssh.github.com
Port 443
IdentityFile ~/.ssh/id_zain
User zain

# jane
Host jane.github.com
Hostname ssh.github.com
Port 443
IdentityFile ~/.ssh/id_jane
User jane
```

设置好后, 可使用上放的 `测试 SSH 连接` 命令, 进行测试.

## 参考资料

- [生成新的 SSH 密钥](https://docs.github.com/cn/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#generating-a-new-ssh-key)
- [新增 SSH 密钥到 GitHub 帐户](https://docs.github.com/cn/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)
- [通过 HTTPS 端口使用 SSH](https://docs.github.com/en/authentication/troubleshooting-ssh/using-ssh-over-the-https-port)
