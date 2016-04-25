/*!
  Autosize 3.0.5
  license: MIT
  http://www.jacklmoore.com/autosize
  */
  ! function(e, t) {
    if ("function" == typeof define && define.amd) define(["exports", "module"], t);
    else if ("undefined" != typeof exports && "undefined" != typeof module) t(exports, module);
    else {
      var o = {
        exports: {}
      };
      t(o.exports, o), e.autosize = o.exports
    }
  }(this, function(e, t) {
    "use strict";

    function o(e) {
      function t() {
        var t = window.getComputedStyle(e, null);
        "vertical" === t.resize ? e.style.resize = "none" : "both" === t.resize && (e.style.resize = "horizontal"), l = "content-box" === t.boxSizing ? -(parseFloat(t.paddingTop) + parseFloat(t.paddingBottom)) : parseFloat(t.borderTopWidth) + parseFloat(t.borderBottomWidth), n()
      }

      function o(t) {
        var o = e.style.width;
        e.style.width = "0px", e.offsetWidth, e.style.width = o, u = t, a && (e.style.overflowY = t), n()
      }

      function n() {
        var t = e.style.height,
          n = document.documentElement.scrollTop,
          i = document.body.scrollTop,
          r = e.style.height;
        e.style.height = "auto";
        var d = e.scrollHeight + l;
        if (0 === e.scrollHeight) return void(e.style.height = r);
        e.style.height = d + "px", document.documentElement.scrollTop = n, document.body.scrollTop = i;
        var s = window.getComputedStyle(e, null);
        if (s.height !== e.style.height) {
          if ("visible" !== u) return void o("visible")
        } else if ("hidden" !== u) return void o("hidden");
        if (t !== e.style.height) {
          var a = document.createEvent("Event");
          a.initEvent("autosize:resized", !0, !1), e.dispatchEvent(a)
        }
      }
      var i = void 0 === arguments[1] ? {} : arguments[1],
        r = i.setOverflowX,
        d = void 0 === r ? !0 : r,
        s = i.setOverflowY,
        a = void 0 === s ? !0 : s;
      if (e && e.nodeName && "TEXTAREA" === e.nodeName && !e.hasAttribute("data-autosize-on")) {
        var l = null,
          u = "hidden",
          v = function(t) {
            window.removeEventListener("resize", n), e.removeEventListener("input", n), e.removeEventListener("keyup", n), e.removeAttribute("data-autosize-on"), e.removeEventListener("autosize:destroy", v), Object.keys(t).forEach(function(o) {
              e.style[o] = t[o]
            })
          }.bind(e, {
            height: e.style.height,
            resize: e.style.resize,
            overflowY: e.style.overflowY,
            overflowX: e.style.overflowX,
            wordWrap: e.style.wordWrap
          });
        e.addEventListener("autosize:destroy", v), "onpropertychange" in e && "oninput" in e && e.addEventListener("keyup", n), window.addEventListener("resize", n), e.addEventListener("input", n), e.addEventListener("autosize:update", n), e.setAttribute("data-autosize-on", !0), a && (e.style.overflowY = "hidden"), d && (e.style.overflowX = "hidden", e.style.wordWrap = "break-word"), t()
      }
    }

    function n(e) {
      if (e && e.nodeName && "TEXTAREA" === e.nodeName) {
        var t = document.createEvent("Event");
        t.initEvent("autosize:destroy", !0, !1), e.dispatchEvent(t)
      }
    }

    function i(e) {
      if (e && e.nodeName && "TEXTAREA" === e.nodeName) {
        var t = document.createEvent("Event");
        t.initEvent("autosize:update", !0, !1), e.dispatchEvent(t)
      }
    }
    var r = null;
    "undefined" == typeof window || "function" != typeof window.getComputedStyle ? (r = function(e) {
      return e
    }, r.destroy = function(e) {
      return e
    }, r.update = function(e) {
      return e
    }) : (r = function(e, t) {
      return e && Array.prototype.forEach.call(e.length ? e : [e], function(e) {
        return o(e, t)
      }), e
    }, r.destroy = function(e) {
      return e && Array.prototype.forEach.call(e.length ? e : [e], n), e
    }, r.update = function(e) {
      return e && Array.prototype.forEach.call(e.length ? e : [e], i), e
    }), t.exports = r
  });
  autosize(document.querySelectorAll('textarea'));
