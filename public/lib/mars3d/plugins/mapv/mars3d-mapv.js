/**
 * Mars3D平台插件,结合mapv可视化功能插件  mars3d-mapv
 *
 * 版本信息：v3.3.9
 * 编译日期：2022-05-23 10:16:47
 * 版权所有：Copyright by 火星科技  http://mars3d.cn
 * 使用单位：免费公开版 ，2022-02-01
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, (window.mapv || require('mapv')), (window.mars3d || require('mars3d'))) :
  typeof define === 'function' && define.amd ? define(['exports', 'mapv', 'mars3d'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["mars3d-mapv"] = {}, global.mapv, global.mars3d));
})(this, (function (exports, mapv, mars3d) { 
'use strict';var _0x3cbe6a=_0x4297;(function(_0x4dd491,_0x468ca8){var _0x485490=_0x4297,_0x354b0c=_0x4dd491();while(!![]){try{var _0x514a47=-parseInt(_0x485490(0x187))/0x1+parseInt(_0x485490(0x1d4))/0x2+parseInt(_0x485490(0x1e7))/0x3*(parseInt(_0x485490(0x212))/0x4)+-parseInt(_0x485490(0x202))/0x5+parseInt(_0x485490(0x1f0))/0x6+parseInt(_0x485490(0x174))/0x7*(parseInt(_0x485490(0x18b))/0x8)+-parseInt(_0x485490(0x19b))/0x9*(parseInt(_0x485490(0x18a))/0xa);if(_0x514a47===_0x468ca8)break;else _0x354b0c['push'](_0x354b0c['shift']());}catch(_0x1d9e14){_0x354b0c['push'](_0x354b0c['shift']());}}}(_0x1cab,0xa6f9c));function _interopNamespace(_0x5aa9e0){var _0x361f0c=_0x4297;if(_0x5aa9e0&&_0x5aa9e0['__esModule'])return _0x5aa9e0;var _0x476eb0=Object[_0x361f0c(0x1e8)](null);return _0x5aa9e0&&Object[_0x361f0c(0x1da)](_0x5aa9e0)[_0x361f0c(0x204)](function(_0x29644b){var _0x4b1a78=_0x361f0c;if(_0x29644b!=='default'){var _0x157dea=Object[_0x4b1a78(0x214)](_0x5aa9e0,_0x29644b);Object[_0x4b1a78(0x1bc)](_0x476eb0,_0x29644b,_0x157dea[_0x4b1a78(0x1ac)]?_0x157dea:{'enumerable':!![],'get':function(){return _0x5aa9e0[_0x29644b];}});}}),_0x476eb0['default']=_0x5aa9e0,_0x476eb0;}var mapv__namespace=_interopNamespace(mapv),mars3d__namespace=_interopNamespace(mars3d);function ownKeys(_0x43ae31,_0x2c384a){var _0x12a923=_0x4297,_0x4c0763=Object[_0x12a923(0x1da)](_0x43ae31);if(Object[_0x12a923(0x19c)]){var _0x52e6d6=Object['getOwnPropertySymbols'](_0x43ae31);_0x2c384a&&(_0x52e6d6=_0x52e6d6['filter'](function(_0x7d4e4b){var _0x11f32b=_0x12a923;return Object[_0x11f32b(0x214)](_0x43ae31,_0x7d4e4b)[_0x11f32b(0x207)];})),_0x4c0763[_0x12a923(0x1d5)]['apply'](_0x4c0763,_0x52e6d6);}return _0x4c0763;}function _objectSpread2(_0x2689ff){var _0x22cc11=_0x4297;for(var _0xe22718=0x1;_0xe22718<arguments[_0x22cc11(0x1fb)];_0xe22718++){var _0x4dcc04=null!=arguments[_0xe22718]?arguments[_0xe22718]:{};_0xe22718%0x2?ownKeys(Object(_0x4dcc04),!0x0)[_0x22cc11(0x204)](function(_0x3ad3bb){_defineProperty(_0x2689ff,_0x3ad3bb,_0x4dcc04[_0x3ad3bb]);}):Object['getOwnPropertyDescriptors']?Object['defineProperties'](_0x2689ff,Object[_0x22cc11(0x18d)](_0x4dcc04)):ownKeys(Object(_0x4dcc04))[_0x22cc11(0x204)](function(_0x37322f){var _0x55ee68=_0x22cc11;Object[_0x55ee68(0x1bc)](_0x2689ff,_0x37322f,Object[_0x55ee68(0x214)](_0x4dcc04,_0x37322f));});}return _0x2689ff;}function _classCallCheck(_0x57f8cb,_0x5e1c34){var _0x316784=_0x4297;if(!(_0x57f8cb instanceof _0x5e1c34))throw new TypeError(_0x316784(0x165));}function _defineProperties(_0x3c5e27,_0x125c2d){var _0x349199=_0x4297;for(var _0x3c2dfd=0x0;_0x3c2dfd<_0x125c2d[_0x349199(0x1fb)];_0x3c2dfd++){var _0x3ec6d6=_0x125c2d[_0x3c2dfd];_0x3ec6d6[_0x349199(0x207)]=_0x3ec6d6['enumerable']||![],_0x3ec6d6[_0x349199(0x1d0)]=!![];if(_0x349199(0x213)in _0x3ec6d6)_0x3ec6d6[_0x349199(0x16e)]=!![];Object[_0x349199(0x1bc)](_0x3c5e27,_0x3ec6d6[_0x349199(0x1cd)],_0x3ec6d6);}}function _0x1cab(){var _0x263c0b=['z2XVyMfSq29TCg9ZAxrLt3bLCMf0Aw9U','Bw91C2vTB3zL','yw5PBwf0B3jnB3zLC3rHCNrfDMvUDa','CMvTB3zLrgf0yq','EKLUzgv4','z2v0rgf0yq','y2XPy2TfDMvUDa','ndK0mZKYngzbDunbvG','DMfSDwu','z2v0t3DUuhjVCgvYDhLezxnJCMLWDg9Y','rwXSAxbZB2LKywXpy2nSDwrLCG','z2v0q29UDgv4Da','u3vWzxiGzxHWCMvZC2LVBIbTDxn0igvPDgHLCIbIzsbUDwXSig9YigeGzNvUy3rPB24','CMvTB3zLqwXSrgf0yq','x21VDw50zwriB29R','zgvMyxvSDa','y29UC3rYDwn0','tg9N','y2fTzxjH','C2v0wKLUzgv4','ug9PBNq','ug9SEwDVBG','q2fUBM90ignHBgWGysbJBgfZCYbHCYbHigz1BMn0Aw9U','C2nLBMu','CMvNAxn0zxi','rg9TvxrPBa','C3rVCa','DhvYzG','DxbKyxrLq2fSBgjHy2S','DhLWzq','y2fTzxjHtw92zvn0yxj0','D3jPDgfIBgu','rgf0yvnLDa','Cg9PBNrLCKv2zw50CW','z2v0sgvPz2H0','zNjVBurLz3jLzxm','C2L6zq','n0ndvwLysW','y2fYDgvZAwfUvg9dyw52yxndB29YzgLUyxrLCW','zgvZDhjVEq','DxbKyxrLrgf0yq','AgfZt3DUuhjVCgvYDhK','C2nHBgu','tgLUzvn0CMLUzW','BM9Uzq','y2XLyxjeyxrH','ywrK','y2fSBa','BwfW','x3bVAw50zxjfDMvUDhm','C3rLCa','y2XLyxi','y2XHBxbuB0DYB3vUza','CMvZAxPL','qMfZzuXHEwvY','AxnfBMfIBgvKvgLTzq','mJa1nZaWv3DlB1fw','Bwv0Ag9KCW','mhb4','mJGZmZe3otbetLLhq1u','ody4odeZnMX3BNfSra','yMXVy2S','z2v0t3DUuhjVCgvYDhLezxnJCMLWDg9YCW','y29UDgfPBMvY','Bw91C2veB3DU','Aw5PDerHDgfsyw5Nzq','AgvPz2H0','zgvZDgLUyxrPB24TB3v0','x29Utw92zvn0yxj0rxzLBNq','Cg9ZDfjLBMrLCG','Bg9Nv2fYBG','BwfWDG','z2vVBwv0CNK','ywrKrgf0yq','y29VCMrPBMf0zxm','u0nftKuZra','ouLJEg1kDq','z2v0t3DUuhjVCgvYDhLtEw1IB2XZ','x21HCa','q2vZAxvT','yMfPzhvnyxbmyxLLCG','x2nVB3jKAw5HDgvZ','AxngB3jTyxq','zgf0yvnLDa','Bgf5zxjPza','zMvHDhvYzunVBgXLy3rPB24','C3rLChnsyw5Nzq','twfWvKXHEwvY','yw5PBwf0B3jnB3zLzw5KrxzLBNq','z2XVyMu','ywXS','yw5PBwf0B3i','DhjHBNnMzxjdB29YzgLUyxrL','z2v0','x29UtwfWtw91C2vnB3zL','ChjVDg90ExbL','x3jLC2v0','x19WCM90B19F','rgvYAxzLzcbJB25ZDhj1y3rVCNmGBwf5ig9UBhKGCMv0DxjUig9IAMvJDcbVCIb1BMrLzMLUzwq','zMLSBfjLy3q','y2fUDMfZtgf5zxi','Dw5IAw5KrxzLBNq','y29Uy2f0','Dg9W','Cg9ZAxrPB24','Bw91C2vnB3zL','y2fTzxjHtw92zuvUza','ywrKqw5PBwf0B3jfDMvUDa','Dw5KzwzPBMvK','zgvMAw5LuhjVCgvYDhK','z2v0uMvJDgfUz2XL','y29UC3rYDwn0B3i','zhjHDW','x3jLBw92zwriB29R','BwfWDKf1Dg9izwLNAhq','6zYa6kAb5BYv5ywLDhvYzUw6K+AjJEIdVEIUOEEUL2DLB2PZB27NMOrIyM946l6555wm77Yb','B2zM','BwfWDKrLChrOvgvZDa','yw5PBwf0Aw9U','yMLUzev2zw50','CMvUzgvY','Bw91C2vTB3zLrxzLBNq','txvSDgLqB2X5z29U','q09mt1jFqLvgrKvsx0jjva','x29Utw92zuvUzev2zw50','DMfSDwvpzG','A2v5','zgLZCgXHEq','ywjZB2X1Dgu','y29UzMLNDxjHyMXL','x29UtwfWq2XPy2S','q2fYDgvZAwfUmW','x3nOB3DiB29R','mtC0mtuWmhzpA0juzW','ChvZAa','x21HCfzszw5KzxjLCG','zML4zwrizwLNAhq','Aw5PDerLDMLJzvbPEgvSuMf0Aw8','y2XPy2S','A2v5CW','D2LKDgG','DhjHAwXZ','BwfWDKzPEgvKsgvPz2H0','zgvMyxvSDfzHBhvL','CMvZDg9Yzq','C2f2zq','CMDIysGWlcaWlcaWlcaUmsK','BwfYCZnKlw1HChy','ChjVy2vZC0rHDge','DxbKyxrL','AxnqB2LUDfzPC2LIBgu','yxjNq2HLy2S','m0Xwq0XmCq','y3jLyxrL','z2v0uhjVDg90ExbLt2y','BgvMDa','zNvUy3rPB24','B3b0Aw9UCW','CMvTB3zLq2HPBgq','yMLUza','x2rHDge','ndqXmdG4oefsEgrIwa','D2LUzg93ug9ZAxrPB24','uMvJDgfUz2XL','q2fYDg9NCMfWAgLJ','x3nLDe9WDgLVBNniB29R','C3r5Bgu','Bw9Kzq','y29UDgv4Da','C2HHBq','txvSDgLmAw5Lu3rYAw5N','rxzLBNruExbL','BgvUz3rO','x2rHDgfdywnOzq','x2fKzgvKsg9VAW','C2v0','Aw5PDa','CgfYzw50rwXLBwvUDa','Bgf5zxi','mtaYntqYnw5Xvg5rva','C2v0uhjVDg90ExbLt2y','zM9YrwfJAa','x2nYzwf0zunHBNzHCW','zgv2AwnLugL4zwXsyxrPBW','zw51BwvYywjSzq','y2fUDMfZ','DgHPCYbOyxnUj3qGyMvLBIbPBML0AwfSAxnLzcaTihn1CgvYkcKGAgfZBID0igjLzw4Gy2fSBgvK','x2nHy2HLx2v2zw50'];_0x1cab=function(){return _0x263c0b;};return _0x1cab();}function _createClass(_0x5f3855,_0x4c14fb,_0x5d615b){var _0xd42ec0=_0x4297;if(_0x4c14fb)_defineProperties(_0x5f3855['prototype'],_0x4c14fb);if(_0x5d615b)_defineProperties(_0x5f3855,_0x5d615b);return Object[_0xd42ec0(0x1bc)](_0x5f3855,_0xd42ec0(0x1ae),{'writable':![]}),_0x5f3855;}function _defineProperty(_0x49f0a2,_0x171a41,_0x581829){var _0x54330f=_0x4297;return _0x171a41 in _0x49f0a2?Object[_0x54330f(0x1bc)](_0x49f0a2,_0x171a41,{'value':_0x581829,'enumerable':!![],'configurable':!![],'writable':!![]}):_0x49f0a2[_0x171a41]=_0x581829,_0x49f0a2;}function _inherits(_0x5a001c,_0x478d27){var _0x381345=_0x4297;if(typeof _0x478d27!=='function'&&_0x478d27!==null)throw new TypeError(_0x381345(0x15b));_0x5a001c[_0x381345(0x1ae)]=Object[_0x381345(0x1e8)](_0x478d27&&_0x478d27[_0x381345(0x1ae)],{'constructor':{'value':_0x5a001c,'writable':!![],'configurable':!![]}}),Object[_0x381345(0x1bc)](_0x5a001c,_0x381345(0x1ae),{'writable':![]});if(_0x478d27)_setPrototypeOf(_0x5a001c,_0x478d27);}function _getPrototypeOf(_0x2f8386){var _0x50ffd4=_0x4297;return _getPrototypeOf=Object[_0x50ffd4(0x203)]?Object['getPrototypeOf']:function _0x3f3eb8(_0x3914d7){var _0x52281b=_0x50ffd4;return _0x3914d7[_0x52281b(0x1b0)]||Object[_0x52281b(0x1e9)](_0x3914d7);},_getPrototypeOf(_0x2f8386);}function _setPrototypeOf(_0x26c56a,_0x25a314){var _0x2a0ecf=_0x4297;return _setPrototypeOf=Object[_0x2a0ecf(0x203)]||function _0x1bf60a(_0x47cb26,_0x3567d4){var _0x1047e4=_0x2a0ecf;return _0x47cb26[_0x1047e4(0x1b0)]=_0x3567d4,_0x47cb26;},_setPrototypeOf(_0x26c56a,_0x25a314);}function _isNativeReflectConstruct(){var _0x229abd=_0x4297;if(typeof Reflect===_0x229abd(0x1bb)||!Reflect[_0x229abd(0x15f)])return![];if(Reflect[_0x229abd(0x15f)][_0x229abd(0x1f8)])return![];if(typeof Proxy===_0x229abd(0x1eb))return!![];try{return Boolean['prototype'][_0x229abd(0x1cc)][_0x229abd(0x17e)](Reflect[_0x229abd(0x15f)](Boolean,[],function(){})),!![];}catch(_0x4aa98a){return![];}}function _assertThisInitialized(_0x40846d){var _0x54ecba=_0x4297;if(_0x40846d===void 0x0)throw new ReferenceError(_0x54ecba(0x209));return _0x40846d;}function _possibleConstructorReturn(_0x195b47,_0x14e224){var _0x36cb3d=_0x4297;if(_0x14e224&&(typeof _0x14e224==='object'||typeof _0x14e224===_0x36cb3d(0x1eb)))return _0x14e224;else{if(_0x14e224!==void 0x0)throw new TypeError(_0x36cb3d(0x1b1));}return _assertThisInitialized(_0x195b47);}function _createSuper(_0x4a0a2d){var _0x44f06f=_isNativeReflectConstruct();return function _0x50672a(){var _0x45b920=_0x4297,_0x352df2=_getPrototypeOf(_0x4a0a2d),_0x58b24f;if(_0x44f06f){var _0x9239d9=_getPrototypeOf(this)[_0x45b920(0x1be)];_0x58b24f=Reflect[_0x45b920(0x15f)](_0x352df2,arguments,_0x9239d9);}else _0x58b24f=_0x352df2['apply'](this,arguments);return _possibleConstructorReturn(this,_0x58b24f);};}function _0x4297(_0x2e54bb,_0x56ce85){var _0x1cab1f=_0x1cab();return _0x4297=function(_0x4297f3,_0x21fff9){_0x4297f3=_0x4297f3-0x159;var _0x737d6a=_0x1cab1f[_0x4297f3];if(_0x4297['mTaBDN']===undefined){var _0x243619=function(_0x5aa9e0){var _0x476eb0='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x29644b='',_0x157dea='';for(var _0x43ae31=0x0,_0x2c384a,_0x4c0763,_0x52e6d6=0x0;_0x4c0763=_0x5aa9e0['charAt'](_0x52e6d6++);~_0x4c0763&&(_0x2c384a=_0x43ae31%0x4?_0x2c384a*0x40+_0x4c0763:_0x4c0763,_0x43ae31++%0x4)?_0x29644b+=String['fromCharCode'](0xff&_0x2c384a>>(-0x2*_0x43ae31&0x6)):0x0){_0x4c0763=_0x476eb0['indexOf'](_0x4c0763);}for(var _0x7d4e4b=0x0,_0x2689ff=_0x29644b['length'];_0x7d4e4b<_0x2689ff;_0x7d4e4b++){_0x157dea+='%'+('00'+_0x29644b['charCodeAt'](_0x7d4e4b)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x157dea);};_0x4297['XjQLiS']=_0x243619,_0x2e54bb=arguments,_0x4297['mTaBDN']=!![];}var _0x5918b5=_0x1cab1f[0x0],_0xb22cb9=_0x4297f3+_0x5918b5,_0x3b60d3=_0x2e54bb[_0xb22cb9];return!_0x3b60d3?(_0x737d6a=_0x4297['XjQLiS'](_0x737d6a),_0x2e54bb[_0xb22cb9]=_0x737d6a):_0x737d6a=_0x3b60d3,_0x737d6a;},_0x4297(_0x2e54bb,_0x56ce85);}function _superPropBase(_0x339cab,_0x4ee897){var _0x47908a=_0x4297;while(!Object[_0x47908a(0x1ae)][_0x47908a(0x178)][_0x47908a(0x17e)](_0x339cab,_0x4ee897)){_0x339cab=_getPrototypeOf(_0x339cab);if(_0x339cab===null)break;}return _0x339cab;}function _get(){var _0x2b3318=_0x4297;return typeof Reflect!==_0x2b3318(0x1bb)&&Reflect['get']?_get=Reflect[_0x2b3318(0x1ac)]:_get=function _0x3d6ab1(_0x4c50e5,_0x345ac2,_0x29054f){var _0x3d068b=_0x2b3318,_0x49e978=_superPropBase(_0x4c50e5,_0x345ac2);if(!_0x49e978)return;var _0x312e7d=Object[_0x3d068b(0x214)](_0x49e978,_0x345ac2);if(_0x312e7d[_0x3d068b(0x1ac)])return _0x312e7d[_0x3d068b(0x1ac)][_0x3d068b(0x17e)](arguments[_0x3d068b(0x1fb)]<0x3?_0x4c50e5:_0x29054f);return _0x312e7d[_0x3d068b(0x213)];},_get['apply'](this,arguments);}var Cesium$1=mars3d__namespace[_0x3cbe6a(0x19e)],baiduMapLayer=mapv__namespace?mapv__namespace[_0x3cbe6a(0x19f)]:null,BaseLayer$1=baiduMapLayer?baiduMapLayer['__proto__']:Function,MapVRenderer=function(_0x19dadf){var _0x263a3d=_0x3cbe6a;_inherits(_0x48cf13,_0x19dadf);var _0x3e1019=_createSuper(_0x48cf13);function _0x48cf13(_0x26c363,_0x2d1207,_0x178c94,_0x585f11){var _0x59a85d=_0x4297,_0x3b7f03;_classCallCheck(this,_0x48cf13),_0x3b7f03=_0x3e1019[_0x59a85d(0x17e)](this,_0x26c363,_0x2d1207,_0x178c94);if(!BaseLayer$1)return _possibleConstructorReturn(_0x3b7f03);return _0x3b7f03[_0x59a85d(0x17f)]=_0x26c363,_0x3b7f03[_0x59a85d(0x166)]=_0x26c363[_0x59a85d(0x166)],_0x3b7f03['dataSet']=_0x2d1207,_0x178c94=_0x178c94||{},_0x3b7f03[_0x59a85d(0x1ff)](_0x178c94),_0x3b7f03[_0x59a85d(0x1e6)](_0x178c94),_0x3b7f03[_0x59a85d(0x1d8)](),_0x3b7f03[_0x59a85d(0x1b3)]=_0x585f11,_0x3b7f03['stopAniamation']=!0x1,_0x3b7f03[_0x59a85d(0x1c5)]=_0x178c94[_0x59a85d(0x1c5)],_0x3b7f03;}return _createClass(_0x48cf13,[{'key':_0x263a3d(0x1d8),'value':function _0x2002f4(){this['devicePixelRatio']=window['devicePixelRatio']||0x1;}},{'key':_0x263a3d(0x1ba),'value':function _0x58d3cb(){}},{'key':'animatorMovestartEvent','value':function _0x299a2c(){var _0x1eb7c9=_0x263a3d,_0x340e17=this[_0x1eb7c9(0x1ec)][_0x1eb7c9(0x1c5)];this[_0x1eb7c9(0x186)]()&&this[_0x1eb7c9(0x1aa)]&&(this['steps'][_0x1eb7c9(0x181)]=_0x340e17[_0x1eb7c9(0x1a5)]['start']);}},{'key':_0x263a3d(0x1a7),'value':function _0x39c535(){var _0x575fd1=_0x263a3d;this[_0x575fd1(0x186)]()&&this[_0x575fd1(0x1aa)];}},{'key':_0x263a3d(0x15a),'value':function _0x22bf3e(){var _0x21bf87=_0x263a3d;return this[_0x21bf87(0x1b3)][_0x21bf87(0x208)]['getContext'](this[_0x21bf87(0x1f7)]);}},{'key':_0x263a3d(0x1ff),'value':function _0x4b09d2(_0x70ef7){var _0x21994b=_0x263a3d;this[_0x21994b(0x1ec)]=_0x70ef7,this[_0x21994b(0x190)](_0x70ef7),this[_0x21994b(0x1f7)]=this[_0x21994b(0x1ec)]['context']||'2d',this[_0x21994b(0x1ec)][_0x21994b(0x20f)]&&this[_0x21994b(0x1b3)]&&this[_0x21994b(0x1b3)][_0x21994b(0x162)]&&this['canvasLayer'][_0x21994b(0x162)](this['options'][_0x21994b(0x20f)]),this['initAnimator']();}},{'key':'_canvasUpdate','value':function _0x1c803d(_0x434581){var _0x2de553=_0x263a3d,_0x11b897=this['scene'];if(this['canvasLayer']&&!this['stopAniamation']){var _0x26a9e6=this['options'][_0x2de553(0x1c5)],_0x5151a0=this[_0x2de553(0x15a)]();if(this['isEnabledTime']()){if(void 0x0===_0x434581)return void this[_0x2de553(0x182)](_0x5151a0);this[_0x2de553(0x1f7)]==='2d'&&(_0x5151a0[_0x2de553(0x1e0)](),_0x5151a0[_0x2de553(0x20b)]=_0x2de553(0x192),_0x5151a0['fillStyle']=_0x2de553(0x1e1),_0x5151a0[_0x2de553(0x1b2)](0x0,0x0,_0x5151a0[_0x2de553(0x208)][_0x2de553(0x1db)],_0x5151a0[_0x2de553(0x208)][_0x2de553(0x191)]),_0x5151a0[_0x2de553(0x1df)]());}else this[_0x2de553(0x182)](_0x5151a0);if(this[_0x2de553(0x1f7)]==='2d')for(var _0x120b19 in this['options']){_0x5151a0[_0x120b19]=this['options'][_0x120b19];}else _0x5151a0[_0x2de553(0x182)](_0x5151a0[_0x2de553(0x1ca)]);var _0xa2f23b={'transferCoordinate':function _0x10d807(_0x15853d){var _0x3555a1=_0x2de553,_0x1ba462=null,_0x4134a6=_0x11b897['mapvFixedHeight'];_0x11b897[_0x3555a1(0x1c1)]&&(_0x4134a6=_0x11b897[_0x3555a1(0x1a8)][_0x3555a1(0x171)](Cesium$1[_0x3555a1(0x1f3)]['fromDegrees'](_0x15853d[0x0],_0x15853d[0x1])));var _0x5a1224=Cesium$1[_0x3555a1(0x1d2)]['fromDegrees'](_0x15853d[0x0],_0x15853d[0x1],_0x4134a6);if(!_0x5a1224)return _0x1ba462;var _0x5cb86f=_0x11b897[_0x3555a1(0x175)](_0x5a1224);if(!_0x5cb86f)return _0x1ba462;if(_0x11b897[_0x3555a1(0x1c4)]&&_0x11b897[_0x3555a1(0x1f6)]===Cesium$1['SceneMode'][_0x3555a1(0x19a)]){var _0x30f347=new Cesium$1[(_0x3555a1(0x159))](_0x11b897[_0x3555a1(0x1a8)]['ellipsoid'],_0x11b897[_0x3555a1(0x161)]['positionWC']),_0x1466e1=_0x30f347[_0x3555a1(0x1e5)](_0x5a1224);if(!_0x1466e1)return _0x1ba462;}return[_0x5cb86f['x'],_0x5cb86f['y']];}};void 0x0!==_0x434581&&(_0xa2f23b['filter']=function(_0x331be0){var _0x3d3414=_0x2de553,_0x5e4e70=_0x26a9e6[_0x3d3414(0x1dc)]||0xa;return!!(_0x434581&&_0x331be0['time']>_0x434581-_0x5e4e70&&_0x331be0['time']<_0x434581);});var _0x39e99f=this[_0x2de553(0x1a2)][_0x2de553(0x1ac)](_0xa2f23b);this[_0x2de553(0x1e3)](_0x39e99f),this['options']['unit']==='m'&&this[_0x2de553(0x1ec)][_0x2de553(0x173)],this[_0x2de553(0x1ec)]['_size']=this['options'][_0x2de553(0x173)];var _0x235a16=_0x11b897[_0x2de553(0x175)](Cesium$1[_0x2de553(0x1d2)]['fromDegrees'](0x0,0x0));if(!_0x235a16)return;this['drawContext'](_0x5151a0,new mapv__namespace[(_0x2de553(0x16f))](_0x39e99f),this[_0x2de553(0x1ec)],_0x235a16),this[_0x2de553(0x1ec)][_0x2de553(0x16b)]&&this['options'][_0x2de553(0x16b)](_0x434581);}}},{'key':_0x263a3d(0x177),'value':function _0x1466b6(_0x2f9f6c,_0x477e57){var _0x106877=_0x263a3d,_0x3f8ad8=_0x2f9f6c;_0x3f8ad8&&_0x3f8ad8[_0x106877(0x1ac)]&&(_0x3f8ad8=_0x3f8ad8[_0x106877(0x1ac)]()),void 0x0!==_0x3f8ad8&&this[_0x106877(0x1a2)][_0x106877(0x1fe)](_0x3f8ad8),_get(_getPrototypeOf(_0x48cf13[_0x106877(0x1ae)]),_0x106877(0x1e4),this)['call'](this,{'options':_0x477e57});}},{'key':_0x263a3d(0x198),'value':function _0x29dedf(_0x128dfd,_0x3a1ba8){var _0x48495b=_0x263a3d,_0x5be39d=_0x128dfd;_0x128dfd&&_0x128dfd[_0x48495b(0x1ac)]&&(_0x5be39d=_0x128dfd[_0x48495b(0x1ac)]()),this[_0x48495b(0x1a2)][_0x48495b(0x17d)](_0x5be39d),this[_0x48495b(0x1e4)]({'options':_0x3a1ba8});}},{'key':'getData','value':function _0x3d6f48(){var _0x44abea=_0x263a3d;return this[_0x44abea(0x1a2)];}},{'key':_0x263a3d(0x20e),'value':function _0x17c247(_0x25f811){var _0x49cb0d=_0x263a3d;if(this['dataSet']){var _0x391c5a=this[_0x49cb0d(0x1a2)][_0x49cb0d(0x1ac)]({'filter':function _0x163cac(_0x451e4b){var _0x426ed5=_0x49cb0d;return _0x25f811==null||typeof _0x25f811!==_0x426ed5(0x1eb)||!_0x25f811(_0x451e4b);}});this[_0x49cb0d(0x1a2)]['set'](_0x391c5a),this[_0x49cb0d(0x1e4)]({'options':null});}}},{'key':_0x263a3d(0x17c),'value':function _0x220455(){var _0x28e41b=_0x263a3d;this[_0x28e41b(0x1a2)]&&this[_0x28e41b(0x1a2)][_0x28e41b(0x182)](),this[_0x28e41b(0x1e4)]({'options':null});}},{'key':_0x263a3d(0x1bf),'value':function _0x1e1535(){var _0x8eb84d=_0x263a3d;this[_0x8eb84d(0x1b3)][_0x8eb84d(0x1bf)]();}},{'key':_0x263a3d(0x182),'value':function _0x1aec75(_0x5dbf17){var _0x254391=_0x263a3d;_0x5dbf17&&_0x5dbf17['clearRect']&&_0x5dbf17['clearRect'](0x0,0x0,_0x5dbf17[_0x254391(0x208)][_0x254391(0x1db)],_0x5dbf17['canvas'][_0x254391(0x191)]);}},{'key':_0x263a3d(0x176),'value':function _0x3ddcaa(){var _0x104a16=_0x263a3d;this[_0x104a16(0x182)](this[_0x104a16(0x15a)]()),this['clearData'](),this[_0x104a16(0x1aa)]&&this[_0x104a16(0x1aa)][_0x104a16(0x169)](),this['animator']=null,this[_0x104a16(0x1b3)]=null;}}]),_0x48cf13;}(BaseLayer$1);if(mapv__namespace!==null&&mapv__namespace!==void 0x0&&mapv__namespace[_0x3cbe6a(0x16f)])mapv__namespace[_0x3cbe6a(0x16f)][_0x3cbe6a(0x1ae)][_0x3cbe6a(0x1ab)]=function(_0x38884e,_0x4b4bde,_0x3618a6,_0x1c49ba){var _0x48440d=_0x3cbe6a;_0x1c49ba=_0x1c49ba||_0x48440d(0x1a0),_0x3618a6=_0x3618a6||_0x48440d(0x199);for(var _0x25463d=0x0;_0x25463d<_0x38884e['length'];_0x25463d++){var _0x7c4966=_0x38884e[_0x25463d][_0x48440d(0x197)],_0x6d04fa=_0x7c4966[_0x3618a6];switch(_0x7c4966[_0x48440d(0x16c)]){case _0x48440d(0x163):{var _0x106824=_0x4b4bde(_0x6d04fa);_0x106824?_0x7c4966[_0x1c49ba]=_0x106824:_0x7c4966[_0x1c49ba]=[-0x3e7,-0x3e7];}break;case _0x48440d(0x17a):{var _0x39d202=[];for(var _0x202bdb=0x0;_0x202bdb<_0x6d04fa[_0x48440d(0x1fb)];_0x202bdb++){var _0x14915e=_0x4b4bde(_0x6d04fa[_0x202bdb]);_0x14915e&&_0x39d202['push'](_0x14915e);}_0x7c4966[_0x1c49ba]=_0x39d202;}break;case _0x48440d(0x1f9):case _0x48440d(0x164):{var _0xf980e2=_0x1f64d6(_0x6d04fa);_0x7c4966[_0x1c49ba]=_0xf980e2;}break;case _0x48440d(0x1c9):{var _0x379c80=[];for(var _0x427ea1=0x0;_0x427ea1<_0x6d04fa[_0x48440d(0x1fb)];_0x427ea1++){var _0x379143=_0x1f64d6(_0x6d04fa[_0x427ea1]);_0x379143[_0x48440d(0x1fb)]>0x0&&_0x379c80['push'](_0x379143);}_0x7c4966[_0x1c49ba]=_0x379c80;}break;}}function _0x1f64d6(_0x241be4){var _0x22ae08=_0x48440d,_0x258374=[];for(var _0x55d74f=0x0;_0x55d74f<_0x241be4['length'];_0x55d74f++){var _0x49f449=_0x241be4[_0x55d74f],_0x56fbd8=[];for(var _0x2d5abf=0x0;_0x2d5abf<_0x49f449['length'];_0x2d5abf++){var _0x12a609=_0x4b4bde(_0x49f449[_0x2d5abf]);_0x12a609&&_0x56fbd8[_0x22ae08(0x1d5)](_0x12a609);}_0x56fbd8[_0x22ae08(0x1fb)]>0x0&&_0x258374['push'](_0x56fbd8);}return _0x258374;}return _0x38884e;};else throw new Error('请引入\x20mapv\x20库\x20');var Cesium=mars3d__namespace[_0x3cbe6a(0x19e)],BaseLayer=mars3d__namespace[_0x3cbe6a(0x201)][_0x3cbe6a(0x185)],divId=0x0,MapVLayer=function(_0x199837){var _0x5321fb=_0x3cbe6a;_inherits(_0x31d669,_0x199837);var _0x5e82e5=_createSuper(_0x31d669);function _0x31d669(_0x19f7f1,_0x55eb20){var _0x372926=_0x4297,_0x4fe28b;return _classCallCheck(this,_0x31d669),_0x4fe28b=_0x5e82e5[_0x372926(0x17e)](this,_0x19f7f1),_0x4fe28b[_0x372926(0x180)]=_0x4fe28b[_0x372926(0x1ec)][_0x372926(0x170)],_0x4fe28b[_0x372926(0x1a2)]=_0x55eb20||new mapv__namespace[(_0x372926(0x16f))](_0x19f7f1['data']),_0x4fe28b[_0x372926(0x208)]=null,_0x4fe28b;}return _createClass(_0x31d669,[{'key':_0x5321fb(0x170),'get':function _0x5d6f79(){var _0x5807bc=_0x5321fb;return this[_0x5807bc(0x180)];},'set':function _0x2308ba(_0x3cfe5a){var _0x43ad27=_0x5321fb;this[_0x43ad27(0x180)]=_0x3cfe5a,this[_0x43ad27(0x208)]&&(_0x3cfe5a?this['canvas'][_0x43ad27(0x1f5)][_0x43ad27(0x170)]=_0x43ad27(0x1a9):this['canvas'][_0x43ad27(0x1f5)][_0x43ad27(0x170)]=_0x43ad27(0x17b));}},{'key':_0x5321fb(0x1d3),'value':function _0xbf1823(_0x2691dd){var _0x53951b=_0x5321fb;_0x2691dd?this[_0x53951b(0x208)]['style']['display']=_0x53951b(0x18c):this['canvas']['style'][_0x53951b(0x1ce)]=_0x53951b(0x17b);}},{'key':_0x5321fb(0x15d),'value':function _0x13d434(){var _0x265e30=_0x5321fb;this[_0x265e30(0x19d)][_0x265e30(0x166)]['mapvDepthTest']=Cesium['defaultValue'](this[_0x265e30(0x1ec)]['depthTest'],!![]),this[_0x265e30(0x19d)][_0x265e30(0x166)][_0x265e30(0x1c1)]=Cesium[_0x265e30(0x1de)](this[_0x265e30(0x1ec)][_0x265e30(0x183)],![]),this[_0x265e30(0x19d)][_0x265e30(0x166)][_0x265e30(0x1dd)]=Cesium[_0x265e30(0x1de)](this[_0x265e30(0x1ec)][_0x265e30(0x1d7)],0x0);}},{'key':_0x5321fb(0x1fd),'value':function _0x3723e7(){var _0x2bd955=_0x5321fb;this[_0x2bd955(0x1a2)]&&(!this[_0x2bd955(0x1a2)][_0x2bd955(0x1ef)]||this[_0x2bd955(0x1a2)][_0x2bd955(0x1ef)][_0x2bd955(0x1fb)]===0x0)&&(this[_0x2bd955(0x1a2)][_0x2bd955(0x1ef)]=[][_0x2bd955(0x1b5)](this[_0x2bd955(0x1a2)][_0x2bd955(0x1fc)])),this[_0x2bd955(0x1d6)]=new MapVRenderer(this['_map'],this[_0x2bd955(0x1a2)],this[_0x2bd955(0x1ec)],this),this['initDevicePixelRatio'](),this[_0x2bd955(0x208)]=this[_0x2bd955(0x205)](),this['render']=this[_0x2bd955(0x1c7)][_0x2bd955(0x1ee)](this),this[_0x2bd955(0x1c6)](),this['_reset']();}},{'key':_0x5321fb(0x1c0),'value':function _0x49423b(){var _0x3a30ae=_0x5321fb;this[_0x3a30ae(0x1b4)](),this[_0x3a30ae(0x1d6)]&&(this['_mapVRenderer']['destroy'](),this['_mapVRenderer']=null),this[_0x3a30ae(0x208)][_0x3a30ae(0x200)][_0x3a30ae(0x1ed)](this[_0x3a30ae(0x208)]);}},{'key':_0x5321fb(0x1d8),'value':function _0x413b24(){var _0x2f632c=_0x5321fb;this[_0x2f632c(0x206)]=window['devicePixelRatio']||0x1;}},{'key':'bindEvent','value':function _0x5b46e9(){var _0x7d812a=_0x5321fb,_0x1c51a1,_0xbed0f3,_0xdac05e,_0x329979;this[_0x7d812a(0x19d)]['on'](mars3d__namespace[_0x7d812a(0x1fa)][_0x7d812a(0x18f)],this[_0x7d812a(0x193)],this),this[_0x7d812a(0x19d)]['on'](mars3d__namespace[_0x7d812a(0x1fa)][_0x7d812a(0x16d)],this['_onMoveStartEvent'],this),this['_map']['on'](mars3d__namespace[_0x7d812a(0x1fa)][_0x7d812a(0x1b9)],this[_0x7d812a(0x1cb)],this),(_0x1c51a1=this['options'])!==null&&_0x1c51a1!==void 0x0&&(_0xbed0f3=_0x1c51a1[_0x7d812a(0x188)])!==null&&_0xbed0f3!==void 0x0&&_0xbed0f3[_0x7d812a(0x1d9)]&&this[_0x7d812a(0x19d)]['on'](mars3d__namespace[_0x7d812a(0x1fa)][_0x7d812a(0x1d9)],this['_onMapClick'],this),(_0xdac05e=this['options'])!==null&&_0xdac05e!==void 0x0&&(_0x329979=_0xdac05e[_0x7d812a(0x188)])!==null&&_0x329979!==void 0x0&&_0x329979[_0x7d812a(0x20c)]&&this['_map']['on'](mars3d__namespace[_0x7d812a(0x1fa)][_0x7d812a(0x1b8)],this['_onMapMouseMove'],this);}},{'key':_0x5321fb(0x1b4),'value':function _0x1c7288(){var _0x2581ec=_0x5321fb,_0x471355,_0x451560,_0x29bbc7,_0x39b8bc;this[_0x2581ec(0x19d)][_0x2581ec(0x1c3)](mars3d__namespace[_0x2581ec(0x1fa)][_0x2581ec(0x18f)],this['_onMoveStartEvent'],this),this[_0x2581ec(0x19d)][_0x2581ec(0x1c3)](mars3d__namespace[_0x2581ec(0x1fa)][_0x2581ec(0x16d)],this['_onMoveStartEvent'],this),this[_0x2581ec(0x19d)][_0x2581ec(0x1c3)](mars3d__namespace['EventType'][_0x2581ec(0x1b9)],this['_onMoveEndEvent'],this),this[_0x2581ec(0x19d)][_0x2581ec(0x1c3)](mars3d__namespace[_0x2581ec(0x1fa)]['postRender'],this['_reset'],this),(_0x471355=this[_0x2581ec(0x1ec)])!==null&&_0x471355!==void 0x0&&(_0x451560=_0x471355[_0x2581ec(0x188)])!==null&&_0x451560!==void 0x0&&_0x451560['click']&&this[_0x2581ec(0x19d)][_0x2581ec(0x1c3)](mars3d__namespace[_0x2581ec(0x1fa)][_0x2581ec(0x1d9)],this[_0x2581ec(0x1d1)],this),(_0x29bbc7=this[_0x2581ec(0x1ec)])!==null&&_0x29bbc7!==void 0x0&&(_0x39b8bc=_0x29bbc7['methods'])!==null&&_0x39b8bc!==void 0x0&&_0x39b8bc[_0x2581ec(0x20c)]&&this[_0x2581ec(0x19d)][_0x2581ec(0x1c3)](mars3d__namespace[_0x2581ec(0x1fa)][_0x2581ec(0x1b8)],this[_0x2581ec(0x1ad)],this);}},{'key':_0x5321fb(0x193),'value':function _0x380646(){var _0x616558=_0x5321fb;this['_mapVRenderer']&&(this['_mapVRenderer'][_0x616558(0x20d)](),this[_0x616558(0x19d)][_0x616558(0x1c3)](mars3d__namespace[_0x616558(0x1fa)][_0x616558(0x194)],this[_0x616558(0x1af)],this),this[_0x616558(0x19d)]['on'](mars3d__namespace[_0x616558(0x1fa)]['postRender'],this['_reset'],this));}},{'key':_0x5321fb(0x1cb),'value':function _0x3500e7(){var _0x49f691=_0x5321fb;this[_0x49f691(0x1d6)]&&(this[_0x49f691(0x19d)][_0x49f691(0x1c3)](mars3d__namespace[_0x49f691(0x1fa)]['postRender'],this[_0x49f691(0x1af)],this),this[_0x49f691(0x1d6)][_0x49f691(0x1a7)](),this[_0x49f691(0x1af)]());}},{'key':_0x5321fb(0x1f4),'value':function _0x231394(_0x45908e){this['_removedHook'](),this['_addedHook']();}},{'key':_0x5321fb(0x198),'value':function _0x37cb25(_0x2aed27){var _0x42809b=_0x5321fb;this[_0x42809b(0x1d6)]&&this[_0x42809b(0x1d6)][_0x42809b(0x198)](_0x2aed27,this[_0x42809b(0x1ec)]);}},{'key':_0x5321fb(0x177),'value':function _0x22bfb0(_0x1e4527){var _0x11579b=_0x5321fb;this[_0x11579b(0x1d6)]&&this[_0x11579b(0x1d6)]['updateData'](_0x1e4527,this[_0x11579b(0x1ec)]);}},{'key':'getData','value':function _0x18789e(){var _0x2d4cdf=_0x5321fb;return this[_0x2d4cdf(0x1d6)]&&(this[_0x2d4cdf(0x1a2)]=this[_0x2d4cdf(0x1d6)][_0x2d4cdf(0x210)]()),this['dataSet'];}},{'key':_0x5321fb(0x20e),'value':function _0x343879(_0x401be1){var _0x46b060=_0x5321fb;this['_mapVRenderer']&&this[_0x46b060(0x1d6)][_0x46b060(0x20e)](_0x401be1);}},{'key':_0x5321fb(0x15c),'value':function _0x26b9b0(){var _0x350a82=_0x5321fb;this['_mapVRenderer']&&this[_0x350a82(0x1d6)]['clearData']();}},{'key':_0x5321fb(0x205),'value':function _0x3a9d6c(){var _0xd739ad=_0x5321fb,_0x384d08=mars3d__namespace[_0xd739ad(0x168)][_0xd739ad(0x1e8)]('canvas',_0xd739ad(0x1e2),this[_0xd739ad(0x19d)][_0xd739ad(0x18e)]);_0x384d08['id']=this[_0xd739ad(0x1ec)][_0xd739ad(0x1a3)]||_0xd739ad(0x196)+divId++,_0x384d08[_0xd739ad(0x1f5)][_0xd739ad(0x1b7)]='absolute',_0x384d08[_0xd739ad(0x1f5)]['top']='0px',_0x384d08[_0xd739ad(0x1f5)][_0xd739ad(0x1ea)]=_0xd739ad(0x189),_0x384d08[_0xd739ad(0x1f5)]['pointerEvents']=this[_0xd739ad(0x180)]?'auto':_0xd739ad(0x17b),_0x384d08[_0xd739ad(0x1f5)][_0xd739ad(0x20f)]=this[_0xd739ad(0x1ec)]['zIndex']||0x64,_0x384d08[_0xd739ad(0x1db)]=parseInt(this['_map']['canvas'][_0xd739ad(0x1db)]),_0x384d08[_0xd739ad(0x191)]=parseInt(this[_0xd739ad(0x19d)][_0xd739ad(0x208)][_0xd739ad(0x191)]),_0x384d08[_0xd739ad(0x1f5)]['width']=this[_0xd739ad(0x19d)]['canvas'][_0xd739ad(0x1f5)][_0xd739ad(0x1db)],_0x384d08[_0xd739ad(0x1f5)][_0xd739ad(0x191)]=this[_0xd739ad(0x19d)][_0xd739ad(0x208)][_0xd739ad(0x1f5)][_0xd739ad(0x191)];if(this[_0xd739ad(0x1ec)][_0xd739ad(0x1f7)]==='2d'){var _0x24fd32=this['devicePixelRatio'];_0x384d08[_0xd739ad(0x15a)](this[_0xd739ad(0x1ec)][_0xd739ad(0x1f7)])[_0xd739ad(0x179)](_0x24fd32,_0x24fd32);}return _0x384d08;}},{'key':'_reset','value':function _0xf18364(){this['resize'](),this['render']();}},{'key':_0x5321fb(0x1bf),'value':function _0x11a075(){this['_reset']();}},{'key':'remove','value':function _0x459067(){var _0x499c7b=_0x5321fb;this[_0x499c7b(0x1d6)]&&(this[_0x499c7b(0x1d6)][_0x499c7b(0x176)](),this['_mapVRenderer']=null),this[_0x499c7b(0x208)][_0x499c7b(0x200)][_0x499c7b(0x1ed)](this['canvas']);}},{'key':_0x5321fb(0x1c7),'value':function _0x539f6f(){var _0x41b1ad=_0x5321fb;this[_0x41b1ad(0x1d6)]['_canvasUpdate']();}},{'key':_0x5321fb(0x184),'value':function _0x3fca95(){var _0x14c037=_0x5321fb;if(this[_0x14c037(0x208)]){var _0x26f5f0=this[_0x14c037(0x208)];_0x26f5f0[_0x14c037(0x1f5)][_0x14c037(0x1b7)]=_0x14c037(0x1cf),_0x26f5f0[_0x14c037(0x1f5)][_0x14c037(0x1b6)]=_0x14c037(0x189),_0x26f5f0[_0x14c037(0x1f5)][_0x14c037(0x1ea)]=_0x14c037(0x189),_0x26f5f0[_0x14c037(0x1db)]=parseInt(this[_0x14c037(0x19d)][_0x14c037(0x208)][_0x14c037(0x1db)]),_0x26f5f0[_0x14c037(0x191)]=parseInt(this[_0x14c037(0x19d)]['canvas'][_0x14c037(0x191)]),_0x26f5f0[_0x14c037(0x1f5)][_0x14c037(0x1db)]=this[_0x14c037(0x19d)][_0x14c037(0x208)][_0x14c037(0x1f5)][_0x14c037(0x1db)],_0x26f5f0[_0x14c037(0x1f5)][_0x14c037(0x191)]=this['_map'][_0x14c037(0x208)][_0x14c037(0x1f5)][_0x14c037(0x191)];}}},{'key':_0x5321fb(0x1bd),'value':function _0x105aff(_0x3e4dfd){var _0x2fd47d=_0x5321fb;if(!window[_0x2fd47d(0x16a)]){mars3d__namespace[_0x2fd47d(0x160)][_0x2fd47d(0x195)](_0x2fd47d(0x1c2));return;}if(!this['dataSet']||!this[_0x2fd47d(0x1a2)][_0x2fd47d(0x1ef)])return;var _0x513554=window[_0x2fd47d(0x16a)]['bbox'](window['turf'][_0x2fd47d(0x1a4)](this['dataSet'][_0x2fd47d(0x1ef)]));if(!_0x513554)return;return _0x3e4dfd!==null&&_0x3e4dfd!==void 0x0&&_0x3e4dfd[_0x2fd47d(0x1a1)]?{'xmin':_0x513554[0x0],'xmax':_0x513554[0x1],'ymin':_0x513554[0x2],'ymax':_0x513554[0x3]}:Cesium[_0x2fd47d(0x1f2)][_0x2fd47d(0x172)](_0x513554[0x0],_0x513554[0x1],_0x513554[0x2],_0x513554[0x3]);}},{'key':_0x5321fb(0x1d1),'value':function _0x560be3(_0x128721){var _0x4c9b4=_0x5321fb;this[_0x4c9b4(0x20a)]=_0x128721,this[_0x4c9b4(0x1d6)]&&this[_0x4c9b4(0x1d6)][_0x4c9b4(0x211)](_0x128721['windowPosition'],_0x128721);}},{'key':'_onMapMouseMove','value':function _0x5f157d(_0x521339){var _0x25585f=_0x5321fb;this[_0x25585f(0x20a)]=_0x521339,this[_0x25585f(0x1d6)]&&this['_mapVRenderer'][_0x25585f(0x1c8)](_0x521339[_0x25585f(0x1f1)],_0x521339);}},{'key':'on','value':function _0x587622(_0x573e82,_0xa1b4cb,_0x140e3e){var _0x544c32=_0x5321fb,_0x1a4614=this;this[_0x544c32(0x1ec)]['methods']=this[_0x544c32(0x1ec)][_0x544c32(0x188)]||{};if(_0x573e82===mars3d__namespace[_0x544c32(0x1fa)]['click'])this[_0x544c32(0x1ec)][_0x544c32(0x188)]['click']=function(_0x3b658f){var _0x564d04=_0x544c32;_0x3b658f&&_0xa1b4cb[_0x564d04(0x1ee)](_0x140e3e)(_objectSpread2(_objectSpread2({},_0x1a4614[_0x564d04(0x20a)]),{},{'layer':_0x1a4614,'data':_0x3b658f}));},this[_0x544c32(0x19d)]['on'](mars3d__namespace[_0x544c32(0x1fa)][_0x544c32(0x1d9)],this[_0x544c32(0x1d1)],this);else _0x573e82===mars3d__namespace['EventType']['mouseMove']&&(this['options'][_0x544c32(0x188)]['mousemove']=function(_0x434da9){var _0x4743e1=_0x544c32;_0x434da9&&_0xa1b4cb[_0x4743e1(0x1ee)](_0x140e3e)(_objectSpread2(_objectSpread2({},_0x1a4614[_0x4743e1(0x20a)]),{},{'layer':_0x1a4614,'data':_0x434da9}));},this[_0x544c32(0x19d)]['on'](mars3d__namespace[_0x544c32(0x1fa)][_0x544c32(0x1b8)],this[_0x544c32(0x1ad)],this));return this;}},{'key':_0x5321fb(0x1c3),'value':function _0x5d6ef8(_0x30f6a7,_0x396649){var _0x81177=_0x5321fb;if(_0x30f6a7===_0x81177(0x1d9)){var _0x143be3;this['_map'][_0x81177(0x1c3)](_0x30f6a7,this[_0x81177(0x1d1)],this),(_0x143be3=this[_0x81177(0x1ec)][_0x81177(0x188)])!==null&&_0x143be3!==void 0x0&&_0x143be3['mousemove']&&delete this[_0x81177(0x1ec)]['methods']['click'];}else{if(_0x30f6a7==='mouseMove'){var _0x1ee1e7;this[_0x81177(0x19d)][_0x81177(0x1c3)](_0x30f6a7,this[_0x81177(0x1ad)],this),(_0x1ee1e7=this['options'][_0x81177(0x188)])!==null&&_0x1ee1e7!==void 0x0&&_0x1ee1e7[_0x81177(0x20c)]&&delete this[_0x81177(0x1ec)]['methods'][_0x81177(0x20c)];}}return this;}}]),_0x31d669;}(BaseLayer);mars3d__namespace['LayerUtil'][_0x3cbe6a(0x167)](_0x3cbe6a(0x196),MapVLayer),mars3d__namespace[_0x3cbe6a(0x201)][_0x3cbe6a(0x1a6)]=MapVLayer,exports[_0x3cbe6a(0x1a6)]=MapVLayer,Object[_0x3cbe6a(0x1da)](mapv)['forEach'](function(_0x4ba1b3){var _0x518ef8=_0x3cbe6a;if(_0x4ba1b3!==_0x518ef8(0x15e)&&!exports[_0x518ef8(0x178)](_0x4ba1b3))Object[_0x518ef8(0x1bc)](exports,_0x4ba1b3,{'enumerable':!![],'get':function(){return mapv[_0x4ba1b3];}});}),Object['defineProperty'](exports,'__esModule',{'value':!![]});
}));
