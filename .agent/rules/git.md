---
trigger: always_on
---

# Git Workflow Rules

## Version Bumping Before Push to Main
- **Always bump the version** in package.json before pushing to the `main` branch.

### Version Bump Process
1. Before pushing to `main`, update the `version` field in package.json following [Semantic Versioning](https://semver.org/):
   - **Patch** (`x.x.X`): Bug fixes, minor changes, refactoring
   - **Minor** (`x.X.0`): New features that are backward compatible
   - **Major** (`X.0.0`): Breaking changes or major overhauls
2. Include the version bump in the same commit or as a separate commit before pushing.
3. Commit message for version bump should follow: `chore: bump version to X.X.X`

### Example Workflow
```bash
# 1. Update version in package.json (e.g., from 1.3.1 to 1.3.2)
# 2. Stage and commit changes
git add package.json
git commit -m "chore: bump version to 1.3.2"

# 3. Push to main
git push origin main