/**
 * Mars3D三维可视化平台  mars3d-sdk
 *
 * 版本信息：v3.3.1
 * 编译日期：2022-03-20 15:34:45
 * 版权所有：Copyright by 火星科技  http://mars3d.cn
 * 使用单位：免费公开版 ，2022-02-01
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, (window.mapv || require('mapv')), (window.mars3d || require('mars3d'))) :
  typeof define === 'function' && define.amd ? define(['exports', 'mapv', 'mars3d'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["mars3d-mapv"] = {}, global.mapv, global.mars3d));
})(this, (function (exports, mapv, mars3d) { 
'use strict';var _0x266518=_0x53c1;(function(_0x41c8e5,_0x186720){var _0x39e5c2=_0x53c1,_0x5b301e=_0x41c8e5();while(!![]){try{var _0x3eb847=-parseInt(_0x39e5c2(0x1ea))/0x1*(parseInt(_0x39e5c2(0x1a4))/0x2)+-parseInt(_0x39e5c2(0x1eb))/0x3*(-parseInt(_0x39e5c2(0x1c7))/0x4)+-parseInt(_0x39e5c2(0x233))/0x5+-parseInt(_0x39e5c2(0x1f5))/0x6*(parseInt(_0x39e5c2(0x1e8))/0x7)+-parseInt(_0x39e5c2(0x24d))/0x8+-parseInt(_0x39e5c2(0x1ed))/0x9+parseInt(_0x39e5c2(0x205))/0xa*(parseInt(_0x39e5c2(0x227))/0xb);if(_0x3eb847===_0x186720)break;else _0x5b301e['push'](_0x5b301e['shift']());}catch(_0x116fe6){_0x5b301e['push'](_0x5b301e['shift']());}}}(_0x1d66,0x850b6));function _interopNamespace(_0x39f801){var _0x5b9705=_0x53c1;if(_0x39f801&&_0x39f801['__esModule'])return _0x39f801;var _0x405c5=Object[_0x5b9705(0x1b0)](null);return _0x39f801&&Object[_0x5b9705(0x1f1)](_0x39f801)[_0x5b9705(0x1e6)](function(_0x33586f){var _0x5113bc=_0x5b9705;if(_0x33586f!=='default'){var _0x18fabd=Object['getOwnPropertyDescriptor'](_0x39f801,_0x33586f);Object[_0x5113bc(0x228)](_0x405c5,_0x33586f,_0x18fabd[_0x5113bc(0x208)]?_0x18fabd:{'enumerable':!![],'get':function(){return _0x39f801[_0x33586f];}});}}),_0x405c5[_0x5b9705(0x20f)]=_0x39f801,_0x405c5;}var mapv__namespace=_interopNamespace(mapv),mars3d__namespace=_interopNamespace(mars3d);function _classCallCheck(_0x5a793b,_0x235d90){var _0x4762b7=_0x53c1;if(!(_0x5a793b instanceof _0x235d90))throw new TypeError(_0x4762b7(0x220));}function _defineProperties(_0x4d853a,_0x3e0207){var _0xd30aa3=_0x53c1;for(var _0x9c9445=0x0;_0x9c9445<_0x3e0207[_0xd30aa3(0x24f)];_0x9c9445++){var _0x3b850b=_0x3e0207[_0x9c9445];_0x3b850b[_0xd30aa3(0x247)]=_0x3b850b[_0xd30aa3(0x247)]||![],_0x3b850b[_0xd30aa3(0x218)]=!![];if('value'in _0x3b850b)_0x3b850b[_0xd30aa3(0x21f)]=!![];Object[_0xd30aa3(0x228)](_0x4d853a,_0x3b850b['key'],_0x3b850b);}}function _createClass(_0x160f05,_0x33c0a9,_0x8311b7){var _0x3e54d0=_0x53c1;if(_0x33c0a9)_defineProperties(_0x160f05[_0x3e54d0(0x217)],_0x33c0a9);if(_0x8311b7)_defineProperties(_0x160f05,_0x8311b7);return Object[_0x3e54d0(0x228)](_0x160f05,_0x3e54d0(0x217),{'writable':![]}),_0x160f05;}function _inherits(_0x590416,_0x241baa){var _0x19fc1b=_0x53c1;if(typeof _0x241baa!==_0x19fc1b(0x1fb)&&_0x241baa!==null)throw new TypeError(_0x19fc1b(0x1d0));_0x590416[_0x19fc1b(0x217)]=Object[_0x19fc1b(0x1b0)](_0x241baa&&_0x241baa[_0x19fc1b(0x217)],{'constructor':{'value':_0x590416,'writable':!![],'configurable':!![]}}),Object[_0x19fc1b(0x228)](_0x590416,_0x19fc1b(0x217),{'writable':![]});if(_0x241baa)_setPrototypeOf(_0x590416,_0x241baa);}function _0x53c1(_0x37e6af,_0x264cb6){var _0x1d6686=_0x1d66();return _0x53c1=function(_0x53c1cc,_0x4588e5){_0x53c1cc=_0x53c1cc-0x19e;var _0x38cb27=_0x1d6686[_0x53c1cc];if(_0x53c1['EzdNEh']===undefined){var _0x4da0bf=function(_0x39f801){var _0x405c5='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x33586f='',_0x18fabd='';for(var _0x5a793b=0x0,_0x235d90,_0x4d853a,_0x3e0207=0x0;_0x4d853a=_0x39f801['charAt'](_0x3e0207++);~_0x4d853a&&(_0x235d90=_0x5a793b%0x4?_0x235d90*0x40+_0x4d853a:_0x4d853a,_0x5a793b++%0x4)?_0x33586f+=String['fromCharCode'](0xff&_0x235d90>>(-0x2*_0x5a793b&0x6)):0x0){_0x4d853a=_0x405c5['indexOf'](_0x4d853a);}for(var _0x9c9445=0x0,_0x3b850b=_0x33586f['length'];_0x9c9445<_0x3b850b;_0x9c9445++){_0x18fabd+='%'+('00'+_0x33586f['charCodeAt'](_0x9c9445)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x18fabd);};_0x53c1['jIBOQD']=_0x4da0bf,_0x37e6af=arguments,_0x53c1['EzdNEh']=!![];}var _0x18ab46=_0x1d6686[0x0],_0xe97bca=_0x53c1cc+_0x18ab46,_0x1bd045=_0x37e6af[_0xe97bca];return!_0x1bd045?(_0x38cb27=_0x53c1['jIBOQD'](_0x38cb27),_0x37e6af[_0xe97bca]=_0x38cb27):_0x38cb27=_0x1bd045,_0x38cb27;},_0x53c1(_0x37e6af,_0x264cb6);}function _getPrototypeOf(_0x5a1e56){var _0x287aec=_0x53c1;return _getPrototypeOf=Object['setPrototypeOf']?Object[_0x287aec(0x1af)]:function _0x521bfe(_0x2e67b9){var _0x2a4b91=_0x287aec;return _0x2e67b9['__proto__']||Object[_0x2a4b91(0x1af)](_0x2e67b9);},_getPrototypeOf(_0x5a1e56);}function _setPrototypeOf(_0x14a62a,_0xcab529){return _setPrototypeOf=Object['setPrototypeOf']||function _0x3bf9ea(_0x45c651,_0xca710f){var _0x22f20e=_0x53c1;return _0x45c651[_0x22f20e(0x1e4)]=_0xca710f,_0x45c651;},_setPrototypeOf(_0x14a62a,_0xcab529);}function _isNativeReflectConstruct(){var _0x2d1925=_0x53c1;if(typeof Reflect===_0x2d1925(0x1db)||!Reflect[_0x2d1925(0x1a1)])return![];if(Reflect[_0x2d1925(0x1a1)][_0x2d1925(0x250)])return![];if(typeof Proxy===_0x2d1925(0x1fb))return!![];try{return Boolean[_0x2d1925(0x217)][_0x2d1925(0x1f3)][_0x2d1925(0x230)](Reflect[_0x2d1925(0x1a1)](Boolean,[],function(){})),!![];}catch(_0x24d93b){return![];}}function _assertThisInitialized(_0x38a563){var _0x50ffed=_0x53c1;if(_0x38a563===void 0x0)throw new ReferenceError(_0x50ffed(0x1e5));return _0x38a563;}function _possibleConstructorReturn(_0x24da75,_0x2b7c71){var _0xf47274=_0x53c1;if(_0x2b7c71&&(typeof _0x2b7c71===_0xf47274(0x200)||typeof _0x2b7c71===_0xf47274(0x1fb)))return _0x2b7c71;else{if(_0x2b7c71!==void 0x0)throw new TypeError('Derived\x20constructors\x20may\x20only\x20return\x20object\x20or\x20undefined');}return _assertThisInitialized(_0x24da75);}function _createSuper(_0x220281){var _0x4839c8=_isNativeReflectConstruct();return function _0x8d303e(){var _0x219ba6=_0x53c1,_0x5b036f=_getPrototypeOf(_0x220281),_0x5d36f4;if(_0x4839c8){var _0x4a3912=_getPrototypeOf(this)[_0x219ba6(0x1c0)];_0x5d36f4=Reflect[_0x219ba6(0x1a1)](_0x5b036f,arguments,_0x4a3912);}else _0x5d36f4=_0x5b036f[_0x219ba6(0x21a)](this,arguments);return _possibleConstructorReturn(this,_0x5d36f4);};}function _superPropBase(_0x14b8fe,_0x46b341){var _0x13442c=_0x53c1;while(!Object[_0x13442c(0x217)][_0x13442c(0x243)][_0x13442c(0x230)](_0x14b8fe,_0x46b341)){_0x14b8fe=_getPrototypeOf(_0x14b8fe);if(_0x14b8fe===null)break;}return _0x14b8fe;}function _get(){var _0x4664ce=_0x53c1;return typeof Reflect!==_0x4664ce(0x1db)&&Reflect[_0x4664ce(0x208)]?_get=Reflect[_0x4664ce(0x208)]:_get=function _0x3fca0a(_0x53e49e,_0x17c4e6,_0x4b4744){var _0x532dc0=_0x4664ce,_0x3962fc=_superPropBase(_0x53e49e,_0x17c4e6);if(!_0x3962fc)return;var _0x2fe14a=Object['getOwnPropertyDescriptor'](_0x3962fc,_0x17c4e6);if(_0x2fe14a['get'])return _0x2fe14a[_0x532dc0(0x208)][_0x532dc0(0x230)](arguments[_0x532dc0(0x24f)]<0x3?_0x53e49e:_0x4b4744);return _0x2fe14a[_0x532dc0(0x1c1)];},_get[_0x4664ce(0x21a)](this,arguments);}function _0x1d66(){var _0x12ceb6=['Bw91C2veB3DU','DhLWzq','B3b0Aw9UCW','AgvPz2H0','zgLZCgXHEq','Bwv0Ag9KCW','uMvJDgfUz2XL','twfWvKXHEwvY','x19LC01VzhvSzq','yw5PBwf0Aw9U','CMvTB3zLrgf0yq','C2f2zq','yMjVEa','AgfZt3DUuhjVCgvYDhK','txvSDgLmAw5Lu3rYAw5N','BwfWDG','C3rHCNq','zw51BwvYywjSzq','tgLUzvn0CMLUzW','zhjHD0nVBNrLEhq','x21HCa','C2nHBgu','BwfWDKzPEgvKsgvPz2H0','oda5mJK2mgrHuKvUEq','zMLSBfn0EwXL','BgvUz3rO','C2HHBq','y2XLyxjszwn0','Bgf5zxi','x2nHBNzHC1vWzgf0zq','Dw5IAw5KrxzLBNq','C3rVCefUAwfTyxrPB24','y2XPy2S','y29UC3rYDwn0','CMvZDg9Yzq','AxnqB2LUDfzPC2LIBgu','mtaYmMXIuNPxra','DgLTzq','C3rLCa','zML4zwrizwLNAhq','DxbKyxrLq2fSBgjHy2S','y2XLyxi','BwfW','zgf0yvnLDa','Aw5PDerLDMLJzvbPEgvSuMf0Aw8','x3jLC2v0','tgf5zxjvDgLS','z2v0uhjVDg90ExbLt2y','y3jLyxrL','CMvNAxn0zxi','Dw5PDa','AxnfBMfIBgvKvgLTzq','BM9Uzq','rxzLBNruExbL','zNjVBurLz3jLzxm','Bw91C2vTB3zLrxzLBNq','tg9N','x2fKzgvKsg9VAW','CgfYzw50rwXLBwvUDa','x21HCfzszw5KzxjLCG','y2XPy2TfDMvUDa','BgvMDa','C3rVCa','x2rHDge','y29UC3rYDwn0B3i','DMfSDwu','z2v0q29UDgv4Da','zwXSAxbZB2LK','C3r5Bgu','CMDIysGWlcaWlcaWlcaUmsK','ChjVy2vZC0rHDge','ntzLz0nhyKG','C2v0wKLUzgv4','yxbWzw5Kq2HPBgq','ChvZAa','ywrKrgf0yq','y3jLyxrLrwXLBwvUDa','B2zM','Cg9ZAxrPB25xqW','6zYa6kAb5BYv5ywLDhvYzUw6K+AjJEIdVEIUOEEUL2DLB2PZB27NMOrIyM946l6555wm77Yb','u3vWzxiGzxHWCMvZC2LVBIbTDxn0igvPDgHLCIbIzsbUDwXSig9YigeGzNvUy3rPB24','Aw5PDefUAw1HDg9Y','CMvTB3zLq2HPBgq','rwXSAxbZB2LKywXpy2nSDwrLCG','y2fTzxjHtw92zvn0yxj0','x21VDw50zwriB29R','DhvYzG','yw5PBwf0B3jnB3zLC3rHCNrfDMvUDa','y2XLyxjeyxrH','ywrKqw5PBwf0B3jfDMvUDa','CMvUzgvY','Dw5KzwzPBMvK','q2fYDg9NCMfWAgLJ','ywrKsw5UzxjdB250ywLUzxi','y2fUDMfZtgf5zxi','Bw91C2vTB3zL','rgf0yvnLDa','x29Utw92zuvUzev2zw50','zgvZDhjVEq','Dg9W','x19WCM90B19F','DgHPCYbOyxnUj3qGyMvLBIbPBML0AwfSAxnLzcaTihn1CgvYkcKGAgfZBID0igjLzw4Gy2fSBgvK','zM9YrwfJAa','Bw9Kzq','nda2mtaWmuLxt3vSwG','z2v0sgvPz2H0','odLcBezkzLu','oda3uKL1ywn3','u2nLBMvnB2rL','oteXmJuXoffku0vQEq','C2v0','Cg9ZDfjLBMrLCG','x29Utw92zvn0yxj0rxzLBNq','A2v5CW','BwfWDKf1Dg9izwLNAhq','DMfSDwvpzG','z2XVyMu','nKzgtgDUqG','mhb4','D2LKDgG','CMvZAxPL','qMfZzuXHEwvY','yw5PBwf0B3i','zNvUy3rPB24','y2fUDMfZ','yMLUza','Bg9Nv2fYBG','C2L6zq','B2jQzwn0','x2nYzwf0zunHBNzHCW','zhjHDW','x3nLDe9WDgLVBNniB29R','ywXS','mZbKCLD0uvC','zMLSDgvY','x3jLBw92zwriB29R','z2v0','q09mt1jFqLvgrKvsx0jjva','zgvMyxvSDfzHBhvL','zMLSBfjLy3q','yxv0BW','y2XHBxbuB0DYB3vUza','u0nftKuZra','zgvMyxvSDa','zgv2AwnLugL4zwXsyxrPBW','yMLUzev2zw50','ywjZB2X1Dgu','y29UDgfPBMvY','yw5PBwf0B3jnB3zLzw5KrxzLBNq','zgvZDgLUyxrPB24TB3v0','ug9PBNq','ChjVDg90ExbL','y29UzMLNDxjHyMXL','DxbKyxrL','yxbWBhK','q2vZAxvT','y2fYDgvZAwfUvg9dyw52yxndB29YzgLUyxrLCW','x2rHDgfdywnOzq','Cg9PBNrLCKv2zw50CW','D3jPDgfIBgu','q2fUBM90ignHBgWGysbJBgfZCYbHCYbHigz1BMn0Aw9U','x3nOB3DiB29R','C2nLBMu','zgf0yq','Cg9ZAxrPB24','x3nPEMu','x2nVB3jKAw5HDgvZ','mtq5ntKXntnkv0PZtKC','zgvMAw5LuhjVCgvYDhK','ug9SEwDVBG','zMvHDhvYzunVBgXLy3rPB24','yMfPzhvnyxbmyxLLCG','Cg9PBNq','EKLUzgv4','z2v0rgf0yq','x3bVAw50zxjfDMvUDhm','y2fSBa','y29UDgv4Da','BwfWDKrLChrOvgvZDa','ndq0ndiWnunIt2rIAq','C3rLChnsyw5Nzq','DxbKyxrLrgf0yq'];_0x1d66=function(){return _0x12ceb6;};return _0x1d66();}var Cesium$1=mars3d__namespace[_0x266518(0x21b)],baiduMapLayer=mapv__namespace?mapv__namespace[_0x266518(0x22b)]:null,BaseLayer$1=baiduMapLayer?baiduMapLayer['__proto__']:Function,MapVRenderer=function(_0x441279){var _0xf8cfc1=_0x266518;_inherits(_0x26da25,_0x441279);var _0x2f6855=_createSuper(_0x26da25);function _0x26da25(_0x1d3e7b,_0x482753,_0x306a34,_0x1d94a8){var _0x4353c3=_0x53c1,_0xe1e8a6;_classCallCheck(this,_0x26da25),_0xe1e8a6=_0x2f6855[_0x4353c3(0x230)](this,_0x1d3e7b,_0x482753,_0x306a34);if(!BaseLayer$1)return _possibleConstructorReturn(_0xe1e8a6);return _0xe1e8a6[_0x4353c3(0x1aa)]=_0x1d3e7b,_0xe1e8a6[_0x4353c3(0x222)]=_0x1d3e7b[_0x4353c3(0x222)],_0xe1e8a6[_0x4353c3(0x1ab)]=_0x482753,_0x306a34=_0x306a34||{},_0xe1e8a6['init'](_0x306a34),_0xe1e8a6['argCheck'](_0x306a34),_0xe1e8a6[_0x4353c3(0x1ac)](),_0xe1e8a6[_0x4353c3(0x1de)]=_0x1d94a8,_0xe1e8a6[_0x4353c3(0x19f)]=!0x1,_0xe1e8a6[_0x4353c3(0x23f)]=_0x306a34['animation'],_0xe1e8a6[_0x4353c3(0x1bc)]=_0xe1e8a6['clickEvent'][_0x4353c3(0x1fd)](_assertThisInitialized(_0xe1e8a6)),_0xe1e8a6[_0x4353c3(0x1b7)]=_0xe1e8a6[_0x4353c3(0x1b7)][_0x4353c3(0x1fd)](_assertThisInitialized(_0xe1e8a6)),_0xe1e8a6[_0x4353c3(0x211)](),_0xe1e8a6;}return _createClass(_0x26da25,[{'key':'initDevicePixelRatio','value':function _0x2ef8bd(){var _0xf4fd2=_0x53c1;this[_0xf4fd2(0x210)]=window['devicePixelRatio']||0x1;}},{'key':_0xf8cfc1(0x1bc),'value':function _0x4ee41b(_0x4ee2c8){var _0x701b09=_0xf8cfc1,_0x5e3aae=_0x4ee2c8[_0x701b09(0x22c)];_get(_getPrototypeOf(_0x26da25['prototype']),_0x701b09(0x1bc),this)[_0x701b09(0x230)](this,_0x5e3aae,_0x4ee2c8);}},{'key':_0xf8cfc1(0x1b7),'value':function _0x259476(_0x28736c){var _0x345f82=_0xf8cfc1,_0x545430=_0x28736c['point'];_get(_getPrototypeOf(_0x26da25[_0x345f82(0x217)]),'mousemoveEvent',this)['call'](this,_0x545430,_0x28736c);}},{'key':_0xf8cfc1(0x1d9),'value':function _0x13451a(){}},{'key':_0xf8cfc1(0x1d7),'value':function _0x2228ba(){var _0x3a54aa=_0xf8cfc1,_0x54a0a0=this[_0x3a54aa(0x238)]['animation'];this[_0x3a54aa(0x1b3)]()&&this[_0x3a54aa(0x1fa)]&&(this['steps'][_0x3a54aa(0x1a6)]=_0x54a0a0[_0x3a54aa(0x234)][_0x3a54aa(0x246)]);}},{'key':'animatorMoveendEvent','value':function _0x14a918(){var _0x3b326d=_0xf8cfc1;this[_0x3b326d(0x1b3)]()&&this['animator'];}},{'key':_0xf8cfc1(0x211),'value':function _0x365c3c(){var _0x676277=_0xf8cfc1;this['map'],this[_0x676277(0x238)][_0x676277(0x23b)]&&(this[_0x676277(0x238)][_0x676277(0x23b)][_0x676277(0x1a0)],this[_0x676277(0x238)]['methods'][_0x676277(0x1df)]);}},{'key':'unbindEvent','value':function _0x22eed5(){var _0x4f0a82=_0xf8cfc1,_0x4aad4d=this[_0x4f0a82(0x1aa)];this[_0x4f0a82(0x238)][_0x4f0a82(0x23b)]&&(this['options']['methods'][_0x4f0a82(0x1a0)]&&_0x4aad4d[_0x4f0a82(0x1cd)](_0x4f0a82(0x1a0),this['clickEvent']),this[_0x4f0a82(0x238)][_0x4f0a82(0x23b)][_0x4f0a82(0x1df)]&&_0x4aad4d[_0x4f0a82(0x1cd)](_0x4f0a82(0x1df),this[_0x4f0a82(0x1b7)]));}},{'key':_0xf8cfc1(0x1c2),'value':function _0x3af03f(){var _0x367deb=_0xf8cfc1;return this[_0x367deb(0x1de)][_0x367deb(0x1fc)][_0x367deb(0x1c2)](this[_0x367deb(0x231)]);}},{'key':'init','value':function _0x313736(_0x30fd65){var _0x28029c=_0xf8cfc1;this[_0x28029c(0x238)]=_0x30fd65,this['initDataRange'](_0x30fd65),this[_0x28029c(0x231)]=this['options'][_0x28029c(0x231)]||'2d',this['options'][_0x28029c(0x22d)]&&this[_0x28029c(0x1de)]&&this[_0x28029c(0x1de)][_0x28029c(0x1c8)]&&this['canvasLayer'][_0x28029c(0x1c8)](this[_0x28029c(0x238)]['zIndex']),this[_0x28029c(0x1d1)]();}},{'key':'_canvasUpdate','value':function _0x1f1548(_0x2e8162){var _0x17a0ac=_0xf8cfc1,_0x51835e=this[_0x17a0ac(0x222)];if(this['canvasLayer']&&!this[_0x17a0ac(0x19f)]){var _0x324a09=this[_0x17a0ac(0x238)]['animation'],_0x3fbc3f=this[_0x17a0ac(0x1c2)]();if(this[_0x17a0ac(0x1b3)]()){if(void 0x0===_0x2e8162)return void this[_0x17a0ac(0x1a9)](_0x3fbc3f);this[_0x17a0ac(0x231)]==='2d'&&(_0x3fbc3f[_0x17a0ac(0x241)](),_0x3fbc3f['globalCompositeOperation']=_0x17a0ac(0x215),_0x3fbc3f[_0x17a0ac(0x24e)]=_0x17a0ac(0x1c5),_0x3fbc3f[_0x17a0ac(0x20b)](0x0,0x0,_0x3fbc3f[_0x17a0ac(0x1fc)]['width'],_0x3fbc3f['canvas'][_0x17a0ac(0x239)]),_0x3fbc3f[_0x17a0ac(0x1a2)]());}else this['clear'](_0x3fbc3f);if(this[_0x17a0ac(0x231)]==='2d')for(var _0x376e67 in this[_0x17a0ac(0x238)]){_0x3fbc3f[_0x376e67]=this[_0x17a0ac(0x238)][_0x376e67];}else _0x3fbc3f['clear'](_0x3fbc3f[_0x17a0ac(0x209)]);var _0x476d3d={'transferCoordinate':function _0x5201fb(_0x186e0c){var _0x37e9e1=_0x17a0ac,_0x141743=null,_0xf653a8=_0x51835e[_0x37e9e1(0x24c)];_0x51835e['mapvAutoHeight']&&(_0xf653a8=_0x51835e[_0x37e9e1(0x1f4)][_0x37e9e1(0x1e9)](Cesium$1[_0x37e9e1(0x1dc)][_0x37e9e1(0x1b6)](_0x186e0c[0x0],_0x186e0c[0x1])));var _0x170008=Cesium$1['Cartesian3'][_0x37e9e1(0x1b6)](_0x186e0c[0x0],_0x186e0c[0x1],_0xf653a8);if(!_0x170008)return _0x141743;var _0x3aabd4=_0x51835e[_0x37e9e1(0x21c)](_0x170008);if(!_0x3aabd4)return _0x141743;if(_0x51835e[_0x37e9e1(0x232)]&&_0x51835e[_0x37e9e1(0x1e7)]===Cesium$1[_0x37e9e1(0x1ec)][_0x37e9e1(0x20e)]){var _0x4fc2cf=new Cesium$1[(_0x37e9e1(0x1d3))](_0x51835e[_0x37e9e1(0x1f4)][_0x37e9e1(0x1c3)],_0x51835e['camera'][_0x37e9e1(0x1ce)]),_0x5aaf29=_0x4fc2cf[_0x37e9e1(0x1a3)](_0x170008);if(!_0x5aaf29)return _0x141743;}return[_0x3aabd4['x'],_0x3aabd4['y']];}};void 0x0!==_0x2e8162&&(_0x476d3d[_0x17a0ac(0x206)]=function(_0x5ed999){var _0x48c2b0=_0x17a0ac,_0x2ba72d=_0x324a09['trails']||0xa;return!!(_0x2e8162&&_0x5ed999[_0x48c2b0(0x1a5)]>_0x2e8162-_0x2ba72d&&_0x5ed999[_0x48c2b0(0x1a5)]<_0x2e8162);});var _0x396d8a=this[_0x17a0ac(0x1ab)][_0x17a0ac(0x208)](_0x476d3d);this[_0x17a0ac(0x1c6)](_0x396d8a),this['options'][_0x17a0ac(0x1b2)]==='m'&&this[_0x17a0ac(0x238)][_0x17a0ac(0x1ff)],this[_0x17a0ac(0x238)][_0x17a0ac(0x225)]=this['options'][_0x17a0ac(0x1ff)];var _0x32caa6=_0x51835e[_0x17a0ac(0x21c)](Cesium$1['Cartesian3'][_0x17a0ac(0x1b6)](0x0,0x0));if(!_0x32caa6)return;this[_0x17a0ac(0x249)](_0x3fbc3f,new mapv__namespace[(_0x17a0ac(0x1e0))](_0x396d8a),this[_0x17a0ac(0x238)],_0x32caa6),this[_0x17a0ac(0x238)]['updateCallback']&&this['options'][_0x17a0ac(0x1a8)](_0x2e8162);}}},{'key':_0xf8cfc1(0x235),'value':function _0x4e79b9(_0x4b1aa1,_0x5ed381){var _0x39ba2b=_0xf8cfc1,_0x51d540=_0x4b1aa1;_0x51d540&&_0x51d540['get']&&(_0x51d540=_0x51d540[_0x39ba2b(0x208)]()),void 0x0!==_0x51d540&&this[_0x39ba2b(0x1ab)][_0x39ba2b(0x1ee)](_0x51d540),_get(_getPrototypeOf(_0x26da25[_0x39ba2b(0x217)]),_0x39ba2b(0x219),this)[_0x39ba2b(0x230)](this,{'options':_0x5ed381});}},{'key':'addData','value':function _0x4fd6a2(_0x2e24c2,_0x240d3a){var _0x361971=_0xf8cfc1,_0x5cfec0=_0x2e24c2;_0x2e24c2&&_0x2e24c2[_0x361971(0x208)]&&(_0x5cfec0=_0x2e24c2[_0x361971(0x208)]()),this['dataSet']['add'](_0x5cfec0),this['update']({'options':_0x240d3a});}},{'key':_0xf8cfc1(0x22e),'value':function _0x32186f(){return this['dataSet'];}},{'key':_0xf8cfc1(0x240),'value':function _0x149a6f(_0x55adc0){var _0x5e849b=_0xf8cfc1;if(this[_0x5e849b(0x1ab)]){var _0x446aab=this[_0x5e849b(0x1ab)]['get']({'filter':function _0x12d73b(_0x5a7a6c){var _0x44eebc=_0x5e849b;return _0x55adc0==null||typeof _0x55adc0!==_0x44eebc(0x1fb)||!_0x55adc0(_0x5a7a6c);}});this[_0x5e849b(0x1ab)][_0x5e849b(0x1ee)](_0x446aab),this['update']({'options':null});}}},{'key':'clearData','value':function _0x40f0e1(){var _0x4b0b58=_0xf8cfc1;this['dataSet']&&this[_0x4b0b58(0x1ab)][_0x4b0b58(0x1a9)](),this[_0x4b0b58(0x219)]({'options':null});}},{'key':'draw','value':function _0x3ac88b(){var _0x431b6a=_0xf8cfc1;this[_0x431b6a(0x1de)]['draw']();}},{'key':_0xf8cfc1(0x1a9),'value':function _0x48f1f2(_0x28fd92){var _0x368d90=_0xf8cfc1;_0x28fd92&&_0x28fd92[_0x368d90(0x251)]&&_0x28fd92[_0x368d90(0x251)](0x0,0x0,_0x28fd92['canvas']['width'],_0x28fd92[_0x368d90(0x1fc)][_0x368d90(0x239)]);}},{'key':_0xf8cfc1(0x1e2),'value':function _0x57ae19(){var _0x4e64be=_0xf8cfc1;this[_0x4e64be(0x19e)](),this[_0x4e64be(0x1a9)](this['getContext']()),this[_0x4e64be(0x1d8)](),this[_0x4e64be(0x1fa)]&&this[_0x4e64be(0x1fa)][_0x4e64be(0x1be)](),this[_0x4e64be(0x1fa)]=null,this[_0x4e64be(0x1de)]=null;}}]),_0x26da25;}(BaseLayer$1);mapv__namespace['DataSet'][_0x266518(0x217)]['transferCoordinate']=function(_0x3d749c,_0x10810b,_0x299489,_0x5a9933){var _0x4d72b1=_0x266518;_0x5a9933=_0x5a9933||_0x4d72b1(0x226),_0x299489=_0x299489||'coordinates';for(var _0x1439e9=0x0;_0x1439e9<_0x3d749c['length'];_0x1439e9++){var _0x359d54=_0x3d749c[_0x1439e9]['geometry'],_0x3f8cc1=_0x359d54[_0x299489];switch(_0x359d54[_0x4d72b1(0x237)]){case _0x4d72b1(0x216):{var _0x1a5fe8=_0x10810b(_0x3f8cc1);_0x1a5fe8?_0x359d54[_0x5a9933]=_0x1a5fe8:_0x359d54[_0x5a9933]=[-0x3e7,-0x3e7];}break;case _0x4d72b1(0x248):{var _0x2c2d64=[];for(var _0x1fb4a5=0x0;_0x1fb4a5<_0x3f8cc1['length'];_0x1fb4a5++){var _0x3bda30=_0x10810b(_0x3f8cc1[_0x1fb4a5]);_0x3bda30&&_0x2c2d64[_0x4d72b1(0x1ca)](_0x3bda30);}_0x359d54[_0x5a9933]=_0x2c2d64;}break;case _0x4d72b1(0x244):case _0x4d72b1(0x229):{var _0xc00de4=_0xf512d0(_0x3f8cc1);_0x359d54[_0x5a9933]=_0xc00de4;}break;case'MultiPolygon':{var _0x545045=[];for(var _0x5ec89b=0x0;_0x5ec89b<_0x3f8cc1[_0x4d72b1(0x24f)];_0x5ec89b++){var _0xb2559=_0xf512d0(_0x3f8cc1[_0x5ec89b]);_0xb2559['length']>0x0&&_0x545045[_0x4d72b1(0x1ca)](_0xb2559);}_0x359d54[_0x5a9933]=_0x545045;}break;}}function _0xf512d0(_0x2e0ff8){var _0xd5842c=_0x4d72b1,_0x5b212a=[];for(var _0xcdac33=0x0;_0xcdac33<_0x2e0ff8[_0xd5842c(0x24f)];_0xcdac33++){var _0xa3ce5f=_0x2e0ff8[_0xcdac33],_0x45e635=[];for(var _0x2c65cb=0x0;_0x2c65cb<_0xa3ce5f[_0xd5842c(0x24f)];_0x2c65cb++){var _0x258b6a=_0x10810b(_0xa3ce5f[_0x2c65cb]);_0x258b6a&&_0x45e635[_0xd5842c(0x1ca)](_0x258b6a);}_0x45e635[_0xd5842c(0x24f)]>0x0&&_0x5b212a['push'](_0x45e635);}return _0x5b212a;}return _0x3d749c;};var Cesium=mars3d__namespace[_0x266518(0x21b)],BaseLayer=mars3d__namespace['layer'][_0x266518(0x1f9)],divId=0x0,MapVLayer=function(_0x491dd6){var _0x23f4c1=_0x266518;_inherits(_0x207d7d,_0x491dd6);var _0x164e65=_createSuper(_0x207d7d);function _0x207d7d(_0x1d6426,_0x15b634){var _0x50bd39=_0x53c1,_0x51539f;return _classCallCheck(this,_0x207d7d),_0x51539f=_0x164e65[_0x50bd39(0x230)](this,_0x1d6426),_0x51539f['_pointerEvents']=_0x51539f['options'][_0x50bd39(0x21e)],_0x51539f['dataSet']=_0x15b634||new mapv__namespace[(_0x50bd39(0x1e0))](_0x1d6426[_0x50bd39(0x223)]),_0x51539f[_0x50bd39(0x1fc)]=null,_0x51539f;}return _createClass(_0x207d7d,[{'key':_0x23f4c1(0x21e),'get':function _0x5130f5(){var _0x34e8de=_0x23f4c1;return this[_0x34e8de(0x22f)];},'set':function _0x5d9eb8(_0x5bde4f){var _0x4cfeed=_0x23f4c1;this['_pointerEvents']=_0x5bde4f,this[_0x4cfeed(0x1fc)]&&(_0x5bde4f?this[_0x4cfeed(0x1fc)]['style'][_0x4cfeed(0x21e)]=_0x4cfeed(0x204):this['canvas'][_0x4cfeed(0x1c4)][_0x4cfeed(0x21e)]=_0x4cfeed(0x1b4));}},{'key':_0x23f4c1(0x221),'value':function _0x7a4850(_0xf5ff2f){var _0xa1e6f=_0x23f4c1;_0xf5ff2f?this[_0xa1e6f(0x1fc)][_0xa1e6f(0x1c4)]['display']='block':this[_0xa1e6f(0x1fc)][_0xa1e6f(0x1c4)][_0xa1e6f(0x23a)]=_0xa1e6f(0x1b4);}},{'key':_0x23f4c1(0x1d5),'value':function _0x20b31f(){var _0x3405eb=_0x23f4c1;this[_0x3405eb(0x24a)][_0x3405eb(0x222)]['mapvDepthTest']=Cesium[_0x3405eb(0x20a)](this['options']['depthTest'],!![]),this[_0x3405eb(0x24a)][_0x3405eb(0x222)][_0x3405eb(0x1f2)]=Cesium[_0x3405eb(0x20a)](this[_0x3405eb(0x238)][_0x3405eb(0x20d)],![]),this[_0x3405eb(0x24a)]['scene'][_0x3405eb(0x24c)]=Cesium[_0x3405eb(0x20a)](this['options'][_0x3405eb(0x1a7)],0x0);}},{'key':_0x23f4c1(0x1b9),'value':function _0x458188(){var _0xb57b14=_0x23f4c1;this[_0xb57b14(0x1ab)]&&(!this[_0xb57b14(0x1ab)]['_data']||this[_0xb57b14(0x1ab)][_0xb57b14(0x1bf)]['length']===0x0)&&(this['dataSet'][_0xb57b14(0x1bf)]=[]['concat'](this['dataSet'][_0xb57b14(0x21d)])),this['_mapVRenderer']=new MapVRenderer(this[_0xb57b14(0x24a)],this[_0xb57b14(0x1ab)],this[_0xb57b14(0x238)],this),this[_0xb57b14(0x1ac)](),this[_0xb57b14(0x1fc)]=this[_0xb57b14(0x201)](),this[_0xb57b14(0x1da)]=this[_0xb57b14(0x1da)][_0xb57b14(0x1fd)](this),this[_0xb57b14(0x213)]=this[_0xb57b14(0x24a)]['container'],this[_0xb57b14(0x1dd)](),this[_0xb57b14(0x211)](),this[_0xb57b14(0x1ad)]();}},{'key':_0x23f4c1(0x207),'value':function _0xbe77a0(){var _0x771e36=_0x23f4c1;this['unbindEvent'](),this[_0x771e36(0x1bb)]&&(this[_0x771e36(0x1bb)][_0x771e36(0x1e2)](),this[_0x771e36(0x1bb)]=null),this[_0x771e36(0x1fc)]['parentElement'][_0x771e36(0x1d2)](this[_0x771e36(0x1fc)]);}},{'key':'initDevicePixelRatio','value':function _0x1af3ba(){var _0x196d08=_0x23f4c1;this[_0x196d08(0x210)]=window[_0x196d08(0x210)]||0x1;}},{'key':_0x23f4c1(0x1dd),'value':function _0xaf0e9a(){var _0x246ced=_0x23f4c1;this[_0x246ced(0x213)][_0x246ced(0x1c9)](this[_0x246ced(0x1fc)]);}},{'key':'bindEvent','value':function _0x308f34(){var _0x5675c6=_0x23f4c1;this['_map']['on'](mars3d__namespace[_0x5675c6(0x1b5)][_0x5675c6(0x236)],this['_onMoveStartEvent'],this),this[_0x5675c6(0x24a)]['on'](mars3d__namespace[_0x5675c6(0x1b5)][_0x5675c6(0x1d4)],this[_0x5675c6(0x1f0)],this),this[_0x5675c6(0x24a)]['on'](mars3d__namespace['EventType']['cameraMoveEnd'],this[_0x5675c6(0x1e1)],this);}},{'key':_0x23f4c1(0x19e),'value':function _0x3138b7(){var _0x219aac=_0x23f4c1;this[_0x219aac(0x24a)][_0x219aac(0x1cd)](mars3d__namespace[_0x219aac(0x1b5)][_0x219aac(0x236)],this['_onMoveStartEvent'],this),this[_0x219aac(0x24a)][_0x219aac(0x1cd)](mars3d__namespace['EventType'][_0x219aac(0x1d4)],this['_onMoveStartEvent'],this),this[_0x219aac(0x24a)][_0x219aac(0x1cd)](mars3d__namespace[_0x219aac(0x1b5)]['cameraMoveEnd'],this[_0x219aac(0x1e1)],this),this[_0x219aac(0x24a)][_0x219aac(0x1cd)](mars3d__namespace[_0x219aac(0x1b5)][_0x219aac(0x1ef)],this['_reset'],this);}},{'key':_0x23f4c1(0x1f0),'value':function _0x538dd3(){var _0x586bdd=_0x23f4c1;this[_0x586bdd(0x1bb)]&&(this['_mapVRenderer'][_0x586bdd(0x1d7)](),this[_0x586bdd(0x24a)][_0x586bdd(0x1cd)](mars3d__namespace[_0x586bdd(0x1b5)][_0x586bdd(0x1ef)],this[_0x586bdd(0x1ad)],this),this[_0x586bdd(0x24a)]['on'](mars3d__namespace[_0x586bdd(0x1b5)]['postRender'],this[_0x586bdd(0x1ad)],this));}},{'key':_0x23f4c1(0x1e1),'value':function _0x7f1afe(){var _0x492ccc=_0x23f4c1;this[_0x492ccc(0x1bb)]&&(this[_0x492ccc(0x24a)][_0x492ccc(0x1cd)](mars3d__namespace[_0x492ccc(0x1b5)][_0x492ccc(0x1ef)],this['_reset'],this),this[_0x492ccc(0x1bb)][_0x492ccc(0x214)](),this[_0x492ccc(0x1ad)]());}},{'key':_0x23f4c1(0x203),'value':function _0x43b010(_0xf47fc6){var _0x494722=_0x23f4c1;this[_0x494722(0x207)](),this[_0x494722(0x1b9)]();}},{'key':_0x23f4c1(0x1cb),'value':function _0x92396d(_0x2820d4){var _0x10d2c3=_0x23f4c1;this[_0x10d2c3(0x1bb)]&&this[_0x10d2c3(0x1bb)]['addData'](_0x2820d4,this[_0x10d2c3(0x238)]);}},{'key':_0x23f4c1(0x235),'value':function _0x75d497(_0x172ad2){var _0x52438e=_0x23f4c1;this[_0x52438e(0x1bb)]&&this[_0x52438e(0x1bb)]['updateData'](_0x172ad2,this[_0x52438e(0x238)]);}},{'key':_0x23f4c1(0x22e),'value':function _0x14258c(){var _0x112da0=_0x23f4c1;return this[_0x112da0(0x1bb)]&&(this['dataSet']=this[_0x112da0(0x1bb)][_0x112da0(0x22e)]()),this[_0x112da0(0x1ab)];}},{'key':'removeData','value':function _0x1dc510(_0x4991fc){var _0x5a99bc=_0x23f4c1;this[_0x5a99bc(0x1bb)]&&this[_0x5a99bc(0x1bb)]['removeData'](_0x4991fc);}},{'key':'removeAllData','value':function _0xb11fde(){var _0x334530=_0x23f4c1;this['_mapVRenderer']&&this[_0x334530(0x1bb)][_0x334530(0x1d8)]();}},{'key':_0x23f4c1(0x201),'value':function _0xfa3861(){var _0x1338da=_0x23f4c1,_0x498de1=document[_0x1338da(0x1cc)](_0x1338da(0x1fc));_0x498de1['id']=this[_0x1338da(0x238)]['layerid']||_0x1338da(0x245)+divId++,_0x498de1[_0x1338da(0x1c4)][_0x1338da(0x224)]=_0x1338da(0x212),_0x498de1[_0x1338da(0x1c4)][_0x1338da(0x1e3)]=_0x1338da(0x1f6),_0x498de1[_0x1338da(0x1c4)]['left']='0px',_0x498de1[_0x1338da(0x1c4)][_0x1338da(0x21e)]=this[_0x1338da(0x22f)]?_0x1338da(0x20c):'none',_0x498de1[_0x1338da(0x1c4)][_0x1338da(0x22d)]=this[_0x1338da(0x238)][_0x1338da(0x22d)]||0x64,_0x498de1[_0x1338da(0x1f7)]=parseInt(this[_0x1338da(0x24a)][_0x1338da(0x1fc)]['width']),_0x498de1[_0x1338da(0x239)]=parseInt(this['_map'][_0x1338da(0x1fc)][_0x1338da(0x239)]),_0x498de1[_0x1338da(0x1c4)][_0x1338da(0x1f7)]=this['_map']['canvas'][_0x1338da(0x1c4)][_0x1338da(0x1f7)],_0x498de1[_0x1338da(0x1c4)][_0x1338da(0x239)]=this[_0x1338da(0x24a)][_0x1338da(0x1fc)][_0x1338da(0x1c4)]['height'];if(this[_0x1338da(0x238)]['context']==='2d'){var _0x4ca84f=this[_0x1338da(0x210)];_0x498de1['getContext'](this['options'][_0x1338da(0x231)])[_0x1338da(0x24b)](_0x4ca84f,_0x4ca84f);}return _0x498de1;}},{'key':_0x23f4c1(0x1ad),'value':function _0x458f5b(){var _0x20da8c=_0x23f4c1;this[_0x20da8c(0x1f8)](),this['render']();}},{'key':_0x23f4c1(0x202),'value':function _0x1a6c9a(){var _0x112535=_0x23f4c1;this[_0x112535(0x1ad)]();}},{'key':'remove','value':function _0x2f029a(){var _0x2f07b5=_0x23f4c1;this['_mapVRenderer']&&(this[_0x2f07b5(0x1bb)][_0x2f07b5(0x1e2)](),this[_0x2f07b5(0x1bb)]=null),this[_0x2f07b5(0x1fc)][_0x2f07b5(0x1ba)]['removeChild'](this[_0x2f07b5(0x1fc)]);}},{'key':_0x23f4c1(0x1da),'value':function _0x228d3a(){var _0x129d6c=_0x23f4c1;this[_0x129d6c(0x1bb)][_0x129d6c(0x253)]();}},{'key':_0x23f4c1(0x1f8),'value':function _0x57c1a2(){var _0x5c6ecc=_0x23f4c1;if(this[_0x5c6ecc(0x1fc)]){var _0x513f8d=this['canvas'];_0x513f8d['style']['position']=_0x5c6ecc(0x212),_0x513f8d[_0x5c6ecc(0x1c4)]['top']='0px',_0x513f8d[_0x5c6ecc(0x1c4)][_0x5c6ecc(0x1bd)]='0px',_0x513f8d[_0x5c6ecc(0x1f7)]=parseInt(this[_0x5c6ecc(0x24a)]['canvas'][_0x5c6ecc(0x1f7)]),_0x513f8d['height']=parseInt(this['_map']['canvas'][_0x5c6ecc(0x239)]),_0x513f8d[_0x5c6ecc(0x1c4)][_0x5c6ecc(0x1f7)]=this[_0x5c6ecc(0x24a)][_0x5c6ecc(0x1fc)][_0x5c6ecc(0x1c4)][_0x5c6ecc(0x1f7)],_0x513f8d['style'][_0x5c6ecc(0x239)]=this['_map'][_0x5c6ecc(0x1fc)]['style']['height'];}}},{'key':'getRectangle','value':function _0x20ac0c(_0x1aeefa){var _0x136ec3=_0x23f4c1;if(!window[_0x136ec3(0x1d6)]){mars3d__namespace[_0x136ec3(0x1b8)][_0x136ec3(0x1fe)](_0x136ec3(0x1cf));return;}if(!this[_0x136ec3(0x1ab)]||!this[_0x136ec3(0x1ab)][_0x136ec3(0x1bf)])return;var _0x141deb=window['turf'][_0x136ec3(0x242)](window[_0x136ec3(0x1d6)][_0x136ec3(0x22a)](this[_0x136ec3(0x1ab)][_0x136ec3(0x1bf)]));if(!_0x141deb)return;return _0x1aeefa!==null&&_0x1aeefa!==void 0x0&&_0x1aeefa['isFormat']?{'xmin':_0x141deb[0x0],'xmax':_0x141deb[0x1],'ymin':_0x141deb[0x2],'ymax':_0x141deb[0x3]}:Cesium[_0x136ec3(0x23c)][_0x136ec3(0x1b6)](_0x141deb[0x0],_0x141deb[0x1],_0x141deb[0x2],_0x141deb[0x3]);}}]),_0x207d7d;}(BaseLayer);mars3d__namespace[_0x266518(0x1ae)][_0x266518(0x1b1)](_0x266518(0x245),MapVLayer),mars3d__namespace[_0x266518(0x252)][_0x266518(0x23d)]=MapVLayer,exports[_0x266518(0x23d)]=MapVLayer,Object['keys'](mapv)[_0x266518(0x1e6)](function(_0x529ec4){var _0x4ddca2=_0x266518;if(_0x529ec4!==_0x4ddca2(0x20f)&&!exports[_0x4ddca2(0x243)](_0x529ec4))Object[_0x4ddca2(0x228)](exports,_0x529ec4,{'enumerable':!![],'get':function(){return mapv[_0x529ec4];}});}),Object['defineProperty'](exports,_0x266518(0x23e),{'value':!![]});
}));
