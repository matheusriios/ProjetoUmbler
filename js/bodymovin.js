/**
 * Combined by jsDelivr.
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
/*! jQuery v3.1.1 | (c) jQuery Foundation | jquery.org/license */
! function(a, b) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
    "use strict";
    var c = [],
        d = a.document,
        e = Object.getPrototypeOf,
        f = c.slice,
        g = c.concat,
        h = c.push,
        i = c.indexOf,
        j = {},
        k = j.toString,
        l = j.hasOwnProperty,
        m = l.toString,
        n = m.call(Object),
        o = {};

    function p(a, b) {
        b = b || d;
        var c = b.createElement("script");
        c.text = a, b.head.appendChild(c).parentNode.removeChild(c)
    }
    var q = "3.1.1",
        r = function(a, b) {
            return new r.fn.init(a, b)
        },
        s = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        t = /^-ms-/,
        u = /-([a-z])/g,
        v = function(a, b) {
            return b.toUpperCase()
        };
    r.fn = r.prototype = {
        jquery: q,
        constructor: r,
        length: 0,
        toArray: function() {
            return f.call(this)
        },
        get: function(a) {
            return null == a ? f.call(this) : a < 0 ? this[a + this.length] : this[a]
        },
        pushStack: function(a) {
            var b = r.merge(this.constructor(), a);
            return b.prevObject = this, b
        },
        each: function(a) {
            return r.each(this, a)
        },
        map: function(a) {
            return this.pushStack(r.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(f.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length,
                c = +a + (a < 0 ? b : 0);
            return this.pushStack(c >= 0 && c < b ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: h,
        sort: c.sort,
        splice: c.splice
    }, r.extend = r.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || r.isFunction(g) || (g = {}), h === i && (g = this, h--); h < i; h++)
            if (null != (a = arguments[h]))
                for (b in a) c = g[b], d = a[b], g !== d && (j && d && (r.isPlainObject(d) || (e = r.isArray(d))) ? (e ? (e = !1, f = c && r.isArray(c) ? c : []) : f = c && r.isPlainObject(c) ? c : {}, g[b] = r.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g
    }, r.extend({
        expando: "jQuery" + (q + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === r.type(a)
        },
        isArray: Array.isArray,
        isWindow: function(a) {
            return null != a && a === a.window
        },
        isNumeric: function(a) {
            var b = r.type(a);
            return ("number" === b || "string" === b) && !isNaN(a - parseFloat(a))
        },
        isPlainObject: function(a) {
            var b, c;
            return !(!a || "[object Object]" !== k.call(a)) && (!(b = e(a)) || (c = l.call(b, "constructor") && b.constructor, "function" == typeof c && m.call(c) === n))
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? j[k.call(a)] || "object" : typeof a
        },
        globalEval: function(a) {
            p(a)
        },
        camelCase: function(a) {
            return a.replace(t, "ms-").replace(u, v)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b) {
            var c, d = 0;
            if (w(a)) {
                for (c = a.length; d < c; d++)
                    if (b.call(a[d], d, a[d]) === !1) break
            } else
                for (d in a)
                    if (b.call(a[d], d, a[d]) === !1) break; return a
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(s, "")
        },
        makeArray: function(a, b) {
            var c = b || [];
            return null != a && (w(Object(a)) ? r.merge(c, "string" == typeof a ? [a] : a) : h.call(c, a)), c
        },
        inArray: function(a, b, c) {
            return null == b ? -1 : i.call(b, a, c)
        },
        merge: function(a, b) {
            for (var c = +b.length, d = 0, e = a.length; d < c; d++) a[e++] = b[d];
            return a.length = e, a
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; f < g; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e
        },
        map: function(a, b, c) {
            var d, e, f = 0,
                h = [];
            if (w(a))
                for (d = a.length; f < d; f++) e = b(a[f], f, c), null != e && h.push(e);
            else
                for (f in a) e = b(a[f], f, c), null != e && h.push(e);
            return g.apply([], h)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, d, e;
            if ("string" == typeof b && (c = a[b], b = a, a = c), r.isFunction(a)) return d = f.call(arguments, 2), e = function() {
                return a.apply(b || this, d.concat(f.call(arguments)))
            }, e.guid = a.guid = a.guid || r.guid++, e
        },
        now: Date.now,
        support: o
    }), "function" == typeof Symbol && (r.fn[Symbol.iterator] = c[Symbol.iterator]), r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) {
        j["[object " + b + "]"] = b.toLowerCase()
    });

    function w(a) {
        var b = !!a && "length" in a && a.length,
            c = r.type(a);
        return "function" !== c && !r.isWindow(a) && ("array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a)
    }
    var x = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date,
            v = a.document,
            w = 0,
            x = 0,
            y = ha(),
            z = ha(),
            A = ha(),
            B = function(a, b) {
                return a === b && (l = !0), 0
            },
            C = {}.hasOwnProperty,
            D = [],
            E = D.pop,
            F = D.push,
            G = D.push,
            H = D.slice,
            I = function(a, b) {
                for (var c = 0, d = a.length; c < d; c++)
                    if (a[c] === b) return c;
                return -1
            },
            J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            K = "[\\x20\\t\\r\\n\\f]",
            L = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            M = "\\[" + K + "*(" + L + ")(?:" + K + "*([*^$|!~]?=)" + K + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + L + "))|)" + K + "*\\]",
            N = ":(" + L + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
            O = new RegExp(K + "+", "g"),
            P = new RegExp("^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$", "g"),
            Q = new RegExp("^" + K + "*," + K + "*"),
            R = new RegExp("^" + K + "*([>+~]|" + K + ")" + K + "*"),
            S = new RegExp("=" + K + "*([^\\]'\"]*?)" + K + "*\\]", "g"),
            T = new RegExp(N),
            U = new RegExp("^" + L + "$"),
            V = {
                ID: new RegExp("^#(" + L + ")"),
                CLASS: new RegExp("^\\.(" + L + ")"),
                TAG: new RegExp("^(" + L + "|[*])"),
                ATTR: new RegExp("^" + M),
                PSEUDO: new RegExp("^" + N),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + K + "*(even|odd|(([+-]|)(\\d*)n|)" + K + "*(?:([+-]|)" + K + "*(\\d+)|))" + K + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + J + ")$", "i"),
                needsContext: new RegExp("^" + K + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + K + "*((?:-\\d)?\\d*)" + K + "*\\)|)(?=[^-]|$)", "i")
            },
            W = /^(?:input|select|textarea|button)$/i,
            X = /^h\d$/i,
            Y = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            $ = /[+~]/,
            _ = new RegExp("\\\\([\\da-f]{1,6}" + K + "?|(" + K + ")|.)", "ig"),
            aa = function(a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : d < 0 ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            },
            ba = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ca = function(a, b) {
                return b ? "\0" === a ? "\ufffd" : a.slice(0, -1) + "\\" + a.charCodeAt(a.length - 1).toString(16) + " " : "\\" + a
            },
            da = function() {
                m()
            },
            ea = ta(function(a) {
                return a.disabled === !0 && ("form" in a || "label" in a)
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            G.apply(D = H.call(v.childNodes), v.childNodes), D[v.childNodes.length].nodeType
        } catch (fa) {
            G = {
                apply: D.length ? function(a, b) {
                    F.apply(a, H.call(b))
                } : function(a, b) {
                    var c = a.length,
                        d = 0;
                    while (a[c++] = b[d++]);
                    a.length = c - 1
                }
            }
        }

        function ga(a, b, d, e) {
            var f, h, j, k, l, o, r, s = b && b.ownerDocument,
                w = b ? b.nodeType : 9;
            if (d = d || [], "string" != typeof a || !a || 1 !== w && 9 !== w && 11 !== w) return d;
            if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
                if (11 !== w && (l = Z.exec(a)))
                    if (f = l[1]) {
                        if (9 === w) {
                            if (!(j = b.getElementById(f))) return d;
                            if (j.id === f) return d.push(j), d
                        } else if (s && (j = s.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d
                    } else {
                        if (l[2]) return G.apply(d, b.getElementsByTagName(a)), d;
                        if ((f = l[3]) && c.getElementsByClassName && b.getElementsByClassName) return G.apply(d, b.getElementsByClassName(f)), d
                    }
                if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
                    if (1 !== w) s = b, r = a;
                    else if ("object" !== b.nodeName.toLowerCase()) {
                        (k = b.getAttribute("id")) ? k = k.replace(ba, ca): b.setAttribute("id", k = u), o = g(a), h = o.length;
                        while (h--) o[h] = "#" + k + " " + sa(o[h]);
                        r = o.join(","), s = $.test(a) && qa(b.parentNode) || b
                    }
                    if (r) try {
                        return G.apply(d, s.querySelectorAll(r)), d
                    } catch (x) {} finally {
                        k === u && b.removeAttribute("id")
                    }
                }
            }
            return i(a.replace(P, "$1"), b, d, e)
        }

        function ha() {
            var a = [];

            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
            }
            return b
        }

        function ia(a) {
            return a[u] = !0, a
        }

        function ja(a) {
            var b = n.createElement("fieldset");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function ka(a, b) {
            var c = a.split("|"),
                e = c.length;
            while (e--) d.attrHandle[c[e]] = b
        }

        function la(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && a.sourceIndex - b.sourceIndex;
            if (d) return d;
            if (c)
                while (c = c.nextSibling)
                    if (c === b) return -1;
            return a ? 1 : -1
        }

        function ma(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function na(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function oa(a) {
            return function(b) {
                return "form" in b ? b.parentNode && b.disabled === !1 ? "label" in b ? "label" in b.parentNode ? b.parentNode.disabled === a : b.disabled === a : b.isDisabled === a || b.isDisabled !== !a && ea(b) === a : b.disabled === a : "label" in b && b.disabled === a
            }
        }

        function pa(a) {
            return ia(function(b) {
                return b = +b, ia(function(c, d) {
                    var e, f = a([], c.length, b),
                        g = f.length;
                    while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function qa(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }
        c = ga.support = {}, f = ga.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return !!b && "HTML" !== b.nodeName
        }, m = ga.setDocument = function(a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), v !== n && (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ja(function(a) {
                return a.className = "i", !a.getAttribute("className")
            }), c.getElementsByTagName = ja(function(a) {
                return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length
            }), c.getElementsByClassName = Y.test(n.getElementsByClassName), c.getById = ja(function(a) {
                return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length
            }), c.getById ? (d.filter.ID = function(a) {
                var b = a.replace(_, aa);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }, d.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c ? [c] : []
                }
            }) : (d.filter.ID = function(a) {
                var b = a.replace(_, aa);
                return function(a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }, d.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c, d, e, f = b.getElementById(a);
                    if (f) {
                        if (c = f.getAttributeNode("id"), c && c.value === a) return [f];
                        e = b.getElementsByName(a), d = 0;
                        while (f = e[d++])
                            if (c = f.getAttributeNode("id"), c && c.value === a) return [f]
                    }
                    return []
                }
            }), d.find.TAG = c.getElementsByTagName ? function(a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
            } : function(a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++]) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, d.find.CLASS = c.getElementsByClassName && function(a, b) {
                if ("undefined" != typeof b.getElementsByClassName && p) return b.getElementsByClassName(a)
            }, r = [], q = [], (c.qsa = Y.test(n.querySelectorAll)) && (ja(function(a) {
                o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + K + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + K + "*(?:value|" + J + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
            }), ja(function(a) {
                a.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var b = n.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + K + "*[*^$|!~]?="), 2 !== a.querySelectorAll(":enabled").length && q.push(":enabled", ":disabled"), o.appendChild(a).disabled = !0, 2 !== a.querySelectorAll(":disabled").length && q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
            })), (c.matchesSelector = Y.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function(a) {
                c.disconnectedMatch = s.call(a, "*"), s.call(a, "[s!='']:x"), r.push("!=", N)
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Y.test(o.compareDocumentPosition), t = b || Y.test(o.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function(a, b) {
                if (b)
                    while (b = b.parentNode)
                        if (b === a) return !0;
                return !1
            }, B = b ? function(a, b) {
                if (a === b) return l = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? I(k, a) - I(k, b) : 0 : 4 & d ? -1 : 1)
            } : function(a, b) {
                if (a === b) return l = !0, 0;
                var c, d = 0,
                    e = a.parentNode,
                    f = b.parentNode,
                    g = [a],
                    h = [b];
                if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? I(k, a) - I(k, b) : 0;
                if (e === f) return la(a, b);
                c = a;
                while (c = c.parentNode) g.unshift(c);
                c = b;
                while (c = c.parentNode) h.unshift(c);
                while (g[d] === h[d]) d++;
                return d ? la(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0
            }, n) : n
        }, ga.matches = function(a, b) {
            return ga(a, null, null, b)
        }, ga.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(S, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
                var d = s.call(a, b);
                if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch (e) {}
            return ga(b, n, null, [a]).length > 0
        }, ga.contains = function(a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b)
        }, ga.attr = function(a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()],
                f = e && C.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, ga.escape = function(a) {
            return (a + "").replace(ba, ca)
        }, ga.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, ga.uniqueSort = function(a) {
            var b, d = [],
                e = 0,
                f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                while (b = a[f++]) b === a[f] && (e = d.push(f));
                while (e--) a.splice(d[e], 1)
            }
            return k = null, a
        }, e = ga.getText = function(a) {
            var b, c = "",
                d = 0,
                f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
                } else if (3 === f || 4 === f) return a.nodeValue
            } else
                while (b = a[d++]) c += e(b);
            return c
        }, d = ga.selectors = {
            cacheLength: 50,
            createPseudo: ia,
            match: V,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(_, aa), a[3] = (a[3] || a[4] || a[5] || "").replace(_, aa), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), a
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return V.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && T.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(_, aa).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + K + ")" + a + "(" + K + "|$)")) && y(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, b, c) {
                    return function(d) {
                        var e = ga.attr(d, a);
                        return null == e ? "!=" === b : !b || (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(O, " ") + " ").indexOf(c) > -1 : "|=" === b && (e === c || e.slice(0, c.length + 1) === c + "-"))
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h,
                            t = !1;
                        if (q) {
                            if (f) {
                                while (p) {
                                    m = b;
                                    while (m = m[p])
                                        if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                    if (1 === m.nodeType && ++t && m === b) {
                                        k[a] = [w, n, t];
                                        break
                                    }
                            } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1)
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                    if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
                            return t -= e, t === d || t % d === 0 && t / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function(a, c) {
                        var d, f = e(a, b),
                            g = f.length;
                        while (g--) d = I(a, f[g]), a[d] = !(c[d] = f[g])
                    }) : function(a) {
                        return e(a, 0, c)
                    }) : e
                }
            },
            pseudos: {
                not: ia(function(a) {
                    var b = [],
                        c = [],
                        d = h(a.replace(P, "$1"));
                    return d[u] ? ia(function(a, b, c, e) {
                        var f, g = d(a, null, e, []),
                            h = a.length;
                        while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, e, f) {
                        return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
                    }
                }),
                has: ia(function(a) {
                    return function(b) {
                        return ga(a, b).length > 0
                    }
                }),
                contains: ia(function(a) {
                    return a = a.replace(_, aa),
                        function(b) {
                            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                        }
                }),
                lang: ia(function(a) {
                    return U.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(_, aa).toLowerCase(),
                        function(b) {
                            var c;
                            do
                                if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
                            while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === o
                },
                focus: function(a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: oa(!1),
                disabled: oa(!0),
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6) return !1;
                    return !0
                },
                parent: function(a) {
                    return !d.pseudos.empty(a)
                },
                header: function(a) {
                    return X.test(a.nodeName)
                },
                input: function(a) {
                    return W.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: pa(function() {
                    return [0]
                }),
                last: pa(function(a, b) {
                    return [b - 1]
                }),
                eq: pa(function(a, b, c) {
                    return [c < 0 ? c + b : c]
                }),
                even: pa(function(a, b) {
                    for (var c = 0; c < b; c += 2) a.push(c);
                    return a
                }),
                odd: pa(function(a, b) {
                    for (var c = 1; c < b; c += 2) a.push(c);
                    return a
                }),
                lt: pa(function(a, b, c) {
                    for (var d = c < 0 ? c + b : c; --d >= 0;) a.push(d);
                    return a
                }),
                gt: pa(function(a, b, c) {
                    for (var d = c < 0 ? c + b : c; ++d < b;) a.push(d);
                    return a
                })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) d.pseudos[b] = ma(b);
        for (b in {
                submit: !0,
                reset: !0
            }) d.pseudos[b] = na(b);

        function ra() {}
        ra.prototype = d.filters = d.pseudos, d.setFilters = new ra, g = ga.tokenize = function(a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k) return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter;
            while (h) {
                c && !(e = Q.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = R.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(P, " ")
                }), h = h.slice(c.length));
                for (g in d.filter) !(e = V[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                    value: c,
                    type: g,
                    matches: e
                }), h = h.slice(c.length));
                if (!c) break
            }
            return b ? h.length : h ? ga.error(a) : z(a, i).slice(0)
        };

        function sa(a) {
            for (var b = 0, c = a.length, d = ""; b < c; b++) d += a[b].value;
            return d
        }

        function ta(a, b, c) {
            var d = b.dir,
                e = b.next,
                f = e || d,
                g = c && "parentNode" === f,
                h = x++;
            return b.first ? function(b, c, e) {
                while (b = b[d])
                    if (1 === b.nodeType || g) return a(b, c, e);
                return !1
            } : function(b, c, i) {
                var j, k, l, m = [w, h];
                if (i) {
                    while (b = b[d])
                        if ((1 === b.nodeType || g) && a(b, c, i)) return !0
                } else
                    while (b = b[d])
                        if (1 === b.nodeType || g)
                            if (l = b[u] || (b[u] = {}), k = l[b.uniqueID] || (l[b.uniqueID] = {}), e && e === b.nodeName.toLowerCase()) b = b[d] || b;
                            else {
                                if ((j = k[f]) && j[0] === w && j[1] === h) return m[2] = j[2];
                                if (k[f] = m, m[2] = a(b, c, i)) return !0
                            } return !1
            }
        }

        function ua(a) {
            return a.length > 1 ? function(b, c, d) {
                var e = a.length;
                while (e--)
                    if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function va(a, b, c) {
            for (var d = 0, e = b.length; d < e; d++) ga(a, b[d], c);
            return c
        }

        function wa(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; h < i; h++)(f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
            return g
        }

        function xa(a, b, c, d, e, f) {
            return d && !d[u] && (d = xa(d)), e && !e[u] && (e = xa(e, f)), ia(function(f, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    p = f || va(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : wa(p, m, a, h, i),
                    r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = wa(r, n), d(j, [], h, i), k = j.length;
                    while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--)(l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--)(l = r[k]) && (j = e ? I(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else r = wa(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : G.apply(g, r)
            })
        }

        function ya(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ta(function(a) {
                    return a === b
                }, h, !0), l = ta(function(a) {
                    return I(b, a) > -1
                }, h, !0), m = [function(a, c, d) {
                    var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                    return b = null, e
                }]; i < f; i++)
                if (c = d.relative[a[i].type]) m = [ta(ua(m), c)];
                else {
                    if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                        for (e = ++i; e < f; e++)
                            if (d.relative[a[e].type]) break;
                        return xa(i > 1 && ua(m), i > 1 && sa(a.slice(0, i - 1).concat({
                            value: " " === a[i - 2].type ? "*" : ""
                        })).replace(P, "$1"), c, i < e && ya(a.slice(i, e)), e < f && ya(a = a.slice(e)), e < f && sa(a))
                    }
                    m.push(c)
                }
            return ua(m)
        }

        function za(a, b) {
            var c = b.length > 0,
                e = a.length > 0,
                f = function(f, g, h, i, k) {
                    var l, o, q, r = 0,
                        s = "0",
                        t = f && [],
                        u = [],
                        v = j,
                        x = f || e && d.find.TAG("*", k),
                        y = w += null == v ? 1 : Math.random() || .1,
                        z = x.length;
                    for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
                        if (e && l) {
                            o = 0, g || l.ownerDocument === n || (m(l), h = !p);
                            while (q = a[o++])
                                if (q(l, g || n, h)) {
                                    i.push(l);
                                    break
                                }
                            k && (w = y)
                        }
                        c && ((l = !q && l) && r--, f && t.push(l))
                    }
                    if (r += s, c && s !== r) {
                        o = 0;
                        while (q = b[o++]) q(t, u, g, h);
                        if (f) {
                            if (r > 0)
                                while (s--) t[s] || u[s] || (u[s] = E.call(i));
                            u = wa(u)
                        }
                        G.apply(i, u), k && !f && u.length > 0 && r + b.length > 1 && ga.uniqueSort(i)
                    }
                    return k && (w = y, j = v), t
                };
            return c ? ia(f) : f
        }
        return h = ga.compile = function(a, b) {
            var c, d = [],
                e = [],
                f = A[a + " "];
            if (!f) {
                b || (b = g(a)), c = b.length;
                while (c--) f = ya(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, za(e, d)), f.selector = a
            }
            return f
        }, i = ga.select = function(a, b, c, e) {
            var f, i, j, k, l, m = "function" == typeof a && a,
                n = !e && g(a = m.selector || a);
            if (c = c || [], 1 === n.length) {
                if (i = n[0] = n[0].slice(0), i.length > 2 && "ID" === (j = i[0]).type && 9 === b.nodeType && p && d.relative[i[1].type]) {
                    if (b = (d.find.ID(j.matches[0].replace(_, aa), b) || [])[0], !b) return c;
                    m && (b = b.parentNode), a = a.slice(i.shift().value.length)
                }
                f = V.needsContext.test(a) ? 0 : i.length;
                while (f--) {
                    if (j = i[f], d.relative[k = j.type]) break;
                    if ((l = d.find[k]) && (e = l(j.matches[0].replace(_, aa), $.test(i[0].type) && qa(b.parentNode) || b))) {
                        if (i.splice(f, 1), a = e.length && sa(i), !a) return G.apply(c, e), c;
                        break
                    }
                }
            }
            return (m || h(a, n))(e, b, !p, c, !b || $.test(a) && qa(b.parentNode) || b), c
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function(a) {
            return 1 & a.compareDocumentPosition(n.createElement("fieldset"))
        }), ja(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || ka("type|href|height|width", function(a, b, c) {
            if (!c) return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), c.attributes && ja(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || ka("value", function(a, b, c) {
            if (!c && "input" === a.nodeName.toLowerCase()) return a.defaultValue
        }), ja(function(a) {
            return null == a.getAttribute("disabled")
        }) || ka(J, function(a, b, c) {
            var d;
            if (!c) return a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), ga
    }(a);
    r.find = x, r.expr = x.selectors, r.expr[":"] = r.expr.pseudos, r.uniqueSort = r.unique = x.uniqueSort, r.text = x.getText, r.isXMLDoc = x.isXML, r.contains = x.contains, r.escapeSelector = x.escape;
    var y = function(a, b, c) {
            var d = [],
                e = void 0 !== c;
            while ((a = a[b]) && 9 !== a.nodeType)
                if (1 === a.nodeType) {
                    if (e && r(a).is(c)) break;
                    d.push(a)
                }
            return d
        },
        z = function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        },
        A = r.expr.match.needsContext,
        B = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        C = /^.[^:#\[\.,]*$/;

    function D(a, b, c) {
        return r.isFunction(b) ? r.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== c
        }) : b.nodeType ? r.grep(a, function(a) {
            return a === b !== c
        }) : "string" != typeof b ? r.grep(a, function(a) {
            return i.call(b, a) > -1 !== c
        }) : C.test(b) ? r.filter(b, a, c) : (b = r.filter(b, a), r.grep(a, function(a) {
            return i.call(b, a) > -1 !== c && 1 === a.nodeType
        }))
    }
    r.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? r.find.matchesSelector(d, a) ? [d] : [] : r.find.matches(a, r.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }, r.fn.extend({
        find: function(a) {
            var b, c, d = this.length,
                e = this;
            if ("string" != typeof a) return this.pushStack(r(a).filter(function() {
                for (b = 0; b < d; b++)
                    if (r.contains(e[b], this)) return !0
            }));
            for (c = this.pushStack([]), b = 0; b < d; b++) r.find(a, e[b], c);
            return d > 1 ? r.uniqueSort(c) : c
        },
        filter: function(a) {
            return this.pushStack(D(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(D(this, a || [], !0))
        },
        is: function(a) {
            return !!D(this, "string" == typeof a && A.test(a) ? r(a) : a || [], !1).length
        }
    });
    var E, F = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
        G = r.fn.init = function(a, b, c) {
            var e, f;
            if (!a) return this;
            if (c = c || E, "string" == typeof a) {
                if (e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : F.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
                if (e[1]) {
                    if (b = b instanceof r ? b[0] : b, r.merge(this, r.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), B.test(e[1]) && r.isPlainObject(b))
                        for (e in b) r.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
                    return this
                }
                return f = d.getElementById(e[2]), f && (this[0] = f, this.length = 1), this
            }
            return a.nodeType ? (this[0] = a, this.length = 1, this) : r.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(r) : r.makeArray(a, this)
        };
    G.prototype = r.fn, E = r(d);
    var H = /^(?:parents|prev(?:Until|All))/,
        I = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    r.fn.extend({
        has: function(a) {
            var b = r(a, this),
                c = b.length;
            return this.filter(function() {
                for (var a = 0; a < c; a++)
                    if (r.contains(this, b[a])) return !0
            })
        },
        closest: function(a, b) {
            var c, d = 0,
                e = this.length,
                f = [],
                g = "string" != typeof a && r(a);
            if (!A.test(a))
                for (; d < e; d++)
                    for (c = this[d]; c && c !== b; c = c.parentNode)
                        if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && r.find.matchesSelector(c, a))) {
                            f.push(c);
                            break
                        }
            return this.pushStack(f.length > 1 ? r.uniqueSort(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? i.call(r(a), this[0]) : i.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(r.uniqueSort(r.merge(this.get(), r(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });

    function J(a, b) {
        while ((a = a[b]) && 1 !== a.nodeType);
        return a
    }
    r.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return y(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return y(a, "parentNode", c)
        },
        next: function(a) {
            return J(a, "nextSibling")
        },
        prev: function(a) {
            return J(a, "previousSibling")
        },
        nextAll: function(a) {
            return y(a, "nextSibling")
        },
        prevAll: function(a) {
            return y(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return y(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return y(a, "previousSibling", c)
        },
        siblings: function(a) {
            return z((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return z(a.firstChild)
        },
        contents: function(a) {
            return a.contentDocument || r.merge([], a.childNodes)
        }
    }, function(a, b) {
        r.fn[a] = function(c, d) {
            var e = r.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = r.filter(d, e)), this.length > 1 && (I[a] || r.uniqueSort(e), H.test(a) && e.reverse()), this.pushStack(e)
        }
    });
    var K = /[^\x20\t\r\n\f]+/g;

    function L(a) {
        var b = {};
        return r.each(a.match(K) || [], function(a, c) {
            b[c] = !0
        }), b
    }
    r.Callbacks = function(a) {
        a = "string" == typeof a ? L(a) : r.extend({}, a);
        var b, c, d, e, f = [],
            g = [],
            h = -1,
            i = function() {
                for (e = a.once, d = b = !0; g.length; h = -1) {
                    c = g.shift();
                    while (++h < f.length) f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1)
                }
                a.memory || (c = !1), b = !1, e && (f = c ? [] : "")
            },
            j = {
                add: function() {
                    return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
                        r.each(b, function(b, c) {
                            r.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== r.type(c) && d(c)
                        })
                    }(arguments), c && !b && i()), this
                },
                remove: function() {
                    return r.each(arguments, function(a, b) {
                        var c;
                        while ((c = r.inArray(b, f, c)) > -1) f.splice(c, 1), c <= h && h--
                    }), this
                },
                has: function(a) {
                    return a ? r.inArray(a, f) > -1 : f.length > 0
                },
                empty: function() {
                    return f && (f = []), this
                },
                disable: function() {
                    return e = g = [], f = c = "", this
                },
                disabled: function() {
                    return !f
                },
                lock: function() {
                    return e = g = [], c || b || (f = c = ""), this
                },
                locked: function() {
                    return !!e
                },
                fireWith: function(a, c) {
                    return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this
                },
                fire: function() {
                    return j.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!d
                }
            };
        return j
    };

    function M(a) {
        return a
    }

    function N(a) {
        throw a
    }

    function O(a, b, c) {
        var d;
        try {
            a && r.isFunction(d = a.promise) ? d.call(a).done(b).fail(c) : a && r.isFunction(d = a.then) ? d.call(a, b, c) : b.call(void 0, a)
        } catch (a) {
            c.call(void 0, a)
        }
    }
    r.extend({
        Deferred: function(b) {
            var c = [
                    ["notify", "progress", r.Callbacks("memory"), r.Callbacks("memory"), 2],
                    ["resolve", "done", r.Callbacks("once memory"), r.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", r.Callbacks("once memory"), r.Callbacks("once memory"), 1, "rejected"]
                ],
                d = "pending",
                e = {
                    state: function() {
                        return d
                    },
                    always: function() {
                        return f.done(arguments).fail(arguments), this
                    },
                    "catch": function(a) {
                        return e.then(null, a)
                    },
                    pipe: function() {
                        var a = arguments;
                        return r.Deferred(function(b) {
                            r.each(c, function(c, d) {
                                var e = r.isFunction(a[d[4]]) && a[d[4]];
                                f[d[1]](function() {
                                    var a = e && e.apply(this, arguments);
                                    a && r.isFunction(a.promise) ? a.promise().progress(b.notify).done(b.resolve).fail(b.reject) : b[d[0] + "With"](this, e ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    then: function(b, d, e) {
                        var f = 0;

                        function g(b, c, d, e) {
                            return function() {
                                var h = this,
                                    i = arguments,
                                    j = function() {
                                        var a, j;
                                        if (!(b < f)) {
                                            if (a = d.apply(h, i), a === c.promise()) throw new TypeError("Thenable self-resolution");
                                            j = a && ("object" == typeof a || "function" == typeof a) && a.then, r.isFunction(j) ? e ? j.call(a, g(f, c, M, e), g(f, c, N, e)) : (f++, j.call(a, g(f, c, M, e), g(f, c, N, e), g(f, c, M, c.notifyWith))) : (d !== M && (h = void 0, i = [a]), (e || c.resolveWith)(h, i))
                                        }
                                    },
                                    k = e ? j : function() {
                                        try {
                                            j()
                                        } catch (a) {
                                            r.Deferred.exceptionHook && r.Deferred.exceptionHook(a, k.stackTrace), b + 1 >= f && (d !== N && (h = void 0, i = [a]), c.rejectWith(h, i))
                                        }
                                    };
                                b ? k() : (r.Deferred.getStackHook && (k.stackTrace = r.Deferred.getStackHook()), a.setTimeout(k))
                            }
                        }
                        return r.Deferred(function(a) {
                            c[0][3].add(g(0, a, r.isFunction(e) ? e : M, a.notifyWith)), c[1][3].add(g(0, a, r.isFunction(b) ? b : M)), c[2][3].add(g(0, a, r.isFunction(d) ? d : N))
                        }).promise()
                    },
                    promise: function(a) {
                        return null != a ? r.extend(a, e) : e
                    }
                },
                f = {};
            return r.each(c, function(a, b) {
                var g = b[2],
                    h = b[5];
                e[b[1]] = g.add, h && g.add(function() {
                    d = h
                }, c[3 - a][2].disable, c[0][2].lock), g.add(b[3].fire), f[b[0]] = function() {
                    return f[b[0] + "With"](this === f ? void 0 : this, arguments), this
                }, f[b[0] + "With"] = g.fireWith
            }), e.promise(f), b && b.call(f, f), f
        },
        when: function(a) {
            var b = arguments.length,
                c = b,
                d = Array(c),
                e = f.call(arguments),
                g = r.Deferred(),
                h = function(a) {
                    return function(c) {
                        d[a] = this, e[a] = arguments.length > 1 ? f.call(arguments) : c, --b || g.resolveWith(d, e)
                    }
                };
            if (b <= 1 && (O(a, g.done(h(c)).resolve, g.reject), "pending" === g.state() || r.isFunction(e[c] && e[c].then))) return g.then();
            while (c--) O(e[c], h(c), g.reject);
            return g.promise()
        }
    });
    var P = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    r.Deferred.exceptionHook = function(b, c) {
        a.console && a.console.warn && b && P.test(b.name) && a.console.warn("jQuery.Deferred exception: " + b.message, b.stack, c)
    }, r.readyException = function(b) {
        a.setTimeout(function() {
            throw b
        })
    };
    var Q = r.Deferred();
    r.fn.ready = function(a) {
        return Q.then(a)["catch"](function(a) {
            r.readyException(a)
        }), this
    }, r.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? r.readyWait++ : r.ready(!0)
        },
        ready: function(a) {
            (a === !0 ? --r.readyWait : r.isReady) || (r.isReady = !0, a !== !0 && --r.readyWait > 0 || Q.resolveWith(d, [r]))
        }
    }), r.ready.then = Q.then;

    function R() {
        d.removeEventListener("DOMContentLoaded", R),
            a.removeEventListener("load", R), r.ready()
    }
    "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(r.ready) : (d.addEventListener("DOMContentLoaded", R), a.addEventListener("load", R));
    var S = function(a, b, c, d, e, f, g) {
            var h = 0,
                i = a.length,
                j = null == c;
            if ("object" === r.type(c)) {
                e = !0;
                for (h in c) S(a, b, h, c[h], !0, f, g)
            } else if (void 0 !== d && (e = !0, r.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
                    return j.call(r(a), c)
                })), b))
                for (; h < i; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
            return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
        },
        T = function(a) {
            return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
        };

    function U() {
        this.expando = r.expando + U.uid++
    }
    U.uid = 1, U.prototype = {
        cache: function(a) {
            var b = a[this.expando];
            return b || (b = {}, T(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, {
                value: b,
                configurable: !0
            }))), b
        },
        set: function(a, b, c) {
            var d, e = this.cache(a);
            if ("string" == typeof b) e[r.camelCase(b)] = c;
            else
                for (d in b) e[r.camelCase(d)] = b[d];
            return e
        },
        get: function(a, b) {
            return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][r.camelCase(b)]
        },
        access: function(a, b, c) {
            return void 0 === b || b && "string" == typeof b && void 0 === c ? this.get(a, b) : (this.set(a, b, c), void 0 !== c ? c : b)
        },
        remove: function(a, b) {
            var c, d = a[this.expando];
            if (void 0 !== d) {
                if (void 0 !== b) {
                    r.isArray(b) ? b = b.map(r.camelCase) : (b = r.camelCase(b), b = b in d ? [b] : b.match(K) || []), c = b.length;
                    while (c--) delete d[b[c]]
                }(void 0 === b || r.isEmptyObject(d)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando])
            }
        },
        hasData: function(a) {
            var b = a[this.expando];
            return void 0 !== b && !r.isEmptyObject(b)
        }
    };
    var V = new U,
        W = new U,
        X = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Y = /[A-Z]/g;

    function Z(a) {
        return "true" === a || "false" !== a && ("null" === a ? null : a === +a + "" ? +a : X.test(a) ? JSON.parse(a) : a)
    }

    function $(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType)
            if (d = "data-" + b.replace(Y, "-$&").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = Z(c)
                } catch (e) {}
                W.set(a, b, c)
            } else c = void 0;
        return c
    }
    r.extend({
        hasData: function(a) {
            return W.hasData(a) || V.hasData(a)
        },
        data: function(a, b, c) {
            return W.access(a, b, c)
        },
        removeData: function(a, b) {
            W.remove(a, b)
        },
        _data: function(a, b, c) {
            return V.access(a, b, c)
        },
        _removeData: function(a, b) {
            V.remove(a, b)
        }
    }), r.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0],
                g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = W.get(f), 1 === f.nodeType && !V.get(f, "hasDataAttrs"))) {
                    c = g.length;
                    while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = r.camelCase(d.slice(5)), $(f, d, e[d])));
                    V.set(f, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() {
                W.set(this, a)
            }) : S(this, function(b) {
                var c;
                if (f && void 0 === b) {
                    if (c = W.get(f, a), void 0 !== c) return c;
                    if (c = $(f, a), void 0 !== c) return c
                } else this.each(function() {
                    W.set(this, a, b)
                })
            }, null, b, arguments.length > 1, null, !0)
        },
        removeData: function(a) {
            return this.each(function() {
                W.remove(this, a)
            })
        }
    }), r.extend({
        queue: function(a, b, c) {
            var d;
            if (a) return b = (b || "fx") + "queue", d = V.get(a, b), c && (!d || r.isArray(c) ? d = V.access(a, b, r.makeArray(c)) : d.push(c)), d || []
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = r.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = r._queueHooks(a, b),
                g = function() {
                    r.dequeue(a, b)
                };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return V.get(a, c) || V.access(a, c, {
                empty: r.Callbacks("once memory").add(function() {
                    V.remove(a, [b + "queue", c])
                })
            })
        }
    }), r.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? r.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = r.queue(this, a, b);
                r._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && r.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                r.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var c, d = 1,
                e = r.Deferred(),
                f = this,
                g = this.length,
                h = function() {
                    --d || e.resolveWith(f, [f])
                };
            "string" != typeof a && (b = a, a = void 0), a = a || "fx";
            while (g--) c = V.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }
    });
    var _ = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        aa = new RegExp("^(?:([+-])=|)(" + _ + ")([a-z%]*)$", "i"),
        ba = ["Top", "Right", "Bottom", "Left"],
        ca = function(a, b) {
            return a = b || a, "none" === a.style.display || "" === a.style.display && r.contains(a.ownerDocument, a) && "none" === r.css(a, "display")
        },
        da = function(a, b, c, d) {
            var e, f, g = {};
            for (f in b) g[f] = a.style[f], a.style[f] = b[f];
            e = c.apply(a, d || []);
            for (f in b) a.style[f] = g[f];
            return e
        };

    function ea(a, b, c, d) {
        var e, f = 1,
            g = 20,
            h = d ? function() {
                return d.cur()
            } : function() {
                return r.css(a, b, "")
            },
            i = h(),
            j = c && c[3] || (r.cssNumber[b] ? "" : "px"),
            k = (r.cssNumber[b] || "px" !== j && +i) && aa.exec(r.css(a, b));
        if (k && k[3] !== j) {
            j = j || k[3], c = c || [], k = +i || 1;
            do f = f || ".5", k /= f, r.style(a, b, k + j); while (f !== (f = h() / i) && 1 !== f && --g)
        }
        return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e
    }
    var fa = {};

    function ga(a) {
        var b, c = a.ownerDocument,
            d = a.nodeName,
            e = fa[d];
        return e ? e : (b = c.body.appendChild(c.createElement(d)), e = r.css(b, "display"), b.parentNode.removeChild(b), "none" === e && (e = "block"), fa[d] = e, e)
    }

    function ha(a, b) {
        for (var c, d, e = [], f = 0, g = a.length; f < g; f++) d = a[f], d.style && (c = d.style.display, b ? ("none" === c && (e[f] = V.get(d, "display") || null, e[f] || (d.style.display = "")), "" === d.style.display && ca(d) && (e[f] = ga(d))) : "none" !== c && (e[f] = "none", V.set(d, "display", c)));
        for (f = 0; f < g; f++) null != e[f] && (a[f].style.display = e[f]);
        return a
    }
    r.fn.extend({
        show: function() {
            return ha(this, !0)
        },
        hide: function() {
            return ha(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                ca(this) ? r(this).show() : r(this).hide()
            })
        }
    });
    var ia = /^(?:checkbox|radio)$/i,
        ja = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        ka = /^$|\/(?:java|ecma)script/i,
        la = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    la.optgroup = la.option, la.tbody = la.tfoot = la.colgroup = la.caption = la.thead, la.th = la.td;

    function ma(a, b) {
        var c;
        return c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [], void 0 === b || b && r.nodeName(a, b) ? r.merge([a], c) : c
    }

    function na(a, b) {
        for (var c = 0, d = a.length; c < d; c++) V.set(a[c], "globalEval", !b || V.get(b[c], "globalEval"))
    }
    var oa = /<|&#?\w+;/;

    function pa(a, b, c, d, e) {
        for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], n = 0, o = a.length; n < o; n++)
            if (f = a[n], f || 0 === f)
                if ("object" === r.type(f)) r.merge(m, f.nodeType ? [f] : f);
                else if (oa.test(f)) {
            g = g || l.appendChild(b.createElement("div")), h = (ja.exec(f) || ["", ""])[1].toLowerCase(), i = la[h] || la._default, g.innerHTML = i[1] + r.htmlPrefilter(f) + i[2], k = i[0];
            while (k--) g = g.lastChild;
            r.merge(m, g.childNodes), g = l.firstChild, g.textContent = ""
        } else m.push(b.createTextNode(f));
        l.textContent = "", n = 0;
        while (f = m[n++])
            if (d && r.inArray(f, d) > -1) e && e.push(f);
            else if (j = r.contains(f.ownerDocument, f), g = ma(l.appendChild(f), "script"), j && na(g), c) {
            k = 0;
            while (f = g[k++]) ka.test(f.type || "") && c.push(f)
        }
        return l
    }! function() {
        var a = d.createDocumentFragment(),
            b = a.appendChild(d.createElement("div")),
            c = d.createElement("input");
        c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), o.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", o.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
    }();
    var qa = d.documentElement,
        ra = /^key/,
        sa = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        ta = /^([^.]*)(?:\.(.+)|)/;

    function ua() {
        return !0
    }

    function va() {
        return !1
    }

    function wa() {
        try {
            return d.activeElement
        } catch (a) {}
    }

    function xa(a, b, c, d, e, f) {
        var g, h;
        if ("object" == typeof b) {
            "string" != typeof c && (d = d || c, c = void 0);
            for (h in b) xa(a, h, c, d, b[h], f);
            return a
        }
        if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = va;
        else if (!e) return a;
        return 1 === f && (g = e, e = function(a) {
            return r().off(a), g.apply(this, arguments)
        }, e.guid = g.guid || (g.guid = r.guid++)), a.each(function() {
            r.event.add(this, b, e, d, c)
        })
    }
    r.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = V.get(a);
            if (q) {
                c.handler && (f = c, c = f.handler, e = f.selector), e && r.find.matchesSelector(qa, e), c.guid || (c.guid = r.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function(b) {
                    return "undefined" != typeof r && r.event.triggered !== b.type ? r.event.dispatch.apply(a, arguments) : void 0
                }), b = (b || "").match(K) || [""], j = b.length;
                while (j--) h = ta.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = r.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = r.event.special[n] || {}, k = r.extend({
                    type: n,
                    origType: p,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && r.expr.match.needsContext.test(e),
                    namespace: o.join(".")
                }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), r.event.global[n] = !0)
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = V.hasData(a) && V.get(a);
            if (q && (i = q.events)) {
                b = (b || "").match(K) || [""], j = b.length;
                while (j--)
                    if (h = ta.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                        l = r.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;
                        while (f--) k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                        g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || r.removeEvent(a, n, q.handle), delete i[n])
                    } else
                        for (n in i) r.event.remove(a, n + b[j], c, d, !0);
                r.isEmptyObject(i) && V.remove(a, "handle events")
            }
        },
        dispatch: function(a) {
            var b = r.event.fix(a),
                c, d, e, f, g, h, i = new Array(arguments.length),
                j = (V.get(this, "events") || {})[b.type] || [],
                k = r.event.special[b.type] || {};
            for (i[0] = b, c = 1; c < arguments.length; c++) i[c] = arguments[c];
            if (b.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, b) !== !1) {
                h = r.event.handlers.call(this, b, j), c = 0;
                while ((f = h[c++]) && !b.isPropagationStopped()) {
                    b.currentTarget = f.elem, d = 0;
                    while ((g = f.handlers[d++]) && !b.isImmediatePropagationStopped()) b.rnamespace && !b.rnamespace.test(g.namespace) || (b.handleObj = g, b.data = g.data, e = ((r.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (b.result = e) === !1 && (b.preventDefault(), b.stopPropagation()))
                }
                return k.postDispatch && k.postDispatch.call(this, b), b.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g, h = [],
                i = b.delegateCount,
                j = a.target;
            if (i && j.nodeType && !("click" === a.type && a.button >= 1))
                for (; j !== this; j = j.parentNode || this)
                    if (1 === j.nodeType && ("click" !== a.type || j.disabled !== !0)) {
                        for (f = [], g = {}, c = 0; c < i; c++) d = b[c], e = d.selector + " ", void 0 === g[e] && (g[e] = d.needsContext ? r(e, this).index(j) > -1 : r.find(e, this, null, [j]).length), g[e] && f.push(d);
                        f.length && h.push({
                            elem: j,
                            handlers: f
                        })
                    }
            return j = this, i < b.length && h.push({
                elem: j,
                handlers: b.slice(i)
            }), h
        },
        addProp: function(a, b) {
            Object.defineProperty(r.Event.prototype, a, {
                enumerable: !0,
                configurable: !0,
                get: r.isFunction(b) ? function() {
                    if (this.originalEvent) return b(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[a]
                },
                set: function(b) {
                    Object.defineProperty(this, a, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: b
                    })
                }
            })
        },
        fix: function(a) {
            return a[r.expando] ? a : new r.Event(a)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== wa() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === wa() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && r.nodeName(this, "input")) return this.click(), !1
                },
                _default: function(a) {
                    return r.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        }
    }, r.removeEvent = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c)
    }, r.Event = function(a, b) {
        return this instanceof r.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ua : va, this.target = a.target && 3 === a.target.nodeType ? a.target.parentNode : a.target, this.currentTarget = a.currentTarget, this.relatedTarget = a.relatedTarget) : this.type = a, b && r.extend(this, b), this.timeStamp = a && a.timeStamp || r.now(), void(this[r.expando] = !0)) : new r.Event(a, b)
    }, r.Event.prototype = {
        constructor: r.Event,
        isDefaultPrevented: va,
        isPropagationStopped: va,
        isImmediatePropagationStopped: va,
        isSimulated: !1,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = ua, a && !this.isSimulated && a.preventDefault()
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = ua, a && !this.isSimulated && a.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = ua, a && !this.isSimulated && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, r.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(a) {
            var b = a.button;
            return null == a.which && ra.test(a.type) ? null != a.charCode ? a.charCode : a.keyCode : !a.which && void 0 !== b && sa.test(a.type) ? 1 & b ? 1 : 2 & b ? 3 : 4 & b ? 2 : 0 : a.which
        }
    }, r.event.addProp), r.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        r.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return e && (e === d || r.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), r.fn.extend({
        on: function(a, b, c, d) {
            return xa(this, a, b, c, d)
        },
        one: function(a, b, c, d) {
            return xa(this, a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, r(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = va), this.each(function() {
                r.event.remove(this, a, c, b)
            })
        }
    });
    var ya = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        za = /<script|<style|<link/i,
        Aa = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ba = /^true\/(.*)/,
        Ca = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Da(a, b) {
        return r.nodeName(a, "table") && r.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a : a
    }

    function Ea(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
    }

    function Fa(a) {
        var b = Ba.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function Ga(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (V.hasData(a) && (f = V.access(a), g = V.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j)
                    for (c = 0, d = j[e].length; c < d; c++) r.event.add(b, e, j[e][c])
            }
            W.hasData(a) && (h = W.access(a), i = r.extend({}, h), W.set(b, i))
        }
    }

    function Ha(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && ia.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue)
    }

    function Ia(a, b, c, d) {
        b = g.apply([], b);
        var e, f, h, i, j, k, l = 0,
            m = a.length,
            n = m - 1,
            q = b[0],
            s = r.isFunction(q);
        if (s || m > 1 && "string" == typeof q && !o.checkClone && Aa.test(q)) return a.each(function(e) {
            var f = a.eq(e);
            s && (b[0] = q.call(this, e, f.html())), Ia(f, b, c, d)
        });
        if (m && (e = pa(b, a[0].ownerDocument, !1, a, d), f = e.firstChild, 1 === e.childNodes.length && (e = f), f || d)) {
            for (h = r.map(ma(e, "script"), Ea), i = h.length; l < m; l++) j = e, l !== n && (j = r.clone(j, !0, !0), i && r.merge(h, ma(j, "script"))), c.call(a[l], j, l);
            if (i)
                for (k = h[h.length - 1].ownerDocument, r.map(h, Fa), l = 0; l < i; l++) j = h[l], ka.test(j.type || "") && !V.access(j, "globalEval") && r.contains(k, j) && (j.src ? r._evalUrl && r._evalUrl(j.src) : p(j.textContent.replace(Ca, ""), k))
        }
        return a
    }

    function Ja(a, b, c) {
        for (var d, e = b ? r.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || r.cleanData(ma(d)), d.parentNode && (c && r.contains(d.ownerDocument, d) && na(ma(d, "script")), d.parentNode.removeChild(d));
        return a
    }
    r.extend({
        htmlPrefilter: function(a) {
            return a.replace(ya, "<$1></$2>")
        },
        clone: function(a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0),
                i = r.contains(a.ownerDocument, a);
            if (!(o.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || r.isXMLDoc(a)))
                for (g = ma(h), f = ma(a), d = 0, e = f.length; d < e; d++) Ha(f[d], g[d]);
            if (b)
                if (c)
                    for (f = f || ma(a), g = g || ma(h), d = 0, e = f.length; d < e; d++) Ga(f[d], g[d]);
                else Ga(a, h);
            return g = ma(h, "script"), g.length > 0 && na(g, !i && ma(a, "script")), h
        },
        cleanData: function(a) {
            for (var b, c, d, e = r.event.special, f = 0; void 0 !== (c = a[f]); f++)
                if (T(c)) {
                    if (b = c[V.expando]) {
                        if (b.events)
                            for (d in b.events) e[d] ? r.event.remove(c, d) : r.removeEvent(c, d, b.handle);
                        c[V.expando] = void 0
                    }
                    c[W.expando] && (c[W.expando] = void 0)
                }
        }
    }), r.fn.extend({
        detach: function(a) {
            return Ja(this, a, !0)
        },
        remove: function(a) {
            return Ja(this, a)
        },
        text: function(a) {
            return S(this, function(a) {
                return void 0 === a ? r.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a)
                })
            }, null, a, arguments.length)
        },
        append: function() {
            return Ia(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Da(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return Ia(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Da(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return Ia(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return Ia(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (r.cleanData(ma(a, !1)), a.textContent = "");
            return this
        },
        clone: function(a, b) {
            return a = null != a && a, b = null == b ? a : b, this.map(function() {
                return r.clone(this, a, b)
            })
        },
        html: function(a) {
            return S(this, function(a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;
                if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                if ("string" == typeof a && !za.test(a) && !la[(ja.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = r.htmlPrefilter(a);
                    try {
                        for (; c < d; c++) b = this[c] || {}, 1 === b.nodeType && (r.cleanData(ma(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = [];
            return Ia(this, arguments, function(b) {
                var c = this.parentNode;
                r.inArray(this, a) < 0 && (r.cleanData(ma(this)), c && c.replaceChild(b, this))
            }, a)
        }
    }), r.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        r.fn[a] = function(a) {
            for (var c, d = [], e = r(a), f = e.length - 1, g = 0; g <= f; g++) c = g === f ? this : this.clone(!0), r(e[g])[b](c), h.apply(d, c.get());
            return this.pushStack(d)
        }
    });
    var Ka = /^margin/,
        La = new RegExp("^(" + _ + ")(?!px)[a-z%]+$", "i"),
        Ma = function(b) {
            var c = b.ownerDocument.defaultView;
            return c && c.opener || (c = a), c.getComputedStyle(b)
        };
    ! function() {
        function b() {
            if (i) {
                i.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", i.innerHTML = "", qa.appendChild(h);
                var b = a.getComputedStyle(i);
                c = "1%" !== b.top, g = "2px" === b.marginLeft, e = "4px" === b.width, i.style.marginRight = "50%", f = "4px" === b.marginRight, qa.removeChild(h), i = null
            }
        }
        var c, e, f, g, h = d.createElement("div"),
            i = d.createElement("div");
        i.style && (i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", o.clearCloneStyle = "content-box" === i.style.backgroundClip, h.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", h.appendChild(i), r.extend(o, {
            pixelPosition: function() {
                return b(), c
            },
            boxSizingReliable: function() {
                return b(), e
            },
            pixelMarginRight: function() {
                return b(), f
            },
            reliableMarginLeft: function() {
                return b(), g
            }
        }))
    }();

    function Na(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ma(a), c && (g = c.getPropertyValue(b) || c[b], "" !== g || r.contains(a.ownerDocument, a) || (g = r.style(a, b)), !o.pixelMarginRight() && La.test(g) && Ka.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g
    }

    function Oa(a, b) {
        return {
            get: function() {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }
    var Pa = /^(none|table(?!-c[ea]).+)/,
        Qa = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ra = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Sa = ["Webkit", "Moz", "ms"],
        Ta = d.createElement("div").style;

    function Ua(a) {
        if (a in Ta) return a;
        var b = a[0].toUpperCase() + a.slice(1),
            c = Sa.length;
        while (c--)
            if (a = Sa[c] + b, a in Ta) return a
    }

    function Va(a, b, c) {
        var d = aa.exec(b);
        return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b
    }

    function Wa(a, b, c, d, e) {
        var f, g = 0;
        for (f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0; f < 4; f += 2) "margin" === c && (g += r.css(a, c + ba[f], !0, e)), d ? ("content" === c && (g -= r.css(a, "padding" + ba[f], !0, e)), "margin" !== c && (g -= r.css(a, "border" + ba[f] + "Width", !0, e))) : (g += r.css(a, "padding" + ba[f], !0, e), "padding" !== c && (g += r.css(a, "border" + ba[f] + "Width", !0, e)));
        return g
    }

    function Xa(a, b, c) {
        var d, e = !0,
            f = Ma(a),
            g = "border-box" === r.css(a, "boxSizing", !1, f);
        if (a.getClientRects().length && (d = a.getBoundingClientRect()[b]), d <= 0 || null == d) {
            if (d = Na(a, b, f), (d < 0 || null == d) && (d = a.style[b]), La.test(d)) return d;
            e = g && (o.boxSizingReliable() || d === a.style[b]), d = parseFloat(d) || 0
        }
        return d + Wa(a, b, c || (g ? "border" : "content"), e, f) + "px"
    }
    r.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = Na(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = r.camelCase(b),
                    i = a.style;
                return b = r.cssProps[h] || (r.cssProps[h] = Ua(h) || h), g = r.cssHooks[b] || r.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = aa.exec(c)) && e[1] && (c = ea(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (r.cssNumber[h] ? "" : "px")), o.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0)
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = r.camelCase(b);
            return b = r.cssProps[h] || (r.cssProps[h] = Ua(h) || h), g = r.cssHooks[b] || r.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = Na(a, b, d)), "normal" === e && b in Ra && (e = Ra[b]), "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e
        }
    }), r.each(["height", "width"], function(a, b) {
        r.cssHooks[b] = {
            get: function(a, c, d) {
                if (c) return !Pa.test(r.css(a, "display")) || a.getClientRects().length && a.getBoundingClientRect().width ? Xa(a, b, d) : da(a, Qa, function() {
                    return Xa(a, b, d)
                })
            },
            set: function(a, c, d) {
                var e, f = d && Ma(a),
                    g = d && Wa(a, b, d, "border-box" === r.css(a, "boxSizing", !1, f), f);
                return g && (e = aa.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = r.css(a, b)), Va(a, c, g)
            }
        }
    }), r.cssHooks.marginLeft = Oa(o.reliableMarginLeft, function(a, b) {
        if (b) return (parseFloat(Na(a, "marginLeft")) || a.getBoundingClientRect().left - da(a, {
            marginLeft: 0
        }, function() {
            return a.getBoundingClientRect().left
        })) + "px"
    }), r.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        r.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; d < 4; d++) e[a + ba[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, Ka.test(a) || (r.cssHooks[a + b].set = Va)
    }), r.fn.extend({
        css: function(a, b) {
            return S(this, function(a, b, c) {
                var d, e, f = {},
                    g = 0;
                if (r.isArray(b)) {
                    for (d = Ma(a), e = b.length; g < e; g++) f[b[g]] = r.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? r.style(a, b, c) : r.css(a, b)
            }, a, b, arguments.length > 1)
        }
    });

    function Ya(a, b, c, d, e) {
        return new Ya.prototype.init(a, b, c, d, e)
    }
    r.Tween = Ya, Ya.prototype = {
        constructor: Ya,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || r.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (r.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = Ya.propHooks[this.prop];
            return a && a.get ? a.get(this) : Ya.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = Ya.propHooks[this.prop];
            return this.options.duration ? this.pos = b = r.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Ya.propHooks._default.set(this), this
        }
    }, Ya.prototype.init.prototype = Ya.prototype, Ya.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = r.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0)
            },
            set: function(a) {
                r.fx.step[a.prop] ? r.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[r.cssProps[a.prop]] && !r.cssHooks[a.prop] ? a.elem[a.prop] = a.now : r.style(a.elem, a.prop, a.now + a.unit)
            }
        }
    }, Ya.propHooks.scrollTop = Ya.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, r.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        },
        _default: "swing"
    }, r.fx = Ya.prototype.init, r.fx.step = {};
    var Za, $a, _a = /^(?:toggle|show|hide)$/,
        ab = /queueHooks$/;

    function bb() {
        $a && (a.requestAnimationFrame(bb), r.fx.tick())
    }

    function cb() {
        return a.setTimeout(function() {
            Za = void 0
        }), Za = r.now()
    }

    function db(a, b) {
        var c, d = 0,
            e = {
                height: a
            };
        for (b = b ? 1 : 0; d < 4; d += 2 - b) c = ba[d], e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a), e
    }

    function eb(a, b, c) {
        for (var d, e = (hb.tweeners[b] || []).concat(hb.tweeners["*"]), f = 0, g = e.length; f < g; f++)
            if (d = e[f].call(c, b, a)) return d
    }

    function fb(a, b, c) {
        var d, e, f, g, h, i, j, k, l = "width" in b || "height" in b,
            m = this,
            n = {},
            o = a.style,
            p = a.nodeType && ca(a),
            q = V.get(a, "fxshow");
        c.queue || (g = r._queueHooks(a, "fx"), null == g.unqueued && (g.unqueued = 0, h = g.empty.fire, g.empty.fire = function() {
            g.unqueued || h()
        }), g.unqueued++, m.always(function() {
            m.always(function() {
                g.unqueued--, r.queue(a, "fx").length || g.empty.fire()
            })
        }));
        for (d in b)
            if (e = b[d], _a.test(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
                    if ("show" !== e || !q || void 0 === q[d]) continue;
                    p = !0
                }
                n[d] = q && q[d] || r.style(a, d)
            }
        if (i = !r.isEmptyObject(b), i || !r.isEmptyObject(n)) {
            l && 1 === a.nodeType && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = q && q.display, null == j && (j = V.get(a, "display")), k = r.css(a, "display"), "none" === k && (j ? k = j : (ha([a], !0), j = a.style.display || j, k = r.css(a, "display"), ha([a]))), ("inline" === k || "inline-block" === k && null != j) && "none" === r.css(a, "float") && (i || (m.done(function() {
                o.display = j
            }), null == j && (k = o.display, j = "none" === k ? "" : k)), o.display = "inline-block")), c.overflow && (o.overflow = "hidden", m.always(function() {
                o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2]
            })), i = !1;
            for (d in n) i || (q ? "hidden" in q && (p = q.hidden) : q = V.access(a, "fxshow", {
                display: j
            }), f && (q.hidden = !p), p && ha([a], !0), m.done(function() {
                p || ha([a]), V.remove(a, "fxshow");
                for (d in n) r.style(a, d, n[d])
            })), i = eb(p ? q[d] : 0, d, m), d in q || (q[d] = i.start, p && (i.end = i.start, i.start = 0))
        }
    }

    function gb(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = r.camelCase(c), e = b[d], f = a[c], r.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = r.cssHooks[d], g && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f) c in a || (a[c] = f[c], b[c] = e)
            } else b[d] = e
    }

    function hb(a, b, c) {
        var d, e, f = 0,
            g = hb.prefilters.length,
            h = r.Deferred().always(function() {
                delete i.elem
            }),
            i = function() {
                if (e) return !1;
                for (var b = Za || cb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; g < i; g++) j.tweens[g].run(f);
                return h.notifyWith(a, [j, f, c]), f < 1 && i ? c : (h.resolveWith(a, [j]), !1)
            },
            j = h.promise({
                elem: a,
                props: r.extend({}, b),
                opts: r.extend(!0, {
                    specialEasing: {},
                    easing: r.easing._default
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: Za || cb(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c) {
                    var d = r.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d
                },
                stop: function(b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; c < d; c++) j.tweens[c].run(1);
                    return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for (gb(k, j.opts.specialEasing); f < g; f++)
            if (d = hb.prefilters[f].call(j, a, k, j.opts)) return r.isFunction(d.stop) && (r._queueHooks(j.elem, j.opts.queue).stop = r.proxy(d.stop, d)), d;
        return r.map(k, eb, j), r.isFunction(j.opts.start) && j.opts.start.call(a, j), r.fx.timer(r.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    r.Animation = r.extend(hb, {
            tweeners: {
                "*": [function(a, b) {
                    var c = this.createTween(a, b);
                    return ea(c.elem, a, aa.exec(b), c), c
                }]
            },
            tweener: function(a, b) {
                r.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(K);
                for (var c, d = 0, e = a.length; d < e; d++) c = a[d], hb.tweeners[c] = hb.tweeners[c] || [], hb.tweeners[c].unshift(b)
            },
            prefilters: [fb],
            prefilter: function(a, b) {
                b ? hb.prefilters.unshift(a) : hb.prefilters.push(a)
            }
        }), r.speed = function(a, b, c) {
            var e = a && "object" == typeof a ? r.extend({}, a) : {
                complete: c || !c && b || r.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !r.isFunction(b) && b
            };
            return r.fx.off || d.hidden ? e.duration = 0 : "number" != typeof e.duration && (e.duration in r.fx.speeds ? e.duration = r.fx.speeds[e.duration] : e.duration = r.fx.speeds._default), null != e.queue && e.queue !== !0 || (e.queue = "fx"), e.old = e.complete, e.complete = function() {
                r.isFunction(e.old) && e.old.call(this), e.queue && r.dequeue(this, e.queue)
            }, e
        }, r.fn.extend({
            fadeTo: function(a, b, c, d) {
                return this.filter(ca).css("opacity", 0).show().end().animate({
                    opacity: b
                }, a, c, d)
            },
            animate: function(a, b, c, d) {
                var e = r.isEmptyObject(a),
                    f = r.speed(b, c, d),
                    g = function() {
                        var b = hb(this, r.extend({}, a), f);
                        (e || V.get(this, "finish")) && b.stop(!0)
                    };
                return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
            },
            stop: function(a, b, c) {
                var d = function(a) {
                    var b = a.stop;
                    delete a.stop, b(c)
                };
                return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                    var b = !0,
                        e = null != a && a + "queueHooks",
                        f = r.timers,
                        g = V.get(this);
                    if (e) g[e] && g[e].stop && d(g[e]);
                    else
                        for (e in g) g[e] && g[e].stop && ab.test(e) && d(g[e]);
                    for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                    !b && c || r.dequeue(this, a)
                })
            },
            finish: function(a) {
                return a !== !1 && (a = a || "fx"), this.each(function() {
                    var b, c = V.get(this),
                        d = c[a + "queue"],
                        e = c[a + "queueHooks"],
                        f = r.timers,
                        g = d ? d.length : 0;
                    for (c.finish = !0, r.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                    for (b = 0; b < g; b++) d[b] && d[b].finish && d[b].finish.call(this);
                    delete c.finish
                })
            }
        }), r.each(["toggle", "show", "hide"], function(a, b) {
            var c = r.fn[b];
            r.fn[b] = function(a, d, e) {
                return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(db(b, !0), a, d, e)
            }
        }), r.each({
            slideDown: db("show"),
            slideUp: db("hide"),
            slideToggle: db("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(a, b) {
            r.fn[a] = function(a, c, d) {
                return this.animate(b, a, c, d)
            }
        }), r.timers = [], r.fx.tick = function() {
            var a, b = 0,
                c = r.timers;
            for (Za = r.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
            c.length || r.fx.stop(), Za = void 0
        }, r.fx.timer = function(a) {
            r.timers.push(a), a() ? r.fx.start() : r.timers.pop()
        }, r.fx.interval = 13, r.fx.start = function() {
            $a || ($a = a.requestAnimationFrame ? a.requestAnimationFrame(bb) : a.setInterval(r.fx.tick, r.fx.interval))
        }, r.fx.stop = function() {
            a.cancelAnimationFrame ? a.cancelAnimationFrame($a) : a.clearInterval($a), $a = null
        }, r.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, r.fn.delay = function(b, c) {
            return b = r.fx ? r.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function(c, d) {
                var e = a.setTimeout(c, b);
                d.stop = function() {
                    a.clearTimeout(e)
                }
            })
        },
        function() {
            var a = d.createElement("input"),
                b = d.createElement("select"),
                c = b.appendChild(d.createElement("option"));
            a.type = "checkbox", o.checkOn = "" !== a.value, o.optSelected = c.selected, a = d.createElement("input"), a.value = "t", a.type = "radio", o.radioValue = "t" === a.value
        }();
    var ib, jb = r.expr.attrHandle;
    r.fn.extend({
        attr: function(a, b) {
            return S(this, r.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                r.removeAttr(this, a)
            })
        }
    }), r.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? r.prop(a, b, c) : (1 === f && r.isXMLDoc(a) || (e = r.attrHooks[b.toLowerCase()] || (r.expr.match.bool.test(b) ? ib : void 0)),
                void 0 !== c ? null === c ? void r.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = r.find.attr(a, b), null == d ? void 0 : d))
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!o.radioValue && "radio" === b && r.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        },
        removeAttr: function(a, b) {
            var c, d = 0,
                e = b && b.match(K);
            if (e && 1 === a.nodeType)
                while (c = e[d++]) a.removeAttribute(c)
        }
    }), ib = {
        set: function(a, b, c) {
            return b === !1 ? r.removeAttr(a, c) : a.setAttribute(c, c), c
        }
    }, r.each(r.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = jb[b] || r.find.attr;
        jb[b] = function(a, b, d) {
            var e, f, g = b.toLowerCase();
            return d || (f = jb[g], jb[g] = e, e = null != c(a, b, d) ? g : null, jb[g] = f), e
        }
    });
    var kb = /^(?:input|select|textarea|button)$/i,
        lb = /^(?:a|area)$/i;
    r.fn.extend({
        prop: function(a, b) {
            return S(this, r.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return this.each(function() {
                delete this[r.propFix[a] || a]
            })
        }
    }), r.extend({
        prop: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return 1 === f && r.isXMLDoc(a) || (b = r.propFix[b] || b, e = r.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = r.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : kb.test(a.nodeName) || lb.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), o.optSelected || (r.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null
        },
        set: function(a) {
            var b = a.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex)
        }
    }), r.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        r.propFix[this.toLowerCase()] = this
    });

    function mb(a) {
        var b = a.match(K) || [];
        return b.join(" ")
    }

    function nb(a) {
        return a.getAttribute && a.getAttribute("class") || ""
    }
    r.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (r.isFunction(a)) return this.each(function(b) {
                r(this).addClass(a.call(this, b, nb(this)))
            });
            if ("string" == typeof a && a) {
                b = a.match(K) || [];
                while (c = this[i++])
                    if (e = nb(c), d = 1 === c.nodeType && " " + mb(e) + " ") {
                        g = 0;
                        while (f = b[g++]) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                        h = mb(d), e !== h && c.setAttribute("class", h)
                    }
            }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (r.isFunction(a)) return this.each(function(b) {
                r(this).removeClass(a.call(this, b, nb(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof a && a) {
                b = a.match(K) || [];
                while (c = this[i++])
                    if (e = nb(c), d = 1 === c.nodeType && " " + mb(e) + " ") {
                        g = 0;
                        while (f = b[g++])
                            while (d.indexOf(" " + f + " ") > -1) d = d.replace(" " + f + " ", " ");
                        h = mb(d), e !== h && c.setAttribute("class", h)
                    }
            }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : r.isFunction(a) ? this.each(function(c) {
                r(this).toggleClass(a.call(this, c, nb(this), b), b)
            }) : this.each(function() {
                var b, d, e, f;
                if ("string" === c) {
                    d = 0, e = r(this), f = a.match(K) || [];
                    while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                } else void 0 !== a && "boolean" !== c || (b = nb(this), b && V.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : V.get(this, "__className__") || ""))
            })
        },
        hasClass: function(a) {
            var b, c, d = 0;
            b = " " + a + " ";
            while (c = this[d++])
                if (1 === c.nodeType && (" " + mb(nb(c)) + " ").indexOf(b) > -1) return !0;
            return !1
        }
    });
    var ob = /\r/g;
    r.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0]; {
                if (arguments.length) return d = r.isFunction(a), this.each(function(c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, r(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : r.isArray(e) && (e = r.map(e, function(a) {
                        return null == a ? "" : a + ""
                    })), b = r.valHooks[this.type] || r.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                });
                if (e) return b = r.valHooks[e.type] || r.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(ob, "") : null == c ? "" : c)
            }
        }
    }), r.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = r.find.attr(a, "value");
                    return null != b ? b : mb(r.text(a))
                }
            },
            select: {
                get: function(a) {
                    var b, c, d, e = a.options,
                        f = a.selectedIndex,
                        g = "select-one" === a.type,
                        h = g ? null : [],
                        i = g ? f + 1 : e.length;
                    for (d = f < 0 ? i : g ? f : 0; d < i; d++)
                        if (c = e[d], (c.selected || d === f) && !c.disabled && (!c.parentNode.disabled || !r.nodeName(c.parentNode, "optgroup"))) {
                            if (b = r(c).val(), g) return b;
                            h.push(b)
                        }
                    return h
                },
                set: function(a, b) {
                    var c, d, e = a.options,
                        f = r.makeArray(b),
                        g = e.length;
                    while (g--) d = e[g], (d.selected = r.inArray(r.valHooks.option.get(d), f) > -1) && (c = !0);
                    return c || (a.selectedIndex = -1), f
                }
            }
        }
    }), r.each(["radio", "checkbox"], function() {
        r.valHooks[this] = {
            set: function(a, b) {
                if (r.isArray(b)) return a.checked = r.inArray(r(a).val(), b) > -1
            }
        }, o.checkOn || (r.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var pb = /^(?:focusinfocus|focusoutblur)$/;
    r.extend(r.event, {
        trigger: function(b, c, e, f) {
            var g, h, i, j, k, m, n, o = [e || d],
                p = l.call(b, "type") ? b.type : b,
                q = l.call(b, "namespace") ? b.namespace.split(".") : [];
            if (h = i = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !pb.test(p + r.event.triggered) && (p.indexOf(".") > -1 && (q = p.split("."), p = q.shift(), q.sort()), k = p.indexOf(":") < 0 && "on" + p, b = b[r.expando] ? b : new r.Event(p, "object" == typeof b && b), b.isTrigger = f ? 2 : 3, b.namespace = q.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : r.makeArray(c, [b]), n = r.event.special[p] || {}, f || !n.trigger || n.trigger.apply(e, c) !== !1)) {
                if (!f && !n.noBubble && !r.isWindow(e)) {
                    for (j = n.delegateType || p, pb.test(j + p) || (h = h.parentNode); h; h = h.parentNode) o.push(h), i = h;
                    i === (e.ownerDocument || d) && o.push(i.defaultView || i.parentWindow || a)
                }
                g = 0;
                while ((h = o[g++]) && !b.isPropagationStopped()) b.type = g > 1 ? j : n.bindType || p, m = (V.get(h, "events") || {})[b.type] && V.get(h, "handle"), m && m.apply(h, c), m = k && h[k], m && m.apply && T(h) && (b.result = m.apply(h, c), b.result === !1 && b.preventDefault());
                return b.type = p, f || b.isDefaultPrevented() || n._default && n._default.apply(o.pop(), c) !== !1 || !T(e) || k && r.isFunction(e[p]) && !r.isWindow(e) && (i = e[k], i && (e[k] = null), r.event.triggered = p, e[p](), r.event.triggered = void 0, i && (e[k] = i)), b.result
            }
        },
        simulate: function(a, b, c) {
            var d = r.extend(new r.Event, c, {
                type: a,
                isSimulated: !0
            });
            r.event.trigger(d, null, b)
        }
    }), r.fn.extend({
        trigger: function(a, b) {
            return this.each(function() {
                r.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            if (c) return r.event.trigger(a, b, c, !0)
        }
    }), r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(a, b) {
        r.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), r.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    }), o.focusin = "onfocusin" in a, o.focusin || r.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            r.event.simulate(b, a.target, r.event.fix(a))
        };
        r.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this,
                    e = V.access(d, b);
                e || d.addEventListener(a, c, !0), V.access(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this,
                    e = V.access(d, b) - 1;
                e ? V.access(d, b, e) : (d.removeEventListener(a, c, !0), V.remove(d, b))
            }
        }
    });
    var qb = a.location,
        rb = r.now(),
        sb = /\?/;
    r.parseXML = function(b) {
        var c;
        if (!b || "string" != typeof b) return null;
        try {
            c = (new a.DOMParser).parseFromString(b, "text/xml")
        } catch (d) {
            c = void 0
        }
        return c && !c.getElementsByTagName("parsererror").length || r.error("Invalid XML: " + b), c
    };
    var tb = /\[\]$/,
        ub = /\r?\n/g,
        vb = /^(?:submit|button|image|reset|file)$/i,
        wb = /^(?:input|select|textarea|keygen)/i;

    function xb(a, b, c, d) {
        var e;
        if (r.isArray(b)) r.each(b, function(b, e) {
            c || tb.test(a) ? d(a, e) : xb(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d)
        });
        else if (c || "object" !== r.type(b)) d(a, b);
        else
            for (e in b) xb(a + "[" + e + "]", b[e], c, d)
    }
    r.param = function(a, b) {
        var c, d = [],
            e = function(a, b) {
                var c = r.isFunction(b) ? b() : b;
                d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(null == c ? "" : c)
            };
        if (r.isArray(a) || a.jquery && !r.isPlainObject(a)) r.each(a, function() {
            e(this.name, this.value)
        });
        else
            for (c in a) xb(c, a[c], b, e);
        return d.join("&")
    }, r.fn.extend({
        serialize: function() {
            return r.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = r.prop(this, "elements");
                return a ? r.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !r(this).is(":disabled") && wb.test(this.nodeName) && !vb.test(a) && (this.checked || !ia.test(a))
            }).map(function(a, b) {
                var c = r(this).val();
                return null == c ? null : r.isArray(c) ? r.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(ub, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(ub, "\r\n")
                }
            }).get()
        }
    });
    var yb = /%20/g,
        zb = /#.*$/,
        Ab = /([?&])_=[^&]*/,
        Bb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Cb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Db = /^(?:GET|HEAD)$/,
        Eb = /^\/\//,
        Fb = {},
        Gb = {},
        Hb = "*/".concat("*"),
        Ib = d.createElement("a");
    Ib.href = qb.href;

    function Jb(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(K) || [];
            if (r.isFunction(c))
                while (d = f[e++]) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function Kb(a, b, c, d) {
        var e = {},
            f = a === Gb;

        function g(h) {
            var i;
            return e[h] = !0, r.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
            }), i
        }
        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }

    function Lb(a, b) {
        var c, d, e = r.ajaxSettings.flatOptions || {};
        for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && r.extend(!0, a, d), a
    }

    function Mb(a, b, c) {
        var d, e, f, g, h = a.contents,
            i = a.dataTypes;
        while ("*" === i[0]) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d)
            for (e in h)
                if (h[e] && h[e].test(d)) {
                    i.unshift(e);
                    break
                }
        if (i[0] in c) f = i[0];
        else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break
                }
                g || (g = e)
            }
            f = f || g
        }
        if (f) return f !== i[0] && i.unshift(f), c[f]
    }

    function Nb(a, b, c, d) {
        var e, f, g, h, i, j = {},
            k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g)
                for (e in j)
                    if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                        g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                        break
                    }
            if (g !== !0)
                if (g && a["throws"]) b = g(b);
                else try {
                    b = g(b)
                } catch (l) {
                    return {
                        state: "parsererror",
                        error: g ? l : "No conversion from " + i + " to " + f
                    }
                }
        }
        return {
            state: "success",
            data: b
        }
    }
    r.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: qb.href,
            type: "GET",
            isLocal: Cb.test(qb.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Hb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": r.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? Lb(Lb(a, r.ajaxSettings), b) : Lb(r.ajaxSettings, a)
        },
        ajaxPrefilter: Jb(Fb),
        ajaxTransport: Jb(Gb),
        ajax: function(b, c) {
            "object" == typeof b && (c = b, b = void 0), c = c || {};
            var e, f, g, h, i, j, k, l, m, n, o = r.ajaxSetup({}, c),
                p = o.context || o,
                q = o.context && (p.nodeType || p.jquery) ? r(p) : r.event,
                s = r.Deferred(),
                t = r.Callbacks("once memory"),
                u = o.statusCode || {},
                v = {},
                w = {},
                x = "canceled",
                y = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (k) {
                            if (!h) {
                                h = {};
                                while (b = Bb.exec(g)) h[b[1].toLowerCase()] = b[2]
                            }
                            b = h[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function() {
                        return k ? g : null
                    },
                    setRequestHeader: function(a, b) {
                        return null == k && (a = w[a.toLowerCase()] = w[a.toLowerCase()] || a, v[a] = b), this
                    },
                    overrideMimeType: function(a) {
                        return null == k && (o.mimeType = a), this
                    },
                    statusCode: function(a) {
                        var b;
                        if (a)
                            if (k) y.always(a[y.status]);
                            else
                                for (b in a) u[b] = [u[b], a[b]];
                        return this
                    },
                    abort: function(a) {
                        var b = a || x;
                        return e && e.abort(b), A(0, b), this
                    }
                };
            if (s.promise(y), o.url = ((b || o.url || qb.href) + "").replace(Eb, qb.protocol + "//"), o.type = c.method || c.type || o.method || o.type, o.dataTypes = (o.dataType || "*").toLowerCase().match(K) || [""], null == o.crossDomain) {
                j = d.createElement("a");
                try {
                    j.href = o.url, j.href = j.href, o.crossDomain = Ib.protocol + "//" + Ib.host != j.protocol + "//" + j.host
                } catch (z) {
                    o.crossDomain = !0
                }
            }
            if (o.data && o.processData && "string" != typeof o.data && (o.data = r.param(o.data, o.traditional)), Kb(Fb, o, c, y), k) return y;
            l = r.event && o.global, l && 0 === r.active++ && r.event.trigger("ajaxStart"), o.type = o.type.toUpperCase(), o.hasContent = !Db.test(o.type), f = o.url.replace(zb, ""), o.hasContent ? o.data && o.processData && 0 === (o.contentType || "").indexOf("application/x-www-form-urlencoded") && (o.data = o.data.replace(yb, "+")) : (n = o.url.slice(f.length), o.data && (f += (sb.test(f) ? "&" : "?") + o.data, delete o.data), o.cache === !1 && (f = f.replace(Ab, "$1"), n = (sb.test(f) ? "&" : "?") + "_=" + rb++ + n), o.url = f + n), o.ifModified && (r.lastModified[f] && y.setRequestHeader("If-Modified-Since", r.lastModified[f]), r.etag[f] && y.setRequestHeader("If-None-Match", r.etag[f])), (o.data && o.hasContent && o.contentType !== !1 || c.contentType) && y.setRequestHeader("Content-Type", o.contentType), y.setRequestHeader("Accept", o.dataTypes[0] && o.accepts[o.dataTypes[0]] ? o.accepts[o.dataTypes[0]] + ("*" !== o.dataTypes[0] ? ", " + Hb + "; q=0.01" : "") : o.accepts["*"]);
            for (m in o.headers) y.setRequestHeader(m, o.headers[m]);
            if (o.beforeSend && (o.beforeSend.call(p, y, o) === !1 || k)) return y.abort();
            if (x = "abort", t.add(o.complete), y.done(o.success), y.fail(o.error), e = Kb(Gb, o, c, y)) {
                if (y.readyState = 1, l && q.trigger("ajaxSend", [y, o]), k) return y;
                o.async && o.timeout > 0 && (i = a.setTimeout(function() {
                    y.abort("timeout")
                }, o.timeout));
                try {
                    k = !1, e.send(v, A)
                } catch (z) {
                    if (k) throw z;
                    A(-1, z)
                }
            } else A(-1, "No Transport");

            function A(b, c, d, h) {
                var j, m, n, v, w, x = c;
                k || (k = !0, i && a.clearTimeout(i), e = void 0, g = h || "", y.readyState = b > 0 ? 4 : 0, j = b >= 200 && b < 300 || 304 === b, d && (v = Mb(o, y, d)), v = Nb(o, v, y, j), j ? (o.ifModified && (w = y.getResponseHeader("Last-Modified"), w && (r.lastModified[f] = w), w = y.getResponseHeader("etag"), w && (r.etag[f] = w)), 204 === b || "HEAD" === o.type ? x = "nocontent" : 304 === b ? x = "notmodified" : (x = v.state, m = v.data, n = v.error, j = !n)) : (n = x, !b && x || (x = "error", b < 0 && (b = 0))), y.status = b, y.statusText = (c || x) + "", j ? s.resolveWith(p, [m, x, y]) : s.rejectWith(p, [y, x, n]), y.statusCode(u), u = void 0, l && q.trigger(j ? "ajaxSuccess" : "ajaxError", [y, o, j ? m : n]), t.fireWith(p, [y, x]), l && (q.trigger("ajaxComplete", [y, o]), --r.active || r.event.trigger("ajaxStop")))
            }
            return y
        },
        getJSON: function(a, b, c) {
            return r.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return r.get(a, void 0, b, "script")
        }
    }), r.each(["get", "post"], function(a, b) {
        r[b] = function(a, c, d, e) {
            return r.isFunction(c) && (e = e || d, d = c, c = void 0), r.ajax(r.extend({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            }, r.isPlainObject(a) && a))
        }
    }), r._evalUrl = function(a) {
        return r.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    }, r.fn.extend({
        wrapAll: function(a) {
            var b;
            return this[0] && (r.isFunction(a) && (a = a.call(this[0])), b = r(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                var a = this;
                while (a.firstElementChild) a = a.firstElementChild;
                return a
            }).append(this)), this
        },
        wrapInner: function(a) {
            return r.isFunction(a) ? this.each(function(b) {
                r(this).wrapInner(a.call(this, b))
            }) : this.each(function() {
                var b = r(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = r.isFunction(a);
            return this.each(function(c) {
                r(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function(a) {
            return this.parent(a).not("body").each(function() {
                r(this).replaceWith(this.childNodes)
            }), this
        }
    }), r.expr.pseudos.hidden = function(a) {
        return !r.expr.pseudos.visible(a)
    }, r.expr.pseudos.visible = function(a) {
        return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length)
    }, r.ajaxSettings.xhr = function() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    };
    var Ob = {
            0: 200,
            1223: 204
        },
        Pb = r.ajaxSettings.xhr();
    o.cors = !!Pb && "withCredentials" in Pb, o.ajax = Pb = !!Pb, r.ajaxTransport(function(b) {
        var c, d;
        if (o.cors || Pb && !b.crossDomain) return {
            send: function(e, f) {
                var g, h = b.xhr();
                if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields)
                    for (g in b.xhrFields) h[g] = b.xhrFields[g];
                b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                for (g in e) h.setRequestHeader(g, e[g]);
                c = function(a) {
                    return function() {
                        c && (c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Ob[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? {
                            binary: h.response
                        } : {
                            text: h.responseText
                        }, h.getAllResponseHeaders()))
                    }
                }, h.onload = c(), d = h.onerror = c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function() {
                    4 === h.readyState && a.setTimeout(function() {
                        c && d()
                    })
                }, c = c("abort");
                try {
                    h.send(b.hasContent && b.data || null)
                } catch (i) {
                    if (c) throw i
                }
            },
            abort: function() {
                c && c()
            }
        }
    }), r.ajaxPrefilter(function(a) {
        a.crossDomain && (a.contents.script = !1)
    }), r.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(a) {
                return r.globalEval(a), a
            }
        }
    }), r.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
    }), r.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function(e, f) {
                    b = r("<script>").prop({
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function(a) {
                        b.remove(), c = null, a && f("error" === a.type ? 404 : 200, a.type)
                    }), d.head.appendChild(b[0])
                },
                abort: function() {
                    c && c()
                }
            }
        }
    });
    var Qb = [],
        Rb = /(=)\?(?=&|$)|\?\?/;
    r.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = Qb.pop() || r.expando + "_" + rb++;
            return this[a] = !0, a
        }
    }), r.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (Rb.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Rb.test(b.data) && "data");
        if (h || "jsonp" === b.dataTypes[0]) return e = b.jsonpCallback = r.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Rb, "$1" + e) : b.jsonp !== !1 && (b.url += (sb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
            return g || r.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments
        }, d.always(function() {
            void 0 === f ? r(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Qb.push(e)), g && r.isFunction(f) && f(g[0]), g = f = void 0
        }), "script"
    }), o.createHTMLDocument = function() {
        var a = d.implementation.createHTMLDocument("").body;
        return a.innerHTML = "<form></form><form></form>", 2 === a.childNodes.length
    }(), r.parseHTML = function(a, b, c) {
        if ("string" != typeof a) return [];
        "boolean" == typeof b && (c = b, b = !1);
        var e, f, g;
        return b || (o.createHTMLDocument ? (b = d.implementation.createHTMLDocument(""), e = b.createElement("base"), e.href = d.location.href, b.head.appendChild(e)) : b = d), f = B.exec(a), g = !c && [], f ? [b.createElement(f[1])] : (f = pa([a], b, g), g && g.length && r(g).remove(), r.merge([], f.childNodes))
    }, r.fn.load = function(a, b, c) {
        var d, e, f, g = this,
            h = a.indexOf(" ");
        return h > -1 && (d = mb(a.slice(h)), a = a.slice(0, h)), r.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && r.ajax({
            url: a,
            type: e || "GET",
            dataType: "html",
            data: b
        }).done(function(a) {
            f = arguments, g.html(d ? r("<div>").append(r.parseHTML(a)).find(d) : a)
        }).always(c && function(a, b) {
            g.each(function() {
                c.apply(this, f || [a.responseText, b, a])
            })
        }), this
    }, r.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        r.fn[b] = function(a) {
            return this.on(b, a)
        }
    }), r.expr.pseudos.animated = function(a) {
        return r.grep(r.timers, function(b) {
            return a === b.elem
        }).length
    };

    function Sb(a) {
        return r.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
    }
    r.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = r.css(a, "position"),
                l = r(a),
                m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = r.css(a, "top"), i = r.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), r.isFunction(b) && (b = b.call(a, c, r.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }
    }, r.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                r.offset.setOffset(this, a, b)
            });
            var b, c, d, e, f = this[0];
            if (f) return f.getClientRects().length ? (d = f.getBoundingClientRect(), d.width || d.height ? (e = f.ownerDocument, c = Sb(e), b = e.documentElement, {
                top: d.top + c.pageYOffset - b.clientTop,
                left: d.left + c.pageXOffset - b.clientLeft
            }) : d) : {
                top: 0,
                left: 0
            }
        },
        position: function() {
            if (this[0]) {
                var a, b, c = this[0],
                    d = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === r.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), r.nodeName(a[0], "html") || (d = a.offset()), d = {
                    top: d.top + r.css(a[0], "borderTopWidth", !0),
                    left: d.left + r.css(a[0], "borderLeftWidth", !0)
                }), {
                    top: b.top - d.top - r.css(c, "marginTop", !0),
                    left: b.left - d.left - r.css(c, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent;
                while (a && "static" === r.css(a, "position")) a = a.offsetParent;
                return a || qa
            })
        }
    }), r.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, b) {
        var c = "pageYOffset" === b;
        r.fn[a] = function(d) {
            return S(this, function(a, d, e) {
                var f = Sb(a);
                return void 0 === e ? f ? f[b] : a[d] : void(f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e)
            }, a, d, arguments.length)
        }
    }), r.each(["top", "left"], function(a, b) {
        r.cssHooks[b] = Oa(o.pixelPosition, function(a, c) {
            if (c) return c = Na(a, b), La.test(c) ? r(a).position()[b] + "px" : c
        })
    }), r.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        r.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            r.fn[d] = function(e, f) {
                var g = arguments.length && (c || "boolean" != typeof e),
                    h = c || (e === !0 || f === !0 ? "margin" : "border");
                return S(this, function(b, c, e) {
                    var f;
                    return r.isWindow(b) ? 0 === d.indexOf("outer") ? b["inner" + a] : b.document.documentElement["client" + a] : 9 === b.nodeType ? (f = b.documentElement, Math.max(b.body["scroll" + a], f["scroll" + a], b.body["offset" + a], f["offset" + a], f["client" + a])) : void 0 === e ? r.css(b, c, h) : r.style(b, c, e, h)
                }, b, g ? e : void 0, g)
            }
        })
    }), r.fn.extend({
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    }), r.parseJSON = JSON.parse, "function" == typeof define && define.amd && define("jquery", [], function() {
        return r
    });
    var Tb = a.jQuery,
        Ub = a.$;
    return r.noConflict = function(b) {
        return a.$ === r && (a.$ = Ub), b && a.jQuery === r && (a.jQuery = Tb), r
    }, b || (a.jQuery = a.$ = r), r
});;

/**
 * Minified by jsDelivr using UglifyJS v3.1.10.
 * Original file: /npm/underscore@1.8.3/underscore.js
 * 
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
(function() {
    function n(n) {
        return function(r, t, e, u) {
            t = b(t, u, 4);
            var i = !k(r) && m.keys(r),
                o = (i || r).length,
                a = n > 0 ? 0 : o - 1;
            return arguments.length < 3 && (e = r[i ? i[a] : a], a += n),
                function(r, t, e, u, i, o) {
                    for (; i >= 0 && i < o; i += n) {
                        var a = u ? u[i] : i;
                        e = t(e, r[a], a, r)
                    }
                    return e
                }(r, t, e, i, a, o)
        }
    }

    function r(n) {
        return function(r, t, e) {
            t = x(t, e);
            for (var u = O(r), i = n > 0 ? 0 : u - 1; i >= 0 && i < u; i += n)
                if (t(r[i], i, r)) return i;
            return -1
        }
    }

    function t(n, r, t) {
        return function(e, u, i) {
            var o = 0,
                a = O(e);
            if ("number" == typeof i) n > 0 ? o = i >= 0 ? i : Math.max(i + a, o) : a = i >= 0 ? Math.min(i + 1, a) : i + a + 1;
            else if (t && i && a) return i = t(e, u), e[i] === u ? i : -1;
            if (u != u) return (i = r(l.call(e, o, a), m.isNaN)) >= 0 ? i + o : -1;
            for (i = n > 0 ? o : a - 1; i >= 0 && i < a; i += n)
                if (e[i] === u) return i;
            return -1
        }
    }

    function e(n, r) {
        var t = I.length,
            e = n.constructor,
            u = m.isFunction(e) && e.prototype || a,
            i = "constructor";
        for (m.has(n, i) && !m.contains(r, i) && r.push(i); t--;)(i = I[t]) in n && n[i] !== u[i] && !m.contains(r, i) && r.push(i)
    }
    var u = this,
        i = u._,
        o = Array.prototype,
        a = Object.prototype,
        c = Function.prototype,
        f = o.push,
        l = o.slice,
        s = a.toString,
        p = a.hasOwnProperty,
        h = Array.isArray,
        v = Object.keys,
        y = c.bind,
        d = Object.create,
        g = function() {},
        m = function(n) {
            return n instanceof m ? n : this instanceof m ? void(this._wrapped = n) : new m(n)
        };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = m), exports._ = m) : u._ = m, m.VERSION = "1.8.3";
    var b = function(n, r, t) {
            if (void 0 === r) return n;
            switch (null == t ? 3 : t) {
                case 1:
                    return function(t) {
                        return n.call(r, t)
                    };
                case 2:
                    return function(t, e) {
                        return n.call(r, t, e)
                    };
                case 3:
                    return function(t, e, u) {
                        return n.call(r, t, e, u)
                    };
                case 4:
                    return function(t, e, u, i) {
                        return n.call(r, t, e, u, i)
                    }
            }
            return function() {
                return n.apply(r, arguments)
            }
        },
        x = function(n, r, t) {
            return null == n ? m.identity : m.isFunction(n) ? b(n, r, t) : m.isObject(n) ? m.matcher(n) : m.property(n)
        };
    m.iteratee = function(n, r) {
        return x(n, r, 1 / 0)
    };
    var _ = function(n, r) {
            return function(t) {
                var e = arguments.length;
                if (e < 2 || null == t) return t;
                for (var u = 1; u < e; u++)
                    for (var i = arguments[u], o = n(i), a = o.length, c = 0; c < a; c++) {
                        var f = o[c];
                        r && void 0 !== t[f] || (t[f] = i[f])
                    }
                return t
            }
        },
        j = function(n) {
            if (!m.isObject(n)) return {};
            if (d) return d(n);
            g.prototype = n;
            var r = new g;
            return g.prototype = null, r
        },
        w = function(n) {
            return function(r) {
                return null == r ? void 0 : r[n]
            }
        },
        A = Math.pow(2, 53) - 1,
        O = w("length"),
        k = function(n) {
            var r = O(n);
            return "number" == typeof r && r >= 0 && r <= A
        };
    m.each = m.forEach = function(n, r, t) {
        r = b(r, t);
        var e, u;
        if (k(n))
            for (e = 0, u = n.length; e < u; e++) r(n[e], e, n);
        else {
            var i = m.keys(n);
            for (e = 0, u = i.length; e < u; e++) r(n[i[e]], i[e], n)
        }
        return n
    }, m.map = m.collect = function(n, r, t) {
        r = x(r, t);
        for (var e = !k(n) && m.keys(n), u = (e || n).length, i = Array(u), o = 0; o < u; o++) {
            var a = e ? e[o] : o;
            i[o] = r(n[a], a, n)
        }
        return i
    }, m.reduce = m.foldl = m.inject = n(1), m.reduceRight = m.foldr = n(-1), m.find = m.detect = function(n, r, t) {
        var e;
        if (void 0 !== (e = k(n) ? m.findIndex(n, r, t) : m.findKey(n, r, t)) && -1 !== e) return n[e]
    }, m.filter = m.select = function(n, r, t) {
        var e = [];
        return r = x(r, t), m.each(n, function(n, t, u) {
            r(n, t, u) && e.push(n)
        }), e
    }, m.reject = function(n, r, t) {
        return m.filter(n, m.negate(x(r)), t)
    }, m.every = m.all = function(n, r, t) {
        r = x(r, t);
        for (var e = !k(n) && m.keys(n), u = (e || n).length, i = 0; i < u; i++) {
            var o = e ? e[i] : i;
            if (!r(n[o], o, n)) return !1
        }
        return !0
    }, m.some = m.any = function(n, r, t) {
        r = x(r, t);
        for (var e = !k(n) && m.keys(n), u = (e || n).length, i = 0; i < u; i++) {
            var o = e ? e[i] : i;
            if (r(n[o], o, n)) return !0
        }
        return !1
    }, m.contains = m.includes = m.include = function(n, r, t, e) {
        return k(n) || (n = m.values(n)), ("number" != typeof t || e) && (t = 0), m.indexOf(n, r, t) >= 0
    }, m.invoke = function(n, r) {
        var t = l.call(arguments, 2),
            e = m.isFunction(r);
        return m.map(n, function(n) {
            var u = e ? r : n[r];
            return null == u ? u : u.apply(n, t)
        })
    }, m.pluck = function(n, r) {
        return m.map(n, m.property(r))
    }, m.where = function(n, r) {
        return m.filter(n, m.matcher(r))
    }, m.findWhere = function(n, r) {
        return m.find(n, m.matcher(r))
    }, m.max = function(n, r, t) {
        var e, u, i = -1 / 0,
            o = -1 / 0;
        if (null == r && null != n)
            for (var a = 0, c = (n = k(n) ? n : m.values(n)).length; a < c; a++)(e = n[a]) > i && (i = e);
        else r = x(r, t), m.each(n, function(n, t, e) {
            ((u = r(n, t, e)) > o || u === -1 / 0 && i === -1 / 0) && (i = n, o = u)
        });
        return i
    }, m.min = function(n, r, t) {
        var e, u, i = 1 / 0,
            o = 1 / 0;
        if (null == r && null != n)
            for (var a = 0, c = (n = k(n) ? n : m.values(n)).length; a < c; a++)(e = n[a]) < i && (i = e);
        else r = x(r, t), m.each(n, function(n, t, e) {
            ((u = r(n, t, e)) < o || u === 1 / 0 && i === 1 / 0) && (i = n, o = u)
        });
        return i
    }, m.shuffle = function(n) {
        for (var r, t = k(n) ? n : m.values(n), e = t.length, u = Array(e), i = 0; i < e; i++)(r = m.random(0, i)) !== i && (u[i] = u[r]), u[r] = t[i];
        return u
    }, m.sample = function(n, r, t) {
        return null == r || t ? (k(n) || (n = m.values(n)), n[m.random(n.length - 1)]) : m.shuffle(n).slice(0, Math.max(0, r))
    }, m.sortBy = function(n, r, t) {
        return r = x(r, t), m.pluck(m.map(n, function(n, t, e) {
            return {
                value: n,
                index: t,
                criteria: r(n, t, e)
            }
        }).sort(function(n, r) {
            var t = n.criteria,
                e = r.criteria;
            if (t !== e) {
                if (t > e || void 0 === t) return 1;
                if (t < e || void 0 === e) return -1
            }
            return n.index - r.index
        }), "value")
    };
    var F = function(n) {
        return function(r, t, e) {
            var u = {};
            return t = x(t, e), m.each(r, function(e, i) {
                var o = t(e, i, r);
                n(u, e, o)
            }), u
        }
    };
    m.groupBy = F(function(n, r, t) {
        m.has(n, t) ? n[t].push(r) : n[t] = [r]
    }), m.indexBy = F(function(n, r, t) {
        n[t] = r
    }), m.countBy = F(function(n, r, t) {
        m.has(n, t) ? n[t]++ : n[t] = 1
    }), m.toArray = function(n) {
        return n ? m.isArray(n) ? l.call(n) : k(n) ? m.map(n, m.identity) : m.values(n) : []
    }, m.size = function(n) {
        return null == n ? 0 : k(n) ? n.length : m.keys(n).length
    }, m.partition = function(n, r, t) {
        r = x(r, t);
        var e = [],
            u = [];
        return m.each(n, function(n, t, i) {
            (r(n, t, i) ? e : u).push(n)
        }), [e, u]
    }, m.first = m.head = m.take = function(n, r, t) {
        if (null != n) return null == r || t ? n[0] : m.initial(n, n.length - r)
    }, m.initial = function(n, r, t) {
        return l.call(n, 0, Math.max(0, n.length - (null == r || t ? 1 : r)))
    }, m.last = function(n, r, t) {
        if (null != n) return null == r || t ? n[n.length - 1] : m.rest(n, Math.max(0, n.length - r))
    }, m.rest = m.tail = m.drop = function(n, r, t) {
        return l.call(n, null == r || t ? 1 : r)
    }, m.compact = function(n) {
        return m.filter(n, m.identity)
    };
    var S = function(n, r, t, e) {
        for (var u = [], i = 0, o = e || 0, a = O(n); o < a; o++) {
            var c = n[o];
            if (k(c) && (m.isArray(c) || m.isArguments(c))) {
                r || (c = S(c, r, t));
                var f = 0,
                    l = c.length;
                for (u.length += l; f < l;) u[i++] = c[f++]
            } else t || (u[i++] = c)
        }
        return u
    };
    m.flatten = function(n, r) {
        return S(n, r, !1)
    }, m.without = function(n) {
        return m.difference(n, l.call(arguments, 1))
    }, m.uniq = m.unique = function(n, r, t, e) {
        m.isBoolean(r) || (e = t, t = r, r = !1), null != t && (t = x(t, e));
        for (var u = [], i = [], o = 0, a = O(n); o < a; o++) {
            var c = n[o],
                f = t ? t(c, o, n) : c;
            r ? (o && i === f || u.push(c), i = f) : t ? m.contains(i, f) || (i.push(f), u.push(c)) : m.contains(u, c) || u.push(c)
        }
        return u
    }, m.union = function() {
        return m.uniq(S(arguments, !0, !0))
    }, m.intersection = function(n) {
        for (var r = [], t = arguments.length, e = 0, u = O(n); e < u; e++) {
            var i = n[e];
            if (!m.contains(r, i)) {
                for (var o = 1; o < t && m.contains(arguments[o], i); o++);
                o === t && r.push(i)
            }
        }
        return r
    }, m.difference = function(n) {
        var r = S(arguments, !0, !0, 1);
        return m.filter(n, function(n) {
            return !m.contains(r, n)
        })
    }, m.zip = function() {
        return m.unzip(arguments)
    }, m.unzip = function(n) {
        for (var r = n && m.max(n, O).length || 0, t = Array(r), e = 0; e < r; e++) t[e] = m.pluck(n, e);
        return t
    }, m.object = function(n, r) {
        for (var t = {}, e = 0, u = O(n); e < u; e++) r ? t[n[e]] = r[e] : t[n[e][0]] = n[e][1];
        return t
    }, m.findIndex = r(1), m.findLastIndex = r(-1), m.sortedIndex = function(n, r, t, e) {
        for (var u = (t = x(t, e, 1))(r), i = 0, o = O(n); i < o;) {
            var a = Math.floor((i + o) / 2);
            t(n[a]) < u ? i = a + 1 : o = a
        }
        return i
    }, m.indexOf = t(1, m.findIndex, m.sortedIndex), m.lastIndexOf = t(-1, m.findLastIndex), m.range = function(n, r, t) {
        null == r && (r = n || 0, n = 0), t = t || 1;
        for (var e = Math.max(Math.ceil((r - n) / t), 0), u = Array(e), i = 0; i < e; i++, n += t) u[i] = n;
        return u
    };
    var E = function(n, r, t, e, u) {
        if (!(e instanceof r)) return n.apply(t, u);
        var i = j(n.prototype),
            o = n.apply(i, u);
        return m.isObject(o) ? o : i
    };
    m.bind = function(n, r) {
        if (y && n.bind === y) return y.apply(n, l.call(arguments, 1));
        if (!m.isFunction(n)) throw new TypeError("Bind must be called on a function");
        var t = l.call(arguments, 2),
            e = function() {
                return E(n, e, r, this, t.concat(l.call(arguments)))
            };
        return e
    }, m.partial = function(n) {
        var r = l.call(arguments, 1),
            t = function() {
                for (var e = 0, u = r.length, i = Array(u), o = 0; o < u; o++) i[o] = r[o] === m ? arguments[e++] : r[o];
                for (; e < arguments.length;) i.push(arguments[e++]);
                return E(n, t, this, this, i)
            };
        return t
    }, m.bindAll = function(n) {
        var r, t, e = arguments.length;
        if (e <= 1) throw new Error("bindAll must be passed function names");
        for (r = 1; r < e; r++) n[t = arguments[r]] = m.bind(n[t], n);
        return n
    }, m.memoize = function(n, r) {
        var t = function(e) {
            var u = t.cache,
                i = "" + (r ? r.apply(this, arguments) : e);
            return m.has(u, i) || (u[i] = n.apply(this, arguments)), u[i]
        };
        return t.cache = {}, t
    }, m.delay = function(n, r) {
        var t = l.call(arguments, 2);
        return setTimeout(function() {
            return n.apply(null, t)
        }, r)
    }, m.defer = m.partial(m.delay, m, 1), m.throttle = function(n, r, t) {
        var e, u, i, o = null,
            a = 0;
        t || (t = {});
        var c = function() {
            a = !1 === t.leading ? 0 : m.now(), o = null, i = n.apply(e, u), o || (e = u = null)
        };
        return function() {
            var f = m.now();
            a || !1 !== t.leading || (a = f);
            var l = r - (f - a);
            return e = this, u = arguments, l <= 0 || l > r ? (o && (clearTimeout(o), o = null), a = f, i = n.apply(e, u), o || (e = u = null)) : o || !1 === t.trailing || (o = setTimeout(c, l)), i
        }
    }, m.debounce = function(n, r, t) {
        var e, u, i, o, a, c = function() {
            var f = m.now() - o;
            f < r && f >= 0 ? e = setTimeout(c, r - f) : (e = null, t || (a = n.apply(i, u), e || (i = u = null)))
        };
        return function() {
            i = this, u = arguments, o = m.now();
            var f = t && !e;
            return e || (e = setTimeout(c, r)), f && (a = n.apply(i, u), i = u = null), a
        }
    }, m.wrap = function(n, r) {
        return m.partial(r, n)
    }, m.negate = function(n) {
        return function() {
            return !n.apply(this, arguments)
        }
    }, m.compose = function() {
        var n = arguments,
            r = n.length - 1;
        return function() {
            for (var t = r, e = n[r].apply(this, arguments); t--;) e = n[t].call(this, e);
            return e
        }
    }, m.after = function(n, r) {
        return function() {
            if (--n < 1) return r.apply(this, arguments)
        }
    }, m.before = function(n, r) {
        var t;
        return function() {
            return --n > 0 && (t = r.apply(this, arguments)), n <= 1 && (r = null), t
        }
    }, m.once = m.partial(m.before, 2);
    var M = !{
            toString: null
        }.propertyIsEnumerable("toString"),
        I = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
    m.keys = function(n) {
        if (!m.isObject(n)) return [];
        if (v) return v(n);
        var r = [];
        for (var t in n) m.has(n, t) && r.push(t);
        return M && e(n, r), r
    }, m.allKeys = function(n) {
        if (!m.isObject(n)) return [];
        var r = [];
        for (var t in n) r.push(t);
        return M && e(n, r), r
    }, m.values = function(n) {
        for (var r = m.keys(n), t = r.length, e = Array(t), u = 0; u < t; u++) e[u] = n[r[u]];
        return e
    }, m.mapObject = function(n, r, t) {
        r = x(r, t);
        for (var e, u = m.keys(n), i = u.length, o = {}, a = 0; a < i; a++) o[e = u[a]] = r(n[e], e, n);
        return o
    }, m.pairs = function(n) {
        for (var r = m.keys(n), t = r.length, e = Array(t), u = 0; u < t; u++) e[u] = [r[u], n[r[u]]];
        return e
    }, m.invert = function(n) {
        for (var r = {}, t = m.keys(n), e = 0, u = t.length; e < u; e++) r[n[t[e]]] = t[e];
        return r
    }, m.functions = m.methods = function(n) {
        var r = [];
        for (var t in n) m.isFunction(n[t]) && r.push(t);
        return r.sort()
    }, m.extend = _(m.allKeys), m.extendOwn = m.assign = _(m.keys), m.findKey = function(n, r, t) {
        r = x(r, t);
        for (var e, u = m.keys(n), i = 0, o = u.length; i < o; i++)
            if (e = u[i], r(n[e], e, n)) return e
    }, m.pick = function(n, r, t) {
        var e, u, i = {},
            o = n;
        if (null == o) return i;
        m.isFunction(r) ? (u = m.allKeys(o), e = b(r, t)) : (u = S(arguments, !1, !1, 1), e = function(n, r, t) {
            return r in t
        }, o = Object(o));
        for (var a = 0, c = u.length; a < c; a++) {
            var f = u[a],
                l = o[f];
            e(l, f, o) && (i[f] = l)
        }
        return i
    }, m.omit = function(n, r, t) {
        if (m.isFunction(r)) r = m.negate(r);
        else {
            var e = m.map(S(arguments, !1, !1, 1), String);
            r = function(n, r) {
                return !m.contains(e, r)
            }
        }
        return m.pick(n, r, t)
    }, m.defaults = _(m.allKeys, !0), m.create = function(n, r) {
        var t = j(n);
        return r && m.extendOwn(t, r), t
    }, m.clone = function(n) {
        return m.isObject(n) ? m.isArray(n) ? n.slice() : m.extend({}, n) : n
    }, m.tap = function(n, r) {
        return r(n), n
    }, m.isMatch = function(n, r) {
        var t = m.keys(r),
            e = t.length;
        if (null == n) return !e;
        for (var u = Object(n), i = 0; i < e; i++) {
            var o = t[i];
            if (r[o] !== u[o] || !(o in u)) return !1
        }
        return !0
    };
    var N = function(n, r, t, e) {
        if (n === r) return 0 !== n || 1 / n == 1 / r;
        if (null == n || null == r) return n === r;
        n instanceof m && (n = n._wrapped), r instanceof m && (r = r._wrapped);
        var u = s.call(n);
        if (u !== s.call(r)) return !1;
        switch (u) {
            case "[object RegExp]":
            case "[object String]":
                return "" + n == "" + r;
            case "[object Number]":
                return +n != +n ? +r != +r : 0 == +n ? 1 / +n == 1 / r : +n == +r;
            case "[object Date]":
            case "[object Boolean]":
                return +n == +r
        }
        var i = "[object Array]" === u;
        if (!i) {
            if ("object" != typeof n || "object" != typeof r) return !1;
            var o = n.constructor,
                a = r.constructor;
            if (o !== a && !(m.isFunction(o) && o instanceof o && m.isFunction(a) && a instanceof a) && "constructor" in n && "constructor" in r) return !1
        }
        t = t || [], e = e || [];
        for (var c = t.length; c--;)
            if (t[c] === n) return e[c] === r;
        if (t.push(n), e.push(r), i) {
            if ((c = n.length) !== r.length) return !1;
            for (; c--;)
                if (!N(n[c], r[c], t, e)) return !1
        } else {
            var f, l = m.keys(n);
            if (c = l.length, m.keys(r).length !== c) return !1;
            for (; c--;)
                if (f = l[c], !m.has(r, f) || !N(n[f], r[f], t, e)) return !1
        }
        return t.pop(), e.pop(), !0
    };
    m.isEqual = function(n, r) {
        return N(n, r)
    }, m.isEmpty = function(n) {
        return null == n || (k(n) && (m.isArray(n) || m.isString(n) || m.isArguments(n)) ? 0 === n.length : 0 === m.keys(n).length)
    }, m.isElement = function(n) {
        return !(!n || 1 !== n.nodeType)
    }, m.isArray = h || function(n) {
        return "[object Array]" === s.call(n)
    }, m.isObject = function(n) {
        var r = typeof n;
        return "function" === r || "object" === r && !!n
    }, m.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function(n) {
        m["is" + n] = function(r) {
            return s.call(r) === "[object " + n + "]"
        }
    }), m.isArguments(arguments) || (m.isArguments = function(n) {
        return m.has(n, "callee")
    }), "function" != typeof /./ && "object" != typeof Int8Array && (m.isFunction = function(n) {
        return "function" == typeof n || !1
    }), m.isFinite = function(n) {
        return isFinite(n) && !isNaN(parseFloat(n))
    }, m.isNaN = function(n) {
        return m.isNumber(n) && n !== +n
    }, m.isBoolean = function(n) {
        return !0 === n || !1 === n || "[object Boolean]" === s.call(n)
    }, m.isNull = function(n) {
        return null === n
    }, m.isUndefined = function(n) {
        return void 0 === n
    }, m.has = function(n, r) {
        return null != n && p.call(n, r)
    }, m.noConflict = function() {
        return u._ = i, this
    }, m.identity = function(n) {
        return n
    }, m.constant = function(n) {
        return function() {
            return n
        }
    }, m.noop = function() {}, m.property = w, m.propertyOf = function(n) {
        return null == n ? function() {} : function(r) {
            return n[r]
        }
    }, m.matcher = m.matches = function(n) {
        return n = m.extendOwn({}, n),
            function(r) {
                return m.isMatch(r, n)
            }
    }, m.times = function(n, r, t) {
        var e = Array(Math.max(0, n));
        r = b(r, t, 1);
        for (var u = 0; u < n; u++) e[u] = r(u);
        return e
    }, m.random = function(n, r) {
        return null == r && (r = n, n = 0), n + Math.floor(Math.random() * (r - n + 1))
    }, m.now = Date.now || function() {
        return (new Date).getTime()
    };
    var B = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "`": "&#x60;"
        },
        T = m.invert(B),
        R = function(n) {
            var r = function(r) {
                    return n[r]
                },
                t = "(?:" + m.keys(n).join("|") + ")",
                e = RegExp(t),
                u = RegExp(t, "g");
            return function(n) {
                return n = null == n ? "" : "" + n, e.test(n) ? n.replace(u, r) : n
            }
        };
    m.escape = R(B), m.unescape = R(T), m.result = function(n, r, t) {
        var e = null == n ? void 0 : n[r];
        return void 0 === e && (e = t), m.isFunction(e) ? e.call(n) : e
    };
    var q = 0;
    m.uniqueId = function(n) {
        var r = ++q + "";
        return n ? n + r : r
    }, m.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var K = /(.)^/,
        z = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "\u2028": "u2028",
            "\u2029": "u2029"
        },
        D = /\\|'|\r|\n|\u2028|\u2029/g,
        L = function(n) {
            return "\\" + z[n]
        };
    m.template = function(n, r, t) {
        !r && t && (r = t), r = m.defaults({}, r, m.templateSettings);
        var e = RegExp([(r.escape || K).source, (r.interpolate || K).source, (r.evaluate || K).source].join("|") + "|$", "g"),
            u = 0,
            i = "__p+='";
        n.replace(e, function(r, t, e, o, a) {
            return i += n.slice(u, a).replace(D, L), u = a + r.length, t ? i += "'+\n((__t=(" + t + "))==null?'':_.escape(__t))+\n'" : e ? i += "'+\n((__t=(" + e + "))==null?'':__t)+\n'" : o && (i += "';\n" + o + "\n__p+='"), r
        }), i += "';\n", r.variable || (i = "with(obj||{}){\n" + i + "}\n"), i = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + i + "return __p;\n";
        try {
            var o = new Function(r.variable || "obj", "_", i)
        } catch (n) {
            throw n.source = i, n
        }
        var a = function(n) {
                return o.call(this, n, m)
            },
            c = r.variable || "obj";
        return a.source = "function(" + c + "){\n" + i + "}", a
    }, m.chain = function(n) {
        var r = m(n);
        return r._chain = !0, r
    };
    var P = function(n, r) {
        return n._chain ? m(r).chain() : r
    };
    m.mixin = function(n) {
        m.each(m.functions(n), function(r) {
            var t = m[r] = n[r];
            m.prototype[r] = function() {
                var n = [this._wrapped];
                return f.apply(n, arguments), P(this, t.apply(m, n))
            }
        })
    }, m.mixin(m), m.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(n) {
        var r = o[n];
        m.prototype[n] = function() {
            var t = this._wrapped;
            return r.apply(t, arguments), "shift" !== n && "splice" !== n || 0 !== t.length || delete t[0], P(this, t)
        }
    }), m.each(["concat", "join", "slice"], function(n) {
        var r = o[n];
        m.prototype[n] = function() {
            return P(this, r.apply(this._wrapped, arguments))
        }
    }), m.prototype.value = function() {
        return this._wrapped
    }, m.prototype.valueOf = m.prototype.toJSON = m.prototype.value, m.prototype.toString = function() {
        return "" + this._wrapped
    }, "function" == typeof define && define.amd && define("underscore", [], function() {
        return m
    })
}).call(this);;

! function(t, e) {
    "function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? module.exports = e(require, exports, module) : t.Tether = e()
}(this, function(t, e, o) {
    "use strict";

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function n(t) {
        var e = t.getBoundingClientRect(),
            o = {};
        for (var i in e) o[i] = e[i];
        if (t.ownerDocument !== document) {
            var r = t.ownerDocument.defaultView.frameElement;
            if (r) {
                var s = n(r);
                o.top += s.top, o.bottom += s.top, o.left += s.left, o.right += s.left
            }
        }
        return o
    }

    function r(t) {
        var e = getComputedStyle(t) || {},
            o = e.position,
            i = [];
        if ("fixed" === o) return [t];
        for (var n = t;
            (n = n.parentNode) && n && 1 === n.nodeType;) {
            var r = void 0;
            try {
                r = getComputedStyle(n)
            } catch (s) {}
            if ("undefined" == typeof r || null === r) return i.push(n), i;
            var a = r,
                f = a.overflow,
                l = a.overflowX,
                h = a.overflowY;
            /(auto|scroll)/.test(f + h + l) && ("absolute" !== o || ["relative", "absolute", "fixed"].indexOf(r.position) >= 0) && i.push(n)
        }
        return i.push(t.ownerDocument.body), t.ownerDocument !== document && i.push(t.ownerDocument.defaultView), i
    }

    function s() {
        A && document.body.removeChild(A), A = null
    }

    function a(t) {
        var e = void 0;
        t === document ? (e = document, t = document.documentElement) : e = t.ownerDocument;
        var o = e.documentElement,
            i = n(t),
            r = P();
        return i.top -= r.top, i.left -= r.left, "undefined" == typeof i.width && (i.width = document.body.scrollWidth - i.left - i.right), "undefined" == typeof i.height && (i.height = document.body.scrollHeight - i.top - i.bottom), i.top = i.top - o.clientTop, i.left = i.left - o.clientLeft, i.right = e.body.clientWidth - i.width - i.left, i.bottom = e.body.clientHeight - i.height - i.top, i
    }

    function f(t) {
        return t.offsetParent || document.documentElement
    }

    function l() {
        if (M) return M;
        var t = document.createElement("div");
        t.style.width = "100%", t.style.height = "200px";
        var e = document.createElement("div");
        h(e.style, {
            position: "absolute",
            top: 0,
            left: 0,
            pointerEvents: "none",
            visibility: "hidden",
            width: "200px",
            height: "150px",
            overflow: "hidden"
        }), e.appendChild(t), document.body.appendChild(e);
        var o = t.offsetWidth;
        e.style.overflow = "scroll";
        var i = t.offsetWidth;
        o === i && (i = e.clientWidth), document.body.removeChild(e);
        var n = o - i;
        return M = {
            width: n,
            height: n
        }
    }

    function h() {
        var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
            e = [];
        return Array.prototype.push.apply(e, arguments), e.slice(1).forEach(function(e) {
            if (e)
                for (var o in e)({}).hasOwnProperty.call(e, o) && (t[o] = e[o])
        }), t
    }

    function d(t, e) {
        if ("undefined" != typeof t.classList) e.split(" ").forEach(function(e) {
            e.trim() && t.classList.remove(e)
        });
        else {
            var o = new RegExp("(^| )" + e.split(" ").join("|") + "( |$)", "gi"),
                i = c(t).replace(o, " ");
            g(t, i)
        }
    }

    function p(t, e) {
        if ("undefined" != typeof t.classList) e.split(" ").forEach(function(e) {
            e.trim() && t.classList.add(e)
        });
        else {
            d(t, e);
            var o = c(t) + (" " + e);
            g(t, o)
        }
    }

    function u(t, e) {
        if ("undefined" != typeof t.classList) return t.classList.contains(e);
        var o = c(t);
        return new RegExp("(^| )" + e + "( |$)", "gi").test(o)
    }

    function c(t) {
        return t.className instanceof t.ownerDocument.defaultView.SVGAnimatedString ? t.className.baseVal : t.className
    }

    function g(t, e) {
        t.setAttribute("class", e)
    }

    function m(t, e, o) {
        o.forEach(function(o) {
            e.indexOf(o) === -1 && u(t, o) && d(t, o)
        }), e.forEach(function(e) {
            u(t, e) || p(t, e)
        })
    }

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function v(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }

    function y(t, e) {
        var o = arguments.length <= 2 || void 0 === arguments[2] ? 1 : arguments[2];
        return t + o >= e && e >= t - o
    }

    function b() {
        return "undefined" != typeof performance && "undefined" != typeof performance.now ? performance.now() : +new Date
    }

    function w() {
        for (var t = {
                top: 0,
                left: 0
            }, e = arguments.length, o = Array(e), i = 0; i < e; i++) o[i] = arguments[i];
        return o.forEach(function(e) {
            var o = e.top,
                i = e.left;
            "string" == typeof o && (o = parseFloat(o, 10)), "string" == typeof i && (i = parseFloat(i, 10)), t.top += o, t.left += i
        }), t
    }

    function C(t, e) {
        return "string" == typeof t.left && t.left.indexOf("%") !== -1 && (t.left = parseFloat(t.left, 10) / 100 * e.width), "string" == typeof t.top && t.top.indexOf("%") !== -1 && (t.top = parseFloat(t.top, 10) / 100 * e.height), t
    }

    function O(t, e) {
        return "scrollParent" === e ? e = t.scrollParents[0] : "window" === e && (e = [pageXOffset, pageYOffset, innerWidth + pageXOffset, innerHeight + pageYOffset]), e === document && (e = e.documentElement), "undefined" != typeof e.nodeType && ! function() {
            var t = e,
                o = a(e),
                i = o,
                n = getComputedStyle(e);
            if (e = [i.left, i.top, o.width + i.left, o.height + i.top], t.ownerDocument !== document) {
                var r = t.ownerDocument.defaultView;
                e[0] += r.pageXOffset, e[1] += r.pageYOffset, e[2] += r.pageXOffset, e[3] += r.pageYOffset
            }
            G.forEach(function(t, o) {
                t = t[0].toUpperCase() + t.substr(1), "Top" === t || "Left" === t ? e[o] += parseFloat(n["border" + t + "Width"]) : e[o] -= parseFloat(n["border" + t + "Width"])
            })
        }(), e
    }
    var E = function() {
            function t(t, e) {
                for (var o = 0; o < e.length; o++) {
                    var i = e[o];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, o, i) {
                return o && t(e.prototype, o), i && t(e, i), e
            }
        }(),
        x = void 0;
    "undefined" == typeof x && (x = {
        modules: []
    });
    var A = null,
        T = function() {
            var t = 0;
            return function() {
                return ++t
            }
        }(),
        S = {},
        P = function() {
            var t = A;
            t && document.body.contains(t) || (t = document.createElement("div"), t.setAttribute("data-tether-id", T()), h(t.style, {
                top: 0,
                left: 0,
                position: "absolute"
            }), document.body.appendChild(t), A = t);
            var e = t.getAttribute("data-tether-id");
            return "undefined" == typeof S[e] && (S[e] = n(t), k(function() {
                delete S[e]
            })), S[e]
        },
        M = null,
        W = [],
        k = function(t) {
            W.push(t)
        },
        _ = function() {
            for (var t = void 0; t = W.pop();) t()
        },
        B = function() {
            function t() {
                i(this, t)
            }
            return E(t, [{
                key: "on",
                value: function(t, e, o) {
                    var i = !(arguments.length <= 3 || void 0 === arguments[3]) && arguments[3];
                    "undefined" == typeof this.bindings && (this.bindings = {}), "undefined" == typeof this.bindings[t] && (this.bindings[t] = []), this.bindings[t].push({
                        handler: e,
                        ctx: o,
                        once: i
                    })
                }
            }, {
                key: "once",
                value: function(t, e, o) {
                    this.on(t, e, o, !0)
                }
            }, {
                key: "off",
                value: function(t, e) {
                    if ("undefined" != typeof this.bindings && "undefined" != typeof this.bindings[t])
                        if ("undefined" == typeof e) delete this.bindings[t];
                        else
                            for (var o = 0; o < this.bindings[t].length;) this.bindings[t][o].handler === e ? this.bindings[t].splice(o, 1) : ++o
                }
            }, {
                key: "trigger",
                value: function(t) {
                    if ("undefined" != typeof this.bindings && this.bindings[t]) {
                        for (var e = 0, o = arguments.length, i = Array(o > 1 ? o - 1 : 0), n = 1; n < o; n++) i[n - 1] = arguments[n];
                        for (; e < this.bindings[t].length;) {
                            var r = this.bindings[t][e],
                                s = r.handler,
                                a = r.ctx,
                                f = r.once,
                                l = a;
                            "undefined" == typeof l && (l = this), s.apply(l, i), f ? this.bindings[t].splice(e, 1) : ++e
                        }
                    }
                }
            }]), t
        }();
    x.Utils = {
        getActualBoundingClientRect: n,
        getScrollParents: r,
        getBounds: a,
        getOffsetParent: f,
        extend: h,
        addClass: p,
        removeClass: d,
        hasClass: u,
        updateClasses: m,
        defer: k,
        flush: _,
        uniqueId: T,
        Evented: B,
        getScrollBarSize: l,
        removeUtilElements: s
    };
    var z = function() {
            function t(t, e) {
                var o = [],
                    i = !0,
                    n = !1,
                    r = void 0;
                try {
                    for (var s, a = t[Symbol.iterator](); !(i = (s = a.next()).done) && (o.push(s.value), !e || o.length !== e); i = !0);
                } catch (f) {
                    n = !0, r = f
                } finally {
                    try {
                        !i && a["return"] && a["return"]()
                    } finally {
                        if (n) throw r
                    }
                }
                return o
            }
            return function(e, o) {
                if (Array.isArray(e)) return e;
                if (Symbol.iterator in Object(e)) return t(e, o);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }(),
        E = function() {
            function t(t, e) {
                for (var o = 0; o < e.length; o++) {
                    var i = e[o];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, o, i) {
                return o && t(e.prototype, o), i && t(e, i), e
            }
        }(),
        j = function(t, e, o) {
            for (var i = !0; i;) {
                var n = t,
                    r = e,
                    s = o;
                i = !1, null === n && (n = Function.prototype);
                var a = Object.getOwnPropertyDescriptor(n, r);
                if (void 0 !== a) {
                    if ("value" in a) return a.value;
                    var f = a.get;
                    if (void 0 === f) return;
                    return f.call(s)
                }
                var l = Object.getPrototypeOf(n);
                if (null === l) return;
                t = l, e = r, o = s, i = !0, a = l = void 0
            }
        };
    if ("undefined" == typeof x) throw new Error("You must include the utils.js file before tether.js");
    var Y = x.Utils,
        r = Y.getScrollParents,
        a = Y.getBounds,
        f = Y.getOffsetParent,
        h = Y.extend,
        p = Y.addClass,
        d = Y.removeClass,
        m = Y.updateClasses,
        k = Y.defer,
        _ = Y.flush,
        l = Y.getScrollBarSize,
        s = Y.removeUtilElements,
        L = function() {
            if ("undefined" == typeof document) return "";
            for (var t = document.createElement("div"), e = ["transform", "WebkitTransform", "OTransform", "MozTransform", "msTransform"], o = 0; o < e.length; ++o) {
                var i = e[o];
                if (void 0 !== t.style[i]) return i
            }
        }(),
        D = [],
        X = function() {
            D.forEach(function(t) {
                t.position(!1)
            }), _()
        };
    ! function() {
        var t = null,
            e = null,
            o = null,
            i = function n() {
                return "undefined" != typeof e && e > 16 ? (e = Math.min(e - 16, 250), void(o = setTimeout(n, 250))) : void("undefined" != typeof t && b() - t < 10 || (null != o && (clearTimeout(o), o = null), t = b(), X(), e = b() - t))
            };
        "undefined" != typeof window && "undefined" != typeof window.addEventListener && ["resize", "scroll", "touchmove"].forEach(function(t) {
            window.addEventListener(t, i)
        })
    }();
    var F = {
            center: "center",
            left: "right",
            right: "left"
        },
        H = {
            middle: "middle",
            top: "bottom",
            bottom: "top"
        },
        N = {
            top: 0,
            left: 0,
            middle: "50%",
            center: "50%",
            bottom: "100%",
            right: "100%"
        },
        U = function(t, e) {
            var o = t.left,
                i = t.top;
            return "auto" === o && (o = F[e.left]), "auto" === i && (i = H[e.top]), {
                left: o,
                top: i
            }
        },
        V = function(t) {
            var e = t.left,
                o = t.top;
            return "undefined" != typeof N[t.left] && (e = N[t.left]), "undefined" != typeof N[t.top] && (o = N[t.top]), {
                left: e,
                top: o
            }
        },
        R = function(t) {
            var e = t.split(" "),
                o = z(e, 2),
                i = o[0],
                n = o[1];
            return {
                top: i,
                left: n
            }
        },
        q = R,
        I = function(t) {
            function e(t) {
                var o = this;
                i(this, e), j(Object.getPrototypeOf(e.prototype), "constructor", this).call(this), this.position = this.position.bind(this), D.push(this), this.history = [], this.setOptions(t, !1), x.modules.forEach(function(t) {
                    "undefined" != typeof t.initialize && t.initialize.call(o)
                }), this.position()
            }
            return v(e, t), E(e, [{
                key: "getClass",
                value: function() {
                    var t = arguments.length <= 0 || void 0 === arguments[0] ? "" : arguments[0],
                        e = this.options.classes;
                    return "undefined" != typeof e && e[t] ? this.options.classes[t] : this.options.classPrefix ? this.options.classPrefix + "-" + t : t
                }
            }, {
                key: "setOptions",
                value: function(t) {
                    var e = this,
                        o = arguments.length <= 1 || void 0 === arguments[1] || arguments[1],
                        i = {
                            offset: "0 0",
                            targetOffset: "0 0",
                            targetAttachment: "auto auto",
                            classPrefix: "tether"
                        };
                    this.options = h(i, t);
                    var n = this.options,
                        s = n.element,
                        a = n.target,
                        f = n.targetModifier;
                    if (this.element = s, this.target = a, this.targetModifier = f, "viewport" === this.target ? (this.target = document.body, this.targetModifier = "visible") : "scroll-handle" === this.target && (this.target = document.body, this.targetModifier = "scroll-handle"), ["element", "target"].forEach(function(t) {
                            if ("undefined" == typeof e[t]) throw new Error("Tether Error: Both element and target must be defined");
                            "undefined" != typeof e[t].jquery ? e[t] = e[t][0] : "string" == typeof e[t] && (e[t] = document.querySelector(e[t]))
                        }), p(this.element, this.getClass("element")), this.options.addTargetClasses !== !1 && p(this.target, this.getClass("target")), !this.options.attachment) throw new Error("Tether Error: You must provide an attachment");
                    this.targetAttachment = q(this.options.targetAttachment), this.attachment = q(this.options.attachment), this.offset = R(this.options.offset), this.targetOffset = R(this.options.targetOffset), "undefined" != typeof this.scrollParents && this.disable(), "scroll-handle" === this.targetModifier ? this.scrollParents = [this.target] : this.scrollParents = r(this.target), this.options.enabled !== !1 && this.enable(o)
                }
            }, {
                key: "getTargetBounds",
                value: function() {
                    if ("undefined" == typeof this.targetModifier) return a(this.target);
                    if ("visible" === this.targetModifier) {
                        if (this.target === document.body) return {
                            top: pageYOffset,
                            left: pageXOffset,
                            height: innerHeight,
                            width: innerWidth
                        };
                        var t = a(this.target),
                            e = {
                                height: t.height,
                                width: t.width,
                                top: t.top,
                                left: t.left
                            };
                        return e.height = Math.min(e.height, t.height - (pageYOffset - t.top)), e.height = Math.min(e.height, t.height - (t.top + t.height - (pageYOffset + innerHeight))), e.height = Math.min(innerHeight, e.height), e.height -= 2, e.width = Math.min(e.width, t.width - (pageXOffset - t.left)), e.width = Math.min(e.width, t.width - (t.left + t.width - (pageXOffset + innerWidth))), e.width = Math.min(innerWidth, e.width), e.width -= 2, e.top < pageYOffset && (e.top = pageYOffset), e.left < pageXOffset && (e.left = pageXOffset), e
                    }
                    if ("scroll-handle" === this.targetModifier) {
                        var t = void 0,
                            o = this.target;
                        o === document.body ? (o = document.documentElement, t = {
                            left: pageXOffset,
                            top: pageYOffset,
                            height: innerHeight,
                            width: innerWidth
                        }) : t = a(o);
                        var i = getComputedStyle(o),
                            n = o.scrollWidth > o.clientWidth || [i.overflow, i.overflowX].indexOf("scroll") >= 0 || this.target !== document.body,
                            r = 0;
                        n && (r = 15);
                        var s = t.height - parseFloat(i.borderTopWidth) - parseFloat(i.borderBottomWidth) - r,
                            e = {
                                width: 15,
                                height: .975 * s * (s / o.scrollHeight),
                                left: t.left + t.width - parseFloat(i.borderLeftWidth) - 15
                            },
                            f = 0;
                        s < 408 && this.target === document.body && (f = -11e-5 * Math.pow(s, 2) - .00727 * s + 22.58), this.target !== document.body && (e.height = Math.max(e.height, 24));
                        var l = this.target.scrollTop / (o.scrollHeight - s);
                        return e.top = l * (s - e.height - f) + t.top + parseFloat(i.borderTopWidth), this.target === document.body && (e.height = Math.max(e.height, 24)), e
                    }
                }
            }, {
                key: "clearCache",
                value: function() {
                    this._cache = {}
                }
            }, {
                key: "cache",
                value: function(t, e) {
                    return "undefined" == typeof this._cache && (this._cache = {}), "undefined" == typeof this._cache[t] && (this._cache[t] = e.call(this)), this._cache[t]
                }
            }, {
                key: "enable",
                value: function() {
                    var t = this,
                        e = arguments.length <= 0 || void 0 === arguments[0] || arguments[0];
                    this.options.addTargetClasses !== !1 && p(this.target, this.getClass("enabled")), p(this.element, this.getClass("enabled")), this.enabled = !0, this.scrollParents.forEach(function(e) {
                        e !== t.target.ownerDocument && e.addEventListener("scroll", t.position)
                    }), e && this.position()
                }
            }, {
                key: "disable",
                value: function() {
                    var t = this;
                    d(this.target, this.getClass("enabled")), d(this.element, this.getClass("enabled")), this.enabled = !1, "undefined" != typeof this.scrollParents && this.scrollParents.forEach(function(e) {
                        e.removeEventListener("scroll", t.position)
                    })
                }
            }, {
                key: "destroy",
                value: function() {
                    var t = this;
                    this.disable(), D.forEach(function(e, o) {
                        e === t && D.splice(o, 1)
                    }), 0 === D.length && s()
                }
            }, {
                key: "updateAttachClasses",
                value: function(t, e) {
                    var o = this;
                    t = t || this.attachment, e = e || this.targetAttachment;
                    var i = ["left", "top", "bottom", "right", "middle", "center"];
                    "undefined" != typeof this._addAttachClasses && this._addAttachClasses.length && this._addAttachClasses.splice(0, this._addAttachClasses.length), "undefined" == typeof this._addAttachClasses && (this._addAttachClasses = []);
                    var n = this._addAttachClasses;
                    t.top && n.push(this.getClass("element-attached") + "-" + t.top), t.left && n.push(this.getClass("element-attached") + "-" + t.left), e.top && n.push(this.getClass("target-attached") + "-" + e.top), e.left && n.push(this.getClass("target-attached") + "-" + e.left);
                    var r = [];
                    i.forEach(function(t) {
                        r.push(o.getClass("element-attached") + "-" + t), r.push(o.getClass("target-attached") + "-" + t)
                    }), k(function() {
                        "undefined" != typeof o._addAttachClasses && (m(o.element, o._addAttachClasses, r), o.options.addTargetClasses !== !1 && m(o.target, o._addAttachClasses, r), delete o._addAttachClasses)
                    })
                }
            }, {
                key: "position",
                value: function() {
                    var t = this,
                        e = arguments.length <= 0 || void 0 === arguments[0] || arguments[0];
                    if (this.enabled) {
                        this.clearCache();
                        var o = U(this.targetAttachment, this.attachment);
                        this.updateAttachClasses(this.attachment, o);
                        var i = this.cache("element-bounds", function() {
                                return a(t.element)
                            }),
                            n = i.width,
                            r = i.height;
                        if (0 === n && 0 === r && "undefined" != typeof this.lastSize) {
                            var s = this.lastSize;
                            n = s.width, r = s.height
                        } else this.lastSize = {
                            width: n,
                            height: r
                        };
                        var h = this.cache("target-bounds", function() {
                                return t.getTargetBounds()
                            }),
                            d = h,
                            p = C(V(this.attachment), {
                                width: n,
                                height: r
                            }),
                            u = C(V(o), d),
                            c = C(this.offset, {
                                width: n,
                                height: r
                            }),
                            g = C(this.targetOffset, d);
                        p = w(p, c), u = w(u, g);
                        for (var m = h.left + u.left - p.left, v = h.top + u.top - p.top, y = 0; y < x.modules.length; ++y) {
                            var b = x.modules[y],
                                O = b.position.call(this, {
                                    left: m,
                                    top: v,
                                    targetAttachment: o,
                                    targetPos: h,
                                    elementPos: i,
                                    offset: p,
                                    targetOffset: u,
                                    manualOffset: c,
                                    manualTargetOffset: g,
                                    scrollbarSize: S,
                                    attachment: this.attachment
                                });
                            if (O === !1) return !1;
                            "undefined" != typeof O && "object" == typeof O && (v = O.top, m = O.left)
                        }
                        var E = {
                                page: {
                                    top: v,
                                    left: m
                                },
                                viewport: {
                                    top: v - pageYOffset,
                                    bottom: pageYOffset - v - r + innerHeight,
                                    left: m - pageXOffset,
                                    right: pageXOffset - m - n + innerWidth
                                }
                            },
                            A = this.target.ownerDocument,
                            T = A.defaultView,
                            S = void 0;
                        return T.innerHeight > A.documentElement.clientHeight && (S = this.cache("scrollbar-size", l), E.viewport.bottom -= S.height), T.innerWidth > A.documentElement.clientWidth && (S = this.cache("scrollbar-size", l), E.viewport.right -= S.width), ["", "static"].indexOf(A.body.style.position) !== -1 && ["", "static"].indexOf(A.body.parentElement.style.position) !== -1 || (E.page.bottom = A.body.scrollHeight - v - r, E.page.right = A.body.scrollWidth - m - n), "undefined" != typeof this.options.optimizations && this.options.optimizations.moveElement !== !1 && "undefined" == typeof this.targetModifier && ! function() {
                            var e = t.cache("target-offsetparent", function() {
                                    return f(t.target)
                                }),
                                o = t.cache("target-offsetparent-bounds", function() {
                                    return a(e)
                                }),
                                i = getComputedStyle(e),
                                n = o,
                                r = {};
                            if (["Top", "Left", "Bottom", "Right"].forEach(function(t) {
                                    r[t.toLowerCase()] = parseFloat(i["border" + t + "Width"])
                                }), o.right = A.body.scrollWidth - o.left - n.width + r.right, o.bottom = A.body.scrollHeight - o.top - n.height + r.bottom, E.page.top >= o.top + r.top && E.page.bottom >= o.bottom && E.page.left >= o.left + r.left && E.page.right >= o.right) {
                                var s = e.scrollTop,
                                    l = e.scrollLeft;
                                E.offset = {
                                    top: E.page.top - o.top + s - r.top,
                                    left: E.page.left - o.left + l - r.left
                                }
                            }
                        }(), this.move(E), this.history.unshift(E), this.history.length > 3 && this.history.pop(), e && _(), !0
                    }
                }
            }, {
                key: "move",
                value: function(t) {
                    var e = this;
                    if ("undefined" != typeof this.element.parentNode) {
                        var o = {};
                        for (var i in t) {
                            o[i] = {};
                            for (var n in t[i]) {
                                for (var r = !1, s = 0; s < this.history.length; ++s) {
                                    var a = this.history[s];
                                    if ("undefined" != typeof a[i] && !y(a[i][n], t[i][n])) {
                                        r = !0;
                                        break
                                    }
                                }
                                r || (o[i][n] = !0)
                            }
                        }
                        var l = {
                                top: "",
                                left: "",
                                right: "",
                                bottom: ""
                            },
                            d = function(t, o) {
                                var i = "undefined" != typeof e.options.optimizations,
                                    n = i ? e.options.optimizations.gpu : null;
                                if (n !== !1) {
                                    var r = void 0,
                                        s = void 0;
                                    if (t.top ? (l.top = 0, r = o.top) : (l.bottom = 0, r = -o.bottom), t.left ? (l.left = 0, s = o.left) : (l.right = 0, s = -o.right), window.matchMedia) {
                                        var a = window.matchMedia("only screen and (min-resolution: 1.3dppx)").matches || window.matchMedia("only screen and (-webkit-min-device-pixel-ratio: 1.3)").matches;
                                        a || (s = Math.round(s), r = Math.round(r))
                                    }
                                    l[L] = "translateX(" + s + "px) translateY(" + r + "px)", "msTransform" !== L && (l[L] += " translateZ(0)")
                                } else t.top ? l.top = o.top + "px" : l.bottom = o.bottom + "px", t.left ? l.left = o.left + "px" : l.right = o.right + "px"
                            },
                            p = !1;
                        if ((o.page.top || o.page.bottom) && (o.page.left || o.page.right) ? (l.position = "absolute", d(o.page, t.page)) : (o.viewport.top || o.viewport.bottom) && (o.viewport.left || o.viewport.right) ? (l.position = "fixed", d(o.viewport, t.viewport)) : "undefined" != typeof o.offset && o.offset.top && o.offset.left ? ! function() {
                                l.position = "absolute";
                                var i = e.cache("target-offsetparent", function() {
                                    return f(e.target)
                                });
                                f(e.element) !== i && k(function() {
                                    e.element.parentNode.removeChild(e.element), i.appendChild(e.element)
                                }), d(o.offset, t.offset), p = !0
                            }() : (l.position = "absolute", d({
                                top: !0,
                                left: !0
                            }, t.page)), !p)
                            if (this.options.bodyElement) this.options.bodyElement.appendChild(this.element);
                            else {
                                for (var u = !0, c = this.element.parentNode; c && 1 === c.nodeType && "BODY" !== c.tagName;) {
                                    if ("static" !== getComputedStyle(c).position) {
                                        u = !1;
                                        break
                                    }
                                    c = c.parentNode
                                }
                                u || (this.element.parentNode.removeChild(this.element), this.element.ownerDocument.body.appendChild(this.element))
                            }
                        var g = {},
                            m = !1;
                        for (var n in l) {
                            var v = l[n],
                                b = this.element.style[n];
                            b !== v && (m = !0, g[n] = v)
                        }
                        m && k(function() {
                            h(e.element.style, g), e.trigger("repositioned")
                        })
                    }
                }
            }]), e
        }(B);
    I.modules = [], x.position = X;
    var $ = h(I, x),
        z = function() {
            function t(t, e) {
                var o = [],
                    i = !0,
                    n = !1,
                    r = void 0;
                try {
                    for (var s, a = t[Symbol.iterator](); !(i = (s = a.next()).done) && (o.push(s.value), !e || o.length !== e); i = !0);
                } catch (f) {
                    n = !0, r = f
                } finally {
                    try {
                        !i && a["return"] && a["return"]()
                    } finally {
                        if (n) throw r
                    }
                }
                return o
            }
            return function(e, o) {
                if (Array.isArray(e)) return e;
                if (Symbol.iterator in Object(e)) return t(e, o);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }(),
        Y = x.Utils,
        a = Y.getBounds,
        h = Y.extend,
        m = Y.updateClasses,
        k = Y.defer,
        G = ["left", "top", "right", "bottom"];
    x.modules.push({
        position: function(t) {
            var e = this,
                o = t.top,
                i = t.left,
                n = t.targetAttachment;
            if (!this.options.constraints) return !0;
            var r = this.cache("element-bounds", function() {
                    return a(e.element)
                }),
                s = r.height,
                f = r.width;
            if (0 === f && 0 === s && "undefined" != typeof this.lastSize) {
                var l = this.lastSize;
                f = l.width, s = l.height
            }
            var d = this.cache("target-bounds", function() {
                    return e.getTargetBounds()
                }),
                p = d.height,
                u = d.width,
                c = [this.getClass("pinned"), this.getClass("out-of-bounds")];
            this.options.constraints.forEach(function(t) {
                var e = t.outOfBoundsClass,
                    o = t.pinnedClass;
                e && c.push(e), o && c.push(o)
            }), c.forEach(function(t) {
                ["left", "top", "right", "bottom"].forEach(function(e) {
                    c.push(t + "-" + e)
                })
            });
            var g = [],
                v = h({}, n),
                y = h({}, this.attachment);
            return this.options.constraints.forEach(function(t) {
                var r = t.to,
                    a = t.attachment,
                    l = t.pin;
                "undefined" == typeof a && (a = "");
                var h = void 0,
                    d = void 0;
                if (a.indexOf(" ") >= 0) {
                    var c = a.split(" "),
                        m = z(c, 2);
                    d = m[0], h = m[1]
                } else h = d = a;
                var b = O(e, r);
                "target" !== d && "both" !== d || (o < b[1] && "top" === v.top && (o += p, v.top = "bottom"), o + s > b[3] && "bottom" === v.top && (o -= p, v.top = "top")), "together" === d && ("top" === v.top && ("bottom" === y.top && o < b[1] ? (o += p, v.top = "bottom", o += s, y.top = "top") : "top" === y.top && o + s > b[3] && o - (s - p) >= b[1] && (o -= s - p, v.top = "bottom", y.top = "bottom")), "bottom" === v.top && ("top" === y.top && o + s > b[3] ? (o -= p, v.top = "top", o -= s, y.top = "bottom") : "bottom" === y.top && o < b[1] && o + (2 * s - p) <= b[3] && (o += s - p, v.top = "top", y.top = "top")), "middle" === v.top && (o + s > b[3] && "top" === y.top ? (o -= s, y.top = "bottom") : o < b[1] && "bottom" === y.top && (o += s, y.top = "top"))), "target" !== h && "both" !== h || (i < b[0] && "left" === v.left && (i += u, v.left = "right"), i + f > b[2] && "right" === v.left && (i -= u, v.left = "left")), "together" === h && (i < b[0] && "left" === v.left ? "right" === y.left ? (i += u, v.left = "right", i += f, y.left = "left") : "left" === y.left && (i += u, v.left = "right", i -= f, y.left = "right") : i + f > b[2] && "right" === v.left ? "left" === y.left ? (i -= u, v.left = "left", i -= f, y.left = "right") : "right" === y.left && (i -= u, v.left = "left", i += f, y.left = "left") : "center" === v.left && (i + f > b[2] && "left" === y.left ? (i -= f, y.left = "right") : i < b[0] && "right" === y.left && (i += f, y.left = "left"))), "element" !== d && "both" !== d || (o < b[1] && "bottom" === y.top && (o += s, y.top = "top"), o + s > b[3] && "top" === y.top && (o -= s, y.top = "bottom")), "element" !== h && "both" !== h || (i < b[0] && ("right" === y.left ? (i += f, y.left = "left") : "center" === y.left && (i += f / 2, y.left = "left")), i + f > b[2] && ("left" === y.left ? (i -= f, y.left = "right") : "center" === y.left && (i -= f / 2, y.left = "right"))), "string" == typeof l ? l = l.split(",").map(function(t) {
                    return t.trim()
                }) : l === !0 && (l = ["top", "left", "right", "bottom"]), l = l || [];
                var w = [],
                    C = [];
                o < b[1] && (l.indexOf("top") >= 0 ? (o = b[1], w.push("top")) : C.push("top")), o + s > b[3] && (l.indexOf("bottom") >= 0 ? (o = b[3] - s, w.push("bottom")) : C.push("bottom")), i < b[0] && (l.indexOf("left") >= 0 ? (i = b[0], w.push("left")) : C.push("left")), i + f > b[2] && (l.indexOf("right") >= 0 ? (i = b[2] - f, w.push("right")) : C.push("right")), w.length && ! function() {
                    var t = void 0;
                    t = "undefined" != typeof e.options.pinnedClass ? e.options.pinnedClass : e.getClass("pinned"), g.push(t), w.forEach(function(e) {
                        g.push(t + "-" + e)
                    })
                }(), C.length && ! function() {
                    var t = void 0;
                    t = "undefined" != typeof e.options.outOfBoundsClass ? e.options.outOfBoundsClass : e.getClass("out-of-bounds"), g.push(t), C.forEach(function(e) {
                        g.push(t + "-" + e)
                    })
                }(), (w.indexOf("left") >= 0 || w.indexOf("right") >= 0) && (y.left = v.left = !1), (w.indexOf("top") >= 0 || w.indexOf("bottom") >= 0) && (y.top = v.top = !1), v.top === n.top && v.left === n.left && y.top === e.attachment.top && y.left === e.attachment.left || (e.updateAttachClasses(y, v), e.trigger("update", {
                    attachment: y,
                    targetAttachment: v
                }))
            }), k(function() {
                e.options.addTargetClasses !== !1 && m(e.target, g, c), m(e.element, g, c)
            }), {
                top: o,
                left: i
            }
        }
    });
    var Y = x.Utils,
        a = Y.getBounds,
        m = Y.updateClasses,
        k = Y.defer;
    x.modules.push({
        position: function(t) {
            var e = this,
                o = t.top,
                i = t.left,
                n = this.cache("element-bounds", function() {
                    return a(e.element)
                }),
                r = n.height,
                s = n.width,
                f = this.getTargetBounds(),
                l = o + r,
                h = i + s,
                d = [];
            o <= f.bottom && l >= f.top && ["left", "right"].forEach(function(t) {
                var e = f[t];
                e !== i && e !== h || d.push(t)
            }), i <= f.right && h >= f.left && ["top", "bottom"].forEach(function(t) {
                var e = f[t];
                e !== o && e !== l || d.push(t)
            });
            var p = [],
                u = [],
                c = ["left", "top", "right", "bottom"];
            return p.push(this.getClass("abutted")), c.forEach(function(t) {
                p.push(e.getClass("abutted") + "-" + t)
            }), d.length && u.push(this.getClass("abutted")), d.forEach(function(t) {
                u.push(e.getClass("abutted") + "-" + t)
            }), k(function() {
                e.options.addTargetClasses !== !1 && m(e.target, u, p), m(e.element, u, p)
            }), !0
        }
    });
    var z = function() {
        function t(t, e) {
            var o = [],
                i = !0,
                n = !1,
                r = void 0;
            try {
                for (var s, a = t[Symbol.iterator](); !(i = (s = a.next()).done) && (o.push(s.value), !e || o.length !== e); i = !0);
            } catch (f) {
                n = !0, r = f
            } finally {
                try {
                    !i && a["return"] && a["return"]()
                } finally {
                    if (n) throw r
                }
            }
            return o
        }
        return function(e, o) {
            if (Array.isArray(e)) return e;
            if (Symbol.iterator in Object(e)) return t(e, o);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }();
    return x.modules.push({
        position: function(t) {
            var e = t.top,
                o = t.left;
            if (this.options.shift) {
                var i = this.options.shift;
                "function" == typeof this.options.shift && (i = this.options.shift.call(this, {
                    top: e,
                    left: o
                }));
                var n = void 0,
                    r = void 0;
                if ("string" == typeof i) {
                    i = i.split(" "), i[1] = i[1] || i[0];
                    var s = i,
                        a = z(s, 2);
                    n = a[0], r = a[1], n = parseFloat(n, 10), r = parseFloat(r, 10)
                } else n = i.top, r = i.left;
                return e += n, o += r, {
                    top: e,
                    left: o
                }
            }
        }
    }), $
});;

! function(t, e) {
    "function" == typeof define && define.amd ? define(function() {
        return e(t)
    }) : "object" == typeof module && module.exports ? module.exports = e(t) : t.bodymovin = e(t)
}(window || {}, function(window) {
    function ProjectInterface() {
        return {}
    }

    function roundValues(t) {
        bm_rnd = t ? Math.round : function(t) {
            return t
        }
    }

    function roundTo2Decimals(t) {
        return Math.round(1e4 * t) / 1e4
    }

    function roundTo3Decimals(t) {
        return Math.round(100 * t) / 100
    }

    function styleDiv(t) {
        t.style.position = "absolute", t.style.top = 0, t.style.left = 0, t.style.display = "block", t.style.transformOrigin = t.style.webkitTransformOrigin = "0 0", t.style.backfaceVisibility = t.style.webkitBackfaceVisibility = "visible", t.style.transformStyle = t.style.webkitTransformStyle = t.style.mozTransformStyle = "preserve-3d"
    }

    function styleUnselectableDiv(t) {
        t.style.userSelect = "none", t.style.MozUserSelect = "none", t.style.webkitUserSelect = "none", t.style.oUserSelect = "none"
    }

    function BMEnterFrameEvent(t, e, s, r) {
        this.type = t, this.currentTime = e, this.totalTime = s, this.direction = 0 > r ? -1 : 1
    }

    function BMCompleteEvent(t, e) {
        this.type = t, this.direction = 0 > e ? -1 : 1
    }

    function BMCompleteLoopEvent(t, e, s, r) {
        this.type = t, this.currentLoop = e, this.totalLoops = s, this.direction = 0 > r ? -1 : 1
    }

    function BMSegmentStartEvent(t, e, s) {
        this.type = t, this.firstFrame = e, this.totalFrames = s
    }

    function BMDestroyEvent(t, e) {
        this.type = t, this.target = e
    }

    function _addEventListener(t, e) {
        return this._cbs[t] || (this._cbs[t] = []), this._cbs[t].push(e),
            function() {
                this.removeEventListener(t, e)
            }.bind(this)
    }

    function _removeEventListener(t, e) {
        if (e) {
            if (this._cbs[t]) {
                for (var s = 0, r = this._cbs[t].length; r > s;) this._cbs[t][s] === e && (this._cbs[t].splice(s, 1), s -= 1, r -= 1), s += 1;
                this._cbs[t].length || (this._cbs[t] = null)
            }
        } else this._cbs[t] = null
    }

    function _triggerEvent(t, e) {
        if (this._cbs[t])
            for (var s = this._cbs[t].length, r = 0; s > r; r++) this._cbs[t][r](e)
    }

    function randomString(t, e) {
        void 0 === e && (e = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890");
        var s, r = "";
        for (s = t; s > 0; --s) r += e[Math.round(Math.random() * (e.length - 1))];
        return r
    }

    function HSVtoRGB(t, e, s) {
        var r, i, a, n, o, h, l, p;
        switch (1 === arguments.length && (e = t.s, s = t.v, t = t.h), n = Math.floor(6 * t), o = 6 * t - n, h = s * (1 - e), l = s * (1 - o * e), p = s * (1 - (1 - o) * e), n % 6) {
            case 0:
                r = s, i = p, a = h;
                break;
            case 1:
                r = l, i = s, a = h;
                break;
            case 2:
                r = h, i = s, a = p;
                break;
            case 3:
                r = h, i = l, a = s;
                break;
            case 4:
                r = p, i = h, a = s;
                break;
            case 5:
                r = s, i = h, a = l
        }
        return [r, i, a]
    }

    function RGBtoHSV(t, e, s) {
        1 === arguments.length && (e = t.g, s = t.b, t = t.r);
        var r, i = Math.max(t, e, s),
            a = Math.min(t, e, s),
            n = i - a,
            o = 0 === i ? 0 : n / i,
            h = i / 255;
        switch (i) {
            case a:
                r = 0;
                break;
            case t:
                r = e - s + n * (s > e ? 6 : 0), r /= 6 * n;
                break;
            case e:
                r = s - t + 2 * n, r /= 6 * n;
                break;
            case s:
                r = t - e + 4 * n, r /= 6 * n
        }
        return [r, o, h]
    }

    function addSaturationToRGB(t, e) {
        var s = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
        return s[1] += e, s[1] > 1 ? s[1] = 1 : s[1] <= 0 && (s[1] = 0), HSVtoRGB(s[0], s[1], s[2])
    }

    function addBrightnessToRGB(t, e) {
        var s = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
        return s[2] += e, s[2] > 1 ? s[2] = 1 : s[2] < 0 && (s[2] = 0), HSVtoRGB(s[0], s[1], s[2])
    }

    function addHueToRGB(t, e) {
        var s = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
        return s[0] += e / 360, s[0] > 1 ? s[0] -= 1 : s[0] < 0 && (s[0] += 1), HSVtoRGB(s[0], s[1], s[2])
    }

    function componentToHex(t) {
        var e = t.toString(16);
        return 1 == e.length ? "0" + e : e
    }

    function fillToRgba(t, e) {
        if (!cachedColors[t]) {
            var s = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
            cachedColors[t] = parseInt(s[1], 16) + "," + parseInt(s[2], 16) + "," + parseInt(s[3], 16)
        }
        return "rgba(" + cachedColors[t] + "," + e + ")"
    }

    function RenderedFrame(t, e) {
        this.tr = t, this.o = e
    }

    function iterateDynamicProperties(t) {
        var e, s = this.dynamicProperties;
        for (e = 0; s > e; e += 1) this.dynamicProperties[e].getValue(t)
    }

    function reversePath(t) {
        var e, s, r = [],
            i = [],
            a = [],
            n = {},
            o = 0;
        t.c && (r[0] = t.o[0], i[0] = t.i[0], a[0] = t.v[0], o = 1), s = t.i.length;
        var h = s - 1;
        for (e = o; s > e; e += 1) r.push(t.o[h]), i.push(t.i[h]), a.push(t.v[h]), h -= 1;
        return n.i = r, n.o = i, n.v = a, n
    }

    function Matrix() {}

    function createElement(t, e, s) {
        if (!e) {
            var r = Object.create(t.prototype, s),
                i = {};
            return r && "[object Function]" === i.toString.call(r.init) && r.init(), r
        }
        e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.prototype._parent = t.prototype
    }

    function extendPrototype(t, e) {
        for (var s in t.prototype) t.prototype.hasOwnProperty(s) && (e.prototype[s] = t.prototype[s])
    }

    function bezFunction() {
        function t(t, e, s, r, i, a) {
            var n = t * r + e * i + s * a - i * r - a * t - s * e;
            return n > -1e-4 && 1e-4 > n
        }

        function e(e, s, r, i, a, n, o, h, l) {
            if (0 === r && 0 === n && 0 === l) return t(e, s, i, a, o, h);
            var p, m = Math.sqrt(Math.pow(i - e, 2) + Math.pow(a - s, 2) + Math.pow(n - r, 2)),
                f = Math.sqrt(Math.pow(o - e, 2) + Math.pow(h - s, 2) + Math.pow(l - r, 2)),
                c = Math.sqrt(Math.pow(o - i, 2) + Math.pow(h - a, 2) + Math.pow(l - n, 2));
            return p = m > f ? m > c ? m - f - c : c - f - m : c > f ? c - f - m : f - m - c, p > -1e-4 && 1e-4 > p
        }

        function s(t) {
            var e, s = t.c,
                r = t.v,
                i = t.o,
                a = t.i,
                n = t._length,
                o = [],
                h = 0;
            for (e = 0; n - 1 > e; e += 1) o[e] = l(r[e], r[e + 1], i[e], a[e + 1]), h += o[e].addedLength;
            return s && (o[e] = l(r[e], r[0], i[e], a[0]), h += o[e].addedLength), {
                lengths: o,
                totalLength: h
            }
        }

        function r(t) {
            this.segmentLength = 0, this.points = new Array(t)
        }

        function i(t, e) {
            this.partialLength = t, this.point = e
        }

        function a(t, e) {
            var s = e.segments,
                r = s.length,
                i = bm_floor((r - 1) * t),
                a = t * e.addedLength,
                n = 0;
            if (a == s[i].l) return s[i].p;
            for (var o = s[i].l > a ? -1 : 1, h = !0; h;) s[i].l <= a && s[i + 1].l > a ? (n = (a - s[i].l) / (s[i + 1].l - s[i].l), h = !1) : i += o, (0 > i || i >= r - 1) && (h = !1);
            return s[i].p + (s[i + 1].p - s[i].p) * n
        }

        function n() {
            this.pt1 = new Array(2), this.pt2 = new Array(2), this.pt3 = new Array(2), this.pt4 = new Array(2)
        }

        function o(t, e, s, r, i, n) {
            var o = a(i, n),
                h = 1 - o,
                l = Math.round(1e3 * (h * h * h * t[0] + (o * h * h + h * o * h + h * h * o) * s[0] + (o * o * h + h * o * o + o * h * o) * r[0] + o * o * o * e[0])) / 1e3,
                p = Math.round(1e3 * (h * h * h * t[1] + (o * h * h + h * o * h + h * h * o) * s[1] + (o * o * h + h * o * o + o * h * o) * r[1] + o * o * o * e[1])) / 1e3;
            return [l, p]
        }

        function h(t, e, s, r, i, o, h) {
            var l = new n;
            i = 0 > i ? 0 : i > 1 ? 1 : i;
            var p = a(i, h);
            o = o > 1 ? 1 : o;
            var m, f = a(o, h),
                c = t.length,
                d = 1 - p,
                u = 1 - f;
            for (m = 0; c > m; m += 1) l.pt1[m] = Math.round(1e3 * (d * d * d * t[m] + (p * d * d + d * p * d + d * d * p) * s[m] + (p * p * d + d * p * p + p * d * p) * r[m] + p * p * p * e[m])) / 1e3, l.pt3[m] = Math.round(1e3 * (d * d * u * t[m] + (p * d * u + d * p * u + d * d * f) * s[m] + (p * p * u + d * p * f + p * d * f) * r[m] + p * p * f * e[m])) / 1e3, l.pt4[m] = Math.round(1e3 * (d * u * u * t[m] + (p * u * u + d * f * u + d * u * f) * s[m] + (p * f * u + d * f * f + p * u * f) * r[m] + p * f * f * e[m])) / 1e3, l.pt2[m] = Math.round(1e3 * (u * u * u * t[m] + (f * u * u + u * f * u + u * u * f) * s[m] + (f * f * u + u * f * f + f * u * f) * r[m] + f * f * f * e[m])) / 1e3;
            return l
        }
        var l = (Math, function() {
                function t(t, e) {
                    this.l = t, this.p = e
                }
                return function(e, s, r, i) {
                    var a, n, o, h, l, p, m = defaultCurveSegments,
                        f = 0,
                        c = [],
                        d = [],
                        u = {
                            addedLength: 0,
                            segments: []
                        };
                    for (o = r.length, a = 0; m > a; a += 1) {
                        for (l = a / (m - 1), p = 0, n = 0; o > n; n += 1) h = bm_pow(1 - l, 3) * e[n] + 3 * bm_pow(1 - l, 2) * l * r[n] + 3 * (1 - l) * bm_pow(l, 2) * i[n] + bm_pow(l, 3) * s[n], c[n] = h, null !== d[n] && (p += bm_pow(c[n] - d[n], 2)), d[n] = c[n];
                        p && (p = bm_sqrt(p), f += p), u.segments.push(new t(f, l))
                    }
                    return u.addedLength = f, u
                }
            }()),
            p = function() {
                var e = {};
                return function(s) {
                    var a = s.s,
                        n = s.e,
                        o = s.to,
                        h = s.ti,
                        l = (a.join("_") + "_" + n.join("_") + "_" + o.join("_") + "_" + h.join("_")).replace(/\./g, "p");
                    if (e[l]) return void(s.bezierData = e[l]);
                    var p, m, f, c, d, u, y, g = defaultCurveSegments,
                        v = 0,
                        b = null;
                    2 === a.length && (a[0] != n[0] || a[1] != n[1]) && t(a[0], a[1], n[0], n[1], a[0] + o[0], a[1] + o[1]) && t(a[0], a[1], n[0], n[1], n[0] + h[0], n[1] + h[1]) && (g = 2);
                    var E = new r(g);
                    for (f = o.length, p = 0; g > p; p += 1) {
                        for (y = new Array(f), d = p / (g - 1), u = 0, m = 0; f > m; m += 1) c = bm_pow(1 - d, 3) * a[m] + 3 * bm_pow(1 - d, 2) * d * (a[m] + o[m]) + 3 * (1 - d) * bm_pow(d, 2) * (n[m] + h[m]) + bm_pow(d, 3) * n[m], y[m] = c, null !== b && (u += bm_pow(y[m] - b[m], 2));
                        u = bm_sqrt(u), v += u, E.points[p] = new i(u, y), b = y
                    }
                    E.segmentLength = v, s.bezierData = E, e[l] = E
                }
            }();
        return {
            getBezierLength: l,
            getSegmentsLength: s,
            getNewSegment: h,
            getPointInSegment: o,
            buildBezierData: p,
            pointOnLine2D: t,
            pointOnLine3D: e
        }
    }

    function dataFunctionManager() {
        function t(i, a, o) {
            var h, l, p, m, f, c, d, u, y = i.length;
            for (m = 0; y > m; m += 1)
                if (h = i[m], "ks" in h && !h.completed) {
                    if (h.completed = !0, h.tt && (i[m - 1].td = h.tt), l = [], p = -1, h.hasMask) {
                        var g = h.masksProperties;
                        for (c = g.length, f = 0; c > f; f += 1)
                            if (g[f].pt.k.i) r(g[f].pt.k);
                            else
                                for (u = g[f].pt.k.length, d = 0; u > d; d += 1) g[f].pt.k[d].s && r(g[f].pt.k[d].s[0]), g[f].pt.k[d].e && r(g[f].pt.k[d].e[0])
                    }
                    0 === h.ty ? (h.layers = e(h.refId, a), t(h.layers, a, o)) : 4 === h.ty ? s(h.shapes) : 5 == h.ty && n(h, o)
                }
        }

        function e(t, e) {
            for (var s = 0, r = e.length; r > s;) {
                if (e[s].id === t) return e[s].layers.__used ? JSON.parse(JSON.stringify(e[s].layers)) : (e[s].layers.__used = !0, e[s].layers);
                s += 1
            }
        }

        function s(t) {
            var e, i, a, n = t.length,
                o = !1;
            for (e = n - 1; e >= 0; e -= 1)
                if ("sh" == t[e].ty) {
                    if (t[e].ks.k.i) r(t[e].ks.k);
                    else
                        for (a = t[e].ks.k.length, i = 0; a > i; i += 1) t[e].ks.k[i].s && r(t[e].ks.k[i].s[0]), t[e].ks.k[i].e && r(t[e].ks.k[i].e[0]);
                    o = !0
                } else "gr" == t[e].ty && s(t[e].it)
        }

        function r(t) {
            var e, s = t.i.length;
            for (e = 0; s > e; e += 1) t.i[e][0] += t.v[e][0], t.i[e][1] += t.v[e][1], t.o[e][0] += t.v[e][0], t.o[e][1] += t.v[e][1]
        }

        function i(t, e) {
            var s = e ? e.split(".") : [100, 100, 100];
            return t[0] > s[0] ? !0 : s[0] > t[0] ? !1 : t[1] > s[1] ? !0 : s[1] > t[1] ? !1 : t[2] > s[2] ? !0 : s[2] > t[2] ? !1 : void 0
        }

        function a(e, s) {
            e.__complete || (l(e), o(e), h(e), p(e), t(e.layers, e.assets, s), e.__complete = !0)
        }

        function n(t, e) {
            0 !== t.t.a.length || "m" in t.t.p || (t.singleShape = !0)
        }
        var o = function() {
                function t(t) {
                    var e = t.t.d;
                    t.t.d = {
                        k: [{
                            s: e,
                            t: 0
                        }]
                    }
                }

                function e(e) {
                    var s, r = e.length;
                    for (s = 0; r > s; s += 1) 5 === e[s].ty && t(e[s])
                }
                var s = [4, 4, 14];
                return function(t) {
                    if (i(s, t.v) && (e(t.layers), t.assets)) {
                        var r, a = t.assets.length;
                        for (r = 0; a > r; r += 1) t.assets[r].layers && e(t.assets[r].layers)
                    }
                }
            }(),
            h = function() {
                var t = [4, 7, 99];
                return function(e) {
                    if (e.chars && !i(t, e.v)) {
                        var s, a, n, o, h, l = e.chars.length;
                        for (s = 0; l > s; s += 1)
                            if (e.chars[s].data && e.chars[s].data.shapes)
                                for (h = e.chars[s].data.shapes[0].it, n = h.length, a = 0; n > a; a += 1) o = h[a].ks.k, o.__converted || (r(h[a].ks.k), o.__converted = !0)
                    }
                }
            }(),
            l = function() {
                function t(e) {
                    var s, r, i, a = e.length;
                    for (s = 0; a > s; s += 1)
                        if ("gr" === e[s].ty) t(e[s].it);
                        else if ("fl" === e[s].ty || "st" === e[s].ty)
                        if (e[s].c.k && e[s].c.k[0].i)
                            for (i = e[s].c.k.length, r = 0; i > r; r += 1) e[s].c.k[r].s && (e[s].c.k[r].s[0] /= 255, e[s].c.k[r].s[1] /= 255, e[s].c.k[r].s[2] /= 255, e[s].c.k[r].s[3] /= 255), e[s].c.k[r].e && (e[s].c.k[r].e[0] /= 255, e[s].c.k[r].e[1] /= 255, e[s].c.k[r].e[2] /= 255, e[s].c.k[r].e[3] /= 255);
                        else e[s].c.k[0] /= 255, e[s].c.k[1] /= 255, e[s].c.k[2] /= 255, e[s].c.k[3] /= 255
                }

                function e(e) {
                    var s, r = e.length;
                    for (s = 0; r > s; s += 1) 4 === e[s].ty && t(e[s].shapes)
                }
                var s = [4, 1, 9];
                return function(t) {
                    if (i(s, t.v) && (e(t.layers), t.assets)) {
                        var r, a = t.assets.length;
                        for (r = 0; a > r; r += 1) t.assets[r].layers && e(t.assets[r].layers)
                    }
                }
            }(),
            p = function() {
                function t(e) {
                    var s, r, i, a = e.length,
                        n = !1;
                    for (s = a - 1; s >= 0; s -= 1)
                        if ("sh" == e[s].ty) {
                            if (e[s].ks.k.i) e[s].ks.k.c = e[s].closed;
                            else
                                for (i = e[s].ks.k.length, r = 0; i > r; r += 1) e[s].ks.k[r].s && (e[s].ks.k[r].s[0].c = e[s].closed), e[s].ks.k[r].e && (e[s].ks.k[r].e[0].c = e[s].closed);
                            n = !0
                        } else "gr" == e[s].ty && t(e[s].it)
                }

                function e(e) {
                    var s, r, i, a, n, o, h = e.length;
                    for (r = 0; h > r; r += 1) {
                        if (s = e[r], s.hasMask) {
                            var l = s.masksProperties;
                            for (a = l.length, i = 0; a > i; i += 1)
                                if (l[i].pt.k.i) l[i].pt.k.c = l[i].cl;
                                else
                                    for (o = l[i].pt.k.length, n = 0; o > n; n += 1) l[i].pt.k[n].s && (l[i].pt.k[n].s[0].c = l[i].cl), l[i].pt.k[n].e && (l[i].pt.k[n].e[0].c = l[i].cl)
                        }
                        4 === s.ty && t(s.shapes)
                    }
                }
                var s = [4, 4, 18];
                return function(t) {
                    if (i(s, t.v) && (e(t.layers), t.assets)) {
                        var r, a = t.assets.length;
                        for (r = 0; a > r; r += 1) t.assets[r].layers && e(t.assets[r].layers)
                    }
                }
            }(),
            m = {};
        return m.completeData = a, m
    }

    function ShapePath() {
        this.c = !1, this._length = 0, this._maxLength = 8, this.v = Array.apply(null, {
            length: this._maxLength
        }), this.o = Array.apply(null, {
            length: this._maxLength
        }), this.i = Array.apply(null, {
            length: this._maxLength
        })
    }

    function ShapeModifier() {}

    function TrimModifier() {}

    function RoundCornersModifier() {}

    function RepeaterModifier() {}

    function ShapeCollection() {
        this._length = 0, this._maxLength = 4, this.shapes = Array.apply(null, {
            length: this._maxLength
        })
    }

    function TextAnimatorProperty(t, e, s) {
        this.mdf = !1, this._firstFrame = !0, this._hasMaskedPath = !1, this._frameId = -1, this._dynamicProperties = [], this._textData = t, this._renderType = e, this._elem = s, this._animatorsData = Array.apply(null, {
            length: this._textData.a.length
        }), this._pathData = {}, this._moreOptions = {
            alignment: {}
        }, this.renderedLetters = [], this.lettersChangedFlag = !1
    }

    function LetterProps(t, e, s, r, i, a) {
        this.o = t, this.sw = e, this.sc = s, this.fc = r, this.m = i, this.p = a, this.mdf = {
            o: !0,
            sw: !!e,
            sc: !!s,
            fc: !!r,
            m: !0,
            p: !0
        }
    }

    function TextProperty(t, e, s) {
        this._frameId = -99999, this.pv = "", this.v = "", this.kf = !1, this.firstFrame = !0, this.mdf = !0, this.data = e, this.elem = t, this.keysIndex = -1, this.currentData = {
            ascent: 0,
            boxWidth: [0, 0],
            f: "",
            fStyle: "",
            fWeight: "",
            fc: "",
            j: "",
            justifyOffset: "",
            l: [],
            lh: 0,
            lineWidths: [],
            ls: "",
            of: "",
            s: "",
            sc: "",
            sw: 0,
            t: 0,
            tr: 0,
            fillColorAnim: !1,
            strokeColorAnim: !1,
            strokeWidthAnim: !1,
            yOffset: 0,
            __complete: !1
        }, this.searchProperty() ? s.push(this) : this.getValue(!0)
    }

    function BaseRenderer() {}

    function SVGRenderer(t, e) {
        this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.globalData = {
            frameNum: -1
        }, this.renderConfig = {
            preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
            progressiveLoad: e && e.progressiveLoad || !1,
            hideOnTransparent: e && e.hideOnTransparent === !1 ? !1 : !0,
            viewBoxOnly: e && e.viewBoxOnly || !1,
            className: e && e.className || ""
        }, this.globalData.renderConfig = this.renderConfig, this.elements = [], this.pendingElements = [], this.destroyed = !1
    }

    function MaskElement(t, e, s) {
        this.dynamicProperties = [], this.data = t, this.element = e, this.globalData = s, this.storedData = [], this.masksProperties = this.data.masksProperties, this.viewData = Array.apply(null, {
            length: this.masksProperties.length
        }), this.maskElement = null, this.firstFrame = !0;
        var r, i, a, n, o, h, l, p, m = this.globalData.defs,
            f = this.masksProperties.length,
            c = this.masksProperties,
            d = 0,
            u = [],
            y = randomString(10),
            g = "clipPath",
            v = "clip-path";
        for (r = 0; f > r; r++)
            if (("a" !== c[r].mode && "n" !== c[r].mode || c[r].inv || 100 !== c[r].o.k) && (g = "mask", v = "mask"), "s" != c[r].mode && "i" != c[r].mode || 0 != d ? o = null : (o = document.createElementNS(svgNS, "rect"), o.setAttribute("fill", "#ffffff"), o.setAttribute("width", this.element.comp.data.w), o.setAttribute("height", this.element.comp.data.h), u.push(o)), i = document.createElementNS(svgNS, "path"), "n" != c[r].mode) {
                if (d += 1, "s" == c[r].mode ? i.setAttribute("fill", "#000000") : i.setAttribute("fill", "#ffffff"), i.setAttribute("clip-rule", "nonzero"), 0 !== c[r].x.k) {
                    g = "mask", v = "mask", p = PropertyFactory.getProp(this.element, c[r].x, 0, null, this.dynamicProperties);
                    var b = "fi_" + randomString(10);
                    h = document.createElementNS(svgNS, "filter"), h.setAttribute("id", b), l = document.createElementNS(svgNS, "feMorphology"), l.setAttribute("operator", "dilate"), l.setAttribute("in", "SourceGraphic"), l.setAttribute("radius", "0"), h.appendChild(l), m.appendChild(h), "s" == c[r].mode ? i.setAttribute("stroke", "#000000") : i.setAttribute("stroke", "#ffffff")
                } else l = null, p = null;
                if (this.storedData[r] = {
                        elem: i,
                        x: p,
                        expan: l,
                        lastPath: "",
                        lastOperator: "",
                        filterId: b,
                        lastRadius: 0
                    }, "i" == c[r].mode) {
                    n = u.length;
                    var E = document.createElementNS(svgNS, "g");
                    for (a = 0; n > a; a += 1) E.appendChild(u[a]);
                    var P = document.createElementNS(svgNS, "mask");
                    P.setAttribute("mask-type", "alpha"), P.setAttribute("id", y + "_" + d), P.appendChild(i), m.appendChild(P), E.setAttribute("mask", "url(" + locationHref + "#" + y + "_" + d + ")"), u.length = 0, u.push(E)
                } else u.push(i);
                c[r].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[r] = {
                    elem: i,
                    lastPath: "",
                    op: PropertyFactory.getProp(this.element, c[r].o, 0, .01, this.dynamicProperties),
                    prop: ShapePropertyFactory.getShapeProp(this.element, c[r], 3, this.dynamicProperties, null)
                }, o && (this.viewData[r].invRect = o), this.viewData[r].prop.k || this.drawPath(c[r], this.viewData[r].prop.v, this.viewData[r])
            } else this.viewData[r] = {
                op: PropertyFactory.getProp(this.element, c[r].o, 0, .01, this.dynamicProperties),
                prop: ShapePropertyFactory.getShapeProp(this.element, c[r], 3, this.dynamicProperties, null),
                elem: i
            }, m.appendChild(i);
        for (this.maskElement = document.createElementNS(svgNS, g), f = u.length, r = 0; f > r; r += 1) this.maskElement.appendChild(u[r]);
        this.maskElement.setAttribute("id", y), d > 0 && this.element.maskedElement.setAttribute(v, "url(" + locationHref + "#" + y + ")"), m.appendChild(this.maskElement)
    }

    function BaseElement() {}

    function SVGBaseElement(t, e, s, r, i) {
        this.globalData = s, this.comp = r, this.data = t, this.matteElement = null, this.transformedElement = null, this.isTransparent = !1, this.parentContainer = e, this.layerId = i ? i.layerId : "ly_" + randomString(10), this.placeholder = i, this._sizeChanged = !1, this.init()
    }

    function IShapeElement(t, e, s, r, i) {
        this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.itemsData = [], this.prevViewData = [], this.shapeModifiers = [], this.processedElements = [], this._parent.constructor.call(this, t, e, s, r, i)
    }

    function ITextElement(t, e, s, r) {}

    function SVGTextElement(t, e, s, r, i) {
        this.textSpans = [], this.renderType = "svg", this._parent.constructor.call(this, t, e, s, r, i)
    }

    function SVGTintFilter(t, e) {
        this.filterManager = e;
        var s = document.createElementNS(svgNS, "feColorMatrix");
        if (s.setAttribute("type", "matrix"), s.setAttribute("color-interpolation-filters", "linearRGB"), s.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), s.setAttribute("result", "f1"), t.appendChild(s), s = document.createElementNS(svgNS, "feColorMatrix"), s.setAttribute("type", "matrix"), s.setAttribute("color-interpolation-filters", "sRGB"), s.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), s.setAttribute("result", "f2"), t.appendChild(s), this.matrixFilter = s, 100 !== e.effectElements[2].p.v || e.effectElements[2].p.k) {
            var r = document.createElementNS(svgNS, "feMerge");
            t.appendChild(r);
            var i;
            i = document.createElementNS(svgNS, "feMergeNode"), i.setAttribute("in", "SourceGraphic"), r.appendChild(i), i = document.createElementNS(svgNS, "feMergeNode"), i.setAttribute("in", "f2"), r.appendChild(i)
        }
    }

    function SVGFillFilter(t, e) {
        this.filterManager = e;
        var s = document.createElementNS(svgNS, "feColorMatrix");
        s.setAttribute("type", "matrix"), s.setAttribute("color-interpolation-filters", "sRGB"), s.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), t.appendChild(s), this.matrixFilter = s
    }

    function SVGStrokeEffect(t, e) {
        this.initialized = !1, this.filterManager = e, this.elem = t, this.paths = []
    }

    function SVGTritoneFilter(t, e) {
        this.filterManager = e;
        var s = document.createElementNS(svgNS, "feColorMatrix");
        s.setAttribute("type", "matrix"), s.setAttribute("color-interpolation-filters", "linearRGB"), s.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), s.setAttribute("result", "f1"), t.appendChild(s);
        var r = document.createElementNS(svgNS, "feComponentTransfer");
        r.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(r), this.matrixFilter = r;
        var i = document.createElementNS(svgNS, "feFuncR");
        i.setAttribute("type", "table"), r.appendChild(i), this.feFuncR = i;
        var a = document.createElementNS(svgNS, "feFuncG");
        a.setAttribute("type", "table"), r.appendChild(a), this.feFuncG = a;
        var n = document.createElementNS(svgNS, "feFuncB");
        n.setAttribute("type", "table"), r.appendChild(n), this.feFuncB = n
    }

    function SVGProLevelsFilter(t, e) {
        this.filterManager = e;
        var s = this.filterManager.effectElements,
            r = document.createElementNS(svgNS, "feComponentTransfer");
        (s[9].p.k || 0 !== s[9].p.v || s[10].p.k || 1 !== s[10].p.v || s[11].p.k || 1 !== s[11].p.v || s[12].p.k || 0 !== s[12].p.v || s[13].p.k || 1 !== s[13].p.v) && (this.feFuncR = this.createFeFunc("feFuncR", r)), (s[16].p.k || 0 !== s[16].p.v || s[17].p.k || 1 !== s[17].p.v || s[18].p.k || 1 !== s[18].p.v || s[19].p.k || 0 !== s[19].p.v || s[20].p.k || 1 !== s[20].p.v) && (this.feFuncG = this.createFeFunc("feFuncG", r)), (s[23].p.k || 0 !== s[23].p.v || s[24].p.k || 1 !== s[24].p.v || s[25].p.k || 1 !== s[25].p.v || s[26].p.k || 0 !== s[26].p.v || s[27].p.k || 1 !== s[27].p.v) && (this.feFuncB = this.createFeFunc("feFuncB", r)), (s[30].p.k || 0 !== s[30].p.v || s[31].p.k || 1 !== s[31].p.v || s[32].p.k || 1 !== s[32].p.v || s[33].p.k || 0 !== s[33].p.v || s[34].p.k || 1 !== s[34].p.v) && (this.feFuncA = this.createFeFunc("feFuncA", r)), (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) && (r.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(r), r = document.createElementNS(svgNS, "feComponentTransfer")), (s[2].p.k || 0 !== s[2].p.v || s[3].p.k || 1 !== s[3].p.v || s[4].p.k || 1 !== s[4].p.v || s[5].p.k || 0 !== s[5].p.v || s[6].p.k || 1 !== s[6].p.v) && (r.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(r), this.feFuncRComposed = this.createFeFunc("feFuncR", r), this.feFuncGComposed = this.createFeFunc("feFuncG", r), this.feFuncBComposed = this.createFeFunc("feFuncB", r))
    }

    function SVGDropShadowEffect(t, e) {
        t.setAttribute("x", "-100%"), t.setAttribute("y", "-100%"), t.setAttribute("width", "400%"), t.setAttribute("height", "400%"), this.filterManager = e;
        var s = document.createElementNS(svgNS, "feGaussianBlur");
        s.setAttribute("in", "SourceAlpha"), s.setAttribute("result", "drop_shadow_1"), s.setAttribute("stdDeviation", "0"), this.feGaussianBlur = s, t.appendChild(s);
        var r = document.createElementNS(svgNS, "feOffset");
        r.setAttribute("dx", "25"), r.setAttribute("dy", "0"), r.setAttribute("in", "drop_shadow_1"), r.setAttribute("result", "drop_shadow_2"), this.feOffset = r, t.appendChild(r);
        var i = document.createElementNS(svgNS, "feFlood");
        i.setAttribute("flood-color", "#00ff00"), i.setAttribute("flood-opacity", "1"), i.setAttribute("result", "drop_shadow_3"), this.feFlood = i, t.appendChild(i);
        var a = document.createElementNS(svgNS, "feComposite");
        a.setAttribute("in", "drop_shadow_3"), a.setAttribute("in2", "drop_shadow_2"), a.setAttribute("operator", "in"), a.setAttribute("result", "drop_shadow_4"), t.appendChild(a);
        var n = document.createElementNS(svgNS, "feMerge");
        t.appendChild(n);
        var o;
        o = document.createElementNS(svgNS, "feMergeNode"), n.appendChild(o), o = document.createElementNS(svgNS, "feMergeNode"), o.setAttribute("in", "SourceGraphic"), this.feMergeNode = o, this.feMerge = n, this.originalNodeAdded = !1, n.appendChild(o)
    }

    function SVGMatte3Effect(t, e, s) {
        this.initialized = !1, this.filterManager = e, this.filterElem = t, this.elem = s, s.matteElement = document.createElementNS(svgNS, "g"), s.matteElement.appendChild(s.layerElement), s.matteElement.appendChild(s.transformedElement), s.baseElement = s.matteElement
    }

    function SVGEffects(t) {
        var e, s = t.data.ef.length,
            r = randomString(10),
            i = filtersFactory.createFilter(r),
            a = 0;
        this.filters = [];
        var n;
        for (e = 0; s > e; e += 1) 20 === t.data.ef[e].ty ? (a += 1, n = new SVGTintFilter(i, t.effects.effectElements[e]), this.filters.push(n)) : 21 === t.data.ef[e].ty ? (a += 1, n = new SVGFillFilter(i, t.effects.effectElements[e]), this.filters.push(n)) : 22 === t.data.ef[e].ty ? (n = new SVGStrokeEffect(t, t.effects.effectElements[e]), this.filters.push(n)) : 23 === t.data.ef[e].ty ? (a += 1, n = new SVGTritoneFilter(i, t.effects.effectElements[e]), this.filters.push(n)) : 24 === t.data.ef[e].ty ? (a += 1, n = new SVGProLevelsFilter(i, t.effects.effectElements[e]), this.filters.push(n)) : 25 === t.data.ef[e].ty ? (a += 1, n = new SVGDropShadowEffect(i, t.effects.effectElements[e]), this.filters.push(n)) : 28 === t.data.ef[e].ty && (n = new SVGMatte3Effect(i, t.effects.effectElements[e], t), this.filters.push(n));
        a && (t.globalData.defs.appendChild(i), t.layerElement.setAttribute("filter", "url(" + locationHref + "#" + r + ")"))
    }

    function ICompElement(t, e, s, r, i) {
        this._parent.constructor.call(this, t, e, s, r, i), this.layers = t.layers, this.supports3d = !0, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? Array.apply(null, {
            length: this.layers.length
        }) : [], this.data.tm && (this.tm = PropertyFactory.getProp(this, this.data.tm, 0, s.frameRate, this.dynamicProperties)), this.data.xt ? (this.layerElement = document.createElementNS(svgNS, "g"), this.buildAllItems()) : s.progressiveLoad || this.buildAllItems()
    }

    function IImageElement(t, e, s, r, i) {
        this.assetData = s.getAssetData(t.refId), this._parent.constructor.call(this, t, e, s, r, i)
    }

    function ISolidElement(t, e, s, r, i) {
        this._parent.constructor.call(this, t, e, s, r, i)
    }

    function CanvasRenderer(t, e) {
        this.animationItem = t, this.renderConfig = {
            clearCanvas: e && void 0 !== e.clearCanvas ? e.clearCanvas : !0,
            context: e && e.context || null,
            progressiveLoad: e && e.progressiveLoad || !1,
            preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
            className: e && e.className || ""
        }, this.renderConfig.dpr = e && e.dpr || 1, this.animationItem.wrapper && (this.renderConfig.dpr = e && e.dpr || window.devicePixelRatio || 1), this.renderedFrame = -1, this.globalData = {
            frameNum: -1
        }, this.contextData = {
            saved: Array.apply(null, {
                length: 15
            }),
            savedOp: Array.apply(null, {
                length: 15
            }),
            cArrPos: 0,
            cTr: new Matrix,
            cO: 1
        };
        var s, r = 15;
        for (s = 0; r > s; s += 1) this.contextData.saved[s] = Array.apply(null, {
            length: 16
        });
        this.elements = [], this.pendingElements = [], this.transformMat = new Matrix, this.completeLayers = !1
    }

    function HybridRenderer(t, e) {
        this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.globalData = {
            frameNum: -1
        }, this.renderConfig = {
            className: e && e.className || ""
        }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0
    }

    function CVBaseElement(t, e, s) {
        this.globalData = s, this.data = t, this.comp = e, this.canvasContext = s.canvasContext, this.init()
    }

    function CVCompElement(t, e, s) {
        this._parent.constructor.call(this, t, e, s);
        var r = {};
        for (var i in s) s.hasOwnProperty(i) && (r[i] = s[i]);
        r.renderer = this, r.compHeight = this.data.h, r.compWidth = this.data.w, this.renderConfig = {
            clearCanvas: !0
        }, this.contextData = {
            saved: Array.apply(null, {
                length: 15
            }),
            savedOp: Array.apply(null, {
                length: 15
            }),
            cArrPos: 0,
            cTr: new Matrix,
            cO: 1
        }, this.completeLayers = !1;
        var a, n = 15;
        for (a = 0; n > a; a += 1) this.contextData.saved[a] = Array.apply(null, {
            length: 16
        });
        this.transformMat = new Matrix, this.parentGlobalData = this.globalData;
        var o = document.createElement("canvas");
        r.canvasContext = o.getContext("2d"), this.canvasContext = r.canvasContext, o.width = this.data.w, o.height = this.data.h, this.canvas = o, this.globalData = r, this.layers = t.layers, this.pendingElements = [], this.elements = Array.apply(null, {
            length: this.layers.length
        }), this.data.tm && (this.tm = PropertyFactory.getProp(this, this.data.tm, 0, s.frameRate, this.dynamicProperties)), (this.data.xt || !s.progressiveLoad) && this.buildAllItems()
    }

    function CVImageElement(t, e, s) {
        this.assetData = s.getAssetData(t.refId), this._parent.constructor.call(this, t, e, s), this.globalData.addPendingElement()
    }

    function CVMaskElement(t, e) {
        this.data = t, this.element = e, this.dynamicProperties = [], this.masksProperties = this.data.masksProperties, this.viewData = Array.apply(null, {
            length: this.masksProperties.length
        });
        var s, r = this.masksProperties.length;
        for (s = 0; r > s; s++) this.viewData[s] = ShapePropertyFactory.getShapeProp(this.element, this.masksProperties[s], 3, this.dynamicProperties, null)
    }

    function CVShapeElement(t, e, s) {
        this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.itemsData = [], this.prevViewData = [], this.shapeModifiers = [], this.processedElements = [], this._parent.constructor.call(this, t, e, s)
    }

    function CVSolidElement(t, e, s) {
        this._parent.constructor.call(this, t, e, s)
    }

    function CVTextElement(t, e, s) {
        this.textSpans = [], this.yOffset = 0, this.fillColorAnim = !1, this.strokeColorAnim = !1, this.strokeWidthAnim = !1, this.stroke = !1, this.fill = !1, this.justifyOffset = 0, this.currentRender = null, this.renderType = "canvas", this.values = {
            fill: "rgba(0,0,0,0)",
            stroke: "rgba(0,0,0,0)",
            sWidth: 0,
            fValue: ""
        }, this._parent.constructor.call(this, t, e, s)
    }

    function HBaseElement(t, e, s, r, i) {
        this.globalData = s, this.comp = r, this.data = t, this.matteElement = null, this.parentContainer = e, this.layerId = i ? i.layerId : "ly_" + randomString(10), this.placeholder = i, this.init()
    }

    function HSolidElement(t, e, s, r, i) {
        this._parent.constructor.call(this, t, e, s, r, i)
    }

    function HCompElement(t, e, s, r, i) {
        this._parent.constructor.call(this, t, e, s, r, i), this.layers = t.layers, this.supports3d = !0, this.completeLayers = !1, this.pendingElements = [], this.elements = Array.apply(null, {
            length: this.layers.length
        }), this.data.tm && (this.tm = PropertyFactory.getProp(this, this.data.tm, 0, s.frameRate, this.dynamicProperties)), this.data.hasMask && (this.supports3d = !1), this.data.xt && (this.layerElement = document.createElement("div")), this.buildAllItems()
    }

    function HShapeElement(t, e, s, r, i) {
        this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.itemsData = [], this.prevViewData = [], this.shapeModifiers = [], this.processedElements = [], this._parent.constructor.call(this, t, e, s, r, i), this.currentBBox = {
            x: 999999,
            y: -999999,
            h: 0,
            w: 0
        }
    }

    function HTextElement(t, e, s, r, i) {
        this.textSpans = [], this.textPaths = [], this.currentBBox = {
            x: 999999,
            y: -999999,
            h: 0,
            w: 0
        }, this.renderType = "svg", this.isMasked = !1, this._parent.constructor.call(this, t, e, s, r, i)
    }

    function HImageElement(t, e, s, r, i) {
        this.assetData = s.getAssetData(t.refId), this._parent.constructor.call(this, t, e, s, r, i)
    }

    function HCameraElement(t, e, s, r, i) {
        this._parent.constructor.call(this, t, e, s, r, i);
        var a = PropertyFactory.getProp;
        if (this.pe = a(this, t.pe, 0, 0, this.dynamicProperties), t.ks.p.s ? (this.px = a(this, t.ks.p.x, 1, 0, this.dynamicProperties), this.py = a(this, t.ks.p.y, 1, 0, this.dynamicProperties), this.pz = a(this, t.ks.p.z, 1, 0, this.dynamicProperties)) : this.p = a(this, t.ks.p, 1, 0, this.dynamicProperties), t.ks.a && (this.a = a(this, t.ks.a, 1, 0, this.dynamicProperties)), t.ks.or.k.length && t.ks.or.k[0].to) {
            var n, o = t.ks.or.k.length;
            for (n = 0; o > n; n += 1) t.ks.or.k[n].to = null, t.ks.or.k[n].ti = null
        }
        this.or = a(this, t.ks.or, 1, degToRads, this.dynamicProperties), this.or.sh = !0, this.rx = a(this, t.ks.rx, 0, degToRads, this.dynamicProperties), this.ry = a(this, t.ks.ry, 0, degToRads, this.dynamicProperties), this.rz = a(this, t.ks.rz, 0, degToRads, this.dynamicProperties), this.mat = new Matrix
    }

    function SliderEffect(t, e, s) {
        this.p = PropertyFactory.getProp(e, t.v, 0, 0, s)
    }

    function AngleEffect(t, e, s) {
        this.p = PropertyFactory.getProp(e, t.v, 0, 0, s)
    }

    function ColorEffect(t, e, s) {
        this.p = PropertyFactory.getProp(e, t.v, 1, 0, s)
    }

    function PointEffect(t, e, s) {
        this.p = PropertyFactory.getProp(e, t.v, 1, 0, s)
    }

    function LayerIndexEffect(t, e, s) {
        this.p = PropertyFactory.getProp(e, t.v, 0, 0, s)
    }

    function MaskIndexEffect(t, e, s) {
        this.p = PropertyFactory.getProp(e, t.v, 0, 0, s)
    }

    function CheckboxEffect(t, e, s) {
        this.p = PropertyFactory.getProp(e, t.v, 0, 0, s)
    }

    function NoValueEffect() {
        this.p = {}
    }

    function EffectsManager(t, e, s) {
        var r = t.ef;
        this.effectElements = [];
        var i, a, n = r.length;
        for (i = 0; n > i; i++) a = new GroupEffect(r[i], e, s), this.effectElements.push(a)
    }

    function GroupEffect(t, e, s) {
        this.dynamicProperties = [], this.init(t, e, this.dynamicProperties), this.dynamicProperties.length && s.push(this)
    }

    function setLocationHref(t) {
        locationHref = t
    }

    function play(t) {
        animationManager.play(t)
    }

    function pause(t) {
        animationManager.pause(t)
    }

    function togglePause(t) {
        animationManager.togglePause(t)
    }

    function setSpeed(t, e) {
        animationManager.setSpeed(t, e)
    }

    function setDirection(t, e) {
        animationManager.setDirection(t, e)
    }

    function stop(t) {
        animationManager.stop(t)
    }

    function moveFrame(t) {
        animationManager.moveFrame(t)
    }

    function searchAnimations() {
        standalone === !0 ? animationManager.searchAnimations(animationData, standalone, renderer) : animationManager.searchAnimations()
    }

    function registerAnimation(t) {
        return animationManager.registerAnimation(t)
    }

    function resize() {
        animationManager.resize()
    }

    function start() {
        animationManager.start()
    }

    function goToAndStop(t, e, s) {
        animationManager.goToAndStop(t, e, s)
    }

    function setSubframeRendering(t) {
        subframeEnabled = t
    }

    function loadAnimation(t) {
        return standalone === !0 && (t.animationData = JSON.parse(animationData)), animationManager.loadAnimation(t)
    }

    function destroy(t) {
        return animationManager.destroy(t)
    }

    function setQuality(t) {
        if ("string" == typeof t) switch (t) {
            case "high":
                defaultCurveSegments = 200;
                break;
            case "medium":
                defaultCurveSegments = 50;
                break;
            case "low":
                defaultCurveSegments = 10
        } else !isNaN(t) && t > 1 && (defaultCurveSegments = t);
        roundValues(defaultCurveSegments >= 50 ? !1 : !0)
    }

    function inBrowser() {
        return "undefined" != typeof navigator
    }

    function installPlugin(t, e) {
        "expressions" === t && (expressionsPlugin = e)
    }

    function getFactory(t) {
        switch (t) {
            case "propertyFactory":
                return PropertyFactory;
            case "shapePropertyFactory":
                return ShapePropertyFactory;
            case "matrix":
                return Matrix
        }
    }

    function checkReady() {
        "complete" === document.readyState && (clearInterval(readyStateCheckInterval), searchAnimations())
    }

    function getQueryVariable(t) {
        for (var e = queryString.split("&"), s = 0; s < e.length; s++) {
            var r = e[s].split("=");
            if (decodeURIComponent(r[0]) == t) return decodeURIComponent(r[1])
        }
    }
    var svgNS = "http://www.w3.org/2000/svg",
        locationHref = "",
        subframeEnabled = !0,
        expressionsPlugin, isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
        cachedColors = {},
        bm_rounder = Math.round,
        bm_rnd, bm_pow = Math.pow,
        bm_sqrt = Math.sqrt,
        bm_abs = Math.abs,
        bm_floor = Math.floor,
        bm_max = Math.max,
        bm_min = Math.min,
        blitter = 10,
        BMMath = {};
    ! function() {
        var t, e = Object.getOwnPropertyNames(Math),
            s = e.length;
        for (t = 0; s > t; t += 1) BMMath[e[t]] = Math[e[t]]
    }(), BMMath.random = Math.random, BMMath.abs = function(t) {
        var e = typeof t;
        if ("object" === e && t.length) {
            var s, r = Array.apply(null, {
                    length: t.length
                }),
                i = t.length;
            for (s = 0; i > s; s += 1) r[s] = Math.abs(t[s]);
            return r
        }
        return Math.abs(t)
    };
    var defaultCurveSegments = 150,
        degToRads = Math.PI / 180,
        roundCorner = .5519;
    roundValues(!1);
    var rgbToHex = function() {
            var t, e, s = [];
            for (t = 0; 256 > t; t += 1) e = t.toString(16), s[t] = 1 == e.length ? "0" + e : e;
            return function(t, e, r) {
                return 0 > t && (t = 0), 0 > e && (e = 0), 0 > r && (r = 0), "#" + s[t] + s[e] + s[r]
            }
        }(),
        fillColorToString = function() {
            var t = [];
            return function(e, s) {
                return void 0 !== s && (e[3] = s), t[e[0]] || (t[e[0]] = {}), t[e[0]][e[1]] || (t[e[0]][e[1]] = {}), t[e[0]][e[1]][e[2]] || (t[e[0]][e[1]][e[2]] = {}),
                    t[e[0]][e[1]][e[2]][e[3]] || (t[e[0]][e[1]][e[2]][e[3]] = "rgba(" + e.join(",") + ")"), t[e[0]][e[1]][e[2]][e[3]]
            }
        }(),
        Matrix = function() {
            function t() {
                return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this
            }

            function e(t) {
                if (0 === t) return this;
                var e = Math.cos(t),
                    s = Math.sin(t);
                return this._t(e, -s, 0, 0, s, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
            }

            function s(t) {
                if (0 === t) return this;
                var e = Math.cos(t),
                    s = Math.sin(t);
                return this._t(1, 0, 0, 0, 0, e, -s, 0, 0, s, e, 0, 0, 0, 0, 1)
            }

            function r(t) {
                if (0 === t) return this;
                var e = Math.cos(t),
                    s = Math.sin(t);
                return this._t(e, 0, s, 0, 0, 1, 0, 0, -s, 0, e, 0, 0, 0, 0, 1)
            }

            function i(t) {
                if (0 === t) return this;
                var e = Math.cos(t),
                    s = Math.sin(t);
                return this._t(e, -s, 0, 0, s, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
            }

            function a(t, e) {
                return this._t(1, e, t, 1, 0, 0)
            }

            function n(t, e) {
                return this.shear(Math.tan(t), Math.tan(e))
            }

            function o(t, e) {
                var s = Math.cos(e),
                    r = Math.sin(e);
                return this._t(s, r, 0, 0, -r, s, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, Math.tan(t), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(s, -r, 0, 0, r, s, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
            }

            function h(t, e, s) {
                return s = isNaN(s) ? 1 : s, 1 == t && 1 == e && 1 == s ? this : this._t(t, 0, 0, 0, 0, e, 0, 0, 0, 0, s, 0, 0, 0, 0, 1)
            }

            function l(t, e, s, r, i, a, n, o, h, l, p, m, f, c, d, u) {
                return this.props[0] = t, this.props[1] = e, this.props[2] = s, this.props[3] = r, this.props[4] = i, this.props[5] = a, this.props[6] = n, this.props[7] = o, this.props[8] = h, this.props[9] = l, this.props[10] = p, this.props[11] = m, this.props[12] = f, this.props[13] = c, this.props[14] = d, this.props[15] = u, this
            }

            function p(t, e, s) {
                return s = s || 0, 0 !== t || 0 !== e || 0 !== s ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, e, s, 1) : this
            }

            function m(t, e, s, r, i, a, n, o, h, l, p, m, f, c, d, u) {
                if (1 === t && 0 === e && 0 === s && 0 === r && 0 === i && 1 === a && 0 === n && 0 === o && 0 === h && 0 === l && 1 === p && 0 === m) return (0 !== f || 0 !== c || 0 !== d) && (this.props[12] = this.props[12] * t + this.props[13] * i + this.props[14] * h + this.props[15] * f, this.props[13] = this.props[12] * e + this.props[13] * a + this.props[14] * l + this.props[15] * c, this.props[14] = this.props[12] * s + this.props[13] * n + this.props[14] * p + this.props[15] * d, this.props[15] = this.props[12] * r + this.props[13] * o + this.props[14] * m + this.props[15] * u), this._identityCalculated = !1, this;
                var y = this.props[0],
                    g = this.props[1],
                    v = this.props[2],
                    b = this.props[3],
                    E = this.props[4],
                    P = this.props[5],
                    x = this.props[6],
                    S = this.props[7],
                    C = this.props[8],
                    k = this.props[9],
                    A = this.props[10],
                    M = this.props[11],
                    D = this.props[12],
                    T = this.props[13],
                    w = this.props[14],
                    _ = this.props[15];
                return this.props[0] = y * t + g * i + v * h + b * f, this.props[1] = y * e + g * a + v * l + b * c, this.props[2] = y * s + g * n + v * p + b * d, this.props[3] = y * r + g * o + v * m + b * u, this.props[4] = E * t + P * i + x * h + S * f, this.props[5] = E * e + P * a + x * l + S * c, this.props[6] = E * s + P * n + x * p + S * d, this.props[7] = E * r + P * o + x * m + S * u, this.props[8] = C * t + k * i + A * h + M * f, this.props[9] = C * e + k * a + A * l + M * c, this.props[10] = C * s + k * n + A * p + M * d, this.props[11] = C * r + k * o + A * m + M * u, this.props[12] = D * t + T * i + w * h + _ * f, this.props[13] = D * e + T * a + w * l + _ * c, this.props[14] = D * s + T * n + w * p + _ * d, this.props[15] = D * r + T * o + w * m + _ * u, this._identityCalculated = !1, this
            }

            function f() {
                return this._identityCalculated || (this._identity = !(1 !== this.props[0] || 0 !== this.props[1] || 0 !== this.props[2] || 0 !== this.props[3] || 0 !== this.props[4] || 1 !== this.props[5] || 0 !== this.props[6] || 0 !== this.props[7] || 0 !== this.props[8] || 0 !== this.props[9] || 1 !== this.props[10] || 0 !== this.props[11] || 0 !== this.props[12] || 0 !== this.props[13] || 0 !== this.props[14] || 1 !== this.props[15]), this._identityCalculated = !0), this._identity
            }

            function c(t) {
                var e;
                for (e = 0; 16 > e; e += 1) t.props[e] = this.props[e]
            }

            function d(t) {
                var e;
                for (e = 0; 16 > e; e += 1) this.props[e] = t[e]
            }

            function u(t, e, s) {
                return {
                    x: t * this.props[0] + e * this.props[4] + s * this.props[8] + this.props[12],
                    y: t * this.props[1] + e * this.props[5] + s * this.props[9] + this.props[13],
                    z: t * this.props[2] + e * this.props[6] + s * this.props[10] + this.props[14]
                }
            }

            function y(t, e, s) {
                return t * this.props[0] + e * this.props[4] + s * this.props[8] + this.props[12]
            }

            function g(t, e, s) {
                return t * this.props[1] + e * this.props[5] + s * this.props[9] + this.props[13]
            }

            function v(t, e, s) {
                return t * this.props[2] + e * this.props[6] + s * this.props[10] + this.props[14]
            }

            function b(t) {
                var e = this.props[0] * this.props[5] - this.props[1] * this.props[4],
                    s = this.props[5] / e,
                    r = -this.props[1] / e,
                    i = -this.props[4] / e,
                    a = this.props[0] / e,
                    n = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / e,
                    o = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / e;
                return [t[0] * s + t[1] * i + n, t[0] * r + t[1] * a + o, 0]
            }

            function E(t) {
                var e, s = t.length,
                    r = [];
                for (e = 0; s > e; e += 1) r[e] = b(t[e]);
                return r
            }

            function P(t, e, s, r) {
                if (r && 2 === r) {
                    var i = point_pool.newPoint();
                    return i[0] = t * this.props[0] + e * this.props[4] + s * this.props[8] + this.props[12], i[1] = t * this.props[1] + e * this.props[5] + s * this.props[9] + this.props[13], i
                }
                return [t * this.props[0] + e * this.props[4] + s * this.props[8] + this.props[12], t * this.props[1] + e * this.props[5] + s * this.props[9] + this.props[13], t * this.props[2] + e * this.props[6] + s * this.props[10] + this.props[14]]
            }

            function x(t, e) {
                return this.isIdentity() ? t + "," + e : bm_rnd(t * this.props[0] + e * this.props[4] + this.props[12]) + "," + bm_rnd(t * this.props[1] + e * this.props[5] + this.props[13])
            }

            function S() {
                return [this.props[0], this.props[1], this.props[2], this.props[3], this.props[4], this.props[5], this.props[6], this.props[7], this.props[8], this.props[9], this.props[10], this.props[11], this.props[12], this.props[13], this.props[14], this.props[15]]
            }

            function C() {
                return isSafari ? "matrix3d(" + roundTo2Decimals(this.props[0]) + "," + roundTo2Decimals(this.props[1]) + "," + roundTo2Decimals(this.props[2]) + "," + roundTo2Decimals(this.props[3]) + "," + roundTo2Decimals(this.props[4]) + "," + roundTo2Decimals(this.props[5]) + "," + roundTo2Decimals(this.props[6]) + "," + roundTo2Decimals(this.props[7]) + "," + roundTo2Decimals(this.props[8]) + "," + roundTo2Decimals(this.props[9]) + "," + roundTo2Decimals(this.props[10]) + "," + roundTo2Decimals(this.props[11]) + "," + roundTo2Decimals(this.props[12]) + "," + roundTo2Decimals(this.props[13]) + "," + roundTo2Decimals(this.props[14]) + "," + roundTo2Decimals(this.props[15]) + ")" : (this.cssParts[1] = this.props.join(","), this.cssParts.join(""))
            }

            function k() {
                return "matrix(" + roundTo2Decimals(this.props[0]) + "," + roundTo2Decimals(this.props[1]) + "," + roundTo2Decimals(this.props[4]) + "," + roundTo2Decimals(this.props[5]) + "," + roundTo2Decimals(this.props[12]) + "," + roundTo2Decimals(this.props[13]) + ")"
            }

            function A() {
                return "" + this.toArray()
            }
            return function() {
                this.reset = t, this.rotate = e, this.rotateX = s, this.rotateY = r, this.rotateZ = i, this.skew = n, this.skewFromAxis = o, this.shear = a, this.scale = h, this.setTransform = l, this.translate = p, this.transform = m, this.applyToPoint = u, this.applyToX = y, this.applyToY = g, this.applyToZ = v, this.applyToPointArray = P, this.applyToPointStringified = x, this.toArray = S, this.toCSS = C, this.to2dCSS = k, this.toString = A, this.clone = c, this.cloneFromProps = d, this.inversePoints = E, this.inversePoint = b, this._t = this.transform, this.isIdentity = f, this._identity = !0, this._identityCalculated = !1, this.props = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], this.cssParts = ["matrix3d(", "", ")"]
            }
        }();
    ! function(t, e) {
        function s(s, l, p) {
            var c = [];
            l = 1 == l ? {
                entropy: !0
            } : l || {};
            var v = n(a(l.entropy ? [s, h(t)] : null == s ? o() : s, 3), c),
                b = new r(c),
                E = function() {
                    for (var t = b.g(f), e = u, s = 0; y > t;) t = (t + s) * m, e *= m, s = b.g(1);
                    for (; t >= g;) t /= 2, e /= 2, s >>>= 1;
                    return (t + s) / e
                };
            return E.int32 = function() {
                return 0 | b.g(4)
            }, E.quick = function() {
                return b.g(4) / 4294967296
            }, E["double"] = E, n(h(b.S), t), (l.pass || p || function(t, s, r, a) {
                return a && (a.S && i(a, b), t.state = function() {
                    return i(b, {})
                }), r ? (e[d] = t, s) : t
            })(E, v, "global" in l ? l.global : this == e, l.state)
        }

        function r(t) {
            var e, s = t.length,
                r = this,
                i = 0,
                a = r.i = r.j = 0,
                n = r.S = [];
            for (s || (t = [s++]); m > i;) n[i] = i++;
            for (i = 0; m > i; i++) n[i] = n[a = v & a + t[i % s] + (e = n[i])], n[a] = e;
            (r.g = function(t) {
                for (var e, s = 0, i = r.i, a = r.j, n = r.S; t--;) e = n[i = v & i + 1], s = s * m + n[v & (n[i] = n[a = v & a + e]) + (n[a] = e)];
                return r.i = i, r.j = a, s
            })(m)
        }

        function i(t, e) {
            return e.i = t.i, e.j = t.j, e.S = t.S.slice(), e
        }

        function a(t, e) {
            var s, r = [],
                i = typeof t;
            if (e && "object" == i)
                for (s in t) try {
                    r.push(a(t[s], e - 1))
                } catch (n) {}
            return r.length ? r : "string" == i ? t : t + "\x00"
        }

        function n(t, e) {
            for (var s, r = t + "", i = 0; i < r.length;) e[v & i] = v & (s ^= 19 * e[v & i]) + r.charCodeAt(i++);
            return h(e)
        }

        function o() {
            try {
                if (l) return h(l.randomBytes(m));
                var e = new Uint8Array(m);
                return (p.crypto || p.msCrypto).getRandomValues(e), h(e)
            } catch (s) {
                var r = p.navigator,
                    i = r && r.plugins;
                return [+new Date, p, i, p.screen, h(t)]
            }
        }

        function h(t) {
            return String.fromCharCode.apply(0, t)
        }
        var l, p = this,
            m = 256,
            f = 6,
            c = 52,
            d = "random",
            u = e.pow(m, f),
            y = e.pow(2, c),
            g = 2 * y,
            v = m - 1;
        e["seed" + d] = s, n(e.random(), t)
    }([], BMMath);
    var BezierFactory = function() {
        function t(t, e, s, r, i) {
            var a = i || ("bez_" + t + "_" + e + "_" + s + "_" + r).replace(/\./g, "p");
            if (p[a]) return p[a];
            var n = new h([t, e, s, r]);
            return p[a] = n, n
        }

        function e(t, e) {
            return 1 - 3 * e + 3 * t
        }

        function s(t, e) {
            return 3 * e - 6 * t
        }

        function r(t) {
            return 3 * t
        }

        function i(t, i, a) {
            return ((e(i, a) * t + s(i, a)) * t + r(i)) * t
        }

        function a(t, i, a) {
            return 3 * e(i, a) * t * t + 2 * s(i, a) * t + r(i)
        }

        function n(t, e, s, r, a) {
            var n, o, h = 0;
            do o = e + (s - e) / 2, n = i(o, r, a) - t, n > 0 ? s = o : e = o; while (Math.abs(n) > c && ++h < d);
            return o
        }

        function o(t, e, s, r) {
            for (var n = 0; m > n; ++n) {
                var o = a(e, s, r);
                if (0 === o) return e;
                var h = i(e, s, r) - t;
                e -= h / o
            }
            return e
        }

        function h(t) {
            this._p = t, this._mSampleValues = g ? new Float32Array(u) : new Array(u), this._precomputed = !1, this.get = this.get.bind(this)
        }
        var l = {};
        l.getBezierEasing = t;
        var p = {},
            m = 4,
            f = .001,
            c = 1e-7,
            d = 10,
            u = 11,
            y = 1 / (u - 1),
            g = "function" == typeof Float32Array;
        return h.prototype = {
            get: function(t) {
                var e = this._p[0],
                    s = this._p[1],
                    r = this._p[2],
                    a = this._p[3];
                return this._precomputed || this._precompute(), e === s && r === a ? t : 0 === t ? 0 : 1 === t ? 1 : i(this._getTForX(t), s, a)
            },
            _precompute: function() {
                var t = this._p[0],
                    e = this._p[1],
                    s = this._p[2],
                    r = this._p[3];
                this._precomputed = !0, (t !== e || s !== r) && this._calcSampleValues()
            },
            _calcSampleValues: function() {
                for (var t = this._p[0], e = this._p[2], s = 0; u > s; ++s) this._mSampleValues[s] = i(s * y, t, e)
            },
            _getTForX: function(t) {
                for (var e = this._p[0], s = this._p[2], r = this._mSampleValues, i = 0, h = 1, l = u - 1; h !== l && r[h] <= t; ++h) i += y;
                --h;
                var p = (t - r[h]) / (r[h + 1] - r[h]),
                    m = i + p * y,
                    c = a(m, e, s);
                return c >= f ? o(t, m, e, s) : 0 === c ? m : n(t, i, i + y, e, s)
            }
        }, l
    }();
    ! function() {
        for (var t = 0, e = ["ms", "moz", "webkit", "o"], s = 0; s < e.length && !window.requestAnimationFrame; ++s) window.requestAnimationFrame = window[e[s] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[e[s] + "CancelAnimationFrame"] || window[e[s] + "CancelRequestAnimationFrame"];
        window.requestAnimationFrame || (window.requestAnimationFrame = function(e, s) {
            var r = (new Date).getTime(),
                i = Math.max(0, 16 - (r - t)),
                a = setTimeout(function() {
                    e(r + i)
                }, i);
            return t = r + i, a
        }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(t) {
            clearTimeout(t)
        })
    }();
    var bez = bezFunction(),
        dataManager = dataFunctionManager(),
        FontManager = function() {
            function t(t, e) {
                var s = document.createElement("span");
                s.style.fontFamily = e;
                var r = document.createElement("span");
                r.innerHTML = "giItT1WQy@!-/#", s.style.position = "absolute", s.style.left = "-10000px", s.style.top = "-10000px", s.style.fontSize = "300px", s.style.fontVariant = "normal", s.style.fontStyle = "normal", s.style.fontWeight = "normal", s.style.letterSpacing = "0", s.appendChild(r), document.body.appendChild(s);
                var i = r.offsetWidth;
                return r.style.fontFamily = t + ", " + e, {
                    node: r,
                    w: i,
                    parent: s
                }
            }

            function e() {
                var t, s, r, i = this.fonts.length,
                    a = i;
                for (t = 0; i > t; t += 1)
                    if (this.fonts[t].loaded) a -= 1;
                    else if ("t" === this.fonts[t].fOrigin || 2 === this.fonts[t].origin) {
                    if (window.Typekit && window.Typekit.load && 0 === this.typekitLoaded) {
                        this.typekitLoaded = 1;
                        try {
                            window.Typekit.load({
                                async: !0,
                                active: function() {
                                    this.typekitLoaded = 2
                                }.bind(this)
                            })
                        } catch (n) {}
                    }
                    2 === this.typekitLoaded && (this.fonts[t].loaded = !0)
                } else "n" === this.fonts[t].fOrigin || 0 === this.fonts[t].origin ? this.fonts[t].loaded = !0 : (s = this.fonts[t].monoCase.node, r = this.fonts[t].monoCase.w, s.offsetWidth !== r ? (a -= 1, this.fonts[t].loaded = !0) : (s = this.fonts[t].sansCase.node, r = this.fonts[t].sansCase.w, s.offsetWidth !== r && (a -= 1, this.fonts[t].loaded = !0)), this.fonts[t].loaded && (this.fonts[t].sansCase.parent.parentNode.removeChild(this.fonts[t].sansCase.parent), this.fonts[t].monoCase.parent.parentNode.removeChild(this.fonts[t].monoCase.parent)));
                0 !== a && Date.now() - this.initTime < h ? setTimeout(e.bind(this), 20) : setTimeout(function() {
                    this.loaded = !0
                }.bind(this), 0)
            }

            function s(t, e) {
                var s = document.createElementNS(svgNS, "text");
                s.style.fontSize = "100px", s.style.fontFamily = e.fFamily, s.textContent = "1", e.fClass ? (s.style.fontFamily = "inherit", s.className = e.fClass) : s.style.fontFamily = e.fFamily, t.appendChild(s);
                var r = document.createElement("canvas").getContext("2d");
                return r.font = "100px " + e.fFamily, r
            }

            function r(r, i) {
                if (!r) return void(this.loaded = !0);
                if (this.chars) return this.loaded = !0, void(this.fonts = r.list);
                var a, n = r.list,
                    o = n.length;
                for (a = 0; o > a; a += 1) {
                    if (n[a].loaded = !1, n[a].monoCase = t(n[a].fFamily, "monospace"), n[a].sansCase = t(n[a].fFamily, "sans-serif"), n[a].fPath) {
                        if ("p" === n[a].fOrigin || 3 === n[a].origin) {
                            var h = document.createElement("style");
                            h.type = "text/css", h.innerHTML = "@font-face {font-family: " + n[a].fFamily + "; font-style: normal; src: url('" + n[a].fPath + "');}", i.appendChild(h)
                        } else if ("g" === n[a].fOrigin || 1 === n[a].origin) {
                            var l = document.createElement("link");
                            l.type = "text/css", l.rel = "stylesheet", l.href = n[a].fPath, i.appendChild(l)
                        } else if ("t" === n[a].fOrigin || 2 === n[a].origin) {
                            var p = document.createElement("script");
                            p.setAttribute("src", n[a].fPath), i.appendChild(p)
                        }
                    } else n[a].loaded = !0;
                    n[a].helper = s(i, n[a]), this.fonts.push(n[a])
                }
                e.bind(this)()
            }

            function i(t) {
                if (t) {
                    this.chars || (this.chars = []);
                    var e, s, r, i = t.length,
                        a = this.chars.length;
                    for (e = 0; i > e; e += 1) {
                        for (s = 0, r = !1; a > s;) this.chars[s].style === t[e].style && this.chars[s].fFamily === t[e].fFamily && this.chars[s].ch === t[e].ch && (r = !0), s += 1;
                        r || (this.chars.push(t[e]), a += 1)
                    }
                }
            }

            function a(t, e, s) {
                for (var r = 0, i = this.chars.length; i > r;) {
                    if (this.chars[r].ch === t && this.chars[r].style === e && this.chars[r].fFamily === s) return this.chars[r];
                    r += 1
                }
            }

            function n(t, e, s) {
                var r = this.getFontByName(e),
                    i = r.helper;
                return i.measureText(t).width * s / 100
            }

            function o(t) {
                for (var e = 0, s = this.fonts.length; s > e;) {
                    if (this.fonts[e].fName === t) return this.fonts[e];
                    e += 1
                }
                return "sans-serif"
            }
            var h = 5e3,
                l = function() {
                    this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.loaded = !1, this.initTime = Date.now()
                };
            return l.prototype.addChars = i, l.prototype.addFonts = r, l.prototype.getCharData = a, l.prototype.getFontByName = o, l.prototype.measureText = n, l
        }(),
        PropertyFactory = function() {
            function t(t, e, s, r) {
                var i, a = this.offsetTime;
                s.constructor === Array && (i = Array.apply(null, {
                    length: s.length
                }));
                for (var n, o, h = e, l = this.keyframes.length - 1, p = !0; p;) {
                    if (n = this.keyframes[h], o = this.keyframes[h + 1], h == l - 1 && t >= o.t - a) {
                        n.h && (n = o), e = 0;
                        break
                    }
                    if (o.t - a > t) {
                        e = h;
                        break
                    }
                    l - 1 > h ? h += 1 : (e = 0, p = !1)
                }
                var m, f, c, d, u, y;
                if (n.to) {
                    n.bezierData || bez.buildBezierData(n);
                    var g = n.bezierData;
                    if (t >= o.t - a || t < n.t - a) {
                        var v = t >= o.t - a ? g.points.length - 1 : 0;
                        for (f = g.points[v].point.length, m = 0; f > m; m += 1) i[m] = g.points[v].point[m];
                        r._lastBezierData = null
                    } else {
                        n.__fnct ? y = n.__fnct : (y = BezierFactory.getBezierEasing(n.o.x, n.o.y, n.i.x, n.i.y, n.n).get, n.__fnct = y), c = y((t - (n.t - a)) / (o.t - a - (n.t - a)));
                        var b, E = g.segmentLength * c,
                            P = r.lastFrame < t && r._lastBezierData === g ? r._lastAddedLength : 0;
                        for (u = r.lastFrame < t && r._lastBezierData === g ? r._lastPoint : 0, p = !0, d = g.points.length; p;) {
                            if (P += g.points[u].partialLength, 0 === E || 0 === c || u == g.points.length - 1) {
                                for (f = g.points[u].point.length, m = 0; f > m; m += 1) i[m] = g.points[u].point[m];
                                break
                            }
                            if (E >= P && E < P + g.points[u + 1].partialLength) {
                                for (b = (E - P) / g.points[u + 1].partialLength, f = g.points[u].point.length, m = 0; f > m; m += 1) i[m] = g.points[u].point[m] + (g.points[u + 1].point[m] - g.points[u].point[m]) * b;
                                break
                            }
                            d - 1 > u ? u += 1 : p = !1
                        }
                        r._lastPoint = u, r._lastAddedLength = P - g.points[u].partialLength, r._lastBezierData = g
                    }
                } else {
                    var x, S, C, k, A;
                    for (l = n.s.length, h = 0; l > h; h += 1) {
                        if (1 !== n.h && (t >= o.t - a ? c = 1 : t < n.t - a ? c = 0 : (n.o.x.constructor === Array ? (n.__fnct || (n.__fnct = []), n.__fnct[h] ? y = n.__fnct[h] : (x = n.o.x[h] || n.o.x[0], S = n.o.y[h] || n.o.y[0], C = n.i.x[h] || n.i.x[0], k = n.i.y[h] || n.i.y[0], y = BezierFactory.getBezierEasing(x, S, C, k).get, n.__fnct[h] = y)) : n.__fnct ? y = n.__fnct : (x = n.o.x, S = n.o.y, C = n.i.x, k = n.i.y, y = BezierFactory.getBezierEasing(x, S, C, k).get, n.__fnct = y), c = y((t - (n.t - a)) / (o.t - a - (n.t - a))))), this.sh && 1 !== n.h) {
                            var M = n.s[h],
                                D = n.e[h]; - 180 > M - D ? M += 360 : M - D > 180 && (M -= 360), A = M + (D - M) * c
                        } else A = 1 === n.h ? n.s[h] : n.s[h] + (n.e[h] - n.s[h]) * c;
                        1 === l ? i = A : i[h] = A
                    }
                }
                return {
                    value: i,
                    iterationIndex: e
                }
            }

            function e() {
                if (this.elem.globalData.frameId !== this.frameId) {
                    this.mdf = !1;
                    var t = this.comp.renderedFrame - this.offsetTime,
                        e = this.keyframes[0].t - this.offsetTime,
                        s = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
                    if (!(t === this._caching.lastFrame || this._caching.lastFrame !== p && (this._caching.lastFrame >= s && t >= s || this._caching.lastFrame < e && e > t))) {
                        var r = this._caching.lastFrame < t ? this._caching.lastIndex : 0,
                            i = this.interpolateValue(t, r, this.pv, this._caching);
                        if (this._caching.lastIndex = i.iterationIndex, this.pv.constructor === Array)
                            for (r = 0; r < this.v.length;) this.pv[r] = i.value[r], this.v[r] = this.mult ? this.pv[r] * this.mult : this.pv[r], this.lastPValue[r] !== this.pv[r] && (this.mdf = !0, this.lastPValue[r] = this.pv[r]), r += 1;
                        else this.pv = i.value, this.v = this.mult ? this.pv * this.mult : this.pv, this.lastPValue != this.pv && (this.mdf = !0, this.lastPValue = this.pv)
                    }
                    this._caching.lastFrame = t, this.frameId = this.elem.globalData.frameId
                }
            }

            function s() {}

            function r(t, e, r) {
                this.mult = r, this.v = r ? e.k * r : e.k, this.pv = e.k, this.mdf = !1, this.comp = t.comp, this.k = !1, this.kf = !1, this.vel = 0, this.getValue = s
            }

            function i(t, e, r) {
                this.mult = r, this.data = e, this.mdf = !1, this.comp = t.comp, this.k = !1, this.kf = !1, this.frameId = -1, this.v = Array.apply(null, {
                    length: e.k.length
                }), this.pv = Array.apply(null, {
                    length: e.k.length
                }), this.lastValue = Array.apply(null, {
                    length: e.k.length
                });
                var i = Array.apply(null, {
                    length: e.k.length
                });
                this.vel = i.map(function() {
                    return 0
                });
                var a, n = e.k.length;
                for (a = 0; n > a; a += 1) this.v[a] = r ? e.k[a] * r : e.k[a], this.pv[a] = e.k[a];
                this.getValue = s
            }

            function a(s, r, i) {
                this.keyframes = r.k, this.offsetTime = s.data.st, this.lastValue = -99999, this.lastPValue = -99999, this.frameId = -1, this._caching = {
                    lastFrame: p,
                    lastIndex: 0
                }, this.k = !0, this.kf = !0, this.data = r, this.mult = i, this.elem = s, this.comp = s.comp, this.v = i ? r.k[0].s[0] * i : r.k[0].s[0], this.pv = r.k[0].s[0], this.getValue = e, this.interpolateValue = t
            }

            function n(s, r, i) {
                var a, n, o, h, l, m = r.k.length;
                for (a = 0; m - 1 > a; a += 1) r.k[a].to && r.k[a].s && r.k[a].e && (n = r.k[a].s, o = r.k[a].e, h = r.k[a].to, l = r.k[a].ti, (2 === n.length && (n[0] !== o[0] || n[1] !== o[1]) && bez.pointOnLine2D(n[0], n[1], o[0], o[1], n[0] + h[0], n[1] + h[1]) && bez.pointOnLine2D(n[0], n[1], o[0], o[1], o[0] + l[0], o[1] + l[1]) || 3 === n.length && (n[0] !== o[0] || n[1] !== o[1] || n[2] !== o[2]) && bez.pointOnLine3D(n[0], n[1], n[2], o[0], o[1], o[2], n[0] + h[0], n[1] + h[1], n[2] + h[2]) && bez.pointOnLine3D(n[0], n[1], n[2], o[0], o[1], o[2], o[0] + l[0], o[1] + l[1], o[2] + l[2])) && (r.k[a].to = null, r.k[a].ti = null));
                this.keyframes = r.k, this.offsetTime = s.data.st, this.k = !0, this.kf = !0, this.mult = i, this.elem = s, this.comp = s.comp, this._caching = {
                    lastFrame: p,
                    lastIndex: 0
                }, this.getValue = e, this.interpolateValue = t, this.frameId = -1, this.v = Array.apply(null, {
                    length: r.k[0].s.length
                }), this.pv = Array.apply(null, {
                    length: r.k[0].s.length
                }), this.lastValue = Array.apply(null, {
                    length: r.k[0].s.length
                }), this.lastPValue = Array.apply(null, {
                    length: r.k[0].s.length
                })
            }

            function o(t, e, s, o, h) {
                var l;
                if (2 === s) l = new m(t, e, h);
                else if (0 === e.a) l = 0 === s ? new r(t, e, o) : new i(t, e, o);
                else if (1 === e.a) l = 0 === s ? new a(t, e, o) : new n(t, e, o);
                else if (e.k.length)
                    if ("number" == typeof e.k[0]) l = new i(t, e, o);
                    else switch (s) {
                        case 0:
                            l = new a(t, e, o);
                            break;
                        case 1:
                            l = new n(t, e, o)
                    } else l = new r(t, e, o);
                return l.k && h.push(l), l
            }

            function h(t, e, s, r) {
                return new c(t, e, s, r)
            }

            function l(t, e, s) {
                return new d(t, e, s)
            }
            var p = -999999,
                m = function() {
                    function t() {
                        return this.p ? ExpressionValue(this.p) : [this.px.v, this.py.v, this.pz ? this.pz.v : 0]
                    }

                    function e() {
                        return ExpressionValue(this.px)
                    }

                    function s() {
                        return ExpressionValue(this.py)
                    }

                    function r() {
                        return ExpressionValue(this.a)
                    }

                    function i() {
                        return ExpressionValue(this.or)
                    }

                    function a() {
                        return this.r ? ExpressionValue(this.r, 1 / degToRads) : ExpressionValue(this.rz, 1 / degToRads)
                    }

                    function n() {
                        return ExpressionValue(this.s, 100)
                    }

                    function o() {
                        return ExpressionValue(this.o, 100)
                    }

                    function h() {
                        return ExpressionValue(this.sk)
                    }

                    function l() {
                        return ExpressionValue(this.sa)
                    }

                    function p(t) {
                        var e, s = this.dynamicProperties.length;
                        for (e = 0; s > e; e += 1) this.dynamicProperties[e].getValue(), this.dynamicProperties[e].mdf && (this.mdf = !0);
                        this.a && t.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && t.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.r ? t.rotate(-this.r.v) : t.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? this.data.p.z ? t.translate(this.px.v, this.py.v, -this.pz.v) : t.translate(this.px.v, this.py.v, 0) : t.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
                    }

                    function m() {
                        if (this.elem.globalData.frameId !== this.frameId) {
                            this.mdf = !1;
                            var t, e = this.dynamicProperties.length;
                            for (t = 0; e > t; t += 1) this.dynamicProperties[t].getValue(), this.dynamicProperties[t].mdf && (this.mdf = !0);
                            if (this.mdf) {
                                if (this.v.reset(), this.a && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r ? this.v.rotate(-this.r.v) : this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented && this.p.keyframes && this.p.getValueAtTime) {
                                    var s, r;
                                    this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (s = this.p.getValueAtTime((this.p.keyframes[0].t + .01) / this.elem.globalData.frameRate, 0), r = this.p.getValueAtTime(this.p.keyframes[0].t / this.elem.globalData.frameRate, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (s = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / this.elem.globalData.frameRate, 0), r = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - .01) / this.elem.globalData.frameRate, 0)) : (s = this.p.pv, r = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - .01) / this.elem.globalData.frameRate, this.p.offsetTime)), this.v.rotate(-Math.atan2(s[1] - r[1], s[0] - r[0]))
                                }
                                this.data.p.s ? this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
                            }
                            this.frameId = this.elem.globalData.frameId
                        }
                    }

                    function f() {
                        this.inverted = !0, this.iv = new Matrix, this.k || (this.data.p.s ? this.iv.translate(this.px.v, this.py.v, -this.pz.v) : this.iv.translate(this.p.v[0], this.p.v[1], -this.p.v[2]), this.r ? this.iv.rotate(-this.r.v) : this.iv.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v), this.s && this.iv.scale(this.s.v[0], this.s.v[1], 1), this.a && this.iv.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]))
                    }

                    function c() {}
                    return function(d, u, y) {
                        this.elem = d, this.frameId = -1, this.type = "transform", this.dynamicProperties = [], this.mdf = !1, this.data = u, this.getValue = m, this.applyToMatrix = p, this.setInverted = f, this.autoOrient = c, this.v = new Matrix, u.p.s ? (this.px = PropertyFactory.getProp(d, u.p.x, 0, 0, this.dynamicProperties), this.py = PropertyFactory.getProp(d, u.p.y, 0, 0, this.dynamicProperties), u.p.z && (this.pz = PropertyFactory.getProp(d, u.p.z, 0, 0, this.dynamicProperties))) : this.p = PropertyFactory.getProp(d, u.p, 1, 0, this.dynamicProperties), u.r ? this.r = PropertyFactory.getProp(d, u.r, 0, degToRads, this.dynamicProperties) : u.rx && (this.rx = PropertyFactory.getProp(d, u.rx, 0, degToRads, this.dynamicProperties), this.ry = PropertyFactory.getProp(d, u.ry, 0, degToRads, this.dynamicProperties), this.rz = PropertyFactory.getProp(d, u.rz, 0, degToRads, this.dynamicProperties), this.or = PropertyFactory.getProp(d, u.or, 1, degToRads, this.dynamicProperties), this.or.sh = !0), u.sk && (this.sk = PropertyFactory.getProp(d, u.sk, 0, degToRads, this.dynamicProperties), this.sa = PropertyFactory.getProp(d, u.sa, 0, degToRads, this.dynamicProperties)), u.a && (this.a = PropertyFactory.getProp(d, u.a, 1, 0, this.dynamicProperties)), u.s && (this.s = PropertyFactory.getProp(d, u.s, 1, .01, this.dynamicProperties)), this.o = u.o ? PropertyFactory.getProp(d, u.o, 0, .01, this.dynamicProperties) : {
                            mdf: !1,
                            v: 1
                        }, this.dynamicProperties.length ? y.push(this) : (this.a && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r ? this.v.rotate(-this.r.v) : this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? u.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2])), Object.defineProperty(this, "position", {
                            get: t
                        }), Object.defineProperty(this, "xPosition", {
                            get: e
                        }), Object.defineProperty(this, "yPosition", {
                            get: s
                        }), Object.defineProperty(this, "orientation", {
                            get: i
                        }), Object.defineProperty(this, "anchorPoint", {
                            get: r
                        }), Object.defineProperty(this, "rotation", {
                            get: a
                        }), Object.defineProperty(this, "scale", {
                            get: n
                        }), Object.defineProperty(this, "opacity", {
                            get: o
                        }), Object.defineProperty(this, "skew", {
                            get: h
                        }), Object.defineProperty(this, "skewAxis", {
                            get: l
                        })
                    }
                }(),
                f = function() {
                    function t(t) {
                        if (this.prop.getValue(), this.cmdf = !1, this.omdf = !1, this.prop.mdf || t) {
                            var e, s, r, i = 4 * this.data.p;
                            for (e = 0; i > e; e += 1) s = e % 4 === 0 ? 100 : 255, r = Math.round(this.prop.v[e] * s), this.c[e] !== r && (this.c[e] = r, this.cmdf = !0);
                            if (this.o.length)
                                for (i = this.prop.v.length, e = 4 * this.data.p; i > e; e += 1) s = e % 2 === 0 ? 100 : 1, r = e % 2 === 0 ? Math.round(100 * this.prop.v[e]) : this.prop.v[e], this.o[e - 4 * this.data.p] !== r && (this.o[e - 4 * this.data.p] = r, this.omdf = !0)
                        }
                    }

                    function e(e, s, r) {
                        this.prop = o(e, s.k, 1, null, []), this.data = s, this.k = this.prop.k, this.c = Array.apply(null, {
                            length: 4 * s.p
                        });
                        var i = s.k.k[0].s ? s.k.k[0].s.length - 4 * s.p : s.k.k.length - 4 * s.p;
                        this.o = Array.apply(null, {
                            length: i
                        }), this.cmdf = !1, this.omdf = !1, this.getValue = t, this.prop.k && r.push(this), this.getValue(!0)
                    }
                    return function(t, s, r) {
                        return new e(t, s, r)
                    }
                }(),
                c = function() {
                    function t(t) {
                        var e = 0,
                            s = this.dataProps.length;
                        if (this.elem.globalData.frameId !== this.frameId || t) {
                            for (this.mdf = !1, this.frameId = this.elem.globalData.frameId; s > e;) {
                                if (this.dataProps[e].p.mdf) {
                                    this.mdf = !0;
                                    break
                                }
                                e += 1
                            }
                            if (this.mdf || t)
                                for ("svg" === this.renderer && (this.dasharray = ""), e = 0; s > e; e += 1) "o" != this.dataProps[e].n ? "svg" === this.renderer ? this.dasharray += " " + this.dataProps[e].p.v : this.dasharray[e] = this.dataProps[e].p.v : this.dashoffset = this.dataProps[e].p.v
                        }
                    }
                    return function(e, s, r, i) {
                        this.elem = e, this.frameId = -1, this.dataProps = new Array(s.length), this.renderer = r, this.mdf = !1, this.k = !1, this.dasharray = "svg" === this.renderer ? "" : new Array(s.length - 1), this.dashoffset = 0;
                        var a, n, o = s.length;
                        for (a = 0; o > a; a += 1) n = PropertyFactory.getProp(e, s[a].v, 0, 0, i), this.k = n.k ? !0 : this.k, this.dataProps[a] = {
                            n: s[a].n,
                            p: n
                        };
                        this.getValue = t, this.k ? i.push(this) : this.getValue(!0)
                    }
                }(),
                d = function() {
                    function t(t) {
                        if (this.mdf = t || !1, this.dynamicProperties.length) {
                            var e, s = this.dynamicProperties.length;
                            for (e = 0; s > e; e += 1) this.dynamicProperties[e].getValue(), this.dynamicProperties[e].mdf && (this.mdf = !0)
                        }
                        var r = this.elem.textProperty.currentData ? this.elem.textProperty.currentData.l.length : 0;
                        t && 2 === this.data.r && (this.e.v = r);
                        var i = 2 === this.data.r ? 1 : 100 / r,
                            a = this.o.v / i,
                            n = this.s.v / i + a,
                            o = this.e.v / i + a;
                        if (n > o) {
                            var h = n;
                            n = o, o = h
                        }
                        this.finalS = n, this.finalE = o
                    }

                    function e(t) {
                        var e = BezierFactory.getBezierEasing(this.ne.v / 100, 0, 1 - this.xe.v / 100, 1).get,
                            a = 0,
                            n = this.finalS,
                            o = this.finalE,
                            h = this.data.sh;
                        if (2 == h) a = o === n ? t >= o ? 1 : 0 : s(0, r(.5 / (o - n) + (t - n) / (o - n), 1)), a = e(a);
                        else if (3 == h) a = o === n ? t >= o ? 0 : 1 : 1 - s(0, r(.5 / (o - n) + (t - n) / (o - n), 1)), a = e(a);
                        else if (4 == h) o === n ? a = 0 : (a = s(0, r(.5 / (o - n) + (t - n) / (o - n), 1)), .5 > a ? a *= 2 : a = 1 - 2 * (a - .5)), a = e(a);
                        else if (5 == h) {
                            if (o === n) a = 0;
                            else {
                                var l = o - n;
                                t = r(s(0, t + .5 - n), o - n);
                                var p = -l / 2 + t,
                                    m = l / 2;
                                a = Math.sqrt(1 - p * p / (m * m))
                            }
                            a = e(a)
                        } else 6 == h ? (o === n ? a = 0 : (t = r(s(0, t + .5 - n), o - n), a = (1 + Math.cos(Math.PI + 2 * Math.PI * t / (o - n))) / 2), a = e(a)) : (t >= i(n) && (a = 0 > t - n ? 1 - (n - t) : s(0, r(o - t, 1))), a = e(a));
                        return a * this.a.v
                    }
                    var s = Math.max,
                        r = Math.min,
                        i = Math.floor;
                    return function(s, r, i) {
                        this.mdf = !1, this.k = !1, this.data = r, this.dynamicProperties = [], this.getValue = t, this.getMult = e, this.elem = s, this.comp = s.comp, this.finalS = 0, this.finalE = 0, this.s = PropertyFactory.getProp(s, r.s || {
                            k: 0
                        }, 0, 0, this.dynamicProperties), this.e = "e" in r ? PropertyFactory.getProp(s, r.e, 0, 0, this.dynamicProperties) : {
                            v: 100
                        }, this.o = PropertyFactory.getProp(s, r.o || {
                            k: 0
                        }, 0, 0, this.dynamicProperties), this.xe = PropertyFactory.getProp(s, r.xe || {
                            k: 0
                        }, 0, 0, this.dynamicProperties), this.ne = PropertyFactory.getProp(s, r.ne || {
                            k: 0
                        }, 0, 0, this.dynamicProperties), this.a = PropertyFactory.getProp(s, r.a, 0, .01, this.dynamicProperties), this.dynamicProperties.length ? i.push(this) : this.getValue()
                    }
                }(),
                u = {
                    getProp: o,
                    getDashProp: h,
                    getTextSelectorProp: l,
                    getGradientProp: f
                };
            return u
        }();
    ShapePath.prototype.setPathData = function(t, e) {
        this.c = t, this.setLength(e);
        for (var s = 0; e > s;) this.v[s] = point_pool.newPoint(), this.o[s] = point_pool.newPoint(), this.i[s] = point_pool.newPoint(), s += 1
    }, ShapePath.prototype.setLength = function(t) {
        for (; this._maxLength < t;) this.doubleArrayLength();
        this._length = t
    }, ShapePath.prototype.doubleArrayLength = function() {
        this.v = this.v.concat(Array.apply(null, {
            length: this._maxLength
        })), this.i = this.i.concat(Array.apply(null, {
            length: this._maxLength
        })), this.o = this.o.concat(Array.apply(null, {
            length: this._maxLength
        })), this._maxLength *= 2
    }, ShapePath.prototype.setXYAt = function(t, e, s, r, i) {
        var a;
        switch (this._length = Math.max(this._length, r + 1), this._length >= this._maxLength && this.doubleArrayLength(), s) {
            case "v":
                a = this.v;
                break;
            case "i":
                a = this.i;
                break;
            case "o":
                a = this.o
        }(!a[r] || a[r] && !i) && (a[r] = point_pool.newPoint()), a[r][0] = t, a[r][1] = e
    }, ShapePath.prototype.setTripleAt = function(t, e, s, r, i, a, n, o) {
        this.setXYAt(t, e, "v", n, o), this.setXYAt(s, r, "o", n, o), this.setXYAt(i, a, "i", n, o)
    };
    var ShapePropertyFactory = function() {
            function t(t, e, s, r) {
                var i, a, n;
                if (t < this.keyframes[0].t - this.offsetTime) i = this.keyframes[0].s[0], n = !0, e = 0;
                else if (t >= this.keyframes[this.keyframes.length - 1].t - this.offsetTime) i = 1 === this.keyframes[this.keyframes.length - 2].h ? this.keyframes[this.keyframes.length - 1].s[0] : this.keyframes[this.keyframes.length - 2].e[0], n = !0;
                else {
                    for (var o, h, l, p, m, f, c = e, d = this.keyframes.length - 1, u = !0; u && (o = this.keyframes[c], h = this.keyframes[c + 1], !(h.t - this.offsetTime > t));) d - 1 > c ? c += 1 : u = !1;
                    n = 1 === o.h, e = c;
                    var y;
                    if (!n) {
                        if (t >= h.t - this.offsetTime) y = 1;
                        else if (t < o.t - this.offsetTime) y = 0;
                        else {
                            var g;
                            o.__fnct ? g = o.__fnct : (g = BezierFactory.getBezierEasing(o.o.x, o.o.y, o.i.x, o.i.y).get, o.__fnct = g), y = g((t - (o.t - this.offsetTime)) / (h.t - this.offsetTime - (o.t - this.offsetTime)))
                        }
                        a = o.e[0]
                    }
                    i = o.s[0]
                }
                p = s._length, f = i.i[0].length;
                var v, b = !1;
                for (l = 0; p > l; l += 1)
                    for (m = 0; f > m; m += 1) n ? (v = i.i[l][m], s.i[l][m] !== v && (s.i[l][m] = v, r && (this.pv.i[l][m] = v), b = !0), v = i.o[l][m], s.o[l][m] !== v && (s.o[l][m] = v, r && (this.pv.o[l][m] = v), b = !0), v = i.v[l][m], s.v[l][m] !== v && (s.v[l][m] = v, r && (this.pv.v[l][m] = v), b = !0)) : (v = i.i[l][m] + (a.i[l][m] - i.i[l][m]) * y, s.i[l][m] !== v && (s.i[l][m] = v, r && (this.pv.i[l][m] = v), b = !0), v = i.o[l][m] + (a.o[l][m] - i.o[l][m]) * y, s.o[l][m] !== v && (s.o[l][m] = v, r && (this.pv.o[l][m] = v), b = !0), v = i.v[l][m] + (a.v[l][m] - i.v[l][m]) * y, s.v[l][m] !== v && (s.v[l][m] = v, r && (this.pv.v[l][m] = v), b = !0));
                return b && (s.c = i.c), {
                    iterationIndex: e,
                    hasModified: b
                }
            }

            function e() {
                if (this.elem.globalData.frameId !== this.frameId) {
                    this.mdf = !1;
                    var t = this.comp.renderedFrame - this.offsetTime,
                        e = this.keyframes[0].t - this.offsetTime,
                        s = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
                    if (this.lastFrame === l || !(this.lastFrame < e && e > t || this.lastFrame > s && t > s)) {
                        var r = this.lastFrame < t ? this._lastIndex : 0,
                            i = this.interpolateShape(t, r, this.v, !0);
                        this._lastIndex = i.iterationIndex, this.mdf = i.hasModified, i.hasModified && (this.paths = this.localShapeCollection)
                    }
                    this.lastFrame = t, this.frameId = this.elem.globalData.frameId
                }
            }

            function s() {
                return this.v
            }

            function r() {
                this.paths = this.localShapeCollection, this.k || (this.mdf = !1)
            }

            function i(t, e, s) {
                this.__shapeObject = 1, this.comp = t.comp, this.k = !1, this.mdf = !1;
                var i = 3 === s ? e.pt.k : e.ks.k;
                this.v = shape_pool.clone(i), this.pv = shape_pool.clone(this.v), this.localShapeCollection = shapeCollection_pool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = r
            }

            function a(t, e, s) {
                this.__shapeObject = 1, this.comp = t.comp, this.elem = t, this.offsetTime = t.data.st, this._lastIndex = 0, this.keyframes = 3 === s ? e.pt.k : e.ks.k, this.k = !0, this.kf = !0; {
                    var i = this.keyframes[0].s[0].i.length;
                    this.keyframes[0].s[0].i[0].length
                }
                this.v = shape_pool.newShape(), this.v.setPathData(this.keyframes[0].s[0].c, i), this.pv = shape_pool.clone(this.v), this.localShapeCollection = shapeCollection_pool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = l, this.reset = r
            }

            function n(t, e, s, r) {
                var n;
                if (3 === s || 4 === s) {
                    var o = 3 === s ? e.pt : e.ks,
                        h = o.k;
                    n = 1 === o.a || h.length ? new a(t, e, s) : new i(t, e, s)
                } else 5 === s ? n = new f(t, e) : 6 === s ? n = new p(t, e) : 7 === s && (n = new m(t, e));
                return n.k && r.push(n), n
            }

            function o() {
                return i
            }

            function h() {
                return a
            }
            var l = -999999;
            i.prototype.interpolateShape = t, i.prototype.getValue = s, a.prototype.getValue = e, a.prototype.interpolateShape = t;
            var p = function() {
                    function t() {
                        var t = this.p.v[0],
                            e = this.p.v[1],
                            r = this.s.v[0] / 2,
                            i = this.s.v[1] / 2;
                        3 !== this.d ? (this.v.v[0][0] = t, this.v.v[0][1] = e - i, this.v.v[1][0] = t + r, this.v.v[1][1] = e, this.v.v[2][0] = t, this.v.v[2][1] = e + i, this.v.v[3][0] = t - r, this.v.v[3][1] = e, this.v.i[0][0] = t - r * s, this.v.i[0][1] = e - i, this.v.i[1][0] = t + r, this.v.i[1][1] = e - i * s, this.v.i[2][0] = t + r * s, this.v.i[2][1] = e + i, this.v.i[3][0] = t - r, this.v.i[3][1] = e + i * s, this.v.o[0][0] = t + r * s, this.v.o[0][1] = e - i, this.v.o[1][0] = t + r, this.v.o[1][1] = e + i * s, this.v.o[2][0] = t - r * s, this.v.o[2][1] = e + i, this.v.o[3][0] = t - r, this.v.o[3][1] = e - i * s) : (this.v.v[0][0] = t, this.v.v[0][1] = e - i, this.v.v[1][0] = t - r, this.v.v[1][1] = e, this.v.v[2][0] = t, this.v.v[2][1] = e + i, this.v.v[3][0] = t + r, this.v.v[3][1] = e, this.v.i[0][0] = t + r * s, this.v.i[0][1] = e - i, this.v.i[1][0] = t - r, this.v.i[1][1] = e - i * s, this.v.i[2][0] = t - r * s, this.v.i[2][1] = e + i, this.v.i[3][0] = t + r, this.v.i[3][1] = e + i * s, this.v.o[0][0] = t - r * s, this.v.o[0][1] = e - i, this.v.o[1][0] = t - r, this.v.o[1][1] = e + i * s, this.v.o[2][0] = t + r * s, this.v.o[2][1] = e + i, this.v.o[3][0] = t + r, this.v.o[3][1] = e - i * s)
                    }

                    function e(t) {
                        var e, s = this.dynamicProperties.length;
                        if (this.elem.globalData.frameId !== this.frameId) {
                            for (this.mdf = !1, this.frameId = this.elem.globalData.frameId, e = 0; s > e; e += 1) this.dynamicProperties[e].getValue(t), this.dynamicProperties[e].mdf && (this.mdf = !0);
                            this.mdf && this.convertEllToPath()
                        }
                    }
                    var s = roundCorner;
                    return function(s, i) {
                        this.v = shape_pool.newShape(), this.v.setPathData(!0, 4), this.localShapeCollection = shapeCollection_pool.newShapeCollection(), this.paths = this.localShapeCollection, this.localShapeCollection.addShape(this.v), this.d = i.d, this.dynamicProperties = [], this.elem = s, this.comp = s.comp, this.frameId = -1, this.mdf = !1, this.getValue = e, this.convertEllToPath = t, this.reset = r, this.p = PropertyFactory.getProp(s, i.p, 1, 0, this.dynamicProperties), this.s = PropertyFactory.getProp(s, i.s, 1, 0, this.dynamicProperties), this.dynamicProperties.length ? this.k = !0 : this.convertEllToPath()
                    }
                }(),
                m = function() {
                    function t() {
                        var t, e = Math.floor(this.pt.v),
                            s = 2 * Math.PI / e,
                            r = this.or.v,
                            i = this.os.v,
                            a = 2 * Math.PI * r / (4 * e),
                            n = -Math.PI / 2,
                            o = 3 === this.data.d ? -1 : 1;
                        for (n += this.r.v, this.v._length = 0, t = 0; e > t; t += 1) {
                            var h = r * Math.cos(n),
                                l = r * Math.sin(n),
                                p = 0 === h && 0 === l ? 0 : l / Math.sqrt(h * h + l * l),
                                m = 0 === h && 0 === l ? 0 : -h / Math.sqrt(h * h + l * l);
                            h += +this.p.v[0], l += +this.p.v[1], this.v.setTripleAt(h, l, h - p * a * i * o, l - m * a * i * o, h + p * a * i * o, l + m * a * i * o, t, !0), n += s * o
                        }
                        this.paths.length = 0, this.paths[0] = this.v
                    }

                    function e() {
                        var t, e, s, r, i = 2 * Math.floor(this.pt.v),
                            a = 2 * Math.PI / i,
                            n = !0,
                            o = this.or.v,
                            h = this.ir.v,
                            l = this.os.v,
                            p = this.is.v,
                            m = 2 * Math.PI * o / (2 * i),
                            f = 2 * Math.PI * h / (2 * i),
                            c = -Math.PI / 2;
                        c += this.r.v;
                        var d = 3 === this.data.d ? -1 : 1;
                        for (this.v._length = 0, t = 0; i > t; t += 1) {
                            e = n ? o : h, s = n ? l : p, r = n ? m : f;
                            var u = e * Math.cos(c),
                                y = e * Math.sin(c),
                                g = 0 === u && 0 === y ? 0 : y / Math.sqrt(u * u + y * y),
                                v = 0 === u && 0 === y ? 0 : -u / Math.sqrt(u * u + y * y);
                            u += +this.p.v[0], y += +this.p.v[1], this.v.setTripleAt(u, y, u - g * r * s * d, y - v * r * s * d, u + g * r * s * d, y + v * r * s * d, t, !0), n = !n, c += a * d
                        }
                    }

                    function s() {
                        if (this.elem.globalData.frameId !== this.frameId) {
                            this.mdf = !1, this.frameId = this.elem.globalData.frameId;
                            var t, e = this.dynamicProperties.length;
                            for (t = 0; e > t; t += 1) this.dynamicProperties[t].getValue(), this.dynamicProperties[t].mdf && (this.mdf = !0);
                            this.mdf && this.convertToPath()
                        }
                    }
                    return function(i, a) {
                        this.v = shape_pool.newShape(), this.v.setPathData(!0, 0), this.elem = i, this.comp = i.comp, this.data = a, this.frameId = -1, this.d = a.d, this.dynamicProperties = [], this.mdf = !1, this.getValue = s, this.reset = r, 1 === a.sy ? (this.ir = PropertyFactory.getProp(i, a.ir, 0, 0, this.dynamicProperties), this.is = PropertyFactory.getProp(i, a.is, 0, .01, this.dynamicProperties), this.convertToPath = e) : this.convertToPath = t, this.pt = PropertyFactory.getProp(i, a.pt, 0, 0, this.dynamicProperties), this.p = PropertyFactory.getProp(i, a.p, 1, 0, this.dynamicProperties), this.r = PropertyFactory.getProp(i, a.r, 0, degToRads, this.dynamicProperties), this.or = PropertyFactory.getProp(i, a.or, 0, 0, this.dynamicProperties), this.os = PropertyFactory.getProp(i, a.os, 0, .01, this.dynamicProperties), this.localShapeCollection = shapeCollection_pool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.dynamicProperties.length ? this.k = !0 : this.convertToPath()
                    }
                }(),
                f = function() {
                    function t(t) {
                        if (this.elem.globalData.frameId !== this.frameId) {
                            this.mdf = !1, this.frameId = this.elem.globalData.frameId;
                            var e, s = this.dynamicProperties.length;
                            for (e = 0; s > e; e += 1) this.dynamicProperties[e].getValue(t), this.dynamicProperties[e].mdf && (this.mdf = !0);
                            this.mdf && this.convertRectToPath()
                        }
                    }

                    function e() {
                        var t = this.p.v[0],
                            e = this.p.v[1],
                            s = this.s.v[0] / 2,
                            r = this.s.v[1] / 2,
                            i = bm_min(s, r, this.r.v),
                            a = i * (1 - roundCorner);
                        this.v._length = 0, 2 === this.d || 1 === this.d ? (this.v.setTripleAt(t + s, e - r + i, t + s, e - r + i, t + s, e - r + a, 0, !0), this.v.setTripleAt(t + s, e + r - i, t + s, e + r - a, t + s, e + r - i, 1, !0), 0 !== i ? (this.v.setTripleAt(t + s - i, e + r, t + s - i, e + r, t + s - a, e + r, 2, !0), this.v.setTripleAt(t - s + i, e + r, t - s + a, e + r, t - s + i, e + r, 3, !0), this.v.setTripleAt(t - s, e + r - i, t - s, e + r - i, t - s, e + r - a, 4, !0), this.v.setTripleAt(t - s, e - r + i, t - s, e - r + a, t - s, e - r + i, 5, !0), this.v.setTripleAt(t - s + i, e - r, t - s + i, e - r, t - s + a, e - r, 6, !0), this.v.setTripleAt(t + s - i, e - r, t + s - a, e - r, t + s - i, e - r, 7, !0)) : (this.v.setTripleAt(t - s, e + r, t - s + a, e + r, t - s, e + r, 2), this.v.setTripleAt(t - s, e - r, t - s, e - r + a, t - s, e - r, 3))) : (this.v.setTripleAt(t + s, e - r + i, t + s, e - r + a, t + s, e - r + i, 0, !0), 0 !== i ? (this.v.setTripleAt(t + s - i, e - r, t + s - i, e - r, t + s - a, e - r, 1, !0), this.v.setTripleAt(t - s + i, e - r, t - s + a, e - r, t - s + i, e - r, 2, !0), this.v.setTripleAt(t - s, e - r + i, t - s, e - r + i, t - s, e - r + a, 3, !0), this.v.setTripleAt(t - s, e + r - i, t - s, e + r - a, t - s, e + r - i, 4, !0), this.v.setTripleAt(t - s + i, e + r, t - s + i, e + r, t - s + a, e + r, 5, !0), this.v.setTripleAt(t + s - i, e + r, t + s - a, e + r, t + s - i, e + r, 6, !0), this.v.setTripleAt(t + s, e + r - i, t + s, e + r - i, t + s, e + r - a, 7, !0)) : (this.v.setTripleAt(t - s, e - r, t - s + a, e - r, t - s, e - r, 1, !0), this.v.setTripleAt(t - s, e + r, t - s, e + r - a, t - s, e + r, 2, !0), this.v.setTripleAt(t + s, e + r, t + s - a, e + r, t + s, e + r, 3, !0)))
                    }
                    return function(s, i) {
                        this.v = shape_pool.newShape(), this.v.c = !0, this.localShapeCollection = shapeCollection_pool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.elem = s, this.comp = s.comp, this.frameId = -1, this.d = i.d, this.dynamicProperties = [], this.mdf = !1, this.getValue = t, this.convertRectToPath = e, this.reset = r, this.p = PropertyFactory.getProp(s, i.p, 1, 0, this.dynamicProperties), this.s = PropertyFactory.getProp(s, i.s, 1, 0, this.dynamicProperties), this.r = PropertyFactory.getProp(s, i.r, 0, 0, this.dynamicProperties), this.dynamicProperties.length ? this.k = !0 : this.convertRectToPath()
                    }
                }(),
                c = {};
            return c.getShapeProp = n, c.getConstructorFunction = o, c.getKeyframedConstructorFunction = h, c
        }(),
        ShapeModifiers = function() {
            function t(t, e) {
                r[t] || (r[t] = e)
            }

            function e(t, e, s, i) {
                return new r[t](e, s, i)
            }
            var s = {},
                r = {};
            return s.registerModifier = t, s.getModifier = e, s
        }();
    ShapeModifier.prototype.initModifierProperties = function() {}, ShapeModifier.prototype.addShapeToModifier = function() {}, ShapeModifier.prototype.addShape = function(t) {
        this.closed || (this.shapes.push({
            shape: t.sh,
            data: t,
            localShapeCollection: shapeCollection_pool.newShapeCollection()
        }), this.addShapeToModifier(t.sh))
    }, ShapeModifier.prototype.init = function(t, e, s) {
        this.elem = t, this.frameId = -1, this.shapes = [], this.dynamicProperties = [], this.mdf = !1, this.closed = !1, this.k = !1, this.comp = t.comp, this.initModifierProperties(t, e), this.dynamicProperties.length ? (this.k = !0, s.push(this)) : this.getValue(!0)
    }, extendPrototype(ShapeModifier, TrimModifier), TrimModifier.prototype.processKeys = function(t) {
        if (this.elem.globalData.frameId !== this.frameId || t) {
            this.mdf = t ? !0 : !1, this.frameId = this.elem.globalData.frameId;
            var e, s = this.dynamicProperties.length;
            for (e = 0; s > e; e += 1) this.dynamicProperties[e].getValue(), this.dynamicProperties[e].mdf && (this.mdf = !0);
            if (this.mdf || t) {
                var r = this.o.v % 360 / 360;
                0 > r && (r += 1);
                var i = this.s.v + r,
                    a = this.e.v + r;
                if (i > a) {
                    var n = i;
                    i = a, a = n
                }
                this.sValue = i, this.eValue = a, this.oValue = r
            }
        }
    }, TrimModifier.prototype.initModifierProperties = function(t, e) {
        this.sValue = 0, this.eValue = 0, this.oValue = 0, this.getValue = this.processKeys, this.s = PropertyFactory.getProp(t, e.s, 0, .01, this.dynamicProperties), this.e = PropertyFactory.getProp(t, e.e, 0, .01, this.dynamicProperties), this.o = PropertyFactory.getProp(t, e.o, 0, 0, this.dynamicProperties), this.m = e.m, this.dynamicProperties.length || this.getValue(!0)
    }, TrimModifier.prototype.calculateShapeEdges = function(t, e, s, r, i) {
        var a = [];
        1 >= e ? a.push({
            s: t,
            e: e
        }) : t >= 1 ? a.push({
            s: t - 1,
            e: e - 1
        }) : (a.push({
            s: t,
            e: 1
        }), a.push({
            s: 0,
            e: e - 1
        }));
        var n, o, h = [],
            l = a.length;
        for (n = 0; l > n; n += 1)
            if (o = a[n], o.e * i < r || o.s * i > r + s);
            else {
                var p, m;
                p = o.s * i <= r ? 0 : (o.s * i - r) / s, m = o.e * i >= r + s ? 1 : (o.e * i - r) / s, h.push([p, m])
            }
        return h.length || h.push([0, 0]), h
    }, TrimModifier.prototype.processShapes = function(t) {
        var e, s, r, i, a, n, o, h = this.shapes.length,
            l = this.sValue,
            p = this.eValue,
            m = 0;
        if (p === l)
            for (s = 0; h > s; s += 1) this.shapes[s].localShapeCollection.releaseShapes(), this.shapes[s].shape.mdf = !0, this.shapes[s].shape.paths = this.shapes[s].localShapeCollection;
        else if (1 === p && 0 === l || 0 === p && 1 === l) {
            if (this.mdf)
                for (s = 0; h > s; s += 1) this.shapes[s].shape.mdf = !0
        } else {
            var f, c, d = [];
            for (s = 0; h > s; s += 1)
                if (f = this.shapes[s], f.shape.mdf || this.mdf || t || 2 === this.m) {
                    if (e = f.shape.paths, i = e._length, o = 0, !f.shape.mdf && f.pathsData) o = f.totalShapeLength;
                    else {
                        for (a = [], r = 0; i > r; r += 1) n = bez.getSegmentsLength(e.shapes[r]), a.push(n), o += n.totalLength;
                        f.totalShapeLength = o, f.pathsData = a
                    }
                    m += o, f.shape.mdf = !0
                } else f.shape.paths = f.localShapeCollection;
            var r, i, u = l,
                y = p,
                g = 0;
            for (s = h - 1; s >= 0; s -= 1)
                if (f = this.shapes[s], f.shape.mdf) {
                    if (c = f.localShapeCollection, c.releaseShapes(), 2 === this.m && h > 1) {
                        var v = this.calculateShapeEdges(l, p, f.totalShapeLength, g, m);
                        g += f.totalShapeLength
                    } else v = [
                        [u, y]
                    ];
                    for (i = v.length, r = 0; i > r; r += 1) {
                        u = v[r][0], y = v[r][1], d.length = 0, 1 >= y ? d.push({
                            s: f.totalShapeLength * u,
                            e: f.totalShapeLength * y
                        }) : u >= 1 ? d.push({
                            s: f.totalShapeLength * (u - 1),
                            e: f.totalShapeLength * (y - 1)
                        }) : (d.push({
                            s: f.totalShapeLength * u,
                            e: f.totalShapeLength
                        }), d.push({
                            s: 0,
                            e: f.totalShapeLength * (y - 1)
                        }));
                        var b = this.addShapes(f, d[0]);
                        if (d[0].s !== d[0].e) {
                            if (d.length > 1)
                                if (f.shape.v.c) {
                                    var E = b.pop();
                                    this.addPaths(b, c), b = this.addShapes(f, d[1], E)
                                } else this.addPaths(b, c), b = this.addShapes(f, d[1]);
                            this.addPaths(b, c)
                        }
                    }
                    f.shape.paths = c
                }
        }
        this.dynamicProperties.length || (this.mdf = !1)
    }, TrimModifier.prototype.addPaths = function(t, e) {
        var s, r = t.length;
        for (s = 0; r > s; s += 1) e.addShape(t[s])
    }, TrimModifier.prototype.addSegment = function(t, e, s, r, i, a, n) {
        i.setXYAt(e[0], e[1], "o", a), i.setXYAt(s[0], s[1], "i", a + 1), n && i.setXYAt(t[0], t[1], "v", a), i.setXYAt(r[0], r[1], "v", a + 1)
    }, TrimModifier.prototype.addShapes = function(t, e, s) {
        var r, i, a, n, o, h, l, p, m = t.pathsData,
            f = t.shape.paths.shapes,
            c = t.shape.paths._length,
            d = 0,
            u = [],
            y = !0;
        for (s ? (o = s._length, p = s._length) : (s = shape_pool.newShape(), o = 0, p = 0), u.push(s), r = 0; c > r; r += 1) {
            for (h = m[r].lengths, s.c = f[r].c, a = f[r].c ? h.length : h.length + 1, i = 1; a > i; i += 1)
                if (n = h[i - 1], d + n.addedLength < e.s) d += n.addedLength, s.c = !1;
                else {
                    if (d > e.e) {
                        s.c = !1;
                        break
                    }
                    e.s <= d && e.e >= d + n.addedLength ? (this.addSegment(f[r].v[i - 1], f[r].o[i - 1], f[r].i[i], f[r].v[i], s, o, y), y = !1) : (l = bez.getNewSegment(f[r].v[i - 1], f[r].v[i], f[r].o[i - 1], f[r].i[i], (e.s - d) / n.addedLength, (e.e - d) / n.addedLength, h[i - 1]), this.addSegment(l.pt1, l.pt3, l.pt4, l.pt2, s, o, y), y = !1, s.c = !1), d += n.addedLength, o += 1
                }
            if (f[r].c) {
                if (n = h[i - 1], d <= e.e) {
                    var g = h[i - 1].addedLength;
                    e.s <= d && e.e >= d + g ? (this.addSegment(f[r].v[i - 1], f[r].o[i - 1], f[r].i[0], f[r].v[0], s, o, y), y = !1) : (l = bez.getNewSegment(f[r].v[i - 1], f[r].v[0], f[r].o[i - 1], f[r].i[0], (e.s - d) / g, (e.e - d) / g, h[i - 1]), this.addSegment(l.pt1, l.pt3, l.pt4, l.pt2, s, o, y), y = !1, s.c = !1)
                } else s.c = !1;
                d += n.addedLength, o += 1
            }
            if (s._length && (s.setXYAt(s.v[p][0], s.v[p][1], "i", p), s.setXYAt(s.v[s._length - 1][0], s.v[s._length - 1][1], "o", s._length - 1)), d > e.e) break;
            c - 1 > r && (s = shape_pool.newShape(), y = !0, u.push(s), o = 0)
        }
        return u
    }, ShapeModifiers.registerModifier("tm", TrimModifier), extendPrototype(ShapeModifier, RoundCornersModifier), RoundCornersModifier.prototype.processKeys = function(t) {
        if (this.elem.globalData.frameId !== this.frameId || t) {
            this.mdf = t ? !0 : !1, this.frameId = this.elem.globalData.frameId;
            var e, s = this.dynamicProperties.length;
            for (e = 0; s > e; e += 1) this.dynamicProperties[e].getValue(), this.dynamicProperties[e].mdf && (this.mdf = !0)
        }
    }, RoundCornersModifier.prototype.initModifierProperties = function(t, e) {
        this.getValue = this.processKeys, this.rd = PropertyFactory.getProp(t, e.r, 0, null, this.dynamicProperties), this.dynamicProperties.length || this.getValue(!0)
    }, RoundCornersModifier.prototype.processPath = function(t, e) {
        var s = shape_pool.newShape();
        s.c = t.c;
        var r, i, a, n, o, h, l, p, m, f, c, d, u, y = t._length,
            g = 0;
        for (r = 0; y > r; r += 1) i = t.v[r], n = t.o[r], a = t.i[r], i[0] === n[0] && i[1] === n[1] && i[0] === a[0] && i[1] === a[1] ? 0 !== r && r !== y - 1 || t.c ? (o = 0 === r ? t.v[y - 1] : t.v[r - 1], h = Math.sqrt(Math.pow(i[0] - o[0], 2) + Math.pow(i[1] - o[1], 2)), l = h ? Math.min(h / 2, e) / h : 0, p = d = i[0] + (o[0] - i[0]) * l, m = u = i[1] - (i[1] - o[1]) * l, f = p - (p - i[0]) * roundCorner, c = m - (m - i[1]) * roundCorner, s.setTripleAt(p, m, f, c, d, u, g), g += 1, o = r === y - 1 ? t.v[0] : t.v[r + 1], h = Math.sqrt(Math.pow(i[0] - o[0], 2) + Math.pow(i[1] - o[1], 2)), l = h ? Math.min(h / 2, e) / h : 0, p = f = i[0] + (o[0] - i[0]) * l, m = c = i[1] + (o[1] - i[1]) * l, d = p - (p - i[0]) * roundCorner, u = m - (m - i[1]) * roundCorner, s.setTripleAt(p, m, f, c, d, u, g), g += 1) : (s.setTripleAt(i[0], i[1], n[0], n[1], a[0], a[1], g), g += 1) : (s.setTripleAt(t.v[r][0], t.v[r][1], t.o[r][0], t.o[r][1], t.i[r][0], t.i[r][1], g), g += 1);
        return s
    }, RoundCornersModifier.prototype.processShapes = function(t) {
        var e, s, r, i, a = this.shapes.length,
            n = this.rd.v;
        if (0 !== n) {
            var o, h, l;
            for (s = 0; a > s; s += 1) {
                if (o = this.shapes[s], h = o.shape.paths, l = o.localShapeCollection, o.shape.mdf || this.mdf || t)
                    for (l.releaseShapes(), o.shape.mdf = !0, e = o.shape.paths.shapes, i = o.shape.paths._length, r = 0; i > r; r += 1) l.addShape(this.processPath(e[r], n));
                o.shape.paths = o.localShapeCollection
            }
        }
        this.dynamicProperties.length || (this.mdf = !1)
    }, ShapeModifiers.registerModifier("rd", RoundCornersModifier), RepeaterModifier.prototype.processKeys = function(t) {
        if (this.elem.globalData.frameId !== this.frameId || t) {
            this.mdf = t ? !0 : !1;
            var e, s = this.dynamicProperties.length;
            for (e = 0; s > e; e += 1) this.dynamicProperties[e].getValue(), this.dynamicProperties[e].mdf && (this.mdf = !0)
        }
    }, RepeaterModifier.prototype.initModifierProperties = function(t, e) {
        this.getValue = this.processKeys, this.c = PropertyFactory.getProp(t, e.c, 0, null, this.dynamicProperties), this.o = PropertyFactory.getProp(t, e.o, 0, null, this.dynamicProperties), this.tr = PropertyFactory.getProp(t, e.tr, 2, null, this.dynamicProperties), this.data = e, this.dynamicProperties.length || this.getValue(!0), this.pMatrix = new Matrix, this.rMatrix = new Matrix, this.sMatrix = new Matrix, this.tMatrix = new Matrix, this.matrix = new Matrix
    }, RepeaterModifier.prototype.applyTransforms = function(t, e, s, r, i, a) {
        var n = a ? -1 : 1,
            o = r.s.v[0] + (1 - r.s.v[0]) * (1 - i),
            h = r.s.v[1] + (1 - r.s.v[1]) * (1 - i);
        t.translate(r.p.v[0] * n * i, r.p.v[1] * n * i, r.p.v[2]), e.translate(-r.a.v[0], -r.a.v[1], r.a.v[2]), e.rotate(-r.r.v * n * i), e.translate(r.a.v[0], r.a.v[1], r.a.v[2]), s.translate(-r.a.v[0], -r.a.v[1], r.a.v[2]), s.scale(a ? 1 / o : o, a ? 1 / h : h), s.translate(r.a.v[0], r.a.v[1], r.a.v[2])
    }, RepeaterModifier.prototype.init = function(t, e, s, r, i) {
        this.elem = t, this.arr = e, this.pos = s, this.elemsData = r, this._currentCopies = 0, this._elements = [], this._groups = [], this.dynamicProperties = [], this.frameId = -1, this.initModifierProperties(t, e[s]);
        for (var a = 0; s > 0;) s -= 1, this._elements.unshift(e[s]), a += 1;
        this.dynamicProperties.length ? (this.k = !0, i.push(this)) : this.getValue(!0)
    }, RepeaterModifier.prototype.resetElements = function(t) {
        var e, s = t.length;
        for (e = 0; s > e; e += 1) t[e]._processed = !1, "gr" === t[e].ty && this.resetElements(t[e].it)
    }, RepeaterModifier.prototype.cloneElements = function(t) {
        var e = (t.length, JSON.parse(JSON.stringify(t)));
        return this.resetElements(e), e
    }, RepeaterModifier.prototype.changeGroupRender = function(t, e) {
        var s, r = t.length;
        for (s = 0; r > s; s += 1) t[s]._render = e, "gr" === t[s].ty && this.changeGroupRender(t[s].it, e)
    }, RepeaterModifier.prototype.processShapes = function(t) {
        if (this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.dynamicProperties.length || t || (this.mdf = !1), this.mdf)) {
            var e = Math.ceil(this.c.v);
            if (this._groups.length < e) {
                for (; this._groups.length < e;) {
                    var s = {
                        it: this.cloneElements(this._elements),
                        ty: "gr"
                    };
                    s.it.push({
                        a: {
                            a: 0,
                            ix: 1,
                            k: [0, 0]
                        },
                        nm: "Transform",
                        o: {
                            a: 0,
                            ix: 7,
                            k: 100
                        },
                        p: {
                            a: 0,
                            ix: 2,
                            k: [0, 0]
                        },
                        r: {
                            a: 0,
                            ix: 6,
                            k: 0
                        },
                        s: {
                            a: 0,
                            ix: 3,
                            k: [100, 100]
                        },
                        sa: {
                            a: 0,
                            ix: 5,
                            k: 0
                        },
                        sk: {
                            a: 0,
                            ix: 4,
                            k: 0
                        },
                        ty: "tr"
                    }), this.arr.splice(0, 0, s), this._groups.splice(0, 0, s), this._currentCopies += 1
                }
                this.elem.reloadShapes()
            }
            var r, i, a = 0;
            for (r = 0; r <= this._groups.length - 1; r += 1) i = e > a, this._groups[r]._render = i, this.changeGroupRender(this._groups[r].it, i), a += 1;
            this._currentCopies = e, this.elem.firstFrame = !0;
            var n = this.o.v,
                o = n % 1,
                h = n > 0 ? Math.floor(n) : Math.ceil(n),
                l = (this.tr.v.props, this.pMatrix.props),
                p = this.rMatrix.props,
                m = this.sMatrix.props;
            this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset();
            var f = 0;
            if (n > 0) {
                for (; h > f;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), f += 1;
                o && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, o, !1), f += o)
            } else if (0 > n) {
                for (; f > h;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0), f -= 1;
                o && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -o, !0), f -= o)
            }
            r = 1 === this.data.m ? 0 : this._currentCopies - 1;
            var c = 1 === this.data.m ? 1 : -1;
            for (a = this._currentCopies; a;) {
                if (0 !== f) {
                    (0 !== r && 1 === c || r !== this._currentCopies - 1 && -1 === c) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), this.matrix.transform(p[0], p[1], p[2], p[3], p[4], p[5], p[6], p[7], p[8], p[9], p[10], p[11], p[12], p[13], p[14], p[15]), this.matrix.transform(m[0], m[1], m[2], m[3], m[4], m[5], m[6], m[7], m[8], m[9], m[10], m[11], m[12], m[13], m[14], m[15]), this.matrix.transform(l[0], l[1], l[2], l[3], l[4], l[5], l[6], l[7], l[8], l[9], l[10], l[11], l[12], l[13], l[14], l[15]);
                    var d, u = this.elemsData[r].it,
                        y = u[u.length - 1].transform.mProps.v.props,
                        g = y.length;
                    for (d = 0; g > d; d += 1) y[d] = this.matrix.props[d];
                    this.matrix.reset()
                } else {
                    this.matrix.reset();
                    var d, u = this.elemsData[r].it,
                        y = u[u.length - 1].transform.mProps.v.props,
                        g = y.length;
                    for (d = 0; g > d; d += 1) y[d] = this.matrix.props[d]
                }
                f += 1, a -= 1, r += c
            }
        }
    }, RepeaterModifier.prototype.addShape = function() {}, ShapeModifiers.registerModifier("rp", RepeaterModifier), ShapeCollection.prototype.addShape = function(t) {
        this._length === this._maxLength && (this.shapes = this.shapes.concat(Array.apply(null, {
            length: this._maxLength
        })), this._maxLength *= 2), this.shapes[this._length] = t, this._length += 1
    }, ShapeCollection.prototype.releaseShapes = function() {
        var t;
        for (t = 0; t < this._length; t += 1) shape_pool.release(this.shapes[t]);
        this._length = 0
    };
    var ImagePreloader = function() {
            function t() {
                this.loadedAssets += 1, this.loadedAssets === this.totalImages && n && n(null)
            }

            function e(t) {
                var e = "";
                if (this.assetsPath) {
                    var s = t.p; - 1 !== s.indexOf("images/") && (s = s.split("/")[1]), e = this.assetsPath + s
                } else e = this.path, e += t.u ? t.u : "", e += t.p;
                return e
            }

            function s(e) {
                var s = document.createElement("img");
                s.addEventListener("load", t.bind(this), !1), s.addEventListener("error", t.bind(this), !1), s.src = e
            }

            function r(t, r) {
                n = r, this.totalAssets = t.length;
                var i;
                for (i = 0; i < this.totalAssets; i += 1) t[i].layers || (s.bind(this)(e.bind(this)(t[i])), this.totalImages += 1)
            }

            function i(t) {
                this.path = t || ""
            }

            function a(t) {
                this.assetsPath = t || ""
            }
            var n;
            return function() {
                this.loadAssets = r, this.setAssetsPath = a, this.setPath = i, this.assetsPath = "", this.path = "", this.totalAssets = 0, this.totalImages = 0, this.loadedAssets = 0
            }
        }(),
        featureSupport = function() {
            var t = {
                maskType: !0
            };
            return (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (t.maskType = !1), t
        }(),
        filtersFactory = function() {
            function t(t) {
                var e = document.createElementNS(svgNS, "filter");
                return e.setAttribute("id", t), e.setAttribute("filterUnits", "objectBoundingBox"), e.setAttribute("x", "0%"), e.setAttribute("y", "0%"), e.setAttribute("width", "100%"), e.setAttribute("height", "100%"), e
            }

            function e() {
                var t = document.createElementNS(svgNS, "feColorMatrix");
                return t.setAttribute("type", "matrix"), t.setAttribute("color-interpolation-filters", "sRGB"), t.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"), t
            }
            var s = {};
            return s.createFilter = t, s.createAlphaToLuminanceFilter = e, s
        }();
    TextAnimatorProperty.prototype.searchProperties = function(t) {
        var e, s, r, i = this._textData.a.length,
            a = PropertyFactory.getProp;
        for (e = 0; i > e; e += 1) r = this._textData.a[e], s = {
            a: {},
            s: {}
        }, "r" in r.a && (s.a.r = a(this._elem, r.a.r, 0, degToRads, this._dynamicProperties)), "rx" in r.a && (s.a.rx = a(this._elem, r.a.rx, 0, degToRads, this._dynamicProperties)), "ry" in r.a && (s.a.ry = a(this._elem, r.a.ry, 0, degToRads, this._dynamicProperties)), "sk" in r.a && (s.a.sk = a(this._elem, r.a.sk, 0, degToRads, this._dynamicProperties)), "sa" in r.a && (s.a.sa = a(this._elem, r.a.sa, 0, degToRads, this._dynamicProperties)), "s" in r.a && (s.a.s = a(this._elem, r.a.s, 1, .01, this._dynamicProperties)), "a" in r.a && (s.a.a = a(this._elem, r.a.a, 1, 0, this._dynamicProperties)), "o" in r.a && (s.a.o = a(this._elem, r.a.o, 0, .01, this._dynamicProperties)), "p" in r.a && (s.a.p = a(this._elem, r.a.p, 1, 0, this._dynamicProperties)), "sw" in r.a && (s.a.sw = a(this._elem, r.a.sw, 0, 0, this._dynamicProperties)), "sc" in r.a && (s.a.sc = a(this._elem, r.a.sc, 1, 0, this._dynamicProperties)), "fc" in r.a && (s.a.fc = a(this._elem, r.a.fc, 1, 0, this._dynamicProperties)), "fh" in r.a && (s.a.fh = a(this._elem, r.a.fh, 0, 0, this._dynamicProperties)), "fs" in r.a && (s.a.fs = a(this._elem, r.a.fs, 0, .01, this._dynamicProperties)), "fb" in r.a && (s.a.fb = a(this._elem, r.a.fb, 0, .01, this._dynamicProperties)), "t" in r.a && (s.a.t = a(this._elem, r.a.t, 0, 0, this._dynamicProperties)), s.s = PropertyFactory.getTextSelectorProp(this._elem, r.s, this._dynamicProperties), s.s.t = r.s.t, this._animatorsData[e] = s;
        this._textData.p && "m" in this._textData.p ? (this._pathData = {
            f: a(this._elem, this._textData.p.f, 0, 0, this._dynamicProperties),
            l: a(this._elem, this._textData.p.l, 0, 0, this._dynamicProperties),
            r: this._textData.p.r,
            m: this._elem.maskManager.getMaskProperty(this._textData.p.m)
        }, this._hasMaskedPath = !0) : this._hasMaskedPath = !1, this._moreOptions.alignment = a(this._elem, this._textData.m.a, 1, 0, this._dynamicProperties), this._dynamicProperties.length && t.push(this)
    }, TextAnimatorProperty.prototype.getMeasures = function(t, e) {
        if (this.lettersChangedFlag = e, this.mdf || this._firstFrame || e || this._hasMaskedPath && this._pathData.m.mdf) {
            this._firstFrame = !1;
            var s, r, i, a, n = this._moreOptions.alignment.v,
                o = this._animatorsData,
                h = this._textData,
                l = this.mHelper,
                p = this._renderType,
                m = this.renderedLetters.length,
                f = (this.data, t.l);
            if (this._hasMaskedPath) {
                var c = this._pathData.m;
                if (!this._pathData.n || this._pathData.mdf) {
                    var d = c.v;
                    this._pathData.r && (d = reversePath(d));
                    var u = {
                        tLength: 0,
                        segments: []
                    };
                    a = d._length - 1;
                    var y, g = 0;
                    for (i = 0; a > i; i += 1) y = {
                        s: d.v[i],
                        e: d.v[i + 1],
                        to: [d.o[i][0] - d.v[i][0], d.o[i][1] - d.v[i][1]],
                        ti: [d.i[i + 1][0] - d.v[i + 1][0], d.i[i + 1][1] - d.v[i + 1][1]]
                    }, bez.buildBezierData(y), u.tLength += y.bezierData.segmentLength, u.segments.push(y), g += y.bezierData.segmentLength;
                    i = a, c.v.c && (y = {
                        s: d.v[i],
                        e: d.v[0],
                        to: [d.o[i][0] - d.v[i][0], d.o[i][1] - d.v[i][1]],
                        ti: [d.i[0][0] - d.v[0][0], d.i[0][1] - d.v[0][1]]
                    }, bez.buildBezierData(y), u.tLength += y.bezierData.segmentLength, u.segments.push(y), g += y.bezierData.segmentLength), this._pathData.pi = u
                }
                var v, b, E, u = this._pathData.pi,
                    P = this._pathData.f.v,
                    x = 0,
                    S = 1,
                    C = 0,
                    k = !0,
                    A = u.segments;
                if (0 > P && c.v.c)
                    for (u.tLength < Math.abs(P) && (P = -Math.abs(P) % u.tLength), x = A.length - 1, E = A[x].bezierData.points, S = E.length - 1; 0 > P;) P += E[S].partialLength, S -= 1, 0 > S && (x -= 1, E = A[x].bezierData.points, S = E.length - 1);
                E = A[x].bezierData.points, b = E[S - 1], v = E[S];
                var M, D, T = v.partialLength
            }
            a = f.length, s = 0, r = 0;
            var w, _, I, F, V, R = 1.2 * t.s * .714,
                N = !0;
            if (F = o.length, e)
                for (I = 0; F > I; I += 1) _ = o[I].s, _.getValue(!0);
            var B, L, O, G, j, H, z, W, q, Y, X, J, K, U = -1,
                Z = P,
                Q = x,
                $ = S,
                tt = -1,
                et = 0,
                st = "",
                rt = this.defaultPropsArray;
            for (i = 0; a > i; i += 1) {
                if (l.reset(), j = 1, f[i].n) s = 0, r += t.yOffset, r += N ? 1 : 0, P = Z, N = !1, et = 0, this._hasMaskedPath && (x = Q, S = $, E = A[x].bezierData.points, b = E[S - 1], v = E[S], T = v.partialLength, C = 0), K = Y = J = st = "", rt = this.defaultPropsArray;
                else {
                    if (this._hasMaskedPath) {
                        if (tt !== f[i].line) {
                            switch (t.j) {
                                case 1:
                                    P += g - t.lineWidths[f[i].line];
                                    break;
                                case 2:
                                    P += (g - t.lineWidths[f[i].line]) / 2
                            }
                            tt = f[i].line
                        }
                        U !== f[i].ind && (f[U] && (P += f[U].extra), P += f[i].an / 2, U = f[i].ind), P += n[0] * f[i].an / 200;
                        var it = 0;
                        for (I = 0; F > I; I += 1) w = o[I].a, "p" in w && (_ = o[I].s, B = _.getMult(f[i].anIndexes[I], h.a[I].s.totalChars), it += B.length ? w.p.v[0] * B[0] : w.p.v[0] * B), "a" in w && (_ = o[I].s, B = _.getMult(f[i].anIndexes[I], h.a[I].s.totalChars), it += B.length ? w.a.v[0] * B[0] : w.a.v[0] * B);
                        for (k = !0; k;) C + T >= P + it || !E ? (M = (P + it - C) / v.partialLength, O = b.point[0] + (v.point[0] - b.point[0]) * M, G = b.point[1] + (v.point[1] - b.point[1]) * M, l.translate(-n[0] * f[i].an / 200, -(n[1] * R / 100)), k = !1) : E && (C += v.partialLength, S += 1, S >= E.length && (S = 0, x += 1, A[x] ? E = A[x].bezierData.points : c.v.c ? (S = 0, x = 0, E = A[x].bezierData.points) : (C -= v.partialLength, E = null)), E && (b = v, v = E[S], T = v.partialLength));
                        L = f[i].an / 2 - f[i].add, l.translate(-L, 0, 0)
                    } else L = f[i].an / 2 - f[i].add, l.translate(-L, 0, 0), l.translate(-n[0] * f[i].an / 200, -n[1] * R / 100, 0);
                    for (et += f[i].l / 2, I = 0; F > I; I += 1) w = o[I].a, "t" in w && (_ = o[I].s, B = _.getMult(f[i].anIndexes[I], h.a[I].s.totalChars), this._hasMaskedPath ? P += B.length ? w.t * B[0] : w.t * B : s += B.length ? w.t.v * B[0] : w.t.v * B);
                    for (et += f[i].l / 2, t.strokeWidthAnim && (z = t.sw || 0), t.strokeColorAnim && (H = t.sc ? [t.sc[0], t.sc[1], t.sc[2]] : [0, 0, 0]), t.fillColorAnim && t.fc && (W = [t.fc[0], t.fc[1], t.fc[2]]), I = 0; F > I; I += 1) w = o[I].a, "a" in w && (_ = o[I].s, B = _.getMult(f[i].anIndexes[I], h.a[I].s.totalChars), B.length ? l.translate(-w.a.v[0] * B[0], -w.a.v[1] * B[1], w.a.v[2] * B[2]) : l.translate(-w.a.v[0] * B, -w.a.v[1] * B, w.a.v[2] * B));
                    for (I = 0; F > I; I += 1) w = o[I].a, "s" in w && (_ = o[I].s, B = _.getMult(f[i].anIndexes[I], h.a[I].s.totalChars), B.length ? l.scale(1 + (w.s.v[0] - 1) * B[0], 1 + (w.s.v[1] - 1) * B[1], 1) : l.scale(1 + (w.s.v[0] - 1) * B, 1 + (w.s.v[1] - 1) * B, 1));
                    for (I = 0; F > I; I += 1) {
                        if (w = o[I].a, _ = o[I].s, B = _.getMult(f[i].anIndexes[I], h.a[I].s.totalChars), "sk" in w && (B.length ? l.skewFromAxis(-w.sk.v * B[0], w.sa.v * B[1]) : l.skewFromAxis(-w.sk.v * B, w.sa.v * B)), "r" in w && l.rotateZ(B.length ? -w.r.v * B[2] : -w.r.v * B), "ry" in w && l.rotateY(B.length ? w.ry.v * B[1] : w.ry.v * B), "rx" in w && l.rotateX(B.length ? w.rx.v * B[0] : w.rx.v * B), "o" in w && (j += B.length ? (w.o.v * B[0] - j) * B[0] : (w.o.v * B - j) * B), t.strokeWidthAnim && "sw" in w && (z += B.length ? w.sw.v * B[0] : w.sw.v * B), t.strokeColorAnim && "sc" in w)
                            for (q = 0; 3 > q; q += 1) H[q] = B.length ? H[q] + (w.sc.v[q] - H[q]) * B[0] : H[q] + (w.sc.v[q] - H[q]) * B;
                        if (t.fillColorAnim && t.fc) {
                            if ("fc" in w)
                                for (q = 0; 3 > q; q += 1) W[q] = B.length ? W[q] + (w.fc.v[q] - W[q]) * B[0] : W[q] + (w.fc.v[q] - W[q]) * B;
                            "fh" in w && (W = B.length ? addHueToRGB(W, w.fh.v * B[0]) : addHueToRGB(W, w.fh.v * B)), "fs" in w && (W = B.length ? addSaturationToRGB(W, w.fs.v * B[0]) : addSaturationToRGB(W, w.fs.v * B)), "fb" in w && (W = B.length ? addBrightnessToRGB(W, w.fb.v * B[0]) : addBrightnessToRGB(W, w.fb.v * B))
                        }
                    }
                    for (I = 0; F > I; I += 1) w = o[I].a, "p" in w && (_ = o[I].s, B = _.getMult(f[i].anIndexes[I], h.a[I].s.totalChars), this._hasMaskedPath ? B.length ? l.translate(0, w.p.v[1] * B[0], -w.p.v[2] * B[1]) : l.translate(0, w.p.v[1] * B, -w.p.v[2] * B) : B.length ? l.translate(w.p.v[0] * B[0], w.p.v[1] * B[1], -w.p.v[2] * B[2]) : l.translate(w.p.v[0] * B, w.p.v[1] * B, -w.p.v[2] * B));
                    if (t.strokeWidthAnim && (Y = 0 > z ? 0 : z), t.strokeColorAnim && (X = "rgb(" + Math.round(255 * H[0]) + "," + Math.round(255 * H[1]) + "," + Math.round(255 * H[2]) + ")"), t.fillColorAnim && t.fc && (J = "rgb(" + Math.round(255 * W[0]) + "," + Math.round(255 * W[1]) + "," + Math.round(255 * W[2]) + ")"), this._hasMaskedPath) {
                        if (l.translate(0, -t.ls), l.translate(0, n[1] * R / 100 + r, 0), h.p.p) {
                            D = (v.point[1] - b.point[1]) / (v.point[0] - b.point[0]);
                            var at = 180 * Math.atan(D) / Math.PI;
                            v.point[0] < b.point[0] && (at += 180), l.rotate(-at * Math.PI / 180)
                        }
                        l.translate(O, G, 0), P -= n[0] * f[i].an / 200, f[i + 1] && U !== f[i + 1].ind && (P += f[i].an / 2, P += t.tr / 1e3 * t.s)
                    } else {
                        switch (l.translate(s, r, 0), t.ps && l.translate(t.ps[0], t.ps[1] + t.ascent, 0), t.j) {
                            case 1:
                                l.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[f[i].line]), 0, 0);
                                break;
                            case 2:
                                l.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[f[i].line]) / 2, 0, 0)
                        }
                        l.translate(0, -t.ls), l.translate(L, 0, 0), l.translate(n[0] * f[i].an / 200, n[1] * R / 100, 0), s += f[i].l + t.tr / 1e3 * t.s
                    }
                    "html" === p ? st = l.toCSS() : "svg" === p ? st = l.to2dCSS() : rt = [l.props[0], l.props[1], l.props[2], l.props[3], l.props[4], l.props[5], l.props[6], l.props[7], l.props[8], l.props[9], l.props[10], l.props[11], l.props[12], l.props[13], l.props[14], l.props[15]], K = j
                }
                i >= m ? (V = new LetterProps(K, Y, X, J, st, rt), this.renderedLetters.push(V), m += 1, this.lettersChangedFlag = !0) : (V = this.renderedLetters[i], this.lettersChangedFlag = V.update(K, Y, X, J, st, rt) || this.lettersChangedFlag)
            }
        }
    }, TextAnimatorProperty.prototype.getValue = function() {
        if (this._elem.globalData.frameId !== this._frameId) {
            this._frameId = this._elem.globalData.frameId;
            var t, e = this._dynamicProperties.length;
            for (this.mdf = !1, t = 0; e > t; t += 1) this._dynamicProperties[t].getValue(), this.mdf = this._dynamicProperties[t].mdf || this.mdf
        }
    }, TextAnimatorProperty.prototype.mHelper = new Matrix, TextAnimatorProperty.prototype.defaultPropsArray = [], LetterProps.prototype.update = function(t, e, s, r, i, a) {
        this.mdf.o = !1, this.mdf.sw = !1, this.mdf.sc = !1, this.mdf.fc = !1, this.mdf.m = !1, this.mdf.p = !1;
        var n = !1;
        return this.o !== t && (this.o = t, this.mdf.o = !0, n = !0), this.sw !== e && (this.sw = e, this.mdf.sw = !0, n = !0), this.sc !== s && (this.sc = s, this.mdf.sc = !0, n = !0), this.fc !== r && (this.fc = r, this.mdf.fc = !0, n = !0), this.m !== i && (this.m = i, this.mdf.m = !0, n = !0), !a.length || this.p[0] === a[0] && this.p[1] === a[1] && this.p[4] === a[4] && this.p[5] === a[5] && this.p[12] === a[12] && this.p[13] === a[13] || (this.p = a, this.mdf.p = !0, n = !0), n
    }, TextProperty.prototype.setCurrentData = function(t) {
        var e = this.currentData;
        e.ascent = t.ascent, e.boxWidth = t.boxWidth ? t.boxWidth : e.boxWidth, e.f = t.f, e.fStyle = t.fStyle, e.fWeight = t.fWeight, e.fc = t.fc, e.j = t.j, e.justifyOffset = t.justifyOffset, e.l = t.l, e.lh = t.lh, e.lineWidths = t.lineWidths, e.ls = t.ls, e.of = t.of, e.s = t.s, e.sc = t.sc, e.sw = t.sw, e.t = t.t, e.tr = t.tr, e.fillColorAnim = t.fillColorAnim || e.fillColorAnim, e.strokeColorAnim = t.strokeColorAnim || e.strokeColorAnim, e.strokeWidthAnim = t.strokeWidthAnim || e.strokeWidthAnim, e.yOffset = t.yOffset, e.__complete = !1
    }, TextProperty.prototype.searchProperty = function() {
        return this.kf = this.data.d.k.length > 1, this.kf
    }, TextProperty.prototype.getValue = function() {
        this.mdf = !1;
        var t = this.elem.globalData.frameId;
        if (t !== this._frameId && this.kf || this.firstFrame) {
            for (var e, s = this.data.d.k, r = 0, i = s.length; i - 1 >= r && (e = s[r].s, !(r === i - 1 || s[r + 1].t > t));) r += 1;
            this.keysIndex !== r && (e.__complete || this.completeTextData(e), this.setCurrentData(e), this.mdf = this.firstFrame ? !1 : !0, this.pv = this.v = this.currentData.t, this.keysIndex = r), this._frameId = t
        }
    }, TextProperty.prototype.completeTextData = function(t) {
        t.__complete = !0;
        var e, s, r, i, a, n, o, h = this.elem.globalData.fontManager,
            l = this.data,
            p = [],
            m = 0,
            f = l.m.g,
            c = 0,
            d = 0,
            u = 0,
            y = [],
            g = 0,
            v = 0,
            b = h.getFontByName(t.f),
            E = 0,
            P = b.fStyle.split(" "),
            x = "normal",
            S = "normal";
        s = P.length;
        var C;
        for (e = 0; s > e; e += 1) switch (C = P[e].toLowerCase()) {
            case "italic":
                S = "italic";
                break;
            case "bold":
                x = "700";
                break;
            case "black":
                x = "900";
                break;
            case "medium":
                x = "500";
                break;
            case "regular":
            case "normal":
                x = "400";
            case "light":
            case "thin":
                x = "200"
        }
        t.fWeight = x, t.fStyle = S, s = t.t.length;
        var k = t.tr / 1e3 * t.s;
        if (t.sz) {
            var A = t.sz[0],
                M = -1;
            for (e = 0; s > e; e += 1) r = !1, " " === t.t.charAt(e) ? M = e : 13 === t.t.charCodeAt(e) && (g = 0, r = !0), h.chars ? (o = h.getCharData(t.t.charAt(e), b.fStyle, b.fFamily), E = r ? 0 : o.w * t.s / 100) : E = h.measureText(t.t.charAt(e), t.f, t.s), g + E > A && " " !== t.t.charAt(e) ? (-1 === M ? s += 1 : e = M, t.t = t.t.substr(0, e) + "\r" + t.t.substr(e === M ? e + 1 : e), M = -1, g = 0) : (g += E, g += k);
            s = t.t.length
        }
        g = -k, E = 0;
        var D, T = 0;
        for (e = 0; s > e; e += 1)
            if (r = !1, D = t.t.charAt(e), " " === D ? i = "\xa0" : 13 === D.charCodeAt(0) ? (T = 0, y.push(g), v = g > v ? g : v, g = -2 * k, i = "", r = !0, u += 1) : i = t.t.charAt(e), h.chars ? (o = h.getCharData(D, b.fStyle, h.getFontByName(t.f).fFamily), E = r ? 0 : o.w * t.s / 100) : E = h.measureText(i, t.f, t.s), " " === D ? T += E + k : (g += E + k + T, T = 0), p.push({
                    l: E,
                    an: E,
                    add: c,
                    n: r,
                    anIndexes: [],
                    val: i,
                    line: u
                }), 2 == f) {
                if (c += E, "" == i || "\xa0" == i || e == s - 1) {
                    for (("" == i || "\xa0" == i) && (c -= E); e >= d;) p[d].an = c, p[d].ind = m, p[d].extra = E, d += 1;
                    m += 1, c = 0
                }
            } else if (3 == f) {
            if (c += E, "" == i || e == s - 1) {
                for ("" == i && (c -= E); e >= d;) p[d].an = c, p[d].ind = m, p[d].extra = E, d += 1;
                c = 0, m += 1
            }
        } else p[m].ind = m, p[m].extra = 0, m += 1;
        if (t.l = p, v = g > v ? g : v, y.push(g), t.sz) t.boxWidth = t.sz[0], t.justifyOffset = 0;
        else switch (t.boxWidth = v, t.j) {
            case 1:
                t.justifyOffset = -t.boxWidth;
                break;
            case 2:
                t.justifyOffset = -t.boxWidth / 2;
                break;
            default:
                t.justifyOffset = 0
        }
        t.lineWidths = y;
        var w, _, I = l.a;
        n = I.length;
        var F, V, R = [];
        for (a = 0; n > a; a += 1) {
            for (w = I[a], w.a.sc && (t.strokeColorAnim = !0), w.a.sw && (t.strokeWidthAnim = !0), (w.a.fc || w.a.fh || w.a.fs || w.a.fb) && (t.fillColorAnim = !0), V = 0, F = w.s.b, e = 0; s > e; e += 1) _ = p[e], _.anIndexes[a] = V, (1 == F && "" != _.val || 2 == F && "" != _.val && "\xa0" != _.val || 3 == F && (_.n || "\xa0" == _.val || e == s - 1) || 4 == F && (_.n || e == s - 1)) && (1 === w.s.rn && R.push(V), V += 1);
            l.a[a].s.totalChars = V;
            var N, B = -1;
            if (1 === w.s.rn)
                for (e = 0; s > e; e += 1) _ = p[e], B != _.anIndexes[a] && (B = _.anIndexes[a], N = R.splice(Math.floor(Math.random() * R.length), 1)[0]), _.anIndexes[a] = N
        }
        t.yOffset = t.lh || 1.2 * t.s, t.ls = t.ls || 0, t.ascent = b.ascent * t.s / 100
    }, TextProperty.prototype.updateDocumentData = function(t, e) {
        e = void 0 === e ? this.keysIndex : e;
        var s = this.data.d.k[e].s;
        s.__complete = !1, s.t = t.t, this.keysIndex = -1, this.firstFrame = !0, this.getValue()
    };
    var pooling = function() {
            function t(t) {
                return t.concat(Array.apply(null, {
                    length: t.length
                }))
            }
            return {
                "double": t
            }
        }(),
        point_pool = function() {
            function t() {
                var t;
                return r ? (r -= 1, t = a[r]) : t = [.1, .1], t
            }

            function e(t) {
                r === i && (a = pooling["double"](a), i = 2 * i), a[r] = t, r += 1
            }
            var s = {
                    newPoint: t,
                    release: e
                },
                r = 0,
                i = 8,
                a = Array.apply(null, {
                    length: i
                });
            return s
        }(),
        shape_pool = function() {
            function t() {
                var t;
                return a ? (a -= 1, t = o[a]) : t = new ShapePath, t
            }

            function e(t) {
                a === n && (o = pooling["double"](o), n = 2 * n);
                var e, s = t._length;
                for (e = 0; s > e; e += 1) point_pool.release(t.v[e]), point_pool.release(t.i[e]), point_pool.release(t.o[e]), t.v[e] = null, t.i[e] = null, t.o[e] = null;
                t._length = 0, t.c = !1, o[a] = t, a += 1
            }

            function s(t, s) {
                for (; s--;) e(t[s])
            }

            function r(e, s) {
                var r, i = void 0 === e._length ? e.v.length : e._length,
                    a = t();
                a.setLength(i), a.c = e.c;
                var n;
                for (r = 0; i > r; r += 1) s ? (n = s.applyToPointArray(e.v[r][0], e.v[r][1], 0, 2), a.setXYAt(n[0], n[1], "v", r), point_pool.release(n), n = s.applyToPointArray(e.o[r][0], e.o[r][1], 0, 2), a.setXYAt(n[0], n[1], "o", r), point_pool.release(n), n = s.applyToPointArray(e.i[r][0], e.i[r][1], 0, 2), a.setXYAt(n[0], n[1], "i", r), point_pool.release(n)) : a.setTripleAt(e.v[r][0], e.v[r][1], e.o[r][0], e.o[r][1], e.i[r][0], e.i[r][1], r);
                return a
            }
            var i = {
                    clone: r,
                    newShape: t,
                    release: e,
                    releaseArray: s
                },
                a = 0,
                n = 4,
                o = Array.apply(null, {
                    length: n
                });
            return i
        }(),
        shapeCollection_pool = function() {
            function t() {
                var t;
                return i ? (i -= 1, t = n[i]) : t = new ShapeCollection, t
            }

            function e(t) {
                var e, s = t._length;
                for (e = 0; s > e; e += 1) shape_pool.release(t.shapes[e]);
                t._length = 0, i === a && (n = pooling["double"](n), a = 2 * a), n[i] = t, i += 1
            }

            function s(t, s) {
                e(t), i === a && (n = pooling["double"](n), a = 2 * a), n[i] = t, i += 1
            }
            var r = {
                    newShapeCollection: t,
                    release: e,
                    clone: s
                },
                i = 0,
                a = 4,
                n = Array.apply(null, {
                    length: a
                });
            return r
        }();
    BaseRenderer.prototype.checkLayers = function(t) {
        var e, s, r = this.layers.length;
        for (this.completeLayers = !0, e = r - 1; e >= 0; e--) this.elements[e] || (s = this.layers[e], s.ip - s.st <= t - this.layers[e].st && s.op - s.st > t - this.layers[e].st && this.buildItem(e)), this.completeLayers = this.elements[e] ? this.completeLayers : !1;
        this.checkPendingElements()
    }, BaseRenderer.prototype.createItem = function(t) {
        switch (t.ty) {
            case 2:
                return this.createImage(t);
            case 0:
                return this.createComp(t);
            case 1:
                return this.createSolid(t);
            case 4:
                return this.createShape(t);
            case 5:
                return this.createText(t);
            case 13:
                return this.createCamera(t);
            case 99:
                return null
        }
        return this.createBase(t)
    }, BaseRenderer.prototype.createCamera = function() {
        throw new Error("You're using a 3d camera. Try the html renderer.")
    }, BaseRenderer.prototype.buildAllItems = function() {
        var t, e = this.layers.length;
        for (t = 0; e > t; t += 1) this.buildItem(t);
        this.checkPendingElements()
    }, BaseRenderer.prototype.includeLayers = function(t) {
        this.completeLayers = !1;
        var e, s, r = t.length,
            i = this.layers.length;
        for (e = 0; r > e; e += 1)
            for (s = 0; i > s;) {
                if (this.layers[s].id == t[e].id) {
                    this.layers[s] = t[e];
                    break
                }
                s += 1
            }
    }, BaseRenderer.prototype.setProjectInterface = function(t) {
        this.globalData.projectInterface = t
    }, BaseRenderer.prototype.initItems = function() {
        this.globalData.progressiveLoad || this.buildAllItems()
    }, BaseRenderer.prototype.buildElementParenting = function(t, e, s) {
        s = s || [];
        for (var r = this.elements, i = this.layers, a = 0, n = i.length; n > a;) i[a].ind == e && (r[a] && r[a] !== !0 ? void 0 !== i[a].parent ? (s.push(r[a]), r[a]._isParent = !0, this.buildElementParenting(t, i[a].parent, s)) : (s.push(r[a]), r[a]._isParent = !0, t.setHierarchy(s)) : (this.buildItem(a), this.addPendingElement(t))), a += 1
    }, BaseRenderer.prototype.addPendingElement = function(t) {
        this.pendingElements.push(t)
    }, extendPrototype(BaseRenderer, SVGRenderer), SVGRenderer.prototype.createBase = function(t) {
        return new SVGBaseElement(t, this.layerElement, this.globalData, this)
    }, SVGRenderer.prototype.createShape = function(t) {
        return new IShapeElement(t, this.layerElement, this.globalData, this)
    }, SVGRenderer.prototype.createText = function(t) {
        return new SVGTextElement(t, this.layerElement, this.globalData, this)
    }, SVGRenderer.prototype.createImage = function(t) {
        return new IImageElement(t, this.layerElement, this.globalData, this)
    }, SVGRenderer.prototype.createComp = function(t) {
        return new ICompElement(t, this.layerElement, this.globalData, this)
    }, SVGRenderer.prototype.createSolid = function(t) {
        return new ISolidElement(t, this.layerElement, this.globalData, this)
    }, SVGRenderer.prototype.configAnimation = function(t) {
        this.layerElement = document.createElementNS(svgNS, "svg"), this.layerElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.layerElement.setAttribute("viewBox", "0 0 " + t.w + " " + t.h), this.renderConfig.viewBoxOnly || (this.layerElement.setAttribute("width", t.w), this.layerElement.setAttribute("height", t.h), this.layerElement.style.width = "100%", this.layerElement.style.height = "100%"), this.renderConfig.className && this.layerElement.setAttribute("class", this.renderConfig.className), this.layerElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio), this.animationItem.wrapper.appendChild(this.layerElement);
        var e = document.createElementNS(svgNS, "defs");
        this.globalData.defs = e, this.layerElement.appendChild(e), this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.globalData.frameId = 0, this.globalData.nm = t.nm, this.globalData.compSize = {
            w: t.w,
            h: t.h
        }, this.data = t, this.globalData.frameRate = t.fr;
        var s = document.createElementNS(svgNS, "clipPath"),
            r = document.createElementNS(svgNS, "rect");
        r.setAttribute("width", t.w), r.setAttribute("height", t.h), r.setAttribute("x", 0), r.setAttribute("y", 0);
        var i = "animationMask_" + randomString(10);
        s.setAttribute("id", i), s.appendChild(r);
        var a = document.createElementNS(svgNS, "g");
        a.setAttribute("clip-path", "url(" + locationHref + "#" + i + ")"), this.layerElement.appendChild(a), e.appendChild(s), this.layerElement = a, this.layers = t.layers, this.globalData.fontManager = new FontManager, this.globalData.fontManager.addChars(t.chars), this.globalData.fontManager.addFonts(t.fonts, e), this.elements = Array.apply(null, {
            length: t.layers.length
        })
    }, SVGRenderer.prototype.destroy = function() {
        this.animationItem.wrapper.innerHTML = "", this.layerElement = null, this.globalData.defs = null;
        var t, e = this.layers ? this.layers.length : 0;
        for (t = 0; e > t; t++) this.elements[t] && this.elements[t].destroy();
        this.elements.length = 0, this.destroyed = !0, this.animationItem = null
    }, SVGRenderer.prototype.updateContainerSize = function() {}, SVGRenderer.prototype.buildItem = function(t) {
        var e = this.elements;
        if (!e[t] && 99 != this.layers[t].ty) {
            e[t] = !0;
            var s = this.createItem(this.layers[t]);
            e[t] = s, expressionsPlugin && (0 === this.layers[t].ty && this.globalData.projectInterface.registerComposition(s), s.initExpressions()), this.appendElementInPos(s, t), this.layers[t].tt && (this.elements[t - 1] && this.elements[t - 1] !== !0 ? s.setMatte(e[t - 1].layerId) : (this.buildItem(t - 1), this.addPendingElement(s)))
        }
    }, SVGRenderer.prototype.checkPendingElements = function() {
        for (; this.pendingElements.length;) {
            var t = this.pendingElements.pop();
            if (t.checkParenting(), t.data.tt)
                for (var e = 0, s = this.elements.length; s > e;) {
                    if (this.elements[e] === t) {
                        t.setMatte(this.elements[e - 1].layerId);
                        break
                    }
                    e += 1
                }
        }
    }, SVGRenderer.prototype.renderFrame = function(t) {
        if (this.renderedFrame != t && !this.destroyed) {
            null === t ? t = this.renderedFrame : this.renderedFrame = t, this.globalData.frameNum = t, this.globalData.frameId += 1, this.globalData.projectInterface.currentFrame = t;
            var e, s = this.layers.length;
            for (this.completeLayers || this.checkLayers(t), e = s - 1; e >= 0; e--)(this.completeLayers || this.elements[e]) && this.elements[e].prepareFrame(t - this.layers[e].st);
            for (e = s - 1; e >= 0; e--)(this.completeLayers || this.elements[e]) && this.elements[e].renderFrame()
        }
    }, SVGRenderer.prototype.appendElementInPos = function(t, e) {
        var s = t.getBaseElement();
        if (s) {
            for (var r, i = 0; e > i;) this.elements[i] && this.elements[i] !== !0 && this.elements[i].getBaseElement() && (r = this.elements[i].getBaseElement()), i += 1;
            r ? this.layerElement.insertBefore(s, r) : this.layerElement.appendChild(s)
        }
    }, SVGRenderer.prototype.hide = function() {
        this.layerElement.style.display = "none"
    }, SVGRenderer.prototype.show = function() {
        this.layerElement.style.display = "block"
    }, SVGRenderer.prototype.searchExtraCompositions = function(t) {
        var e, s = t.length,
            r = document.createElementNS(svgNS, "g");
        for (e = 0; s > e; e += 1)
            if (t[e].xt) {
                var i = this.createComp(t[e], r, this.globalData.comp, null);
                i.initExpressions(), this.globalData.projectInterface.registerComposition(i)
            }
    }, MaskElement.prototype.getMaskProperty = function(t) {
        return this.viewData[t].prop
    }, MaskElement.prototype.prepareFrame = function() {
        var t, e = this.dynamicProperties.length;
        for (t = 0; e > t; t += 1) this.dynamicProperties[t].getValue()
    }, MaskElement.prototype.renderFrame = function(t) {
        var e, s = this.masksProperties.length;
        for (e = 0; s > e; e++)
            if ((this.viewData[e].prop.mdf || this.firstFrame) && this.drawPath(this.masksProperties[e], this.viewData[e].prop.v, this.viewData[e]), (this.viewData[e].op.mdf || this.firstFrame) && this.viewData[e].elem.setAttribute("fill-opacity", this.viewData[e].op.v), "n" !== this.masksProperties[e].mode && (this.viewData[e].invRect && (this.element.finalTransform.mProp.mdf || this.firstFrame) && (this.viewData[e].invRect.setAttribute("x", -t.props[12]), this.viewData[e].invRect.setAttribute("y", -t.props[13])), this.storedData[e].x && (this.storedData[e].x.mdf || this.firstFrame))) {
                var r = this.storedData[e].expan;
                this.storedData[e].x.v < 0 ? ("erode" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "erode", this.storedData[e].elem.setAttribute("filter", "url(" + locationHref + "#" + this.storedData[e].filterId + ")")), r.setAttribute("radius", -this.storedData[e].x.v)) : ("dilate" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "dilate", this.storedData[e].elem.setAttribute("filter", null)), this.storedData[e].elem.setAttribute("stroke-width", 2 * this.storedData[e].x.v))
            }
        this.firstFrame = !1
    }, MaskElement.prototype.getMaskelement = function() {
        return this.maskElement
    }, MaskElement.prototype.createLayerSolidPath = function() {
        var t = "M0,0 ";
        return t += " h" + this.globalData.compSize.w, t += " v" + this.globalData.compSize.h, t += " h-" + this.globalData.compSize.w, t += " v-" + this.globalData.compSize.h + " "
    }, MaskElement.prototype.drawPath = function(t, e, s) {
        var r, i, a = " M" + e.v[0][0] + "," + e.v[0][1];
        for (i = e._length, r = 1; i > r; r += 1) a += " C" + bm_rnd(e.o[r - 1][0]) + "," + bm_rnd(e.o[r - 1][1]) + " " + bm_rnd(e.i[r][0]) + "," + bm_rnd(e.i[r][1]) + " " + bm_rnd(e.v[r][0]) + "," + bm_rnd(e.v[r][1]);
        e.c && i > 1 && (a += " C" + bm_rnd(e.o[r - 1][0]) + "," + bm_rnd(e.o[r - 1][1]) + " " + bm_rnd(e.i[0][0]) + "," + bm_rnd(e.i[0][1]) + " " + bm_rnd(e.v[0][0]) + "," + bm_rnd(e.v[0][1])), s.lastPath !== a && (s.elem && (e.c ? t.inv ? s.elem.setAttribute("d", this.solidPath + a) : s.elem.setAttribute("d", a) : s.elem.setAttribute("d", "")), s.lastPath = a)
    }, MaskElement.prototype.destroy = function() {
        this.element = null, this.globalData = null, this.maskElement = null, this.data = null, this.masksProperties = null
    }, BaseElement.prototype.checkMasks = function() {
        if (!this.data.hasMask) return !1;
        for (var t = 0, e = this.data.masksProperties.length; e > t;) {
            if ("n" !== this.data.masksProperties[t].mode && this.data.masksProperties[t].cl !== !1) return !0;
            t += 1
        }
        return !1
    }, BaseElement.prototype.checkParenting = function() {
        void 0 !== this.data.parent && this.comp.buildElementParenting(this, this.data.parent)
    }, BaseElement.prototype.prepareFrame = function(t) {
        this.data.ip - this.data.st <= t && this.data.op - this.data.st > t ? this.isVisible !== !0 && (this.elemMdf = !0, this.globalData.mdf = !0, this.isVisible = !0, this.firstFrame = !0, this.data.hasMask && (this.maskManager.firstFrame = !0)) : this.isVisible !== !1 && (this.elemMdf = !0, this.globalData.mdf = !0, this.isVisible = !1);
        var e, s = this.dynamicProperties.length;
        for (e = 0; s > e; e += 1)(this.isVisible || this._isParent && "transform" === this.dynamicProperties[e].type) && (this.dynamicProperties[e].getValue(), this.dynamicProperties[e].mdf && (this.elemMdf = !0, this.globalData.mdf = !0));
        return this.data.hasMask && this.isVisible && this.maskManager.prepareFrame(t * this.data.sr), this.currentFrameNum = t * this.data.sr, this.isVisible
    }, BaseElement.prototype.globalToLocal = function(t) {
        var e = [];
        e.push(this.finalTransform);
        for (var s = !0, r = this.comp; s;) r.finalTransform ? (r.data.hasMask && e.splice(0, 0, r.finalTransform), r = r.comp) : s = !1;
        var i, a, n = e.length;
        for (i = 0; n > i; i += 1) a = e[i].mat.applyToPointArray(0, 0, 0), t = [t[0] - a[0], t[1] - a[1], 0];
        return t
    }, BaseElement.prototype.initExpressions = function() {
        this.layerInterface = LayerExpressionInterface(this), this.data.hasMask && this.layerInterface.registerMaskInterface(this.maskManager);
        var t = EffectsExpressionInterface.createEffectsInterface(this, this.layerInterface);
        this.layerInterface.registerEffectsInterface(t), 0 === this.data.ty || this.data.xt ? this.compInterface = CompExpressionInterface(this) : 4 === this.data.ty ? this.layerInterface.shapeInterface = ShapeExpressionInterface.createShapeInterface(this.shapesData, this.itemsData, this.layerInterface) : 5 === this.data.ty && (this.layerInterface.textInterface = TextExpressionInterface(this))
    }, BaseElement.prototype.setBlendMode = function() {
        var t = "";
        switch (this.data.bm) {
            case 1:
                t = "multiply";
                break;
            case 2:
                t = "screen";
                break;
            case 3:
                t = "overlay";
                break;
            case 4:
                t = "darken";
                break;
            case 5:
                t = "lighten";
                break;
            case 6:
                t = "color-dodge";
                break;
            case 7:
                t = "color-burn";
                break;
            case 8:
                t = "hard-light";
                break;
            case 9:
                t = "soft-light";
                break;
            case 10:
                t = "difference";
                break;
            case 11:
                t = "exclusion";
                break;
            case 12:
                t = "hue";
                break;
            case 13:
                t = "saturation";
                break;
            case 14:
                t = "color";
                break;
            case 15:
                t = "luminosity"
        }
        var e = this.baseElement || this.layerElement;
        e.style["mix-blend-mode"] = t
    }, BaseElement.prototype.init = function() {
        this.data.sr || (this.data.sr = 1), this.dynamicProperties = this.dynamicProperties || [], this.data.ef && (this.effects = new EffectsManager(this.data, this, this.dynamicProperties)), this.hidden = !1, this.firstFrame = !0, this.isVisible = !1, this._isParent = !1, this.currentFrameNum = -99999, this.lastNum = -99999, this.data.ks && (this.finalTransform = {
            mProp: PropertyFactory.getProp(this, this.data.ks, 2, null, this.dynamicProperties),
            matMdf: !1,
            opMdf: !1,
            mat: new Matrix,
            opacity: 1
        }, this.data.ao && (this.finalTransform.mProp.autoOriented = !0), this.finalTransform.op = this.finalTransform.mProp.o, this.transform = this.finalTransform.mProp, 11 !== this.data.ty && this.createElements(), this.data.hasMask && this.addMasks(this.data)), this.elemMdf = !1
    }, BaseElement.prototype.getType = function() {
        return this.type
    }, BaseElement.prototype.resetHierarchy = function() {
        this.hierarchy ? this.hierarchy.length = 0 : this.hierarchy = []
    }, BaseElement.prototype.getHierarchy = function() {
        return this.hierarchy || (this.hierarchy = []), this.hierarchy
    }, BaseElement.prototype.setHierarchy = function(t) {
        this.hierarchy = t
    }, BaseElement.prototype.getLayerSize = function() {
        return 5 === this.data.ty ? {
            w: this.data.textData.width,
            h: this.data.textData.height
        } : {
            w: this.data.width,
            h: this.data.height
        }
    }, BaseElement.prototype.hide = function() {}, BaseElement.prototype.sourceRectAtTime = function() {
        return {
            top: 0,
            left: 0,
            width: 100,
            height: 100
        }
    }, BaseElement.prototype.mHelper = new Matrix, createElement(BaseElement, SVGBaseElement), SVGBaseElement.prototype.createElements = function() {
        this.layerElement = document.createElementNS(svgNS, "g"), this.transformedElement = this.layerElement, this.data.hasMask && (this.maskedElement = this.layerElement);
        var t = null;
        if (this.data.td) {
            if (3 == this.data.td || 1 == this.data.td) {
                var e = document.createElementNS(svgNS, "mask");
                if (e.setAttribute("id", this.layerId), e.setAttribute("mask-type", 3 == this.data.td ? "luminance" : "alpha"), e.appendChild(this.layerElement), t = e, this.globalData.defs.appendChild(e), !featureSupport.maskType && 1 == this.data.td) {
                    e.setAttribute("mask-type", "luminance");
                    var s = randomString(10),
                        r = filtersFactory.createFilter(s);
                    this.globalData.defs.appendChild(r), r.appendChild(filtersFactory.createAlphaToLuminanceFilter());
                    var i = document.createElementNS(svgNS, "g");
                    i.appendChild(this.layerElement), t = i, e.appendChild(i), i.setAttribute("filter", "url(" + locationHref + "#" + s + ")")
                }
            } else if (2 == this.data.td) {
                var a = document.createElementNS(svgNS, "mask");
                a.setAttribute("id", this.layerId), a.setAttribute("mask-type", "alpha");
                var n = document.createElementNS(svgNS, "g");
                a.appendChild(n);
                var s = randomString(10),
                    r = filtersFactory.createFilter(s),
                    o = document.createElementNS(svgNS, "feColorMatrix");
                o.setAttribute("type", "matrix"), o.setAttribute("color-interpolation-filters", "sRGB"), o.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 -1 1"), r.appendChild(o), this.globalData.defs.appendChild(r);
                var h = document.createElementNS(svgNS, "rect");
                if (h.setAttribute("width", this.comp.data.w), h.setAttribute("height", this.comp.data.h), h.setAttribute("x", "0"), h.setAttribute("y", "0"), h.setAttribute("fill", "#ffffff"), h.setAttribute("opacity", "0"), n.setAttribute("filter", "url(" + locationHref + "#" + s + ")"), n.appendChild(h), n.appendChild(this.layerElement), t = n, !featureSupport.maskType) {
                    a.setAttribute("mask-type", "luminance"), r.appendChild(filtersFactory.createAlphaToLuminanceFilter());
                    var i = document.createElementNS(svgNS, "g");
                    n.appendChild(h), i.appendChild(this.layerElement), t = i, n.appendChild(i)
                }
                this.globalData.defs.appendChild(a)
            }
        } else(this.data.hasMask || this.data.tt) && this.data.tt ? (this.matteElement = document.createElementNS(svgNS, "g"), this.matteElement.appendChild(this.layerElement), t = this.matteElement, this.baseElement = this.matteElement) : this.baseElement = this.layerElement;
        if (!this.data.ln && !this.data.cl || 4 !== this.data.ty && 0 !== this.data.ty || (this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl)), 0 === this.data.ty) {
            var l = document.createElementNS(svgNS, "clipPath"),
                p = document.createElementNS(svgNS, "path");
            p.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
            var m = "cp_" + randomString(8);
            if (l.setAttribute("id", m), l.appendChild(p), this.globalData.defs.appendChild(l), this.checkMasks()) {
                var f = document.createElementNS(svgNS, "g");
                f.setAttribute("clip-path", "url(" + locationHref + "#" + m + ")"), f.appendChild(this.layerElement), this.transformedElement = f, t ? t.appendChild(this.transformedElement) : this.baseElement = this.transformedElement
            } else this.layerElement.setAttribute("clip-path", "url(" + locationHref + "#" + m + ")")
        }
        0 !== this.data.bm && this.setBlendMode(), this.layerElement !== this.parentContainer && (this.placeholder = null), this.data.ef && (this.effectsManager = new SVGEffects(this)), this.checkParenting()
    }, SVGBaseElement.prototype.setBlendMode = BaseElement.prototype.setBlendMode, SVGBaseElement.prototype.renderFrame = function(t) {
        if (3 === this.data.ty || this.data.hd || !this.isVisible) return !1;
        this.lastNum = this.currentFrameNum, this.finalTransform.opMdf = this.firstFrame || this.finalTransform.op.mdf, this.finalTransform.matMdf = this.firstFrame || this.finalTransform.mProp.mdf, this.finalTransform.opacity = this.finalTransform.op.v;
        var e, s = this.finalTransform.mat;
        if (this.hierarchy) {
            var r = 0,
                i = this.hierarchy.length;
            if (!this.finalTransform.matMdf)
                for (; i > r;) {
                    if (this.hierarchy[r].finalTransform.mProp.mdf) {
                        this.finalTransform.matMdf = !0;
                        break
                    }
                    r += 1
                }
            if (this.finalTransform.matMdf)
                for (e = this.finalTransform.mProp.v.props, s.cloneFromProps(e), r = 0; i > r; r += 1) e = this.hierarchy[r].finalTransform.mProp.v.props, s.transform(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15])
        } else this.isVisible && (s = this.finalTransform.mProp.v);
        return this.finalTransform.matMdf && this.layerElement && this.transformedElement.setAttribute("transform", s.to2dCSS()), this.finalTransform.opMdf && this.layerElement && (this.finalTransform.op.v <= 0 ? !this.isTransparent && this.globalData.renderConfig.hideOnTransparent && (this.isTransparent = !0, this.hide()) : this.hidden && this.isTransparent && (this.isTransparent = !1, this.show()), this.transformedElement.setAttribute("opacity", this.finalTransform.op.v)), this.data.hasMask && this.maskManager.renderFrame(s), this.effectsManager && this.effectsManager.renderFrame(this.firstFrame), this.isVisible
    }, SVGBaseElement.prototype.destroy = function() {
        this.layerElement = null, this.parentContainer = null, this.matteElement && (this.matteElement = null), this.maskManager && this.maskManager.destroy()
    }, SVGBaseElement.prototype.getBaseElement = function() {
        return this.baseElement
    }, SVGBaseElement.prototype.addMasks = function(t) {
        this.maskManager = new MaskElement(t, this, this.globalData)
    }, SVGBaseElement.prototype.setMatte = function(t) {
        this.matteElement && this.matteElement.setAttribute("mask", "url(" + locationHref + "#" + t + ")")
    }, SVGBaseElement.prototype.hide = function() {
        this.hidden || (this.layerElement.style.display = "none", this.hidden = !0)
    }, SVGBaseElement.prototype.show = function() {
        this.isVisible && !this.isTransparent && (this.hidden = !1, this.layerElement.style.display = "block")
    }, createElement(SVGBaseElement, IShapeElement), IShapeElement.prototype.identityMatrix = new Matrix, IShapeElement.prototype.lcEnum = {
        1: "butt",
        2: "round",
        3: "square"
    }, IShapeElement.prototype.ljEnum = {
        1: "miter",
        2: "round",
        3: "butt"
    }, IShapeElement.prototype.searchProcessedElement = function(t) {
        for (var e = this.processedElements.length; e;)
            if (e -= 1, this.processedElements[e].elem === t) return this.processedElements[e].pos;
        return 0
    }, IShapeElement.prototype.addProcessedElement = function(t, e) {
        for (var s = this.processedElements.length; s;)
            if (s -= 1, this.processedElements[s].elem === t) {
                this.processedElements[s].pos = e;
                break
            }
        0 === s && this.processedElements.push({
            elem: t,
            pos: e
        })
    }, IShapeElement.prototype.buildExpressionInterface = function() {}, IShapeElement.prototype.createElements = function() {
        this._parent.createElements.call(this), this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, this.dynamicProperties, 0, [], !0), (!this.data.hd || this.data.td) && styleUnselectableDiv(this.layerElement)
    }, IShapeElement.prototype.setGradientData = function(t, e, s) {
        var r, i = "gr_" + randomString(10);
        r = 1 === e.t ? document.createElementNS(svgNS, "linearGradient") : document.createElementNS(svgNS, "radialGradient"), r.setAttribute("id", i), r.setAttribute("spreadMethod", "pad"), r.setAttribute("gradientUnits", "userSpaceOnUse");
        var a, n, o, h = [];
        for (o = 4 * e.g.p, n = 0; o > n; n += 4) a = document.createElementNS(svgNS, "stop"), r.appendChild(a), h.push(a);
        t.setAttribute("gf" === e.ty ? "fill" : "stroke", "url(#" + i + ")"), this.globalData.defs.appendChild(r), s.gf = r, s.cst = h
    }, IShapeElement.prototype.setGradientOpacity = function(t, e, s) {
        if (t.g.k.k[0].s && t.g.k.k[0].s.length > 4 * t.g.p || t.g.k.k.length > 4 * t.g.p) {
            var r, i, a, n, o = document.createElementNS(svgNS, "mask"),
                h = document.createElementNS(svgNS, "path");
            o.appendChild(h);
            var l = "op_" + randomString(10),
                p = "mk_" + randomString(10);
            o.setAttribute("id", p), r = 1 === t.t ? document.createElementNS(svgNS, "linearGradient") : document.createElementNS(svgNS, "radialGradient"), r.setAttribute("id", l), r.setAttribute("spreadMethod", "pad"), r.setAttribute("gradientUnits", "userSpaceOnUse"), n = t.g.k.k[0].s ? t.g.k.k[0].s.length : t.g.k.k.length;
            var m = [];
            for (a = 4 * t.g.p; n > a; a += 2) i = document.createElementNS(svgNS, "stop"), i.setAttribute("stop-color", "rgb(255,255,255)"), r.appendChild(i), m.push(i);
            return h.setAttribute("gf" === t.ty ? "fill" : "stroke", "url(#" + l + ")"), this.globalData.defs.appendChild(r), this.globalData.defs.appendChild(o), e.of = r, e.ost = m, s.msElem = h, p
        }
    }, IShapeElement.prototype.createStyleElement = function(t, e, s) {
        var r = {},
            i = {
                data: t,
                type: t.ty,
                d: "",
                ld: "",
                lvl: e,
                mdf: !1,
                closed: !1
            },
            a = document.createElementNS(svgNS, "path");
        if (r.o = PropertyFactory.getProp(this, t.o, 0, .01, s), ("st" == t.ty || "gs" == t.ty) && (a.setAttribute("stroke-linecap", this.lcEnum[t.lc] || "round"), a.setAttribute("stroke-linejoin", this.ljEnum[t.lj] || "round"), a.setAttribute("fill-opacity", "0"), 1 == t.lj && a.setAttribute("stroke-miterlimit", t.ml), r.w = PropertyFactory.getProp(this, t.w, 0, null, s), t.d)) {
            var n = PropertyFactory.getDashProp(this, t.d, "svg", s);
            n.k || (a.setAttribute("stroke-dasharray", n.dasharray), a.setAttribute("stroke-dashoffset", n.dashoffset)), r.d = n
        }
        if ("fl" == t.ty || "st" == t.ty) r.c = PropertyFactory.getProp(this, t.c, 1, 255, s);
        else {
            r.g = PropertyFactory.getGradientProp(this, t.g, s), 2 == t.t && (r.h = PropertyFactory.getProp(this, t.h, 0, .01, s), r.a = PropertyFactory.getProp(this, t.a, 0, degToRads, s)), r.s = PropertyFactory.getProp(this, t.s, 1, null, s), r.e = PropertyFactory.getProp(this, t.e, 1, null, s), this.setGradientData(a, t, r, i);
            var o = this.setGradientOpacity(t, r, i);
            o && a.setAttribute("mask", "url(#" + o + ")")
        }
        return r.elem = a, 2 === t.r && a.setAttribute("fill-rule", "evenodd"), t.ln && a.setAttribute("id", t.ln), t.cl && a.setAttribute("class", t.cl), i.pElem = a, this.stylesList.push(i), r.style = i, r
    }, IShapeElement.prototype.createGroupElement = function(t) {
        var e = {
                it: [],
                prevViewData: []
            },
            s = document.createElementNS(svgNS, "g");
        return e.gr = s, t.ln && e.gr.setAttribute("id", t.ln), e
    }, IShapeElement.prototype.createTransformElement = function(t, e) {
        var s = {
            transform: {
                op: PropertyFactory.getProp(this, t.o, 0, .01, e),
                mProps: PropertyFactory.getProp(this, t, 2, null, e)
            },
            elements: []
        };
        return s
    }, IShapeElement.prototype.createShapeElement = function(t, e, s, r) {
        var i = {
                elements: [],
                caches: [],
                styles: [],
                transformers: e,
                lStr: ""
            },
            a = 4;
        return "rc" == t.ty ? a = 5 : "el" == t.ty ? a = 6 : "sr" == t.ty && (a = 7), i.sh = ShapePropertyFactory.getShapeProp(this, t, a, r), i.lvl = s, this.shapes.push(i.sh), this.addShapeToModifiers(i), i
    };
    var cont = 0;
    IShapeElement.prototype.setElementStyles = function() {
        var t, e = this.stylesList.length,
            s = [];
        for (t = 0; e > t; t += 1) this.stylesList[t].closed || s.push(this.stylesList[t]);
        return s
    }, IShapeElement.prototype.reloadShapes = function() {
        this.firstFrame = !0;
        var t, e = this.itemsData.length;
        for (t = 0; e > t; t += 1) this.prevViewData[t] = this.itemsData[t];
        this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, this.dynamicProperties, 0, [], !0);
        var t, e = this.dynamicProperties.length;
        for (t = 0; e > t; t += 1) this.dynamicProperties[t].getValue();
        this.renderModifiers()
    }, IShapeElement.prototype.searchShapes = function(t, e, s, r, i, a, n, o) {
        var h, l, p, m, f, c, d = [].concat(n),
            u = t.length - 1,
            y = [],
            g = [];
        for (h = u; h >= 0; h -= 1) {
            if (c = this.searchProcessedElement(t[h]), c ? e[h] = s[c - 1] : t[h]._render = o, "fl" == t[h].ty || "st" == t[h].ty || "gf" == t[h].ty || "gs" == t[h].ty) c ? e[h].style.closed = !1 : e[h] = this.createStyleElement(t[h], a, i), t[h]._render && r.appendChild(e[h].elem), y.push(e[h].style);
            else if ("gr" == t[h].ty) {
                if (c)
                    for (p = e[h].it.length, l = 0; p > l; l += 1) e[h].prevViewData[l] = e[h].it[l];
                else e[h] = this.createGroupElement(t[h]);
                this.searchShapes(t[h].it, e[h].it, e[h].prevViewData, e[h].gr, i, a + 1, d, o), t[h]._render && r.appendChild(e[h].gr)
            } else "tr" == t[h].ty ? (c || (e[h] = this.createTransformElement(t[h], i)), m = e[h].transform, d.push(m)) : "sh" == t[h].ty || "rc" == t[h].ty || "el" == t[h].ty || "sr" == t[h].ty ? (c || (e[h] = this.createShapeElement(t[h], d, a, i)), e[h].elements = this.setElementStyles()) : "tm" == t[h].ty || "rd" == t[h].ty || "ms" == t[h].ty ? (c ? (f = e[h], f.closed = !1) : (f = ShapeModifiers.getModifier(t[h].ty), f.init(this, t[h], i), e[h] = f, this.shapeModifiers.push(f)), g.push(f)) : "rp" == t[h].ty && (c ? (f = e[h], f.closed = !0) : (f = ShapeModifiers.getModifier(t[h].ty), e[h] = f, f.init(this, t, h, e, i), this.shapeModifiers.push(f), o = !1), g.push(f));
            this.addProcessedElement(t[h], h + 1)
        }
        for (u = y.length, h = 0; u > h; h += 1) y[h].closed = !0;
        for (u = g.length, h = 0; u > h; h += 1) g[h].closed = !0
    }, IShapeElement.prototype.addShapeToModifiers = function(t) {
        var e, s = this.shapeModifiers.length;
        for (e = 0; s > e; e += 1) this.shapeModifiers[e].addShape(t)
    }, IShapeElement.prototype.renderModifiers = function() {
        if (this.shapeModifiers.length) {
            var t, e = this.shapes.length;
            for (t = 0; e > t; t += 1) this.shapes[t].reset();
            for (e = this.shapeModifiers.length, t = e - 1; t >= 0; t -= 1) this.shapeModifiers[t].processShapes(this.firstFrame)
        }
    }, IShapeElement.prototype.renderFrame = function(t) {
        var e = this._parent.renderFrame.call(this, t);
        if (e === !1) return void this.hide();
        this.hidden && (this.layerElement.style.display = "block", this.hidden = !1), this.renderModifiers();
        var s, r = this.stylesList.length;
        for (s = 0; r > s; s += 1) this.stylesList[s].d = "", this.stylesList[s].mdf = !1;
        for (this.renderShape(this.shapesData, this.itemsData, null), s = 0; r > s; s += 1) "0" === this.stylesList[s].ld && (this.stylesList[s].ld = "1", this.stylesList[s].pElem.style.display = "block"), (this.stylesList[s].mdf || this.firstFrame) && (this.stylesList[s].pElem.setAttribute("d", this.stylesList[s].d), this.stylesList[s].msElem && this.stylesList[s].msElem.setAttribute("d", this.stylesList[s].d));
        this.firstFrame && (this.firstFrame = !1)
    }, IShapeElement.prototype.hide = function() {
        if (!this.hidden) {
            this.layerElement.style.display = "none";
            var t, e = this.stylesList.length;
            for (t = e - 1; t >= 0; t -= 1) "0" !== this.stylesList[t].ld && (this.stylesList[t].ld = "0", this.stylesList[t].pElem.style.display = "none", this.stylesList[t].pElem.parentNode && (this.stylesList[t].parent = this.stylesList[t].pElem.parentNode));
            this.hidden = !0
        }
    }, IShapeElement.prototype.renderShape = function(t, e, s) {
        var r, i, a = t.length - 1;
        for (r = a; r >= 0; r -= 1) i = t[r].ty, "tr" == i ? ((this.firstFrame || e[r].transform.op.mdf && s) && s.setAttribute("opacity", e[r].transform.op.v), (this.firstFrame || e[r].transform.mProps.mdf && s) && s.setAttribute("transform", e[r].transform.mProps.v.to2dCSS())) : "sh" == i || "el" == i || "rc" == i || "sr" == i ? this.renderPath(t[r], e[r]) : "fl" == i ? this.renderFill(t[r], e[r]) : "gf" == i ? this.renderGradient(t[r], e[r]) : "gs" == i ? (this.renderGradient(t[r], e[r]), this.renderStroke(t[r], e[r])) : "st" == i ? this.renderStroke(t[r], e[r]) : "gr" == i && this.renderShape(t[r].it, e[r].it, e[r].gr)
    }, IShapeElement.prototype.buildShapeString = function(t, e, s, r) {
        var i, a = "";
        for (i = 1; e > i; i += 1) 1 === i && (a += " M" + r.applyToPointStringified(t.v[0][0], t.v[0][1])), a += " C" + r.applyToPointStringified(t.o[i - 1][0], t.o[i - 1][1]) + " " + r.applyToPointStringified(t.i[i][0], t.i[i][1]) + " " + r.applyToPointStringified(t.v[i][0], t.v[i][1]);
        return 1 === e && (a += " M" + r.applyToPointStringified(t.v[0][0], t.v[0][1])), s && e && (a += " C" + r.applyToPointStringified(t.o[i - 1][0], t.o[i - 1][1]) + " " + r.applyToPointStringified(t.i[0][0], t.i[0][1]) + " " + r.applyToPointStringified(t.v[0][0], t.v[0][1]), a += "z"), a
    }, IShapeElement.prototype.renderPath = function(t, e) {
        var s, r, i, a, n, o, h = e.elements.length,
            l = e.lvl;
        if (t._render)
            for (o = 0; h > o; o += 1)
                if (e.elements[o].data._render) {
                    a = e.sh.mdf || this.firstFrame, i = "M0 0";
                    var p = e.sh.paths;
                    if (r = p._length, e.elements[o].lvl < l) {
                        for (var m, f = this.mHelper.reset(), c = l - e.elements[o].lvl, d = e.transformers.length - 1; c > 0;) a = e.transformers[d].mProps.mdf || a, m = e.transformers[d].mProps.v.props, f.transform(m[0], m[1], m[2], m[3], m[4], m[5], m[6], m[7], m[8], m[9], m[10], m[11], m[12], m[13], m[14], m[15]), c--, d--;
                        if (a) {
                            for (s = 0; r > s; s += 1) n = p.shapes[s], n && n._length && (i += this.buildShapeString(n, n._length, n.c, f));
                            e.caches[o] = i
                        } else i = e.caches[o]
                    } else if (a) {
                        for (s = 0; r > s; s += 1) n = p.shapes[s], n && n._length && (i += this.buildShapeString(n, n._length, n.c, this.identityMatrix));
                        e.caches[o] = i
                    } else i = e.caches[o];
                    e.elements[o].d += i, e.elements[o].mdf = a || e.elements[o].mdf
                } else e.elements[o].mdf = !0
    }, IShapeElement.prototype.renderFill = function(t, e) {
        var s = e.style;
        (e.c.mdf || this.firstFrame) && s.pElem.setAttribute("fill", "rgb(" + bm_floor(e.c.v[0]) + "," + bm_floor(e.c.v[1]) + "," + bm_floor(e.c.v[2]) + ")"), (e.o.mdf || this.firstFrame) && s.pElem.setAttribute("fill-opacity", e.o.v)
    }, IShapeElement.prototype.renderGradient = function(t, e) {
        var s = e.gf,
            r = e.of,
            i = e.s.v,
            a = e.e.v;
        if (e.o.mdf || this.firstFrame) {
            var n = "gf" === t.ty ? "fill-opacity" : "stroke-opacity";
            e.elem.setAttribute(n, e.o.v)
        }
        if (e.s.mdf || this.firstFrame) {
            var o = 1 === t.t ? "x1" : "cx",
                h = "x1" === o ? "y1" : "cy";
            s.setAttribute(o, i[0]), s.setAttribute(h, i[1]), r && (r.setAttribute(o, i[0]), r.setAttribute(h, i[1]))
        }
        var l, p, m, f;
        if (e.g.cmdf || this.firstFrame) {
            l = e.cst;
            var c = e.g.c;
            for (m = l.length, p = 0; m > p; p += 1) f = l[p], f.setAttribute("offset", c[4 * p] + "%"), f.setAttribute("stop-color", "rgb(" + c[4 * p + 1] + "," + c[4 * p + 2] + "," + c[4 * p + 3] + ")")
        }
        if (r && (e.g.omdf || this.firstFrame)) {
            l = e.ost;
            var d = e.g.o;
            for (m = l.length, p = 0; m > p; p += 1) f = l[p], f.setAttribute("offset", d[2 * p] + "%"), f.setAttribute("stop-opacity", d[2 * p + 1])
        }
        if (1 === t.t)(e.e.mdf || this.firstFrame) && (s.setAttribute("x2", a[0]), s.setAttribute("y2", a[1]), r && (r.setAttribute("x2", a[0]), r.setAttribute("y2", a[1])));
        else {
            var u;
            if ((e.s.mdf || e.e.mdf || this.firstFrame) && (u = Math.sqrt(Math.pow(i[0] - a[0], 2) + Math.pow(i[1] - a[1], 2)), s.setAttribute("r", u), r && r.setAttribute("r", u)), e.e.mdf || e.h.mdf || e.a.mdf || this.firstFrame) {
                u || (u = Math.sqrt(Math.pow(i[0] - a[0], 2) + Math.pow(i[1] - a[1], 2)));
                var y = Math.atan2(a[1] - i[1], a[0] - i[0]),
                    g = e.h.v >= 1 ? .99 : e.h.v <= -1 ? -.99 : e.h.v,
                    v = u * g,
                    b = Math.cos(y + e.a.v) * v + i[0],
                    E = Math.sin(y + e.a.v) * v + i[1];
                s.setAttribute("fx", b), s.setAttribute("fy", E), r && (r.setAttribute("fx", b), r.setAttribute("fy", E))
            }
        }
    }, IShapeElement.prototype.renderStroke = function(t, e) {
        var s = e.style,
            r = e.d;
        r && r.k && (r.mdf || this.firstFrame) && (s.pElem.setAttribute("stroke-dasharray", r.dasharray), s.pElem.setAttribute("stroke-dashoffset", r.dashoffset)), e.c && (e.c.mdf || this.firstFrame) && s.pElem.setAttribute("stroke", "rgb(" + bm_floor(e.c.v[0]) + "," + bm_floor(e.c.v[1]) + "," + bm_floor(e.c.v[2]) + ")"), (e.o.mdf || this.firstFrame) && s.pElem.setAttribute("stroke-opacity", e.o.v), (e.w.mdf || this.firstFrame) && (s.pElem.setAttribute("stroke-width", e.w.v), s.msElem && s.msElem.setAttribute("stroke-width", e.w.v))
    }, IShapeElement.prototype.destroy = function() {
        this._parent.destroy.call(this._parent), this.shapeData = null, this.itemsData = null, this.parentContainer = null, this.placeholder = null
    }, ITextElement.prototype.init = function() {
        this.lettersChangedFlag = !0, this.dynamicProperties = this.dynamicProperties || [], this.textAnimator = new TextAnimatorProperty(this.data.t, this.renderType, this), this.textProperty = new TextProperty(this, this.data.t, this.dynamicProperties), this._parent.init.call(this), this.textAnimator.searchProperties(this.dynamicProperties)
    }, ITextElement.prototype.prepareFrame = function(t) {
        this._parent.prepareFrame.call(this, t), (this.textProperty.mdf || this.textProperty.firstFrame) && (this.buildNewText(), this.textProperty.firstFrame = !1)
    }, ITextElement.prototype.createPathShape = function(t, e) {
        var s, r, i = e.length,
            a = "";
        for (s = 0; i > s; s += 1) r = e[s].ks.k, a += this.buildShapeString(r, r.i.length, !0, t);
        return a
    }, ITextElement.prototype.updateDocumentData = function(t, e) {
        this.textProperty.updateDocumentData(t, e)
    }, ITextElement.prototype.applyTextPropertiesToMatrix = function(t, e, s, r, i) {
        switch (t.ps && e.translate(t.ps[0], t.ps[1] + t.ascent, 0), e.translate(0, -t.ls, 0), t.j) {
            case 1:
                e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[s]), 0, 0);
                break;
            case 2:
                e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[s]) / 2, 0, 0)
        }
        e.translate(r, i, 0)
    }, ITextElement.prototype.buildColor = function(t) {
        return "rgb(" + Math.round(255 * t[0]) + "," + Math.round(255 * t[1]) + "," + Math.round(255 * t[2]) + ")"
    }, ITextElement.prototype.buildShapeString = IShapeElement.prototype.buildShapeString, ITextElement.prototype.emptyProp = new LetterProps, ITextElement.prototype.destroy = function() {
        this._parent.destroy.call(this._parent)
    }, createElement(SVGBaseElement, SVGTextElement), extendPrototype(ITextElement, SVGTextElement), SVGTextElement.prototype.createElements = function() {
        this._parent.createElements.call(this), this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), this.data.singleShape && !this.globalData.fontManager.chars && (this.textContainer = document.createElementNS(svgNS, "text"))
    }, SVGTextElement.prototype.buildNewText = function() {
        var t, e, s = this.textProperty.currentData;
        this.renderedLetters = Array.apply(null, {
            length: s ? s.l.length : 0
        }), s.fc ? this.layerElement.setAttribute("fill", this.buildColor(s.fc)) : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"), s.sc && (this.layerElement.setAttribute("stroke", this.buildColor(s.sc)), this.layerElement.setAttribute("stroke-width", s.sw)), this.layerElement.setAttribute("font-size", s.s);
        var r = this.globalData.fontManager.getFontByName(s.f);
        if (r.fClass) this.layerElement.setAttribute("class", r.fClass);
        else {
            this.layerElement.setAttribute("font-family", r.fFamily);
            var i = s.fWeight,
                a = s.fStyle;
            this.layerElement.setAttribute("font-style", a), this.layerElement.setAttribute("font-weight", i)
        }
        var n = s.l || [],
            o = this.globalData.fontManager.chars;
        if (e = n.length) {
            var h, l, p = this.mHelper,
                m = "",
                f = this.data.singleShape,
                c = 0,
                d = 0,
                u = !0,
                y = s.tr / 1e3 * s.s;
            if (f && !o) {
                var g = this.textContainer,
                    v = "";
                switch (s.j) {
                    case 1:
                        v = "end";
                        break;
                    case 2:
                        v = "middle";
                        break;
                    case 2:
                        v = "start"
                }
                g.setAttribute("text-anchor", v), g.setAttribute("letter-spacing", y);
                var b = s.t.split(String.fromCharCode(13));
                e = b.length;
                var d = s.ps ? s.ps[1] + s.ascent : 0;
                for (t = 0; e > t; t += 1) h = this.textSpans[t] || document.createElementNS(svgNS, "tspan"), h.textContent = b[t], h.setAttribute("x", 0), h.setAttribute("y", d), h.style.display = "inherit", g.appendChild(h), this.textSpans[t] = h, d += s.lh;
                this.layerElement.appendChild(g)
            } else {
                var E, P, x = this.textSpans.length;
                for (t = 0; e > t; t += 1) o && f && 0 !== t || (h = x > t ? this.textSpans[t] : document.createElementNS(svgNS, o ? "path" : "text"), t >= x && (h.setAttribute("stroke-linecap", "butt"), h.setAttribute("stroke-linejoin", "round"), h.setAttribute("stroke-miterlimit", "4"), this.textSpans[t] = h, this.layerElement.appendChild(h)), h.style.display = "inherit"), p.reset(), o ? (p.scale(s.s / 100, s.s / 100), f && (n[t].n && (c = -y, d += s.yOffset, d += u ? 1 : 0, u = !1), this.applyTextPropertiesToMatrix(s, p, n[t].line, c, d), c += n[t].l || 0, c += y), P = this.globalData.fontManager.getCharData(s.t.charAt(t), r.fStyle, this.globalData.fontManager.getFontByName(s.f).fFamily), E = P && P.data || {}, l = E.shapes ? E.shapes[0].it : [], f ? m += this.createPathShape(p, l) : h.setAttribute("d", this.createPathShape(p, l))) : (h.textContent = n[t].val, h.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"));
                f && h.setAttribute("d", m)
            }
            for (; t < this.textSpans.length;) this.textSpans[t].style.display = "none", t += 1;
            this._sizeChanged = !0
        }
    }, SVGTextElement.prototype.sourceRectAtTime = function(t) {
        if (this.prepareFrame(this.comp.renderedFrame - this.data.st), this.renderLetters(), this._sizeChanged) {
            this._sizeChanged = !1;
            var e = this.layerElement.getBBox();
            this.bbox = {
                top: e.y,
                left: e.x,
                width: e.width,
                height: e.height
            }
        }
        return this.bbox
    }, SVGTextElement.prototype.renderLetters = function() {
        if (!this.data.singleShape && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
            this._sizeChanged = !0;
            var t, e, s = this.textAnimator.renderedLetters,
                r = this.textProperty.currentData.l;
            e = r.length;
            var i, a;
            for (t = 0; e > t; t += 1) r[t].n || (i = s[t], a = this.textSpans[t], i.mdf.m && a.setAttribute("transform", i.m), i.mdf.o && a.setAttribute("opacity", i.o), i.mdf.sw && a.setAttribute("stroke-width", i.sw), i.mdf.sc && a.setAttribute("stroke", i.sc), i.mdf.fc && a.setAttribute("fill", i.fc))
        }
    }, SVGTextElement.prototype.renderFrame = function(t) {
        var e = this._parent.renderFrame.call(this, t);
        return e === !1 ? void this.hide() : (this.hidden && this.show(), this.firstFrame && (this.firstFrame = !1), void this.renderLetters())
    }, SVGTintFilter.prototype.renderFrame = function(t) {
        if (t || this.filterManager.mdf) {
            var e = this.filterManager.effectElements[0].p.v,
                s = this.filterManager.effectElements[1].p.v,
                r = this.filterManager.effectElements[2].p.v / 100;
            this.matrixFilter.setAttribute("values", s[0] - e[0] + " 0 0 0 " + e[0] + " " + (s[1] - e[1]) + " 0 0 0 " + e[1] + " " + (s[2] - e[2]) + " 0 0 0 " + e[2] + " 0 0 0 " + r + " 0")
        }
    }, SVGFillFilter.prototype.renderFrame = function(t) {
        if (t || this.filterManager.mdf) {
            var e = this.filterManager.effectElements[2].p.v,
                s = this.filterManager.effectElements[6].p.v;
            this.matrixFilter.setAttribute("values", "0 0 0 0 " + e[0] + " 0 0 0 0 " + e[1] + " 0 0 0 0 " + e[2] + " 0 0 0 " + s + " 0")
        }
    }, SVGStrokeEffect.prototype.initialize = function() {
        var t, e, s, r, i = this.elem.layerElement.children || this.elem.layerElement.childNodes;
        for (1 === this.filterManager.effectElements[1].p.v ? (r = this.elem.maskManager.masksProperties.length, s = 0) : (s = this.filterManager.effectElements[0].p.v - 1, r = s + 1), e = document.createElementNS(svgNS, "g"), e.setAttribute("fill", "none"), e.setAttribute("stroke-linecap", "round"), e.setAttribute("stroke-dashoffset", 1), s; r > s; s += 1) t = document.createElementNS(svgNS, "path"), e.appendChild(t), this.paths.push({
            p: t,
            m: s
        });
        if (3 === this.filterManager.effectElements[10].p.v) {
            var a = document.createElementNS(svgNS, "mask"),
                n = "stms_" + randomString(10);
            a.setAttribute("id", n), a.setAttribute("mask-type", "alpha"), a.appendChild(e), this.elem.globalData.defs.appendChild(a);
            var o = document.createElementNS(svgNS, "g");
            o.setAttribute("mask", "url(" + locationHref + "#" + n + ")"), i[0] && o.appendChild(i[0]), this.elem.layerElement.appendChild(o), this.masker = a, e.setAttribute("stroke", "#fff")
        } else if (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) {
            if (2 === this.filterManager.effectElements[10].p.v)
                for (var i = this.elem.layerElement.children || this.elem.layerElement.childNodes; i.length;) this.elem.layerElement.removeChild(i[0]);
            this.elem.layerElement.appendChild(e), this.elem.layerElement.removeAttribute("mask"), e.setAttribute("stroke", "#fff")
        }
        this.initialized = !0, this.pathMasker = e
    }, SVGStrokeEffect.prototype.renderFrame = function(t) {
        this.initialized || this.initialize();
        var e, s, r, i = this.paths.length;
        for (e = 0; i > e; e += 1)
            if (s = this.elem.maskManager.viewData[this.paths[e].m], r = this.paths[e].p, (t || this.filterManager.mdf || s.prop.mdf) && r.setAttribute("d", s.lastPath), t || this.filterManager.effectElements[9].p.mdf || this.filterManager.effectElements[4].p.mdf || this.filterManager.effectElements[7].p.mdf || this.filterManager.effectElements[8].p.mdf || s.prop.mdf) {
                var a;
                if (0 !== this.filterManager.effectElements[7].p.v || 100 !== this.filterManager.effectElements[8].p.v) {
                    var n = Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v) / 100,
                        o = Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v) / 100,
                        h = r.getTotalLength();
                    a = "0 0 0 " + h * n + " ";
                    var l, p = h * (o - n),
                        m = 1 + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v / 100,
                        f = Math.floor(p / m);
                    for (l = 0; f > l; l += 1) a += "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v / 100 + " ";
                    a += "0 " + 10 * h + " 0 0"
                } else a = "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v / 100;
                r.setAttribute("stroke-dasharray", a)
            }
        if ((t || this.filterManager.effectElements[4].p.mdf) && this.pathMasker.setAttribute("stroke-width", 2 * this.filterManager.effectElements[4].p.v), (t || this.filterManager.effectElements[6].p.mdf) && this.pathMasker.setAttribute("opacity", this.filterManager.effectElements[6].p.v), (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) && (t || this.filterManager.effectElements[3].p.mdf)) {
            var c = this.filterManager.effectElements[3].p.v;
            this.pathMasker.setAttribute("stroke", "rgb(" + bm_floor(255 * c[0]) + "," + bm_floor(255 * c[1]) + "," + bm_floor(255 * c[2]) + ")")
        }
    }, SVGTritoneFilter.prototype.renderFrame = function(t) {
        if (t || this.filterManager.mdf) {
            var e = this.filterManager.effectElements[0].p.v,
                s = this.filterManager.effectElements[1].p.v,
                r = this.filterManager.effectElements[2].p.v,
                i = r[0] + " " + s[0] + " " + e[0],
                a = r[1] + " " + s[1] + " " + e[1],
                n = r[2] + " " + s[2] + " " + e[2];
            this.feFuncR.setAttribute("tableValues", i), this.feFuncG.setAttribute("tableValues", a), this.feFuncB.setAttribute("tableValues", n)
        }
    }, SVGProLevelsFilter.prototype.createFeFunc = function(t, e) {
        var s = document.createElementNS(svgNS, t);
        return s.setAttribute("type", "table"), e.appendChild(s), s
    }, SVGProLevelsFilter.prototype.getTableValue = function(t, e, s, r, i) {
        for (var a, n, o = 0, h = 256, l = Math.min(t, e), p = Math.max(t, e), m = Array.call(null, {
                length: h
            }), f = 0, c = i - r, d = e - t; 256 >= o;) a = o / 256, n = l >= a ? 0 > d ? i : r : a >= p ? 0 > d ? r : i : r + c * Math.pow((a - t) / d, 1 / s), m[f++] = n, o += 256 / (h - 1);
        return m.join(" ")
    }, SVGProLevelsFilter.prototype.renderFrame = function(t) {
        if (t || this.filterManager.mdf) {
            var e, s = this.filterManager.effectElements;
            this.feFuncRComposed && (t || s[2].p.mdf || s[3].p.mdf || s[4].p.mdf || s[5].p.mdf || s[6].p.mdf) && (e = this.getTableValue(s[2].p.v, s[3].p.v, s[4].p.v, s[5].p.v, s[6].p.v), this.feFuncRComposed.setAttribute("tableValues", e), this.feFuncGComposed.setAttribute("tableValues", e), this.feFuncBComposed.setAttribute("tableValues", e)), this.feFuncR && (t || s[9].p.mdf || s[10].p.mdf || s[11].p.mdf || s[12].p.mdf || s[13].p.mdf) && (e = this.getTableValue(s[9].p.v, s[10].p.v, s[11].p.v, s[12].p.v, s[13].p.v), this.feFuncR.setAttribute("tableValues", e)), this.feFuncG && (t || s[16].p.mdf || s[17].p.mdf || s[18].p.mdf || s[19].p.mdf || s[20].p.mdf) && (e = this.getTableValue(s[16].p.v, s[17].p.v, s[18].p.v, s[19].p.v, s[20].p.v), this.feFuncG.setAttribute("tableValues", e)), this.feFuncB && (t || s[23].p.mdf || s[24].p.mdf || s[25].p.mdf || s[26].p.mdf || s[27].p.mdf) && (e = this.getTableValue(s[23].p.v, s[24].p.v, s[25].p.v, s[26].p.v, s[27].p.v), this.feFuncB.setAttribute("tableValues", e)), this.feFuncA && (t || s[30].p.mdf || s[31].p.mdf || s[32].p.mdf || s[33].p.mdf || s[34].p.mdf) && (e = this.getTableValue(s[30].p.v, s[31].p.v, s[32].p.v, s[33].p.v, s[34].p.v), this.feFuncA.setAttribute("tableValues", e))
        }
    }, SVGDropShadowEffect.prototype.renderFrame = function(t) {
        if (t || this.filterManager.mdf) {
            if ((t || this.filterManager.effectElements[4].p.mdf) && this.feGaussianBlur.setAttribute("stdDeviation", this.filterManager.effectElements[4].p.v / 4), t || this.filterManager.effectElements[0].p.mdf) {
                var e = this.filterManager.effectElements[0].p.v;
                this.feFlood.setAttribute("flood-color", rgbToHex(Math.round(255 * e[0]), Math.round(255 * e[1]), Math.round(255 * e[2])))
            }
            if ((t || this.filterManager.effectElements[1].p.mdf) && this.feFlood.setAttribute("flood-opacity", this.filterManager.effectElements[1].p.v / 255), t || this.filterManager.effectElements[2].p.mdf || this.filterManager.effectElements[3].p.mdf) {
                var s = this.filterManager.effectElements[3].p.v,
                    r = (this.filterManager.effectElements[2].p.v - 90) * degToRads,
                    i = s * Math.cos(r),
                    a = s * Math.sin(r);
                this.feOffset.setAttribute("dx", i), this.feOffset.setAttribute("dy", a)
            }
        }
    }, SVGMatte3Effect.prototype.setElementAsMask = function(t, e) {
        var s = document.createElementNS(svgNS, "mask");
        s.setAttribute("id", e.layerId), s.setAttribute("mask-type", "alpha"), s.appendChild(e.layerElement), t.setMatte(e.layerId), e.data.hd = !1;
        var r = t.globalData.defs;
        r.appendChild(s)
    }, SVGMatte3Effect.prototype.initialize = function() {
        for (var t = this.filterManager.effectElements[0].p.v, e = 0, s = this.elem.comp.elements.length; s > e;) this.elem.comp.elements[e].data.ind === t && this.setElementAsMask(this.elem, this.elem.comp.elements[e]), e += 1;
        this.initialized = !0
    }, SVGMatte3Effect.prototype.renderFrame = function() {
        this.initialized || this.initialize()
    }, SVGEffects.prototype.renderFrame = function(t) {
        var e, s = this.filters.length;
        for (e = 0; s > e; e += 1) this.filters[e].renderFrame(t)
    }, createElement(SVGBaseElement, ICompElement), ICompElement.prototype.hide = function() {
        if (!this.hidden) {
            this._parent.hide.call(this);
            var t, e = this.elements.length;
            for (t = 0; e > t; t += 1) this.elements[t] && this.elements[t].hide()
        }
    }, ICompElement.prototype.prepareFrame = function(t) {
        if (this._parent.prepareFrame.call(this, t), this.isVisible !== !1 || this.data.xt) {
            if (this.tm) {
                var e = this.tm.v;
                e === this.data.op && (e = this.data.op - 1), this.renderedFrame = e
            } else this.renderedFrame = t / this.data.sr;
            var s, r = this.elements.length;
            for (this.completeLayers || this.checkLayers(this.renderedFrame), s = 0; r > s; s += 1)(this.completeLayers || this.elements[s]) && this.elements[s].prepareFrame(this.renderedFrame - this.layers[s].st)
        }
    }, ICompElement.prototype.renderFrame = function(t) {
        var e, s = this._parent.renderFrame.call(this, t),
            r = this.layers.length;
        if (s === !1) return void this.hide();
        for (this.hidden && this.show(), e = 0; r > e; e += 1)(this.completeLayers || this.elements[e]) && this.elements[e].renderFrame();
        this.firstFrame && (this.firstFrame = !1)
    }, ICompElement.prototype.setElements = function(t) {
        this.elements = t
    }, ICompElement.prototype.getElements = function() {
        return this.elements
    }, ICompElement.prototype.destroy = function() {
        this._parent.destroy.call(this._parent);
        var t, e = this.layers.length;
        for (t = 0; e > t; t += 1) this.elements[t] && this.elements[t].destroy()
    }, ICompElement.prototype.checkLayers = SVGRenderer.prototype.checkLayers, ICompElement.prototype.buildItem = SVGRenderer.prototype.buildItem, ICompElement.prototype.buildAllItems = SVGRenderer.prototype.buildAllItems, ICompElement.prototype.buildElementParenting = SVGRenderer.prototype.buildElementParenting, ICompElement.prototype.createItem = SVGRenderer.prototype.createItem, ICompElement.prototype.createImage = SVGRenderer.prototype.createImage, ICompElement.prototype.createComp = SVGRenderer.prototype.createComp, ICompElement.prototype.createSolid = SVGRenderer.prototype.createSolid, ICompElement.prototype.createShape = SVGRenderer.prototype.createShape, ICompElement.prototype.createText = SVGRenderer.prototype.createText, ICompElement.prototype.createBase = SVGRenderer.prototype.createBase, ICompElement.prototype.appendElementInPos = SVGRenderer.prototype.appendElementInPos, ICompElement.prototype.checkPendingElements = SVGRenderer.prototype.checkPendingElements, ICompElement.prototype.addPendingElement = SVGRenderer.prototype.addPendingElement, createElement(SVGBaseElement, IImageElement), IImageElement.prototype.createElements = function() {
        var t = this.globalData.getAssetsPath(this.assetData);
        this._parent.createElements.call(this), this.innerElem = document.createElementNS(svgNS, "image"), this.innerElem.setAttribute("width", this.assetData.w + "px"), this.innerElem.setAttribute("height", this.assetData.h + "px"), this.innerElem.setAttribute("preserveAspectRatio", "xMidYMid slice"), this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.maskedElement = this.innerElem, this.layerElement.appendChild(this.innerElem), this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl)
    }, IImageElement.prototype.renderFrame = function(t) {
        var e = this._parent.renderFrame.call(this, t);
        return e === !1 ? void this.hide() : (this.hidden && this.show(), void(this.firstFrame && (this.firstFrame = !1)))
    }, IImageElement.prototype.destroy = function() {
        this._parent.destroy.call(this._parent), this.innerElem = null
    }, createElement(SVGBaseElement, ISolidElement), ISolidElement.prototype.createElements = function() {
        this._parent.createElements.call(this);
        var t = document.createElementNS(svgNS, "rect");
        t.setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.layerElement.appendChild(t), this.innerElem = t, this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl)
    }, ISolidElement.prototype.renderFrame = IImageElement.prototype.renderFrame, ISolidElement.prototype.destroy = IImageElement.prototype.destroy;
    var animationManager = function() {
            function t(t) {
                for (var e = 0, s = t.target; C > e;) x[e].animation === s && (x.splice(e, 1), e -= 1, C -= 1, s.isPaused || r()), e += 1
            }

            function e(t, e) {
                if (!t) return null;
                for (var s = 0; C > s;) {
                    if (x[s].elem == t && null !== x[s].elem) return x[s].animation;
                    s += 1
                }
                var r = new AnimationItem;
                return i(r, t), r.setData(t, e), r
            }

            function s() {
                A += 1, E()
            }

            function r() {
                A -= 1, 0 === A && (k = !0)
            }

            function i(e, i) {
                e.addEventListener("destroy", t), e.addEventListener("_active", s), e.addEventListener("_idle", r), x.push({
                    elem: i,
                    animation: e
                }), C += 1
            }

            function a(t) {
                var e = new AnimationItem;
                return i(e, null), e.setParams(t), e
            }

            function n(t, e) {
                var s;
                for (s = 0; C > s; s += 1) x[s].animation.setSpeed(t, e)
            }

            function o(t, e) {
                var s;
                for (s = 0; C > s; s += 1) x[s].animation.setDirection(t, e)
            }

            function h(t) {
                var e;
                for (e = 0; C > e; e += 1) x[e].animation.play(t)
            }

            function l(t, e) {
                S = Date.now();
                var s;
                for (s = 0; C > s; s += 1) x[s].animation.moveFrame(t, e)
            }

            function p(t) {
                var e, s = t - S;
                for (e = 0; C > e; e += 1) x[e].animation.advanceTime(s);
                S = t, k || window.requestAnimationFrame(p)
            }

            function m(t) {
                S = t, window.requestAnimationFrame(p)
            }

            function f(t) {
                var e;
                for (e = 0; C > e; e += 1) x[e].animation.pause(t)
            }

            function c(t, e, s) {
                var r;
                for (r = 0; C > r; r += 1) x[r].animation.goToAndStop(t, e, s)
            }

            function d(t) {
                var e;
                for (e = 0; C > e; e += 1) x[e].animation.stop(t)
            }

            function u(t) {
                var e;
                for (e = 0; C > e; e += 1) x[e].animation.togglePause(t)
            }

            function y(t) {
                var e;
                for (e = C - 1; e >= 0; e -= 1) x[e].animation.destroy(t)
            }

            function g(t, s, r) {
                var i, a = document.getElementsByClassName("bodymovin"),
                    n = a.length;
                for (i = 0; n > i; i += 1) r && a[i].setAttribute("data-bm-type", r), e(a[i], t);
                if (s && 0 === n) {
                    r || (r = "svg");
                    var o = document.getElementsByTagName("body")[0];
                    o.innerHTML = "";
                    var h = document.createElement("div");
                    h.style.width = "100%", h.style.height = "100%", h.setAttribute("data-bm-type", r), o.appendChild(h), e(h, t)
                }
            }

            function v() {
                var t;
                for (t = 0; C > t; t += 1) x[t].animation.resize()
            }

            function b() {
                window.requestAnimationFrame(m)
            }

            function E() {
                k && (k = !1, window.requestAnimationFrame(m))
            }
            var P = {},
                x = [],
                S = 0,
                C = 0,
                k = !0,
                A = 0;
            return setTimeout(b, 0), P.registerAnimation = e, P.loadAnimation = a, P.setSpeed = n, P.setDirection = o, P.play = h, P.moveFrame = l, P.pause = f, P.stop = d, P.togglePause = u, P.searchAnimations = g, P.resize = v, P.start = b, P.goToAndStop = c, P.destroy = y, P
        }(),
        AnimationItem = function() {
            this._cbs = [], this.name = "", this.path = "", this.isLoaded = !1, this.currentFrame = 0, this.currentRawFrame = 0, this.totalFrames = 0, this.frameRate = 0, this.frameMult = 0, this.playSpeed = 1, this.playDirection = 1, this.pendingElements = 0, this.playCount = 0, this.prerenderFramesFlag = !0, this.animationData = {}, this.layers = [], this.assets = [], this.isPaused = !0, this.autoplay = !1, this.loop = !0, this.renderer = null, this.animationID = randomString(10), this.scaleMode = "fit", this.assetsPath = "", this.timeCompleted = 0, this.segmentPos = 0, this.subframeEnabled = subframeEnabled, this.segments = [], this.pendingSegment = !1, this._idle = !0, this.projectInterface = ProjectInterface()
        };
    AnimationItem.prototype.setParams = function(t) {
        var e = this;
        t.context && (this.context = t.context), (t.wrapper || t.container) && (this.wrapper = t.wrapper || t.container);
        var s = t.animType ? t.animType : t.renderer ? t.renderer : "svg";
        switch (s) {
            case "canvas":
                this.renderer = new CanvasRenderer(this, t.rendererSettings);
                break;
            case "svg":
                this.renderer = new SVGRenderer(this, t.rendererSettings);
                break;
            case "hybrid":
            case "html":
            default:
                this.renderer = new HybridRenderer(this, t.rendererSettings)
        }
        if (this.renderer.setProjectInterface(this.projectInterface), this.animType = s, "" === t.loop || null === t.loop || (this.loop = t.loop === !1 ? !1 : t.loop === !0 ? !0 : parseInt(t.loop)), this.autoplay = "autoplay" in t ? t.autoplay : !0, this.name = t.name ? t.name : "", this.prerenderFramesFlag = "prerender" in t ? t.prerender : !0, this.autoloadSegments = t.hasOwnProperty("autoloadSegments") ? t.autoloadSegments : !0, t.animationData) e.configAnimation(t.animationData);
        else if (t.path) {
            "json" != t.path.substr(-4) && ("/" != t.path.substr(-1, 1) && (t.path += "/"), t.path += "data.json");
            var r = new XMLHttpRequest;
            this.path = -1 != t.path.lastIndexOf("\\") ? t.path.substr(0, t.path.lastIndexOf("\\") + 1) : t.path.substr(0, t.path.lastIndexOf("/") + 1), this.assetsPath = t.assetsPath, this.fileName = t.path.substr(t.path.lastIndexOf("/") + 1), this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")), r.open("GET", t.path, !0), r.send(), r.onreadystatechange = function() {
                if (4 == r.readyState)
                    if (200 == r.status) e.configAnimation(JSON.parse(r.responseText));
                    else try {
                        var t = JSON.parse(r.responseText);
                        e.configAnimation(t)
                    } catch (s) {}
            }
        }
    }, AnimationItem.prototype.setData = function(t, e) {
        var s = {
                wrapper: t,
                animationData: e ? "object" == typeof e ? e : JSON.parse(e) : null
            },
            r = t.attributes;
        s.path = r.getNamedItem("data-animation-path") ? r.getNamedItem("data-animation-path").value : r.getNamedItem("data-bm-path") ? r.getNamedItem("data-bm-path").value : r.getNamedItem("bm-path") ? r.getNamedItem("bm-path").value : "", s.animType = r.getNamedItem("data-anim-type") ? r.getNamedItem("data-anim-type").value : r.getNamedItem("data-bm-type") ? r.getNamedItem("data-bm-type").value : r.getNamedItem("bm-type") ? r.getNamedItem("bm-type").value : r.getNamedItem("data-bm-renderer") ? r.getNamedItem("data-bm-renderer").value : r.getNamedItem("bm-renderer") ? r.getNamedItem("bm-renderer").value : "canvas";
        var i = r.getNamedItem("data-anim-loop") ? r.getNamedItem("data-anim-loop").value : r.getNamedItem("data-bm-loop") ? r.getNamedItem("data-bm-loop").value : r.getNamedItem("bm-loop") ? r.getNamedItem("bm-loop").value : "";
        "" === i || (s.loop = "false" === i ? !1 : "true" === i ? !0 : parseInt(i));
        var a = r.getNamedItem("data-anim-autoplay") ? r.getNamedItem("data-anim-autoplay").value : r.getNamedItem("data-bm-autoplay") ? r.getNamedItem("data-bm-autoplay").value : r.getNamedItem("bm-autoplay") ? r.getNamedItem("bm-autoplay").value : !0;
        s.autoplay = "false" !== a, s.name = r.getNamedItem("data-name") ? r.getNamedItem("data-name").value : r.getNamedItem("data-bm-name") ? r.getNamedItem("data-bm-name").value : r.getNamedItem("bm-name") ? r.getNamedItem("bm-name").value : "";
        var n = r.getNamedItem("data-anim-prerender") ? r.getNamedItem("data-anim-prerender").value : r.getNamedItem("data-bm-prerender") ? r.getNamedItem("data-bm-prerender").value : r.getNamedItem("bm-prerender") ? r.getNamedItem("bm-prerender").value : "";
        "false" === n && (s.prerender = !1), this.setParams(s)
    }, AnimationItem.prototype.includeLayers = function(t) {
        t.op > this.animationData.op && (this.animationData.op = t.op, this.totalFrames = Math.floor(t.op - this.animationData.ip), this.animationData.tf = this.totalFrames);
        var e, s, r = this.animationData.layers,
            i = r.length,
            a = t.layers,
            n = a.length;
        for (s = 0; n > s; s += 1)
            for (e = 0; i > e;) {
                if (r[e].id == a[s].id) {
                    r[e] = a[s];
                    break
                }
                e += 1
            }
        if ((t.chars || t.fonts) && (this.renderer.globalData.fontManager.addChars(t.chars), this.renderer.globalData.fontManager.addFonts(t.fonts, this.renderer.globalData.defs)), t.assets)
            for (i = t.assets.length, e = 0; i > e; e += 1) this.animationData.assets.push(t.assets[e]);
        this.animationData.__complete = !1, dataManager.completeData(this.animationData, this.renderer.globalData.fontManager), this.renderer.includeLayers(t.layers), expressionsPlugin && expressionsPlugin.initExpressions(this), this.renderer.renderFrame(null), this.loadNextSegment()
    }, AnimationItem.prototype.loadNextSegment = function() {
        var t = this.animationData.segments;
        if (!t || 0 === t.length || !this.autoloadSegments) return this.trigger("data_ready"), void(this.timeCompleted = this.animationData.tf);
        var e = t.shift();
        this.timeCompleted = e.time * this.frameRate;
        var s = new XMLHttpRequest,
            r = this,
            i = this.path + this.fileName + "_" + this.segmentPos + ".json";
        this.segmentPos += 1, s.open("GET", i, !0), s.send(), s.onreadystatechange = function() {
            if (4 == s.readyState)
                if (200 == s.status) r.includeLayers(JSON.parse(s.responseText));
                else try {
                    var t = JSON.parse(s.responseText);
                    r.includeLayers(t)
                } catch (e) {}
        }
    }, AnimationItem.prototype.loadSegments = function() {
        var t = this.animationData.segments;
        t || (this.timeCompleted = this.animationData.tf), this.loadNextSegment()
    }, AnimationItem.prototype.configAnimation = function(t) {
        var e = this;
        this.renderer && this.renderer.destroyed || (this.animationData = t, this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip), this.animationData.tf = this.totalFrames, this.renderer.configAnimation(t), t.assets || (t.assets = []), t.comps && (t.assets = t.assets.concat(t.comps), t.comps = null), this.renderer.searchExtraCompositions(t.assets), this.layers = this.animationData.layers, this.assets = this.animationData.assets, this.frameRate = this.animationData.fr, this.firstFrame = Math.round(this.animationData.ip), this.frameMult = this.animationData.fr / 1e3, this.trigger("config_ready"), this.imagePreloader = new ImagePreloader, this.imagePreloader.setAssetsPath(this.assetsPath), this.imagePreloader.setPath(this.path), this.imagePreloader.loadAssets(t.assets, function(t) {
            t || e.trigger("loaded_images")
        }), this.loadSegments(), this.updaFrameModifier(), this.renderer.globalData.fontManager ? this.waitForFontsLoaded() : (dataManager.completeData(this.animationData, this.renderer.globalData.fontManager), this.checkLoaded()))
    }, AnimationItem.prototype.waitForFontsLoaded = function() {
        function t() {
            this.renderer.globalData.fontManager.loaded ? (dataManager.completeData(this.animationData, this.renderer.globalData.fontManager), this.checkLoaded()) : setTimeout(t.bind(this), 20)
        }
        return function() {
            t.bind(this)()
        }
    }(), AnimationItem.prototype.addPendingElement = function() {
        this.pendingElements += 1
    }, AnimationItem.prototype.elementLoaded = function() {
        this.pendingElements--, this.checkLoaded()
    }, AnimationItem.prototype.checkLoaded = function() {
        0 === this.pendingElements && (expressionsPlugin && expressionsPlugin.initExpressions(this), this.renderer.initItems(), setTimeout(function() {
            this.trigger("DOMLoaded")
        }.bind(this), 0), this.isLoaded = !0, this.gotoFrame(), this.autoplay && this.play())
    }, AnimationItem.prototype.resize = function() {
        this.renderer.updateContainerSize()
    }, AnimationItem.prototype.setSubframe = function(t) {
        this.subframeEnabled = t ? !0 : !1
    }, AnimationItem.prototype.gotoFrame = function() {
        this.currentFrame = this.subframeEnabled ? this.currentRawFrame : Math.floor(this.currentRawFrame), this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted), this.trigger("enterFrame"), this.renderFrame()
    }, AnimationItem.prototype.renderFrame = function() {
        this.isLoaded !== !1 && this.renderer.renderFrame(this.currentFrame + this.firstFrame)
    }, AnimationItem.prototype.play = function(t) {
        t && this.name != t || this.isPaused === !0 && (this.isPaused = !1, this._idle && (this._idle = !1, this.trigger("_active")))
    }, AnimationItem.prototype.pause = function(t) {
        t && this.name != t || this.isPaused === !1 && (this.isPaused = !0, this.pendingSegment || (this._idle = !0, this.trigger("_idle")))
    }, AnimationItem.prototype.togglePause = function(t) {
        t && this.name != t || (this.isPaused === !0 ? this.play() : this.pause())
    }, AnimationItem.prototype.stop = function(t) {
        t && this.name != t || (this.pause(), this.currentFrame = this.currentRawFrame = 0, this.playCount = 0, this.gotoFrame())
    }, AnimationItem.prototype.goToAndStop = function(t, e, s) {
        s && this.name != s || (this.setCurrentRawFrameValue(e ? t : t * this.frameModifier), this.pause())
    }, AnimationItem.prototype.goToAndPlay = function(t, e, s) {
        this.goToAndStop(t, e, s), this.play()
    }, AnimationItem.prototype.advanceTime = function(t) {
        return this.pendingSegment ? (this.pendingSegment = !1, this.adjustSegment(this.segments.shift()), void(this.isPaused && this.play())) : void(this.isPaused !== !0 && this.isLoaded !== !1 && this.setCurrentRawFrameValue(this.currentRawFrame + t * this.frameModifier))
    }, AnimationItem.prototype.updateAnimation = function(t) {
        this.setCurrentRawFrameValue(this.totalFrames * t)
    }, AnimationItem.prototype.moveFrame = function(t, e) {
        e && this.name != e || this.setCurrentRawFrameValue(this.currentRawFrame + t)
    }, AnimationItem.prototype.adjustSegment = function(t) {
        this.playCount = 0, t[1] < t[0] ? (this.frameModifier > 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), this.totalFrames = t[0] - t[1], this.firstFrame = t[1], this.setCurrentRawFrameValue(this.totalFrames - .01)) : t[1] > t[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), this.totalFrames = t[1] - t[0], this.firstFrame = t[0], this.setCurrentRawFrameValue(0)), this.trigger("segmentStart")
    }, AnimationItem.prototype.setSegment = function(t, e) {
        var s = -1;
        this.isPaused && (this.currentRawFrame + this.firstFrame < t ? s = t : this.currentRawFrame + this.firstFrame > e && (s = e - t - .01)), this.firstFrame = t, this.totalFrames = e - t, -1 !== s && this.goToAndStop(s, !0)
    }, AnimationItem.prototype.playSegments = function(t, e) {
        if ("object" == typeof t[0]) {
            var s, r = t.length;
            for (s = 0; r > s; s += 1) this.segments.push(t[s])
        } else this.segments.push(t);
        e && this.adjustSegment(this.segments.shift()), this.isPaused && this.play()
    }, AnimationItem.prototype.resetSegments = function(t) {
        this.segments.length = 0, this.segments.push([this.animationData.ip * this.frameRate, Math.floor(this.animationData.op - this.animationData.ip + this.animationData.ip * this.frameRate)]), t && this.adjustSegment(this.segments.shift())
    }, AnimationItem.prototype.checkSegments = function() {
        this.segments.length && (this.pendingSegment = !0)
    }, AnimationItem.prototype.remove = function(t) {
        t && this.name != t || this.renderer.destroy()
    }, AnimationItem.prototype.destroy = function(t) {
        t && this.name != t || this.renderer && this.renderer.destroyed || (this.renderer.destroy(), this.trigger("destroy"), this._cbs = null, this.onEnterFrame = this.onLoopComplete = this.onComplete = this.onSegmentStart = this.onDestroy = null)
    }, AnimationItem.prototype.setCurrentRawFrameValue = function(t) {
        if (this.currentRawFrame = t, this.currentRawFrame >= this.totalFrames) {
            if (this.checkSegments(), this.loop === !1) return this.currentRawFrame = this.totalFrames - .01, this.gotoFrame(), this.pause(), void this.trigger("complete");
            if (this.trigger("loopComplete"), this.playCount += 1, this.loop !== !0 && this.playCount == this.loop || this.pendingSegment) return this.currentRawFrame = this.totalFrames - .01, this.gotoFrame(), this.pause(), void this.trigger("complete");
            this.currentRawFrame = this.currentRawFrame % this.totalFrames
        } else if (this.currentRawFrame < 0) return this.checkSegments(), this.playCount -= 1, this.playCount < 0 && (this.playCount = 0), this.loop === !1 || this.pendingSegment ? (this.currentRawFrame = 0, this.gotoFrame(), this.pause(), void this.trigger("complete")) : (this.trigger("loopComplete"), this.currentRawFrame = (this.totalFrames + this.currentRawFrame) % this.totalFrames, void this.gotoFrame());
        this.gotoFrame()
    }, AnimationItem.prototype.setSpeed = function(t) {
        this.playSpeed = t, this.updaFrameModifier()
    }, AnimationItem.prototype.setDirection = function(t) {
        this.playDirection = 0 > t ? -1 : 1, this.updaFrameModifier();

    }, AnimationItem.prototype.updaFrameModifier = function() {
        this.frameModifier = this.frameMult * this.playSpeed * this.playDirection
    }, AnimationItem.prototype.getPath = function() {
        return this.path
    }, AnimationItem.prototype.getAssetsPath = function(t) {
        var e = "";
        if (this.assetsPath) {
            var s = t.p; - 1 !== s.indexOf("images/") && (s = s.split("/")[1]), e = this.assetsPath + s
        } else e = this.path, e += t.u ? t.u : "", e += t.p;
        return e
    }, AnimationItem.prototype.getAssetData = function(t) {
        for (var e = 0, s = this.assets.length; s > e;) {
            if (t == this.assets[e].id) return this.assets[e];
            e += 1
        }
    }, AnimationItem.prototype.hide = function() {
        this.renderer.hide()
    }, AnimationItem.prototype.show = function() {
        this.renderer.show()
    }, AnimationItem.prototype.getAssets = function() {
        return this.assets
    }, AnimationItem.prototype.trigger = function(t) {
        if (this._cbs && this._cbs[t]) switch (t) {
            case "enterFrame":
                this.triggerEvent(t, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameMult));
                break;
            case "loopComplete":
                this.triggerEvent(t, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult));
                break;
            case "complete":
                this.triggerEvent(t, new BMCompleteEvent(t, this.frameMult));
                break;
            case "segmentStart":
                this.triggerEvent(t, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames));
                break;
            case "destroy":
                this.triggerEvent(t, new BMDestroyEvent(t, this));
                break;
            default:
                this.triggerEvent(t)
        }
        "enterFrame" === t && this.onEnterFrame && this.onEnterFrame.call(this, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameMult)), "loopComplete" === t && this.onLoopComplete && this.onLoopComplete.call(this, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult)), "complete" === t && this.onComplete && this.onComplete.call(this, new BMCompleteEvent(t, this.frameMult)), "segmentStart" === t && this.onSegmentStart && this.onSegmentStart.call(this, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames)), "destroy" === t && this.onDestroy && this.onDestroy.call(this, new BMDestroyEvent(t, this))
    }, AnimationItem.prototype.addEventListener = _addEventListener, AnimationItem.prototype.removeEventListener = _removeEventListener, AnimationItem.prototype.triggerEvent = _triggerEvent, extendPrototype(BaseRenderer, CanvasRenderer), CanvasRenderer.prototype.createBase = function(t) {
        return new CVBaseElement(t, this, this.globalData)
    }, CanvasRenderer.prototype.createShape = function(t) {
        return new CVShapeElement(t, this, this.globalData)
    }, CanvasRenderer.prototype.createText = function(t) {
        return new CVTextElement(t, this, this.globalData)
    }, CanvasRenderer.prototype.createImage = function(t) {
        return new CVImageElement(t, this, this.globalData)
    }, CanvasRenderer.prototype.createComp = function(t) {
        return new CVCompElement(t, this, this.globalData)
    }, CanvasRenderer.prototype.createSolid = function(t) {
        return new CVSolidElement(t, this, this.globalData)
    }, CanvasRenderer.prototype.ctxTransform = function(t) {
        if (1 !== t[0] || 0 !== t[1] || 0 !== t[4] || 1 !== t[5] || 0 !== t[12] || 0 !== t[13]) {
            if (!this.renderConfig.clearCanvas) return void this.canvasContext.transform(t[0], t[1], t[4], t[5], t[12], t[13]);
            this.transformMat.cloneFromProps(t), this.transformMat.transform(this.contextData.cTr.props[0], this.contextData.cTr.props[1], this.contextData.cTr.props[2], this.contextData.cTr.props[3], this.contextData.cTr.props[4], this.contextData.cTr.props[5], this.contextData.cTr.props[6], this.contextData.cTr.props[7], this.contextData.cTr.props[8], this.contextData.cTr.props[9], this.contextData.cTr.props[10], this.contextData.cTr.props[11], this.contextData.cTr.props[12], this.contextData.cTr.props[13], this.contextData.cTr.props[14], this.contextData.cTr.props[15]), this.contextData.cTr.cloneFromProps(this.transformMat.props);
            var e = this.contextData.cTr.props;
            this.canvasContext.setTransform(e[0], e[1], e[4], e[5], e[12], e[13])
        }
    }, CanvasRenderer.prototype.ctxOpacity = function(t) {
        if (1 !== t) {
            if (!this.renderConfig.clearCanvas) return void(this.canvasContext.globalAlpha *= 0 > t ? 0 : t);
            this.contextData.cO *= 0 > t ? 0 : t, this.canvasContext.globalAlpha = this.contextData.cO
        }
    }, CanvasRenderer.prototype.reset = function() {
        return this.renderConfig.clearCanvas ? (this.contextData.cArrPos = 0, this.contextData.cTr.reset(), void(this.contextData.cO = 1)) : void this.canvasContext.restore()
    }, CanvasRenderer.prototype.save = function(t) {
        if (!this.renderConfig.clearCanvas) return void this.canvasContext.save();
        t && this.canvasContext.save();
        var e = this.contextData.cTr.props;
        (null === this.contextData.saved[this.contextData.cArrPos] || void 0 === this.contextData.saved[this.contextData.cArrPos]) && (this.contextData.saved[this.contextData.cArrPos] = new Array(16));
        var s, r = this.contextData.saved[this.contextData.cArrPos];
        for (s = 0; 16 > s; s += 1) r[s] = e[s];
        this.contextData.savedOp[this.contextData.cArrPos] = this.contextData.cO, this.contextData.cArrPos += 1
    }, CanvasRenderer.prototype.restore = function(t) {
        if (!this.renderConfig.clearCanvas) return void this.canvasContext.restore();
        t && this.canvasContext.restore(), this.contextData.cArrPos -= 1;
        var e, s = this.contextData.saved[this.contextData.cArrPos],
            r = this.contextData.cTr.props;
        for (e = 0; 16 > e; e += 1) r[e] = s[e];
        this.canvasContext.setTransform(s[0], s[1], s[4], s[5], s[12], s[13]), s = this.contextData.savedOp[this.contextData.cArrPos], this.contextData.cO = s, this.canvasContext.globalAlpha = s
    }, CanvasRenderer.prototype.configAnimation = function(t) {
        this.animationItem.wrapper ? (this.animationItem.container = document.createElement("canvas"), this.animationItem.container.style.width = "100%", this.animationItem.container.style.height = "100%", this.animationItem.container.style.transformOrigin = this.animationItem.container.style.mozTransformOrigin = this.animationItem.container.style.webkitTransformOrigin = this.animationItem.container.style["-webkit-transform"] = "0px 0px 0px", this.animationItem.wrapper.appendChild(this.animationItem.container), this.canvasContext = this.animationItem.container.getContext("2d"), this.renderConfig.className && this.animationItem.container.setAttribute("class", this.renderConfig.className)) : this.canvasContext = this.renderConfig.context, this.data = t, this.globalData.canvasContext = this.canvasContext, this.globalData.renderer = this, this.globalData.isDashed = !1, this.globalData.totalFrames = Math.floor(t.tf), this.globalData.compWidth = t.w, this.globalData.compHeight = t.h, this.globalData.frameRate = t.fr, this.globalData.frameId = 0, this.globalData.compSize = {
            w: t.w,
            h: t.h
        }, this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.layers = t.layers, this.transformCanvas = {}, this.transformCanvas.w = t.w, this.transformCanvas.h = t.h, this.globalData.fontManager = new FontManager, this.globalData.fontManager.addChars(t.chars), this.globalData.fontManager.addFonts(t.fonts, document.body), this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), this.globalData.elementLoaded = this.animationItem.elementLoaded.bind(this.animationItem), this.globalData.addPendingElement = this.animationItem.addPendingElement.bind(this.animationItem), this.globalData.transformCanvas = this.transformCanvas, this.elements = Array.apply(null, {
            length: t.layers.length
        }), this.updateContainerSize()
    }, CanvasRenderer.prototype.updateContainerSize = function() {
        var t, e;
        this.animationItem.wrapper && this.animationItem.container ? (t = this.animationItem.wrapper.offsetWidth, e = this.animationItem.wrapper.offsetHeight, this.animationItem.container.setAttribute("width", t * this.renderConfig.dpr), this.animationItem.container.setAttribute("height", e * this.renderConfig.dpr)) : (t = this.canvasContext.canvas.width * this.renderConfig.dpr, e = this.canvasContext.canvas.height * this.renderConfig.dpr);
        var s, r;
        if (-1 !== this.renderConfig.preserveAspectRatio.indexOf("meet") || -1 !== this.renderConfig.preserveAspectRatio.indexOf("slice")) {
            var i = this.renderConfig.preserveAspectRatio.split(" "),
                a = i[1] || "meet",
                n = i[0] || "xMidYMid",
                o = n.substr(0, 4),
                h = n.substr(4);
            s = t / e, r = this.transformCanvas.w / this.transformCanvas.h, r > s && "meet" === a || s > r && "slice" === a ? (this.transformCanvas.sx = t / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = t / (this.transformCanvas.w / this.renderConfig.dpr)) : (this.transformCanvas.sx = e / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.sy = e / (this.transformCanvas.h / this.renderConfig.dpr)), this.transformCanvas.tx = "xMid" === o && (s > r && "meet" === a || r > s && "slice" === a) ? (t - this.transformCanvas.w * (e / this.transformCanvas.h)) / 2 * this.renderConfig.dpr : "xMax" === o && (s > r && "meet" === a || r > s && "slice" === a) ? (t - this.transformCanvas.w * (e / this.transformCanvas.h)) * this.renderConfig.dpr : 0, this.transformCanvas.ty = "YMid" === h && (r > s && "meet" === a || s > r && "slice" === a) ? (e - this.transformCanvas.h * (t / this.transformCanvas.w)) / 2 * this.renderConfig.dpr : "YMax" === h && (r > s && "meet" === a || s > r && "slice" === a) ? (e - this.transformCanvas.h * (t / this.transformCanvas.w)) * this.renderConfig.dpr : 0
        } else "none" == this.renderConfig.preserveAspectRatio ? (this.transformCanvas.sx = t / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = e / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.tx = 0, this.transformCanvas.ty = 0) : (this.transformCanvas.sx = this.renderConfig.dpr, this.transformCanvas.sy = this.renderConfig.dpr, this.transformCanvas.tx = 0, this.transformCanvas.ty = 0);
        this.transformCanvas.props = [this.transformCanvas.sx, 0, 0, 0, 0, this.transformCanvas.sy, 0, 0, 0, 0, 1, 0, this.transformCanvas.tx, this.transformCanvas.ty, 0, 1];
        var l, p = this.elements.length;
        for (l = 0; p > l; l += 1) this.elements[l] && 0 === this.elements[l].data.ty && this.elements[l].resize(this.globalData.transformCanvas)
    }, CanvasRenderer.prototype.destroy = function() {
        this.renderConfig.clearCanvas && (this.animationItem.wrapper.innerHTML = "");
        var t, e = this.layers ? this.layers.length : 0;
        for (t = e - 1; t >= 0; t -= 1) this.elements[t] && this.elements[t].destroy();
        this.elements.length = 0, this.globalData.canvasContext = null, this.animationItem.container = null, this.destroyed = !0
    }, CanvasRenderer.prototype.renderFrame = function(t) {
        if (!(this.renderedFrame == t && this.renderConfig.clearCanvas === !0 || this.destroyed || null === t)) {
            this.renderedFrame = t, this.globalData.frameNum = t - this.animationItem.firstFrame, this.globalData.frameId += 1, this.globalData.projectInterface.currentFrame = t, this.renderConfig.clearCanvas === !0 ? (this.reset(), this.canvasContext.save(), this.canvasContext.clearRect(this.transformCanvas.tx, this.transformCanvas.ty, this.transformCanvas.w * this.transformCanvas.sx, this.transformCanvas.h * this.transformCanvas.sy)) : this.save(), this.ctxTransform(this.transformCanvas.props), this.canvasContext.beginPath(), this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h), this.canvasContext.closePath(), this.canvasContext.clip();
            var e, s = this.layers.length;
            for (this.completeLayers || this.checkLayers(t), e = 0; s > e; e++)(this.completeLayers || this.elements[e]) && this.elements[e].prepareFrame(t - this.layers[e].st);
            for (e = s - 1; e >= 0; e -= 1)(this.completeLayers || this.elements[e]) && this.elements[e].renderFrame();
            this.renderConfig.clearCanvas !== !0 ? this.restore() : this.canvasContext.restore()
        }
    }, CanvasRenderer.prototype.buildItem = function(t) {
        var e = this.elements;
        if (!e[t] && 99 != this.layers[t].ty) {
            var s = this.createItem(this.layers[t], this, this.globalData);
            e[t] = s, s.initExpressions(), 0 === this.layers[t].ty && s.resize(this.globalData.transformCanvas)
        }
    }, CanvasRenderer.prototype.checkPendingElements = function() {
        for (; this.pendingElements.length;) {
            var t = this.pendingElements.pop();
            t.checkParenting()
        }
    }, CanvasRenderer.prototype.hide = function() {
        this.animationItem.container.style.display = "none"
    }, CanvasRenderer.prototype.show = function() {
        this.animationItem.container.style.display = "block"
    }, CanvasRenderer.prototype.searchExtraCompositions = function(t) {
        {
            var e, s = t.length;
            document.createElementNS(svgNS, "g")
        }
        for (e = 0; s > e; e += 1)
            if (t[e].xt) {
                var r = this.createComp(t[e], this.globalData.comp, this.globalData);
                r.initExpressions(), this.globalData.projectInterface.registerComposition(r)
            }
    }, extendPrototype(BaseRenderer, HybridRenderer), HybridRenderer.prototype.buildItem = SVGRenderer.prototype.buildItem, HybridRenderer.prototype.checkPendingElements = function() {
        for (; this.pendingElements.length;) {
            var t = this.pendingElements.pop();
            t.checkParenting()
        }
    }, HybridRenderer.prototype.appendElementInPos = function(t, e) {
        var s = t.getBaseElement();
        if (s) {
            var r = this.layers[e];
            if (r.ddd && this.supports3d) this.addTo3dContainer(s, e);
            else {
                for (var i, a, n = 0; e > n;) this.elements[n] && this.elements[n] !== !0 && this.elements[n].getBaseElement && (a = this.elements[n], i = this.layers[n].ddd ? this.getThreeDContainerByPos(n) : a.getBaseElement()), n += 1;
                i ? r.ddd && this.supports3d || this.layerElement.insertBefore(s, i) : r.ddd && this.supports3d || this.layerElement.appendChild(s)
            }
        }
    }, HybridRenderer.prototype.createBase = function(t) {
        return new SVGBaseElement(t, this.layerElement, this.globalData, this)
    }, HybridRenderer.prototype.createShape = function(t) {
        return this.supports3d ? new HShapeElement(t, this.layerElement, this.globalData, this) : new IShapeElement(t, this.layerElement, this.globalData, this)
    }, HybridRenderer.prototype.createText = function(t) {
        return this.supports3d ? new HTextElement(t, this.layerElement, this.globalData, this) : new SVGTextElement(t, this.layerElement, this.globalData, this)
    }, HybridRenderer.prototype.createCamera = function(t) {
        return this.camera = new HCameraElement(t, this.layerElement, this.globalData, this), this.camera
    }, HybridRenderer.prototype.createImage = function(t) {
        return this.supports3d ? new HImageElement(t, this.layerElement, this.globalData, this) : new IImageElement(t, this.layerElement, this.globalData, this)
    }, HybridRenderer.prototype.createComp = function(t) {
        return this.supports3d ? new HCompElement(t, this.layerElement, this.globalData, this) : new ICompElement(t, this.layerElement, this.globalData, this)
    }, HybridRenderer.prototype.createSolid = function(t) {
        return this.supports3d ? new HSolidElement(t, this.layerElement, this.globalData, this) : new ISolidElement(t, this.layerElement, this.globalData, this)
    }, HybridRenderer.prototype.getThreeDContainerByPos = function(t) {
        for (var e = 0, s = this.threeDElements.length; s > e;) {
            if (this.threeDElements[e].startPos <= t && this.threeDElements[e].endPos >= t) return this.threeDElements[e].perspectiveElem;
            e += 1
        }
    }, HybridRenderer.prototype.createThreeDContainer = function(t) {
        var e = document.createElement("div");
        styleDiv(e), e.style.width = this.globalData.compSize.w + "px", e.style.height = this.globalData.compSize.h + "px", e.style.transformOrigin = e.style.mozTransformOrigin = e.style.webkitTransformOrigin = "50% 50%";
        var s = document.createElement("div");
        styleDiv(s), s.style.transform = s.style.webkitTransform = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)", e.appendChild(s), this.resizerElem.appendChild(e);
        var r = {
            container: s,
            perspectiveElem: e,
            startPos: t,
            endPos: t
        };
        return this.threeDElements.push(r), r
    }, HybridRenderer.prototype.build3dContainers = function() {
        var t, e, s = this.layers.length;
        for (t = 0; s > t; t += 1) this.layers[t].ddd ? (e || (e = this.createThreeDContainer(t)), e.endPos = Math.max(e.endPos, t)) : e = null
    }, HybridRenderer.prototype.addTo3dContainer = function(t, e) {
        for (var s = 0, r = this.threeDElements.length; r > s;) {
            if (e <= this.threeDElements[s].endPos) {
                for (var i, a = this.threeDElements[s].startPos; e > a;) this.elements[a] && this.elements[a].getBaseElement && (i = this.elements[a].getBaseElement()), a += 1;
                i ? this.threeDElements[s].container.insertBefore(t, i) : this.threeDElements[s].container.appendChild(t);
                break
            }
            s += 1
        }
    }, HybridRenderer.prototype.configAnimation = function(t) {
        var e = document.createElement("div"),
            s = this.animationItem.wrapper;
        e.style.width = t.w + "px", e.style.height = t.h + "px", this.resizerElem = e, styleDiv(e), e.style.transformStyle = e.style.webkitTransformStyle = e.style.mozTransformStyle = "flat", this.renderConfig.className && s.setAttribute("class", this.renderConfig.className), s.appendChild(e), e.style.overflow = "hidden";
        var r = document.createElementNS(svgNS, "svg");
        r.setAttribute("width", "1"), r.setAttribute("height", "1"), styleDiv(r), this.resizerElem.appendChild(r);
        var i = document.createElementNS(svgNS, "defs");
        r.appendChild(i), this.globalData.defs = i, this.data = t, this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), this.globalData.elementLoaded = this.animationItem.elementLoaded.bind(this.animationItem), this.globalData.frameId = 0, this.globalData.compSize = {
            w: t.w,
            h: t.h
        }, this.globalData.frameRate = t.fr, this.layers = t.layers, this.globalData.fontManager = new FontManager, this.globalData.fontManager.addChars(t.chars), this.globalData.fontManager.addFonts(t.fonts, r), this.layerElement = this.resizerElem, this.build3dContainers(), this.updateContainerSize()
    }, HybridRenderer.prototype.destroy = function() {
        this.animationItem.wrapper.innerHTML = "", this.animationItem.container = null, this.globalData.defs = null;
        var t, e = this.layers ? this.layers.length : 0;
        for (t = 0; e > t; t++) this.elements[t].destroy();
        this.elements.length = 0, this.destroyed = !0, this.animationItem = null
    }, HybridRenderer.prototype.updateContainerSize = function() {
        var t, e, s, r, i = this.animationItem.wrapper.offsetWidth,
            a = this.animationItem.wrapper.offsetHeight,
            n = i / a,
            o = this.globalData.compSize.w / this.globalData.compSize.h;
        o > n ? (t = i / this.globalData.compSize.w, e = i / this.globalData.compSize.w, s = 0, r = (a - this.globalData.compSize.h * (i / this.globalData.compSize.w)) / 2) : (t = a / this.globalData.compSize.h, e = a / this.globalData.compSize.h, s = (i - this.globalData.compSize.w * (a / this.globalData.compSize.h)) / 2, r = 0), this.resizerElem.style.transform = this.resizerElem.style.webkitTransform = "matrix3d(" + t + ",0,0,0,0," + e + ",0,0,0,0,1,0," + s + "," + r + ",0,1)"
    }, HybridRenderer.prototype.renderFrame = SVGRenderer.prototype.renderFrame, HybridRenderer.prototype.hide = function() {
        this.resizerElem.style.display = "none"
    }, HybridRenderer.prototype.show = function() {
        this.resizerElem.style.display = "block"
    }, HybridRenderer.prototype.initItems = function() {
        if (this.buildAllItems(), this.camera) this.camera.setup();
        else {
            var t, e = this.globalData.compSize.w,
                s = this.globalData.compSize.h,
                r = this.threeDElements.length;
            for (t = 0; r > t; t += 1) this.threeDElements[t].perspectiveElem.style.perspective = this.threeDElements[t].perspectiveElem.style.webkitPerspective = Math.sqrt(Math.pow(e, 2) + Math.pow(s, 2)) + "px"
        }
    }, HybridRenderer.prototype.searchExtraCompositions = function(t) {
        var e, s = t.length,
            r = document.createElement("div");
        for (e = 0; s > e; e += 1)
            if (t[e].xt) {
                var i = this.createComp(t[e], r, this.globalData.comp, null);
                i.initExpressions(), this.globalData.projectInterface.registerComposition(i)
            }
    }, createElement(BaseElement, CVBaseElement), CVBaseElement.prototype.createElements = function() {
        this.checkParenting()
    }, CVBaseElement.prototype.checkBlendMode = function(t) {
        if (t.blendMode !== this.data.bm) {
            t.blendMode = this.data.bm;
            var e = "";
            switch (this.data.bm) {
                case 0:
                    e = "normal";
                    break;
                case 1:
                    e = "multiply";
                    break;
                case 2:
                    e = "screen";
                    break;
                case 3:
                    e = "overlay";
                    break;
                case 4:
                    e = "darken";
                    break;
                case 5:
                    e = "lighten";
                    break;
                case 6:
                    e = "color-dodge";
                    break;
                case 7:
                    e = "color-burn";
                    break;
                case 8:
                    e = "hard-light";
                    break;
                case 9:
                    e = "soft-light";
                    break;
                case 10:
                    e = "difference";
                    break;
                case 11:
                    e = "exclusion";
                    break;
                case 12:
                    e = "hue";
                    break;
                case 13:
                    e = "saturation";
                    break;
                case 14:
                    e = "color";
                    break;
                case 15:
                    e = "luminosity"
            }
            t.canvasContext.globalCompositeOperation = e
        }
    }, CVBaseElement.prototype.renderFrame = function(t) {
        if (3 === this.data.ty) return !1;
        if (this.checkBlendMode(0 === this.data.ty ? this.parentGlobalData : this.globalData), !this.isVisible) return this.isVisible;
        this.finalTransform.opMdf = this.finalTransform.op.mdf, this.finalTransform.matMdf = this.finalTransform.mProp.mdf, this.finalTransform.opacity = this.finalTransform.op.v;
        var e, s = this.finalTransform.mat;
        if (this.hierarchy) {
            var r, i = this.hierarchy.length;
            for (e = this.finalTransform.mProp.v.props, s.cloneFromProps(e), r = 0; i > r; r += 1) this.finalTransform.matMdf = this.hierarchy[r].finalTransform.mProp.mdf ? !0 : this.finalTransform.matMdf, e = this.hierarchy[r].finalTransform.mProp.v.props, s.transform(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15])
        } else t ? (e = this.finalTransform.mProp.v.props, s.cloneFromProps(e)) : s.cloneFromProps(this.finalTransform.mProp.v.props);
        return t && (e = t.mat.props, s.transform(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15]), this.finalTransform.opacity *= t.opacity, this.finalTransform.opMdf = t.opMdf ? !0 : this.finalTransform.opMdf, this.finalTransform.matMdf = t.matMdf ? !0 : this.finalTransform.matMdf), this.data.hasMask && (this.globalData.renderer.save(!0), this.maskManager.renderFrame(0 === this.data.ty ? null : s)), this.data.hd && (this.isVisible = !1), this.isVisible
    }, CVBaseElement.prototype.addMasks = function(t) {
        this.maskManager = new CVMaskElement(t, this, this.globalData)
    }, CVBaseElement.prototype.destroy = function() {
        this.canvasContext = null, this.data = null, this.globalData = null, this.maskManager && this.maskManager.destroy()
    }, CVBaseElement.prototype.mHelper = new Matrix, createElement(CVBaseElement, CVCompElement), CVCompElement.prototype.ctxTransform = CanvasRenderer.prototype.ctxTransform, CVCompElement.prototype.ctxOpacity = CanvasRenderer.prototype.ctxOpacity, CVCompElement.prototype.save = CanvasRenderer.prototype.save, CVCompElement.prototype.restore = CanvasRenderer.prototype.restore, CVCompElement.prototype.reset = function() {
        this.contextData.cArrPos = 0, this.contextData.cTr.reset(), this.contextData.cO = 1
    }, CVCompElement.prototype.resize = function(t) {
        var e = Math.max(t.sx, t.sy);
        this.canvas.width = this.data.w * e, this.canvas.height = this.data.h * e, this.transformCanvas = {
            sc: e,
            w: this.data.w * e,
            h: this.data.h * e,
            props: [e, 0, 0, 0, 0, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
        };
        var s, r = this.elements.length;
        for (s = 0; r > s; s += 1) this.elements[s] && 0 === this.elements[s].data.ty && this.elements[s].resize(t)
    }, CVCompElement.prototype.prepareFrame = function(t) {
        if (this.globalData.frameId = this.parentGlobalData.frameId, this.globalData.mdf = !1, this._parent.prepareFrame.call(this, t), this.isVisible !== !1 || this.data.xt) {
            var e = t;
            this.tm && (e = this.tm.v, e === this.data.op && (e = this.data.op - 1)), this.renderedFrame = e / this.data.sr;
            var s, r = this.elements.length;
            for (this.completeLayers || this.checkLayers(t), s = 0; r > s; s += 1)(this.completeLayers || this.elements[s]) && (this.elements[s].prepareFrame(e / this.data.sr - this.layers[s].st), 0 === this.elements[s].data.ty && this.elements[s].globalData.mdf && (this.globalData.mdf = !0));
            this.globalData.mdf && !this.data.xt && (this.canvasContext.clearRect(0, 0, this.data.w, this.data.h), this.ctxTransform(this.transformCanvas.props))
        }
    }, CVCompElement.prototype.renderFrame = function(t) {
        if (this._parent.renderFrame.call(this, t) !== !1) {
            if (this.globalData.mdf) {
                var e, s = this.layers.length;
                for (e = s - 1; e >= 0; e -= 1)(this.completeLayers || this.elements[e]) && this.elements[e].renderFrame()
            }
            this.data.hasMask && this.globalData.renderer.restore(!0), this.firstFrame && (this.firstFrame = !1), this.parentGlobalData.renderer.save(), this.parentGlobalData.renderer.ctxTransform(this.finalTransform.mat.props), this.parentGlobalData.renderer.ctxOpacity(this.finalTransform.opacity), this.parentGlobalData.renderer.canvasContext.drawImage(this.canvas, 0, 0, this.data.w, this.data.h), this.parentGlobalData.renderer.restore(), this.globalData.mdf && this.reset()
        }
    }, CVCompElement.prototype.setElements = function(t) {
        this.elements = t
    }, CVCompElement.prototype.getElements = function() {
        return this.elements
    }, CVCompElement.prototype.destroy = function() {
        var t, e = this.layers.length;
        for (t = e - 1; t >= 0; t -= 1) this.elements[t].destroy();
        this.layers = null, this.elements = null, this._parent.destroy.call(this._parent)
    }, CVCompElement.prototype.checkLayers = CanvasRenderer.prototype.checkLayers, CVCompElement.prototype.buildItem = CanvasRenderer.prototype.buildItem, CVCompElement.prototype.checkPendingElements = CanvasRenderer.prototype.checkPendingElements, CVCompElement.prototype.addPendingElement = CanvasRenderer.prototype.addPendingElement, CVCompElement.prototype.buildAllItems = CanvasRenderer.prototype.buildAllItems, CVCompElement.prototype.createItem = CanvasRenderer.prototype.createItem, CVCompElement.prototype.createImage = CanvasRenderer.prototype.createImage, CVCompElement.prototype.createComp = CanvasRenderer.prototype.createComp, CVCompElement.prototype.createSolid = CanvasRenderer.prototype.createSolid, CVCompElement.prototype.createShape = CanvasRenderer.prototype.createShape, CVCompElement.prototype.createText = CanvasRenderer.prototype.createText, CVCompElement.prototype.createBase = CanvasRenderer.prototype.createBase, CVCompElement.prototype.buildElementParenting = CanvasRenderer.prototype.buildElementParenting, createElement(CVBaseElement, CVImageElement), CVImageElement.prototype.createElements = function() {
        var t = function() {
                if (this.globalData.elementLoaded(), this.assetData.w !== this.img.width || this.assetData.h !== this.img.height) {
                    var t = document.createElement("canvas");
                    t.width = this.assetData.w, t.height = this.assetData.h;
                    var e, s, r = t.getContext("2d"),
                        i = this.img.width,
                        a = this.img.height,
                        n = i / a,
                        o = this.assetData.w / this.assetData.h;
                    n > o ? (s = a, e = s * o) : (e = i, s = e / o), r.drawImage(this.img, (i - e) / 2, (a - s) / 2, e, s, 0, 0, this.assetData.w, this.assetData.h), this.img = t
                }
            }.bind(this),
            e = function() {
                this.failed = !0, this.globalData.elementLoaded()
            }.bind(this);
        this.img = new Image, this.img.addEventListener("load", t, !1), this.img.addEventListener("error", e, !1);
        var s = this.globalData.getAssetsPath(this.assetData);
        this.img.src = s, this._parent.createElements.call(this)
    }, CVImageElement.prototype.renderFrame = function(t) {
        if (!this.failed && this._parent.renderFrame.call(this, t) !== !1) {
            var e = this.canvasContext;
            this.globalData.renderer.save();
            var s = this.finalTransform.mat.props;
            this.globalData.renderer.ctxTransform(s), this.globalData.renderer.ctxOpacity(this.finalTransform.opacity), e.drawImage(this.img, 0, 0), this.globalData.renderer.restore(this.data.hasMask), this.firstFrame && (this.firstFrame = !1)
        }
    }, CVImageElement.prototype.destroy = function() {
        this.img = null, this._parent.destroy.call(this._parent)
    }, CVMaskElement.prototype.prepareFrame = function(t) {
        var e, s = this.dynamicProperties.length;
        for (e = 0; s > e; e += 1) this.dynamicProperties[e].getValue(t), this.dynamicProperties[e].mdf && (this.element.globalData.mdf = !0)
    }, CVMaskElement.prototype.renderFrame = function(t) {
        var e, s, r, i, a, n = this.element.canvasContext,
            o = this.data.masksProperties.length,
            h = !1;
        for (e = 0; o > e; e++)
            if ("n" !== this.masksProperties[e].mode) {
                h === !1 && (n.beginPath(), h = !0), this.masksProperties[e].inv && (n.moveTo(0, 0), n.lineTo(this.element.globalData.compWidth, 0), n.lineTo(this.element.globalData.compWidth, this.element.globalData.compHeight), n.lineTo(0, this.element.globalData.compHeight), n.lineTo(0, 0)), a = this.viewData[e].v, s = t ? t.applyToPointArray(a.v[0][0], a.v[0][1], 0) : a.v[0], n.moveTo(s[0], s[1]);
                var l, p = a._length;
                for (l = 1; p > l; l++) s = t ? t.applyToPointArray(a.o[l - 1][0], a.o[l - 1][1], 0) : a.o[l - 1], r = t ? t.applyToPointArray(a.i[l][0], a.i[l][1], 0) : a.i[l], i = t ? t.applyToPointArray(a.v[l][0], a.v[l][1], 0) : a.v[l], n.bezierCurveTo(s[0], s[1], r[0], r[1], i[0], i[1]);
                s = t ? t.applyToPointArray(a.o[l - 1][0], a.o[l - 1][1], 0) : a.o[l - 1], r = t ? t.applyToPointArray(a.i[0][0], a.i[0][1], 0) : a.i[0], i = t ? t.applyToPointArray(a.v[0][0], a.v[0][1], 0) : a.v[0], n.bezierCurveTo(s[0], s[1], r[0], r[1], i[0], i[1])
            }
        h && n.clip()
    }, CVMaskElement.prototype.getMaskProperty = MaskElement.prototype.getMaskProperty, CVMaskElement.prototype.destroy = function() {
        this.element = null
    }, createElement(CVBaseElement, CVShapeElement), CVShapeElement.prototype.transformHelper = {
        opacity: 1,
        mat: new Matrix,
        matMdf: !1,
        opMdf: !1
    }, CVShapeElement.prototype.dashResetter = [], CVShapeElement.prototype.createElements = function() {
        this._parent.createElements.call(this), this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.dynamicProperties, !0)
    }, CVShapeElement.prototype.createStyleElement = function(t, e) {
        var s = {
                data: t,
                type: t.ty,
                elements: []
            },
            r = {};
        if (("fl" == t.ty || "st" == t.ty) && (r.c = PropertyFactory.getProp(this, t.c, 1, 255, e), r.c.k || (s.co = "rgb(" + bm_floor(r.c.v[0]) + "," + bm_floor(r.c.v[1]) + "," + bm_floor(r.c.v[2]) + ")")), r.o = PropertyFactory.getProp(this, t.o, 0, .01, e), "st" == t.ty) {
            if (s.lc = this.lcEnum[t.lc] || "round", s.lj = this.ljEnum[t.lj] || "round", 1 == t.lj && (s.ml = t.ml), r.w = PropertyFactory.getProp(this, t.w, 0, null, e), r.w.k || (s.wi = r.w.v), t.d) {
                var i = PropertyFactory.getDashProp(this, t.d, "canvas", e);
                r.d = i, r.d.k || (s.da = r.d.dasharray, s["do"] = r.d.dashoffset)
            }
        } else s.r = 2 === t.r ? "evenodd" : "nonzero";
        return this.stylesList.push(s), r.style = s, r
    }, CVShapeElement.prototype.createGroupElement = function(t) {
        var e = {
            it: [],
            prevViewData: []
        };
        return e
    }, CVShapeElement.prototype.createTransformElement = function(t, e) {
        var s = {
            transform: {
                mat: new Matrix,
                opacity: 1,
                matMdf: !1,
                opMdf: !1,
                op: PropertyFactory.getProp(this, t.o, 0, .01, e),
                mProps: PropertyFactory.getProp(this, t, 2, null, e)
            },
            elements: []
        };
        return s
    }, CVShapeElement.prototype.createShapeElement = function(t, e) {
        var s = {
                nodes: [],
                trNodes: [],
                tr: [0, 0, 0, 0, 0, 0]
            },
            r = 4;
        "rc" == t.ty ? r = 5 : "el" == t.ty ? r = 6 : "sr" == t.ty && (r = 7), s.sh = ShapePropertyFactory.getShapeProp(this, t, r, e), this.shapes.push(s.sh), this.addShapeToModifiers(s), jLen = this.stylesList.length;
        var i = !1,
            a = !1;
        for (j = 0; j < jLen; j += 1) this.stylesList[j].closed || (this.stylesList[j].elements.push(s), "st" === this.stylesList[j].type ? i = !0 : a = !0);
        return s.st = i, s.fl = a, s
    }, CVShapeElement.prototype.reloadShapes = function() {
        this.firstFrame = !0;
        var t, e = this.itemsData.length;
        for (t = 0; e > t; t += 1) this.prevViewData[t] = this.itemsData[t];
        this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.dynamicProperties, !0);
        var t, e = this.dynamicProperties.length;
        for (t = 0; e > t; t += 1) this.dynamicProperties[t].getValue();
        this.renderModifiers()
    }, CVShapeElement.prototype.searchShapes = function(t, e, s, r, i) {
        var a, n, o, h, l = t.length - 1,
            p = [],
            m = [];
        for (a = l; a >= 0; a -= 1) {
            if (h = this.searchProcessedElement(t[a]), h ? e[a] = s[h - 1] : t[a]._render = i, "fl" == t[a].ty || "st" == t[a].ty) h ? e[a].style.closed = !1 : e[a] = this.createStyleElement(t[a], r), p.push(e[a].style);
            else if ("gr" == t[a].ty) {
                if (h)
                    for (o = e[a].it.length, n = 0; o > n; n += 1) e[a].prevViewData[n] = e[a].it[n];
                else e[a] = this.createGroupElement(t[a]);
                this.searchShapes(t[a].it, e[a].it, e[a].prevViewData, r, i)
            } else if ("tr" == t[a].ty) h || (e[a] = this.createTransformElement(t[a], r));
            else if ("sh" == t[a].ty || "rc" == t[a].ty || "el" == t[a].ty || "sr" == t[a].ty) h || (e[a] = this.createShapeElement(t[a], r));
            else if ("tm" == t[a].ty || "rd" == t[a].ty) {
                if (h) f = e[a], f.closed = !1;
                else {
                    var f = ShapeModifiers.getModifier(t[a].ty);
                    f.init(this, t[a], r), e[a] = f, this.shapeModifiers.push(f)
                }
                m.push(f)
            } else "rp" == t[a].ty && (h ? (f = e[a], f.closed = !0) : (f = ShapeModifiers.getModifier(t[a].ty), e[a] = f, f.init(this, t, a, e, r), this.shapeModifiers.push(f), i = !1), m.push(f));
            this.addProcessedElement(t[a], a + 1)
        }
        for (l = p.length, a = 0; l > a; a += 1) p[a].closed = !0;
        for (l = m.length, a = 0; l > a; a += 1) m[a].closed = !0
    }, CVShapeElement.prototype.addShapeToModifiers = IShapeElement.prototype.addShapeToModifiers, CVShapeElement.prototype.renderModifiers = IShapeElement.prototype.renderModifiers, CVShapeElement.prototype.lcEnum = IShapeElement.prototype.lcEnum, CVShapeElement.prototype.ljEnum = IShapeElement.prototype.ljEnum, CVShapeElement.prototype.searchProcessedElement = IShapeElement.prototype.searchProcessedElement, CVShapeElement.prototype.addProcessedElement = IShapeElement.prototype.addProcessedElement, CVShapeElement.prototype.renderFrame = function(t) {
        this._parent.renderFrame.call(this, t) !== !1 && (this.transformHelper.mat.reset(), this.transformHelper.opacity = this.finalTransform.opacity, this.transformHelper.matMdf = !1, this.transformHelper.opMdf = this.finalTransform.opMdf, this.renderModifiers(), this.renderShape(this.transformHelper, null, null, !0), this.data.hasMask && this.globalData.renderer.restore(!0))
    }, CVShapeElement.prototype.renderShape = function(t, e, s, r) {
        var i, a;
        if (!e)
            for (e = this.shapesData, a = this.stylesList.length, i = 0; a > i; i += 1) this.stylesList[i].d = "", this.stylesList[i].mdf = !1;
        s || (s = this.itemsData), a = e.length - 1;
        var n, o;
        for (n = t, i = a; i >= 0; i -= 1)
            if ("tr" == e[i].ty) {
                n = s[i].transform;
                var h = s[i].transform.mProps.v.props;
                if (n.matMdf = n.mProps.mdf, n.opMdf = n.op.mdf, o = n.mat, o.cloneFromProps(h), t) {
                    var l = t.mat.props;
                    n.opacity = t.opacity, n.opacity *= s[i].transform.op.v, n.matMdf = t.matMdf ? !0 : n.matMdf, n.opMdf = t.opMdf ? !0 : n.opMdf, o.transform(l[0], l[1], l[2], l[3], l[4], l[5], l[6], l[7], l[8], l[9], l[10], l[11], l[12], l[13], l[14], l[15])
                } else n.opacity = n.op.o
            } else "sh" == e[i].ty || "el" == e[i].ty || "rc" == e[i].ty || "sr" == e[i].ty ? this.renderPath(e[i], s[i], n) : "fl" == e[i].ty ? this.renderFill(e[i], s[i], n) : "st" == e[i].ty ? this.renderStroke(e[i], s[i], n) : "gr" == e[i].ty ? this.renderShape(n, e[i].it, s[i].it) : "tm" == e[i].ty;
        if (r) {
            a = this.stylesList.length;
            var p, m, f, c, d, u, y, g = this.globalData.renderer,
                v = this.globalData.canvasContext;
            for (g.save(), g.ctxTransform(this.finalTransform.mat.props), i = 0; a > i; i += 1)
                if (y = this.stylesList[i].type, ("st" !== y || 0 !== this.stylesList[i].wi) && this.stylesList[i].data._render) {
                    for (g.save(), d = this.stylesList[i].elements,
                        "st" === y ? (v.strokeStyle = this.stylesList[i].co, v.lineWidth = this.stylesList[i].wi, v.lineCap = this.stylesList[i].lc, v.lineJoin = this.stylesList[i].lj, v.miterLimit = this.stylesList[i].ml || 0) : v.fillStyle = this.stylesList[i].co, g.ctxOpacity(this.stylesList[i].coOp), "st" !== y && v.beginPath(), m = d.length, p = 0; m > p; p += 1) {
                        for ("st" === y && (v.beginPath(), this.stylesList[i].da ? (v.setLineDash(this.stylesList[i].da), v.lineDashOffset = this.stylesList[i]["do"], this.globalData.isDashed = !0) : this.globalData.isDashed && (v.setLineDash(this.dashResetter), this.globalData.isDashed = !1)), u = d[p].trNodes, c = u.length, f = 0; c > f; f += 1) "m" == u[f].t ? v.moveTo(u[f].p[0], u[f].p[1]) : "c" == u[f].t ? v.bezierCurveTo(u[f].p1[0], u[f].p1[1], u[f].p2[0], u[f].p2[1], u[f].p3[0], u[f].p3[1]) : v.closePath();
                        "st" === y && v.stroke()
                    }
                    "st" !== y && v.fill(this.stylesList[i].r), g.restore()
                }
            g.restore(), this.firstFrame && (this.firstFrame = !1)
        }
    }, CVShapeElement.prototype.renderPath = function(t, e, s) {
        var r, i, a, n, o = s.matMdf || e.sh.mdf || this.firstFrame;
        if (o) {
            var h = e.sh.paths,
                l = s.mat;
            n = h._length;
            var p = e.trNodes;
            for (p.length = 0, a = 0; n > a; a += 1) {
                var m = h.shapes[a];
                if (m && m.v) {
                    for (r = m._length, i = 1; r > i; i += 1) 1 == i && p.push({
                        t: "m",
                        p: l.applyToPointArray(m.v[0][0], m.v[0][1], 0)
                    }), p.push({
                        t: "c",
                        p1: l.applyToPointArray(m.o[i - 1][0], m.o[i - 1][1], 0),
                        p2: l.applyToPointArray(m.i[i][0], m.i[i][1], 0),
                        p3: l.applyToPointArray(m.v[i][0], m.v[i][1], 0)
                    });
                    1 == r && p.push({
                        t: "m",
                        p: l.applyToPointArray(m.v[0][0], m.v[0][1], 0)
                    }), m.c && r && (p.push({
                        t: "c",
                        p1: l.applyToPointArray(m.o[i - 1][0], m.o[i - 1][1], 0),
                        p2: l.applyToPointArray(m.i[0][0], m.i[0][1], 0),
                        p3: l.applyToPointArray(m.v[0][0], m.v[0][1], 0)
                    }), p.push({
                        t: "z"
                    })), e.lStr = p
                }
            }
            if (e.st)
                for (i = 0; 16 > i; i += 1) e.tr[i] = s.mat.props[i];
            e.trNodes = p
        }
    }, CVShapeElement.prototype.renderFill = function(t, e, s) {
        var r = e.style;
        (e.c.mdf || this.firstFrame) && (r.co = "rgb(" + bm_floor(e.c.v[0]) + "," + bm_floor(e.c.v[1]) + "," + bm_floor(e.c.v[2]) + ")"), (e.o.mdf || s.opMdf || this.firstFrame) && (r.coOp = e.o.v * s.opacity)
    }, CVShapeElement.prototype.renderStroke = function(t, e, s) {
        var r = e.style,
            i = e.d;
        i && (i.mdf || this.firstFrame) && (r.da = i.dasharray, r["do"] = i.dashoffset), (e.c.mdf || this.firstFrame) && (r.co = "rgb(" + bm_floor(e.c.v[0]) + "," + bm_floor(e.c.v[1]) + "," + bm_floor(e.c.v[2]) + ")"), (e.o.mdf || s.opMdf || this.firstFrame) && (r.coOp = e.o.v * s.opacity), (e.w.mdf || this.firstFrame) && (r.wi = e.w.v)
    }, CVShapeElement.prototype.destroy = function() {
        this.shapesData = null, this.globalData = null, this.canvasContext = null, this.stylesList.length = 0, this.itemData.length = 0, this._parent.destroy.call(this._parent)
    }, createElement(CVBaseElement, CVSolidElement), CVSolidElement.prototype.renderFrame = function(t) {
        if (this._parent.renderFrame.call(this, t) !== !1) {
            var e = this.canvasContext;
            this.globalData.renderer.save(), this.globalData.renderer.ctxTransform(this.finalTransform.mat.props), this.globalData.renderer.ctxOpacity(this.finalTransform.opacity), e.fillStyle = this.data.sc, e.fillRect(0, 0, this.data.sw, this.data.sh), this.globalData.renderer.restore(this.data.hasMask), this.firstFrame && (this.firstFrame = !1)
        }
    }, createElement(CVBaseElement, CVTextElement), extendPrototype(ITextElement, CVTextElement), CVTextElement.prototype.tHelper = document.createElement("canvas").getContext("2d"), CVTextElement.prototype.createElements = function() {
        this._parent.createElements.call(this)
    }, CVTextElement.prototype.buildNewText = function() {
        var t = this.textProperty.currentData;
        this.renderedLetters = Array.apply(null, {
            length: t.l ? t.l.length : 0
        });
        var e = !1;
        t.fc ? (e = !0, this.values.fill = this.buildColor(t.fc)) : this.values.fill = "rgba(0,0,0,0)", this.fill = e;
        var s = !1;
        t.sc && (s = !0, this.values.stroke = this.buildColor(t.sc), this.values.sWidth = t.sw);
        var r, i, a = this.globalData.fontManager.getFontByName(t.f),
            n = t.l,
            o = this.mHelper;
        this.stroke = s, this.values.fValue = t.s + "px " + this.globalData.fontManager.getFontByName(t.f).fFamily, i = t.t.length;
        var h, l, p, m, f, c, d, u, y, g, v = this.data.singleShape,
            b = t.tr / 1e3 * t.s,
            E = 0,
            P = 0,
            x = !0,
            S = 0;
        for (r = 0; i > r; r += 1) {
            for (h = this.globalData.fontManager.getCharData(t.t.charAt(r), a.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily), l = h && h.data || {}, o.reset(), v && n[r].n && (E = -b, P += t.yOffset, P += x ? 1 : 0, x = !1), f = l.shapes ? l.shapes[0].it : [], d = f.length, o.scale(t.s / 100, t.s / 100), v && this.applyTextPropertiesToMatrix(t, o, n[r].line, E, P), y = Array.apply(null, {
                    length: d
                }), c = 0; d > c; c += 1) {
                for (m = f[c].ks.k.i.length, u = f[c].ks.k, g = [], p = 1; m > p; p += 1) 1 == p && g.push(o.applyToX(u.v[0][0], u.v[0][1], 0), o.applyToY(u.v[0][0], u.v[0][1], 0)), g.push(o.applyToX(u.o[p - 1][0], u.o[p - 1][1], 0), o.applyToY(u.o[p - 1][0], u.o[p - 1][1], 0), o.applyToX(u.i[p][0], u.i[p][1], 0), o.applyToY(u.i[p][0], u.i[p][1], 0), o.applyToX(u.v[p][0], u.v[p][1], 0), o.applyToY(u.v[p][0], u.v[p][1], 0));
                g.push(o.applyToX(u.o[p - 1][0], u.o[p - 1][1], 0), o.applyToY(u.o[p - 1][0], u.o[p - 1][1], 0), o.applyToX(u.i[0][0], u.i[0][1], 0), o.applyToY(u.i[0][0], u.i[0][1], 0), o.applyToX(u.v[0][0], u.v[0][1], 0), o.applyToY(u.v[0][0], u.v[0][1], 0)), y[c] = g
            }
            v && (E += n[r].l, E += b), this.textSpans[S] ? this.textSpans[S].elem = y : this.textSpans[S] = {
                elem: y
            }, S += 1
        }
    }, CVTextElement.prototype.renderFrame = function(t) {
        if (this._parent.renderFrame.call(this, t) !== !1) {
            var e = this.canvasContext,
                s = this.finalTransform.mat.props;
            this.globalData.renderer.save(), this.globalData.renderer.ctxTransform(s), this.globalData.renderer.ctxOpacity(this.finalTransform.opacity), e.font = this.values.fValue, e.lineCap = "butt", e.lineJoin = "miter", e.miterLimit = 4, this.data.singleShape || this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
            var r, i, a, n, o, h, l = this.textAnimator.renderedLetters,
                p = this.textProperty.currentData.l;
            i = p.length;
            var m, f, c, d = null,
                u = null,
                y = null;
            for (r = 0; i > r; r += 1)
                if (!p[r].n) {
                    if (m = l[r], m && (this.globalData.renderer.save(), this.globalData.renderer.ctxTransform(m.p), this.globalData.renderer.ctxOpacity(m.o)), this.fill) {
                        for (m && m.fc ? d !== m.fc && (d = m.fc, e.fillStyle = m.fc) : d !== this.values.fill && (d = this.values.fill, e.fillStyle = this.values.fill), f = this.textSpans[r].elem, n = f.length, this.globalData.canvasContext.beginPath(), a = 0; n > a; a += 1)
                            for (c = f[a], h = c.length, this.globalData.canvasContext.moveTo(c[0], c[1]), o = 2; h > o; o += 6) this.globalData.canvasContext.bezierCurveTo(c[o], c[o + 1], c[o + 2], c[o + 3], c[o + 4], c[o + 5]);
                        this.globalData.canvasContext.closePath(), this.globalData.canvasContext.fill()
                    }
                    if (this.stroke) {
                        for (m && m.sw ? y !== m.sw && (y = m.sw, e.lineWidth = m.sw) : y !== this.values.sWidth && (y = this.values.sWidth, e.lineWidth = this.values.sWidth), m && m.sc ? u !== m.sc && (u = m.sc, e.strokeStyle = m.sc) : u !== this.values.stroke && (u = this.values.stroke, e.strokeStyle = this.values.stroke), f = this.textSpans[r].elem, n = f.length, this.globalData.canvasContext.beginPath(), a = 0; n > a; a += 1)
                            for (c = f[a], h = c.length, this.globalData.canvasContext.moveTo(c[0], c[1]), o = 2; h > o; o += 6) this.globalData.canvasContext.bezierCurveTo(c[o], c[o + 1], c[o + 2], c[o + 3], c[o + 4], c[o + 5]);
                        this.globalData.canvasContext.closePath(), this.globalData.canvasContext.stroke()
                    }
                    m && this.globalData.renderer.restore()
                }
            this.globalData.renderer.restore(this.data.hasMask), this.firstFrame && (this.firstFrame = !1)
        }
    }, createElement(BaseElement, HBaseElement), HBaseElement.prototype.checkBlendMode = function() {}, HBaseElement.prototype.setBlendMode = BaseElement.prototype.setBlendMode, HBaseElement.prototype.getBaseElement = function() {
        return this.baseElement
    }, HBaseElement.prototype.createElements = function() {
        this.data.hasMask ? (this.layerElement = document.createElementNS(svgNS, "svg"), styleDiv(this.layerElement), this.baseElement = this.layerElement, this.maskedElement = this.layerElement) : this.layerElement = this.parentContainer, this.transformedElement = this.layerElement, !this.data.ln || 4 !== this.data.ty && 0 !== this.data.ty || (this.layerElement === this.parentContainer && (this.layerElement = document.createElementNS(svgNS, "g"), this.baseElement = this.layerElement), this.layerElement.setAttribute("id", this.data.ln)), this.setBlendMode(), this.layerElement !== this.parentContainer && (this.placeholder = null), this.checkParenting()
    }, HBaseElement.prototype.renderFrame = function(t) {
        if (3 === this.data.ty) return !1;
        if (this.currentFrameNum === this.lastNum || !this.isVisible) return this.isVisible;
        this.lastNum = this.currentFrameNum, this.finalTransform.opMdf = this.finalTransform.op.mdf, this.finalTransform.matMdf = this.finalTransform.mProp.mdf, this.finalTransform.opacity = this.finalTransform.op.v, this.firstFrame && (this.finalTransform.opMdf = !0, this.finalTransform.matMdf = !0);
        var e, s = this.finalTransform.mat;
        if (this.hierarchy) {
            var r, i = this.hierarchy.length;
            for (e = this.finalTransform.mProp.v.props, s.cloneFromProps(e), r = 0; i > r; r += 1) this.finalTransform.matMdf = this.hierarchy[r].finalTransform.mProp.mdf ? !0 : this.finalTransform.matMdf, e = this.hierarchy[r].finalTransform.mProp.v.props, s.transform(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15])
        } else this.isVisible && this.finalTransform.matMdf && (t ? (e = this.finalTransform.mProp.v.props, s.cloneFromProps(e)) : s.cloneFromProps(this.finalTransform.mProp.v.props));
        return this.data.hasMask && this.maskManager.renderFrame(s), t && (e = t.mat.props, s.cloneFromProps(e), this.finalTransform.opacity *= t.opacity, this.finalTransform.opMdf = t.opMdf ? !0 : this.finalTransform.opMdf, this.finalTransform.matMdf = t.matMdf ? !0 : this.finalTransform.matMdf), this.finalTransform.matMdf && (this.transformedElement.style.transform = this.transformedElement.style.webkitTransform = s.toCSS(), this.finalMat = s), this.finalTransform.opMdf && (this.transformedElement.style.opacity = this.finalTransform.opacity), this.isVisible
    }, HBaseElement.prototype.destroy = function() {
        this.layerElement = null, this.transformedElement = null, this.parentContainer = null, this.matteElement && (this.matteElement = null), this.maskManager && (this.maskManager.destroy(), this.maskManager = null)
    }, HBaseElement.prototype.getDomElement = function() {
        return this.layerElement
    }, HBaseElement.prototype.addMasks = function(t) {
        this.maskManager = new MaskElement(t, this, this.globalData)
    }, HBaseElement.prototype.hide = function() {}, HBaseElement.prototype.setMatte = function() {}, HBaseElement.prototype.buildElementParenting = HybridRenderer.prototype.buildElementParenting, createElement(HBaseElement, HSolidElement), HSolidElement.prototype.createElements = function() {
        var t = document.createElement("div");
        styleDiv(t);
        var e = document.createElementNS(svgNS, "svg");
        styleDiv(e), e.setAttribute("width", this.data.sw), e.setAttribute("height", this.data.sh), t.appendChild(e), this.layerElement = t, this.transformedElement = t, this.baseElement = t, this.innerElem = t, this.data.ln && this.innerElem.setAttribute("id", this.data.ln), 0 !== this.data.bm && this.setBlendMode();
        var s = document.createElementNS(svgNS, "rect");
        s.setAttribute("width", this.data.sw), s.setAttribute("height", this.data.sh), s.setAttribute("fill", this.data.sc), e.appendChild(s), this.data.hasMask && (this.maskedElement = s), this.checkParenting()
    }, HSolidElement.prototype.hide = SVGBaseElement.prototype.hide, HSolidElement.prototype.show = SVGBaseElement.prototype.show, HSolidElement.prototype.renderFrame = IImageElement.prototype.renderFrame, HSolidElement.prototype.destroy = IImageElement.prototype.destroy, createElement(HBaseElement, HCompElement), HCompElement.prototype.createElements = function() {
        var t = document.createElement("div");
        if (styleDiv(t), this.data.ln && t.setAttribute("id", this.data.ln), t.style.clip = "rect(0px, " + this.data.w + "px, " + this.data.h + "px, 0px)", this.data.hasMask) {
            var e = document.createElementNS(svgNS, "svg");
            styleDiv(e), e.setAttribute("width", this.data.w), e.setAttribute("height", this.data.h);
            var s = document.createElementNS(svgNS, "g");
            e.appendChild(s), t.appendChild(e), this.maskedElement = s, this.baseElement = t, this.layerElement = s, this.transformedElement = t
        } else this.layerElement = t, this.baseElement = this.layerElement, this.transformedElement = t;
        this.checkParenting()
    }, HCompElement.prototype.hide = ICompElement.prototype.hide, HCompElement.prototype.prepareFrame = ICompElement.prototype.prepareFrame, HCompElement.prototype.setElements = ICompElement.prototype.setElements, HCompElement.prototype.getElements = ICompElement.prototype.getElements, HCompElement.prototype.destroy = ICompElement.prototype.destroy, HCompElement.prototype.renderFrame = function(t) {
        var e, s = this._parent.renderFrame.call(this, t),
            r = this.layers.length;
        if (s === !1) return void this.hide();
        for (this.hidden = !1, e = 0; r > e; e += 1)(this.completeLayers || this.elements[e]) && this.elements[e].renderFrame();
        this.firstFrame && (this.firstFrame = !1)
    }, HCompElement.prototype.checkLayers = BaseRenderer.prototype.checkLayers, HCompElement.prototype.buildItem = HybridRenderer.prototype.buildItem, HCompElement.prototype.checkPendingElements = HybridRenderer.prototype.checkPendingElements, HCompElement.prototype.addPendingElement = HybridRenderer.prototype.addPendingElement, HCompElement.prototype.buildAllItems = BaseRenderer.prototype.buildAllItems, HCompElement.prototype.createItem = HybridRenderer.prototype.createItem, HCompElement.prototype.buildElementParenting = HybridRenderer.prototype.buildElementParenting, HCompElement.prototype.createImage = HybridRenderer.prototype.createImage, HCompElement.prototype.createComp = HybridRenderer.prototype.createComp, HCompElement.prototype.createSolid = HybridRenderer.prototype.createSolid, HCompElement.prototype.createShape = HybridRenderer.prototype.createShape, HCompElement.prototype.createText = HybridRenderer.prototype.createText, HCompElement.prototype.createBase = HybridRenderer.prototype.createBase, HCompElement.prototype.appendElementInPos = HybridRenderer.prototype.appendElementInPos, createElement(HBaseElement, HShapeElement);
    var parent = HShapeElement.prototype._parent;
    extendPrototype(IShapeElement, HShapeElement), HShapeElement.prototype._parent = parent, HShapeElement.prototype._renderShapeFrame = HShapeElement.prototype.renderFrame, HShapeElement.prototype.createElements = function() {
        var t = document.createElement("div");
        styleDiv(t);
        var e = document.createElementNS(svgNS, "svg");
        styleDiv(e);
        var s = this.comp.data ? this.comp.data : this.globalData.compSize;
        if (e.setAttribute("width", s.w), e.setAttribute("height", s.h), this.data.hasMask) {
            var r = document.createElementNS(svgNS, "g");
            t.appendChild(e), e.appendChild(r), this.maskedElement = r, this.layerElement = r, this.shapesContainer = r
        } else t.appendChild(e), this.layerElement = e, this.shapesContainer = document.createElementNS(svgNS, "g"), this.layerElement.appendChild(this.shapesContainer);
        this.data.hd || (this.baseElement = t), this.innerElem = t, this.data.ln && this.innerElem.setAttribute("id", this.data.ln), this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, this.dynamicProperties, 0, [], !0), this.buildExpressionInterface(), this.layerElement = t, this.transformedElement = t, this.shapeCont = e, 0 !== this.data.bm && this.setBlendMode(), this.checkParenting()
    }, HShapeElement.prototype.renderFrame = function(t) {
        var e = this.firstFrame;
        if (this._renderShapeFrame(), this.isVisible && (this.elemMdf || e)) {
            var s = this.shapeCont.getBBox(),
                r = !1;
            this.currentBBox.w !== s.width && (this.currentBBox.w = s.width, this.shapeCont.setAttribute("width", s.width), r = !0), this.currentBBox.h !== s.height && (this.currentBBox.h = s.height, this.shapeCont.setAttribute("height", s.height), r = !0), (r || this.currentBBox.x !== s.x || this.currentBBox.y !== s.y) && (this.currentBBox.w = s.width, this.currentBBox.h = s.height, this.currentBBox.x = s.x, this.currentBBox.y = s.y, this.shapeCont.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h), this.shapeCont.style.transform = this.shapeCont.style.webkitTransform = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)")
        }
    }, createElement(HBaseElement, HTextElement), extendPrototype(ITextElement, HTextElement), HTextElement.prototype.createElements = function() {
        this.isMasked = this.checkMasks();
        var t = document.createElement("div");
        if (styleDiv(t), this.layerElement = t, this.transformedElement = t, this.isMasked) {
            this.renderType = "svg";
            var e = document.createElementNS(svgNS, "svg");
            styleDiv(e), this.cont = e, this.compW = this.comp.data.w, this.compH = this.comp.data.h, e.setAttribute("width", this.compW), e.setAttribute("height", this.compH);
            var s = document.createElementNS(svgNS, "g");
            e.appendChild(s), t.appendChild(e), this.maskedElement = s, this.innerElem = s
        } else this.renderType = "html", this.innerElem = t;
        this.baseElement = t, this.checkParenting()
    }, HTextElement.prototype.buildNewText = function() {
        var t = this.textProperty.currentData;
        this.renderedLetters = Array.apply(null, {
            length: this.textProperty.currentData.l ? this.textProperty.currentData.l.length : 0
        });
        var e = this.innerElem.style;
        e.color = e.fill = t.fc ? this.buildColor(t.fc) : "rgba(0,0,0,0)", t.sc && (e.stroke = this.buildColor(t.sc), e.strokeWidth = t.sw + "px");
        var s = this.globalData.fontManager.getFontByName(t.f);
        if (!this.globalData.fontManager.chars)
            if (e.fontSize = t.s + "px", e.lineHeight = t.s + "px", s.fClass) this.innerElem.className = s.fClass;
            else {
                e.fontFamily = s.fFamily;
                var r = t.fWeight,
                    i = t.fStyle;
                e.fontStyle = i, e.fontWeight = r
            }
        var a, n, o = t.l;
        n = o.length;
        var h, l, p, m, f = this.mHelper,
            c = "",
            d = 0;
        for (a = 0; n > a; a += 1) {
            if (this.globalData.fontManager.chars ? (this.textPaths[d] ? h = this.textPaths[d] : (h = document.createElementNS(svgNS, "path"), h.setAttribute("stroke-linecap", "butt"), h.setAttribute("stroke-linejoin", "round"), h.setAttribute("stroke-miterlimit", "4")), this.isMasked || (this.textSpans[d] ? (l = this.textSpans[d], p = l.children[0]) : (l = document.createElement("div"), p = document.createElementNS(svgNS, "svg"), p.appendChild(h), styleDiv(l)))) : this.isMasked ? h = this.textPaths[d] ? this.textPaths[d] : document.createElementNS(svgNS, "text") : this.textSpans[d] ? (l = this.textSpans[d], h = this.textPaths[d]) : (l = document.createElement("span"), styleDiv(l), h = document.createElement("span"), styleDiv(h), l.appendChild(h)), this.globalData.fontManager.chars) {
                var u, y = this.globalData.fontManager.getCharData(t.t.charAt(a), s.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily);
                if (u = y ? y.data : null, f.reset(), u && u.shapes && (m = u.shapes[0].it, f.scale(t.s / 100, t.s / 100), c = this.createPathShape(f, m), h.setAttribute("d", c)), this.isMasked) this.innerElem.appendChild(h);
                else if (this.innerElem.appendChild(l), u && u.shapes) {
                    document.body.appendChild(p);
                    var g = p.getBBox();
                    p.setAttribute("width", g.width + 2), p.setAttribute("height", g.height + 2), p.setAttribute("viewBox", g.x - 1 + " " + (g.y - 1) + " " + (g.width + 2) + " " + (g.height + 2)), p.style.transform = p.style.webkitTransform = "translate(" + (g.x - 1) + "px," + (g.y - 1) + "px)", o[a].yOffset = g.y - 1, l.appendChild(p)
                } else p.setAttribute("width", 1), p.setAttribute("height", 1)
            } else h.textContent = o[a].val, h.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), this.isMasked ? this.innerElem.appendChild(h) : (this.innerElem.appendChild(l), h.style.transform = h.style.webkitTransform = "translate3d(0," + -t.s / 1.2 + "px,0)");
            this.textSpans[d] = this.isMasked ? h : l, this.textSpans[d].style.display = "block", this.textPaths[d] = h, d += 1
        }
        for (; d < this.textSpans.length;) this.textSpans[d].style.display = "none", d += 1
    }, HTextElement.prototype.hide = SVGTextElement.prototype.hide, HTextElement.prototype.renderFrame = function(t) {
        var e = this._parent.renderFrame.call(this, t);
        if (e === !1) return void this.hide();
        if (this.hidden && (this.hidden = !1, this.innerElem.style.display = "block", this.layerElement.style.display = "block"), this.data.singleShape) {
            if (!this.firstFrame && !this.lettersChangedFlag) return;
            this.isMasked && this.finalTransform.matMdf && (this.cont.setAttribute("viewBox", -this.finalTransform.mProp.p.v[0] + " " + -this.finalTransform.mProp.p.v[1] + " " + this.compW + " " + this.compH), this.cont.style.transform = this.cont.style.webkitTransform = "translate(" + -this.finalTransform.mProp.p.v[0] + "px," + -this.finalTransform.mProp.p.v[1] + "px)")
        }
        if (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag) {
            var s, r, i = 0,
                a = this.textAnimator.renderedLetters,
                n = this.textProperty.currentData.l;
            r = n.length;
            var o, h, l;
            for (s = 0; r > s; s += 1) n[s].n ? i += 1 : (h = this.textSpans[s], l = this.textPaths[s], o = a[i], i += 1, this.isMasked ? h.setAttribute("transform", o.m) : h.style.transform = h.style.webkitTransform = o.m, h.style.opacity = o.o, o.sw && l.setAttribute("stroke-width", o.sw), o.sc && l.setAttribute("stroke", o.sc), o.fc && (l.setAttribute("fill", o.fc), l.style.color = o.fc));
            if (this.isVisible && (this.elemMdf || this.firstFrame) && this.innerElem.getBBox) {
                var p = this.innerElem.getBBox();
                this.currentBBox.w !== p.width && (this.currentBBox.w = p.width, this.cont.setAttribute("width", p.width)), this.currentBBox.h !== p.height && (this.currentBBox.h = p.height, this.cont.setAttribute("height", p.height));
                var m = 1;
                (this.currentBBox.w !== p.width + 2 * m || this.currentBBox.h !== p.height + 2 * m || this.currentBBox.x !== p.x - m || this.currentBBox.y !== p.y - m) && (this.currentBBox.w = p.width + 2 * m, this.currentBBox.h = p.height + 2 * m, this.currentBBox.x = p.x - m, this.currentBBox.y = p.y - m, this.cont.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h), this.cont.style.transform = this.cont.style.webkitTransform = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)")
            }
            this.firstFrame && (this.firstFrame = !1)
        }
    }, createElement(HBaseElement, HImageElement), HImageElement.prototype.createElements = function() {
        var t = this.globalData.getAssetsPath(this.assetData),
            e = new Image;
        if (this.data.hasMask) {
            var s = document.createElement("div");
            styleDiv(s);
            var r = document.createElementNS(svgNS, "svg");
            styleDiv(r), r.setAttribute("width", this.assetData.w), r.setAttribute("height", this.assetData.h), s.appendChild(r), this.imageElem = document.createElementNS(svgNS, "image"), this.imageElem.setAttribute("width", this.assetData.w + "px"), this.imageElem.setAttribute("height", this.assetData.h + "px"), this.imageElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), r.appendChild(this.imageElem), this.layerElement = s, this.transformedElement = s, this.baseElement = s, this.innerElem = s, this.maskedElement = this.imageElem
        } else styleDiv(e), this.layerElement = e, this.baseElement = e, this.innerElem = e, this.transformedElement = e;
        e.src = t, this.data.ln && this.innerElem.setAttribute("id", this.data.ln), this.checkParenting()
    }, HImageElement.prototype.show = HSolidElement.prototype.show, HImageElement.prototype.hide = HSolidElement.prototype.hide, HImageElement.prototype.renderFrame = HSolidElement.prototype.renderFrame, HImageElement.prototype.destroy = HSolidElement.prototype.destroy, createElement(HBaseElement, HCameraElement), HCameraElement.prototype.setup = function() {
        var t, e, s = this.comp.threeDElements.length;
        for (t = 0; s > t; t += 1) e = this.comp.threeDElements[t], e.perspectiveElem.style.perspective = e.perspectiveElem.style.webkitPerspective = this.pe.v + "px", e.container.style.transformOrigin = e.container.style.mozTransformOrigin = e.container.style.webkitTransformOrigin = "0px 0px 0px", e.perspectiveElem.style.transform = e.perspectiveElem.style.webkitTransform = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)"
    }, HCameraElement.prototype.createElements = function() {}, HCameraElement.prototype.hide = function() {}, HCameraElement.prototype.renderFrame = function() {
        var t, e, s = this.firstFrame;
        if (this.hierarchy)
            for (e = this.hierarchy.length, t = 0; e > t; t += 1) s = this.hierarchy[t].finalTransform.mProp.mdf ? !0 : s;
        if (s || this.p && this.p.mdf || this.px && (this.px.mdf || this.py.mdf || this.pz.mdf) || this.rx.mdf || this.ry.mdf || this.rz.mdf || this.or.mdf || this.a && this.a.mdf) {
            if (this.mat.reset(), this.p ? this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2]) : this.mat.translate(-this.px.v, -this.py.v, this.pz.v), this.a) {
                var r = [this.p.v[0] - this.a.v[0], this.p.v[1] - this.a.v[1], this.p.v[2] - this.a.v[2]],
                    i = Math.sqrt(Math.pow(r[0], 2) + Math.pow(r[1], 2) + Math.pow(r[2], 2)),
                    a = [r[0] / i, r[1] / i, r[2] / i],
                    n = Math.sqrt(a[2] * a[2] + a[0] * a[0]),
                    o = Math.atan2(a[1], n),
                    h = Math.atan2(a[0], -a[2]);
                this.mat.rotateY(h).rotateX(-o)
            }
            if (this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v), this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]), this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0), this.mat.translate(0, 0, this.pe.v), this.hierarchy) {
                var l;
                for (e = this.hierarchy.length, t = 0; e > t; t += 1) l = this.hierarchy[t].finalTransform.mProp.iv.props, this.mat.transform(l[0], l[1], l[2], l[3], l[4], l[5], l[6], l[7], l[8], l[9], l[10], l[11], -l[12], -l[13], l[14], l[15])
            }
            e = this.comp.threeDElements.length;
            var p;
            for (t = 0; e > t; t += 1) p = this.comp.threeDElements[t], p.container.style.transform = p.container.style.webkitTransform = this.mat.toCSS()
        }
        this.firstFrame = !1
    }, HCameraElement.prototype.destroy = function() {};
    var Expressions = function() {
        function t(t) {
            t.renderer.compInterface = CompExpressionInterface(t.renderer), t.renderer.globalData.projectInterface.registerComposition(t.renderer)
        }
        var e = {};
        return e.initExpressions = t, e
    }();
    expressionsPlugin = Expressions,
        function() {
            function t() {
                return this.pv
            }

            function e(t, e, s) {
                if (!this.k || !this.keyframes) return this.pv;
                var r = this.comp.renderedFrame,
                    i = this.keyframes,
                    a = i[i.length - 1].t;
                if (a >= r) return this.pv;
                var n, o;
                s ? (n = e ? Math.abs(a - elem.comp.globalData.frameRate * e) : Math.max(0, a - this.elem.data.ip), o = a - n) : ((!e || e > i.length - 1) && (e = i.length - 1), o = i[i.length - 1 - e].t, n = a - o);
                var h, l, p, m = this.offsetTime || 0;
                if ("pingpong" === t.toLowerCase()) {
                    var f = Math.floor((r - o) / n);
                    if (f % 2 !== 0) return this.getValueAtTime((n - (r - o) % n + o - m) / this.comp.globalData.frameRate, 0)
                } else {
                    if ("offset" === t) {
                        var c = this.getValueAtTime(o / this.comp.globalData.frameRate, 0),
                            d = this.getValueAtTime(a / this.comp.globalData.frameRate, 0),
                            u = this.getValueAtTime(((r - o) % n + o) / this.comp.globalData.frameRate, 0),
                            y = Math.floor((r - o) / n);
                        if (this.pv.length) {
                            for (p = new Array(c.length), l = p.length, h = 0; l > h; h += 1) p[h] = (d[h] - c[h]) * y + u[h];
                            return p
                        }
                        return (d - c) * y + u
                    }
                    if ("continue" === t) {
                        var g = this.getValueAtTime(a / this.comp.globalData.frameRate, 0),
                            v = this.getValueAtTime((a - .001) / this.comp.globalData.frameRate, 0);
                        if (this.pv.length) {
                            for (p = new Array(g.length), l = p.length, h = 0; l > h; h += 1) p[h] = g[h] + (g[h] - v[h]) * ((r - a) / this.comp.globalData.frameRate) / 5e-4;
                            return p
                        }
                        return g + (g - v) * ((r - a) / .001)
                    }
                }
                return this.getValueAtTime(((r - o) % n + o - m) / this.comp.globalData.frameRate, 0)
            }

            function s(t, e, s) {
                if (!this.k) return this.pv;
                var r = time * elem.comp.globalData.frameRate,
                    i = this.keyframes,
                    a = i[0].t,
                    n = this.offsetTime || 0;
                if (r >= a) return this.pv;
                var o, h;
                s ? (o = e ? Math.abs(elem.comp.globalData.frameRate * e) : Math.max(0, this.elem.data.op - a), h = a + o) : ((!e || e > i.length - 1) && (e = i.length - 1), h = i[e].t, o = h - a);
                var l, p, m;
                if ("pingpong" === t) {
                    var f = Math.floor((a - r) / o);
                    if (f % 2 === 0) return this.getValueAtTime(((a - r) % o + a - n) / this.comp.globalData.frameRate, 0)
                } else {
                    if ("offset" === t) {
                        var c = this.getValueAtTime(a / this.comp.globalData.frameRate, 0),
                            d = this.getValueAtTime(h / this.comp.globalData.frameRate, 0),
                            u = this.getValueAtTime((o - (a - r) % o + a) / this.comp.globalData.frameRate, 0),
                            y = Math.floor((a - r) / o) + 1;
                        if (this.pv.length) {
                            for (m = new Array(c.length), p = m.length, l = 0; p > l; l += 1) m[l] = u[l] - (d[l] - c[l]) * y;
                            return m
                        }
                        return u - (d - c) * y
                    }
                    if ("continue" === t) {
                        var g = this.getValueAtTime(a / this.comp.globalData.frameRate, 0),
                            v = this.getValueAtTime((a + .001) / this.comp.globalData.frameRate, 0);
                        if (this.pv.length) {
                            for (m = new Array(g.length), p = m.length, l = 0; p > l; l += 1) m[l] = g[l] + (g[l] - v[l]) * (a - r) / .001;
                            return m
                        }
                        return g + (g - v) * (a - r) / .001
                    }
                }
                return this.getValueAtTime((o - (a - r) % o + a - n) / this.comp.globalData.frameRate, 0)
            }

            function r(t) {
                if (this._cachingAtTime || (this._cachingAtTime = {
                        lastValue: -99999,
                        lastIndex: 0
                    }), t !== this._cachingAtTime.lastFrame) {
                    t *= this.elem.globalData.frameRate, t -= this.offsetTime;
                    var e = this._caching.lastFrame < t ? this._caching.lastIndex : 0,
                        s = this.interpolateValue(t, e, this.pv, this._cachingAtTime);
                    this._cachingAtTime.lastIndex = s.iterationIndex, this._cachingAtTime.value = s.value, this._cachingAtTime.lastFrame = t
                }
                return this._cachingAtTime.value
            }

            function i(t) {
                if (void 0 !== this.vel) return this.vel;
                var e, s = -.01,
                    r = this.getValueAtTime(t),
                    i = this.getValueAtTime(t + s);
                if (r.length) {
                    e = Array.apply(null, {
                        length: r.length
                    });
                    var a;
                    for (a = 0; a < r.length; a += 1) e[a] = (i[a] - r[a]) / s
                } else e = (i - r) / s;
                return e
            }

            function a(t) {
                this.propertyGroup = t
            }

            function n(t, e, s) {
                e.x && (s.k = !0, s.x = !0, s.getValue && (s.getPreValue = s.getValue), s.getValue = ExpressionManager.initiateExpression.bind(s)(t, e, s))
            }

            function o(t) {
                console.log("time:", t)
            }

            function h(t) {}

            function l(t) {
                if (this._shapeValueAtTime || (this._lastIndexAtTime = 0, this._lastTimeAtTime = -999999, this._shapeValueAtTime = shape_pool.clone(this.pv)), t !== this._lastTimeAtTime) {
                    this._lastTimeAtTime = t, t *= this.elem.globalData.frameRate;
                    var e = this.interpolateShape(t, this._lastIndexAtTime, this._shapeValueAtTime, !1);
                    this._lastIndexAtTime = e.iterationIndex
                }
                return this._shapeValueAtTime
            }
            var p = function() {
                    function e(t, e) {
                        return this.textIndex = t + 1, this.textTotal = e, this.getValue(), this.v
                    }
                    return function(s, o) {
                        this.pv = 1, this.comp = s.comp, this.elem = s, this.mult = .01, this.type = "textSelector", this.textTotal = o.totalChars, this.selectorValue = 100, this.lastValue = [1, 1, 1], n.bind(this)(s, o, this), this.getMult = e, this.getVelocityAtTime = i, this.getValueAtTime = this.kf ? r.bind(this) : t.bind(this), this.setGroupProperty = a
                    }
                }(),
                m = PropertyFactory.getProp;
            PropertyFactory.getProp = function(l, p, f, c, d) {
                var u = m(l, p, f, c, d);
                u.getValueAtTime = 2 === f ? u.dynamicProperties.length ? o.bind(u) : h.bind(u) : u.kf ? r.bind(u) : t.bind(u), u.setGroupProperty = a, u.loopOut = e, u.loopIn = s, u.getVelocityAtTime = i, u.numKeys = 1 === p.a ? p.k.length : 0;
                var y = u.k;
                return void 0 !== p.ix && Object.defineProperty(u, "propertyIndex", {
                    get: function() {
                        return p.ix
                    }
                }), n(l, p, u), !y && u.x && d.push(u), u
            };
            var f = ShapePropertyFactory.getConstructorFunction(),
                c = ShapePropertyFactory.getKeyframedConstructorFunction();
            f.prototype.vertices = function(t, e) {
                var s = this.v;
                void 0 !== e && (s = this.getValueAtTime(e, 0));
                var r, i = s._length,
                    a = s[t],
                    n = s.v,
                    o = Array.apply(null, {
                        length: i
                    });
                for (r = 0; i > r; r += 1) o[r] = "i" === t || "o" === t ? [a[r][0] - n[r][0], a[r][1] - n[r][1]] : [a[r][0], a[r][1]];
                return o
            }, f.prototype.points = function(t) {
                return this.vertices("v", t)
            }, f.prototype.inTangents = function(t) {
                return this.vertices("i", t)
            }, f.prototype.outTangents = function(t) {
                return this.vertices("o", t)
            }, f.prototype.isClosed = function() {
                return this.v.c
            }, f.prototype.pointOnPath = function(t, e) {
                var s = this.v;
                void 0 !== e && (s = this.getValueAtTime(e, 0)), this._segmentsLength || (this._segmentsLength = bez.getSegmentsLength(s));
                for (var r, i = this._segmentsLength, a = i.lengths, n = i.totalLength * t, o = 0, h = a.length, l = 0; h > o;) {
                    if (l + a[o].addedLength > n) {
                        r = a[o].segments;
                        var p = o,
                            m = s.c && o === h - 1 ? 0 : o + 1,
                            f = (n - l) / a[o].addedLength,
                            c = bez.getPointInSegment(s.v[p], s.v[m], s.o[p], s.i[m], f, a[o]);
                        break
                    }
                    l += a[o].addedLength, o += 1
                }
                return c || (c = s.c ? [s.v[0][0], s.v[0][1]] : [s.v[s._length - 1][0], s.v[s._length - 1][1]]), c
            }, f.prototype.vectorOnPath = function(t, e, s) {
                t = 1 == t ? this.v.c ? 0 : .999 : t;
                var r = this.pointOnPath(t, e),
                    i = this.pointOnPath(t + .001, e),
                    a = i[0] - r[0],
                    n = i[1] - r[1],
                    o = Math.sqrt(Math.pow(a, 2) + Math.pow(n, 2)),
                    h = "tangent" === s ? [a / o, n / o] : [-n / o, a / o];
                return h
            }, f.prototype.tangentOnPath = function(t, e) {
                return this.vectorOnPath(t, e, "tangent")
            }, f.prototype.normalOnPath = function(t, e) {
                return this.vectorOnPath(t, e, "normal")
            }, f.prototype.setGroupProperty = a, f.prototype.getValueAtTime = t, c.prototype.vertices = f.prototype.vertices, c.prototype.points = f.prototype.points, c.prototype.inTangents = f.prototype.inTangents, c.prototype.outTangents = f.prototype.outTangents, c.prototype.isClosed = f.prototype.isClosed, c.prototype.pointOnPath = f.prototype.pointOnPath, c.prototype.vectorOnPath = f.prototype.vectorOnPath, c.prototype.tangentOnPath = f.prototype.tangentOnPath, c.prototype.normalOnPath = f.prototype.normalOnPath, c.prototype.setGroupProperty = f.prototype.setGroupProperty, c.prototype.getValueAtTime = l;
            var d = ShapePropertyFactory.getShapeProp;
            ShapePropertyFactory.getShapeProp = function(t, e, s, r, i) {
                var a = d(t, e, s, r, i),
                    o = a.k;
                return void 0 !== e.ix && Object.defineProperty(a, "propertyIndex", {
                    get: function() {
                        return e.ix
                    }
                }), 3 === s ? n(t, e.pt, a) : 4 === s && n(t, e.ks, a), !o && a.x && r.push(a), a
            };
            var u = PropertyFactory.getTextSelectorProp;
            PropertyFactory.getTextSelectorProp = function(t, e, s) {
                return 1 === e.t ? new p(t, e, s) : u(t, e, s)
            }
        }(),
        function() {
            function t() {
                return this.data.d.x ? (this.comp = this.elem.comp, this.getValue && (this.getPreValue = this.getValue), this.calculateExpression = ExpressionManager.initiateExpression.bind(this)(this.elem, this.data.d, this), this.getValue = this.getExpressionValue, !0) : !1
            }
            TextProperty.prototype.searchProperty = function() {
                return this.kf = this.searchExpressions() || this.data.d.k.length > 1, this.kf
            }, TextProperty.prototype.getExpressionValue = function(t) {
                this.calculateExpression(), this.mdf && (this.currentData.t = this.v.toString(), this.completeTextData(this.currentData))
            }, TextProperty.prototype.searchExpressions = t
        }();
    var ExpressionManager = function() {
            function duplicatePropertyValue(t, e) {
                if (e = e || 1, "number" == typeof t || t instanceof Number) return t * e;
                if (t.i) return JSON.parse(JSON.stringify(t));
                var s, r = Array.apply(null, {
                        length: t.length
                    }),
                    i = t.length;
                for (s = 0; i > s; s += 1) r[s] = t[s] * e;

                return r
            }

            function shapesEqual(t, e) {
                if (t._length !== e._length || t.c !== e.c) return !1;
                var s, r = t._length;
                for (s = 0; r > s; s += 1)
                    if (t.v[s][0] !== e.v[s][0] || t.v[s][1] !== e.v[s][1] || t.o[s][0] !== e.o[s][0] || t.o[s][1] !== e.o[s][1] || t.i[s][0] !== e.i[s][0] || t.i[s][1] !== e.i[s][1]) return !1;
                return !0
            }

            function $bm_neg(t) {
                var e = typeof t;
                if ("number" === e || "boolean" === e || t instanceof Number) return -t;
                if (t.constructor === Array) {
                    var s, r = t.length,
                        i = [];
                    for (s = 0; r > s; s += 1) i[s] = -t[s];
                    return i
                }
            }

            function sum(t, e) {
                var s = typeof t,
                    r = typeof e;
                if ("string" === s || "string" === r) return t + e;
                if (("number" === s || "boolean" === s || "string" === s || t instanceof Number) && ("number" === r || "boolean" === r || "string" === r || e instanceof Number)) return t + e;
                if (t.constructor === Array && ("number" === r || "boolean" === r || "string" === r || e instanceof Number)) return t[0] = t[0] + e, t;
                if (("number" === s || "boolean" === s || "string" === s || t instanceof Number) && e.constructor === Array) return e[0] = t + e[0], e;
                if (t.constructor === Array && e.constructor === Array) {
                    for (var i = 0, a = t.length, n = e.length, o = []; a > i || n > i;) o[i] = ("number" == typeof t[i] || t[i] instanceof Number) && ("number" == typeof e[i] || e[i] instanceof Number) ? t[i] + e[i] : void 0 == e[i] ? t[i] : t[i] || e[i], i += 1;
                    return o
                }
                return 0
            }

            function sub(t, e) {
                var s = typeof t,
                    r = typeof e;
                if (("number" === s || "boolean" === s || "string" === s || t instanceof Number) && ("number" === r || "boolean" === r || "string" === r || e instanceof Number)) return "string" === s && (t = parseInt(t)), "string" === r && (e = parseInt(e)), t - e;
                if (t.constructor === Array && ("number" === r || "boolean" === r || "string" === r || e instanceof Number)) return t[0] = t[0] - e, t;
                if (("number" === s || "boolean" === s || "string" === s || t instanceof Number) && e.constructor === Array) return e[0] = t - e[0], e;
                if (t.constructor === Array && e.constructor === Array) {
                    for (var i = 0, a = t.length, n = e.length, o = []; a > i || n > i;) o[i] = "number" == typeof t[i] || t[i] instanceof Number ? t[i] - e[i] : void 0 == e[i] ? t[i] : t[i] || e[i], i += 1;
                    return o
                }
                return 0
            }

            function mul(t, e) {
                var s, r = typeof t,
                    i = typeof e;
                if (("number" === r || "boolean" === r || "string" === r || t instanceof Number) && ("number" === i || "boolean" === i || "string" === i || e instanceof Number)) return t * e;
                var a, n;
                if (t.constructor === Array && ("number" === i || "boolean" === i || "string" === i || e instanceof Number)) {
                    for (n = t.length, s = Array.apply(null, {
                            length: n
                        }), a = 0; n > a; a += 1) s[a] = t[a] * e;
                    return s
                }
                if (("number" === r || "boolean" === r || "string" === r || t instanceof Number) && e.constructor === Array) {
                    for (n = e.length, s = Array.apply(null, {
                            length: n
                        }), a = 0; n > a; a += 1) s[a] = t * e[a];
                    return s
                }
                return 0
            }

            function div(t, e) {
                var s, r = typeof t,
                    i = typeof e;
                if (("number" === r || "boolean" === r || "string" === r || t instanceof Number) && ("number" === i || "boolean" === i || "string" === i || e instanceof Number)) return t / e;
                var a, n;
                if (t.constructor === Array && ("number" === i || "boolean" === i || "string" === i || e instanceof Number)) {
                    for (n = t.length, s = Array.apply(null, {
                            length: n
                        }), a = 0; n > a; a += 1) s[a] = t[a] / e;
                    return s
                }
                if (("number" === r || "boolean" === r || "string" === r || t instanceof Number) && e.constructor === Array) {
                    for (n = e.length, s = Array.apply(null, {
                            length: n
                        }), a = 0; n > a; a += 1) s[a] = t / e[a];
                    return s
                }
                return 0
            }

            function mod(t, e) {
                return "string" == typeof t && (t = parseInt(t)), "string" == typeof e && (e = parseInt(e)), t % e
            }

            function clamp(t, e, s) {
                if (e > s) {
                    var r = s;
                    s = e, e = r
                }
                return Math.min(Math.max(t, e), s)
            }

            function radiansToDegrees(t) {
                return t / degToRads
            }

            function degreesToRadians(t) {
                return t * degToRads
            }

            function length(t, e) {
                if ("number" == typeof t || t instanceof Number) return e = e || 0, Math.abs(t - e);
                e || (e = helperLengthArray);
                var s, r = Math.min(t.length, e.length),
                    i = 0;
                for (s = 0; r > s; s += 1) i += Math.pow(e[s] - t[s], 2);
                return Math.sqrt(i)
            }

            function normalize(t) {
                return div(t, length(t))
            }

            function rgbToHsl(t) {
                var e, s, r = t[0],
                    i = t[1],
                    a = t[2],
                    n = Math.max(r, i, a),
                    o = Math.min(r, i, a),
                    h = (n + o) / 2;
                if (n == o) e = s = 0;
                else {
                    var l = n - o;
                    switch (s = h > .5 ? l / (2 - n - o) : l / (n + o), n) {
                        case r:
                            e = (i - a) / l + (a > i ? 6 : 0);
                            break;
                        case i:
                            e = (a - r) / l + 2;
                            break;
                        case a:
                            e = (r - i) / l + 4
                    }
                    e /= 6
                }
                return [e, s, h, t[3]]
            }

            function hslToRgb(t) {
                function e(t, e, s) {
                    return 0 > s && (s += 1), s > 1 && (s -= 1), 1 / 6 > s ? t + 6 * (e - t) * s : .5 > s ? e : 2 / 3 > s ? t + (e - t) * (2 / 3 - s) * 6 : t
                }
                var s, r, i, a = t[0],
                    n = t[1],
                    o = t[2];
                if (0 == n) s = r = i = o;
                else {
                    var h = .5 > o ? o * (1 + n) : o + n - o * n,
                        l = 2 * o - h;
                    s = e(l, h, a + 1 / 3), r = e(l, h, a), i = e(l, h, a - 1 / 3)
                }
                return [s, r, i, t[3]]
            }

            function linear(t, e, s, r, i) {
                if (void 0 === r || void 0 === i) return linear(t, 0, 1, e, s);
                if (e >= t) return r;
                if (t >= s) return i;
                var a = s === e ? 0 : (t - e) / (s - e);
                if (!r.length) return r + (i - r) * a;
                var n, o = r.length,
                    h = Array.apply(null, {
                        length: o
                    });
                for (n = 0; o > n; n += 1) h[n] = r[n] + (i[n] - r[n]) * a;
                return h
            }

            function random(t, e) {
                if (void 0 === e && (void 0 === t ? (t = 0, e = 1) : (e = t, t = void 0)), e.length) {
                    var s, r = e.length;
                    t || (t = Array.apply(null, {
                        length: r
                    }));
                    var i = Array.apply(null, {
                            length: r
                        }),
                        a = BMMath.random();
                    for (s = 0; r > s; s += 1) i[s] = t[s] + a * (e[s] - t[s]);
                    return i
                }
                void 0 === t && (t = 0);
                var n = BMMath.random();
                return t + n * (e - t)
            }

            function createPath(t, e, s, r) {
                e = e && e.length ? e : t, s = s && s.length ? s : t;
                var a = shape_pool.newShape(),
                    n = t.length;
                for (a.setPathData(r, n), i = 0; i < n; i += 1) a.setTripleAt(t[i][0], t[i][1], s[i][0] + t[i][0], s[i][1] + t[i][1], e[i][0] + t[i][0], e[i][1] + t[i][1], i, !0);
                return a
            }

            function initiateExpression(elem, data, property) {
                function lookAt(t, e) {
                    var s = [e[0] - t[0], e[1] - t[1], e[2] - t[2]],
                        r = Math.atan2(s[0], Math.sqrt(s[1] * s[1] + s[2] * s[2])) / degToRads,
                        i = -Math.atan2(s[1], s[2]) / degToRads;
                    return [i, r, 0]
                }

                function easeOut(t, e, s) {
                    return -(s - e) * t * (t - 2) + e
                }

                function nearestKey(t) {
                    var e, s, r, i = data.k.length;
                    if (data.k.length && "number" != typeof data.k[0])
                        if (s = -1, t *= elem.comp.globalData.frameRate, t < data.k[0].t) s = 1, r = data.k[0].t;
                        else {
                            for (e = 0; i - 1 > e; e += 1) {
                                if (t === data.k[e].t) {
                                    s = e + 1, r = data.k[e].t;
                                    break
                                }
                                if (t > data.k[e].t && t < data.k[e + 1].t) {
                                    t - data.k[e].t > data.k[e + 1].t - t ? (s = e + 2, r = data.k[e + 1].t) : (s = e + 1, r = data.k[e].t);
                                    break
                                }
                            } - 1 === s && (s = e + 1, r = data.k[e].t)
                        } else s = 0, r = 0;
                    var a = {};
                    return a.index = s, a.time = r / elem.comp.globalData.frameRate, a
                }

                function key(t) {
                    var e, s, r;
                    if (!data.k.length || "number" == typeof data.k[0]) throw new Error("The property has no keyframe at index " + t);
                    t -= 1, e = {
                        time: data.k[t].t / elem.comp.globalData.frameRate
                    };
                    var i;
                    for (i = t !== data.k.length - 1 || data.k[t].h ? data.k[t].s : data.k[t - 1].e, r = i.length, s = 0; r > s; s += 1) e[s] = i[s];
                    return e
                }

                function framesToTime(t, e) {
                    return e || (e = elem.comp.globalData.frameRate), t / e
                }

                function timeToFrames(t, e) {
                    return t || 0 === t || (t = time), e || (e = elem.comp.globalData.frameRate), t * e
                }

                function seedRandom(t) {
                    BMMath.seedrandom(randSeed + t)
                }

                function sourceRectAtTime() {
                    return elem.sourceRectAtTime()
                }

                function executeExpression() {
                    if (_needsRandom && seedRandom(randSeed), this.frameExpressionId !== elem.globalData.frameId || "textSelector" === this.type) {
                        if (this.lock) return this.v = duplicatePropertyValue(this.pv, this.mult), !0;
                        "textSelector" === this.type && (textIndex = this.textIndex, textTotal = this.textTotal, selectorValue = this.selectorValue), thisLayer || (thisLayer = elem.layerInterface, thisComp = elem.comp.compInterface, toWorld = thisLayer.toWorld.bind(thisLayer), fromWorld = thisLayer.fromWorld.bind(thisLayer), fromComp = thisLayer.fromComp.bind(thisLayer), mask = thisLayer.mask ? thisLayer.mask.bind(thisLayer) : null, fromCompToSurface = fromComp), transform || (transform = elem.layerInterface("ADBE Transform Group"), anchorPoint = transform.anchorPoint), 4 !== elemType || content || (content = thisLayer("ADBE Root Vectors Group")), effect || (effect = thisLayer(4)), hasParent = !(!elem.hierarchy || !elem.hierarchy.length), hasParent && !parent && (parent = elem.hierarchy[0].layerInterface), this.lock = !0, this.getPreValue && this.getPreValue(), value = this.pv, time = this.comp.renderedFrame / this.comp.globalData.frameRate, needsVelocity && (velocity = velocityAtTime(time)), bindedFn(), this.frameExpressionId = elem.globalData.frameId;
                        var t, e;
                        if (this.mult)
                            if ("number" == typeof this.v || this.v instanceof Number || this.v instanceof String || "string" == typeof this.v) this.v *= this.mult;
                            else if (1 === this.v.length) this.v = this.v[0] * this.mult;
                        else
                            for (e = this.v.length, value === this.v && (this.v = 2 === e ? [value[0], value[1]] : [value[0], value[1], value[2]]), t = 0; e > t; t += 1) this.v[t] *= this.mult;
                        if (1 === this.v.length && (this.v = this.v[0]), "number" == typeof this.v || this.v instanceof Number || this.v instanceof String || "string" == typeof this.v) this.lastValue !== this.v && (this.lastValue = this.v, this.mdf = !0);
                        else if (this.v._length) shapesEqual(this.v, this.localShapeCollection.shapes[0]) || (this.mdf = !0, this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(shape_pool.clone(this.v)));
                        else
                            for (e = this.v.length, t = 0; e > t; t += 1) this.v[t] !== this.lastValue[t] && (this.lastValue[t] = this.v[t], this.mdf = !0);
                        this.lock = !1
                    }
                }
                var val = data.x,
                    needsVelocity = /velocity(?![\w\d])/.test(val),
                    _needsRandom = -1 !== val.indexOf("random"),
                    elemType = elem.data.ty,
                    transform, content, effect, thisComp = elem.comp,
                    thisProperty = property;
                elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate;
                var inPoint = elem.data.ip / elem.comp.globalData.frameRate,
                    outPoint = elem.data.op / elem.comp.globalData.frameRate,
                    width = elem.data.sw ? elem.data.sw : 0,
                    height = elem.data.sh ? elem.data.sh : 0,
                    loopIn, loop_in, loopOut, loop_out, toWorld, fromWorld, fromComp, fromCompToSurface, anchorPoint, thisLayer, thisComp, mask, valueAtTime, velocityAtTime, fn = new Function,
                    fn = eval("[function(){" + val + ";if($bm_rt.__shapeObject){this.v=shape_pool.clone($bm_rt.v);}else{this.v=$bm_rt;}}]")[0],
                    bindedFn = fn.bind(this),
                    numKeys = property.kf ? data.k.length : 0,
                    wiggle = function(t, e) {
                        var s, r, i = this.pv.length ? this.pv.length : 1,
                            a = Array.apply(null, {
                                len: i
                            });
                        for (r = 0; i > r; r += 1) a[r] = 0;
                        t = 5;
                        var n = Math.floor(time * t);
                        for (s = 0, r = 0; n > s;) {
                            for (r = 0; i > r; r += 1) a[r] += -e + 2 * e * BMMath.random();
                            s += 1
                        }
                        var o = time * t,
                            h = o - Math.floor(o),
                            l = Array.apply({
                                length: i
                            });
                        if (i > 1) {
                            for (r = 0; i > r; r += 1) l[r] = this.pv[r] + a[r] + (-e + 2 * e * BMMath.random()) * h;
                            return l
                        }
                        return this.pv + a[0] + (-e + 2 * e * BMMath.random()) * h
                    }.bind(this);
                thisProperty.loopIn && (loopIn = thisProperty.loopIn.bind(thisProperty), loop_in = loopIn), thisProperty.loopOut && (loopOut = thisProperty.loopOut.bind(thisProperty), loop_out = loopOut);
                var loopInDuration = function(t, e) {
                        return loopIn(t, e, !0)
                    }.bind(this),
                    loopOutDuration = function(t, e) {
                        return loopOut(t, e, !0)
                    }.bind(this);
                this.getValueAtTime && (valueAtTime = this.getValueAtTime.bind(this)), this.getVelocityAtTime && (velocityAtTime = this.getVelocityAtTime.bind(this));
                var comp = elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface),
                    time, velocity, value, textIndex, textTotal, selectorValue, index = elem.data.ind,
                    hasParent = !(!elem.hierarchy || !elem.hierarchy.length),
                    parent, randSeed = Math.floor(1e6 * Math.random());
                return executeExpression
            }
            var ob = {},
                Math = BMMath,
                window = null,
                document = null,
                add = sum,
                radians_to_degrees = radiansToDegrees,
                degrees_to_radians = radiansToDegrees,
                helperLengthArray = [0, 0, 0, 0, 0, 0];
            return ob.initiateExpression = initiateExpression, ob
        }(),
        ShapeExpressionInterface = function() {
            function t(t, e, s) {
                return d(t, e, s)
            }

            function e(t, e, s) {
                return y(t, e, s)
            }

            function s(t, e, s) {
                return g(t, e, s)
            }

            function r(t, e, s) {
                return v(t, e, s)
            }

            function i(t, e, s) {
                return b(t, e, s)
            }

            function a(t, e, s) {
                return E(t, e, s)
            }

            function n(t, e, s) {
                return P(t, e, s)
            }

            function o(t, e, s) {
                return x(t, e, s)
            }

            function h(t, e, s) {
                return S(t, e, s)
            }

            function l(t, e, s) {
                return C(t, e, s)
            }

            function p(t, e, s) {
                return k(t, e, s)
            }

            function m(t, e, s) {
                return A(t, e, s)
            }

            function f(t, e, s) {
                var r, i = [],
                    a = t ? t.length : 0;
                for (r = 0; a > r; r += 1) "gr" == t[r].ty ? i.push(ShapeExpressionInterface.createGroupInterface(t[r], e[r], s)) : "fl" == t[r].ty ? i.push(ShapeExpressionInterface.createFillInterface(t[r], e[r], s)) : "st" == t[r].ty ? i.push(ShapeExpressionInterface.createStrokeInterface(t[r], e[r], s)) : "tm" == t[r].ty ? i.push(ShapeExpressionInterface.createTrimInterface(t[r], e[r], s)) : "tr" == t[r].ty || ("el" == t[r].ty ? i.push(ShapeExpressionInterface.createEllipseInterface(t[r], e[r], s)) : "sr" == t[r].ty ? i.push(ShapeExpressionInterface.createStarInterface(t[r], e[r], s)) : "sh" == t[r].ty ? i.push(ShapeExpressionInterface.createPathInterface(t[r], e[r], s)) : "rc" == t[r].ty ? i.push(ShapeExpressionInterface.createRectInterface(t[r], e[r], s)) : "rd" == t[r].ty ? i.push(ShapeExpressionInterface.createRoundedInterface(t[r], e[r], s)) : "rp" == t[r].ty && i.push(ShapeExpressionInterface.createRepatearInterface(t[r], e[r], s)));
                return i
            }
            var c = {
                    createShapeInterface: t,
                    createGroupInterface: e,
                    createTrimInterface: i,
                    createStrokeInterface: r,
                    createTransformInterface: a,
                    createEllipseInterface: n,
                    createStarInterface: o,
                    createRectInterface: h,
                    createRoundedInterface: l,
                    createRepatearInterface: p,
                    createPathInterface: m,
                    createFillInterface: s
                },
                d = function() {
                    return function(t, e, s) {
                        function r(t) {
                            if ("number" == typeof t) return i[t - 1];
                            for (var e = 0, s = i.length; s > e;) {
                                if (i[e]._name === t) return i[e];
                                e += 1
                            }
                        }
                        var i;
                        return r.propertyGroup = s, i = f(t, e, r), r
                    }
                }(),
                u = function() {
                    return function(t, e, s) {
                        var r, i = function(t) {
                            for (var e = 0, s = r.length; s > e;) {
                                if (r[e]._name === t || r[e].mn === t || r[e].propertyIndex === t || r[e].ix === t || r[e].ind === t) return r[e];
                                e += 1
                            }
                            return "number" == typeof t ? r[t - 1] : void 0
                        };
                        return i.propertyGroup = function(t) {
                            return 1 === t ? i : s(t - 1)
                        }, r = f(t.it, e.it, i.propertyGroup), i.numProperties = r.length, i.propertyIndex = t.cix, i
                    }
                }(),
                y = function() {
                    return function(t, e, s) {
                        var r = function(t) {
                            switch (t) {
                                case "ADBE Vectors Group":
                                case "Contents":
                                case 2:
                                    return r.content;
                                case "ADBE Vector Transform Group":
                                case 3:
                                default:
                                    return r.transform
                            }
                        };
                        r.propertyGroup = function(t) {
                            return 1 === t ? r : s(t - 1)
                        };
                        var i = u(t, e, r.propertyGroup),
                            a = ShapeExpressionInterface.createTransformInterface(t.it[t.it.length - 1], e.it[e.it.length - 1], r.propertyGroup);
                        return r.content = i, r.transform = a, Object.defineProperty(r, "_name", {
                            get: function() {
                                return t.nm
                            }
                        }), r.numProperties = t.np, r.propertyIndex = t.ix, r.nm = t.nm, r.mn = t.mn, r
                    }
                }(),
                g = function() {
                    return function(t, e, s) {
                        function r(t) {
                            return "Color" === t || "color" === t ? r.color : "Opacity" === t || "opacity" === t ? r.opacity : void 0
                        }
                        return Object.defineProperty(r, "color", {
                            get: function() {
                                return ExpressionValue(e.c, 1 / e.c.mult, "color")
                            }
                        }), Object.defineProperty(r, "opacity", {
                            get: function() {
                                return ExpressionValue(e.o, 100)
                            }
                        }), Object.defineProperty(r, "_name", {
                            value: t.nm
                        }), Object.defineProperty(r, "mn", {
                            value: t.mn
                        }), e.c.setGroupProperty(s), e.o.setGroupProperty(s), r
                    }
                }(),
                v = function() {
                    return function(t, e, s) {
                        function r(t) {
                            return 1 === t ? c : s(t - 1)
                        }

                        function i(t) {
                            return 1 === t ? l : r(t - 1)
                        }

                        function a(s) {
                            Object.defineProperty(l, t.d[s].nm, {
                                get: function() {
                                    return ExpressionValue(e.d.dataProps[s].p)
                                }
                            })
                        }

                        function n(t) {
                            return "Color" === t || "color" === t ? n.color : "Opacity" === t || "opacity" === t ? n.opacity : "Stroke Width" === t || "stroke width" === t ? n.strokeWidth : void 0
                        }
                        var o, h = t.d ? t.d.length : 0,
                            l = {};
                        for (o = 0; h > o; o += 1) a(o), e.d.dataProps[o].p.setGroupProperty(i);
                        return Object.defineProperty(n, "color", {
                            get: function() {
                                return ExpressionValue(e.c, 1 / e.c.mult, "color")
                            }
                        }), Object.defineProperty(n, "opacity", {
                            get: function() {
                                return ExpressionValue(e.o, 100)
                            }
                        }), Object.defineProperty(n, "strokeWidth", {
                            get: function() {
                                return ExpressionValue(e.w)
                            }
                        }), Object.defineProperty(n, "dash", {
                            get: function() {
                                return l
                            }
                        }), Object.defineProperty(n, "_name", {
                            value: t.nm
                        }), Object.defineProperty(n, "mn", {
                            value: t.mn
                        }), e.c.setGroupProperty(r), e.o.setGroupProperty(r), e.w.setGroupProperty(r), n
                    }
                }(),
                b = function() {
                    return function(t, e, s) {
                        function r(t) {
                            return 1 == t ? i : s(--t)
                        }

                        function i(e) {
                            return e === t.e.ix || "End" === e || "end" === e ? i.end : e === t.s.ix ? i.start : e === t.o.ix ? i.offset : void 0
                        }
                        return i.propertyIndex = t.ix, e.s.setGroupProperty(r), e.e.setGroupProperty(r), e.o.setGroupProperty(r), i.propertyIndex = t.ix, Object.defineProperty(i, "start", {
                            get: function() {
                                return ExpressionValue(e.s, 1 / e.s.mult)
                            }
                        }), Object.defineProperty(i, "end", {
                            get: function() {
                                return ExpressionValue(e.e, 1 / e.e.mult)
                            }
                        }), Object.defineProperty(i, "offset", {
                            get: function() {
                                return ExpressionValue(e.o)
                            }
                        }), Object.defineProperty(i, "_name", {
                            get: function() {
                                return t.nm
                            }
                        }), i.mn = t.mn, i
                    }
                }(),
                E = function() {
                    return function(t, e, s) {
                        function r(t) {
                            return 1 == t ? i : s(--t)
                        }

                        function i(e) {
                            return t.a.ix === e ? i.anchorPoint : t.o.ix === e ? i.opacity : t.p.ix === e ? i.position : t.r.ix === e ? i.rotation : t.s.ix === e ? i.scale : t.sk && t.sk.ix === e ? i.skew : t.sa && t.sa.ix === e ? i.skewAxis : "Opacity" === e ? i.opacity : "Position" === e ? i.position : "Anchor Point" === e ? i.anchorPoint : "Scale" === e ? i.scale : "Rotation" === e || "ADBE Vector Rotation" === e ? i.rotation : "Skew" === e ? i.skew : "Skew Axis" === e ? i.skewAxis : void 0
                        }
                        e.transform.mProps.o.setGroupProperty(r), e.transform.mProps.p.setGroupProperty(r), e.transform.mProps.a.setGroupProperty(r), e.transform.mProps.s.setGroupProperty(r), e.transform.mProps.r.setGroupProperty(r), e.transform.mProps.sk && (e.transform.mProps.sk.setGroupProperty(r), e.transform.mProps.sa.setGroupProperty(r)), e.transform.op.setGroupProperty(r), Object.defineProperty(i, "opacity", {
                            get: function() {
                                return ExpressionValue(e.transform.mProps.o, 1 / e.transform.mProps.o.mult)
                            }
                        }), Object.defineProperty(i, "position", {
                            get: function() {
                                return ExpressionValue(e.transform.mProps.p)
                            }
                        }), Object.defineProperty(i, "anchorPoint", {
                            get: function() {
                                return ExpressionValue(e.transform.mProps.a)
                            }
                        });
                        return Object.defineProperty(i, "scale", {
                            get: function() {
                                return ExpressionValue(e.transform.mProps.s, 1 / e.transform.mProps.s.mult)
                            }
                        }), Object.defineProperty(i, "rotation", {
                            get: function() {
                                return ExpressionValue(e.transform.mProps.r, 1 / e.transform.mProps.r.mult)
                            }
                        }), Object.defineProperty(i, "skew", {
                            get: function() {
                                return ExpressionValue(e.transform.mProps.sk)
                            }
                        }), Object.defineProperty(i, "skewAxis", {
                            get: function() {
                                return ExpressionValue(e.transform.mProps.sa)
                            }
                        }), Object.defineProperty(i, "_name", {
                            get: function() {
                                return t.nm
                            }
                        }), i.ty = "tr", i.mn = t.mn, i
                    }
                }(),
                P = function() {
                    return function(t, e, s) {
                        function r(t) {
                            return 1 == t ? i : s(--t)
                        }

                        function i(e) {
                            return t.p.ix === e ? i.position : t.s.ix === e ? i.size : void 0
                        }
                        i.propertyIndex = t.ix;
                        var a = "tm" === e.sh.ty ? e.sh.prop : e.sh;
                        return a.s.setGroupProperty(r), a.p.setGroupProperty(r), Object.defineProperty(i, "size", {
                            get: function() {
                                return ExpressionValue(a.s)
                            }
                        }), Object.defineProperty(i, "position", {
                            get: function() {
                                return ExpressionValue(a.p)
                            }
                        }), Object.defineProperty(i, "_name", {
                            get: function() {
                                return t.nm
                            }
                        }), i.mn = t.mn, i
                    }
                }(),
                x = function() {
                    return function(t, e, s) {
                        function r(t) {
                            return 1 == t ? i : s(--t)
                        }

                        function i(e) {
                            return t.p.ix === e ? i.position : t.r.ix === e ? i.rotation : t.pt.ix === e ? i.points : t.or.ix === e || "ADBE Vector Star Outer Radius" === e ? i.outerRadius : t.os.ix === e ? i.outerRoundness : !t.ir || t.ir.ix !== e && "ADBE Vector Star Inner Radius" !== e ? t.is && t.is.ix === e ? i.innerRoundness : void 0 : i.innerRadius
                        }
                        var a = "tm" === e.sh.ty ? e.sh.prop : e.sh;
                        return i.propertyIndex = t.ix, a.or.setGroupProperty(r), a.os.setGroupProperty(r), a.pt.setGroupProperty(r), a.p.setGroupProperty(r), a.r.setGroupProperty(r), t.ir && (a.ir.setGroupProperty(r), a.is.setGroupProperty(r)), Object.defineProperty(i, "position", {
                            get: function() {
                                return ExpressionValue(a.p)
                            }
                        }), Object.defineProperty(i, "rotation", {
                            get: function() {
                                return ExpressionValue(a.r, 1 / a.r.mult)
                            }
                        }), Object.defineProperty(i, "points", {
                            get: function() {
                                return ExpressionValue(a.pt)
                            }
                        }), Object.defineProperty(i, "outerRadius", {
                            get: function() {
                                return ExpressionValue(a.or)
                            }
                        }), Object.defineProperty(i, "outerRoundness", {
                            get: function() {
                                return ExpressionValue(a.os)
                            }
                        }), Object.defineProperty(i, "innerRadius", {
                            get: function() {
                                return a.ir ? ExpressionValue(a.ir) : 0
                            }
                        }), Object.defineProperty(i, "innerRoundness", {
                            get: function() {
                                return a.is ? ExpressionValue(a.is, 1 / a.is.mult) : 0
                            }
                        }), Object.defineProperty(i, "_name", {
                            get: function() {
                                return t.nm
                            }
                        }), i.mn = t.mn, i
                    }
                }(),
                S = function() {
                    return function(t, e, s) {
                        function r(t) {
                            return 1 == t ? i : s(--t)
                        }

                        function i(e) {
                            return t.p.ix === e ? i.position : t.r.ix === e ? i.roundness : t.s.ix === e || "Size" === e ? i.size : void 0
                        }
                        var a = "tm" === e.sh.ty ? e.sh.prop : e.sh;
                        return i.propertyIndex = t.ix, a.p.setGroupProperty(r), a.s.setGroupProperty(r), a.r.setGroupProperty(r), Object.defineProperty(i, "position", {
                            get: function() {
                                return ExpressionValue(a.p)
                            }
                        }), Object.defineProperty(i, "roundness", {
                            get: function() {
                                return ExpressionValue(a.r)
                            }
                        }), Object.defineProperty(i, "size", {
                            get: function() {
                                return ExpressionValue(a.s)
                            }
                        }), Object.defineProperty(i, "_name", {
                            get: function() {
                                return t.nm
                            }
                        }), i.mn = t.mn, i
                    }
                }(),
                C = function() {
                    return function(t, e, s) {
                        function r(t) {
                            return 1 == t ? i : s(--t)
                        }

                        function i(e) {
                            return t.r.ix === e || "Round Corners 1" === e ? i.radius : void 0
                        }
                        var a = e;
                        return i.propertyIndex = t.ix, a.rd.setGroupProperty(r), Object.defineProperty(i, "radius", {
                            get: function() {
                                return ExpressionValue(a.rd)
                            }
                        }), Object.defineProperty(i, "_name", {
                            get: function() {
                                return t.nm
                            }
                        }), i.mn = t.mn, i
                    }
                }(),
                k = function() {
                    return function(t, e, s) {
                        function r(t) {
                            return 1 == t ? i : s(--t)
                        }

                        function i(e) {
                            return t.c.ix === e || "Copies" === e ? i.copies : t.o.ix === e || "Offset" === e ? i.offset : void 0
                        }
                        var a = e;
                        return i.propertyIndex = t.ix, a.c.setGroupProperty(r), a.o.setGroupProperty(r), Object.defineProperty(i, "copies", {
                            get: function() {
                                return ExpressionValue(a.c)
                            }
                        }), Object.defineProperty(i, "offset", {
                            get: function() {
                                return ExpressionValue(a.o)
                            }
                        }), Object.defineProperty(i, "_name", {
                            get: function() {
                                return t.nm
                            }
                        }), i.mn = t.mn, i
                    }
                }(),
                A = function() {
                    return function(t, e, s) {
                        function r(t) {
                            return 1 == t ? i : s(--t)
                        }

                        function i(t) {
                            return "Shape" === t || "shape" === t || "Path" === t || "path" === t || "ADBE Vector Shape" === t || 2 === t ? i.path : void 0
                        }
                        var a = e.sh;
                        return a.setGroupProperty(r), Object.defineProperty(i, "path", {
                            get: function() {
                                return a.k && a.getValue(), a
                            }
                        }), Object.defineProperty(i, "shape", {
                            get: function() {
                                return a.k && a.getValue(), a
                            }
                        }), Object.defineProperty(i, "_name", {
                            value: t.nm
                        }), Object.defineProperty(i, "ix", {
                            value: t.ix
                        }), Object.defineProperty(i, "mn", {
                            value: t.mn
                        }), i
                    }
                }();
            return c
        }(),
        TextExpressionInterface = function() {
            return function(t) {
                function e() {}
                var s, r;
                return Object.defineProperty(e, "sourceText", {
                    get: function() {
                        var e = t.textProperty.currentData.t;
                        return t.textProperty.currentData.t !== s && (t.textProperty.currentData.t = s, r = new String(e), r.value = e ? e : new String(e)), r
                    }
                }), e
            }
        }(),
        LayerExpressionInterface = function() {
            function t(t, e) {
                var s = new Matrix;
                s.reset();
                var r;
                if (r = e ? this._elem.finalTransform.mProp : this._elem.finalTransform.mProp, r.applyToMatrix(s), this._elem.hierarchy && this._elem.hierarchy.length) {
                    var i, a = this._elem.hierarchy.length;
                    for (i = 0; a > i; i += 1) this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(s);
                    return s.applyToPointArray(t[0], t[1], t[2] || 0)
                }
                return s.applyToPointArray(t[0], t[1], t[2] || 0)
            }

            function e(t, e) {
                var s = new Matrix;
                s.reset();
                var r;
                if (r = e ? this._elem.finalTransform.mProp : this._elem.finalTransform.mProp, r.applyToMatrix(s), this._elem.hierarchy && this._elem.hierarchy.length) {
                    var i, a = this._elem.hierarchy.length;
                    for (i = 0; a > i; i += 1) this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(s);
                    return s.inversePoint(t)
                }
                return s.inversePoint(t)
            }

            function s(t) {
                var e = new Matrix;
                if (e.reset(), this._elem.finalTransform.mProp.applyToMatrix(e), this._elem.hierarchy && this._elem.hierarchy.length) {
                    var s, r = this._elem.hierarchy.length;
                    for (s = 0; r > s; s += 1) this._elem.hierarchy[s].finalTransform.mProp.applyToMatrix(e);
                    return e.inversePoint(t)
                }
                return e.inversePoint(t)
            }
            return function(r) {
                function i(t) {
                    n.mask = new MaskManagerInterface(t, r)
                }

                function a(t) {
                    n.effect = t
                }

                function n(t) {
                    switch (t) {
                        case "ADBE Root Vectors Group":
                        case "Contents":
                        case 2:
                            return n.shapeInterface;
                        case 1:
                        case 6:
                        case "Transform":
                        case "transform":
                        case "ADBE Transform Group":
                            return o;
                        case 4:
                        case "ADBE Effect Parade":
                            return n.effect
                    }
                }
                var o = TransformExpressionInterface(r.transform);
                return n.toWorld = t, n.fromWorld = e, n.toComp = t, n.fromComp = s, n.sourceRectAtTime = r.sourceRectAtTime.bind(r), n._elem = r, Object.defineProperty(n, "hasParent", {
                    get: function() {
                        return !!r.hierarchy
                    }
                }), Object.defineProperty(n, "parent", {
                    get: function() {
                        return r.hierarchy[0].layerInterface
                    }
                }), Object.defineProperty(n, "rotation", {
                    get: function() {
                        return o.rotation
                    }
                }), Object.defineProperty(n, "scale", {
                    get: function() {
                        return o.scale
                    }
                }), Object.defineProperty(n, "position", {
                    get: function() {
                        return o.position
                    }
                }), Object.defineProperty(n, "anchorPoint", {
                    get: function() {
                        return o.anchorPoint
                    }
                }), Object.defineProperty(n, "transform", {
                    get: function() {
                        return o
                    }
                }), Object.defineProperty(n, "width", {
                    get: function() {
                        return 0 === r.data.ty ? r.data.w : 100
                    }
                }), Object.defineProperty(n, "height", {
                    get: function() {
                        return 0 === r.data.ty ? r.data.h : 100
                    }
                }), Object.defineProperty(n, "source", {
                    get: function() {
                        return r.data.refId
                    }
                }), Object.defineProperty(n, "index", {
                    get: function() {
                        return r.data.ind
                    }
                }), Object.defineProperty(n, "_name", {
                    value: r.data.nm
                }), Object.defineProperty(n, "content", {
                    get: function() {
                        return n.shapeInterface
                    }
                }), Object.defineProperty(n, "active", {
                    get: function() {
                        return r.isVisible
                    }
                }), Object.defineProperty(n, "text", {
                    get: function() {
                        return n.textInterface
                    }
                }), n.registerMaskInterface = i, n.registerEffectsInterface = a, n
            }
        }(),
        CompExpressionInterface = function() {
            return function(t) {
                function e(e) {
                    for (var s = 0, r = t.layers.length; r > s;) {
                        if (t.layers[s].nm === e || t.layers[s].ind === e) return t.elements[s].layerInterface;
                        s += 1
                    }
                    return {
                        active: !1
                    }
                }
                return Object.defineProperty(e, "_name", {
                    value: t.data.nm
                }), e.layer = e, e.pixelAspect = 1, e.height = t.globalData.compSize.h, e.width = t.globalData.compSize.w, e.pixelAspect = 1, e.frameDuration = 1 / t.globalData.frameRate, e
            }
        }(),
        TransformExpressionInterface = function() {
            return function(t) {
                function e(s) {
                    switch (s) {
                        case "scale":
                        case "Scale":
                        case "ADBE Scale":
                        case 6:
                            return e.scale;
                        case "rotation":
                        case "Rotation":
                        case "ADBE Rotation":
                        case "ADBE Rotate Z":
                        case 10:
                            return e.rotation;
                        case "position":
                        case "Position":
                        case "ADBE Position":
                        case 2:
                            return t.position;
                        case "anchorPoint":
                        case "AnchorPoint":
                        case "Anchor Point":
                        case "ADBE AnchorPoint":
                        case 1:
                            return e.anchorPoint;
                        case "opacity":
                        case "Opacity":
                        case 11:
                            return e.opacity
                    }
                }
                return Object.defineProperty(e, "rotation", {
                    get: function() {
                        return t.rotation
                    }
                }), Object.defineProperty(e, "scale", {
                    get: function() {
                        return t.scale
                    }
                }), Object.defineProperty(e, "position", {
                    get: function() {
                        return t.position
                    }
                }), Object.defineProperty(e, "xPosition", {
                    get: function() {
                        return t.xPosition
                    }
                }), Object.defineProperty(e, "yPosition", {
                    get: function() {
                        return t.yPosition
                    }
                }), Object.defineProperty(e, "anchorPoint", {
                    get: function() {
                        return t.anchorPoint
                    }
                }), Object.defineProperty(e, "opacity", {
                    get: function() {
                        return t.opacity
                    }
                }), Object.defineProperty(e, "skew", {
                    get: function() {
                        return t.skew
                    }
                }), Object.defineProperty(e, "skewAxis", {
                    get: function() {
                        return t.skewAxis
                    }
                }), e
            }
        }(),
        ProjectInterface = function() {
            function t(t) {
                this.compositions.push(t)
            }
            return function() {
                function e(t) {
                    for (var e = 0, s = this.compositions.length; s > e;) {
                        if (this.compositions[e].data && this.compositions[e].data.nm === t) return this.compositions[e].prepareFrame && this.compositions[e].prepareFrame(this.currentFrame), this.compositions[e].compInterface;
                        e += 1
                    }
                }
                return e.compositions = [], e.currentFrame = 0, e.registerComposition = t, e
            }
        }(),
        EffectsExpressionInterface = function() {
            function t(t, s) {
                if (t.effects) {
                    var r, i = [],
                        a = t.data.ef,
                        n = t.effects.effectElements.length;
                    for (r = 0; n > r; r += 1) i.push(e(a[r], t.effects.effectElements[r], s, t));
                    return function(e) {
                        for (var s = t.data.ef, r = 0, a = s.length; a > r;) {
                            if (e === s[r].nm || e === s[r].mn || e === s[r].ix) return i[r];
                            r += 1
                        }
                    }
                }
            }

            function e(t, r, i, a) {
                function n(t) {
                    return 1 === t ? p : i(t - 1)
                }
                var o, h = [],
                    l = t.ef.length;
                for (o = 0; l > o; o += 1) h.push(5 === t.ef[o].ty ? e(t.ef[o], r.effectElements[o], r.effectElements[o].propertyGroup, a) : s(r.effectElements[o], t.ef[o].ty, a, n));
                var p = function(e) {
                    for (var s = t.ef, r = 0, i = s.length; i > r;) {
                        if (e === s[r].nm || e === s[r].mn || e === s[r].ix) return 5 === s[r].ty ? h[r] : h[r]();
                        r += 1
                    }
                    return h[0]()
                };
                return p.propertyGroup = n, "ADBE Color Control" === t.mn && Object.defineProperty(p, "color", {
                    get: function() {
                        return h[0]()
                    }
                }), Object.defineProperty(p, "numProperties", {
                    get: function() {
                        return t.np
                    }
                }), p.active = 0 !== t.en, p
            }

            function s(t, e, s, r) {
                function i() {
                    return 10 === e ? s.comp.compInterface(t.p.v) : ExpressionValue(t.p)
                }
                return t.p.setGroupProperty && t.p.setGroupProperty(r), i
            }
            var r = {
                createEffectsInterface: t
            };
            return r
        }(),
        MaskManagerInterface = function() {
            function t(t, e) {
                this._mask = t, this._data = e
            }
            Object.defineProperty(t.prototype, "maskPath", {
                get: function() {
                    return this._mask.prop.k && this._mask.prop.getValue(), this._mask.prop
                }
            });
            var e = function(e, s) {
                var r, i = Array.apply(null, {
                        length: e.viewData.length
                    }),
                    a = e.viewData.length;
                for (r = 0; a > r; r += 1) i[r] = new t(e.viewData[r], e.masksProperties[r]);
                var n = function(t) {
                    for (r = 0; a > r;) {
                        if (e.masksProperties[r].nm === t) return i[r];
                        r += 1
                    }
                };
                return n
            };
            return e
        }(),
        ExpressionValue = function() {
            return function(t, e, s) {
                var r;
                t.k && t.getValue();
                var i, a, n;
                if (s) {
                    if ("color" === s) {
                        for (a = 4, r = Array.apply(null, {
                                length: a
                            }), n = Array.apply(null, {
                                length: a
                            }), i = 0; a > i; i += 1) r[i] = n[i] = e && 3 > i ? t.v[i] * e : 1;
                        r.value = n
                    }
                } else if ("number" == typeof t.v || t.v instanceof Number) r = new Number(e ? t.v * e : t.v), r.value = e ? t.v * e : t.v;
                else {
                    for (a = t.v.length, r = Array.apply(null, {
                            length: a
                        }), n = Array.apply(null, {
                            length: a
                        }), i = 0; a > i; i += 1) r[i] = n[i] = e ? t.v[i] * e : t.v[i];
                    r.value = n
                }
                return r.numKeys = t.keyframes ? t.keyframes.length : 0, r.key = function(e) {
                    return r.numKeys ? t.keyframes[e - 1].t : 0
                }, r.valueAtTime = t.getValueAtTime, r.propertyGroup = t.propertyGroup, r
            }
        }();
    GroupEffect.prototype.getValue = function() {
        this.mdf = !1;
        var t, e = this.dynamicProperties.length;
        for (t = 0; e > t; t += 1) this.dynamicProperties[t].getValue(), this.mdf = this.dynamicProperties[t].mdf ? !0 : this.mdf
    }, GroupEffect.prototype.init = function(t, e, s) {
        this.data = t, this.mdf = !1, this.effectElements = [];
        var r, i, a = this.data.ef.length,
            n = this.data.ef;
        for (r = 0; a > r; r += 1) switch (n[r].ty) {
            case 0:
                i = new SliderEffect(n[r], e, s), this.effectElements.push(i);
                break;
            case 1:
                i = new AngleEffect(n[r], e, s), this.effectElements.push(i);
                break;
            case 2:
                i = new ColorEffect(n[r], e, s), this.effectElements.push(i);
                break;
            case 3:
                i = new PointEffect(n[r], e, s), this.effectElements.push(i);
                break;
            case 4:
            case 7:
                i = new CheckboxEffect(n[r], e, s), this.effectElements.push(i);
                break;
            case 10:
                i = new LayerIndexEffect(n[r], e, s), this.effectElements.push(i);
                break;
            case 11:
                i = new MaskIndexEffect(n[r], e, s), this.effectElements.push(i);
                break;
            case 5:
                i = new EffectsManager(n[r], e, s), this.effectElements.push(i);
                break;
            case 6:
                i = new NoValueEffect(n[r], e, s), this.effectElements.push(i)
        }
    };
    var bodymovinjs = {};
    bodymovinjs.play = play, bodymovinjs.pause = pause, bodymovinjs.setLocationHref = setLocationHref, bodymovinjs.togglePause = togglePause, bodymovinjs.setSpeed = setSpeed, bodymovinjs.setDirection = setDirection, bodymovinjs.stop = stop, bodymovinjs.moveFrame = moveFrame, bodymovinjs.searchAnimations = searchAnimations, bodymovinjs.registerAnimation = registerAnimation, bodymovinjs.loadAnimation = loadAnimation, bodymovinjs.setSubframeRendering = setSubframeRendering, bodymovinjs.resize = resize, bodymovinjs.start = start, bodymovinjs.goToAndStop = goToAndStop, bodymovinjs.destroy = destroy, bodymovinjs.setQuality = setQuality, bodymovinjs.inBrowser = inBrowser, bodymovinjs.installPlugin = installPlugin, bodymovinjs.__getFactory = getFactory, bodymovinjs.version = "4.13.0";
    var standalone = "__[STANDALONE]__",
        animationData = "__[ANIMATIONDATA]__",
        renderer = "";
    if (standalone) {
        var scripts = document.getElementsByTagName("script"),
            index = scripts.length - 1,
            myScript = scripts[index] || {
                src: ""
            },
            queryString = myScript.src.replace(/^[^\?]+\??/, "");
        renderer = getQueryVariable("renderer")
    }
    var readyStateCheckInterval = setInterval(checkReady, 100);
    return bodymovinjs
});
//# sourceMappingURL=/sm/bd736293839cd769f736be89b6db6a3830cc8ac35944b99090286187bcc200f3.map