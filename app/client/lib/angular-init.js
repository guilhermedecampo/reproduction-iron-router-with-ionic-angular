/*****************************************************************************/
/* Angular start angular */
/*****************************************************************************/

angular.module('trendy',[
    'angular-meteor',
    'ionic'
  ]);

function onReady() {
  angular.bootstrap(document, ['trendy']);
}

if (Meteor.isCordova) {
  angular.element(document).on("deviceready", onReady);
}
else {
  angular.element(document).ready(onReady);
}

angular.module('trendy').config(['$locationProvider', '$interpolateProvider',
  function($locationProvider, $interpolateProvider) {
    // This adds way to use Angular expressions in Meteor templates
    // with [[]] wrapper since it's allowed to
    // mix Angular and Meteor expressions in the project.
    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');
  }
]);
