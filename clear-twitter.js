
// a lot of thanks go to my brother, Varabe
// run each segment separately. allow it time to go through the entire profile
// once finished, refresh the page and run the next script
// if removeTweet runs into likes or retweets, refresh the page, and rerun unlike and/or unretweet
// profit

// two unlike functions. pick whichever 

setInterval(() => {
    for (const d of document.querySelectorAll('div[data-testid="unlike"]')) {
        d.click()
    }
    window.scrollTo(0, document.body.scrollHeight)
  }, 2000)


  function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function Unlike() {
    for (const d of document.querySelectorAll('div[data-testid="unlike"]'))
    {
        d.click()
        await timeout(5)
        //document.querySelector('div[data-testid="unretweetConfirm"]').click()
    }
    window.scrollTo(0, document.body.scrollHeight)
  }
  setInterval(Unlike, 2000)

  function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// unretweet

async function innerUnretweet() {
    for (const d of document.querySelectorAll('div[data-testid="unretweet"]'))
    {
        d.click()
        await timeout(100)
        document.querySelector('div[data-testid="unretweetConfirm"]').click()
    }
    window.scrollTo(0, document.body.scrollHeight)
  }
  setInterval(innerUnretweet, 2000)

// remove tweets and replies

  function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function removeTweet() {
    for (const d of document.querySelectorAll('div[data-testid="caret"]'))
    {
      d.click()
      await timeout(100)
      document.querySelector('div[class="css-1dbjc4n r-1wbh5a2"]').click()
      await timeout(100)
      document.querySelector('div[data-testid="confirmationSheetConfirm"]').click()
    }
    window.scrollTo(0, document.body.scrollHeight)
    }
    setInterval(removeTweet, 2000)
