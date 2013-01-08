var url = 'js/emmet-joomla.json';

$.getJSON(url, function(data) {
  
  //console.log(data);

  var abbreviations = [], i = 0;
  $.each(data.html.abbreviations, function(m, n){
    abbreviations.push(m) 
  });

  $.each(data.html.snippets, function(k, e){
    var li = $('<li>').addClass('item');
    var div1 = $('<span>').text(abbreviations[i]).addClass('abbreviation');
    var div2 = $('<span>').text(e).addClass('command');
    li.append(div1).append(div2);
    $('#items').append(li);
    i++;
  });

});