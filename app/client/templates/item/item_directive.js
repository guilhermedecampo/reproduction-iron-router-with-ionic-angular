/*****************************************************************************/
/* Angular feed controller */
/*****************************************************************************/

angular.module('trendy').directive('trendyItem', function() {
  return {
    restrict: 'E',
    replace: true,
    template:
      '<div style="background-color: #fff">' +
        '<ion-item ng-click="goProfile(item._id)">' +
          '<p>' +
            '<i class="ion-ios-clock-outline"></i>' +
            '[[item.text]] --> [[item._id]]' +
          '</p>' +
        '</ion-item>' +
      '</div>',
  };
});