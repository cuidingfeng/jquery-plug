/*!
 * jquery-pause v1.0 (https://github.com/cuidingfeng/jquery-plug/)
 * Copyright 2015 cuidingfeng, Inc.
 * Email: admin@baiketupu.com
 * Licensed under MIT (https://github.com/cuidingfeng/jquery-plug/blob/master/LICENSE)
 * explain: jQuery链式调用时暂停指定时间再执行后面的操作
 */

/**
example:
$("#box").height(100).pause(2).height(200).find("p").addClass("red");
pause(2)，暂停2 秒执行后面的操作
*/

~function($){
  $.fn.pause = function(n){
    var obj = this, sx, funs = [];
    for (var items in obj){
      if( $.isFunction(obj[items])){
        sx = obj[items];
        ~function(items, sx){
          obj[items] = function(){
            funs.push({
              name: items,
              val: Array.prototype.slice.apply(arguments),
              fn: sx
            });
            return this;
          };
        }(items, sx);
      }
    }
    var setTime = setTimeout(function(){
      var o, self = obj
      for (var i=0,len=funs.length;i<len;i++) {
        o = funs[i];
        self = o.fn.apply(self, o.val);
      }
    }, n*1000);
    return obj;
  };
}(jQuery);
