(function (global, factory)
{
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('./MindFusion.Common'), require('./modules/jscommon'), require('./modules/jscollections'), require('./modules/jsui')) :
        typeof define === 'function' && define.amd ? define(['exports', './MindFusion.Common', './modules/jscommon', './modules/jscollections', './modules/jsui'], factory) :
            (global = global || self, factory((global.MindFusion = global.MindFusion || {}), global.MindFusion.Common, global.MindFusion.Common.Collections, global.MindFusion.Common.UI));
}(this, (function (exports, MindFusion$1, jscommon, jscollections, jsui ) { 'use strict';
    MindFusion$1.Common = jscommon;
    MindFusion$1.Common.Collections = jscollections;
    MindFusion$1.Common.UI = jsui;
    Object.assign(exports, MindFusion$1);
    Object.defineProperty(exports, '__esModule', { value: true });
    return MindFusion$1;
})));