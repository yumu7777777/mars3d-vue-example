/**
 * Mars3D平台插件,结合mapv可视化功能插件  mars3d-mapv
 *
 * 版本信息：v3.3.4
 * 编译日期：2022-04-08 15:15:15
 * 版权所有：Copyright by 火星科技  http://mars3d.cn
 * 使用单位：免费公开版 ，2022-02-01
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, (window.mapv || require('mapv')), (window.mars3d || require('mars3d'))) :
  typeof define === 'function' && define.amd ? define(['exports', 'mapv', 'mars3d'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["mars3d-mapv"] = {}, global.mapv, global.mars3d));
})(this, (function (exports, mapv, mars3d) { 
'use strict';var _0x9bc4c=_0x2bd4;function _0x2bd4(_0x4dfc31,_0x56b8d9){var _0x5229c4=_0x5229();return _0x2bd4=function(_0x2bd4d4,_0x999a25){_0x2bd4d4=_0x2bd4d4-0x142;var _0x2e7c13=_0x5229c4[_0x2bd4d4];if(_0x2bd4['KdDzKX']===undefined){var _0x1247fc=function(_0x33795b){var _0x40208b='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x2d3492='',_0x243970='';for(var _0x65495=0x0,_0x43d71d,_0x1dca06,_0x2723e0=0x0;_0x1dca06=_0x33795b['charAt'](_0x2723e0++);~_0x1dca06&&(_0x43d71d=_0x65495%0x4?_0x43d71d*0x40+_0x1dca06:_0x1dca06,_0x65495++%0x4)?_0x2d3492+=String['fromCharCode'](0xff&_0x43d71d>>(-0x2*_0x65495&0x6)):0x0){_0x1dca06=_0x40208b['indexOf'](_0x1dca06);}for(var _0xeb7f6f=0x0,_0x2d3ff6=_0x2d3492['length'];_0xeb7f6f<_0x2d3ff6;_0xeb7f6f++){_0x243970+='%'+('00'+_0x2d3492['charCodeAt'](_0xeb7f6f)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x243970);};_0x2bd4['FCxiHy']=_0x1247fc,_0x4dfc31=arguments,_0x2bd4['KdDzKX']=!![];}var _0x4afdd1=_0x5229c4[0x0],_0x28d93f=_0x2bd4d4+_0x4afdd1,_0x5a2df4=_0x4dfc31[_0x28d93f];return!_0x5a2df4?(_0x2e7c13=_0x2bd4['FCxiHy'](_0x2e7c13),_0x4dfc31[_0x28d93f]=_0x2e7c13):_0x2e7c13=_0x5a2df4,_0x2e7c13;},_0x2bd4(_0x4dfc31,_0x56b8d9);}(function(_0x24586d,_0x1442af){var _0x11b1d7=_0x2bd4,_0x5b12e7=_0x24586d();while(!![]){try{var _0xab9f09=parseInt(_0x11b1d7(0x154))/0x1+parseInt(_0x11b1d7(0x17f))/0x2+-parseInt(_0x11b1d7(0x1f2))/0x3+parseInt(_0x11b1d7(0x16b))/0x4+-parseInt(_0x11b1d7(0x1d3))/0x5*(parseInt(_0x11b1d7(0x1dc))/0x6)+-parseInt(_0x11b1d7(0x167))/0x7*(-parseInt(_0x11b1d7(0x1df))/0x8)+parseInt(_0x11b1d7(0x1c3))/0x9;if(_0xab9f09===_0x1442af)break;else _0x5b12e7['push'](_0x5b12e7['shift']());}catch(_0x2c2a50){_0x5b12e7['push'](_0x5b12e7['shift']());}}}(_0x5229,0x841b1));function _interopNamespace(_0x33795b){var _0x47c217=_0x2bd4;if(_0x33795b&&_0x33795b[_0x47c217(0x1ce)])return _0x33795b;var _0x40208b=Object[_0x47c217(0x1ea)](null);return _0x33795b&&Object['keys'](_0x33795b)['forEach'](function(_0x2d3492){var _0x5315ff=_0x47c217;if(_0x2d3492!==_0x5315ff(0x17d)){var _0x243970=Object[_0x5315ff(0x1d5)](_0x33795b,_0x2d3492);Object['defineProperty'](_0x40208b,_0x2d3492,_0x243970[_0x5315ff(0x1e5)]?_0x243970:{'enumerable':!![],'get':function(){return _0x33795b[_0x2d3492];}});}}),_0x40208b['default']=_0x33795b,_0x40208b;}var mapv__namespace=_interopNamespace(mapv),mars3d__namespace=_interopNamespace(mars3d);function _classCallCheck(_0x65495,_0x43d71d){var _0x88b423=_0x2bd4;if(!(_0x65495 instanceof _0x43d71d))throw new TypeError(_0x88b423(0x1f3));}function _defineProperties(_0x1dca06,_0x2723e0){var _0x443de6=_0x2bd4;for(var _0xeb7f6f=0x0;_0xeb7f6f<_0x2723e0[_0x443de6(0x1d0)];_0xeb7f6f++){var _0x2d3ff6=_0x2723e0[_0xeb7f6f];_0x2d3ff6[_0x443de6(0x18b)]=_0x2d3ff6['enumerable']||![],_0x2d3ff6[_0x443de6(0x1ee)]=!![];if(_0x443de6(0x1b7)in _0x2d3ff6)_0x2d3ff6[_0x443de6(0x1b3)]=!![];Object[_0x443de6(0x17e)](_0x1dca06,_0x2d3ff6[_0x443de6(0x1bc)],_0x2d3ff6);}}function _createClass(_0x4bd30c,_0x1e4089,_0x53f1e5){var _0x1edbcb=_0x2bd4;if(_0x1e4089)_defineProperties(_0x4bd30c['prototype'],_0x1e4089);if(_0x53f1e5)_defineProperties(_0x4bd30c,_0x53f1e5);return Object[_0x1edbcb(0x17e)](_0x4bd30c,'prototype',{'writable':![]}),_0x4bd30c;}function _inherits(_0x13a8e7,_0x4d33a6){var _0x454f5d=_0x2bd4;if(typeof _0x4d33a6!==_0x454f5d(0x1c7)&&_0x4d33a6!==null)throw new TypeError('Super\x20expression\x20must\x20either\x20be\x20null\x20or\x20a\x20function');_0x13a8e7[_0x454f5d(0x18a)]=Object[_0x454f5d(0x1ea)](_0x4d33a6&&_0x4d33a6[_0x454f5d(0x18a)],{'constructor':{'value':_0x13a8e7,'writable':!![],'configurable':!![]}}),Object[_0x454f5d(0x17e)](_0x13a8e7,_0x454f5d(0x18a),{'writable':![]});if(_0x4d33a6)_setPrototypeOf(_0x13a8e7,_0x4d33a6);}function _getPrototypeOf(_0x4e3281){var _0x132513=_0x2bd4;return _getPrototypeOf=Object[_0x132513(0x188)]?Object[_0x132513(0x1a5)]:function _0xd834df(_0x21a454){var _0x5d1516=_0x132513;return _0x21a454[_0x5d1516(0x148)]||Object[_0x5d1516(0x1a5)](_0x21a454);},_getPrototypeOf(_0x4e3281);}function _setPrototypeOf(_0x48fc41,_0x57d84b){var _0xe75440=_0x2bd4;return _setPrototypeOf=Object[_0xe75440(0x188)]||function _0x27b733(_0x151197,_0xf2a045){var _0x4aad4e=_0xe75440;return _0x151197[_0x4aad4e(0x148)]=_0xf2a045,_0x151197;},_setPrototypeOf(_0x48fc41,_0x57d84b);}function _isNativeReflectConstruct(){var _0x20b7d0=_0x2bd4;if(typeof Reflect===_0x20b7d0(0x197)||!Reflect[_0x20b7d0(0x14e)])return![];if(Reflect[_0x20b7d0(0x14e)][_0x20b7d0(0x185)])return![];if(typeof Proxy===_0x20b7d0(0x1c7))return!![];try{return Boolean[_0x20b7d0(0x18a)]['valueOf']['call'](Reflect[_0x20b7d0(0x14e)](Boolean,[],function(){})),!![];}catch(_0x1c8eba){return![];}}function _assertThisInitialized(_0x536764){var _0x136601=_0x2bd4;if(_0x536764===void 0x0)throw new ReferenceError(_0x136601(0x1dd));return _0x536764;}function _0x5229(){var _0x4797a4=['z2v0uhjVDg90ExbLt2y','AgfZt3DUuhjVCgvYDhK','yw5PBwf0B3jnB3zLC3rHCNrfDMvUDa','ug9SEwDVBG','CMvUzgvY','uMvJDgfUz2XL','q09mt1jFqLvgrKvsx0jjva','ywrKqw5PBwf0B3jfDMvUDa','y2fSBa','y2XLyxjszwn0','y29UDgv4Da','q2fYDg9NCMfWAgLJ','zgLZCgXHEq','x2nYzwf0zunHBNzHCW','D3jPDgfIBgu','x21HCfzszw5KzxjLCG','Aw5PDa','ug9PBNq','DMfSDwu','Aw5PDefUAw1HDg9Y','y2fTzxjHtw92zuvUza','DxbKyxrL','twfWvKXHEwvY','A2v5','6zYa6kAb5BYv5ywLDhvYzUw6K+AjJEIdVEIUOEEUL2DLB2PZB27NMOrIyM946l6555wm77Yb','u2nLBMvnB2rL','z2v0q29UDgv4Da','zgvMyxvSDfzHBhvL','Bwv0Ag9KCW','zhjHD0nVBNrLEhq','mJuXnJuXn0ftrfDTEG','x3nLDe9WDgLVBNniB29R','Bw9Kzq','AxngB3jTyxq','zNvUy3rPB24','C2nHBgu','C2f2zq','yxv0BW','CMvTB3zLqwXSrgf0yq','Bw91C2veB3DU','CgfYzw50rwXLBwvUDa','x19LC01VzhvSzq','Bgf5zxi','BgvUz3rO','AgvPz2H0','Bw91C2vTB3zL','mJeXndG1u0rsuvfe','z2v0sgvPz2H0','z2v0t3DUuhjVCgvYDhLezxnJCMLWDg9Y','yMfPzhvnyxbmyxLLCG','z2v0rgf0yq','zM9YrwfJAa','tgf5zxjvDgLS','ChvZAa','Dg9W','nNnTwezVwa','DgHPCYbOyxnUj3qGyMvLBIbPBML0AwfSAxnLzcaTihn1CgvYkcKGAgfZBID0igjLzw4Gy2fSBgvK','y2XLyxjeyxrH','odHXCvnpshe','Bw91C2vTB3zLrxzLBNq','tgLUzvn0CMLUzW','tg9N','ywjZB2X1Dgu','yMLUzev2zw50','z2v0','Aw5PDerLDMLJzvbPEgvSuMf0Aw8','DxbKyxrLq2fSBgjHy2S','Dw5PDa','y2XPy2S','y3jLyxrL','zMLSBfn0EwXL','z2vVBwv0CNK','DxbKyxrLrgf0yq','y29UzMLNDxjHyMXL','yxjNq2HLy2S','y2fTzxjH','zhjHDW','mtKXntC5muvUBuDQyW','q2fUBM90ignHBgWGysbJBgfZCYbHCYbHigz1BMn0Aw9U','ywrKsw5UzxjdB250ywLUzxi','y29VCMrPBMf0zxm','x2rHDgfdywnOzq','BwfW','x29Utw92zuvUzev2zw50','D2LKDgG','yMLUza','Cg9PBNq','C2nLBMu','zMLSDgvY','Bgf5zxjPza','x2nHBNzHC1vWzgf0zq','C3rLChm','x2rHDge','CMvTB3zLrgf0yq','txvSDgLqB2X5z29U','CMvNAxn0zxi','x2nVB3jKAw5HDgvZ','BwfWDG','x19WCM90B19F','y2fUDMfZtgf5zxi','zgvZDgLUyxrPB24TB3v0','yw5PBwf0B3i','ywrK','DhLWzq','y29UC3rYDwn0','x3nPEMu','C3rHCNq','DhvYzG','x3bVAw50zxjfDMvUDhm','x21VDw50zwriB29R','mtyWmdzRA2HyEvG','ywXS','C3r5Bgu','yMjVEa','C3rVCa','zML4zwrizwLNAhq','ChjVy2vZC0rHDge','DhjHAwXZ','y2XLyxi','y29Uy2f0','x3jLC2v0','yw5PBwf0B3jnB3zLzw5KrxzLBNq','CMvTB3zLq2HPBgq','CMvZAxPL','ywrKrgf0yq','C3rVCefUAwfTyxrPB24','y2XHBxbuB0DYB3vUza','BwfWDKf1Dg9izwLNAhq','EKLUzgv4','nZa3n3bgwePABW','Cg9ZAxrPB25xqW','C2L6zq','y2fTzxjHtw92zvn0yxj0','mZyYmJa2nhntyuHfCW','y2fUDMfZ','x21HCa','DhjHBNnMzxjdB29YzgLUyxrL','z2XVyMfSq29TCg9ZAxrLt3bLCMf0Aw9U','zgf0yvnLDa','x29Utw92zvn0yxj0rxzLBNq','txvSDgLmAw5Lu3rYAw5N','x3nOB3DiB29R','C2v0','z2v0uMvJDgfUz2XL','zgvZDhjVEq','BwfWDKzPEgvKsgvPz2H0','y2fYDgvZAwfUvg9dyw52yxndB29YzgLUyxrLCW','mhb4','rgf0yvnLDa','A2v5CW','y2XPy2TfDMvUDa','zgvMyxvSDa','zgvMAw5LuhjVCgvYDhK','mtK0odz5sgXrt0W','rxzLBNruExbL','x3jLBw92zwriB29R','C2v0wKLUzgv4','zMvHDhvYzunVBgXLy3rPB24','z2XVyMu','C2HHBq','zwXSAxbZB2LK','Cg9ZDfjLBMrLCG','C2v0uhjVDg90ExbLt2y','Cg9ZAxrPB24','ChjVDg90ExbL','zw51BwvYywjSzq','CMDIysGWlcaWlcaWlcaUmsK','yxbWBhK','x2fKzgvKsg9VAW','Dw5IAw5KrxzLBNq','DgLTzq','B3b0Aw9UCW','zNjVBurLz3jLzxm','y29UDgfPBMvY','zgvWDgHuzxn0','BgvMDa','BwfWDKrLChrOvgvZDa','Dw5KzwzPBMvK','Cg9PBNrLCKv2zw50CW','q2fYDgvZAwfUmW','yw5PBwf0Aw9U','AxnfBMfIBgvKvgLTzq','B2zM','yxbWzw5Kq2HPBgq','zgv2AwnLugL4zwXsyxrPBW','q2vZAxvT','rwXSAxbZB2LKywXpy2nSDwrLCG','yMXVy2S','BM9Uzq','qMfZzuXHEwvY','rgvYAxzLzcbJB25ZDhj1y3rVCNmGBwf5ig9UBhKGCMv0DxjUig9IAMvJDcbVCIb1BMrLzMLUzwq'];_0x5229=function(){return _0x4797a4;};return _0x5229();}function _possibleConstructorReturn(_0x300d7d,_0x2a743b){var _0x2f4e97=_0x2bd4;if(_0x2a743b&&(typeof _0x2a743b==='object'||typeof _0x2a743b===_0x2f4e97(0x1c7)))return _0x2a743b;else{if(_0x2a743b!==void 0x0)throw new TypeError(_0x2f4e97(0x1a4));}return _assertThisInitialized(_0x300d7d);}function _createSuper(_0x5527b4){var _0x4f937f=_isNativeReflectConstruct();return function _0x1a6b7e(){var _0x1178c6=_0x2bd4,_0x5be356=_getPrototypeOf(_0x5527b4),_0x1731a4;if(_0x4f937f){var _0x3b9573=_getPrototypeOf(this)['constructor'];_0x1731a4=Reflect['construct'](_0x5be356,arguments,_0x3b9573);}else _0x1731a4=_0x5be356[_0x1178c6(0x18d)](this,arguments);return _possibleConstructorReturn(this,_0x1731a4);};}function _superPropBase(_0x299df8,_0x397023){var _0x3f40a0=_0x2bd4;while(!Object[_0x3f40a0(0x18a)][_0x3f40a0(0x1a6)][_0x3f40a0(0x1ad)](_0x299df8,_0x397023)){_0x299df8=_getPrototypeOf(_0x299df8);if(_0x299df8===null)break;}return _0x299df8;}function _get(){var _0x431f58=_0x2bd4;return typeof Reflect!=='undefined'&&Reflect[_0x431f58(0x1e5)]?_get=Reflect[_0x431f58(0x1e5)]:_get=function _0x523769(_0x197ada,_0x21eb0a,_0xc3c85c){var _0x48ff56=_0x431f58,_0x15f135=_superPropBase(_0x197ada,_0x21eb0a);if(!_0x15f135)return;var _0x12c7f6=Object[_0x48ff56(0x1d5)](_0x15f135,_0x21eb0a);if(_0x12c7f6[_0x48ff56(0x1e5)])return _0x12c7f6[_0x48ff56(0x1e5)][_0x48ff56(0x1ad)](arguments[_0x48ff56(0x1d0)]<0x3?_0x197ada:_0xc3c85c);return _0x12c7f6[_0x48ff56(0x1b7)];},_get['apply'](this,arguments);}var Cesium$1=mars3d__namespace['Cesium'],baiduMapLayer=mapv__namespace?mapv__namespace[_0x9bc4c(0x1d6)]:null,BaseLayer$1=baiduMapLayer?baiduMapLayer['__proto__']:Function,MapVRenderer=function(_0x282712){var _0x4151d7=_0x9bc4c;_inherits(_0x47f922,_0x282712);var _0xfbf12c=_createSuper(_0x47f922);function _0x47f922(_0x2bc1bd,_0x5d221c,_0x953e5b,_0xb9af5c){var _0x382735=_0x2bd4,_0x16673b;_classCallCheck(this,_0x47f922),_0x16673b=_0xfbf12c[_0x382735(0x1ad)](this,_0x2bc1bd,_0x5d221c,_0x953e5b);if(!BaseLayer$1)return _possibleConstructorReturn(_0x16673b);return _0x16673b['map']=_0x2bc1bd,_0x16673b[_0x382735(0x1fc)]=_0x2bc1bd['scene'],_0x16673b[_0x382735(0x170)]=_0x5d221c,_0x953e5b=_0x953e5b||{},_0x16673b[_0x382735(0x1b5)](_0x953e5b),_0x16673b[_0x382735(0x1ef)](_0x953e5b),_0x16673b[_0x382735(0x1e6)](),_0x16673b[_0x382735(0x149)]=_0xb9af5c,_0x16673b[_0x382735(0x163)]=!0x1,_0x16673b[_0x382735(0x19a)]=_0x953e5b[_0x382735(0x19a)],_0x16673b[_0x382735(0x17c)]=_0x16673b[_0x382735(0x17c)][_0x382735(0x1fa)](_assertThisInitialized(_0x16673b)),_0x16673b['mousemoveEvent']=_0x16673b[_0x382735(0x1e0)]['bind'](_assertThisInitialized(_0x16673b)),_0x16673b['bindEvent'](),_0x16673b;}return _createClass(_0x47f922,[{'key':'initDevicePixelRatio','value':function _0xbf0df5(){var _0x554368=_0x2bd4;this[_0x554368(0x19e)]=window['devicePixelRatio']||0x1;}},{'key':_0x4151d7(0x17c),'value':function _0x5b5d0e(_0x505a31){var _0x351017=_0x4151d7,_0x2b1085=_0x505a31[_0x351017(0x1fb)];_get(_getPrototypeOf(_0x47f922['prototype']),_0x351017(0x17c),this)[_0x351017(0x1ad)](this,_0x2b1085,_0x505a31);}},{'key':_0x4151d7(0x1e0),'value':function _0x2d29cf(_0x4836c6){var _0x4015f4=_0x4151d7,_0x1c0311=_0x4836c6['point'];_get(_getPrototypeOf(_0x47f922[_0x4015f4(0x18a)]),_0x4015f4(0x1e0),this)['call'](this,_0x1c0311,_0x4836c6);}},{'key':_0x4151d7(0x1ac),'value':function _0xab69f(){}},{'key':_0x4151d7(0x1a7),'value':function _0xc3b6b5(){var _0x4274a9=_0x4151d7,_0x232458=this[_0x4274a9(0x191)]['animation'];this[_0x4274a9(0x19b)]()&&this['animator']&&(this[_0x4274a9(0x200)]['step']=_0x232458['stepsRange'][_0x4274a9(0x150)]);}},{'key':'animatorMoveendEvent','value':function _0x4291e7(){var _0x273079=_0x4151d7;this[_0x273079(0x19b)]()&&this[_0x273079(0x14b)];}},{'key':_0x4151d7(0x1e4),'value':function _0x4170f7(){var _0x18dbfb=_0x4151d7;this[_0x18dbfb(0x1f7)],this[_0x18dbfb(0x191)]['methods']&&(this[_0x18dbfb(0x191)][_0x18dbfb(0x1c1)][_0x18dbfb(0x1e9)],this['options'][_0x18dbfb(0x1c1)]['mousemove']);}},{'key':_0x4151d7(0x18f),'value':function _0x4cee44(){var _0x276620=_0x4151d7,_0xa5f5ad=this[_0x276620(0x1f7)];this[_0x276620(0x191)][_0x276620(0x1c1)]&&(this[_0x276620(0x191)]['methods'][_0x276620(0x1e9)]&&_0xa5f5ad['off'](_0x276620(0x1e9),this[_0x276620(0x17c)]),this[_0x276620(0x191)]['methods'][_0x276620(0x1d2)]&&_0xa5f5ad[_0x276620(0x19c)](_0x276620(0x1d2),this[_0x276620(0x1e0)]));}},{'key':_0x4151d7(0x1bf),'value':function _0x17d8ad(){var _0x45ae14=_0x4151d7;return this[_0x45ae14(0x149)][_0x45ae14(0x16c)][_0x45ae14(0x1bf)](this['context']);}},{'key':_0x4151d7(0x1b5),'value':function _0x42eba0(_0x4bd1f5){var _0x2ad71f=_0x4151d7;this[_0x2ad71f(0x191)]=_0x4bd1f5,this['initDataRange'](_0x4bd1f5),this['context']=this[_0x2ad71f(0x191)][_0x2ad71f(0x1af)]||'2d',this[_0x2ad71f(0x191)][_0x2ad71f(0x166)]&&this[_0x2ad71f(0x149)]&&this[_0x2ad71f(0x149)]['setZIndex']&&this[_0x2ad71f(0x149)][_0x2ad71f(0x182)](this[_0x2ad71f(0x191)][_0x2ad71f(0x166)]),this[_0x2ad71f(0x1b8)]();}},{'key':'_canvasUpdate','value':function _0x2a5be9(_0x32a8e7){var _0x3f33b2=_0x4151d7,_0x56c464=this['scene'];if(this['canvasLayer']&&!this[_0x3f33b2(0x163)]){var _0x349682=this[_0x3f33b2(0x191)]['animation'],_0x2720ff=this[_0x3f33b2(0x1bf)]();if(this[_0x3f33b2(0x19b)]()){if(void 0x0===_0x32a8e7)return void this[_0x3f33b2(0x15c)](_0x2720ff);this[_0x3f33b2(0x1af)]==='2d'&&(_0x2720ff[_0x3f33b2(0x1c9)](),_0x2720ff[_0x3f33b2(0x16f)]=_0x3f33b2(0x14a),_0x2720ff[_0x3f33b2(0x1eb)]=_0x3f33b2(0x18c),_0x2720ff['fillRect'](0x0,0x0,_0x2720ff[_0x3f33b2(0x16c)][_0x3f33b2(0x1f9)],_0x2720ff['canvas'][_0x3f33b2(0x1d1)]),_0x2720ff['restore']());}else this[_0x3f33b2(0x15c)](_0x2720ff);if(this[_0x3f33b2(0x1af)]==='2d')for(var _0xc35e83 in this[_0x3f33b2(0x191)]){_0x2720ff[_0xc35e83]=this[_0x3f33b2(0x191)][_0xc35e83];}else _0x2720ff['clear'](_0x2720ff[_0x3f33b2(0x1ab)]);var _0x43e238={'transferCoordinate':function _0x4f2613(_0x4e4066){var _0x52d781=_0x3f33b2,_0x28a1e2=null,_0x4b2d4d=_0x56c464[_0x52d781(0x177)];_0x56c464['mapvAutoHeight']&&(_0x4b2d4d=_0x56c464[_0x52d781(0x184)][_0x52d781(0x1d4)](Cesium$1[_0x52d781(0x1b0)][_0x52d781(0x192)](_0x4e4066[0x0],_0x4e4066[0x1])));var _0x5d49ef=Cesium$1[_0x52d781(0x199)][_0x52d781(0x192)](_0x4e4066[0x0],_0x4e4066[0x1],_0x4b2d4d);if(!_0x5d49ef)return _0x28a1e2;var _0x17cc1e=_0x56c464[_0x52d781(0x178)](_0x5d49ef);if(!_0x17cc1e)return _0x28a1e2;if(_0x56c464[_0x52d781(0x196)]&&_0x56c464[_0x52d781(0x1c5)]===Cesium$1[_0x52d781(0x1be)]['SCENE3D']){var _0x290eae=new Cesium$1[(_0x52d781(0x1a0))](_0x56c464[_0x52d781(0x184)][_0x52d781(0x186)],_0x56c464[_0x52d781(0x1f0)][_0x52d781(0x168)]),_0x2a9d9a=_0x290eae['isPointVisible'](_0x5d49ef);if(!_0x2a9d9a)return _0x28a1e2;}return[_0x17cc1e['x'],_0x17cc1e['y']];}};void 0x0!==_0x32a8e7&&(_0x43e238[_0x3f33b2(0x1fd)]=function(_0x3a2532){var _0x4d5b85=_0x3f33b2,_0x5ecd9c=_0x349682[_0x4d5b85(0x15b)]||0xa;return!!(_0x32a8e7&&_0x3a2532['time']>_0x32a8e7-_0x5ecd9c&&_0x3a2532[_0x4d5b85(0x190)]<_0x32a8e7);});var _0x4b8019=this['dataSet'][_0x3f33b2(0x1e5)](_0x43e238);this[_0x3f33b2(0x15a)](_0x4b8019),this[_0x3f33b2(0x191)][_0x3f33b2(0x1e8)]==='m'&&this[_0x3f33b2(0x191)][_0x3f33b2(0x169)],this[_0x3f33b2(0x191)][_0x3f33b2(0x14f)]=this[_0x3f33b2(0x191)][_0x3f33b2(0x169)];var _0x2aa364=_0x56c464[_0x3f33b2(0x178)](Cesium$1[_0x3f33b2(0x199)]['fromDegrees'](0x0,0x0));if(!_0x2aa364)return;this[_0x3f33b2(0x1c2)](_0x2720ff,new mapv__namespace[(_0x3f33b2(0x17a))](_0x4b8019),this[_0x3f33b2(0x191)],_0x2aa364),this[_0x3f33b2(0x191)][_0x3f33b2(0x1e7)]&&this[_0x3f33b2(0x191)][_0x3f33b2(0x1e7)](_0x32a8e7);}}},{'key':_0x4151d7(0x1ed),'value':function _0x2c9af2(_0x2baf70,_0xf9696e){var _0x5da74c=_0x4151d7,_0x5b33aa=_0x2baf70;_0x5b33aa&&_0x5b33aa[_0x5da74c(0x1e5)]&&(_0x5b33aa=_0x5b33aa[_0x5da74c(0x1e5)]()),void 0x0!==_0x5b33aa&&this[_0x5da74c(0x170)][_0x5da74c(0x174)](_0x5b33aa),_get(_getPrototypeOf(_0x47f922[_0x5da74c(0x18a)]),_0x5da74c(0x1ba),this)[_0x5da74c(0x1ad)](this,{'options':_0xf9696e});}},{'key':'addData','value':function _0x140796(_0x1ba2bc,_0x3c58c3){var _0xf1c4b2=_0x4151d7,_0x2415d1=_0x1ba2bc;_0x1ba2bc&&_0x1ba2bc['get']&&(_0x2415d1=_0x1ba2bc[_0xf1c4b2(0x1e5)]()),this['dataSet'][_0xf1c4b2(0x14c)](_0x2415d1),this[_0xf1c4b2(0x1ba)]({'options':_0x3c58c3});}},{'key':_0x4151d7(0x1d7),'value':function _0x1cec6a(){return this['dataSet'];}},{'key':_0x4151d7(0x143),'value':function _0x25544a(_0x33727a){var _0x55abd7=_0x4151d7;if(this['dataSet']){var _0x1d8010=this['dataSet'][_0x55abd7(0x1e5)]({'filter':function _0x957353(_0x1767e9){var _0x2b6e7a=_0x55abd7;return _0x33727a==null||typeof _0x33727a!==_0x2b6e7a(0x1c7)||!_0x33727a(_0x1767e9);}});this[_0x55abd7(0x170)]['set'](_0x1d8010),this[_0x55abd7(0x1ba)]({'options':null});}}},{'key':'clearData','value':function _0x1d6859(){var _0x2fbd0b=_0x4151d7;this['dataSet']&&this[_0x2fbd0b(0x170)]['clear'](),this[_0x2fbd0b(0x1ba)]({'options':null});}},{'key':_0x4151d7(0x1f1),'value':function _0x3dfce3(){var _0x1c8801=_0x4151d7;this[_0x1c8801(0x149)][_0x1c8801(0x1f1)]();}},{'key':_0x4151d7(0x15c),'value':function _0x191440(_0x1780e6){var _0x380724=_0x4151d7;_0x1780e6&&_0x1780e6[_0x380724(0x1ae)]&&_0x1780e6[_0x380724(0x1ae)](0x0,0x0,_0x1780e6[_0x380724(0x16c)][_0x380724(0x1f9)],_0x1780e6['canvas'][_0x380724(0x1d1)]);}},{'key':_0x4151d7(0x176),'value':function _0x28eada(){var _0x5df06e=_0x4151d7;this[_0x5df06e(0x18f)](),this[_0x5df06e(0x15c)](this[_0x5df06e(0x1bf)]()),this[_0x5df06e(0x1de)](),this[_0x5df06e(0x14b)]&&this[_0x5df06e(0x14b)][_0x5df06e(0x158)](),this[_0x5df06e(0x14b)]=null,this[_0x5df06e(0x149)]=null;}}]),_0x47f922;}(BaseLayer$1);mapv__namespace[_0x9bc4c(0x17a)]['prototype'][_0x9bc4c(0x16e)]=function(_0x3459a4,_0x218920,_0x222805,_0x5e8b02){var _0x2c8b84=_0x9bc4c;_0x5e8b02=_0x5e8b02||_0x2c8b84(0x146),_0x222805=_0x222805||_0x2c8b84(0x1f5);for(var _0x9c9d95=0x0;_0x9c9d95<_0x3459a4[_0x2c8b84(0x1d0)];_0x9c9d95++){var _0x29cf63=_0x3459a4[_0x9c9d95][_0x2c8b84(0x1ec)],_0x364ade=_0x29cf63[_0x222805];switch(_0x29cf63[_0x2c8b84(0x14d)]){case _0x2c8b84(0x1b6):{var _0x47bdbf=_0x218920(_0x364ade);_0x47bdbf?_0x29cf63[_0x5e8b02]=_0x47bdbf:_0x29cf63[_0x5e8b02]=[-0x3e7,-0x3e7];}break;case _0x2c8b84(0x1e1):{var _0x45435b=[];for(var _0x207af3=0x0;_0x207af3<_0x364ade[_0x2c8b84(0x1d0)];_0x207af3++){var _0x99dec2=_0x218920(_0x364ade[_0x207af3]);_0x99dec2&&_0x45435b[_0x2c8b84(0x1da)](_0x99dec2);}_0x29cf63[_0x5e8b02]=_0x45435b;}break;case _0x2c8b84(0x172):case _0x2c8b84(0x1a8):{var _0x1173c4=_0x3c5c94(_0x364ade);_0x29cf63[_0x5e8b02]=_0x1173c4;}break;case _0x2c8b84(0x144):{var _0x4a88de=[];for(var _0x55fbde=0x0;_0x55fbde<_0x364ade[_0x2c8b84(0x1d0)];_0x55fbde++){var _0x2420e=_0x3c5c94(_0x364ade[_0x55fbde]);_0x2420e[_0x2c8b84(0x1d0)]>0x0&&_0x4a88de[_0x2c8b84(0x1da)](_0x2420e);}_0x29cf63[_0x5e8b02]=_0x4a88de;}break;}}function _0x3c5c94(_0x282286){var _0xcc2e0a=_0x2c8b84,_0x36e055=[];for(var _0xa46e1c=0x0;_0xa46e1c<_0x282286[_0xcc2e0a(0x1d0)];_0xa46e1c++){var _0x3c62e8=_0x282286[_0xa46e1c],_0x41c20b=[];for(var _0x34c549=0x0;_0x34c549<_0x3c62e8[_0xcc2e0a(0x1d0)];_0x34c549++){var _0x32f757=_0x218920(_0x3c62e8[_0x34c549]);_0x32f757&&_0x41c20b[_0xcc2e0a(0x1da)](_0x32f757);}_0x41c20b[_0xcc2e0a(0x1d0)]>0x0&&_0x36e055[_0xcc2e0a(0x1da)](_0x41c20b);}return _0x36e055;}return _0x3459a4;};var Cesium=mars3d__namespace[_0x9bc4c(0x19f)],BaseLayer=mars3d__namespace[_0x9bc4c(0x1cf)][_0x9bc4c(0x1a3)],divId=0x0,MapVLayer=function(_0x358c55){var _0x18ebaf=_0x9bc4c;_inherits(_0x5d35d1,_0x358c55);var _0x4e703a=_createSuper(_0x5d35d1);function _0x5d35d1(_0x45906f,_0x325899){var _0x41af3b=_0x2bd4,_0x2ca87c;return _classCallCheck(this,_0x5d35d1),_0x2ca87c=_0x4e703a[_0x41af3b(0x1ad)](this,_0x45906f),_0x2ca87c[_0x41af3b(0x152)]=_0x2ca87c['options'][_0x41af3b(0x198)],_0x2ca87c['dataSet']=_0x325899||new mapv__namespace[(_0x41af3b(0x17a))](_0x45906f['data']),_0x2ca87c[_0x41af3b(0x16c)]=null,_0x2ca87c;}return _createClass(_0x5d35d1,[{'key':_0x18ebaf(0x198),'get':function _0x298d41(){var _0x356ef2=_0x18ebaf;return this[_0x356ef2(0x152)];},'set':function _0x545e8a(_0x1af447){var _0x4dc685=_0x18ebaf;this[_0x4dc685(0x152)]=_0x1af447,this[_0x4dc685(0x16c)]&&(_0x1af447?this['canvas'][_0x4dc685(0x156)]['pointerEvents']=_0x4dc685(0x155):this[_0x4dc685(0x16c)][_0x4dc685(0x156)][_0x4dc685(0x198)]=_0x4dc685(0x1a2));}},{'key':_0x18ebaf(0x173),'value':function _0x14d5d4(_0xfa4e2e){var _0x26684d=_0x18ebaf;_0xfa4e2e?this['canvas'][_0x26684d(0x156)]['display']=_0x26684d(0x1a1):this[_0x26684d(0x16c)][_0x26684d(0x156)][_0x26684d(0x1b1)]=_0x26684d(0x1a2);}},{'key':_0x18ebaf(0x153),'value':function _0x215855(){var _0x26b364=_0x18ebaf;this['_map']['scene']['mapvDepthTest']=Cesium[_0x26b364(0x1c0)](this[_0x26b364(0x191)][_0x26b364(0x194)],!![]),this[_0x26b364(0x16d)][_0x26b364(0x1fc)][_0x26b364(0x165)]=Cesium[_0x26b364(0x1c0)](this[_0x26b364(0x191)][_0x26b364(0x164)],![]),this['_map'][_0x26b364(0x1fc)][_0x26b364(0x177)]=Cesium['defaultValue'](this[_0x26b364(0x191)][_0x26b364(0x159)],0x0);}},{'key':_0x18ebaf(0x18e),'value':function _0x13d09c(){var _0x4c7284=_0x18ebaf;this[_0x4c7284(0x170)]&&(!this[_0x4c7284(0x170)][_0x4c7284(0x142)]||this[_0x4c7284(0x170)]['_data'][_0x4c7284(0x1d0)]===0x0)&&(this[_0x4c7284(0x170)][_0x4c7284(0x142)]=[][_0x4c7284(0x15d)](this['dataSet'][_0x4c7284(0x1f6)])),this[_0x4c7284(0x1b4)]=new MapVRenderer(this['_map'],this['dataSet'],this['options'],this),this[_0x4c7284(0x1e6)](),this['canvas']=this[_0x4c7284(0x1b2)](),this[_0x4c7284(0x1a9)]=this[_0x4c7284(0x1a9)]['bind'](this),this['container']=this['_map']['container'],this[_0x4c7284(0x1f4)](),this['bindEvent'](),this[_0x4c7284(0x15e)]();}},{'key':_0x18ebaf(0x181),'value':function _0x1c602f(){var _0x43e425=_0x18ebaf;this['unbindEvent'](),this['_mapVRenderer']&&(this['_mapVRenderer']['destroy'](),this[_0x43e425(0x1b4)]=null),this[_0x43e425(0x16c)][_0x43e425(0x1cd)]['removeChild'](this['canvas']);}},{'key':_0x18ebaf(0x1e6),'value':function _0x54d19f(){var _0x19ccf8=_0x18ebaf;this[_0x19ccf8(0x19e)]=window['devicePixelRatio']||0x1;}},{'key':_0x18ebaf(0x1f4),'value':function _0x1895da(){var _0x19f962=_0x18ebaf;this[_0x19f962(0x193)][_0x19f962(0x19d)](this['canvas']);}},{'key':_0x18ebaf(0x1e4),'value':function _0x44aa86(){var _0x3c7c78=_0x18ebaf;this[_0x3c7c78(0x16d)]['on'](mars3d__namespace['EventType']['mouseDown'],this['_onMoveStartEvent'],this),this[_0x3c7c78(0x16d)]['on'](mars3d__namespace[_0x3c7c78(0x180)][_0x3c7c78(0x16a)],this[_0x3c7c78(0x171)],this),this[_0x3c7c78(0x16d)]['on'](mars3d__namespace[_0x3c7c78(0x180)][_0x3c7c78(0x1b9)],this[_0x3c7c78(0x1f8)],this);}},{'key':_0x18ebaf(0x18f),'value':function _0x42c70c(){var _0x16bbce=_0x18ebaf;this[_0x16bbce(0x16d)][_0x16bbce(0x19c)](mars3d__namespace[_0x16bbce(0x180)][_0x16bbce(0x1cc)],this['_onMoveStartEvent'],this),this[_0x16bbce(0x16d)][_0x16bbce(0x19c)](mars3d__namespace[_0x16bbce(0x180)][_0x16bbce(0x16a)],this[_0x16bbce(0x171)],this),this['_map'][_0x16bbce(0x19c)](mars3d__namespace['EventType'][_0x16bbce(0x1b9)],this[_0x16bbce(0x1f8)],this),this['_map']['off'](mars3d__namespace[_0x16bbce(0x180)][_0x16bbce(0x187)],this[_0x16bbce(0x15e)],this);}},{'key':_0x18ebaf(0x171),'value':function _0x45ac17(){var _0xf7ddd9=_0x18ebaf;this[_0xf7ddd9(0x1b4)]&&(this['_mapVRenderer'][_0xf7ddd9(0x1a7)](),this[_0xf7ddd9(0x16d)]['off'](mars3d__namespace[_0xf7ddd9(0x180)][_0xf7ddd9(0x187)],this[_0xf7ddd9(0x15e)],this),this[_0xf7ddd9(0x16d)]['on'](mars3d__namespace[_0xf7ddd9(0x180)][_0xf7ddd9(0x187)],this[_0xf7ddd9(0x15e)],this));}},{'key':_0x18ebaf(0x1f8),'value':function _0x359572(){var _0x373916=_0x18ebaf;this[_0x373916(0x1b4)]&&(this[_0x373916(0x16d)][_0x373916(0x19c)](mars3d__namespace[_0x373916(0x180)][_0x373916(0x187)],this[_0x373916(0x15e)],this),this[_0x373916(0x1b4)][_0x373916(0x15f)](),this[_0x373916(0x15e)]());}},{'key':_0x18ebaf(0x1c4),'value':function _0x10ee6f(_0x2860ab){var _0x45076c=_0x18ebaf;this[_0x45076c(0x181)](),this[_0x45076c(0x18e)]();}},{'key':'addData','value':function _0x3f7e56(_0x261761){var _0x22b8d2=_0x18ebaf;this[_0x22b8d2(0x1b4)]&&this[_0x22b8d2(0x1b4)][_0x22b8d2(0x162)](_0x261761,this[_0x22b8d2(0x191)]);}},{'key':'updateData','value':function _0xba7398(_0x379fd5){var _0x5a938e=_0x18ebaf;this[_0x5a938e(0x1b4)]&&this['_mapVRenderer'][_0x5a938e(0x1ed)](_0x379fd5,this[_0x5a938e(0x191)]);}},{'key':'getData','value':function _0x3fe40f(){var _0x21f094=_0x18ebaf;return this['_mapVRenderer']&&(this[_0x21f094(0x170)]=this[_0x21f094(0x1b4)]['getData']()),this[_0x21f094(0x170)];}},{'key':_0x18ebaf(0x143),'value':function _0x417eb4(_0x211ebc){var _0x25700a=_0x18ebaf;this[_0x25700a(0x1b4)]&&this['_mapVRenderer']['removeData'](_0x211ebc);}},{'key':_0x18ebaf(0x1cb),'value':function _0x4f5f51(){var _0x40dd8c=_0x18ebaf;this[_0x40dd8c(0x1b4)]&&this[_0x40dd8c(0x1b4)][_0x40dd8c(0x1de)]();}},{'key':_0x18ebaf(0x1b2),'value':function _0x16a2b3(){var _0x39df19=_0x18ebaf,_0x4b1dd=document['createElement'](_0x39df19(0x16c));_0x4b1dd['id']=this[_0x39df19(0x191)][_0x39df19(0x1fe)]||_0x39df19(0x147)+divId++,_0x4b1dd['style'][_0x39df19(0x189)]=_0x39df19(0x1e3),_0x4b1dd['style']['top']=_0x39df19(0x179),_0x4b1dd[_0x39df19(0x156)]['left']=_0x39df19(0x179),_0x4b1dd['style']['pointerEvents']=this[_0x39df19(0x152)]?_0x39df19(0x1ca):_0x39df19(0x1a2),_0x4b1dd['style'][_0x39df19(0x166)]=this[_0x39df19(0x191)][_0x39df19(0x166)]||0x64,_0x4b1dd[_0x39df19(0x1f9)]=parseInt(this['_map']['canvas']['width']),_0x4b1dd['height']=parseInt(this['_map'][_0x39df19(0x16c)][_0x39df19(0x1d1)]),_0x4b1dd['style'][_0x39df19(0x1f9)]=this[_0x39df19(0x16d)]['canvas'][_0x39df19(0x156)]['width'],_0x4b1dd[_0x39df19(0x156)][_0x39df19(0x1d1)]=this[_0x39df19(0x16d)][_0x39df19(0x16c)]['style'][_0x39df19(0x1d1)];if(this['options']['context']==='2d'){var _0x2399af=this[_0x39df19(0x19e)];_0x4b1dd[_0x39df19(0x1bf)](this[_0x39df19(0x191)]['context'])[_0x39df19(0x1c8)](_0x2399af,_0x2399af);}return _0x4b1dd;}},{'key':_0x18ebaf(0x15e),'value':function _0x1650b0(){var _0x21772b=_0x18ebaf;this[_0x21772b(0x161)](),this[_0x21772b(0x1a9)]();}},{'key':_0x18ebaf(0x1f1),'value':function _0x4ceb2c(){var _0x8f41da=_0x18ebaf;this[_0x8f41da(0x15e)]();}},{'key':'remove','value':function _0x3e4d3d(){var _0x568fde=_0x18ebaf;this[_0x568fde(0x1b4)]&&(this[_0x568fde(0x1b4)][_0x568fde(0x176)](),this[_0x568fde(0x1b4)]=null),this[_0x568fde(0x16c)][_0x568fde(0x1cd)][_0x568fde(0x160)](this['canvas']);}},{'key':_0x18ebaf(0x1a9),'value':function _0x4431e9(){var _0x4afadc=_0x18ebaf;this[_0x4afadc(0x1b4)][_0x4afadc(0x1ff)]();}},{'key':'resize','value':function _0x1c8a2b(){var _0x5ea664=_0x18ebaf;if(this['canvas']){var _0x3812b0=this[_0x5ea664(0x16c)];_0x3812b0['style'][_0x5ea664(0x189)]='absolute',_0x3812b0[_0x5ea664(0x156)][_0x5ea664(0x1db)]=_0x5ea664(0x179),_0x3812b0[_0x5ea664(0x156)][_0x5ea664(0x195)]=_0x5ea664(0x179),_0x3812b0[_0x5ea664(0x1f9)]=parseInt(this['_map'][_0x5ea664(0x16c)][_0x5ea664(0x1f9)]),_0x3812b0[_0x5ea664(0x1d1)]=parseInt(this[_0x5ea664(0x16d)][_0x5ea664(0x16c)][_0x5ea664(0x1d1)]),_0x3812b0[_0x5ea664(0x156)][_0x5ea664(0x1f9)]=this['_map'][_0x5ea664(0x16c)]['style'][_0x5ea664(0x1f9)],_0x3812b0['style'][_0x5ea664(0x1d1)]=this['_map']['canvas'][_0x5ea664(0x156)][_0x5ea664(0x1d1)];}}},{'key':_0x18ebaf(0x175),'value':function _0x3c3614(_0xba7cc){var _0x5e23ae=_0x18ebaf;if(!window['turf']){mars3d__namespace[_0x5e23ae(0x1e2)]['logWarn'](_0x5e23ae(0x1bd));return;}if(!this['dataSet']||!this[_0x5e23ae(0x170)][_0x5e23ae(0x142)])return;var _0x45732e=window['turf'][_0x5e23ae(0x157)](window[_0x5e23ae(0x151)][_0x5e23ae(0x183)](this[_0x5e23ae(0x170)]['_data']));if(!_0x45732e)return;return _0xba7cc!==null&&_0xba7cc!==void 0x0&&_0xba7cc[_0x5e23ae(0x1c6)]?{'xmin':_0x45732e[0x0],'xmax':_0x45732e[0x1],'ymin':_0x45732e[0x2],'ymax':_0x45732e[0x3]}:Cesium[_0x5e23ae(0x1aa)]['fromDegrees'](_0x45732e[0x0],_0x45732e[0x1],_0x45732e[0x2],_0x45732e[0x3]);}}]),_0x5d35d1;}(BaseLayer);mars3d__namespace[_0x9bc4c(0x1d9)][_0x9bc4c(0x145)](_0x9bc4c(0x147),MapVLayer),mars3d__namespace[_0x9bc4c(0x1cf)][_0x9bc4c(0x1bb)]=MapVLayer,exports[_0x9bc4c(0x1bb)]=MapVLayer,Object[_0x9bc4c(0x17b)](mapv)[_0x9bc4c(0x1d8)](function(_0x2df2cc){var _0x43bea1=_0x9bc4c;if(_0x2df2cc!=='default'&&!exports[_0x43bea1(0x1a6)](_0x2df2cc))Object['defineProperty'](exports,_0x2df2cc,{'enumerable':!![],'get':function(){return mapv[_0x2df2cc];}});}),Object['defineProperty'](exports,_0x9bc4c(0x1ce),{'value':!![]});
}));
