Template.profile.events({
    'submit form': function(e) {
        e.preventDefault();
        var oldLogin = Meteor.user().username;
        var newUserInfo = {
            newLogin: $(e.target).find('[name=userName]').val(),
            newFName: $(e.target).find('[name=userFName]').val(),
            newLName: $(e.target).find('[name=userLName]').val()
        }
        var user = {
            oldName: oldLogin,
            newName: newUserInfo.newLogin
        };
        Meteor.call('changeName', newUserInfo);
        Meteor.call('updateMessages', user);
    }
});

Template.profile.helpers({
    userInfo: function() {
        return {
            firstname: Meteor.user().profile['first-name'],
            lastname: Meteor.user().profile['last-name']
        }
    }
});
