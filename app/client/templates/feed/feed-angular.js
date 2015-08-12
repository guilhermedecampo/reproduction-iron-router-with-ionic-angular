/*****************************************************************************/
/* Angular feed controller */
/*****************************************************************************/

angular.module('trendy')

.controller('FeedCtrl', [ '$scope', '$meteor',
  function ($scope, $meteor) {
    $meteor.session('itemsFeed').bind($scope, 'items');
    var updateFeed = function () {
      Meteor.call('itemsFeed',
        function(error, response) {
        if (error) {
          console.log(error);
        }
        if (response) {
          Session.set('itemsFeed', response.data);
        }
      });
    };
    $scope.updateFeed = updateFeed;
    $scope.goProfile = function(id) {
      Router.go('otherRoute', {_id: id});
    };
  }
]);