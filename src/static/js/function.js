/**
* Created by Administrator on 15-1-19.
*/
function MenuItemClick() {
    var menuItem = document.getElementById("menuItem");
    var linkMenu = document.getElementById("linkMenu");
    linkMenu.onclick = function () {
        if (menuItem.style.display == "block") {
            menuItem.style.display = "none"
        } else {
            menuItem.style.display = "block"
        }
    }
}



/*label*/
function ShowNext(option) {
    this.obj = document.getElementById(option.id);
    this.defaultShow = document.getElementById(option.defaultShow);
    this.nextShow = document.getElementById(option.nextShow);
}

ShowNext.prototype.init = function () {
    var _self = this;
    _self.obj.onclick = function (ev) {
        var event = ev || window.event;
        event.preventDefault();
        var val = _self.obj.attributes["value"].value;
        //当前第一页
        if (val == "next") {
            _self.defaultShow.style.display = "none"; //第一页隐藏
            _self.nextShow.style.display = "block"; //第二页展示
            _self.obj.attributes["value"].value = ""; //设置标识属性
            _self.obj.innerHTML = _self.obj.attributes["after"].value;
        } else {//当前第二页
            _self.defaultShow.style.display = "block"; //第一页展示
            _self.nextShow.style.display = "none"; //第二页隐藏
            _self.obj.attributes["value"].value = "next"; //设置标识属性
            _self.obj.innerHTML = _self.obj.attributes["before"].value;
        }
    }
}


//placeholder不支持情况下(模拟placeholder状态)
function placeHolder(option) {
    var _self = this;
    _self.placeholder = option.placeholder;
    _self.input = document.getElementById(option.id);


    _self.focusFirst = function () {
        var Range = _self.input.createTextRange();
        Range.moveEnd('character', _self.input.value.length);
        Range.moveStart('character', 0); //
        Range.collapse();
        Range.select();
    }

    _self.fontColor = function () {
        _self.input.style.color = "#999";
    }
    _self.clearfontColor = function () {
        _self.input.style.color = '';
    }



}

placeHolder.prototype.Init = function () {
    var _self = this;
    var isPlaceholderSupport = 'placeholder' in document.createElement('input');
    if (!isPlaceholderSupport) {
        _self.fontColor();
        _self.input.value = _self.placeholder;
        var event = new EventUtil();
        event.addEvent(_self.input, "keydown", function (input) {


            if (_self.input.value == _self.placeholder) {
                _self.fontColor();
            } else {
                _self.clearfontColor();
            }

        });
        event.addEvent(_self.input, "keyup", function (input) {
            if (_self.input.value == _self.placeholder) {
                _self.fontColor();
            } else {
                _self.clearfontColor();
            }
        });

        event.addEvent(_self.input, "blur", function (input) {
            if (_self.input.value.replace(/(^\s*)|(\s*$)/g, '') == '') {
                _self.input.value = _self.placeholder;
                _self.fontColor();
            }
        });

        event.addEvent(_self.input, "focus", function (input) {
            if (_self.input.value == _self.placeholder) {
                _self.input.value = "";
            }
        });

        //        event.addEvent(_self.input, "click", function (input) {
        //            if (_self.input.value == _self.placeholder) {
        //                _self.focusFirst();
        //                _self.fontColor();
        //            } else {
        //                _self.clearfontColor();
        //            }
        //        });


    }


}

