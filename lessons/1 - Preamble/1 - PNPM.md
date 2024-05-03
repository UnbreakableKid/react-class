# PNPM

As you know, the nodejs ecosystem is full of package managers. The most popular one is npm. But there is a new kid on the block, pnpm. It is a package manager for JavaScript that is fast, disk space efficient. We are using it in this project, not only because it is fast and efficient, but also because it has some features that are very useful for monorepos.

## What is pnpm?

pnpm is a fast, disk space efficient package manager. It is a drop-in replacement for npm. It uses hard links and symlinks to save one version of a module only ever once on a disk. When using npm or yarn for example, if you have 100 projects using the same version of lodash, you will have 100 copies of lodash on your disk. With pnpm, lodash will be saved in a single place on the disk and a hard link will be created in the node_modules folder of each project that uses it. pnpm also has a deterministic lockfile. This means that you can be sure that the node_modules folder of your project will be the same on every machine that runs pnpm install.

### Automatic conflict resolution

if there are conflicting dependencies in your project, pnpm will automatically resolve them. It will use the latest version of the conflicting dependency. This is different from npm and yarn, which will throw an error if there are conflicting dependencies in your project.

### Commands comparison npm vs pnpm

| Command | npm | pnpm |
|---------|-----|------|
| Install | npm install | pnpm install |
| Uninstall | npm uninstall | pnpm uninstall |
| Update | npm update | pnpm update |
| Scripts | npm run start | pnpm start |

## Installing pnpm

### Powershell

```bash
iwr https://get.pnpm.io/install.ps1 -useb | iex
```

### Node

```bash
npm install -g pnpm
```

or through corepack

```bash
corepack enable pnpm
```

## Comparison Chart

https://pnpm.io/img/benchmarks/alotta-files.svg
