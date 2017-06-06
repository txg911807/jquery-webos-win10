; (function ($, window, document, undefined) {
    //定义Desktop的构造函数
    var Desktop = function (el, opt) {
        this.$element = el,
        this.gridster = {},//桌面插件
        this.MenuData = [
                {
                    "id": "1",
                    "name": "个人中心",
                    "ioc": "Test/WebApplication1/ioc/zf.png",
                    "desktop": {
                        "row": 1,
                        "col": 1,
                        "sizex": 1,
                        "sizey": 1
                    },
                    "panel": {
                        "width": 1000,
                        "height": 600
                    }
                },
                {
                    "id": "34",
                    "name": "个性化设置",
                    "ioc": "Test/WebApplication1/ioc/zf.png",
                    "desktop": {
                        "row": 1,
                        "col": 1,
                        "sizex": 1,
                        "sizey": 1
                    },
                    "panel": {
                        "width": 1000,
                        "height": 600
                    }
                }, {
                    "id": "33",
                    "name": "个人中心",
                    "ioc": "Test/WebApplication1/ioc/zf.png",
                    "desktop": {
                        "row": 1,
                        "col": 1,
                        "sizex": 1,
                        "sizey": 1
                    },
                    "panel": {
                        "width": 600,
                        "height": 350
                    }
                }, {
                    "id": "32",
                    "name": "个人中心",
                    "ioc": "Test/WebApplication1/ioc/zf.png",
                    "desktop": {
                        "row": 1,
                        "col": 1,
                        "sizex": 1,
                        "sizey": 1
                    },
                    "panel": {
                        "width": 600,
                        "height": 350
                    }
                }, {
                    "id": "31",
                    "name": "个人中心",
                    "ioc": "Test/WebApplication1/ioc/zf.png",
                    "desktop": {
                        "row": 1,
                        "col": 1,
                        "sizex": 1,
                        "sizey": 1
                    },
                    "panel": {
                        "width": 600,
                        "height": 350
                    }
                }, {
                    "id": "30",
                    "name": "个人中心",
                    "ioc": "Test/WebApplication1/ioc/zf.png",
                    "desktop": {
                        "row": 1,
                        "col": 1,
                        "sizex": 1,
                        "sizey": 1
                    },
                    "panel": {
                        "width": 600,
                        "height": 350
                    }
                }, {
                    "id": "29",
                    "name": "个人中心",
                    "ioc": "Test/WebApplication1/ioc/zf.png",
                    "desktop": {
                        "row": 1,
                        "col": 1,
                        "sizex": 1,
                        "sizey": 1
                    },
                    "panel": {
                        "width": 600,
                        "height": 350
                    }
                }, {
                    "id": "28",
                    "name": "个人中心",
                    "ioc": "Test/WebApplication1/ioc/zf.png",
                    "desktop": {
                        "row": 1,
                        "col": 1,
                        "sizex": 1,
                        "sizey": 1
                    },
                    "panel": {
                        "width": 600,
                        "height": 350
                    }
                }, {
                    "id": "27",
                    "name": "个人中心",
                    "ioc": "Test/WebApplication1/ioc/zf.png",
                    "desktop": {
                        "row": 1,
                        "col": 1,
                        "sizex": 1,
                        "sizey": 1
                    },
                    "panel": {
                        "width": 600,
                        "height": 350
                    }
                }, {
                    "id": "26",
                    "name": "个人中心",
                    "ioc": "Test/WebApplication1/ioc/zf.png",
                    "desktop": {
                        "row": 1,
                        "col": 1,
                        "sizex": 1,
                        "sizey": 1
                    },
                    "panel": {
                        "width": 600,
                        "height": 350
                    }
                }, {
                    "id": "25",
                    "name": "个人中心",
                    "ioc": "Test/WebApplication1/ioc/zf.png",
                    "desktop": {
                        "row": 1,
                        "col": 1,
                        "sizex": 1,
                        "sizey": 1
                    },
                    "panel": {
                        "width": 600,
                        "height": 350
                    }
                }, {
                    "id": "24",
                    "name": "个人中心",
                    "ioc": "Test/WebApplication1/ioc/zf.png",
                    "desktop": {
                        "row": 1,
                        "col": 1,
                        "sizex": 1,
                        "sizey": 1
                    },
                    "panel": {
                        "width": 600,
                        "height": 350
                    }
                }, {
                    "id": "23",
                    "name": "个人中心",
                    "ioc": "Test/WebApplication1/ioc/zf.png",
                    "desktop": {
                        "row": 1,
                        "col": 1,
                        "sizex": 1,
                        "sizey": 1
                    },
                    "panel": {
                        "width": 600,
                        "height": 350
                    }
                }, {
                    "id": "22",
                    "name": "个人中心",
                    "ioc": "Test/WebApplication1/ioc/zf.png",
                    "desktop": {
                        "row": 1,
                        "col": 1,
                        "sizex": 1,
                        "sizey": 1
                    },
                    "panel": {
                        "width": 600,
                        "height": 350
                    }
                }, {
                    "id": "21",
                    "name": "个人中心",
                    "ioc": "Test/WebApplication1/ioc/zf.png",
                    "desktop": {
                        "row": 1,
                        "col": 1,
                        "sizex": 1,
                        "sizey": 1
                    },
                    "panel": {
                        "width": 600,
                        "height": 350
                    }
                }, {
                    "id": "20",
                    "name": "个人中心",
                    "ioc": "Test/WebApplication1/ioc/zf.png",
                    "desktop": {
                        "row": 1,
                        "col": 1,
                        "sizex": 1,
                        "sizey": 1
                    },
                    "panel": {
                        "width": 600,
                        "height": 350
                    }
                }, {
                    "id": "19",
                    "name": "个人中心",
                    "ioc": "Test/WebApplication1/ioc/zf.png",
                    "desktop": {
                        "row": 1,
                        "col": 1,
                        "sizex": 1,
                        "sizey": 1
                    },
                    "panel": {
                        "width": 600,
                        "height": 350
                    }
                }, {
                    "id": "18",
                    "name": "个人中心",
                    "ioc": "Test/WebApplication1/ioc/zf.png",
                    "desktop": {
                        "row": 1,
                        "col": 1,
                        "sizex": 1,
                        "sizey": 1
                    },
                    "panel": {
                        "width": 600,
                        "height": 350
                    }
                }, {
                    "id": "17",
                    "name": "个人中心",
                    "ioc": "Test/WebApplication1/ioc/zf.png",
                    "desktop": {
                        "row": 1,
                        "col": 1,
                        "sizex": 1,
                        "sizey": 1
                    },
                    "panel": {
                        "width": 600,
                        "height": 350
                    }
                }, {
                    "id": "16",
                    "name": "个人中心",
                    "ioc": "Test/WebApplication1/ioc/zf.png",
                    "desktop": {
                        "row": 1,
                        "col": 1,
                        "sizex": 1,
                        "sizey": 1
                    },
                    "panel": {
                        "width": 600,
                        "height": 350
                    }
                }, {
                    "id": "15",
                    "name": "个人中心",
                    "ioc": "Test/WebApplication1/ioc/zf.png",
                    "desktop": {
                        "row": 1,
                        "col": 1,
                        "sizex": 1,
                        "sizey": 1
                    },
                    "panel": {
                        "width": 600,
                        "height": 350
                    }
                }, {
                    "id": "14",
                    "name": "个人中心",
                    "ioc": "Test/WebApplication1/ioc/zf.png",
                    "desktop": {
                        "row": 1,
                        "col": 1,
                        "sizex": 1,
                        "sizey": 1
                    },
                    "panel": {
                        "width": 600,
                        "height": 350
                    }
                }, {
                    "id": "13",
                    "name": "个人中心",
                    "ioc": "Test/WebApplication1/ioc/zf.png",
                    "desktop": {
                        "row": 1,
                        "col": 1,
                        "sizex": 1,
                        "sizey": 1
                    },
                    "panel": {
                        "width": 600,
                        "height": 350
                    }
                }, {
                    "id": "12",
                    "name": "个人中心",
                    "ioc": "Test/WebApplication1/ioc/zf.png",
                    "desktop": {
                        "row": 1,
                        "col": 1,
                        "sizex": 1,
                        "sizey": 1
                    },
                    "panel": {
                        "width": 600,
                        "height": 350
                    }
                }, {
                    "id": "11",
                    "name": "个人中心",
                    "ioc": "Test/WebApplication1/ioc/zf.png",
                    "desktop": {
                        "row": 1,
                        "col": 1,
                        "sizex": 1,
                        "sizey": 1
                    },
                    "panel": {
                        "width": 600,
                        "height": 350
                    }
                }, {
                    "id": "10",
                    "name": "个人中心",
                    "ioc": "Test/WebApplication1/ioc/zf.png",
                    "desktop": {
                        "row": 1,
                        "col": 1,
                        "sizex": 1,
                        "sizey": 1
                    },
                    "panel": {
                        "width": 600,
                        "height": 350
                    }
                }, {
                    "id": "9",
                    "name": "个人中心",
                    "ioc": "Test/WebApplication1/ioc/zf.png",
                    "desktop": {
                        "row": 1,
                        "col": 1,
                        "sizex": 1,
                        "sizey": 1
                    },
                    "panel": {
                        "width": 600,
                        "height": 350
                    }
                }, {
                    "id": "8",
                    "name": "个人中心",
                    "ioc": "Test/WebApplication1/ioc/zf.png",
                    "desktop": {
                        "row": 1,
                        "col": 1,
                        "sizex": 1,
                        "sizey": 1
                    },
                    "panel": {
                        "width": 600,
                        "height": 350
                    }
                }, {
                    "id": "7",
                    "name": "个人中心",
                    "ioc": "Test/WebApplication1/ioc/zf.png",
                    "desktop": {
                        "row": 1,
                        "col": 1,
                        "sizex": 1,
                        "sizey": 1
                    },
                    "panel": {
                        "width": 600,
                        "height": 350
                    }
                }, {
                    "id": "6",
                    "name": "个人中心",
                    "ioc": "Test/WebApplication1/ioc/zf.png",
                    "desktop": {
                        "row": 1,
                        "col": 1,
                        "sizex": 1,
                        "sizey": 1
                    },
                    "panel": {
                        "width": 600,
                        "height": 350
                    }
                }, {
                    "id": "5",
                    "name": "个人中心",
                    "ioc": "Test/WebApplication1/ioc/zf.png",
                    "desktop": {
                        "row": 1,
                        "col": 1,
                        "sizex": 1,
                        "sizey": 1
                    },
                    "panel": {
                        "width": 600,
                        "height": 350
                    }
                }, {
                    "id": "4",
                    "name": "个人中心",
                    "ioc": "Test/WebApplication1/ioc/zf.png",
                    "desktop": {
                        "row": 1,
                        "col": 1,
                        "sizex": 1,
                        "sizey": 1
                    },
                    "panel": {
                        "width": 600,
                        "height": 350
                    }
                }, {
                    "id": "3",
                    "name": "个人中心",
                    "ioc": "Test/WebApplication1/ioc/zf.png",
                    "desktop": {
                        "row": 1,
                        "col": 1,
                        "sizex": 1,
                        "sizey": 1
                    },
                    "panel": {
                        "width": 600,
                        "height": 350
                    }
                }, {
                    "id": "2",
                    "name": "个人中心",
                    "ioc": "Test/WebApplication1/ioc/zf.png",
                    "desktop": {
                        "row": 1,
                        "col": 1,
                        "sizex": 1,
                        "sizey": 1
                    },
                    "panel": {
                        "width": 1000,
                        "height": 600
                    }
                }
        ];
        this.TaskModule = {};
        this.defaults = {
            //桌面模块初始化
            gridster:
            {
                limit: {
                    width: true,//是否限制宽度
                    height: true//是否限制高度
                },
                widget_selector: '.tile-small',
                avoid_overlapped_widgets: true,//是否允许重叠或异常
                max_rows: 11,//可以显示多少行
                namespace: '#desktop',//命名空间
                widget_base_dimensions: [72, 72],//单项大小
                widget_margins: [10, 10],//上下左右间距
                draggable: {
                    start: function (event, ui) {
                        //alert("statr");
                        console.log("start");
                    },
                    drag: function (event, ui) {
                        console.log("drag");
                    },
                    stop: function (event, ui) {
                        console.log("stop");
                    }
                },
            },
            desktop: {
                Temp: ' <div class="tile-area no-padding bg-blue gridster" id="desktop"><div class="tile-container" style="height:100%;z-index:2;"></div></div>',
                id: "#desktop .tile-container"
            },
            TaskMenu: {
                Temp: '<div class="app-bar drop-up" data-role="appbar" style="position:absolute;left:0px;bottom:0px;">\
                        <div class="app-bar-element app-bar-height">\
                            <span id="toggle-tiles-dropdown2" class="mif-apps mif-2x"></span>\
                            <div class="app-bar-drop-container container-btn StartScreen" data-role="dropdown"\
                                 data-toggle-element="#toggle-tiles-dropdown2" data-no-close="false" style="width:690px; display: none;opacity: 0.96;background-color: #0072c6;overflow:hidden;">\
                                <div class="flex-grid demo-grid">\
                                    <div class="row">\
                                        <div class="cell colspan5 scrollbar" style="height: 500px;overflow: auto;" id="TaskMenus">\
                                        </div>\
                                        <div class="cell colspan7 scrollbar" style="height: 500px;overflow: auto;" id="StartScreen">\
                                        </div>\
                                    </div>\
                                </div>\
                            </div>\
                        </div>\
                         <div class="app-bar-divider app-bar-height"></div>\
                        <ul class="app-bar-menu" id="Panel-replacement">\
                        </ul>\
                        <div class="app-bar-element place-right app-bar-height">\
                            <a class="fg-white"><span class="mif-enter"></span>设置</a>\
                        </div>\
                         <div class="app-bar-divider place-right app-bar-height"></div>\
                    </div>',
                MenuID: "#TaskMenus",
                StartScreen: "#StartScreen",
                ShortcutMenuID: "#Panel-replacement",
            }

        },
        this.options = $.extend({}, this.defaults, opt)
    }
    //定义Desktop的方法
    Desktop.prototype = {
        Init: function () {
            this.GridsterInit();
            //注册TASK工具栏
            this.$element.append(this.options.TaskMenu.Temp);
            //初始化 开始菜单
            this.StartMetroInit();
            //系统模块初始化
            this.FunctionModuleInit();
            //初始化右键菜单
            this.ContextMenuInit();
            //初始化滚动条
            $(".scrollbar").mCustomScrollbar();
            //双击事件监听
            this.dblclickRegistered();
            //事件冒泡拦截
            this.stopPropagation();
        },
        GridsterInit: function () {
            //注册TASK工具栏
            this.$element.append(this.options.desktop.Temp);
            //初始化
            this.gridster = $(this.options.desktop.id).gridster(this.options.gridster).data('gridster');
            //添加数据
            for (var i = 0; i < this.MenuData.length; i++) {
                this.gridster.add_widget(' <div class="tile-small" id="tile-small' + this.MenuData[i].id + '" data-role="tile" data-row="1" data-col="1" data-sizex="1" data-sizey="1"> <div class="shortcut-icon"> <img src="' + this.MenuData[i].ioc + '" style="width:36px; height:36px;" />  </div><div class="shortcut-name">' + this.MenuData[i].name + '</div>    </div>', 1, 1);
            }
            //窗体发送改变时 重新计算位置
            $(window).resize(function () {
                var rows = MUIOS.GetRows();
                var cols = Math.ceil(50 / rows);
                //乾坤大挪移移行换位
                MUIOS.gridster.options.max_cols = cols;
                MUIOS.gridster.cols = cols;

                MUIOS.gridster.options.max_rows = rows;
                MUIOS.gridster.rows = rows;
                console.log(rows + ":" + cols);
                MUIOS.gridster.init();
            });
        },
        StartMetroInit: function () {
            var $tilegroup = $('<div class="tile-group no-margin "><span class="tile-group-title" style="font-size:14px;">常用功能</span></div>');
            var $tilecontainer = $('<div class="tile-container "></div>')

            for (var i = 0; i < this.MenuData.length; i++) {
                $tilecontainer.append('<div class="tile-small bg-red fg-white" data-role="tile" style="width:85px; height:85px;"  id="tile-small' + this.MenuData[i].id + '" >\
                     <div class="tile-content iconic">  <span class="icon mif-cogs"></span></div>\
                          <div class="tile-label tile-labelex no-margin no-padding">' + this.MenuData[i].name + '</div> </div>');
            }
            $tilegroup.append($tilecontainer);
            $(this.options.TaskMenu.StartScreen).append($tilegroup);
        },
        FunctionModuleInit: function ()
        {
            var $ul = $('<ul class="v-menu block-shadow-impact subdown no-padding no-margin no-shadow v-menu-ex" style="width:90%;"></ul>');
            $ul.append('<li class="menu-title menu-title-ex v-menu-ex">演示功能</li>');
            $ul.append('<li class="divider"></li>');
            $ul.append(' <li><a href="#" class="v-menulia"><span class="mif-home icon v-menu-ex"></span>任务列表</a></li>');
            $ul.append('<li class="menu-title menu-title-ex v-menu-ex">系统模块</li>');
            $ul.append('<li class="divider"></li>');
            //初始化二级菜单
            var $li = $('<li></li>');
            $li.append('<a href="#" class="dropdown-toggle v-menu-ex"><span class="mif-my-location icon v-menu-ex"></span>所有功能</a>');
            var $TagUl = $('<ul class="d-menu no-shadow no-border" data-role="dropdown" style="width:100%;"></ul>')
            for (var i = 0; i < this.MenuData.length; i++) {
                $TagUl.append('<li><a href="#" class=" v-menu-ex"><span class="mif-user icon v-menu-ex"></span>' + this.MenuData[i].name + '</a></li>');
            }
            $li.append($TagUl);
            $ul.append($li);
            $(this.options.TaskMenu.MenuID).append($ul);
        },
        GetRows: function () {
            var rows = Math.floor(($(window).height() - 43) / 82);
            if (rows == 0) {
                rows = 1;
            }
            return rows;
        },
        SelectItems: function (Items, key) {
            for (var k in Items) {
                if (k == key) {
                    return Items[k];
                } else {
                    if (Items[k].items != null || Items[k].items != undefined) {
                        var temp = MUIOS.SelectItems(Items[k].items, key);
                        if (temp != null || temp != undefined) {
                            return temp;
                        }
                    }
                }
            }
        },
        ContextMenuInit: function () {
            //桌面右键
            $.contextMenu({
                selector: '.wallpaper',
                zIndex: 999,
                build: function ($trigger, e) {
                    return {
                        callback: function (key, options) {
                            if (key == 'mos-desktop-bgm') {
                                showMetroCharm('#mos-desktop-bgm-charm', 'right');
                            } else if (key == "UserSettings") {
                                var temp = '\
                                <div class="flex-grid no-responsive-future" style="height: 100%;z-index:99;">\
            <div class="row" style="height: 100%">\
                <div class="cell size-x200" id="cell-sidebar" style="background-color: #0072c6;height: 100%;">\
                    <ul class="sidebar">\
                        <li class="active">\
                            <a href="#">\
                                <span class="mif-apps icon"></span>\
                                <span class="title">系统设置</span>\
                                <span class="counter">详细信息设置</span>\
                            </a>\
                        </li>\
                        <li class="">\
                            <a href="#">\
                                <span class="mif-vpn-publ icon"></span>\
                                <span class="title">websites</span>\
                            </a>\
                        </li>\
                        <li class="">\
                            <a href="#">\
                                <span class="mif-drive-eta icon"></span>\
                                <span class="title">Virtual machines</span>\
                                <span class="counter">2</span>\
                            </a>\
                        </li>\
                        <li class="">\
                            <a href="#">\
                                <span class="mif-cloud icon"></span>\
                                <span class="title">Cloud services</span>\
                                <span class="counter">0</span>\
                            </a>\
                        </li>\
                        <li class="">\
                            <a href="#">\
                                <span class="mif-database icon"></span>\
                                <span class="title">SQL Databases</span>\
                                <span class="counter">0</span>\
                            </a>\
                        </li>\
                        <li class="">\
                            <a href="#">\
                                <span class="mif-cogs icon"></span>\
                                <span class="title">Automation</span>\
                                <span class="counter">0</span>\
                            </a>\
                        </li>\
                        <li class="">\
                            <a href="#">\
                                <span class="mif-apps icon"></span>\
                                <span class="title">all items</span>\
                                <span class="counter">0</span>\
                            </a>\
                        </li>\
                    </ul>\
                </div>\
                <div class="cell auto-size padding20 bg-white" id="cell-content">\
                    <h1 class="text-light">Virtual machines</h1>\
                    <hr class="thin bg-grayLighter">\
                    <button class="button primary" ><span class="mif-plus"></span> Create...</button>\
                    <button class="button success"><span class="mif-play"></span> Start</button>\
                    <button class="button warning" ><span class="mif-loop2"></span> Restart</button>\
                    <button class="button alert" >Stop all machines</button>\
                    <hr class="thin bg-grayLighter">\
                </div>\
            </div>\
        </div>';

                                var Item = MUIOS.SelectItems(MUIOS.MenuData, '1');
                                //TODO获取模块HTML加载数据
                                MUIOS.AddPanel(Item, temp);
                            } else {
                                var tempItem = MUIOS.SelectItems(options.items, key);
                                $.Notify({ type: 'info', caption: tempItem.name, content: "测试版本该功能尚未开放！！！" });
                            }
                        },
                        items: {
                            "test1": {
                                name: "图标显示",
                                icon: " mif-apps Menuex",
                                items: {
                                    "normalsub1": { name: "大" },
                                    "normalsub2": { name: "小" },
                                }
                            },
                            "mos-desktop-bgm": {
                                name: "桌面样式",
                                icon: " mif-widgets Menuex",
                            },
                            "test3": { name: "全屏显示", icon: " mif-enlarge Menuex" },
                            "sep1": "---------",
                            "test4": { name: "应用管理", icon: " mif-list2 Menuex" },
                            "test5": { name: "待办任务", icon: " mif-folder-special Menuex" },
                            "sep2": "---------",
                            "UserSettings": { name: "个性化设置", icon: " mif-cog Menuex" },
                            "test7": { name: "个人中心", icon: " mif-user Menuex" },
                            "test8": { name: "关于我们", }

                        }
                    };
                }
            });
            //应用右键
            $.contextMenu({
                selector: '#desktop .tile-small',
                zIndex: 999,
                build: function ($trigger, e) {
                    return {
                        callback: function (key, options) {
                            if (key == 'open') {
                                this.dblclick();
                            } else {
                                var tempItem = MUIOS.SelectItems(options.items, key);
                                $.Notify({ type: 'info', caption: tempItem.name, content: "测试版本该功能尚未开放！！！" });
                            }
                        },
                        items: {
                            "open": { name: "打开", icon: " mif-enlarge Menuex" },
                            "test4": { name: "隐藏", icon: " mif-list2 Menuex" },
                            "test5": { name: "添加到快速启动栏", icon: " mif-folder-special Menuex" },
                            "sep2": "---------",
                            "test6": { name: "移出", icon: " mif-cog Menuex" },

                        },
                        events: {
                            show: function (options) {
                                this.addClass('select-menu');
                            },
                            hide: function (options) {
                                this.removeClass('select-menu');
                            }
                        }
                    }
                }
            });
        },
        stopPropagation: function () {
            //防止事件冒泡
            $('.StartScreen').click(function (e) {
                e.stopPropagation();
                return false;
            });
            //阻止事件冒泡
            $('body').on('click', '.context-menu-list', function (e) {
                e.stopPropagation();
                return false;
            });
            //阻止事件冒泡
            $('body').on('click', '.charm', function (e) {
                e.stopPropagation();
                return false;
            });
            $('body').click(function (e) {
                //影藏面板
                hideMetroCharm('#mos-desktop-bgm-charm');
            });
        },
        dblclickRegistered: function () {
            $('#desktop .tile-small').dblclick(function (e) {
                var id = $(this).attr('id');
                var Item = MUIOS.SelectItems(MUIOS.MenuData, id.replace('tile-small', ''));
                //TODO获取模块HTML加载数据
                MUIOS.AddPanel(Item, '<p>Some sample text ...</p>');
            });
            $("#Panel-replacement").on('click', 'a', function () {
                var id = $(this).parent().attr('id');
                id = id.replace('-min', '');
                if (MUIOS.TaskModule[id] == null || MUIOS.TaskModule[id] == undefined) { } else {
                    MUIOS.TaskModule[id].data('status') === 'minimized' ? MUIOS.TaskModule[id].normalize() : MUIOS.TaskModule[id].minimize();
                }
            });
            //背景图片切换
            $("#mos-desktop-bgm-charm").on('click', '.image-container', function () {
                var srcimg = $(this).find('img').attr('src');
                $('.wallpaper-image').attr('src', srcimg);
                $('.wallpaper-image').fadeIn("slow");
            });
            //演示功能使用
            $('body').on('click', '.sidebar li', function () {
                if (!$(this).hasClass('active')) {
                    $('.sidebar li').removeClass('active');
                    $(this).addClass('active');
                }
            });
        },
        AddPanel: function (Item, Contenttemp) {
            console.log(Item);
            if (MUIOS.TaskModule[Item.id] == null || MUIOS.TaskModule[Item.id] == undefined) {
                //添加到任务栏
                var temphtml = ' <li data-flexorderorigin="0" data-flexorder="1" class="app-bar-height" id="' + Item.id + '-min">';
                temphtml += ' <a href="#" class="app-bar-height task-rw">';
                temphtml += ' <span class="">';
                temphtml += '  <img src="' + Item.ioc + '" style="width:36px; height:36px;">';
                temphtml += ' </span>';
                temphtml += Item.name;
                temphtml += '  </a>';
                temphtml += '  </li>';
                $(this.options.TaskMenu.ShortcutMenuID).append(temphtml);

                MUIOS.TaskModule[Item.id] = $.jsPanel({
                    headerLogo: "/Test/WebApplication1/ioc/zf.png",
                    theme: "blue",
                    taskid: Item.id + '-min',
                    minimizeTo: false,
                    headerTitle: Item.name,
                    content: Contenttemp,
                    contentSize: { width: Item.panel.width, height: Item.panel.height },
                    callback: function () {
                        this.content.css("border-top", "0px");
                    },
                    onclosed: function () {
                        $('#' + this.option.taskid).remove();
                        MUIOS.TaskModule[Item.id] = null;
                    }
                });
            } else {
                MUIOS.TaskModule[Item.id].normalize();
            }
        }
    }
    //在插件中使用Desktop对象
    $.fn.MuiDesktopOS = function (options) {
        //创建Beautifier的实体
        var desktop = new Desktop(this, options);
        //注册全局变量
        window.MUIOS = desktop;
        //调用其方法
        desktop.Init();
        return desktop;
    }
})(jQuery, window, document);