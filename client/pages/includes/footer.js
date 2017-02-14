Template.footer.events({
    'submit form': function(e) {
        e.preventDefault();
        var date = new Date();
        var day = date.getDate(),
            month = date.getMonth()+1,
            year = date.getFullYear(),
            hours = date.getHours(),
            minutes = date.getMinutes(),
            seconds = date.getSeconds();

        var newMessage = {
            text: $(e.target).find('[name=message]').val(),
            author: Meteor.user().username,
            date: day+'.'+month+'.'+year+' at '+hours+':'+minutes+':'+seconds,
            location: $("#location").val()
        };
        $(e.target).find('[name=message]').val('');
        if (newMessage.text != '' && Session.get('location') > 0 ) {
            Meteor.call('insertMessage', newMessage);
        } else alert('Please select a location and type some message!!!');
    }
});