/// <reference path="vendor/jquery-1.4.1-vsdoc.js" />
///检测表单中的不能为空（.notnull）的验证
/*
 时间：2012-6-6
 作用：一对form标签下有多个（包括一个）表单需要提交时，使用js准确的判断当前按钮对那些元素做判断

 用法：在form标签下 找到当前 表单的容器 给予class="form"，当前表单的提交按钮给予 class="check"
 需要验证为空的元素给予class="notnull" nullmsg="xx不能为空！"提示，需要进行逻辑判断的表单给予class="need"
 判断的类型给予 class="num"(只能是数字) 验证的提示 logicmsg="XX只能是数字"

 给予class="errorMessage"显示错误信息块
 给予class="warn"显示错误信息
 未使用js面向对象编程
 逻辑判断，不传入need标识，直接给出正则表达式属性（自定义）regex="/^\d$/"  做出判断

 在外部实现
 Global.submitCallback button回调函数
 Global.confirmCallback confirm回调函数;
 需要改进的地方：
 改进成一个jquery插件

 更新时间：2014年12月3日 16:23:22
 作者：Amber.Xu
 */
//$(document).ready(
//	function () {
//	    $("form").find(".notnull").bind({
//	        focus: function () {
//	            if ($(this).attr("value") == this.defaultValue) {
//	                $(this).attr("value", "");
//	            }
//	        },
//	        blur: function () {
//	            if ($(this).attr("value") == "") {
//	                $(this).attr("value", this.defaultValue);
//	            }
//	        }
//	    });
//	}
//);
///*封装一个万能检测表单的方法*/
///event.srcElement：引发事件的目标对象，常用于onclick事件。
///event.fromElement：引发事件的对象源，常用于onmouseout和onmouseover事件。
///event.toElement：引发事件后，鼠标移动到的目标源，常用于onmouseout和onmouseover事件。
function Global() {
    var _self = this;
}
//用于.check按钮的回调
Global.submitCallback = null;
//用于.confirm按钮的回调
Global.confirmCallback = null;

$(document).ready(function () {
    //form body
    $("body").find(".form").each(function () {
        var form = this;
        this.onclick = function (e) {
            return Main(e, form);
        }

        document.onkeydown = function (eve) {
            var e = eve || window.event || arguments.callee.caller.arguments[0];
            if (e && e.keyCode == 13) {
                return Main(e, form, true);
            }
        }
    });

    //程序入口
    function Main(e, form, _Enter) {
        var button = null;
        try {
            button = e.srcElement == null ? document.activeElement : e.srcElement;
        } catch (e) {
            console.log(e.message)
            button = document.activeElement;
        }
        if ($(button).is(".check") || _Enter) {
            //alert("提交")
            var sub = (checkform(form) && CheckInputRex(form) && checkselect(form) && checkChecked(form) && checkValid(form));
            if (sub) {
                // Call our callback, but using our own instance as the context
                Global.submitCallback.call(form, [e]);
            } else
                return sub;
        } else if ($(button).is(".confirm")) {
            //alert("删除")
            var sub = confirm($(button).attr("title"));
            if (sub) {
                Global.confirmCallback.call(form, [e]);
            } else
                return sub;
        } else {
            //	                //alert("其它")
            return true;
        }
    }

    /*检测表单中不能为空的元素*/
    function checkform(form) {
        var b = true;
        $(form).find(".notnull").each(function () {
            if ($.trim($(this).val()).length <= 0 || $.trim($(this).val()) == $.trim($(this).attr("placeholder"))) {//|| $(this).val() == this.defaultValue
//                $(this).parents(".form").find(".warn").text($(this).attr("nullmsg"));
//                $(this).parents(".form").find(".errorMessage").show();
                alert($(this).attr("nullmsg"));
                $(this).select();
                $(this).focus();
                return b = false;
            }
        });
        if (b == true) {
            $(form).find(".warn").text("");
            $(form).find(".errorMessage").hide();
        }
        return b;
    }

    /*检测表单中必选的下拉列表*/
    function checkselect(form) {
        var b = true;
        $(form).find(".select").each(function (i) {
            var ck = $(this).find('option:selected').text();
            if (ck.indexOf("选择") > -1) {
//                $(this).parents(".form").find(".warn").text($(this).attr("nullmsg"));
//                $(this).parents(".form").find(".errorMessage").show();

                alert($(this).attr("nullmsg"));
                $(this).select();
                $(this).focus();
                return b = false;
            }
        });
        return b;
    }


    /*检测表单中验证模式*/
    function checkValid(form) {
        var b = true;
        $(form).find(".valid").each(function (i) {
            var isValid = parseInt($(this).val());
            if (!isValid) {
//                $(this).parents(".form").find(".warn").text($(this).attr("validmsg"));
//                $(this).parents(".form").find(".errorMessage").show();

                alert($(this).attr("validmsg"));
                $(this).select();
                $(this).focus();
                return b = false;
            }

        });
        return b;
    }

    /*检测表单中必选的复选框*/
    function checkChecked(form) {
        var b = true;
        $(form).find(".checkbox").each(function (i) {
            var ck = $(this)[0].checked;
            if (!ck) {
//                $(this).parents(".form").find(".warn").text($(this).attr("nullmsg"));
//                $(this).parents(".form").find(".errorMessage").show();

                alert($(this).attr("nullmsg"))
                $(this).select();
                $(this).focus();
                return b = false;
            }
        });
        return b;
    }

    //检查是否匹配该正则表达式
    function GetFlase(value, reg, ele) {
        if (reg.test(value)) {
            return true;
        }
//        $(ele).parents(".form").find(".warn").text($(ele).attr("logicmsg"));
//        $(ele).parents(".form").find(".errorMessage").show();
        alert($(ele).attr("logicmsg"));
        $(ele).focus();
        $(ele).select();
        return false; //不能提交
    }


    ///检查正则
    function CheckInputRex(form) {
        var b = true;
        $(form).find("input[type='text']").each(function () {
            if (typeof ($(this).attr("regex")) == 'string') {
                if ($.trim($(this).val()).length > 0 && $.trim($(this).val()) != $.trim($(this).attr("placeholder"))) {
                    //当前表单的值
                    var value = $(this).attr("value") || $(this).val();
                    var regx = eval($(this).attr("regex"));
                    return b = GetFlase(value, regx, this);
                }
            }
        });
        return b;
    }
});
