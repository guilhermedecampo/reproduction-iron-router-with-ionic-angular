/*****************************************************************************/
/* items feed methods:  */
/*****************************************************************************/

Meteor.methods({
  itemsFeed: function() {
    check(this.userId, String);
    var data = _.map(_.range(200),function(item) {
      return {
        _id: item,
        text: 'This is the example number '+ item
      };
    });
    return {
      data: data
    };
  }
});