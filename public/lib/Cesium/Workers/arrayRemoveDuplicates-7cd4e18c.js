define(["exports","./RuntimeError-8f3d96ee","./when-229515d6","./ComponentDatatype-5f63ec93"],(function(e,n,t,i){"use strict";const d=i.CesiumMath.EPSILON10;e.arrayRemoveDuplicates=function(e,n,i,f){if(!t.defined(e))return;i=t.defaultValue(i,!1);const r=t.defined(f),u=e.length;if(u<2)return e;let s,c,l,o=e[0],a=0,h=-1;for(s=1;s<u;++s)c=e[s],n(o,c,d)?(t.defined(l)||(l=e.slice(0,s),a=s-1,h=0),r&&f.push(s)):(t.defined(l)&&(l.push(c),a=s,r&&(h=f.length)),o=c);return i&&n(e[0],e[u-1],d)&&(r&&(t.defined(l)?f.splice(h,0,a):f.push(u-1)),t.defined(l)?l.length-=1:l=e.slice(0,-1)),t.defined(l)?l:e}}));
