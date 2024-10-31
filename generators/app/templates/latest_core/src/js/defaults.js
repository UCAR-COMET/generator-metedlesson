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



//* LEGACY APPS.JS */
/* CONSOLIDATED APPS: drag-drop, drawing, image-comparison, image-magnifier */

// ================
// DRAG-DROP JQUERY
// ================
$(document).ready(function(){
    $(".drag-container").each(function(){
      var fileName = $(this).attr('title');
      var ext = fileName.slice(-4);
      var name = fileName.slice(0, -4);
      var feedback_filename = name + "_feedback" + ext;
      $(this).children('.image_holder').append('<img src="' +fileName+ '" class="img-responsive center-block" />');
      $(this).children('.image_holder').append('<img src="' +feedback_filename+ '" class="img-responsive center-block hidden" />');
    });
    
    $(".done_drag").removeAttr("disabled");
    
    $("input").click(function() {
        if ($(this).is(".done_drag")) {
            // Disable the DONE button
            $(this).closest(".question-wrap-drag").find(".answer").show();
            $(this).attr("disabled","disabled");
            $(this).siblings("input.clear").addClass("reset_drag").removeClass("clear").attr("value","Reset");
            
            // Create: Feedback Image again
            var fileName = $(this).parents(".drag-container").attr('title');
            var ext = fileName.slice(-4);
            var name = fileName.slice(0, -4);
            var feedback_filename = name + "_feedback" + ext;
            
            // Remove original image when Done
            $(this).parents('.drag_controls_holder').siblings('.image_holder').children('img').remove();
            $(this).parents('.drag_controls_holder').siblings('.image_holder').append('<img src="' +feedback_filename+ '" class="img-responsive center-block" />');
            
        // Reset Button
          } else if ($(this).is(".reset_drag")) {	
              $(this).closest(".question-wrap-drag").find(".answer").hide();	  
            $(this).siblings("input.done_drag").removeAttr("disabled");
      
            if ($(this).parents(".drag_controls_holder").siblings(".image_holder")) {
                $(this).parents(".drag_controls_holder").siblings(".image_holder").children(".draggable").remove();
            }
            // Create variable for the feedback image
            var fileName = $(this).parents(".drag-container").attr('title');
            // Remove feedback image on Reset
            $(this).parents('.drag_controls_holder').siblings('.image_holder').children('img').remove();
            // Restore original image on Reset
            $(this).parents('.drag_controls_holder').siblings('.image_holder').append('<img src="' +fileName+ '" class="img-responsive center-block" />');
            // Restore draggable items on Reset
            $(this).parents(".drag_controls_holder").children(".drag_controls").children(".draggable").each(function () {
                $(this).css({
                    "left":"0px",
                    "top":"0px"
                });
            });
          }
    });
   
    // draggable UI fx
    $(".draggable").each(function() {
        $(this).draggable({
          containment: $(this).parent().parent().parent(),
          scroll: false, // No-Scroll for touch screen devices while dragging.
          helper: "original",
          stack: ".drag_controls div"
        })
        if ($(this).hasClass("replenish")) {
            $(this).draggable({
              helper: "clone",
              stop: function ( event, ui ) {
                 if ($(this).hasClass("replenish")) {
                     $(ui.helper).clone().draggable({
                          containment: $(this).parent().parent().parent(),
                          scroll: false, // No-Scroll for touch screen devices while dragging.
                          stack: ".drag_controls div"
                     }).css({
                         left: ui.position.left,
                         top: ui.position.top
                     }).appendTo($(this).closest(".drag_controls_holder").siblings(".image_holder"));
                     $(ui.helper).remove();
                 }
              }
            });
        }
    });  
});



// ===================
// DRAWING TOOL JQUERY
// ===================
$(document).ready(function () {
	$('.drawing-question').each(function() {
	   // Default Parameters
       var drw3Image = $(this).data('image');
	   var drw3Path = 'media/graphics/';
	   var drw3BrushSize = '4, 6, 8';	   		
	   var drw3Colors = '#f00, blue';
	   var drw3Labels = '';
	   
	   // Check if parameters are present, else use default
	   if ( $(this).data('path') ) {
		   drw3Path = $(this).data('path');
	   } else {}
	
	   // Brush Colors
	   var allBrushColors = '';
	   var h;
	   if ( $(this).data('colors') )
	   {
		    drw3Colors = $(this).data('colors');
		   	var colorData = drw3Colors.split(', ');
		    for (h = 0; h < colorData.length; h++){
		   		allBrushColors += '<div class="drawtool-swatch" style="background-color:' + colorData[h] + ';"></div>';
		   }
	   } else {
		   	var defaultColors = drw3Colors.split(', ');
	        for (h = 0; h < defaultColors.length; h++){
		   		allBrushColors += '<div class="drawtool-swatch" style="background-color:' + defaultColors[h] + ';"></div>';
		   }
	   }
	   
	   // Brush Sizes
	   var allBrushSizes = drw3BrushSize;
	   var i;
	   if ( $(this).data('sizes') )
	   {
		   drw3BrushSize = $(this).data('sizes');
		   var sizeData = drw3BrushSize.split(', ');
		   for (i = 0; i < sizeData.length; i++){
		   		allBrushSizes += '<option value="' + sizeData[i] + '">' + sizeData[i] + '</option>';
		   }
		   
	   } else {
		   var defaultSizes = drw3BrushSize.split(', ');
		   for (i = 0; i < defaultSizes.length; i++){
		   		allBrushSizes += '<option value="' + defaultSizes[i] + '">' + defaultSizes[i] + '</option>';
		   }
	   }
	   $(this).find('option:first').attr('selected');
	   
	   
	   // Brush Labels
	   var labelsArray = [];	
	   var j;
	   if ( $(this).data('labels') )
	   {
		   drw3Labels = $(this).data('labels');
		   		var labelsData = drw3Labels.split(', ');
		   
		   for (j = 0; j < labelsData.length; j++){
			   labelsArray.push(labelsData[j]);		   
		   }
	   } else {}
	   	   
	   
	   // Construct HTML Object
	   $(this).addClass('question-wrap-draw panel panel-default');
	   $(this).append('<div class="drawing-container center-block" title="' + drw3Path + drw3Image + '" ></div>');
			$(this).children('.drawing-container').append('<div class="canvas-wrap"></div>');
			$(this).children('.drawing-container').children('.canvas-wrap').append('<canvas class="drawing-canvas center-block" ></canvas>');
			$(this).children('.drawing-container').append('<div class="drawtool-controls row"></div>');
			$(this).children('.drawing-container').children('.drawtool-controls').append('<div class="drawtool-buttons col-xs-4"><input class="done btn btn-primary" type="button" value="Done"> <input class="reset btn btn-default" type="button" value="Reset"></div>');
	   		$(this).children('.drawing-container').children('.drawtool-controls').append('<div class="drawtool-toolset col-xs-8"><table class="table table-bordered"><thead><tr><th>Tool:</th><th>Tool Size:</th><th>Color:</th></tr></thead><tbody><tr><td class="drawtool-brushes"><div class="radio"><form class="brush-select"><label><input class="draw-pen" type="radio" name="draw-brush" checked="true" value="Pen"><span class="pen-icon"></span>Pen </label><label><input class="draw-eraser" type="radio" name="draw-brush" value="Eraser"><span class="eraser-icon"></span>Eraser </label></form></div></td><td class="drawtool-drawsize"><select class="drawsize form-control">' + allBrushSizes + '</select></td><td class="drawtool-palette">' + allBrushColors + '</td></tr></tbody></table></div>');
				
		// Push labels to brush colors [if colors and labels present]
		if ( $(this).data('colors') && $(this).data('labels') ) {
			for (h = 0; h < labelsArray.length; h++) {
				$(this).find('.drawtool-swatch').eq(h).attr('title', '' + labelsArray[h] + '');
			}
		} else {}
		
		// Move feedback after the drawing interaction
		$(this).children('.answer').appendTo(this);

	});
    // Run!
	start();
});


// Run start function
// ONLY after all content has been created and loaded.
$(window).on('load', function(){
	window.setTimeout(start, 100); //100ms to wait for build
});

// For IE
window.onload=start;

// DRAW TOOL 3.0 - Revised 11/28/17 Last change log: Fixed for LC3 - Gary
function start(){
	// This array will store the restoration points of the canvas
	var restorePoints = [];
	var a=false;
	var b,c="";
	
	$(".drawing-canvas").each(function() {
		var i=$(this).index(".drawing-canvas");
		var d=$(".drawing-canvas")[i];
		var e=d.getContext("2d");	
		
		// Pick Initial Color and Initial Size
		e.strokeStyle=$(this).parent(".canvas-wrap").parent(".drawing-container").find(".drawtool-palette div:eq(0)").css("background-color");
		e.lineWidth=$(this).parent(".canvas-wrap").parent(".drawing-container").find(".drawsize").val();
		e.lineCap="round";
		
        // Redraw if window size changes
		$(window).resize( saveResizeAndRedisplay );
		
		function saveResizeAndRedisplay(){
			// save the canvas content as imageURL
			var data=d.toDataURL();
		
			// resize the canvas
			$(d).css("margin-top",-parseInt($(d).siblings("img").innerHeight(), 10));
			var w = parseInt($(d).siblings("img").innerWidth(), 10);
			var h = parseInt($(d).siblings("img").innerHeight(), 10);
			d.width = w;
			d.height = h;
		
			// scale and redraw the canvas content
			var img = new Image();
				img.onload=function(){
					e.drawImage(img,0,0,w,h);
				};
			
				img.src=data;
			
			e.strokeStyle=$(d).parents(".drawing-container").find(".drawtool-palette").children("div:eq(0)").css("background-color");
			e.lineWidth=$(d).parents(".drawing-container").find(".drawtool-drawsize").children("select:first").val();
			e.lineCap="round";			
		}
		
		saveResizeAndRedisplay();	
		
		//if IE8 or older
		if (window.attachEvent){
			$(this).mousedown(function(d){
				a=true;
				e.save();
				b=d.pageX-$(this).offset().left;
				c=d.pageY-$(this).offset().top;
			});
			$(this).mouseout(function(){ a=false; });
			$(document).mouseup(function(){ a=false; });
			$(document).click(function(){ a=false });			
			$(this).mousemove(function(d){
				if (a==true) {
					e.beginPath();
					e.moveTo(d.pageX-$(this).offset().left,d.pageY-$(this).offset().top);
					e.lineTo(b,c);
					e.stroke();
					e.closePath();
					b=d.pageX-$(this).offset().left;
					c=d.pageY-$(this).offset().top
				}
			});
				
		//else use this
		} else {
			
		var drawer = {
			isDrawing: false,
			touchstart: function(coors){
				e.beginPath();
				e.moveTo(coors.x, coors.y);
				this.isDrawing = true;
			},
			touchmove: function(coors){
				if (this.isDrawing) {
			        e.lineTo(coors.x, coors.y);
			        e.stroke();
				}
			},
			touchend: function(coors){
				if (this.isDrawing) {
			        this.touchmove(coors);
			        this.isDrawing = false;
				}
			},		
			mousedown: function(coors){
				e.beginPath();
				e.moveTo(coors.x, coors.y);
				this.isDrawing = true;
			},
			mousemove: function(coors){
				if (this.isDrawing) {
			        e.lineTo(coors.x, coors.y);
			        e.stroke();
				}
			},
			mouseup: function(coors){
				if (this.isDrawing) {
			        this.mousemove(coors);
			        this.isDrawing = false;
				}
			},
			mouseout: function(coors){
				if (this.isDrawing) {
			        this.mousemove(coors);
			        this.isDrawing = false;
				}
			}
		};
		// create a function to pass touch events and coordinates to drawer
		function drawTouch(event){
			// get the touch coordinates
			var coors = {
				x: event.targetTouches[0].pageX-$(this).offset().left,
				y: event.targetTouches[0].pageY-$(this).offset().top
			};
			// pass the coordinates to the appropriate handler
			drawer[event.type](coors);
		}
		
		function drawMouse(event){
			// get the mouse coordinates
			var coors = {
				x: event.pageX-$(this).offset().left,
				y: event.pageY-$(this).offset().top
			};
			// pass the coordinates to the appropriate handler
			drawer[event.type](coors);
		}
		
		// attach the touchstart, touchmove, touchend event listeners.
	    this.addEventListener('touchstart',drawTouch, false);
	    this.addEventListener('touchmove',drawTouch, false);
	    this.addEventListener('touchend',drawTouch, false);

		// attach the mousedown, mousemove, mouseup event listeners.
	    this.addEventListener('mousedown',drawMouse, false);
	    this.addEventListener('mousemove',drawMouse, false);
	    this.addEventListener('mouseup',drawMouse, false);
	    this.addEventListener('mouseout',drawMouse, false);
		
		// prevent elastic scrolling
		this.addEventListener('touchmove',function(event){
			event.preventDefault();
		},false);
		
		}
		
		
		// DRAW 2.0 || Pen/Eraser Switch
		$(".drawtool-swatch").click(function() {
			$(this).parents(".drawtool-palette").siblings(".drawtool-brushes").find(".draw-pen").click();
		});
		
		// DRAW 2.0 || Brush Size
		$(".drawsize").change(function(a){
			var i=$(this).parents(".drawtool-controls").siblings(".canvas-wrap").children(".drawing-canvas").index(".drawing-canvas");
			var d=$(".drawing-canvas")[i];
			var e=d.getContext("2d");
			e.lineWidth=this.value;
		});
		
		// DRAW 2.0 || Color Palette
		$(".drawtool-palette").change(function(a){
			var i=$(this).parents(".drawtool-controls").siblings(".canvas-wrap").children(".drawing-canvas").index(".drawing-canvas");
			var d=$(".drawing-canvas")[i];
			var e=d.getContext("2d");
			e.strokeStyle=this.value
		});
		
		// DRAW 2.0 || Color Swatch Pick
		$(".drawtool-swatch").click(function(){
			var i=$(this).parents(".drawtool-controls").siblings(".canvas-wrap").children(".drawing-canvas").index(".drawing-canvas");
			var d=$(".drawing-canvas")[i];
			var e=d.getContext("2d");
			e.globalCompositeOperation = "source-over";
			e.strokeStyle=$(this).css("background-color");
			// Return to Pen Selected
			$(this).parents(".drawtool-palette").siblings(".drawtool-brushes").children(".draw-pen").prop("checked", true);
		});
		
		// DRAW 2.0 || Tooltip on Color Swatch hover
		$(".drawtool-swatch").tooltip();
		
		// DRAW 2.0 || Brush/Pen Selector
		$(".draw-pen").click(function() {
			var i=$(this).parents(".drawtool-controls").siblings(".canvas-wrap").children(".drawing-canvas").index(".drawing-canvas");
			var d=$(".drawing-canvas")[i];
			var e=d.getContext("2d");
			e.globalCompositeOperation = "source-over";
			e.strokeStyle=$(this).parents(".drawing-container").find(".drawtool-palette").children("div:eq(0)").css("background-color");
		});
		
		// DRAW 2.0 || Eraser Selector
		$(".draw-eraser").click(function() {
			var i=$(this).parents(".drawtool-controls").siblings(".canvas-wrap").children(".drawing-canvas").index(".drawing-canvas");
			var d=$(".drawing-canvas")[i];
			var e=d.getContext("2d");
			e.globalCompositeOperation = "destination-out";  
			e.strokeStyle = ("rgba(0,0,0,1.0)");
		});
		
		// DRAW 2.0 || Reset button
		$(".reset").click(function(){
			var i=$(this).parents(".drawtool-controls").siblings(".canvas-wrap").children(".drawing-canvas").index(".drawing-canvas");
			var d=$(".drawing-canvas")[i];
			var e=d.getContext("2d");
			e.globalCompositeOperation = "source-over";
			e.strokeStyle=$(this).parents(".drawing-container").find(".drawtool-palette").children("div:eq(0)").css("background-color");
			$(this).parents(".drawing-container").find(".drawtool-drawsize").find("select:first option").prop("selected","").closest("select").find("option:first").prop("selected","selected");
			e.lineWidth=$(this).parents(".drawing-container").find(".drawtool-drawsize").children("select:first").val();
			e.lineCap="round";
			e.clearRect(0,0,d.width,d.height);
		});
	
	});
}


// DRAW 2.0 || Brush Selector
$(function(){
	
  // DRAW 2.0 || Canvas Background
  $(".drawing-container").each(function() {
		var fileName = $(this).attr('title');
	    var ext = fileName.slice(-4);
	    var name = fileName.slice(0, -4);
	    var feedback_filename = name + "_feedback" + ext;
		$(this).find('.canvas-wrap').prepend('<img class="background img-responsive center-block" src="'+fileName+'" alt="background image" style="position: relative;"><img class="feedback img-responsive center-block" src="'+feedback_filename+'" alt="background image" style="position: relative; display: none;">');

		var canv = $(this).find("canvas");
		$(this).find('.canvas-wrap img:first').on("load", function () {
			var width = parseInt($(this).innerWidth(), 10);
			canv.prop("width",width);
		});
		$(this).find('.canvas-wrap img:first').on("load", function () {
			var height = parseInt($(this).innerHeight(), 10);
			var negHeight = -height;
			canv.css("margin-top",negHeight);
			canv.prop("height",height);
		});
		
		canv.css("position","relative");

		$(this).children('.controls').children(".color_controls").children('div').each(function() {
			var clr = $(this).css("background-color");
			$(this).css({
				"background-color" : "" + clr + ""
			});
		});

  });  
  
  // DRAW 2.0 || Buttons fx
  $("input").click(function() {	  
	  if ($(this).is(".done")) {
		  $(this).attr("disabled","disabled").addClass("btn-default").removeClass("btn-primary");
		  $(this).siblings("input.clear").addClass("reset").removeClass("clear").attr("value","Reset");

		  var fileName = $(this).parents(".drawing-container").attr('title');
		  var ext = fileName.slice(-4);
		  var name = fileName.slice(0, -4);
		  $(this).parents('.drawtool-controls').siblings('.canvas-wrap').children('.feedback').show();
		  $(this).parents('.drawtool-controls').siblings('.canvas-wrap').children('.background').hide();
		  
  	  } else if ($(this).is(".reset")) {	
		  $(this).siblings("input.done").removeAttr("disabled").removeClass("btn-default").addClass("btn-primary");
		   var fileName = $(this).parents(".drawing-container").attr('title');
		  $(this).parents(".drawtool-controls").siblings(".canvas-wrap").children(".background").show();
		  $(this).parents(".drawtool-controls").siblings(".canvas-wrap").children(".feedback").hide();
		  $(this).parents('.drawtool-controls').find(".brush-select input:first").prop('checked', true);
  	  }
  });
  
    // Restore Done Button
    $(".done").removeAttr("disabled");

    // CANVAS DRAWING TOOL - Resizeable Canvas
    $(function(){
        //Get the canvas & context
        var c = $('.responsive-canvas');
        var ct = c.get(0).getContext('2d');
        var container = $(c).parent();
        
        //Run function when browser  resize
        $(window).resize (respondCanvas);
        
        function respondCanvas(){
            c.attr('width', $(container).width() ); //max width
            c.attr('height', $(container).height() ); //max height
            
            //Redraw & reposition content
            var x = c.width();
            var y = c.height();
            ct.font = "20px Calibri";
            
            ct.fillStyle = "#222"; // Canvas Background
            ct.fillRect( 0, 0, x, y); // fill the canvas
            
            var resizeText = "Canvas Width: "+c.width()+"px";
            ct.textAlign = "center";
            ct.fillStyle = "#fff"; // Text Color
            ct.fillText(resizeText, (x/2), (y/2) );
    }
    
    // Initial call
    respondCanvas();
});

});




// ====================================
// IMAGE COMPARISON TWENTYTWENTY PLUGIN
// ====================================
(function($){$.fn.twentytwenty=function(options){var options=$.extend({default_offset_pct:0.5,orientation:'horizontal'},options);return this.each(function(){var sliderPct=options.default_offset_pct;var container=$(this);var sliderOrientation=options.orientation;var beforeDirection=(sliderOrientation==='vertical')?'down':'left';var afterDirection=(sliderOrientation==='vertical')?'up':'right';container.wrap("<div class='twentytwenty-wrapper twentytwenty-"+sliderOrientation+"'></div>");container.append("<div class='twentytwenty-overlay'></div>");var beforeImg=container.find("img:first");var afterImg=container.find("img:last");container.append("<div class='twentytwenty-handle'></div>");var slider=container.find(".twentytwenty-handle");slider.append("<span class='twentytwenty-"+beforeDirection+"-arrow'></span>");slider.append("<span class='twentytwenty-"+afterDirection+"-arrow'></span>");container.addClass("twentytwenty-container");beforeImg.addClass("twentytwenty-before");afterImg.addClass("twentytwenty-after");var overlay=container.find(".twentytwenty-overlay");overlay.append("<div class='twentytwenty-before-label'></div>");var calcOffset=function(dimensionPct){var w=beforeImg.width();var h=beforeImg.height();return{w:w+"px",h:h+"px",cw:(dimensionPct*w)+"px",ch:(dimensionPct*h)+"px"};};var adjustContainer=function(offset){if(sliderOrientation==='vertical'){beforeImg.css("clip","rect(0,"+offset.w+","+offset.ch+",0)");}else{beforeImg.css("clip","rect(0,"+offset.cw+","+offset.h+",0)");}container.css("height",offset.h);};var adjustSlider=function(pct){var offset=calcOffset(pct);slider.css((sliderOrientation==="vertical")?"top":"left",(sliderOrientation==="vertical")?offset.ch:offset.cw);adjustContainer(offset);};$(window).on("resize.twentytwenty",function(e){adjustSlider(sliderPct);});var offsetX=0;var imgWidth=0;slider.on("movestart",function(e){if(((e.distX>e.distY&&e.distX<-e.distY)||(e.distX<e.distY&&e.distX>-e.distY))&&sliderOrientation!=='vertical'){e.preventDefault();}else if(((e.distX<e.distY&&e.distX<-e.distY)||(e.distX>e.distY&&e.distX>e.distY))&&sliderOrientation==='vertical'){e.preventDefault();}container.addClass("active");offsetX=container.offset().left;offsetY=container.offset().top;imgWidth=beforeImg.width();imgHeight=beforeImg.height();});slider.on("moveend",function(e){container.removeClass("active");});slider.on("move",function(e){if(container.hasClass("active")){sliderPct=(sliderOrientation==='vertical')?(e.pageY-offsetY)/imgHeight:(e.pageX-offsetX)/imgWidth;if(sliderPct<0){sliderPct=0;}if(sliderPct>1){sliderPct=1;}adjustSlider(sliderPct);}});container.find("img").on("mousedown",function(event){event.preventDefault();});$(window).trigger("resize.twentytwenty");$('a[data-toggle="tab"]').on('shown.bs.tab',function(e){adjustSlider(sliderPct);e.preventDefault();});});};})(jQuery);
  
  // Generate Image Sweepers
  $(window).on('load', function(){
      if (printVersion) { /* Just display images (NO Action)*/ }
      else {
          // Find class and run plugin
          $('.image-sweep').twentytwenty({
            default_offset_pct: 0.7
          });
          // Add EN sweeper instructions
          $('div.image-sweep').before('<span class="image-sweep-instructions">Drag handle left or right to compare images</span>');
          $('div.image-sweep').hover(function(){
            $(this).prev('.image-sweep-instructions').css('opacity', '0');
          });
      };
      
  });



// ==================================
// IMAGE MAGNIFIER ELEVATEZOOM PLUGIN
// ==================================
/* jQuery elevateZoom 3.0.8 - Demo's and documentation: - www.elevateweb.co.uk/image-zoom - Copyright (c) 2013 Andrew Eades - www.elevateweb.co.uk - Dual licensed under the LGPL licenses. - http://en.wikipedia.org/wiki/MIT_License - http://en.wikipedia.org/wiki/GNU_General_Public_License */
"function"!==typeof Object.create&&(Object.create=function(d){function h(){}h.prototype=d;return new h});
(function(d,h,l,m){var k={init:function(b,a){var c=this;c.elem=a;c.$elem=d(a);c.imageSrc=c.$elem.data("zoom-image")?c.$elem.data("zoom-image"):c.$elem.attr("src");c.options=d.extend({},d.fn.elevateZoom.options,b);c.options.tint&&(c.options.lensColour="none",c.options.lensOpacity="1");"inner"==c.options.zoomType&&(c.options.showLens=!1);c.$elem.parent().removeAttr("title").removeAttr("alt");c.zoomImage=c.imageSrc;c.refresh(1);d("#"+c.options.gallery+" a").click(function(a){c.options.galleryActiveClass&&
(d("#"+c.options.gallery+" a").removeClass(c.options.galleryActiveClass),d(this).addClass(c.options.galleryActiveClass));a.preventDefault();d(this).data("zoom-image")?c.zoomImagePre=d(this).data("zoom-image"):c.zoomImagePre=d(this).data("image");c.swaptheimage(d(this).data("image"),c.zoomImagePre);return!1})},refresh:function(b){var a=this;setTimeout(function(){a.fetch(a.imageSrc)},b||a.options.refresh)},fetch:function(b){var a=this,c=new Image;c.onload=function(){a.largeWidth=c.width;a.largeHeight=
c.height;a.startZoom();a.currentImage=a.imageSrc;a.options.onZoomedImageLoaded(a.$elem)};c.src=b},startZoom:function(){var b=this;b.nzWidth=b.$elem.width();b.nzHeight=b.$elem.height();b.isWindowActive=!1;b.isLensActive=!1;b.isTintActive=!1;b.overWindow=!1;b.options.imageCrossfade&&(b.zoomWrap=b.$elem.wrap('<div style="height:'+b.nzHeight+"px;width:"+b.nzWidth+'px;" class="zoomWrapper" />'),b.$elem.css("position","absolute"));b.zoomLock=1;b.scrollingLock=!1;b.changeBgSize=!1;b.currentZoomLevel=b.options.zoomLevel;
b.nzOffset=b.$elem.offset();b.widthRatio=b.largeWidth/b.currentZoomLevel/b.nzWidth;b.heightRatio=b.largeHeight/b.currentZoomLevel/b.nzHeight;"window"==b.options.zoomType&&(b.zoomWindowStyle="overflow: hidden;background-position: 0px 0px;text-align:center;background-color: "+String(b.options.zoomWindowBgColour)+";width: "+String(b.options.zoomWindowWidth)+"px;height: "+String(b.options.zoomWindowHeight)+"px;float: left;background-size: "+b.largeWidth/b.currentZoomLevel+"px "+b.largeHeight/b.currentZoomLevel+
"px;display: none;z-index:100;border: "+String(b.options.borderSize)+"px solid "+b.options.borderColour+";background-repeat: no-repeat;position: absolute;");if("inner"==b.options.zoomType){var a=b.$elem.css("border-left-width");b.zoomWindowStyle="overflow: hidden;margin-left: "+String(a)+";margin-top: "+String(a)+";background-position: 0px 0px;width: "+String(b.nzWidth)+"px;height: "+String(b.nzHeight)+"px;float: left;display: none;cursor:"+b.options.cursor+";px solid "+b.options.borderColour+";background-repeat: no-repeat;position: absolute;"}"window"==
b.options.zoomType&&(lensHeight=b.nzHeight<b.options.zoomWindowWidth/b.widthRatio?b.nzHeight:String(b.options.zoomWindowHeight/b.heightRatio),lensWidth=b.largeWidth<b.options.zoomWindowWidth?b.nzWidth:b.options.zoomWindowWidth/b.widthRatio,b.lensStyle="background-position: 0px 0px;width: "+String(b.options.zoomWindowWidth/b.widthRatio)+"px;height: "+String(b.options.zoomWindowHeight/b.heightRatio)+"px;float: right;display: none;overflow: hidden;z-index: 999;-webkit-transform: translateZ(0);opacity:"+
b.options.lensOpacity+";filter: alpha(opacity = "+100*b.options.lensOpacity+"); zoom:1;width:"+lensWidth+"px;height:"+lensHeight+"px;background-color:"+b.options.lensColour+";cursor:"+b.options.cursor+";border: "+b.options.lensBorderSize+"px solid "+b.options.lensBorderColour+";background-repeat: no-repeat;position: absolute;");b.tintStyle="display: block;position: absolute;background-color: "+b.options.tintColour+";filter:alpha(opacity=0);opacity: 0;width: "+b.nzWidth+"px;height: "+b.nzHeight+"px;";
b.lensRound="";"lens"==b.options.zoomType&&(b.lensStyle="background-position: 0px 0px;float: left;display: none;border: "+String(b.options.borderSize)+"px solid "+b.options.borderColour+";width:"+String(b.options.lensSize)+"px;height:"+String(b.options.lensSize)+"px;background-repeat: no-repeat;position: absolute;");"round"==b.options.lensShape&&(b.lensRound="border-top-left-radius: "+String(b.options.lensSize/2+b.options.borderSize)+"px;border-top-right-radius: "+String(b.options.lensSize/2+b.options.borderSize)+
"px;border-bottom-left-radius: "+String(b.options.lensSize/2+b.options.borderSize)+"px;border-bottom-right-radius: "+String(b.options.lensSize/2+b.options.borderSize)+"px;");b.zoomContainer=d('<div class="zoomContainer" style="-webkit-transform: translateZ(0);position:absolute;left:'+b.nzOffset.left+"px;top:"+b.nzOffset.top+"px;height:"+b.nzHeight+"px;width:"+b.nzWidth+'px;"></div>');d("body").append(b.zoomContainer);b.options.containLensZoom&&"lens"==b.options.zoomType&&b.zoomContainer.css("overflow",
"hidden");"inner"!=b.options.zoomType&&(b.zoomLens=d("<div class='zoomLens' style='"+b.lensStyle+b.lensRound+"'>&nbsp;</div>").appendTo(b.zoomContainer).click(function(){b.$elem.trigger("click")}),b.options.tint&&(b.tintContainer=d("<div/>").addClass("tintContainer"),b.zoomTint=d("<div class='zoomTint' style='"+b.tintStyle+"'></div>"),b.zoomLens.wrap(b.tintContainer),b.zoomTintcss=b.zoomLens.after(b.zoomTint),b.zoomTintImage=d('<img style="position: absolute; left: 0px; top: 0px; max-width: none; width: '+
b.nzWidth+"px; height: "+b.nzHeight+'px;" src="'+b.imageSrc+'">').appendTo(b.zoomLens).click(function(){b.$elem.trigger("click")})));isNaN(b.options.zoomWindowPosition)?b.zoomWindow=d("<div style='z-index:999;left:"+b.windowOffsetLeft+"px;top:"+b.windowOffsetTop+"px;"+b.zoomWindowStyle+"' class='zoomWindow'>&nbsp;</div>").appendTo("body").click(function(){b.$elem.trigger("click")}):b.zoomWindow=d("<div style='z-index:999;left:"+b.windowOffsetLeft+"px;top:"+b.windowOffsetTop+"px;"+b.zoomWindowStyle+
"' class='zoomWindow'>&nbsp;</div>").appendTo(b.zoomContainer).click(function(){b.$elem.trigger("click")});b.zoomWindowContainer=d("<div/>").addClass("zoomWindowContainer").css("width",b.options.zoomWindowWidth);b.zoomWindow.wrap(b.zoomWindowContainer);"lens"==b.options.zoomType&&b.zoomLens.css({backgroundImage:"url('"+b.imageSrc+"')"});"window"==b.options.zoomType&&b.zoomWindow.css({backgroundImage:"url('"+b.imageSrc+"')"});"inner"==b.options.zoomType&&b.zoomWindow.css({backgroundImage:"url('"+b.imageSrc+
"')"});b.$elem.bind("touchmove",function(a){a.preventDefault();b.setPosition(a.originalEvent.touches[0]||a.originalEvent.changedTouches[0])});b.zoomContainer.bind("touchmove",function(a){"inner"==b.options.zoomType&&b.showHideWindow("show");a.preventDefault();b.setPosition(a.originalEvent.touches[0]||a.originalEvent.changedTouches[0])});b.zoomContainer.bind("touchend",function(a){b.showHideWindow("hide");b.options.showLens&&b.showHideLens("hide");b.options.tint&&"inner"!=b.options.zoomType&&b.showHideTint("hide")});
b.$elem.bind("touchend",function(a){b.showHideWindow("hide");b.options.showLens&&b.showHideLens("hide");b.options.tint&&"inner"!=b.options.zoomType&&b.showHideTint("hide")});b.options.showLens&&(b.zoomLens.bind("touchmove",function(a){a.preventDefault();b.setPosition(a.originalEvent.touches[0]||a.originalEvent.changedTouches[0])}),b.zoomLens.bind("touchend",function(a){b.showHideWindow("hide");b.options.showLens&&b.showHideLens("hide");b.options.tint&&"inner"!=b.options.zoomType&&b.showHideTint("hide")}));
b.$elem.bind("mousemove",function(a){!1==b.overWindow&&b.setElements("show");if(b.lastX!==a.clientX||b.lastY!==a.clientY)b.setPosition(a),b.currentLoc=a;b.lastX=a.clientX;b.lastY=a.clientY});b.zoomContainer.bind("mousemove",function(a){!1==b.overWindow&&b.setElements("show");if(b.lastX!==a.clientX||b.lastY!==a.clientY)b.setPosition(a),b.currentLoc=a;b.lastX=a.clientX;b.lastY=a.clientY});"inner"!=b.options.zoomType&&b.zoomLens.bind("mousemove",function(a){if(b.lastX!==a.clientX||b.lastY!==a.clientY)b.setPosition(a),
b.currentLoc=a;b.lastX=a.clientX;b.lastY=a.clientY});b.options.tint&&"inner"!=b.options.zoomType&&b.zoomTint.bind("mousemove",function(a){if(b.lastX!==a.clientX||b.lastY!==a.clientY)b.setPosition(a),b.currentLoc=a;b.lastX=a.clientX;b.lastY=a.clientY});"inner"==b.options.zoomType&&b.zoomWindow.bind("mousemove",function(a){if(b.lastX!==a.clientX||b.lastY!==a.clientY)b.setPosition(a),b.currentLoc=a;b.lastX=a.clientX;b.lastY=a.clientY});b.zoomContainer.add(b.$elem).mouseenter(function(){!1==b.overWindow&&
b.setElements("show")}).mouseleave(function(){b.scrollLock||b.setElements("hide")});"inner"!=b.options.zoomType&&b.zoomWindow.mouseenter(function(){b.overWindow=!0;b.setElements("hide")}).mouseleave(function(){b.overWindow=!1});b.minZoomLevel=b.options.minZoomLevel?b.options.minZoomLevel:2*b.options.scrollZoomIncrement;b.options.scrollZoom&&b.zoomContainer.add(b.$elem).bind("mousewheel DOMMouseScroll MozMousePixelScroll",function(a){b.scrollLock=!0;clearTimeout(d.data(this,"timer"));d.data(this,"timer",
setTimeout(function(){b.scrollLock=!1},250));var e=a.originalEvent.wheelDelta||-1*a.originalEvent.detail;a.stopImmediatePropagation();a.stopPropagation();a.preventDefault();0<e/120?b.currentZoomLevel>=b.minZoomLevel&&b.changeZoomLevel(b.currentZoomLevel-b.options.scrollZoomIncrement):b.options.maxZoomLevel?b.currentZoomLevel<=b.options.maxZoomLevel&&b.changeZoomLevel(parseFloat(b.currentZoomLevel)+b.options.scrollZoomIncrement):b.changeZoomLevel(parseFloat(b.currentZoomLevel)+b.options.scrollZoomIncrement);
return!1})},setElements:function(b){if(!this.options.zoomEnabled)return!1;"show"==b&&this.isWindowSet&&("inner"==this.options.zoomType&&this.showHideWindow("show"),"window"==this.options.zoomType&&this.showHideWindow("show"),this.options.showLens&&this.showHideLens("show"),this.options.tint&&"inner"!=this.options.zoomType&&this.showHideTint("show"));"hide"==b&&("window"==this.options.zoomType&&this.showHideWindow("hide"),this.options.tint||this.showHideWindow("hide"),this.options.showLens&&this.showHideLens("hide"),
this.options.tint&&this.showHideTint("hide"))},setPosition:function(b){if(!this.options.zoomEnabled)return!1;this.nzHeight=this.$elem.height();this.nzWidth=this.$elem.width();this.nzOffset=this.$elem.offset();this.options.tint&&"inner"!=this.options.zoomType&&(this.zoomTint.css({top:0}),this.zoomTint.css({left:0}));this.options.responsive&&!this.options.scrollZoom&&this.options.showLens&&(lensHeight=this.nzHeight<this.options.zoomWindowWidth/this.widthRatio?this.nzHeight:String(this.options.zoomWindowHeight/
this.heightRatio),lensWidth=this.largeWidth<this.options.zoomWindowWidth?this.nzWidth:this.options.zoomWindowWidth/this.widthRatio,this.widthRatio=this.largeWidth/this.nzWidth,this.heightRatio=this.largeHeight/this.nzHeight,"lens"!=this.options.zoomType&&(lensHeight=this.nzHeight<this.options.zoomWindowWidth/this.widthRatio?this.nzHeight:String(this.options.zoomWindowHeight/this.heightRatio),lensWidth=this.options.zoomWindowWidth<this.options.zoomWindowWidth?this.nzWidth:this.options.zoomWindowWidth/
this.widthRatio,this.zoomLens.css("width",lensWidth),this.zoomLens.css("height",lensHeight),this.options.tint&&(this.zoomTintImage.css("width",this.nzWidth),this.zoomTintImage.css("height",this.nzHeight))),"lens"==this.options.zoomType&&this.zoomLens.css({width:String(this.options.lensSize)+"px",height:String(this.options.lensSize)+"px"}));this.zoomContainer.css({top:this.nzOffset.top});this.zoomContainer.css({left:this.nzOffset.left});this.mouseLeft=parseInt(b.pageX-this.nzOffset.left);this.mouseTop=
parseInt(b.pageY-this.nzOffset.top);"window"==this.options.zoomType&&(this.Etoppos=this.mouseTop<this.zoomLens.height()/2,this.Eboppos=this.mouseTop>this.nzHeight-this.zoomLens.height()/2-2*this.options.lensBorderSize,this.Eloppos=this.mouseLeft<0+this.zoomLens.width()/2,this.Eroppos=this.mouseLeft>this.nzWidth-this.zoomLens.width()/2-2*this.options.lensBorderSize);"inner"==this.options.zoomType&&(this.Etoppos=this.mouseTop<this.nzHeight/2/this.heightRatio,this.Eboppos=this.mouseTop>this.nzHeight-
this.nzHeight/2/this.heightRatio,this.Eloppos=this.mouseLeft<0+this.nzWidth/2/this.widthRatio,this.Eroppos=this.mouseLeft>this.nzWidth-this.nzWidth/2/this.widthRatio-2*this.options.lensBorderSize);0>=this.mouseLeft||0>this.mouseTop||this.mouseLeft>this.nzWidth||this.mouseTop>this.nzHeight?this.setElements("hide"):(this.options.showLens&&(this.lensLeftPos=String(this.mouseLeft-this.zoomLens.width()/2),this.lensTopPos=String(this.mouseTop-this.zoomLens.height()/2)),this.Etoppos&&(this.lensTopPos=0),
this.Eloppos&&(this.tintpos=this.lensLeftPos=this.windowLeftPos=0),"window"==this.options.zoomType&&(this.Eboppos&&(this.lensTopPos=Math.max(this.nzHeight-this.zoomLens.height()-2*this.options.lensBorderSize,0)),this.Eroppos&&(this.lensLeftPos=this.nzWidth-this.zoomLens.width()-2*this.options.lensBorderSize)),"inner"==this.options.zoomType&&(this.Eboppos&&(this.lensTopPos=Math.max(this.nzHeight-2*this.options.lensBorderSize,0)),this.Eroppos&&(this.lensLeftPos=this.nzWidth-this.nzWidth-2*this.options.lensBorderSize)),
"lens"==this.options.zoomType&&(this.windowLeftPos=String(-1*((b.pageX-this.nzOffset.left)*this.widthRatio-this.zoomLens.width()/2)),this.windowTopPos=String(-1*((b.pageY-this.nzOffset.top)*this.heightRatio-this.zoomLens.height()/2)),this.zoomLens.css({backgroundPosition:this.windowLeftPos+"px "+this.windowTopPos+"px"}),this.changeBgSize&&(this.nzHeight>this.nzWidth?("lens"==this.options.zoomType&&this.zoomLens.css({"background-size":this.largeWidth/this.newvalueheight+"px "+this.largeHeight/this.newvalueheight+
"px"}),this.zoomWindow.css({"background-size":this.largeWidth/this.newvalueheight+"px "+this.largeHeight/this.newvalueheight+"px"})):("lens"==this.options.zoomType&&this.zoomLens.css({"background-size":this.largeWidth/this.newvaluewidth+"px "+this.largeHeight/this.newvaluewidth+"px"}),this.zoomWindow.css({"background-size":this.largeWidth/this.newvaluewidth+"px "+this.largeHeight/this.newvaluewidth+"px"})),this.changeBgSize=!1),this.setWindowPostition(b)),this.options.tint&&"inner"!=this.options.zoomType&&
this.setTintPosition(b),"window"==this.options.zoomType&&this.setWindowPostition(b),"inner"==this.options.zoomType&&this.setWindowPostition(b),this.options.showLens&&(this.fullwidth&&"lens"!=this.options.zoomType&&(this.lensLeftPos=0),this.zoomLens.css({left:this.lensLeftPos+"px",top:this.lensTopPos+"px"})))},showHideWindow:function(b){"show"!=b||this.isWindowActive||(this.options.zoomWindowFadeIn?this.zoomWindow.stop(!0,!0,!1).fadeIn(this.options.zoomWindowFadeIn):this.zoomWindow.show(),this.isWindowActive=
!0);"hide"==b&&this.isWindowActive&&(this.options.zoomWindowFadeOut?this.zoomWindow.stop(!0,!0).fadeOut(this.options.zoomWindowFadeOut):this.zoomWindow.hide(),this.isWindowActive=!1)},showHideLens:function(b){"show"!=b||this.isLensActive||(this.options.lensFadeIn?this.zoomLens.stop(!0,!0,!1).fadeIn(this.options.lensFadeIn):this.zoomLens.show(),this.isLensActive=!0);"hide"==b&&this.isLensActive&&(this.options.lensFadeOut?this.zoomLens.stop(!0,!0).fadeOut(this.options.lensFadeOut):this.zoomLens.hide(),
this.isLensActive=!1)},showHideTint:function(b){"show"!=b||this.isTintActive||(this.options.zoomTintFadeIn?this.zoomTint.css({opacity:this.options.tintOpacity}).animate().stop(!0,!0).fadeIn("slow"):(this.zoomTint.css({opacity:this.options.tintOpacity}).animate(),this.zoomTint.show()),this.isTintActive=!0);"hide"==b&&this.isTintActive&&(this.options.zoomTintFadeOut?this.zoomTint.stop(!0,!0).fadeOut(this.options.zoomTintFadeOut):this.zoomTint.hide(),this.isTintActive=!1)},setLensPostition:function(b){},
setWindowPostition:function(b){var a=this;if(isNaN(a.options.zoomWindowPosition))a.externalContainer=d("#"+a.options.zoomWindowPosition),a.externalContainerWidth=a.externalContainer.width(),a.externalContainerHeight=a.externalContainer.height(),a.externalContainerOffset=a.externalContainer.offset(),a.windowOffsetTop=a.externalContainerOffset.top,a.windowOffsetLeft=a.externalContainerOffset.left;else switch(a.options.zoomWindowPosition){case 1:a.windowOffsetTop=a.options.zoomWindowOffety;a.windowOffsetLeft=
+a.nzWidth;break;case 2:a.options.zoomWindowHeight>a.nzHeight&&(a.windowOffsetTop=-1*(a.options.zoomWindowHeight/2-a.nzHeight/2),a.windowOffsetLeft=a.nzWidth);break;case 3:a.windowOffsetTop=a.nzHeight-a.zoomWindow.height()-2*a.options.borderSize;a.windowOffsetLeft=a.nzWidth;break;case 4:a.windowOffsetTop=a.nzHeight;a.windowOffsetLeft=a.nzWidth;break;case 5:a.windowOffsetTop=a.nzHeight;a.windowOffsetLeft=a.nzWidth-a.zoomWindow.width()-2*a.options.borderSize;break;case 6:a.options.zoomWindowHeight>
a.nzHeight&&(a.windowOffsetTop=a.nzHeight,a.windowOffsetLeft=-1*(a.options.zoomWindowWidth/2-a.nzWidth/2+2*a.options.borderSize));break;case 7:a.windowOffsetTop=a.nzHeight;a.windowOffsetLeft=0;break;case 8:a.windowOffsetTop=a.nzHeight;a.windowOffsetLeft=-1*(a.zoomWindow.width()+2*a.options.borderSize);break;case 9:a.windowOffsetTop=a.nzHeight-a.zoomWindow.height()-2*a.options.borderSize;a.windowOffsetLeft=-1*(a.zoomWindow.width()+2*a.options.borderSize);break;case 10:a.options.zoomWindowHeight>a.nzHeight&&
(a.windowOffsetTop=-1*(a.options.zoomWindowHeight/2-a.nzHeight/2),a.windowOffsetLeft=-1*(a.zoomWindow.width()+2*a.options.borderSize));break;case 11:a.windowOffsetTop=a.options.zoomWindowOffety;a.windowOffsetLeft=-1*(a.zoomWindow.width()+2*a.options.borderSize);break;case 12:a.windowOffsetTop=-1*(a.zoomWindow.height()+2*a.options.borderSize);a.windowOffsetLeft=-1*(a.zoomWindow.width()+2*a.options.borderSize);break;case 13:a.windowOffsetTop=-1*(a.zoomWindow.height()+2*a.options.borderSize);a.windowOffsetLeft=
0;break;case 14:a.options.zoomWindowHeight>a.nzHeight&&(a.windowOffsetTop=-1*(a.zoomWindow.height()+2*a.options.borderSize),a.windowOffsetLeft=-1*(a.options.zoomWindowWidth/2-a.nzWidth/2+2*a.options.borderSize));break;case 15:a.windowOffsetTop=-1*(a.zoomWindow.height()+2*a.options.borderSize);a.windowOffsetLeft=a.nzWidth-a.zoomWindow.width()-2*a.options.borderSize;break;case 16:a.windowOffsetTop=-1*(a.zoomWindow.height()+2*a.options.borderSize);a.windowOffsetLeft=a.nzWidth;break;default:a.windowOffsetTop=
a.options.zoomWindowOffety,a.windowOffsetLeft=a.nzWidth}a.isWindowSet=!0;a.windowOffsetTop+=a.options.zoomWindowOffety;a.windowOffsetLeft+=a.options.zoomWindowOffetx;a.zoomWindow.css({top:a.windowOffsetTop});a.zoomWindow.css({left:a.windowOffsetLeft});"inner"==a.options.zoomType&&(a.zoomWindow.css({top:0}),a.zoomWindow.css({left:0}));a.windowLeftPos=String(-1*((b.pageX-a.nzOffset.left)*a.widthRatio-a.zoomWindow.width()/2));a.windowTopPos=String(-1*((b.pageY-a.nzOffset.top)*a.heightRatio-a.zoomWindow.height()/
2));a.Etoppos&&(a.windowTopPos=0);a.Eloppos&&(a.windowLeftPos=0);a.Eboppos&&(a.windowTopPos=-1*(a.largeHeight/a.currentZoomLevel-a.zoomWindow.height()));a.Eroppos&&(a.windowLeftPos=-1*(a.largeWidth/a.currentZoomLevel-a.zoomWindow.width()));a.fullheight&&(a.windowTopPos=0);a.fullwidth&&(a.windowLeftPos=0);if("window"==a.options.zoomType||"inner"==a.options.zoomType)1==a.zoomLock&&(1>=a.widthRatio&&(a.windowLeftPos=0),1>=a.heightRatio&&(a.windowTopPos=0)),a.largeHeight<a.options.zoomWindowHeight&&(a.windowTopPos=
0),a.largeWidth<a.options.zoomWindowWidth&&(a.windowLeftPos=0),a.options.easing?(a.xp||(a.xp=0),a.yp||(a.yp=0),a.loop||(a.loop=setInterval(function(){a.xp+=(a.windowLeftPos-a.xp)/a.options.easingAmount;a.yp+=(a.windowTopPos-a.yp)/a.options.easingAmount;a.scrollingLock?(clearInterval(a.loop),a.xp=a.windowLeftPos,a.yp=a.windowTopPos,a.xp=-1*((b.pageX-a.nzOffset.left)*a.widthRatio-a.zoomWindow.width()/2),a.yp=-1*((b.pageY-a.nzOffset.top)*a.heightRatio-a.zoomWindow.height()/2),a.changeBgSize&&(a.nzHeight>
a.nzWidth?("lens"==a.options.zoomType&&a.zoomLens.css({"background-size":a.largeWidth/a.newvalueheight+"px "+a.largeHeight/a.newvalueheight+"px"}),a.zoomWindow.css({"background-size":a.largeWidth/a.newvalueheight+"px "+a.largeHeight/a.newvalueheight+"px"})):("lens"!=a.options.zoomType&&a.zoomLens.css({"background-size":a.largeWidth/a.newvaluewidth+"px "+a.largeHeight/a.newvalueheight+"px"}),a.zoomWindow.css({"background-size":a.largeWidth/a.newvaluewidth+"px "+a.largeHeight/a.newvaluewidth+"px"})),
a.changeBgSize=!1),a.zoomWindow.css({backgroundPosition:a.windowLeftPos+"px "+a.windowTopPos+"px"}),a.scrollingLock=!1,a.loop=!1):(a.changeBgSize&&(a.nzHeight>a.nzWidth?("lens"==a.options.zoomType&&a.zoomLens.css({"background-size":a.largeWidth/a.newvalueheight+"px "+a.largeHeight/a.newvalueheight+"px"}),a.zoomWindow.css({"background-size":a.largeWidth/a.newvalueheight+"px "+a.largeHeight/a.newvalueheight+"px"})):("lens"!=a.options.zoomType&&a.zoomLens.css({"background-size":a.largeWidth/a.newvaluewidth+
"px "+a.largeHeight/a.newvaluewidth+"px"}),a.zoomWindow.css({"background-size":a.largeWidth/a.newvaluewidth+"px "+a.largeHeight/a.newvaluewidth+"px"})),a.changeBgSize=!1),a.zoomWindow.css({backgroundPosition:a.xp+"px "+a.yp+"px"}))},16))):(a.changeBgSize&&(a.nzHeight>a.nzWidth?("lens"==a.options.zoomType&&a.zoomLens.css({"background-size":a.largeWidth/a.newvalueheight+"px "+a.largeHeight/a.newvalueheight+"px"}),a.zoomWindow.css({"background-size":a.largeWidth/a.newvalueheight+"px "+a.largeHeight/
a.newvalueheight+"px"})):("lens"==a.options.zoomType&&a.zoomLens.css({"background-size":a.largeWidth/a.newvaluewidth+"px "+a.largeHeight/a.newvaluewidth+"px"}),a.largeHeight/a.newvaluewidth<a.options.zoomWindowHeight?a.zoomWindow.css({"background-size":a.largeWidth/a.newvaluewidth+"px "+a.largeHeight/a.newvaluewidth+"px"}):a.zoomWindow.css({"background-size":a.largeWidth/a.newvalueheight+"px "+a.largeHeight/a.newvalueheight+"px"})),a.changeBgSize=!1),a.zoomWindow.css({backgroundPosition:a.windowLeftPos+
"px "+a.windowTopPos+"px"}))},setTintPosition:function(b){this.nzOffset=this.$elem.offset();this.tintpos=String(-1*(b.pageX-this.nzOffset.left-this.zoomLens.width()/2));this.tintposy=String(-1*(b.pageY-this.nzOffset.top-this.zoomLens.height()/2));this.Etoppos&&(this.tintposy=0);this.Eloppos&&(this.tintpos=0);this.Eboppos&&(this.tintposy=-1*(this.nzHeight-this.zoomLens.height()-2*this.options.lensBorderSize));this.Eroppos&&(this.tintpos=-1*(this.nzWidth-this.zoomLens.width()-2*this.options.lensBorderSize));
this.options.tint&&(this.fullheight&&(this.tintposy=0),this.fullwidth&&(this.tintpos=0),this.zoomTintImage.css({left:this.tintpos+"px"}),this.zoomTintImage.css({top:this.tintposy+"px"}))},swaptheimage:function(b,a){var c=this,e=new Image;c.options.loadingIcon&&(c.spinner=d("<div style=\"background: url('"+c.options.loadingIcon+"') no-repeat center;height:"+c.nzHeight+"px;width:"+c.nzWidth+'px;z-index: 2000;position: absolute; background-position: center center;"></div>'),c.$elem.after(c.spinner));
c.options.onImageSwap(c.$elem);e.onload=function(){c.largeWidth=e.width;c.largeHeight=e.height;c.zoomImage=a;c.zoomWindow.css({"background-size":c.largeWidth+"px "+c.largeHeight+"px"});c.zoomWindow.css({"background-size":c.largeWidth+"px "+c.largeHeight+"px"});c.swapAction(b,a)};e.src=a},swapAction:function(b,a){var c=this,e=new Image;e.onload=function(){c.nzHeight=e.height;c.nzWidth=e.width;c.options.onImageSwapComplete(c.$elem);c.doneCallback()};e.src=b;c.currentZoomLevel=c.options.zoomLevel;c.options.maxZoomLevel=
!1;"lens"==c.options.zoomType&&c.zoomLens.css({backgroundImage:"url('"+a+"')"});"window"==c.options.zoomType&&c.zoomWindow.css({backgroundImage:"url('"+a+"')"});"inner"==c.options.zoomType&&c.zoomWindow.css({backgroundImage:"url('"+a+"')"});c.currentImage=a;if(c.options.imageCrossfade){var f=c.$elem,g=f.clone();c.$elem.attr("src",b);c.$elem.after(g);g.stop(!0).fadeOut(c.options.imageCrossfade,function(){d(this).remove()});c.$elem.width("auto").removeAttr("width");c.$elem.height("auto").removeAttr("height");
f.fadeIn(c.options.imageCrossfade);c.options.tint&&"inner"!=c.options.zoomType&&(f=c.zoomTintImage,g=f.clone(),c.zoomTintImage.attr("src",a),c.zoomTintImage.after(g),g.stop(!0).fadeOut(c.options.imageCrossfade,function(){d(this).remove()}),f.fadeIn(c.options.imageCrossfade),c.zoomTint.css({height:c.$elem.height()}),c.zoomTint.css({width:c.$elem.width()}));c.zoomContainer.css("height",c.$elem.height());c.zoomContainer.css("width",c.$elem.width());"inner"!=c.options.zoomType||c.options.constrainType||
(c.zoomWrap.parent().css("height",c.$elem.height()),c.zoomWrap.parent().css("width",c.$elem.width()),c.zoomWindow.css("height",c.$elem.height()),c.zoomWindow.css("width",c.$elem.width()))}else c.$elem.attr("src",b),c.options.tint&&(c.zoomTintImage.attr("src",a),c.zoomTintImage.attr("height",c.$elem.height()),c.zoomTintImage.css({height:c.$elem.height()}),c.zoomTint.css({height:c.$elem.height()})),c.zoomContainer.css("height",c.$elem.height()),c.zoomContainer.css("width",c.$elem.width());c.options.imageCrossfade&&
(c.zoomWrap.css("height",c.$elem.height()),c.zoomWrap.css("width",c.$elem.width()));c.options.constrainType&&("height"==c.options.constrainType&&(c.zoomContainer.css("height",c.options.constrainSize),c.zoomContainer.css("width","auto"),c.options.imageCrossfade?(c.zoomWrap.css("height",c.options.constrainSize),c.zoomWrap.css("width","auto"),c.constwidth=c.zoomWrap.width()):(c.$elem.css("height",c.options.constrainSize),c.$elem.css("width","auto"),c.constwidth=c.$elem.width()),"inner"==c.options.zoomType&&
(c.zoomWrap.parent().css("height",c.options.constrainSize),c.zoomWrap.parent().css("width",c.constwidth),c.zoomWindow.css("height",c.options.constrainSize),c.zoomWindow.css("width",c.constwidth)),c.options.tint&&(c.tintContainer.css("height",c.options.constrainSize),c.tintContainer.css("width",c.constwidth),c.zoomTint.css("height",c.options.constrainSize),c.zoomTint.css("width",c.constwidth),c.zoomTintImage.css("height",c.options.constrainSize),c.zoomTintImage.css("width",c.constwidth))),"width"==
c.options.constrainType&&(c.zoomContainer.css("height","auto"),c.zoomContainer.css("width",c.options.constrainSize),c.options.imageCrossfade?(c.zoomWrap.css("height","auto"),c.zoomWrap.css("width",c.options.constrainSize),c.constheight=c.zoomWrap.height()):(c.$elem.css("height","auto"),c.$elem.css("width",c.options.constrainSize),c.constheight=c.$elem.height()),"inner"==c.options.zoomType&&(c.zoomWrap.parent().css("height",c.constheight),c.zoomWrap.parent().css("width",c.options.constrainSize),c.zoomWindow.css("height",
c.constheight),c.zoomWindow.css("width",c.options.constrainSize)),c.options.tint&&(c.tintContainer.css("height",c.constheight),c.tintContainer.css("width",c.options.constrainSize),c.zoomTint.css("height",c.constheight),c.zoomTint.css("width",c.options.constrainSize),c.zoomTintImage.css("height",c.constheight),c.zoomTintImage.css("width",c.options.constrainSize))))},doneCallback:function(){this.options.loadingIcon&&this.spinner.hide();this.nzOffset=this.$elem.offset();this.nzWidth=this.$elem.width();
this.nzHeight=this.$elem.height();this.currentZoomLevel=this.options.zoomLevel;this.widthRatio=this.largeWidth/this.nzWidth;this.heightRatio=this.largeHeight/this.nzHeight;"window"==this.options.zoomType&&(lensHeight=this.nzHeight<this.options.zoomWindowWidth/this.widthRatio?this.nzHeight:String(this.options.zoomWindowHeight/this.heightRatio),lensWidth=this.options.zoomWindowWidth<this.options.zoomWindowWidth?this.nzWidth:this.options.zoomWindowWidth/this.widthRatio,this.zoomLens&&(this.zoomLens.css("width",
lensWidth),this.zoomLens.css("height",lensHeight)))},getCurrentImage:function(){return this.zoomImage},getGalleryList:function(){var b=this;b.gallerylist=[];b.options.gallery?d("#"+b.options.gallery+" a").each(function(){var a="";d(this).data("zoom-image")?a=d(this).data("zoom-image"):d(this).data("image")&&(a=d(this).data("image"));a==b.zoomImage?b.gallerylist.unshift({href:""+a+"",title:d(this).find("img").attr("title")}):b.gallerylist.push({href:""+a+"",title:d(this).find("img").attr("title")})}):
b.gallerylist.push({href:""+b.zoomImage+"",title:d(this).find("img").attr("title")});return b.gallerylist},changeZoomLevel:function(b){this.scrollingLock=!0;this.newvalue=parseFloat(b).toFixed(2);newvalue=parseFloat(b).toFixed(2);maxheightnewvalue=this.largeHeight/(this.options.zoomWindowHeight/this.nzHeight*this.nzHeight);maxwidthtnewvalue=this.largeWidth/(this.options.zoomWindowWidth/this.nzWidth*this.nzWidth);"inner"!=this.options.zoomType&&(maxheightnewvalue<=newvalue?(this.heightRatio=this.largeHeight/
maxheightnewvalue/this.nzHeight,this.newvalueheight=maxheightnewvalue,this.fullheight=!0):(this.heightRatio=this.largeHeight/newvalue/this.nzHeight,this.newvalueheight=newvalue,this.fullheight=!1),maxwidthtnewvalue<=newvalue?(this.widthRatio=this.largeWidth/maxwidthtnewvalue/this.nzWidth,this.newvaluewidth=maxwidthtnewvalue,this.fullwidth=!0):(this.widthRatio=this.largeWidth/newvalue/this.nzWidth,this.newvaluewidth=newvalue,this.fullwidth=!1),"lens"==this.options.zoomType&&(maxheightnewvalue<=newvalue?
(this.fullwidth=!0,this.newvaluewidth=maxheightnewvalue):(this.widthRatio=this.largeWidth/newvalue/this.nzWidth,this.newvaluewidth=newvalue,this.fullwidth=!1)));"inner"==this.options.zoomType&&(maxheightnewvalue=parseFloat(this.largeHeight/this.nzHeight).toFixed(2),maxwidthtnewvalue=parseFloat(this.largeWidth/this.nzWidth).toFixed(2),newvalue>maxheightnewvalue&&(newvalue=maxheightnewvalue),newvalue>maxwidthtnewvalue&&(newvalue=maxwidthtnewvalue),maxheightnewvalue<=newvalue?(this.heightRatio=this.largeHeight/
newvalue/this.nzHeight,this.newvalueheight=newvalue>maxheightnewvalue?maxheightnewvalue:newvalue,this.fullheight=!0):(this.heightRatio=this.largeHeight/newvalue/this.nzHeight,this.newvalueheight=newvalue>maxheightnewvalue?maxheightnewvalue:newvalue,this.fullheight=!1),maxwidthtnewvalue<=newvalue?(this.widthRatio=this.largeWidth/newvalue/this.nzWidth,this.newvaluewidth=newvalue>maxwidthtnewvalue?maxwidthtnewvalue:newvalue,this.fullwidth=!0):(this.widthRatio=this.largeWidth/newvalue/this.nzWidth,this.newvaluewidth=
newvalue,this.fullwidth=!1));scrcontinue=!1;"inner"==this.options.zoomType&&(this.nzWidth>this.nzHeight&&(this.newvaluewidth<=maxwidthtnewvalue?scrcontinue=!0:(scrcontinue=!1,this.fullwidth=this.fullheight=!0)),this.nzHeight>this.nzWidth&&(this.newvaluewidth<=maxwidthtnewvalue?scrcontinue=!0:(scrcontinue=!1,this.fullwidth=this.fullheight=!0)));"inner"!=this.options.zoomType&&(scrcontinue=!0);scrcontinue&&(this.zoomLock=0,this.changeZoom=!0,this.options.zoomWindowHeight/this.heightRatio<=this.nzHeight&&
(this.currentZoomLevel=this.newvalueheight,"lens"!=this.options.zoomType&&"inner"!=this.options.zoomType&&(this.changeBgSize=!0,this.zoomLens.css({height:String(this.options.zoomWindowHeight/this.heightRatio)+"px"})),"lens"==this.options.zoomType||"inner"==this.options.zoomType)&&(this.changeBgSize=!0),this.options.zoomWindowWidth/this.widthRatio<=this.nzWidth&&("inner"!=this.options.zoomType&&this.newvaluewidth>this.newvalueheight&&(this.currentZoomLevel=this.newvaluewidth),"lens"!=this.options.zoomType&&
"inner"!=this.options.zoomType&&(this.changeBgSize=!0,this.zoomLens.css({width:String(this.options.zoomWindowWidth/this.widthRatio)+"px"})),"lens"==this.options.zoomType||"inner"==this.options.zoomType)&&(this.changeBgSize=!0),"inner"==this.options.zoomType&&(this.changeBgSize=!0,this.nzWidth>this.nzHeight&&(this.currentZoomLevel=this.newvaluewidth),this.nzHeight>this.nzWidth&&(this.currentZoomLevel=this.newvaluewidth)));this.setPosition(this.currentLoc)},closeAll:function(){self.zoomWindow&&self.zoomWindow.hide();
self.zoomLens&&self.zoomLens.hide();self.zoomTint&&self.zoomTint.hide()},changeState:function(b){"enable"==b&&(this.options.zoomEnabled=!0);"disable"==b&&(this.options.zoomEnabled=!1)}};d.fn.elevateZoom=function(b){return this.each(function(){var a=Object.create(k);a.init(b,this);d.data(this,"elevateZoom",a)})};d.fn.elevateZoom.options={zoomActivation:"hover",zoomEnabled:!0,preloading:1,zoomLevel:1,scrollZoom:!1,scrollZoomIncrement:0.1,minZoomLevel:!1,maxZoomLevel:!1,easing:!1,easingAmount:12,lensSize:200,
zoomWindowWidth:400,zoomWindowHeight:400,zoomWindowOffetx:0,zoomWindowOffety:0,zoomWindowPosition:1,zoomWindowBgColour:"#fff",lensFadeIn:!1,lensFadeOut:!1,debug:!1,zoomWindowFadeIn:!1,zoomWindowFadeOut:!1,zoomWindowAlwaysShow:!1,zoomTintFadeIn:!1,zoomTintFadeOut:!1,borderSize:4,showLens:!0,borderColour:"#888",lensBorderSize:1,lensBorderColour:"#000",lensShape:"square",zoomType:"window",containLensZoom:!1,lensColour:"white",lensOpacity:0.4,lenszoom:!1,tint:!1,tintColour:"#333",tintOpacity:0.4,gallery:!1,
galleryActiveClass:"zoomGalleryActive",imageCrossfade:!1,constrainType:!1,constrainSize:!1,loadingIcon:!1,cursor:"default",responsive:!0,onComplete:d.noop,onZoomedImageLoaded:function(){},onImageSwap:d.noop,onImageSwapComplete:d.noop}})(jQuery,window,document);

// Instances
$(window).on('load', function() {
	$(".zoom-hover").elevateZoom({
		zoomType : "inner",
		cursor : "crosshair",
		zoomWindowFadeIn : 300,
		zoomWindowFadeOut : 300,
		lensFadeIn : 300,
		lensFadeOut : 300
	});
});
$(window).resize(function() {
	$(".zoom-hover").elevateZoom({
		zoomType : "inner",
		cursor: "crosshair",
		zoomWindowFadeIn: 300,
		zoomWindowFadeOut: 300,
		lensFadeIn: 300,
		lensFadeOut: 300
	});
});

// Image hover Zoom (Round Lens)
$(window).on('load', function() {
	$(".zoom-lens").elevateZoom({
		zoomType : "lens",
		lensShape : "round",
		responsive : true,
		lensSize : 400
	});
});
$(window).resize(function() {
	$(".zoom-lens").elevateZoom({
		zoomType : "lens",
		lensShape : "round",
		lensSize : 400
	});
});


/* LEGACY PRESET INTERACTIONS DEFAULTS.JS */
// ********************************************************************* //
// * LC Default functions generated for:
// * Latest Core Lesson Sample (1161)
// ********************************************************************* //

//var moduleID = '0000';

$(document).ready(function () {
	$('.tab-pane > h3').each(function () {
		$(this).insertBefore($(this).parent());
	});
});
// ===============================
// MODULE PRINT VIEW CONTROL
// ===============================
$(document).ready(function () {
	// Auto controls hiding of elements in Print View or Module View.
	if (printVersion) {
		$(document.body).addClass('prt');
	}
	else {
		$(document.body).addClass('dyn');
	};
});

// ===============================
// JQUERY UI COMPONENTS
// ===============================

// Sortable List Items (jQuery UI)
$(function () {
	$('.sortable').sortable({ placeholder: 'ui-state-highlight' });
	$('.sortable').disableSelection();
});

// Back-to-Top Button
$(function () {
	// hide .back-top first
	$('.back-top').hide();
	// fade in .back-top
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('.back-top').fadeIn();
			} else {
				$('.back-top').fadeOut();
			}
		});
		// scroll body to 0px on click
		$('.back-top a').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});
});

// ===============================
// BOOTSTRAP COMPONENTS
// ===============================

// Tooltips and Popovers
$(function () {
	$('[data-toggle="tooltip"]').tooltip();
	$('.lc-tip, .lc-tip-top').tooltip({ placement: 'top' });
	$('.lc-tip-right').tooltip({ placement: 'right' });
	$('.lc-tip-bottom').tooltip({ placement: 'bottom' });
	$('.lc-tip-left').tooltip({ placement: 'left' });

	$('[data-toggle="popover"]').popover();
	$('.lc-pop, .lc-pop-top').popover({ placement: 'top' });
	$('.lc-pop-right').popover({ placement: 'right' });
	$('.lc-pop-bottom').popover({ placement: 'bottom' });
	$('.lc-pop-left').popover({ placement: 'left' });
});

// TABLE OF CONTENTS - Scroll Spy
$(function () {
	$('body').scrollspy({ target: '.sidebar-toc' });
});


// ===============================
// LEARNING INTERACTIONS
// ===============================
$(function () {

	// MULTIPLE CHOICE QUESTION - RADIO BUTTONS
	$('.radio .submit-button').click(function () {
		var my_boolean = false;
		for (i = 1; i < this.form.length - 1; i++) {
			if (this.form[i].checked == true) {
				my_boolean = true;
			}
		}//end for loop

		if (my_boolean) {
			//alert(i);
			$(this).attr('disabled', 'disabled').addClass('btn-default').removeClass('btn-primary');
			$(this).parent().parent().parent().children('.answer')
				.css('display', 'block');
			$(this).parent().parent().parent().children('.message')
				.css('display', 'none');
			$(this).siblings('.correct')
				.addClass('correct-answer');

			$(this).closest('.question-wrap').next('.show-after').show();
			$(this).closest('.interaction-question').next('.show-after').show();
			$(this).closest('.show-after').next('.show-after').show();
		} else {
			$(this).parent().parent().parent().children('.answer')
				.css('display', 'none');
			$(this).parent().parent().parent().children('.message')
				.css('display', 'block');
			$(this).siblings('.correct')
				.removeClass('correct-answer');
		}//end if else
	});

	// MULTIPLE SELECT QUESTIONS - CHECKBOXES
	$('.checkboxes .submit-button').click(function () {
		var my_boolean = false;
		for (i = 1; i < this.form.length - 1; i++) {
			if (this.form[i].checked == true) {
				my_boolean = true;
			}
		}//end for loop

		if (my_boolean) {
			//alert(i);
			$(this).attr('disabled', 'disabled').addClass('btn-default').removeClass('btn-primary');
			$(this).parent().parent().parent().children('.answer')
				.css('display', 'block');
			$(this).parent().parent().parent().children('.message')
				.css('display', 'none');
			$(this).siblings('.correct')
				.addClass('correct-answer');

			$(this).closest('.question-wrap').next('.show-after').show();
			$(this).closest('.interaction-question').next('.show-after').show();
			$(this).closest('.show-after').next('.show-after').show();
		} else {
			$(this).parent().parent().parent().children('.answer')
				.css('display', 'none');
			$(this).parent().parent().parent().children('.message')
				.css('display', 'block');
			$(this).siblings('.correct')
				.removeClass('correct-answer');
		}//end if else
	});

	// SHORT/LONG ANSWER QUESTION - TEXT ENTRY 
	$('.textentry .submit-button').click(function () {
		$(this).attr('disabled', 'disabled').addClass('btn-default').removeClass('btn-primary');
		$(this).closest('.question-wrap').find('.answer').show();
		$(this).closest('.question-wrap').find('.correct').addClass('correct-answer');
		$(this).closest('.question-wrap').next('.show-after').show();

		$(this).closest('.interaction-question').next('.show-after').show();
		$(this).closest('.show-after').next('.show-after').show();
	});

	// SHORT/LONG ANSWER QUESTION (MINIMUM CHARACTER REQUIREMENT) - TEXT ENTRY
	$('.req-text').each(function () {
		$('.req-text .submit-button').click(function () {
			var inputText = $(this).parent().find('.text-response').val();
			var characterMin = $(this).parent().find('.text-response').attr('data-text-min');

			if (inputText.length > characterMin) {
				$(this).attr('disabled', 'disabled').addClass('btn-default').removeClass('btn-primary');
				$(this).closest('.question-wrap').find('.answer').show();
				$(this).closest('.question-wrap').find('.correct').addClass('correct-answer');
				$(this).closest('.question-wrap').next('.show-after').show();
				$(this).parent().parent().siblings('.message').css('display', 'none');

				$(this).closest('.interaction-question').next('.show-after').show();
				$(this).closest('.show-after').next('.show-after').show();
			}
			else {
				$(this).parent().parent().siblings('.message').css('display', 'block');
			}
		});
	});

	// COMPLETE THE STATEMENT - INLINE DROPDOWNS
	$('.inlinedropdowns .submit-button').click(function () {
		var my_boolean = false;
		var ddArray = [];
		var ddCount = $(this).parents('.inlinedropdowns').find('select option:selected').length;
		for (i = 0; i < ddCount; i++) {
			var selectedOption = $(this).parents('.inlinedropdowns').find('select').eq(i).children('option:selected').val();
			ddArray.push(selectedOption);
			if (selectedOption !== "--") {
				my_boolean = true;
			}
		}//end for loop
		if (my_boolean) {
			$(this).attr('disabled', 'disabled').addClass('btn-default').removeClass('btn-primary');
			$(this).parent().children('.dropdown_correct').css('display', 'block');
			$(this).parent().parent().parent().children('.answer').css('display', 'block');
			$(this).parent().parent().siblings('.message').css('display', 'none');
			$(this).siblings('.correct').addClass('correct-answer');

			//display show-after
			$(this).closest('.question-wrap').next('.show-after').show();
			$(this).closest('.interaction-question').next('.show-after').show();
			$(this).closest('.show-after').next('.show-after').show();
		} else {
			$(this).parent().parent().siblings('.message').css('display', 'block');
		}
	});

	// REORDERING QUESTIONS - SORTABLE LIST
	$('.reordering .submit-button').click(function () {
		$(this).attr('disabled', 'disabled').addClass('btn-default').removeClass('btn-primary');
		$(this).parent().children('.dropdown-correct')
			.css('display', 'block');
		$(this).parent().parent().parent().children('.answer')
			.css('display', 'block');
		$(this).siblings('.correct')
			.addClass('correct-answer');

		$(this).closest('.question-wrap').next('.show-after').show();
		$(this).closest('.interaction-question').next('.show-after').show();
		$(this).closest('.show-after').next('.show-after').show();
	});

	// NESTED QUESTION - Reset
	$('.show-after').hide();

	// DRAG AND DROP QUESTION - Done
	$('.question-wrap-drag .done_drag').click(function () {
		$(this).closest('.question-wrap-drag').find('.answer').show();
		$(this).closest('.question-wrap-drag').find('.correct').addClass('correct-answer');
		$(this).closest('.question-wrap-drag').next('.show-after').show();
	});
	// DRAG AND DROP QUESTION - Reset
	$('.question-wrap-drag .reset_drag').click(function () {
		$(this).closest('.question-wrap-drag').find('.answer').hide();
		$(this).closest('.question-wrap-drag').find('.correct').removeClass('correct-answer');
		$(this).closest('.question-wrap-drag').next('.show-after').hide();
	});

	// DRAWING QUESTION - Done
	$('.question-wrap-draw .done').click(function () {
		$(this).closest('.question-wrap-draw').find('.answer').show();
		$(this).closest('.question-wrap-draw').find('.correct').addClass('correct-answer');
		$(this).closest('.question-wrap').find('.answer').show();
		$(this).closest('.question-wrap-draw').next('.show-after').show();
	});
	// DRAWING QUESTION - Reset
	$('.question-wrap-draw .reset').click(function () {
		$(this).closest('.question-wrap-draw').find('.answer').hide();
		$(this).closest('.question-wrap-draw').find('.correct').removeClass('correct-answer');
		$(this).closest('.question-wrap').find('.answer').show();
		$(this).closest('.question-wrap-draw').next('.show-after').hide();
	});

});


// ===============================
// Radio Button Image Switcher
// ===============================
$(document).ready(function () {
	$('.radio-image-selector').each(function () {
		$(this).find('.rs-list li input').each(function (r) {
			var inputValue = r;
			$(this).val(r);
		});
		var currentInput = $(this).find('input[type=radio]:checked').val();
		currentInput = parseInt($(this).find(':checked').val());
		//currentInput += -1; used with manual values to begin index @ 1

		$(this).children('.rs-content').children().eq(currentInput).css('display', 'block');

		$(this).on('input[type=radio]').change(function () {
			currentInput = parseInt($(this).find(':checked').val());
			//currentInput += -1; used with manual values to begin index @ 1
			$(this).find('.rs-content').children().css('display', 'none');
			$(this).find('.rs-content').children().eq(currentInput).css('display', 'block');

		});
		var listChildNum = $(this).find('.rs-list').children().length;
		var contentChildNum = $(this).find('.rs-content > *').length;
		if (listChildNum !== contentChildNum) {
			$(this).prepend('<p style="font-weight:bold; font-style:italic; color:red;">Number of radio buttons does NOT match number of content items!</p>');
		}
	});
});


// ===============================
// Collapsible panel icon indicator
// ===============================
$(document).ready(function () {
	function togglePanelIcon(e) {
		$(e.target)
			.prev('.panel-heading')
			.find('.glyphicon')
			.toggleClass('glyphicon-plus-sign glyphicon-minus-sign');
	}
	$('.panel-collapse').on('hidden.bs.collapse', togglePanelIcon);
	$('.panel-collapse').on('shown.bs.collapse', togglePanelIcon);
});


// ===============================
// PRECURSOR INTERACTIONS
// ===============================
$(document).ready(function () {
	// Convert predraw to drawing
	$('.predrawing-question').each(function () {
		$(this).addClass('drawing-question').removeClass('predrawing-question');
	});

	// DRAW INTERACTIONS --
	var backgroundImg;
	var colors = [];
	var brushSizes = [];
	$('.pre-draw').each(function () {
		$(this).prepend('<div class="panel-body"></div>');
		$(this).children('p').wrap('<div></div>');
		$(this).removeClass('pre-draw').addClass('drawing-question');
	});
});