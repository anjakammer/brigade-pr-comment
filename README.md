<a href="https://codeclimate.com/github/anjakammer/brigade-pr-comment/maintainability"><img src="https://api.codeclimate.com/v1/badges/f1909b09712611c34fc7/maintainability" /></a>
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/Naereen/StrapDown.js/graphs/commit-activity)

### Comments on a pull request or issue

GitHub App Permissions:
* read&write Pull Requests

or

* read&write issues

## Required Environment Variables

| Key             | Description                                               |
| ----------------|-----------------------------------------------------------|
| `APP_NAME`      | Developer or App Name                                     |
| `WAIT_MS`       | Wait until sending the comment (default: 120000)          |
| `COMMENT`       | Comment to send                                           |
| `COMMENTS_URL`  | https: //api.github.com/repos/[org]/[repo]/pulls/[id]     |
| `TOKEN`         | jwt token to do api calls                                 |


## Usage
With the [Brigade-GitHub-App](https://github.com/Azure/brigade-github-app):

```javascript
const payload = JSON.parse(e.payload)
const previewUrl = `${secrets.hostName}/preview/${imageTag}`

const prCommenter = new Job('pr-comment', 'anjakammer/brigade-pr-comment')
prCommenter.env = {
  APP_NAME: 'your-GitHub-App',
  WAIT_MS: '0', // default is 2 minutes
  COMMENT: `Preview Environment is set up: [https://${previewUrl}](${previewUrl})`,
  COMMENTS_URL: payload.body.pull_request.comments_url, // depends on webhook payload
  TOKEN: payload.token
}
prCommenter.run()
```


## TODO
- [ ] automagically fetch `comments_url` from every webhook payload possible.

This way, only passing the brigade-payload string is needed. `comments_url` and `token` can be fetched from it.
