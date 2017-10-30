
var init_stock_lookup;
init_stock_lookup = function(){

  $('#stock-lookup-form').on('ajax:success', function(event, data, status){

    $('#stock-lookup').replaceWith(event.detail[2].responseText);
    init_stock_lookup();
  });
  $('#stock-lookup-form').on('ajax:error', function(event, xhr, status, error){
    $('#stock-lookup-results').replaceWith('');
    $('#stock-lookup-errors').replaceWith('Stock was not found.');
  });
}

// $(document).on('turbolinks:load', function() {
//   init_stock_lookup();
// })
var ready = function() {
    init_stock_lookup();
};
$(document).ready(ready);
$(document).on('turbolinks:load', ready);
