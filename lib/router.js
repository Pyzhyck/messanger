Router.configure({
    layoutTemplate: 'layout'
});

Router.route('/',{name: 'messagesList'});
Router.route('/profile', {name: 'profile'});