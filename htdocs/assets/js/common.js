
$(function(){
    $.ajax({
      type: 'GET',
      url: 'json/index.json',
      dataType: 'json',
      success: function(json){
        var len = json.length;
        for(var i=0; i < len; i++){
          var data = json[i];
          var title = data.title;
          var desc = data.desc;

          var titleDOM = '<h2 class=".jsc_data_title">' + title + '</h2>'
          var descDOM = '<div class=".jsc_data_desc">' + desc + '</div>'

          $('.jsc_data_push').append(titleDOM).append(descDOM)

        }
      }
    });
})