var app = angular.module('Table', ['ngResource']);

app.controller('TableCtrl', function($scope, $resource, $timeout) {

    /**
     * init controller and set defaults
     */
    function init () {

      // set a default username value
      $scope.username = "golum_from";
      
      // empty tweet model
      $scope.tweetsResult = []

      $scope.getTweets();
    }

    /**
     * requests and processes tweet data
     */
    function getTweets (paging) {

      var params = {
        action: 'user_timeline',
        user: $scope.username
      };

      if ($scope.maxId) {
        params.max_id = $scope.maxId;
      }

      // create Tweet data resource
      $scope.tweets = $resource('/tweets/:action/:user', params);

      // GET request using the resource
      $scope.tweets.query( { }, function (res) {

        if( angular.isUndefined(paging) ) {
          $scope.tweetsResult = [];
        }

        //if it's on "get more tweets"
        //then pop the tweet with the max_id so it will not show twice
        if(paging) {
          $scope.tweetsResult.pop();
        }
        
        $scope.tweetsResult = $scope.tweetsResult.concat(res);

        // for paging - https://dev.twitter.com/docs/working-with-timelines
        $scope.maxId = res[res.length - 1].id;

      });
    }

    /**
     * binded to @user input form
     */
    $scope.getTweets = function () {
      $scope.maxId = undefined;
      getTweets();
    }

    /**
     * binded to 'Get More Tweets' button
     */
    $scope.getMoreTweets = function () {
      getTweets(true);
    }

    init();
});