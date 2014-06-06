function gtts(say_api){
  var base = document.getElementById("GoogleTTS");
  var Obj = document.createElement('iframe');
  Obj.setAttribute('border','0');
  Obj.style.width = '1px';
  Obj.style.height = '1px';
  Obj.src = "./GoogleTTSx.htm?tl=" + say_api;
  base.appendChild(Obj);
}
(function($){
  $(document).ready(function() {
    if($('.gtts').length){
      $('.gtts').each(function(){
        var flag = false;
        //テキスト取得、最初の文字を子文字に
        var say_text = $(this).text(),say_text = say_text.charAt(0).toLowerCase() + say_text.slice(1);
        var say_text = encodeURI(say_text);
        // 要素判別、小文字に
        var element = $(this).get(0).tagName.toLowerCase();
        // 英語か日本語か判別
        if(say_text.match(/^[a-zA-Z]/m)){
          var flg = true;
        }
        // api
        var say_api ;
        var message = say_text;
        var double = "no";
        var number = (new Date().getTime()).toString();
        if(flg === true){ // English
          var language = "en";
          var say_api = language + "&q=" + message + "&double=" + double + "&dummy=" + number;
          if(element === "td"){
            $(this).after("<td>");
            $(this).next("td").attr("class","say_box").append('<a rel="noreferrer" href="javascript:" class="say" onclick="gtts(\''+ say_api +'\');return false;">PLAY</a>');
          }
          else if(element === "li" ){
            $(this).wrapInner('<a target="_blank" rel="noreferrer" data-tips="クリックすると音声が再生されます" class="left-tip" href="javascript:" class="say_list" onclick="gtts(\''+ say_api +'\');return false;"></a>');
          }
          else if(element === "span" ){
            $(this).wrap('<a target="_blank" rel="noreferrer" data-tips="クリックすると音声が再生されます" class="top-tip" href="javascript:" class="say_span" onclick="gtts(\''+ say_api +'\');return false;"></a>');
          }
        } else{ // Japanese
          var language = "ja";
          var say_api = language + "&q=" + message + "&double=" + double + "&dummy=" + number;
          if(element === "td"){
            $(this).after("<td>");
            $(this).next("td").attr("class","say_box").append('<a target="_blank" rel="noreferrer" href="javascript:" class="say" onclick="gtts(\''+ say_api +'\');return false;">PLAY</a>');
          }
          else if(element === "li" ){
            $(this).wrapInner('<a target="_blank" rel="noreferrer" data-tips="クリックすると音声が再生されます" class="left-tip" href="javascript:" class="say_list" onclick="gtts(\''+ say_api +'\');return false;"></a>');
          }
          else if(element === "span" ){
            $(this).wrap('<a target="_blank" rel="noreferrer" data-tips="クリックすると音声が再生されます" class="top-tip" href="javascript:" class="say_span" onclick="gtts(\''+ say_api +'\');return false;"></a>');
          }
        }
      });
    }
  });
})(jQuery);
