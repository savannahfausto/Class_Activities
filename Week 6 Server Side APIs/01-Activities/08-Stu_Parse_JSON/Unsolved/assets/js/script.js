// TODO: Edit the URL to get only 5 issues of Twitter's Chill repo
var requestUrl = 'https://api.github.com/repos/twitter/chill/issues';

fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log('Github Repo Issues \n----------');
    console.log(data);
    // TODO: Loop through the response
    for (let i = 20; i < 25; i++) {
      //console.log('data[0]', data[0]);
      //each issue
      var requestData = data[i];
      console.log("requestData.url", requestData.url);
      console.log("requestData.user.login", requestData.user.login);
      
    }
    // TODO: Console log each issue's URL and each user's login
  });
