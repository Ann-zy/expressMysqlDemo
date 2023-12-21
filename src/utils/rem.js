/* eslint-disable */
(function (doc, win) {
  var rem;
  var dpr = win.devicePixelRatio || 1;
  var docEl = doc.documentElement;
  var initialDeviceWidth = docEl.clientWidth;
  var loop = true;

  function setRemUnit() {
    var currentDeviceWith = docEl.clientWidth;
    var expectDetectionSize = currentDeviceWith / 10;
    var newRem;
    if (initialDeviceWidth === currentDeviceWith && win.navigator.userAgent.match(/Android/)) {
      // 解决安卓缩放字号引起的页面错乱 bug
      var renderDetectionSizeStr = window.getComputedStyle(docEl).fontSize;
      var renderDetectionSize = renderDetectionSizeStr.substr(0, renderDetectionSizeStr.length - 2);

      if (Math.abs(expectDetectionSize - renderDetectionSize) > 2) {
        var currentRem = parseFloat(docEl.style.fontSize) || expectDetectionSize;
        newRem = currentRem * (expectDetectionSize / renderDetectionSize);
        newRem = newRem.toFixed(1);
      }
    } else {
      newRem = expectDetectionSize;
      initialDeviceWidth = currentDeviceWith;
    }

    if (newRem && parseFloat(docEl.style.fontSize) !== newRem) {
      rem = newRem;
      docEl.style.fontSize = rem + 'px';
      win.rem = rem;
    }

    if (requestAnimationFrame && loop) {
      requestAnimationFrame(setRemUnit);
    }
  }

  function stop() {
    loop = false;
  }

  function start() {
    loop = true;
    setRemUnit();
  }

  setRemUnit();

  win.dpr = dpr;
  window.$rem = {
    stop,
    start,
  }
})(document, window);
