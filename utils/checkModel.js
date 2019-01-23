/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2019/1/23
 */

/**
 * 判断是否是ios端
 * @returns {RegExpMatchArray}
 */
function isPhone() {
    let ua = window.navigator.userAgent.toLowerCase();
    return !!ua.match("iphone","i");
}