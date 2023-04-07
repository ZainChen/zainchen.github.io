# Connecting multiple Github accounts

This tutorial shows how to connect 2 Github accounts and pull code using SSH keys. The method for connecting multiple accounts is similar.

## Generating two SSH keys

### Precautions

1. Run this command twice.
2. Fill in different email addresses for each Github account.
3. After pressing enter, the first prompt asks for a 'key'. Enter a different path name each time, for example: `/Users/zainjane[Username]/.ssh/id_zain[Generated file name]`.
4. Hit enter for all other prompts.

```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
```

### Result

Four files will be generated in the directory `/Users/zainjane[Username]/.ssh/`, like:

```
id_zain
id_zain.pub
id_jane
id_jane.pub
```

## Configuring public keys in Github

Configure the contents of `id_zain.pub` and `id_jane.pub` into the SSH settings of the `Github` account.

References can be made to official or other tutorials: [Add SSH key to GitHub account](https://docs.github.com/cn/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)

## Adding an SSH configuration file

In the `/Users/zainjane[username]/.ssh/` directory, add a new `config` file

Write the following content in the `config` file

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

## Testing SSH connection

```bash
ssh -T git@zain.github.com
ssh -T git@jane.github.com
```

If successful, the following prompt should appear:

Hi ZainChen! You've successfully authenticated, but GitHub does not provide shell access.

Hi JaneMe! You've successfully authenticated, but GitHub does not provide shell access.

## Setting up Git remote branch links

Modify the `SSH` link copied on `Github`:

```bash
git@github.com:ZainChen/zaindoc.git
# Change it to the following format (according to the different Github accounts to be connected, modify it to the different Host set in 'config')
git@zain.github.com:ZainChen/zaindoc.git

# To pull the project directly:
git clone git@zain.github.com:ZainChen/zaindoc.git
```

## Using SSH through HTTPS port

Firewalls or other reasons may cause `SSH` connection timeout.

You can try to establish an `SSH` connection through the `HTTPS` port.

### HTTPS port test

```bash
ssh -T -p 443 git@ssh.github.com
```

If successful, the following prompt should appear:

Hi username! You've successfully authenticated, but GitHub does not provide shell access.

### Enabling SSH connection through HTTPS

Modify or add a `config` file in the directory `/Users/zainjane[Username]/.ssh/`.

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

After setting up, use the `Testing SSH Connection` command above to test.

## References

- [Generating a new SSH key and adding it to the SSH agent](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
- [Adding a new SSH key to your GitHub account](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)
- [Using SSH over the HTTPS port](https://docs.github.com/en/authentication/troubleshooting-ssh/using-ssh-over-the-https-port)
