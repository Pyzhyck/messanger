Template.header.events({
    'change #location':function(e) {
        Session.set('location', $(e.target).val());
    }
});
