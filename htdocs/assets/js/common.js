
$(function(){
  $.ajax({
    type: 'GET',
    url: 'https://beta.json-generator.com/api/json/get/41uVeJUsf',
    dataType: 'json',
    success: function(json){
      var len = json.length;
      for(var i=0; i < len; i++){
        var data = json[i];
        var title = data.title;
        var desc = data.desc;
        $('.jsc_data_title').append(title)
        $('.jsc_data_desc').append(desc)
      }
    }
  });
})