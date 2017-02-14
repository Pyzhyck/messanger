Template.messageItem.helpers({
    isCurrentUser: function() {
        return this.author === Meteor.user().username;
    }
})