define(function(){function a(a){try{"string"==typeof a?b({type:"unknownType",msg:a}):"object"==typeof a&&a.msg&&a.type&&b(a)}catch(c){throw c}}function b(b){try{window.__bfi||(window.__bfi=[]);var c=window.__bfi,d={version:7,name:b.type||"",message:b.msg||"",line:0,column:0,file:b.file||"",stack:b.stack||"",category:"Logic-error",framework:"cQuery_110421",time:+new Date};a.name&&a.name.length&&c.push(["_trackError",d])}catch(e){}}return Date.prototype.toString=function(){var a={d:"getDate",h:"getHours",m:"getMinutes",s:"getSeconds"},b=/(yy|M|d|h|m|s)\1?/g,c=Date.prototype.toString;return function(d){var e=this;return d?d.replace(b,function(b,c){var d,f=b!=c;switch(c){case"yy":return d=e.getFullYear(),f&&d||d%100;case"M":d=e.getMonth()+1;break;default:d=e[a[c]]()}return f&&9>=d&&"0"+d||d}):c.call(e)}}(),{error:a}});