# omg.lol to GitHub status sync action

Syncs your [omg.lol](omg.lol) status to your [GitHub user profile status](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/personalizing-your-profile#setting-a-status).

## Development

Install the dependencies
```bash
$ npm install
```

Build the typescript and package it for distribution
```bash
$ npm run build && npm run package
```

Run the tests :heavy_check_mark:
```bash
$ npm test
```

## Publish

```bash
$ npm run package
$ git add dist
$ git commit -a -m "Production dependencies"
$ git push origin releases/v1
```