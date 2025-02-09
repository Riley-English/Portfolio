/*!
 * InertiaPlugin 3.12.2
 * https://greensock.com
 * 
 * @license Copyright 2023, GreenSock. All rights reserved.
 * This plugin is a membership benefit of Club GreenSock and is only authorized for use in sites/apps/products developed by individuals/companies with an active Club GreenSock membership. See https://greensock.com/club
 * @author: Jack Doyle, jack@greensock.com
 */
! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = t || self).window = t.window || {})
}(this, function(e) {
    "use strict";

    function m() {
        return i || "undefined" != typeof window && (i = window.gsap)
    }

    function p(t) {
        return c(t).id
    }

    function q(t) {
        return f[p("string" == typeof t ? g(t)[0] : t)]
    }

    function r(t) {
        var e, r = o;
        if (.05 <= t - s)
            for (s = t; r;)((e = r.g(r.t, r.p)) !== r.v1 || .2 < t - r.t1) && (r.v2 = r.v1, r.v1 = e, r.t2 = r.t1, r.t1 = t), r = r._next
    }

    function t() {
        (i = m()) && (g = i.utils.toArray, n = i.utils.getUnit, c = i.core.getCache, a = i.ticker, l = 1)
    }

    function u(t, e, r, i) {
        this.t = t, this.p = e, this.g = t._gsap.get, this.rCap = v[r || n(this.g(t, e))], this.v1 = this.v2 = 0, this.t1 = this.t2 = a.time, i && ((this._next = i)._prev = this)
    }
    var i, l, g, n, o, a, s, c, f = {},
        v = {
            deg: 360,
            rad: 2 * Math.PI
        },
        d = function() {
            function VelocityTracker(e, r) {
                l || t(), this.target = g(e)[0], (f[p(this.target)] = this)._props = {}, r && this.add(r)
            }
            VelocityTracker.register = function register(e) {
                i = e, t()
            };
            var e = VelocityTracker.prototype;
            return e.get = function get(t, e) {
                var r, i, n = this._props[t] || console.warn("Not tracking " + t + " velocity.");
                return r = parseFloat(e ? n.v1 : n.g(n.t, n.p)) - parseFloat(n.v2), (i = n.rCap) && (r %= i) !== r % (i / 2) && (r = r < 0 ? r + i : r - i),
                    function _round(t) {
                        return Math.round(1e4 * t) / 1e4
                    }(r / ((e ? n.t1 : a.time) - n.t2))
            }, e.getAll = function getAll() {
                var t, e = {},
                    r = this._props;
                for (t in r) e[t] = this.get(t);
                return e
            }, e.isTracking = function isTracking(t) {
                return t in this._props
            }, e.add = function add(t, e) {
                t in this._props || (o || (a.add(r), s = a.time), o = this._props[t] = new u(this.target, t, e, o))
            }, e.remove = function remove(t) {
                var e, i, n = this._props[t];
                n && (e = n._prev, i = n._next, e && (e._next = i), i ? i._prev = e : o === n && (a.remove(r), o = 0), delete this._props[t])
            }, e.kill = function kill(t) {
                for (var e in this._props) this.remove(e);
                t || delete f[p(this.target)]
            }, VelocityTracker.track = function track(e, r, i) {
                l || t();
                for (var n, o, a = [], s = g(e), c = r.split(","), u = (i || "").split(","), f = s.length; f--;) {
                    for (n = q(s[f]) || new VelocityTracker(s[f]), o = c.length; o--;) n.add(c[o], u[o] || u[0]);
                    a.push(n)
                }
                return a
            }, VelocityTracker.untrack = function untrack(t, e) {
                var r = (e || "").split(",");
                g(t).forEach(function(t) {
                    var e = q(t);
                    e && (r.length ? r.forEach(function(t) {
                        return e.remove(t)
                    }) : e.kill(1))
                })
            }, VelocityTracker.isTracking = function isTracking(t, e) {
                var r = q(t);
                return r && r.isTracking(e)
            }, VelocityTracker.getVelocity = function getVelocity(t, e) {
                var r = q(t);
                return r && r.isTracking(e) ? r.get(e) : console.warn("Not tracking velocity of " + e)
            }, VelocityTracker
        }();
    d.getByTarget = q, m() && i.registerPlugin(d);

    function L() {
        return h || "undefined" != typeof window && (h = window.gsap) && h.registerPlugin && h
    }

    function N(t) {
        return "number" == typeof t
    }

    function O(t) {
        return "object" == typeof t
    }

    function P(t) {
        return "function" == typeof t
    }

    function S(t) {
        return t
    }

    function W(t) {
        return Math.round(1e4 * t) / 1e4
    }

    function X(t, e, r) {
        for (var i in e) i in t || i === r || (t[i] = e[i]);
        return t
    }

    function Y(t) {
        var e, r, i = {};
        for (e in t) i[e] = O(r = t[e]) && !I(r) ? Y(r) : r;
        return i
    }

    function Z(t, e, r, i, n) {
        var o, a, s, c, u = e.length,
            f = 0,
            l = R;
        if (O(t)) {
            for (; u--;) {
                for (s in o = e[u], a = 0, t) a += (c = o[s] - t[s]) * c;
                a < l && (f = u, l = a)
            }
            if ((n || R) < R && n < Math.sqrt(l)) return t
        } else
            for (; u--;)(a = (o = e[u]) - t) < 0 && (a = -a), a < l && i <= o && o <= r && (f = u, l = a);
        return e[f]
    }

    function $(t, e, r, i, n, o, a) {
        if ("auto" === t.end) return t;
        var s, c, u = t.end;
        if (r = isNaN(r) ? R : r, i = isNaN(i) ? -R : i, O(e)) {
            if (s = e.calculated ? e : (P(u) ? u(e, a) : Z(e, u, r, i, o)) || e, !e.calculated) {
                for (c in s) e[c] = s[c];
                e.calculated = !0
            }
            s = s[n]
        } else s = P(u) ? u(e, a) : I(u) ? Z(e, u, r, i, o) : parseFloat(u);
        return r < s ? s = r : s < i && (s = i), {
            max: s,
            min: s,
            unitFactor: t.unitFactor
        }
    }

    function _(t, e, r) {
        return isNaN(t[e]) ? r : +t[e]
    }

    function aa(t, e) {
        return .05 * e * t / T
    }

    function ba(t, e, r) {
        return Math.abs((e - t) * T / r / .05)
    }

    function da(t, e, r, i) {
        if (e.linkedProps) {
            var n, o, a, s, c, u, f = e.linkedProps.split(","),
                l = {};
            for (n = 0; n < f.length; n++)(a = e[o = f[n]]) && (s = N(a.velocity) ? a.velocity : (c = c || B(t)) && c.isTracking(o) ? c.get(o) : 0, u = Math.abs(s / _(a, "resistance", i)), l[o] = parseFloat(r(t, o)) + aa(s, u));
            return l
        }
    }

    function fa() {
        (h = L()) && (y = h.parseEase, F = h.utils.toArray, b = h.utils.getUnit, A = h.core.getCache, E = h.utils.clamp, C = h.core.getStyleSaver, w = h.core.reverting || function() {}, k = y("power3"), T = k(.05), M = h.core.PropTween, h.config({
            resistance: 100,
            unitFactors: {
                time: 1e3,
                totalTime: 1e3,
                progress: 1e3,
                totalProgress: 1e3
            }
        }), V = h.config(), h.registerPlugin(d), x = 1)
    }
    var h, x, y, F, k, V, b, M, A, T, E, j, C, w, B = d.getByTarget,
        I = Array.isArray,
        R = 1e10,
        U = {
            resistance: 1,
            checkpoint: 1,
            preventOvershoot: 1,
            linkedProps: 1,
            radius: 1,
            duration: 1
        },
        D = {
            version: "3.12.2",
            name: "inertia",
            register: function register(t) {
                h = t, fa()
            },
            init: function init(t, e, r, i, n) {
                x || fa();
                var o = B(t);
                if ("auto" === e) {
                    if (!o) return void console.warn("No inertia tracking on " + t + ". InertiaPlugin.track(target) first.");
                    e = o.getAll()
                }
                this.styles = C && "object" == typeof t.style && C(t), this.target = t, this.tween = r, j = e;
                var a, s, c, u, f, l, p, g, v, d = t._gsap,
                    h = d.get,
                    y = e.duration,
                    m = O(y),
                    k = e.preventOvershoot || m && 0 === y.overshoot,
                    T = _(e, "resistance", V.resistance),
                    w = N(y) ? y : function _calculateTweenDuration(t, e, r, i, n, o) {
                        if (void 0 === r && (r = 10), void 0 === i && (i = .2), void 0 === n && (n = 1), void 0 === o && (o = 0), function _isString(t) {
                                return "string" == typeof t
                            }(t) && (t = F(t)[0]), !t) return 0;
                        var a, s, c, u, f, l, p, g, v, d, h = 0,
                            y = R,
                            m = e.inertia || e,
                            k = A(t).get,
                            T = _(m, "resistance", V.resistance);
                        for (a in d = da(t, m, k, T), m) U[a] || (s = m[a], O(s) || ((g = g || B(t)) && g.isTracking(a) ? s = N(s) ? {
                            velocity: s
                        } : {
                            velocity: g.get(a)
                        } : (u = +s || 0, c = Math.abs(u / T))), O(s) && (u = N(s.velocity) ? s.velocity : (g = g || B(t)) && g.isTracking(a) ? g.get(a) : 0, c = E(i, r, Math.abs(u / _(s, "resistance", T))), l = (f = parseFloat(k(t, a)) || 0) + aa(u, c), "end" in s && (s = $(s, d && a in d ? d : l, s.max, s.min, a, m.radius, u), o && (j === e && (j = m = Y(e)), m[a] = X(s, m[a], "end"))), "max" in s && l > +s.max + 1e-10 ? (v = s.unitFactor || V.unitFactors[a] || 1, (p = f > s.max && s.min !== s.max || -15 < u * v && u * v < 45 ? i + .1 * (r - i) : ba(f, s.max, u)) + n < y && (y = p + n)) : "min" in s && l < s.min - 1e-10 && (v = s.unitFactor || V.unitFactors[a] || 1, (p = f < s.min && s.min !== s.max || -45 < u * v && u * v < 15 ? i + .1 * (r - i) : ba(f, s.min, u)) + n < y && (y = p + n)), h < p && (h = p)), h < c && (h = c));
                        return y < h && (h = y), r < h ? r : h < i ? i : h
                    }(t, e, m && y.max || 10, m && y.min || .2, m && "overshoot" in y ? +y.overshoot : k ? 0 : 1, !0);
                for (a in e = j, j = 0, v = da(t, e, h, T), e) U[a] || (s = e[a], P(s) && (s = s(i, t, n)), N(s) ? f = s : O(s) && !isNaN(s.velocity) ? f = +s.velocity : o && o.isTracking(a) ? f = o.get(a) : console.warn("ERROR: No velocity was defined for " + t + " property: " + a), l = aa(f, w), g = 0, c = h(t, a), u = b(c), c = parseFloat(c), O(s) && (p = c + l, "end" in s && (s = $(s, v && a in v ? v : p, s.max, s.min, a, e.radius, f)), "max" in s && +s.max < p ? k || s.preventOvershoot ? l = s.max - c : g = s.max - c - l : "min" in s && +s.min > p && (k || s.preventOvershoot ? l = s.min - c : g = s.min - c - l)), this._props.push(a), this.styles && this.styles.save(a), this._pt = new M(this._pt, t, a, c, 0, S, 0, d.set(t, a, this)), this._pt.u = u || 0, this._pt.c1 = l, this._pt.c2 = g);
                return r.duration(w), 1
            },
            render: function render(t, e) {
                var r = e._pt;
                if ((t = k(e.tween._time / e.tween._dur)) || !w())
                    for (; r;) r.set(r.t, r.p, W(r.s + r.c1 * t + r.c2 * t * t) + r.u, r.d, t), r = r._next;
                else e.styles.revert()
            }
        };
    "track,untrack,isTracking,getVelocity,getByTarget".split(",").forEach(function(t) {
        return D[t] = d[t]
    }), L() && h.registerPlugin(D), e.InertiaPlugin = D, e.VelocityTracker = d, e.default = D;
    if (typeof(window) === "undefined" || window !== e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    } else {
        delete e.default
    }
});
