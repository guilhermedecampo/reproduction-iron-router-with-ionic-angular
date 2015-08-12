FeedController = RouteController.extend({
  action: function () {
    this.render('Feed');
  },
  onAfterAction: function () {
    Tracker.afterFlush(function () {
      angular.element(document).injector().invoke([
        '$compile', '$document', '$rootScope',
        function ($compile, $document, $rootScope) {
          $compile($document)($rootScope);
          if (!$rootScope.$$phase) {
            $rootScope.$apply();
          }
        }
      ]);
    });
  }
});
