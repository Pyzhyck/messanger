Meteor.methods({
    'changeName': function(newUserInfo) {
        Accounts.setUsername(Meteor.userId(), newUserInfo.newLogin);
        Meteor.users.update(Meteor.userId(), {
            $set: {
                "profile.first-name": newUserInfo.newFName,
                "profile.last-name": newUserInfo.newLName
            }
        });
    },
    'insertMessage': function(message) {
        Messages.insert(message);
    },
    'updateMessages': function(user) {
        Messages.update({author: user.oldName}, {
            $set: {
                author: user.newName
            }
        });
    }
});