<h1 align="center"> omg.lol to GitHub status sync action </h1>

<p align="center">
Sync your <a href="https://omg.lol">omg.lol</a> status to your <a href="https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/personalizing-your-profile#setting-a-status">GitHub user profile status</a>.
</p>

## Inputs

### `omg_lol_user`

**Required** An omg.lol username. Used to retrieve the latest status of the user.

### `github_token`

**Required** A GitHub Personal Access Token with `user` scopes. Used for updating the GitHub user profile status.

## Outputs

### `emoji`

The emoji used in the status.

### `message`

The status message text.

## Example usage

```yaml
uses: lucasmelin/omg.lol-gh-status-sync-action@v1
with:
  omg_lol_user: lucasmelin
  github_token: ${{ secrets.PERSONAL_USER_TOKEN }}
```

## Development

Install the dependencies
```bash
$ npm install
```

Build the typescript and package it for distribution
```bash
$ npm run build && npm run package
```

## Publish

```bash
$ npm run package
$ git add dist
$ git commit -a -m "Production dependencies"
$ git push origin releases/v1
```