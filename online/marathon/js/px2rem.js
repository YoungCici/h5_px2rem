// px转rem适配--对根元素html的font-size大小的比例做处理，两种方案都可行

// 方案一
// (function (doc, win) {
//     var docEl = doc.documentElement,
//         resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
//         recalc = function () {
//             var clientWidth = docEl.clientWidth;
//             if (!clientWidth) return;
//             docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';  /*大于750的也跟随变化*/
//         };

//     if (!doc.addEventListener) return;
//     win.addEventListener(resizeEvt, recalc, false);
//     doc.addEventListener('DOMContentLoaded', recalc, false);
// })(document, window);
// document.addEventListener('touchstart',function(e){
//     e.preventDefault();
// });

// 方案二
$(window).on("resize",function(){
    $("html").css("fontSize",$(window).width()/7.5);
}).resize();