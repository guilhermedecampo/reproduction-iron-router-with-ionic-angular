/*****************************************************************************/
/* Settings router configurations */
/*****************************************************************************/
Router.configure({
  layoutTemplate: 'LayoutNoTabs',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});

Router.route('/', {
  name: 'home',
  action: function() {
    this.render('Home');
  },
  where: 'client'
});

Router.route('otherRoute', {
  name: 'otherRoute',
  action: function() {
    this.render('OtherRoute');
  },
  where: 'client'
});

Router.route('feed', {
  name: 'feed',
  controller: 'FeedController',
  action: 'action',
  where: 'client'
});