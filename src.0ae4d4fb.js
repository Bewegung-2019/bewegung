parcelRequire = function (e, r, t, n) {
    var i, o = "function" == typeof parcelRequire && parcelRequire,
        u = "function" == typeof require && require;

    function f(t, n) {
        if (!r[t]) {
            if (!e[t]) {
                var i = "function" == typeof parcelRequire && parcelRequire;
                if (!n && i) return i(t, !0);
                if (o) return o(t, !0);
                if (u && "string" == typeof t) return u(t);
                var c = new Error("Cannot find module '" + t + "'");
                throw c.code = "MODULE_NOT_FOUND", c
            }
            p.resolve = function (r) {
                return e[t][1][r] || r
            }, p.cache = {};
            var l = r[t] = new f.Module(t);
            e[t][0].call(l.exports, p, l, l.exports, this)
        }
        return r[t].exports;

        function p(e) {
            return f(p.resolve(e))
        }
    }
    f.isParcelRequire = !0, f.Module = function (e) {
        this.id = e, this.bundle = f, this.exports = {}
    }, f.modules = e, f.cache = r, f.parent = o, f.register = function (r, t) {
        e[r] = [function (e, r) {
            r.exports = t
        }, {}]
    };
    for (var c = 0; c < t.length; c++) try {
        f(t[c])
    } catch (e) {
        i || (i = e)
    }
    if (t.length) {
        var l = f(t[t.length - 1]);
        "object" == typeof exports && "undefined" != typeof module ? module.exports = l : "function" == typeof define && define.amd ? define(function () {
            return l
        }) : n && (this[n] = l)
    }
    if (parcelRequire = f, i) throw i;
    return f
}({
    "rYeu": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.saveToLocalStorage = exports.loadFromLocalStorage = void 0, window.featureColors = window.CSS && CSS.supports("color", "var(--fake-var)"), window.featureGallery = !0;
        var o = function () {
            if (window.localStorage)
                if (window.JSON) {
                    window.gallery = JSON.parse(window.localStorage.getItem("generative-weihnachten-gallery") || "[]"), window.gallery.forEach(function (o) {
                        void 0 !== o.area && (o.x = o.area % 4 * .4, o.y = .4 * Math.floor(o.area / 4), o.width = .65, o.height = .65, delete o.area)
                    });
                    var o = JSON.parse(window.localStorage.getItem("generative-weihnachten") || "{}");
                    window.enableAnimations = o.enableAnimations || !0, window.enableDarkMode = o.enableDarkMode || !0, window.knowsSwipe = o.knowsSwipe || !1, window.knowsSlowMotion = o.knowsSlowMotion || !1, window.knowsPhotos = o.knowsPhotos || !1, window.knowsDownload = o.knowsDownload || !1, window.knowsGallery = o.knowsGallery || !1
                } else console.warn("JSON not supported: Cannot load preferences");
            else console.warn("localStorage not supported: Cannot load preferences")
        };
        exports.loadFromLocalStorage = o;
        var e = function () {
            window.localStorage ? window.JSON ? (window.localStorage.setItem("generative-weihnachten-gallery", JSON.stringify(window.gallery.slice(-100))), window.localStorage.setItem("generative-weihnachten", JSON.stringify({
                enableAnimations: window.enableAnimations,
                enableDarkMode: window.enableDarkMode,
                knowsSwipe: window.knowsSwipe,
                knowsSlowMotion: window.knowsSlowMotion,
                knowsPhotos: window.knowsPhotos,
                knowsDownload: window.knowsDownload,
                knowsGallery: window.knowsGallery
            }))) : console.warn("JSON not supported: Cannot save preferences") : console.warn("localStorage not supported: Cannot save preferences")
        };
        exports.saveToLocalStorage = e;
}, {}],
    "Ocle": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.objectToLine = exports.lineToObject = void 0;
        var e = function (e) {
            var r = e.split(",");
            if ("1" !== r[0]) throw new Error("Unknown version number: ".concat(r[0], "."));
            if (14 !== r.length) throw new Error("A link must have 14 parameters. Found ".concat(r.length, "."));
            return {
                time: Number.parseFloat(r[1]),
                x: Number.parseFloat(r[2]),
                y: Number.parseFloat(r[3]),
                width: Number.parseFloat(r[4]),
                height: Number.parseFloat(r[5]),
                verticalStrength: Number.parseFloat(r[6]),
                speedVertical: Number.parseFloat(r[7]),
                waveFrequencyVertical: Number.parseFloat(r[8]),
                wobbleFrequencyVertical: Number.parseFloat(r[9]),
                horizontalStrength: Number.parseFloat(r[10]),
                speedHorizontal: Number.parseFloat(r[11]),
                waveFrequencyHorizontal: Number.parseFloat(r[12]),
                wobbleFrequencyHorizontal: Number.parseFloat(r[13])
            }
        };
        exports.lineToObject = e;
        var r = function (e) {
            return "1," + e.time + "," + e.x + "," + e.y + "," + e.width + "," + e.height + "," + e.verticalStrength + "," + e.speedVertical + "," + e.waveFrequencyVertical + "," + e.wobbleFrequencyVertical + "," + e.horizontalStrength + "," + e.speedHorizontal + "," + e.waveFrequencyHorizontal + "," + e.wobbleFrequencyHorizontal
        };
        exports.objectToLine = r;
}, {}],
    "seN5": [function (require, module, exports) {

}, {}],
    "PpQx": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.spawnNotification = void 0, require("./notifications.scss");
        var e = function (e) {
            var t = e.text,
                i = document.createElement("div");
            i.innerText = t, document.getElementById("notifications").appendChild(i), setTimeout(function () {
                i.classList.add("fade-out"), setTimeout(function () {
                    i.remove()
                }, 2e3)
            }, 12e3)
        };
        exports.spawnNotification = e;
}, {
        "./notifications.scss": "seN5"
    }],
    "TZhv": [function (require, module, exports) {
        var global = arguments[3];
        var t = arguments[3],
            e = "Expected a function",
            n = NaN,
            r = "[object Symbol]",
            i = /^\s+|\s+$/g,
            o = /^[-+]0x[0-9a-f]+$/i,
            u = /^0b[01]+$/i,
            f = /^0o[0-7]+$/i,
            c = parseInt,
            a = "object" == typeof t && t && t.Object === Object && t,
            s = "object" == typeof self && self && self.Object === Object && self,
            v = a || s || Function("return this")(),
            l = Object.prototype,
            p = l.toString,
            b = Math.max,
            m = Math.min,
            y = function () {
                return v.Date.now()
            };

        function d(t, n, r) {
            var i, o, u, f, c, a, s = 0,
                v = !1,
                l = !1,
                p = !0;
            if ("function" != typeof t) throw new TypeError(e);

            function d(e) {
                var n = i,
                    r = o;
                return i = o = void 0, s = e, f = t.apply(r, n)
            }

            function g(t) {
                var e = t - a;
                return void 0 === a || e >= n || e < 0 || l && t - s >= u
            }

            function O() {
                var t = y();
                if (g(t)) return x(t);
                c = setTimeout(O, function (t) {
                    var e = n - (t - a);
                    return l ? m(e, u - (t - s)) : e
                }(t))
            }

            function x(t) {
                return c = void 0, p && i ? d(t) : (i = o = void 0, f)
            }

            function T() {
                var t = y(),
                    e = g(t);
                if (i = arguments, o = this, a = t, e) {
                    if (void 0 === c) return function (t) {
                        return s = t, c = setTimeout(O, n), v ? d(t) : f
                    }(a);
                    if (l) return c = setTimeout(O, n), d(a)
                }
                return void 0 === c && (c = setTimeout(O, n)), f
            }
            return n = h(n) || 0, j(r) && (v = !!r.leading, u = (l = "maxWait" in r) ? b(h(r.maxWait) || 0, n) : u, p = "trailing" in r ? !!r.trailing : p), T.cancel = function () {
                void 0 !== c && clearTimeout(c), s = 0, i = a = o = c = void 0
            }, T.flush = function () {
                return void 0 === c ? f : x(y())
            }, T
        }

        function j(t) {
            var e = typeof t;
            return !!t && ("object" == e || "function" == e)
        }

        function g(t) {
            return !!t && "object" == typeof t
        }

        function O(t) {
            return "symbol" == typeof t || g(t) && p.call(t) == r
        }

        function h(t) {
            if ("number" == typeof t) return t;
            if (O(t)) return n;
            if (j(t)) {
                var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                t = j(e) ? e + "" : e
            }
            if ("string" != typeof t) return 0 === t ? t : +t;
            t = t.replace(i, "");
            var r = u.test(t);
            return r || f.test(t) ? c(t.slice(2), r ? 2 : 8) : o.test(t) ? n : +t
        }
        module.exports = d;
}, {}],
    "Tewg": [function (require, module, exports) {
        "use strict";

        function t(t, n) {
            return a(t) || r(t, n) || e()
        }

        function e() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }

        function r(t, e) {
            if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) {
                var r = [],
                    a = !0,
                    n = !1,
                    o = void 0;
                try {
                    for (var i, l = t[Symbol.iterator](); !(a = (i = l.next()).done) && (r.push(i.value), !e || r.length !== e); a = !0);
                } catch (c) {
                    n = !0, o = c
                } finally {
                    try {
                        a || null == l.return || l.return()
                    } finally {
                        if (n) throw o
                    }
                }
                return r
            }
        }

        function a(t) {
            if (Array.isArray(t)) return t
        }

        function n(e, r) {
            var a = t(r, 2),
                n = a[0],
                o = a[1],
                i = e.time / .2,
                l = e.time / .143,
                c = e.time / .092,
                u = Math.sqrt(Math.sqrt(Math.pow(n, 2) + Math.pow(o, 2)));
            return [n + (Math.sin(n * e.wobbleFrequencyVertical + o * e.waveFrequencyVertical + i * e.speedVertical) * e.horizontalStrength + Math.sin(o * e.wobbleFrequencyVertical * .8 + n * -e.waveFrequencyVertical * .75 + c * e.speedVertical) * e.horizontalStrength * .7) * u, o + Math.sin(o * e.wobbleFrequencyHorizontal + n * e.waveFrequencyHorizontal + l * e.speedHorizontal) * e.verticalStrength * u]
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.draw = void 0;
        var o = function (t, e) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 50,
                a = getComputedStyle(t.canvas);
            t.fillStyle = a.getPropertyValue("--primary-color");
            for (var o = 1, i = 40; i > 0; i--) {
                o -= i % 2 == 0 ? .01 + i / 40 * .02 : .04 - i / 40 * .032, t.beginPath();
                for (var l = 0; l <= r; l++) {
                    var c = l / r * 360,
                        u = n(e, [Math.sin(c / 180 * Math.PI) * o, Math.cos(c / 180 * Math.PI) * o]);
                    t.lineTo(u[0], u[1])
                }
                i % 2 == 0 ? t.fill() : (t.save(), t.clip(), t.clearRect(-2, -2, 4, 4), t.restore())
            }
        };
        exports.draw = o;
}, {}],
    "s4Es": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.hideEditor = exports.showEditor = exports.startAnimation = exports.requestFrame = exports.reset = exports.newState = void 0;
        var e = o(require("lodash.debounce")),
            t = require("../links"),
            n = require("../visuals");

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function r(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter(function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })), n.push.apply(n, o)
            }
            return n
        }

        function i(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? r(n, !0).forEach(function (t) {
                    a(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(n).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }

        function a(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var s = document.getElementById("canvas"),
            c = s.getContext("2d"),
            u = function (e, t) {
                return Math.random() * (t - e) + e
            },
            l = function () {
                return {
                    time: 0,
                    verticalStrength: 0,
                    speedVertical: I(u(-2, 2), .001),
                    waveFrequencyVertical: I(u(-5, 5), .001),
                    wobbleFrequencyVertical: I(u(-5, 5), .001),
                    horizontalStrength: 0,
                    speedHorizontal: I(u(-2, 2), .001),
                    waveFrequencyHorizontal: I(u(-5, 5), .001),
                    wobbleFrequencyHorizontal: I(u(-5, 5), .001)
                }
            };
        exports.newState = l;
        var d = function () {
            m = l(), f = null, p = null
        };

        function w(e, t, n) {
            return e > n ? Math.max(n, e - t) : Math.min(n, e + t)
        }

        function v(e, t, n, o) {
            return Math.min(o, Math.max(n, e + t))
        }

        function h(e, t) {
            return i({}, t, {
                verticalStrength: w(t.verticalStrength, .007 * e, 0),
                horizontalStrength: w(t.horizontalStrength, .007 * e, 0)
            })
        }
        exports.reset = d;
        var m, f, p, g = 0;

        function y(e) {
            c.beginPath(), c.rect(-2, -2, 4, 4), c.clip(), c.clearRect(-2, -2, 4, 4), (0, n.draw)(c, m);
            var t = (e - g) / 1e3;
            window.slowMotionOn && (t /= 10), g = e, m.time += t, m = h(t, m), O = !1, M && window.enableAnimations && x()
        }

        function b() {
            var e = s.clientWidth;
            s.width = s.height = e, c.setTransform(1, 0, 0, 1, 0, 0), c.scale(e / 2.6, e / 2.6), c.translate(1.3, 1.3)
        }
        d();
        var E = (0, e.default)(function () {
            x()
        }, 300);

        function L(e) {
            var t = e.touches ? e.touches[0] : e;
            if (null !== f && null !== p) {
                var n = (t.clientX - f) / s.width / 2,
                    o = (t.clientY - p) / s.width / 2;
                m = i({}, m, {
                    horizontalStrength: v(m.horizontalStrength, .07 * Math.abs(n), 0, .2),
                    verticalStrength: v(m.verticalStrength, .07 * Math.abs(o), 0, .2)
                })
            }
            f = t.clientX, p = t.clientY, window.enableAnimations || E()
        }
        var O = !1,
            x = function () {
                O || (O = !0, window.requestAnimationFrame(y))
            };
        exports.requestFrame = x;
        var M = !0,
            S = function (e) {
                M = e, e && x()
            };
        exports.startAnimation = S;
        var j = function () {
                b(), x()
            },
            k = function (e) {
                return " " === e || "spacebar" === e
            },
            P = function (e) {
                var t = e.key.toLowerCase();
                "r" === t && d(), "s" === t && F()
            },
            q = function (e) {
                var t = e.key.toLowerCase();
                k(t) && (window.slowMotionOn = !0)
            },
            z = function (e) {
                var t = e.key.toLowerCase();
                k(t) && (window.slowMotionOn = !1)
            },
            B = document.getElementById("button-photo");

        function I(e, t) {
            var n = +e + (void 0 === t ? .5 : t / 2);
            return n - n % (void 0 === t ? 1 : +t)
        }
        B.addEventListener("pointerdown", function () {
            window.slowMotionOn = !0
        }), window.addEventListener("pointerup", function () {
            window.slowMotionOn = !1
        }), B.addEventListener("pointerup", function () {
            F()
        });
        var F = function () {
                var e = Math.floor(16 * Math.random()),
                    n = i({}, m, {
                        time: I(m.time, .001),
                        x: e % 4 * .4,
                        y: .4 * Math.floor(e / 4),
                        width: .65,
                        height: .65
                    });
                console.log(n), window.location = "#card=".concat((0, t.objectToLine)(n))
            },
            A = function () {
                document.getElementById("canvas").classList.toggle("hide", !1), document.getElementById("button-photo").classList.toggle("hide", !1), document.getElementById("button-gallery").classList.toggle("hide", !1), s.addEventListener("mousemove", L), s.addEventListener("touchmove", L), window.addEventListener("resize", j), window.addEventListener("keypress", P), window.addEventListener("keydown", q), window.addEventListener("keyup", z), f = null, p = null, b(), S(!0)
            };
        exports.showEditor = A;
        var C = function () {
            s.removeEventListener("mousemove", L), s.removeEventListener("touchmove", L), window.removeEventListener("resize", j), window.removeEventListener("keypress", P), window.removeEventListener("keydown", q), window.removeEventListener("keyup", z), S(!1), document.getElementById("canvas").classList.toggle("hide", !0), document.getElementById("button-photo").classList.toggle("hide", !0), document.getElementById("button-gallery").classList.toggle("hide", !0)
        };
        exports.hideEditor = C;
}, {
        "lodash.debounce": "TZhv",
        "../links": "Ocle",
        "../visuals": "Tewg"
    }],
    "AnSq": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.hideGallery = exports.showGallery = void 0;
        var e = require("../links"),
            t = require("../visuals");
        require("./gallery.scss");
        var l = function () {
            window.gallery.forEach(a), document.getElementById("quote").classList.toggle("hide", !0), document.getElementById("gallery").classList.toggle("hide", !1), document.getElementById("button-back").classList.toggle("hide", !1), document.getElementById("button-gallery").classList.toggle("hide", !0), document.getElementById("button-back").addEventListener("click", n)
        };
        exports.showGallery = l;
        var n = function e() {
            document.getElementById("gallery-items").innerText = "", document.getElementById("quote").classList.toggle("hide", !1), document.getElementById("gallery").classList.toggle("hide", !0), document.getElementById("button-back").classList.toggle("hide", !0), document.getElementById("button-gallery").classList.toggle("hide", !1), document.getElementById("button-back").removeEventListener("click", e)
        };
        exports.hideGallery = n;
        var a = function (l) {
            var n = document.createElement("li");
            n.classList.add("gallery__item");
            var a = document.createElement("a");
            a.href = "#card=".concat((0, e.objectToLine)(l)), n.appendChild(a);
            var o = document.createElement("canvas");
            a.appendChild(o);
            var s = document.getElementById("gallery-items");
            s.insertBefore(n, s.firstItem), setTimeout(function () {
                var e = o.getContext("2d");
                e.setTransform(1, 0, 0, 1, 0, 0), e.scale(o.width / l.width, o.height / l.height);
                var n = 1 - l.x,
                    a = 1 - l.y;
                e.translate(n, a), (0, t.draw)(e, l, 360)
            }, 15)
        };
}, {
        "../links": "Ocle",
        "../visuals": "Tewg",
        "./gallery.scss": "seN5"
    }],
    "mUhU": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.hideSettings = exports.showSettings = void 0, require("./settings.scss");
        var e = function () {
            document.getElementById("settings").classList.toggle("hide", !1)
        };
        exports.showSettings = e;
        var t = function () {
            document.getElementById("settings").classList.toggle("hide", !0)
        };
        exports.hideSettings = t;
}, {
        "./settings.scss": "seN5"
    }],
    "RiNI": [function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.hideViewer = exports.showViewer = void 0;
        var t = require("../globals"),
            e = require("../visuals");
        require("./viewer.scss");
        var o = function (t) {
                return window.gallery.find(function (e) {
                    return e.time === t.time && e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height && e.verticalStrength === t.verticalStrength && e.horizontalStrength === t.horizontalStrength
                })
            },
            n = function () {
                document.getElementById("output").classList.toggle("hide", !1), document.getElementById("output").classList.toggle("flashAnimation", !0), document.getElementById("button-back").classList.toggle("hide", !1), document.getElementById("button-gallery").classList.toggle("hide", !1), document.getElementById("button-download").classList.toggle("hide", !1), document.getElementById("button-back").addEventListener("click", d);
                var n = document.getElementById("output"),
                    i = n.getContext("2d");
                i.clearRect(-2, -2, 4, 4);
                var l = window.snapshot;
                i.setTransform(1, 0, 0, 1, 0, 0), i.scale(n.width / l.width, n.height / l.height);
                var s = 1 - l.x,
                    a = 1 - l.y;
                i.translate(s, a), (0, e.draw)(i, l, 360);
                var r = document.getElementById("button-download");
                r.setAttribute("href", n.toDataURL("image/png")), r.setAttribute("download", "BuckEtBaumgärtel_Card_".concat((new Date).getTime(), ".png")), o(window.snapshot) || (window.gallery.push(window.snapshot), console.log("Added to the gallery"), (0, t.saveToLocalStorage)())
            };
        exports.showViewer = n;
        var d = function t() {
            document.getElementById("output").classList.toggle("hide", !0), document.getElementById("output").classList.toggle("flashAnimation", !1), document.getElementById("button-back").classList.toggle("hide", !0), document.getElementById("button-download").classList.toggle("hide", !0), document.getElementById("button-back").removeEventListener("click", t);
            var e = document.getElementById("button-download");
            e.setAttribute("href", ""), e.setAttribute("download", "")
        };
        exports.hideViewer = d;
}, {
        "../globals": "rYeu",
        "../visuals": "Tewg",
        "./viewer.scss": "seN5"
    }],
    "H99C": [function (require, module, exports) {
        "use strict";
        var e = require("./globals"),
            i = require("./links"),
            t = require("./notifications"),
            o = require("./views/editor"),
            n = require("./views/gallery"),
            s = require("./views/settings"),
            r = require("./views/viewer");
        (0, e.loadFromLocalStorage)();
        var a, c = function (e) {
            "g" === e.key.toLowerCase() && (window.location = "#gallery")
        };
        window.addEventListener("keypress", c);
        var l = function () {
                a && a(), setTimeout(u, 100)
            },
            u = function () {
                if ("editor" === document.location.hash.slice(1))(0, o.showEditor)(), a = o.hideEditor;
                else if ("gallery" === document.location.hash.slice(1))(0, n.showGallery)(), a = n.hideGallery;
                else if ("settings" === document.location.hash.slice(1))(0, s.showSettings)(), a = s.hideSettings;
                else if (document.location.hash.slice(1).startsWith("card")) {
                    var e;
                    try {
                        e = (0, i.lineToObject)(document.location.hash.slice(6))
                    } catch (c) {
                        console.error(c)
                    }
                    e && (window.snapshot = e, (0, r.showViewer)(), a = r.hideViewer)
                } else window.location = "#editor", setTimeout(function () {
                    (0, t.spawnNotification)({
                        text: "Wische über die Kreise,\num Bewegungen zu erzeugen."
                    })
                }, 2e3), setTimeout(function () {
                    (0, t.spawnNotification)({
                        text: "Halte den Foto-Button,\num die Animation zu verlangsamen."
                    })
                }, 17e3), setTimeout(function () {
                    (0, t.spawnNotification)({
                        text: "Drücke den Foto-Button,\num eine Aufnahme anzufertigen."
                    })
                }, 32e3)
            }; 
        addEventListener("hashchange", l), l();
}, {
        "./globals": "rYeu",
        "./links": "Ocle",
        "./notifications": "PpQx",
        "./views/editor": "s4Es",
        "./views/gallery": "AnSq",
        "./views/settings": "mUhU",
        "./views/viewer": "RiNI"
    }]
}, {}, ["H99C"], null)
//# sourceMappingURL=src.0ae4d4fb.js.map
