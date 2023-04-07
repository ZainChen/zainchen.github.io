# Npm command

---

### Sort dependencies and devDependencies in order

Sort the dependencies in `dependencies` and `devDependencies` without installing packages.

Simply remove or uninstall the missing packages from the dependency list.

```bash
# npm: Node Package Manager
# r: abbreviation for remove, meaning to remove a package
# -S: abbreviation for --save, meaning to save the dependency in the project's package.json file
# example-package: the name of the package to be removed (any non-existent package name can be used)
npm r -S example-package
```

### nvm install new version of Node and migrate all global dependencies of a specified Node version

```bash
# Install Node.js version v18.15.0 using nvm
# Reinstall all packages and use the dependency relationships of previously installed version v18.14.2
nvm install v18.15.0 --reinstall-packages-from=v18.14.2
```

### Display all global dependencies

```bash
# npm ls: list all installed packages and their dependencies
# --global: view globally installed packages
# --depth 0: only display the first level packages as the depth parameter passed to this command is 0
npm ls --global --depth 0
```

#### Install nrm from source code

When installing `nrm` directly with `npm i nrm -g`, the current source used will not be recognized.

```bash
npm i Pana/nrm -g
```
