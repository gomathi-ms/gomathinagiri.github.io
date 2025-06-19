function Vk(n, e) {
    for (var t = 0; t < e.length; t++) {
        const i = e[t];
        if (typeof i != "string" && !Array.isArray(i)) {
            for (const r in i)
                if (r !== "default" && !(r in n)) {
                    const s = Object.getOwnPropertyDescriptor(i, r);
                    s && Object.defineProperty(n, r, s.get ? s : {
                        enumerable: !0,
                        get: () => i[r]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, {
        value: "Module"
    }))
}
(function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload"))
        return;
    for (const r of document.querySelectorAll('link[rel="modulepreload"]'))
        i(r);
    new MutationObserver(r => {
        for (const s of r)
            if (s.type === "childList")
                for (const o of s.addedNodes)
                    o.tagName === "LINK" && o.rel === "modulepreload" && i(o)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function t(r) {
        const s = {};
        return r.integrity && (s.integrity = r.integrity),
        r.referrerPolicy && (s.referrerPolicy = r.referrerPolicy),
        r.crossOrigin === "use-credentials" ? s.credentials = "include" : r.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin",
        s
    }
    function i(r) {
        if (r.ep)
            return;
        r.ep = !0;
        const s = t(r);
        fetch(r.href, s)
    }
}
)();
function JT(n) {
    return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n
}
function Wk(n) {
    if (n.__esModule)
        return n;
    var e = n.default;
    if (typeof e == "function") {
        var t = function i() {
            if (this instanceof i) {
                var r = [null];
                r.push.apply(r, arguments);
                var s = Function.bind.apply(e, r);
                return new s
            }
            return e.apply(this, arguments)
        };
        t.prototype = e.prototype
    } else
        t = {};
    return Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    Object.keys(n).forEach(function(i) {
        var r = Object.getOwnPropertyDescriptor(n, i);
        Object.defineProperty(t, i, r.get ? r : {
            enumerable: !0,
            get: function() {
                return n[i]
            }
        })
    }),
    t
}
var tf = {}
  , jk = {
    get exports() {
        return tf
    },
    set exports(n) {
        tf = n
    }
}
  , i0 = {}
  , z = {}
  , Jk = {
    get exports() {
        return z
    },
    set exports(n) {
        z = n
    }
}
  , St = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vf = Symbol.for("react.element")
  , Xk = Symbol.for("react.portal")
  , Kk = Symbol.for("react.fragment")
  , Yk = Symbol.for("react.strict_mode")
  , Qk = Symbol.for("react.profiler")
  , qk = Symbol.for("react.provider")
  , Zk = Symbol.for("react.context")
  , $k = Symbol.for("react.forward_ref")
  , eF = Symbol.for("react.suspense")
  , tF = Symbol.for("react.memo")
  , nF = Symbol.for("react.lazy")
  , pb = Symbol.iterator;
function iF(n) {
    return n === null || typeof n != "object" ? null : (n = pb && n[pb] || n["@@iterator"],
    typeof n == "function" ? n : null)
}
var XT = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , KT = Object.assign
  , YT = {};
function yu(n, e, t) {
    this.props = n,
    this.context = e,
    this.refs = YT,
    this.updater = t || XT
}
yu.prototype.isReactComponent = {};
yu.prototype.setState = function(n, e) {
    if (typeof n != "object" && typeof n != "function" && n != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, n, e, "setState")
}
;
yu.prototype.forceUpdate = function(n) {
    this.updater.enqueueForceUpdate(this, n, "forceUpdate")
}
;
function QT() {}
QT.prototype = yu.prototype;
function e1(n, e, t) {
    this.props = n,
    this.context = e,
    this.refs = YT,
    this.updater = t || XT
}
var t1 = e1.prototype = new QT;
t1.constructor = e1;
KT(t1, yu.prototype);
t1.isPureReactComponent = !0;
var mb = Array.isArray
  , qT = Object.prototype.hasOwnProperty
  , n1 = {
    current: null
}
  , ZT = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function $T(n, e, t) {
    var i, r = {}, s = null, o = null;
    if (e != null)
        for (i in e.ref !== void 0 && (o = e.ref),
        e.key !== void 0 && (s = "" + e.key),
        e)
            qT.call(e, i) && !ZT.hasOwnProperty(i) && (r[i] = e[i]);
    var a = arguments.length - 2;
    if (a === 1)
        r.children = t;
    else if (1 < a) {
        for (var l = Array(a), d = 0; d < a; d++)
            l[d] = arguments[d + 2];
        r.children = l
    }
    if (n && n.defaultProps)
        for (i in a = n.defaultProps,
        a)
            r[i] === void 0 && (r[i] = a[i]);
    return {
        $$typeof: Vf,
        type: n,
        key: s,
        ref: o,
        props: r,
        _owner: n1.current
    }
}
function rF(n, e) {
    return {
        $$typeof: Vf,
        type: n.type,
        key: e,
        ref: n.ref,
        props: n.props,
        _owner: n._owner
    }
}
function i1(n) {
    return typeof n == "object" && n !== null && n.$$typeof === Vf
}
function sF(n) {
    var e = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + n.replace(/[=:]/g, function(t) {
        return e[t]
    })
}
var gb = /\/+/g;
function sv(n, e) {
    return typeof n == "object" && n !== null && n.key != null ? sF("" + n.key) : e.toString(36)
}
function Fm(n, e, t, i, r) {
    var s = typeof n;
    (s === "undefined" || s === "boolean") && (n = null);
    var o = !1;
    if (n === null)
        o = !0;
    else
        switch (s) {
        case "string":
        case "number":
            o = !0;
            break;
        case "object":
            switch (n.$$typeof) {
            case Vf:
            case Xk:
                o = !0
            }
        }
    if (o)
        return o = n,
        r = r(o),
        n = i === "" ? "." + sv(o, 0) : i,
        mb(r) ? (t = "",
        n != null && (t = n.replace(gb, "$&/") + "/"),
        Fm(r, e, t, "", function(d) {
            return d
        })) : r != null && (i1(r) && (r = rF(r, t + (!r.key || o && o.key === r.key ? "" : ("" + r.key).replace(gb, "$&/") + "/") + n)),
        e.push(r)),
        1;
    if (o = 0,
    i = i === "" ? "." : i + ":",
    mb(n))
        for (var a = 0; a < n.length; a++) {
            s = n[a];
            var l = i + sv(s, a);
            o += Fm(s, e, t, l, r)
        }
    else if (l = iF(n),
    typeof l == "function")
        for (n = l.call(n),
        a = 0; !(s = n.next()).done; )
            s = s.value,
            l = i + sv(s, a++),
            o += Fm(s, e, t, l, r);
    else if (s === "object")
        throw e = String(n),
        Error("Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead.");
    return o
}
function Mp(n, e, t) {
    if (n == null)
        return n;
    var i = []
      , r = 0;
    return Fm(n, i, "", "", function(s) {
        return e.call(t, s, r++)
    }),
    i
}
function oF(n) {
    if (n._status === -1) {
        var e = n._result;
        e = e(),
        e.then(function(t) {
            (n._status === 0 || n._status === -1) && (n._status = 1,
            n._result = t)
        }, function(t) {
            (n._status === 0 || n._status === -1) && (n._status = 2,
            n._result = t)
        }),
        n._status === -1 && (n._status = 0,
        n._result = e)
    }
    if (n._status === 1)
        return n._result.default;
    throw n._result
}
var Mi = {
    current: null
}
  , Nm = {
    transition: null
}
  , aF = {
    ReactCurrentDispatcher: Mi,
    ReactCurrentBatchConfig: Nm,
    ReactCurrentOwner: n1
};
St.Children = {
    map: Mp,
    forEach: function(n, e, t) {
        Mp(n, function() {
            e.apply(this, arguments)
        }, t)
    },
    count: function(n) {
        var e = 0;
        return Mp(n, function() {
            e++
        }),
        e
    },
    toArray: function(n) {
        return Mp(n, function(e) {
            return e
        }) || []
    },
    only: function(n) {
        if (!i1(n))
            throw Error("React.Children.only expected to receive a single React element child.");
        return n
    }
};
St.Component = yu;
St.Fragment = Kk;
St.Profiler = Qk;
St.PureComponent = e1;
St.StrictMode = Yk;
St.Suspense = eF;
St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = aF;
St.cloneElement = function(n, e, t) {
    if (n == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + n + ".");
    var i = KT({}, n.props)
      , r = n.key
      , s = n.ref
      , o = n._owner;
    if (e != null) {
        if (e.ref !== void 0 && (s = e.ref,
        o = n1.current),
        e.key !== void 0 && (r = "" + e.key),
        n.type && n.type.defaultProps)
            var a = n.type.defaultProps;
        for (l in e)
            qT.call(e, l) && !ZT.hasOwnProperty(l) && (i[l] = e[l] === void 0 && a !== void 0 ? a[l] : e[l])
    }
    var l = arguments.length - 2;
    if (l === 1)
        i.children = t;
    else if (1 < l) {
        a = Array(l);
        for (var d = 0; d < l; d++)
            a[d] = arguments[d + 2];
        i.children = a
    }
    return {
        $$typeof: Vf,
        type: n.type,
        key: r,
        ref: s,
        props: i,
        _owner: o
    }
}
;
St.createContext = function(n) {
    return n = {
        $$typeof: Zk,
        _currentValue: n,
        _currentValue2: n,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    n.Provider = {
        $$typeof: qk,
        _context: n
    },
    n.Consumer = n
}
;
St.createElement = $T;
St.createFactory = function(n) {
    var e = $T.bind(null, n);
    return e.type = n,
    e
}
;
St.createRef = function() {
    return {
        current: null
    }
}
;
St.forwardRef = function(n) {
    return {
        $$typeof: $k,
        render: n
    }
}
;
St.isValidElement = i1;
St.lazy = function(n) {
    return {
        $$typeof: nF,
        _payload: {
            _status: -1,
            _result: n
        },
        _init: oF
    }
}
;
St.memo = function(n, e) {
    return {
        $$typeof: tF,
        type: n,
        compare: e === void 0 ? null : e
    }
}
;
St.startTransition = function(n) {
    var e = Nm.transition;
    Nm.transition = {};
    try {
        n()
    } finally {
        Nm.transition = e
    }
}
;
St.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.")
}
;
St.useCallback = function(n, e) {
    return Mi.current.useCallback(n, e)
}
;
St.useContext = function(n) {
    return Mi.current.useContext(n)
}
;
St.useDebugValue = function() {}
;
St.useDeferredValue = function(n) {
    return Mi.current.useDeferredValue(n)
}
;
St.useEffect = function(n, e) {
    return Mi.current.useEffect(n, e)
}
;
St.useId = function() {
    return Mi.current.useId()
}
;
St.useImperativeHandle = function(n, e, t) {
    return Mi.current.useImperativeHandle(n, e, t)
}
;
St.useInsertionEffect = function(n, e) {
    return Mi.current.useInsertionEffect(n, e)
}
;
St.useLayoutEffect = function(n, e) {
    return Mi.current.useLayoutEffect(n, e)
}
;
St.useMemo = function(n, e) {
    return Mi.current.useMemo(n, e)
}
;
St.useReducer = function(n, e, t) {
    return Mi.current.useReducer(n, e, t)
}
;
St.useRef = function(n) {
    return Mi.current.useRef(n)
}
;
St.useState = function(n) {
    return Mi.current.useState(n)
}
;
St.useSyncExternalStore = function(n, e, t) {
    return Mi.current.useSyncExternalStore(n, e, t)
}
;
St.useTransition = function() {
    return Mi.current.useTransition()
}
;
St.version = "18.2.0";
(function(n) {
    n.exports = St
}
)(Jk);
const Jr = JT(z)
  , Ox = Vk({
    __proto__: null,
    default: Jr
}, [z]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lF = z
  , cF = Symbol.for("react.element")
  , uF = Symbol.for("react.fragment")
  , dF = Object.prototype.hasOwnProperty
  , fF = lF.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , hF = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function eP(n, e, t) {
    var i, r = {}, s = null, o = null;
    t !== void 0 && (s = "" + t),
    e.key !== void 0 && (s = "" + e.key),
    e.ref !== void 0 && (o = e.ref);
    for (i in e)
        dF.call(e, i) && !hF.hasOwnProperty(i) && (r[i] = e[i]);
    if (n && n.defaultProps)
        for (i in e = n.defaultProps,
        e)
            r[i] === void 0 && (r[i] = e[i]);
    return {
        $$typeof: cF,
        type: n,
        key: s,
        ref: o,
        props: r,
        _owner: fF.current
    }
}
i0.Fragment = uF;
i0.jsx = eP;
i0.jsxs = eP;
(function(n) {
    n.exports = i0
}
)(jk);
const vu = tf.Fragment
  , ee = tf.jsx
  , $e = tf.jsxs;
var Ux = {}
  , sg = {}
  , pF = {
    get exports() {
        return sg
    },
    set exports(n) {
        sg = n
    }
}
  , nr = {}
  , zx = {}
  , mF = {
    get exports() {
        return zx
    },
    set exports(n) {
        zx = n
    }
}
  , tP = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(n) {
    function e(F, V) {
        var K = F.length;
        F.push(V);
        e: for (; 0 < K; ) {
            var se = K - 1 >>> 1
              , j = F[se];
            if (0 < r(j, V))
                F[se] = V,
                F[K] = j,
                K = se;
            else
                break e
        }
    }
    function t(F) {
        return F.length === 0 ? null : F[0]
    }
    function i(F) {
        if (F.length === 0)
            return null;
        var V = F[0]
          , K = F.pop();
        if (K !== V) {
            F[0] = K;
            e: for (var se = 0, j = F.length, re = j >>> 1; se < re; ) {
                var xe = 2 * (se + 1) - 1
                  , Ae = F[xe]
                  , Z = xe + 1
                  , Oe = F[Z];
                if (0 > r(Ae, K))
                    Z < j && 0 > r(Oe, Ae) ? (F[se] = Oe,
                    F[Z] = K,
                    se = Z) : (F[se] = Ae,
                    F[xe] = K,
                    se = xe);
                else if (Z < j && 0 > r(Oe, K))
                    F[se] = Oe,
                    F[Z] = K,
                    se = Z;
                else
                    break e
            }
        }
        return V
    }
    function r(F, V) {
        var K = F.sortIndex - V.sortIndex;
        return K !== 0 ? K : F.id - V.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var s = performance;
        n.unstable_now = function() {
            return s.now()
        }
    } else {
        var o = Date
          , a = o.now();
        n.unstable_now = function() {
            return o.now() - a
        }
    }
    var l = []
      , d = []
      , f = 1
      , h = null
      , p = 3
      , m = !1
      , y = !1
      , v = !1
      , x = typeof setTimeout == "function" ? setTimeout : null
      , w = typeof clearTimeout == "function" ? clearTimeout : null
      , A = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function M(F) {
        for (var V = t(d); V !== null; ) {
            if (V.callback === null)
                i(d);
            else if (V.startTime <= F)
                i(d),
                V.sortIndex = V.expirationTime,
                e(l, V);
            else
                break;
            V = t(d)
        }
    }
    function S(F) {
        if (v = !1,
        M(F),
        !y)
            if (t(l) !== null)
                y = !0,
                ie(E);
            else {
                var V = t(d);
                V !== null && ae(S, V.startTime - F)
            }
    }
    function E(F, V) {
        y = !1,
        v && (v = !1,
        w(C),
        C = -1),
        m = !0;
        var K = p;
        try {
            for (M(V),
            h = t(l); h !== null && (!(h.expirationTime > V) || F && !U()); ) {
                var se = h.callback;
                if (typeof se == "function") {
                    h.callback = null,
                    p = h.priorityLevel;
                    var j = se(h.expirationTime <= V);
                    V = n.unstable_now(),
                    typeof j == "function" ? h.callback = j : h === t(l) && i(l),
                    M(V)
                } else
                    i(l);
                h = t(l)
            }
            if (h !== null)
                var re = !0;
            else {
                var xe = t(d);
                xe !== null && ae(S, xe.startTime - V),
                re = !1
            }
            return re
        } finally {
            h = null,
            p = K,
            m = !1
        }
    }
    var P = !1
      , L = null
      , C = -1
      , B = 5
      , I = -1;
    function U() {
        return !(n.unstable_now() - I < B)
    }
    function $() {
        if (L !== null) {
            var F = n.unstable_now();
            I = F;
            var V = !0;
            try {
                V = L(!0, F)
            } finally {
                V ? W() : (P = !1,
                L = null)
            }
        } else
            P = !1
    }
    var W;
    if (typeof A == "function")
        W = function() {
            A($)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var H = new MessageChannel
          , Y = H.port2;
        H.port1.onmessage = $,
        W = function() {
            Y.postMessage(null)
        }
    } else
        W = function() {
            x($, 0)
        }
        ;
    function ie(F) {
        L = F,
        P || (P = !0,
        W())
    }
    function ae(F, V) {
        C = x(function() {
            F(n.unstable_now())
        }, V)
    }
    n.unstable_IdlePriority = 5,
    n.unstable_ImmediatePriority = 1,
    n.unstable_LowPriority = 4,
    n.unstable_NormalPriority = 3,
    n.unstable_Profiling = null,
    n.unstable_UserBlockingPriority = 2,
    n.unstable_cancelCallback = function(F) {
        F.callback = null
    }
    ,
    n.unstable_continueExecution = function() {
        y || m || (y = !0,
        ie(E))
    }
    ,
    n.unstable_forceFrameRate = function(F) {
        0 > F || 125 < F ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : B = 0 < F ? Math.floor(1e3 / F) : 5
    }
    ,
    n.unstable_getCurrentPriorityLevel = function() {
        return p
    }
    ,
    n.unstable_getFirstCallbackNode = function() {
        return t(l)
    }
    ,
    n.unstable_next = function(F) {
        switch (p) {
        case 1:
        case 2:
        case 3:
            var V = 3;
            break;
        default:
            V = p
        }
        var K = p;
        p = V;
        try {
            return F()
        } finally {
            p = K
        }
    }
    ,
    n.unstable_pauseExecution = function() {}
    ,
    n.unstable_requestPaint = function() {}
    ,
    n.unstable_runWithPriority = function(F, V) {
        switch (F) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            F = 3
        }
        var K = p;
        p = F;
        try {
            return V()
        } finally {
            p = K
        }
    }
    ,
    n.unstable_scheduleCallback = function(F, V, K) {
        var se = n.unstable_now();
        switch (typeof K == "object" && K !== null ? (K = K.delay,
        K = typeof K == "number" && 0 < K ? se + K : se) : K = se,
        F) {
        case 1:
            var j = -1;
            break;
        case 2:
            j = 250;
            break;
        case 5:
            j = 1073741823;
            break;
        case 4:
            j = 1e4;
            break;
        default:
            j = 5e3
        }
        return j = K + j,
        F = {
            id: f++,
            callback: V,
            priorityLevel: F,
            startTime: K,
            expirationTime: j,
            sortIndex: -1
        },
        K > se ? (F.sortIndex = K,
        e(d, F),
        t(l) === null && F === t(d) && (v ? (w(C),
        C = -1) : v = !0,
        ae(S, K - se))) : (F.sortIndex = j,
        e(l, F),
        y || m || (y = !0,
        ie(E))),
        F
    }
    ,
    n.unstable_shouldYield = U,
    n.unstable_wrapCallback = function(F) {
        var V = p;
        return function() {
            var K = p;
            p = V;
            try {
                return F.apply(this, arguments)
            } finally {
                p = K
            }
        }
    }
}
)(tP);
(function(n) {
    n.exports = tP
}
)(mF);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nP = z
  , Zi = zx;
function be(n) {
    for (var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, t = 1; t < arguments.length; t++)
        e += "&args[]=" + encodeURIComponent(arguments[t]);
    return "Minified React error #" + n + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var iP = new Set
  , nf = {};
function El(n, e) {
    Qc(n, e),
    Qc(n + "Capture", e)
}
function Qc(n, e) {
    for (nf[n] = e,
    n = 0; n < e.length; n++)
        iP.add(e[n])
}
var ro = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , Gx = Object.prototype.hasOwnProperty
  , gF = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , yb = {}
  , vb = {};
function yF(n) {
    return Gx.call(vb, n) ? !0 : Gx.call(yb, n) ? !1 : gF.test(n) ? vb[n] = !0 : (yb[n] = !0,
    !1)
}
function vF(n, e, t, i) {
    if (t !== null && t.type === 0)
        return !1;
    switch (typeof e) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return i ? !1 : t !== null ? !t.acceptsBooleans : (n = n.toLowerCase().slice(0, 5),
        n !== "data-" && n !== "aria-");
    default:
        return !1
    }
}
function xF(n, e, t, i) {
    if (e === null || typeof e > "u" || vF(n, e, t, i))
        return !0;
    if (i)
        return !1;
    if (t !== null)
        switch (t.type) {
        case 3:
            return !e;
        case 4:
            return e === !1;
        case 5:
            return isNaN(e);
        case 6:
            return isNaN(e) || 1 > e
        }
    return !1
}
function Si(n, e, t, i, r, s, o) {
    this.acceptsBooleans = e === 2 || e === 3 || e === 4,
    this.attributeName = i,
    this.attributeNamespace = r,
    this.mustUseProperty = t,
    this.propertyName = n,
    this.type = e,
    this.sanitizeURL = s,
    this.removeEmptyString = o
}
var Zn = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    Zn[n] = new Si(n,0,!1,n,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var e = n[0];
    Zn[e] = new Si(e,1,!1,n[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    Zn[n] = new Si(n,2,!1,n.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    Zn[n] = new Si(n,2,!1,n,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    Zn[n] = new Si(n,3,!1,n.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(n) {
    Zn[n] = new Si(n,3,!0,n,null,!1,!1)
});
["capture", "download"].forEach(function(n) {
    Zn[n] = new Si(n,4,!1,n,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(n) {
    Zn[n] = new Si(n,6,!1,n,null,!1,!1)
});
["rowSpan", "start"].forEach(function(n) {
    Zn[n] = new Si(n,5,!1,n.toLowerCase(),null,!1,!1)
});
var r1 = /[\-:]([a-z])/g;
function s1(n) {
    return n[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var e = n.replace(r1, s1);
    Zn[e] = new Si(e,1,!1,n,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var e = n.replace(r1, s1);
    Zn[e] = new Si(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var e = n.replace(r1, s1);
    Zn[e] = new Si(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(n) {
    Zn[n] = new Si(n,1,!1,n.toLowerCase(),null,!1,!1)
});
Zn.xlinkHref = new Si("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(n) {
    Zn[n] = new Si(n,1,!1,n.toLowerCase(),null,!0,!0)
});
function o1(n, e, t, i) {
    var r = Zn.hasOwnProperty(e) ? Zn[e] : null;
    (r !== null ? r.type !== 0 : i || !(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N") && (xF(e, t, r, i) && (t = null),
    i || r === null ? yF(e) && (t === null ? n.removeAttribute(e) : n.setAttribute(e, "" + t)) : r.mustUseProperty ? n[r.propertyName] = t === null ? r.type === 3 ? !1 : "" : t : (e = r.attributeName,
    i = r.attributeNamespace,
    t === null ? n.removeAttribute(e) : (r = r.type,
    t = r === 3 || r === 4 && t === !0 ? "" : "" + t,
    i ? n.setAttributeNS(i, e, t) : n.setAttribute(e, t))))
}
var fo = nP.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , Sp = Symbol.for("react.element")
  , wc = Symbol.for("react.portal")
  , Ac = Symbol.for("react.fragment")
  , a1 = Symbol.for("react.strict_mode")
  , Hx = Symbol.for("react.profiler")
  , rP = Symbol.for("react.provider")
  , sP = Symbol.for("react.context")
  , l1 = Symbol.for("react.forward_ref")
  , Vx = Symbol.for("react.suspense")
  , Wx = Symbol.for("react.suspense_list")
  , c1 = Symbol.for("react.memo")
  , Do = Symbol.for("react.lazy")
  , oP = Symbol.for("react.offscreen")
  , xb = Symbol.iterator;
function ed(n) {
    return n === null || typeof n != "object" ? null : (n = xb && n[xb] || n["@@iterator"],
    typeof n == "function" ? n : null)
}
var un = Object.assign, ov;
function Bd(n) {
    if (ov === void 0)
        try {
            throw Error()
        } catch (t) {
            var e = t.stack.trim().match(/\n( *(at )?)/);
            ov = e && e[1] || ""
        }
    return `
` + ov + n
}
var av = !1;
function lv(n, e) {
    if (!n || av)
        return "";
    av = !0;
    var t = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (e)
            if (e = function() {
                throw Error()
            }
            ,
            Object.defineProperty(e.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(e, [])
                } catch (d) {
                    var i = d
                }
                Reflect.construct(n, [], e)
            } else {
                try {
                    e.call()
                } catch (d) {
                    i = d
                }
                n.call(e.prototype)
            }
        else {
            try {
                throw Error()
            } catch (d) {
                i = d
            }
            n()
        }
    } catch (d) {
        if (d && i && typeof d.stack == "string") {
            for (var r = d.stack.split(`
`), s = i.stack.split(`
`), o = r.length - 1, a = s.length - 1; 1 <= o && 0 <= a && r[o] !== s[a]; )
                a--;
            for (; 1 <= o && 0 <= a; o--,
            a--)
                if (r[o] !== s[a]) {
                    if (o !== 1 || a !== 1)
                        do
                            if (o--,
                            a--,
                            0 > a || r[o] !== s[a]) {
                                var l = `
` + r[o].replace(" at new ", " at ");
                                return n.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", n.displayName)),
                                l
                            }
                        while (1 <= o && 0 <= a);
                    break
                }
        }
    } finally {
        av = !1,
        Error.prepareStackTrace = t
    }
    return (n = n ? n.displayName || n.name : "") ? Bd(n) : ""
}
function wF(n) {
    switch (n.tag) {
    case 5:
        return Bd(n.type);
    case 16:
        return Bd("Lazy");
    case 13:
        return Bd("Suspense");
    case 19:
        return Bd("SuspenseList");
    case 0:
    case 2:
    case 15:
        return n = lv(n.type, !1),
        n;
    case 11:
        return n = lv(n.type.render, !1),
        n;
    case 1:
        return n = lv(n.type, !0),
        n;
    default:
        return ""
    }
}
function jx(n) {
    if (n == null)
        return null;
    if (typeof n == "function")
        return n.displayName || n.name || null;
    if (typeof n == "string")
        return n;
    switch (n) {
    case Ac:
        return "Fragment";
    case wc:
        return "Portal";
    case Hx:
        return "Profiler";
    case a1:
        return "StrictMode";
    case Vx:
        return "Suspense";
    case Wx:
        return "SuspenseList"
    }
    if (typeof n == "object")
        switch (n.$$typeof) {
        case sP:
            return (n.displayName || "Context") + ".Consumer";
        case rP:
            return (n._context.displayName || "Context") + ".Provider";
        case l1:
            var e = n.render;
            return n = n.displayName,
            n || (n = e.displayName || e.name || "",
            n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"),
            n;
        case c1:
            return e = n.displayName || null,
            e !== null ? e : jx(n.type) || "Memo";
        case Do:
            e = n._payload,
            n = n._init;
            try {
                return jx(n(e))
            } catch {}
        }
    return null
}
function AF(n) {
    var e = n.type;
    switch (n.tag) {
    case 24:
        return "Cache";
    case 9:
        return (e.displayName || "Context") + ".Consumer";
    case 10:
        return (e._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return n = e.render,
        n = n.displayName || n.name || "",
        e.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return e;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return jx(e);
    case 8:
        return e === a1 ? "StrictMode" : "Mode";
    case 22:
        return "Offscreen";
    case 12:
        return "Profiler";
    case 21:
        return "Scope";
    case 13:
        return "Suspense";
    case 19:
        return "SuspenseList";
    case 25:
        return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof e == "function")
            return e.displayName || e.name || null;
        if (typeof e == "string")
            return e
    }
    return null
}
function ia(n) {
    switch (typeof n) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return n;
    case "object":
        return n;
    default:
        return ""
    }
}
function aP(n) {
    var e = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (e === "checkbox" || e === "radio")
}
function _F(n) {
    var e = aP(n) ? "checked" : "value"
      , t = Object.getOwnPropertyDescriptor(n.constructor.prototype, e)
      , i = "" + n[e];
    if (!n.hasOwnProperty(e) && typeof t < "u" && typeof t.get == "function" && typeof t.set == "function") {
        var r = t.get
          , s = t.set;
        return Object.defineProperty(n, e, {
            configurable: !0,
            get: function() {
                return r.call(this)
            },
            set: function(o) {
                i = "" + o,
                s.call(this, o)
            }
        }),
        Object.defineProperty(n, e, {
            enumerable: t.enumerable
        }),
        {
            getValue: function() {
                return i
            },
            setValue: function(o) {
                i = "" + o
            },
            stopTracking: function() {
                n._valueTracker = null,
                delete n[e]
            }
        }
    }
}
function bp(n) {
    n._valueTracker || (n._valueTracker = _F(n))
}
function lP(n) {
    if (!n)
        return !1;
    var e = n._valueTracker;
    if (!e)
        return !0;
    var t = e.getValue()
      , i = "";
    return n && (i = aP(n) ? n.checked ? "true" : "false" : n.value),
    n = i,
    n !== t ? (e.setValue(n),
    !0) : !1
}
function og(n) {
    if (n = n || (typeof document < "u" ? document : void 0),
    typeof n > "u")
        return null;
    try {
        return n.activeElement || n.body
    } catch {
        return n.body
    }
}
function Jx(n, e) {
    var t = e.checked;
    return un({}, e, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: t ?? n._wrapperState.initialChecked
    })
}
function wb(n, e) {
    var t = e.defaultValue == null ? "" : e.defaultValue
      , i = e.checked != null ? e.checked : e.defaultChecked;
    t = ia(e.value != null ? e.value : t),
    n._wrapperState = {
        initialChecked: i,
        initialValue: t,
        controlled: e.type === "checkbox" || e.type === "radio" ? e.checked != null : e.value != null
    }
}
function cP(n, e) {
    e = e.checked,
    e != null && o1(n, "checked", e, !1)
}
function Xx(n, e) {
    cP(n, e);
    var t = ia(e.value)
      , i = e.type;
    if (t != null)
        i === "number" ? (t === 0 && n.value === "" || n.value != t) && (n.value = "" + t) : n.value !== "" + t && (n.value = "" + t);
    else if (i === "submit" || i === "reset") {
        n.removeAttribute("value");
        return
    }
    e.hasOwnProperty("value") ? Kx(n, e.type, t) : e.hasOwnProperty("defaultValue") && Kx(n, e.type, ia(e.defaultValue)),
    e.checked == null && e.defaultChecked != null && (n.defaultChecked = !!e.defaultChecked)
}
function Ab(n, e, t) {
    if (e.hasOwnProperty("value") || e.hasOwnProperty("defaultValue")) {
        var i = e.type;
        if (!(i !== "submit" && i !== "reset" || e.value !== void 0 && e.value !== null))
            return;
        e = "" + n._wrapperState.initialValue,
        t || e === n.value || (n.value = e),
        n.defaultValue = e
    }
    t = n.name,
    t !== "" && (n.name = ""),
    n.defaultChecked = !!n._wrapperState.initialChecked,
    t !== "" && (n.name = t)
}
function Kx(n, e, t) {
    (e !== "number" || og(n.ownerDocument) !== n) && (t == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + t && (n.defaultValue = "" + t))
}
var Ld = Array.isArray;
function Uc(n, e, t, i) {
    if (n = n.options,
    e) {
        e = {};
        for (var r = 0; r < t.length; r++)
            e["$" + t[r]] = !0;
        for (t = 0; t < n.length; t++)
            r = e.hasOwnProperty("$" + n[t].value),
            n[t].selected !== r && (n[t].selected = r),
            r && i && (n[t].defaultSelected = !0)
    } else {
        for (t = "" + ia(t),
        e = null,
        r = 0; r < n.length; r++) {
            if (n[r].value === t) {
                n[r].selected = !0,
                i && (n[r].defaultSelected = !0);
                return
            }
            e !== null || n[r].disabled || (e = n[r])
        }
        e !== null && (e.selected = !0)
    }
}
function Yx(n, e) {
    if (e.dangerouslySetInnerHTML != null)
        throw Error(be(91));
    return un({}, e, {
        value: void 0,
        defaultValue: void 0,
        children: "" + n._wrapperState.initialValue
    })
}
function _b(n, e) {
    var t = e.value;
    if (t == null) {
        if (t = e.children,
        e = e.defaultValue,
        t != null) {
            if (e != null)
                throw Error(be(92));
            if (Ld(t)) {
                if (1 < t.length)
                    throw Error(be(93));
                t = t[0]
            }
            e = t
        }
        e == null && (e = ""),
        t = e
    }
    n._wrapperState = {
        initialValue: ia(t)
    }
}
function uP(n, e) {
    var t = ia(e.value)
      , i = ia(e.defaultValue);
    t != null && (t = "" + t,
    t !== n.value && (n.value = t),
    e.defaultValue == null && n.defaultValue !== t && (n.defaultValue = t)),
    i != null && (n.defaultValue = "" + i)
}
function Mb(n) {
    var e = n.textContent;
    e === n._wrapperState.initialValue && e !== "" && e !== null && (n.value = e)
}
function dP(n) {
    switch (n) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function Qx(n, e) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? dP(e) : n === "http://www.w3.org/2000/svg" && e === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n
}
var Cp, fP = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(e, t, i, r) {
        MSApp.execUnsafeLocalFunction(function() {
            return n(e, t, i, r)
        })
    }
    : n
}(function(n, e) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in n)
        n.innerHTML = e;
    else {
        for (Cp = Cp || document.createElement("div"),
        Cp.innerHTML = "<svg>" + e.valueOf().toString() + "</svg>",
        e = Cp.firstChild; n.firstChild; )
            n.removeChild(n.firstChild);
        for (; e.firstChild; )
            n.appendChild(e.firstChild)
    }
});
function rf(n, e) {
    if (e) {
        var t = n.firstChild;
        if (t && t === n.lastChild && t.nodeType === 3) {
            t.nodeValue = e;
            return
        }
    }
    n.textContent = e
}
var Fd = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
  , MF = ["Webkit", "ms", "Moz", "O"];
Object.keys(Fd).forEach(function(n) {
    MF.forEach(function(e) {
        e = e + n.charAt(0).toUpperCase() + n.substring(1),
        Fd[e] = Fd[n]
    })
});
function hP(n, e, t) {
    return e == null || typeof e == "boolean" || e === "" ? "" : t || typeof e != "number" || e === 0 || Fd.hasOwnProperty(n) && Fd[n] ? ("" + e).trim() : e + "px"
}
function pP(n, e) {
    n = n.style;
    for (var t in e)
        if (e.hasOwnProperty(t)) {
            var i = t.indexOf("--") === 0
              , r = hP(t, e[t], i);
            t === "float" && (t = "cssFloat"),
            i ? n.setProperty(t, r) : n[t] = r
        }
}
var SF = un({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function qx(n, e) {
    if (e) {
        if (SF[n] && (e.children != null || e.dangerouslySetInnerHTML != null))
            throw Error(be(137, n));
        if (e.dangerouslySetInnerHTML != null) {
            if (e.children != null)
                throw Error(be(60));
            if (typeof e.dangerouslySetInnerHTML != "object" || !("__html"in e.dangerouslySetInnerHTML))
                throw Error(be(61))
        }
        if (e.style != null && typeof e.style != "object")
            throw Error(be(62))
    }
}
function Zx(n, e) {
    if (n.indexOf("-") === -1)
        return typeof e.is == "string";
    switch (n) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
        return !1;
    default:
        return !0
    }
}
var $x = null;
function u1(n) {
    return n = n.target || n.srcElement || window,
    n.correspondingUseElement && (n = n.correspondingUseElement),
    n.nodeType === 3 ? n.parentNode : n
}
var ew = null
  , zc = null
  , Gc = null;
function Sb(n) {
    if (n = Jf(n)) {
        if (typeof ew != "function")
            throw Error(be(280));
        var e = n.stateNode;
        e && (e = l0(e),
        ew(n.stateNode, n.type, e))
    }
}
function mP(n) {
    zc ? Gc ? Gc.push(n) : Gc = [n] : zc = n
}
function gP() {
    if (zc) {
        var n = zc
          , e = Gc;
        if (Gc = zc = null,
        Sb(n),
        e)
            for (n = 0; n < e.length; n++)
                Sb(e[n])
    }
}
function yP(n, e) {
    return n(e)
}
function vP() {}
var cv = !1;
function xP(n, e, t) {
    if (cv)
        return n(e, t);
    cv = !0;
    try {
        return yP(n, e, t)
    } finally {
        cv = !1,
        (zc !== null || Gc !== null) && (vP(),
        gP())
    }
}
function sf(n, e) {
    var t = n.stateNode;
    if (t === null)
        return null;
    var i = l0(t);
    if (i === null)
        return null;
    t = i[e];
    e: switch (e) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
        (i = !i.disabled) || (n = n.type,
        i = !(n === "button" || n === "input" || n === "select" || n === "textarea")),
        n = !i;
        break e;
    default:
        n = !1
    }
    if (n)
        return null;
    if (t && typeof t != "function")
        throw Error(be(231, e, typeof t));
    return t
}
var tw = !1;
if (ro)
    try {
        var td = {};
        Object.defineProperty(td, "passive", {
            get: function() {
                tw = !0
            }
        }),
        window.addEventListener("test", td, td),
        window.removeEventListener("test", td, td)
    } catch {
        tw = !1
    }
function bF(n, e, t, i, r, s, o, a, l) {
    var d = Array.prototype.slice.call(arguments, 3);
    try {
        e.apply(t, d)
    } catch (f) {
        this.onError(f)
    }
}
var Nd = !1
  , ag = null
  , lg = !1
  , nw = null
  , CF = {
    onError: function(n) {
        Nd = !0,
        ag = n
    }
};
function EF(n, e, t, i, r, s, o, a, l) {
    Nd = !1,
    ag = null,
    bF.apply(CF, arguments)
}
function TF(n, e, t, i, r, s, o, a, l) {
    if (EF.apply(this, arguments),
    Nd) {
        if (Nd) {
            var d = ag;
            Nd = !1,
            ag = null
        } else
            throw Error(be(198));
        lg || (lg = !0,
        nw = d)
    }
}
function Tl(n) {
    var e = n
      , t = n;
    if (n.alternate)
        for (; e.return; )
            e = e.return;
    else {
        n = e;
        do
            e = n,
            e.flags & 4098 && (t = e.return),
            n = e.return;
        while (n)
    }
    return e.tag === 3 ? t : null
}
function wP(n) {
    if (n.tag === 13) {
        var e = n.memoizedState;
        if (e === null && (n = n.alternate,
        n !== null && (e = n.memoizedState)),
        e !== null)
            return e.dehydrated
    }
    return null
}
function bb(n) {
    if (Tl(n) !== n)
        throw Error(be(188))
}
function PF(n) {
    var e = n.alternate;
    if (!e) {
        if (e = Tl(n),
        e === null)
            throw Error(be(188));
        return e !== n ? null : n
    }
    for (var t = n, i = e; ; ) {
        var r = t.return;
        if (r === null)
            break;
        var s = r.alternate;
        if (s === null) {
            if (i = r.return,
            i !== null) {
                t = i;
                continue
            }
            break
        }
        if (r.child === s.child) {
            for (s = r.child; s; ) {
                if (s === t)
                    return bb(r),
                    n;
                if (s === i)
                    return bb(r),
                    e;
                s = s.sibling
            }
            throw Error(be(188))
        }
        if (t.return !== i.return)
            t = r,
            i = s;
        else {
            for (var o = !1, a = r.child; a; ) {
                if (a === t) {
                    o = !0,
                    t = r,
                    i = s;
                    break
                }
                if (a === i) {
                    o = !0,
                    i = r,
                    t = s;
                    break
                }
                a = a.sibling
            }
            if (!o) {
                for (a = s.child; a; ) {
                    if (a === t) {
                        o = !0,
                        t = s,
                        i = r;
                        break
                    }
                    if (a === i) {
                        o = !0,
                        i = s,
                        t = r;
                        break
                    }
                    a = a.sibling
                }
                if (!o)
                    throw Error(be(189))
            }
        }
        if (t.alternate !== i)
            throw Error(be(190))
    }
    if (t.tag !== 3)
        throw Error(be(188));
    return t.stateNode.current === t ? n : e
}
function AP(n) {
    return n = PF(n),
    n !== null ? _P(n) : null
}
function _P(n) {
    if (n.tag === 5 || n.tag === 6)
        return n;
    for (n = n.child; n !== null; ) {
        var e = _P(n);
        if (e !== null)
            return e;
        n = n.sibling
    }
    return null
}
var MP = Zi.unstable_scheduleCallback
  , Cb = Zi.unstable_cancelCallback
  , BF = Zi.unstable_shouldYield
  , LF = Zi.unstable_requestPaint
  , An = Zi.unstable_now
  , RF = Zi.unstable_getCurrentPriorityLevel
  , d1 = Zi.unstable_ImmediatePriority
  , SP = Zi.unstable_UserBlockingPriority
  , cg = Zi.unstable_NormalPriority
  , IF = Zi.unstable_LowPriority
  , bP = Zi.unstable_IdlePriority
  , r0 = null
  , gs = null;
function DF(n) {
    if (gs && typeof gs.onCommitFiberRoot == "function")
        try {
            gs.onCommitFiberRoot(r0, n, void 0, (n.current.flags & 128) === 128)
        } catch {}
}
var Xr = Math.clz32 ? Math.clz32 : NF
  , kF = Math.log
  , FF = Math.LN2;
function NF(n) {
    return n >>>= 0,
    n === 0 ? 32 : 31 - (kF(n) / FF | 0) | 0
}
var Ep = 64
  , Tp = 4194304;
function Rd(n) {
    switch (n & -n) {
    case 1:
        return 1;
    case 2:
        return 2;
    case 4:
        return 4;
    case 8:
        return 8;
    case 16:
        return 16;
    case 32:
        return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return n & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return n & 130023424;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return n
    }
}
function ug(n, e) {
    var t = n.pendingLanes;
    if (t === 0)
        return 0;
    var i = 0
      , r = n.suspendedLanes
      , s = n.pingedLanes
      , o = t & 268435455;
    if (o !== 0) {
        var a = o & ~r;
        a !== 0 ? i = Rd(a) : (s &= o,
        s !== 0 && (i = Rd(s)))
    } else
        o = t & ~r,
        o !== 0 ? i = Rd(o) : s !== 0 && (i = Rd(s));
    if (i === 0)
        return 0;
    if (e !== 0 && e !== i && !(e & r) && (r = i & -i,
    s = e & -e,
    r >= s || r === 16 && (s & 4194240) !== 0))
        return e;
    if (i & 4 && (i |= t & 16),
    e = n.entangledLanes,
    e !== 0)
        for (n = n.entanglements,
        e &= i; 0 < e; )
            t = 31 - Xr(e),
            r = 1 << t,
            i |= n[t],
            e &= ~r;
    return i
}
function OF(n, e) {
    switch (n) {
    case 1:
    case 2:
    case 4:
        return e + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return e + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
        return -1;
    default:
        return -1
    }
}
function UF(n, e) {
    for (var t = n.suspendedLanes, i = n.pingedLanes, r = n.expirationTimes, s = n.pendingLanes; 0 < s; ) {
        var o = 31 - Xr(s)
          , a = 1 << o
          , l = r[o];
        l === -1 ? (!(a & t) || a & i) && (r[o] = OF(a, e)) : l <= e && (n.expiredLanes |= a),
        s &= ~a
    }
}
function iw(n) {
    return n = n.pendingLanes & -1073741825,
    n !== 0 ? n : n & 1073741824 ? 1073741824 : 0
}
function CP() {
    var n = Ep;
    return Ep <<= 1,
    !(Ep & 4194240) && (Ep = 64),
    n
}
function uv(n) {
    for (var e = [], t = 0; 31 > t; t++)
        e.push(n);
    return e
}
function Wf(n, e, t) {
    n.pendingLanes |= e,
    e !== 536870912 && (n.suspendedLanes = 0,
    n.pingedLanes = 0),
    n = n.eventTimes,
    e = 31 - Xr(e),
    n[e] = t
}
function zF(n, e) {
    var t = n.pendingLanes & ~e;
    n.pendingLanes = e,
    n.suspendedLanes = 0,
    n.pingedLanes = 0,
    n.expiredLanes &= e,
    n.mutableReadLanes &= e,
    n.entangledLanes &= e,
    e = n.entanglements;
    var i = n.eventTimes;
    for (n = n.expirationTimes; 0 < t; ) {
        var r = 31 - Xr(t)
          , s = 1 << r;
        e[r] = 0,
        i[r] = -1,
        n[r] = -1,
        t &= ~s
    }
}
function f1(n, e) {
    var t = n.entangledLanes |= e;
    for (n = n.entanglements; t; ) {
        var i = 31 - Xr(t)
          , r = 1 << i;
        r & e | n[i] & e && (n[i] |= e),
        t &= ~r
    }
}
var Gt = 0;
function EP(n) {
    return n &= -n,
    1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1
}
var TP, h1, PP, BP, LP, rw = !1, Pp = [], Jo = null, Xo = null, Ko = null, of = new Map, af = new Map, Oo = [], GF = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Eb(n, e) {
    switch (n) {
    case "focusin":
    case "focusout":
        Jo = null;
        break;
    case "dragenter":
    case "dragleave":
        Xo = null;
        break;
    case "mouseover":
    case "mouseout":
        Ko = null;
        break;
    case "pointerover":
    case "pointerout":
        of.delete(e.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        af.delete(e.pointerId)
    }
}
function nd(n, e, t, i, r, s) {
    return n === null || n.nativeEvent !== s ? (n = {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: i,
        nativeEvent: s,
        targetContainers: [r]
    },
    e !== null && (e = Jf(e),
    e !== null && h1(e)),
    n) : (n.eventSystemFlags |= i,
    e = n.targetContainers,
    r !== null && e.indexOf(r) === -1 && e.push(r),
    n)
}
function HF(n, e, t, i, r) {
    switch (e) {
    case "focusin":
        return Jo = nd(Jo, n, e, t, i, r),
        !0;
    case "dragenter":
        return Xo = nd(Xo, n, e, t, i, r),
        !0;
    case "mouseover":
        return Ko = nd(Ko, n, e, t, i, r),
        !0;
    case "pointerover":
        var s = r.pointerId;
        return of.set(s, nd(of.get(s) || null, n, e, t, i, r)),
        !0;
    case "gotpointercapture":
        return s = r.pointerId,
        af.set(s, nd(af.get(s) || null, n, e, t, i, r)),
        !0
    }
    return !1
}
function RP(n) {
    var e = qa(n.target);
    if (e !== null) {
        var t = Tl(e);
        if (t !== null) {
            if (e = t.tag,
            e === 13) {
                if (e = wP(t),
                e !== null) {
                    n.blockedOn = e,
                    LP(n.priority, function() {
                        PP(t)
                    });
                    return
                }
            } else if (e === 3 && t.stateNode.current.memoizedState.isDehydrated) {
                n.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
                return
            }
        }
    }
    n.blockedOn = null
}
function Om(n) {
    if (n.blockedOn !== null)
        return !1;
    for (var e = n.targetContainers; 0 < e.length; ) {
        var t = sw(n.domEventName, n.eventSystemFlags, e[0], n.nativeEvent);
        if (t === null) {
            t = n.nativeEvent;
            var i = new t.constructor(t.type,t);
            $x = i,
            t.target.dispatchEvent(i),
            $x = null
        } else
            return e = Jf(t),
            e !== null && h1(e),
            n.blockedOn = t,
            !1;
        e.shift()
    }
    return !0
}
function Tb(n, e, t) {
    Om(n) && t.delete(e)
}
function VF() {
    rw = !1,
    Jo !== null && Om(Jo) && (Jo = null),
    Xo !== null && Om(Xo) && (Xo = null),
    Ko !== null && Om(Ko) && (Ko = null),
    of.forEach(Tb),
    af.forEach(Tb)
}
function id(n, e) {
    n.blockedOn === e && (n.blockedOn = null,
    rw || (rw = !0,
    Zi.unstable_scheduleCallback(Zi.unstable_NormalPriority, VF)))
}
function lf(n) {
    function e(r) {
        return id(r, n)
    }
    if (0 < Pp.length) {
        id(Pp[0], n);
        for (var t = 1; t < Pp.length; t++) {
            var i = Pp[t];
            i.blockedOn === n && (i.blockedOn = null)
        }
    }
    for (Jo !== null && id(Jo, n),
    Xo !== null && id(Xo, n),
    Ko !== null && id(Ko, n),
    of.forEach(e),
    af.forEach(e),
    t = 0; t < Oo.length; t++)
        i = Oo[t],
        i.blockedOn === n && (i.blockedOn = null);
    for (; 0 < Oo.length && (t = Oo[0],
    t.blockedOn === null); )
        RP(t),
        t.blockedOn === null && Oo.shift()
}
var Hc = fo.ReactCurrentBatchConfig
  , dg = !0;
function WF(n, e, t, i) {
    var r = Gt
      , s = Hc.transition;
    Hc.transition = null;
    try {
        Gt = 1,
        p1(n, e, t, i)
    } finally {
        Gt = r,
        Hc.transition = s
    }
}
function jF(n, e, t, i) {
    var r = Gt
      , s = Hc.transition;
    Hc.transition = null;
    try {
        Gt = 4,
        p1(n, e, t, i)
    } finally {
        Gt = r,
        Hc.transition = s
    }
}
function p1(n, e, t, i) {
    if (dg) {
        var r = sw(n, e, t, i);
        if (r === null)
            wv(n, e, i, fg, t),
            Eb(n, i);
        else if (HF(r, n, e, t, i))
            i.stopPropagation();
        else if (Eb(n, i),
        e & 4 && -1 < GF.indexOf(n)) {
            for (; r !== null; ) {
                var s = Jf(r);
                if (s !== null && TP(s),
                s = sw(n, e, t, i),
                s === null && wv(n, e, i, fg, t),
                s === r)
                    break;
                r = s
            }
            r !== null && i.stopPropagation()
        } else
            wv(n, e, i, null, t)
    }
}
var fg = null;
function sw(n, e, t, i) {
    if (fg = null,
    n = u1(i),
    n = qa(n),
    n !== null)
        if (e = Tl(n),
        e === null)
            n = null;
        else if (t = e.tag,
        t === 13) {
            if (n = wP(e),
            n !== null)
                return n;
            n = null
        } else if (t === 3) {
            if (e.stateNode.current.memoizedState.isDehydrated)
                return e.tag === 3 ? e.stateNode.containerInfo : null;
            n = null
        } else
            e !== n && (n = null);
    return fg = n,
    null
}
function IP(n) {
    switch (n) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
        return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
        return 4;
    case "message":
        switch (RF()) {
        case d1:
            return 1;
        case SP:
            return 4;
        case cg:
        case IF:
            return 16;
        case bP:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var zo = null
  , m1 = null
  , Um = null;
function DP() {
    if (Um)
        return Um;
    var n, e = m1, t = e.length, i, r = "value"in zo ? zo.value : zo.textContent, s = r.length;
    for (n = 0; n < t && e[n] === r[n]; n++)
        ;
    var o = t - n;
    for (i = 1; i <= o && e[t - i] === r[s - i]; i++)
        ;
    return Um = r.slice(n, 1 < i ? 1 - i : void 0)
}
function zm(n) {
    var e = n.keyCode;
    return "charCode"in n ? (n = n.charCode,
    n === 0 && e === 13 && (n = 13)) : n = e,
    n === 10 && (n = 13),
    32 <= n || n === 13 ? n : 0
}
function Bp() {
    return !0
}
function Pb() {
    return !1
}
function ir(n) {
    function e(t, i, r, s, o) {
        this._reactName = t,
        this._targetInst = r,
        this.type = i,
        this.nativeEvent = s,
        this.target = o,
        this.currentTarget = null;
        for (var a in n)
            n.hasOwnProperty(a) && (t = n[a],
            this[a] = t ? t(s) : s[a]);
        return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? Bp : Pb,
        this.isPropagationStopped = Pb,
        this
    }
    return un(e.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var t = this.nativeEvent;
            t && (t.preventDefault ? t.preventDefault() : typeof t.returnValue != "unknown" && (t.returnValue = !1),
            this.isDefaultPrevented = Bp)
        },
        stopPropagation: function() {
            var t = this.nativeEvent;
            t && (t.stopPropagation ? t.stopPropagation() : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0),
            this.isPropagationStopped = Bp)
        },
        persist: function() {},
        isPersistent: Bp
    }),
    e
}
var xu = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(n) {
        return n.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, g1 = ir(xu), jf = un({}, xu, {
    view: 0,
    detail: 0
}), JF = ir(jf), dv, fv, rd, s0 = un({}, jf, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: y1,
    button: 0,
    buttons: 0,
    relatedTarget: function(n) {
        return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget
    },
    movementX: function(n) {
        return "movementX"in n ? n.movementX : (n !== rd && (rd && n.type === "mousemove" ? (dv = n.screenX - rd.screenX,
        fv = n.screenY - rd.screenY) : fv = dv = 0,
        rd = n),
        dv)
    },
    movementY: function(n) {
        return "movementY"in n ? n.movementY : fv
    }
}), Bb = ir(s0), XF = un({}, s0, {
    dataTransfer: 0
}), KF = ir(XF), YF = un({}, jf, {
    relatedTarget: 0
}), hv = ir(YF), QF = un({}, xu, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), qF = ir(QF), ZF = un({}, xu, {
    clipboardData: function(n) {
        return "clipboardData"in n ? n.clipboardData : window.clipboardData
    }
}), $F = ir(ZF), eN = un({}, xu, {
    data: 0
}), Lb = ir(eN), tN = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}, nN = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}, iN = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function rN(n) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(n) : (n = iN[n]) ? !!e[n] : !1
}
function y1() {
    return rN
}
var sN = un({}, jf, {
    key: function(n) {
        if (n.key) {
            var e = tN[n.key] || n.key;
            if (e !== "Unidentified")
                return e
        }
        return n.type === "keypress" ? (n = zm(n),
        n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? nN[n.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: y1,
    charCode: function(n) {
        return n.type === "keypress" ? zm(n) : 0
    },
    keyCode: function(n) {
        return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0
    },
    which: function(n) {
        return n.type === "keypress" ? zm(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0
    }
})
  , oN = ir(sN)
  , aN = un({}, s0, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
})
  , Rb = ir(aN)
  , lN = un({}, jf, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: y1
})
  , cN = ir(lN)
  , uN = un({}, xu, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , dN = ir(uN)
  , fN = un({}, s0, {
    deltaX: function(n) {
        return "deltaX"in n ? n.deltaX : "wheelDeltaX"in n ? -n.wheelDeltaX : 0
    },
    deltaY: function(n) {
        return "deltaY"in n ? n.deltaY : "wheelDeltaY"in n ? -n.wheelDeltaY : "wheelDelta"in n ? -n.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , hN = ir(fN)
  , pN = [9, 13, 27, 32]
  , v1 = ro && "CompositionEvent"in window
  , Od = null;
ro && "documentMode"in document && (Od = document.documentMode);
var mN = ro && "TextEvent"in window && !Od
  , kP = ro && (!v1 || Od && 8 < Od && 11 >= Od)
  , Ib = String.fromCharCode(32)
  , Db = !1;
function FP(n, e) {
    switch (n) {
    case "keyup":
        return pN.indexOf(e.keyCode) !== -1;
    case "keydown":
        return e.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function NP(n) {
    return n = n.detail,
    typeof n == "object" && "data"in n ? n.data : null
}
var _c = !1;
function gN(n, e) {
    switch (n) {
    case "compositionend":
        return NP(e);
    case "keypress":
        return e.which !== 32 ? null : (Db = !0,
        Ib);
    case "textInput":
        return n = e.data,
        n === Ib && Db ? null : n;
    default:
        return null
    }
}
function yN(n, e) {
    if (_c)
        return n === "compositionend" || !v1 && FP(n, e) ? (n = DP(),
        Um = m1 = zo = null,
        _c = !1,
        n) : null;
    switch (n) {
    case "paste":
        return null;
    case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
            if (e.char && 1 < e.char.length)
                return e.char;
            if (e.which)
                return String.fromCharCode(e.which)
        }
        return null;
    case "compositionend":
        return kP && e.locale !== "ko" ? null : e.data;
    default:
        return null
    }
}
var vN = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function kb(n) {
    var e = n && n.nodeName && n.nodeName.toLowerCase();
    return e === "input" ? !!vN[n.type] : e === "textarea"
}
function OP(n, e, t, i) {
    mP(i),
    e = hg(e, "onChange"),
    0 < e.length && (t = new g1("onChange","change",null,t,i),
    n.push({
        event: t,
        listeners: e
    }))
}
var Ud = null
  , cf = null;
function xN(n) {
    YP(n, 0)
}
function o0(n) {
    var e = bc(n);
    if (lP(e))
        return n
}
function wN(n, e) {
    if (n === "change")
        return e
}
var UP = !1;
if (ro) {
    var pv;
    if (ro) {
        var mv = "oninput"in document;
        if (!mv) {
            var Fb = document.createElement("div");
            Fb.setAttribute("oninput", "return;"),
            mv = typeof Fb.oninput == "function"
        }
        pv = mv
    } else
        pv = !1;
    UP = pv && (!document.documentMode || 9 < document.documentMode)
}
function Nb() {
    Ud && (Ud.detachEvent("onpropertychange", zP),
    cf = Ud = null)
}
function zP(n) {
    if (n.propertyName === "value" && o0(cf)) {
        var e = [];
        OP(e, cf, n, u1(n)),
        xP(xN, e)
    }
}
function AN(n, e, t) {
    n === "focusin" ? (Nb(),
    Ud = e,
    cf = t,
    Ud.attachEvent("onpropertychange", zP)) : n === "focusout" && Nb()
}
function _N(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
        return o0(cf)
}
function MN(n, e) {
    if (n === "click")
        return o0(e)
}
function SN(n, e) {
    if (n === "input" || n === "change")
        return o0(e)
}
function bN(n, e) {
    return n === e && (n !== 0 || 1 / n === 1 / e) || n !== n && e !== e
}
var qr = typeof Object.is == "function" ? Object.is : bN;
function uf(n, e) {
    if (qr(n, e))
        return !0;
    if (typeof n != "object" || n === null || typeof e != "object" || e === null)
        return !1;
    var t = Object.keys(n)
      , i = Object.keys(e);
    if (t.length !== i.length)
        return !1;
    for (i = 0; i < t.length; i++) {
        var r = t[i];
        if (!Gx.call(e, r) || !qr(n[r], e[r]))
            return !1
    }
    return !0
}
function Ob(n) {
    for (; n && n.firstChild; )
        n = n.firstChild;
    return n
}
function Ub(n, e) {
    var t = Ob(n);
    n = 0;
    for (var i; t; ) {
        if (t.nodeType === 3) {
            if (i = n + t.textContent.length,
            n <= e && i >= e)
                return {
                    node: t,
                    offset: e - n
                };
            n = i
        }
        e: {
            for (; t; ) {
                if (t.nextSibling) {
                    t = t.nextSibling;
                    break e
                }
                t = t.parentNode
            }
            t = void 0
        }
        t = Ob(t)
    }
}
function GP(n, e) {
    return n && e ? n === e ? !0 : n && n.nodeType === 3 ? !1 : e && e.nodeType === 3 ? GP(n, e.parentNode) : "contains"in n ? n.contains(e) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(e) & 16) : !1 : !1
}
function HP() {
    for (var n = window, e = og(); e instanceof n.HTMLIFrameElement; ) {
        try {
            var t = typeof e.contentWindow.location.href == "string"
        } catch {
            t = !1
        }
        if (t)
            n = e.contentWindow;
        else
            break;
        e = og(n.document)
    }
    return e
}
function x1(n) {
    var e = n && n.nodeName && n.nodeName.toLowerCase();
    return e && (e === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || e === "textarea" || n.contentEditable === "true")
}
function CN(n) {
    var e = HP()
      , t = n.focusedElem
      , i = n.selectionRange;
    if (e !== t && t && t.ownerDocument && GP(t.ownerDocument.documentElement, t)) {
        if (i !== null && x1(t)) {
            if (e = i.start,
            n = i.end,
            n === void 0 && (n = e),
            "selectionStart"in t)
                t.selectionStart = e,
                t.selectionEnd = Math.min(n, t.value.length);
            else if (n = (e = t.ownerDocument || document) && e.defaultView || window,
            n.getSelection) {
                n = n.getSelection();
                var r = t.textContent.length
                  , s = Math.min(i.start, r);
                i = i.end === void 0 ? s : Math.min(i.end, r),
                !n.extend && s > i && (r = i,
                i = s,
                s = r),
                r = Ub(t, s);
                var o = Ub(t, i);
                r && o && (n.rangeCount !== 1 || n.anchorNode !== r.node || n.anchorOffset !== r.offset || n.focusNode !== o.node || n.focusOffset !== o.offset) && (e = e.createRange(),
                e.setStart(r.node, r.offset),
                n.removeAllRanges(),
                s > i ? (n.addRange(e),
                n.extend(o.node, o.offset)) : (e.setEnd(o.node, o.offset),
                n.addRange(e)))
            }
        }
        for (e = [],
        n = t; n = n.parentNode; )
            n.nodeType === 1 && e.push({
                element: n,
                left: n.scrollLeft,
                top: n.scrollTop
            });
        for (typeof t.focus == "function" && t.focus(),
        t = 0; t < e.length; t++)
            n = e[t],
            n.element.scrollLeft = n.left,
            n.element.scrollTop = n.top
    }
}
var EN = ro && "documentMode"in document && 11 >= document.documentMode
  , Mc = null
  , ow = null
  , zd = null
  , aw = !1;
function zb(n, e, t) {
    var i = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
    aw || Mc == null || Mc !== og(i) || (i = Mc,
    "selectionStart"in i && x1(i) ? i = {
        start: i.selectionStart,
        end: i.selectionEnd
    } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(),
    i = {
        anchorNode: i.anchorNode,
        anchorOffset: i.anchorOffset,
        focusNode: i.focusNode,
        focusOffset: i.focusOffset
    }),
    zd && uf(zd, i) || (zd = i,
    i = hg(ow, "onSelect"),
    0 < i.length && (e = new g1("onSelect","select",null,e,t),
    n.push({
        event: e,
        listeners: i
    }),
    e.target = Mc)))
}
function Lp(n, e) {
    var t = {};
    return t[n.toLowerCase()] = e.toLowerCase(),
    t["Webkit" + n] = "webkit" + e,
    t["Moz" + n] = "moz" + e,
    t
}
var Sc = {
    animationend: Lp("Animation", "AnimationEnd"),
    animationiteration: Lp("Animation", "AnimationIteration"),
    animationstart: Lp("Animation", "AnimationStart"),
    transitionend: Lp("Transition", "TransitionEnd")
}
  , gv = {}
  , VP = {};
ro && (VP = document.createElement("div").style,
"AnimationEvent"in window || (delete Sc.animationend.animation,
delete Sc.animationiteration.animation,
delete Sc.animationstart.animation),
"TransitionEvent"in window || delete Sc.transitionend.transition);
function a0(n) {
    if (gv[n])
        return gv[n];
    if (!Sc[n])
        return n;
    var e = Sc[n], t;
    for (t in e)
        if (e.hasOwnProperty(t) && t in VP)
            return gv[n] = e[t];
    return n
}
var WP = a0("animationend")
  , jP = a0("animationiteration")
  , JP = a0("animationstart")
  , XP = a0("transitionend")
  , KP = new Map
  , Gb = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function fa(n, e) {
    KP.set(n, e),
    El(e, [n])
}
for (var yv = 0; yv < Gb.length; yv++) {
    var vv = Gb[yv]
      , TN = vv.toLowerCase()
      , PN = vv[0].toUpperCase() + vv.slice(1);
    fa(TN, "on" + PN)
}
fa(WP, "onAnimationEnd");
fa(jP, "onAnimationIteration");
fa(JP, "onAnimationStart");
fa("dblclick", "onDoubleClick");
fa("focusin", "onFocus");
fa("focusout", "onBlur");
fa(XP, "onTransitionEnd");
Qc("onMouseEnter", ["mouseout", "mouseover"]);
Qc("onMouseLeave", ["mouseout", "mouseover"]);
Qc("onPointerEnter", ["pointerout", "pointerover"]);
Qc("onPointerLeave", ["pointerout", "pointerover"]);
El("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
El("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
El("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
El("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
El("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
El("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Id = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , BN = new Set("cancel close invalid load scroll toggle".split(" ").concat(Id));
function Hb(n, e, t) {
    var i = n.type || "unknown-event";
    n.currentTarget = t,
    TF(i, e, void 0, n),
    n.currentTarget = null
}
function YP(n, e) {
    e = (e & 4) !== 0;
    for (var t = 0; t < n.length; t++) {
        var i = n[t]
          , r = i.event;
        i = i.listeners;
        e: {
            var s = void 0;
            if (e)
                for (var o = i.length - 1; 0 <= o; o--) {
                    var a = i[o]
                      , l = a.instance
                      , d = a.currentTarget;
                    if (a = a.listener,
                    l !== s && r.isPropagationStopped())
                        break e;
                    Hb(r, a, d),
                    s = l
                }
            else
                for (o = 0; o < i.length; o++) {
                    if (a = i[o],
                    l = a.instance,
                    d = a.currentTarget,
                    a = a.listener,
                    l !== s && r.isPropagationStopped())
                        break e;
                    Hb(r, a, d),
                    s = l
                }
        }
    }
    if (lg)
        throw n = nw,
        lg = !1,
        nw = null,
        n
}
function Yt(n, e) {
    var t = e[fw];
    t === void 0 && (t = e[fw] = new Set);
    var i = n + "__bubble";
    t.has(i) || (QP(e, n, 2, !1),
    t.add(i))
}
function xv(n, e, t) {
    var i = 0;
    e && (i |= 4),
    QP(t, n, i, e)
}
var Rp = "_reactListening" + Math.random().toString(36).slice(2);
function df(n) {
    if (!n[Rp]) {
        n[Rp] = !0,
        iP.forEach(function(t) {
            t !== "selectionchange" && (BN.has(t) || xv(t, !1, n),
            xv(t, !0, n))
        });
        var e = n.nodeType === 9 ? n : n.ownerDocument;
        e === null || e[Rp] || (e[Rp] = !0,
        xv("selectionchange", !1, e))
    }
}
function QP(n, e, t, i) {
    switch (IP(e)) {
    case 1:
        var r = WF;
        break;
    case 4:
        r = jF;
        break;
    default:
        r = p1
    }
    t = r.bind(null, e, t, n),
    r = void 0,
    !tw || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (r = !0),
    i ? r !== void 0 ? n.addEventListener(e, t, {
        capture: !0,
        passive: r
    }) : n.addEventListener(e, t, !0) : r !== void 0 ? n.addEventListener(e, t, {
        passive: r
    }) : n.addEventListener(e, t, !1)
}
function wv(n, e, t, i, r) {
    var s = i;
    if (!(e & 1) && !(e & 2) && i !== null)
        e: for (; ; ) {
            if (i === null)
                return;
            var o = i.tag;
            if (o === 3 || o === 4) {
                var a = i.stateNode.containerInfo;
                if (a === r || a.nodeType === 8 && a.parentNode === r)
                    break;
                if (o === 4)
                    for (o = i.return; o !== null; ) {
                        var l = o.tag;
                        if ((l === 3 || l === 4) && (l = o.stateNode.containerInfo,
                        l === r || l.nodeType === 8 && l.parentNode === r))
                            return;
                        o = o.return
                    }
                for (; a !== null; ) {
                    if (o = qa(a),
                    o === null)
                        return;
                    if (l = o.tag,
                    l === 5 || l === 6) {
                        i = s = o;
                        continue e
                    }
                    a = a.parentNode
                }
            }
            i = i.return
        }
    xP(function() {
        var d = s
          , f = u1(t)
          , h = [];
        e: {
            var p = KP.get(n);
            if (p !== void 0) {
                var m = g1
                  , y = n;
                switch (n) {
                case "keypress":
                    if (zm(t) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    m = oN;
                    break;
                case "focusin":
                    y = "focus",
                    m = hv;
                    break;
                case "focusout":
                    y = "blur",
                    m = hv;
                    break;
                case "beforeblur":
                case "afterblur":
                    m = hv;
                    break;
                case "click":
                    if (t.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    m = Bb;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    m = KF;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    m = cN;
                    break;
                case WP:
                case jP:
                case JP:
                    m = qF;
                    break;
                case XP:
                    m = dN;
                    break;
                case "scroll":
                    m = JF;
                    break;
                case "wheel":
                    m = hN;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    m = $F;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    m = Rb
                }
                var v = (e & 4) !== 0
                  , x = !v && n === "scroll"
                  , w = v ? p !== null ? p + "Capture" : null : p;
                v = [];
                for (var A = d, M; A !== null; ) {
                    M = A;
                    var S = M.stateNode;
                    if (M.tag === 5 && S !== null && (M = S,
                    w !== null && (S = sf(A, w),
                    S != null && v.push(ff(A, S, M)))),
                    x)
                        break;
                    A = A.return
                }
                0 < v.length && (p = new m(p,y,null,t,f),
                h.push({
                    event: p,
                    listeners: v
                }))
            }
        }
        if (!(e & 7)) {
            e: {
                if (p = n === "mouseover" || n === "pointerover",
                m = n === "mouseout" || n === "pointerout",
                p && t !== $x && (y = t.relatedTarget || t.fromElement) && (qa(y) || y[so]))
                    break e;
                if ((m || p) && (p = f.window === f ? f : (p = f.ownerDocument) ? p.defaultView || p.parentWindow : window,
                m ? (y = t.relatedTarget || t.toElement,
                m = d,
                y = y ? qa(y) : null,
                y !== null && (x = Tl(y),
                y !== x || y.tag !== 5 && y.tag !== 6) && (y = null)) : (m = null,
                y = d),
                m !== y)) {
                    if (v = Bb,
                    S = "onMouseLeave",
                    w = "onMouseEnter",
                    A = "mouse",
                    (n === "pointerout" || n === "pointerover") && (v = Rb,
                    S = "onPointerLeave",
                    w = "onPointerEnter",
                    A = "pointer"),
                    x = m == null ? p : bc(m),
                    M = y == null ? p : bc(y),
                    p = new v(S,A + "leave",m,t,f),
                    p.target = x,
                    p.relatedTarget = M,
                    S = null,
                    qa(f) === d && (v = new v(w,A + "enter",y,t,f),
                    v.target = M,
                    v.relatedTarget = x,
                    S = v),
                    x = S,
                    m && y)
                        t: {
                            for (v = m,
                            w = y,
                            A = 0,
                            M = v; M; M = Zl(M))
                                A++;
                            for (M = 0,
                            S = w; S; S = Zl(S))
                                M++;
                            for (; 0 < A - M; )
                                v = Zl(v),
                                A--;
                            for (; 0 < M - A; )
                                w = Zl(w),
                                M--;
                            for (; A--; ) {
                                if (v === w || w !== null && v === w.alternate)
                                    break t;
                                v = Zl(v),
                                w = Zl(w)
                            }
                            v = null
                        }
                    else
                        v = null;
                    m !== null && Vb(h, p, m, v, !1),
                    y !== null && x !== null && Vb(h, x, y, v, !0)
                }
            }
            e: {
                if (p = d ? bc(d) : window,
                m = p.nodeName && p.nodeName.toLowerCase(),
                m === "select" || m === "input" && p.type === "file")
                    var E = wN;
                else if (kb(p))
                    if (UP)
                        E = SN;
                    else {
                        E = _N;
                        var P = AN
                    }
                else
                    (m = p.nodeName) && m.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (E = MN);
                if (E && (E = E(n, d))) {
                    OP(h, E, t, f);
                    break e
                }
                P && P(n, p, d),
                n === "focusout" && (P = p._wrapperState) && P.controlled && p.type === "number" && Kx(p, "number", p.value)
            }
            switch (P = d ? bc(d) : window,
            n) {
            case "focusin":
                (kb(P) || P.contentEditable === "true") && (Mc = P,
                ow = d,
                zd = null);
                break;
            case "focusout":
                zd = ow = Mc = null;
                break;
            case "mousedown":
                aw = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                aw = !1,
                zb(h, t, f);
                break;
            case "selectionchange":
                if (EN)
                    break;
            case "keydown":
            case "keyup":
                zb(h, t, f)
            }
            var L;
            if (v1)
                e: {
                    switch (n) {
                    case "compositionstart":
                        var C = "onCompositionStart";
                        break e;
                    case "compositionend":
                        C = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        C = "onCompositionUpdate";
                        break e
                    }
                    C = void 0
                }
            else
                _c ? FP(n, t) && (C = "onCompositionEnd") : n === "keydown" && t.keyCode === 229 && (C = "onCompositionStart");
            C && (kP && t.locale !== "ko" && (_c || C !== "onCompositionStart" ? C === "onCompositionEnd" && _c && (L = DP()) : (zo = f,
            m1 = "value"in zo ? zo.value : zo.textContent,
            _c = !0)),
            P = hg(d, C),
            0 < P.length && (C = new Lb(C,n,null,t,f),
            h.push({
                event: C,
                listeners: P
            }),
            L ? C.data = L : (L = NP(t),
            L !== null && (C.data = L)))),
            (L = mN ? gN(n, t) : yN(n, t)) && (d = hg(d, "onBeforeInput"),
            0 < d.length && (f = new Lb("onBeforeInput","beforeinput",null,t,f),
            h.push({
                event: f,
                listeners: d
            }),
            f.data = L))
        }
        YP(h, e)
    })
}
function ff(n, e, t) {
    return {
        instance: n,
        listener: e,
        currentTarget: t
    }
}
function hg(n, e) {
    for (var t = e + "Capture", i = []; n !== null; ) {
        var r = n
          , s = r.stateNode;
        r.tag === 5 && s !== null && (r = s,
        s = sf(n, t),
        s != null && i.unshift(ff(n, s, r)),
        s = sf(n, e),
        s != null && i.push(ff(n, s, r))),
        n = n.return
    }
    return i
}
function Zl(n) {
    if (n === null)
        return null;
    do
        n = n.return;
    while (n && n.tag !== 5);
    return n || null
}
function Vb(n, e, t, i, r) {
    for (var s = e._reactName, o = []; t !== null && t !== i; ) {
        var a = t
          , l = a.alternate
          , d = a.stateNode;
        if (l !== null && l === i)
            break;
        a.tag === 5 && d !== null && (a = d,
        r ? (l = sf(t, s),
        l != null && o.unshift(ff(t, l, a))) : r || (l = sf(t, s),
        l != null && o.push(ff(t, l, a)))),
        t = t.return
    }
    o.length !== 0 && n.push({
        event: e,
        listeners: o
    })
}
var LN = /\r\n?/g
  , RN = /\u0000|\uFFFD/g;
function Wb(n) {
    return (typeof n == "string" ? n : "" + n).replace(LN, `
`).replace(RN, "")
}
function Ip(n, e, t) {
    if (e = Wb(e),
    Wb(n) !== e && t)
        throw Error(be(425))
}
function pg() {}
var lw = null
  , cw = null;
function uw(n, e) {
    return n === "textarea" || n === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null
}
var dw = typeof setTimeout == "function" ? setTimeout : void 0
  , IN = typeof clearTimeout == "function" ? clearTimeout : void 0
  , jb = typeof Promise == "function" ? Promise : void 0
  , DN = typeof queueMicrotask == "function" ? queueMicrotask : typeof jb < "u" ? function(n) {
    return jb.resolve(null).then(n).catch(kN)
}
: dw;
function kN(n) {
    setTimeout(function() {
        throw n
    })
}
function Av(n, e) {
    var t = e
      , i = 0;
    do {
        var r = t.nextSibling;
        if (n.removeChild(t),
        r && r.nodeType === 8)
            if (t = r.data,
            t === "/$") {
                if (i === 0) {
                    n.removeChild(r),
                    lf(e);
                    return
                }
                i--
            } else
                t !== "$" && t !== "$?" && t !== "$!" || i++;
        t = r
    } while (t);
    lf(e)
}
function Yo(n) {
    for (; n != null; n = n.nextSibling) {
        var e = n.nodeType;
        if (e === 1 || e === 3)
            break;
        if (e === 8) {
            if (e = n.data,
            e === "$" || e === "$!" || e === "$?")
                break;
            if (e === "/$")
                return null
        }
    }
    return n
}
function Jb(n) {
    n = n.previousSibling;
    for (var e = 0; n; ) {
        if (n.nodeType === 8) {
            var t = n.data;
            if (t === "$" || t === "$!" || t === "$?") {
                if (e === 0)
                    return n;
                e--
            } else
                t === "/$" && e++
        }
        n = n.previousSibling
    }
    return null
}
var wu = Math.random().toString(36).slice(2)
  , ms = "__reactFiber$" + wu
  , hf = "__reactProps$" + wu
  , so = "__reactContainer$" + wu
  , fw = "__reactEvents$" + wu
  , FN = "__reactListeners$" + wu
  , NN = "__reactHandles$" + wu;
function qa(n) {
    var e = n[ms];
    if (e)
        return e;
    for (var t = n.parentNode; t; ) {
        if (e = t[so] || t[ms]) {
            if (t = e.alternate,
            e.child !== null || t !== null && t.child !== null)
                for (n = Jb(n); n !== null; ) {
                    if (t = n[ms])
                        return t;
                    n = Jb(n)
                }
            return e
        }
        n = t,
        t = n.parentNode
    }
    return null
}
function Jf(n) {
    return n = n[ms] || n[so],
    !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n
}
function bc(n) {
    if (n.tag === 5 || n.tag === 6)
        return n.stateNode;
    throw Error(be(33))
}
function l0(n) {
    return n[hf] || null
}
var hw = []
  , Cc = -1;
function ha(n) {
    return {
        current: n
    }
}
function Qt(n) {
    0 > Cc || (n.current = hw[Cc],
    hw[Cc] = null,
    Cc--)
}
function Jt(n, e) {
    Cc++,
    hw[Cc] = n.current,
    n.current = e
}
var ra = {}
  , ci = ha(ra)
  , ki = ha(!1)
  , yl = ra;
function qc(n, e) {
    var t = n.type.contextTypes;
    if (!t)
        return ra;
    var i = n.stateNode;
    if (i && i.__reactInternalMemoizedUnmaskedChildContext === e)
        return i.__reactInternalMemoizedMaskedChildContext;
    var r = {}, s;
    for (s in t)
        r[s] = e[s];
    return i && (n = n.stateNode,
    n.__reactInternalMemoizedUnmaskedChildContext = e,
    n.__reactInternalMemoizedMaskedChildContext = r),
    r
}
function Fi(n) {
    return n = n.childContextTypes,
    n != null
}
function mg() {
    Qt(ki),
    Qt(ci)
}
function Xb(n, e, t) {
    if (ci.current !== ra)
        throw Error(be(168));
    Jt(ci, e),
    Jt(ki, t)
}
function qP(n, e, t) {
    var i = n.stateNode;
    if (e = e.childContextTypes,
    typeof i.getChildContext != "function")
        return t;
    i = i.getChildContext();
    for (var r in i)
        if (!(r in e))
            throw Error(be(108, AF(n) || "Unknown", r));
    return un({}, t, i)
}
function gg(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || ra,
    yl = ci.current,
    Jt(ci, n),
    Jt(ki, ki.current),
    !0
}
function Kb(n, e, t) {
    var i = n.stateNode;
    if (!i)
        throw Error(be(169));
    t ? (n = qP(n, e, yl),
    i.__reactInternalMemoizedMergedChildContext = n,
    Qt(ki),
    Qt(ci),
    Jt(ci, n)) : Qt(ki),
    Jt(ki, t)
}
var Ws = null
  , c0 = !1
  , _v = !1;
function ZP(n) {
    Ws === null ? Ws = [n] : Ws.push(n)
}
function ON(n) {
    c0 = !0,
    ZP(n)
}
function pa() {
    if (!_v && Ws !== null) {
        _v = !0;
        var n = 0
          , e = Gt;
        try {
            var t = Ws;
            for (Gt = 1; n < t.length; n++) {
                var i = t[n];
                do
                    i = i(!0);
                while (i !== null)
            }
            Ws = null,
            c0 = !1
        } catch (r) {
            throw Ws !== null && (Ws = Ws.slice(n + 1)),
            MP(d1, pa),
            r
        } finally {
            Gt = e,
            _v = !1
        }
    }
    return null
}
var Ec = []
  , Tc = 0
  , yg = null
  , vg = 0
  , Mr = []
  , Sr = 0
  , vl = null
  , Xs = 1
  , Ks = "";
function Ga(n, e) {
    Ec[Tc++] = vg,
    Ec[Tc++] = yg,
    yg = n,
    vg = e
}
function $P(n, e, t) {
    Mr[Sr++] = Xs,
    Mr[Sr++] = Ks,
    Mr[Sr++] = vl,
    vl = n;
    var i = Xs;
    n = Ks;
    var r = 32 - Xr(i) - 1;
    i &= ~(1 << r),
    t += 1;
    var s = 32 - Xr(e) + r;
    if (30 < s) {
        var o = r - r % 5;
        s = (i & (1 << o) - 1).toString(32),
        i >>= o,
        r -= o,
        Xs = 1 << 32 - Xr(e) + r | t << r | i,
        Ks = s + n
    } else
        Xs = 1 << s | t << r | i,
        Ks = n
}
function w1(n) {
    n.return !== null && (Ga(n, 1),
    $P(n, 1, 0))
}
function A1(n) {
    for (; n === yg; )
        yg = Ec[--Tc],
        Ec[Tc] = null,
        vg = Ec[--Tc],
        Ec[Tc] = null;
    for (; n === vl; )
        vl = Mr[--Sr],
        Mr[Sr] = null,
        Ks = Mr[--Sr],
        Mr[Sr] = null,
        Xs = Mr[--Sr],
        Mr[Sr] = null
}
var Qi = null
  , Ki = null
  , en = !1
  , Vr = null;
function eB(n, e) {
    var t = Cr(5, null, null, 0);
    t.elementType = "DELETED",
    t.stateNode = e,
    t.return = n,
    e = n.deletions,
    e === null ? (n.deletions = [t],
    n.flags |= 16) : e.push(t)
}
function Yb(n, e) {
    switch (n.tag) {
    case 5:
        var t = n.type;
        return e = e.nodeType !== 1 || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e,
        e !== null ? (n.stateNode = e,
        Qi = n,
        Ki = Yo(e.firstChild),
        !0) : !1;
    case 6:
        return e = n.pendingProps === "" || e.nodeType !== 3 ? null : e,
        e !== null ? (n.stateNode = e,
        Qi = n,
        Ki = null,
        !0) : !1;
    case 13:
        return e = e.nodeType !== 8 ? null : e,
        e !== null ? (t = vl !== null ? {
            id: Xs,
            overflow: Ks
        } : null,
        n.memoizedState = {
            dehydrated: e,
            treeContext: t,
            retryLane: 1073741824
        },
        t = Cr(18, null, null, 0),
        t.stateNode = e,
        t.return = n,
        n.child = t,
        Qi = n,
        Ki = null,
        !0) : !1;
    default:
        return !1
    }
}
function pw(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0
}
function mw(n) {
    if (en) {
        var e = Ki;
        if (e) {
            var t = e;
            if (!Yb(n, e)) {
                if (pw(n))
                    throw Error(be(418));
                e = Yo(t.nextSibling);
                var i = Qi;
                e && Yb(n, e) ? eB(i, t) : (n.flags = n.flags & -4097 | 2,
                en = !1,
                Qi = n)
            }
        } else {
            if (pw(n))
                throw Error(be(418));
            n.flags = n.flags & -4097 | 2,
            en = !1,
            Qi = n
        }
    }
}
function Qb(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; )
        n = n.return;
    Qi = n
}
function Dp(n) {
    if (n !== Qi)
        return !1;
    if (!en)
        return Qb(n),
        en = !0,
        !1;
    var e;
    if ((e = n.tag !== 3) && !(e = n.tag !== 5) && (e = n.type,
    e = e !== "head" && e !== "body" && !uw(n.type, n.memoizedProps)),
    e && (e = Ki)) {
        if (pw(n))
            throw tB(),
            Error(be(418));
        for (; e; )
            eB(n, e),
            e = Yo(e.nextSibling)
    }
    if (Qb(n),
    n.tag === 13) {
        if (n = n.memoizedState,
        n = n !== null ? n.dehydrated : null,
        !n)
            throw Error(be(317));
        e: {
            for (n = n.nextSibling,
            e = 0; n; ) {
                if (n.nodeType === 8) {
                    var t = n.data;
                    if (t === "/$") {
                        if (e === 0) {
                            Ki = Yo(n.nextSibling);
                            break e
                        }
                        e--
                    } else
                        t !== "$" && t !== "$!" && t !== "$?" || e++
                }
                n = n.nextSibling
            }
            Ki = null
        }
    } else
        Ki = Qi ? Yo(n.stateNode.nextSibling) : null;
    return !0
}
function tB() {
    for (var n = Ki; n; )
        n = Yo(n.nextSibling)
}
function Zc() {
    Ki = Qi = null,
    en = !1
}
function _1(n) {
    Vr === null ? Vr = [n] : Vr.push(n)
}
var UN = fo.ReactCurrentBatchConfig;
function zr(n, e) {
    if (n && n.defaultProps) {
        e = un({}, e),
        n = n.defaultProps;
        for (var t in n)
            e[t] === void 0 && (e[t] = n[t]);
        return e
    }
    return e
}
var xg = ha(null)
  , wg = null
  , Pc = null
  , M1 = null;
function S1() {
    M1 = Pc = wg = null
}
function b1(n) {
    var e = xg.current;
    Qt(xg),
    n._currentValue = e
}
function gw(n, e, t) {
    for (; n !== null; ) {
        var i = n.alternate;
        if ((n.childLanes & e) !== e ? (n.childLanes |= e,
        i !== null && (i.childLanes |= e)) : i !== null && (i.childLanes & e) !== e && (i.childLanes |= e),
        n === t)
            break;
        n = n.return
    }
}
function Vc(n, e) {
    wg = n,
    M1 = Pc = null,
    n = n.dependencies,
    n !== null && n.firstContext !== null && (n.lanes & e && (Di = !0),
    n.firstContext = null)
}
function Pr(n) {
    var e = n._currentValue;
    if (M1 !== n)
        if (n = {
            context: n,
            memoizedValue: e,
            next: null
        },
        Pc === null) {
            if (wg === null)
                throw Error(be(308));
            Pc = n,
            wg.dependencies = {
                lanes: 0,
                firstContext: n
            }
        } else
            Pc = Pc.next = n;
    return e
}
var Za = null;
function C1(n) {
    Za === null ? Za = [n] : Za.push(n)
}
function nB(n, e, t, i) {
    var r = e.interleaved;
    return r === null ? (t.next = t,
    C1(e)) : (t.next = r.next,
    r.next = t),
    e.interleaved = t,
    oo(n, i)
}
function oo(n, e) {
    n.lanes |= e;
    var t = n.alternate;
    for (t !== null && (t.lanes |= e),
    t = n,
    n = n.return; n !== null; )
        n.childLanes |= e,
        t = n.alternate,
        t !== null && (t.childLanes |= e),
        t = n,
        n = n.return;
    return t.tag === 3 ? t.stateNode : null
}
var ko = !1;
function E1(n) {
    n.updateQueue = {
        baseState: n.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function iB(n, e) {
    n = n.updateQueue,
    e.updateQueue === n && (e.updateQueue = {
        baseState: n.baseState,
        firstBaseUpdate: n.firstBaseUpdate,
        lastBaseUpdate: n.lastBaseUpdate,
        shared: n.shared,
        effects: n.effects
    })
}
function $s(n, e) {
    return {
        eventTime: n,
        lane: e,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function Qo(n, e, t) {
    var i = n.updateQueue;
    if (i === null)
        return null;
    if (i = i.shared,
    Lt & 2) {
        var r = i.pending;
        return r === null ? e.next = e : (e.next = r.next,
        r.next = e),
        i.pending = e,
        oo(n, t)
    }
    return r = i.interleaved,
    r === null ? (e.next = e,
    C1(i)) : (e.next = r.next,
    r.next = e),
    i.interleaved = e,
    oo(n, t)
}
function Gm(n, e, t) {
    if (e = e.updateQueue,
    e !== null && (e = e.shared,
    (t & 4194240) !== 0)) {
        var i = e.lanes;
        i &= n.pendingLanes,
        t |= i,
        e.lanes = t,
        f1(n, t)
    }
}
function qb(n, e) {
    var t = n.updateQueue
      , i = n.alternate;
    if (i !== null && (i = i.updateQueue,
    t === i)) {
        var r = null
          , s = null;
        if (t = t.firstBaseUpdate,
        t !== null) {
            do {
                var o = {
                    eventTime: t.eventTime,
                    lane: t.lane,
                    tag: t.tag,
                    payload: t.payload,
                    callback: t.callback,
                    next: null
                };
                s === null ? r = s = o : s = s.next = o,
                t = t.next
            } while (t !== null);
            s === null ? r = s = e : s = s.next = e
        } else
            r = s = e;
        t = {
            baseState: i.baseState,
            firstBaseUpdate: r,
            lastBaseUpdate: s,
            shared: i.shared,
            effects: i.effects
        },
        n.updateQueue = t;
        return
    }
    n = t.lastBaseUpdate,
    n === null ? t.firstBaseUpdate = e : n.next = e,
    t.lastBaseUpdate = e
}
function Ag(n, e, t, i) {
    var r = n.updateQueue;
    ko = !1;
    var s = r.firstBaseUpdate
      , o = r.lastBaseUpdate
      , a = r.shared.pending;
    if (a !== null) {
        r.shared.pending = null;
        var l = a
          , d = l.next;
        l.next = null,
        o === null ? s = d : o.next = d,
        o = l;
        var f = n.alternate;
        f !== null && (f = f.updateQueue,
        a = f.lastBaseUpdate,
        a !== o && (a === null ? f.firstBaseUpdate = d : a.next = d,
        f.lastBaseUpdate = l))
    }
    if (s !== null) {
        var h = r.baseState;
        o = 0,
        f = d = l = null,
        a = s;
        do {
            var p = a.lane
              , m = a.eventTime;
            if ((i & p) === p) {
                f !== null && (f = f.next = {
                    eventTime: m,
                    lane: 0,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                });
                e: {
                    var y = n
                      , v = a;
                    switch (p = e,
                    m = t,
                    v.tag) {
                    case 1:
                        if (y = v.payload,
                        typeof y == "function") {
                            h = y.call(m, h, p);
                            break e
                        }
                        h = y;
                        break e;
                    case 3:
                        y.flags = y.flags & -65537 | 128;
                    case 0:
                        if (y = v.payload,
                        p = typeof y == "function" ? y.call(m, h, p) : y,
                        p == null)
                            break e;
                        h = un({}, h, p);
                        break e;
                    case 2:
                        ko = !0
                    }
                }
                a.callback !== null && a.lane !== 0 && (n.flags |= 64,
                p = r.effects,
                p === null ? r.effects = [a] : p.push(a))
            } else
                m = {
                    eventTime: m,
                    lane: p,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                },
                f === null ? (d = f = m,
                l = h) : f = f.next = m,
                o |= p;
            if (a = a.next,
            a === null) {
                if (a = r.shared.pending,
                a === null)
                    break;
                p = a,
                a = p.next,
                p.next = null,
                r.lastBaseUpdate = p,
                r.shared.pending = null
            }
        } while (1);
        if (f === null && (l = h),
        r.baseState = l,
        r.firstBaseUpdate = d,
        r.lastBaseUpdate = f,
        e = r.shared.interleaved,
        e !== null) {
            r = e;
            do
                o |= r.lane,
                r = r.next;
            while (r !== e)
        } else
            s === null && (r.shared.lanes = 0);
        wl |= o,
        n.lanes = o,
        n.memoizedState = h
    }
}
function Zb(n, e, t) {
    if (n = e.effects,
    e.effects = null,
    n !== null)
        for (e = 0; e < n.length; e++) {
            var i = n[e]
              , r = i.callback;
            if (r !== null) {
                if (i.callback = null,
                i = t,
                typeof r != "function")
                    throw Error(be(191, r));
                r.call(i)
            }
        }
}
var rB = new nP.Component().refs;
function yw(n, e, t, i) {
    e = n.memoizedState,
    t = t(i, e),
    t = t == null ? e : un({}, e, t),
    n.memoizedState = t,
    n.lanes === 0 && (n.updateQueue.baseState = t)
}
var u0 = {
    isMounted: function(n) {
        return (n = n._reactInternals) ? Tl(n) === n : !1
    },
    enqueueSetState: function(n, e, t) {
        n = n._reactInternals;
        var i = wi()
          , r = Zo(n)
          , s = $s(i, r);
        s.payload = e,
        t != null && (s.callback = t),
        e = Qo(n, s, r),
        e !== null && (Kr(e, n, r, i),
        Gm(e, n, r))
    },
    enqueueReplaceState: function(n, e, t) {
        n = n._reactInternals;
        var i = wi()
          , r = Zo(n)
          , s = $s(i, r);
        s.tag = 1,
        s.payload = e,
        t != null && (s.callback = t),
        e = Qo(n, s, r),
        e !== null && (Kr(e, n, r, i),
        Gm(e, n, r))
    },
    enqueueForceUpdate: function(n, e) {
        n = n._reactInternals;
        var t = wi()
          , i = Zo(n)
          , r = $s(t, i);
        r.tag = 2,
        e != null && (r.callback = e),
        e = Qo(n, r, i),
        e !== null && (Kr(e, n, i, t),
        Gm(e, n, i))
    }
};
function $b(n, e, t, i, r, s, o) {
    return n = n.stateNode,
    typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(i, s, o) : e.prototype && e.prototype.isPureReactComponent ? !uf(t, i) || !uf(r, s) : !0
}
function sB(n, e, t) {
    var i = !1
      , r = ra
      , s = e.contextType;
    return typeof s == "object" && s !== null ? s = Pr(s) : (r = Fi(e) ? yl : ci.current,
    i = e.contextTypes,
    s = (i = i != null) ? qc(n, r) : ra),
    e = new e(t,s),
    n.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null,
    e.updater = u0,
    n.stateNode = e,
    e._reactInternals = n,
    i && (n = n.stateNode,
    n.__reactInternalMemoizedUnmaskedChildContext = r,
    n.__reactInternalMemoizedMaskedChildContext = s),
    e
}
function eC(n, e, t, i) {
    n = e.state,
    typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(t, i),
    typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(t, i),
    e.state !== n && u0.enqueueReplaceState(e, e.state, null)
}
function vw(n, e, t, i) {
    var r = n.stateNode;
    r.props = t,
    r.state = n.memoizedState,
    r.refs = rB,
    E1(n);
    var s = e.contextType;
    typeof s == "object" && s !== null ? r.context = Pr(s) : (s = Fi(e) ? yl : ci.current,
    r.context = qc(n, s)),
    r.state = n.memoizedState,
    s = e.getDerivedStateFromProps,
    typeof s == "function" && (yw(n, e, s, t),
    r.state = n.memoizedState),
    typeof e.getDerivedStateFromProps == "function" || typeof r.getSnapshotBeforeUpdate == "function" || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (e = r.state,
    typeof r.componentWillMount == "function" && r.componentWillMount(),
    typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount(),
    e !== r.state && u0.enqueueReplaceState(r, r.state, null),
    Ag(n, t, r, i),
    r.state = n.memoizedState),
    typeof r.componentDidMount == "function" && (n.flags |= 4194308)
}
function sd(n, e, t) {
    if (n = t.ref,
    n !== null && typeof n != "function" && typeof n != "object") {
        if (t._owner) {
            if (t = t._owner,
            t) {
                if (t.tag !== 1)
                    throw Error(be(309));
                var i = t.stateNode
            }
            if (!i)
                throw Error(be(147, n));
            var r = i
              , s = "" + n;
            return e !== null && e.ref !== null && typeof e.ref == "function" && e.ref._stringRef === s ? e.ref : (e = function(o) {
                var a = r.refs;
                a === rB && (a = r.refs = {}),
                o === null ? delete a[s] : a[s] = o
            }
            ,
            e._stringRef = s,
            e)
        }
        if (typeof n != "string")
            throw Error(be(284));
        if (!t._owner)
            throw Error(be(290, n))
    }
    return n
}
function kp(n, e) {
    throw n = Object.prototype.toString.call(e),
    Error(be(31, n === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : n))
}
function tC(n) {
    var e = n._init;
    return e(n._payload)
}
function oB(n) {
    function e(w, A) {
        if (n) {
            var M = w.deletions;
            M === null ? (w.deletions = [A],
            w.flags |= 16) : M.push(A)
        }
    }
    function t(w, A) {
        if (!n)
            return null;
        for (; A !== null; )
            e(w, A),
            A = A.sibling;
        return null
    }
    function i(w, A) {
        for (w = new Map; A !== null; )
            A.key !== null ? w.set(A.key, A) : w.set(A.index, A),
            A = A.sibling;
        return w
    }
    function r(w, A) {
        return w = $o(w, A),
        w.index = 0,
        w.sibling = null,
        w
    }
    function s(w, A, M) {
        return w.index = M,
        n ? (M = w.alternate,
        M !== null ? (M = M.index,
        M < A ? (w.flags |= 2,
        A) : M) : (w.flags |= 2,
        A)) : (w.flags |= 1048576,
        A)
    }
    function o(w) {
        return n && w.alternate === null && (w.flags |= 2),
        w
    }
    function a(w, A, M, S) {
        return A === null || A.tag !== 6 ? (A = Pv(M, w.mode, S),
        A.return = w,
        A) : (A = r(A, M),
        A.return = w,
        A)
    }
    function l(w, A, M, S) {
        var E = M.type;
        return E === Ac ? f(w, A, M.props.children, S, M.key) : A !== null && (A.elementType === E || typeof E == "object" && E !== null && E.$$typeof === Do && tC(E) === A.type) ? (S = r(A, M.props),
        S.ref = sd(w, A, M),
        S.return = w,
        S) : (S = Xm(M.type, M.key, M.props, null, w.mode, S),
        S.ref = sd(w, A, M),
        S.return = w,
        S)
    }
    function d(w, A, M, S) {
        return A === null || A.tag !== 4 || A.stateNode.containerInfo !== M.containerInfo || A.stateNode.implementation !== M.implementation ? (A = Bv(M, w.mode, S),
        A.return = w,
        A) : (A = r(A, M.children || []),
        A.return = w,
        A)
    }
    function f(w, A, M, S, E) {
        return A === null || A.tag !== 7 ? (A = ll(M, w.mode, S, E),
        A.return = w,
        A) : (A = r(A, M),
        A.return = w,
        A)
    }
    function h(w, A, M) {
        if (typeof A == "string" && A !== "" || typeof A == "number")
            return A = Pv("" + A, w.mode, M),
            A.return = w,
            A;
        if (typeof A == "object" && A !== null) {
            switch (A.$$typeof) {
            case Sp:
                return M = Xm(A.type, A.key, A.props, null, w.mode, M),
                M.ref = sd(w, null, A),
                M.return = w,
                M;
            case wc:
                return A = Bv(A, w.mode, M),
                A.return = w,
                A;
            case Do:
                var S = A._init;
                return h(w, S(A._payload), M)
            }
            if (Ld(A) || ed(A))
                return A = ll(A, w.mode, M, null),
                A.return = w,
                A;
            kp(w, A)
        }
        return null
    }
    function p(w, A, M, S) {
        var E = A !== null ? A.key : null;
        if (typeof M == "string" && M !== "" || typeof M == "number")
            return E !== null ? null : a(w, A, "" + M, S);
        if (typeof M == "object" && M !== null) {
            switch (M.$$typeof) {
            case Sp:
                return M.key === E ? l(w, A, M, S) : null;
            case wc:
                return M.key === E ? d(w, A, M, S) : null;
            case Do:
                return E = M._init,
                p(w, A, E(M._payload), S)
            }
            if (Ld(M) || ed(M))
                return E !== null ? null : f(w, A, M, S, null);
            kp(w, M)
        }
        return null
    }
    function m(w, A, M, S, E) {
        if (typeof S == "string" && S !== "" || typeof S == "number")
            return w = w.get(M) || null,
            a(A, w, "" + S, E);
        if (typeof S == "object" && S !== null) {
            switch (S.$$typeof) {
            case Sp:
                return w = w.get(S.key === null ? M : S.key) || null,
                l(A, w, S, E);
            case wc:
                return w = w.get(S.key === null ? M : S.key) || null,
                d(A, w, S, E);
            case Do:
                var P = S._init;
                return m(w, A, M, P(S._payload), E)
            }
            if (Ld(S) || ed(S))
                return w = w.get(M) || null,
                f(A, w, S, E, null);
            kp(A, S)
        }
        return null
    }
    function y(w, A, M, S) {
        for (var E = null, P = null, L = A, C = A = 0, B = null; L !== null && C < M.length; C++) {
            L.index > C ? (B = L,
            L = null) : B = L.sibling;
            var I = p(w, L, M[C], S);
            if (I === null) {
                L === null && (L = B);
                break
            }
            n && L && I.alternate === null && e(w, L),
            A = s(I, A, C),
            P === null ? E = I : P.sibling = I,
            P = I,
            L = B
        }
        if (C === M.length)
            return t(w, L),
            en && Ga(w, C),
            E;
        if (L === null) {
            for (; C < M.length; C++)
                L = h(w, M[C], S),
                L !== null && (A = s(L, A, C),
                P === null ? E = L : P.sibling = L,
                P = L);
            return en && Ga(w, C),
            E
        }
        for (L = i(w, L); C < M.length; C++)
            B = m(L, w, C, M[C], S),
            B !== null && (n && B.alternate !== null && L.delete(B.key === null ? C : B.key),
            A = s(B, A, C),
            P === null ? E = B : P.sibling = B,
            P = B);
        return n && L.forEach(function(U) {
            return e(w, U)
        }),
        en && Ga(w, C),
        E
    }
    function v(w, A, M, S) {
        var E = ed(M);
        if (typeof E != "function")
            throw Error(be(150));
        if (M = E.call(M),
        M == null)
            throw Error(be(151));
        for (var P = E = null, L = A, C = A = 0, B = null, I = M.next(); L !== null && !I.done; C++,
        I = M.next()) {
            L.index > C ? (B = L,
            L = null) : B = L.sibling;
            var U = p(w, L, I.value, S);
            if (U === null) {
                L === null && (L = B);
                break
            }
            n && L && U.alternate === null && e(w, L),
            A = s(U, A, C),
            P === null ? E = U : P.sibling = U,
            P = U,
            L = B
        }
        if (I.done)
            return t(w, L),
            en && Ga(w, C),
            E;
        if (L === null) {
            for (; !I.done; C++,
            I = M.next())
                I = h(w, I.value, S),
                I !== null && (A = s(I, A, C),
                P === null ? E = I : P.sibling = I,
                P = I);
            return en && Ga(w, C),
            E
        }
        for (L = i(w, L); !I.done; C++,
        I = M.next())
            I = m(L, w, C, I.value, S),
            I !== null && (n && I.alternate !== null && L.delete(I.key === null ? C : I.key),
            A = s(I, A, C),
            P === null ? E = I : P.sibling = I,
            P = I);
        return n && L.forEach(function($) {
            return e(w, $)
        }),
        en && Ga(w, C),
        E
    }
    function x(w, A, M, S) {
        if (typeof M == "object" && M !== null && M.type === Ac && M.key === null && (M = M.props.children),
        typeof M == "object" && M !== null) {
            switch (M.$$typeof) {
            case Sp:
                e: {
                    for (var E = M.key, P = A; P !== null; ) {
                        if (P.key === E) {
                            if (E = M.type,
                            E === Ac) {
                                if (P.tag === 7) {
                                    t(w, P.sibling),
                                    A = r(P, M.props.children),
                                    A.return = w,
                                    w = A;
                                    break e
                                }
                            } else if (P.elementType === E || typeof E == "object" && E !== null && E.$$typeof === Do && tC(E) === P.type) {
                                t(w, P.sibling),
                                A = r(P, M.props),
                                A.ref = sd(w, P, M),
                                A.return = w,
                                w = A;
                                break e
                            }
                            t(w, P);
                            break
                        } else
                            e(w, P);
                        P = P.sibling
                    }
                    M.type === Ac ? (A = ll(M.props.children, w.mode, S, M.key),
                    A.return = w,
                    w = A) : (S = Xm(M.type, M.key, M.props, null, w.mode, S),
                    S.ref = sd(w, A, M),
                    S.return = w,
                    w = S)
                }
                return o(w);
            case wc:
                e: {
                    for (P = M.key; A !== null; ) {
                        if (A.key === P)
                            if (A.tag === 4 && A.stateNode.containerInfo === M.containerInfo && A.stateNode.implementation === M.implementation) {
                                t(w, A.sibling),
                                A = r(A, M.children || []),
                                A.return = w,
                                w = A;
                                break e
                            } else {
                                t(w, A);
                                break
                            }
                        else
                            e(w, A);
                        A = A.sibling
                    }
                    A = Bv(M, w.mode, S),
                    A.return = w,
                    w = A
                }
                return o(w);
            case Do:
                return P = M._init,
                x(w, A, P(M._payload), S)
            }
            if (Ld(M))
                return y(w, A, M, S);
            if (ed(M))
                return v(w, A, M, S);
            kp(w, M)
        }
        return typeof M == "string" && M !== "" || typeof M == "number" ? (M = "" + M,
        A !== null && A.tag === 6 ? (t(w, A.sibling),
        A = r(A, M),
        A.return = w,
        w = A) : (t(w, A),
        A = Pv(M, w.mode, S),
        A.return = w,
        w = A),
        o(w)) : t(w, A)
    }
    return x
}
var $c = oB(!0)
  , aB = oB(!1)
  , Xf = {}
  , ys = ha(Xf)
  , pf = ha(Xf)
  , mf = ha(Xf);
function $a(n) {
    if (n === Xf)
        throw Error(be(174));
    return n
}
function T1(n, e) {
    switch (Jt(mf, e),
    Jt(pf, n),
    Jt(ys, Xf),
    n = e.nodeType,
    n) {
    case 9:
    case 11:
        e = (e = e.documentElement) ? e.namespaceURI : Qx(null, "");
        break;
    default:
        n = n === 8 ? e.parentNode : e,
        e = n.namespaceURI || null,
        n = n.tagName,
        e = Qx(e, n)
    }
    Qt(ys),
    Jt(ys, e)
}
function eu() {
    Qt(ys),
    Qt(pf),
    Qt(mf)
}
function lB(n) {
    $a(mf.current);
    var e = $a(ys.current)
      , t = Qx(e, n.type);
    e !== t && (Jt(pf, n),
    Jt(ys, t))
}
function P1(n) {
    pf.current === n && (Qt(ys),
    Qt(pf))
}
var sn = ha(0);
function _g(n) {
    for (var e = n; e !== null; ) {
        if (e.tag === 13) {
            var t = e.memoizedState;
            if (t !== null && (t = t.dehydrated,
            t === null || t.data === "$?" || t.data === "$!"))
                return e
        } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
            if (e.flags & 128)
                return e
        } else if (e.child !== null) {
            e.child.return = e,
            e = e.child;
            continue
        }
        if (e === n)
            break;
        for (; e.sibling === null; ) {
            if (e.return === null || e.return === n)
                return null;
            e = e.return
        }
        e.sibling.return = e.return,
        e = e.sibling
    }
    return null
}
var Mv = [];
function B1() {
    for (var n = 0; n < Mv.length; n++)
        Mv[n]._workInProgressVersionPrimary = null;
    Mv.length = 0
}
var Hm = fo.ReactCurrentDispatcher
  , Sv = fo.ReactCurrentBatchConfig
  , xl = 0
  , cn = null
  , In = null
  , Vn = null
  , Mg = !1
  , Gd = !1
  , gf = 0
  , zN = 0;
function ri() {
    throw Error(be(321))
}
function L1(n, e) {
    if (e === null)
        return !1;
    for (var t = 0; t < e.length && t < n.length; t++)
        if (!qr(n[t], e[t]))
            return !1;
    return !0
}
function R1(n, e, t, i, r, s) {
    if (xl = s,
    cn = e,
    e.memoizedState = null,
    e.updateQueue = null,
    e.lanes = 0,
    Hm.current = n === null || n.memoizedState === null ? WN : jN,
    n = t(i, r),
    Gd) {
        s = 0;
        do {
            if (Gd = !1,
            gf = 0,
            25 <= s)
                throw Error(be(301));
            s += 1,
            Vn = In = null,
            e.updateQueue = null,
            Hm.current = JN,
            n = t(i, r)
        } while (Gd)
    }
    if (Hm.current = Sg,
    e = In !== null && In.next !== null,
    xl = 0,
    Vn = In = cn = null,
    Mg = !1,
    e)
        throw Error(be(300));
    return n
}
function I1() {
    var n = gf !== 0;
    return gf = 0,
    n
}
function fs() {
    var n = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return Vn === null ? cn.memoizedState = Vn = n : Vn = Vn.next = n,
    Vn
}
function Br() {
    if (In === null) {
        var n = cn.alternate;
        n = n !== null ? n.memoizedState : null
    } else
        n = In.next;
    var e = Vn === null ? cn.memoizedState : Vn.next;
    if (e !== null)
        Vn = e,
        In = n;
    else {
        if (n === null)
            throw Error(be(310));
        In = n,
        n = {
            memoizedState: In.memoizedState,
            baseState: In.baseState,
            baseQueue: In.baseQueue,
            queue: In.queue,
            next: null
        },
        Vn === null ? cn.memoizedState = Vn = n : Vn = Vn.next = n
    }
    return Vn
}
function yf(n, e) {
    return typeof e == "function" ? e(n) : e
}
function bv(n) {
    var e = Br()
      , t = e.queue;
    if (t === null)
        throw Error(be(311));
    t.lastRenderedReducer = n;
    var i = In
      , r = i.baseQueue
      , s = t.pending;
    if (s !== null) {
        if (r !== null) {
            var o = r.next;
            r.next = s.next,
            s.next = o
        }
        i.baseQueue = r = s,
        t.pending = null
    }
    if (r !== null) {
        s = r.next,
        i = i.baseState;
        var a = o = null
          , l = null
          , d = s;
        do {
            var f = d.lane;
            if ((xl & f) === f)
                l !== null && (l = l.next = {
                    lane: 0,
                    action: d.action,
                    hasEagerState: d.hasEagerState,
                    eagerState: d.eagerState,
                    next: null
                }),
                i = d.hasEagerState ? d.eagerState : n(i, d.action);
            else {
                var h = {
                    lane: f,
                    action: d.action,
                    hasEagerState: d.hasEagerState,
                    eagerState: d.eagerState,
                    next: null
                };
                l === null ? (a = l = h,
                o = i) : l = l.next = h,
                cn.lanes |= f,
                wl |= f
            }
            d = d.next
        } while (d !== null && d !== s);
        l === null ? o = i : l.next = a,
        qr(i, e.memoizedState) || (Di = !0),
        e.memoizedState = i,
        e.baseState = o,
        e.baseQueue = l,
        t.lastRenderedState = i
    }
    if (n = t.interleaved,
    n !== null) {
        r = n;
        do
            s = r.lane,
            cn.lanes |= s,
            wl |= s,
            r = r.next;
        while (r !== n)
    } else
        r === null && (t.lanes = 0);
    return [e.memoizedState, t.dispatch]
}
function Cv(n) {
    var e = Br()
      , t = e.queue;
    if (t === null)
        throw Error(be(311));
    t.lastRenderedReducer = n;
    var i = t.dispatch
      , r = t.pending
      , s = e.memoizedState;
    if (r !== null) {
        t.pending = null;
        var o = r = r.next;
        do
            s = n(s, o.action),
            o = o.next;
        while (o !== r);
        qr(s, e.memoizedState) || (Di = !0),
        e.memoizedState = s,
        e.baseQueue === null && (e.baseState = s),
        t.lastRenderedState = s
    }
    return [s, i]
}
function cB() {}
function uB(n, e) {
    var t = cn
      , i = Br()
      , r = e()
      , s = !qr(i.memoizedState, r);
    if (s && (i.memoizedState = r,
    Di = !0),
    i = i.queue,
    D1(hB.bind(null, t, i, n), [n]),
    i.getSnapshot !== e || s || Vn !== null && Vn.memoizedState.tag & 1) {
        if (t.flags |= 2048,
        vf(9, fB.bind(null, t, i, r, e), void 0, null),
        jn === null)
            throw Error(be(349));
        xl & 30 || dB(t, e, r)
    }
    return r
}
function dB(n, e, t) {
    n.flags |= 16384,
    n = {
        getSnapshot: e,
        value: t
    },
    e = cn.updateQueue,
    e === null ? (e = {
        lastEffect: null,
        stores: null
    },
    cn.updateQueue = e,
    e.stores = [n]) : (t = e.stores,
    t === null ? e.stores = [n] : t.push(n))
}
function fB(n, e, t, i) {
    e.value = t,
    e.getSnapshot = i,
    pB(e) && mB(n)
}
function hB(n, e, t) {
    return t(function() {
        pB(e) && mB(n)
    })
}
function pB(n) {
    var e = n.getSnapshot;
    n = n.value;
    try {
        var t = e();
        return !qr(n, t)
    } catch {
        return !0
    }
}
function mB(n) {
    var e = oo(n, 1);
    e !== null && Kr(e, n, 1, -1)
}
function nC(n) {
    var e = fs();
    return typeof n == "function" && (n = n()),
    e.memoizedState = e.baseState = n,
    n = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: yf,
        lastRenderedState: n
    },
    e.queue = n,
    n = n.dispatch = VN.bind(null, cn, n),
    [e.memoizedState, n]
}
function vf(n, e, t, i) {
    return n = {
        tag: n,
        create: e,
        destroy: t,
        deps: i,
        next: null
    },
    e = cn.updateQueue,
    e === null ? (e = {
        lastEffect: null,
        stores: null
    },
    cn.updateQueue = e,
    e.lastEffect = n.next = n) : (t = e.lastEffect,
    t === null ? e.lastEffect = n.next = n : (i = t.next,
    t.next = n,
    n.next = i,
    e.lastEffect = n)),
    n
}
function gB() {
    return Br().memoizedState
}
function Vm(n, e, t, i) {
    var r = fs();
    cn.flags |= n,
    r.memoizedState = vf(1 | e, t, void 0, i === void 0 ? null : i)
}
function d0(n, e, t, i) {
    var r = Br();
    i = i === void 0 ? null : i;
    var s = void 0;
    if (In !== null) {
        var o = In.memoizedState;
        if (s = o.destroy,
        i !== null && L1(i, o.deps)) {
            r.memoizedState = vf(e, t, s, i);
            return
        }
    }
    cn.flags |= n,
    r.memoizedState = vf(1 | e, t, s, i)
}
function iC(n, e) {
    return Vm(8390656, 8, n, e)
}
function D1(n, e) {
    return d0(2048, 8, n, e)
}
function yB(n, e) {
    return d0(4, 2, n, e)
}
function vB(n, e) {
    return d0(4, 4, n, e)
}
function xB(n, e) {
    if (typeof e == "function")
        return n = n(),
        e(n),
        function() {
            e(null)
        }
        ;
    if (e != null)
        return n = n(),
        e.current = n,
        function() {
            e.current = null
        }
}
function wB(n, e, t) {
    return t = t != null ? t.concat([n]) : null,
    d0(4, 4, xB.bind(null, e, n), t)
}
function k1() {}
function AB(n, e) {
    var t = Br();
    e = e === void 0 ? null : e;
    var i = t.memoizedState;
    return i !== null && e !== null && L1(e, i[1]) ? i[0] : (t.memoizedState = [n, e],
    n)
}
function _B(n, e) {
    var t = Br();
    e = e === void 0 ? null : e;
    var i = t.memoizedState;
    return i !== null && e !== null && L1(e, i[1]) ? i[0] : (n = n(),
    t.memoizedState = [n, e],
    n)
}
function MB(n, e, t) {
    return xl & 21 ? (qr(t, e) || (t = CP(),
    cn.lanes |= t,
    wl |= t,
    n.baseState = !0),
    e) : (n.baseState && (n.baseState = !1,
    Di = !0),
    n.memoizedState = t)
}
function GN(n, e) {
    var t = Gt;
    Gt = t !== 0 && 4 > t ? t : 4,
    n(!0);
    var i = Sv.transition;
    Sv.transition = {};
    try {
        n(!1),
        e()
    } finally {
        Gt = t,
        Sv.transition = i
    }
}
function SB() {
    return Br().memoizedState
}
function HN(n, e, t) {
    var i = Zo(n);
    if (t = {
        lane: i,
        action: t,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    bB(n))
        CB(e, t);
    else if (t = nB(n, e, t, i),
    t !== null) {
        var r = wi();
        Kr(t, n, i, r),
        EB(t, e, i)
    }
}
function VN(n, e, t) {
    var i = Zo(n)
      , r = {
        lane: i,
        action: t,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (bB(n))
        CB(e, r);
    else {
        var s = n.alternate;
        if (n.lanes === 0 && (s === null || s.lanes === 0) && (s = e.lastRenderedReducer,
        s !== null))
            try {
                var o = e.lastRenderedState
                  , a = s(o, t);
                if (r.hasEagerState = !0,
                r.eagerState = a,
                qr(a, o)) {
                    var l = e.interleaved;
                    l === null ? (r.next = r,
                    C1(e)) : (r.next = l.next,
                    l.next = r),
                    e.interleaved = r;
                    return
                }
            } catch {} finally {}
        t = nB(n, e, r, i),
        t !== null && (r = wi(),
        Kr(t, n, i, r),
        EB(t, e, i))
    }
}
function bB(n) {
    var e = n.alternate;
    return n === cn || e !== null && e === cn
}
function CB(n, e) {
    Gd = Mg = !0;
    var t = n.pending;
    t === null ? e.next = e : (e.next = t.next,
    t.next = e),
    n.pending = e
}
function EB(n, e, t) {
    if (t & 4194240) {
        var i = e.lanes;
        i &= n.pendingLanes,
        t |= i,
        e.lanes = t,
        f1(n, t)
    }
}
var Sg = {
    readContext: Pr,
    useCallback: ri,
    useContext: ri,
    useEffect: ri,
    useImperativeHandle: ri,
    useInsertionEffect: ri,
    useLayoutEffect: ri,
    useMemo: ri,
    useReducer: ri,
    useRef: ri,
    useState: ri,
    useDebugValue: ri,
    useDeferredValue: ri,
    useTransition: ri,
    useMutableSource: ri,
    useSyncExternalStore: ri,
    useId: ri,
    unstable_isNewReconciler: !1
}
  , WN = {
    readContext: Pr,
    useCallback: function(n, e) {
        return fs().memoizedState = [n, e === void 0 ? null : e],
        n
    },
    useContext: Pr,
    useEffect: iC,
    useImperativeHandle: function(n, e, t) {
        return t = t != null ? t.concat([n]) : null,
        Vm(4194308, 4, xB.bind(null, e, n), t)
    },
    useLayoutEffect: function(n, e) {
        return Vm(4194308, 4, n, e)
    },
    useInsertionEffect: function(n, e) {
        return Vm(4, 2, n, e)
    },
    useMemo: function(n, e) {
        var t = fs();
        return e = e === void 0 ? null : e,
        n = n(),
        t.memoizedState = [n, e],
        n
    },
    useReducer: function(n, e, t) {
        var i = fs();
        return e = t !== void 0 ? t(e) : e,
        i.memoizedState = i.baseState = e,
        n = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: n,
            lastRenderedState: e
        },
        i.queue = n,
        n = n.dispatch = HN.bind(null, cn, n),
        [i.memoizedState, n]
    },
    useRef: function(n) {
        var e = fs();
        return n = {
            current: n
        },
        e.memoizedState = n
    },
    useState: nC,
    useDebugValue: k1,
    useDeferredValue: function(n) {
        return fs().memoizedState = n
    },
    useTransition: function() {
        var n = nC(!1)
          , e = n[0];
        return n = GN.bind(null, n[1]),
        fs().memoizedState = n,
        [e, n]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(n, e, t) {
        var i = cn
          , r = fs();
        if (en) {
            if (t === void 0)
                throw Error(be(407));
            t = t()
        } else {
            if (t = e(),
            jn === null)
                throw Error(be(349));
            xl & 30 || dB(i, e, t)
        }
        r.memoizedState = t;
        var s = {
            value: t,
            getSnapshot: e
        };
        return r.queue = s,
        iC(hB.bind(null, i, s, n), [n]),
        i.flags |= 2048,
        vf(9, fB.bind(null, i, s, t, e), void 0, null),
        t
    },
    useId: function() {
        var n = fs()
          , e = jn.identifierPrefix;
        if (en) {
            var t = Ks
              , i = Xs;
            t = (i & ~(1 << 32 - Xr(i) - 1)).toString(32) + t,
            e = ":" + e + "R" + t,
            t = gf++,
            0 < t && (e += "H" + t.toString(32)),
            e += ":"
        } else
            t = zN++,
            e = ":" + e + "r" + t.toString(32) + ":";
        return n.memoizedState = e
    },
    unstable_isNewReconciler: !1
}
  , jN = {
    readContext: Pr,
    useCallback: AB,
    useContext: Pr,
    useEffect: D1,
    useImperativeHandle: wB,
    useInsertionEffect: yB,
    useLayoutEffect: vB,
    useMemo: _B,
    useReducer: bv,
    useRef: gB,
    useState: function() {
        return bv(yf)
    },
    useDebugValue: k1,
    useDeferredValue: function(n) {
        var e = Br();
        return MB(e, In.memoizedState, n)
    },
    useTransition: function() {
        var n = bv(yf)[0]
          , e = Br().memoizedState;
        return [n, e]
    },
    useMutableSource: cB,
    useSyncExternalStore: uB,
    useId: SB,
    unstable_isNewReconciler: !1
}
  , JN = {
    readContext: Pr,
    useCallback: AB,
    useContext: Pr,
    useEffect: D1,
    useImperativeHandle: wB,
    useInsertionEffect: yB,
    useLayoutEffect: vB,
    useMemo: _B,
    useReducer: Cv,
    useRef: gB,
    useState: function() {
        return Cv(yf)
    },
    useDebugValue: k1,
    useDeferredValue: function(n) {
        var e = Br();
        return In === null ? e.memoizedState = n : MB(e, In.memoizedState, n)
    },
    useTransition: function() {
        var n = Cv(yf)[0]
          , e = Br().memoizedState;
        return [n, e]
    },
    useMutableSource: cB,
    useSyncExternalStore: uB,
    useId: SB,
    unstable_isNewReconciler: !1
};
function tu(n, e) {
    try {
        var t = ""
          , i = e;
        do
            t += wF(i),
            i = i.return;
        while (i);
        var r = t
    } catch (s) {
        r = `
Error generating stack: ` + s.message + `
` + s.stack
    }
    return {
        value: n,
        source: e,
        stack: r,
        digest: null
    }
}
function Ev(n, e, t) {
    return {
        value: n,
        source: null,
        stack: t ?? null,
        digest: e ?? null
    }
}
function xw(n, e) {
    try {
        console.error(e.value)
    } catch (t) {
        setTimeout(function() {
            throw t
        })
    }
}
var XN = typeof WeakMap == "function" ? WeakMap : Map;
function TB(n, e, t) {
    t = $s(-1, t),
    t.tag = 3,
    t.payload = {
        element: null
    };
    var i = e.value;
    return t.callback = function() {
        Cg || (Cg = !0,
        Pw = i),
        xw(n, e)
    }
    ,
    t
}
function PB(n, e, t) {
    t = $s(-1, t),
    t.tag = 3;
    var i = n.type.getDerivedStateFromError;
    if (typeof i == "function") {
        var r = e.value;
        t.payload = function() {
            return i(r)
        }
        ,
        t.callback = function() {
            xw(n, e)
        }
    }
    var s = n.stateNode;
    return s !== null && typeof s.componentDidCatch == "function" && (t.callback = function() {
        xw(n, e),
        typeof i != "function" && (qo === null ? qo = new Set([this]) : qo.add(this));
        var o = e.stack;
        this.componentDidCatch(e.value, {
            componentStack: o !== null ? o : ""
        })
    }
    ),
    t
}
function rC(n, e, t) {
    var i = n.pingCache;
    if (i === null) {
        i = n.pingCache = new XN;
        var r = new Set;
        i.set(e, r)
    } else
        r = i.get(e),
        r === void 0 && (r = new Set,
        i.set(e, r));
    r.has(t) || (r.add(t),
    n = aO.bind(null, n, e, t),
    e.then(n, n))
}
function sC(n) {
    do {
        var e;
        if ((e = n.tag === 13) && (e = n.memoizedState,
        e = e !== null ? e.dehydrated !== null : !0),
        e)
            return n;
        n = n.return
    } while (n !== null);
    return null
}
function oC(n, e, t, i, r) {
    return n.mode & 1 ? (n.flags |= 65536,
    n.lanes = r,
    n) : (n === e ? n.flags |= 65536 : (n.flags |= 128,
    t.flags |= 131072,
    t.flags &= -52805,
    t.tag === 1 && (t.alternate === null ? t.tag = 17 : (e = $s(-1, 1),
    e.tag = 2,
    Qo(t, e, 1))),
    t.lanes |= 1),
    n)
}
var KN = fo.ReactCurrentOwner
  , Di = !1;
function vi(n, e, t, i) {
    e.child = n === null ? aB(e, null, t, i) : $c(e, n.child, t, i)
}
function aC(n, e, t, i, r) {
    t = t.render;
    var s = e.ref;
    return Vc(e, r),
    i = R1(n, e, t, i, s, r),
    t = I1(),
    n !== null && !Di ? (e.updateQueue = n.updateQueue,
    e.flags &= -2053,
    n.lanes &= ~r,
    ao(n, e, r)) : (en && t && w1(e),
    e.flags |= 1,
    vi(n, e, i, r),
    e.child)
}
function lC(n, e, t, i, r) {
    if (n === null) {
        var s = t.type;
        return typeof s == "function" && !V1(s) && s.defaultProps === void 0 && t.compare === null && t.defaultProps === void 0 ? (e.tag = 15,
        e.type = s,
        BB(n, e, s, i, r)) : (n = Xm(t.type, null, i, e, e.mode, r),
        n.ref = e.ref,
        n.return = e,
        e.child = n)
    }
    if (s = n.child,
    !(n.lanes & r)) {
        var o = s.memoizedProps;
        if (t = t.compare,
        t = t !== null ? t : uf,
        t(o, i) && n.ref === e.ref)
            return ao(n, e, r)
    }
    return e.flags |= 1,
    n = $o(s, i),
    n.ref = e.ref,
    n.return = e,
    e.child = n
}
function BB(n, e, t, i, r) {
    if (n !== null) {
        var s = n.memoizedProps;
        if (uf(s, i) && n.ref === e.ref)
            if (Di = !1,
            e.pendingProps = i = s,
            (n.lanes & r) !== 0)
                n.flags & 131072 && (Di = !0);
            else
                return e.lanes = n.lanes,
                ao(n, e, r)
    }
    return ww(n, e, t, i, r)
}
function LB(n, e, t) {
    var i = e.pendingProps
      , r = i.children
      , s = n !== null ? n.memoizedState : null;
    if (i.mode === "hidden")
        if (!(e.mode & 1))
            e.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            Jt(Lc, Xi),
            Xi |= t;
        else {
            if (!(t & 1073741824))
                return n = s !== null ? s.baseLanes | t : t,
                e.lanes = e.childLanes = 1073741824,
                e.memoizedState = {
                    baseLanes: n,
                    cachePool: null,
                    transitions: null
                },
                e.updateQueue = null,
                Jt(Lc, Xi),
                Xi |= n,
                null;
            e.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            i = s !== null ? s.baseLanes : t,
            Jt(Lc, Xi),
            Xi |= i
        }
    else
        s !== null ? (i = s.baseLanes | t,
        e.memoizedState = null) : i = t,
        Jt(Lc, Xi),
        Xi |= i;
    return vi(n, e, r, t),
    e.child
}
function RB(n, e) {
    var t = e.ref;
    (n === null && t !== null || n !== null && n.ref !== t) && (e.flags |= 512,
    e.flags |= 2097152)
}
function ww(n, e, t, i, r) {
    var s = Fi(t) ? yl : ci.current;
    return s = qc(e, s),
    Vc(e, r),
    t = R1(n, e, t, i, s, r),
    i = I1(),
    n !== null && !Di ? (e.updateQueue = n.updateQueue,
    e.flags &= -2053,
    n.lanes &= ~r,
    ao(n, e, r)) : (en && i && w1(e),
    e.flags |= 1,
    vi(n, e, t, r),
    e.child)
}
function cC(n, e, t, i, r) {
    if (Fi(t)) {
        var s = !0;
        gg(e)
    } else
        s = !1;
    if (Vc(e, r),
    e.stateNode === null)
        Wm(n, e),
        sB(e, t, i),
        vw(e, t, i, r),
        i = !0;
    else if (n === null) {
        var o = e.stateNode
          , a = e.memoizedProps;
        o.props = a;
        var l = o.context
          , d = t.contextType;
        typeof d == "object" && d !== null ? d = Pr(d) : (d = Fi(t) ? yl : ci.current,
        d = qc(e, d));
        var f = t.getDerivedStateFromProps
          , h = typeof f == "function" || typeof o.getSnapshotBeforeUpdate == "function";
        h || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (a !== i || l !== d) && eC(e, o, i, d),
        ko = !1;
        var p = e.memoizedState;
        o.state = p,
        Ag(e, i, o, r),
        l = e.memoizedState,
        a !== i || p !== l || ki.current || ko ? (typeof f == "function" && (yw(e, t, f, i),
        l = e.memoizedState),
        (a = ko || $b(e, t, a, i, p, l, d)) ? (h || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(),
        typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()),
        typeof o.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (e.flags |= 4194308),
        e.memoizedProps = i,
        e.memoizedState = l),
        o.props = i,
        o.state = l,
        o.context = d,
        i = a) : (typeof o.componentDidMount == "function" && (e.flags |= 4194308),
        i = !1)
    } else {
        o = e.stateNode,
        iB(n, e),
        a = e.memoizedProps,
        d = e.type === e.elementType ? a : zr(e.type, a),
        o.props = d,
        h = e.pendingProps,
        p = o.context,
        l = t.contextType,
        typeof l == "object" && l !== null ? l = Pr(l) : (l = Fi(t) ? yl : ci.current,
        l = qc(e, l));
        var m = t.getDerivedStateFromProps;
        (f = typeof m == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (a !== h || p !== l) && eC(e, o, i, l),
        ko = !1,
        p = e.memoizedState,
        o.state = p,
        Ag(e, i, o, r);
        var y = e.memoizedState;
        a !== h || p !== y || ki.current || ko ? (typeof m == "function" && (yw(e, t, m, i),
        y = e.memoizedState),
        (d = ko || $b(e, t, d, i, p, y, l) || !1) ? (f || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(i, y, l),
        typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(i, y, l)),
        typeof o.componentDidUpdate == "function" && (e.flags |= 4),
        typeof o.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || a === n.memoizedProps && p === n.memoizedState || (e.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" || a === n.memoizedProps && p === n.memoizedState || (e.flags |= 1024),
        e.memoizedProps = i,
        e.memoizedState = y),
        o.props = i,
        o.state = y,
        o.context = l,
        i = d) : (typeof o.componentDidUpdate != "function" || a === n.memoizedProps && p === n.memoizedState || (e.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" || a === n.memoizedProps && p === n.memoizedState || (e.flags |= 1024),
        i = !1)
    }
    return Aw(n, e, t, i, s, r)
}
function Aw(n, e, t, i, r, s) {
    RB(n, e);
    var o = (e.flags & 128) !== 0;
    if (!i && !o)
        return r && Kb(e, t, !1),
        ao(n, e, s);
    i = e.stateNode,
    KN.current = e;
    var a = o && typeof t.getDerivedStateFromError != "function" ? null : i.render();
    return e.flags |= 1,
    n !== null && o ? (e.child = $c(e, n.child, null, s),
    e.child = $c(e, null, a, s)) : vi(n, e, a, s),
    e.memoizedState = i.state,
    r && Kb(e, t, !0),
    e.child
}
function IB(n) {
    var e = n.stateNode;
    e.pendingContext ? Xb(n, e.pendingContext, e.pendingContext !== e.context) : e.context && Xb(n, e.context, !1),
    T1(n, e.containerInfo)
}
function uC(n, e, t, i, r) {
    return Zc(),
    _1(r),
    e.flags |= 256,
    vi(n, e, t, i),
    e.child
}
var _w = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function Mw(n) {
    return {
        baseLanes: n,
        cachePool: null,
        transitions: null
    }
}
function DB(n, e, t) {
    var i = e.pendingProps, r = sn.current, s = !1, o = (e.flags & 128) !== 0, a;
    if ((a = o) || (a = n !== null && n.memoizedState === null ? !1 : (r & 2) !== 0),
    a ? (s = !0,
    e.flags &= -129) : (n === null || n.memoizedState !== null) && (r |= 1),
    Jt(sn, r & 1),
    n === null)
        return mw(e),
        n = e.memoizedState,
        n !== null && (n = n.dehydrated,
        n !== null) ? (e.mode & 1 ? n.data === "$!" ? e.lanes = 8 : e.lanes = 1073741824 : e.lanes = 1,
        null) : (o = i.children,
        n = i.fallback,
        s ? (i = e.mode,
        s = e.child,
        o = {
            mode: "hidden",
            children: o
        },
        !(i & 1) && s !== null ? (s.childLanes = 0,
        s.pendingProps = o) : s = p0(o, i, 0, null),
        n = ll(n, i, t, null),
        s.return = e,
        n.return = e,
        s.sibling = n,
        e.child = s,
        e.child.memoizedState = Mw(t),
        e.memoizedState = _w,
        n) : F1(e, o));
    if (r = n.memoizedState,
    r !== null && (a = r.dehydrated,
    a !== null))
        return YN(n, e, o, i, a, r, t);
    if (s) {
        s = i.fallback,
        o = e.mode,
        r = n.child,
        a = r.sibling;
        var l = {
            mode: "hidden",
            children: i.children
        };
        return !(o & 1) && e.child !== r ? (i = e.child,
        i.childLanes = 0,
        i.pendingProps = l,
        e.deletions = null) : (i = $o(r, l),
        i.subtreeFlags = r.subtreeFlags & 14680064),
        a !== null ? s = $o(a, s) : (s = ll(s, o, t, null),
        s.flags |= 2),
        s.return = e,
        i.return = e,
        i.sibling = s,
        e.child = i,
        i = s,
        s = e.child,
        o = n.child.memoizedState,
        o = o === null ? Mw(t) : {
            baseLanes: o.baseLanes | t,
            cachePool: null,
            transitions: o.transitions
        },
        s.memoizedState = o,
        s.childLanes = n.childLanes & ~t,
        e.memoizedState = _w,
        i
    }
    return s = n.child,
    n = s.sibling,
    i = $o(s, {
        mode: "visible",
        children: i.children
    }),
    !(e.mode & 1) && (i.lanes = t),
    i.return = e,
    i.sibling = null,
    n !== null && (t = e.deletions,
    t === null ? (e.deletions = [n],
    e.flags |= 16) : t.push(n)),
    e.child = i,
    e.memoizedState = null,
    i
}
function F1(n, e) {
    return e = p0({
        mode: "visible",
        children: e
    }, n.mode, 0, null),
    e.return = n,
    n.child = e
}
function Fp(n, e, t, i) {
    return i !== null && _1(i),
    $c(e, n.child, null, t),
    n = F1(e, e.pendingProps.children),
    n.flags |= 2,
    e.memoizedState = null,
    n
}
function YN(n, e, t, i, r, s, o) {
    if (t)
        return e.flags & 256 ? (e.flags &= -257,
        i = Ev(Error(be(422))),
        Fp(n, e, o, i)) : e.memoizedState !== null ? (e.child = n.child,
        e.flags |= 128,
        null) : (s = i.fallback,
        r = e.mode,
        i = p0({
            mode: "visible",
            children: i.children
        }, r, 0, null),
        s = ll(s, r, o, null),
        s.flags |= 2,
        i.return = e,
        s.return = e,
        i.sibling = s,
        e.child = i,
        e.mode & 1 && $c(e, n.child, null, o),
        e.child.memoizedState = Mw(o),
        e.memoizedState = _w,
        s);
    if (!(e.mode & 1))
        return Fp(n, e, o, null);
    if (r.data === "$!") {
        if (i = r.nextSibling && r.nextSibling.dataset,
        i)
            var a = i.dgst;
        return i = a,
        s = Error(be(419)),
        i = Ev(s, i, void 0),
        Fp(n, e, o, i)
    }
    if (a = (o & n.childLanes) !== 0,
    Di || a) {
        if (i = jn,
        i !== null) {
            switch (o & -o) {
            case 4:
                r = 2;
                break;
            case 16:
                r = 8;
                break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                r = 32;
                break;
            case 536870912:
                r = 268435456;
                break;
            default:
                r = 0
            }
            r = r & (i.suspendedLanes | o) ? 0 : r,
            r !== 0 && r !== s.retryLane && (s.retryLane = r,
            oo(n, r),
            Kr(i, n, r, -1))
        }
        return H1(),
        i = Ev(Error(be(421))),
        Fp(n, e, o, i)
    }
    return r.data === "$?" ? (e.flags |= 128,
    e.child = n.child,
    e = lO.bind(null, n),
    r._reactRetry = e,
    null) : (n = s.treeContext,
    Ki = Yo(r.nextSibling),
    Qi = e,
    en = !0,
    Vr = null,
    n !== null && (Mr[Sr++] = Xs,
    Mr[Sr++] = Ks,
    Mr[Sr++] = vl,
    Xs = n.id,
    Ks = n.overflow,
    vl = e),
    e = F1(e, i.children),
    e.flags |= 4096,
    e)
}
function dC(n, e, t) {
    n.lanes |= e;
    var i = n.alternate;
    i !== null && (i.lanes |= e),
    gw(n.return, e, t)
}
function Tv(n, e, t, i, r) {
    var s = n.memoizedState;
    s === null ? n.memoizedState = {
        isBackwards: e,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: t,
        tailMode: r
    } : (s.isBackwards = e,
    s.rendering = null,
    s.renderingStartTime = 0,
    s.last = i,
    s.tail = t,
    s.tailMode = r)
}
function kB(n, e, t) {
    var i = e.pendingProps
      , r = i.revealOrder
      , s = i.tail;
    if (vi(n, e, i.children, t),
    i = sn.current,
    i & 2)
        i = i & 1 | 2,
        e.flags |= 128;
    else {
        if (n !== null && n.flags & 128)
            e: for (n = e.child; n !== null; ) {
                if (n.tag === 13)
                    n.memoizedState !== null && dC(n, t, e);
                else if (n.tag === 19)
                    dC(n, t, e);
                else if (n.child !== null) {
                    n.child.return = n,
                    n = n.child;
                    continue
                }
                if (n === e)
                    break e;
                for (; n.sibling === null; ) {
                    if (n.return === null || n.return === e)
                        break e;
                    n = n.return
                }
                n.sibling.return = n.return,
                n = n.sibling
            }
        i &= 1
    }
    if (Jt(sn, i),
    !(e.mode & 1))
        e.memoizedState = null;
    else
        switch (r) {
        case "forwards":
            for (t = e.child,
            r = null; t !== null; )
                n = t.alternate,
                n !== null && _g(n) === null && (r = t),
                t = t.sibling;
            t = r,
            t === null ? (r = e.child,
            e.child = null) : (r = t.sibling,
            t.sibling = null),
            Tv(e, !1, r, t, s);
            break;
        case "backwards":
            for (t = null,
            r = e.child,
            e.child = null; r !== null; ) {
                if (n = r.alternate,
                n !== null && _g(n) === null) {
                    e.child = r;
                    break
                }
                n = r.sibling,
                r.sibling = t,
                t = r,
                r = n
            }
            Tv(e, !0, t, null, s);
            break;
        case "together":
            Tv(e, !1, null, null, void 0);
            break;
        default:
            e.memoizedState = null
        }
    return e.child
}
function Wm(n, e) {
    !(e.mode & 1) && n !== null && (n.alternate = null,
    e.alternate = null,
    e.flags |= 2)
}
function ao(n, e, t) {
    if (n !== null && (e.dependencies = n.dependencies),
    wl |= e.lanes,
    !(t & e.childLanes))
        return null;
    if (n !== null && e.child !== n.child)
        throw Error(be(153));
    if (e.child !== null) {
        for (n = e.child,
        t = $o(n, n.pendingProps),
        e.child = t,
        t.return = e; n.sibling !== null; )
            n = n.sibling,
            t = t.sibling = $o(n, n.pendingProps),
            t.return = e;
        t.sibling = null
    }
    return e.child
}
function QN(n, e, t) {
    switch (e.tag) {
    case 3:
        IB(e),
        Zc();
        break;
    case 5:
        lB(e);
        break;
    case 1:
        Fi(e.type) && gg(e);
        break;
    case 4:
        T1(e, e.stateNode.containerInfo);
        break;
    case 10:
        var i = e.type._context
          , r = e.memoizedProps.value;
        Jt(xg, i._currentValue),
        i._currentValue = r;
        break;
    case 13:
        if (i = e.memoizedState,
        i !== null)
            return i.dehydrated !== null ? (Jt(sn, sn.current & 1),
            e.flags |= 128,
            null) : t & e.child.childLanes ? DB(n, e, t) : (Jt(sn, sn.current & 1),
            n = ao(n, e, t),
            n !== null ? n.sibling : null);
        Jt(sn, sn.current & 1);
        break;
    case 19:
        if (i = (t & e.childLanes) !== 0,
        n.flags & 128) {
            if (i)
                return kB(n, e, t);
            e.flags |= 128
        }
        if (r = e.memoizedState,
        r !== null && (r.rendering = null,
        r.tail = null,
        r.lastEffect = null),
        Jt(sn, sn.current),
        i)
            break;
        return null;
    case 22:
    case 23:
        return e.lanes = 0,
        LB(n, e, t)
    }
    return ao(n, e, t)
}
var FB, Sw, NB, OB;
FB = function(n, e) {
    for (var t = e.child; t !== null; ) {
        if (t.tag === 5 || t.tag === 6)
            n.appendChild(t.stateNode);
        else if (t.tag !== 4 && t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
}
;
Sw = function() {}
;
NB = function(n, e, t, i) {
    var r = n.memoizedProps;
    if (r !== i) {
        n = e.stateNode,
        $a(ys.current);
        var s = null;
        switch (t) {
        case "input":
            r = Jx(n, r),
            i = Jx(n, i),
            s = [];
            break;
        case "select":
            r = un({}, r, {
                value: void 0
            }),
            i = un({}, i, {
                value: void 0
            }),
            s = [];
            break;
        case "textarea":
            r = Yx(n, r),
            i = Yx(n, i),
            s = [];
            break;
        default:
            typeof r.onClick != "function" && typeof i.onClick == "function" && (n.onclick = pg)
        }
        qx(t, i);
        var o;
        t = null;
        for (d in r)
            if (!i.hasOwnProperty(d) && r.hasOwnProperty(d) && r[d] != null)
                if (d === "style") {
                    var a = r[d];
                    for (o in a)
                        a.hasOwnProperty(o) && (t || (t = {}),
                        t[o] = "")
                } else
                    d !== "dangerouslySetInnerHTML" && d !== "children" && d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (nf.hasOwnProperty(d) ? s || (s = []) : (s = s || []).push(d, null));
        for (d in i) {
            var l = i[d];
            if (a = r != null ? r[d] : void 0,
            i.hasOwnProperty(d) && l !== a && (l != null || a != null))
                if (d === "style")
                    if (a) {
                        for (o in a)
                            !a.hasOwnProperty(o) || l && l.hasOwnProperty(o) || (t || (t = {}),
                            t[o] = "");
                        for (o in l)
                            l.hasOwnProperty(o) && a[o] !== l[o] && (t || (t = {}),
                            t[o] = l[o])
                    } else
                        t || (s || (s = []),
                        s.push(d, t)),
                        t = l;
                else
                    d === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                    a = a ? a.__html : void 0,
                    l != null && a !== l && (s = s || []).push(d, l)) : d === "children" ? typeof l != "string" && typeof l != "number" || (s = s || []).push(d, "" + l) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && (nf.hasOwnProperty(d) ? (l != null && d === "onScroll" && Yt("scroll", n),
                    s || a === l || (s = [])) : (s = s || []).push(d, l))
        }
        t && (s = s || []).push("style", t);
        var d = s;
        (e.updateQueue = d) && (e.flags |= 4)
    }
}
;
OB = function(n, e, t, i) {
    t !== i && (e.flags |= 4)
}
;
function od(n, e) {
    if (!en)
        switch (n.tailMode) {
        case "hidden":
            e = n.tail;
            for (var t = null; e !== null; )
                e.alternate !== null && (t = e),
                e = e.sibling;
            t === null ? n.tail = null : t.sibling = null;
            break;
        case "collapsed":
            t = n.tail;
            for (var i = null; t !== null; )
                t.alternate !== null && (i = t),
                t = t.sibling;
            i === null ? e || n.tail === null ? n.tail = null : n.tail.sibling = null : i.sibling = null
        }
}
function si(n) {
    var e = n.alternate !== null && n.alternate.child === n.child
      , t = 0
      , i = 0;
    if (e)
        for (var r = n.child; r !== null; )
            t |= r.lanes | r.childLanes,
            i |= r.subtreeFlags & 14680064,
            i |= r.flags & 14680064,
            r.return = n,
            r = r.sibling;
    else
        for (r = n.child; r !== null; )
            t |= r.lanes | r.childLanes,
            i |= r.subtreeFlags,
            i |= r.flags,
            r.return = n,
            r = r.sibling;
    return n.subtreeFlags |= i,
    n.childLanes = t,
    e
}
function qN(n, e, t) {
    var i = e.pendingProps;
    switch (A1(e),
    e.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
        return si(e),
        null;
    case 1:
        return Fi(e.type) && mg(),
        si(e),
        null;
    case 3:
        return i = e.stateNode,
        eu(),
        Qt(ki),
        Qt(ci),
        B1(),
        i.pendingContext && (i.context = i.pendingContext,
        i.pendingContext = null),
        (n === null || n.child === null) && (Dp(e) ? e.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(e.flags & 256) || (e.flags |= 1024,
        Vr !== null && (Rw(Vr),
        Vr = null))),
        Sw(n, e),
        si(e),
        null;
    case 5:
        P1(e);
        var r = $a(mf.current);
        if (t = e.type,
        n !== null && e.stateNode != null)
            NB(n, e, t, i, r),
            n.ref !== e.ref && (e.flags |= 512,
            e.flags |= 2097152);
        else {
            if (!i) {
                if (e.stateNode === null)
                    throw Error(be(166));
                return si(e),
                null
            }
            if (n = $a(ys.current),
            Dp(e)) {
                i = e.stateNode,
                t = e.type;
                var s = e.memoizedProps;
                switch (i[ms] = e,
                i[hf] = s,
                n = (e.mode & 1) !== 0,
                t) {
                case "dialog":
                    Yt("cancel", i),
                    Yt("close", i);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    Yt("load", i);
                    break;
                case "video":
                case "audio":
                    for (r = 0; r < Id.length; r++)
                        Yt(Id[r], i);
                    break;
                case "source":
                    Yt("error", i);
                    break;
                case "img":
                case "image":
                case "link":
                    Yt("error", i),
                    Yt("load", i);
                    break;
                case "details":
                    Yt("toggle", i);
                    break;
                case "input":
                    wb(i, s),
                    Yt("invalid", i);
                    break;
                case "select":
                    i._wrapperState = {
                        wasMultiple: !!s.multiple
                    },
                    Yt("invalid", i);
                    break;
                case "textarea":
                    _b(i, s),
                    Yt("invalid", i)
                }
                qx(t, s),
                r = null;
                for (var o in s)
                    if (s.hasOwnProperty(o)) {
                        var a = s[o];
                        o === "children" ? typeof a == "string" ? i.textContent !== a && (s.suppressHydrationWarning !== !0 && Ip(i.textContent, a, n),
                        r = ["children", a]) : typeof a == "number" && i.textContent !== "" + a && (s.suppressHydrationWarning !== !0 && Ip(i.textContent, a, n),
                        r = ["children", "" + a]) : nf.hasOwnProperty(o) && a != null && o === "onScroll" && Yt("scroll", i)
                    }
                switch (t) {
                case "input":
                    bp(i),
                    Ab(i, s, !0);
                    break;
                case "textarea":
                    bp(i),
                    Mb(i);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof s.onClick == "function" && (i.onclick = pg)
                }
                i = r,
                e.updateQueue = i,
                i !== null && (e.flags |= 4)
            } else {
                o = r.nodeType === 9 ? r : r.ownerDocument,
                n === "http://www.w3.org/1999/xhtml" && (n = dP(t)),
                n === "http://www.w3.org/1999/xhtml" ? t === "script" ? (n = o.createElement("div"),
                n.innerHTML = "<script><\/script>",
                n = n.removeChild(n.firstChild)) : typeof i.is == "string" ? n = o.createElement(t, {
                    is: i.is
                }) : (n = o.createElement(t),
                t === "select" && (o = n,
                i.multiple ? o.multiple = !0 : i.size && (o.size = i.size))) : n = o.createElementNS(n, t),
                n[ms] = e,
                n[hf] = i,
                FB(n, e, !1, !1),
                e.stateNode = n;
                e: {
                    switch (o = Zx(t, i),
                    t) {
                    case "dialog":
                        Yt("cancel", n),
                        Yt("close", n),
                        r = i;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        Yt("load", n),
                        r = i;
                        break;
                    case "video":
                    case "audio":
                        for (r = 0; r < Id.length; r++)
                            Yt(Id[r], n);
                        r = i;
                        break;
                    case "source":
                        Yt("error", n),
                        r = i;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        Yt("error", n),
                        Yt("load", n),
                        r = i;
                        break;
                    case "details":
                        Yt("toggle", n),
                        r = i;
                        break;
                    case "input":
                        wb(n, i),
                        r = Jx(n, i),
                        Yt("invalid", n);
                        break;
                    case "option":
                        r = i;
                        break;
                    case "select":
                        n._wrapperState = {
                            wasMultiple: !!i.multiple
                        },
                        r = un({}, i, {
                            value: void 0
                        }),
                        Yt("invalid", n);
                        break;
                    case "textarea":
                        _b(n, i),
                        r = Yx(n, i),
                        Yt("invalid", n);
                        break;
                    default:
                        r = i
                    }
                    qx(t, r),
                    a = r;
                    for (s in a)
                        if (a.hasOwnProperty(s)) {
                            var l = a[s];
                            s === "style" ? pP(n, l) : s === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                            l != null && fP(n, l)) : s === "children" ? typeof l == "string" ? (t !== "textarea" || l !== "") && rf(n, l) : typeof l == "number" && rf(n, "" + l) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (nf.hasOwnProperty(s) ? l != null && s === "onScroll" && Yt("scroll", n) : l != null && o1(n, s, l, o))
                        }
                    switch (t) {
                    case "input":
                        bp(n),
                        Ab(n, i, !1);
                        break;
                    case "textarea":
                        bp(n),
                        Mb(n);
                        break;
                    case "option":
                        i.value != null && n.setAttribute("value", "" + ia(i.value));
                        break;
                    case "select":
                        n.multiple = !!i.multiple,
                        s = i.value,
                        s != null ? Uc(n, !!i.multiple, s, !1) : i.defaultValue != null && Uc(n, !!i.multiple, i.defaultValue, !0);
                        break;
                    default:
                        typeof r.onClick == "function" && (n.onclick = pg)
                    }
                    switch (t) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        i = !!i.autoFocus;
                        break e;
                    case "img":
                        i = !0;
                        break e;
                    default:
                        i = !1
                    }
                }
                i && (e.flags |= 4)
            }
            e.ref !== null && (e.flags |= 512,
            e.flags |= 2097152)
        }
        return si(e),
        null;
    case 6:
        if (n && e.stateNode != null)
            OB(n, e, n.memoizedProps, i);
        else {
            if (typeof i != "string" && e.stateNode === null)
                throw Error(be(166));
            if (t = $a(mf.current),
            $a(ys.current),
            Dp(e)) {
                if (i = e.stateNode,
                t = e.memoizedProps,
                i[ms] = e,
                (s = i.nodeValue !== t) && (n = Qi,
                n !== null))
                    switch (n.tag) {
                    case 3:
                        Ip(i.nodeValue, t, (n.mode & 1) !== 0);
                        break;
                    case 5:
                        n.memoizedProps.suppressHydrationWarning !== !0 && Ip(i.nodeValue, t, (n.mode & 1) !== 0)
                    }
                s && (e.flags |= 4)
            } else
                i = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(i),
                i[ms] = e,
                e.stateNode = i
        }
        return si(e),
        null;
    case 13:
        if (Qt(sn),
        i = e.memoizedState,
        n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
            if (en && Ki !== null && e.mode & 1 && !(e.flags & 128))
                tB(),
                Zc(),
                e.flags |= 98560,
                s = !1;
            else if (s = Dp(e),
            i !== null && i.dehydrated !== null) {
                if (n === null) {
                    if (!s)
                        throw Error(be(318));
                    if (s = e.memoizedState,
                    s = s !== null ? s.dehydrated : null,
                    !s)
                        throw Error(be(317));
                    s[ms] = e
                } else
                    Zc(),
                    !(e.flags & 128) && (e.memoizedState = null),
                    e.flags |= 4;
                si(e),
                s = !1
            } else
                Vr !== null && (Rw(Vr),
                Vr = null),
                s = !0;
            if (!s)
                return e.flags & 65536 ? e : null
        }
        return e.flags & 128 ? (e.lanes = t,
        e) : (i = i !== null,
        i !== (n !== null && n.memoizedState !== null) && i && (e.child.flags |= 8192,
        e.mode & 1 && (n === null || sn.current & 1 ? Dn === 0 && (Dn = 3) : H1())),
        e.updateQueue !== null && (e.flags |= 4),
        si(e),
        null);
    case 4:
        return eu(),
        Sw(n, e),
        n === null && df(e.stateNode.containerInfo),
        si(e),
        null;
    case 10:
        return b1(e.type._context),
        si(e),
        null;
    case 17:
        return Fi(e.type) && mg(),
        si(e),
        null;
    case 19:
        if (Qt(sn),
        s = e.memoizedState,
        s === null)
            return si(e),
            null;
        if (i = (e.flags & 128) !== 0,
        o = s.rendering,
        o === null)
            if (i)
                od(s, !1);
            else {
                if (Dn !== 0 || n !== null && n.flags & 128)
                    for (n = e.child; n !== null; ) {
                        if (o = _g(n),
                        o !== null) {
                            for (e.flags |= 128,
                            od(s, !1),
                            i = o.updateQueue,
                            i !== null && (e.updateQueue = i,
                            e.flags |= 4),
                            e.subtreeFlags = 0,
                            i = t,
                            t = e.child; t !== null; )
                                s = t,
                                n = i,
                                s.flags &= 14680066,
                                o = s.alternate,
                                o === null ? (s.childLanes = 0,
                                s.lanes = n,
                                s.child = null,
                                s.subtreeFlags = 0,
                                s.memoizedProps = null,
                                s.memoizedState = null,
                                s.updateQueue = null,
                                s.dependencies = null,
                                s.stateNode = null) : (s.childLanes = o.childLanes,
                                s.lanes = o.lanes,
                                s.child = o.child,
                                s.subtreeFlags = 0,
                                s.deletions = null,
                                s.memoizedProps = o.memoizedProps,
                                s.memoizedState = o.memoizedState,
                                s.updateQueue = o.updateQueue,
                                s.type = o.type,
                                n = o.dependencies,
                                s.dependencies = n === null ? null : {
                                    lanes: n.lanes,
                                    firstContext: n.firstContext
                                }),
                                t = t.sibling;
                            return Jt(sn, sn.current & 1 | 2),
                            e.child
                        }
                        n = n.sibling
                    }
                s.tail !== null && An() > nu && (e.flags |= 128,
                i = !0,
                od(s, !1),
                e.lanes = 4194304)
            }
        else {
            if (!i)
                if (n = _g(o),
                n !== null) {
                    if (e.flags |= 128,
                    i = !0,
                    t = n.updateQueue,
                    t !== null && (e.updateQueue = t,
                    e.flags |= 4),
                    od(s, !0),
                    s.tail === null && s.tailMode === "hidden" && !o.alternate && !en)
                        return si(e),
                        null
                } else
                    2 * An() - s.renderingStartTime > nu && t !== 1073741824 && (e.flags |= 128,
                    i = !0,
                    od(s, !1),
                    e.lanes = 4194304);
            s.isBackwards ? (o.sibling = e.child,
            e.child = o) : (t = s.last,
            t !== null ? t.sibling = o : e.child = o,
            s.last = o)
        }
        return s.tail !== null ? (e = s.tail,
        s.rendering = e,
        s.tail = e.sibling,
        s.renderingStartTime = An(),
        e.sibling = null,
        t = sn.current,
        Jt(sn, i ? t & 1 | 2 : t & 1),
        e) : (si(e),
        null);
    case 22:
    case 23:
        return G1(),
        i = e.memoizedState !== null,
        n !== null && n.memoizedState !== null !== i && (e.flags |= 8192),
        i && e.mode & 1 ? Xi & 1073741824 && (si(e),
        e.subtreeFlags & 6 && (e.flags |= 8192)) : si(e),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(be(156, e.tag))
}
function ZN(n, e) {
    switch (A1(e),
    e.tag) {
    case 1:
        return Fi(e.type) && mg(),
        n = e.flags,
        n & 65536 ? (e.flags = n & -65537 | 128,
        e) : null;
    case 3:
        return eu(),
        Qt(ki),
        Qt(ci),
        B1(),
        n = e.flags,
        n & 65536 && !(n & 128) ? (e.flags = n & -65537 | 128,
        e) : null;
    case 5:
        return P1(e),
        null;
    case 13:
        if (Qt(sn),
        n = e.memoizedState,
        n !== null && n.dehydrated !== null) {
            if (e.alternate === null)
                throw Error(be(340));
            Zc()
        }
        return n = e.flags,
        n & 65536 ? (e.flags = n & -65537 | 128,
        e) : null;
    case 19:
        return Qt(sn),
        null;
    case 4:
        return eu(),
        null;
    case 10:
        return b1(e.type._context),
        null;
    case 22:
    case 23:
        return G1(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var Np = !1
  , li = !1
  , $N = typeof WeakSet == "function" ? WeakSet : Set
  , He = null;
function Bc(n, e) {
    var t = n.ref;
    if (t !== null)
        if (typeof t == "function")
            try {
                t(null)
            } catch (i) {
                mn(n, e, i)
            }
        else
            t.current = null
}
function bw(n, e, t) {
    try {
        t()
    } catch (i) {
        mn(n, e, i)
    }
}
var fC = !1;
function eO(n, e) {
    if (lw = dg,
    n = HP(),
    x1(n)) {
        if ("selectionStart"in n)
            var t = {
                start: n.selectionStart,
                end: n.selectionEnd
            };
        else
            e: {
                t = (t = n.ownerDocument) && t.defaultView || window;
                var i = t.getSelection && t.getSelection();
                if (i && i.rangeCount !== 0) {
                    t = i.anchorNode;
                    var r = i.anchorOffset
                      , s = i.focusNode;
                    i = i.focusOffset;
                    try {
                        t.nodeType,
                        s.nodeType
                    } catch {
                        t = null;
                        break e
                    }
                    var o = 0
                      , a = -1
                      , l = -1
                      , d = 0
                      , f = 0
                      , h = n
                      , p = null;
                    t: for (; ; ) {
                        for (var m; h !== t || r !== 0 && h.nodeType !== 3 || (a = o + r),
                        h !== s || i !== 0 && h.nodeType !== 3 || (l = o + i),
                        h.nodeType === 3 && (o += h.nodeValue.length),
                        (m = h.firstChild) !== null; )
                            p = h,
                            h = m;
                        for (; ; ) {
                            if (h === n)
                                break t;
                            if (p === t && ++d === r && (a = o),
                            p === s && ++f === i && (l = o),
                            (m = h.nextSibling) !== null)
                                break;
                            h = p,
                            p = h.parentNode
                        }
                        h = m
                    }
                    t = a === -1 || l === -1 ? null : {
                        start: a,
                        end: l
                    }
                } else
                    t = null
            }
        t = t || {
            start: 0,
            end: 0
        }
    } else
        t = null;
    for (cw = {
        focusedElem: n,
        selectionRange: t
    },
    dg = !1,
    He = e; He !== null; )
        if (e = He,
        n = e.child,
        (e.subtreeFlags & 1028) !== 0 && n !== null)
            n.return = e,
            He = n;
        else
            for (; He !== null; ) {
                e = He;
                try {
                    var y = e.alternate;
                    if (e.flags & 1024)
                        switch (e.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (y !== null) {
                                var v = y.memoizedProps
                                  , x = y.memoizedState
                                  , w = e.stateNode
                                  , A = w.getSnapshotBeforeUpdate(e.elementType === e.type ? v : zr(e.type, v), x);
                                w.__reactInternalSnapshotBeforeUpdate = A
                            }
                            break;
                        case 3:
                            var M = e.stateNode.containerInfo;
                            M.nodeType === 1 ? M.textContent = "" : M.nodeType === 9 && M.documentElement && M.removeChild(M.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(be(163))
                        }
                } catch (S) {
                    mn(e, e.return, S)
                }
                if (n = e.sibling,
                n !== null) {
                    n.return = e.return,
                    He = n;
                    break
                }
                He = e.return
            }
    return y = fC,
    fC = !1,
    y
}
function Hd(n, e, t) {
    var i = e.updateQueue;
    if (i = i !== null ? i.lastEffect : null,
    i !== null) {
        var r = i = i.next;
        do {
            if ((r.tag & n) === n) {
                var s = r.destroy;
                r.destroy = void 0,
                s !== void 0 && bw(e, t, s)
            }
            r = r.next
        } while (r !== i)
    }
}
function f0(n, e) {
    if (e = e.updateQueue,
    e = e !== null ? e.lastEffect : null,
    e !== null) {
        var t = e = e.next;
        do {
            if ((t.tag & n) === n) {
                var i = t.create;
                t.destroy = i()
            }
            t = t.next
        } while (t !== e)
    }
}
function Cw(n) {
    var e = n.ref;
    if (e !== null) {
        var t = n.stateNode;
        switch (n.tag) {
        case 5:
            n = t;
            break;
        default:
            n = t
        }
        typeof e == "function" ? e(n) : e.current = n
    }
}
function UB(n) {
    var e = n.alternate;
    e !== null && (n.alternate = null,
    UB(e)),
    n.child = null,
    n.deletions = null,
    n.sibling = null,
    n.tag === 5 && (e = n.stateNode,
    e !== null && (delete e[ms],
    delete e[hf],
    delete e[fw],
    delete e[FN],
    delete e[NN])),
    n.stateNode = null,
    n.return = null,
    n.dependencies = null,
    n.memoizedProps = null,
    n.memoizedState = null,
    n.pendingProps = null,
    n.stateNode = null,
    n.updateQueue = null
}
function zB(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4
}
function hC(n) {
    e: for (; ; ) {
        for (; n.sibling === null; ) {
            if (n.return === null || zB(n.return))
                return null;
            n = n.return
        }
        for (n.sibling.return = n.return,
        n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
            if (n.flags & 2 || n.child === null || n.tag === 4)
                continue e;
            n.child.return = n,
            n = n.child
        }
        if (!(n.flags & 2))
            return n.stateNode
    }
}
function Ew(n, e, t) {
    var i = n.tag;
    if (i === 5 || i === 6)
        n = n.stateNode,
        e ? t.nodeType === 8 ? t.parentNode.insertBefore(n, e) : t.insertBefore(n, e) : (t.nodeType === 8 ? (e = t.parentNode,
        e.insertBefore(n, t)) : (e = t,
        e.appendChild(n)),
        t = t._reactRootContainer,
        t != null || e.onclick !== null || (e.onclick = pg));
    else if (i !== 4 && (n = n.child,
    n !== null))
        for (Ew(n, e, t),
        n = n.sibling; n !== null; )
            Ew(n, e, t),
            n = n.sibling
}
function Tw(n, e, t) {
    var i = n.tag;
    if (i === 5 || i === 6)
        n = n.stateNode,
        e ? t.insertBefore(n, e) : t.appendChild(n);
    else if (i !== 4 && (n = n.child,
    n !== null))
        for (Tw(n, e, t),
        n = n.sibling; n !== null; )
            Tw(n, e, t),
            n = n.sibling
}
var Kn = null
  , Gr = !1;
function So(n, e, t) {
    for (t = t.child; t !== null; )
        GB(n, e, t),
        t = t.sibling
}
function GB(n, e, t) {
    if (gs && typeof gs.onCommitFiberUnmount == "function")
        try {
            gs.onCommitFiberUnmount(r0, t)
        } catch {}
    switch (t.tag) {
    case 5:
        li || Bc(t, e);
    case 6:
        var i = Kn
          , r = Gr;
        Kn = null,
        So(n, e, t),
        Kn = i,
        Gr = r,
        Kn !== null && (Gr ? (n = Kn,
        t = t.stateNode,
        n.nodeType === 8 ? n.parentNode.removeChild(t) : n.removeChild(t)) : Kn.removeChild(t.stateNode));
        break;
    case 18:
        Kn !== null && (Gr ? (n = Kn,
        t = t.stateNode,
        n.nodeType === 8 ? Av(n.parentNode, t) : n.nodeType === 1 && Av(n, t),
        lf(n)) : Av(Kn, t.stateNode));
        break;
    case 4:
        i = Kn,
        r = Gr,
        Kn = t.stateNode.containerInfo,
        Gr = !0,
        So(n, e, t),
        Kn = i,
        Gr = r;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!li && (i = t.updateQueue,
        i !== null && (i = i.lastEffect,
        i !== null))) {
            r = i = i.next;
            do {
                var s = r
                  , o = s.destroy;
                s = s.tag,
                o !== void 0 && (s & 2 || s & 4) && bw(t, e, o),
                r = r.next
            } while (r !== i)
        }
        So(n, e, t);
        break;
    case 1:
        if (!li && (Bc(t, e),
        i = t.stateNode,
        typeof i.componentWillUnmount == "function"))
            try {
                i.props = t.memoizedProps,
                i.state = t.memoizedState,
                i.componentWillUnmount()
            } catch (a) {
                mn(t, e, a)
            }
        So(n, e, t);
        break;
    case 21:
        So(n, e, t);
        break;
    case 22:
        t.mode & 1 ? (li = (i = li) || t.memoizedState !== null,
        So(n, e, t),
        li = i) : So(n, e, t);
        break;
    default:
        So(n, e, t)
    }
}
function pC(n) {
    var e = n.updateQueue;
    if (e !== null) {
        n.updateQueue = null;
        var t = n.stateNode;
        t === null && (t = n.stateNode = new $N),
        e.forEach(function(i) {
            var r = cO.bind(null, n, i);
            t.has(i) || (t.add(i),
            i.then(r, r))
        })
    }
}
function Fr(n, e) {
    var t = e.deletions;
    if (t !== null)
        for (var i = 0; i < t.length; i++) {
            var r = t[i];
            try {
                var s = n
                  , o = e
                  , a = o;
                e: for (; a !== null; ) {
                    switch (a.tag) {
                    case 5:
                        Kn = a.stateNode,
                        Gr = !1;
                        break e;
                    case 3:
                        Kn = a.stateNode.containerInfo,
                        Gr = !0;
                        break e;
                    case 4:
                        Kn = a.stateNode.containerInfo,
                        Gr = !0;
                        break e
                    }
                    a = a.return
                }
                if (Kn === null)
                    throw Error(be(160));
                GB(s, o, r),
                Kn = null,
                Gr = !1;
                var l = r.alternate;
                l !== null && (l.return = null),
                r.return = null
            } catch (d) {
                mn(r, e, d)
            }
        }
    if (e.subtreeFlags & 12854)
        for (e = e.child; e !== null; )
            HB(e, n),
            e = e.sibling
}
function HB(n, e) {
    var t = n.alternate
      , i = n.flags;
    switch (n.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (Fr(e, n),
        ds(n),
        i & 4) {
            try {
                Hd(3, n, n.return),
                f0(3, n)
            } catch (v) {
                mn(n, n.return, v)
            }
            try {
                Hd(5, n, n.return)
            } catch (v) {
                mn(n, n.return, v)
            }
        }
        break;
    case 1:
        Fr(e, n),
        ds(n),
        i & 512 && t !== null && Bc(t, t.return);
        break;
    case 5:
        if (Fr(e, n),
        ds(n),
        i & 512 && t !== null && Bc(t, t.return),
        n.flags & 32) {
            var r = n.stateNode;
            try {
                rf(r, "")
            } catch (v) {
                mn(n, n.return, v)
            }
        }
        if (i & 4 && (r = n.stateNode,
        r != null)) {
            var s = n.memoizedProps
              , o = t !== null ? t.memoizedProps : s
              , a = n.type
              , l = n.updateQueue;
            if (n.updateQueue = null,
            l !== null)
                try {
                    a === "input" && s.type === "radio" && s.name != null && cP(r, s),
                    Zx(a, o);
                    var d = Zx(a, s);
                    for (o = 0; o < l.length; o += 2) {
                        var f = l[o]
                          , h = l[o + 1];
                        f === "style" ? pP(r, h) : f === "dangerouslySetInnerHTML" ? fP(r, h) : f === "children" ? rf(r, h) : o1(r, f, h, d)
                    }
                    switch (a) {
                    case "input":
                        Xx(r, s);
                        break;
                    case "textarea":
                        uP(r, s);
                        break;
                    case "select":
                        var p = r._wrapperState.wasMultiple;
                        r._wrapperState.wasMultiple = !!s.multiple;
                        var m = s.value;
                        m != null ? Uc(r, !!s.multiple, m, !1) : p !== !!s.multiple && (s.defaultValue != null ? Uc(r, !!s.multiple, s.defaultValue, !0) : Uc(r, !!s.multiple, s.multiple ? [] : "", !1))
                    }
                    r[hf] = s
                } catch (v) {
                    mn(n, n.return, v)
                }
        }
        break;
    case 6:
        if (Fr(e, n),
        ds(n),
        i & 4) {
            if (n.stateNode === null)
                throw Error(be(162));
            r = n.stateNode,
            s = n.memoizedProps;
            try {
                r.nodeValue = s
            } catch (v) {
                mn(n, n.return, v)
            }
        }
        break;
    case 3:
        if (Fr(e, n),
        ds(n),
        i & 4 && t !== null && t.memoizedState.isDehydrated)
            try {
                lf(e.containerInfo)
            } catch (v) {
                mn(n, n.return, v)
            }
        break;
    case 4:
        Fr(e, n),
        ds(n);
        break;
    case 13:
        Fr(e, n),
        ds(n),
        r = n.child,
        r.flags & 8192 && (s = r.memoizedState !== null,
        r.stateNode.isHidden = s,
        !s || r.alternate !== null && r.alternate.memoizedState !== null || (U1 = An())),
        i & 4 && pC(n);
        break;
    case 22:
        if (f = t !== null && t.memoizedState !== null,
        n.mode & 1 ? (li = (d = li) || f,
        Fr(e, n),
        li = d) : Fr(e, n),
        ds(n),
        i & 8192) {
            if (d = n.memoizedState !== null,
            (n.stateNode.isHidden = d) && !f && n.mode & 1)
                for (He = n,
                f = n.child; f !== null; ) {
                    for (h = He = f; He !== null; ) {
                        switch (p = He,
                        m = p.child,
                        p.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            Hd(4, p, p.return);
                            break;
                        case 1:
                            Bc(p, p.return);
                            var y = p.stateNode;
                            if (typeof y.componentWillUnmount == "function") {
                                i = p,
                                t = p.return;
                                try {
                                    e = i,
                                    y.props = e.memoizedProps,
                                    y.state = e.memoizedState,
                                    y.componentWillUnmount()
                                } catch (v) {
                                    mn(i, t, v)
                                }
                            }
                            break;
                        case 5:
                            Bc(p, p.return);
                            break;
                        case 22:
                            if (p.memoizedState !== null) {
                                gC(h);
                                continue
                            }
                        }
                        m !== null ? (m.return = p,
                        He = m) : gC(h)
                    }
                    f = f.sibling
                }
            e: for (f = null,
            h = n; ; ) {
                if (h.tag === 5) {
                    if (f === null) {
                        f = h;
                        try {
                            r = h.stateNode,
                            d ? (s = r.style,
                            typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none") : (a = h.stateNode,
                            l = h.memoizedProps.style,
                            o = l != null && l.hasOwnProperty("display") ? l.display : null,
                            a.style.display = hP("display", o))
                        } catch (v) {
                            mn(n, n.return, v)
                        }
                    }
                } else if (h.tag === 6) {
                    if (f === null)
                        try {
                            h.stateNode.nodeValue = d ? "" : h.memoizedProps
                        } catch (v) {
                            mn(n, n.return, v)
                        }
                } else if ((h.tag !== 22 && h.tag !== 23 || h.memoizedState === null || h === n) && h.child !== null) {
                    h.child.return = h,
                    h = h.child;
                    continue
                }
                if (h === n)
                    break e;
                for (; h.sibling === null; ) {
                    if (h.return === null || h.return === n)
                        break e;
                    f === h && (f = null),
                    h = h.return
                }
                f === h && (f = null),
                h.sibling.return = h.return,
                h = h.sibling
            }
        }
        break;
    case 19:
        Fr(e, n),
        ds(n),
        i & 4 && pC(n);
        break;
    case 21:
        break;
    default:
        Fr(e, n),
        ds(n)
    }
}
function ds(n) {
    var e = n.flags;
    if (e & 2) {
        try {
            e: {
                for (var t = n.return; t !== null; ) {
                    if (zB(t)) {
                        var i = t;
                        break e
                    }
                    t = t.return
                }
                throw Error(be(160))
            }
            switch (i.tag) {
            case 5:
                var r = i.stateNode;
                i.flags & 32 && (rf(r, ""),
                i.flags &= -33);
                var s = hC(n);
                Tw(n, s, r);
                break;
            case 3:
            case 4:
                var o = i.stateNode.containerInfo
                  , a = hC(n);
                Ew(n, a, o);
                break;
            default:
                throw Error(be(161))
            }
        } catch (l) {
            mn(n, n.return, l)
        }
        n.flags &= -3
    }
    e & 4096 && (n.flags &= -4097)
}
function tO(n, e, t) {
    He = n,
    VB(n)
}
function VB(n, e, t) {
    for (var i = (n.mode & 1) !== 0; He !== null; ) {
        var r = He
          , s = r.child;
        if (r.tag === 22 && i) {
            var o = r.memoizedState !== null || Np;
            if (!o) {
                var a = r.alternate
                  , l = a !== null && a.memoizedState !== null || li;
                a = Np;
                var d = li;
                if (Np = o,
                (li = l) && !d)
                    for (He = r; He !== null; )
                        o = He,
                        l = o.child,
                        o.tag === 22 && o.memoizedState !== null ? yC(r) : l !== null ? (l.return = o,
                        He = l) : yC(r);
                for (; s !== null; )
                    He = s,
                    VB(s),
                    s = s.sibling;
                He = r,
                Np = a,
                li = d
            }
            mC(n)
        } else
            r.subtreeFlags & 8772 && s !== null ? (s.return = r,
            He = s) : mC(n)
    }
}
function mC(n) {
    for (; He !== null; ) {
        var e = He;
        if (e.flags & 8772) {
            var t = e.alternate;
            try {
                if (e.flags & 8772)
                    switch (e.tag) {
                    case 0:
                    case 11:
                    case 15:
                        li || f0(5, e);
                        break;
                    case 1:
                        var i = e.stateNode;
                        if (e.flags & 4 && !li)
                            if (t === null)
                                i.componentDidMount();
                            else {
                                var r = e.elementType === e.type ? t.memoizedProps : zr(e.type, t.memoizedProps);
                                i.componentDidUpdate(r, t.memoizedState, i.__reactInternalSnapshotBeforeUpdate)
                            }
                        var s = e.updateQueue;
                        s !== null && Zb(e, s, i);
                        break;
                    case 3:
                        var o = e.updateQueue;
                        if (o !== null) {
                            if (t = null,
                            e.child !== null)
                                switch (e.child.tag) {
                                case 5:
                                    t = e.child.stateNode;
                                    break;
                                case 1:
                                    t = e.child.stateNode
                                }
                            Zb(e, o, t)
                        }
                        break;
                    case 5:
                        var a = e.stateNode;
                        if (t === null && e.flags & 4) {
                            t = a;
                            var l = e.memoizedProps;
                            switch (e.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                l.autoFocus && t.focus();
                                break;
                            case "img":
                                l.src && (t.src = l.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (e.memoizedState === null) {
                            var d = e.alternate;
                            if (d !== null) {
                                var f = d.memoizedState;
                                if (f !== null) {
                                    var h = f.dehydrated;
                                    h !== null && lf(h)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(be(163))
                    }
                li || e.flags & 512 && Cw(e)
            } catch (p) {
                mn(e, e.return, p)
            }
        }
        if (e === n) {
            He = null;
            break
        }
        if (t = e.sibling,
        t !== null) {
            t.return = e.return,
            He = t;
            break
        }
        He = e.return
    }
}
function gC(n) {
    for (; He !== null; ) {
        var e = He;
        if (e === n) {
            He = null;
            break
        }
        var t = e.sibling;
        if (t !== null) {
            t.return = e.return,
            He = t;
            break
        }
        He = e.return
    }
}
function yC(n) {
    for (; He !== null; ) {
        var e = He;
        try {
            switch (e.tag) {
            case 0:
            case 11:
            case 15:
                var t = e.return;
                try {
                    f0(4, e)
                } catch (l) {
                    mn(e, t, l)
                }
                break;
            case 1:
                var i = e.stateNode;
                if (typeof i.componentDidMount == "function") {
                    var r = e.return;
                    try {
                        i.componentDidMount()
                    } catch (l) {
                        mn(e, r, l)
                    }
                }
                var s = e.return;
                try {
                    Cw(e)
                } catch (l) {
                    mn(e, s, l)
                }
                break;
            case 5:
                var o = e.return;
                try {
                    Cw(e)
                } catch (l) {
                    mn(e, o, l)
                }
            }
        } catch (l) {
            mn(e, e.return, l)
        }
        if (e === n) {
            He = null;
            break
        }
        var a = e.sibling;
        if (a !== null) {
            a.return = e.return,
            He = a;
            break
        }
        He = e.return
    }
}
var nO = Math.ceil
  , bg = fo.ReactCurrentDispatcher
  , N1 = fo.ReactCurrentOwner
  , Er = fo.ReactCurrentBatchConfig
  , Lt = 0
  , jn = null
  , Pn = null
  , Qn = 0
  , Xi = 0
  , Lc = ha(0)
  , Dn = 0
  , xf = null
  , wl = 0
  , h0 = 0
  , O1 = 0
  , Vd = null
  , Ri = null
  , U1 = 0
  , nu = 1 / 0
  , Vs = null
  , Cg = !1
  , Pw = null
  , qo = null
  , Op = !1
  , Go = null
  , Eg = 0
  , Wd = 0
  , Bw = null
  , jm = -1
  , Jm = 0;
function wi() {
    return Lt & 6 ? An() : jm !== -1 ? jm : jm = An()
}
function Zo(n) {
    return n.mode & 1 ? Lt & 2 && Qn !== 0 ? Qn & -Qn : UN.transition !== null ? (Jm === 0 && (Jm = CP()),
    Jm) : (n = Gt,
    n !== 0 || (n = window.event,
    n = n === void 0 ? 16 : IP(n.type)),
    n) : 1
}
function Kr(n, e, t, i) {
    if (50 < Wd)
        throw Wd = 0,
        Bw = null,
        Error(be(185));
    Wf(n, t, i),
    (!(Lt & 2) || n !== jn) && (n === jn && (!(Lt & 2) && (h0 |= t),
    Dn === 4 && Uo(n, Qn)),
    Ni(n, i),
    t === 1 && Lt === 0 && !(e.mode & 1) && (nu = An() + 500,
    c0 && pa()))
}
function Ni(n, e) {
    var t = n.callbackNode;
    UF(n, e);
    var i = ug(n, n === jn ? Qn : 0);
    if (i === 0)
        t !== null && Cb(t),
        n.callbackNode = null,
        n.callbackPriority = 0;
    else if (e = i & -i,
    n.callbackPriority !== e) {
        if (t != null && Cb(t),
        e === 1)
            n.tag === 0 ? ON(vC.bind(null, n)) : ZP(vC.bind(null, n)),
            DN(function() {
                !(Lt & 6) && pa()
            }),
            t = null;
        else {
            switch (EP(i)) {
            case 1:
                t = d1;
                break;
            case 4:
                t = SP;
                break;
            case 16:
                t = cg;
                break;
            case 536870912:
                t = bP;
                break;
            default:
                t = cg
            }
            t = qB(t, WB.bind(null, n))
        }
        n.callbackPriority = e,
        n.callbackNode = t
    }
}
function WB(n, e) {
    if (jm = -1,
    Jm = 0,
    Lt & 6)
        throw Error(be(327));
    var t = n.callbackNode;
    if (Wc() && n.callbackNode !== t)
        return null;
    var i = ug(n, n === jn ? Qn : 0);
    if (i === 0)
        return null;
    if (i & 30 || i & n.expiredLanes || e)
        e = Tg(n, i);
    else {
        e = i;
        var r = Lt;
        Lt |= 2;
        var s = JB();
        (jn !== n || Qn !== e) && (Vs = null,
        nu = An() + 500,
        al(n, e));
        do
            try {
                sO();
                break
            } catch (a) {
                jB(n, a)
            }
        while (1);
        S1(),
        bg.current = s,
        Lt = r,
        Pn !== null ? e = 0 : (jn = null,
        Qn = 0,
        e = Dn)
    }
    if (e !== 0) {
        if (e === 2 && (r = iw(n),
        r !== 0 && (i = r,
        e = Lw(n, r))),
        e === 1)
            throw t = xf,
            al(n, 0),
            Uo(n, i),
            Ni(n, An()),
            t;
        if (e === 6)
            Uo(n, i);
        else {
            if (r = n.current.alternate,
            !(i & 30) && !iO(r) && (e = Tg(n, i),
            e === 2 && (s = iw(n),
            s !== 0 && (i = s,
            e = Lw(n, s))),
            e === 1))
                throw t = xf,
                al(n, 0),
                Uo(n, i),
                Ni(n, An()),
                t;
            switch (n.finishedWork = r,
            n.finishedLanes = i,
            e) {
            case 0:
            case 1:
                throw Error(be(345));
            case 2:
                Ha(n, Ri, Vs);
                break;
            case 3:
                if (Uo(n, i),
                (i & 130023424) === i && (e = U1 + 500 - An(),
                10 < e)) {
                    if (ug(n, 0) !== 0)
                        break;
                    if (r = n.suspendedLanes,
                    (r & i) !== i) {
                        wi(),
                        n.pingedLanes |= n.suspendedLanes & r;
                        break
                    }
                    n.timeoutHandle = dw(Ha.bind(null, n, Ri, Vs), e);
                    break
                }
                Ha(n, Ri, Vs);
                break;
            case 4:
                if (Uo(n, i),
                (i & 4194240) === i)
                    break;
                for (e = n.eventTimes,
                r = -1; 0 < i; ) {
                    var o = 31 - Xr(i);
                    s = 1 << o,
                    o = e[o],
                    o > r && (r = o),
                    i &= ~s
                }
                if (i = r,
                i = An() - i,
                i = (120 > i ? 120 : 480 > i ? 480 : 1080 > i ? 1080 : 1920 > i ? 1920 : 3e3 > i ? 3e3 : 4320 > i ? 4320 : 1960 * nO(i / 1960)) - i,
                10 < i) {
                    n.timeoutHandle = dw(Ha.bind(null, n, Ri, Vs), i);
                    break
                }
                Ha(n, Ri, Vs);
                break;
            case 5:
                Ha(n, Ri, Vs);
                break;
            default:
                throw Error(be(329))
            }
        }
    }
    return Ni(n, An()),
    n.callbackNode === t ? WB.bind(null, n) : null
}
function Lw(n, e) {
    var t = Vd;
    return n.current.memoizedState.isDehydrated && (al(n, e).flags |= 256),
    n = Tg(n, e),
    n !== 2 && (e = Ri,
    Ri = t,
    e !== null && Rw(e)),
    n
}
function Rw(n) {
    Ri === null ? Ri = n : Ri.push.apply(Ri, n)
}
function iO(n) {
    for (var e = n; ; ) {
        if (e.flags & 16384) {
            var t = e.updateQueue;
            if (t !== null && (t = t.stores,
            t !== null))
                for (var i = 0; i < t.length; i++) {
                    var r = t[i]
                      , s = r.getSnapshot;
                    r = r.value;
                    try {
                        if (!qr(s(), r))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (t = e.child,
        e.subtreeFlags & 16384 && t !== null)
            t.return = e,
            e = t;
        else {
            if (e === n)
                break;
            for (; e.sibling === null; ) {
                if (e.return === null || e.return === n)
                    return !0;
                e = e.return
            }
            e.sibling.return = e.return,
            e = e.sibling
        }
    }
    return !0
}
function Uo(n, e) {
    for (e &= ~O1,
    e &= ~h0,
    n.suspendedLanes |= e,
    n.pingedLanes &= ~e,
    n = n.expirationTimes; 0 < e; ) {
        var t = 31 - Xr(e)
          , i = 1 << t;
        n[t] = -1,
        e &= ~i
    }
}
function vC(n) {
    if (Lt & 6)
        throw Error(be(327));
    Wc();
    var e = ug(n, 0);
    if (!(e & 1))
        return Ni(n, An()),
        null;
    var t = Tg(n, e);
    if (n.tag !== 0 && t === 2) {
        var i = iw(n);
        i !== 0 && (e = i,
        t = Lw(n, i))
    }
    if (t === 1)
        throw t = xf,
        al(n, 0),
        Uo(n, e),
        Ni(n, An()),
        t;
    if (t === 6)
        throw Error(be(345));
    return n.finishedWork = n.current.alternate,
    n.finishedLanes = e,
    Ha(n, Ri, Vs),
    Ni(n, An()),
    null
}
function z1(n, e) {
    var t = Lt;
    Lt |= 1;
    try {
        return n(e)
    } finally {
        Lt = t,
        Lt === 0 && (nu = An() + 500,
        c0 && pa())
    }
}
function Al(n) {
    Go !== null && Go.tag === 0 && !(Lt & 6) && Wc();
    var e = Lt;
    Lt |= 1;
    var t = Er.transition
      , i = Gt;
    try {
        if (Er.transition = null,
        Gt = 1,
        n)
            return n()
    } finally {
        Gt = i,
        Er.transition = t,
        Lt = e,
        !(Lt & 6) && pa()
    }
}
function G1() {
    Xi = Lc.current,
    Qt(Lc)
}
function al(n, e) {
    n.finishedWork = null,
    n.finishedLanes = 0;
    var t = n.timeoutHandle;
    if (t !== -1 && (n.timeoutHandle = -1,
    IN(t)),
    Pn !== null)
        for (t = Pn.return; t !== null; ) {
            var i = t;
            switch (A1(i),
            i.tag) {
            case 1:
                i = i.type.childContextTypes,
                i != null && mg();
                break;
            case 3:
                eu(),
                Qt(ki),
                Qt(ci),
                B1();
                break;
            case 5:
                P1(i);
                break;
            case 4:
                eu();
                break;
            case 13:
                Qt(sn);
                break;
            case 19:
                Qt(sn);
                break;
            case 10:
                b1(i.type._context);
                break;
            case 22:
            case 23:
                G1()
            }
            t = t.return
        }
    if (jn = n,
    Pn = n = $o(n.current, null),
    Qn = Xi = e,
    Dn = 0,
    xf = null,
    O1 = h0 = wl = 0,
    Ri = Vd = null,
    Za !== null) {
        for (e = 0; e < Za.length; e++)
            if (t = Za[e],
            i = t.interleaved,
            i !== null) {
                t.interleaved = null;
                var r = i.next
                  , s = t.pending;
                if (s !== null) {
                    var o = s.next;
                    s.next = r,
                    i.next = o
                }
                t.pending = i
            }
        Za = null
    }
    return n
}
function jB(n, e) {
    do {
        var t = Pn;
        try {
            if (S1(),
            Hm.current = Sg,
            Mg) {
                for (var i = cn.memoizedState; i !== null; ) {
                    var r = i.queue;
                    r !== null && (r.pending = null),
                    i = i.next
                }
                Mg = !1
            }
            if (xl = 0,
            Vn = In = cn = null,
            Gd = !1,
            gf = 0,
            N1.current = null,
            t === null || t.return === null) {
                Dn = 1,
                xf = e,
                Pn = null;
                break
            }
            e: {
                var s = n
                  , o = t.return
                  , a = t
                  , l = e;
                if (e = Qn,
                a.flags |= 32768,
                l !== null && typeof l == "object" && typeof l.then == "function") {
                    var d = l
                      , f = a
                      , h = f.tag;
                    if (!(f.mode & 1) && (h === 0 || h === 11 || h === 15)) {
                        var p = f.alternate;
                        p ? (f.updateQueue = p.updateQueue,
                        f.memoizedState = p.memoizedState,
                        f.lanes = p.lanes) : (f.updateQueue = null,
                        f.memoizedState = null)
                    }
                    var m = sC(o);
                    if (m !== null) {
                        m.flags &= -257,
                        oC(m, o, a, s, e),
                        m.mode & 1 && rC(s, d, e),
                        e = m,
                        l = d;
                        var y = e.updateQueue;
                        if (y === null) {
                            var v = new Set;
                            v.add(l),
                            e.updateQueue = v
                        } else
                            y.add(l);
                        break e
                    } else {
                        if (!(e & 1)) {
                            rC(s, d, e),
                            H1();
                            break e
                        }
                        l = Error(be(426))
                    }
                } else if (en && a.mode & 1) {
                    var x = sC(o);
                    if (x !== null) {
                        !(x.flags & 65536) && (x.flags |= 256),
                        oC(x, o, a, s, e),
                        _1(tu(l, a));
                        break e
                    }
                }
                s = l = tu(l, a),
                Dn !== 4 && (Dn = 2),
                Vd === null ? Vd = [s] : Vd.push(s),
                s = o;
                do {
                    switch (s.tag) {
                    case 3:
                        s.flags |= 65536,
                        e &= -e,
                        s.lanes |= e;
                        var w = TB(s, l, e);
                        qb(s, w);
                        break e;
                    case 1:
                        a = l;
                        var A = s.type
                          , M = s.stateNode;
                        if (!(s.flags & 128) && (typeof A.getDerivedStateFromError == "function" || M !== null && typeof M.componentDidCatch == "function" && (qo === null || !qo.has(M)))) {
                            s.flags |= 65536,
                            e &= -e,
                            s.lanes |= e;
                            var S = PB(s, a, e);
                            qb(s, S);
                            break e
                        }
                    }
                    s = s.return
                } while (s !== null)
            }
            KB(t)
        } catch (E) {
            e = E,
            Pn === t && t !== null && (Pn = t = t.return);
            continue
        }
        break
    } while (1)
}
function JB() {
    var n = bg.current;
    return bg.current = Sg,
    n === null ? Sg : n
}
function H1() {
    (Dn === 0 || Dn === 3 || Dn === 2) && (Dn = 4),
    jn === null || !(wl & 268435455) && !(h0 & 268435455) || Uo(jn, Qn)
}
function Tg(n, e) {
    var t = Lt;
    Lt |= 2;
    var i = JB();
    (jn !== n || Qn !== e) && (Vs = null,
    al(n, e));
    do
        try {
            rO();
            break
        } catch (r) {
            jB(n, r)
        }
    while (1);
    if (S1(),
    Lt = t,
    bg.current = i,
    Pn !== null)
        throw Error(be(261));
    return jn = null,
    Qn = 0,
    Dn
}
function rO() {
    for (; Pn !== null; )
        XB(Pn)
}
function sO() {
    for (; Pn !== null && !BF(); )
        XB(Pn)
}
function XB(n) {
    var e = QB(n.alternate, n, Xi);
    n.memoizedProps = n.pendingProps,
    e === null ? KB(n) : Pn = e,
    N1.current = null
}
function KB(n) {
    var e = n;
    do {
        var t = e.alternate;
        if (n = e.return,
        e.flags & 32768) {
            if (t = ZN(t, e),
            t !== null) {
                t.flags &= 32767,
                Pn = t;
                return
            }
            if (n !== null)
                n.flags |= 32768,
                n.subtreeFlags = 0,
                n.deletions = null;
            else {
                Dn = 6,
                Pn = null;
                return
            }
        } else if (t = qN(t, e, Xi),
        t !== null) {
            Pn = t;
            return
        }
        if (e = e.sibling,
        e !== null) {
            Pn = e;
            return
        }
        Pn = e = n
    } while (e !== null);
    Dn === 0 && (Dn = 5)
}
function Ha(n, e, t) {
    var i = Gt
      , r = Er.transition;
    try {
        Er.transition = null,
        Gt = 1,
        oO(n, e, t, i)
    } finally {
        Er.transition = r,
        Gt = i
    }
    return null
}
function oO(n, e, t, i) {
    do
        Wc();
    while (Go !== null);
    if (Lt & 6)
        throw Error(be(327));
    t = n.finishedWork;
    var r = n.finishedLanes;
    if (t === null)
        return null;
    if (n.finishedWork = null,
    n.finishedLanes = 0,
    t === n.current)
        throw Error(be(177));
    n.callbackNode = null,
    n.callbackPriority = 0;
    var s = t.lanes | t.childLanes;
    if (zF(n, s),
    n === jn && (Pn = jn = null,
    Qn = 0),
    !(t.subtreeFlags & 2064) && !(t.flags & 2064) || Op || (Op = !0,
    qB(cg, function() {
        return Wc(),
        null
    })),
    s = (t.flags & 15990) !== 0,
    t.subtreeFlags & 15990 || s) {
        s = Er.transition,
        Er.transition = null;
        var o = Gt;
        Gt = 1;
        var a = Lt;
        Lt |= 4,
        N1.current = null,
        eO(n, t),
        HB(t, n),
        CN(cw),
        dg = !!lw,
        cw = lw = null,
        n.current = t,
        tO(t),
        LF(),
        Lt = a,
        Gt = o,
        Er.transition = s
    } else
        n.current = t;
    if (Op && (Op = !1,
    Go = n,
    Eg = r),
    s = n.pendingLanes,
    s === 0 && (qo = null),
    DF(t.stateNode),
    Ni(n, An()),
    e !== null)
        for (i = n.onRecoverableError,
        t = 0; t < e.length; t++)
            r = e[t],
            i(r.value, {
                componentStack: r.stack,
                digest: r.digest
            });
    if (Cg)
        throw Cg = !1,
        n = Pw,
        Pw = null,
        n;
    return Eg & 1 && n.tag !== 0 && Wc(),
    s = n.pendingLanes,
    s & 1 ? n === Bw ? Wd++ : (Wd = 0,
    Bw = n) : Wd = 0,
    pa(),
    null
}
function Wc() {
    if (Go !== null) {
        var n = EP(Eg)
          , e = Er.transition
          , t = Gt;
        try {
            if (Er.transition = null,
            Gt = 16 > n ? 16 : n,
            Go === null)
                var i = !1;
            else {
                if (n = Go,
                Go = null,
                Eg = 0,
                Lt & 6)
                    throw Error(be(331));
                var r = Lt;
                for (Lt |= 4,
                He = n.current; He !== null; ) {
                    var s = He
                      , o = s.child;
                    if (He.flags & 16) {
                        var a = s.deletions;
                        if (a !== null) {
                            for (var l = 0; l < a.length; l++) {
                                var d = a[l];
                                for (He = d; He !== null; ) {
                                    var f = He;
                                    switch (f.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Hd(8, f, s)
                                    }
                                    var h = f.child;
                                    if (h !== null)
                                        h.return = f,
                                        He = h;
                                    else
                                        for (; He !== null; ) {
                                            f = He;
                                            var p = f.sibling
                                              , m = f.return;
                                            if (UB(f),
                                            f === d) {
                                                He = null;
                                                break
                                            }
                                            if (p !== null) {
                                                p.return = m,
                                                He = p;
                                                break
                                            }
                                            He = m
                                        }
                                }
                            }
                            var y = s.alternate;
                            if (y !== null) {
                                var v = y.child;
                                if (v !== null) {
                                    y.child = null;
                                    do {
                                        var x = v.sibling;
                                        v.sibling = null,
                                        v = x
                                    } while (v !== null)
                                }
                            }
                            He = s
                        }
                    }
                    if (s.subtreeFlags & 2064 && o !== null)
                        o.return = s,
                        He = o;
                    else
                        e: for (; He !== null; ) {
                            if (s = He,
                            s.flags & 2048)
                                switch (s.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Hd(9, s, s.return)
                                }
                            var w = s.sibling;
                            if (w !== null) {
                                w.return = s.return,
                                He = w;
                                break e
                            }
                            He = s.return
                        }
                }
                var A = n.current;
                for (He = A; He !== null; ) {
                    o = He;
                    var M = o.child;
                    if (o.subtreeFlags & 2064 && M !== null)
                        M.return = o,
                        He = M;
                    else
                        e: for (o = A; He !== null; ) {
                            if (a = He,
                            a.flags & 2048)
                                try {
                                    switch (a.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        f0(9, a)
                                    }
                                } catch (E) {
                                    mn(a, a.return, E)
                                }
                            if (a === o) {
                                He = null;
                                break e
                            }
                            var S = a.sibling;
                            if (S !== null) {
                                S.return = a.return,
                                He = S;
                                break e
                            }
                            He = a.return
                        }
                }
                if (Lt = r,
                pa(),
                gs && typeof gs.onPostCommitFiberRoot == "function")
                    try {
                        gs.onPostCommitFiberRoot(r0, n)
                    } catch {}
                i = !0
            }
            return i
        } finally {
            Gt = t,
            Er.transition = e
        }
    }
    return !1
}
function xC(n, e, t) {
    e = tu(t, e),
    e = TB(n, e, 1),
    n = Qo(n, e, 1),
    e = wi(),
    n !== null && (Wf(n, 1, e),
    Ni(n, e))
}
function mn(n, e, t) {
    if (n.tag === 3)
        xC(n, n, t);
    else
        for (; e !== null; ) {
            if (e.tag === 3) {
                xC(e, n, t);
                break
            } else if (e.tag === 1) {
                var i = e.stateNode;
                if (typeof e.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (qo === null || !qo.has(i))) {
                    n = tu(t, n),
                    n = PB(e, n, 1),
                    e = Qo(e, n, 1),
                    n = wi(),
                    e !== null && (Wf(e, 1, n),
                    Ni(e, n));
                    break
                }
            }
            e = e.return
        }
}
function aO(n, e, t) {
    var i = n.pingCache;
    i !== null && i.delete(e),
    e = wi(),
    n.pingedLanes |= n.suspendedLanes & t,
    jn === n && (Qn & t) === t && (Dn === 4 || Dn === 3 && (Qn & 130023424) === Qn && 500 > An() - U1 ? al(n, 0) : O1 |= t),
    Ni(n, e)
}
function YB(n, e) {
    e === 0 && (n.mode & 1 ? (e = Tp,
    Tp <<= 1,
    !(Tp & 130023424) && (Tp = 4194304)) : e = 1);
    var t = wi();
    n = oo(n, e),
    n !== null && (Wf(n, e, t),
    Ni(n, t))
}
function lO(n) {
    var e = n.memoizedState
      , t = 0;
    e !== null && (t = e.retryLane),
    YB(n, t)
}
function cO(n, e) {
    var t = 0;
    switch (n.tag) {
    case 13:
        var i = n.stateNode
          , r = n.memoizedState;
        r !== null && (t = r.retryLane);
        break;
    case 19:
        i = n.stateNode;
        break;
    default:
        throw Error(be(314))
    }
    i !== null && i.delete(e),
    YB(n, t)
}
var QB;
QB = function(n, e, t) {
    if (n !== null)
        if (n.memoizedProps !== e.pendingProps || ki.current)
            Di = !0;
        else {
            if (!(n.lanes & t) && !(e.flags & 128))
                return Di = !1,
                QN(n, e, t);
            Di = !!(n.flags & 131072)
        }
    else
        Di = !1,
        en && e.flags & 1048576 && $P(e, vg, e.index);
    switch (e.lanes = 0,
    e.tag) {
    case 2:
        var i = e.type;
        Wm(n, e),
        n = e.pendingProps;
        var r = qc(e, ci.current);
        Vc(e, t),
        r = R1(null, e, i, n, r, t);
        var s = I1();
        return e.flags |= 1,
        typeof r == "object" && r !== null && typeof r.render == "function" && r.$$typeof === void 0 ? (e.tag = 1,
        e.memoizedState = null,
        e.updateQueue = null,
        Fi(i) ? (s = !0,
        gg(e)) : s = !1,
        e.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null,
        E1(e),
        r.updater = u0,
        e.stateNode = r,
        r._reactInternals = e,
        vw(e, i, n, t),
        e = Aw(null, e, i, !0, s, t)) : (e.tag = 0,
        en && s && w1(e),
        vi(null, e, r, t),
        e = e.child),
        e;
    case 16:
        i = e.elementType;
        e: {
            switch (Wm(n, e),
            n = e.pendingProps,
            r = i._init,
            i = r(i._payload),
            e.type = i,
            r = e.tag = dO(i),
            n = zr(i, n),
            r) {
            case 0:
                e = ww(null, e, i, n, t);
                break e;
            case 1:
                e = cC(null, e, i, n, t);
                break e;
            case 11:
                e = aC(null, e, i, n, t);
                break e;
            case 14:
                e = lC(null, e, i, zr(i.type, n), t);
                break e
            }
            throw Error(be(306, i, ""))
        }
        return e;
    case 0:
        return i = e.type,
        r = e.pendingProps,
        r = e.elementType === i ? r : zr(i, r),
        ww(n, e, i, r, t);
    case 1:
        return i = e.type,
        r = e.pendingProps,
        r = e.elementType === i ? r : zr(i, r),
        cC(n, e, i, r, t);
    case 3:
        e: {
            if (IB(e),
            n === null)
                throw Error(be(387));
            i = e.pendingProps,
            s = e.memoizedState,
            r = s.element,
            iB(n, e),
            Ag(e, i, null, t);
            var o = e.memoizedState;
            if (i = o.element,
            s.isDehydrated)
                if (s = {
                    element: i,
                    isDehydrated: !1,
                    cache: o.cache,
                    pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                    transitions: o.transitions
                },
                e.updateQueue.baseState = s,
                e.memoizedState = s,
                e.flags & 256) {
                    r = tu(Error(be(423)), e),
                    e = uC(n, e, i, t, r);
                    break e
                } else if (i !== r) {
                    r = tu(Error(be(424)), e),
                    e = uC(n, e, i, t, r);
                    break e
                } else
                    for (Ki = Yo(e.stateNode.containerInfo.firstChild),
                    Qi = e,
                    en = !0,
                    Vr = null,
                    t = aB(e, null, i, t),
                    e.child = t; t; )
                        t.flags = t.flags & -3 | 4096,
                        t = t.sibling;
            else {
                if (Zc(),
                i === r) {
                    e = ao(n, e, t);
                    break e
                }
                vi(n, e, i, t)
            }
            e = e.child
        }
        return e;
    case 5:
        return lB(e),
        n === null && mw(e),
        i = e.type,
        r = e.pendingProps,
        s = n !== null ? n.memoizedProps : null,
        o = r.children,
        uw(i, r) ? o = null : s !== null && uw(i, s) && (e.flags |= 32),
        RB(n, e),
        vi(n, e, o, t),
        e.child;
    case 6:
        return n === null && mw(e),
        null;
    case 13:
        return DB(n, e, t);
    case 4:
        return T1(e, e.stateNode.containerInfo),
        i = e.pendingProps,
        n === null ? e.child = $c(e, null, i, t) : vi(n, e, i, t),
        e.child;
    case 11:
        return i = e.type,
        r = e.pendingProps,
        r = e.elementType === i ? r : zr(i, r),
        aC(n, e, i, r, t);
    case 7:
        return vi(n, e, e.pendingProps, t),
        e.child;
    case 8:
        return vi(n, e, e.pendingProps.children, t),
        e.child;
    case 12:
        return vi(n, e, e.pendingProps.children, t),
        e.child;
    case 10:
        e: {
            if (i = e.type._context,
            r = e.pendingProps,
            s = e.memoizedProps,
            o = r.value,
            Jt(xg, i._currentValue),
            i._currentValue = o,
            s !== null)
                if (qr(s.value, o)) {
                    if (s.children === r.children && !ki.current) {
                        e = ao(n, e, t);
                        break e
                    }
                } else
                    for (s = e.child,
                    s !== null && (s.return = e); s !== null; ) {
                        var a = s.dependencies;
                        if (a !== null) {
                            o = s.child;
                            for (var l = a.firstContext; l !== null; ) {
                                if (l.context === i) {
                                    if (s.tag === 1) {
                                        l = $s(-1, t & -t),
                                        l.tag = 2;
                                        var d = s.updateQueue;
                                        if (d !== null) {
                                            d = d.shared;
                                            var f = d.pending;
                                            f === null ? l.next = l : (l.next = f.next,
                                            f.next = l),
                                            d.pending = l
                                        }
                                    }
                                    s.lanes |= t,
                                    l = s.alternate,
                                    l !== null && (l.lanes |= t),
                                    gw(s.return, t, e),
                                    a.lanes |= t;
                                    break
                                }
                                l = l.next
                            }
                        } else if (s.tag === 10)
                            o = s.type === e.type ? null : s.child;
                        else if (s.tag === 18) {
                            if (o = s.return,
                            o === null)
                                throw Error(be(341));
                            o.lanes |= t,
                            a = o.alternate,
                            a !== null && (a.lanes |= t),
                            gw(o, t, e),
                            o = s.sibling
                        } else
                            o = s.child;
                        if (o !== null)
                            o.return = s;
                        else
                            for (o = s; o !== null; ) {
                                if (o === e) {
                                    o = null;
                                    break
                                }
                                if (s = o.sibling,
                                s !== null) {
                                    s.return = o.return,
                                    o = s;
                                    break
                                }
                                o = o.return
                            }
                        s = o
                    }
            vi(n, e, r.children, t),
            e = e.child
        }
        return e;
    case 9:
        return r = e.type,
        i = e.pendingProps.children,
        Vc(e, t),
        r = Pr(r),
        i = i(r),
        e.flags |= 1,
        vi(n, e, i, t),
        e.child;
    case 14:
        return i = e.type,
        r = zr(i, e.pendingProps),
        r = zr(i.type, r),
        lC(n, e, i, r, t);
    case 15:
        return BB(n, e, e.type, e.pendingProps, t);
    case 17:
        return i = e.type,
        r = e.pendingProps,
        r = e.elementType === i ? r : zr(i, r),
        Wm(n, e),
        e.tag = 1,
        Fi(i) ? (n = !0,
        gg(e)) : n = !1,
        Vc(e, t),
        sB(e, i, r),
        vw(e, i, r, t),
        Aw(null, e, i, !0, n, t);
    case 19:
        return kB(n, e, t);
    case 22:
        return LB(n, e, t)
    }
    throw Error(be(156, e.tag))
}
;
function qB(n, e) {
    return MP(n, e)
}
function uO(n, e, t, i) {
    this.tag = n,
    this.key = t,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = e,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = i,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function Cr(n, e, t, i) {
    return new uO(n,e,t,i)
}
function V1(n) {
    return n = n.prototype,
    !(!n || !n.isReactComponent)
}
function dO(n) {
    if (typeof n == "function")
        return V1(n) ? 1 : 0;
    if (n != null) {
        if (n = n.$$typeof,
        n === l1)
            return 11;
        if (n === c1)
            return 14
    }
    return 2
}
function $o(n, e) {
    var t = n.alternate;
    return t === null ? (t = Cr(n.tag, e, n.key, n.mode),
    t.elementType = n.elementType,
    t.type = n.type,
    t.stateNode = n.stateNode,
    t.alternate = n,
    n.alternate = t) : (t.pendingProps = e,
    t.type = n.type,
    t.flags = 0,
    t.subtreeFlags = 0,
    t.deletions = null),
    t.flags = n.flags & 14680064,
    t.childLanes = n.childLanes,
    t.lanes = n.lanes,
    t.child = n.child,
    t.memoizedProps = n.memoizedProps,
    t.memoizedState = n.memoizedState,
    t.updateQueue = n.updateQueue,
    e = n.dependencies,
    t.dependencies = e === null ? null : {
        lanes: e.lanes,
        firstContext: e.firstContext
    },
    t.sibling = n.sibling,
    t.index = n.index,
    t.ref = n.ref,
    t
}
function Xm(n, e, t, i, r, s) {
    var o = 2;
    if (i = n,
    typeof n == "function")
        V1(n) && (o = 1);
    else if (typeof n == "string")
        o = 5;
    else
        e: switch (n) {
        case Ac:
            return ll(t.children, r, s, e);
        case a1:
            o = 8,
            r |= 8;
            break;
        case Hx:
            return n = Cr(12, t, e, r | 2),
            n.elementType = Hx,
            n.lanes = s,
            n;
        case Vx:
            return n = Cr(13, t, e, r),
            n.elementType = Vx,
            n.lanes = s,
            n;
        case Wx:
            return n = Cr(19, t, e, r),
            n.elementType = Wx,
            n.lanes = s,
            n;
        case oP:
            return p0(t, r, s, e);
        default:
            if (typeof n == "object" && n !== null)
                switch (n.$$typeof) {
                case rP:
                    o = 10;
                    break e;
                case sP:
                    o = 9;
                    break e;
                case l1:
                    o = 11;
                    break e;
                case c1:
                    o = 14;
                    break e;
                case Do:
                    o = 16,
                    i = null;
                    break e
                }
            throw Error(be(130, n == null ? n : typeof n, ""))
        }
    return e = Cr(o, t, e, r),
    e.elementType = n,
    e.type = i,
    e.lanes = s,
    e
}
function ll(n, e, t, i) {
    return n = Cr(7, n, i, e),
    n.lanes = t,
    n
}
function p0(n, e, t, i) {
    return n = Cr(22, n, i, e),
    n.elementType = oP,
    n.lanes = t,
    n.stateNode = {
        isHidden: !1
    },
    n
}
function Pv(n, e, t) {
    return n = Cr(6, n, null, e),
    n.lanes = t,
    n
}
function Bv(n, e, t) {
    return e = Cr(4, n.children !== null ? n.children : [], n.key, e),
    e.lanes = t,
    e.stateNode = {
        containerInfo: n.containerInfo,
        pendingChildren: null,
        implementation: n.implementation
    },
    e
}
function fO(n, e, t, i, r) {
    this.tag = e,
    this.containerInfo = n,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = uv(0),
    this.expirationTimes = uv(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = uv(0),
    this.identifierPrefix = i,
    this.onRecoverableError = r,
    this.mutableSourceEagerHydrationData = null
}
function W1(n, e, t, i, r, s, o, a, l) {
    return n = new fO(n,e,t,a,l),
    e === 1 ? (e = 1,
    s === !0 && (e |= 8)) : e = 0,
    s = Cr(3, null, null, e),
    n.current = s,
    s.stateNode = n,
    s.memoizedState = {
        element: i,
        isDehydrated: t,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    E1(s),
    n
}
function hO(n, e, t) {
    var i = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: wc,
        key: i == null ? null : "" + i,
        children: n,
        containerInfo: e,
        implementation: t
    }
}
function ZB(n) {
    if (!n)
        return ra;
    n = n._reactInternals;
    e: {
        if (Tl(n) !== n || n.tag !== 1)
            throw Error(be(170));
        var e = n;
        do {
            switch (e.tag) {
            case 3:
                e = e.stateNode.context;
                break e;
            case 1:
                if (Fi(e.type)) {
                    e = e.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            e = e.return
        } while (e !== null);
        throw Error(be(171))
    }
    if (n.tag === 1) {
        var t = n.type;
        if (Fi(t))
            return qP(n, t, e)
    }
    return e
}
function $B(n, e, t, i, r, s, o, a, l) {
    return n = W1(t, i, !0, n, r, s, o, a, l),
    n.context = ZB(null),
    t = n.current,
    i = wi(),
    r = Zo(t),
    s = $s(i, r),
    s.callback = e ?? null,
    Qo(t, s, r),
    n.current.lanes = r,
    Wf(n, r, i),
    Ni(n, i),
    n
}
function m0(n, e, t, i) {
    var r = e.current
      , s = wi()
      , o = Zo(r);
    return t = ZB(t),
    e.context === null ? e.context = t : e.pendingContext = t,
    e = $s(s, o),
    e.payload = {
        element: n
    },
    i = i === void 0 ? null : i,
    i !== null && (e.callback = i),
    n = Qo(r, e, o),
    n !== null && (Kr(n, r, o, s),
    Gm(n, r, o)),
    o
}
function Pg(n) {
    if (n = n.current,
    !n.child)
        return null;
    switch (n.child.tag) {
    case 5:
        return n.child.stateNode;
    default:
        return n.child.stateNode
    }
}
function wC(n, e) {
    if (n = n.memoizedState,
    n !== null && n.dehydrated !== null) {
        var t = n.retryLane;
        n.retryLane = t !== 0 && t < e ? t : e
    }
}
function j1(n, e) {
    wC(n, e),
    (n = n.alternate) && wC(n, e)
}
function pO() {
    return null
}
var e3 = typeof reportError == "function" ? reportError : function(n) {
    console.error(n)
}
;
function J1(n) {
    this._internalRoot = n
}
g0.prototype.render = J1.prototype.render = function(n) {
    var e = this._internalRoot;
    if (e === null)
        throw Error(be(409));
    m0(n, e, null, null)
}
;
g0.prototype.unmount = J1.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
        this._internalRoot = null;
        var e = n.containerInfo;
        Al(function() {
            m0(null, n, null, null)
        }),
        e[so] = null
    }
}
;
function g0(n) {
    this._internalRoot = n
}
g0.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
        var e = BP();
        n = {
            blockedOn: null,
            target: n,
            priority: e
        };
        for (var t = 0; t < Oo.length && e !== 0 && e < Oo[t].priority; t++)
            ;
        Oo.splice(t, 0, n),
        t === 0 && RP(n)
    }
}
;
function X1(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11)
}
function y0(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "))
}
function AC() {}
function mO(n, e, t, i, r) {
    if (r) {
        if (typeof i == "function") {
            var s = i;
            i = function() {
                var d = Pg(o);
                s.call(d)
            }
        }
        var o = $B(e, i, n, 0, null, !1, !1, "", AC);
        return n._reactRootContainer = o,
        n[so] = o.current,
        df(n.nodeType === 8 ? n.parentNode : n),
        Al(),
        o
    }
    for (; r = n.lastChild; )
        n.removeChild(r);
    if (typeof i == "function") {
        var a = i;
        i = function() {
            var d = Pg(l);
            a.call(d)
        }
    }
    var l = W1(n, 0, !1, null, null, !1, !1, "", AC);
    return n._reactRootContainer = l,
    n[so] = l.current,
    df(n.nodeType === 8 ? n.parentNode : n),
    Al(function() {
        m0(e, l, t, i)
    }),
    l
}
function v0(n, e, t, i, r) {
    var s = t._reactRootContainer;
    if (s) {
        var o = s;
        if (typeof r == "function") {
            var a = r;
            r = function() {
                var l = Pg(o);
                a.call(l)
            }
        }
        m0(e, o, n, r)
    } else
        o = mO(t, e, n, r, i);
    return Pg(o)
}
TP = function(n) {
    switch (n.tag) {
    case 3:
        var e = n.stateNode;
        if (e.current.memoizedState.isDehydrated) {
            var t = Rd(e.pendingLanes);
            t !== 0 && (f1(e, t | 1),
            Ni(e, An()),
            !(Lt & 6) && (nu = An() + 500,
            pa()))
        }
        break;
    case 13:
        Al(function() {
            var i = oo(n, 1);
            if (i !== null) {
                var r = wi();
                Kr(i, n, 1, r)
            }
        }),
        j1(n, 1)
    }
}
;
h1 = function(n) {
    if (n.tag === 13) {
        var e = oo(n, 134217728);
        if (e !== null) {
            var t = wi();
            Kr(e, n, 134217728, t)
        }
        j1(n, 134217728)
    }
}
;
PP = function(n) {
    if (n.tag === 13) {
        var e = Zo(n)
          , t = oo(n, e);
        if (t !== null) {
            var i = wi();
            Kr(t, n, e, i)
        }
        j1(n, e)
    }
}
;
BP = function() {
    return Gt
}
;
LP = function(n, e) {
    var t = Gt;
    try {
        return Gt = n,
        e()
    } finally {
        Gt = t
    }
}
;
ew = function(n, e, t) {
    switch (e) {
    case "input":
        if (Xx(n, t),
        e = t.name,
        t.type === "radio" && e != null) {
            for (t = n; t.parentNode; )
                t = t.parentNode;
            for (t = t.querySelectorAll("input[name=" + JSON.stringify("" + e) + '][type="radio"]'),
            e = 0; e < t.length; e++) {
                var i = t[e];
                if (i !== n && i.form === n.form) {
                    var r = l0(i);
                    if (!r)
                        throw Error(be(90));
                    lP(i),
                    Xx(i, r)
                }
            }
        }
        break;
    case "textarea":
        uP(n, t);
        break;
    case "select":
        e = t.value,
        e != null && Uc(n, !!t.multiple, e, !1)
    }
}
;
yP = z1;
vP = Al;
var gO = {
    usingClientEntryPoint: !1,
    Events: [Jf, bc, l0, mP, gP, z1]
}
  , ad = {
    findFiberByHostInstance: qa,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom"
}
  , yO = {
    bundleType: ad.bundleType,
    version: ad.version,
    rendererPackageName: ad.rendererPackageName,
    rendererConfig: ad.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: fo.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(n) {
        return n = AP(n),
        n === null ? null : n.stateNode
    },
    findFiberByHostInstance: ad.findFiberByHostInstance || pO,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Up = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Up.isDisabled && Up.supportsFiber)
        try {
            r0 = Up.inject(yO),
            gs = Up
        } catch {}
}
nr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = gO;
nr.createPortal = function(n, e) {
    var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!X1(e))
        throw Error(be(200));
    return hO(n, e, null, t)
}
;
nr.createRoot = function(n, e) {
    if (!X1(n))
        throw Error(be(299));
    var t = !1
      , i = ""
      , r = e3;
    return e != null && (e.unstable_strictMode === !0 && (t = !0),
    e.identifierPrefix !== void 0 && (i = e.identifierPrefix),
    e.onRecoverableError !== void 0 && (r = e.onRecoverableError)),
    e = W1(n, 1, !1, null, null, t, !1, i, r),
    n[so] = e.current,
    df(n.nodeType === 8 ? n.parentNode : n),
    new J1(e)
}
;
nr.findDOMNode = function(n) {
    if (n == null)
        return null;
    if (n.nodeType === 1)
        return n;
    var e = n._reactInternals;
    if (e === void 0)
        throw typeof n.render == "function" ? Error(be(188)) : (n = Object.keys(n).join(","),
        Error(be(268, n)));
    return n = AP(e),
    n = n === null ? null : n.stateNode,
    n
}
;
nr.flushSync = function(n) {
    return Al(n)
}
;
nr.hydrate = function(n, e, t) {
    if (!y0(e))
        throw Error(be(200));
    return v0(null, n, e, !0, t)
}
;
nr.hydrateRoot = function(n, e, t) {
    if (!X1(n))
        throw Error(be(405));
    var i = t != null && t.hydratedSources || null
      , r = !1
      , s = ""
      , o = e3;
    if (t != null && (t.unstable_strictMode === !0 && (r = !0),
    t.identifierPrefix !== void 0 && (s = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    e = $B(e, null, n, 1, t ?? null, r, !1, s, o),
    n[so] = e.current,
    df(n),
    i)
        for (n = 0; n < i.length; n++)
            t = i[n],
            r = t._getVersion,
            r = r(t._source),
            e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, r] : e.mutableSourceEagerHydrationData.push(t, r);
    return new g0(e)
}
;
nr.render = function(n, e, t) {
    if (!y0(e))
        throw Error(be(200));
    return v0(null, n, e, !1, t)
}
;
nr.unmountComponentAtNode = function(n) {
    if (!y0(n))
        throw Error(be(40));
    return n._reactRootContainer ? (Al(function() {
        v0(null, null, n, !1, function() {
            n._reactRootContainer = null,
            n[so] = null
        })
    }),
    !0) : !1
}
;
nr.unstable_batchedUpdates = z1;
nr.unstable_renderSubtreeIntoContainer = function(n, e, t, i) {
    if (!y0(t))
        throw Error(be(200));
    if (n == null || n._reactInternals === void 0)
        throw Error(be(38));
    return v0(n, e, t, !1, i)
}
;
nr.version = "18.2.0-next-9e3b772b8-20220608";
(function(n) {
    function e() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
            } catch (t) {
                console.error(t)
            }
    }
    e(),
    n.exports = nr
}
)(pF);
var t3, _C = sg;
t3 = Ux.createRoot = _C.createRoot,
Ux.hydrateRoot = _C.hydrateRoot;
/**
 * @remix-run/router v1.3.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function wf() {
    return wf = Object.assign ? Object.assign.bind() : function(n) {
        for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var i in t)
                Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i])
        }
        return n
    }
    ,
    wf.apply(this, arguments)
}
var el;
(function(n) {
    n.Pop = "POP",
    n.Push = "PUSH",
    n.Replace = "REPLACE"
}
)(el || (el = {}));
const MC = "popstate";
function vO(n) {
    n === void 0 && (n = {});
    function e(i, r) {
        let {pathname: s, search: o, hash: a} = i.location;
        return Iw("", {
            pathname: s,
            search: o,
            hash: a
        }, r.state && r.state.usr || null, r.state && r.state.key || "default")
    }
    function t(i, r) {
        return typeof r == "string" ? r : Bg(r)
    }
    return wO(e, t, null, n)
}
function ea(n, e) {
    if (n === !1 || n === null || typeof n > "u")
        throw new Error(e)
}
function xO() {
    return Math.random().toString(36).substr(2, 8)
}
function SC(n, e) {
    return {
        usr: n.state,
        key: n.key,
        idx: e
    }
}
function Iw(n, e, t, i) {
    return t === void 0 && (t = null),
    wf({
        pathname: typeof n == "string" ? n : n.pathname,
        search: "",
        hash: ""
    }, typeof e == "string" ? x0(e) : e, {
        state: t,
        key: e && e.key || i || xO()
    })
}
function Bg(n) {
    let {pathname: e="/", search: t="", hash: i=""} = n;
    return t && t !== "?" && (e += t.charAt(0) === "?" ? t : "?" + t),
    i && i !== "#" && (e += i.charAt(0) === "#" ? i : "#" + i),
    e
}
function x0(n) {
    let e = {};
    if (n) {
        let t = n.indexOf("#");
        t >= 0 && (e.hash = n.substr(t),
        n = n.substr(0, t));
        let i = n.indexOf("?");
        i >= 0 && (e.search = n.substr(i),
        n = n.substr(0, i)),
        n && (e.pathname = n)
    }
    return e
}
function wO(n, e, t, i) {
    i === void 0 && (i = {});
    let {window: r=document.defaultView, v5Compat: s=!1} = i
      , o = r.history
      , a = el.Pop
      , l = null
      , d = f();
    d == null && (d = 0,
    o.replaceState(wf({}, o.state, {
        idx: d
    }), ""));
    function f() {
        return (o.state || {
            idx: null
        }).idx
    }
    function h() {
        a = el.Pop;
        let x = f()
          , w = x == null ? null : x - d;
        d = x,
        l && l({
            action: a,
            location: v.location,
            delta: w
        })
    }
    function p(x, w) {
        a = el.Push;
        let A = Iw(v.location, x, w);
        t && t(A, x),
        d = f() + 1;
        let M = SC(A, d)
          , S = v.createHref(A);
        try {
            o.pushState(M, "", S)
        } catch {
            r.location.assign(S)
        }
        s && l && l({
            action: a,
            location: v.location,
            delta: 1
        })
    }
    function m(x, w) {
        a = el.Replace;
        let A = Iw(v.location, x, w);
        t && t(A, x),
        d = f();
        let M = SC(A, d)
          , S = v.createHref(A);
        o.replaceState(M, "", S),
        s && l && l({
            action: a,
            location: v.location,
            delta: 0
        })
    }
    function y(x) {
        let w = r.location.origin !== "null" ? r.location.origin : r.location.href
          , A = typeof x == "string" ? x : Bg(x);
        return ea(w, "No window.location.(origin|href) available to create URL for href: " + A),
        new URL(A,w)
    }
    let v = {
        get action() {
            return a
        },
        get location() {
            return n(r, o)
        },
        listen(x) {
            if (l)
                throw new Error("A history only accepts one active listener");
            return r.addEventListener(MC, h),
            l = x,
            () => {
                r.removeEventListener(MC, h),
                l = null
            }
        },
        createHref(x) {
            return e(r, x)
        },
        createURL: y,
        encodeLocation(x) {
            let w = y(x);
            return {
                pathname: w.pathname,
                search: w.search,
                hash: w.hash
            }
        },
        push: p,
        replace: m,
        go(x) {
            return o.go(x)
        }
    };
    return v
}
var bC;
(function(n) {
    n.data = "data",
    n.deferred = "deferred",
    n.redirect = "redirect",
    n.error = "error"
}
)(bC || (bC = {}));
function AO(n, e) {
    if (e === "/")
        return n;
    if (!n.toLowerCase().startsWith(e.toLowerCase()))
        return null;
    let t = e.endsWith("/") ? e.length - 1 : e.length
      , i = n.charAt(t);
    return i && i !== "/" ? null : n.slice(t) || "/"
}
function _O(n, e) {
    e === void 0 && (e = "/");
    let {pathname: t, search: i="", hash: r=""} = typeof n == "string" ? x0(n) : n;
    return {
        pathname: t ? t.startsWith("/") ? t : MO(t, e) : e,
        search: SO(i),
        hash: bO(r)
    }
}
function MO(n, e) {
    let t = e.replace(/\/+$/, "").split("/");
    return n.split("/").forEach(r => {
        r === ".." ? t.length > 1 && t.pop() : r !== "." && t.push(r)
    }
    ),
    t.length > 1 ? t.join("/") : "/"
}
function Lv(n, e, t, i) {
    return "Cannot include a '" + n + "' character in a manually specified " + ("`to." + e + "` field [" + JSON.stringify(i) + "].  Please separate it out to the ") + ("`to." + t + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
}
function n3(n) {
    return n.filter( (e, t) => t === 0 || e.route.path && e.route.path.length > 0)
}
function i3(n, e, t, i) {
    i === void 0 && (i = !1);
    let r;
    typeof n == "string" ? r = x0(n) : (r = wf({}, n),
    ea(!r.pathname || !r.pathname.includes("?"), Lv("?", "pathname", "search", r)),
    ea(!r.pathname || !r.pathname.includes("#"), Lv("#", "pathname", "hash", r)),
    ea(!r.search || !r.search.includes("#"), Lv("#", "search", "hash", r)));
    let s = n === "" || r.pathname === "", o = s ? "/" : r.pathname, a;
    if (i || o == null)
        a = t;
    else {
        let h = e.length - 1;
        if (o.startsWith("..")) {
            let p = o.split("/");
            for (; p[0] === ".."; )
                p.shift(),
                h -= 1;
            r.pathname = p.join("/")
        }
        a = h >= 0 ? e[h] : "/"
    }
    let l = _O(r, a)
      , d = o && o !== "/" && o.endsWith("/")
      , f = (s || o === ".") && t.endsWith("/");
    return !l.pathname.endsWith("/") && (d || f) && (l.pathname += "/"),
    l
}
const r3 = n => n.join("/").replace(/\/\/+/g, "/")
  , SO = n => !n || n === "?" ? "" : n.startsWith("?") ? n : "?" + n
  , bO = n => !n || n === "#" ? "" : n.startsWith("#") ? n : "#" + n
  , CO = ["post", "put", "patch", "delete"];
[...CO];
/**
 * React Router v6.8.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function EO(n, e) {
    return n === e && (n !== 0 || 1 / n === 1 / e) || n !== n && e !== e
}
const TO = typeof Object.is == "function" ? Object.is : EO
  , {useState: PO, useEffect: BO, useLayoutEffect: LO, useDebugValue: RO} = Ox;
function IO(n, e, t) {
    const i = e()
      , [{inst: r},s] = PO({
        inst: {
            value: i,
            getSnapshot: e
        }
    });
    return LO( () => {
        r.value = i,
        r.getSnapshot = e,
        Rv(r) && s({
            inst: r
        })
    }
    , [n, i, e]),
    BO( () => (Rv(r) && s({
        inst: r
    }),
    n( () => {
        Rv(r) && s({
            inst: r
        })
    }
    )), [n]),
    RO(i),
    i
}
function Rv(n) {
    const e = n.getSnapshot
      , t = n.value;
    try {
        const i = e();
        return !TO(t, i)
    } catch {
        return !0
    }
}
function DO(n, e, t) {
    return e()
}
const kO = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u"
  , FO = !kO
  , NO = FO ? DO : IO;
"useSyncExternalStore"in Ox && (n => n.useSyncExternalStore)(Ox);
const K1 = z.createContext(null)
  , Y1 = z.createContext(null)
  , s3 = z.createContext({
    outlet: null,
    matches: []
});
function OO(n, e) {
    let {relative: t} = e === void 0 ? {} : e;
    w0() || ea(!1);
    let {basename: i, navigator: r} = z.useContext(K1)
      , {hash: s, pathname: o, search: a} = o3(n, {
        relative: t
    })
      , l = o;
    return i !== "/" && (l = o === "/" ? i : r3([i, o])),
    r.createHref({
        pathname: l,
        search: a,
        hash: s
    })
}
function w0() {
    return z.useContext(Y1) != null
}
function Q1() {
    return w0() || ea(!1),
    z.useContext(Y1).location
}
function UO() {
    w0() || ea(!1);
    let {basename: n, navigator: e} = z.useContext(K1)
      , {matches: t} = z.useContext(s3)
      , {pathname: i} = Q1()
      , r = JSON.stringify(n3(t).map(a => a.pathnameBase))
      , s = z.useRef(!1);
    return z.useEffect( () => {
        s.current = !0
    }
    ),
    z.useCallback(function(a, l) {
        if (l === void 0 && (l = {}),
        !s.current)
            return;
        if (typeof a == "number") {
            e.go(a);
            return
        }
        let d = i3(a, JSON.parse(r), i, l.relative === "path");
        n !== "/" && (d.pathname = d.pathname === "/" ? n : r3([n, d.pathname])),
        (l.replace ? e.replace : e.push)(d, l.state, l)
    }, [n, e, r, i])
}
function o3(n, e) {
    let {relative: t} = e === void 0 ? {} : e
      , {matches: i} = z.useContext(s3)
      , {pathname: r} = Q1()
      , s = JSON.stringify(n3(i).map(o => o.pathnameBase));
    return z.useMemo( () => i3(n, JSON.parse(s), r, t === "path"), [n, s, r, t])
}
var CC;
(function(n) {
    n.UseBlocker = "useBlocker",
    n.UseRevalidator = "useRevalidator"
}
)(CC || (CC = {}));
var EC;
(function(n) {
    n.UseLoaderData = "useLoaderData",
    n.UseActionData = "useActionData",
    n.UseRouteError = "useRouteError",
    n.UseNavigation = "useNavigation",
    n.UseRouteLoaderData = "useRouteLoaderData",
    n.UseMatches = "useMatches",
    n.UseRevalidator = "useRevalidator"
}
)(EC || (EC = {}));
function zO(n) {
    let {basename: e="/", children: t=null, location: i, navigationType: r=el.Pop, navigator: s, static: o=!1} = n;
    w0() && ea(!1);
    let a = e.replace(/^\/*/, "/")
      , l = z.useMemo( () => ({
        basename: a,
        navigator: s,
        static: o
    }), [a, s, o]);
    typeof i == "string" && (i = x0(i));
    let {pathname: d="/", search: f="", hash: h="", state: p=null, key: m="default"} = i
      , y = z.useMemo( () => {
        let v = AO(d, a);
        return v == null ? null : {
            pathname: v,
            search: f,
            hash: h,
            state: p,
            key: m
        }
    }
    , [a, d, f, h, p, m]);
    return y == null ? null : z.createElement(K1.Provider, {
        value: l
    }, z.createElement(Y1.Provider, {
        children: t,
        value: {
            location: y,
            navigationType: r
        }
    }))
}
var TC;
(function(n) {
    n[n.pending = 0] = "pending",
    n[n.success = 1] = "success",
    n[n.error = 2] = "error"
}
)(TC || (TC = {}));
new Promise( () => {}
);
/**
 * React Router DOM v6.8.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Dw() {
    return Dw = Object.assign ? Object.assign.bind() : function(n) {
        for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var i in t)
                Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i])
        }
        return n
    }
    ,
    Dw.apply(this, arguments)
}
function GO(n, e) {
    if (n == null)
        return {};
    var t = {}, i = Object.keys(n), r, s;
    for (s = 0; s < i.length; s++)
        r = i[s],
        !(e.indexOf(r) >= 0) && (t[r] = n[r]);
    return t
}
function HO(n) {
    return !!(n.metaKey || n.altKey || n.ctrlKey || n.shiftKey)
}
function VO(n, e) {
    return n.button === 0 && (!e || e === "_self") && !HO(n)
}
const WO = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset"];
function jO(n) {
    let {basename: e, children: t, window: i} = n
      , r = z.useRef();
    r.current == null && (r.current = vO({
        window: i,
        v5Compat: !0
    }));
    let s = r.current
      , [o,a] = z.useState({
        action: s.action,
        location: s.location
    });
    return z.useLayoutEffect( () => s.listen(a), [s]),
    z.createElement(zO, {
        basename: e,
        children: t,
        location: o.location,
        navigationType: o.action,
        navigator: s
    })
}
const JO = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u"
  , XO = z.forwardRef(function(e, t) {
    let {onClick: i, relative: r, reloadDocument: s, replace: o, state: a, target: l, to: d, preventScrollReset: f} = e, h = GO(e, WO), p, m = !1;
    if (JO && typeof d == "string" && /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(d)) {
        p = d;
        let w = new URL(window.location.href)
          , A = d.startsWith("//") ? new URL(w.protocol + d) : new URL(d);
        A.origin === w.origin ? d = A.pathname + A.search + A.hash : m = !0
    }
    let y = OO(d, {
        relative: r
    })
      , v = KO(d, {
        replace: o,
        state: a,
        target: l,
        preventScrollReset: f,
        relative: r
    });
    function x(w) {
        i && i(w),
        w.defaultPrevented || v(w)
    }
    return z.createElement("a", Dw({}, h, {
        href: p || y,
        onClick: m || s ? i : x,
        ref: t,
        target: l
    }))
});
var PC;
(function(n) {
    n.UseScrollRestoration = "useScrollRestoration",
    n.UseSubmitImpl = "useSubmitImpl",
    n.UseFetcher = "useFetcher"
}
)(PC || (PC = {}));
var BC;
(function(n) {
    n.UseFetchers = "useFetchers",
    n.UseScrollRestoration = "useScrollRestoration"
}
)(BC || (BC = {}));
function KO(n, e) {
    let {target: t, replace: i, state: r, preventScrollReset: s, relative: o} = e === void 0 ? {} : e
      , a = UO()
      , l = Q1()
      , d = o3(n, {
        relative: o
    });
    return z.useCallback(f => {
        if (VO(f, t)) {
            f.preventDefault();
            let h = i !== void 0 ? i : Bg(l) === Bg(d);
            a(n, {
                replace: h,
                state: r,
                preventScrollReset: s,
                relative: o
            })
        }
    }
    , [l, a, d, i, r, t, n, s, o])
}
/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const A0 = "149"
  , Va = {
    LEFT: 0,
    MIDDLE: 1,
    RIGHT: 2,
    ROTATE: 0,
    DOLLY: 1,
    PAN: 2
}
  , Wa = {
    ROTATE: 0,
    PAN: 1,
    DOLLY_PAN: 2,
    DOLLY_ROTATE: 3
}
  , a3 = 0
  , kw = 1
  , l3 = 2
  , YO = 3
  , c3 = 0
  , _0 = 1
  , jd = 2
  , tl = 3
  , As = 0
  , Oi = 1
  , jr = 2
  , QO = 2
  , eo = 0
  , cl = 1
  , Fw = 2
  , Nw = 3
  , Ow = 4
  , u3 = 5
  , Ya = 100
  , d3 = 101
  , f3 = 102
  , Uw = 103
  , zw = 104
  , h3 = 200
  , p3 = 201
  , m3 = 202
  , g3 = 203
  , q1 = 204
  , Z1 = 205
  , y3 = 206
  , v3 = 207
  , x3 = 208
  , w3 = 209
  , A3 = 210
  , _3 = 0
  , M3 = 1
  , S3 = 2
  , Lg = 3
  , b3 = 4
  , C3 = 5
  , E3 = 6
  , T3 = 7
  , Kf = 0
  , P3 = 1
  , B3 = 2
  , Yr = 0
  , L3 = 1
  , R3 = 2
  , I3 = 3
  , $1 = 4
  , D3 = 5
  , M0 = 300
  , sa = 301
  , oa = 302
  , Af = 303
  , _f = 304
  , Au = 306
  , aa = 1e3
  , Yn = 1001
  , iu = 1002
  , gn = 1003
  , Mf = 1004
  , qO = 1004
  , jc = 1005
  , ZO = 1005
  , on = 1006
  , S0 = 1007
  , $O = 1007
  , _s = 1008
  , e4 = 1008
  , lo = 1009
  , k3 = 1010
  , F3 = 1011
  , e_ = 1012
  , N3 = 1013
  , Ho = 1014
  , Ys = 1015
  , ru = 1016
  , O3 = 1017
  , U3 = 1018
  , ul = 1020
  , z3 = 1021
  , Ii = 1023
  , G3 = 1024
  , H3 = 1025
  , ta = 1026
  , _l = 1027
  , V3 = 1028
  , W3 = 1029
  , j3 = 1030
  , J3 = 1031
  , X3 = 1033
  , Km = 33776
  , Ym = 33777
  , Qm = 33778
  , qm = 33779
  , Gw = 35840
  , Hw = 35841
  , Vw = 35842
  , Ww = 35843
  , K3 = 36196
  , jw = 37492
  , Jw = 37496
  , Xw = 37808
  , Kw = 37809
  , Yw = 37810
  , Qw = 37811
  , qw = 37812
  , Zw = 37813
  , $w = 37814
  , eA = 37815
  , tA = 37816
  , nA = 37817
  , iA = 37818
  , rA = 37819
  , sA = 37820
  , oA = 37821
  , Zm = 36492
  , Y3 = 36283
  , aA = 36284
  , lA = 36285
  , cA = 36286
  , Q3 = 2200
  , q3 = 2201
  , Z3 = 2202
  , su = 2300
  , Ml = 2301
  , $m = 2302
  , nl = 2400
  , il = 2401
  , Sf = 2402
  , b0 = 2500
  , t_ = 2501
  , t4 = 0
  , $3 = 1
  , n_ = 2
  , co = 3e3
  , Et = 3001
  , eL = 3200
  , tL = 3201
  , ho = 0
  , nL = 1
  , n4 = ""
  , Hr = "srgb"
  , ou = "srgb-linear"
  , i4 = 0
  , eg = 7680
  , r4 = 7681
  , s4 = 7682
  , o4 = 7683
  , a4 = 34055
  , l4 = 34056
  , c4 = 5386
  , u4 = 512
  , d4 = 513
  , f4 = 514
  , h4 = 515
  , p4 = 516
  , m4 = 517
  , g4 = 518
  , iL = 519
  , bf = 35044
  , dl = 35048
  , y4 = 35040
  , v4 = 35045
  , x4 = 35049
  , w4 = 35041
  , A4 = 35046
  , _4 = 35050
  , M4 = 35042
  , S4 = "100"
  , uA = "300 es"
  , Rg = 1035;
class bs {
    addEventListener(e, t) {
        this._listeners === void 0 && (this._listeners = {});
        const i = this._listeners;
        i[e] === void 0 && (i[e] = []),
        i[e].indexOf(t) === -1 && i[e].push(t)
    }
    hasEventListener(e, t) {
        if (this._listeners === void 0)
            return !1;
        const i = this._listeners;
        return i[e] !== void 0 && i[e].indexOf(t) !== -1
    }
    removeEventListener(e, t) {
        if (this._listeners === void 0)
            return;
        const r = this._listeners[e];
        if (r !== void 0) {
            const s = r.indexOf(t);
            s !== -1 && r.splice(s, 1)
        }
    }
    dispatchEvent(e) {
        if (this._listeners === void 0)
            return;
        const i = this._listeners[e.type];
        if (i !== void 0) {
            e.target = this;
            const r = i.slice(0);
            for (let s = 0, o = r.length; s < o; s++)
                r[s].call(this, e);
            e.target = null
        }
    }
}
const oi = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
let LC = 1234567;
const fl = Math.PI / 180
  , Cf = 180 / Math.PI;
function qi() {
    const n = Math.random() * 4294967295 | 0
      , e = Math.random() * 4294967295 | 0
      , t = Math.random() * 4294967295 | 0
      , i = Math.random() * 4294967295 | 0;
    return (oi[n & 255] + oi[n >> 8 & 255] + oi[n >> 16 & 255] + oi[n >> 24 & 255] + "-" + oi[e & 255] + oi[e >> 8 & 255] + "-" + oi[e >> 16 & 15 | 64] + oi[e >> 24 & 255] + "-" + oi[t & 63 | 128] + oi[t >> 8 & 255] + "-" + oi[t >> 16 & 255] + oi[t >> 24 & 255] + oi[i & 255] + oi[i >> 8 & 255] + oi[i >> 16 & 255] + oi[i >> 24 & 255]).toLowerCase()
}
function _n(n, e, t) {
    return Math.max(e, Math.min(t, n))
}
function i_(n, e) {
    return (n % e + e) % e
}
function b4(n, e, t, i, r) {
    return i + (n - e) * (r - i) / (t - e)
}
function C4(n, e, t) {
    return n !== e ? (t - n) / (e - n) : 0
}
function Jd(n, e, t) {
    return (1 - t) * n + t * e
}
function E4(n, e, t, i) {
    return Jd(n, e, 1 - Math.exp(-t * i))
}
function T4(n, e=1) {
    return e - Math.abs(i_(n, e * 2) - e)
}
function P4(n, e, t) {
    return n <= e ? 0 : n >= t ? 1 : (n = (n - e) / (t - e),
    n * n * (3 - 2 * n))
}
function B4(n, e, t) {
    return n <= e ? 0 : n >= t ? 1 : (n = (n - e) / (t - e),
    n * n * n * (n * (n * 6 - 15) + 10))
}
function L4(n, e) {
    return n + Math.floor(Math.random() * (e - n + 1))
}
function R4(n, e) {
    return n + Math.random() * (e - n)
}
function I4(n) {
    return n * (.5 - Math.random())
}
function D4(n) {
    n !== void 0 && (LC = n);
    let e = LC += 1831565813;
    return e = Math.imul(e ^ e >>> 15, e | 1),
    e ^= e + Math.imul(e ^ e >>> 7, e | 61),
    ((e ^ e >>> 14) >>> 0) / 4294967296
}
function k4(n) {
    return n * fl
}
function F4(n) {
    return n * Cf
}
function dA(n) {
    return (n & n - 1) === 0 && n !== 0
}
function rL(n) {
    return Math.pow(2, Math.ceil(Math.log(n) / Math.LN2))
}
function Ig(n) {
    return Math.pow(2, Math.floor(Math.log(n) / Math.LN2))
}
function N4(n, e, t, i, r) {
    const s = Math.cos
      , o = Math.sin
      , a = s(t / 2)
      , l = o(t / 2)
      , d = s((e + i) / 2)
      , f = o((e + i) / 2)
      , h = s((e - i) / 2)
      , p = o((e - i) / 2)
      , m = s((i - e) / 2)
      , y = o((i - e) / 2);
    switch (r) {
    case "XYX":
        n.set(a * f, l * h, l * p, a * d);
        break;
    case "YZY":
        n.set(l * p, a * f, l * h, a * d);
        break;
    case "ZXZ":
        n.set(l * h, l * p, a * f, a * d);
        break;
    case "XZX":
        n.set(a * f, l * y, l * m, a * d);
        break;
    case "YXY":
        n.set(l * m, a * f, l * y, a * d);
        break;
    case "ZYZ":
        n.set(l * y, l * m, a * f, a * d);
        break;
    default:
        console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + r)
    }
}
function Qs(n, e) {
    switch (e.constructor) {
    case Float32Array:
        return n;
    case Uint16Array:
        return n / 65535;
    case Uint8Array:
        return n / 255;
    case Int16Array:
        return Math.max(n / 32767, -1);
    case Int8Array:
        return Math.max(n / 127, -1);
    default:
        throw new Error("Invalid component type.")
    }
}
function Wt(n, e) {
    switch (e.constructor) {
    case Float32Array:
        return n;
    case Uint16Array:
        return Math.round(n * 65535);
    case Uint8Array:
        return Math.round(n * 255);
    case Int16Array:
        return Math.round(n * 32767);
    case Int8Array:
        return Math.round(n * 127);
    default:
        throw new Error("Invalid component type.")
    }
}
var sL = Object.freeze({
    __proto__: null,
    DEG2RAD: fl,
    RAD2DEG: Cf,
    ceilPowerOfTwo: rL,
    clamp: _n,
    damp: E4,
    degToRad: k4,
    denormalize: Qs,
    euclideanModulo: i_,
    floorPowerOfTwo: Ig,
    generateUUID: qi,
    inverseLerp: C4,
    isPowerOfTwo: dA,
    lerp: Jd,
    mapLinear: b4,
    normalize: Wt,
    pingpong: T4,
    radToDeg: F4,
    randFloat: R4,
    randFloatSpread: I4,
    randInt: L4,
    seededRandom: D4,
    setQuaternionFromProperEuler: N4,
    smootherstep: B4,
    smoothstep: P4
});
class ge {
    constructor(e=0, t=0) {
        ge.prototype.isVector2 = !0,
        this.x = e,
        this.y = t
    }
    get width() {
        return this.x
    }
    set width(e) {
        this.x = e
    }
    get height() {
        return this.y
    }
    set height(e) {
        this.y = e
    }
    set(e, t) {
        return this.x = e,
        this.y = t,
        this
    }
    setScalar(e) {
        return this.x = e,
        this.y = e,
        this
    }
    setX(e) {
        return this.x = e,
        this
    }
    setY(e) {
        return this.y = e,
        this
    }
    setComponent(e, t) {
        switch (e) {
        case 0:
            this.x = t;
            break;
        case 1:
            this.y = t;
            break;
        default:
            throw new Error("index is out of range: " + e)
        }
        return this
    }
    getComponent(e) {
        switch (e) {
        case 0:
            return this.x;
        case 1:
            return this.y;
        default:
            throw new Error("index is out of range: " + e)
        }
    }
    clone() {
        return new this.constructor(this.x,this.y)
    }
    copy(e) {
        return this.x = e.x,
        this.y = e.y,
        this
    }
    add(e) {
        return this.x += e.x,
        this.y += e.y,
        this
    }
    addScalar(e) {
        return this.x += e,
        this.y += e,
        this
    }
    addVectors(e, t) {
        return this.x = e.x + t.x,
        this.y = e.y + t.y,
        this
    }
    addScaledVector(e, t) {
        return this.x += e.x * t,
        this.y += e.y * t,
        this
    }
    sub(e) {
        return this.x -= e.x,
        this.y -= e.y,
        this
    }
    subScalar(e) {
        return this.x -= e,
        this.y -= e,
        this
    }
    subVectors(e, t) {
        return this.x = e.x - t.x,
        this.y = e.y - t.y,
        this
    }
    multiply(e) {
        return this.x *= e.x,
        this.y *= e.y,
        this
    }
    multiplyScalar(e) {
        return this.x *= e,
        this.y *= e,
        this
    }
    divide(e) {
        return this.x /= e.x,
        this.y /= e.y,
        this
    }
    divideScalar(e) {
        return this.multiplyScalar(1 / e)
    }
    applyMatrix3(e) {
        const t = this.x
          , i = this.y
          , r = e.elements;
        return this.x = r[0] * t + r[3] * i + r[6],
        this.y = r[1] * t + r[4] * i + r[7],
        this
    }
    min(e) {
        return this.x = Math.min(this.x, e.x),
        this.y = Math.min(this.y, e.y),
        this
    }
    max(e) {
        return this.x = Math.max(this.x, e.x),
        this.y = Math.max(this.y, e.y),
        this
    }
    clamp(e, t) {
        return this.x = Math.max(e.x, Math.min(t.x, this.x)),
        this.y = Math.max(e.y, Math.min(t.y, this.y)),
        this
    }
    clampScalar(e, t) {
        return this.x = Math.max(e, Math.min(t, this.x)),
        this.y = Math.max(e, Math.min(t, this.y)),
        this
    }
    clampLength(e, t) {
        const i = this.length();
        return this.divideScalar(i || 1).multiplyScalar(Math.max(e, Math.min(t, i)))
    }
    floor() {
        return this.x = Math.floor(this.x),
        this.y = Math.floor(this.y),
        this
    }
    ceil() {
        return this.x = Math.ceil(this.x),
        this.y = Math.ceil(this.y),
        this
    }
    round() {
        return this.x = Math.round(this.x),
        this.y = Math.round(this.y),
        this
    }
    roundToZero() {
        return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x),
        this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y),
        this
    }
    negate() {
        return this.x = -this.x,
        this.y = -this.y,
        this
    }
    dot(e) {
        return this.x * e.x + this.y * e.y
    }
    cross(e) {
        return this.x * e.y - this.y * e.x
    }
    lengthSq() {
        return this.x * this.x + this.y * this.y
    }
    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y)
    }
    manhattanLength() {
        return Math.abs(this.x) + Math.abs(this.y)
    }
    normalize() {
        return this.divideScalar(this.length() || 1)
    }
    angle() {
        return Math.atan2(-this.y, -this.x) + Math.PI
    }
    distanceTo(e) {
        return Math.sqrt(this.distanceToSquared(e))
    }
    distanceToSquared(e) {
        const t = this.x - e.x
          , i = this.y - e.y;
        return t * t + i * i
    }
    manhattanDistanceTo(e) {
        return Math.abs(this.x - e.x) + Math.abs(this.y - e.y)
    }
    setLength(e) {
        return this.normalize().multiplyScalar(e)
    }
    lerp(e, t) {
        return this.x += (e.x - this.x) * t,
        this.y += (e.y - this.y) * t,
        this
    }
    lerpVectors(e, t, i) {
        return this.x = e.x + (t.x - e.x) * i,
        this.y = e.y + (t.y - e.y) * i,
        this
    }
    equals(e) {
        return e.x === this.x && e.y === this.y
    }
    fromArray(e, t=0) {
        return this.x = e[t],
        this.y = e[t + 1],
        this
    }
    toArray(e=[], t=0) {
        return e[t] = this.x,
        e[t + 1] = this.y,
        e
    }
    fromBufferAttribute(e, t) {
        return this.x = e.getX(t),
        this.y = e.getY(t),
        this
    }
    rotateAround(e, t) {
        const i = Math.cos(t)
          , r = Math.sin(t)
          , s = this.x - e.x
          , o = this.y - e.y;
        return this.x = s * i - o * r + e.x,
        this.y = s * r + o * i + e.y,
        this
    }
    random() {
        return this.x = Math.random(),
        this.y = Math.random(),
        this
    }
    *[Symbol.iterator]() {
        yield this.x,
        yield this.y
    }
}
class xi {
    constructor() {
        xi.prototype.isMatrix3 = !0,
        this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1]
    }
    set(e, t, i, r, s, o, a, l, d) {
        const f = this.elements;
        return f[0] = e,
        f[1] = r,
        f[2] = a,
        f[3] = t,
        f[4] = s,
        f[5] = l,
        f[6] = i,
        f[7] = o,
        f[8] = d,
        this
    }
    identity() {
        return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1),
        this
    }
    copy(e) {
        const t = this.elements
          , i = e.elements;
        return t[0] = i[0],
        t[1] = i[1],
        t[2] = i[2],
        t[3] = i[3],
        t[4] = i[4],
        t[5] = i[5],
        t[6] = i[6],
        t[7] = i[7],
        t[8] = i[8],
        this
    }
    extractBasis(e, t, i) {
        return e.setFromMatrix3Column(this, 0),
        t.setFromMatrix3Column(this, 1),
        i.setFromMatrix3Column(this, 2),
        this
    }
    setFromMatrix4(e) {
        const t = e.elements;
        return this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]),
        this
    }
    multiply(e) {
        return this.multiplyMatrices(this, e)
    }
    premultiply(e) {
        return this.multiplyMatrices(e, this)
    }
    multiplyMatrices(e, t) {
        const i = e.elements
          , r = t.elements
          , s = this.elements
          , o = i[0]
          , a = i[3]
          , l = i[6]
          , d = i[1]
          , f = i[4]
          , h = i[7]
          , p = i[2]
          , m = i[5]
          , y = i[8]
          , v = r[0]
          , x = r[3]
          , w = r[6]
          , A = r[1]
          , M = r[4]
          , S = r[7]
          , E = r[2]
          , P = r[5]
          , L = r[8];
        return s[0] = o * v + a * A + l * E,
        s[3] = o * x + a * M + l * P,
        s[6] = o * w + a * S + l * L,
        s[1] = d * v + f * A + h * E,
        s[4] = d * x + f * M + h * P,
        s[7] = d * w + f * S + h * L,
        s[2] = p * v + m * A + y * E,
        s[5] = p * x + m * M + y * P,
        s[8] = p * w + m * S + y * L,
        this
    }
    multiplyScalar(e) {
        const t = this.elements;
        return t[0] *= e,
        t[3] *= e,
        t[6] *= e,
        t[1] *= e,
        t[4] *= e,
        t[7] *= e,
        t[2] *= e,
        t[5] *= e,
        t[8] *= e,
        this
    }
    determinant() {
        const e = this.elements
          , t = e[0]
          , i = e[1]
          , r = e[2]
          , s = e[3]
          , o = e[4]
          , a = e[5]
          , l = e[6]
          , d = e[7]
          , f = e[8];
        return t * o * f - t * a * d - i * s * f + i * a * l + r * s * d - r * o * l
    }
    invert() {
        const e = this.elements
          , t = e[0]
          , i = e[1]
          , r = e[2]
          , s = e[3]
          , o = e[4]
          , a = e[5]
          , l = e[6]
          , d = e[7]
          , f = e[8]
          , h = f * o - a * d
          , p = a * l - f * s
          , m = d * s - o * l
          , y = t * h + i * p + r * m;
        if (y === 0)
            return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
        const v = 1 / y;
        return e[0] = h * v,
        e[1] = (r * d - f * i) * v,
        e[2] = (a * i - r * o) * v,
        e[3] = p * v,
        e[4] = (f * t - r * l) * v,
        e[5] = (r * s - a * t) * v,
        e[6] = m * v,
        e[7] = (i * l - d * t) * v,
        e[8] = (o * t - i * s) * v,
        this
    }
    transpose() {
        let e;
        const t = this.elements;
        return e = t[1],
        t[1] = t[3],
        t[3] = e,
        e = t[2],
        t[2] = t[6],
        t[6] = e,
        e = t[5],
        t[5] = t[7],
        t[7] = e,
        this
    }
    getNormalMatrix(e) {
        return this.setFromMatrix4(e).invert().transpose()
    }
    transposeIntoArray(e) {
        const t = this.elements;
        return e[0] = t[0],
        e[1] = t[3],
        e[2] = t[6],
        e[3] = t[1],
        e[4] = t[4],
        e[5] = t[7],
        e[6] = t[2],
        e[7] = t[5],
        e[8] = t[8],
        this
    }
    setUvTransform(e, t, i, r, s, o, a) {
        const l = Math.cos(s)
          , d = Math.sin(s);
        return this.set(i * l, i * d, -i * (l * o + d * a) + o + e, -r * d, r * l, -r * (-d * o + l * a) + a + t, 0, 0, 1),
        this
    }
    scale(e, t) {
        return this.premultiply(Iv.makeScale(e, t)),
        this
    }
    rotate(e) {
        return this.premultiply(Iv.makeRotation(-e)),
        this
    }
    translate(e, t) {
        return this.premultiply(Iv.makeTranslation(e, t)),
        this
    }
    makeTranslation(e, t) {
        return this.set(1, 0, e, 0, 1, t, 0, 0, 1),
        this
    }
    makeRotation(e) {
        const t = Math.cos(e)
          , i = Math.sin(e);
        return this.set(t, -i, 0, i, t, 0, 0, 0, 1),
        this
    }
    makeScale(e, t) {
        return this.set(e, 0, 0, 0, t, 0, 0, 0, 1),
        this
    }
    equals(e) {
        const t = this.elements
          , i = e.elements;
        for (let r = 0; r < 9; r++)
            if (t[r] !== i[r])
                return !1;
        return !0
    }
    fromArray(e, t=0) {
        for (let i = 0; i < 9; i++)
            this.elements[i] = e[i + t];
        return this
    }
    toArray(e=[], t=0) {
        const i = this.elements;
        return e[t] = i[0],
        e[t + 1] = i[1],
        e[t + 2] = i[2],
        e[t + 3] = i[3],
        e[t + 4] = i[4],
        e[t + 5] = i[5],
        e[t + 6] = i[6],
        e[t + 7] = i[7],
        e[t + 8] = i[8],
        e
    }
    clone() {
        return new this.constructor().fromArray(this.elements)
    }
}
const Iv = new xi;
function oL(n) {
    for (let e = n.length - 1; e >= 0; --e)
        if (n[e] >= 65535)
            return !0;
    return !1
}
const O4 = {
    Int8Array,
    Uint8Array,
    Uint8ClampedArray,
    Int16Array,
    Uint16Array,
    Int32Array,
    Uint32Array,
    Float32Array,
    Float64Array
};
function Rc(n, e) {
    return new O4[n](e)
}
function Ef(n) {
    return document.createElementNS("http://www.w3.org/1999/xhtml", n)
}
function hl(n) {
    return n < .04045 ? n * .0773993808 : Math.pow(n * .9478672986 + .0521327014, 2.4)
}
function tg(n) {
    return n < .0031308 ? n * 12.92 : 1.055 * Math.pow(n, .41666) - .055
}
const Dv = {
    [Hr]: {
        [ou]: hl
    },
    [ou]: {
        [Hr]: tg
    }
}
  , ai = {
    legacyMode: !0,
    get workingColorSpace() {
        return ou
    },
    set workingColorSpace(n) {
        console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")
    },
    convert: function(n, e, t) {
        if (this.legacyMode || e === t || !e || !t)
            return n;
        if (Dv[e] && Dv[e][t] !== void 0) {
            const i = Dv[e][t];
            return n.r = i(n.r),
            n.g = i(n.g),
            n.b = i(n.b),
            n
        }
        throw new Error("Unsupported color space conversion.")
    },
    fromWorkingColorSpace: function(n, e) {
        return this.convert(n, this.workingColorSpace, e)
    },
    toWorkingColorSpace: function(n, e) {
        return this.convert(n, e, this.workingColorSpace)
    }
}
  , aL = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074
}
  , Rn = {
    r: 0,
    g: 0,
    b: 0
}
  , Nr = {
    h: 0,
    s: 0,
    l: 0
}
  , zp = {
    h: 0,
    s: 0,
    l: 0
};
function kv(n, e, t) {
    return t < 0 && (t += 1),
    t > 1 && (t -= 1),
    t < 1 / 6 ? n + (e - n) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? n + (e - n) * 6 * (2 / 3 - t) : n
}
function Gp(n, e) {
    return e.r = n.r,
    e.g = n.g,
    e.b = n.b,
    e
}
class Ie {
    constructor(e, t, i) {
        return this.isColor = !0,
        this.r = 1,
        this.g = 1,
        this.b = 1,
        t === void 0 && i === void 0 ? this.set(e) : this.setRGB(e, t, i)
    }
    set(e) {
        return e && e.isColor ? this.copy(e) : typeof e == "number" ? this.setHex(e) : typeof e == "string" && this.setStyle(e),
        this
    }
    setScalar(e) {
        return this.r = e,
        this.g = e,
        this.b = e,
        this
    }
    setHex(e, t=Hr) {
        return e = Math.floor(e),
        this.r = (e >> 16 & 255) / 255,
        this.g = (e >> 8 & 255) / 255,
        this.b = (e & 255) / 255,
        ai.toWorkingColorSpace(this, t),
        this
    }
    setRGB(e, t, i, r=ai.workingColorSpace) {
        return this.r = e,
        this.g = t,
        this.b = i,
        ai.toWorkingColorSpace(this, r),
        this
    }
    setHSL(e, t, i, r=ai.workingColorSpace) {
        if (e = i_(e, 1),
        t = _n(t, 0, 1),
        i = _n(i, 0, 1),
        t === 0)
            this.r = this.g = this.b = i;
        else {
            const s = i <= .5 ? i * (1 + t) : i + t - i * t
              , o = 2 * i - s;
            this.r = kv(o, s, e + 1 / 3),
            this.g = kv(o, s, e),
            this.b = kv(o, s, e - 1 / 3)
        }
        return ai.toWorkingColorSpace(this, r),
        this
    }
    setStyle(e, t=Hr) {
        function i(s) {
            s !== void 0 && parseFloat(s) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.")
        }
        let r;
        if (r = /^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)) {
            let s;
            const o = r[1]
              , a = r[2];
            switch (o) {
            case "rgb":
            case "rgba":
                if (s = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))
                    return this.r = Math.min(255, parseInt(s[1], 10)) / 255,
                    this.g = Math.min(255, parseInt(s[2], 10)) / 255,
                    this.b = Math.min(255, parseInt(s[3], 10)) / 255,
                    ai.toWorkingColorSpace(this, t),
                    i(s[4]),
                    this;
                if (s = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))
                    return this.r = Math.min(100, parseInt(s[1], 10)) / 100,
                    this.g = Math.min(100, parseInt(s[2], 10)) / 100,
                    this.b = Math.min(100, parseInt(s[3], 10)) / 100,
                    ai.toWorkingColorSpace(this, t),
                    i(s[4]),
                    this;
                break;
            case "hsl":
            case "hsla":
                if (s = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) {
                    const l = parseFloat(s[1]) / 360
                      , d = parseFloat(s[2]) / 100
                      , f = parseFloat(s[3]) / 100;
                    return i(s[4]),
                    this.setHSL(l, d, f, t)
                }
                break
            }
        } else if (r = /^\#([A-Fa-f\d]+)$/.exec(e)) {
            const s = r[1]
              , o = s.length;
            if (o === 3)
                return this.r = parseInt(s.charAt(0) + s.charAt(0), 16) / 255,
                this.g = parseInt(s.charAt(1) + s.charAt(1), 16) / 255,
                this.b = parseInt(s.charAt(2) + s.charAt(2), 16) / 255,
                ai.toWorkingColorSpace(this, t),
                this;
            if (o === 6)
                return this.r = parseInt(s.charAt(0) + s.charAt(1), 16) / 255,
                this.g = parseInt(s.charAt(2) + s.charAt(3), 16) / 255,
                this.b = parseInt(s.charAt(4) + s.charAt(5), 16) / 255,
                ai.toWorkingColorSpace(this, t),
                this
        }
        return e && e.length > 0 ? this.setColorName(e, t) : this
    }
    setColorName(e, t=Hr) {
        const i = aL[e.toLowerCase()];
        return i !== void 0 ? this.setHex(i, t) : console.warn("THREE.Color: Unknown color " + e),
        this
    }
    clone() {
        return new this.constructor(this.r,this.g,this.b)
    }
    copy(e) {
        return this.r = e.r,
        this.g = e.g,
        this.b = e.b,
        this
    }
    copySRGBToLinear(e) {
        return this.r = hl(e.r),
        this.g = hl(e.g),
        this.b = hl(e.b),
        this
    }
    copyLinearToSRGB(e) {
        return this.r = tg(e.r),
        this.g = tg(e.g),
        this.b = tg(e.b),
        this
    }
    convertSRGBToLinear() {
        return this.copySRGBToLinear(this),
        this
    }
    convertLinearToSRGB() {
        return this.copyLinearToSRGB(this),
        this
    }
    getHex(e=Hr) {
        return ai.fromWorkingColorSpace(Gp(this, Rn), e),
        _n(Rn.r * 255, 0, 255) << 16 ^ _n(Rn.g * 255, 0, 255) << 8 ^ _n(Rn.b * 255, 0, 255) << 0
    }
    getHexString(e=Hr) {
        return ("000000" + this.getHex(e).toString(16)).slice(-6)
    }
    getHSL(e, t=ai.workingColorSpace) {
        ai.fromWorkingColorSpace(Gp(this, Rn), t);
        const i = Rn.r
          , r = Rn.g
          , s = Rn.b
          , o = Math.max(i, r, s)
          , a = Math.min(i, r, s);
        let l, d;
        const f = (a + o) / 2;
        if (a === o)
            l = 0,
            d = 0;
        else {
            const h = o - a;
            switch (d = f <= .5 ? h / (o + a) : h / (2 - o - a),
            o) {
            case i:
                l = (r - s) / h + (r < s ? 6 : 0);
                break;
            case r:
                l = (s - i) / h + 2;
                break;
            case s:
                l = (i - r) / h + 4;
                break
            }
            l /= 6
        }
        return e.h = l,
        e.s = d,
        e.l = f,
        e
    }
    getRGB(e, t=ai.workingColorSpace) {
        return ai.fromWorkingColorSpace(Gp(this, Rn), t),
        e.r = Rn.r,
        e.g = Rn.g,
        e.b = Rn.b,
        e
    }
    getStyle(e=Hr) {
        return ai.fromWorkingColorSpace(Gp(this, Rn), e),
        e !== Hr ? `color(${e} ${Rn.r} ${Rn.g} ${Rn.b})` : `rgb(${Rn.r * 255 | 0},${Rn.g * 255 | 0},${Rn.b * 255 | 0})`
    }
    offsetHSL(e, t, i) {
        return this.getHSL(Nr),
        Nr.h += e,
        Nr.s += t,
        Nr.l += i,
        this.setHSL(Nr.h, Nr.s, Nr.l),
        this
    }
    add(e) {
        return this.r += e.r,
        this.g += e.g,
        this.b += e.b,
        this
    }
    addColors(e, t) {
        return this.r = e.r + t.r,
        this.g = e.g + t.g,
        this.b = e.b + t.b,
        this
    }
    addScalar(e) {
        return this.r += e,
        this.g += e,
        this.b += e,
        this
    }
    sub(e) {
        return this.r = Math.max(0, this.r - e.r),
        this.g = Math.max(0, this.g - e.g),
        this.b = Math.max(0, this.b - e.b),
        this
    }
    multiply(e) {
        return this.r *= e.r,
        this.g *= e.g,
        this.b *= e.b,
        this
    }
    multiplyScalar(e) {
        return this.r *= e,
        this.g *= e,
        this.b *= e,
        this
    }
    lerp(e, t) {
        return this.r += (e.r - this.r) * t,
        this.g += (e.g - this.g) * t,
        this.b += (e.b - this.b) * t,
        this
    }
    lerpColors(e, t, i) {
        return this.r = e.r + (t.r - e.r) * i,
        this.g = e.g + (t.g - e.g) * i,
        this.b = e.b + (t.b - e.b) * i,
        this
    }
    lerpHSL(e, t) {
        this.getHSL(Nr),
        e.getHSL(zp);
        const i = Jd(Nr.h, zp.h, t)
          , r = Jd(Nr.s, zp.s, t)
          , s = Jd(Nr.l, zp.l, t);
        return this.setHSL(i, r, s),
        this
    }
    equals(e) {
        return e.r === this.r && e.g === this.g && e.b === this.b
    }
    fromArray(e, t=0) {
        return this.r = e[t],
        this.g = e[t + 1],
        this.b = e[t + 2],
        this
    }
    toArray(e=[], t=0) {
        return e[t] = this.r,
        e[t + 1] = this.g,
        e[t + 2] = this.b,
        e
    }
    fromBufferAttribute(e, t) {
        return this.r = e.getX(t),
        this.g = e.getY(t),
        this.b = e.getZ(t),
        this
    }
    toJSON() {
        return this.getHex()
    }
    *[Symbol.iterator]() {
        yield this.r,
        yield this.g,
        yield this.b
    }
}
Ie.NAMES = aL;
let $l;
class r_ {
    static getDataURL(e) {
        if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u")
            return e.src;
        let t;
        if (e instanceof HTMLCanvasElement)
            t = e;
        else {
            $l === void 0 && ($l = Ef("canvas")),
            $l.width = e.width,
            $l.height = e.height;
            const i = $l.getContext("2d");
            e instanceof ImageData ? i.putImageData(e, 0, 0) : i.drawImage(e, 0, 0, e.width, e.height),
            t = $l
        }
        return t.width > 2048 || t.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", e),
        t.toDataURL("image/jpeg", .6)) : t.toDataURL("image/png")
    }
    static sRGBToLinear(e) {
        if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
            const t = Ef("canvas");
            t.width = e.width,
            t.height = e.height;
            const i = t.getContext("2d");
            i.drawImage(e, 0, 0, e.width, e.height);
            const r = i.getImageData(0, 0, e.width, e.height)
              , s = r.data;
            for (let o = 0; o < s.length; o++)
                s[o] = hl(s[o] / 255) * 255;
            return i.putImageData(r, 0, 0),
            t
        } else if (e.data) {
            const t = e.data.slice(0);
            for (let i = 0; i < t.length; i++)
                t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[i] = Math.floor(hl(t[i] / 255) * 255) : t[i] = hl(t[i]);
            return {
                data: t,
                width: e.width,
                height: e.height
            }
        } else
            return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),
            e
    }
}
class rl {
    constructor(e=null) {
        this.isSource = !0,
        this.uuid = qi(),
        this.data = e,
        this.version = 0
    }
    set needsUpdate(e) {
        e === !0 && this.version++
    }
    toJSON(e) {
        const t = e === void 0 || typeof e == "string";
        if (!t && e.images[this.uuid] !== void 0)
            return e.images[this.uuid];
        const i = {
            uuid: this.uuid,
            url: ""
        }
          , r = this.data;
        if (r !== null) {
            let s;
            if (Array.isArray(r)) {
                s = [];
                for (let o = 0, a = r.length; o < a; o++)
                    r[o].isDataTexture ? s.push(Fv(r[o].image)) : s.push(Fv(r[o]))
            } else
                s = Fv(r);
            i.url = s
        }
        return t || (e.images[this.uuid] = i),
        i
    }
}
function Fv(n) {
    return typeof HTMLImageElement < "u" && n instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && n instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && n instanceof ImageBitmap ? r_.getDataURL(n) : n.data ? {
        data: Array.from(n.data),
        width: n.width,
        height: n.height,
        type: n.data.constructor.name
    } : (console.warn("THREE.Texture: Unable to serialize Texture."),
    {})
}
let U4 = 0;
class tn extends bs {
    constructor(e=tn.DEFAULT_IMAGE, t=tn.DEFAULT_MAPPING, i=Yn, r=Yn, s=on, o=_s, a=Ii, l=lo, d=tn.DEFAULT_ANISOTROPY, f=co) {
        super(),
        this.isTexture = !0,
        Object.defineProperty(this, "id", {
            value: U4++
        }),
        this.uuid = qi(),
        this.name = "",
        this.source = new rl(e),
        this.mipmaps = [],
        this.mapping = t,
        this.wrapS = i,
        this.wrapT = r,
        this.magFilter = s,
        this.minFilter = o,
        this.anisotropy = d,
        this.format = a,
        this.internalFormat = null,
        this.type = l,
        this.offset = new ge(0,0),
        this.repeat = new ge(1,1),
        this.center = new ge(0,0),
        this.rotation = 0,
        this.matrixAutoUpdate = !0,
        this.matrix = new xi,
        this.generateMipmaps = !0,
        this.premultiplyAlpha = !1,
        this.flipY = !0,
        this.unpackAlignment = 4,
        this.encoding = f,
        this.userData = {},
        this.version = 0,
        this.onUpdate = null,
        this.isRenderTargetTexture = !1,
        this.needsPMREMUpdate = !1
    }
    get image() {
        return this.source.data
    }
    set image(e) {
        this.source.data = e
    }
    updateMatrix() {
        this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y)
    }
    clone() {
        return new this.constructor().copy(this)
    }
    copy(e) {
        return this.name = e.name,
        this.source = e.source,
        this.mipmaps = e.mipmaps.slice(0),
        this.mapping = e.mapping,
        this.wrapS = e.wrapS,
        this.wrapT = e.wrapT,
        this.magFilter = e.magFilter,
        this.minFilter = e.minFilter,
        this.anisotropy = e.anisotropy,
        this.format = e.format,
        this.internalFormat = e.internalFormat,
        this.type = e.type,
        this.offset.copy(e.offset),
        this.repeat.copy(e.repeat),
        this.center.copy(e.center),
        this.rotation = e.rotation,
        this.matrixAutoUpdate = e.matrixAutoUpdate,
        this.matrix.copy(e.matrix),
        this.generateMipmaps = e.generateMipmaps,
        this.premultiplyAlpha = e.premultiplyAlpha,
        this.flipY = e.flipY,
        this.unpackAlignment = e.unpackAlignment,
        this.encoding = e.encoding,
        this.userData = JSON.parse(JSON.stringify(e.userData)),
        this.needsUpdate = !0,
        this
    }
    toJSON(e) {
        const t = e === void 0 || typeof e == "string";
        if (!t && e.textures[this.uuid] !== void 0)
            return e.textures[this.uuid];
        const i = {
            metadata: {
                version: 4.5,
                type: "Texture",
                generator: "Texture.toJSON"
            },
            uuid: this.uuid,
            name: this.name,
            image: this.source.toJSON(e).uuid,
            mapping: this.mapping,
            repeat: [this.repeat.x, this.repeat.y],
            offset: [this.offset.x, this.offset.y],
            center: [this.center.x, this.center.y],
            rotation: this.rotation,
            wrap: [this.wrapS, this.wrapT],
            format: this.format,
            type: this.type,
            encoding: this.encoding,
            minFilter: this.minFilter,
            magFilter: this.magFilter,
            anisotropy: this.anisotropy,
            flipY: this.flipY,
            generateMipmaps: this.generateMipmaps,
            premultiplyAlpha: this.premultiplyAlpha,
            unpackAlignment: this.unpackAlignment
        };
        return Object.keys(this.userData).length > 0 && (i.userData = this.userData),
        t || (e.textures[this.uuid] = i),
        i
    }
    dispose() {
        this.dispatchEvent({
            type: "dispose"
        })
    }
    transformUv(e) {
        if (this.mapping !== M0)
            return e;
        if (e.applyMatrix3(this.matrix),
        e.x < 0 || e.x > 1)
            switch (this.wrapS) {
            case aa:
                e.x = e.x - Math.floor(e.x);
                break;
            case Yn:
                e.x = e.x < 0 ? 0 : 1;
                break;
            case iu:
                Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
                break
            }
        if (e.y < 0 || e.y > 1)
            switch (this.wrapT) {
            case aa:
                e.y = e.y - Math.floor(e.y);
                break;
            case Yn:
                e.y = e.y < 0 ? 0 : 1;
                break;
            case iu:
                Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y);
                break
            }
        return this.flipY && (e.y = 1 - e.y),
        e
    }
    set needsUpdate(e) {
        e === !0 && (this.version++,
        this.source.needsUpdate = !0)
    }
}
tn.DEFAULT_IMAGE = null;
tn.DEFAULT_MAPPING = M0;
tn.DEFAULT_ANISOTROPY = 1;
class zt {
    constructor(e=0, t=0, i=0, r=1) {
        zt.prototype.isVector4 = !0,
        this.x = e,
        this.y = t,
        this.z = i,
        this.w = r
    }
    get width() {
        return this.z
    }
    set width(e) {
        this.z = e
    }
    get height() {
        return this.w
    }
    set height(e) {
        this.w = e
    }
    set(e, t, i, r) {
        return this.x = e,
        this.y = t,
        this.z = i,
        this.w = r,
        this
    }
    setScalar(e) {
        return this.x = e,
        this.y = e,
        this.z = e,
        this.w = e,
        this
    }
    setX(e) {
        return this.x = e,
        this
    }
    setY(e) {
        return this.y = e,
        this
    }
    setZ(e) {
        return this.z = e,
        this
    }
    setW(e) {
        return this.w = e,
        this
    }
    setComponent(e, t) {
        switch (e) {
        case 0:
            this.x = t;
            break;
        case 1:
            this.y = t;
            break;
        case 2:
            this.z = t;
            break;
        case 3:
            this.w = t;
            break;
        default:
            throw new Error("index is out of range: " + e)
        }
        return this
    }
    getComponent(e) {
        switch (e) {
        case 0:
            return this.x;
        case 1:
            return this.y;
        case 2:
            return this.z;
        case 3:
            return this.w;
        default:
            throw new Error("index is out of range: " + e)
        }
    }
    clone() {
        return new this.constructor(this.x,this.y,this.z,this.w)
    }
    copy(e) {
        return this.x = e.x,
        this.y = e.y,
        this.z = e.z,
        this.w = e.w !== void 0 ? e.w : 1,
        this
    }
    add(e) {
        return this.x += e.x,
        this.y += e.y,
        this.z += e.z,
        this.w += e.w,
        this
    }
    addScalar(e) {
        return this.x += e,
        this.y += e,
        this.z += e,
        this.w += e,
        this
    }
    addVectors(e, t) {
        return this.x = e.x + t.x,
        this.y = e.y + t.y,
        this.z = e.z + t.z,
        this.w = e.w + t.w,
        this
    }
    addScaledVector(e, t) {
        return this.x += e.x * t,
        this.y += e.y * t,
        this.z += e.z * t,
        this.w += e.w * t,
        this
    }
    sub(e) {
        return this.x -= e.x,
        this.y -= e.y,
        this.z -= e.z,
        this.w -= e.w,
        this
    }
    subScalar(e) {
        return this.x -= e,
        this.y -= e,
        this.z -= e,
        this.w -= e,
        this
    }
    subVectors(e, t) {
        return this.x = e.x - t.x,
        this.y = e.y - t.y,
        this.z = e.z - t.z,
        this.w = e.w - t.w,
        this
    }
    multiply(e) {
        return this.x *= e.x,
        this.y *= e.y,
        this.z *= e.z,
        this.w *= e.w,
        this
    }
    multiplyScalar(e) {
        return this.x *= e,
        this.y *= e,
        this.z *= e,
        this.w *= e,
        this
    }
    applyMatrix4(e) {
        const t = this.x
          , i = this.y
          , r = this.z
          , s = this.w
          , o = e.elements;
        return this.x = o[0] * t + o[4] * i + o[8] * r + o[12] * s,
        this.y = o[1] * t + o[5] * i + o[9] * r + o[13] * s,
        this.z = o[2] * t + o[6] * i + o[10] * r + o[14] * s,
        this.w = o[3] * t + o[7] * i + o[11] * r + o[15] * s,
        this
    }
    divideScalar(e) {
        return this.multiplyScalar(1 / e)
    }
    setAxisAngleFromQuaternion(e) {
        this.w = 2 * Math.acos(e.w);
        const t = Math.sqrt(1 - e.w * e.w);
        return t < 1e-4 ? (this.x = 1,
        this.y = 0,
        this.z = 0) : (this.x = e.x / t,
        this.y = e.y / t,
        this.z = e.z / t),
        this
    }
    setAxisAngleFromRotationMatrix(e) {
        let t, i, r, s;
        const l = e.elements
          , d = l[0]
          , f = l[4]
          , h = l[8]
          , p = l[1]
          , m = l[5]
          , y = l[9]
          , v = l[2]
          , x = l[6]
          , w = l[10];
        if (Math.abs(f - p) < .01 && Math.abs(h - v) < .01 && Math.abs(y - x) < .01) {
            if (Math.abs(f + p) < .1 && Math.abs(h + v) < .1 && Math.abs(y + x) < .1 && Math.abs(d + m + w - 3) < .1)
                return this.set(1, 0, 0, 0),
                this;
            t = Math.PI;
            const M = (d + 1) / 2
              , S = (m + 1) / 2
              , E = (w + 1) / 2
              , P = (f + p) / 4
              , L = (h + v) / 4
              , C = (y + x) / 4;
            return M > S && M > E ? M < .01 ? (i = 0,
            r = .707106781,
            s = .707106781) : (i = Math.sqrt(M),
            r = P / i,
            s = L / i) : S > E ? S < .01 ? (i = .707106781,
            r = 0,
            s = .707106781) : (r = Math.sqrt(S),
            i = P / r,
            s = C / r) : E < .01 ? (i = .707106781,
            r = .707106781,
            s = 0) : (s = Math.sqrt(E),
            i = L / s,
            r = C / s),
            this.set(i, r, s, t),
            this
        }
        let A = Math.sqrt((x - y) * (x - y) + (h - v) * (h - v) + (p - f) * (p - f));
        return Math.abs(A) < .001 && (A = 1),
        this.x = (x - y) / A,
        this.y = (h - v) / A,
        this.z = (p - f) / A,
        this.w = Math.acos((d + m + w - 1) / 2),
        this
    }
    min(e) {
        return this.x = Math.min(this.x, e.x),
        this.y = Math.min(this.y, e.y),
        this.z = Math.min(this.z, e.z),
        this.w = Math.min(this.w, e.w),
        this
    }
    max(e) {
        return this.x = Math.max(this.x, e.x),
        this.y = Math.max(this.y, e.y),
        this.z = Math.max(this.z, e.z),
        this.w = Math.max(this.w, e.w),
        this
    }
    clamp(e, t) {
        return this.x = Math.max(e.x, Math.min(t.x, this.x)),
        this.y = Math.max(e.y, Math.min(t.y, this.y)),
        this.z = Math.max(e.z, Math.min(t.z, this.z)),
        this.w = Math.max(e.w, Math.min(t.w, this.w)),
        this
    }
    clampScalar(e, t) {
        return this.x = Math.max(e, Math.min(t, this.x)),
        this.y = Math.max(e, Math.min(t, this.y)),
        this.z = Math.max(e, Math.min(t, this.z)),
        this.w = Math.max(e, Math.min(t, this.w)),
        this
    }
    clampLength(e, t) {
        const i = this.length();
        return this.divideScalar(i || 1).multiplyScalar(Math.max(e, Math.min(t, i)))
    }
    floor() {
        return this.x = Math.floor(this.x),
        this.y = Math.floor(this.y),
        this.z = Math.floor(this.z),
        this.w = Math.floor(this.w),
        this
    }
    ceil() {
        return this.x = Math.ceil(this.x),
        this.y = Math.ceil(this.y),
        this.z = Math.ceil(this.z),
        this.w = Math.ceil(this.w),
        this
    }
    round() {
        return this.x = Math.round(this.x),
        this.y = Math.round(this.y),
        this.z = Math.round(this.z),
        this.w = Math.round(this.w),
        this
    }
    roundToZero() {
        return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x),
        this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y),
        this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z),
        this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w),
        this
    }
    negate() {
        return this.x = -this.x,
        this.y = -this.y,
        this.z = -this.z,
        this.w = -this.w,
        this
    }
    dot(e) {
        return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w
    }
    lengthSq() {
        return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    }
    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
    }
    manhattanLength() {
        return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
    }
    normalize() {
        return this.divideScalar(this.length() || 1)
    }
    setLength(e) {
        return this.normalize().multiplyScalar(e)
    }
    lerp(e, t) {
        return this.x += (e.x - this.x) * t,
        this.y += (e.y - this.y) * t,
        this.z += (e.z - this.z) * t,
        this.w += (e.w - this.w) * t,
        this
    }
    lerpVectors(e, t, i) {
        return this.x = e.x + (t.x - e.x) * i,
        this.y = e.y + (t.y - e.y) * i,
        this.z = e.z + (t.z - e.z) * i,
        this.w = e.w + (t.w - e.w) * i,
        this
    }
    equals(e) {
        return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w
    }
    fromArray(e, t=0) {
        return this.x = e[t],
        this.y = e[t + 1],
        this.z = e[t + 2],
        this.w = e[t + 3],
        this
    }
    toArray(e=[], t=0) {
        return e[t] = this.x,
        e[t + 1] = this.y,
        e[t + 2] = this.z,
        e[t + 3] = this.w,
        e
    }
    fromBufferAttribute(e, t) {
        return this.x = e.getX(t),
        this.y = e.getY(t),
        this.z = e.getZ(t),
        this.w = e.getW(t),
        this
    }
    random() {
        return this.x = Math.random(),
        this.y = Math.random(),
        this.z = Math.random(),
        this.w = Math.random(),
        this
    }
    *[Symbol.iterator]() {
        yield this.x,
        yield this.y,
        yield this.z,
        yield this.w
    }
}
class Zr extends bs {
    constructor(e=1, t=1, i={}) {
        super(),
        this.isWebGLRenderTarget = !0,
        this.width = e,
        this.height = t,
        this.depth = 1,
        this.scissor = new zt(0,0,e,t),
        this.scissorTest = !1,
        this.viewport = new zt(0,0,e,t);
        const r = {
            width: e,
            height: t,
            depth: 1
        };
        this.texture = new tn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),
        this.texture.isRenderTargetTexture = !0,
        this.texture.flipY = !1,
        this.texture.generateMipmaps = i.generateMipmaps !== void 0 ? i.generateMipmaps : !1,
        this.texture.internalFormat = i.internalFormat !== void 0 ? i.internalFormat : null,
        this.texture.minFilter = i.minFilter !== void 0 ? i.minFilter : on,
        this.depthBuffer = i.depthBuffer !== void 0 ? i.depthBuffer : !0,
        this.stencilBuffer = i.stencilBuffer !== void 0 ? i.stencilBuffer : !1,
        this.depthTexture = i.depthTexture !== void 0 ? i.depthTexture : null,
        this.samples = i.samples !== void 0 ? i.samples : 0
    }
    setSize(e, t, i=1) {
        (this.width !== e || this.height !== t || this.depth !== i) && (this.width = e,
        this.height = t,
        this.depth = i,
        this.texture.image.width = e,
        this.texture.image.height = t,
        this.texture.image.depth = i,
        this.dispose()),
        this.viewport.set(0, 0, e, t),
        this.scissor.set(0, 0, e, t)
    }
    clone() {
        return new this.constructor().copy(this)
    }
    copy(e) {
        this.width = e.width,
        this.height = e.height,
        this.depth = e.depth,
        this.viewport.copy(e.viewport),
        this.texture = e.texture.clone(),
        this.texture.isRenderTargetTexture = !0;
        const t = Object.assign({}, e.texture.image);
        return this.texture.source = new rl(t),
        this.depthBuffer = e.depthBuffer,
        this.stencilBuffer = e.stencilBuffer,
        e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()),
        this.samples = e.samples,
        this
    }
    dispose() {
        this.dispatchEvent({
            type: "dispose"
        })
    }
}
class C0 extends tn {
    constructor(e=null, t=1, i=1, r=1) {
        super(null),
        this.isDataArrayTexture = !0,
        this.image = {
            data: e,
            width: t,
            height: i,
            depth: r
        },
        this.magFilter = gn,
        this.minFilter = gn,
        this.wrapR = Yn,
        this.generateMipmaps = !1,
        this.flipY = !1,
        this.unpackAlignment = 1
    }
}
class z4 extends Zr {
    constructor(e=1, t=1, i=1) {
        super(e, t),
        this.isWebGLArrayRenderTarget = !0,
        this.depth = i,
        this.texture = new C0(null,e,t,i),
        this.texture.isRenderTargetTexture = !0
    }
}
class s_ extends tn {
    constructor(e=null, t=1, i=1, r=1) {
        super(null),
        this.isData3DTexture = !0,
        this.image = {
            data: e,
            width: t,
            height: i,
            depth: r
        },
        this.magFilter = gn,
        this.minFilter = gn,
        this.wrapR = Yn,
        this.generateMipmaps = !1,
        this.flipY = !1,
        this.unpackAlignment = 1
    }
}
class G4 extends Zr {
    constructor(e=1, t=1, i=1) {
        super(e, t),
        this.isWebGL3DRenderTarget = !0,
        this.depth = i,
        this.texture = new s_(null,e,t,i),
        this.texture.isRenderTargetTexture = !0
    }
}
class H4 extends Zr {
    constructor(e=1, t=1, i=1, r={}) {
        super(e, t, r),
        this.isWebGLMultipleRenderTargets = !0;
        const s = this.texture;
        this.texture = [];
        for (let o = 0; o < i; o++)
            this.texture[o] = s.clone(),
            this.texture[o].isRenderTargetTexture = !0
    }
    setSize(e, t, i=1) {
        if (this.width !== e || this.height !== t || this.depth !== i) {
            this.width = e,
            this.height = t,
            this.depth = i;
            for (let r = 0, s = this.texture.length; r < s; r++)
                this.texture[r].image.width = e,
                this.texture[r].image.height = t,
                this.texture[r].image.depth = i;
            this.dispose()
        }
        return this.viewport.set(0, 0, e, t),
        this.scissor.set(0, 0, e, t),
        this
    }
    copy(e) {
        this.dispose(),
        this.width = e.width,
        this.height = e.height,
        this.depth = e.depth,
        this.viewport.set(0, 0, this.width, this.height),
        this.scissor.set(0, 0, this.width, this.height),
        this.depthBuffer = e.depthBuffer,
        this.stencilBuffer = e.stencilBuffer,
        e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()),
        this.texture.length = 0;
        for (let t = 0, i = e.texture.length; t < i; t++)
            this.texture[t] = e.texture[t].clone(),
            this.texture[t].isRenderTargetTexture = !0;
        return this
    }
}
class qn {
    constructor(e=0, t=0, i=0, r=1) {
        this.isQuaternion = !0,
        this._x = e,
        this._y = t,
        this._z = i,
        this._w = r
    }
    static slerpFlat(e, t, i, r, s, o, a) {
        let l = i[r + 0]
          , d = i[r + 1]
          , f = i[r + 2]
          , h = i[r + 3];
        const p = s[o + 0]
          , m = s[o + 1]
          , y = s[o + 2]
          , v = s[o + 3];
        if (a === 0) {
            e[t + 0] = l,
            e[t + 1] = d,
            e[t + 2] = f,
            e[t + 3] = h;
            return
        }
        if (a === 1) {
            e[t + 0] = p,
            e[t + 1] = m,
            e[t + 2] = y,
            e[t + 3] = v;
            return
        }
        if (h !== v || l !== p || d !== m || f !== y) {
            let x = 1 - a;
            const w = l * p + d * m + f * y + h * v
              , A = w >= 0 ? 1 : -1
              , M = 1 - w * w;
            if (M > Number.EPSILON) {
                const E = Math.sqrt(M)
                  , P = Math.atan2(E, w * A);
                x = Math.sin(x * P) / E,
                a = Math.sin(a * P) / E
            }
            const S = a * A;
            if (l = l * x + p * S,
            d = d * x + m * S,
            f = f * x + y * S,
            h = h * x + v * S,
            x === 1 - a) {
                const E = 1 / Math.sqrt(l * l + d * d + f * f + h * h);
                l *= E,
                d *= E,
                f *= E,
                h *= E
            }
        }
        e[t] = l,
        e[t + 1] = d,
        e[t + 2] = f,
        e[t + 3] = h
    }
    static multiplyQuaternionsFlat(e, t, i, r, s, o) {
        const a = i[r]
          , l = i[r + 1]
          , d = i[r + 2]
          , f = i[r + 3]
          , h = s[o]
          , p = s[o + 1]
          , m = s[o + 2]
          , y = s[o + 3];
        return e[t] = a * y + f * h + l * m - d * p,
        e[t + 1] = l * y + f * p + d * h - a * m,
        e[t + 2] = d * y + f * m + a * p - l * h,
        e[t + 3] = f * y - a * h - l * p - d * m,
        e
    }
    get x() {
        return this._x
    }
    set x(e) {
        this._x = e,
        this._onChangeCallback()
    }
    get y() {
        return this._y
    }
    set y(e) {
        this._y = e,
        this._onChangeCallback()
    }
    get z() {
        return this._z
    }
    set z(e) {
        this._z = e,
        this._onChangeCallback()
    }
    get w() {
        return this._w
    }
    set w(e) {
        this._w = e,
        this._onChangeCallback()
    }
    set(e, t, i, r) {
        return this._x = e,
        this._y = t,
        this._z = i,
        this._w = r,
        this._onChangeCallback(),
        this
    }
    clone() {
        return new this.constructor(this._x,this._y,this._z,this._w)
    }
    copy(e) {
        return this._x = e.x,
        this._y = e.y,
        this._z = e.z,
        this._w = e.w,
        this._onChangeCallback(),
        this
    }
    setFromEuler(e, t) {
        const i = e._x
          , r = e._y
          , s = e._z
          , o = e._order
          , a = Math.cos
          , l = Math.sin
          , d = a(i / 2)
          , f = a(r / 2)
          , h = a(s / 2)
          , p = l(i / 2)
          , m = l(r / 2)
          , y = l(s / 2);
        switch (o) {
        case "XYZ":
            this._x = p * f * h + d * m * y,
            this._y = d * m * h - p * f * y,
            this._z = d * f * y + p * m * h,
            this._w = d * f * h - p * m * y;
            break;
        case "YXZ":
            this._x = p * f * h + d * m * y,
            this._y = d * m * h - p * f * y,
            this._z = d * f * y - p * m * h,
            this._w = d * f * h + p * m * y;
            break;
        case "ZXY":
            this._x = p * f * h - d * m * y,
            this._y = d * m * h + p * f * y,
            this._z = d * f * y + p * m * h,
            this._w = d * f * h - p * m * y;
            break;
        case "ZYX":
            this._x = p * f * h - d * m * y,
            this._y = d * m * h + p * f * y,
            this._z = d * f * y - p * m * h,
            this._w = d * f * h + p * m * y;
            break;
        case "YZX":
            this._x = p * f * h + d * m * y,
            this._y = d * m * h + p * f * y,
            this._z = d * f * y - p * m * h,
            this._w = d * f * h - p * m * y;
            break;
        case "XZY":
            this._x = p * f * h - d * m * y,
            this._y = d * m * h - p * f * y,
            this._z = d * f * y + p * m * h,
            this._w = d * f * h + p * m * y;
            break;
        default:
            console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + o)
        }
        return t !== !1 && this._onChangeCallback(),
        this
    }
    setFromAxisAngle(e, t) {
        const i = t / 2
          , r = Math.sin(i);
        return this._x = e.x * r,
        this._y = e.y * r,
        this._z = e.z * r,
        this._w = Math.cos(i),
        this._onChangeCallback(),
        this
    }
    setFromRotationMatrix(e) {
        const t = e.elements
          , i = t[0]
          , r = t[4]
          , s = t[8]
          , o = t[1]
          , a = t[5]
          , l = t[9]
          , d = t[2]
          , f = t[6]
          , h = t[10]
          , p = i + a + h;
        if (p > 0) {
            const m = .5 / Math.sqrt(p + 1);
            this._w = .25 / m,
            this._x = (f - l) * m,
            this._y = (s - d) * m,
            this._z = (o - r) * m
        } else if (i > a && i > h) {
            const m = 2 * Math.sqrt(1 + i - a - h);
            this._w = (f - l) / m,
            this._x = .25 * m,
            this._y = (r + o) / m,
            this._z = (s + d) / m
        } else if (a > h) {
            const m = 2 * Math.sqrt(1 + a - i - h);
            this._w = (s - d) / m,
            this._x = (r + o) / m,
            this._y = .25 * m,
            this._z = (l + f) / m
        } else {
            const m = 2 * Math.sqrt(1 + h - i - a);
            this._w = (o - r) / m,
            this._x = (s + d) / m,
            this._y = (l + f) / m,
            this._z = .25 * m
        }
        return this._onChangeCallback(),
        this
    }
    setFromUnitVectors(e, t) {
        let i = e.dot(t) + 1;
        return i < Number.EPSILON ? (i = 0,
        Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y,
        this._y = e.x,
        this._z = 0,
        this._w = i) : (this._x = 0,
        this._y = -e.z,
        this._z = e.y,
        this._w = i)) : (this._x = e.y * t.z - e.z * t.y,
        this._y = e.z * t.x - e.x * t.z,
        this._z = e.x * t.y - e.y * t.x,
        this._w = i),
        this.normalize()
    }
    angleTo(e) {
        return 2 * Math.acos(Math.abs(_n(this.dot(e), -1, 1)))
    }
    rotateTowards(e, t) {
        const i = this.angleTo(e);
        if (i === 0)
            return this;
        const r = Math.min(1, t / i);
        return this.slerp(e, r),
        this
    }
    identity() {
        return this.set(0, 0, 0, 1)
    }
    invert() {
        return this.conjugate()
    }
    conjugate() {
        return this._x *= -1,
        this._y *= -1,
        this._z *= -1,
        this._onChangeCallback(),
        this
    }
    dot(e) {
        return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w
    }
    lengthSq() {
        return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
    }
    length() {
        return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w)
    }
    normalize() {
        let e = this.length();
        return e === 0 ? (this._x = 0,
        this._y = 0,
        this._z = 0,
        this._w = 1) : (e = 1 / e,
        this._x = this._x * e,
        this._y = this._y * e,
        this._z = this._z * e,
        this._w = this._w * e),
        this._onChangeCallback(),
        this
    }
    multiply(e) {
        return this.multiplyQuaternions(this, e)
    }
    premultiply(e) {
        return this.multiplyQuaternions(e, this)
    }
    multiplyQuaternions(e, t) {
        const i = e._x
          , r = e._y
          , s = e._z
          , o = e._w
          , a = t._x
          , l = t._y
          , d = t._z
          , f = t._w;
        return this._x = i * f + o * a + r * d - s * l,
        this._y = r * f + o * l + s * a - i * d,
        this._z = s * f + o * d + i * l - r * a,
        this._w = o * f - i * a - r * l - s * d,
        this._onChangeCallback(),
        this
    }
    slerp(e, t) {
        if (t === 0)
            return this;
        if (t === 1)
            return this.copy(e);
        const i = this._x
          , r = this._y
          , s = this._z
          , o = this._w;
        let a = o * e._w + i * e._x + r * e._y + s * e._z;
        if (a < 0 ? (this._w = -e._w,
        this._x = -e._x,
        this._y = -e._y,
        this._z = -e._z,
        a = -a) : this.copy(e),
        a >= 1)
            return this._w = o,
            this._x = i,
            this._y = r,
            this._z = s,
            this;
        const l = 1 - a * a;
        if (l <= Number.EPSILON) {
            const m = 1 - t;
            return this._w = m * o + t * this._w,
            this._x = m * i + t * this._x,
            this._y = m * r + t * this._y,
            this._z = m * s + t * this._z,
            this.normalize(),
            this._onChangeCallback(),
            this
        }
        const d = Math.sqrt(l)
          , f = Math.atan2(d, a)
          , h = Math.sin((1 - t) * f) / d
          , p = Math.sin(t * f) / d;
        return this._w = o * h + this._w * p,
        this._x = i * h + this._x * p,
        this._y = r * h + this._y * p,
        this._z = s * h + this._z * p,
        this._onChangeCallback(),
        this
    }
    slerpQuaternions(e, t, i) {
        return this.copy(e).slerp(t, i)
    }
    random() {
        const e = Math.random()
          , t = Math.sqrt(1 - e)
          , i = Math.sqrt(e)
          , r = 2 * Math.PI * Math.random()
          , s = 2 * Math.PI * Math.random();
        return this.set(t * Math.cos(r), i * Math.sin(s), i * Math.cos(s), t * Math.sin(r))
    }
    equals(e) {
        return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w
    }
    fromArray(e, t=0) {
        return this._x = e[t],
        this._y = e[t + 1],
        this._z = e[t + 2],
        this._w = e[t + 3],
        this._onChangeCallback(),
        this
    }
    toArray(e=[], t=0) {
        return e[t] = this._x,
        e[t + 1] = this._y,
        e[t + 2] = this._z,
        e[t + 3] = this._w,
        e
    }
    fromBufferAttribute(e, t) {
        return this._x = e.getX(t),
        this._y = e.getY(t),
        this._z = e.getZ(t),
        this._w = e.getW(t),
        this
    }
    _onChange(e) {
        return this._onChangeCallback = e,
        this
    }
    _onChangeCallback() {}
    *[Symbol.iterator]() {
        yield this._x,
        yield this._y,
        yield this._z,
        yield this._w
    }
}
class D {
    constructor(e=0, t=0, i=0) {
        D.prototype.isVector3 = !0,
        this.x = e,
        this.y = t,
        this.z = i
    }
    set(e, t, i) {
        return i === void 0 && (i = this.z),
        this.x = e,
        this.y = t,
        this.z = i,
        this
    }
    setScalar(e) {
        return this.x = e,
        this.y = e,
        this.z = e,
        this
    }
    setX(e) {
        return this.x = e,
        this
    }
    setY(e) {
        return this.y = e,
        this
    }
    setZ(e) {
        return this.z = e,
        this
    }
    setComponent(e, t) {
        switch (e) {
        case 0:
            this.x = t;
            break;
        case 1:
            this.y = t;
            break;
        case 2:
            this.z = t;
            break;
        default:
            throw new Error("index is out of range: " + e)
        }
        return this
    }
    getComponent(e) {
        switch (e) {
        case 0:
            return this.x;
        case 1:
            return this.y;
        case 2:
            return this.z;
        default:
            throw new Error("index is out of range: " + e)
        }
    }
    clone() {
        return new this.constructor(this.x,this.y,this.z)
    }
    copy(e) {
        return this.x = e.x,
        this.y = e.y,
        this.z = e.z,
        this
    }
    add(e) {
        return this.x += e.x,
        this.y += e.y,
        this.z += e.z,
        this
    }
    addScalar(e) {
        return this.x += e,
        this.y += e,
        this.z += e,
        this
    }
    addVectors(e, t) {
        return this.x = e.x + t.x,
        this.y = e.y + t.y,
        this.z = e.z + t.z,
        this
    }
    addScaledVector(e, t) {
        return this.x += e.x * t,
        this.y += e.y * t,
        this.z += e.z * t,
        this
    }
    sub(e) {
        return this.x -= e.x,
        this.y -= e.y,
        this.z -= e.z,
        this
    }
    subScalar(e) {
        return this.x -= e,
        this.y -= e,
        this.z -= e,
        this
    }
    subVectors(e, t) {
        return this.x = e.x - t.x,
        this.y = e.y - t.y,
        this.z = e.z - t.z,
        this
    }
    multiply(e) {
        return this.x *= e.x,
        this.y *= e.y,
        this.z *= e.z,
        this
    }
    multiplyScalar(e) {
        return this.x *= e,
        this.y *= e,
        this.z *= e,
        this
    }
    multiplyVectors(e, t) {
        return this.x = e.x * t.x,
        this.y = e.y * t.y,
        this.z = e.z * t.z,
        this
    }
    applyEuler(e) {
        return this.applyQuaternion(RC.setFromEuler(e))
    }
    applyAxisAngle(e, t) {
        return this.applyQuaternion(RC.setFromAxisAngle(e, t))
    }
    applyMatrix3(e) {
        const t = this.x
          , i = this.y
          , r = this.z
          , s = e.elements;
        return this.x = s[0] * t + s[3] * i + s[6] * r,
        this.y = s[1] * t + s[4] * i + s[7] * r,
        this.z = s[2] * t + s[5] * i + s[8] * r,
        this
    }
    applyNormalMatrix(e) {
        return this.applyMatrix3(e).normalize()
    }
    applyMatrix4(e) {
        const t = this.x
          , i = this.y
          , r = this.z
          , s = e.elements
          , o = 1 / (s[3] * t + s[7] * i + s[11] * r + s[15]);
        return this.x = (s[0] * t + s[4] * i + s[8] * r + s[12]) * o,
        this.y = (s[1] * t + s[5] * i + s[9] * r + s[13]) * o,
        this.z = (s[2] * t + s[6] * i + s[10] * r + s[14]) * o,
        this
    }
    applyQuaternion(e) {
        const t = this.x
          , i = this.y
          , r = this.z
          , s = e.x
          , o = e.y
          , a = e.z
          , l = e.w
          , d = l * t + o * r - a * i
          , f = l * i + a * t - s * r
          , h = l * r + s * i - o * t
          , p = -s * t - o * i - a * r;
        return this.x = d * l + p * -s + f * -a - h * -o,
        this.y = f * l + p * -o + h * -s - d * -a,
        this.z = h * l + p * -a + d * -o - f * -s,
        this
    }
    project(e) {
        return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)
    }
    unproject(e) {
        return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)
    }
    transformDirection(e) {
        const t = this.x
          , i = this.y
          , r = this.z
          , s = e.elements;
        return this.x = s[0] * t + s[4] * i + s[8] * r,
        this.y = s[1] * t + s[5] * i + s[9] * r,
        this.z = s[2] * t + s[6] * i + s[10] * r,
        this.normalize()
    }
    divide(e) {
        return this.x /= e.x,
        this.y /= e.y,
        this.z /= e.z,
        this
    }
    divideScalar(e) {
        return this.multiplyScalar(1 / e)
    }
    min(e) {
        return this.x = Math.min(this.x, e.x),
        this.y = Math.min(this.y, e.y),
        this.z = Math.min(this.z, e.z),
        this
    }
    max(e) {
        return this.x = Math.max(this.x, e.x),
        this.y = Math.max(this.y, e.y),
        this.z = Math.max(this.z, e.z),
        this
    }
    clamp(e, t) {
        return this.x = Math.max(e.x, Math.min(t.x, this.x)),
        this.y = Math.max(e.y, Math.min(t.y, this.y)),
        this.z = Math.max(e.z, Math.min(t.z, this.z)),
        this
    }
    clampScalar(e, t) {
        return this.x = Math.max(e, Math.min(t, this.x)),
        this.y = Math.max(e, Math.min(t, this.y)),
        this.z = Math.max(e, Math.min(t, this.z)),
        this
    }
    clampLength(e, t) {
        const i = this.length();
        return this.divideScalar(i || 1).multiplyScalar(Math.max(e, Math.min(t, i)))
    }
    floor() {
        return this.x = Math.floor(this.x),
        this.y = Math.floor(this.y),
        this.z = Math.floor(this.z),
        this
    }
    ceil() {
        return this.x = Math.ceil(this.x),
        this.y = Math.ceil(this.y),
        this.z = Math.ceil(this.z),
        this
    }
    round() {
        return this.x = Math.round(this.x),
        this.y = Math.round(this.y),
        this.z = Math.round(this.z),
        this
    }
    roundToZero() {
        return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x),
        this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y),
        this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z),
        this
    }
    negate() {
        return this.x = -this.x,
        this.y = -this.y,
        this.z = -this.z,
        this
    }
    dot(e) {
        return this.x * e.x + this.y * e.y + this.z * e.z
    }
    lengthSq() {
        return this.x * this.x + this.y * this.y + this.z * this.z
    }
    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
    }
    manhattanLength() {
        return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
    }
    normalize() {
        return this.divideScalar(this.length() || 1)
    }
    setLength(e) {
        return this.normalize().multiplyScalar(e)
    }
    lerp(e, t) {
        return this.x += (e.x - this.x) * t,
        this.y += (e.y - this.y) * t,
        this.z += (e.z - this.z) * t,
        this
    }
    lerpVectors(e, t, i) {
        return this.x = e.x + (t.x - e.x) * i,
        this.y = e.y + (t.y - e.y) * i,
        this.z = e.z + (t.z - e.z) * i,
        this
    }
    cross(e) {
        return this.crossVectors(this, e)
    }
    crossVectors(e, t) {
        const i = e.x
          , r = e.y
          , s = e.z
          , o = t.x
          , a = t.y
          , l = t.z;
        return this.x = r * l - s * a,
        this.y = s * o - i * l,
        this.z = i * a - r * o,
        this
    }
    projectOnVector(e) {
        const t = e.lengthSq();
        if (t === 0)
            return this.set(0, 0, 0);
        const i = e.dot(this) / t;
        return this.copy(e).multiplyScalar(i)
    }
    projectOnPlane(e) {
        return Nv.copy(this).projectOnVector(e),
        this.sub(Nv)
    }
    reflect(e) {
        return this.sub(Nv.copy(e).multiplyScalar(2 * this.dot(e)))
    }
    angleTo(e) {
        const t = Math.sqrt(this.lengthSq() * e.lengthSq());
        if (t === 0)
            return Math.PI / 2;
        const i = this.dot(e) / t;
        return Math.acos(_n(i, -1, 1))
    }
    distanceTo(e) {
        return Math.sqrt(this.distanceToSquared(e))
    }
    distanceToSquared(e) {
        const t = this.x - e.x
          , i = this.y - e.y
          , r = this.z - e.z;
        return t * t + i * i + r * r
    }
    manhattanDistanceTo(e) {
        return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z)
    }
    setFromSpherical(e) {
        return this.setFromSphericalCoords(e.radius, e.phi, e.theta)
    }
    setFromSphericalCoords(e, t, i) {
        const r = Math.sin(t) * e;
        return this.x = r * Math.sin(i),
        this.y = Math.cos(t) * e,
        this.z = r * Math.cos(i),
        this
    }
    setFromCylindrical(e) {
        return this.setFromCylindricalCoords(e.radius, e.theta, e.y)
    }
    setFromCylindricalCoords(e, t, i) {
        return this.x = e * Math.sin(t),
        this.y = i,
        this.z = e * Math.cos(t),
        this
    }
    setFromMatrixPosition(e) {
        const t = e.elements;
        return this.x = t[12],
        this.y = t[13],
        this.z = t[14],
        this
    }
    setFromMatrixScale(e) {
        const t = this.setFromMatrixColumn(e, 0).length()
          , i = this.setFromMatrixColumn(e, 1).length()
          , r = this.setFromMatrixColumn(e, 2).length();
        return this.x = t,
        this.y = i,
        this.z = r,
        this
    }
    setFromMatrixColumn(e, t) {
        return this.fromArray(e.elements, t * 4)
    }
    setFromMatrix3Column(e, t) {
        return this.fromArray(e.elements, t * 3)
    }
    setFromEuler(e) {
        return this.x = e._x,
        this.y = e._y,
        this.z = e._z,
        this
    }
    equals(e) {
        return e.x === this.x && e.y === this.y && e.z === this.z
    }
    fromArray(e, t=0) {
        return this.x = e[t],
        this.y = e[t + 1],
        this.z = e[t + 2],
        this
    }
    toArray(e=[], t=0) {
        return e[t] = this.x,
        e[t + 1] = this.y,
        e[t + 2] = this.z,
        e
    }
    fromBufferAttribute(e, t) {
        return this.x = e.getX(t),
        this.y = e.getY(t),
        this.z = e.getZ(t),
        this
    }
    random() {
        return this.x = Math.random(),
        this.y = Math.random(),
        this.z = Math.random(),
        this
    }
    randomDirection() {
        const e = (Math.random() - .5) * 2
          , t = Math.random() * Math.PI * 2
          , i = Math.sqrt(1 - e ** 2);
        return this.x = i * Math.cos(t),
        this.y = i * Math.sin(t),
        this.z = e,
        this
    }
    *[Symbol.iterator]() {
        yield this.x,
        yield this.y,
        yield this.z
    }
}
const Nv = new D
  , RC = new qn;
class ma {
    constructor(e=new D(1 / 0,1 / 0,1 / 0), t=new D(-1 / 0,-1 / 0,-1 / 0)) {
        this.isBox3 = !0,
        this.min = e,
        this.max = t
    }
    set(e, t) {
        return this.min.copy(e),
        this.max.copy(t),
        this
    }
    setFromArray(e) {
        let t = 1 / 0
          , i = 1 / 0
          , r = 1 / 0
          , s = -1 / 0
          , o = -1 / 0
          , a = -1 / 0;
        for (let l = 0, d = e.length; l < d; l += 3) {
            const f = e[l]
              , h = e[l + 1]
              , p = e[l + 2];
            f < t && (t = f),
            h < i && (i = h),
            p < r && (r = p),
            f > s && (s = f),
            h > o && (o = h),
            p > a && (a = p)
        }
        return this.min.set(t, i, r),
        this.max.set(s, o, a),
        this
    }
    setFromBufferAttribute(e) {
        let t = 1 / 0
          , i = 1 / 0
          , r = 1 / 0
          , s = -1 / 0
          , o = -1 / 0
          , a = -1 / 0;
        for (let l = 0, d = e.count; l < d; l++) {
            const f = e.getX(l)
              , h = e.getY(l)
              , p = e.getZ(l);
            f < t && (t = f),
            h < i && (i = h),
            p < r && (r = p),
            f > s && (s = f),
            h > o && (o = h),
            p > a && (a = p)
        }
        return this.min.set(t, i, r),
        this.max.set(s, o, a),
        this
    }
    setFromPoints(e) {
        this.makeEmpty();
        for (let t = 0, i = e.length; t < i; t++)
            this.expandByPoint(e[t]);
        return this
    }
    setFromCenterAndSize(e, t) {
        const i = Ba.copy(t).multiplyScalar(.5);
        return this.min.copy(e).sub(i),
        this.max.copy(e).add(i),
        this
    }
    setFromObject(e, t=!1) {
        return this.makeEmpty(),
        this.expandByObject(e, t)
    }
    clone() {
        return new this.constructor().copy(this)
    }
    copy(e) {
        return this.min.copy(e.min),
        this.max.copy(e.max),
        this
    }
    makeEmpty() {
        return this.min.x = this.min.y = this.min.z = 1 / 0,
        this.max.x = this.max.y = this.max.z = -1 / 0,
        this
    }
    isEmpty() {
        return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
    }
    getCenter(e) {
        return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(.5)
    }
    getSize(e) {
        return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min)
    }
    expandByPoint(e) {
        return this.min.min(e),
        this.max.max(e),
        this
    }
    expandByVector(e) {
        return this.min.sub(e),
        this.max.add(e),
        this
    }
    expandByScalar(e) {
        return this.min.addScalar(-e),
        this.max.addScalar(e),
        this
    }
    expandByObject(e, t=!1) {
        e.updateWorldMatrix(!1, !1);
        const i = e.geometry;
        if (i !== void 0)
            if (t && i.attributes != null && i.attributes.position !== void 0) {
                const s = i.attributes.position;
                for (let o = 0, a = s.count; o < a; o++)
                    Ba.fromBufferAttribute(s, o).applyMatrix4(e.matrixWorld),
                    this.expandByPoint(Ba)
            } else
                i.boundingBox === null && i.computeBoundingBox(),
                Ov.copy(i.boundingBox),
                Ov.applyMatrix4(e.matrixWorld),
                this.union(Ov);
        const r = e.children;
        for (let s = 0, o = r.length; s < o; s++)
            this.expandByObject(r[s], t);
        return this
    }
    containsPoint(e) {
        return !(e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y || e.z < this.min.z || e.z > this.max.z)
    }
    containsBox(e) {
        return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z
    }
    getParameter(e, t) {
        return t.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y), (e.z - this.min.z) / (this.max.z - this.min.z))
    }
    intersectsBox(e) {
        return !(e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y || e.max.z < this.min.z || e.min.z > this.max.z)
    }
    intersectsSphere(e) {
        return this.clampPoint(e.center, Ba),
        Ba.distanceToSquared(e.center) <= e.radius * e.radius
    }
    intersectsPlane(e) {
        let t, i;
        return e.normal.x > 0 ? (t = e.normal.x * this.min.x,
        i = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x,
        i = e.normal.x * this.min.x),
        e.normal.y > 0 ? (t += e.normal.y * this.min.y,
        i += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y,
        i += e.normal.y * this.min.y),
        e.normal.z > 0 ? (t += e.normal.z * this.min.z,
        i += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z,
        i += e.normal.z * this.min.z),
        t <= -e.constant && i >= -e.constant
    }
    intersectsTriangle(e) {
        if (this.isEmpty())
            return !1;
        this.getCenter(ld),
        Hp.subVectors(this.max, ld),
        ec.subVectors(e.a, ld),
        tc.subVectors(e.b, ld),
        nc.subVectors(e.c, ld),
        bo.subVectors(tc, ec),
        Co.subVectors(nc, tc),
        La.subVectors(ec, nc);
        let t = [0, -bo.z, bo.y, 0, -Co.z, Co.y, 0, -La.z, La.y, bo.z, 0, -bo.x, Co.z, 0, -Co.x, La.z, 0, -La.x, -bo.y, bo.x, 0, -Co.y, Co.x, 0, -La.y, La.x, 0];
        return !Uv(t, ec, tc, nc, Hp) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1],
        !Uv(t, ec, tc, nc, Hp)) ? !1 : (Vp.crossVectors(bo, Co),
        t = [Vp.x, Vp.y, Vp.z],
        Uv(t, ec, tc, nc, Hp))
    }
    clampPoint(e, t) {
        return t.copy(e).clamp(this.min, this.max)
    }
    distanceToPoint(e) {
        return Ba.copy(e).clamp(this.min, this.max).sub(e).length()
    }
    getBoundingSphere(e) {
        return this.getCenter(e.center),
        e.radius = this.getSize(Ba).length() * .5,
        e
    }
    intersect(e) {
        return this.min.max(e.min),
        this.max.min(e.max),
        this.isEmpty() && this.makeEmpty(),
        this
    }
    union(e) {
        return this.min.min(e.min),
        this.max.max(e.max),
        this
    }
    applyMatrix4(e) {
        return this.isEmpty() ? this : (Fs[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e),
        Fs[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e),
        Fs[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e),
        Fs[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e),
        Fs[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e),
        Fs[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e),
        Fs[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e),
        Fs[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e),
        this.setFromPoints(Fs),
        this)
    }
    translate(e) {
        return this.min.add(e),
        this.max.add(e),
        this
    }
    equals(e) {
        return e.min.equals(this.min) && e.max.equals(this.max)
    }
}
const Fs = [new D, new D, new D, new D, new D, new D, new D, new D]
  , Ba = new D
  , Ov = new ma
  , ec = new D
  , tc = new D
  , nc = new D
  , bo = new D
  , Co = new D
  , La = new D
  , ld = new D
  , Hp = new D
  , Vp = new D
  , Ra = new D;
function Uv(n, e, t, i, r) {
    for (let s = 0, o = n.length - 3; s <= o; s += 3) {
        Ra.fromArray(n, s);
        const a = r.x * Math.abs(Ra.x) + r.y * Math.abs(Ra.y) + r.z * Math.abs(Ra.z)
          , l = e.dot(Ra)
          , d = t.dot(Ra)
          , f = i.dot(Ra);
        if (Math.max(-Math.max(l, d, f), Math.min(l, d, f)) > a)
            return !1
    }
    return !0
}
const V4 = new ma
  , cd = new D
  , zv = new D;
class ga {
    constructor(e=new D, t=-1) {
        this.center = e,
        this.radius = t
    }
    set(e, t) {
        return this.center.copy(e),
        this.radius = t,
        this
    }
    setFromPoints(e, t) {
        const i = this.center;
        t !== void 0 ? i.copy(t) : V4.setFromPoints(e).getCenter(i);
        let r = 0;
        for (let s = 0, o = e.length; s < o; s++)
            r = Math.max(r, i.distanceToSquared(e[s]));
        return this.radius = Math.sqrt(r),
        this
    }
    copy(e) {
        return this.center.copy(e.center),
        this.radius = e.radius,
        this
    }
    isEmpty() {
        return this.radius < 0
    }
    makeEmpty() {
        return this.center.set(0, 0, 0),
        this.radius = -1,
        this
    }
    containsPoint(e) {
        return e.distanceToSquared(this.center) <= this.radius * this.radius
    }
    distanceToPoint(e) {
        return e.distanceTo(this.center) - this.radius
    }
    intersectsSphere(e) {
        const t = this.radius + e.radius;
        return e.center.distanceToSquared(this.center) <= t * t
    }
    intersectsBox(e) {
        return e.intersectsSphere(this)
    }
    intersectsPlane(e) {
        return Math.abs(e.distanceToPoint(this.center)) <= this.radius
    }
    clampPoint(e, t) {
        const i = this.center.distanceToSquared(e);
        return t.copy(e),
        i > this.radius * this.radius && (t.sub(this.center).normalize(),
        t.multiplyScalar(this.radius).add(this.center)),
        t
    }
    getBoundingBox(e) {
        return this.isEmpty() ? (e.makeEmpty(),
        e) : (e.set(this.center, this.center),
        e.expandByScalar(this.radius),
        e)
    }
    applyMatrix4(e) {
        return this.center.applyMatrix4(e),
        this.radius = this.radius * e.getMaxScaleOnAxis(),
        this
    }
    translate(e) {
        return this.center.add(e),
        this
    }
    expandByPoint(e) {
        if (this.isEmpty())
            return this.center.copy(e),
            this.radius = 0,
            this;
        cd.subVectors(e, this.center);
        const t = cd.lengthSq();
        if (t > this.radius * this.radius) {
            const i = Math.sqrt(t)
              , r = (i - this.radius) * .5;
            this.center.addScaledVector(cd, r / i),
            this.radius += r
        }
        return this
    }
    union(e) {
        return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e),
        this) : (this.center.equals(e.center) === !0 ? this.radius = Math.max(this.radius, e.radius) : (zv.subVectors(e.center, this.center).setLength(e.radius),
        this.expandByPoint(cd.copy(e.center).add(zv)),
        this.expandByPoint(cd.copy(e.center).sub(zv))),
        this)
    }
    equals(e) {
        return e.center.equals(this.center) && e.radius === this.radius
    }
    clone() {
        return new this.constructor().copy(this)
    }
}
const Ns = new D
  , Gv = new D
  , Wp = new D
  , Eo = new D
  , Hv = new D
  , jp = new D
  , Vv = new D;
class Yf {
    constructor(e=new D, t=new D(0,0,-1)) {
        this.origin = e,
        this.direction = t
    }
    set(e, t) {
        return this.origin.copy(e),
        this.direction.copy(t),
        this
    }
    copy(e) {
        return this.origin.copy(e.origin),
        this.direction.copy(e.direction),
        this
    }
    at(e, t) {
        return t.copy(this.direction).multiplyScalar(e).add(this.origin)
    }
    lookAt(e) {
        return this.direction.copy(e).sub(this.origin).normalize(),
        this
    }
    recast(e) {
        return this.origin.copy(this.at(e, Ns)),
        this
    }
    closestPointToPoint(e, t) {
        t.subVectors(e, this.origin);
        const i = t.dot(this.direction);
        return i < 0 ? t.copy(this.origin) : t.copy(this.direction).multiplyScalar(i).add(this.origin)
    }
    distanceToPoint(e) {
        return Math.sqrt(this.distanceSqToPoint(e))
    }
    distanceSqToPoint(e) {
        const t = Ns.subVectors(e, this.origin).dot(this.direction);
        return t < 0 ? this.origin.distanceToSquared(e) : (Ns.copy(this.direction).multiplyScalar(t).add(this.origin),
        Ns.distanceToSquared(e))
    }
    distanceSqToSegment(e, t, i, r) {
        Gv.copy(e).add(t).multiplyScalar(.5),
        Wp.copy(t).sub(e).normalize(),
        Eo.copy(this.origin).sub(Gv);
        const s = e.distanceTo(t) * .5
          , o = -this.direction.dot(Wp)
          , a = Eo.dot(this.direction)
          , l = -Eo.dot(Wp)
          , d = Eo.lengthSq()
          , f = Math.abs(1 - o * o);
        let h, p, m, y;
        if (f > 0)
            if (h = o * l - a,
            p = o * a - l,
            y = s * f,
            h >= 0)
                if (p >= -y)
                    if (p <= y) {
                        const v = 1 / f;
                        h *= v,
                        p *= v,
                        m = h * (h + o * p + 2 * a) + p * (o * h + p + 2 * l) + d
                    } else
                        p = s,
                        h = Math.max(0, -(o * p + a)),
                        m = -h * h + p * (p + 2 * l) + d;
                else
                    p = -s,
                    h = Math.max(0, -(o * p + a)),
                    m = -h * h + p * (p + 2 * l) + d;
            else
                p <= -y ? (h = Math.max(0, -(-o * s + a)),
                p = h > 0 ? -s : Math.min(Math.max(-s, -l), s),
                m = -h * h + p * (p + 2 * l) + d) : p <= y ? (h = 0,
                p = Math.min(Math.max(-s, -l), s),
                m = p * (p + 2 * l) + d) : (h = Math.max(0, -(o * s + a)),
                p = h > 0 ? s : Math.min(Math.max(-s, -l), s),
                m = -h * h + p * (p + 2 * l) + d);
        else
            p = o > 0 ? -s : s,
            h = Math.max(0, -(o * p + a)),
            m = -h * h + p * (p + 2 * l) + d;
        return i && i.copy(this.direction).multiplyScalar(h).add(this.origin),
        r && r.copy(Wp).multiplyScalar(p).add(Gv),
        m
    }
    intersectSphere(e, t) {
        Ns.subVectors(e.center, this.origin);
        const i = Ns.dot(this.direction)
          , r = Ns.dot(Ns) - i * i
          , s = e.radius * e.radius;
        if (r > s)
            return null;
        const o = Math.sqrt(s - r)
          , a = i - o
          , l = i + o;
        return a < 0 && l < 0 ? null : a < 0 ? this.at(l, t) : this.at(a, t)
    }
    intersectsSphere(e) {
        return this.distanceSqToPoint(e.center) <= e.radius * e.radius
    }
    distanceToPlane(e) {
        const t = e.normal.dot(this.direction);
        if (t === 0)
            return e.distanceToPoint(this.origin) === 0 ? 0 : null;
        const i = -(this.origin.dot(e.normal) + e.constant) / t;
        return i >= 0 ? i : null
    }
    intersectPlane(e, t) {
        const i = this.distanceToPlane(e);
        return i === null ? null : this.at(i, t)
    }
    intersectsPlane(e) {
        const t = e.distanceToPoint(this.origin);
        return t === 0 || e.normal.dot(this.direction) * t < 0
    }
    intersectBox(e, t) {
        let i, r, s, o, a, l;
        const d = 1 / this.direction.x
          , f = 1 / this.direction.y
          , h = 1 / this.direction.z
          , p = this.origin;
        return d >= 0 ? (i = (e.min.x - p.x) * d,
        r = (e.max.x - p.x) * d) : (i = (e.max.x - p.x) * d,
        r = (e.min.x - p.x) * d),
        f >= 0 ? (s = (e.min.y - p.y) * f,
        o = (e.max.y - p.y) * f) : (s = (e.max.y - p.y) * f,
        o = (e.min.y - p.y) * f),
        i > o || s > r || ((s > i || isNaN(i)) && (i = s),
        (o < r || isNaN(r)) && (r = o),
        h >= 0 ? (a = (e.min.z - p.z) * h,
        l = (e.max.z - p.z) * h) : (a = (e.max.z - p.z) * h,
        l = (e.min.z - p.z) * h),
        i > l || a > r) || ((a > i || i !== i) && (i = a),
        (l < r || r !== r) && (r = l),
        r < 0) ? null : this.at(i >= 0 ? i : r, t)
    }
    intersectsBox(e) {
        return this.intersectBox(e, Ns) !== null
    }
    intersectTriangle(e, t, i, r, s) {
        Hv.subVectors(t, e),
        jp.subVectors(i, e),
        Vv.crossVectors(Hv, jp);
        let o = this.direction.dot(Vv), a;
        if (o > 0) {
            if (r)
                return null;
            a = 1
        } else if (o < 0)
            a = -1,
            o = -o;
        else
            return null;
        Eo.subVectors(this.origin, e);
        const l = a * this.direction.dot(jp.crossVectors(Eo, jp));
        if (l < 0)
            return null;
        const d = a * this.direction.dot(Hv.cross(Eo));
        if (d < 0 || l + d > o)
            return null;
        const f = -a * Eo.dot(Vv);
        return f < 0 ? null : this.at(f / o, s)
    }
    applyMatrix4(e) {
        return this.origin.applyMatrix4(e),
        this.direction.transformDirection(e),
        this
    }
    equals(e) {
        return e.origin.equals(this.origin) && e.direction.equals(this.direction)
    }
    clone() {
        return new this.constructor().copy(this)
    }
}
class at {
    constructor() {
        at.prototype.isMatrix4 = !0,
        this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
    }
    set(e, t, i, r, s, o, a, l, d, f, h, p, m, y, v, x) {
        const w = this.elements;
        return w[0] = e,
        w[4] = t,
        w[8] = i,
        w[12] = r,
        w[1] = s,
        w[5] = o,
        w[9] = a,
        w[13] = l,
        w[2] = d,
        w[6] = f,
        w[10] = h,
        w[14] = p,
        w[3] = m,
        w[7] = y,
        w[11] = v,
        w[15] = x,
        this
    }
    identity() {
        return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1),
        this
    }
    clone() {
        return new at().fromArray(this.elements)
    }
    copy(e) {
        const t = this.elements
          , i = e.elements;
        return t[0] = i[0],
        t[1] = i[1],
        t[2] = i[2],
        t[3] = i[3],
        t[4] = i[4],
        t[5] = i[5],
        t[6] = i[6],
        t[7] = i[7],
        t[8] = i[8],
        t[9] = i[9],
        t[10] = i[10],
        t[11] = i[11],
        t[12] = i[12],
        t[13] = i[13],
        t[14] = i[14],
        t[15] = i[15],
        this
    }
    copyPosition(e) {
        const t = this.elements
          , i = e.elements;
        return t[12] = i[12],
        t[13] = i[13],
        t[14] = i[14],
        this
    }
    setFromMatrix3(e) {
        const t = e.elements;
        return this.set(t[0], t[3], t[6], 0, t[1], t[4], t[7], 0, t[2], t[5], t[8], 0, 0, 0, 0, 1),
        this
    }
    extractBasis(e, t, i) {
        return e.setFromMatrixColumn(this, 0),
        t.setFromMatrixColumn(this, 1),
        i.setFromMatrixColumn(this, 2),
        this
    }
    makeBasis(e, t, i) {
        return this.set(e.x, t.x, i.x, 0, e.y, t.y, i.y, 0, e.z, t.z, i.z, 0, 0, 0, 0, 1),
        this
    }
    extractRotation(e) {
        const t = this.elements
          , i = e.elements
          , r = 1 / ic.setFromMatrixColumn(e, 0).length()
          , s = 1 / ic.setFromMatrixColumn(e, 1).length()
          , o = 1 / ic.setFromMatrixColumn(e, 2).length();
        return t[0] = i[0] * r,
        t[1] = i[1] * r,
        t[2] = i[2] * r,
        t[3] = 0,
        t[4] = i[4] * s,
        t[5] = i[5] * s,
        t[6] = i[6] * s,
        t[7] = 0,
        t[8] = i[8] * o,
        t[9] = i[9] * o,
        t[10] = i[10] * o,
        t[11] = 0,
        t[12] = 0,
        t[13] = 0,
        t[14] = 0,
        t[15] = 1,
        this
    }
    makeRotationFromEuler(e) {
        const t = this.elements
          , i = e.x
          , r = e.y
          , s = e.z
          , o = Math.cos(i)
          , a = Math.sin(i)
          , l = Math.cos(r)
          , d = Math.sin(r)
          , f = Math.cos(s)
          , h = Math.sin(s);
        if (e.order === "XYZ") {
            const p = o * f
              , m = o * h
              , y = a * f
              , v = a * h;
            t[0] = l * f,
            t[4] = -l * h,
            t[8] = d,
            t[1] = m + y * d,
            t[5] = p - v * d,
            t[9] = -a * l,
            t[2] = v - p * d,
            t[6] = y + m * d,
            t[10] = o * l
        } else if (e.order === "YXZ") {
            const p = l * f
              , m = l * h
              , y = d * f
              , v = d * h;
            t[0] = p + v * a,
            t[4] = y * a - m,
            t[8] = o * d,
            t[1] = o * h,
            t[5] = o * f,
            t[9] = -a,
            t[2] = m * a - y,
            t[6] = v + p * a,
            t[10] = o * l
        } else if (e.order === "ZXY") {
            const p = l * f
              , m = l * h
              , y = d * f
              , v = d * h;
            t[0] = p - v * a,
            t[4] = -o * h,
            t[8] = y + m * a,
            t[1] = m + y * a,
            t[5] = o * f,
            t[9] = v - p * a,
            t[2] = -o * d,
            t[6] = a,
            t[10] = o * l
        } else if (e.order === "ZYX") {
            const p = o * f
              , m = o * h
              , y = a * f
              , v = a * h;
            t[0] = l * f,
            t[4] = y * d - m,
            t[8] = p * d + v,
            t[1] = l * h,
            t[5] = v * d + p,
            t[9] = m * d - y,
            t[2] = -d,
            t[6] = a * l,
            t[10] = o * l
        } else if (e.order === "YZX") {
            const p = o * l
              , m = o * d
              , y = a * l
              , v = a * d;
            t[0] = l * f,
            t[4] = v - p * h,
            t[8] = y * h + m,
            t[1] = h,
            t[5] = o * f,
            t[9] = -a * f,
            t[2] = -d * f,
            t[6] = m * h + y,
            t[10] = p - v * h
        } else if (e.order === "XZY") {
            const p = o * l
              , m = o * d
              , y = a * l
              , v = a * d;
            t[0] = l * f,
            t[4] = -h,
            t[8] = d * f,
            t[1] = p * h + v,
            t[5] = o * f,
            t[9] = m * h - y,
            t[2] = y * h - m,
            t[6] = a * f,
            t[10] = v * h + p
        }
        return t[3] = 0,
        t[7] = 0,
        t[11] = 0,
        t[12] = 0,
        t[13] = 0,
        t[14] = 0,
        t[15] = 1,
        this
    }
    makeRotationFromQuaternion(e) {
        return this.compose(W4, e, j4)
    }
    lookAt(e, t, i) {
        const r = this.elements;
        return ji.subVectors(e, t),
        ji.lengthSq() === 0 && (ji.z = 1),
        ji.normalize(),
        To.crossVectors(i, ji),
        To.lengthSq() === 0 && (Math.abs(i.z) === 1 ? ji.x += 1e-4 : ji.z += 1e-4,
        ji.normalize(),
        To.crossVectors(i, ji)),
        To.normalize(),
        Jp.crossVectors(ji, To),
        r[0] = To.x,
        r[4] = Jp.x,
        r[8] = ji.x,
        r[1] = To.y,
        r[5] = Jp.y,
        r[9] = ji.y,
        r[2] = To.z,
        r[6] = Jp.z,
        r[10] = ji.z,
        this
    }
    multiply(e) {
        return this.multiplyMatrices(this, e)
    }
    premultiply(e) {
        return this.multiplyMatrices(e, this)
    }
    multiplyMatrices(e, t) {
        const i = e.elements
          , r = t.elements
          , s = this.elements
          , o = i[0]
          , a = i[4]
          , l = i[8]
          , d = i[12]
          , f = i[1]
          , h = i[5]
          , p = i[9]
          , m = i[13]
          , y = i[2]
          , v = i[6]
          , x = i[10]
          , w = i[14]
          , A = i[3]
          , M = i[7]
          , S = i[11]
          , E = i[15]
          , P = r[0]
          , L = r[4]
          , C = r[8]
          , B = r[12]
          , I = r[1]
          , U = r[5]
          , $ = r[9]
          , W = r[13]
          , H = r[2]
          , Y = r[6]
          , ie = r[10]
          , ae = r[14]
          , F = r[3]
          , V = r[7]
          , K = r[11]
          , se = r[15];
        return s[0] = o * P + a * I + l * H + d * F,
        s[4] = o * L + a * U + l * Y + d * V,
        s[8] = o * C + a * $ + l * ie + d * K,
        s[12] = o * B + a * W + l * ae + d * se,
        s[1] = f * P + h * I + p * H + m * F,
        s[5] = f * L + h * U + p * Y + m * V,
        s[9] = f * C + h * $ + p * ie + m * K,
        s[13] = f * B + h * W + p * ae + m * se,
        s[2] = y * P + v * I + x * H + w * F,
        s[6] = y * L + v * U + x * Y + w * V,
        s[10] = y * C + v * $ + x * ie + w * K,
        s[14] = y * B + v * W + x * ae + w * se,
        s[3] = A * P + M * I + S * H + E * F,
        s[7] = A * L + M * U + S * Y + E * V,
        s[11] = A * C + M * $ + S * ie + E * K,
        s[15] = A * B + M * W + S * ae + E * se,
        this
    }
    multiplyScalar(e) {
        const t = this.elements;
        return t[0] *= e,
        t[4] *= e,
        t[8] *= e,
        t[12] *= e,
        t[1] *= e,
        t[5] *= e,
        t[9] *= e,
        t[13] *= e,
        t[2] *= e,
        t[6] *= e,
        t[10] *= e,
        t[14] *= e,
        t[3] *= e,
        t[7] *= e,
        t[11] *= e,
        t[15] *= e,
        this
    }
    determinant() {
        const e = this.elements
          , t = e[0]
          , i = e[4]
          , r = e[8]
          , s = e[12]
          , o = e[1]
          , a = e[5]
          , l = e[9]
          , d = e[13]
          , f = e[2]
          , h = e[6]
          , p = e[10]
          , m = e[14]
          , y = e[3]
          , v = e[7]
          , x = e[11]
          , w = e[15];
        return y * (+s * l * h - r * d * h - s * a * p + i * d * p + r * a * m - i * l * m) + v * (+t * l * m - t * d * p + s * o * p - r * o * m + r * d * f - s * l * f) + x * (+t * d * h - t * a * m - s * o * h + i * o * m + s * a * f - i * d * f) + w * (-r * a * f - t * l * h + t * a * p + r * o * h - i * o * p + i * l * f)
    }
    transpose() {
        const e = this.elements;
        let t;
        return t = e[1],
        e[1] = e[4],
        e[4] = t,
        t = e[2],
        e[2] = e[8],
        e[8] = t,
        t = e[6],
        e[6] = e[9],
        e[9] = t,
        t = e[3],
        e[3] = e[12],
        e[12] = t,
        t = e[7],
        e[7] = e[13],
        e[13] = t,
        t = e[11],
        e[11] = e[14],
        e[14] = t,
        this
    }
    setPosition(e, t, i) {
        const r = this.elements;
        return e.isVector3 ? (r[12] = e.x,
        r[13] = e.y,
        r[14] = e.z) : (r[12] = e,
        r[13] = t,
        r[14] = i),
        this
    }
    invert() {
        const e = this.elements
          , t = e[0]
          , i = e[1]
          , r = e[2]
          , s = e[3]
          , o = e[4]
          , a = e[5]
          , l = e[6]
          , d = e[7]
          , f = e[8]
          , h = e[9]
          , p = e[10]
          , m = e[11]
          , y = e[12]
          , v = e[13]
          , x = e[14]
          , w = e[15]
          , A = h * x * d - v * p * d + v * l * m - a * x * m - h * l * w + a * p * w
          , M = y * p * d - f * x * d - y * l * m + o * x * m + f * l * w - o * p * w
          , S = f * v * d - y * h * d + y * a * m - o * v * m - f * a * w + o * h * w
          , E = y * h * l - f * v * l - y * a * p + o * v * p + f * a * x - o * h * x
          , P = t * A + i * M + r * S + s * E;
        if (P === 0)
            return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        const L = 1 / P;
        return e[0] = A * L,
        e[1] = (v * p * s - h * x * s - v * r * m + i * x * m + h * r * w - i * p * w) * L,
        e[2] = (a * x * s - v * l * s + v * r * d - i * x * d - a * r * w + i * l * w) * L,
        e[3] = (h * l * s - a * p * s - h * r * d + i * p * d + a * r * m - i * l * m) * L,
        e[4] = M * L,
        e[5] = (f * x * s - y * p * s + y * r * m - t * x * m - f * r * w + t * p * w) * L,
        e[6] = (y * l * s - o * x * s - y * r * d + t * x * d + o * r * w - t * l * w) * L,
        e[7] = (o * p * s - f * l * s + f * r * d - t * p * d - o * r * m + t * l * m) * L,
        e[8] = S * L,
        e[9] = (y * h * s - f * v * s - y * i * m + t * v * m + f * i * w - t * h * w) * L,
        e[10] = (o * v * s - y * a * s + y * i * d - t * v * d - o * i * w + t * a * w) * L,
        e[11] = (f * a * s - o * h * s - f * i * d + t * h * d + o * i * m - t * a * m) * L,
        e[12] = E * L,
        e[13] = (f * v * r - y * h * r + y * i * p - t * v * p - f * i * x + t * h * x) * L,
        e[14] = (y * a * r - o * v * r - y * i * l + t * v * l + o * i * x - t * a * x) * L,
        e[15] = (o * h * r - f * a * r + f * i * l - t * h * l - o * i * p + t * a * p) * L,
        this
    }
    scale(e) {
        const t = this.elements
          , i = e.x
          , r = e.y
          , s = e.z;
        return t[0] *= i,
        t[4] *= r,
        t[8] *= s,
        t[1] *= i,
        t[5] *= r,
        t[9] *= s,
        t[2] *= i,
        t[6] *= r,
        t[10] *= s,
        t[3] *= i,
        t[7] *= r,
        t[11] *= s,
        this
    }
    getMaxScaleOnAxis() {
        const e = this.elements
          , t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2]
          , i = e[4] * e[4] + e[5] * e[5] + e[6] * e[6]
          , r = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
        return Math.sqrt(Math.max(t, i, r))
    }
    makeTranslation(e, t, i) {
        return this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, i, 0, 0, 0, 1),
        this
    }
    makeRotationX(e) {
        const t = Math.cos(e)
          , i = Math.sin(e);
        return this.set(1, 0, 0, 0, 0, t, -i, 0, 0, i, t, 0, 0, 0, 0, 1),
        this
    }
    makeRotationY(e) {
        const t = Math.cos(e)
          , i = Math.sin(e);
        return this.set(t, 0, i, 0, 0, 1, 0, 0, -i, 0, t, 0, 0, 0, 0, 1),
        this
    }
    makeRotationZ(e) {
        const t = Math.cos(e)
          , i = Math.sin(e);
        return this.set(t, -i, 0, 0, i, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1),
        this
    }
    makeRotationAxis(e, t) {
        const i = Math.cos(t)
          , r = Math.sin(t)
          , s = 1 - i
          , o = e.x
          , a = e.y
          , l = e.z
          , d = s * o
          , f = s * a;
        return this.set(d * o + i, d * a - r * l, d * l + r * a, 0, d * a + r * l, f * a + i, f * l - r * o, 0, d * l - r * a, f * l + r * o, s * l * l + i, 0, 0, 0, 0, 1),
        this
    }
    makeScale(e, t, i) {
        return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, i, 0, 0, 0, 0, 1),
        this
    }
    makeShear(e, t, i, r, s, o) {
        return this.set(1, i, s, 0, e, 1, o, 0, t, r, 1, 0, 0, 0, 0, 1),
        this
    }
    compose(e, t, i) {
        const r = this.elements
          , s = t._x
          , o = t._y
          , a = t._z
          , l = t._w
          , d = s + s
          , f = o + o
          , h = a + a
          , p = s * d
          , m = s * f
          , y = s * h
          , v = o * f
          , x = o * h
          , w = a * h
          , A = l * d
          , M = l * f
          , S = l * h
          , E = i.x
          , P = i.y
          , L = i.z;
        return r[0] = (1 - (v + w)) * E,
        r[1] = (m + S) * E,
        r[2] = (y - M) * E,
        r[3] = 0,
        r[4] = (m - S) * P,
        r[5] = (1 - (p + w)) * P,
        r[6] = (x + A) * P,
        r[7] = 0,
        r[8] = (y + M) * L,
        r[9] = (x - A) * L,
        r[10] = (1 - (p + v)) * L,
        r[11] = 0,
        r[12] = e.x,
        r[13] = e.y,
        r[14] = e.z,
        r[15] = 1,
        this
    }
    decompose(e, t, i) {
        const r = this.elements;
        let s = ic.set(r[0], r[1], r[2]).length();
        const o = ic.set(r[4], r[5], r[6]).length()
          , a = ic.set(r[8], r[9], r[10]).length();
        this.determinant() < 0 && (s = -s),
        e.x = r[12],
        e.y = r[13],
        e.z = r[14],
        Or.copy(this);
        const d = 1 / s
          , f = 1 / o
          , h = 1 / a;
        return Or.elements[0] *= d,
        Or.elements[1] *= d,
        Or.elements[2] *= d,
        Or.elements[4] *= f,
        Or.elements[5] *= f,
        Or.elements[6] *= f,
        Or.elements[8] *= h,
        Or.elements[9] *= h,
        Or.elements[10] *= h,
        t.setFromRotationMatrix(Or),
        i.x = s,
        i.y = o,
        i.z = a,
        this
    }
    makePerspective(e, t, i, r, s, o) {
        const a = this.elements
          , l = 2 * s / (t - e)
          , d = 2 * s / (i - r)
          , f = (t + e) / (t - e)
          , h = (i + r) / (i - r)
          , p = -(o + s) / (o - s)
          , m = -2 * o * s / (o - s);
        return a[0] = l,
        a[4] = 0,
        a[8] = f,
        a[12] = 0,
        a[1] = 0,
        a[5] = d,
        a[9] = h,
        a[13] = 0,
        a[2] = 0,
        a[6] = 0,
        a[10] = p,
        a[14] = m,
        a[3] = 0,
        a[7] = 0,
        a[11] = -1,
        a[15] = 0,
        this
    }
    makeOrthographic(e, t, i, r, s, o) {
        const a = this.elements
          , l = 1 / (t - e)
          , d = 1 / (i - r)
          , f = 1 / (o - s)
          , h = (t + e) * l
          , p = (i + r) * d
          , m = (o + s) * f;
        return a[0] = 2 * l,
        a[4] = 0,
        a[8] = 0,
        a[12] = -h,
        a[1] = 0,
        a[5] = 2 * d,
        a[9] = 0,
        a[13] = -p,
        a[2] = 0,
        a[6] = 0,
        a[10] = -2 * f,
        a[14] = -m,
        a[3] = 0,
        a[7] = 0,
        a[11] = 0,
        a[15] = 1,
        this
    }
    equals(e) {
        const t = this.elements
          , i = e.elements;
        for (let r = 0; r < 16; r++)
            if (t[r] !== i[r])
                return !1;
        return !0
    }
    fromArray(e, t=0) {
        for (let i = 0; i < 16; i++)
            this.elements[i] = e[i + t];
        return this
    }
    toArray(e=[], t=0) {
        const i = this.elements;
        return e[t] = i[0],
        e[t + 1] = i[1],
        e[t + 2] = i[2],
        e[t + 3] = i[3],
        e[t + 4] = i[4],
        e[t + 5] = i[5],
        e[t + 6] = i[6],
        e[t + 7] = i[7],
        e[t + 8] = i[8],
        e[t + 9] = i[9],
        e[t + 10] = i[10],
        e[t + 11] = i[11],
        e[t + 12] = i[12],
        e[t + 13] = i[13],
        e[t + 14] = i[14],
        e[t + 15] = i[15],
        e
    }
}
const ic = new D
  , Or = new at
  , W4 = new D(0,0,0)
  , j4 = new D(1,1,1)
  , To = new D
  , Jp = new D
  , ji = new D
  , IC = new at
  , DC = new qn;
class Qf {
    constructor(e=0, t=0, i=0, r=Qf.DEFAULT_ORDER) {
        this.isEuler = !0,
        this._x = e,
        this._y = t,
        this._z = i,
        this._order = r
    }
    get x() {
        return this._x
    }
    set x(e) {
        this._x = e,
        this._onChangeCallback()
    }
    get y() {
        return this._y
    }
    set y(e) {
        this._y = e,
        this._onChangeCallback()
    }
    get z() {
        return this._z
    }
    set z(e) {
        this._z = e,
        this._onChangeCallback()
    }
    get order() {
        return this._order
    }
    set order(e) {
        this._order = e,
        this._onChangeCallback()
    }
    set(e, t, i, r=this._order) {
        return this._x = e,
        this._y = t,
        this._z = i,
        this._order = r,
        this._onChangeCallback(),
        this
    }
    clone() {
        return new this.constructor(this._x,this._y,this._z,this._order)
    }
    copy(e) {
        return this._x = e._x,
        this._y = e._y,
        this._z = e._z,
        this._order = e._order,
        this._onChangeCallback(),
        this
    }
    setFromRotationMatrix(e, t=this._order, i=!0) {
        const r = e.elements
          , s = r[0]
          , o = r[4]
          , a = r[8]
          , l = r[1]
          , d = r[5]
          , f = r[9]
          , h = r[2]
          , p = r[6]
          , m = r[10];
        switch (t) {
        case "XYZ":
            this._y = Math.asin(_n(a, -1, 1)),
            Math.abs(a) < .9999999 ? (this._x = Math.atan2(-f, m),
            this._z = Math.atan2(-o, s)) : (this._x = Math.atan2(p, d),
            this._z = 0);
            break;
        case "YXZ":
            this._x = Math.asin(-_n(f, -1, 1)),
            Math.abs(f) < .9999999 ? (this._y = Math.atan2(a, m),
            this._z = Math.atan2(l, d)) : (this._y = Math.atan2(-h, s),
            this._z = 0);
            break;
        case "ZXY":
            this._x = Math.asin(_n(p, -1, 1)),
            Math.abs(p) < .9999999 ? (this._y = Math.atan2(-h, m),
            this._z = Math.atan2(-o, d)) : (this._y = 0,
            this._z = Math.atan2(l, s));
            break;
        case "ZYX":
            this._y = Math.asin(-_n(h, -1, 1)),
            Math.abs(h) < .9999999 ? (this._x = Math.atan2(p, m),
            this._z = Math.atan2(l, s)) : (this._x = 0,
            this._z = Math.atan2(-o, d));
            break;
        case "YZX":
            this._z = Math.asin(_n(l, -1, 1)),
            Math.abs(l) < .9999999 ? (this._x = Math.atan2(-f, d),
            this._y = Math.atan2(-h, s)) : (this._x = 0,
            this._y = Math.atan2(a, m));
            break;
        case "XZY":
            this._z = Math.asin(-_n(o, -1, 1)),
            Math.abs(o) < .9999999 ? (this._x = Math.atan2(p, d),
            this._y = Math.atan2(a, s)) : (this._x = Math.atan2(-f, m),
            this._y = 0);
            break;
        default:
            console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t)
        }
        return this._order = t,
        i === !0 && this._onChangeCallback(),
        this
    }
    setFromQuaternion(e, t, i) {
        return IC.makeRotationFromQuaternion(e),
        this.setFromRotationMatrix(IC, t, i)
    }
    setFromVector3(e, t=this._order) {
        return this.set(e.x, e.y, e.z, t)
    }
    reorder(e) {
        return DC.setFromEuler(this),
        this.setFromQuaternion(DC, e)
    }
    equals(e) {
        return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order
    }
    fromArray(e) {
        return this._x = e[0],
        this._y = e[1],
        this._z = e[2],
        e[3] !== void 0 && (this._order = e[3]),
        this._onChangeCallback(),
        this
    }
    toArray(e=[], t=0) {
        return e[t] = this._x,
        e[t + 1] = this._y,
        e[t + 2] = this._z,
        e[t + 3] = this._order,
        e
    }
    _onChange(e) {
        return this._onChangeCallback = e,
        this
    }
    _onChangeCallback() {}
    *[Symbol.iterator]() {
        yield this._x,
        yield this._y,
        yield this._z,
        yield this._order
    }
}
Qf.DEFAULT_ORDER = "XYZ";
class pl {
    constructor() {
        this.mask = 1
    }
    set(e) {
        this.mask = (1 << e | 0) >>> 0
    }
    enable(e) {
        this.mask |= 1 << e | 0
    }
    enableAll() {
        this.mask = -1
    }
    toggle(e) {
        this.mask ^= 1 << e | 0
    }
    disable(e) {
        this.mask &= ~(1 << e | 0)
    }
    disableAll() {
        this.mask = 0
    }
    test(e) {
        return (this.mask & e.mask) !== 0
    }
    isEnabled(e) {
        return (this.mask & (1 << e | 0)) !== 0
    }
}
let J4 = 0;
const kC = new D
  , rc = new qn
  , Os = new at
  , Xp = new D
  , ud = new D
  , X4 = new D
  , K4 = new qn
  , FC = new D(1,0,0)
  , NC = new D(0,1,0)
  , OC = new D(0,0,1)
  , Y4 = {
    type: "added"
}
  , UC = {
    type: "removed"
};
class Rt extends bs {
    constructor() {
        super(),
        this.isObject3D = !0,
        Object.defineProperty(this, "id", {
            value: J4++
        }),
        this.uuid = qi(),
        this.name = "",
        this.type = "Object3D",
        this.parent = null,
        this.children = [],
        this.up = Rt.DEFAULT_UP.clone();
        const e = new D
          , t = new Qf
          , i = new qn
          , r = new D(1,1,1);
        function s() {
            i.setFromEuler(t, !1)
        }
        function o() {
            t.setFromQuaternion(i, void 0, !1)
        }
        t._onChange(s),
        i._onChange(o),
        Object.defineProperties(this, {
            position: {
                configurable: !0,
                enumerable: !0,
                value: e
            },
            rotation: {
                configurable: !0,
                enumerable: !0,
                value: t
            },
            quaternion: {
                configurable: !0,
                enumerable: !0,
                value: i
            },
            scale: {
                configurable: !0,
                enumerable: !0,
                value: r
            },
            modelViewMatrix: {
                value: new at
            },
            normalMatrix: {
                value: new xi
            }
        }),
        this.matrix = new at,
        this.matrixWorld = new at,
        this.matrixAutoUpdate = Rt.DEFAULT_MATRIX_AUTO_UPDATE,
        this.matrixWorldNeedsUpdate = !1,
        this.matrixWorldAutoUpdate = Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,
        this.layers = new pl,
        this.visible = !0,
        this.castShadow = !1,
        this.receiveShadow = !1,
        this.frustumCulled = !0,
        this.renderOrder = 0,
        this.animations = [],
        this.userData = {}
    }
    onBeforeRender() {}
    onAfterRender() {}
    applyMatrix4(e) {
        this.matrixAutoUpdate && this.updateMatrix(),
        this.matrix.premultiply(e),
        this.matrix.decompose(this.position, this.quaternion, this.scale)
    }
    applyQuaternion(e) {
        return this.quaternion.premultiply(e),
        this
    }
    setRotationFromAxisAngle(e, t) {
        this.quaternion.setFromAxisAngle(e, t)
    }
    setRotationFromEuler(e) {
        this.quaternion.setFromEuler(e, !0)
    }
    setRotationFromMatrix(e) {
        this.quaternion.setFromRotationMatrix(e)
    }
    setRotationFromQuaternion(e) {
        this.quaternion.copy(e)
    }
    rotateOnAxis(e, t) {
        return rc.setFromAxisAngle(e, t),
        this.quaternion.multiply(rc),
        this
    }
    rotateOnWorldAxis(e, t) {
        return rc.setFromAxisAngle(e, t),
        this.quaternion.premultiply(rc),
        this
    }
    rotateX(e) {
        return this.rotateOnAxis(FC, e)
    }
    rotateY(e) {
        return this.rotateOnAxis(NC, e)
    }
    rotateZ(e) {
        return this.rotateOnAxis(OC, e)
    }
    translateOnAxis(e, t) {
        return kC.copy(e).applyQuaternion(this.quaternion),
        this.position.add(kC.multiplyScalar(t)),
        this
    }
    translateX(e) {
        return this.translateOnAxis(FC, e)
    }
    translateY(e) {
        return this.translateOnAxis(NC, e)
    }
    translateZ(e) {
        return this.translateOnAxis(OC, e)
    }
    localToWorld(e) {
        return this.updateWorldMatrix(!0, !1),
        e.applyMatrix4(this.matrixWorld)
    }
    worldToLocal(e) {
        return this.updateWorldMatrix(!0, !1),
        e.applyMatrix4(Os.copy(this.matrixWorld).invert())
    }
    lookAt(e, t, i) {
        e.isVector3 ? Xp.copy(e) : Xp.set(e, t, i);
        const r = this.parent;
        this.updateWorldMatrix(!0, !1),
        ud.setFromMatrixPosition(this.matrixWorld),
        this.isCamera || this.isLight ? Os.lookAt(ud, Xp, this.up) : Os.lookAt(Xp, ud, this.up),
        this.quaternion.setFromRotationMatrix(Os),
        r && (Os.extractRotation(r.matrixWorld),
        rc.setFromRotationMatrix(Os),
        this.quaternion.premultiply(rc.invert()))
    }
    add(e) {
        if (arguments.length > 1) {
            for (let t = 0; t < arguments.length; t++)
                this.add(arguments[t]);
            return this
        }
        return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e),
        this) : (e && e.isObject3D ? (e.parent !== null && e.parent.remove(e),
        e.parent = this,
        this.children.push(e),
        e.dispatchEvent(Y4)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e),
        this)
    }
    remove(e) {
        if (arguments.length > 1) {
            for (let i = 0; i < arguments.length; i++)
                this.remove(arguments[i]);
            return this
        }
        const t = this.children.indexOf(e);
        return t !== -1 && (e.parent = null,
        this.children.splice(t, 1),
        e.dispatchEvent(UC)),
        this
    }
    removeFromParent() {
        const e = this.parent;
        return e !== null && e.remove(this),
        this
    }
    clear() {
        for (let e = 0; e < this.children.length; e++) {
            const t = this.children[e];
            t.parent = null,
            t.dispatchEvent(UC)
        }
        return this.children.length = 0,
        this
    }
    attach(e) {
        return this.updateWorldMatrix(!0, !1),
        Os.copy(this.matrixWorld).invert(),
        e.parent !== null && (e.parent.updateWorldMatrix(!0, !1),
        Os.multiply(e.parent.matrixWorld)),
        e.applyMatrix4(Os),
        this.add(e),
        e.updateWorldMatrix(!1, !0),
        this
    }
    getObjectById(e) {
        return this.getObjectByProperty("id", e)
    }
    getObjectByName(e) {
        return this.getObjectByProperty("name", e)
    }
    getObjectByProperty(e, t) {
        if (this[e] === t)
            return this;
        for (let i = 0, r = this.children.length; i < r; i++) {
            const o = this.children[i].getObjectByProperty(e, t);
            if (o !== void 0)
                return o
        }
    }
    getObjectsByProperty(e, t) {
        let i = [];
        this[e] === t && i.push(this);
        for (let r = 0, s = this.children.length; r < s; r++) {
            const o = this.children[r].getObjectsByProperty(e, t);
            o.length > 0 && (i = i.concat(o))
        }
        return i
    }
    getWorldPosition(e) {
        return this.updateWorldMatrix(!0, !1),
        e.setFromMatrixPosition(this.matrixWorld)
    }
    getWorldQuaternion(e) {
        return this.updateWorldMatrix(!0, !1),
        this.matrixWorld.decompose(ud, e, X4),
        e
    }
    getWorldScale(e) {
        return this.updateWorldMatrix(!0, !1),
        this.matrixWorld.decompose(ud, K4, e),
        e
    }
    getWorldDirection(e) {
        this.updateWorldMatrix(!0, !1);
        const t = this.matrixWorld.elements;
        return e.set(t[8], t[9], t[10]).normalize()
    }
    raycast() {}
    traverse(e) {
        e(this);
        const t = this.children;
        for (let i = 0, r = t.length; i < r; i++)
            t[i].traverse(e)
    }
    traverseVisible(e) {
        if (this.visible === !1)
            return;
        e(this);
        const t = this.children;
        for (let i = 0, r = t.length; i < r; i++)
            t[i].traverseVisible(e)
    }
    traverseAncestors(e) {
        const t = this.parent;
        t !== null && (e(t),
        t.traverseAncestors(e))
    }
    updateMatrix() {
        this.matrix.compose(this.position, this.quaternion, this.scale),
        this.matrixWorldNeedsUpdate = !0
    }
    updateMatrixWorld(e) {
        this.matrixAutoUpdate && this.updateMatrix(),
        (this.matrixWorldNeedsUpdate || e) && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix),
        this.matrixWorldNeedsUpdate = !1,
        e = !0);
        const t = this.children;
        for (let i = 0, r = t.length; i < r; i++) {
            const s = t[i];
            (s.matrixWorldAutoUpdate === !0 || e === !0) && s.updateMatrixWorld(e)
        }
    }
    updateWorldMatrix(e, t) {
        const i = this.parent;
        if (e === !0 && i !== null && i.matrixWorldAutoUpdate === !0 && i.updateWorldMatrix(!0, !1),
        this.matrixAutoUpdate && this.updateMatrix(),
        this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix),
        t === !0) {
            const r = this.children;
            for (let s = 0, o = r.length; s < o; s++) {
                const a = r[s];
                a.matrixWorldAutoUpdate === !0 && a.updateWorldMatrix(!1, !0)
            }
        }
    }
    toJSON(e) {
        const t = e === void 0 || typeof e == "string"
          , i = {};
        t && (e = {
            geometries: {},
            materials: {},
            textures: {},
            images: {},
            shapes: {},
            skeletons: {},
            animations: {},
            nodes: {}
        },
        i.metadata = {
            version: 4.5,
            type: "Object",
            generator: "Object3D.toJSON"
        });
        const r = {};
        r.uuid = this.uuid,
        r.type = this.type,
        this.name !== "" && (r.name = this.name),
        this.castShadow === !0 && (r.castShadow = !0),
        this.receiveShadow === !0 && (r.receiveShadow = !0),
        this.visible === !1 && (r.visible = !1),
        this.frustumCulled === !1 && (r.frustumCulled = !1),
        this.renderOrder !== 0 && (r.renderOrder = this.renderOrder),
        Object.keys(this.userData).length > 0 && (r.userData = this.userData),
        r.layers = this.layers.mask,
        r.matrix = this.matrix.toArray(),
        this.matrixAutoUpdate === !1 && (r.matrixAutoUpdate = !1),
        this.isInstancedMesh && (r.type = "InstancedMesh",
        r.count = this.count,
        r.instanceMatrix = this.instanceMatrix.toJSON(),
        this.instanceColor !== null && (r.instanceColor = this.instanceColor.toJSON()));
        function s(a, l) {
            return a[l.uuid] === void 0 && (a[l.uuid] = l.toJSON(e)),
            l.uuid
        }
        if (this.isScene)
            this.background && (this.background.isColor ? r.background = this.background.toJSON() : this.background.isTexture && (r.background = this.background.toJSON(e).uuid)),
            this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (r.environment = this.environment.toJSON(e).uuid);
        else if (this.isMesh || this.isLine || this.isPoints) {
            r.geometry = s(e.geometries, this.geometry);
            const a = this.geometry.parameters;
            if (a !== void 0 && a.shapes !== void 0) {
                const l = a.shapes;
                if (Array.isArray(l))
                    for (let d = 0, f = l.length; d < f; d++) {
                        const h = l[d];
                        s(e.shapes, h)
                    }
                else
                    s(e.shapes, l)
            }
        }
        if (this.isSkinnedMesh && (r.bindMode = this.bindMode,
        r.bindMatrix = this.bindMatrix.toArray(),
        this.skeleton !== void 0 && (s(e.skeletons, this.skeleton),
        r.skeleton = this.skeleton.uuid)),
        this.material !== void 0)
            if (Array.isArray(this.material)) {
                const a = [];
                for (let l = 0, d = this.material.length; l < d; l++)
                    a.push(s(e.materials, this.material[l]));
                r.material = a
            } else
                r.material = s(e.materials, this.material);
        if (this.children.length > 0) {
            r.children = [];
            for (let a = 0; a < this.children.length; a++)
                r.children.push(this.children[a].toJSON(e).object)
        }
        if (this.animations.length > 0) {
            r.animations = [];
            for (let a = 0; a < this.animations.length; a++) {
                const l = this.animations[a];
                r.animations.push(s(e.animations, l))
            }
        }
        if (t) {
            const a = o(e.geometries)
              , l = o(e.materials)
              , d = o(e.textures)
              , f = o(e.images)
              , h = o(e.shapes)
              , p = o(e.skeletons)
              , m = o(e.animations)
              , y = o(e.nodes);
            a.length > 0 && (i.geometries = a),
            l.length > 0 && (i.materials = l),
            d.length > 0 && (i.textures = d),
            f.length > 0 && (i.images = f),
            h.length > 0 && (i.shapes = h),
            p.length > 0 && (i.skeletons = p),
            m.length > 0 && (i.animations = m),
            y.length > 0 && (i.nodes = y)
        }
        return i.object = r,
        i;
        function o(a) {
            const l = [];
            for (const d in a) {
                const f = a[d];
                delete f.metadata,
                l.push(f)
            }
            return l
        }
    }
    clone(e) {
        return new this.constructor().copy(this, e)
    }
    copy(e, t=!0) {
        if (this.name = e.name,
        this.up.copy(e.up),
        this.position.copy(e.position),
        this.rotation.order = e.rotation.order,
        this.quaternion.copy(e.quaternion),
        this.scale.copy(e.scale),
        this.matrix.copy(e.matrix),
        this.matrixWorld.copy(e.matrixWorld),
        this.matrixAutoUpdate = e.matrixAutoUpdate,
        this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate,
        this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate,
        this.layers.mask = e.layers.mask,
        this.visible = e.visible,
        this.castShadow = e.castShadow,
        this.receiveShadow = e.receiveShadow,
        this.frustumCulled = e.frustumCulled,
        this.renderOrder = e.renderOrder,
        this.userData = JSON.parse(JSON.stringify(e.userData)),
        t === !0)
            for (let i = 0; i < e.children.length; i++) {
                const r = e.children[i];
                this.add(r.clone())
            }
        return this
    }
}
Rt.DEFAULT_UP = new D(0,1,0);
Rt.DEFAULT_MATRIX_AUTO_UPDATE = !0;
Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const Ur = new D
  , Us = new D
  , Wv = new D
  , zs = new D
  , sc = new D
  , oc = new D
  , zC = new D
  , jv = new D
  , Jv = new D
  , Xv = new D;
class br {
    constructor(e=new D, t=new D, i=new D) {
        this.a = e,
        this.b = t,
        this.c = i
    }
    static getNormal(e, t, i, r) {
        r.subVectors(i, t),
        Ur.subVectors(e, t),
        r.cross(Ur);
        const s = r.lengthSq();
        return s > 0 ? r.multiplyScalar(1 / Math.sqrt(s)) : r.set(0, 0, 0)
    }
    static getBarycoord(e, t, i, r, s) {
        Ur.subVectors(r, t),
        Us.subVectors(i, t),
        Wv.subVectors(e, t);
        const o = Ur.dot(Ur)
          , a = Ur.dot(Us)
          , l = Ur.dot(Wv)
          , d = Us.dot(Us)
          , f = Us.dot(Wv)
          , h = o * d - a * a;
        if (h === 0)
            return s.set(-2, -1, -1);
        const p = 1 / h
          , m = (d * l - a * f) * p
          , y = (o * f - a * l) * p;
        return s.set(1 - m - y, y, m)
    }
    static containsPoint(e, t, i, r) {
        return this.getBarycoord(e, t, i, r, zs),
        zs.x >= 0 && zs.y >= 0 && zs.x + zs.y <= 1
    }
    static getUV(e, t, i, r, s, o, a, l) {
        return this.getBarycoord(e, t, i, r, zs),
        l.set(0, 0),
        l.addScaledVector(s, zs.x),
        l.addScaledVector(o, zs.y),
        l.addScaledVector(a, zs.z),
        l
    }
    static isFrontFacing(e, t, i, r) {
        return Ur.subVectors(i, t),
        Us.subVectors(e, t),
        Ur.cross(Us).dot(r) < 0
    }
    set(e, t, i) {
        return this.a.copy(e),
        this.b.copy(t),
        this.c.copy(i),
        this
    }
    setFromPointsAndIndices(e, t, i, r) {
        return this.a.copy(e[t]),
        this.b.copy(e[i]),
        this.c.copy(e[r]),
        this
    }
    setFromAttributeAndIndices(e, t, i, r) {
        return this.a.fromBufferAttribute(e, t),
        this.b.fromBufferAttribute(e, i),
        this.c.fromBufferAttribute(e, r),
        this
    }
    clone() {
        return new this.constructor().copy(this)
    }
    copy(e) {
        return this.a.copy(e.a),
        this.b.copy(e.b),
        this.c.copy(e.c),
        this
    }
    getArea() {
        return Ur.subVectors(this.c, this.b),
        Us.subVectors(this.a, this.b),
        Ur.cross(Us).length() * .5
    }
    getMidpoint(e) {
        return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3)
    }
    getNormal(e) {
        return br.getNormal(this.a, this.b, this.c, e)
    }
    getPlane(e) {
        return e.setFromCoplanarPoints(this.a, this.b, this.c)
    }
    getBarycoord(e, t) {
        return br.getBarycoord(e, this.a, this.b, this.c, t)
    }
    getUV(e, t, i, r, s) {
        return br.getUV(e, this.a, this.b, this.c, t, i, r, s)
    }
    containsPoint(e) {
        return br.containsPoint(e, this.a, this.b, this.c)
    }
    isFrontFacing(e) {
        return br.isFrontFacing(this.a, this.b, this.c, e)
    }
    intersectsBox(e) {
        return e.intersectsTriangle(this)
    }
    closestPointToPoint(e, t) {
        const i = this.a
          , r = this.b
          , s = this.c;
        let o, a;
        sc.subVectors(r, i),
        oc.subVectors(s, i),
        jv.subVectors(e, i);
        const l = sc.dot(jv)
          , d = oc.dot(jv);
        if (l <= 0 && d <= 0)
            return t.copy(i);
        Jv.subVectors(e, r);
        const f = sc.dot(Jv)
          , h = oc.dot(Jv);
        if (f >= 0 && h <= f)
            return t.copy(r);
        const p = l * h - f * d;
        if (p <= 0 && l >= 0 && f <= 0)
            return o = l / (l - f),
            t.copy(i).addScaledVector(sc, o);
        Xv.subVectors(e, s);
        const m = sc.dot(Xv)
          , y = oc.dot(Xv);
        if (y >= 0 && m <= y)
            return t.copy(s);
        const v = m * d - l * y;
        if (v <= 0 && d >= 0 && y <= 0)
            return a = d / (d - y),
            t.copy(i).addScaledVector(oc, a);
        const x = f * y - m * h;
        if (x <= 0 && h - f >= 0 && m - y >= 0)
            return zC.subVectors(s, r),
            a = (h - f) / (h - f + (m - y)),
            t.copy(r).addScaledVector(zC, a);
        const w = 1 / (x + v + p);
        return o = v * w,
        a = p * w,
        t.copy(i).addScaledVector(sc, o).addScaledVector(oc, a)
    }
    equals(e) {
        return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c)
    }
}
let Q4 = 0;
class Bn extends bs {
    constructor() {
        super(),
        this.isMaterial = !0,
        Object.defineProperty(this, "id", {
            value: Q4++
        }),
        this.uuid = qi(),
        this.name = "",
        this.type = "Material",
        this.blending = cl,
        this.side = As,
        this.vertexColors = !1,
        this.opacity = 1,
        this.transparent = !1,
        this.blendSrc = q1,
        this.blendDst = Z1,
        this.blendEquation = Ya,
        this.blendSrcAlpha = null,
        this.blendDstAlpha = null,
        this.blendEquationAlpha = null,
        this.depthFunc = Lg,
        this.depthTest = !0,
        this.depthWrite = !0,
        this.stencilWriteMask = 255,
        this.stencilFunc = iL,
        this.stencilRef = 0,
        this.stencilFuncMask = 255,
        this.stencilFail = eg,
        this.stencilZFail = eg,
        this.stencilZPass = eg,
        this.stencilWrite = !1,
        this.clippingPlanes = null,
        this.clipIntersection = !1,
        this.clipShadows = !1,
        this.shadowSide = null,
        this.colorWrite = !0,
        this.precision = null,
        this.polygonOffset = !1,
        this.polygonOffsetFactor = 0,
        this.polygonOffsetUnits = 0,
        this.dithering = !1,
        this.alphaToCoverage = !1,
        this.premultipliedAlpha = !1,
        this.forceSinglePass = !1,
        this.visible = !0,
        this.toneMapped = !0,
        this.userData = {},
        this.version = 0,
        this._alphaTest = 0
    }
    get alphaTest() {
        return this._alphaTest
    }
    set alphaTest(e) {
        this._alphaTest > 0 != e > 0 && this.version++,
        this._alphaTest = e
    }
    onBuild() {}
    onBeforeRender() {}
    onBeforeCompile() {}
    customProgramCacheKey() {
        return this.onBeforeCompile.toString()
    }
    setValues(e) {
        if (e !== void 0)
            for (const t in e) {
                const i = e[t];
                if (i === void 0) {
                    console.warn("THREE.Material: '" + t + "' parameter is undefined.");
                    continue
                }
                const r = this[t];
                if (r === void 0) {
                    console.warn("THREE." + this.type + ": '" + t + "' is not a property of this material.");
                    continue
                }
                r && r.isColor ? r.set(i) : r && r.isVector3 && i && i.isVector3 ? r.copy(i) : this[t] = i
            }
    }
    toJSON(e) {
        const t = e === void 0 || typeof e == "string";
        t && (e = {
            textures: {},
            images: {}
        });
        const i = {
            metadata: {
                version: 4.5,
                type: "Material",
                generator: "Material.toJSON"
            }
        };
        i.uuid = this.uuid,
        i.type = this.type,
        this.name !== "" && (i.name = this.name),
        this.color && this.color.isColor && (i.color = this.color.getHex()),
        this.roughness !== void 0 && (i.roughness = this.roughness),
        this.metalness !== void 0 && (i.metalness = this.metalness),
        this.sheen !== void 0 && (i.sheen = this.sheen),
        this.sheenColor && this.sheenColor.isColor && (i.sheenColor = this.sheenColor.getHex()),
        this.sheenRoughness !== void 0 && (i.sheenRoughness = this.sheenRoughness),
        this.emissive && this.emissive.isColor && (i.emissive = this.emissive.getHex()),
        this.emissiveIntensity && this.emissiveIntensity !== 1 && (i.emissiveIntensity = this.emissiveIntensity),
        this.specular && this.specular.isColor && (i.specular = this.specular.getHex()),
        this.specularIntensity !== void 0 && (i.specularIntensity = this.specularIntensity),
        this.specularColor && this.specularColor.isColor && (i.specularColor = this.specularColor.getHex()),
        this.shininess !== void 0 && (i.shininess = this.shininess),
        this.clearcoat !== void 0 && (i.clearcoat = this.clearcoat),
        this.clearcoatRoughness !== void 0 && (i.clearcoatRoughness = this.clearcoatRoughness),
        this.clearcoatMap && this.clearcoatMap.isTexture && (i.clearcoatMap = this.clearcoatMap.toJSON(e).uuid),
        this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (i.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid),
        this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (i.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid,
        i.clearcoatNormalScale = this.clearcoatNormalScale.toArray()),
        this.iridescence !== void 0 && (i.iridescence = this.iridescence),
        this.iridescenceIOR !== void 0 && (i.iridescenceIOR = this.iridescenceIOR),
        this.iridescenceThicknessRange !== void 0 && (i.iridescenceThicknessRange = this.iridescenceThicknessRange),
        this.iridescenceMap && this.iridescenceMap.isTexture && (i.iridescenceMap = this.iridescenceMap.toJSON(e).uuid),
        this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (i.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid),
        this.map && this.map.isTexture && (i.map = this.map.toJSON(e).uuid),
        this.matcap && this.matcap.isTexture && (i.matcap = this.matcap.toJSON(e).uuid),
        this.alphaMap && this.alphaMap.isTexture && (i.alphaMap = this.alphaMap.toJSON(e).uuid),
        this.lightMap && this.lightMap.isTexture && (i.lightMap = this.lightMap.toJSON(e).uuid,
        i.lightMapIntensity = this.lightMapIntensity),
        this.aoMap && this.aoMap.isTexture && (i.aoMap = this.aoMap.toJSON(e).uuid,
        i.aoMapIntensity = this.aoMapIntensity),
        this.bumpMap && this.bumpMap.isTexture && (i.bumpMap = this.bumpMap.toJSON(e).uuid,
        i.bumpScale = this.bumpScale),
        this.normalMap && this.normalMap.isTexture && (i.normalMap = this.normalMap.toJSON(e).uuid,
        i.normalMapType = this.normalMapType,
        i.normalScale = this.normalScale.toArray()),
        this.displacementMap && this.displacementMap.isTexture && (i.displacementMap = this.displacementMap.toJSON(e).uuid,
        i.displacementScale = this.displacementScale,
        i.displacementBias = this.displacementBias),
        this.roughnessMap && this.roughnessMap.isTexture && (i.roughnessMap = this.roughnessMap.toJSON(e).uuid),
        this.metalnessMap && this.metalnessMap.isTexture && (i.metalnessMap = this.metalnessMap.toJSON(e).uuid),
        this.emissiveMap && this.emissiveMap.isTexture && (i.emissiveMap = this.emissiveMap.toJSON(e).uuid),
        this.specularMap && this.specularMap.isTexture && (i.specularMap = this.specularMap.toJSON(e).uuid),
        this.specularIntensityMap && this.specularIntensityMap.isTexture && (i.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid),
        this.specularColorMap && this.specularColorMap.isTexture && (i.specularColorMap = this.specularColorMap.toJSON(e).uuid),
        this.envMap && this.envMap.isTexture && (i.envMap = this.envMap.toJSON(e).uuid,
        this.combine !== void 0 && (i.combine = this.combine)),
        this.envMapIntensity !== void 0 && (i.envMapIntensity = this.envMapIntensity),
        this.reflectivity !== void 0 && (i.reflectivity = this.reflectivity),
        this.refractionRatio !== void 0 && (i.refractionRatio = this.refractionRatio),
        this.gradientMap && this.gradientMap.isTexture && (i.gradientMap = this.gradientMap.toJSON(e).uuid),
        this.transmission !== void 0 && (i.transmission = this.transmission),
        this.transmissionMap && this.transmissionMap.isTexture && (i.transmissionMap = this.transmissionMap.toJSON(e).uuid),
        this.thickness !== void 0 && (i.thickness = this.thickness),
        this.thicknessMap && this.thicknessMap.isTexture && (i.thicknessMap = this.thicknessMap.toJSON(e).uuid),
        this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (i.attenuationDistance = this.attenuationDistance),
        this.attenuationColor !== void 0 && (i.attenuationColor = this.attenuationColor.getHex()),
        this.size !== void 0 && (i.size = this.size),
        this.shadowSide !== null && (i.shadowSide = this.shadowSide),
        this.sizeAttenuation !== void 0 && (i.sizeAttenuation = this.sizeAttenuation),
        this.blending !== cl && (i.blending = this.blending),
        this.side !== As && (i.side = this.side),
        this.vertexColors && (i.vertexColors = !0),
        this.opacity < 1 && (i.opacity = this.opacity),
        this.transparent === !0 && (i.transparent = this.transparent),
        i.depthFunc = this.depthFunc,
        i.depthTest = this.depthTest,
        i.depthWrite = this.depthWrite,
        i.colorWrite = this.colorWrite,
        i.stencilWrite = this.stencilWrite,
        i.stencilWriteMask = this.stencilWriteMask,
        i.stencilFunc = this.stencilFunc,
        i.stencilRef = this.stencilRef,
        i.stencilFuncMask = this.stencilFuncMask,
        i.stencilFail = this.stencilFail,
        i.stencilZFail = this.stencilZFail,
        i.stencilZPass = this.stencilZPass,
        this.rotation !== void 0 && this.rotation !== 0 && (i.rotation = this.rotation),
        this.polygonOffset === !0 && (i.polygonOffset = !0),
        this.polygonOffsetFactor !== 0 && (i.polygonOffsetFactor = this.polygonOffsetFactor),
        this.polygonOffsetUnits !== 0 && (i.polygonOffsetUnits = this.polygonOffsetUnits),
        this.linewidth !== void 0 && this.linewidth !== 1 && (i.linewidth = this.linewidth),
        this.dashSize !== void 0 && (i.dashSize = this.dashSize),
        this.gapSize !== void 0 && (i.gapSize = this.gapSize),
        this.scale !== void 0 && (i.scale = this.scale),
        this.dithering === !0 && (i.dithering = !0),
        this.alphaTest > 0 && (i.alphaTest = this.alphaTest),
        this.alphaToCoverage === !0 && (i.alphaToCoverage = this.alphaToCoverage),
        this.premultipliedAlpha === !0 && (i.premultipliedAlpha = this.premultipliedAlpha),
        this.forceSinglePass === !0 && (i.forceSinglePass = this.forceSinglePass),
        this.wireframe === !0 && (i.wireframe = this.wireframe),
        this.wireframeLinewidth > 1 && (i.wireframeLinewidth = this.wireframeLinewidth),
        this.wireframeLinecap !== "round" && (i.wireframeLinecap = this.wireframeLinecap),
        this.wireframeLinejoin !== "round" && (i.wireframeLinejoin = this.wireframeLinejoin),
        this.flatShading === !0 && (i.flatShading = this.flatShading),
        this.visible === !1 && (i.visible = !1),
        this.toneMapped === !1 && (i.toneMapped = !1),
        this.fog === !1 && (i.fog = !1),
        Object.keys(this.userData).length > 0 && (i.userData = this.userData);
        function r(s) {
            const o = [];
            for (const a in s) {
                const l = s[a];
                delete l.metadata,
                o.push(l)
            }
            return o
        }
        if (t) {
            const s = r(e.textures)
              , o = r(e.images);
            s.length > 0 && (i.textures = s),
            o.length > 0 && (i.images = o)
        }
        return i
    }
    clone() {
        return new this.constructor().copy(this)
    }
    copy(e) {
        this.name = e.name,
        this.blending = e.blending,
        this.side = e.side,
        this.vertexColors = e.vertexColors,
        this.opacity = e.opacity,
        this.transparent = e.transparent,
        this.blendSrc = e.blendSrc,
        this.blendDst = e.blendDst,
        this.blendEquation = e.blendEquation,
        this.blendSrcAlpha = e.blendSrcAlpha,
        this.blendDstAlpha = e.blendDstAlpha,
        this.blendEquationAlpha = e.blendEquationAlpha,
        this.depthFunc = e.depthFunc,
        this.depthTest = e.depthTest,
        this.depthWrite = e.depthWrite,
        this.stencilWriteMask = e.stencilWriteMask,
        this.stencilFunc = e.stencilFunc,
        this.stencilRef = e.stencilRef,
        this.stencilFuncMask = e.stencilFuncMask,
        this.stencilFail = e.stencilFail,
        this.stencilZFail = e.stencilZFail,
        this.stencilZPass = e.stencilZPass,
        this.stencilWrite = e.stencilWrite;
        const t = e.clippingPlanes;
        let i = null;
        if (t !== null) {
            const r = t.length;
            i = new Array(r);
            for (let s = 0; s !== r; ++s)
                i[s] = t[s].clone()
        }
        return this.clippingPlanes = i,
        this.clipIntersection = e.clipIntersection,
        this.clipShadows = e.clipShadows,
        this.shadowSide = e.shadowSide,
        this.colorWrite = e.colorWrite,
        this.precision = e.precision,
        this.polygonOffset = e.polygonOffset,
        this.polygonOffsetFactor = e.polygonOffsetFactor,
        this.polygonOffsetUnits = e.polygonOffsetUnits,
        this.dithering = e.dithering,
        this.alphaTest = e.alphaTest,
        this.alphaToCoverage = e.alphaToCoverage,
        this.premultipliedAlpha = e.premultipliedAlpha,
        this.forceSinglePass = e.forceSinglePass,
        this.visible = e.visible,
        this.toneMapped = e.toneMapped,
        this.userData = JSON.parse(JSON.stringify(e.userData)),
        this
    }
    dispose() {
        this.dispatchEvent({
            type: "dispose"
        })
    }
    set needsUpdate(e) {
        e === !0 && this.version++
    }
}
class Yi extends Bn {
    constructor(e) {
        super(),
        this.isMeshBasicMaterial = !0,
        this.type = "MeshBasicMaterial",
        this.color = new Ie(16777215),
        this.map = null,
        this.lightMap = null,
        this.lightMapIntensity = 1,
        this.aoMap = null,
        this.aoMapIntensity = 1,
        this.specularMap = null,
        this.alphaMap = null,
        this.envMap = null,
        this.combine = Kf,
        this.reflectivity = 1,
        this.refractionRatio = .98,
        this.wireframe = !1,
        this.wireframeLinewidth = 1,
        this.wireframeLinecap = "round",
        this.wireframeLinejoin = "round",
        this.fog = !0,
        this.setValues(e)
    }
    copy(e) {
        return super.copy(e),
        this.color.copy(e.color),
        this.map = e.map,
        this.lightMap = e.lightMap,
        this.lightMapIntensity = e.lightMapIntensity,
        this.aoMap = e.aoMap,
        this.aoMapIntensity = e.aoMapIntensity,
        this.specularMap = e.specularMap,
        this.alphaMap = e.alphaMap,
        this.envMap = e.envMap,
        this.combine = e.combine,
        this.reflectivity = e.reflectivity,
        this.refractionRatio = e.refractionRatio,
        this.wireframe = e.wireframe,
        this.wireframeLinewidth = e.wireframeLinewidth,
        this.wireframeLinecap = e.wireframeLinecap,
        this.wireframeLinejoin = e.wireframeLinejoin,
        this.fog = e.fog,
        this
    }
}
const En = new D
  , Kp = new ge;
class Ot {
    constructor(e, t, i=!1) {
        if (Array.isArray(e))
            throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
        this.isBufferAttribute = !0,
        this.name = "",
        this.array = e,
        this.itemSize = t,
        this.count = e !== void 0 ? e.length / t : 0,
        this.normalized = i,
        this.usage = bf,
        this.updateRange = {
            offset: 0,
            count: -1
        },
        this.version = 0
    }
    onUploadCallback() {}
    set needsUpdate(e) {
        e === !0 && this.version++
    }
    setUsage(e) {
        return this.usage = e,
        this
    }
    copy(e) {
        return this.name = e.name,
        this.array = new e.array.constructor(e.array),
        this.itemSize = e.itemSize,
        this.count = e.count,
        this.normalized = e.normalized,
        this.usage = e.usage,
        this
    }
    copyAt(e, t, i) {
        e *= this.itemSize,
        i *= t.itemSize;
        for (let r = 0, s = this.itemSize; r < s; r++)
            this.array[e + r] = t.array[i + r];
        return this
    }
    copyArray(e) {
        return this.array.set(e),
        this
    }
    applyMatrix3(e) {
        if (this.itemSize === 2)
            for (let t = 0, i = this.count; t < i; t++)
                Kp.fromBufferAttribute(this, t),
                Kp.applyMatrix3(e),
                this.setXY(t, Kp.x, Kp.y);
        else if (this.itemSize === 3)
            for (let t = 0, i = this.count; t < i; t++)
                En.fromBufferAttribute(this, t),
                En.applyMatrix3(e),
                this.setXYZ(t, En.x, En.y, En.z);
        return this
    }
    applyMatrix4(e) {
        for (let t = 0, i = this.count; t < i; t++)
            En.fromBufferAttribute(this, t),
            En.applyMatrix4(e),
            this.setXYZ(t, En.x, En.y, En.z);
        return this
    }
    applyNormalMatrix(e) {
        for (let t = 0, i = this.count; t < i; t++)
            En.fromBufferAttribute(this, t),
            En.applyNormalMatrix(e),
            this.setXYZ(t, En.x, En.y, En.z);
        return this
    }
    transformDirection(e) {
        for (let t = 0, i = this.count; t < i; t++)
            En.fromBufferAttribute(this, t),
            En.transformDirection(e),
            this.setXYZ(t, En.x, En.y, En.z);
        return this
    }
    set(e, t=0) {
        return this.array.set(e, t),
        this
    }
    getX(e) {
        let t = this.array[e * this.itemSize];
        return this.normalized && (t = Qs(t, this.array)),
        t
    }
    setX(e, t) {
        return this.normalized && (t = Wt(t, this.array)),
        this.array[e * this.itemSize] = t,
        this
    }
    getY(e) {
        let t = this.array[e * this.itemSize + 1];
        return this.normalized && (t = Qs(t, this.array)),
        t
    }
    setY(e, t) {
        return this.normalized && (t = Wt(t, this.array)),
        this.array[e * this.itemSize + 1] = t,
        this
    }
    getZ(e) {
        let t = this.array[e * this.itemSize + 2];
        return this.normalized && (t = Qs(t, this.array)),
        t
    }
    setZ(e, t) {
        return this.normalized && (t = Wt(t, this.array)),
        this.array[e * this.itemSize + 2] = t,
        this
    }
    getW(e) {
        let t = this.array[e * this.itemSize + 3];
        return this.normalized && (t = Qs(t, this.array)),
        t
    }
    setW(e, t) {
        return this.normalized && (t = Wt(t, this.array)),
        this.array[e * this.itemSize + 3] = t,
        this
    }
    setXY(e, t, i) {
        return e *= this.itemSize,
        this.normalized && (t = Wt(t, this.array),
        i = Wt(i, this.array)),
        this.array[e + 0] = t,
        this.array[e + 1] = i,
        this
    }
    setXYZ(e, t, i, r) {
        return e *= this.itemSize,
        this.normalized && (t = Wt(t, this.array),
        i = Wt(i, this.array),
        r = Wt(r, this.array)),
        this.array[e + 0] = t,
        this.array[e + 1] = i,
        this.array[e + 2] = r,
        this
    }
    setXYZW(e, t, i, r, s) {
        return e *= this.itemSize,
        this.normalized && (t = Wt(t, this.array),
        i = Wt(i, this.array),
        r = Wt(r, this.array),
        s = Wt(s, this.array)),
        this.array[e + 0] = t,
        this.array[e + 1] = i,
        this.array[e + 2] = r,
        this.array[e + 3] = s,
        this
    }
    onUpload(e) {
        return this.onUploadCallback = e,
        this
    }
    clone() {
        return new this.constructor(this.array,this.itemSize).copy(this)
    }
    toJSON() {
        const e = {
            itemSize: this.itemSize,
            type: this.array.constructor.name,
            array: Array.from(this.array),
            normalized: this.normalized
        };
        return this.name !== "" && (e.name = this.name),
        this.usage !== bf && (e.usage = this.usage),
        (this.updateRange.offset !== 0 || this.updateRange.count !== -1) && (e.updateRange = this.updateRange),
        e
    }
    copyColorsArray() {
        console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")
    }
    copyVector2sArray() {
        console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")
    }
    copyVector3sArray() {
        console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")
    }
    copyVector4sArray() {
        console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")
    }
}
class q4 extends Ot {
    constructor(e, t, i) {
        super(new Int8Array(e), t, i)
    }
}
class Z4 extends Ot {
    constructor(e, t, i) {
        super(new Uint8Array(e), t, i)
    }
}
class $4 extends Ot {
    constructor(e, t, i) {
        super(new Uint8ClampedArray(e), t, i)
    }
}
class eU extends Ot {
    constructor(e, t, i) {
        super(new Int16Array(e), t, i)
    }
}
class o_ extends Ot {
    constructor(e, t, i) {
        super(new Uint16Array(e), t, i)
    }
}
class tU extends Ot {
    constructor(e, t, i) {
        super(new Int32Array(e), t, i)
    }
}
class a_ extends Ot {
    constructor(e, t, i) {
        super(new Uint32Array(e), t, i)
    }
}
class nU extends Ot {
    constructor(e, t, i) {
        super(new Uint16Array(e), t, i),
        this.isFloat16BufferAttribute = !0
    }
}
class Je extends Ot {
    constructor(e, t, i) {
        super(new Float32Array(e), t, i)
    }
}
class iU extends Ot {
    constructor(e, t, i) {
        super(new Float64Array(e), t, i)
    }
}
let rU = 0;
const vr = new at
  , Kv = new Rt
  , ac = new D
  , Ji = new ma
  , dd = new ma
  , Hn = new D;
class dt extends bs {
    constructor() {
        super(),
        this.isBufferGeometry = !0,
        Object.defineProperty(this, "id", {
            value: rU++
        }),
        this.uuid = qi(),
        this.name = "",
        this.type = "BufferGeometry",
        this.index = null,
        this.attributes = {},
        this.morphAttributes = {},
        this.morphTargetsRelative = !1,
        this.groups = [],
        this.boundingBox = null,
        this.boundingSphere = null,
        this.drawRange = {
            start: 0,
            count: 1 / 0
        },
        this.userData = {}
    }
    getIndex() {
        return this.index
    }
    setIndex(e) {
        return Array.isArray(e) ? this.index = new (oL(e) ? a_ : o_)(e,1) : this.index = e,
        this
    }
    getAttribute(e) {
        return this.attributes[e]
    }
    setAttribute(e, t) {
        return this.attributes[e] = t,
        this
    }
    deleteAttribute(e) {
        return delete this.attributes[e],
        this
    }
    hasAttribute(e) {
        return this.attributes[e] !== void 0
    }
    addGroup(e, t, i=0) {
        this.groups.push({
            start: e,
            count: t,
            materialIndex: i
        })
    }
    clearGroups() {
        this.groups = []
    }
    setDrawRange(e, t) {
        this.drawRange.start = e,
        this.drawRange.count = t
    }
    applyMatrix4(e) {
        const t = this.attributes.position;
        t !== void 0 && (t.applyMatrix4(e),
        t.needsUpdate = !0);
        const i = this.attributes.normal;
        if (i !== void 0) {
            const s = new xi().getNormalMatrix(e);
            i.applyNormalMatrix(s),
            i.needsUpdate = !0
        }
        const r = this.attributes.tangent;
        return r !== void 0 && (r.transformDirection(e),
        r.needsUpdate = !0),
        this.boundingBox !== null && this.computeBoundingBox(),
        this.boundingSphere !== null && this.computeBoundingSphere(),
        this
    }
    applyQuaternion(e) {
        return vr.makeRotationFromQuaternion(e),
        this.applyMatrix4(vr),
        this
    }
    rotateX(e) {
        return vr.makeRotationX(e),
        this.applyMatrix4(vr),
        this
    }
    rotateY(e) {
        return vr.makeRotationY(e),
        this.applyMatrix4(vr),
        this
    }
    rotateZ(e) {
        return vr.makeRotationZ(e),
        this.applyMatrix4(vr),
        this
    }
    translate(e, t, i) {
        return vr.makeTranslation(e, t, i),
        this.applyMatrix4(vr),
        this
    }
    scale(e, t, i) {
        return vr.makeScale(e, t, i),
        this.applyMatrix4(vr),
        this
    }
    lookAt(e) {
        return Kv.lookAt(e),
        Kv.updateMatrix(),
        this.applyMatrix4(Kv.matrix),
        this
    }
    center() {
        return this.computeBoundingBox(),
        this.boundingBox.getCenter(ac).negate(),
        this.translate(ac.x, ac.y, ac.z),
        this
    }
    setFromPoints(e) {
        const t = [];
        for (let i = 0, r = e.length; i < r; i++) {
            const s = e[i];
            t.push(s.x, s.y, s.z || 0)
        }
        return this.setAttribute("position", new Je(t,3)),
        this
    }
    computeBoundingBox() {
        this.boundingBox === null && (this.boundingBox = new ma);
        const e = this.attributes.position
          , t = this.morphAttributes.position;
        if (e && e.isGLBufferAttribute) {
            console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this),
            this.boundingBox.set(new D(-1 / 0,-1 / 0,-1 / 0), new D(1 / 0,1 / 0,1 / 0));
            return
        }
        if (e !== void 0) {
            if (this.boundingBox.setFromBufferAttribute(e),
            t)
                for (let i = 0, r = t.length; i < r; i++) {
                    const s = t[i];
                    Ji.setFromBufferAttribute(s),
                    this.morphTargetsRelative ? (Hn.addVectors(this.boundingBox.min, Ji.min),
                    this.boundingBox.expandByPoint(Hn),
                    Hn.addVectors(this.boundingBox.max, Ji.max),
                    this.boundingBox.expandByPoint(Hn)) : (this.boundingBox.expandByPoint(Ji.min),
                    this.boundingBox.expandByPoint(Ji.max))
                }
        } else
            this.boundingBox.makeEmpty();
        (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this)
    }
    computeBoundingSphere() {
        this.boundingSphere === null && (this.boundingSphere = new ga);
        const e = this.attributes.position
          , t = this.morphAttributes.position;
        if (e && e.isGLBufferAttribute) {
            console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this),
            this.boundingSphere.set(new D, 1 / 0);
            return
        }
        if (e) {
            const i = this.boundingSphere.center;
            if (Ji.setFromBufferAttribute(e),
            t)
                for (let s = 0, o = t.length; s < o; s++) {
                    const a = t[s];
                    dd.setFromBufferAttribute(a),
                    this.morphTargetsRelative ? (Hn.addVectors(Ji.min, dd.min),
                    Ji.expandByPoint(Hn),
                    Hn.addVectors(Ji.max, dd.max),
                    Ji.expandByPoint(Hn)) : (Ji.expandByPoint(dd.min),
                    Ji.expandByPoint(dd.max))
                }
            Ji.getCenter(i);
            let r = 0;
            for (let s = 0, o = e.count; s < o; s++)
                Hn.fromBufferAttribute(e, s),
                r = Math.max(r, i.distanceToSquared(Hn));
            if (t)
                for (let s = 0, o = t.length; s < o; s++) {
                    const a = t[s]
                      , l = this.morphTargetsRelative;
                    for (let d = 0, f = a.count; d < f; d++)
                        Hn.fromBufferAttribute(a, d),
                        l && (ac.fromBufferAttribute(e, d),
                        Hn.add(ac)),
                        r = Math.max(r, i.distanceToSquared(Hn))
                }
            this.boundingSphere.radius = Math.sqrt(r),
            isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this)
        }
    }
    computeTangents() {
        const e = this.index
          , t = this.attributes;
        if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) {
            console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
            return
        }
        const i = e.array
          , r = t.position.array
          , s = t.normal.array
          , o = t.uv.array
          , a = r.length / 3;
        this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new Ot(new Float32Array(4 * a),4));
        const l = this.getAttribute("tangent").array
          , d = []
          , f = [];
        for (let I = 0; I < a; I++)
            d[I] = new D,
            f[I] = new D;
        const h = new D
          , p = new D
          , m = new D
          , y = new ge
          , v = new ge
          , x = new ge
          , w = new D
          , A = new D;
        function M(I, U, $) {
            h.fromArray(r, I * 3),
            p.fromArray(r, U * 3),
            m.fromArray(r, $ * 3),
            y.fromArray(o, I * 2),
            v.fromArray(o, U * 2),
            x.fromArray(o, $ * 2),
            p.sub(h),
            m.sub(h),
            v.sub(y),
            x.sub(y);
            const W = 1 / (v.x * x.y - x.x * v.y);
            isFinite(W) && (w.copy(p).multiplyScalar(x.y).addScaledVector(m, -v.y).multiplyScalar(W),
            A.copy(m).multiplyScalar(v.x).addScaledVector(p, -x.x).multiplyScalar(W),
            d[I].add(w),
            d[U].add(w),
            d[$].add(w),
            f[I].add(A),
            f[U].add(A),
            f[$].add(A))
        }
        let S = this.groups;
        S.length === 0 && (S = [{
            start: 0,
            count: i.length
        }]);
        for (let I = 0, U = S.length; I < U; ++I) {
            const $ = S[I]
              , W = $.start
              , H = $.count;
            for (let Y = W, ie = W + H; Y < ie; Y += 3)
                M(i[Y + 0], i[Y + 1], i[Y + 2])
        }
        const E = new D
          , P = new D
          , L = new D
          , C = new D;
        function B(I) {
            L.fromArray(s, I * 3),
            C.copy(L);
            const U = d[I];
            E.copy(U),
            E.sub(L.multiplyScalar(L.dot(U))).normalize(),
            P.crossVectors(C, U);
            const W = P.dot(f[I]) < 0 ? -1 : 1;
            l[I * 4] = E.x,
            l[I * 4 + 1] = E.y,
            l[I * 4 + 2] = E.z,
            l[I * 4 + 3] = W
        }
        for (let I = 0, U = S.length; I < U; ++I) {
            const $ = S[I]
              , W = $.start
              , H = $.count;
            for (let Y = W, ie = W + H; Y < ie; Y += 3)
                B(i[Y + 0]),
                B(i[Y + 1]),
                B(i[Y + 2])
        }
    }
    computeVertexNormals() {
        const e = this.index
          , t = this.getAttribute("position");
        if (t !== void 0) {
            let i = this.getAttribute("normal");
            if (i === void 0)
                i = new Ot(new Float32Array(t.count * 3),3),
                this.setAttribute("normal", i);
            else
                for (let p = 0, m = i.count; p < m; p++)
                    i.setXYZ(p, 0, 0, 0);
            const r = new D
              , s = new D
              , o = new D
              , a = new D
              , l = new D
              , d = new D
              , f = new D
              , h = new D;
            if (e)
                for (let p = 0, m = e.count; p < m; p += 3) {
                    const y = e.getX(p + 0)
                      , v = e.getX(p + 1)
                      , x = e.getX(p + 2);
                    r.fromBufferAttribute(t, y),
                    s.fromBufferAttribute(t, v),
                    o.fromBufferAttribute(t, x),
                    f.subVectors(o, s),
                    h.subVectors(r, s),
                    f.cross(h),
                    a.fromBufferAttribute(i, y),
                    l.fromBufferAttribute(i, v),
                    d.fromBufferAttribute(i, x),
                    a.add(f),
                    l.add(f),
                    d.add(f),
                    i.setXYZ(y, a.x, a.y, a.z),
                    i.setXYZ(v, l.x, l.y, l.z),
                    i.setXYZ(x, d.x, d.y, d.z)
                }
            else
                for (let p = 0, m = t.count; p < m; p += 3)
                    r.fromBufferAttribute(t, p + 0),
                    s.fromBufferAttribute(t, p + 1),
                    o.fromBufferAttribute(t, p + 2),
                    f.subVectors(o, s),
                    h.subVectors(r, s),
                    f.cross(h),
                    i.setXYZ(p + 0, f.x, f.y, f.z),
                    i.setXYZ(p + 1, f.x, f.y, f.z),
                    i.setXYZ(p + 2, f.x, f.y, f.z);
            this.normalizeNormals(),
            i.needsUpdate = !0
        }
    }
    merge() {
        return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),
        this
    }
    normalizeNormals() {
        const e = this.attributes.normal;
        for (let t = 0, i = e.count; t < i; t++)
            Hn.fromBufferAttribute(e, t),
            Hn.normalize(),
            e.setXYZ(t, Hn.x, Hn.y, Hn.z)
    }
    toNonIndexed() {
        function e(a, l) {
            const d = a.array
              , f = a.itemSize
              , h = a.normalized
              , p = new d.constructor(l.length * f);
            let m = 0
              , y = 0;
            for (let v = 0, x = l.length; v < x; v++) {
                a.isInterleavedBufferAttribute ? m = l[v] * a.data.stride + a.offset : m = l[v] * f;
                for (let w = 0; w < f; w++)
                    p[y++] = d[m++]
            }
            return new Ot(p,f,h)
        }
        if (this.index === null)
            return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),
            this;
        const t = new dt
          , i = this.index.array
          , r = this.attributes;
        for (const a in r) {
            const l = r[a]
              , d = e(l, i);
            t.setAttribute(a, d)
        }
        const s = this.morphAttributes;
        for (const a in s) {
            const l = []
              , d = s[a];
            for (let f = 0, h = d.length; f < h; f++) {
                const p = d[f]
                  , m = e(p, i);
                l.push(m)
            }
            t.morphAttributes[a] = l
        }
        t.morphTargetsRelative = this.morphTargetsRelative;
        const o = this.groups;
        for (let a = 0, l = o.length; a < l; a++) {
            const d = o[a];
            t.addGroup(d.start, d.count, d.materialIndex)
        }
        return t
    }
    toJSON() {
        const e = {
            metadata: {
                version: 4.5,
                type: "BufferGeometry",
                generator: "BufferGeometry.toJSON"
            }
        };
        if (e.uuid = this.uuid,
        e.type = this.type,
        this.name !== "" && (e.name = this.name),
        Object.keys(this.userData).length > 0 && (e.userData = this.userData),
        this.parameters !== void 0) {
            const l = this.parameters;
            for (const d in l)
                l[d] !== void 0 && (e[d] = l[d]);
            return e
        }
        e.data = {
            attributes: {}
        };
        const t = this.index;
        t !== null && (e.data.index = {
            type: t.array.constructor.name,
            array: Array.prototype.slice.call(t.array)
        });
        const i = this.attributes;
        for (const l in i) {
            const d = i[l];
            e.data.attributes[l] = d.toJSON(e.data)
        }
        const r = {};
        let s = !1;
        for (const l in this.morphAttributes) {
            const d = this.morphAttributes[l]
              , f = [];
            for (let h = 0, p = d.length; h < p; h++) {
                const m = d[h];
                f.push(m.toJSON(e.data))
            }
            f.length > 0 && (r[l] = f,
            s = !0)
        }
        s && (e.data.morphAttributes = r,
        e.data.morphTargetsRelative = this.morphTargetsRelative);
        const o = this.groups;
        o.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(o)));
        const a = this.boundingSphere;
        return a !== null && (e.data.boundingSphere = {
            center: a.center.toArray(),
            radius: a.radius
        }),
        e
    }
    clone() {
        return new this.constructor().copy(this)
    }
    copy(e) {
        this.index = null,
        this.attributes = {},
        this.morphAttributes = {},
        this.groups = [],
        this.boundingBox = null,
        this.boundingSphere = null;
        const t = {};
        this.name = e.name;
        const i = e.index;
        i !== null && this.setIndex(i.clone(t));
        const r = e.attributes;
        for (const d in r) {
            const f = r[d];
            this.setAttribute(d, f.clone(t))
        }
        const s = e.morphAttributes;
        for (const d in s) {
            const f = []
              , h = s[d];
            for (let p = 0, m = h.length; p < m; p++)
                f.push(h[p].clone(t));
            this.morphAttributes[d] = f
        }
        this.morphTargetsRelative = e.morphTargetsRelative;
        const o = e.groups;
        for (let d = 0, f = o.length; d < f; d++) {
            const h = o[d];
            this.addGroup(h.start, h.count, h.materialIndex)
        }
        const a = e.boundingBox;
        a !== null && (this.boundingBox = a.clone());
        const l = e.boundingSphere;
        return l !== null && (this.boundingSphere = l.clone()),
        this.drawRange.start = e.drawRange.start,
        this.drawRange.count = e.drawRange.count,
        this.userData = e.userData,
        e.parameters !== void 0 && (this.parameters = Object.assign({}, e.parameters)),
        this
    }
    dispose() {
        this.dispatchEvent({
            type: "dispose"
        })
    }
}
const GC = new at
  , lc = new Yf
  , Yv = new ga
  , fd = new D
  , hd = new D
  , pd = new D
  , Qv = new D
  , Yp = new D
  , Qp = new ge
  , qp = new ge
  , Zp = new ge
  , qv = new D
  , $p = new D;
class Wn extends Rt {
    constructor(e=new dt, t=new Yi) {
        super(),
        this.isMesh = !0,
        this.type = "Mesh",
        this.geometry = e,
        this.material = t,
        this.updateMorphTargets()
    }
    copy(e, t) {
        return super.copy(e, t),
        e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()),
        e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)),
        this.material = e.material,
        this.geometry = e.geometry,
        this
    }
    updateMorphTargets() {
        const t = this.geometry.morphAttributes
          , i = Object.keys(t);
        if (i.length > 0) {
            const r = t[i[0]];
            if (r !== void 0) {
                this.morphTargetInfluences = [],
                this.morphTargetDictionary = {};
                for (let s = 0, o = r.length; s < o; s++) {
                    const a = r[s].name || String(s);
                    this.morphTargetInfluences.push(0),
                    this.morphTargetDictionary[a] = s
                }
            }
        }
    }
    getVertexPosition(e, t) {
        const i = this.geometry
          , r = i.attributes.position
          , s = i.morphAttributes.position
          , o = i.morphTargetsRelative;
        t.fromBufferAttribute(r, e);
        const a = this.morphTargetInfluences;
        if (s && a) {
            Yp.set(0, 0, 0);
            for (let l = 0, d = s.length; l < d; l++) {
                const f = a[l]
                  , h = s[l];
                f !== 0 && (Qv.fromBufferAttribute(h, e),
                o ? Yp.addScaledVector(Qv, f) : Yp.addScaledVector(Qv.sub(t), f))
            }
            t.add(Yp)
        }
        return this.isSkinnedMesh && this.boneTransform(e, t),
        t
    }
    raycast(e, t) {
        const i = this.geometry
          , r = this.material
          , s = this.matrixWorld;
        if (r === void 0 || (i.boundingSphere === null && i.computeBoundingSphere(),
        Yv.copy(i.boundingSphere),
        Yv.applyMatrix4(s),
        e.ray.intersectsSphere(Yv) === !1) || (GC.copy(s).invert(),
        lc.copy(e.ray).applyMatrix4(GC),
        i.boundingBox !== null && lc.intersectsBox(i.boundingBox) === !1))
            return;
        let o;
        const a = i.index
          , l = i.attributes.position
          , d = i.attributes.uv
          , f = i.attributes.uv2
          , h = i.groups
          , p = i.drawRange;
        if (a !== null)
            if (Array.isArray(r))
                for (let m = 0, y = h.length; m < y; m++) {
                    const v = h[m]
                      , x = r[v.materialIndex]
                      , w = Math.max(v.start, p.start)
                      , A = Math.min(a.count, Math.min(v.start + v.count, p.start + p.count));
                    for (let M = w, S = A; M < S; M += 3) {
                        const E = a.getX(M)
                          , P = a.getX(M + 1)
                          , L = a.getX(M + 2);
                        o = em(this, x, e, lc, d, f, E, P, L),
                        o && (o.faceIndex = Math.floor(M / 3),
                        o.face.materialIndex = v.materialIndex,
                        t.push(o))
                    }
                }
            else {
                const m = Math.max(0, p.start)
                  , y = Math.min(a.count, p.start + p.count);
                for (let v = m, x = y; v < x; v += 3) {
                    const w = a.getX(v)
                      , A = a.getX(v + 1)
                      , M = a.getX(v + 2);
                    o = em(this, r, e, lc, d, f, w, A, M),
                    o && (o.faceIndex = Math.floor(v / 3),
                    t.push(o))
                }
            }
        else if (l !== void 0)
            if (Array.isArray(r))
                for (let m = 0, y = h.length; m < y; m++) {
                    const v = h[m]
                      , x = r[v.materialIndex]
                      , w = Math.max(v.start, p.start)
                      , A = Math.min(l.count, Math.min(v.start + v.count, p.start + p.count));
                    for (let M = w, S = A; M < S; M += 3) {
                        const E = M
                          , P = M + 1
                          , L = M + 2;
                        o = em(this, x, e, lc, d, f, E, P, L),
                        o && (o.faceIndex = Math.floor(M / 3),
                        o.face.materialIndex = v.materialIndex,
                        t.push(o))
                    }
                }
            else {
                const m = Math.max(0, p.start)
                  , y = Math.min(l.count, p.start + p.count);
                for (let v = m, x = y; v < x; v += 3) {
                    const w = v
                      , A = v + 1
                      , M = v + 2;
                    o = em(this, r, e, lc, d, f, w, A, M),
                    o && (o.faceIndex = Math.floor(v / 3),
                    t.push(o))
                }
            }
    }
}
function sU(n, e, t, i, r, s, o, a) {
    let l;
    if (e.side === Oi ? l = i.intersectTriangle(o, s, r, !0, a) : l = i.intersectTriangle(r, s, o, e.side === As, a),
    l === null)
        return null;
    $p.copy(a),
    $p.applyMatrix4(n.matrixWorld);
    const d = t.ray.origin.distanceTo($p);
    return d < t.near || d > t.far ? null : {
        distance: d,
        point: $p.clone(),
        object: n
    }
}
function em(n, e, t, i, r, s, o, a, l) {
    n.getVertexPosition(o, fd),
    n.getVertexPosition(a, hd),
    n.getVertexPosition(l, pd);
    const d = sU(n, e, t, i, fd, hd, pd, qv);
    if (d) {
        r && (Qp.fromBufferAttribute(r, o),
        qp.fromBufferAttribute(r, a),
        Zp.fromBufferAttribute(r, l),
        d.uv = br.getUV(qv, fd, hd, pd, Qp, qp, Zp, new ge)),
        s && (Qp.fromBufferAttribute(s, o),
        qp.fromBufferAttribute(s, a),
        Zp.fromBufferAttribute(s, l),
        d.uv2 = br.getUV(qv, fd, hd, pd, Qp, qp, Zp, new ge));
        const f = {
            a: o,
            b: a,
            c: l,
            normal: new D,
            materialIndex: 0
        };
        br.getNormal(fd, hd, pd, f.normal),
        d.face = f
    }
    return d
}
class ya extends dt {
    constructor(e=1, t=1, i=1, r=1, s=1, o=1) {
        super(),
        this.type = "BoxGeometry",
        this.parameters = {
            width: e,
            height: t,
            depth: i,
            widthSegments: r,
            heightSegments: s,
            depthSegments: o
        };
        const a = this;
        r = Math.floor(r),
        s = Math.floor(s),
        o = Math.floor(o);
        const l = []
          , d = []
          , f = []
          , h = [];
        let p = 0
          , m = 0;
        y("z", "y", "x", -1, -1, i, t, e, o, s, 0),
        y("z", "y", "x", 1, -1, i, t, -e, o, s, 1),
        y("x", "z", "y", 1, 1, e, i, t, r, o, 2),
        y("x", "z", "y", 1, -1, e, i, -t, r, o, 3),
        y("x", "y", "z", 1, -1, e, t, i, r, s, 4),
        y("x", "y", "z", -1, -1, e, t, -i, r, s, 5),
        this.setIndex(l),
        this.setAttribute("position", new Je(d,3)),
        this.setAttribute("normal", new Je(f,3)),
        this.setAttribute("uv", new Je(h,2));
        function y(v, x, w, A, M, S, E, P, L, C, B) {
            const I = S / L
              , U = E / C
              , $ = S / 2
              , W = E / 2
              , H = P / 2
              , Y = L + 1
              , ie = C + 1;
            let ae = 0
              , F = 0;
            const V = new D;
            for (let K = 0; K < ie; K++) {
                const se = K * U - W;
                for (let j = 0; j < Y; j++) {
                    const re = j * I - $;
                    V[v] = re * A,
                    V[x] = se * M,
                    V[w] = H,
                    d.push(V.x, V.y, V.z),
                    V[v] = 0,
                    V[x] = 0,
                    V[w] = P > 0 ? 1 : -1,
                    f.push(V.x, V.y, V.z),
                    h.push(j / L),
                    h.push(1 - K / C),
                    ae += 1
                }
            }
            for (let K = 0; K < C; K++)
                for (let se = 0; se < L; se++) {
                    const j = p + se + Y * K
                      , re = p + se + Y * (K + 1)
                      , xe = p + (se + 1) + Y * (K + 1)
                      , Ae = p + (se + 1) + Y * K;
                    l.push(j, re, Ae),
                    l.push(re, xe, Ae),
                    F += 6
                }
            a.addGroup(m, F, B),
            m += F,
            p += ae
        }
    }
    static fromJSON(e) {
        return new ya(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)
    }
}
function au(n) {
    const e = {};
    for (const t in n) {
        e[t] = {};
        for (const i in n[t]) {
            const r = n[t][i];
            r && (r.isColor || r.isMatrix3 || r.isMatrix4 || r.isVector2 || r.isVector3 || r.isVector4 || r.isTexture || r.isQuaternion) ? e[t][i] = r.clone() : Array.isArray(r) ? e[t][i] = r.slice() : e[t][i] = r
        }
    }
    return e
}
function gi(n) {
    const e = {};
    for (let t = 0; t < n.length; t++) {
        const i = au(n[t]);
        for (const r in i)
            e[r] = i[r]
    }
    return e
}
function oU(n) {
    const e = [];
    for (let t = 0; t < n.length; t++)
        e.push(n[t].clone());
    return e
}
function lL(n) {
    return n.getRenderTarget() === null && n.outputEncoding === Et ? Hr : ou
}
const cL = {
    clone: au,
    merge: gi
};
var aU = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`
  , lU = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class Ms extends Bn {
    constructor(e) {
        super(),
        this.isShaderMaterial = !0,
        this.type = "ShaderMaterial",
        this.defines = {},
        this.uniforms = {},
        this.uniformsGroups = [],
        this.vertexShader = aU,
        this.fragmentShader = lU,
        this.linewidth = 1,
        this.wireframe = !1,
        this.wireframeLinewidth = 1,
        this.fog = !1,
        this.lights = !1,
        this.clipping = !1,
        this.extensions = {
            derivatives: !1,
            fragDepth: !1,
            drawBuffers: !1,
            shaderTextureLOD: !1
        },
        this.defaultAttributeValues = {
            color: [1, 1, 1],
            uv: [0, 0],
            uv2: [0, 0]
        },
        this.index0AttributeName = void 0,
        this.uniformsNeedUpdate = !1,
        this.glslVersion = null,
        e !== void 0 && this.setValues(e)
    }
    copy(e) {
        return super.copy(e),
        this.fragmentShader = e.fragmentShader,
        this.vertexShader = e.vertexShader,
        this.uniforms = au(e.uniforms),
        this.uniformsGroups = oU(e.uniformsGroups),
        this.defines = Object.assign({}, e.defines),
        this.wireframe = e.wireframe,
        this.wireframeLinewidth = e.wireframeLinewidth,
        this.fog = e.fog,
        this.lights = e.lights,
        this.clipping = e.clipping,
        this.extensions = Object.assign({}, e.extensions),
        this.glslVersion = e.glslVersion,
        this
    }
    toJSON(e) {
        const t = super.toJSON(e);
        t.glslVersion = this.glslVersion,
        t.uniforms = {};
        for (const r in this.uniforms) {
            const o = this.uniforms[r].value;
            o && o.isTexture ? t.uniforms[r] = {
                type: "t",
                value: o.toJSON(e).uuid
            } : o && o.isColor ? t.uniforms[r] = {
                type: "c",
                value: o.getHex()
            } : o && o.isVector2 ? t.uniforms[r] = {
                type: "v2",
                value: o.toArray()
            } : o && o.isVector3 ? t.uniforms[r] = {
                type: "v3",
                value: o.toArray()
            } : o && o.isVector4 ? t.uniforms[r] = {
                type: "v4",
                value: o.toArray()
            } : o && o.isMatrix3 ? t.uniforms[r] = {
                type: "m3",
                value: o.toArray()
            } : o && o.isMatrix4 ? t.uniforms[r] = {
                type: "m4",
                value: o.toArray()
            } : t.uniforms[r] = {
                value: o
            }
        }
        Object.keys(this.defines).length > 0 && (t.defines = this.defines),
        t.vertexShader = this.vertexShader,
        t.fragmentShader = this.fragmentShader;
        const i = {};
        for (const r in this.extensions)
            this.extensions[r] === !0 && (i[r] = !0);
        return Object.keys(i).length > 0 && (t.extensions = i),
        t
    }
}
class qf extends Rt {
    constructor() {
        super(),
        this.isCamera = !0,
        this.type = "Camera",
        this.matrixWorldInverse = new at,
        this.projectionMatrix = new at,
        this.projectionMatrixInverse = new at
    }
    copy(e, t) {
        return super.copy(e, t),
        this.matrixWorldInverse.copy(e.matrixWorldInverse),
        this.projectionMatrix.copy(e.projectionMatrix),
        this.projectionMatrixInverse.copy(e.projectionMatrixInverse),
        this
    }
    getWorldDirection(e) {
        this.updateWorldMatrix(!0, !1);
        const t = this.matrixWorld.elements;
        return e.set(-t[8], -t[9], -t[10]).normalize()
    }
    updateMatrixWorld(e) {
        super.updateMatrixWorld(e),
        this.matrixWorldInverse.copy(this.matrixWorld).invert()
    }
    updateWorldMatrix(e, t) {
        super.updateWorldMatrix(e, t),
        this.matrixWorldInverse.copy(this.matrixWorld).invert()
    }
    clone() {
        return new this.constructor().copy(this)
    }
}
class jt extends qf {
    constructor(e=50, t=1, i=.1, r=2e3) {
        super(),
        this.isPerspectiveCamera = !0,
        this.type = "PerspectiveCamera",
        this.fov = e,
        this.zoom = 1,
        this.near = i,
        this.far = r,
        this.focus = 10,
        this.aspect = t,
        this.view = null,
        this.filmGauge = 35,
        this.filmOffset = 0,
        this.updateProjectionMatrix()
    }
    copy(e, t) {
        return super.copy(e, t),
        this.fov = e.fov,
        this.zoom = e.zoom,
        this.near = e.near,
        this.far = e.far,
        this.focus = e.focus,
        this.aspect = e.aspect,
        this.view = e.view === null ? null : Object.assign({}, e.view),
        this.filmGauge = e.filmGauge,
        this.filmOffset = e.filmOffset,
        this
    }
    setFocalLength(e) {
        const t = .5 * this.getFilmHeight() / e;
        this.fov = Cf * 2 * Math.atan(t),
        this.updateProjectionMatrix()
    }
    getFocalLength() {
        const e = Math.tan(fl * .5 * this.fov);
        return .5 * this.getFilmHeight() / e
    }
    getEffectiveFOV() {
        return Cf * 2 * Math.atan(Math.tan(fl * .5 * this.fov) / this.zoom)
    }
    getFilmWidth() {
        return this.filmGauge * Math.min(this.aspect, 1)
    }
    getFilmHeight() {
        return this.filmGauge / Math.max(this.aspect, 1)
    }
    setViewOffset(e, t, i, r, s, o) {
        this.aspect = e / t,
        this.view === null && (this.view = {
            enabled: !0,
            fullWidth: 1,
            fullHeight: 1,
            offsetX: 0,
            offsetY: 0,
            width: 1,
            height: 1
        }),
        this.view.enabled = !0,
        this.view.fullWidth = e,
        this.view.fullHeight = t,
        this.view.offsetX = i,
        this.view.offsetY = r,
        this.view.width = s,
        this.view.height = o,
        this.updateProjectionMatrix()
    }
    clearViewOffset() {
        this.view !== null && (this.view.enabled = !1),
        this.updateProjectionMatrix()
    }
    updateProjectionMatrix() {
        const e = this.near;
        let t = e * Math.tan(fl * .5 * this.fov) / this.zoom
          , i = 2 * t
          , r = this.aspect * i
          , s = -.5 * r;
        const o = this.view;
        if (this.view !== null && this.view.enabled) {
            const l = o.fullWidth
              , d = o.fullHeight;
            s += o.offsetX * r / l,
            t -= o.offsetY * i / d,
            r *= o.width / l,
            i *= o.height / d
        }
        const a = this.filmOffset;
        a !== 0 && (s += e * a / this.getFilmWidth()),
        this.projectionMatrix.makePerspective(s, s + r, t, t - i, e, this.far),
        this.projectionMatrixInverse.copy(this.projectionMatrix).invert()
    }
    toJSON(e) {
        const t = super.toJSON(e);
        return t.object.fov = this.fov,
        t.object.zoom = this.zoom,
        t.object.near = this.near,
        t.object.far = this.far,
        t.object.focus = this.focus,
        t.object.aspect = this.aspect,
        this.view !== null && (t.object.view = Object.assign({}, this.view)),
        t.object.filmGauge = this.filmGauge,
        t.object.filmOffset = this.filmOffset,
        t
    }
}
const cc = -90
  , uc = 1;
class l_ extends Rt {
    constructor(e, t, i) {
        super(),
        this.type = "CubeCamera",
        this.renderTarget = i;
        const r = new jt(cc,uc,e,t);
        r.layers = this.layers,
        r.up.set(0, 1, 0),
        r.lookAt(1, 0, 0),
        this.add(r);
        const s = new jt(cc,uc,e,t);
        s.layers = this.layers,
        s.up.set(0, 1, 0),
        s.lookAt(-1, 0, 0),
        this.add(s);
        const o = new jt(cc,uc,e,t);
        o.layers = this.layers,
        o.up.set(0, 0, -1),
        o.lookAt(0, 1, 0),
        this.add(o);
        const a = new jt(cc,uc,e,t);
        a.layers = this.layers,
        a.up.set(0, 0, 1),
        a.lookAt(0, -1, 0),
        this.add(a);
        const l = new jt(cc,uc,e,t);
        l.layers = this.layers,
        l.up.set(0, 1, 0),
        l.lookAt(0, 0, 1),
        this.add(l);
        const d = new jt(cc,uc,e,t);
        d.layers = this.layers,
        d.up.set(0, 1, 0),
        d.lookAt(0, 0, -1),
        this.add(d)
    }
    update(e, t) {
        this.parent === null && this.updateMatrixWorld();
        const i = this.renderTarget
          , [r,s,o,a,l,d] = this.children
          , f = e.getRenderTarget()
          , h = e.toneMapping
          , p = e.xr.enabled;
        e.toneMapping = Yr,
        e.xr.enabled = !1;
        const m = i.texture.generateMipmaps;
        i.texture.generateMipmaps = !1,
        e.setRenderTarget(i, 0),
        e.render(t, r),
        e.setRenderTarget(i, 1),
        e.render(t, s),
        e.setRenderTarget(i, 2),
        e.render(t, o),
        e.setRenderTarget(i, 3),
        e.render(t, a),
        e.setRenderTarget(i, 4),
        e.render(t, l),
        i.texture.generateMipmaps = m,
        e.setRenderTarget(i, 5),
        e.render(t, d),
        e.setRenderTarget(f),
        e.toneMapping = h,
        e.xr.enabled = p,
        i.texture.needsPMREMUpdate = !0
    }
}
class Zf extends tn {
    constructor(e, t, i, r, s, o, a, l, d, f) {
        e = e !== void 0 ? e : [],
        t = t !== void 0 ? t : sa,
        super(e, t, i, r, s, o, a, l, d, f),
        this.isCubeTexture = !0,
        this.flipY = !1
    }
    get images() {
        return this.image
    }
    set images(e) {
        this.image = e
    }
}
class c_ extends Zr {
    constructor(e=1, t={}) {
        super(e, e, t),
        this.isWebGLCubeRenderTarget = !0;
        const i = {
            width: e,
            height: e,
            depth: 1
        }
          , r = [i, i, i, i, i, i];
        this.texture = new Zf(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),
        this.texture.isRenderTargetTexture = !0,
        this.texture.generateMipmaps = t.generateMipmaps !== void 0 ? t.generateMipmaps : !1,
        this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : on
    }
    fromEquirectangularTexture(e, t) {
        this.texture.type = t.type,
        this.texture.encoding = t.encoding,
        this.texture.generateMipmaps = t.generateMipmaps,
        this.texture.minFilter = t.minFilter,
        this.texture.magFilter = t.magFilter;
        const i = {
            uniforms: {
                tEquirect: {
                    value: null
                }
            },
            vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,
            fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`
        }
          , r = new ya(5,5,5)
          , s = new Ms({
            name: "CubemapFromEquirect",
            uniforms: au(i.uniforms),
            vertexShader: i.vertexShader,
            fragmentShader: i.fragmentShader,
            side: Oi,
            blending: eo
        });
        s.uniforms.tEquirect.value = t;
        const o = new Wn(r,s)
          , a = t.minFilter;
        return t.minFilter === _s && (t.minFilter = on),
        new l_(1,10,this).update(e, o),
        t.minFilter = a,
        o.geometry.dispose(),
        o.material.dispose(),
        this
    }
    clear(e, t, i, r) {
        const s = e.getRenderTarget();
        for (let o = 0; o < 6; o++)
            e.setRenderTarget(this, o),
            e.clear(t, i, r);
        e.setRenderTarget(s)
    }
}
const Zv = new D
  , cU = new D
  , uU = new xi;
class Fo {
    constructor(e=new D(1,0,0), t=0) {
        this.isPlane = !0,
        this.normal = e,
        this.constant = t
    }
    set(e, t) {
        return this.normal.copy(e),
        this.constant = t,
        this
    }
    setComponents(e, t, i, r) {
        return this.normal.set(e, t, i),
        this.constant = r,
        this
    }
    setFromNormalAndCoplanarPoint(e, t) {
        return this.normal.copy(e),
        this.constant = -t.dot(this.normal),
        this
    }
    setFromCoplanarPoints(e, t, i) {
        const r = Zv.subVectors(i, t).cross(cU.subVectors(e, t)).normalize();
        return this.setFromNormalAndCoplanarPoint(r, e),
        this
    }
    copy(e) {
        return this.normal.copy(e.normal),
        this.constant = e.constant,
        this
    }
    normalize() {
        const e = 1 / this.normal.length();
        return this.normal.multiplyScalar(e),
        this.constant *= e,
        this
    }
    negate() {
        return this.constant *= -1,
        this.normal.negate(),
        this
    }
    distanceToPoint(e) {
        return this.normal.dot(e) + this.constant
    }
    distanceToSphere(e) {
        return this.distanceToPoint(e.center) - e.radius
    }
    projectPoint(e, t) {
        return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)
    }
    intersectLine(e, t) {
        const i = e.delta(Zv)
          , r = this.normal.dot(i);
        if (r === 0)
            return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
        const s = -(e.start.dot(this.normal) + this.constant) / r;
        return s < 0 || s > 1 ? null : t.copy(i).multiplyScalar(s).add(e.start)
    }
    intersectsLine(e) {
        const t = this.distanceToPoint(e.start)
          , i = this.distanceToPoint(e.end);
        return t < 0 && i > 0 || i < 0 && t > 0
    }
    intersectsBox(e) {
        return e.intersectsPlane(this)
    }
    intersectsSphere(e) {
        return e.intersectsPlane(this)
    }
    coplanarPoint(e) {
        return e.copy(this.normal).multiplyScalar(-this.constant)
    }
    applyMatrix4(e, t) {
        const i = t || uU.getNormalMatrix(e)
          , r = this.coplanarPoint(Zv).applyMatrix4(e)
          , s = this.normal.applyMatrix3(i).normalize();
        return this.constant = -r.dot(s),
        this
    }
    translate(e) {
        return this.constant -= e.dot(this.normal),
        this
    }
    equals(e) {
        return e.normal.equals(this.normal) && e.constant === this.constant
    }
    clone() {
        return new this.constructor().copy(this)
    }
}
const dc = new ga
  , tm = new D;
class E0 {
    constructor(e=new Fo, t=new Fo, i=new Fo, r=new Fo, s=new Fo, o=new Fo) {
        this.planes = [e, t, i, r, s, o]
    }
    set(e, t, i, r, s, o) {
        const a = this.planes;
        return a[0].copy(e),
        a[1].copy(t),
        a[2].copy(i),
        a[3].copy(r),
        a[4].copy(s),
        a[5].copy(o),
        this
    }
    copy(e) {
        const t = this.planes;
        for (let i = 0; i < 6; i++)
            t[i].copy(e.planes[i]);
        return this
    }
    setFromProjectionMatrix(e) {
        const t = this.planes
          , i = e.elements
          , r = i[0]
          , s = i[1]
          , o = i[2]
          , a = i[3]
          , l = i[4]
          , d = i[5]
          , f = i[6]
          , h = i[7]
          , p = i[8]
          , m = i[9]
          , y = i[10]
          , v = i[11]
          , x = i[12]
          , w = i[13]
          , A = i[14]
          , M = i[15];
        return t[0].setComponents(a - r, h - l, v - p, M - x).normalize(),
        t[1].setComponents(a + r, h + l, v + p, M + x).normalize(),
        t[2].setComponents(a + s, h + d, v + m, M + w).normalize(),
        t[3].setComponents(a - s, h - d, v - m, M - w).normalize(),
        t[4].setComponents(a - o, h - f, v - y, M - A).normalize(),
        t[5].setComponents(a + o, h + f, v + y, M + A).normalize(),
        this
    }
    intersectsObject(e) {
        const t = e.geometry;
        return t.boundingSphere === null && t.computeBoundingSphere(),
        dc.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),
        this.intersectsSphere(dc)
    }
    intersectsSprite(e) {
        return dc.center.set(0, 0, 0),
        dc.radius = .7071067811865476,
        dc.applyMatrix4(e.matrixWorld),
        this.intersectsSphere(dc)
    }
    intersectsSphere(e) {
        const t = this.planes
          , i = e.center
          , r = -e.radius;
        for (let s = 0; s < 6; s++)
            if (t[s].distanceToPoint(i) < r)
                return !1;
        return !0
    }
    intersectsBox(e) {
        const t = this.planes;
        for (let i = 0; i < 6; i++) {
            const r = t[i];
            if (tm.x = r.normal.x > 0 ? e.max.x : e.min.x,
            tm.y = r.normal.y > 0 ? e.max.y : e.min.y,
            tm.z = r.normal.z > 0 ? e.max.z : e.min.z,
            r.distanceToPoint(tm) < 0)
                return !1
        }
        return !0
    }
    containsPoint(e) {
        const t = this.planes;
        for (let i = 0; i < 6; i++)
            if (t[i].distanceToPoint(e) < 0)
                return !1;
        return !0
    }
    clone() {
        return new this.constructor().copy(this)
    }
}
function uL() {
    let n = null
      , e = !1
      , t = null
      , i = null;
    function r(s, o) {
        t(s, o),
        i = n.requestAnimationFrame(r)
    }
    return {
        start: function() {
            e !== !0 && t !== null && (i = n.requestAnimationFrame(r),
            e = !0)
        },
        stop: function() {
            n.cancelAnimationFrame(i),
            e = !1
        },
        setAnimationLoop: function(s) {
            t = s
        },
        setContext: function(s) {
            n = s
        }
    }
}
function dU(n, e) {
    const t = e.isWebGL2
      , i = new WeakMap;
    function r(d, f) {
        const h = d.array
          , p = d.usage
          , m = n.createBuffer();
        n.bindBuffer(f, m),
        n.bufferData(f, h, p),
        d.onUploadCallback();
        let y;
        if (h instanceof Float32Array)
            y = 5126;
        else if (h instanceof Uint16Array)
            if (d.isFloat16BufferAttribute)
                if (t)
                    y = 5131;
                else
                    throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");
            else
                y = 5123;
        else if (h instanceof Int16Array)
            y = 5122;
        else if (h instanceof Uint32Array)
            y = 5125;
        else if (h instanceof Int32Array)
            y = 5124;
        else if (h instanceof Int8Array)
            y = 5120;
        else if (h instanceof Uint8Array)
            y = 5121;
        else if (h instanceof Uint8ClampedArray)
            y = 5121;
        else
            throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + h);
        return {
            buffer: m,
            type: y,
            bytesPerElement: h.BYTES_PER_ELEMENT,
            version: d.version
        }
    }
    function s(d, f, h) {
        const p = f.array
          , m = f.updateRange;
        n.bindBuffer(h, d),
        m.count === -1 ? n.bufferSubData(h, 0, p) : (t ? n.bufferSubData(h, m.offset * p.BYTES_PER_ELEMENT, p, m.offset, m.count) : n.bufferSubData(h, m.offset * p.BYTES_PER_ELEMENT, p.subarray(m.offset, m.offset + m.count)),
        m.count = -1),
        f.onUploadCallback()
    }
    function o(d) {
        return d.isInterleavedBufferAttribute && (d = d.data),
        i.get(d)
    }
    function a(d) {
        d.isInterleavedBufferAttribute && (d = d.data);
        const f = i.get(d);
        f && (n.deleteBuffer(f.buffer),
        i.delete(d))
    }
    function l(d, f) {
        if (d.isGLBufferAttribute) {
            const p = i.get(d);
            (!p || p.version < d.version) && i.set(d, {
                buffer: d.buffer,
                type: d.type,
                bytesPerElement: d.elementSize,
                version: d.version
            });
            return
        }
        d.isInterleavedBufferAttribute && (d = d.data);
        const h = i.get(d);
        h === void 0 ? i.set(d, r(d, f)) : h.version < d.version && (s(h.buffer, d, f),
        h.version = d.version)
    }
    return {
        get: o,
        remove: a,
        update: l
    }
}
class _u extends dt {
    constructor(e=1, t=1, i=1, r=1) {
        super(),
        this.type = "PlaneGeometry",
        this.parameters = {
            width: e,
            height: t,
            widthSegments: i,
            heightSegments: r
        };
        const s = e / 2
          , o = t / 2
          , a = Math.floor(i)
          , l = Math.floor(r)
          , d = a + 1
          , f = l + 1
          , h = e / a
          , p = t / l
          , m = []
          , y = []
          , v = []
          , x = [];
        for (let w = 0; w < f; w++) {
            const A = w * p - o;
            for (let M = 0; M < d; M++) {
                const S = M * h - s;
                y.push(S, -A, 0),
                v.push(0, 0, 1),
                x.push(M / a),
                x.push(1 - w / l)
            }
        }
        for (let w = 0; w < l; w++)
            for (let A = 0; A < a; A++) {
                const M = A + d * w
                  , S = A + d * (w + 1)
                  , E = A + 1 + d * (w + 1)
                  , P = A + 1 + d * w;
                m.push(M, S, P),
                m.push(S, E, P)
            }
        this.setIndex(m),
        this.setAttribute("position", new Je(y,3)),
        this.setAttribute("normal", new Je(v,3)),
        this.setAttribute("uv", new Je(x,2))
    }
    static fromJSON(e) {
        return new _u(e.width,e.height,e.widthSegments,e.heightSegments)
    }
}
var fU = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`
  , hU = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`
  , pU = `#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`
  , mU = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`
  , gU = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`
  , yU = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`
  , vU = "vec3 transformed = vec3( position );"
  , xU = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`
  , wU = `vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`
  , AU = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`
  , _U = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`
  , MU = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`
  , SU = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`
  , bU = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`
  , CU = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`
  , EU = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`
  , TU = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`
  , PU = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`
  , BU = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`
  , LU = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`
  , RU = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`
  , IU = `vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`
  , DU = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`
  , kU = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`
  , FU = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`
  , NU = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`
  , OU = "gl_FragColor = linearToOutputTexel( gl_FragColor );"
  , UU = `vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`
  , zU = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`
  , GU = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`
  , HU = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`
  , VU = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`
  , WU = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`
  , jU = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`
  , JU = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`
  , XU = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`
  , KU = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`
  , YU = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`
  , QU = `#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`
  , qU = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`
  , ZU = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`
  , $U = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`
  , ez = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`
  , tz = `#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`
  , nz = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`
  , iz = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`
  , rz = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`
  , sz = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`
  , oz = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`
  , az = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`
  , lz = `
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`
  , cz = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`
  , uz = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`
  , dz = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`
  , fz = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`
  , hz = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`
  , pz = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`
  , mz = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`
  , gz = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`
  , yz = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`
  , vz = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`
  , xz = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`
  , wz = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`
  , Az = `#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`
  , _z = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`
  , Mz = `#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`
  , Sz = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`
  , bz = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`
  , Cz = `#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`
  , Ez = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`
  , Tz = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`
  , Pz = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`
  , Bz = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`
  , Lz = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`
  , Rz = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`
  , Iz = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`
  , Dz = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`
  , kz = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`
  , Fz = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`
  , Nz = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`
  , Oz = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`
  , Uz = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`
  , zz = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`
  , Gz = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`
  , Hz = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`
  , Vz = `#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`
  , Wz = `#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`
  , jz = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`
  , Jz = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`
  , Xz = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`
  , Kz = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`
  , Yz = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`
  , Qz = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`
  , qz = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`
  , Zz = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`
  , $z = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`
  , e5 = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`
  , t5 = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`
  , n5 = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`
  , i5 = `#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`
  , r5 = `#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`
  , s5 = `#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`
  , o5 = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`
  , a5 = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`
  , l5 = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`
  , c5 = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const u5 = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`
  , d5 = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`
  , f5 = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`
  , h5 = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`
  , p5 = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`
  , m5 = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`
  , g5 = `#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`
  , y5 = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`
  , v5 = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`
  , x5 = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`
  , w5 = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`
  , A5 = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`
  , _5 = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`
  , M5 = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`
  , S5 = `#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`
  , b5 = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`
  , C5 = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`
  , E5 = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
