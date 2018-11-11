<a href="https://codeclimate.com/github/anjakammer/brigade-pr-comment/maintainability"><img src="https://api.codeclimate.com/v1/badges/f1909b09712611c34fc7/maintainability" /></a>
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/Naereen/StrapDown.js/graphs/commit-activity)

### Comments for new pushes in a pull request
The comment is for providing the new preview URL
of the newly deployed application, after a new push to a pull request.

GitHub App Permissions:
* read Repository Contents
* read&write Pull Requests

GitHub Events:
* Pull Request (action: synchronize)

## Required Environment Variables

| Key             | Description                          |
| ----------------|--------------------------------------|
| `APP_NAME`      | Developer or App Name                |
| `WAIT_MS`       | Wait until sending the comment       |
| `COMMENT`       | Comment to send                      |
| `PAYLOAD`       | gh webhook pull request synchronize  |
| `TOKEN`         | jwt token to do api calls            |
