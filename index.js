const requestp = require('request-promise')

const addComment = (url, body, token) => requestp({
  url,
  json: true,
  headers: {
    'Authorization': 'token ' + token,
    'User-Agent': process.env.APP_NAME,
    'Accept': 'application/vnd.github.machine-man-preview+json'
  },
  method: 'POST',
  body: {
    body
  }
})

const commentsURL = process.env.COMMENTS_URL
if (typeof commentsURL === 'undefined') {
  console.error('No comments_url defined!')
} else {
  if (typeof process.env.TOKEN === 'undefined') {
    console.error('No token defined! Abort.')
  } else {
    const timeToWait = process.env.WAIT_MS || 120000 // 2 minutes
    console.log(`waiting before doing a comment for ${timeToWait} ms.`)
    setTimeout(() => {
      console.log('now doing a comment')
      addComment(commentsURL, process.env.COMMENT, process.env.TOKEN)
        .then((response) => {
          console.log('Response: ' + response)
          return response
        }).catch((error) => {
          console.error(error)
        })
    }, timeToWait)
  }
}

module.exports = { addComment }
