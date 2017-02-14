Template.messagesList.helpers({
    messages: function() {
        if(Meteor.user() && Session.get('location') > 0) return Messages.find({location: Session.get('location')});
    }
});
