/*
 *Copyright (C) 2017 XXXXXXXXXXXXXXXXXXXX
 *  版权所有。      
 *
 *文件名：main.js
 *文件功能描述：
 *
 *创建者：唐向光 (TangXiangGuang)
 *时间：2017/5/12 14:56:32
 *
 *修改人：
 *时间：
 *修改说明：
 *
 *版本：V1.0.0
 */

'use strict';
(function (win) {
    //配置baseUrl
    var baseFileUrl = document.getElementById('main').getAttribute('data-baseurl');
    var config = {
        baseUrl: baseFileUrl,       
        paths: {                   
            jquery: 'libs/jquery-2.1.3.min',
            vue: 'libs/vue2.0/vue.min',
            text: 'libs/require/require.text',
            metro: 'libs/Metro-UI-CSS/js/metro',
            gridster: 'libs/Gridster/jquery.gridster',
            contextMenu: 'libs/ContextMenu/jquery.contextMenu',
            Scrollbar: 'libs/Scrollbar/jquery.mCustomScrollbar',
            Panel: 'libs/Panel/jquery.jspanel',
            MUIOS: 'MUIOS'
        },
        shim: {                    
            vue: {
                exports: 'vue'
            },
            jquery: {
                exports: '$'
            },
            metro: {
                deps: ['jquery']
            },
            Panel: {
                deps: ['jquery']
            },
            Scrollbar: {
                deps: ['jquery']
            },
            contextMenu: {
                deps: ['jquery']
            },
            gridster: {
                deps: ['jquery']
            },
            MUIOS: {
                deps: ['jquery']
            }
        }
    };
    //配置基
    require.config(config);
    //加载
    require(['jquery', 'vue', 'metro', 'gridster', 'contextMenu', 'Scrollbar', 'Panel', 'MUIOS'], function ($, vue) {
        win.$ = $;
        win.Vue = vue;
        //初始化插件
        $("body").MuiDesktopOS();
    });

})(window);

