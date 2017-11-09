var init_friend_lookup = function(){
  $('#friend-lookup-form').on('ajax:before', function(event, data, status){
    show_spinner();
  });
  $('#friend-lookup-form').on('ajax:after',function(event, data, status){
    hide_spinner();
  });
  $('#friend-lookup-form').on('ajax:success', function(event, data, status){
    $('#friend-lookup').replaceWith(event.detail[2].responseText);
    init_friend_lookup();
  });
  $('#friend-lookup-form').on('ajax:error', function(event, xhr, status, error){
    hide_spinner();
    $('#friend-lookup-results').replaceWith('');
    $('#friend-lookup-errors').replaceWith('friend was not found.');
  });
}

var ready = function() {
    init_friend_lookup();
};
$(document).ready(ready);
$(document).on('turbolinks:load', ready);
