var url = 'js/emmet-joomla.json';

$.getJSON(url, function(data) {
  $.each(data.html.snippets, function(i){
    var li = $('<li>').text(this);
    $('#joomla').append(li);
  });
});