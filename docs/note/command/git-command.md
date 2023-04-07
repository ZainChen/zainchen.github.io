# Git commands

---

### Delete Files and Directories Filtered by Git

```bash
# Use Git to clear all untracked files and directories
# -f: Force deletion (no confirmation required)
# -x: Includes files and directories listed in the ignore checklist
# -d: Includes directories not tracked by the version control system (note: this option will delete even empty directories)
git clean -fxd
```

### Reset Branch

```bash
# Switch to the old branch "dev"
git checkout dev

# Reset the old branch "dev" to "master"
git reset --hard master

# Then, push the force to the remote repository (requires force push permission)
git push origin dev --force
```

### Delete Tag

```bash
# Delete local tag
git tag --delete TagName

# Synchronize to the remote repository
git push origin :TagName
```
