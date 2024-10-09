"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[7415], {
    40882: function(e, t, n) {
        n.d(t, {
            Fw: function() {
                return C
            },
            fC: function() {
                return R
            },
            wy: function() {
                return E
            }
        });
        var r = n(2265),
            o = n(78149),
            a = n(98324),
            i = n(91715),
            c = n(1336),
            l = n(1584),
            u = n(25171),
            s = n(31383),
            d = n(53201),
            f = n(57437),
            m = "Collapsible",
            [v, p] = (0, a.b)(m),
            [h, g] = v(m),
            y = r.forwardRef((e, t) => {
                let {__scopeCollapsible: n, open: o, defaultOpen: a, disabled: c, onOpenChange: l, ...s} = e,
                    [m=!1, v] = (0, i.T)({
                        prop: o,
                        defaultProp: a,
                        onChange: l
                    });
                return (0, f.jsx)(h, {
                    scope: n,
                    disabled: c,
                    contentId: (0, d.M)(),
                    open: m,
                    onOpenToggle: r.useCallback(() => v(e => !e), [v]),
                    children: (0, f.jsx)(u.WV.div, {
                        "data-state": S(m),
                        "data-disabled": c ? "" : void 0,
                        ...s,
                        ref: t
                    })
                })
            });
        y.displayName = m;
        var b = "CollapsibleTrigger",
            E = r.forwardRef((e, t) => {
                let {__scopeCollapsible: n, ...r} = e,
                    a = g(b, n);
                return (0, f.jsx)(u.WV.button, {
                    type: "button",
                    "aria-controls": a.contentId,
                    "aria-expanded": a.open || !1,
                    "data-state": S(a.open),
                    "data-disabled": a.disabled ? "" : void 0,
                    disabled: a.disabled,
                    ...r,
                    ref: t,
                    onClick: (0, o.M)(e.onClick, a.onOpenToggle)
                })
            });
        E.displayName = b;
        var w = "CollapsibleContent",
            C = r.forwardRef((e, t) => {
                let {forceMount: n, ...r} = e,
                    o = g(w, e.__scopeCollapsible);
                return (0, f.jsx)(s.z, {
                    present: n || o.open,
                    children: e => {
                        let {present: n} = e;
                        return (0, f.jsx)(x, {
                            ...r,
                            ref: t,
                            present: n
                        })
                    }
                })
            });
        C.displayName = w;
        var x = r.forwardRef((e, t) => {
            let {__scopeCollapsible: n, present: o, children: a, ...i} = e,
                s = g(w, n),
                [d, m] = r.useState(o),
                v = r.useRef(null),
                p = (0, l.e)(t, v),
                h = r.useRef(0),
                y = h.current,
                b = r.useRef(0),
                E = b.current,
                C = s.open || d,
                x = r.useRef(C),
                R = r.useRef();
            return r.useEffect(() => {
                let e = requestAnimationFrame(() => x.current = !1);
                return () => cancelAnimationFrame(e)
            }, []), (0, c.b)(() => {
                let e = v.current;
                if (e) {
                    R.current = R.current || {
                        transitionDuration: e.style.transitionDuration,
                        animationName: e.style.animationName
                    },
                    e.style.transitionDuration = "0s",
                    e.style.animationName = "none";
                    let t = e.getBoundingClientRect();
                    h.current = t.height,
                    b.current = t.width,
                    x.current || (e.style.transitionDuration = R.current.transitionDuration, e.style.animationName = R.current.animationName),
                    m(o)
                }
            }, [s.open, o]), (0, f.jsx)(u.WV.div, {
                "data-state": S(s.open),
                "data-disabled": s.disabled ? "" : void 0,
                id: s.contentId,
                hidden: !C,
                ...i,
                ref: p,
                style: {
                    "--radix-collapsible-content-height": y ? "".concat(y, "px") : void 0,
                    "--radix-collapsible-content-width": E ? "".concat(E, "px") : void 0,
                    ...e.style
                },
                children: C && a
            })
        });
        function S(e) {
            return e ? "open" : "closed"
        }
        var R = y
    },
    21332: function(e, t, n) {
        let r;
        n.d(t, {
            x8: function() {
                return tu
            },
            VY: function() {
                return ti
            },
            dk: function() {
                return tl
            },
            aV: function() {
                return ta
            },
            h_: function() {
                return to
            },
            fC: function() {
                return tn
            },
            Dx: function() {
                return tc
            },
            xz: function() {
                return tr
            }
        });
        var o,
            a,
            i,
            c,
            l,
            u,
            s,
            d,
            f = n(2265),
            m = n(78149),
            v = n(1584),
            p = n(98324),
            h = n(53201),
            g = n(91715),
            y = n(25171),
            b = n(75137),
            E = n(57437),
            w = "dismissableLayer.update",
            C = f.createContext({
                layers: new Set,
                layersWithOutsidePointerEventsDisabled: new Set,
                branches: new Set
            }),
            x = f.forwardRef((e, t) => {
                var n,
                    r;
                let {disableOutsidePointerEvents: o=!1, onEscapeKeyDown: a, onPointerDownOutside: i, onFocusOutside: c, onInteractOutside: l, onDismiss: u, ...d} = e,
                    p = f.useContext(C),
                    [h, g] = f.useState(null),
                    x = null !== (r = null == h ? void 0 : h.ownerDocument) && void 0 !== r ? r : null === (n = globalThis) || void 0 === n ? void 0 : n.document,
                    [, k] = f.useState({}),
                    T = (0, v.e)(t, e => g(e)),
                    D = Array.from(p.layers),
                    [N] = [...p.layersWithOutsidePointerEventsDisabled].slice(-1),
                    L = D.indexOf(N),
                    M = h ? D.indexOf(h) : -1,
                    O = p.layersWithOutsidePointerEventsDisabled.size > 0,
                    P = M >= L,
                    j = function(e) {
                        var t;
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null === (t = globalThis) || void 0 === t ? void 0 : t.document,
                            r = (0, b.W)(e),
                            o = f.useRef(!1),
                            a = f.useRef(() => {});
                        return f.useEffect(() => {
                            let e = e => {
                                    if (e.target && !o.current) {
                                        let t = function() {
                                                R("dismissableLayer.pointerDownOutside", r, o, {
                                                    discrete: !0
                                                })
                                            },
                                            o = {
                                                originalEvent: e
                                            };
                                        "touch" === e.pointerType ? (n.removeEventListener("click", a.current), a.current = t, n.addEventListener("click", a.current, {
                                            once: !0
                                        })) : t()
                                    } else
                                        n.removeEventListener("click", a.current);
                                    o.current = !1
                                },
                                t = window.setTimeout(() => {
                                    n.addEventListener("pointerdown", e)
                                }, 0);
                            return () => {
                                window.clearTimeout(t),
                                n.removeEventListener("pointerdown", e),
                                n.removeEventListener("click", a.current)
                            }
                        }, [n, r]), {
                            onPointerDownCapture: () => o.current = !0
                        }
                    }(e => {
                        let t = e.target,
                            n = [...p.branches].some(e => e.contains(t));
                        !P || n || (null == i || i(e), null == l || l(e), e.defaultPrevented || null == u || u())
                    }, x),
                    A = function(e) {
                        var t;
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null === (t = globalThis) || void 0 === t ? void 0 : t.document,
                            r = (0, b.W)(e),
                            o = f.useRef(!1);
                        return f.useEffect(() => {
                            let e = e => {
                                e.target && !o.current && R("dismissableLayer.focusOutside", r, {
                                    originalEvent: e
                                }, {
                                    discrete: !1
                                })
                            };
                            return n.addEventListener("focusin", e), () => n.removeEventListener("focusin", e)
                        }, [n, r]), {
                            onFocusCapture: () => o.current = !0,
                            onBlurCapture: () => o.current = !1
                        }
                    }(e => {
                        let t = e.target;
                        [...p.branches].some(e => e.contains(t)) || (null == c || c(e), null == l || l(e), e.defaultPrevented || null == u || u())
                    }, x);
                return !function(e, t=globalThis?.document) {
                    let n = (0, b.W)(e);
                    f.useEffect(() => {
                        let e = e => {
                            "Escape" === e.key && n(e)
                        };
                        return t.addEventListener("keydown", e, {
                            capture: !0
                        }), () => t.removeEventListener("keydown", e, {
                            capture: !0
                        })
                    }, [n, t])
                }(e => {
                    M !== p.layers.size - 1 || (null == a || a(e), !e.defaultPrevented && u && (e.preventDefault(), u()))
                }, x), f.useEffect(() => {
                    if (h)
                        return o && (0 === p.layersWithOutsidePointerEventsDisabled.size && (s = x.body.style.pointerEvents, x.body.style.pointerEvents = "none"), p.layersWithOutsidePointerEventsDisabled.add(h)), p.layers.add(h), S(), () => {
                            o && 1 === p.layersWithOutsidePointerEventsDisabled.size && (x.body.style.pointerEvents = s)
                        }
                }, [h, x, o, p]), f.useEffect(() => () => {
                    h && (p.layers.delete(h), p.layersWithOutsidePointerEventsDisabled.delete(h), S())
                }, [h, p]), f.useEffect(() => {
                    let e = () => k({});
                    return document.addEventListener(w, e), () => document.removeEventListener(w, e)
                }, []), (0, E.jsx)(y.WV.div, {
                    ...d,
                    ref: T,
                    style: {
                        pointerEvents: O ? P ? "auto" : "none" : void 0,
                        ...e.style
                    },
                    onFocusCapture: (0, m.M)(e.onFocusCapture, A.onFocusCapture),
                    onBlurCapture: (0, m.M)(e.onBlurCapture, A.onBlurCapture),
                    onPointerDownCapture: (0, m.M)(e.onPointerDownCapture, j.onPointerDownCapture)
                })
            });
        function S() {
            let e = new CustomEvent(w);
            document.dispatchEvent(e)
        }
        function R(e, t, n, r) {
            let {discrete: o} = r,
                a = n.originalEvent.target,
                i = new CustomEvent(e, {
                    bubbles: !1,
                    cancelable: !0,
                    detail: n
                });
            t && a.addEventListener(e, t, {
                once: !0
            }),
            o ? (0, y.jH)(a, i) : a.dispatchEvent(i)
        }
        x.displayName = "DismissableLayer",
        f.forwardRef((e, t) => {
            let n = f.useContext(C),
                r = f.useRef(null),
                o = (0, v.e)(t, r);
            return f.useEffect(() => {
                let e = r.current;
                if (e)
                    return n.branches.add(e), () => {
                        n.branches.delete(e)
                    }
            }, [n.branches]), (0, E.jsx)(y.WV.div, {
                ...e,
                ref: o
            })
        }).displayName = "DismissableLayerBranch";
        var k = "focusScope.autoFocusOnMount",
            T = "focusScope.autoFocusOnUnmount",
            D = {
                bubbles: !1,
                cancelable: !0
            },
            N = f.forwardRef((e, t) => {
                let {loop: n=!1, trapped: r=!1, onMountAutoFocus: o, onUnmountAutoFocus: a, ...i} = e,
                    [c, l] = f.useState(null),
                    u = (0, b.W)(o),
                    s = (0, b.W)(a),
                    d = f.useRef(null),
                    m = (0, v.e)(t, e => l(e)),
                    p = f.useRef({
                        paused: !1,
                        pause() {
                            this.paused = !0
                        },
                        resume() {
                            this.paused = !1
                        }
                    }).current;
                f.useEffect(() => {
                    if (r) {
                        let e = function(e) {
                                if (p.paused || !c)
                                    return;
                                let t = e.target;
                                c.contains(t) ? d.current = t : O(d.current, {
                                    select: !0
                                })
                            },
                            t = function(e) {
                                if (p.paused || !c)
                                    return;
                                let t = e.relatedTarget;
                                null === t || c.contains(t) || O(d.current, {
                                    select: !0
                                })
                            };
                        document.addEventListener("focusin", e),
                        document.addEventListener("focusout", t);
                        let n = new MutationObserver(function(e) {
                            if (document.activeElement === document.body)
                                for (let t of e)
                                    t.removedNodes.length > 0 && O(c)
                        });
                        return c && n.observe(c, {
                            childList: !0,
                            subtree: !0
                        }), () => {
                            document.removeEventListener("focusin", e),
                            document.removeEventListener("focusout", t),
                            n.disconnect()
                        }
                    }
                }, [r, c, p.paused]),
                f.useEffect(() => {
                    if (c) {
                        P.add(p);
                        let e = document.activeElement;
                        if (!c.contains(e)) {
                            let t = new CustomEvent(k, D);
                            c.addEventListener(k, u),
                            c.dispatchEvent(t),
                            t.defaultPrevented || (function(e) {
                                let {select: t=!1} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                    n = document.activeElement;
                                for (let r of e)
                                    if (O(r, {
                                        select: t
                                    }), document.activeElement !== n)
                                        return
                            }(L(c).filter(e => "A" !== e.tagName), {
                                select: !0
                            }), document.activeElement === e && O(c))
                        }
                        return () => {
                            c.removeEventListener(k, u),
                            setTimeout(() => {
                                let t = new CustomEvent(T, D);
                                c.addEventListener(T, s),
                                c.dispatchEvent(t),
                                t.defaultPrevented || O(null != e ? e : document.body, {
                                    select: !0
                                }),
                                c.removeEventListener(T, s),
                                P.remove(p)
                            }, 0)
                        }
                    }
                }, [c, u, s, p]);
                let h = f.useCallback(e => {
                    if (!n && !r || p.paused)
                        return;
                    let t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                        o = document.activeElement;
                    if (t && o) {
                        let t = e.currentTarget,
                            [r, a] = function(e) {
                                let t = L(e);
                                return [M(t, e), M(t.reverse(), e)]
                            }(t);
                        r && a ? e.shiftKey || o !== a ? e.shiftKey && o === r && (e.preventDefault(), n && O(a, {
                            select: !0
                        })) : (e.preventDefault(), n && O(r, {
                            select: !0
                        })) : o === t && e.preventDefault()
                    }
                }, [n, r, p.paused]);
                return (0, E.jsx)(y.WV.div, {
                    tabIndex: -1,
                    ...i,
                    ref: m,
                    onKeyDown: h
                })
            });
        function L(e) {
            let t = [],
                n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                    acceptNode: e => {
                        let t = "INPUT" === e.tagName && "hidden" === e.type;
                        return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
                    }
                });
            for (; n.nextNode();)
                t.push(n.currentNode);
            return t
        }
        function M(e, t) {
            for (let n of e)
                if (!function(e, t) {
                    let {upTo: n} = t;
                    if ("hidden" === getComputedStyle(e).visibility)
                        return !0;
                    for (; e && (void 0 === n || e !== n);) {
                        if ("none" === getComputedStyle(e).display)
                            return !0;
                        e = e.parentElement
                    }
                    return !1
                }(n, {
                    upTo: t
                }))
                    return n
        }
        function O(e) {
            let {select: t=!1} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (e && e.focus) {
                var n;
                let r = document.activeElement;
                e.focus({
                    preventScroll: !0
                }),
                e !== r && (n = e) instanceof HTMLInputElement && "select" in n && t && e.select()
            }
        }
        N.displayName = "FocusScope";
        var P = (r = [], {
            add(e) {
                let t = r[0];
                e !== t && (null == t || t.pause()),
                (r = j(r, e)).unshift(e)
            },
            remove(e) {
                var t;
                null === (t = (r = j(r, e))[0]) || void 0 === t || t.resume()
            }
        });
        function j(e, t) {
            let n = [...e],
                r = n.indexOf(t);
            return -1 !== r && n.splice(r, 1), n
        }
        var A = n(54887),
            I = n(1336),
            W = f.forwardRef((e, t) => {
                var n,
                    r;
                let {container: o, ...a} = e,
                    [i, c] = f.useState(!1);
                (0, I.b)(() => c(!0), []);
                let l = o || i && (null === (r = globalThis) || void 0 === r ? void 0 : null === (n = r.document) || void 0 === n ? void 0 : n.body);
                return l ? A.createPortal((0, E.jsx)(y.WV.div, {
                    ...a,
                    ref: t
                }), l) : null
            });
        W.displayName = "Portal";
        var F = n(31383),
            _ = 0;
        function B() {
            let e = document.createElement("span");
            return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e
        }
        var V = function() {
            return (V = Object.assign || function(e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var o in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }).apply(this, arguments)
        };
        function z(e, t) {
            var n = {};
            for (var r in e)
                Object.prototype.hasOwnProperty.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
                    0 > t.indexOf(r[o]) && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
            return n
        }
        "function" == typeof SuppressedError && SuppressedError;
        var K = "right-scroll-bar-position",
            Y = "width-before-scroll-bar";
        function H(e, t) {
            return "function" == typeof e ? e(t) : e && (e.current = t), e
        }
        var X = "undefined" != typeof window ? f.useLayoutEffect : f.useEffect,
            q = new WeakMap,
            Z = (void 0 === o && (o = {}), (void 0 === a && (a = function(e) {
                return e
            }), i = [], c = !1, l = {
                read: function() {
                    if (c)
                        throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
                    return i.length ? i[i.length - 1] : null
                },
                useMedium: function(e) {
                    var t = a(e, c);
                    return i.push(t), function() {
                        i = i.filter(function(e) {
                            return e !== t
                        })
                    }
                },
                assignSyncMedium: function(e) {
                    for (c = !0; i.length;) {
                        var t = i;
                        i = [],
                        t.forEach(e)
                    }
                    i = {
                        push: function(t) {
                            return e(t)
                        },
                        filter: function() {
                            return i
                        }
                    }
                },
                assignMedium: function(e) {
                    c = !0;
                    var t = [];
                    if (i.length) {
                        var n = i;
                        i = [],
                        n.forEach(e),
                        t = i
                    }
                    var r = function() {
                            var n = t;
                            t = [],
                            n.forEach(e)
                        },
                        o = function() {
                            return Promise.resolve().then(r)
                        };
                    o(),
                    i = {
                        push: function(e) {
                            t.push(e),
                            o()
                        },
                        filter: function(e) {
                            return t = t.filter(e), i
                        }
                    }
                }
            }).options = V({
                async: !0,
                ssr: !1
            }, o), l),
            U = function() {},
            J = f.forwardRef(function(e, t) {
                var n,
                    r,
                    o,
                    a,
                    i = f.useRef(null),
                    c = f.useState({
                        onScrollCapture: U,
                        onWheelCapture: U,
                        onTouchMoveCapture: U
                    }),
                    l = c[0],
                    u = c[1],
                    s = e.forwardProps,
                    d = e.children,
                    m = e.className,
                    v = e.removeScrollBar,
                    p = e.enabled,
                    h = e.shards,
                    g = e.sideCar,
                    y = e.noIsolation,
                    b = e.inert,
                    E = e.allowPinchZoom,
                    w = e.as,
                    C = e.gapMode,
                    x = z(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
                    S = (n = [i, t], r = function(e) {
                        return n.forEach(function(t) {
                            return H(t, e)
                        })
                    }, (o = (0, f.useState)(function() {
                        return {
                            value: null,
                            callback: r,
                            facade: {
                                get current() {
                                    return o.value
                                },
                                set current(value) {
                                    var e = o.value;
                                    e !== value && (o.value = value, o.callback(value, e))
                                }
                            }
                        }
                    })[0]).callback = r, a = o.facade, X(function() {
                        var e = q.get(a);
                        if (e) {
                            var t = new Set(e),
                                r = new Set(n),
                                o = a.current;
                            t.forEach(function(e) {
                                r.has(e) || H(e, null)
                            }),
                            r.forEach(function(e) {
                                t.has(e) || H(e, o)
                            })
                        }
                        q.set(a, n)
                    }, [n]), a),
                    R = V(V({}, x), l);
                return f.createElement(f.Fragment, null, p && f.createElement(g, {
                    sideCar: Z,
                    removeScrollBar: v,
                    shards: h,
                    noIsolation: y,
                    inert: b,
                    setCallbacks: u,
                    allowPinchZoom: !!E,
                    lockRef: i,
                    gapMode: C
                }), s ? f.cloneElement(f.Children.only(d), V(V({}, R), {
                    ref: S
                })) : f.createElement(void 0 === w ? "div" : w, V({}, R, {
                    className: m,
                    ref: S
                }), d))
            });
        J.defaultProps = {
            enabled: !0,
            removeScrollBar: !0,
            inert: !1
        },
        J.classNames = {
            fullWidth: Y,
            zeroRight: K
        };
        var G = function(e) {
            var t = e.sideCar,
                n = z(e, ["sideCar"]);
            if (!t)
                throw Error("Sidecar: please provide `sideCar` property to import the right car");
            var r = t.read();
            if (!r)
                throw Error("Sidecar medium not found");
            return f.createElement(r, V({}, n))
        };
        G.isSideCarExport = !0;
        var Q = function() {
                var e = 0,
                    t = null;
                return {
                    add: function(r) {
                        if (0 == e && (t = function() {
                            if (!document)
                                return null;
                            var e = document.createElement("style");
                            e.type = "text/css";
                            var t = d || n.nc;
                            return t && e.setAttribute("nonce", t), e
                        }())) {
                            var o,
                                a;
                            (o = t).styleSheet ? o.styleSheet.cssText = r : o.appendChild(document.createTextNode(r)),
                            a = t,
                            (document.head || document.getElementsByTagName("head")[0]).appendChild(a)
                        }
                        e++
                    },
                    remove: function() {
                        --e || !t || (t.parentNode && t.parentNode.removeChild(t), t = null)
                    }
                }
            },
            $ = function() {
                var e = Q();
                return function(t, n) {
                    f.useEffect(function() {
                        return e.add(t), function() {
                            e.remove()
                        }
                    }, [t && n])
                }
            },
            ee = function() {
                var e = $();
                return function(t) {
                    return e(t.styles, t.dynamic), null
                }
            },
            et = {
                left: 0,
                top: 0,
                right: 0,
                gap: 0
            },
            en = function(e) {
                return parseInt(e || "", 10) || 0
            },
            er = function(e) {
                var t = window.getComputedStyle(document.body),
                    n = t["padding" === e ? "paddingLeft" : "marginLeft"],
                    r = t["padding" === e ? "paddingTop" : "marginTop"],
                    o = t["padding" === e ? "paddingRight" : "marginRight"];
                return [en(n), en(r), en(o)]
            },
            eo = function(e) {
                if (void 0 === e && (e = "margin"), "undefined" == typeof window)
                    return et;
                var t = er(e),
                    n = document.documentElement.clientWidth,
                    r = window.innerWidth;
                return {
                    left: t[0],
                    top: t[1],
                    right: t[2],
                    gap: Math.max(0, r - n + t[2] - t[0])
                }
            },
            ea = ee(),
            ei = "data-scroll-locked",
            ec = function(e, t, n, r) {
                var o = e.left,
                    a = e.top,
                    i = e.right,
                    c = e.gap;
                return void 0 === n && (n = "margin"), "\n  .".concat("with-scroll-bars-hidden", " {\n   overflow: hidden ").concat(r, ";\n   padding-right: ").concat(c, "px ").concat(r, ";\n  }\n  body[").concat(ei, "] {\n    overflow: hidden ").concat(r, ";\n    overscroll-behavior: contain;\n    ").concat([t && "position: relative ".concat(r, ";"), "margin" === n && "\n    padding-left: ".concat(o, "px;\n    padding-top: ").concat(a, "px;\n    padding-right: ").concat(i, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(c, "px ").concat(r, ";\n    "), "padding" === n && "padding-right: ".concat(c, "px ").concat(r, ";")].filter(Boolean).join(""), "\n  }\n  \n  .").concat(K, " {\n    right: ").concat(c, "px ").concat(r, ";\n  }\n  \n  .").concat(Y, " {\n    margin-right: ").concat(c, "px ").concat(r, ";\n  }\n  \n  .").concat(K, " .").concat(K, " {\n    right: 0 ").concat(r, ";\n  }\n  \n  .").concat(Y, " .").concat(Y, " {\n    margin-right: 0 ").concat(r, ";\n  }\n  \n  body[").concat(ei, "] {\n    ").concat("--removed-body-scroll-bar-size", ": ").concat(c, "px;\n  }\n")
            },
            el = function() {
                var e = parseInt(document.body.getAttribute(ei) || "0", 10);
                return isFinite(e) ? e : 0
            },
            eu = function() {
                f.useEffect(function() {
                    return document.body.setAttribute(ei, (el() + 1).toString()), function() {
                        var e = el() - 1;
                        e <= 0 ? document.body.removeAttribute(ei) : document.body.setAttribute(ei, e.toString())
                    }
                }, [])
            },
            es = function(e) {
                var t = e.noRelative,
                    n = e.noImportant,
                    r = e.gapMode,
                    o = void 0 === r ? "margin" : r;
                eu();
                var a = f.useMemo(function() {
                    return eo(o)
                }, [o]);
                return f.createElement(ea, {
                    styles: ec(a, !t, o, n ? "" : "!important")
                })
            },
            ed = !1;
        if ("undefined" != typeof window)
            try {
                var ef = Object.defineProperty({}, "passive", {
                    get: function() {
                        return ed = !0, !0
                    }
                });
                window.addEventListener("test", ef, ef),
                window.removeEventListener("test", ef, ef)
            } catch (e) {
                ed = !1
            }
        var em = !!ed && {
                passive: !1
            },
            ev = function(e, t) {
                var n = window.getComputedStyle(e);
                return "hidden" !== n[t] && !(n.overflowY === n.overflowX && "TEXTAREA" !== e.tagName && "visible" === n[t])
            },
            ep = function(e, t) {
                var n = t.ownerDocument,
                    r = t;
                do {
                    if ("undefined" != typeof ShadowRoot && r instanceof ShadowRoot && (r = r.host), eh(e, r)) {
                        var o = eg(e, r);
                        if (o[1] > o[2])
                            return !0
                    }
                    r = r.parentNode
                } while (r && r !== n.body);
                return !1
            },
            eh = function(e, t) {
                return "v" === e ? ev(t, "overflowY") : ev(t, "overflowX")
            },
            eg = function(e, t) {
                return "v" === e ? [t.scrollTop, t.scrollHeight, t.clientHeight] : [t.scrollLeft, t.scrollWidth, t.clientWidth]
            },
            ey = function(e, t, n, r, o) {
                var a,
                    i = (a = window.getComputedStyle(t).direction, "h" === e && "rtl" === a ? -1 : 1),
                    c = i * r,
                    l = n.target,
                    u = t.contains(l),
                    s = !1,
                    d = c > 0,
                    f = 0,
                    m = 0;
                do {
                    var v = eg(e, l),
                        p = v[0],
                        h = v[1] - v[2] - i * p;
                    (p || h) && eh(e, l) && (f += h, m += p),
                    l instanceof ShadowRoot ? l = l.host : l = l.parentNode
                } while (!u && l !== document.body || u && (t.contains(l) || t === l));
                return d && (o && 1 > Math.abs(f) || !o && c > f) ? s = !0 : !d && (o && 1 > Math.abs(m) || !o && -c > m) && (s = !0), s
            },
            eb = function(e) {
                return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
            },
            eE = function(e) {
                return [e.deltaX, e.deltaY]
            },
            ew = function(e) {
                return e && "current" in e ? e.current : e
            },
            eC = 0,
            ex = [],
            eS = (u = function(e) {
                var t = f.useRef([]),
                    n = f.useRef([0, 0]),
                    r = f.useRef(),
                    o = f.useState(eC++)[0],
                    a = f.useState(ee)[0],
                    i = f.useRef(e);
                f.useEffect(function() {
                    i.current = e
                }, [e]),
                f.useEffect(function() {
                    if (e.inert) {
                        document.body.classList.add("block-interactivity-".concat(o));
                        var t = (function(e, t, n) {
                            if (n || 2 == arguments.length)
                                for (var r, o = 0, a = t.length; o < a; o++)
                                    !r && o in t || (r || (r = Array.prototype.slice.call(t, 0, o)), r[o] = t[o]);
                            return e.concat(r || Array.prototype.slice.call(t))
                        })([e.lockRef.current], (e.shards || []).map(ew), !0).filter(Boolean);
                        return t.forEach(function(e) {
                            return e.classList.add("allow-interactivity-".concat(o))
                        }), function() {
                            document.body.classList.remove("block-interactivity-".concat(o)),
                            t.forEach(function(e) {
                                return e.classList.remove("allow-interactivity-".concat(o))
                            })
                        }
                    }
                }, [e.inert, e.lockRef.current, e.shards]);
                var c = f.useCallback(function(e, t) {
                        if ("touches" in e && 2 === e.touches.length)
                            return !i.current.allowPinchZoom;
                        var o,
                            a = eb(e),
                            c = n.current,
                            l = "deltaX" in e ? e.deltaX : c[0] - a[0],
                            u = "deltaY" in e ? e.deltaY : c[1] - a[1],
                            s = e.target,
                            d = Math.abs(l) > Math.abs(u) ? "h" : "v";
                        if ("touches" in e && "h" === d && "range" === s.type)
                            return !1;
                        var f = ep(d, s);
                        if (!f)
                            return !0;
                        if (f ? o = d : (o = "v" === d ? "h" : "v", f = ep(d, s)), !f)
                            return !1;
                        if (!r.current && "changedTouches" in e && (l || u) && (r.current = o), !o)
                            return !0;
                        var m = r.current || o;
                        return ey(m, t, e, "h" === m ? l : u, !0)
                    }, []),
                    l = f.useCallback(function(e) {
                        if (ex.length && ex[ex.length - 1] === a) {
                            var n = "deltaY" in e ? eE(e) : eb(e),
                                r = t.current.filter(function(t) {
                                    var r;
                                    return t.name === e.type && (t.target === e.target || e.target === t.shadowParent) && (r = t.delta)[0] === n[0] && r[1] === n[1]
                                })[0];
                            if (r && r.should) {
                                e.cancelable && e.preventDefault();
                                return
                            }
                            if (!r) {
                                var o = (i.current.shards || []).map(ew).filter(Boolean).filter(function(t) {
                                    return t.contains(e.target)
                                });
                                (o.length > 0 ? c(e, o[0]) : !i.current.noIsolation) && e.cancelable && e.preventDefault()
                            }
                        }
                    }, []),
                    u = f.useCallback(function(e, n, r, o) {
                        var a = {
                            name: e,
                            delta: n,
                            target: r,
                            should: o,
                            shadowParent: function(e) {
                                for (var t = null; null !== e;)
                                    e instanceof ShadowRoot && (t = e.host, e = e.host),
                                    e = e.parentNode;
                                return t
                            }(r)
                        };
                        t.current.push(a),
                        setTimeout(function() {
                            t.current = t.current.filter(function(e) {
                                return e !== a
                            })
                        }, 1)
                    }, []),
                    s = f.useCallback(function(e) {
                        n.current = eb(e),
                        r.current = void 0
                    }, []),
                    d = f.useCallback(function(t) {
                        u(t.type, eE(t), t.target, c(t, e.lockRef.current))
                    }, []),
                    m = f.useCallback(function(t) {
                        u(t.type, eb(t), t.target, c(t, e.lockRef.current))
                    }, []);
                f.useEffect(function() {
                    return ex.push(a), e.setCallbacks({
                        onScrollCapture: d,
                        onWheelCapture: d,
                        onTouchMoveCapture: m
                    }), document.addEventListener("wheel", l, em), document.addEventListener("touchmove", l, em), document.addEventListener("touchstart", s, em), function() {
                        ex = ex.filter(function(e) {
                            return e !== a
                        }),
                        document.removeEventListener("wheel", l, em),
                        document.removeEventListener("touchmove", l, em),
                        document.removeEventListener("touchstart", s, em)
                    }
                }, []);
                var v = e.removeScrollBar,
                    p = e.inert;
                return f.createElement(f.Fragment, null, p ? f.createElement(a, {
                    styles: "\n  .block-interactivity-".concat(o, " {pointer-events: none;}\n  .allow-interactivity-").concat(o, " {pointer-events: all;}\n")
                }) : null, v ? f.createElement(es, {
                    gapMode: e.gapMode
                }) : null)
            }, Z.useMedium(u), G),
            eR = f.forwardRef(function(e, t) {
                return f.createElement(J, V({}, e, {
                    ref: t,
                    sideCar: eS
                }))
            });
        eR.classNames = J.classNames;
        var ek = new WeakMap,
            eT = new WeakMap,
            eD = {},
            eN = 0,
            eL = function(e) {
                return e && (e.host || eL(e.parentNode))
            },
            eM = function(e, t, n, r) {
                var o = (Array.isArray(e) ? e : [e]).map(function(e) {
                    if (t.contains(e))
                        return e;
                    var n = eL(e);
                    return n && t.contains(n) ? n : (console.error("aria-hidden", e, "in not contained inside", t, ". Doing nothing"), null)
                }).filter(function(e) {
                    return !!e
                });
                eD[n] || (eD[n] = new WeakMap);
                var a = eD[n],
                    i = [],
                    c = new Set,
                    l = new Set(o),
                    u = function(e) {
                        !e || c.has(e) || (c.add(e), u(e.parentNode))
                    };
                o.forEach(u);
                var s = function(e) {
                    !e || l.has(e) || Array.prototype.forEach.call(e.children, function(e) {
                        if (c.has(e))
                            s(e);
                        else
                            try {
                                var t = e.getAttribute(r),
                                    o = null !== t && "false" !== t,
                                    l = (ek.get(e) || 0) + 1,
                                    u = (a.get(e) || 0) + 1;
                                ek.set(e, l),
                                a.set(e, u),
                                i.push(e),
                                1 === l && o && eT.set(e, !0),
                                1 === u && e.setAttribute(n, "true"),
                                o || e.setAttribute(r, "true")
                            } catch (t) {
                                console.error("aria-hidden: cannot operate on ", e, t)
                            }
                    })
                };
                return s(t), c.clear(), eN++, function() {
                    i.forEach(function(e) {
                        var t = ek.get(e) - 1,
                            o = a.get(e) - 1;
                        ek.set(e, t),
                        a.set(e, o),
                        t || (eT.has(e) || e.removeAttribute(r), eT.delete(e)),
                        o || e.removeAttribute(n)
                    }),
                    --eN || (ek = new WeakMap, ek = new WeakMap, eT = new WeakMap, eD = {})
                }
            },
            eO = function(e, t, n) {
                void 0 === n && (n = "data-aria-hidden");
                var r = Array.from(Array.isArray(e) ? e : [e]),
                    o = t || ("undefined" == typeof document ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body);
                return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), eM(r, o, n, "aria-hidden")) : function() {
                    return null
                }
            },
            eP = n(71538),
            ej = "Dialog",
            [eA, eI] = (0, p.b)(ej),
            [eW, eF] = eA(ej),
            e_ = e => {
                let {__scopeDialog: t, children: n, open: r, defaultOpen: o, onOpenChange: a, modal: i=!0} = e,
                    c = f.useRef(null),
                    l = f.useRef(null),
                    [u=!1, s] = (0, g.T)({
                        prop: r,
                        defaultProp: o,
                        onChange: a
                    });
                return (0, E.jsx)(eW, {
                    scope: t,
                    triggerRef: c,
                    contentRef: l,
                    contentId: (0, h.M)(),
                    titleId: (0, h.M)(),
                    descriptionId: (0, h.M)(),
                    open: u,
                    onOpenChange: s,
                    onOpenToggle: f.useCallback(() => s(e => !e), [s]),
                    modal: i,
                    children: n
                })
            };
        e_.displayName = ej;
        var eB = "DialogTrigger",
            eV = f.forwardRef((e, t) => {
                let {__scopeDialog: n, ...r} = e,
                    o = eF(eB, n),
                    a = (0, v.e)(t, o.triggerRef);
                return (0, E.jsx)(y.WV.button, {
                    type: "button",
                    "aria-haspopup": "dialog",
                    "aria-expanded": o.open,
                    "aria-controls": o.contentId,
                    "data-state": e8(o.open),
                    ...r,
                    ref: a,
                    onClick: (0, m.M)(e.onClick, o.onOpenToggle)
                })
            });
        eV.displayName = eB;
        var ez = "DialogPortal",
            [eK, eY] = eA(ez, {
                forceMount: void 0
            }),
            eH = e => {
                let {__scopeDialog: t, forceMount: n, children: r, container: o} = e,
                    a = eF(ez, t);
                return (0, E.jsx)(eK, {
                    scope: t,
                    forceMount: n,
                    children: f.Children.map(r, e => (0, E.jsx)(F.z, {
                        present: n || a.open,
                        children: (0, E.jsx)(W, {
                            asChild: !0,
                            container: o,
                            children: e
                        })
                    }))
                })
            };
        eH.displayName = ez;
        var eX = "DialogOverlay",
            eq = f.forwardRef((e, t) => {
                let n = eY(eX, e.__scopeDialog),
                    {forceMount: r=n.forceMount, ...o} = e,
                    a = eF(eX, e.__scopeDialog);
                return a.modal ? (0, E.jsx)(F.z, {
                    present: r || a.open,
                    children: (0, E.jsx)(eZ, {
                        ...o,
                        ref: t
                    })
                }) : null
            });
        eq.displayName = eX;
        var eZ = f.forwardRef((e, t) => {
                let {__scopeDialog: n, ...r} = e,
                    o = eF(eX, n);
                return (0, E.jsx)(eR, {
                    as: eP.g7,
                    allowPinchZoom: !0,
                    shards: [o.contentRef],
                    children: (0, E.jsx)(y.WV.div, {
                        "data-state": e8(o.open),
                        ...r,
                        ref: t,
                        style: {
                            pointerEvents: "auto",
                            ...r.style
                        }
                    })
                })
            }),
            eU = "DialogContent",
            eJ = f.forwardRef((e, t) => {
                let n = eY(eU, e.__scopeDialog),
                    {forceMount: r=n.forceMount, ...o} = e,
                    a = eF(eU, e.__scopeDialog);
                return (0, E.jsx)(F.z, {
                    present: r || a.open,
                    children: a.modal ? (0, E.jsx)(eG, {
                        ...o,
                        ref: t
                    }) : (0, E.jsx)(eQ, {
                        ...o,
                        ref: t
                    })
                })
            });
        eJ.displayName = eU;
        var eG = f.forwardRef((e, t) => {
                let n = eF(eU, e.__scopeDialog),
                    r = f.useRef(null),
                    o = (0, v.e)(t, n.contentRef, r);
                return f.useEffect(() => {
                    let e = r.current;
                    if (e)
                        return eO(e)
                }, []), (0, E.jsx)(e$, {
                    ...e,
                    ref: o,
                    trapFocus: n.open,
                    disableOutsidePointerEvents: !0,
                    onCloseAutoFocus: (0, m.M)(e.onCloseAutoFocus, e => {
                        var t;
                        e.preventDefault(),
                        null === (t = n.triggerRef.current) || void 0 === t || t.focus()
                    }),
                    onPointerDownOutside: (0, m.M)(e.onPointerDownOutside, e => {
                        let t = e.detail.originalEvent,
                            n = 0 === t.button && !0 === t.ctrlKey;
                        (2 === t.button || n) && e.preventDefault()
                    }),
                    onFocusOutside: (0, m.M)(e.onFocusOutside, e => e.preventDefault())
                })
            }),
            eQ = f.forwardRef((e, t) => {
                let n = eF(eU, e.__scopeDialog),
                    r = f.useRef(!1),
                    o = f.useRef(!1);
                return (0, E.jsx)(e$, {
                    ...e,
                    ref: t,
                    trapFocus: !1,
                    disableOutsidePointerEvents: !1,
                    onCloseAutoFocus: t => {
                        var a,
                            i;
                        null === (a = e.onCloseAutoFocus) || void 0 === a || a.call(e, t),
                        t.defaultPrevented || (r.current || null === (i = n.triggerRef.current) || void 0 === i || i.focus(), t.preventDefault()),
                        r.current = !1,
                        o.current = !1
                    },
                    onInteractOutside: t => {
                        var a,
                            i;
                        null === (a = e.onInteractOutside) || void 0 === a || a.call(e, t),
                        t.defaultPrevented || (r.current = !0, "pointerdown" !== t.detail.originalEvent.type || (o.current = !0));
                        let c = t.target;
                        (null === (i = n.triggerRef.current) || void 0 === i ? void 0 : i.contains(c)) && t.preventDefault(),
                        "focusin" === t.detail.originalEvent.type && o.current && t.preventDefault()
                    }
                })
            }),
            e$ = f.forwardRef((e, t) => {
                let {__scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, ...i} = e,
                    c = eF(eU, n),
                    l = f.useRef(null),
                    u = (0, v.e)(t, l);
                return f.useEffect(() => {
                    var e,
                        t;
                    let n = document.querySelectorAll("[data-radix-focus-guard]");
                    return document.body.insertAdjacentElement("afterbegin", null !== (e = n[0]) && void 0 !== e ? e : B()), document.body.insertAdjacentElement("beforeend", null !== (t = n[1]) && void 0 !== t ? t : B()), _++, () => {
                        1 === _ && document.querySelectorAll("[data-radix-focus-guard]").forEach(e => e.remove()),
                        _--
                    }
                }, []), (0, E.jsxs)(E.Fragment, {
                    children: [(0, E.jsx)(N, {
                        asChild: !0,
                        loop: !0,
                        trapped: r,
                        onMountAutoFocus: o,
                        onUnmountAutoFocus: a,
                        children: (0, E.jsx)(x, {
                            role: "dialog",
                            id: c.contentId,
                            "aria-describedby": c.descriptionId,
                            "aria-labelledby": c.titleId,
                            "data-state": e8(c.open),
                            ...i,
                            ref: u,
                            onDismiss: () => c.onOpenChange(!1)
                        })
                    }), (0, E.jsxs)(E.Fragment, {
                        children: [(0, E.jsx)(te, {
                            titleId: c.titleId
                        }), (0, E.jsx)(tt, {
                            contentRef: l,
                            descriptionId: c.descriptionId
                        })]
                    })]
                })
            }),
            e0 = "DialogTitle",
            e1 = f.forwardRef((e, t) => {
                let {__scopeDialog: n, ...r} = e,
                    o = eF(e0, n);
                return (0, E.jsx)(y.WV.h2, {
                    id: o.titleId,
                    ...r,
                    ref: t
                })
            });
        e1.displayName = e0;
        var e2 = "DialogDescription",
            e3 = f.forwardRef((e, t) => {
                let {__scopeDialog: n, ...r} = e,
                    o = eF(e2, n);
                return (0, E.jsx)(y.WV.p, {
                    id: o.descriptionId,
                    ...r,
                    ref: t
                })
            });
        e3.displayName = e2;
        var e5 = "DialogClose",
            e7 = f.forwardRef((e, t) => {
                let {__scopeDialog: n, ...r} = e,
                    o = eF(e5, n);
                return (0, E.jsx)(y.WV.button, {
                    type: "button",
                    ...r,
                    ref: t,
                    onClick: (0, m.M)(e.onClick, () => o.onOpenChange(!1))
                })
            });
        function e8(e) {
            return e ? "open" : "closed"
        }
        e7.displayName = e5;
        var e4 = "DialogTitleWarning",
            [e9, e6] = (0, p.k)(e4, {
                contentName: eU,
                titleName: e0,
                docsSlug: "dialog"
            }),
            te = e => {
                let {titleId: t} = e,
                    n = e6(e4),
                    r = "`".concat(n.contentName, "` requires a `").concat(n.titleName, "` for the component to be accessible for screen reader users.\n\nIf you want to hide the `").concat(n.titleName, "`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/").concat(n.docsSlug);
                return f.useEffect(() => {
                    t && !document.getElementById(t) && console.error(r)
                }, [r, t]), null
            },
            tt = e => {
                let {contentRef: t, descriptionId: n} = e,
                    r = e6("DialogDescriptionWarning"),
                    o = "Warning: Missing `Description` or `aria-describedby={undefined}` for {".concat(r.contentName, "}.");
                return f.useEffect(() => {
                    var e;
                    let r = null === (e = t.current) || void 0 === e ? void 0 : e.getAttribute("aria-describedby");
                    n && r && !document.getElementById(n) && console.warn(o)
                }, [o, t, n]), null
            },
            tn = e_,
            tr = eV,
            to = eH,
            ta = eq,
            ti = eJ,
            tc = e1,
            tl = e3,
            tu = e7
    },
    79512: function(e, t, n) {
        n.d(t, {
            F: function() {
                return u
            },
            f: function() {
                return s
            }
        });
        var r = n(2265),
            o = ["light", "dark"],
            a = "(prefers-color-scheme: dark)",
            i = "undefined" == typeof window,
            c = r.createContext(void 0),
            l = {
                setTheme: e => {},
                themes: []
            },
            u = () => {
                var e;
                return null != (e = r.useContext(c)) ? e : l
            },
            s = e => r.useContext(c) ? e.children : r.createElement(f, {
                ...e
            }),
            d = ["light", "dark"],
            f = e => {
                let {forcedTheme: t, disableTransitionOnChange: n=!1, enableSystem: i=!0, enableColorScheme: l=!0, storageKey: u="theme", themes: s=d, defaultTheme: f=i ? "system" : "light", attribute: g="data-theme", value: y, children: b, nonce: E} = e,
                    [w, C] = r.useState(() => v(u, f)),
                    [x, S] = r.useState(() => v(u)),
                    R = y ? Object.values(y) : s,
                    k = r.useCallback(e => {
                        let t = e;
                        if (!t)
                            return;
                        "system" === e && i && (t = h());
                        let r = y ? y[t] : t,
                            a = n ? p() : null,
                            c = document.documentElement;
                        if ("class" === g ? (c.classList.remove(...R), r && c.classList.add(r)) : r ? c.setAttribute(g, r) : c.removeAttribute(g), l) {
                            let e = o.includes(f) ? f : null,
                                n = o.includes(t) ? t : e;
                            c.style.colorScheme = n
                        }
                        null == a || a()
                    }, []),
                    T = r.useCallback(e => {
                        let t = "function" == typeof e ? e(e) : e;
                        C(t);
                        try {
                            localStorage.setItem(u, t)
                        } catch (e) {}
                    }, [t]),
                    D = r.useCallback(e => {
                        S(h(e)),
                        "system" === w && i && !t && k("system")
                    }, [w, t]);
                r.useEffect(() => {
                    let e = window.matchMedia(a);
                    return e.addListener(D), D(e), () => e.removeListener(D)
                }, [D]),
                r.useEffect(() => {
                    let e = e => {
                        e.key === u && T(e.newValue || f)
                    };
                    return window.addEventListener("storage", e), () => window.removeEventListener("storage", e)
                }, [T]),
                r.useEffect(() => {
                    k(null != t ? t : w)
                }, [t, w]);
                let N = r.useMemo(() => ({
                    theme: w,
                    setTheme: T,
                    forcedTheme: t,
                    resolvedTheme: "system" === w ? x : w,
                    themes: i ? [...s, "system"] : s,
                    systemTheme: i ? x : void 0
                }), [w, T, t, x, i, s]);
                return r.createElement(c.Provider, {
                    value: N
                }, r.createElement(m, {
                    forcedTheme: t,
                    disableTransitionOnChange: n,
                    enableSystem: i,
                    enableColorScheme: l,
                    storageKey: u,
                    themes: s,
                    defaultTheme: f,
                    attribute: g,
                    value: y,
                    children: b,
                    attrs: R,
                    nonce: E
                }), b)
            },
            m = r.memo(e => {
                let {forcedTheme: t, storageKey: n, attribute: i, enableSystem: c, enableColorScheme: l, defaultTheme: u, value: s, attrs: d, nonce: f} = e,
                    m = "system" === u,
                    v = "class" === i ? "var d=document.documentElement,c=d.classList;".concat("c.remove(".concat(d.map(e => "'".concat(e, "'")).join(","), ")"), ";") : "var d=document.documentElement,n='".concat(i, "',s='setAttribute';"),
                    p = l ? (o.includes(u) ? u : null) ? "if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'".concat(u, "'") : "if(e==='light'||e==='dark')d.style.colorScheme=e" : "",
                    h = function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                            r = s ? s[e] : e,
                            a = t ? e + "|| ''" : "'".concat(r, "'"),
                            c = "";
                        return l && n && !t && o.includes(e) && (c += "d.style.colorScheme = '".concat(e, "';")), "class" === i ? t || r ? c += "c.add(".concat(a, ")") : c += "null" : r && (c += "d[s](n,".concat(a, ")")), c
                    },
                    g = t ? "!function(){".concat(v).concat(h(t), "}()") : c ? "!function(){try{".concat(v, "var e=localStorage.getItem('").concat(n, "');if('system'===e||(!e&&").concat(m, ")){var t='").concat(a, "',m=window.matchMedia(t);if(m.media!==t||m.matches){").concat(h("dark"), "}else{").concat(h("light"), "}}else if(e){").concat(s ? "var x=".concat(JSON.stringify(s), ";") : "").concat(h(s ? "x[e]" : "e", !0), "}").concat(m ? "" : "else{" + h(u, !1, !1) + "}").concat(p, "}catch(e){}}()") : "!function(){try{".concat(v, "var e=localStorage.getItem('").concat(n, "');if(e){").concat(s ? "var x=".concat(JSON.stringify(s), ";") : "").concat(h(s ? "x[e]" : "e", !0), "}else{").concat(h(u, !1, !1), ";}").concat(p, "}catch(t){}}();");
                return r.createElement("script", {
                    nonce: f,
                    dangerouslySetInnerHTML: {
                        __html: g
                    }
                })
            }),
            v = (e, t) => {
                let n;
                if (!i) {
                    try {
                        n = localStorage.getItem(e) || void 0
                    } catch (e) {}
                    return n || t
                }
            },
            p = () => {
                let e = document.createElement("style");
                return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")), document.head.appendChild(e), () => {
                    window.getComputedStyle(document.body),
                    setTimeout(() => {
                        document.head.removeChild(e)
                    }, 1)
                }
            },
            h = e => (e || (e = window.matchMedia(a)), e.matches ? "dark" : "light")
    }
}]);
