# jquery-plug
jQuery插件


##jquery-pause

explain: jQuery链式调用时暂停指定时间再执行后面的操作

example:暂停2 秒执行后面的操作

$("#box").height(100).pause(2).height(200).find("p").addClass("red");
