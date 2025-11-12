# Git

## Git简介

Git是一个分布式版本控制系统，用于跟踪文件的变化，特别是源代码文件。它允许多个开发者协同工作，管理项目的历史记录。

## 初次安装

**配置用户名和邮箱**:

```bash
git config --global user.name "Your Name"
git config --global user.email ""
```

**查看清单**:

```bash
git config --list
git ls-files
```

## Git仓库

Git仓库(repository)是一个包含项目文件和版本历史的目录。可以是本地仓库或远程仓库。

### 创建本地仓库

```bash
# 在当前目录下初始化一个新的Git仓库
git init
```

### 克隆远程仓库

```bash
# 克隆远程仓库到本地
git clone
```

## Git的三个区域

Git有三个主要区域：**工作区、暂存区和版本库**。
1. **工作区**: 实际开发时操作的文件夹 -> `working_folder`
2. **暂存区**: 用于临时保存修改的文件，准备提交到版本库（暂存改动过的文件）-> `.git/index`
3. **版本库**: 存储所有提交记录的地方，包含所有版本的历史记录（产生一个版本快照） -> `.git/objects`

**相关命令**:
`git add <file>`: 将文件添加到暂存区
`git add .`: 将所有修改的文件添加到暂存区
`git commit -m "message"`: 将暂存区的修改提交到版本库

```text
folder ----(git add)----> .git/index -----(git commit)----> .git/objects
```

**暂存区的使用**：
1.**暂存区 -> 覆盖 -> 工作区**: *(确认完全覆盖时才使用)*
```bash
git restore --staged <file>
```
2.**从暂存区移除文件**: *(不删除工作区文件)*
```bash
git rm --cached <file>
```


## Git文件状态

Git文件有三种状态：**已跟踪（tracked**）、**未跟踪（untracked）** 和 **忽略（ignored）**。

**查看文件状态**:

```bash
git status -s
```

## Git回退版本

**查看Git提交历史**:

```bash
git log --oneline
```

输出example：

```text
bf1674d (HEAD -> main, origin/main, origin/HEAD) 水川星霖 | StelleRainn Mizukawa | みずかわ せいりん
47a5fed git
cd254cf git
bd89051 Update Diary
ccc14b7 Update Diary
```

**回退到指定版本**:

1. **软回退**: 保留工作区和暂存区的修改，回退到指定版本。

```bash
git reset --soft <commit_id>
```

2. **混合回退**: 保留工作区的修改，清空暂存区，回退到指定版本。*与`git reset`等价*

```bash
git reset --mixed <commit_id>
```

3. **硬回退**: 清空工作区和暂存区，完全回退到指定版本。

*hard 模式下，会将 HEAD 指针、暂存区和工作目录完全重置到指定的提交状态。这意味着所有未提交的本地修改（包括已暂存和未暂存的）都将被永久删除。*

```bash
git reset --hard <commit_id>
```



### `git reset` 不同模式对比总结

| Reset 模式 | HEAD 指针 | 暂存区 (Index) | 工作目录 (Working Directory) |
| :--- | :--- | :--- | :--- |
| `--soft` | 移动到目标 commit | **保留** | **保留** |
| `--mixed` (默认) | 移动到目标 commit | **重置**为目标 commit 的内容 | **保留** (修改变为未暂存状态) |
| `--hard` | 移动到目标 commit | **重置**为目标 commit 的内容 | **重置**为目标 commit 的内容 (所有未提交修改将丢失) |

## Git忽略文件

**忽略文件**: 在Git中，可以通过`.gitignore`文件来指定哪些文件或目录不需要被Git跟踪。**让git仓库更小更快，避免重复无意义的文件管理。**

新建`.gitignore`文件，并添加需要忽略的文件或目录。 e.g.

```text
# 忽略所有的日志文件
*.log
# 忽略node_modules目录
node_modules/
# 忽略所有的临时文件
*.tmp
# 忽略特定文件
config.json
dist
```

**注意**: `.gitignore`文件本身需要被Git跟踪，否则无法生效。

## 分支

**概念**：本质上是指向提交节点的可变指针，默认名字为`master`或`main`。

**HEAD指针影响工作区域/暂存区的代码状态** *HEAD -> master*

**作用**：分支允许在同一代码库中并行开发不同的功能或修复bug，避免相互干扰。

**常用命令**:

```bash
# 查看当前分支
git branch

# 创建新分支：以当前HEAD指针指向提交记录为起点，创建一个新的分支
git branch <branch_name>

# 切换到指定分支
git checkout <branch_name>

# 创建并切换到新分支：创建新分支并立即切换到该分支
git checkout -b <branch_name>

# 合并分支：将指定分支的修改合并到当前分支，并产生一个新的提交记录
# 注意：合并前需要先切换到目标分支
git merge <branch_name>

# 删除分支：删除指定分支/旧分支
git branch -d <branch_name>
```

**合并冲突**：不同分支中，对同一个文件的同一部分修改，Git无法干净的合并，产生合并冲突。 需要手动在工作区中解决冲突，然后再提交。


## Git远程仓库

**概念**：远程仓库是托管在服务器上的Git仓库，允许多个开发者协同工作。

**常用命令**:

```bash
# 添加远程仓库
git remote add <remote_name> <remote_url>

# 查看远程仓库
git remote -v

# 删除远程仓库
git remote remove <remote_name>

# 推送版本记录到远程仓库
git push -u <remote_name> <branch_name>

# 完整写法
git push --set-upstream <remote_name> <local_branch_name>:<remote_branch_name>

# 拉取远程仓库的最新版本到本地
git pull <remote_name> <branch_name>
# 等价于：
git fetch <remote_name> <branch_name> && git merge <remote_name>/<branch_name>

# 拉取合并
git pull --rebase <remote_name> <branch_name>

# 克隆远程仓库到本地
git clone <remote_url>

```

## 快速查看Git命令表格

```bash
# === 基本配置与查看 ===
git config --global user.name "Your Name"  # 设置全局用户名（写入 ~/.gitconfig）
git config --global user.email ""          # 设置全局邮箱（写入 ~/.gitconfig）
git config user.name "Your Name"           # 设置当前仓库用户名（仅作用于当前仓库）
git config user.email ""                   # 设置当前仓库邮箱（仅作用于当前仓库）
git config --list                          # 查看所有配置（包含系统/全局/本地）
git ls-files                               # 查看当前仓库被跟踪的文件列表

# === 仓库创建与克隆 ===
git init                                   # 在当前目录初始化仓库
git clone <remote_url>                     # 克隆远程仓库到本地
git clone -b <branch_name> <remote_url>    # 从远程仓库克隆并直接检出指定分支

# === 暂存与提交 ===
git add <file>                             # 将指定文件加入暂存区
git add .                                  # 将工作区所有变更加入暂存区
git commit -m "message"                    # 提交暂存区为一个新版本快照

# === 还原与取消跟踪 ===
git restore --staged <file>                # 将文件从暂存区移回工作区（取消暂存）
git restore <file>                         # 丢弃工作区对该文件的未提交修改
git rm --cached <file>                     # 仅移除跟踪，不删除工作区文件

# === 状态与日志 ===
git status                                 # 查看详细状态
git status -s                              # 查看简洁状态（短格式）
git log --oneline                          # 简化显示提交历史（单行）

# === 回退版本（reset） ===
git reset --soft <commit_id>               # 回退到提交，仅移动HEAD，保留暂存区与工作区
git reset --mixed <commit_id>              # 回退到提交，重置暂存区，保留工作区（默认）
git reset --hard <commit_id>               # 回退到提交，同时重置暂存区与工作区（危险）

# === 分支操作 ===
git branch                                 # 列出本地分支并标注当前分支
git branch <branch_name>                   # 基于当前HEAD创建新分支
git checkout <branch_name>                 # 切换到指定分支
git checkout -b <branch_name>              # 创建并切换到新分支
git merge <branch_name>                    # 合并指定分支到当前分支（可能产生冲突）
git branch -d <branch_name>                # 删除已合并的分支

# === 远程仓库 ===
git remote add <remote_name> <remote_url>  # 添加远程仓库并命名
git remote -v                              # 查看远程仓库地址列表
git remote remove <remote_name>            # 移除远程仓库
git push -u <remote_name> <branch_name>    # 首次推送并设置上游跟踪
git push --set-upstream <remote_name> <local_branch_name>:<remote_branch_name>  # 显式设置推送/跟踪分支
git pull <remote_name> <branch_name>       # 拉取并合并远程分支到当前分支
git fetch <remote_name> <branch_name> && git merge <remote_name>/<branch_name>  # 先抓取再手动合并
git pull --rebase <remote_name> <branch_name>  # 拉取并使用变基方式整合历史
```
