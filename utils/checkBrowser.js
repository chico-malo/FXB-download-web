/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2019/1/23
 */

/**
 * 判断是否是微信端
 * @returns {boolean}
 */
function isWeChat() {
    let ua = window.navigator.userAgent.toLowerCase();
    if (ua.indexOf('micromessenger') > -1) {
        return true;
    } else {
        return false;
    }
}