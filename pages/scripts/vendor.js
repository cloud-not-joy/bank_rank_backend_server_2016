"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*! jQuery v2.2.4 | (c) jQuery Foundation | jquery.org/license */
!function (a, b) {
  "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = a.document ? b(a, !0) : function (a) {
    if (!a.document) throw new Error("jQuery requires a window with a document");return b(a);
  } : b(a);
}("undefined" != typeof window ? window : undefined, function (a, b) {
  var c = [],
      d = a.document,
      e = c.slice,
      f = c.concat,
      g = c.push,
      h = c.indexOf,
      i = {},
      j = i.toString,
      k = i.hasOwnProperty,
      l = {},
      m = "2.2.4",
      n = function n(a, b) {
    return new n.fn.init(a, b);
  },
      o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      p = /^-ms-/,
      q = /-([\da-z])/gi,
      r = function r(a, b) {
    return b.toUpperCase();
  };n.fn = n.prototype = { jquery: m, constructor: n, selector: "", length: 0, toArray: function toArray() {
      return e.call(this);
    }, get: function get(a) {
      return null != a ? 0 > a ? this[a + this.length] : this[a] : e.call(this);
    }, pushStack: function pushStack(a) {
      var b = n.merge(this.constructor(), a);return b.prevObject = this, b.context = this.context, b;
    }, each: function each(a) {
      return n.each(this, a);
    }, map: function map(a) {
      return this.pushStack(n.map(this, function (b, c) {
        return a.call(b, c, b);
      }));
    }, slice: function slice() {
      return this.pushStack(e.apply(this, arguments));
    }, first: function first() {
      return this.eq(0);
    }, last: function last() {
      return this.eq(-1);
    }, eq: function eq(a) {
      var b = this.length,
          c = +a + (0 > a ? b : 0);return this.pushStack(c >= 0 && b > c ? [this[c]] : []);
    }, end: function end() {
      return this.prevObject || this.constructor();
    }, push: g, sort: c.sort, splice: c.splice }, n.extend = n.fn.extend = function () {
    var a,
        b,
        c,
        d,
        e,
        f,
        g = arguments[0] || {},
        h = 1,
        i = arguments.length,
        j = !1;for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == (typeof g === "undefined" ? "undefined" : _typeof(g)) || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++) {
      if (null != (a = arguments[h])) for (b in a) {
        c = g[b], d = a[b], g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1, f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {}, g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d));
      }
    }return g;
  }, n.extend({ expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""), isReady: !0, error: function error(a) {
      throw new Error(a);
    }, noop: function noop() {}, isFunction: function isFunction(a) {
      return "function" === n.type(a);
    }, isArray: Array.isArray, isWindow: function isWindow(a) {
      return null != a && a === a.window;
    }, isNumeric: function isNumeric(a) {
      var b = a && a.toString();return !n.isArray(a) && b - parseFloat(b) + 1 >= 0;
    }, isPlainObject: function isPlainObject(a) {
      var b;if ("object" !== n.type(a) || a.nodeType || n.isWindow(a)) return !1;if (a.constructor && !k.call(a, "constructor") && !k.call(a.constructor.prototype || {}, "isPrototypeOf")) return !1;for (b in a) {}return void 0 === b || k.call(a, b);
    }, isEmptyObject: function isEmptyObject(a) {
      var b;for (b in a) {
        return !1;
      }return !0;
    }, type: function type(a) {
      return null == a ? a + "" : "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) || "function" == typeof a ? i[j.call(a)] || "object" : typeof a === "undefined" ? "undefined" : _typeof(a);
    }, globalEval: function globalEval(a) {
      var b,
          c = eval;a = n.trim(a), a && (1 === a.indexOf("use strict") ? (b = d.createElement("script"), b.text = a, d.head.appendChild(b).parentNode.removeChild(b)) : c(a));
    }, camelCase: function camelCase(a) {
      return a.replace(p, "ms-").replace(q, r);
    }, nodeName: function nodeName(a, b) {
      return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
    }, each: function each(a, b) {
      var c,
          d = 0;if (s(a)) {
        for (c = a.length; c > d; d++) {
          if (b.call(a[d], d, a[d]) === !1) break;
        }
      } else for (d in a) {
        if (b.call(a[d], d, a[d]) === !1) break;
      }return a;
    }, trim: function trim(a) {
      return null == a ? "" : (a + "").replace(o, "");
    }, makeArray: function makeArray(a, b) {
      var c = b || [];return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : g.call(c, a)), c;
    }, inArray: function inArray(a, b, c) {
      return null == b ? -1 : h.call(b, a, c);
    }, merge: function merge(a, b) {
      for (var c = +b.length, d = 0, e = a.length; c > d; d++) {
        a[e++] = b[d];
      }return a.length = e, a;
    }, grep: function grep(a, b, c) {
      for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) {
        d = !b(a[f], f), d !== h && e.push(a[f]);
      }return e;
    }, map: function map(a, b, c) {
      var d,
          e,
          g = 0,
          h = [];if (s(a)) for (d = a.length; d > g; g++) {
        e = b(a[g], g, c), null != e && h.push(e);
      } else for (g in a) {
        e = b(a[g], g, c), null != e && h.push(e);
      }return f.apply([], h);
    }, guid: 1, proxy: function proxy(a, b) {
      var c, d, f;return "string" == typeof b && (c = a[b], b = a, a = c), n.isFunction(a) ? (d = e.call(arguments, 2), f = function f() {
        return a.apply(b || this, d.concat(e.call(arguments)));
      }, f.guid = a.guid = a.guid || n.guid++, f) : void 0;
    }, now: Date.now, support: l }), "function" == typeof Symbol && (n.fn[Symbol.iterator] = c[Symbol.iterator]), n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (a, b) {
    i["[object " + b + "]"] = b.toLowerCase();
  });function s(a) {
    var b = !!a && "length" in a && a.length,
        c = n.type(a);return "function" === c || n.isWindow(a) ? !1 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a;
  }var t = function (a) {
    var b,
        c,
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q,
        r,
        s,
        t,
        u = "sizzle" + 1 * new Date(),
        v = a.document,
        w = 0,
        x = 0,
        y = ga(),
        z = ga(),
        A = ga(),
        B = function B(a, b) {
      return a === b && (l = !0), 0;
    },
        C = 1 << 31,
        D = {}.hasOwnProperty,
        E = [],
        F = E.pop,
        G = E.push,
        H = E.push,
        I = E.slice,
        J = function J(a, b) {
      for (var c = 0, d = a.length; d > c; c++) {
        if (a[c] === b) return c;
      }return -1;
    },
        K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        L = "[\\x20\\t\\r\\n\\f]",
        M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        N = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + L + "*\\]",
        O = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)",
        P = new RegExp(L + "+", "g"),
        Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
        R = new RegExp("^" + L + "*," + L + "*"),
        S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
        T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
        U = new RegExp(O),
        V = new RegExp("^" + M + "$"),
        W = { ID: new RegExp("^#(" + M + ")"), CLASS: new RegExp("^\\.(" + M + ")"), TAG: new RegExp("^(" + M + "|[*])"), ATTR: new RegExp("^" + N), PSEUDO: new RegExp("^" + O), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"), bool: new RegExp("^(?:" + K + ")$", "i"), needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i") },
        X = /^(?:input|select|textarea|button)$/i,
        Y = /^h\d$/i,
        Z = /^[^{]+\{\s*\[native \w/,
        $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        _ = /[+~]/,
        aa = /'|\\/g,
        ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
        ca = function ca(a, b, c) {
      var d = "0x" + b - 65536;return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
    },
        da = function da() {
      m();
    };try {
      H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType;
    } catch (ea) {
      H = { apply: E.length ? function (a, b) {
          G.apply(a, I.call(b));
        } : function (a, b) {
          var c = a.length,
              d = 0;while (a[c++] = b[d++]) {}a.length = c - 1;
        } };
    }function fa(a, b, d, e) {
      var f,
          h,
          j,
          k,
          l,
          o,
          r,
          s,
          w = b && b.ownerDocument,
          x = b ? b.nodeType : 9;if (d = d || [], "string" != typeof a || !a || 1 !== x && 9 !== x && 11 !== x) return d;if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
        if (11 !== x && (o = $.exec(a))) if (f = o[1]) {
          if (9 === x) {
            if (!(j = b.getElementById(f))) return d;if (j.id === f) return d.push(j), d;
          } else if (w && (j = w.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d;
        } else {
          if (o[2]) return H.apply(d, b.getElementsByTagName(a)), d;if ((f = o[3]) && c.getElementsByClassName && b.getElementsByClassName) return H.apply(d, b.getElementsByClassName(f)), d;
        }if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
          if (1 !== x) w = b, s = a;else if ("object" !== b.nodeName.toLowerCase()) {
            (k = b.getAttribute("id")) ? k = k.replace(aa, "\\$&") : b.setAttribute("id", k = u), r = g(a), h = r.length, l = V.test(k) ? "#" + k : "[id='" + k + "']";while (h--) {
              r[h] = l + " " + qa(r[h]);
            }s = r.join(","), w = _.test(a) && oa(b.parentNode) || b;
          }if (s) try {
            return H.apply(d, w.querySelectorAll(s)), d;
          } catch (y) {} finally {
            k === u && b.removeAttribute("id");
          }
        }
      }return i(a.replace(Q, "$1"), b, d, e);
    }function ga() {
      var a = [];function b(c, e) {
        return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e;
      }return b;
    }function ha(a) {
      return a[u] = !0, a;
    }function ia(a) {
      var b = n.createElement("div");try {
        return !!a(b);
      } catch (c) {
        return !1;
      } finally {
        b.parentNode && b.parentNode.removeChild(b), b = null;
      }
    }function ja(a, b) {
      var c = a.split("|"),
          e = c.length;while (e--) {
        d.attrHandle[c[e]] = b;
      }
    }function ka(a, b) {
      var c = b && a,
          d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);if (d) return d;if (c) while (c = c.nextSibling) {
        if (c === b) return -1;
      }return a ? 1 : -1;
    }function la(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();return "input" === c && b.type === a;
      };
    }function ma(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();return ("input" === c || "button" === c) && b.type === a;
      };
    }function na(a) {
      return ha(function (b) {
        return b = +b, ha(function (c, d) {
          var e,
              f = a([], c.length, b),
              g = f.length;while (g--) {
            c[e = f[g]] && (c[e] = !(d[e] = c[e]));
          }
        });
      });
    }function oa(a) {
      return a && "undefined" != typeof a.getElementsByTagName && a;
    }c = fa.support = {}, f = fa.isXML = function (a) {
      var b = a && (a.ownerDocument || a).documentElement;return b ? "HTML" !== b.nodeName : !1;
    }, m = fa.setDocument = function (a) {
      var b,
          e,
          g = a ? a.ownerDocument || a : v;return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ia(function (a) {
        return a.className = "i", !a.getAttribute("className");
      }), c.getElementsByTagName = ia(function (a) {
        return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length;
      }), c.getElementsByClassName = Z.test(n.getElementsByClassName), c.getById = ia(function (a) {
        return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length;
      }), c.getById ? (d.find.ID = function (a, b) {
        if ("undefined" != typeof b.getElementById && p) {
          var c = b.getElementById(a);return c ? [c] : [];
        }
      }, d.filter.ID = function (a) {
        var b = a.replace(ba, ca);return function (a) {
          return a.getAttribute("id") === b;
        };
      }) : (delete d.find.ID, d.filter.ID = function (a) {
        var b = a.replace(ba, ca);return function (a) {
          var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");return c && c.value === b;
        };
      }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
        return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0;
      } : function (a, b) {
        var c,
            d = [],
            e = 0,
            f = b.getElementsByTagName(a);if ("*" === a) {
          while (c = f[e++]) {
            1 === c.nodeType && d.push(c);
          }return d;
        }return f;
      }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
        return "undefined" != typeof b.getElementsByClassName && p ? b.getElementsByClassName(a) : void 0;
      }, r = [], q = [], (c.qsa = Z.test(n.querySelectorAll)) && (ia(function (a) {
        o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]");
      }), ia(function (a) {
        var b = n.createElement("input");b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:");
      })), (c.matchesSelector = Z.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ia(function (a) {
        c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", O);
      }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Z.test(o.compareDocumentPosition), t = b || Z.test(o.contains) ? function (a, b) {
        var c = 9 === a.nodeType ? a.documentElement : a,
            d = b && b.parentNode;return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
      } : function (a, b) {
        if (b) while (b = b.parentNode) {
          if (b === a) return !0;
        }return !1;
      }, B = b ? function (a, b) {
        if (a === b) return l = !0, 0;var d = !a.compareDocumentPosition - !b.compareDocumentPosition;return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1);
      } : function (a, b) {
        if (a === b) return l = !0, 0;var c,
            d = 0,
            e = a.parentNode,
            f = b.parentNode,
            g = [a],
            h = [b];if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;if (e === f) return ka(a, b);c = a;while (c = c.parentNode) {
          g.unshift(c);
        }c = b;while (c = c.parentNode) {
          h.unshift(c);
        }while (g[d] === h[d]) {
          d++;
        }return d ? ka(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0;
      }, n) : n;
    }, fa.matches = function (a, b) {
      return fa(a, null, null, b);
    }, fa.matchesSelector = function (a, b) {
      if ((a.ownerDocument || a) !== n && m(a), b = b.replace(T, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
        var d = s.call(a, b);if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d;
      } catch (e) {}return fa(b, n, null, [a]).length > 0;
    }, fa.contains = function (a, b) {
      return (a.ownerDocument || a) !== n && m(a), t(a, b);
    }, fa.attr = function (a, b) {
      (a.ownerDocument || a) !== n && m(a);var e = d.attrHandle[b.toLowerCase()],
          f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null;
    }, fa.error = function (a) {
      throw new Error("Syntax error, unrecognized expression: " + a);
    }, fa.uniqueSort = function (a) {
      var b,
          d = [],
          e = 0,
          f = 0;if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
        while (b = a[f++]) {
          b === a[f] && (e = d.push(f));
        }while (e--) {
          a.splice(d[e], 1);
        }
      }return k = null, a;
    }, e = fa.getText = function (a) {
      var b,
          c = "",
          d = 0,
          f = a.nodeType;if (f) {
        if (1 === f || 9 === f || 11 === f) {
          if ("string" == typeof a.textContent) return a.textContent;for (a = a.firstChild; a; a = a.nextSibling) {
            c += e(a);
          }
        } else if (3 === f || 4 === f) return a.nodeValue;
      } else while (b = a[d++]) {
        c += e(b);
      }return c;
    }, d = fa.selectors = { cacheLength: 50, createPseudo: ha, match: W, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function ATTR(a) {
          return a[1] = a[1].replace(ba, ca), a[3] = (a[3] || a[4] || a[5] || "").replace(ba, ca), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
        }, CHILD: function CHILD(a) {
          return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fa.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fa.error(a[0]), a;
        }, PSEUDO: function PSEUDO(a) {
          var b,
              c = !a[6] && a[2];return W.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && U.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3));
        } }, filter: { TAG: function TAG(a) {
          var b = a.replace(ba, ca).toLowerCase();return "*" === a ? function () {
            return !0;
          } : function (a) {
            return a.nodeName && a.nodeName.toLowerCase() === b;
          };
        }, CLASS: function CLASS(a) {
          var b = y[a + " "];return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function (a) {
            return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "");
          });
        }, ATTR: function ATTR(a, b, c) {
          return function (d) {
            var e = fa.attr(d, a);return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(P, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0;
          };
        }, CHILD: function CHILD(a, b, c, d, e) {
          var f = "nth" !== a.slice(0, 3),
              g = "last" !== a.slice(-4),
              h = "of-type" === b;return 1 === d && 0 === e ? function (a) {
            return !!a.parentNode;
          } : function (b, c, i) {
            var j,
                k,
                l,
                m,
                n,
                o,
                p = f !== g ? "nextSibling" : "previousSibling",
                q = b.parentNode,
                r = h && b.nodeName.toLowerCase(),
                s = !i && !h,
                t = !1;if (q) {
              if (f) {
                while (p) {
                  m = b;while (m = m[p]) {
                    if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                  }o = p = "only" === a && !o && "nextSibling";
                }return !0;
              }if (o = [g ? q.firstChild : q.lastChild], g && s) {
                m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) {
                  if (1 === m.nodeType && ++t && m === b) {
                    k[a] = [w, n, t];break;
                  }
                }
              } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1) while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) {
                if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
              }return t -= e, t === d || t % d === 0 && t / d >= 0;
            }
          };
        }, PSEUDO: function PSEUDO(a, b) {
          var c,
              e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fa.error("unsupported pseudo: " + a);return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ha(function (a, c) {
            var d,
                f = e(a, b),
                g = f.length;while (g--) {
              d = J(a, f[g]), a[d] = !(c[d] = f[g]);
            }
          }) : function (a) {
            return e(a, 0, c);
          }) : e;
        } }, pseudos: { not: ha(function (a) {
          var b = [],
              c = [],
              d = h(a.replace(Q, "$1"));return d[u] ? ha(function (a, b, c, e) {
            var f,
                g = d(a, null, e, []),
                h = a.length;while (h--) {
              (f = g[h]) && (a[h] = !(b[h] = f));
            }
          }) : function (a, e, f) {
            return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop();
          };
        }), has: ha(function (a) {
          return function (b) {
            return fa(a, b).length > 0;
          };
        }), contains: ha(function (a) {
          return a = a.replace(ba, ca), function (b) {
            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
          };
        }), lang: ha(function (a) {
          return V.test(a || "") || fa.error("unsupported lang: " + a), a = a.replace(ba, ca).toLowerCase(), function (b) {
            var c;do {
              if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
            } while ((b = b.parentNode) && 1 === b.nodeType);return !1;
          };
        }), target: function target(b) {
          var c = a.location && a.location.hash;return c && c.slice(1) === b.id;
        }, root: function root(a) {
          return a === o;
        }, focus: function focus(a) {
          return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
        }, enabled: function enabled(a) {
          return a.disabled === !1;
        }, disabled: function disabled(a) {
          return a.disabled === !0;
        }, checked: function checked(a) {
          var b = a.nodeName.toLowerCase();return "input" === b && !!a.checked || "option" === b && !!a.selected;
        }, selected: function selected(a) {
          return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
        }, empty: function empty(a) {
          for (a = a.firstChild; a; a = a.nextSibling) {
            if (a.nodeType < 6) return !1;
          }return !0;
        }, parent: function parent(a) {
          return !d.pseudos.empty(a);
        }, header: function header(a) {
          return Y.test(a.nodeName);
        }, input: function input(a) {
          return X.test(a.nodeName);
        }, button: function button(a) {
          var b = a.nodeName.toLowerCase();return "input" === b && "button" === a.type || "button" === b;
        }, text: function text(a) {
          var b;return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
        }, first: na(function () {
          return [0];
        }), last: na(function (a, b) {
          return [b - 1];
        }), eq: na(function (a, b, c) {
          return [0 > c ? c + b : c];
        }), even: na(function (a, b) {
          for (var c = 0; b > c; c += 2) {
            a.push(c);
          }return a;
        }), odd: na(function (a, b) {
          for (var c = 1; b > c; c += 2) {
            a.push(c);
          }return a;
        }), lt: na(function (a, b, c) {
          for (var d = 0 > c ? c + b : c; --d >= 0;) {
            a.push(d);
          }return a;
        }), gt: na(function (a, b, c) {
          for (var d = 0 > c ? c + b : c; ++d < b;) {
            a.push(d);
          }return a;
        }) } }, d.pseudos.nth = d.pseudos.eq;for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) {
      d.pseudos[b] = la(b);
    }for (b in { submit: !0, reset: !0 }) {
      d.pseudos[b] = ma(b);
    }function pa() {}pa.prototype = d.filters = d.pseudos, d.setFilters = new pa(), g = fa.tokenize = function (a, b) {
      var c,
          e,
          f,
          g,
          h,
          i,
          j,
          k = z[a + " "];if (k) return b ? 0 : k.slice(0);h = a, i = [], j = d.preFilter;while (h) {
        c && !(e = R.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = S.exec(h)) && (c = e.shift(), f.push({ value: c, type: e[0].replace(Q, " ") }), h = h.slice(c.length));for (g in d.filter) {
          !(e = W[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({ value: c, type: g, matches: e }), h = h.slice(c.length));
        }if (!c) break;
      }return b ? h.length : h ? fa.error(a) : z(a, i).slice(0);
    };function qa(a) {
      for (var b = 0, c = a.length, d = ""; c > b; b++) {
        d += a[b].value;
      }return d;
    }function ra(a, b, c) {
      var d = b.dir,
          e = c && "parentNode" === d,
          f = x++;return b.first ? function (b, c, f) {
        while (b = b[d]) {
          if (1 === b.nodeType || e) return a(b, c, f);
        }
      } : function (b, c, g) {
        var h,
            i,
            j,
            k = [w, f];if (g) {
          while (b = b[d]) {
            if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
          }
        } else while (b = b[d]) {
          if (1 === b.nodeType || e) {
            if (j = b[u] || (b[u] = {}), i = j[b.uniqueID] || (j[b.uniqueID] = {}), (h = i[d]) && h[0] === w && h[1] === f) return k[2] = h[2];if (i[d] = k, k[2] = a(b, c, g)) return !0;
          }
        }
      };
    }function sa(a) {
      return a.length > 1 ? function (b, c, d) {
        var e = a.length;while (e--) {
          if (!a[e](b, c, d)) return !1;
        }return !0;
      } : a[0];
    }function ta(a, b, c) {
      for (var d = 0, e = b.length; e > d; d++) {
        fa(a, b[d], c);
      }return c;
    }function ua(a, b, c, d, e) {
      for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) {
        (f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
      }return g;
    }function va(a, b, c, d, e, f) {
      return d && !d[u] && (d = va(d)), e && !e[u] && (e = va(e, f)), ha(function (f, g, h, i) {
        var j,
            k,
            l,
            m = [],
            n = [],
            o = g.length,
            p = f || ta(b || "*", h.nodeType ? [h] : h, []),
            q = !a || !f && b ? p : ua(p, m, a, h, i),
            r = c ? e || (f ? a : o || d) ? [] : g : q;if (c && c(q, r, h, i), d) {
          j = ua(r, n), d(j, [], h, i), k = j.length;while (k--) {
            (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
          }
        }if (f) {
          if (e || a) {
            if (e) {
              j = [], k = r.length;while (k--) {
                (l = r[k]) && j.push(q[k] = l);
              }e(null, r = [], j, i);
            }k = r.length;while (k--) {
              (l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));
            }
          }
        } else r = ua(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r);
      });
    }function wa(a) {
      for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ra(function (a) {
        return a === b;
      }, h, !0), l = ra(function (a) {
        return J(b, a) > -1;
      }, h, !0), m = [function (a, c, d) {
        var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));return b = null, e;
      }]; f > i; i++) {
        if (c = d.relative[a[i].type]) m = [ra(sa(m), c)];else {
          if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
            for (e = ++i; f > e; e++) {
              if (d.relative[a[e].type]) break;
            }return va(i > 1 && sa(m), i > 1 && qa(a.slice(0, i - 1).concat({ value: " " === a[i - 2].type ? "*" : "" })).replace(Q, "$1"), c, e > i && wa(a.slice(i, e)), f > e && wa(a = a.slice(e)), f > e && qa(a));
          }m.push(c);
        }
      }return sa(m);
    }function xa(a, b) {
      var c = b.length > 0,
          e = a.length > 0,
          f = function f(_f, g, h, i, k) {
        var l,
            o,
            q,
            r = 0,
            s = "0",
            t = _f && [],
            u = [],
            v = j,
            x = _f || e && d.find.TAG("*", k),
            y = w += null == v ? 1 : Math.random() || .1,
            z = x.length;for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
          if (e && l) {
            o = 0, g || l.ownerDocument === n || (m(l), h = !p);while (q = a[o++]) {
              if (q(l, g || n, h)) {
                i.push(l);break;
              }
            }k && (w = y);
          }c && ((l = !q && l) && r--, _f && t.push(l));
        }if (r += s, c && s !== r) {
          o = 0;while (q = b[o++]) {
            q(t, u, g, h);
          }if (_f) {
            if (r > 0) while (s--) {
              t[s] || u[s] || (u[s] = F.call(i));
            }u = ua(u);
          }H.apply(i, u), k && !_f && u.length > 0 && r + b.length > 1 && fa.uniqueSort(i);
        }return k && (w = y, j = v), t;
      };return c ? ha(f) : f;
    }return h = fa.compile = function (a, b) {
      var c,
          d = [],
          e = [],
          f = A[a + " "];if (!f) {
        b || (b = g(a)), c = b.length;while (c--) {
          f = wa(b[c]), f[u] ? d.push(f) : e.push(f);
        }f = A(a, xa(e, d)), f.selector = a;
      }return f;
    }, i = fa.select = function (a, b, e, f) {
      var i,
          j,
          k,
          l,
          m,
          n = "function" == typeof a && a,
          o = !f && g(a = n.selector || a);if (e = e || [], 1 === o.length) {
        if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
          if (b = (d.find.ID(k.matches[0].replace(ba, ca), b) || [])[0], !b) return e;n && (b = b.parentNode), a = a.slice(j.shift().value.length);
        }i = W.needsContext.test(a) ? 0 : j.length;while (i--) {
          if (k = j[i], d.relative[l = k.type]) break;if ((m = d.find[l]) && (f = m(k.matches[0].replace(ba, ca), _.test(j[0].type) && oa(b.parentNode) || b))) {
            if (j.splice(i, 1), a = f.length && qa(j), !a) return H.apply(e, f), e;break;
          }
        }
      }return (n || h(a, o))(f, b, !p, e, !b || _.test(a) && oa(b.parentNode) || b), e;
    }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ia(function (a) {
      return 1 & a.compareDocumentPosition(n.createElement("div"));
    }), ia(function (a) {
      return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href");
    }) || ja("type|href|height|width", function (a, b, c) {
      return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
    }), c.attributes && ia(function (a) {
      return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
    }) || ja("value", function (a, b, c) {
      return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue;
    }), ia(function (a) {
      return null == a.getAttribute("disabled");
    }) || ja(K, function (a, b, c) {
      var d;return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
    }), fa;
  }(a);n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.uniqueSort = n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;var u = function u(a, b, c) {
    var d = [],
        e = void 0 !== c;while ((a = a[b]) && 9 !== a.nodeType) {
      if (1 === a.nodeType) {
        if (e && n(a).is(c)) break;d.push(a);
      }
    }return d;
  },
      v = function v(a, b) {
    for (var c = []; a; a = a.nextSibling) {
      1 === a.nodeType && a !== b && c.push(a);
    }return c;
  },
      w = n.expr.match.needsContext,
      x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
      y = /^.[^:#\[\.,]*$/;function z(a, b, c) {
    if (n.isFunction(b)) return n.grep(a, function (a, d) {
      return !!b.call(a, d, a) !== c;
    });if (b.nodeType) return n.grep(a, function (a) {
      return a === b !== c;
    });if ("string" == typeof b) {
      if (y.test(b)) return n.filter(b, a, c);b = n.filter(b, a);
    }return n.grep(a, function (a) {
      return h.call(b, a) > -1 !== c;
    });
  }n.filter = function (a, b, c) {
    var d = b[0];return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function (a) {
      return 1 === a.nodeType;
    }));
  }, n.fn.extend({ find: function find(a) {
      var b,
          c = this.length,
          d = [],
          e = this;if ("string" != typeof a) return this.pushStack(n(a).filter(function () {
        for (b = 0; c > b; b++) {
          if (n.contains(e[b], this)) return !0;
        }
      }));for (b = 0; c > b; b++) {
        n.find(a, e[b], d);
      }return d = this.pushStack(c > 1 ? n.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d;
    }, filter: function filter(a) {
      return this.pushStack(z(this, a || [], !1));
    }, not: function not(a) {
      return this.pushStack(z(this, a || [], !0));
    }, is: function is(a) {
      return !!z(this, "string" == typeof a && w.test(a) ? n(a) : a || [], !1).length;
    } });var A,
      B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
      C = n.fn.init = function (a, b, c) {
    var e, f;if (!a) return this;if (c = c || A, "string" == typeof a) {
      if (e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : B.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);if (e[1]) {
        if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), x.test(e[1]) && n.isPlainObject(b)) for (e in b) {
          n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
        }return this;
      }return f = d.getElementById(e[2]), f && f.parentNode && (this.length = 1, this[0] = f), this.context = d, this.selector = a, this;
    }return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this));
  };C.prototype = n.fn, A = n(d);var D = /^(?:parents|prev(?:Until|All))/,
      E = { children: !0, contents: !0, next: !0, prev: !0 };n.fn.extend({ has: function has(a) {
      var b = n(a, this),
          c = b.length;return this.filter(function () {
        for (var a = 0; c > a; a++) {
          if (n.contains(this, b[a])) return !0;
        }
      });
    }, closest: function closest(a, b) {
      for (var c, d = 0, e = this.length, f = [], g = w.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++) {
        for (c = this[d]; c && c !== b; c = c.parentNode) {
          if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
            f.push(c);break;
          }
        }
      }return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f);
    }, index: function index(a) {
      return a ? "string" == typeof a ? h.call(n(a), this[0]) : h.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    }, add: function add(a, b) {
      return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b))));
    }, addBack: function addBack(a) {
      return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
    } });function F(a, b) {
    while ((a = a[b]) && 1 !== a.nodeType) {}return a;
  }n.each({ parent: function parent(a) {
      var b = a.parentNode;return b && 11 !== b.nodeType ? b : null;
    }, parents: function parents(a) {
      return u(a, "parentNode");
    }, parentsUntil: function parentsUntil(a, b, c) {
      return u(a, "parentNode", c);
    }, next: function next(a) {
      return F(a, "nextSibling");
    }, prev: function prev(a) {
      return F(a, "previousSibling");
    }, nextAll: function nextAll(a) {
      return u(a, "nextSibling");
    }, prevAll: function prevAll(a) {
      return u(a, "previousSibling");
    }, nextUntil: function nextUntil(a, b, c) {
      return u(a, "nextSibling", c);
    }, prevUntil: function prevUntil(a, b, c) {
      return u(a, "previousSibling", c);
    }, siblings: function siblings(a) {
      return v((a.parentNode || {}).firstChild, a);
    }, children: function children(a) {
      return v(a.firstChild);
    }, contents: function contents(a) {
      return a.contentDocument || n.merge([], a.childNodes);
    } }, function (a, b) {
    n.fn[a] = function (c, d) {
      var e = n.map(this, b, c);return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (E[a] || n.uniqueSort(e), D.test(a) && e.reverse()), this.pushStack(e);
    };
  });var G = /\S+/g;function H(a) {
    var b = {};return n.each(a.match(G) || [], function (a, c) {
      b[c] = !0;
    }), b;
  }n.Callbacks = function (a) {
    a = "string" == typeof a ? H(a) : n.extend({}, a);var b,
        c,
        d,
        e,
        f = [],
        g = [],
        h = -1,
        i = function i() {
      for (e = a.once, d = b = !0; g.length; h = -1) {
        c = g.shift();while (++h < f.length) {
          f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1);
        }
      }a.memory || (c = !1), b = !1, e && (f = c ? [] : "");
    },
        j = { add: function add() {
        return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
          n.each(b, function (b, c) {
            n.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== n.type(c) && d(c);
          });
        }(arguments), c && !b && i()), this;
      }, remove: function remove() {
        return n.each(arguments, function (a, b) {
          var c;while ((c = n.inArray(b, f, c)) > -1) {
            f.splice(c, 1), h >= c && h--;
          }
        }), this;
      }, has: function has(a) {
        return a ? n.inArray(a, f) > -1 : f.length > 0;
      }, empty: function empty() {
        return f && (f = []), this;
      }, disable: function disable() {
        return e = g = [], f = c = "", this;
      }, disabled: function disabled() {
        return !f;
      }, lock: function lock() {
        return e = g = [], c || (f = c = ""), this;
      }, locked: function locked() {
        return !!e;
      }, fireWith: function fireWith(a, c) {
        return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this;
      }, fire: function fire() {
        return j.fireWith(this, arguments), this;
      }, fired: function fired() {
        return !!d;
      } };return j;
  }, n.extend({ Deferred: function Deferred(a) {
      var b = [["resolve", "done", n.Callbacks("once memory"), "resolved"], ["reject", "fail", n.Callbacks("once memory"), "rejected"], ["notify", "progress", n.Callbacks("memory")]],
          c = "pending",
          d = { state: function state() {
          return c;
        }, always: function always() {
          return e.done(arguments).fail(arguments), this;
        }, then: function then() {
          var a = arguments;return n.Deferred(function (c) {
            n.each(b, function (b, f) {
              var g = n.isFunction(a[b]) && a[b];e[f[1]](function () {
                var a = g && g.apply(this, arguments);a && n.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments);
              });
            }), a = null;
          }).promise();
        }, promise: function promise(a) {
          return null != a ? n.extend(a, d) : d;
        } },
          e = {};return d.pipe = d.then, n.each(b, function (a, f) {
        var g = f[2],
            h = f[3];d[f[1]] = g.add, h && g.add(function () {
          c = h;
        }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
          return e[f[0] + "With"](this === e ? d : this, arguments), this;
        }, e[f[0] + "With"] = g.fireWith;
      }), d.promise(e), a && a.call(e, e), e;
    }, when: function when(a) {
      var b = 0,
          c = e.call(arguments),
          d = c.length,
          f = 1 !== d || a && n.isFunction(a.promise) ? d : 0,
          g = 1 === f ? a : n.Deferred(),
          h = function h(a, b, c) {
        return function (d) {
          b[a] = this, c[a] = arguments.length > 1 ? e.call(arguments) : d, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c);
        };
      },
          i,
          j,
          k;if (d > 1) for (i = new Array(d), j = new Array(d), k = new Array(d); d > b; b++) {
        c[b] && n.isFunction(c[b].promise) ? c[b].promise().progress(h(b, j, i)).done(h(b, k, c)).fail(g.reject) : --f;
      }return f || g.resolveWith(k, c), g.promise();
    } });var I;n.fn.ready = function (a) {
    return n.ready.promise().done(a), this;
  }, n.extend({ isReady: !1, readyWait: 1, holdReady: function holdReady(a) {
      a ? n.readyWait++ : n.ready(!0);
    }, ready: function ready(a) {
      (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (I.resolveWith(d, [n]), n.fn.triggerHandler && (n(d).triggerHandler("ready"), n(d).off("ready"))));
    } });function J() {
    d.removeEventListener("DOMContentLoaded", J), a.removeEventListener("load", J), n.ready();
  }n.ready.promise = function (b) {
    return I || (I = n.Deferred(), "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(n.ready) : (d.addEventListener("DOMContentLoaded", J), a.addEventListener("load", J))), I.promise(b);
  }, n.ready.promise();var K = function K(a, b, c, d, e, f, g) {
    var h = 0,
        i = a.length,
        j = null == c;if ("object" === n.type(c)) {
      e = !0;for (h in c) {
        K(a, b, h, c[h], !0, f, g);
      }
    } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function b(a, _b, c) {
      return j.call(n(a), c);
    })), b)) for (; i > h; h++) {
      b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
    }return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
  },
      L = function L(a) {
    return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
  };function M() {
    this.expando = n.expando + M.uid++;
  }M.uid = 1, M.prototype = { register: function register(a, b) {
      var c = b || {};return a.nodeType ? a[this.expando] = c : Object.defineProperty(a, this.expando, { value: c, writable: !0, configurable: !0 }), a[this.expando];
    }, cache: function cache(a) {
      if (!L(a)) return {};var b = a[this.expando];return b || (b = {}, L(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, { value: b, configurable: !0 }))), b;
    }, set: function set(a, b, c) {
      var d,
          e = this.cache(a);if ("string" == typeof b) e[b] = c;else for (d in b) {
        e[d] = b[d];
      }return e;
    }, get: function get(a, b) {
      return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][b];
    }, access: function access(a, b, c) {
      var d;return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b);
    }, remove: function remove(a, b) {
      var c,
          d,
          e,
          f = a[this.expando];if (void 0 !== f) {
        if (void 0 === b) this.register(a);else {
          n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b), b in f ? d = [b, e] : (d = e, d = d in f ? [d] : d.match(G) || [])), c = d.length;while (c--) {
            delete f[d[c]];
          }
        }(void 0 === b || n.isEmptyObject(f)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando]);
      }
    }, hasData: function hasData(a) {
      var b = a[this.expando];return void 0 !== b && !n.isEmptyObject(b);
    } };var N = new M(),
      O = new M(),
      P = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      Q = /[A-Z]/g;function R(a, b, c) {
    var d;if (void 0 === c && 1 === a.nodeType) if (d = "data-" + b.replace(Q, "-$&").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
      try {
        c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : P.test(c) ? n.parseJSON(c) : c;
      } catch (e) {}O.set(a, b, c);
    } else c = void 0;return c;
  }n.extend({ hasData: function hasData(a) {
      return O.hasData(a) || N.hasData(a);
    }, data: function data(a, b, c) {
      return O.access(a, b, c);
    }, removeData: function removeData(a, b) {
      O.remove(a, b);
    }, _data: function _data(a, b, c) {
      return N.access(a, b, c);
    }, _removeData: function _removeData(a, b) {
      N.remove(a, b);
    } }), n.fn.extend({ data: function data(a, b) {
      var c,
          d,
          e,
          f = this[0],
          g = f && f.attributes;if (void 0 === a) {
        if (this.length && (e = O.get(f), 1 === f.nodeType && !N.get(f, "hasDataAttrs"))) {
          c = g.length;while (c--) {
            g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), R(f, d, e[d])));
          }N.set(f, "hasDataAttrs", !0);
        }return e;
      }return "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) ? this.each(function () {
        O.set(this, a);
      }) : K(this, function (b) {
        var c, d;if (f && void 0 === b) {
          if (c = O.get(f, a) || O.get(f, a.replace(Q, "-$&").toLowerCase()), void 0 !== c) return c;if (d = n.camelCase(a), c = O.get(f, d), void 0 !== c) return c;if (c = R(f, d, void 0), void 0 !== c) return c;
        } else d = n.camelCase(a), this.each(function () {
          var c = O.get(this, d);O.set(this, d, b), a.indexOf("-") > -1 && void 0 !== c && O.set(this, a, b);
        });
      }, null, b, arguments.length > 1, null, !0);
    }, removeData: function removeData(a) {
      return this.each(function () {
        O.remove(this, a);
      });
    } }), n.extend({ queue: function queue(a, b, c) {
      var d;return a ? (b = (b || "fx") + "queue", d = N.get(a, b), c && (!d || n.isArray(c) ? d = N.access(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0;
    }, dequeue: function dequeue(a, b) {
      b = b || "fx";var c = n.queue(a, b),
          d = c.length,
          e = c.shift(),
          f = n._queueHooks(a, b),
          g = function g() {
        n.dequeue(a, b);
      };"inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
    }, _queueHooks: function _queueHooks(a, b) {
      var c = b + "queueHooks";return N.get(a, c) || N.access(a, c, { empty: n.Callbacks("once memory").add(function () {
          N.remove(a, [b + "queue", c]);
        }) });
    } }), n.fn.extend({ queue: function queue(a, b) {
      var c = 2;return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function () {
        var c = n.queue(this, a, b);n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a);
      });
    }, dequeue: function dequeue(a) {
      return this.each(function () {
        n.dequeue(this, a);
      });
    }, clearQueue: function clearQueue(a) {
      return this.queue(a || "fx", []);
    }, promise: function promise(a, b) {
      var c,
          d = 1,
          e = n.Deferred(),
          f = this,
          g = this.length,
          h = function h() {
        --d || e.resolveWith(f, [f]);
      };"string" != typeof a && (b = a, a = void 0), a = a || "fx";while (g--) {
        c = N.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
      }return h(), e.promise(b);
    } });var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      T = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"),
      U = ["Top", "Right", "Bottom", "Left"],
      V = function V(a, b) {
    return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a);
  };function W(a, b, c, d) {
    var e,
        f = 1,
        g = 20,
        h = d ? function () {
      return d.cur();
    } : function () {
      return n.css(a, b, "");
    },
        i = h(),
        j = c && c[3] || (n.cssNumber[b] ? "" : "px"),
        k = (n.cssNumber[b] || "px" !== j && +i) && T.exec(n.css(a, b));if (k && k[3] !== j) {
      j = j || k[3], c = c || [], k = +i || 1;do {
        f = f || ".5", k /= f, n.style(a, b, k + j);
      } while (f !== (f = h() / i) && 1 !== f && --g);
    }return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e;
  }var X = /^(?:checkbox|radio)$/i,
      Y = /<([\w:-]+)/,
      Z = /^$|\/(?:java|ecma)script/i,
      $ = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };$.optgroup = $.option, $.tbody = $.tfoot = $.colgroup = $.caption = $.thead, $.th = $.td;function _(a, b) {
    var c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [];return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], c) : c;
  }function aa(a, b) {
    for (var c = 0, d = a.length; d > c; c++) {
      N.set(a[c], "globalEval", !b || N.get(b[c], "globalEval"));
    }
  }var ba = /<|&#?\w+;/;function ca(a, b, c, d, e) {
    for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], o = 0, p = a.length; p > o; o++) {
      if (f = a[o], f || 0 === f) if ("object" === n.type(f)) n.merge(m, f.nodeType ? [f] : f);else if (ba.test(f)) {
        g = g || l.appendChild(b.createElement("div")), h = (Y.exec(f) || ["", ""])[1].toLowerCase(), i = $[h] || $._default, g.innerHTML = i[1] + n.htmlPrefilter(f) + i[2], k = i[0];while (k--) {
          g = g.lastChild;
        }n.merge(m, g.childNodes), g = l.firstChild, g.textContent = "";
      } else m.push(b.createTextNode(f));
    }l.textContent = "", o = 0;while (f = m[o++]) {
      if (d && n.inArray(f, d) > -1) e && e.push(f);else if (j = n.contains(f.ownerDocument, f), g = _(l.appendChild(f), "script"), j && aa(g), c) {
        k = 0;while (f = g[k++]) {
          Z.test(f.type || "") && c.push(f);
        }
      }
    }return l;
  }!function () {
    var a = d.createDocumentFragment(),
        b = a.appendChild(d.createElement("div")),
        c = d.createElement("input");c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), l.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue;
  }();var da = /^key/,
      ea = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      fa = /^([^.]*)(?:\.(.+)|)/;function ga() {
    return !0;
  }function ha() {
    return !1;
  }function ia() {
    try {
      return d.activeElement;
    } catch (a) {}
  }function ja(a, b, c, d, e, f) {
    var g, h;if ("object" == (typeof b === "undefined" ? "undefined" : _typeof(b))) {
      "string" != typeof c && (d = d || c, c = void 0);for (h in b) {
        ja(a, h, c, d, b[h], f);
      }return a;
    }if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = ha;else if (!e) return a;return 1 === f && (g = e, e = function e(a) {
      return n().off(a), g.apply(this, arguments);
    }, e.guid = g.guid || (g.guid = n.guid++)), a.each(function () {
      n.event.add(this, b, e, d, c);
    });
  }n.event = { global: {}, add: function add(a, b, c, d, e) {
      var f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          o,
          p,
          q,
          r = N.get(a);if (r) {
        c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = n.guid++), (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function (b) {
          return "undefined" != typeof n && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0;
        }), b = (b || "").match(G) || [""], j = b.length;while (j--) {
          h = fa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o && (l = n.event.special[o] || {}, o = (e ? l.delegateType : l.bindType) || o, l = n.event.special[o] || {}, k = n.extend({ type: o, origType: q, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && n.expr.match.needsContext.test(e), namespace: p.join(".") }, f), (m = i[o]) || (m = i[o] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), n.event.global[o] = !0);
        }
      }
    }, remove: function remove(a, b, c, d, e) {
      var f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          o,
          p,
          q,
          r = N.hasData(a) && N.get(a);if (r && (i = r.events)) {
        b = (b || "").match(G) || [""], j = b.length;while (j--) {
          if (h = fa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
            l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = i[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;while (f--) {
              k = m[f], !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
            }g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete i[o]);
          } else for (o in i) {
            n.event.remove(a, o + b[j], c, d, !0);
          }
        }n.isEmptyObject(i) && N.remove(a, "handle events");
      }
    }, dispatch: function dispatch(a) {
      a = n.event.fix(a);var b,
          c,
          d,
          f,
          g,
          h = [],
          i = e.call(arguments),
          j = (N.get(this, "events") || {})[a.type] || [],
          k = n.event.special[a.type] || {};if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
        h = n.event.handlers.call(this, a, j), b = 0;while ((f = h[b++]) && !a.isPropagationStopped()) {
          a.currentTarget = f.elem, c = 0;while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped()) {
            a.rnamespace && !a.rnamespace.test(g.namespace) || (a.handleObj = g, a.data = g.data, d = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()));
          }
        }return k.postDispatch && k.postDispatch.call(this, a), a.result;
      }
    }, handlers: function handlers(a, b) {
      var c,
          d,
          e,
          f,
          g = [],
          h = b.delegateCount,
          i = a.target;if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1)) for (; i !== this; i = i.parentNode || this) {
        if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
          for (d = [], c = 0; h > c; c++) {
            f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) > -1 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
          }d.length && g.push({ elem: i, handlers: d });
        }
      }return h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g;
    }, props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: { props: "char charCode key keyCode".split(" "), filter: function filter(a, b) {
        return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a;
      } }, mouseHooks: { props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function filter(a, b) {
        var c,
            e,
            f,
            g = b.button;return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || d, e = c.documentElement, f = c.body, a.pageX = b.clientX + (e && e.scrollLeft || f && f.scrollLeft || 0) - (e && e.clientLeft || f && f.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || f && f.scrollTop || 0) - (e && e.clientTop || f && f.clientTop || 0)), a.which || void 0 === g || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a;
      } }, fix: function fix(a) {
      if (a[n.expando]) return a;var b,
          c,
          e,
          f = a.type,
          g = a,
          h = this.fixHooks[f];h || (this.fixHooks[f] = h = ea.test(f) ? this.mouseHooks : da.test(f) ? this.keyHooks : {}), e = h.props ? this.props.concat(h.props) : this.props, a = new n.Event(g), b = e.length;while (b--) {
        c = e[b], a[c] = g[c];
      }return a.target || (a.target = d), 3 === a.target.nodeType && (a.target = a.target.parentNode), h.filter ? h.filter(a, g) : a;
    }, special: { load: { noBubble: !0 }, focus: { trigger: function trigger() {
          return this !== ia() && this.focus ? (this.focus(), !1) : void 0;
        }, delegateType: "focusin" }, blur: { trigger: function trigger() {
          return this === ia() && this.blur ? (this.blur(), !1) : void 0;
        }, delegateType: "focusout" }, click: { trigger: function trigger() {
          return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(), !1) : void 0;
        }, _default: function _default(a) {
          return n.nodeName(a.target, "a");
        } }, beforeunload: { postDispatch: function postDispatch(a) {
          void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
        } } } }, n.removeEvent = function (a, b, c) {
    a.removeEventListener && a.removeEventListener(b, c);
  }, n.Event = function (a, b) {
    return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ga : ha) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void (this[n.expando] = !0)) : new n.Event(a, b);
  }, n.Event.prototype = { constructor: n.Event, isDefaultPrevented: ha, isPropagationStopped: ha, isImmediatePropagationStopped: ha, isSimulated: !1, preventDefault: function preventDefault() {
      var a = this.originalEvent;this.isDefaultPrevented = ga, a && !this.isSimulated && a.preventDefault();
    }, stopPropagation: function stopPropagation() {
      var a = this.originalEvent;this.isPropagationStopped = ga, a && !this.isSimulated && a.stopPropagation();
    }, stopImmediatePropagation: function stopImmediatePropagation() {
      var a = this.originalEvent;this.isImmediatePropagationStopped = ga, a && !this.isSimulated && a.stopImmediatePropagation(), this.stopPropagation();
    } }, n.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (a, b) {
    n.event.special[a] = { delegateType: b, bindType: b, handle: function handle(a) {
        var c,
            d = this,
            e = a.relatedTarget,
            f = a.handleObj;return e && (e === d || n.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c;
      } };
  }), n.fn.extend({ on: function on(a, b, c, d) {
      return ja(this, a, b, c, d);
    }, one: function one(a, b, c, d) {
      return ja(this, a, b, c, d, 1);
    }, off: function off(a, b, c) {
      var d, e;if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;if ("object" == (typeof a === "undefined" ? "undefined" : _typeof(a))) {
        for (e in a) {
          this.off(e, b, a[e]);
        }return this;
      }return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = ha), this.each(function () {
        n.event.remove(this, a, c, b);
      });
    } });var ka = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
      la = /<script|<style|<link/i,
      ma = /checked\s*(?:[^=]|=\s*.checked.)/i,
      na = /^true\/(.*)/,
      oa = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function pa(a, b) {
    return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a;
  }function qa(a) {
    return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a;
  }function ra(a) {
    var b = na.exec(a.type);return b ? a.type = b[1] : a.removeAttribute("type"), a;
  }function sa(a, b) {
    var c, d, e, f, g, h, i, j;if (1 === b.nodeType) {
      if (N.hasData(a) && (f = N.access(a), g = N.set(b, f), j = f.events)) {
        delete g.handle, g.events = {};for (e in j) {
          for (c = 0, d = j[e].length; d > c; c++) {
            n.event.add(b, e, j[e][c]);
          }
        }
      }O.hasData(a) && (h = O.access(a), i = n.extend({}, h), O.set(b, i));
    }
  }function ta(a, b) {
    var c = b.nodeName.toLowerCase();"input" === c && X.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue);
  }function ua(a, b, c, d) {
    b = f.apply([], b);var e,
        g,
        h,
        i,
        j,
        k,
        m = 0,
        o = a.length,
        p = o - 1,
        q = b[0],
        r = n.isFunction(q);if (r || o > 1 && "string" == typeof q && !l.checkClone && ma.test(q)) return a.each(function (e) {
      var f = a.eq(e);r && (b[0] = q.call(this, e, f.html())), ua(f, b, c, d);
    });if (o && (e = ca(b, a[0].ownerDocument, !1, a, d), g = e.firstChild, 1 === e.childNodes.length && (e = g), g || d)) {
      for (h = n.map(_(e, "script"), qa), i = h.length; o > m; m++) {
        j = e, m !== p && (j = n.clone(j, !0, !0), i && n.merge(h, _(j, "script"))), c.call(a[m], j, m);
      }if (i) for (k = h[h.length - 1].ownerDocument, n.map(h, ra), m = 0; i > m; m++) {
        j = h[m], Z.test(j.type || "") && !N.access(j, "globalEval") && n.contains(k, j) && (j.src ? n._evalUrl && n._evalUrl(j.src) : n.globalEval(j.textContent.replace(oa, "")));
      }
    }return a;
  }function va(a, b, c) {
    for (var d, e = b ? n.filter(b, a) : a, f = 0; null != (d = e[f]); f++) {
      c || 1 !== d.nodeType || n.cleanData(_(d)), d.parentNode && (c && n.contains(d.ownerDocument, d) && aa(_(d, "script")), d.parentNode.removeChild(d));
    }return a;
  }n.extend({ htmlPrefilter: function htmlPrefilter(a) {
      return a.replace(ka, "<$1></$2>");
    }, clone: function clone(a, b, c) {
      var d,
          e,
          f,
          g,
          h = a.cloneNode(!0),
          i = n.contains(a.ownerDocument, a);if (!(l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a))) for (g = _(h), f = _(a), d = 0, e = f.length; e > d; d++) {
        ta(f[d], g[d]);
      }if (b) if (c) for (f = f || _(a), g = g || _(h), d = 0, e = f.length; e > d; d++) {
        sa(f[d], g[d]);
      } else sa(a, h);return g = _(h, "script"), g.length > 0 && aa(g, !i && _(a, "script")), h;
    }, cleanData: function cleanData(a) {
      for (var b, c, d, e = n.event.special, f = 0; void 0 !== (c = a[f]); f++) {
        if (L(c)) {
          if (b = c[N.expando]) {
            if (b.events) for (d in b.events) {
              e[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
            }c[N.expando] = void 0;
          }c[O.expando] && (c[O.expando] = void 0);
        }
      }
    } }), n.fn.extend({ domManip: ua, detach: function detach(a) {
      return va(this, a, !0);
    }, remove: function remove(a) {
      return va(this, a);
    }, text: function text(a) {
      return K(this, function (a) {
        return void 0 === a ? n.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a);
        });
      }, null, a, arguments.length);
    }, append: function append() {
      return ua(this, arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = pa(this, a);b.appendChild(a);
        }
      });
    }, prepend: function prepend() {
      return ua(this, arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = pa(this, a);b.insertBefore(a, b.firstChild);
        }
      });
    }, before: function before() {
      return ua(this, arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this);
      });
    }, after: function after() {
      return ua(this, arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
      });
    }, empty: function empty() {
      for (var a, b = 0; null != (a = this[b]); b++) {
        1 === a.nodeType && (n.cleanData(_(a, !1)), a.textContent = "");
      }return this;
    }, clone: function clone(a, b) {
      return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
        return n.clone(this, a, b);
      });
    }, html: function html(a) {
      return K(this, function (a) {
        var b = this[0] || {},
            c = 0,
            d = this.length;if (void 0 === a && 1 === b.nodeType) return b.innerHTML;if ("string" == typeof a && !la.test(a) && !$[(Y.exec(a) || ["", ""])[1].toLowerCase()]) {
          a = n.htmlPrefilter(a);try {
            for (; d > c; c++) {
              b = this[c] || {}, 1 === b.nodeType && (n.cleanData(_(b, !1)), b.innerHTML = a);
            }b = 0;
          } catch (e) {}
        }b && this.empty().append(a);
      }, null, a, arguments.length);
    }, replaceWith: function replaceWith() {
      var a = [];return ua(this, arguments, function (b) {
        var c = this.parentNode;n.inArray(this, a) < 0 && (n.cleanData(_(this)), c && c.replaceChild(b, this));
      }, a);
    } }), n.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (a, b) {
    n.fn[a] = function (a) {
      for (var c, d = [], e = n(a), f = e.length - 1, h = 0; f >= h; h++) {
        c = h === f ? this : this.clone(!0), n(e[h])[b](c), g.apply(d, c.get());
      }return this.pushStack(d);
    };
  });var wa,
      xa = { HTML: "block", BODY: "block" };function ya(a, b) {
    var c = n(b.createElement(a)).appendTo(b.body),
        d = n.css(c[0], "display");return c.detach(), d;
  }function za(a) {
    var b = d,
        c = xa[a];return c || (c = ya(a, b), "none" !== c && c || (wa = (wa || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = wa[0].contentDocument, b.write(), b.close(), c = ya(a, b), wa.detach()), xa[a] = c), c;
  }var Aa = /^margin/,
      Ba = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"),
      Ca = function Ca(b) {
    var c = b.ownerDocument.defaultView;return c && c.opener || (c = a), c.getComputedStyle(b);
  },
      Da = function Da(a, b, c, d) {
    var e,
        f,
        g = {};for (f in b) {
      g[f] = a.style[f], a.style[f] = b[f];
    }e = c.apply(a, d || []);for (f in b) {
      a.style[f] = g[f];
    }return e;
  },
      Ea = d.documentElement;!function () {
    var b,
        c,
        e,
        f,
        g = d.createElement("div"),
        h = d.createElement("div");if (h.style) {
      (function () {
        var i = function i() {
          h.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", h.innerHTML = "", Ea.appendChild(g);var d = a.getComputedStyle(h);b = "1%" !== d.top, f = "2px" === d.marginLeft, c = "4px" === d.width, h.style.marginRight = "50%", e = "4px" === d.marginRight, Ea.removeChild(g);
        };

        h.style.backgroundClip = "content-box", h.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === h.style.backgroundClip, g.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", g.appendChild(h);n.extend(l, { pixelPosition: function pixelPosition() {
            return i(), b;
          }, boxSizingReliable: function boxSizingReliable() {
            return null == c && i(), c;
          }, pixelMarginRight: function pixelMarginRight() {
            return null == c && i(), e;
          }, reliableMarginLeft: function reliableMarginLeft() {
            return null == c && i(), f;
          }, reliableMarginRight: function reliableMarginRight() {
            var b,
                c = h.appendChild(d.createElement("div"));return c.style.cssText = h.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", h.style.width = "1px", Ea.appendChild(g), b = !parseFloat(a.getComputedStyle(c).marginRight), Ea.removeChild(g), h.removeChild(c), b;
          } });
      })();
    }
  }();function Fa(a, b, c) {
    var d,
        e,
        f,
        g,
        h = a.style;return c = c || Ca(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, "" !== g && void 0 !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), c && !l.pixelMarginRight() && Ba.test(g) && Aa.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f), void 0 !== g ? g + "" : g;
  }function Ga(a, b) {
    return { get: function get() {
        return a() ? void delete this.get : (this.get = b).apply(this, arguments);
      } };
  }var Ha = /^(none|table(?!-c[ea]).+)/,
      Ia = { position: "absolute", visibility: "hidden", display: "block" },
      Ja = { letterSpacing: "0", fontWeight: "400" },
      Ka = ["Webkit", "O", "Moz", "ms"],
      La = d.createElement("div").style;function Ma(a) {
    if (a in La) return a;var b = a[0].toUpperCase() + a.slice(1),
        c = Ka.length;while (c--) {
      if (a = Ka[c] + b, a in La) return a;
    }
  }function Na(a, b, c) {
    var d = T.exec(b);return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b;
  }function Oa(a, b, c, d, e) {
    for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) {
      "margin" === c && (g += n.css(a, c + U[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + U[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + U[f] + "Width", !0, e))) : (g += n.css(a, "padding" + U[f], !0, e), "padding" !== c && (g += n.css(a, "border" + U[f] + "Width", !0, e)));
    }return g;
  }function Pa(a, b, c) {
    var d = !0,
        e = "width" === b ? a.offsetWidth : a.offsetHeight,
        f = Ca(a),
        g = "border-box" === n.css(a, "boxSizing", !1, f);if (0 >= e || null == e) {
      if (e = Fa(a, b, f), (0 > e || null == e) && (e = a.style[b]), Ba.test(e)) return e;d = g && (l.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0;
    }return e + Oa(a, b, c || (g ? "border" : "content"), d, f) + "px";
  }function Qa(a, b) {
    for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) {
      d = a[g], d.style && (f[g] = N.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && V(d) && (f[g] = N.access(d, "olddisplay", za(d.nodeName)))) : (e = V(d), "none" === c && e || N.set(d, "olddisplay", e ? c : n.css(d, "display"))));
    }for (g = 0; h > g; g++) {
      d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
    }return a;
  }n.extend({ cssHooks: { opacity: { get: function get(a, b) {
          if (b) {
            var c = Fa(a, "opacity");return "" === c ? "1" : c;
          }
        } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": "cssFloat" }, style: function style(a, b, c, d) {
      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
        var e,
            f,
            g,
            h = n.camelCase(b),
            i = a.style;return b = n.cssProps[h] || (n.cssProps[h] = Ma(h) || h), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c === "undefined" ? "undefined" : _typeof(c), "string" === f && (e = T.exec(c)) && e[1] && (c = W(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (n.cssNumber[h] ? "" : "px")), l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0);
      }
    }, css: function css(a, b, c, d) {
      var e,
          f,
          g,
          h = n.camelCase(b);return b = n.cssProps[h] || (n.cssProps[h] = Ma(h) || h), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = Fa(a, b, d)), "normal" === e && b in Ja && (e = Ja[b]), "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e;
    } }), n.each(["height", "width"], function (a, b) {
    n.cssHooks[b] = { get: function get(a, c, d) {
        return c ? Ha.test(n.css(a, "display")) && 0 === a.offsetWidth ? Da(a, Ia, function () {
          return Pa(a, b, d);
        }) : Pa(a, b, d) : void 0;
      }, set: function set(a, c, d) {
        var e,
            f = d && Ca(a),
            g = d && Oa(a, b, d, "border-box" === n.css(a, "boxSizing", !1, f), f);return g && (e = T.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = n.css(a, b)), Na(a, c, g);
      } };
  }), n.cssHooks.marginLeft = Ga(l.reliableMarginLeft, function (a, b) {
    return b ? (parseFloat(Fa(a, "marginLeft")) || a.getBoundingClientRect().left - Da(a, { marginLeft: 0 }, function () {
      return a.getBoundingClientRect().left;
    })) + "px" : void 0;
  }), n.cssHooks.marginRight = Ga(l.reliableMarginRight, function (a, b) {
    return b ? Da(a, { display: "inline-block" }, Fa, [a, "marginRight"]) : void 0;
  }), n.each({ margin: "", padding: "", border: "Width" }, function (a, b) {
    n.cssHooks[a + b] = { expand: function expand(c) {
        for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) {
          e[a + U[d] + b] = f[d] || f[d - 2] || f[0];
        }return e;
      } }, Aa.test(a) || (n.cssHooks[a + b].set = Na);
  }), n.fn.extend({ css: function css(a, b) {
      return K(this, function (a, b, c) {
        var d,
            e,
            f = {},
            g = 0;if (n.isArray(b)) {
          for (d = Ca(a), e = b.length; e > g; g++) {
            f[b[g]] = n.css(a, b[g], !1, d);
          }return f;
        }return void 0 !== c ? n.style(a, b, c) : n.css(a, b);
      }, a, b, arguments.length > 1);
    }, show: function show() {
      return Qa(this, !0);
    }, hide: function hide() {
      return Qa(this);
    }, toggle: function toggle(a) {
      return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
        V(this) ? n(this).show() : n(this).hide();
      });
    } });function Ra(a, b, c, d, e) {
    return new Ra.prototype.init(a, b, c, d, e);
  }n.Tween = Ra, Ra.prototype = { constructor: Ra, init: function init(a, b, c, d, e, f) {
      this.elem = a, this.prop = c, this.easing = e || n.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px");
    }, cur: function cur() {
      var a = Ra.propHooks[this.prop];return a && a.get ? a.get(this) : Ra.propHooks._default.get(this);
    }, run: function run(a) {
      var b,
          c = Ra.propHooks[this.prop];return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Ra.propHooks._default.set(this), this;
    } }, Ra.prototype.init.prototype = Ra.prototype, Ra.propHooks = { _default: { get: function get(a) {
        var b;return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0);
      }, set: function set(a) {
        n.fx.step[a.prop] ? n.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[n.cssProps[a.prop]] && !n.cssHooks[a.prop] ? a.elem[a.prop] = a.now : n.style(a.elem, a.prop, a.now + a.unit);
      } } }, Ra.propHooks.scrollTop = Ra.propHooks.scrollLeft = { set: function set(a) {
      a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
    } }, n.easing = { linear: function linear(a) {
      return a;
    }, swing: function swing(a) {
      return .5 - Math.cos(a * Math.PI) / 2;
    }, _default: "swing" }, n.fx = Ra.prototype.init, n.fx.step = {};var Sa,
      Ta,
      Ua = /^(?:toggle|show|hide)$/,
      Va = /queueHooks$/;function Wa() {
    return a.setTimeout(function () {
      Sa = void 0;
    }), Sa = n.now();
  }function Xa(a, b) {
    var c,
        d = 0,
        e = { height: a };for (b = b ? 1 : 0; 4 > d; d += 2 - b) {
      c = U[d], e["margin" + c] = e["padding" + c] = a;
    }return b && (e.opacity = e.width = a), e;
  }function Ya(a, b, c) {
    for (var d, e = (_a.tweeners[b] || []).concat(_a.tweeners["*"]), f = 0, g = e.length; g > f; f++) {
      if (d = e[f].call(c, b, a)) return d;
    }
  }function Za(a, b, c) {
    var d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l = this,
        m = {},
        o = a.style,
        p = a.nodeType && V(a),
        q = N.get(a, "fxshow");c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
      h.unqueued || i();
    }), h.unqueued++, l.always(function () {
      l.always(function () {
        h.unqueued--, n.queue(a, "fx").length || h.empty.fire();
      });
    })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = n.css(a, "display"), k = "none" === j ? N.get(a, "olddisplay") || za(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (o.display = "inline-block")), c.overflow && (o.overflow = "hidden", l.always(function () {
      o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2];
    }));for (d in b) {
      if (e = b[d], Ua.exec(e)) {
        if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
          if ("show" !== e || !q || void 0 === q[d]) continue;p = !0;
        }m[d] = q && q[d] || n.style(a, d);
      } else j = void 0;
    }if (n.isEmptyObject(m)) "inline" === ("none" === j ? za(a.nodeName) : j) && (o.display = j);else {
      q ? "hidden" in q && (p = q.hidden) : q = N.access(a, "fxshow", {}), f && (q.hidden = !p), p ? n(a).show() : l.done(function () {
        n(a).hide();
      }), l.done(function () {
        var b;N.remove(a, "fxshow");for (b in m) {
          n.style(a, b, m[b]);
        }
      });for (d in m) {
        g = Ya(p ? q[d] : 0, d, l), d in q || (q[d] = g.start, p && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0));
      }
    }
  }function $a(a, b) {
    var c, d, e, f, g;for (c in a) {
      if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
        f = g.expand(f), delete a[d];for (c in f) {
          c in a || (a[c] = f[c], b[c] = e);
        }
      } else b[d] = e;
    }
  }function _a(a, b, c) {
    var d,
        e,
        f = 0,
        g = _a.prefilters.length,
        h = n.Deferred().always(function () {
      delete i.elem;
    }),
        i = function i() {
      if (e) return !1;for (var b = Sa || Wa(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) {
        j.tweens[g].run(f);
      }return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1);
    },
        j = h.promise({ elem: a, props: n.extend({}, b), opts: n.extend(!0, { specialEasing: {}, easing: n.easing._default }, c), originalProperties: b, originalOptions: c, startTime: Sa || Wa(), duration: c.duration, tweens: [], createTween: function createTween(b, c) {
        var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);return j.tweens.push(d), d;
      }, stop: function stop(b) {
        var c = 0,
            d = b ? j.tweens.length : 0;if (e) return this;for (e = !0; d > c; c++) {
          j.tweens[c].run(1);
        }return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this;
      } }),
        k = j.props;for ($a(k, j.opts.specialEasing); g > f; f++) {
      if (d = _a.prefilters[f].call(j, a, k, j.opts)) return n.isFunction(d.stop) && (n._queueHooks(j.elem, j.opts.queue).stop = n.proxy(d.stop, d)), d;
    }return n.map(k, Ya, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, { elem: a, anim: j, queue: j.opts.queue })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always);
  }n.Animation = n.extend(_a, { tweeners: { "*": [function (a, b) {
        var c = this.createTween(a, b);return W(c.elem, a, T.exec(b), c), c;
      }] }, tweener: function tweener(a, b) {
      n.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(G);for (var c, d = 0, e = a.length; e > d; d++) {
        c = a[d], _a.tweeners[c] = _a.tweeners[c] || [], _a.tweeners[c].unshift(b);
      }
    }, prefilters: [Za], prefilter: function prefilter(a, b) {
      b ? _a.prefilters.unshift(a) : _a.prefilters.push(a);
    } }), n.speed = function (a, b, c) {
    var d = a && "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) ? n.extend({}, a) : { complete: c || !c && b || n.isFunction(a) && a, duration: a, easing: c && b || b && !n.isFunction(b) && b };return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, null != d.queue && d.queue !== !0 || (d.queue = "fx"), d.old = d.complete, d.complete = function () {
      n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue);
    }, d;
  }, n.fn.extend({ fadeTo: function fadeTo(a, b, c, d) {
      return this.filter(V).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d);
    }, animate: function animate(a, b, c, d) {
      var e = n.isEmptyObject(a),
          f = n.speed(b, c, d),
          g = function g() {
        var b = _a(this, n.extend({}, a), f);(e || N.get(this, "finish")) && b.stop(!0);
      };return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
    }, stop: function stop(a, b, c) {
      var d = function d(a) {
        var b = a.stop;delete a.stop, b(c);
      };return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
        var b = !0,
            e = null != a && a + "queueHooks",
            f = n.timers,
            g = N.get(this);if (e) g[e] && g[e].stop && d(g[e]);else for (e in g) {
          g[e] && g[e].stop && Va.test(e) && d(g[e]);
        }for (e = f.length; e--;) {
          f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
        }!b && c || n.dequeue(this, a);
      });
    }, finish: function finish(a) {
      return a !== !1 && (a = a || "fx"), this.each(function () {
        var b,
            c = N.get(this),
            d = c[a + "queue"],
            e = c[a + "queueHooks"],
            f = n.timers,
            g = d ? d.length : 0;for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) {
          f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
        }for (b = 0; g > b; b++) {
          d[b] && d[b].finish && d[b].finish.call(this);
        }delete c.finish;
      });
    } }), n.each(["toggle", "show", "hide"], function (a, b) {
    var c = n.fn[b];n.fn[b] = function (a, d, e) {
      return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Xa(b, !0), a, d, e);
    };
  }), n.each({ slideDown: Xa("show"), slideUp: Xa("hide"), slideToggle: Xa("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (a, b) {
    n.fn[a] = function (a, c, d) {
      return this.animate(b, a, c, d);
    };
  }), n.timers = [], n.fx.tick = function () {
    var a,
        b = 0,
        c = n.timers;for (Sa = n.now(); b < c.length; b++) {
      a = c[b], a() || c[b] !== a || c.splice(b--, 1);
    }c.length || n.fx.stop(), Sa = void 0;
  }, n.fx.timer = function (a) {
    n.timers.push(a), a() ? n.fx.start() : n.timers.pop();
  }, n.fx.interval = 13, n.fx.start = function () {
    Ta || (Ta = a.setInterval(n.fx.tick, n.fx.interval));
  }, n.fx.stop = function () {
    a.clearInterval(Ta), Ta = null;
  }, n.fx.speeds = { slow: 600, fast: 200, _default: 400 }, n.fn.delay = function (b, c) {
    return b = n.fx ? n.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function (c, d) {
      var e = a.setTimeout(c, b);d.stop = function () {
        a.clearTimeout(e);
      };
    });
  }, function () {
    var a = d.createElement("input"),
        b = d.createElement("select"),
        c = b.appendChild(d.createElement("option"));a.type = "checkbox", l.checkOn = "" !== a.value, l.optSelected = c.selected, b.disabled = !0, l.optDisabled = !c.disabled, a = d.createElement("input"), a.value = "t", a.type = "radio", l.radioValue = "t" === a.value;
  }();var ab,
      bb = n.expr.attrHandle;n.fn.extend({ attr: function attr(a, b) {
      return K(this, n.attr, a, b, arguments.length > 1);
    }, removeAttr: function removeAttr(a) {
      return this.each(function () {
        n.removeAttr(this, a);
      });
    } }), n.extend({ attr: function attr(a, b, c) {
      var d,
          e,
          f = a.nodeType;if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), e = n.attrHooks[b] || (n.expr.match.bool.test(b) ? ab : void 0)), void 0 !== c ? null === c ? void n.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = n.find.attr(a, b), null == d ? void 0 : d));
    }, attrHooks: { type: { set: function set(a, b) {
          if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
            var c = a.value;return a.setAttribute("type", b), c && (a.value = c), b;
          }
        } } }, removeAttr: function removeAttr(a, b) {
      var c,
          d,
          e = 0,
          f = b && b.match(G);if (f && 1 === a.nodeType) while (c = f[e++]) {
        d = n.propFix[c] || c, n.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c);
      }
    } }), ab = { set: function set(a, b, c) {
      return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c;
    } }, n.each(n.expr.match.bool.source.match(/\w+/g), function (a, b) {
    var c = bb[b] || n.find.attr;bb[b] = function (a, b, d) {
      var e, f;return d || (f = bb[b], bb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, bb[b] = f), e;
    };
  });var cb = /^(?:input|select|textarea|button)$/i,
      db = /^(?:a|area)$/i;n.fn.extend({ prop: function prop(a, b) {
      return K(this, n.prop, a, b, arguments.length > 1);
    }, removeProp: function removeProp(a) {
      return this.each(function () {
        delete this[n.propFix[a] || a];
      });
    } }), n.extend({ prop: function prop(a, b, c) {
      var d,
          e,
          f = a.nodeType;if (3 !== f && 8 !== f && 2 !== f) return 1 === f && n.isXMLDoc(a) || (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b];
    }, propHooks: { tabIndex: { get: function get(a) {
          var b = n.find.attr(a, "tabindex");return b ? parseInt(b, 10) : cb.test(a.nodeName) || db.test(a.nodeName) && a.href ? 0 : -1;
        } } }, propFix: { "for": "htmlFor", "class": "className" } }), l.optSelected || (n.propHooks.selected = { get: function get(a) {
      var b = a.parentNode;return b && b.parentNode && b.parentNode.selectedIndex, null;
    }, set: function set(a) {
      var b = a.parentNode;b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
    } }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    n.propFix[this.toLowerCase()] = this;
  });var eb = /[\t\r\n\f]/g;function fb(a) {
    return a.getAttribute && a.getAttribute("class") || "";
  }n.fn.extend({ addClass: function addClass(a) {
      var b,
          c,
          d,
          e,
          f,
          g,
          h,
          i = 0;if (n.isFunction(a)) return this.each(function (b) {
        n(this).addClass(a.call(this, b, fb(this)));
      });if ("string" == typeof a && a) {
        b = a.match(G) || [];while (c = this[i++]) {
          if (e = fb(c), d = 1 === c.nodeType && (" " + e + " ").replace(eb, " ")) {
            g = 0;while (f = b[g++]) {
              d.indexOf(" " + f + " ") < 0 && (d += f + " ");
            }h = n.trim(d), e !== h && c.setAttribute("class", h);
          }
        }
      }return this;
    }, removeClass: function removeClass(a) {
      var b,
          c,
          d,
          e,
          f,
          g,
          h,
          i = 0;if (n.isFunction(a)) return this.each(function (b) {
        n(this).removeClass(a.call(this, b, fb(this)));
      });if (!arguments.length) return this.attr("class", "");if ("string" == typeof a && a) {
        b = a.match(G) || [];while (c = this[i++]) {
          if (e = fb(c), d = 1 === c.nodeType && (" " + e + " ").replace(eb, " ")) {
            g = 0;while (f = b[g++]) {
              while (d.indexOf(" " + f + " ") > -1) {
                d = d.replace(" " + f + " ", " ");
              }
            }h = n.trim(d), e !== h && c.setAttribute("class", h);
          }
        }
      }return this;
    }, toggleClass: function toggleClass(a, b) {
      var c = typeof a === "undefined" ? "undefined" : _typeof(a);return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : n.isFunction(a) ? this.each(function (c) {
        n(this).toggleClass(a.call(this, c, fb(this), b), b);
      }) : this.each(function () {
        var b, d, e, f;if ("string" === c) {
          d = 0, e = n(this), f = a.match(G) || [];while (b = f[d++]) {
            e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
          }
        } else void 0 !== a && "boolean" !== c || (b = fb(this), b && N.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : N.get(this, "__className__") || ""));
      });
    }, hasClass: function hasClass(a) {
      var b,
          c,
          d = 0;b = " " + a + " ";while (c = this[d++]) {
        if (1 === c.nodeType && (" " + fb(c) + " ").replace(eb, " ").indexOf(b) > -1) return !0;
      }return !1;
    } });var gb = /\r/g,
      hb = /[\x20\t\r\n\f]+/g;n.fn.extend({ val: function val(a) {
      var b,
          c,
          d,
          e = this[0];{
        if (arguments.length) return d = n.isFunction(a), this.each(function (c) {
          var e;1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function (a) {
            return null == a ? "" : a + "";
          })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e));
        });if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(gb, "") : null == c ? "" : c);
      }
    } }), n.extend({ valHooks: { option: { get: function get(a) {
          var b = n.find.attr(a, "value");return null != b ? b : n.trim(n.text(a)).replace(hb, " ");
        } }, select: { get: function get(a) {
          for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) {
            if (c = d[i], (c.selected || i === e) && (l.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !n.nodeName(c.parentNode, "optgroup"))) {
              if (b = n(c).val(), f) return b;g.push(b);
            }
          }return g;
        }, set: function set(a, b) {
          var c,
              d,
              e = a.options,
              f = n.makeArray(b),
              g = e.length;while (g--) {
            d = e[g], (d.selected = n.inArray(n.valHooks.option.get(d), f) > -1) && (c = !0);
          }return c || (a.selectedIndex = -1), f;
        } } } }), n.each(["radio", "checkbox"], function () {
    n.valHooks[this] = { set: function set(a, b) {
        return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) > -1 : void 0;
      } }, l.checkOn || (n.valHooks[this].get = function (a) {
      return null === a.getAttribute("value") ? "on" : a.value;
    });
  });var ib = /^(?:focusinfocus|focusoutblur)$/;n.extend(n.event, { trigger: function trigger(b, c, e, f) {
      var g,
          h,
          i,
          j,
          l,
          m,
          o,
          p = [e || d],
          q = k.call(b, "type") ? b.type : b,
          r = k.call(b, "namespace") ? b.namespace.split(".") : [];if (h = i = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !ib.test(q + n.event.triggered) && (q.indexOf(".") > -1 && (r = q.split("."), q = r.shift(), r.sort()), l = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b), b.isTrigger = f ? 2 : 3, b.namespace = r.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : n.makeArray(c, [b]), o = n.event.special[q] || {}, f || !o.trigger || o.trigger.apply(e, c) !== !1)) {
        if (!f && !o.noBubble && !n.isWindow(e)) {
          for (j = o.delegateType || q, ib.test(j + q) || (h = h.parentNode); h; h = h.parentNode) {
            p.push(h), i = h;
          }i === (e.ownerDocument || d) && p.push(i.defaultView || i.parentWindow || a);
        }g = 0;while ((h = p[g++]) && !b.isPropagationStopped()) {
          b.type = g > 1 ? j : o.bindType || q, m = (N.get(h, "events") || {})[b.type] && N.get(h, "handle"), m && m.apply(h, c), m = l && h[l], m && m.apply && L(h) && (b.result = m.apply(h, c), b.result === !1 && b.preventDefault());
        }return b.type = q, f || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !L(e) || l && n.isFunction(e[q]) && !n.isWindow(e) && (i = e[l], i && (e[l] = null), n.event.triggered = q, e[q](), n.event.triggered = void 0, i && (e[l] = i)), b.result;
      }
    }, simulate: function simulate(a, b, c) {
      var d = n.extend(new n.Event(), c, { type: a, isSimulated: !0 });n.event.trigger(d, null, b);
    } }), n.fn.extend({ trigger: function trigger(a, b) {
      return this.each(function () {
        n.event.trigger(a, b, this);
      });
    }, triggerHandler: function triggerHandler(a, b) {
      var c = this[0];return c ? n.event.trigger(a, b, c, !0) : void 0;
    } }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
    n.fn[b] = function (a, c) {
      return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
    };
  }), n.fn.extend({ hover: function hover(a, b) {
      return this.mouseenter(a).mouseleave(b || a);
    } }), l.focusin = "onfocusin" in a, l.focusin || n.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
    var c = function c(a) {
      n.event.simulate(b, a.target, n.event.fix(a));
    };n.event.special[b] = { setup: function setup() {
        var d = this.ownerDocument || this,
            e = N.access(d, b);e || d.addEventListener(a, c, !0), N.access(d, b, (e || 0) + 1);
      }, teardown: function teardown() {
        var d = this.ownerDocument || this,
            e = N.access(d, b) - 1;e ? N.access(d, b, e) : (d.removeEventListener(a, c, !0), N.remove(d, b));
      } };
  });var jb = a.location,
      kb = n.now(),
      lb = /\?/;n.parseJSON = function (a) {
    return JSON.parse(a + "");
  }, n.parseXML = function (b) {
    var c;if (!b || "string" != typeof b) return null;try {
      c = new a.DOMParser().parseFromString(b, "text/xml");
    } catch (d) {
      c = void 0;
    }return c && !c.getElementsByTagName("parsererror").length || n.error("Invalid XML: " + b), c;
  };var mb = /#.*$/,
      nb = /([?&])_=[^&]*/,
      ob = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      pb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      qb = /^(?:GET|HEAD)$/,
      rb = /^\/\//,
      sb = {},
      tb = {},
      ub = "*/".concat("*"),
      vb = d.createElement("a");vb.href = jb.href;function wb(a) {
    return function (b, c) {
      "string" != typeof b && (c = b, b = "*");var d,
          e = 0,
          f = b.toLowerCase().match(G) || [];if (n.isFunction(c)) while (d = f[e++]) {
        "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
      }
    };
  }function xb(a, b, c, d) {
    var e = {},
        f = a === tb;function g(h) {
      var i;return e[h] = !0, n.each(a[h] || [], function (a, h) {
        var j = h(b, c, d);return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1);
      }), i;
    }return g(b.dataTypes[0]) || !e["*"] && g("*");
  }function yb(a, b) {
    var c,
        d,
        e = n.ajaxSettings.flatOptions || {};for (c in b) {
      void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
    }return d && n.extend(!0, a, d), a;
  }function zb(a, b, c) {
    var d,
        e,
        f,
        g,
        h = a.contents,
        i = a.dataTypes;while ("*" === i[0]) {
      i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
    }if (d) for (e in h) {
      if (h[e] && h[e].test(d)) {
        i.unshift(e);break;
      }
    }if (i[0] in c) f = i[0];else {
      for (e in c) {
        if (!i[0] || a.converters[e + " " + i[0]]) {
          f = e;break;
        }g || (g = e);
      }f = f || g;
    }return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
  }function Ab(a, b, c, d) {
    var e,
        f,
        g,
        h,
        i,
        j = {},
        k = a.dataTypes.slice();if (k[1]) for (g in a.converters) {
      j[g.toLowerCase()] = a.converters[g];
    }f = k.shift();while (f) {
      if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i;else if ("*" !== i && i !== f) {
        if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) {
          if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
            g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));break;
          }
        }if (g !== !0) if (g && a["throws"]) b = g(b);else try {
          b = g(b);
        } catch (l) {
          return { state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f };
        }
      }
    }return { state: "success", data: b };
  }n.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: jb.href, type: "GET", isLocal: pb.test(jb.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": ub, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": n.parseJSON, "text xml": n.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function ajaxSetup(a, b) {
      return b ? yb(yb(a, n.ajaxSettings), b) : yb(n.ajaxSettings, a);
    }, ajaxPrefilter: wb(sb), ajaxTransport: wb(tb), ajax: function ajax(b, c) {
      "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && (c = b, b = void 0), c = c || {};var e,
          f,
          g,
          h,
          i,
          j,
          k,
          l,
          m = n.ajaxSetup({}, c),
          o = m.context || m,
          p = m.context && (o.nodeType || o.jquery) ? n(o) : n.event,
          q = n.Deferred(),
          r = n.Callbacks("once memory"),
          s = m.statusCode || {},
          t = {},
          u = {},
          v = 0,
          w = "canceled",
          x = { readyState: 0, getResponseHeader: function getResponseHeader(a) {
          var b;if (2 === v) {
            if (!h) {
              h = {};while (b = ob.exec(g)) {
                h[b[1].toLowerCase()] = b[2];
              }
            }b = h[a.toLowerCase()];
          }return null == b ? null : b;
        }, getAllResponseHeaders: function getAllResponseHeaders() {
          return 2 === v ? g : null;
        }, setRequestHeader: function setRequestHeader(a, b) {
          var c = a.toLowerCase();return v || (a = u[c] = u[c] || a, t[a] = b), this;
        }, overrideMimeType: function overrideMimeType(a) {
          return v || (m.mimeType = a), this;
        }, statusCode: function statusCode(a) {
          var b;if (a) if (2 > v) for (b in a) {
            s[b] = [s[b], a[b]];
          } else x.always(a[x.status]);return this;
        }, abort: function abort(a) {
          var b = a || w;return e && e.abort(b), z(0, b), this;
        } };if (q.promise(x).complete = r.add, x.success = x.done, x.error = x.fail, m.url = ((b || m.url || jb.href) + "").replace(mb, "").replace(rb, jb.protocol + "//"), m.type = c.method || c.type || m.method || m.type, m.dataTypes = n.trim(m.dataType || "*").toLowerCase().match(G) || [""], null == m.crossDomain) {
        j = d.createElement("a");try {
          j.href = m.url, j.href = j.href, m.crossDomain = vb.protocol + "//" + vb.host != j.protocol + "//" + j.host;
        } catch (y) {
          m.crossDomain = !0;
        }
      }if (m.data && m.processData && "string" != typeof m.data && (m.data = n.param(m.data, m.traditional)), xb(sb, m, c, x), 2 === v) return x;k = n.event && m.global, k && 0 === n.active++ && n.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !qb.test(m.type), f = m.url, m.hasContent || (m.data && (f = m.url += (lb.test(f) ? "&" : "?") + m.data, delete m.data), m.cache === !1 && (m.url = nb.test(f) ? f.replace(nb, "$1_=" + kb++) : f + (lb.test(f) ? "&" : "?") + "_=" + kb++)), m.ifModified && (n.lastModified[f] && x.setRequestHeader("If-Modified-Since", n.lastModified[f]), n.etag[f] && x.setRequestHeader("If-None-Match", n.etag[f])), (m.data && m.hasContent && m.contentType !== !1 || c.contentType) && x.setRequestHeader("Content-Type", m.contentType), x.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + ub + "; q=0.01" : "") : m.accepts["*"]);for (l in m.headers) {
        x.setRequestHeader(l, m.headers[l]);
      }if (m.beforeSend && (m.beforeSend.call(o, x, m) === !1 || 2 === v)) return x.abort();w = "abort";for (l in { success: 1, error: 1, complete: 1 }) {
        x[l](m[l]);
      }if (e = xb(tb, m, c, x)) {
        if (x.readyState = 1, k && p.trigger("ajaxSend", [x, m]), 2 === v) return x;m.async && m.timeout > 0 && (i = a.setTimeout(function () {
          x.abort("timeout");
        }, m.timeout));try {
          v = 1, e.send(t, z);
        } catch (y) {
          if (!(2 > v)) throw y;z(-1, y);
        }
      } else z(-1, "No Transport");function z(b, c, d, h) {
        var j,
            l,
            t,
            u,
            w,
            y = c;2 !== v && (v = 2, i && a.clearTimeout(i), e = void 0, g = h || "", x.readyState = b > 0 ? 4 : 0, j = b >= 200 && 300 > b || 304 === b, d && (u = zb(m, x, d)), u = Ab(m, u, x, j), j ? (m.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (n.lastModified[f] = w), w = x.getResponseHeader("etag"), w && (n.etag[f] = w)), 204 === b || "HEAD" === m.type ? y = "nocontent" : 304 === b ? y = "notmodified" : (y = u.state, l = u.data, t = u.error, j = !t)) : (t = y, !b && y || (y = "error", 0 > b && (b = 0))), x.status = b, x.statusText = (c || y) + "", j ? q.resolveWith(o, [l, y, x]) : q.rejectWith(o, [x, y, t]), x.statusCode(s), s = void 0, k && p.trigger(j ? "ajaxSuccess" : "ajaxError", [x, m, j ? l : t]), r.fireWith(o, [x, y]), k && (p.trigger("ajaxComplete", [x, m]), --n.active || n.event.trigger("ajaxStop")));
      }return x;
    }, getJSON: function getJSON(a, b, c) {
      return n.get(a, b, c, "json");
    }, getScript: function getScript(a, b) {
      return n.get(a, void 0, b, "script");
    } }), n.each(["get", "post"], function (a, b) {
    n[b] = function (a, c, d, e) {
      return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax(n.extend({ url: a, type: b, dataType: e, data: c, success: d }, n.isPlainObject(a) && a));
    };
  }), n._evalUrl = function (a) {
    return n.ajax({ url: a, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0 });
  }, n.fn.extend({ wrapAll: function wrapAll(a) {
      var b;return n.isFunction(a) ? this.each(function (b) {
        n(this).wrapAll(a.call(this, b));
      }) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
        var a = this;while (a.firstElementChild) {
          a = a.firstElementChild;
        }return a;
      }).append(this)), this);
    }, wrapInner: function wrapInner(a) {
      return n.isFunction(a) ? this.each(function (b) {
        n(this).wrapInner(a.call(this, b));
      }) : this.each(function () {
        var b = n(this),
            c = b.contents();c.length ? c.wrapAll(a) : b.append(a);
      });
    }, wrap: function wrap(a) {
      var b = n.isFunction(a);return this.each(function (c) {
        n(this).wrapAll(b ? a.call(this, c) : a);
      });
    }, unwrap: function unwrap() {
      return this.parent().each(function () {
        n.nodeName(this, "body") || n(this).replaceWith(this.childNodes);
      }).end();
    } }), n.expr.filters.hidden = function (a) {
    return !n.expr.filters.visible(a);
  }, n.expr.filters.visible = function (a) {
    return a.offsetWidth > 0 || a.offsetHeight > 0 || a.getClientRects().length > 0;
  };var Bb = /%20/g,
      Cb = /\[\]$/,
      Db = /\r?\n/g,
      Eb = /^(?:submit|button|image|reset|file)$/i,
      Fb = /^(?:input|select|textarea|keygen)/i;function Gb(a, b, c, d) {
    var e;if (n.isArray(b)) n.each(b, function (b, e) {
      c || Cb.test(a) ? d(a, e) : Gb(a + "[" + ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && null != e ? b : "") + "]", e, c, d);
    });else if (c || "object" !== n.type(b)) d(a, b);else for (e in b) {
      Gb(a + "[" + e + "]", b[e], c, d);
    }
  }n.param = function (a, b) {
    var c,
        d = [],
        e = function e(a, b) {
      b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b);
    };if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function () {
      e(this.name, this.value);
    });else for (c in a) {
      Gb(c, a[c], b, e);
    }return d.join("&").replace(Bb, "+");
  }, n.fn.extend({ serialize: function serialize() {
      return n.param(this.serializeArray());
    }, serializeArray: function serializeArray() {
      return this.map(function () {
        var a = n.prop(this, "elements");return a ? n.makeArray(a) : this;
      }).filter(function () {
        var a = this.type;return this.name && !n(this).is(":disabled") && Fb.test(this.nodeName) && !Eb.test(a) && (this.checked || !X.test(a));
      }).map(function (a, b) {
        var c = n(this).val();return null == c ? null : n.isArray(c) ? n.map(c, function (a) {
          return { name: b.name, value: a.replace(Db, "\r\n") };
        }) : { name: b.name, value: c.replace(Db, "\r\n") };
      }).get();
    } }), n.ajaxSettings.xhr = function () {
    try {
      return new a.XMLHttpRequest();
    } catch (b) {}
  };var Hb = { 0: 200, 1223: 204 },
      Ib = n.ajaxSettings.xhr();l.cors = !!Ib && "withCredentials" in Ib, l.ajax = Ib = !!Ib, n.ajaxTransport(function (b) {
    var _c, d;return l.cors || Ib && !b.crossDomain ? { send: function send(e, f) {
        var g,
            h = b.xhr();if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields) for (g in b.xhrFields) {
          h[g] = b.xhrFields[g];
        }b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");for (g in e) {
          h.setRequestHeader(g, e[g]);
        }_c = function c(a) {
          return function () {
            _c && (_c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Hb[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? { binary: h.response } : { text: h.responseText }, h.getAllResponseHeaders()));
          };
        }, h.onload = _c(), d = h.onerror = _c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function () {
          4 === h.readyState && a.setTimeout(function () {
            _c && d();
          });
        }, _c = _c("abort");try {
          h.send(b.hasContent && b.data || null);
        } catch (i) {
          if (_c) throw i;
        }
      }, abort: function abort() {
        _c && _c();
      } } : void 0;
  }), n.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function textScript(a) {
        return n.globalEval(a), a;
      } } }), n.ajaxPrefilter("script", function (a) {
    void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
  }), n.ajaxTransport("script", function (a) {
    if (a.crossDomain) {
      var b, _c2;return { send: function send(e, f) {
          b = n("<script>").prop({ charset: a.scriptCharset, src: a.url }).on("load error", _c2 = function c(a) {
            b.remove(), _c2 = null, a && f("error" === a.type ? 404 : 200, a.type);
          }), d.head.appendChild(b[0]);
        }, abort: function abort() {
          _c2 && _c2();
        } };
    }
  });var Jb = [],
      Kb = /(=)\?(?=&|$)|\?\?/;n.ajaxSetup({ jsonp: "callback", jsonpCallback: function jsonpCallback() {
      var a = Jb.pop() || n.expando + "_" + kb++;return this[a] = !0, a;
    } }), n.ajaxPrefilter("json jsonp", function (b, c, d) {
    var e,
        f,
        g,
        h = b.jsonp !== !1 && (Kb.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Kb.test(b.data) && "data");return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Kb, "$1" + e) : b.jsonp !== !1 && (b.url += (lb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
      return g || n.error(e + " was not called"), g[0];
    }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
      g = arguments;
    }, d.always(function () {
      void 0 === f ? n(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Jb.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0;
    }), "script") : void 0;
  }), n.parseHTML = function (a, b, c) {
    if (!a || "string" != typeof a) return null;"boolean" == typeof b && (c = b, b = !1), b = b || d;var e = x.exec(a),
        f = !c && [];return e ? [b.createElement(e[1])] : (e = ca([a], b, f), f && f.length && n(f).remove(), n.merge([], e.childNodes));
  };var Lb = n.fn.load;n.fn.load = function (a, b, c) {
    if ("string" != typeof a && Lb) return Lb.apply(this, arguments);var d,
        e,
        f,
        g = this,
        h = a.indexOf(" ");return h > -1 && (d = n.trim(a.slice(h)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && (e = "POST"), g.length > 0 && n.ajax({ url: a, type: e || "GET", dataType: "html", data: b }).done(function (a) {
      f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a);
    }).always(c && function (a, b) {
      g.each(function () {
        c.apply(this, f || [a.responseText, b, a]);
      });
    }), this;
  }, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
    n.fn[b] = function (a) {
      return this.on(b, a);
    };
  }), n.expr.filters.animated = function (a) {
    return n.grep(n.timers, function (b) {
      return a === b.elem;
    }).length;
  };function Mb(a) {
    return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView;
  }n.offset = { setOffset: function setOffset(a, b, c) {
      var d,
          e,
          f,
          g,
          h,
          i,
          j,
          k = n.css(a, "position"),
          l = n(a),
          m = {};"static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, n.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m);
    } }, n.fn.extend({ offset: function offset(a) {
      if (arguments.length) return void 0 === a ? this : this.each(function (b) {
        n.offset.setOffset(this, a, b);
      });var b,
          c,
          d = this[0],
          e = { top: 0, left: 0 },
          f = d && d.ownerDocument;if (f) return b = f.documentElement, n.contains(b, d) ? (e = d.getBoundingClientRect(), c = Mb(f), { top: e.top + c.pageYOffset - b.clientTop, left: e.left + c.pageXOffset - b.clientLeft }) : e;
    }, position: function position() {
      if (this[0]) {
        var a,
            b,
            c = this[0],
            d = { top: 0, left: 0 };return "fixed" === n.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (d = a.offset()), d.top += n.css(a[0], "borderTopWidth", !0), d.left += n.css(a[0], "borderLeftWidth", !0)), { top: b.top - d.top - n.css(c, "marginTop", !0), left: b.left - d.left - n.css(c, "marginLeft", !0) };
      }
    }, offsetParent: function offsetParent() {
      return this.map(function () {
        var a = this.offsetParent;while (a && "static" === n.css(a, "position")) {
          a = a.offsetParent;
        }return a || Ea;
      });
    } }), n.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (a, b) {
    var c = "pageYOffset" === b;n.fn[a] = function (d) {
      return K(this, function (a, d, e) {
        var f = Mb(a);return void 0 === e ? f ? f[b] : a[d] : void (f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e);
      }, a, d, arguments.length);
    };
  }), n.each(["top", "left"], function (a, b) {
    n.cssHooks[b] = Ga(l.pixelPosition, function (a, c) {
      return c ? (c = Fa(a, b), Ba.test(c) ? n(a).position()[b] + "px" : c) : void 0;
    });
  }), n.each({ Height: "height", Width: "width" }, function (a, b) {
    n.each({ padding: "inner" + a, content: b, "": "outer" + a }, function (c, d) {
      n.fn[d] = function (d, e) {
        var f = arguments.length && (c || "boolean" != typeof d),
            g = c || (d === !0 || e === !0 ? "margin" : "border");return K(this, function (b, c, d) {
          var e;return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g);
        }, b, f ? d : void 0, f, null);
      };
    });
  }), n.fn.extend({ bind: function bind(a, b, c) {
      return this.on(a, null, b, c);
    }, unbind: function unbind(a, b) {
      return this.off(a, null, b);
    }, delegate: function delegate(a, b, c, d) {
      return this.on(b, a, c, d);
    }, undelegate: function undelegate(a, b, c) {
      return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
    }, size: function size() {
      return this.length;
    } }), n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
    return n;
  });var Nb = a.jQuery,
      Ob = a.$;return n.noConflict = function (b) {
    return a.$ === n && (a.$ = Ob), b && a.jQuery === n && (a.jQuery = Nb), n;
  }, b || (a.jQuery = a.$ = n), n;
});
//# sourceMappingURL=jquery.min.js.map

"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * Vue.js v2.1.6
 * (c) 2014-2016 Evan You
 * Released under the MIT License.
 */
!function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Vue = t();
}(window, function () {
  "use strict";
  function e(e) {
    return null == e ? "" : "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? JSON.stringify(e, null, 2) : String(e);
  }function t(e) {
    var t = parseFloat(e, 10);return t || 0 === t ? t : e;
  }function n(e, t) {
    for (var n = Object.create(null), r = e.split(","), i = 0; i < r.length; i++) {
      n[r[i]] = !0;
    }return t ? function (e) {
      return n[e.toLowerCase()];
    } : function (e) {
      return n[e];
    };
  }function r(e, t) {
    if (e.length) {
      var n = e.indexOf(t);if (n > -1) return e.splice(n, 1);
    }
  }function i(e, t) {
    return Wr.call(e, t);
  }function a(e) {
    return "string" == typeof e || "number" == typeof e;
  }function o(e) {
    var t = Object.create(null);return function (n) {
      var r = t[n];return r || (t[n] = e(n));
    };
  }function s(e, t) {
    function n(n) {
      var r = arguments.length;return r ? r > 1 ? e.apply(t, arguments) : e.call(t, n) : e.call(t);
    }return n._length = e.length, n;
  }function c(e, t) {
    t = t || 0;for (var n = e.length - t, r = new Array(n); n--;) {
      r[n] = e[n + t];
    }return r;
  }function l(e, t) {
    for (var n in t) {
      e[n] = t[n];
    }return e;
  }function u(e) {
    return null !== e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e));
  }function f(e) {
    return ei.call(e) === ti;
  }function d(e) {
    for (var t = {}, n = 0; n < e.length; n++) {
      e[n] && l(t, e[n]);
    }return t;
  }function p() {}function v(e) {
    return e.reduce(function (e, t) {
      return e.concat(t.staticKeys || []);
    }, []).join(",");
  }function h(e, t) {
    return e == t || !(!u(e) || !u(t)) && JSON.stringify(e) === JSON.stringify(t);
  }function m(e, t) {
    for (var n = 0; n < e.length; n++) {
      if (h(e[n], t)) return n;
    }return -1;
  }function g(e) {
    var t = (e + "").charCodeAt(0);return 36 === t || 95 === t;
  }function y(e, t, n, r) {
    Object.defineProperty(e, t, { value: n, enumerable: !!r, writable: !0, configurable: !0 });
  }function _(e) {
    if (!ai.test(e)) {
      var t = e.split(".");return function (e) {
        for (var n = 0; n < t.length; n++) {
          if (!e) return;e = e[t[n]];
        }return e;
      };
    }
  }function b(e) {
    return (/native code/.test(e.toString())
    );
  }function $(e) {
    bi.target && $i.push(bi.target), bi.target = e;
  }function w() {
    bi.target = $i.pop();
  }function x(e, t) {
    e.__proto__ = t;
  }function C(e, t, n) {
    for (var r = 0, i = n.length; r < i; r++) {
      var a = n[r];y(e, a, t[a]);
    }
  }function k(e) {
    if (u(e)) {
      var t;return i(e, "__ob__") && e.__ob__ instanceof Ai ? t = e.__ob__ : ki.shouldConvert && !vi() && (Array.isArray(e) || f(e)) && Object.isExtensible(e) && !e._isVue && (t = new Ai(e)), t;
    }
  }function A(e, t, n, r) {
    var i = new bi(),
        a = Object.getOwnPropertyDescriptor(e, t);if (!a || a.configurable !== !1) {
      var o = a && a.get,
          s = a && a.set,
          c = k(n);Object.defineProperty(e, t, { enumerable: !0, configurable: !0, get: function get() {
          var t = o ? o.call(e) : n;return bi.target && (i.depend(), c && c.dep.depend(), Array.isArray(t) && T(t)), t;
        }, set: function set(t) {
          var r = o ? o.call(e) : n;t === r || t !== t && r !== r || (s ? s.call(e, t) : n = t, c = k(t), i.notify());
        } });
    }
  }function O(e, t, n) {
    if (Array.isArray(e)) return e.length = Math.max(e.length, t), e.splice(t, 1, n), n;if (i(e, t)) return void (e[t] = n);var r = e.__ob__;if (!(e._isVue || r && r.vmCount)) return r ? (A(r.value, t, n), r.dep.notify(), n) : void (e[t] = n);
  }function S(e, t) {
    var n = e.__ob__;e._isVue || n && n.vmCount || i(e, t) && (delete e[t], n && n.dep.notify());
  }function T(e) {
    for (var t = void 0, n = 0, r = e.length; n < r; n++) {
      t = e[n], t && t.__ob__ && t.__ob__.dep.depend(), Array.isArray(t) && T(t);
    }
  }function E(e, t) {
    if (!t) return e;for (var n, r, a, o = Object.keys(t), s = 0; s < o.length; s++) {
      n = o[s], r = e[n], a = t[n], i(e, n) ? f(r) && f(a) && E(r, a) : O(e, n, a);
    }return e;
  }function j(e, t) {
    return t ? e ? e.concat(t) : Array.isArray(t) ? t : [t] : e;
  }function N(e, t) {
    var n = Object.create(e || null);return t ? l(n, t) : n;
  }function L(e) {
    var t = e.props;if (t) {
      var n,
          r,
          i,
          a = {};if (Array.isArray(t)) for (n = t.length; n--;) {
        r = t[n], "string" == typeof r && (i = Gr(r), a[i] = { type: null });
      } else if (f(t)) for (var o in t) {
        r = t[o], i = Gr(o), a[i] = f(r) ? r : { type: r };
      }e.props = a;
    }
  }function D(e) {
    var t = e.directives;if (t) for (var n in t) {
      var r = t[n];"function" == typeof r && (t[n] = { bind: r, update: r });
    }
  }function M(e, t, n) {
    function r(r) {
      var i = Oi[r] || Si;u[r] = i(e[r], t[r], n, r);
    }L(t), D(t);var a = t.extends;if (a && (e = "function" == typeof a ? M(e, a.options, n) : M(e, a, n)), t.mixins) for (var o = 0, s = t.mixins.length; o < s; o++) {
      var c = t.mixins[o];c.prototype instanceof Ie && (c = c.options), e = M(e, c, n);
    }var l,
        u = {};for (l in e) {
      r(l);
    }for (l in t) {
      i(e, l) || r(l);
    }return u;
  }function P(e, t, n, r) {
    if ("string" == typeof n) {
      var a = e[t];if (i(a, n)) return a[n];var o = Gr(n);if (i(a, o)) return a[o];var s = Yr(o);if (i(a, s)) return a[s];var c = a[n] || a[o] || a[s];return c;
    }
  }function R(e, t, n, r) {
    var a = t[e],
        o = !i(n, e),
        s = n[e];if (U(a.type) && (o && !i(a, "default") ? s = !1 : "" !== s && s !== Xr(e) || (s = !0)), void 0 === s) {
      s = I(r, a, e);var c = ki.shouldConvert;ki.shouldConvert = !0, k(s), ki.shouldConvert = c;
    }return s;
  }function I(e, t, n) {
    if (i(t, "default")) {
      var r = t.default;return u(r), e && e.$options.propsData && void 0 === e.$options.propsData[n] && void 0 !== e[n] ? e[n] : "function" == typeof r && t.type !== Function ? r.call(e) : r;
    }
  }function F(e) {
    var t = e && e.toString().match(/^\s*function (\w+)/);return t && t[1];
  }function U(e) {
    if (!Array.isArray(e)) return "Boolean" === F(e);for (var t = 0, n = e.length; t < n; t++) {
      if ("Boolean" === F(e[t])) return !0;
    }return !1;
  }function H() {
    Ei.length = 0, ji = {}, Ni = Li = !1;
  }function B() {
    for (Li = !0, Ei.sort(function (e, t) {
      return e.id - t.id;
    }), Di = 0; Di < Ei.length; Di++) {
      var e = Ei[Di],
          t = e.id;ji[t] = null, e.run();
    }hi && ii.devtools && hi.emit("flush"), H();
  }function V(e) {
    var t = e.id;if (null == ji[t]) {
      if (ji[t] = !0, Li) {
        for (var n = Ei.length - 1; n >= 0 && Ei[n].id > e.id;) {
          n--;
        }Ei.splice(Math.max(n, Di) + 1, 0, e);
      } else Ei.push(e);Ni || (Ni = !0, mi(B));
    }
  }function z(e) {
    Ri.clear(), J(e, Ri);
  }function J(e, t) {
    var n,
        r,
        i = Array.isArray(e);if ((i || u(e)) && Object.isExtensible(e)) {
      if (e.__ob__) {
        var a = e.__ob__.dep.id;if (t.has(a)) return;t.add(a);
      }if (i) for (n = e.length; n--;) {
        J(e[n], t);
      } else for (r = Object.keys(e), n = r.length; n--;) {
        J(e[r[n]], t);
      }
    }
  }function K(e) {
    e._watchers = [], q(e), Y(e), W(e), Z(e), Q(e);
  }function q(e) {
    var t = e.$options.props;if (t) {
      var n = e.$options.propsData || {},
          r = e.$options._propKeys = Object.keys(t),
          i = !e.$parent;ki.shouldConvert = i;for (var a = function a(i) {
        var a = r[i];A(e, a, R(a, t, n, e));
      }, o = 0; o < r.length; o++) {
        a(o);
      }ki.shouldConvert = !0;
    }
  }function W(e) {
    var t = e.$options.data;t = e._data = "function" == typeof t ? t.call(e) : t || {}, f(t) || (t = {});for (var n = Object.keys(t), r = e.$options.props, a = n.length; a--;) {
      r && i(r, n[a]) || te(e, n[a]);
    }k(t), t.__ob__ && t.__ob__.vmCount++;
  }function Z(e) {
    var t = e.$options.computed;if (t) for (var n in t) {
      var r = t[n];"function" == typeof r ? (Ii.get = G(r, e), Ii.set = p) : (Ii.get = r.get ? r.cache !== !1 ? G(r.get, e) : s(r.get, e) : p, Ii.set = r.set ? s(r.set, e) : p), Object.defineProperty(e, n, Ii);
    }
  }function G(e, t) {
    var n = new Pi(t, e, p, { lazy: !0 });return function () {
      return n.dirty && n.evaluate(), bi.target && n.depend(), n.value;
    };
  }function Y(e) {
    var t = e.$options.methods;if (t) for (var n in t) {
      e[n] = null == t[n] ? p : s(t[n], e);
    }
  }function Q(e) {
    var t = e.$options.watch;if (t) for (var n in t) {
      var r = t[n];if (Array.isArray(r)) for (var i = 0; i < r.length; i++) {
        X(e, n, r[i]);
      } else X(e, n, r);
    }
  }function X(e, t, n) {
    var r;f(n) && (r = n, n = n.handler), "string" == typeof n && (n = e[n]), e.$watch(t, n, r);
  }function ee(e) {
    var t = {};t.get = function () {
      return this._data;
    }, Object.defineProperty(e.prototype, "$data", t), e.prototype.$set = O, e.prototype.$delete = S, e.prototype.$watch = function (e, t, n) {
      var r = this;n = n || {}, n.user = !0;var i = new Pi(r, e, t, n);return n.immediate && t.call(r, i.value), function () {
        i.teardown();
      };
    };
  }function te(e, t) {
    g(t) || Object.defineProperty(e, t, { configurable: !0, enumerable: !0, get: function get() {
        return e._data[t];
      }, set: function set(n) {
        e._data[t] = n;
      } });
  }function ne(e) {
    return new Fi(void 0, void 0, void 0, String(e));
  }function re(e) {
    var t = new Fi(e.tag, e.data, e.children, e.text, e.elm, e.context, e.componentOptions);return t.ns = e.ns, t.isStatic = e.isStatic, t.key = e.key, t.isCloned = !0, t;
  }function ie(e) {
    for (var t = new Array(e.length), n = 0; n < e.length; n++) {
      t[n] = re(e[n]);
    }return t;
  }function ae(e) {
    var t = e.$options,
        n = t.parent;if (n && !t.abstract) {
      for (; n.$options.abstract && n.$parent;) {
        n = n.$parent;
      }n.$children.push(e);
    }e.$parent = n, e.$root = n ? n.$root : e, e.$children = [], e.$refs = {}, e._watcher = null, e._inactive = !1, e._isMounted = !1, e._isDestroyed = !1, e._isBeingDestroyed = !1;
  }function oe(e) {
    e.prototype._mount = function (e, t) {
      var n = this;return n.$el = e, n.$options.render || (n.$options.render = Ui), se(n, "beforeMount"), n._watcher = new Pi(n, function () {
        n._update(n._render(), t);
      }, p), t = !1, null == n.$vnode && (n._isMounted = !0, se(n, "mounted")), n;
    }, e.prototype._update = function (e, t) {
      var n = this;n._isMounted && se(n, "beforeUpdate");var r = n.$el,
          i = n._vnode,
          a = Hi;Hi = n, n._vnode = e, i ? n.$el = n.__patch__(i, e) : n.$el = n.__patch__(n.$el, e, t, !1, n.$options._parentElm, n.$options._refElm), Hi = a, r && (r.__vue__ = null), n.$el && (n.$el.__vue__ = n), n.$vnode && n.$parent && n.$vnode === n.$parent._vnode && (n.$parent.$el = n.$el), n._isMounted && se(n, "updated");
    }, e.prototype._updateFromParent = function (e, t, n, r) {
      var i = this,
          a = !(!i.$options._renderChildren && !r);if (i.$options._parentVnode = n, i.$vnode = n, i._vnode && (i._vnode.parent = n), i.$options._renderChildren = r, e && i.$options.props) {
        ki.shouldConvert = !1;for (var o = i.$options._propKeys || [], s = 0; s < o.length; s++) {
          var c = o[s];i[c] = R(c, i.$options.props, e, i);
        }ki.shouldConvert = !0, i.$options.propsData = e;
      }if (t) {
        var l = i.$options._parentListeners;i.$options._parentListeners = t, i._updateListeners(t, l);
      }a && (i.$slots = Ne(r, n.context), i.$forceUpdate());
    }, e.prototype.$forceUpdate = function () {
      var e = this;e._watcher && e._watcher.update();
    }, e.prototype.$destroy = function () {
      var e = this;if (!e._isBeingDestroyed) {
        se(e, "beforeDestroy"), e._isBeingDestroyed = !0;var t = e.$parent;!t || t._isBeingDestroyed || e.$options.abstract || r(t.$children, e), e._watcher && e._watcher.teardown();for (var n = e._watchers.length; n--;) {
          e._watchers[n].teardown();
        }e._data.__ob__ && e._data.__ob__.vmCount--, e._isDestroyed = !0, se(e, "destroyed"), e.$off(), e.$el && (e.$el.__vue__ = null), e.__patch__(e._vnode, null);
      }
    };
  }function se(e, t) {
    var n = e.$options[t];if (n) for (var r = 0, i = n.length; r < i; r++) {
      n[r].call(e);
    }e.$emit("hook:" + t);
  }function ce(e, t, n, r, i) {
    if (e) {
      var a = n.$options._base;if (u(e) && (e = a.extend(e)), "function" == typeof e) {
        if (!e.cid) if (e.resolved) e = e.resolved;else if (e = he(e, a, function () {
          n.$forceUpdate();
        }), !e) return;Re(e), t = t || {};var o = me(t, e);if (e.options.functional) return le(e, o, t, n, r);var s = t.on;t.on = t.nativeOn, e.options.abstract && (t = {}), ye(t);var c = e.options.name || i,
            l = new Fi("vue-component-" + e.cid + (c ? "-" + c : ""), t, void 0, void 0, void 0, n, { Ctor: e, propsData: o, listeners: s, tag: i, children: r });return l;
      }
    }
  }function le(e, t, n, r, i) {
    var a = {},
        o = e.options.props;if (o) for (var s in o) {
      a[s] = R(s, o, t);
    }var c = Object.create(r),
        l = function l(e, t, n, r) {
      return Oe(c, e, t, n, r, !0);
    },
        u = e.options.render.call(null, l, { props: a, data: n, parent: r, children: i, slots: function slots() {
        return Ne(i, r);
      } });return u instanceof Fi && (u.functionalContext = r, n.slot && ((u.data || (u.data = {})).slot = n.slot)), u;
  }function ue(e, t, n, r) {
    var i = e.componentOptions,
        a = { _isComponent: !0, parent: t, propsData: i.propsData, _componentTag: i.tag, _parentVnode: e, _parentListeners: i.listeners, _renderChildren: i.children, _parentElm: n || null, _refElm: r || null },
        o = e.data.inlineTemplate;return o && (a.render = o.render, a.staticRenderFns = o.staticRenderFns), new i.Ctor(a);
  }function fe(e, t, n, r) {
    if (!e.child || e.child._isDestroyed) {
      var i = e.child = ue(e, Hi, n, r);i.$mount(t ? e.elm : void 0, t);
    } else if (e.data.keepAlive) {
      var a = e;de(a, a);
    }
  }function de(e, t) {
    var n = t.componentOptions,
        r = t.child = e.child;r._updateFromParent(n.propsData, n.listeners, t, n.children);
  }function pe(e) {
    e.child._isMounted || (e.child._isMounted = !0, se(e.child, "mounted")), e.data.keepAlive && (e.child._inactive = !1, se(e.child, "activated"));
  }function ve(e) {
    e.child._isDestroyed || (e.data.keepAlive ? (e.child._inactive = !0, se(e.child, "deactivated")) : e.child.$destroy());
  }function he(e, t, n) {
    if (!e.requested) {
      e.requested = !0;var r = e.pendingCallbacks = [n],
          i = !0,
          a = function a(n) {
        if (u(n) && (n = t.extend(n)), e.resolved = n, !i) for (var a = 0, o = r.length; a < o; a++) {
          r[a](n);
        }
      },
          o = function o(e) {},
          s = e(a, o);return s && "function" == typeof s.then && !e.resolved && s.then(a, o), i = !1, e.resolved;
    }e.pendingCallbacks.push(n);
  }function me(e, t) {
    var n = t.options.props;if (n) {
      var r = {},
          i = e.attrs,
          a = e.props,
          o = e.domProps;if (i || a || o) for (var s in n) {
        var c = Xr(s);ge(r, a, s, c, !0) || ge(r, i, s, c) || ge(r, o, s, c);
      }return r;
    }
  }function ge(e, t, n, r, a) {
    if (t) {
      if (i(t, n)) return e[n] = t[n], a || delete t[n], !0;if (i(t, r)) return e[n] = t[r], a || delete t[r], !0;
    }return !1;
  }function ye(e) {
    e.hook || (e.hook = {});for (var t = 0; t < Vi.length; t++) {
      var n = Vi[t],
          r = e.hook[n],
          i = Bi[n];e.hook[n] = r ? _e(i, r) : i;
    }
  }function _e(e, t) {
    return function (n, r, i, a) {
      e(n, r, i, a), t(n, r, i, a);
    };
  }function be(e, t, n, r) {
    r += t;var i = e.__injected || (e.__injected = {});if (!i[r]) {
      i[r] = !0;var a = e[t];a ? e[t] = function () {
        a.apply(this, arguments), n.apply(this, arguments);
      } : e[t] = n;
    }
  }function $e(e, t, n, r, i) {
    var a, o, s, c, l, u, f;for (a in e) {
      if (o = e[a], s = t[a], o) {
        if (s) {
          if (o !== s) if (Array.isArray(s)) {
            s.length = o.length;for (var d = 0; d < s.length; d++) {
              s[d] = o[d];
            }e[a] = s;
          } else s.fn = o, e[a] = s;
        } else f = "~" === a.charAt(0), l = f ? a.slice(1) : a, u = "!" === l.charAt(0), l = u ? l.slice(1) : l, Array.isArray(o) ? n(l, o.invoker = we(o), f, u) : (o.invoker || (c = o, o = e[a] = {}, o.fn = c, o.invoker = xe(o)), n(l, o.invoker, f, u));
      } else ;
    }for (a in t) {
      e[a] || (f = "~" === a.charAt(0), l = f ? a.slice(1) : a, u = "!" === l.charAt(0), l = u ? l.slice(1) : l, r(l, t[a].invoker, u));
    }
  }function we(e) {
    return function (t) {
      for (var n = arguments, r = 1 === arguments.length, i = 0; i < e.length; i++) {
        r ? e[i](t) : e[i].apply(null, n);
      }
    };
  }function xe(e) {
    return function (t) {
      var n = 1 === arguments.length;n ? e.fn(t) : e.fn.apply(null, arguments);
    };
  }function Ce(e) {
    return a(e) ? [ne(e)] : Array.isArray(e) ? ke(e) : void 0;
  }function ke(e, t) {
    var n,
        r,
        i,
        o = [];for (n = 0; n < e.length; n++) {
      r = e[n], null != r && "boolean" != typeof r && (i = o[o.length - 1], Array.isArray(r) ? o.push.apply(o, ke(r, (t || "") + "_" + n)) : a(r) ? i && i.text ? i.text += String(r) : "" !== r && o.push(ne(r)) : r.text && i && i.text ? o[o.length - 1] = ne(i.text + r.text) : (r.tag && null == r.key && null != t && (r.key = "__vlist" + t + "_" + n + "__"), o.push(r)));
    }return o;
  }function Ae(e) {
    return e && e.filter(function (e) {
      return e && e.componentOptions;
    })[0];
  }function Oe(e, t, n, r, i, o) {
    return (Array.isArray(n) || a(n)) && (i = r, r = n, n = void 0), o && (i = !0), Se(e, t, n, r, i);
  }function Se(e, t, n, r, i) {
    if (n && n.__ob__) return Ui();if (!t) return Ui();Array.isArray(r) && "function" == typeof r[0] && (n = n || {}, n.scopedSlots = { default: r[0] }, r.length = 0), i && (r = Ce(r));var a, o;if ("string" == typeof t) {
      var s;o = ii.getTagNamespace(t), ii.isReservedTag(t) ? a = new Fi(ii.parsePlatformTagName(t), n, r, void 0, void 0, e) : (s = P(e.$options, "components", t)) ? a = ce(s, n, e, r, t) : (o = "foreignObject" === t ? "xhtml" : o, a = new Fi(t, n, r, void 0, void 0, e));
    } else a = ce(t, n, e, r);return a ? (o && Te(a, o), a) : Ui();
  }function Te(e, t) {
    if (e.ns = t, e.children) for (var n = 0, r = e.children.length; n < r; n++) {
      var i = e.children[n];i.tag && !i.ns && Te(i, t);
    }
  }function Ee(e) {
    e.$vnode = null, e._vnode = null, e._staticTrees = null;var t = e.$options._parentVnode,
        n = t && t.context;e.$slots = Ne(e.$options._renderChildren, n), e.$scopedSlots = {}, e._c = function (t, n, r, i) {
      return Oe(e, t, n, r, i, !1);
    }, e.$createElement = function (t, n, r, i) {
      return Oe(e, t, n, r, i, !0);
    }, e.$options.el && e.$mount(e.$options.el);
  }function je(n) {
    function r(e, t, n) {
      if (Array.isArray(e)) for (var r = 0; r < e.length; r++) {
        e[r] && "string" != typeof e[r] && i(e[r], t + "_" + r, n);
      } else i(e, t, n);
    }function i(e, t, n) {
      e.isStatic = !0, e.key = t, e.isOnce = n;
    }n.prototype.$nextTick = function (e) {
      return mi(e, this);
    }, n.prototype._render = function () {
      var e = this,
          t = e.$options,
          n = t.render,
          r = t.staticRenderFns,
          i = t._parentVnode;if (e._isMounted) for (var a in e.$slots) {
        e.$slots[a] = ie(e.$slots[a]);
      }i && i.data.scopedSlots && (e.$scopedSlots = i.data.scopedSlots), r && !e._staticTrees && (e._staticTrees = []), e.$vnode = i;var o;try {
        o = n.call(e._renderProxy, e.$createElement);
      } catch (t) {
        if (!ii.errorHandler) throw t;ii.errorHandler.call(null, t, e), o = e._vnode;
      }return o instanceof Fi || (o = Ui()), o.parent = i, o;
    }, n.prototype._s = e, n.prototype._v = ne, n.prototype._n = t, n.prototype._e = Ui, n.prototype._q = h, n.prototype._i = m, n.prototype._m = function (e, t) {
      var n = this._staticTrees[e];return n && !t ? Array.isArray(n) ? ie(n) : re(n) : (n = this._staticTrees[e] = this.$options.staticRenderFns[e].call(this._renderProxy), r(n, "__static__" + e, !1), n);
    }, n.prototype._o = function (e, t, n) {
      return r(e, "__once__" + t + (n ? "_" + n : ""), !0), e;
    }, n.prototype._f = function (e) {
      return P(this.$options, "filters", e, !0) || ri;
    }, n.prototype._l = function (e, t) {
      var n, r, i, a, o;if (Array.isArray(e)) for (n = new Array(e.length), r = 0, i = e.length; r < i; r++) {
        n[r] = t(e[r], r);
      } else if ("number" == typeof e) for (n = new Array(e), r = 0; r < e; r++) {
        n[r] = t(r + 1, r);
      } else if (u(e)) for (a = Object.keys(e), n = new Array(a.length), r = 0, i = a.length; r < i; r++) {
        o = a[r], n[r] = t(e[o], o, r);
      }return n;
    }, n.prototype._t = function (e, t, n) {
      var r = this.$scopedSlots[e];if (r) return r(n || {}) || t;var i = this.$slots[e];return i || t;
    }, n.prototype._b = function (e, t, n, r) {
      if (n) if (u(n)) {
        Array.isArray(n) && (n = d(n));for (var i in n) {
          if ("class" === i || "style" === i) e[i] = n[i];else {
            var a = r || ii.mustUseProp(t, i) ? e.domProps || (e.domProps = {}) : e.attrs || (e.attrs = {});a[i] = n[i];
          }
        }
      } else ;return e;
    }, n.prototype._k = function (e, t, n) {
      var r = ii.keyCodes[t] || n;return Array.isArray(r) ? r.indexOf(e) === -1 : r !== e;
    };
  }function Ne(e, t) {
    var n = {};if (!e) return n;for (var r, i, a = [], o = 0, s = e.length; o < s; o++) {
      if (i = e[o], (i.context === t || i.functionalContext === t) && i.data && (r = i.data.slot)) {
        var c = n[r] || (n[r] = []);"template" === i.tag ? c.push.apply(c, i.children) : c.push(i);
      } else a.push(i);
    }return a.length && (1 !== a.length || " " !== a[0].text && !a[0].isComment) && (n.default = a), n;
  }function Le(e) {
    e._events = Object.create(null);var t = e.$options._parentListeners,
        n = function n(t, _n2, r) {
      r ? e.$once(t, _n2) : e.$on(t, _n2);
    },
        r = s(e.$off, e);e._updateListeners = function (t, i) {
      $e(t, i || {}, n, r, e);
    }, t && e._updateListeners(t);
  }function De(e) {
    e.prototype.$on = function (e, t) {
      var n = this;return (n._events[e] || (n._events[e] = [])).push(t), n;
    }, e.prototype.$once = function (e, t) {
      function n() {
        r.$off(e, n), t.apply(r, arguments);
      }var r = this;return n.fn = t, r.$on(e, n), r;
    }, e.prototype.$off = function (e, t) {
      var n = this;if (!arguments.length) return n._events = Object.create(null), n;var r = n._events[e];if (!r) return n;if (1 === arguments.length) return n._events[e] = null, n;for (var i, a = r.length; a--;) {
        if (i = r[a], i === t || i.fn === t) {
          r.splice(a, 1);break;
        }
      }return n;
    }, e.prototype.$emit = function (e) {
      var t = this,
          n = t._events[e];if (n) {
        n = n.length > 1 ? c(n) : n;for (var r = c(arguments, 1), i = 0, a = n.length; i < a; i++) {
          n[i].apply(t, r);
        }
      }return t;
    };
  }function Me(e) {
    e.prototype._init = function (e) {
      var t = this;t._uid = zi++, t._isVue = !0, e && e._isComponent ? Pe(t, e) : t.$options = M(Re(t.constructor), e || {}, t), t._renderProxy = t, t._self = t, ae(t), Le(t), se(t, "beforeCreate"), K(t), se(t, "created"), Ee(t);
    };
  }function Pe(e, t) {
    var n = e.$options = Object.create(e.constructor.options);n.parent = t.parent, n.propsData = t.propsData, n._parentVnode = t._parentVnode, n._parentListeners = t._parentListeners, n._renderChildren = t._renderChildren, n._componentTag = t._componentTag, n._parentElm = t._parentElm, n._refElm = t._refElm, t.render && (n.render = t.render, n.staticRenderFns = t.staticRenderFns);
  }function Re(e) {
    var t = e.options;if (e.super) {
      var n = e.super.options,
          r = e.superOptions,
          i = e.extendOptions;n !== r && (e.superOptions = n, i.render = t.render, i.staticRenderFns = t.staticRenderFns, i._scopeId = t._scopeId, t = e.options = M(n, i), t.name && (t.components[t.name] = e));
    }return t;
  }function Ie(e) {
    this._init(e);
  }function Fe(e) {
    e.use = function (e) {
      if (!e.installed) {
        var t = c(arguments, 1);return t.unshift(this), "function" == typeof e.install ? e.install.apply(e, t) : e.apply(null, t), e.installed = !0, this;
      }
    };
  }function Ue(e) {
    e.mixin = function (e) {
      this.options = M(this.options, e);
    };
  }function He(e) {
    e.cid = 0;var t = 1;e.extend = function (e) {
      e = e || {};var n = this,
          r = n.cid,
          i = e._Ctor || (e._Ctor = {});if (i[r]) return i[r];var a = e.name || n.options.name,
          o = function o(e) {
        this._init(e);
      };return o.prototype = Object.create(n.prototype), o.prototype.constructor = o, o.cid = t++, o.options = M(n.options, e), o.super = n, o.extend = n.extend, o.mixin = n.mixin, o.use = n.use, ii._assetTypes.forEach(function (e) {
        o[e] = n[e];
      }), a && (o.options.components[a] = o), o.superOptions = n.options, o.extendOptions = e, i[r] = o, o;
    };
  }function Be(e) {
    ii._assetTypes.forEach(function (t) {
      e[t] = function (e, n) {
        return n ? ("component" === t && f(n) && (n.name = n.name || e, n = this.options._base.extend(n)), "directive" === t && "function" == typeof n && (n = { bind: n, update: n }), this.options[t + "s"][e] = n, n) : this.options[t + "s"][e];
      };
    });
  }function Ve(e, t) {
    return "string" == typeof e ? e.split(",").indexOf(t) > -1 : e.test(t);
  }function ze(e) {
    var t = {};t.get = function () {
      return ii;
    }, Object.defineProperty(e, "config", t), e.util = Ti, e.set = O, e.delete = S, e.nextTick = mi, e.options = Object.create(null), ii._assetTypes.forEach(function (t) {
      e.options[t + "s"] = Object.create(null);
    }), e.options._base = e, l(e.options.components, qi), Fe(e), Ue(e), He(e), Be(e);
  }function Je(e) {
    for (var t = e.data, n = e, r = e; r.child;) {
      r = r.child._vnode, r.data && (t = Ke(r.data, t));
    }for (; n = n.parent;) {
      n.data && (t = Ke(t, n.data));
    }return qe(t);
  }function Ke(e, t) {
    return { staticClass: We(e.staticClass, t.staticClass), class: e.class ? [e.class, t.class] : t.class };
  }function qe(e) {
    var t = e.class,
        n = e.staticClass;return n || t ? We(n, Ze(t)) : "";
  }function We(e, t) {
    return e ? t ? e + " " + t : e : t || "";
  }function Ze(e) {
    var t = "";if (!e) return t;if ("string" == typeof e) return e;if (Array.isArray(e)) {
      for (var n, r = 0, i = e.length; r < i; r++) {
        e[r] && (n = Ze(e[r])) && (t += n + " ");
      }return t.slice(0, -1);
    }if (u(e)) {
      for (var a in e) {
        e[a] && (t += a + " ");
      }return t.slice(0, -1);
    }return t;
  }function Ge(e) {
    return oa(e) ? "svg" : "math" === e ? "math" : void 0;
  }function Ye(e) {
    if (!si) return !0;if (ca(e)) return !1;if (e = e.toLowerCase(), null != la[e]) return la[e];var t = document.createElement(e);return e.indexOf("-") > -1 ? la[e] = t.constructor === window.HTMLUnknownElement || t.constructor === window.HTMLElement : la[e] = /HTMLUnknownElement/.test(t.toString());
  }function Qe(e) {
    if ("string" == typeof e) {
      if (e = document.querySelector(e), !e) return document.createElement("div");
    }return e;
  }function Xe(e, t) {
    var n = document.createElement(e);return "select" !== e ? n : (t.data && t.data.attrs && "multiple" in t.data.attrs && n.setAttribute("multiple", "multiple"), n);
  }function et(e, t) {
    return document.createElementNS(ia[e], t);
  }function tt(e) {
    return document.createTextNode(e);
  }function nt(e) {
    return document.createComment(e);
  }function rt(e, t, n) {
    e.insertBefore(t, n);
  }function it(e, t) {
    e.removeChild(t);
  }function at(e, t) {
    e.appendChild(t);
  }function ot(e) {
    return e.parentNode;
  }function st(e) {
    return e.nextSibling;
  }function ct(e) {
    return e.tagName;
  }function lt(e, t) {
    e.textContent = t;
  }function ut(e, t, n) {
    e.setAttribute(t, n);
  }function ft(e, t) {
    var n = e.data.ref;if (n) {
      var i = e.context,
          a = e.child || e.elm,
          o = i.$refs;t ? Array.isArray(o[n]) ? r(o[n], a) : o[n] === a && (o[n] = void 0) : e.data.refInFor ? Array.isArray(o[n]) && o[n].indexOf(a) < 0 ? o[n].push(a) : o[n] = [a] : o[n] = a;
    }
  }function dt(e) {
    return null == e;
  }function pt(e) {
    return null != e;
  }function vt(e, t) {
    return e.key === t.key && e.tag === t.tag && e.isComment === t.isComment && !e.data == !t.data;
  }function ht(e, t, n) {
    var r,
        i,
        a = {};for (r = t; r <= n; ++r) {
      i = e[r].key, pt(i) && (a[i] = r);
    }return a;
  }function mt(e) {
    function t(e) {
      return new Fi(O.tagName(e).toLowerCase(), {}, [], void 0, e);
    }function r(e, t) {
      function n() {
        0 === --n.listeners && i(e);
      }return n.listeners = t, n;
    }function i(e) {
      var t = O.parentNode(e);t && O.removeChild(t, e);
    }function o(e, t, n, r, i) {
      if (e.isRootInsert = !i, !s(e, t, n, r)) {
        var a = e.data,
            o = e.children,
            c = e.tag;pt(c) ? (e.elm = e.ns ? O.createElementNS(e.ns, c) : O.createElement(c, e), v(e), u(e, o, t), pt(a) && d(e, t), l(n, e.elm, r)) : e.isComment ? (e.elm = O.createComment(e.text), l(n, e.elm, r)) : (e.elm = O.createTextNode(e.text), l(n, e.elm, r));
      }
    }function s(e, t, n, r) {
      var i = e.data;if (pt(i)) {
        var a = pt(e.child) && i.keepAlive;if (pt(i = i.hook) && pt(i = i.init) && i(e, !1, n, r), pt(e.child)) return p(e, t), a && c(e, t, n, r), !0;
      }
    }function c(e, t, n, r) {
      for (var i, a = e; a.child;) {
        if (a = a.child._vnode, pt(i = a.data) && pt(i = i.transition)) {
          for (i = 0; i < k.activate.length; ++i) {
            k.activate[i](da, a);
          }t.push(a);break;
        }
      }l(n, e.elm, r);
    }function l(e, t, n) {
      e && (n ? O.insertBefore(e, t, n) : O.appendChild(e, t));
    }function u(e, t, n) {
      if (Array.isArray(t)) for (var r = 0; r < t.length; ++r) {
        o(t[r], n, e.elm, null, !0);
      } else a(e.text) && O.appendChild(e.elm, O.createTextNode(e.text));
    }function f(e) {
      for (; e.child;) {
        e = e.child._vnode;
      }return pt(e.tag);
    }function d(e, t) {
      for (var n = 0; n < k.create.length; ++n) {
        k.create[n](da, e);
      }x = e.data.hook, pt(x) && (x.create && x.create(da, e), x.insert && t.push(e));
    }function p(e, t) {
      e.data.pendingInsert && t.push.apply(t, e.data.pendingInsert), e.elm = e.child.$el, f(e) ? (d(e, t), v(e)) : (ft(e), t.push(e));
    }function v(e) {
      var t;pt(t = e.context) && pt(t = t.$options._scopeId) && O.setAttribute(e.elm, t, ""), pt(t = Hi) && t !== e.context && pt(t = t.$options._scopeId) && O.setAttribute(e.elm, t, "");
    }function h(e, t, n, r, i, a) {
      for (; r <= i; ++r) {
        o(n[r], a, e, t);
      }
    }function m(e) {
      var t,
          n,
          r = e.data;if (pt(r)) for (pt(t = r.hook) && pt(t = t.destroy) && t(e), t = 0; t < k.destroy.length; ++t) {
        k.destroy[t](e);
      }if (pt(t = e.children)) for (n = 0; n < e.children.length; ++n) {
        m(e.children[n]);
      }
    }function g(e, t, n, r) {
      for (; n <= r; ++n) {
        var i = t[n];pt(i) && (pt(i.tag) ? (y(i), m(i)) : O.removeChild(e, i.elm));
      }
    }function y(e, t) {
      if (t || pt(e.data)) {
        var n = k.remove.length + 1;for (t ? t.listeners += n : t = r(e.elm, n), pt(x = e.child) && pt(x = x._vnode) && pt(x.data) && y(x, t), x = 0; x < k.remove.length; ++x) {
          k.remove[x](e, t);
        }pt(x = e.data.hook) && pt(x = x.remove) ? x(e, t) : t();
      } else i(e.elm);
    }function _(e, t, n, r, i) {
      for (var a, s, c, l, u = 0, f = 0, d = t.length - 1, p = t[0], v = t[d], m = n.length - 1, y = n[0], _ = n[m], $ = !i; u <= d && f <= m;) {
        dt(p) ? p = t[++u] : dt(v) ? v = t[--d] : vt(p, y) ? (b(p, y, r), p = t[++u], y = n[++f]) : vt(v, _) ? (b(v, _, r), v = t[--d], _ = n[--m]) : vt(p, _) ? (b(p, _, r), $ && O.insertBefore(e, p.elm, O.nextSibling(v.elm)), p = t[++u], _ = n[--m]) : vt(v, y) ? (b(v, y, r), $ && O.insertBefore(e, v.elm, p.elm), v = t[--d], y = n[++f]) : (dt(a) && (a = ht(t, u, d)), s = pt(y.key) ? a[y.key] : null, dt(s) ? (o(y, r, e, p.elm), y = n[++f]) : (c = t[s], vt(c, y) ? (b(c, y, r), t[s] = void 0, $ && O.insertBefore(e, y.elm, p.elm), y = n[++f]) : (o(y, r, e, p.elm), y = n[++f])));
      }u > d ? (l = dt(n[m + 1]) ? null : n[m + 1].elm, h(e, l, n, f, m, r)) : f > m && g(e, t, u, d);
    }function b(e, t, n, r) {
      if (e !== t) {
        if (t.isStatic && e.isStatic && t.key === e.key && (t.isCloned || t.isOnce)) return t.elm = e.elm, void (t.child = e.child);var i,
            a = t.data,
            o = pt(a);o && pt(i = a.hook) && pt(i = i.prepatch) && i(e, t);var s = t.elm = e.elm,
            c = e.children,
            l = t.children;if (o && f(t)) {
          for (i = 0; i < k.update.length; ++i) {
            k.update[i](e, t);
          }pt(i = a.hook) && pt(i = i.update) && i(e, t);
        }dt(t.text) ? pt(c) && pt(l) ? c !== l && _(s, c, l, n, r) : pt(l) ? (pt(e.text) && O.setTextContent(s, ""), h(s, null, l, 0, l.length - 1, n)) : pt(c) ? g(s, c, 0, c.length - 1) : pt(e.text) && O.setTextContent(s, "") : e.text !== t.text && O.setTextContent(s, t.text), o && pt(i = a.hook) && pt(i = i.postpatch) && i(e, t);
      }
    }function $(e, t, n) {
      if (n && e.parent) e.parent.data.pendingInsert = t;else for (var r = 0; r < t.length; ++r) {
        t[r].data.hook.insert(t[r]);
      }
    }function w(e, t, n) {
      t.elm = e;var r = t.tag,
          i = t.data,
          a = t.children;if (pt(i) && (pt(x = i.hook) && pt(x = x.init) && x(t, !0), pt(x = t.child))) return p(t, n), !0;if (pt(r)) {
        if (pt(a)) if (e.hasChildNodes()) {
          for (var o = !0, s = e.firstChild, c = 0; c < a.length; c++) {
            if (!s || !w(s, a[c], n)) {
              o = !1;break;
            }s = s.nextSibling;
          }if (!o || s) return !1;
        } else u(t, a, n);if (pt(i)) for (var l in i) {
          if (!S(l)) {
            d(t, n);break;
          }
        }
      }return !0;
    }var x,
        C,
        k = {},
        A = e.modules,
        O = e.nodeOps;for (x = 0; x < pa.length; ++x) {
      for (k[pa[x]] = [], C = 0; C < A.length; ++C) {
        void 0 !== A[C][pa[x]] && k[pa[x]].push(A[C][pa[x]]);
      }
    }var S = n("attrs,style,class,staticClass,staticStyle,key");return function (e, n, r, i, a, s) {
      if (!n) return void (e && m(e));var c,
          l,
          u = !1,
          d = [];if (e) {
        var p = pt(e.nodeType);if (!p && vt(e, n)) b(e, n, d, i);else {
          if (p) {
            if (1 === e.nodeType && e.hasAttribute("server-rendered") && (e.removeAttribute("server-rendered"), r = !0), r && w(e, n, d)) return $(n, d, !0), e;e = t(e);
          }if (c = e.elm, l = O.parentNode(c), o(n, d, l, O.nextSibling(c)), n.parent) {
            for (var v = n.parent; v;) {
              v.elm = n.elm, v = v.parent;
            }if (f(n)) for (var h = 0; h < k.create.length; ++h) {
              k.create[h](da, n.parent);
            }
          }null !== l ? g(l, [e], 0, 0) : pt(e.tag) && m(e);
        }
      } else u = !0, o(n, d, a, s);return $(n, d, u), n.elm;
    };
  }function gt(e, t) {
    (e.data.directives || t.data.directives) && yt(e, t);
  }function yt(e, t) {
    var n,
        r,
        i,
        a = e === da,
        o = _t(e.data.directives, e.context),
        s = _t(t.data.directives, t.context),
        c = [],
        l = [];for (n in s) {
      r = o[n], i = s[n], r ? (i.oldValue = r.value, $t(i, "update", t, e), i.def && i.def.componentUpdated && l.push(i)) : ($t(i, "bind", t, e), i.def && i.def.inserted && c.push(i));
    }if (c.length) {
      var u = function u() {
        for (var n = 0; n < c.length; n++) {
          $t(c[n], "inserted", t, e);
        }
      };a ? be(t.data.hook || (t.data.hook = {}), "insert", u, "dir-insert") : u();
    }if (l.length && be(t.data.hook || (t.data.hook = {}), "postpatch", function () {
      for (var n = 0; n < l.length; n++) {
        $t(l[n], "componentUpdated", t, e);
      }
    }, "dir-postpatch"), !a) for (n in o) {
      s[n] || $t(o[n], "unbind", e);
    }
  }function _t(e, t) {
    var n = Object.create(null);if (!e) return n;var r, i;for (r = 0; r < e.length; r++) {
      i = e[r], i.modifiers || (i.modifiers = ha), n[bt(i)] = i, i.def = P(t.$options, "directives", i.name, !0);
    }return n;
  }function bt(e) {
    return e.rawName || e.name + "." + Object.keys(e.modifiers || {}).join(".");
  }function $t(e, t, n, r) {
    var i = e.def && e.def[t];i && i(n.elm, e, n, r);
  }function wt(e, t) {
    if (e.data.attrs || t.data.attrs) {
      var n,
          r,
          i,
          a = t.elm,
          o = e.data.attrs || {},
          s = t.data.attrs || {};s.__ob__ && (s = t.data.attrs = l({}, s));for (n in s) {
        r = s[n], i = o[n], i !== r && xt(a, n, r);
      }ui && s.value !== o.value && xt(a, "value", s.value);for (n in o) {
        null == s[n] && (ta(n) ? a.removeAttributeNS(ea, na(n)) : Qi(n) || a.removeAttribute(n));
      }
    }
  }function xt(e, t, n) {
    Xi(t) ? ra(n) ? e.removeAttribute(t) : e.setAttribute(t, t) : Qi(t) ? e.setAttribute(t, ra(n) || "false" === n ? "false" : "true") : ta(t) ? ra(n) ? e.removeAttributeNS(ea, na(t)) : e.setAttributeNS(ea, t, n) : ra(n) ? e.removeAttribute(t) : e.setAttribute(t, n);
  }function Ct(e, t) {
    var n = t.elm,
        r = t.data,
        i = e.data;if (r.staticClass || r.class || i && (i.staticClass || i.class)) {
      var a = Je(t),
          o = n._transitionClasses;o && (a = We(a, Ze(o))), a !== n._prevClass && (n.setAttribute("class", a), n._prevClass = a);
    }
  }function kt(e, _t2, n, r) {
    if (n) {
      var i = _t2;_t2 = function t(n) {
        At(e, _t2, r), 1 === arguments.length ? i(n) : i.apply(null, arguments);
      };
    }Wi.addEventListener(e, _t2, r);
  }function At(e, t, n) {
    Wi.removeEventListener(e, t, n);
  }function Ot(e, t) {
    if (e.data.on || t.data.on) {
      var n = t.data.on || {},
          r = e.data.on || {};Wi = t.elm, $e(n, r, kt, At, t.context);
    }
  }function St(e, t) {
    if (e.data.domProps || t.data.domProps) {
      var n,
          r,
          i = t.elm,
          a = e.data.domProps || {},
          o = t.data.domProps || {};o.__ob__ && (o = t.data.domProps = l({}, o));for (n in a) {
        null == o[n] && (i[n] = "");
      }for (n in o) {
        if (r = o[n], "textContent" !== n && "innerHTML" !== n || (t.children && (t.children.length = 0), r !== a[n])) if ("value" === n) {
          i._value = r;var s = null == r ? "" : String(r);!i.composing && (document.activeElement !== i && i.value !== s || Tt(t, s)) && (i.value = s);
        } else i[n] = r;
      }
    }
  }function Tt(e, n) {
    var r = e.elm.value,
        i = e.elm._vModifiers;return i && i.number || "number" === e.elm.type ? t(r) !== t(n) : i && i.trim ? r.trim() !== n.trim() : r !== n;
  }function Et(e) {
    var t = jt(e.style);return e.staticStyle ? l(e.staticStyle, t) : t;
  }function jt(e) {
    return Array.isArray(e) ? d(e) : "string" == typeof e ? $a(e) : e;
  }function Nt(e, t) {
    var n,
        r = {};if (t) for (var i = e; i.child;) {
      i = i.child._vnode, i.data && (n = Et(i.data)) && l(r, n);
    }(n = Et(e.data)) && l(r, n);for (var a = e; a = a.parent;) {
      a.data && (n = Et(a.data)) && l(r, n);
    }return r;
  }function Lt(e, t) {
    var n = t.data,
        r = e.data;if (n.staticStyle || n.style || r.staticStyle || r.style) {
      var i,
          a,
          o = t.elm,
          s = e.data.staticStyle,
          c = e.data.style || {},
          u = s || c,
          f = jt(t.data.style) || {};t.data.style = f.__ob__ ? l({}, f) : f;var d = Nt(t, !0);for (a in u) {
        null == d[a] && Ca(o, a, "");
      }for (a in d) {
        i = d[a], i !== u[a] && Ca(o, a, null == i ? "" : i);
      }
    }
  }function Dt(e, t) {
    if (t && t.trim()) if (e.classList) t.indexOf(" ") > -1 ? t.split(/\s+/).forEach(function (t) {
      return e.classList.add(t);
    }) : e.classList.add(t);else {
      var n = " " + e.getAttribute("class") + " ";n.indexOf(" " + t + " ") < 0 && e.setAttribute("class", (n + t).trim());
    }
  }function Mt(e, t) {
    if (t && t.trim()) if (e.classList) t.indexOf(" ") > -1 ? t.split(/\s+/).forEach(function (t) {
      return e.classList.remove(t);
    }) : e.classList.remove(t);else {
      for (var n = " " + e.getAttribute("class") + " ", r = " " + t + " "; n.indexOf(r) >= 0;) {
        n = n.replace(r, " ");
      }e.setAttribute("class", n.trim());
    }
  }function Pt(e) {
    Ma(function () {
      Ma(e);
    });
  }function Rt(e, t) {
    (e._transitionClasses || (e._transitionClasses = [])).push(t), Dt(e, t);
  }function It(e, t) {
    e._transitionClasses && r(e._transitionClasses, t), Mt(e, t);
  }function Ft(e, t, n) {
    var r = Ut(e, t),
        i = r.type,
        a = r.timeout,
        o = r.propCount;if (!i) return n();var s = i === Ta ? Na : Da,
        c = 0,
        l = function l() {
      e.removeEventListener(s, u), n();
    },
        u = function u(t) {
      t.target === e && ++c >= o && l();
    };setTimeout(function () {
      c < o && l();
    }, a + 1), e.addEventListener(s, u);
  }function Ut(e, t) {
    var n,
        r = window.getComputedStyle(e),
        i = r[ja + "Delay"].split(", "),
        a = r[ja + "Duration"].split(", "),
        o = Ht(i, a),
        s = r[La + "Delay"].split(", "),
        c = r[La + "Duration"].split(", "),
        l = Ht(s, c),
        u = 0,
        f = 0;t === Ta ? o > 0 && (n = Ta, u = o, f = a.length) : t === Ea ? l > 0 && (n = Ea, u = l, f = c.length) : (u = Math.max(o, l), n = u > 0 ? o > l ? Ta : Ea : null, f = n ? n === Ta ? a.length : c.length : 0);var d = n === Ta && Pa.test(r[ja + "Property"]);return { type: n, timeout: u, propCount: f, hasTransform: d };
  }function Ht(e, t) {
    for (; e.length < t.length;) {
      e = e.concat(e);
    }return Math.max.apply(null, t.map(function (t, n) {
      return Bt(t) + Bt(e[n]);
    }));
  }function Bt(e) {
    return 1e3 * Number(e.slice(0, -1));
  }function Vt(e, t) {
    var n = e.elm;n._leaveCb && (n._leaveCb.cancelled = !0, n._leaveCb());var r = Jt(e.data.transition);if (r && !n._enterCb && 1 === n.nodeType) {
      for (var i = r.css, a = r.type, o = r.enterClass, s = r.enterActiveClass, c = r.appearClass, l = r.appearActiveClass, u = r.beforeEnter, f = r.enter, d = r.afterEnter, p = r.enterCancelled, v = r.beforeAppear, h = r.appear, m = r.afterAppear, g = r.appearCancelled, y = Hi, _ = Hi.$vnode; _ && _.parent;) {
        _ = _.parent, y = _.context;
      }var b = !y._isMounted || !e.isRootInsert;if (!b || h || "" === h) {
        var $ = b ? c : o,
            w = b ? l : s,
            x = b ? v || u : u,
            C = b && "function" == typeof h ? h : f,
            k = b ? m || d : d,
            A = b ? g || p : p,
            O = i !== !1 && !ui,
            S = C && (C._length || C.length) > 1,
            T = n._enterCb = Kt(function () {
          O && It(n, w), T.cancelled ? (O && It(n, $), A && A(n)) : k && k(n), n._enterCb = null;
        });e.data.show || be(e.data.hook || (e.data.hook = {}), "insert", function () {
          var t = n.parentNode,
              r = t && t._pending && t._pending[e.key];r && r.context === e.context && r.tag === e.tag && r.elm._leaveCb && r.elm._leaveCb(), C && C(n, T);
        }, "transition-insert"), x && x(n), O && (Rt(n, $), Rt(n, w), Pt(function () {
          It(n, $), T.cancelled || S || Ft(n, a, T);
        })), e.data.show && (t && t(), C && C(n, T)), O || S || T();
      }
    }
  }function zt(e, t) {
    function n() {
      m.cancelled || (e.data.show || ((r.parentNode._pending || (r.parentNode._pending = {}))[e.key] = e), l && l(r), v && (Rt(r, s), Rt(r, c), Pt(function () {
        It(r, s), m.cancelled || h || Ft(r, o, m);
      })), u && u(r, m), v || h || m());
    }var r = e.elm;r._enterCb && (r._enterCb.cancelled = !0, r._enterCb());var i = Jt(e.data.transition);if (!i) return t();if (!r._leaveCb && 1 === r.nodeType) {
      var a = i.css,
          o = i.type,
          s = i.leaveClass,
          c = i.leaveActiveClass,
          l = i.beforeLeave,
          u = i.leave,
          f = i.afterLeave,
          d = i.leaveCancelled,
          p = i.delayLeave,
          v = a !== !1 && !ui,
          h = u && (u._length || u.length) > 1,
          m = r._leaveCb = Kt(function () {
        r.parentNode && r.parentNode._pending && (r.parentNode._pending[e.key] = null), v && It(r, c), m.cancelled ? (v && It(r, s), d && d(r)) : (t(), f && f(r)), r._leaveCb = null;
      });p ? p(n) : n();
    }
  }function Jt(e) {
    if (e) {
      if ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e))) {
        var t = {};return e.css !== !1 && l(t, Ra(e.name || "v")), l(t, e), t;
      }return "string" == typeof e ? Ra(e) : void 0;
    }
  }function Kt(e) {
    var t = !1;return function () {
      t || (t = !0, e());
    };
  }function qt(e, t) {
    t.data.show || Vt(t);
  }function Wt(e, t, n) {
    var r = t.value,
        i = e.multiple;if (!i || Array.isArray(r)) {
      for (var a, o, s = 0, c = e.options.length; s < c; s++) {
        if (o = e.options[s], i) a = m(r, Gt(o)) > -1, o.selected !== a && (o.selected = a);else if (h(Gt(o), r)) return void (e.selectedIndex !== s && (e.selectedIndex = s));
      }i || (e.selectedIndex = -1);
    }
  }function Zt(e, t) {
    for (var n = 0, r = t.length; n < r; n++) {
      if (h(Gt(t[n]), e)) return !1;
    }return !0;
  }function Gt(e) {
    return "_value" in e ? e._value : e.value;
  }function Yt(e) {
    e.target.composing = !0;
  }function Qt(e) {
    e.target.composing = !1, Xt(e.target, "input");
  }function Xt(e, t) {
    var n = document.createEvent("HTMLEvents");n.initEvent(t, !0, !0), e.dispatchEvent(n);
  }function en(e) {
    return !e.child || e.data && e.data.transition ? e : en(e.child._vnode);
  }function tn(e) {
    var t = e && e.componentOptions;return t && t.Ctor.options.abstract ? tn(Ae(t.children)) : e;
  }function nn(e) {
    var t = {},
        n = e.$options;for (var r in n.propsData) {
      t[r] = e[r];
    }var i = n._parentListeners;for (var a in i) {
      t[Gr(a)] = i[a].fn;
    }return t;
  }function rn(e, t) {
    return (/\d-keep-alive$/.test(t.tag) ? e("keep-alive") : null
    );
  }function an(e) {
    for (; e = e.parent;) {
      if (e.data.transition) return !0;
    }
  }function on(e) {
    e.elm._moveCb && e.elm._moveCb(), e.elm._enterCb && e.elm._enterCb();
  }function sn(e) {
    e.data.newPos = e.elm.getBoundingClientRect();
  }function cn(e) {
    var t = e.data.pos,
        n = e.data.newPos,
        r = t.left - n.left,
        i = t.top - n.top;if (r || i) {
      e.data.moved = !0;var a = e.elm.style;a.transform = a.WebkitTransform = "translate(" + r + "px," + i + "px)", a.transitionDuration = "0s";
    }
  }function ln(e, t) {
    var n = document.createElement("div");return n.innerHTML = '<div a="' + e + '">', n.innerHTML.indexOf(t) > 0;
  }function un(e) {
    return Ga = Ga || document.createElement("div"), Ga.innerHTML = e, Ga.textContent;
  }function fn(e, t) {
    return t && (e = e.replace(Jo, "\n")), e.replace(Vo, "<").replace(zo, ">").replace(Ko, "&").replace(qo, '"');
  }function dn(e, t) {
    function n(t) {
      f += t, e = e.substring(t);
    }function r() {
      var t = e.match(so);if (t) {
        var r = { tagName: t[1], attrs: [], start: f };n(t[0].length);for (var i, a; !(i = e.match(co)) && (a = e.match(io));) {
          n(a[0].length), r.attrs.push(a);
        }if (i) return r.unarySlash = i[1], n(i[0].length), r.end = f, r;
      }
    }function i(e) {
      var n = e.tagName,
          r = e.unarySlash;l && ("p" === s && eo(n) && a("", s), Xa(n) && s === n && a("", n));for (var i = u(n) || "html" === n && "head" === s || !!r, o = e.attrs.length, f = new Array(o), d = 0; d < o; d++) {
        var p = e.attrs[d];vo && p[0].indexOf('""') === -1 && ("" === p[3] && delete p[3], "" === p[4] && delete p[4], "" === p[5] && delete p[5]);var v = p[3] || p[4] || p[5] || "";f[d] = { name: p[1], value: fn(v, t.shouldDecodeNewlines) };
      }i || (c.push({ tag: n, attrs: f }), s = n, r = ""), t.start && t.start(n, f, i, e.start, e.end);
    }function a(e, n, r, i) {
      var a;if (null == r && (r = f), null == i && (i = f), n) {
        var o = n.toLowerCase();for (a = c.length - 1; a >= 0 && c[a].tag.toLowerCase() !== o; a--) {}
      } else a = 0;if (a >= 0) {
        for (var l = c.length - 1; l >= a; l--) {
          t.end && t.end(c[l].tag, r, i);
        }c.length = a, s = a && c[a - 1].tag;
      } else "br" === n.toLowerCase() ? t.start && t.start(n, [], !0, r, i) : "p" === n.toLowerCase() && (t.start && t.start(n, [], !1, r, i), t.end && t.end(n, r, i));
    }for (var o, s, c = [], l = t.expectHTML, u = t.isUnaryTag || ni, f = 0; e;) {
      if (o = e, s && Ho(s, t.sfc, c)) {
        var d = s.toLowerCase(),
            p = Bo[d] || (Bo[d] = new RegExp("([\\s\\S]*?)(</" + d + "[^>]*>)", "i")),
            v = 0,
            h = e.replace(p, function (e, n, r) {
          return v = r.length, "script" !== d && "style" !== d && "noscript" !== d && (n = n.replace(/<!--([\s\S]*?)-->/g, "$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g, "$1")), t.chars && t.chars(n), "";
        });f += e.length - h.length, e = h, a("</" + d + ">", d, f - v, f);
      } else {
        var m = e.indexOf("<");if (0 === m) {
          if (fo.test(e)) {
            var g = e.indexOf("-->");if (g >= 0) {
              n(g + 3);continue;
            }
          }if (po.test(e)) {
            var y = e.indexOf("]>");if (y >= 0) {
              n(y + 2);continue;
            }
          }var _ = e.match(uo);if (_) {
            n(_[0].length);continue;
          }var b = e.match(lo);if (b) {
            var $ = f;n(b[0].length), a(b[0], b[1], $, f);continue;
          }var w = r();if (w) {
            i(w);continue;
          }
        }var x = void 0,
            C = void 0,
            k = void 0;if (m > 0) {
          for (C = e.slice(m); !(lo.test(C) || so.test(C) || fo.test(C) || po.test(C) || (k = C.indexOf("<", 1), k < 0));) {
            m += k, C = e.slice(m);
          }x = e.substring(0, m), n(m);
        }m < 0 && (x = e, e = ""), t.chars && x && t.chars(x);
      }if (e === o && t.chars) {
        t.chars(e);break;
      }
    }a();
  }function pn(e) {
    function t() {
      (o || (o = [])).push(e.slice(v, i).trim()), v = i + 1;
    }var n,
        r,
        i,
        a,
        o,
        s = !1,
        c = !1,
        l = !1,
        u = !1,
        f = 0,
        d = 0,
        p = 0,
        v = 0;for (i = 0; i < e.length; i++) {
      if (r = n, n = e.charCodeAt(i), s) 39 === n && 92 !== r && (s = !1);else if (c) 34 === n && 92 !== r && (c = !1);else if (l) 96 === n && 92 !== r && (l = !1);else if (u) 47 === n && 92 !== r && (u = !1);else if (124 !== n || 124 === e.charCodeAt(i + 1) || 124 === e.charCodeAt(i - 1) || f || d || p) {
        switch (n) {case 34:
            c = !0;break;case 39:
            s = !0;break;case 96:
            l = !0;break;case 40:
            p++;break;case 41:
            p--;break;case 91:
            d++;break;case 93:
            d--;break;case 123:
            f++;break;case 125:
            f--;}if (47 === n) {
          for (var h = i - 1, m = void 0; h >= 0 && (m = e.charAt(h), " " === m); h--) {}m && /[\w$]/.test(m) || (u = !0);
        }
      } else void 0 === a ? (v = i + 1, a = e.slice(0, i).trim()) : t();
    }if (void 0 === a ? a = e.slice(0, i).trim() : 0 !== v && t(), o) for (i = 0; i < o.length; i++) {
      a = vn(a, o[i]);
    }return a;
  }function vn(e, t) {
    var n = t.indexOf("(");if (n < 0) return '_f("' + t + '")(' + e + ")";var r = t.slice(0, n),
        i = t.slice(n + 1);return '_f("' + r + '")(' + e + "," + i;
  }function hn(e, t) {
    var n = t ? Go(t) : Wo;if (n.test(e)) {
      for (var r, i, a = [], o = n.lastIndex = 0; r = n.exec(e);) {
        i = r.index, i > o && a.push(JSON.stringify(e.slice(o, i)));var s = pn(r[1].trim());a.push("_s(" + s + ")"), o = i + r[0].length;
      }return o < e.length && a.push(JSON.stringify(e.slice(o))), a.join("+");
    }
  }function mn(e) {
    console.error("[Vue parser]: " + e);
  }function gn(e, t) {
    return e ? e.map(function (e) {
      return e[t];
    }).filter(function (e) {
      return e;
    }) : [];
  }function yn(e, t, n) {
    (e.props || (e.props = [])).push({ name: t, value: n });
  }function _n(e, t, n) {
    (e.attrs || (e.attrs = [])).push({ name: t, value: n });
  }function bn(e, t, n, r, i, a) {
    (e.directives || (e.directives = [])).push({ name: t, rawName: n, value: r, arg: i, modifiers: a });
  }function $n(e, t, n, r, i) {
    r && r.capture && (delete r.capture, t = "!" + t), r && r.once && (delete r.once, t = "~" + t);var a;r && r.native ? (delete r.native, a = e.nativeEvents || (e.nativeEvents = {})) : a = e.events || (e.events = {});var o = { value: n, modifiers: r },
        s = a[t];Array.isArray(s) ? i ? s.unshift(o) : s.push(o) : s ? a[t] = i ? [o, s] : [s, o] : a[t] = o;
  }function wn(e, t, n) {
    var r = xn(e, ":" + t) || xn(e, "v-bind:" + t);if (null != r) return pn(r);if (n !== !1) {
      var i = xn(e, t);if (null != i) return JSON.stringify(i);
    }
  }function xn(e, t) {
    var n;if (null != (n = e.attrsMap[t])) for (var r = e.attrsList, i = 0, a = r.length; i < a; i++) {
      if (r[i].name === t) {
        r.splice(i, 1);break;
      }
    }return n;
  }function Cn(e) {
    if (mo = e, ho = mo.length, yo = _o = bo = 0, e.indexOf("[") < 0 || e.lastIndexOf("]") < ho - 1) return { exp: e, idx: null };for (; !An();) {
      go = kn(), On(go) ? Tn(go) : 91 === go && Sn(go);
    }return { exp: e.substring(0, _o), idx: e.substring(_o + 1, bo) };
  }function kn() {
    return mo.charCodeAt(++yo);
  }function An() {
    return yo >= ho;
  }function On(e) {
    return 34 === e || 39 === e;
  }function Sn(e) {
    var t = 1;for (_o = yo; !An();) {
      if (e = kn(), On(e)) Tn(e);else if (91 === e && t++, 93 === e && t--, 0 === t) {
        bo = yo;break;
      }
    }
  }function Tn(e) {
    for (var t = e; !An() && (e = kn(), e !== t);) {}
  }function En(e, t) {
    $o = t.warn || mn, wo = t.getTagNamespace || ni, xo = t.mustUseProp || ni, Co = t.isPreTag || ni, ko = gn(t.modules, "preTransformNode"), Ao = gn(t.modules, "transformNode"), Oo = gn(t.modules, "postTransformNode"), So = t.delimiters;var n,
        r,
        i = [],
        a = t.preserveWhitespace !== !1,
        o = !1,
        s = !1;return dn(e, { expectHTML: t.expectHTML, isUnaryTag: t.isUnaryTag, shouldDecodeNewlines: t.shouldDecodeNewlines, start: function start(e, a, c) {
        function l(e) {}var u = r && r.ns || wo(e);li && "svg" === u && (a = Wn(a));var f = { type: 1, tag: e, attrsList: a, attrsMap: Jn(a), parent: r, children: [] };u && (f.ns = u), qn(f) && !vi() && (f.forbidden = !0);for (var d = 0; d < ko.length; d++) {
          ko[d](f, t);
        }if (o || (jn(f), f.pre && (o = !0)), Co(f.tag) && (s = !0), o) Nn(f);else {
          Mn(f), Pn(f), Fn(f), Ln(f), f.plain = !f.key && !a.length, Dn(f), Un(f), Hn(f);for (var p = 0; p < Ao.length; p++) {
            Ao[p](f, t);
          }Bn(f);
        }if (n ? i.length || n.if && (f.elseif || f.else) && (l(f), In(n, { exp: f.elseif, block: f })) : (n = f, l(n)), r && !f.forbidden) if (f.elseif || f.else) Rn(f, r);else if (f.slotScope) {
          r.plain = !1;var v = f.slotTarget || "default";(r.scopedSlots || (r.scopedSlots = {}))[v] = f;
        } else r.children.push(f), f.parent = r;c || (r = f, i.push(f));for (var h = 0; h < Oo.length; h++) {
          Oo[h](f, t);
        }
      }, end: function end() {
        var e = i[i.length - 1],
            t = e.children[e.children.length - 1];t && 3 === t.type && " " === t.text && e.children.pop(), i.length -= 1, r = i[i.length - 1], e.pre && (o = !1), Co(e.tag) && (s = !1);
      }, chars: function chars(e) {
        if (r && (!li || "textarea" !== r.tag || r.attrsMap.placeholder !== e) && (e = s || e.trim() ? is(e) : a && r.children.length ? " " : "")) {
          var t;!o && " " !== e && (t = hn(e, So)) ? r.children.push({ type: 2, expression: t, text: e }) : r.children.push({ type: 3, text: e });
        }
      } }), n;
  }function jn(e) {
    null != xn(e, "v-pre") && (e.pre = !0);
  }function Nn(e) {
    var t = e.attrsList.length;if (t) for (var n = e.attrs = new Array(t), r = 0; r < t; r++) {
      n[r] = { name: e.attrsList[r].name, value: JSON.stringify(e.attrsList[r].value) };
    } else e.pre || (e.plain = !0);
  }function Ln(e) {
    var t = wn(e, "key");t && (e.key = t);
  }function Dn(e) {
    var t = wn(e, "ref");t && (e.ref = t, e.refInFor = Vn(e));
  }function Mn(e) {
    var t;if (t = xn(e, "v-for")) {
      var n = t.match(Qo);if (!n) return;e.for = n[2].trim();var r = n[1].trim(),
          i = r.match(Xo);i ? (e.alias = i[1].trim(), e.iterator1 = i[2].trim(), i[3] && (e.iterator2 = i[3].trim())) : e.alias = r;
    }
  }function Pn(e) {
    var t = xn(e, "v-if");if (t) e.if = t, In(e, { exp: t, block: e });else {
      null != xn(e, "v-else") && (e.else = !0);var n = xn(e, "v-else-if");n && (e.elseif = n);
    }
  }function Rn(e, t) {
    var n = Kn(t.children);n && n.if && In(n, { exp: e.elseif, block: e });
  }function In(e, t) {
    e.ifConditions || (e.ifConditions = []), e.ifConditions.push(t);
  }function Fn(e) {
    var t = xn(e, "v-once");null != t && (e.once = !0);
  }function Un(e) {
    if ("slot" === e.tag) e.slotName = wn(e, "name");else {
      var t = wn(e, "slot");t && (e.slotTarget = '""' === t ? '"default"' : t), "template" === e.tag && (e.slotScope = xn(e, "scope"));
    }
  }function Hn(e) {
    var t;(t = wn(e, "is")) && (e.component = t), null != xn(e, "inline-template") && (e.inlineTemplate = !0);
  }function Bn(e) {
    var t,
        n,
        r,
        i,
        a,
        o,
        s,
        c,
        l = e.attrsList;for (t = 0, n = l.length; t < n; t++) {
      if (r = i = l[t].name, a = l[t].value, Yo.test(r)) {
        if (e.hasBindings = !0, s = zn(r), s && (r = r.replace(rs, "")), es.test(r)) r = r.replace(es, ""), a = pn(a), c = !1, s && (s.prop && (c = !0, r = Gr(r), "innerHtml" === r && (r = "innerHTML")), s.camel && (r = Gr(r))), c || xo(e.tag, r) ? yn(e, r, a) : _n(e, r, a);else if (ts.test(r)) r = r.replace(ts, ""), $n(e, r, a, s);else {
          r = r.replace(Yo, "");var u = r.match(ns);u && (o = u[1]) && (r = r.slice(0, -(o.length + 1))), bn(e, r, i, a, o, s);
        }
      } else _n(e, r, JSON.stringify(a));
    }
  }function Vn(e) {
    for (var t = e; t;) {
      if (void 0 !== t.for) return !0;t = t.parent;
    }return !1;
  }function zn(e) {
    var t = e.match(rs);if (t) {
      var n = {};return t.forEach(function (e) {
        n[e.slice(1)] = !0;
      }), n;
    }
  }function Jn(e) {
    for (var t = {}, n = 0, r = e.length; n < r; n++) {
      t[e[n].name] = e[n].value;
    }return t;
  }function Kn(e) {
    for (var t = e.length; t--;) {
      if (e[t].tag) return e[t];
    }
  }function qn(e) {
    return "style" === e.tag || "script" === e.tag && (!e.attrsMap.type || "text/javascript" === e.attrsMap.type);
  }function Wn(e) {
    for (var t = [], n = 0; n < e.length; n++) {
      var r = e[n];as.test(r.name) || (r.name = r.name.replace(os, ""), t.push(r));
    }return t;
  }function Zn(e, t) {
    e && (To = ss(t.staticKeys || ""), Eo = t.isReservedTag || ni, Yn(e), Qn(e, !1));
  }function Gn(e) {
    return n("type,tag,attrsList,attrsMap,plain,parent,children,attrs" + (e ? "," + e : ""));
  }function Yn(e) {
    if (e.static = er(e), 1 === e.type) {
      if (!Eo(e.tag) && "slot" !== e.tag && null == e.attrsMap["inline-template"]) return;for (var t = 0, n = e.children.length; t < n; t++) {
        var r = e.children[t];Yn(r), r.static || (e.static = !1);
      }
    }
  }function Qn(e, t) {
    if (1 === e.type) {
      if ((e.static || e.once) && (e.staticInFor = t), e.static && e.children.length && (1 !== e.children.length || 3 !== e.children[0].type)) return void (e.staticRoot = !0);if (e.staticRoot = !1, e.children) for (var n = 0, r = e.children.length; n < r; n++) {
        Qn(e.children[n], t || !!e.for);
      }e.ifConditions && Xn(e.ifConditions, t);
    }
  }function Xn(e, t) {
    for (var n = 1, r = e.length; n < r; n++) {
      Qn(e[n].block, t);
    }
  }function er(e) {
    return 2 !== e.type && (3 === e.type || !(!e.pre && (e.hasBindings || e.if || e.for || qr(e.tag) || !Eo(e.tag) || tr(e) || !Object.keys(e).every(To))));
  }function tr(e) {
    for (; e.parent;) {
      if (e = e.parent, "template" !== e.tag) return !1;if (e.for) return !0;
    }return !1;
  }function nr(e, t) {
    var n = t ? "nativeOn:{" : "on:{";for (var r in e) {
      n += '"' + r + '":' + rr(r, e[r]) + ",";
    }return n.slice(0, -1) + "}";
  }function rr(e, t) {
    if (t) {
      if (Array.isArray(t)) return "[" + t.map(function (t) {
        return rr(e, t);
      }).join(",") + "]";if (t.modifiers) {
        var n = "",
            r = [];for (var i in t.modifiers) {
          fs[i] ? n += fs[i] : r.push(i);
        }r.length && (n = ir(r) + n);var a = ls.test(t.value) ? t.value + "($event)" : t.value;return "function($event){" + n + a + "}";
      }return cs.test(t.value) || ls.test(t.value) ? t.value : "function($event){" + t.value + "}";
    }return "function(){}";
  }function ir(e) {
    return "if(" + e.map(ar).join("&&") + ")return;";
  }function ar(e) {
    var t = parseInt(e, 10);if (t) return "$event.keyCode!==" + t;var n = us[e];return "_k($event.keyCode," + JSON.stringify(e) + (n ? "," + JSON.stringify(n) : "") + ")";
  }function or(e, t) {
    e.wrapData = function (n) {
      return "_b(" + n + ",'" + e.tag + "'," + t.value + (t.modifiers && t.modifiers.prop ? ",true" : "") + ")";
    };
  }function sr(e, t) {
    var n = Mo,
        r = Mo = [],
        i = Po;Po = 0, Ro = t, jo = t.warn || mn, No = gn(t.modules, "transformCode"), Lo = gn(t.modules, "genData"), Do = t.directives || {};var a = e ? cr(e) : '_c("div")';return Mo = n, Po = i, { render: "with(this){return " + a + "}", staticRenderFns: r };
  }function cr(e) {
    if (e.staticRoot && !e.staticProcessed) return lr(e);if (e.once && !e.onceProcessed) return ur(e);if (e.for && !e.forProcessed) return pr(e);if (e.if && !e.ifProcessed) return fr(e);if ("template" !== e.tag || e.slotTarget) {
      if ("slot" === e.tag) return Cr(e);var t;if (e.component) t = kr(e.component, e);else {
        var n = e.plain ? void 0 : vr(e),
            r = e.inlineTemplate ? null : _r(e, !0);t = "_c('" + e.tag + "'" + (n ? "," + n : "") + (r ? "," + r : "") + ")";
      }for (var i = 0; i < No.length; i++) {
        t = No[i](e, t);
      }return t;
    }return _r(e) || "void 0";
  }function lr(e) {
    return e.staticProcessed = !0, Mo.push("with(this){return " + cr(e) + "}"), "_m(" + (Mo.length - 1) + (e.staticInFor ? ",true" : "") + ")";
  }function ur(e) {
    if (e.onceProcessed = !0, e.if && !e.ifProcessed) return fr(e);if (e.staticInFor) {
      for (var t = "", n = e.parent; n;) {
        if (n.for) {
          t = n.key;break;
        }n = n.parent;
      }return t ? "_o(" + cr(e) + "," + Po++ + (t ? "," + t : "") + ")" : cr(e);
    }return lr(e);
  }function fr(e) {
    return e.ifProcessed = !0, dr(e.ifConditions.slice());
  }function dr(e) {
    function t(e) {
      return e.once ? ur(e) : cr(e);
    }if (!e.length) return "_e()";var n = e.shift();return n.exp ? "(" + n.exp + ")?" + t(n.block) + ":" + dr(e) : "" + t(n.block);
  }function pr(e) {
    var t = e.for,
        n = e.alias,
        r = e.iterator1 ? "," + e.iterator1 : "",
        i = e.iterator2 ? "," + e.iterator2 : "";return e.forProcessed = !0, "_l((" + t + "),function(" + n + r + i + "){return " + cr(e) + "})";
  }function vr(e) {
    var t = "{",
        n = hr(e);n && (t += n + ","), e.key && (t += "key:" + e.key + ","), e.ref && (t += "ref:" + e.ref + ","), e.refInFor && (t += "refInFor:true,"), e.pre && (t += "pre:true,"), e.component && (t += 'tag:"' + e.tag + '",');for (var r = 0; r < Lo.length; r++) {
      t += Lo[r](e);
    }if (e.attrs && (t += "attrs:{" + Ar(e.attrs) + "},"), e.props && (t += "domProps:{" + Ar(e.props) + "},"), e.events && (t += nr(e.events) + ","), e.nativeEvents && (t += nr(e.nativeEvents, !0) + ","), e.slotTarget && (t += "slot:" + e.slotTarget + ","), e.scopedSlots && (t += gr(e.scopedSlots) + ","), e.inlineTemplate) {
      var i = mr(e);i && (t += i + ",");
    }return t = t.replace(/,$/, "") + "}", e.wrapData && (t = e.wrapData(t)), t;
  }function hr(e) {
    var t = e.directives;if (t) {
      var n,
          r,
          i,
          a,
          o = "directives:[",
          s = !1;for (n = 0, r = t.length; n < r; n++) {
        i = t[n], a = !0;var c = Do[i.name] || ds[i.name];c && (a = !!c(e, i, jo)), a && (s = !0, o += '{name:"' + i.name + '",rawName:"' + i.rawName + '"' + (i.value ? ",value:(" + i.value + "),expression:" + JSON.stringify(i.value) : "") + (i.arg ? ',arg:"' + i.arg + '"' : "") + (i.modifiers ? ",modifiers:" + JSON.stringify(i.modifiers) : "") + "},");
      }return s ? o.slice(0, -1) + "]" : void 0;
    }
  }function mr(e) {
    var t = e.children[0];if (1 === t.type) {
      var n = sr(t, Ro);return "inlineTemplate:{render:function(){" + n.render + "},staticRenderFns:[" + n.staticRenderFns.map(function (e) {
        return "function(){" + e + "}";
      }).join(",") + "]}";
    }
  }function gr(e) {
    return "scopedSlots:{" + Object.keys(e).map(function (t) {
      return yr(t, e[t]);
    }).join(",") + "}";
  }function yr(e, t) {
    return e + ":function(" + String(t.attrsMap.scope) + "){return " + ("template" === t.tag ? _r(t) || "void 0" : cr(t)) + "}";
  }function _r(e, t) {
    var n = e.children;if (n.length) {
      var r = n[0];return 1 === n.length && r.for && "template" !== r.tag && "slot" !== r.tag ? cr(r) : "[" + n.map(wr).join(",") + "]" + (t ? br(n) ? "" : ",true" : "");
    }
  }function br(e) {
    for (var t = 0; t < e.length; t++) {
      var n = e[t];if ($r(n) || n.if && n.ifConditions.some(function (e) {
        return $r(e.block);
      })) return !1;
    }return !0;
  }function $r(e) {
    return e.for || "template" === e.tag || "slot" === e.tag;
  }function wr(e) {
    return 1 === e.type ? cr(e) : xr(e);
  }function xr(e) {
    return "_v(" + (2 === e.type ? e.expression : Or(JSON.stringify(e.text))) + ")";
  }function Cr(e) {
    var t = e.slotName || '"default"',
        n = _r(e);return "_t(" + t + (n ? "," + n : "") + (e.attrs ? (n ? "" : ",null") + ",{" + e.attrs.map(function (e) {
      return Gr(e.name) + ":" + e.value;
    }).join(",") + "}" : "") + ")";
  }function kr(e, t) {
    var n = t.inlineTemplate ? null : _r(t, !0);return "_c(" + e + "," + vr(t) + (n ? "," + n : "") + ")";
  }function Ar(e) {
    for (var t = "", n = 0; n < e.length; n++) {
      var r = e[n];t += '"' + r.name + '":' + Or(r.value) + ",";
    }return t.slice(0, -1);
  }function Or(e) {
    return e.replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
  }function Sr(e, t) {
    var n = En(e.trim(), t);Zn(n, t);var r = sr(n, t);return { ast: n, render: r.render, staticRenderFns: r.staticRenderFns };
  }function Tr(e, t) {
    var n = (t.warn || mn, xn(e, "class"));n && (e.staticClass = JSON.stringify(n));var r = wn(e, "class", !1);r && (e.classBinding = r);
  }function Er(e) {
    var t = "";return e.staticClass && (t += "staticClass:" + e.staticClass + ","), e.classBinding && (t += "class:" + e.classBinding + ","), t;
  }function jr(e, t) {
    var n = (t.warn || mn, xn(e, "style"));n && (e.staticStyle = JSON.stringify($a(n)));var r = wn(e, "style", !1);r && (e.styleBinding = r);
  }function Nr(e) {
    var t = "";return e.staticStyle && (t += "staticStyle:" + e.staticStyle + ","), e.styleBinding && (t += "style:(" + e.styleBinding + "),"), t;
  }function Lr(e, t, n) {
    Io = n;var r = t.value,
        i = t.modifiers,
        a = e.tag,
        o = e.attrsMap.type;return "select" === a ? Rr(e, r, i) : "input" === a && "checkbox" === o ? Dr(e, r, i) : "input" === a && "radio" === o ? Mr(e, r, i) : Pr(e, r, i), !0;
  }function Dr(e, t, n) {
    var r = n && n.number,
        i = wn(e, "value") || "null",
        a = wn(e, "true-value") || "true",
        o = wn(e, "false-value") || "false";yn(e, "checked", "Array.isArray(" + t + ")?_i(" + t + "," + i + ")>-1:_q(" + t + "," + a + ")"), $n(e, "change", "var $$a=" + t + ",$$el=$event.target,$$c=$$el.checked?(" + a + "):(" + o + ");if(Array.isArray($$a)){var $$v=" + (r ? "_n(" + i + ")" : i) + ",$$i=_i($$a,$$v);if($$c){$$i<0&&(" + t + "=$$a.concat($$v))}else{$$i>-1&&(" + t + "=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{" + t + "=$$c}", null, !0);
  }function Mr(e, t, n) {
    var r = n && n.number,
        i = wn(e, "value") || "null";i = r ? "_n(" + i + ")" : i, yn(e, "checked", "_q(" + t + "," + i + ")"), $n(e, "change", Ir(t, i), null, !0);
  }function Pr(e, t, n) {
    var r = e.attrsMap.type,
        i = n || {},
        a = i.lazy,
        o = i.number,
        s = i.trim,
        c = a || li && "range" === r ? "change" : "input",
        l = !a && "range" !== r,
        u = "input" === e.tag || "textarea" === e.tag,
        f = u ? "$event.target.value" + (s ? ".trim()" : "") : s ? "(typeof $event === 'string' ? $event.trim() : $event)" : "$event";f = o || "number" === r ? "_n(" + f + ")" : f;var d = Ir(t, f);u && l && (d = "if($event.target.composing)return;" + d), yn(e, "value", u ? "_s(" + t + ")" : "(" + t + ")"), $n(e, c, d, null, !0), (s || o || "number" === r) && $n(e, "blur", "$forceUpdate()");
  }function Rr(e, t, n) {
    var r = n && n.number,
        i = 'Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return ' + (r ? "_n(val)" : "val") + "})" + (null == e.attrsMap.multiple ? "[0]" : ""),
        a = Ir(t, i);$n(e, "change", a, null, !0);
  }function Ir(e, t) {
    var n = Cn(e);return null === n.idx ? e + "=" + t : "var $$exp = " + n.exp + ", $$idx = " + n.idx + ";if (!Array.isArray($$exp)){" + e + "=" + t + "}else{$$exp.splice($$idx, 1, " + t + ")}";
  }function Fr(e, t) {
    t.value && yn(e, "textContent", "_s(" + t.value + ")");
  }function Ur(e, t) {
    t.value && yn(e, "innerHTML", "_s(" + t.value + ")");
  }function Hr(e, t) {
    return t = t ? l(l({}, ys), t) : ys, Sr(e, t);
  }function Br(e, t, n) {
    var r = (t && t.warn || yi, t && t.delimiters ? String(t.delimiters) + e : e);if (gs[r]) return gs[r];var i = {},
        a = Hr(e, t);i.render = Vr(a.render);var o = a.staticRenderFns.length;i.staticRenderFns = new Array(o);for (var s = 0; s < o; s++) {
      i.staticRenderFns[s] = Vr(a.staticRenderFns[s]);
    }return gs[r] = i;
  }function Vr(e) {
    try {
      return new Function(e);
    } catch (e) {
      return p;
    }
  }function zr(e) {
    if (e.outerHTML) return e.outerHTML;var t = document.createElement("div");return t.appendChild(e.cloneNode(!0)), t.innerHTML;
  }var Jr,
      Kr,
      qr = n("slot,component", !0),
      Wr = Object.prototype.hasOwnProperty,
      Zr = /-(\w)/g,
      Gr = o(function (e) {
    return e.replace(Zr, function (e, t) {
      return t ? t.toUpperCase() : "";
    });
  }),
      Yr = o(function (e) {
    return e.charAt(0).toUpperCase() + e.slice(1);
  }),
      Qr = /([^-])([A-Z])/g,
      Xr = o(function (e) {
    return e.replace(Qr, "$1-$2").replace(Qr, "$1-$2").toLowerCase();
  }),
      ei = Object.prototype.toString,
      ti = "[object Object]",
      ni = function ni() {
    return !1;
  },
      ri = function ri(e) {
    return e;
  },
      ii = { optionMergeStrategies: Object.create(null), silent: !1, devtools: !1, errorHandler: null, ignoredElements: null, keyCodes: Object.create(null), isReservedTag: ni, isUnknownElement: ni, getTagNamespace: p, parsePlatformTagName: ri, mustUseProp: ni, _assetTypes: ["component", "directive", "filter"], _lifecycleHooks: ["beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated"], _maxUpdateCount: 100 },
      ai = /[^\w.$]/,
      oi = "__proto__" in {},
      si = "undefined" != typeof window,
      ci = si && window.navigator.userAgent.toLowerCase(),
      li = ci && /msie|trident/.test(ci),
      ui = ci && ci.indexOf("msie 9.0") > 0,
      fi = ci && ci.indexOf("edge/") > 0,
      di = ci && ci.indexOf("android") > 0,
      pi = ci && /iphone|ipad|ipod|ios/.test(ci),
      vi = function vi() {
    return void 0 === Jr && (Jr = !si && "undefined" != typeof global && "server" === global.process.env.VUE_ENV), Jr;
  },
      hi = si && window.__VUE_DEVTOOLS_GLOBAL_HOOK__,
      mi = function () {
    function e() {
      r = !1;var e = n.slice(0);n.length = 0;for (var t = 0; t < e.length; t++) {
        e[t]();
      }
    }var t,
        n = [],
        r = !1;if ("undefined" != typeof Promise && b(Promise)) {
      var i = Promise.resolve(),
          a = function a(e) {
        console.error(e);
      };t = function t() {
        i.then(e).catch(a), pi && setTimeout(p);
      };
    } else if ("undefined" == typeof MutationObserver || !b(MutationObserver) && "[object MutationObserverConstructor]" !== MutationObserver.toString()) t = function t() {
      setTimeout(e, 0);
    };else {
      var o = 1,
          s = new MutationObserver(e),
          c = document.createTextNode(String(o));s.observe(c, { characterData: !0 }), t = function t() {
        o = (o + 1) % 2, c.data = String(o);
      };
    }return function (e, i) {
      var a;if (n.push(function () {
        e && e.call(i), a && a(i);
      }), r || (r = !0, t()), !e && "undefined" != typeof Promise) return new Promise(function (e) {
        a = e;
      });
    };
  }();Kr = "undefined" != typeof Set && b(Set) ? Set : function () {
    function e() {
      this.set = Object.create(null);
    }return e.prototype.has = function (e) {
      return this.set[e] === !0;
    }, e.prototype.add = function (e) {
      this.set[e] = !0;
    }, e.prototype.clear = function () {
      this.set = Object.create(null);
    }, e;
  }();var gi,
      yi = p,
      _i = 0,
      bi = function bi() {
    this.id = _i++, this.subs = [];
  };bi.prototype.addSub = function (e) {
    this.subs.push(e);
  }, bi.prototype.removeSub = function (e) {
    r(this.subs, e);
  }, bi.prototype.depend = function () {
    bi.target && bi.target.addDep(this);
  }, bi.prototype.notify = function () {
    for (var e = this.subs.slice(), t = 0, n = e.length; t < n; t++) {
      e[t].update();
    }
  }, bi.target = null;var $i = [],
      wi = Array.prototype,
      xi = Object.create(wi);["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach(function (e) {
    var t = wi[e];y(xi, e, function () {
      for (var n = arguments, r = arguments.length, i = new Array(r); r--;) {
        i[r] = n[r];
      }var a,
          o = t.apply(this, i),
          s = this.__ob__;switch (e) {case "push":
          a = i;break;case "unshift":
          a = i;break;case "splice":
          a = i.slice(2);}return a && s.observeArray(a), s.dep.notify(), o;
    });
  });var Ci = Object.getOwnPropertyNames(xi),
      ki = { shouldConvert: !0, isSettingProps: !1 },
      Ai = function Ai(e) {
    if (this.value = e, this.dep = new bi(), this.vmCount = 0, y(e, "__ob__", this), Array.isArray(e)) {
      var t = oi ? x : C;t(e, xi, Ci), this.observeArray(e);
    } else this.walk(e);
  };Ai.prototype.walk = function (e) {
    for (var t = Object.keys(e), n = 0; n < t.length; n++) {
      A(e, t[n], e[t[n]]);
    }
  }, Ai.prototype.observeArray = function (e) {
    for (var t = 0, n = e.length; t < n; t++) {
      k(e[t]);
    }
  };var Oi = ii.optionMergeStrategies;Oi.data = function (e, t, n) {
    return n ? e || t ? function () {
      var r = "function" == typeof t ? t.call(n) : t,
          i = "function" == typeof e ? e.call(n) : void 0;return r ? E(r, i) : i;
    } : void 0 : t ? "function" != typeof t ? e : e ? function () {
      return E(t.call(this), e.call(this));
    } : t : e;
  }, ii._lifecycleHooks.forEach(function (e) {
    Oi[e] = j;
  }), ii._assetTypes.forEach(function (e) {
    Oi[e + "s"] = N;
  }), Oi.watch = function (e, t) {
    if (!t) return e;if (!e) return t;var n = {};l(n, e);for (var r in t) {
      var i = n[r],
          a = t[r];i && !Array.isArray(i) && (i = [i]), n[r] = i ? i.concat(a) : [a];
    }return n;
  }, Oi.props = Oi.methods = Oi.computed = function (e, t) {
    if (!t) return e;if (!e) return t;var n = Object.create(null);return l(n, e), l(n, t), n;
  };var Si = function Si(e, t) {
    return void 0 === t ? e : t;
  },
      Ti = Object.freeze({ defineReactive: A, _toString: e, toNumber: t, makeMap: n, isBuiltInTag: qr, remove: r, hasOwn: i, isPrimitive: a, cached: o, camelize: Gr, capitalize: Yr, hyphenate: Xr, bind: s, toArray: c, extend: l, isObject: u, isPlainObject: f, toObject: d, noop: p, no: ni, identity: ri, genStaticKeys: v, looseEqual: h, looseIndexOf: m, isReserved: g, def: y, parsePath: _, hasProto: oi, inBrowser: si, UA: ci, isIE: li, isIE9: ui, isEdge: fi, isAndroid: di, isIOS: pi, isServerRendering: vi, devtools: hi, nextTick: mi, get _Set() {
      return Kr;
    }, mergeOptions: M, resolveAsset: P, warn: yi, formatComponentName: gi, validateProp: R }),
      Ei = [],
      ji = {},
      Ni = !1,
      Li = !1,
      Di = 0,
      Mi = 0,
      Pi = function Pi(e, t, n, r) {
    void 0 === r && (r = {}), this.vm = e, e._watchers.push(this), this.deep = !!r.deep, this.user = !!r.user, this.lazy = !!r.lazy, this.sync = !!r.sync, this.expression = t.toString(), this.cb = n, this.id = ++Mi, this.active = !0, this.dirty = this.lazy, this.deps = [], this.newDeps = [], this.depIds = new Kr(), this.newDepIds = new Kr(), "function" == typeof t ? this.getter = t : (this.getter = _(t), this.getter || (this.getter = function () {})), this.value = this.lazy ? void 0 : this.get();
  };Pi.prototype.get = function () {
    $(this);var e = this.getter.call(this.vm, this.vm);return this.deep && z(e), w(), this.cleanupDeps(), e;
  }, Pi.prototype.addDep = function (e) {
    var t = e.id;this.newDepIds.has(t) || (this.newDepIds.add(t), this.newDeps.push(e), this.depIds.has(t) || e.addSub(this));
  }, Pi.prototype.cleanupDeps = function () {
    for (var e = this, t = this.deps.length; t--;) {
      var n = e.deps[t];e.newDepIds.has(n.id) || n.removeSub(e);
    }var r = this.depIds;this.depIds = this.newDepIds, this.newDepIds = r, this.newDepIds.clear(), r = this.deps, this.deps = this.newDeps, this.newDeps = r, this.newDeps.length = 0;
  }, Pi.prototype.update = function () {
    this.lazy ? this.dirty = !0 : this.sync ? this.run() : V(this);
  }, Pi.prototype.run = function () {
    if (this.active) {
      var e = this.get();if (e !== this.value || u(e) || this.deep) {
        var t = this.value;if (this.value = e, this.user) try {
          this.cb.call(this.vm, e, t);
        } catch (e) {
          if (!ii.errorHandler) throw e;ii.errorHandler.call(null, e, this.vm);
        } else this.cb.call(this.vm, e, t);
      }
    }
  }, Pi.prototype.evaluate = function () {
    this.value = this.get(), this.dirty = !1;
  }, Pi.prototype.depend = function () {
    for (var e = this, t = this.deps.length; t--;) {
      e.deps[t].depend();
    }
  }, Pi.prototype.teardown = function () {
    var e = this;if (this.active) {
      this.vm._isBeingDestroyed || this.vm._vForRemoving || r(this.vm._watchers, this);for (var t = this.deps.length; t--;) {
        e.deps[t].removeSub(e);
      }this.active = !1;
    }
  };var Ri = new Kr(),
      Ii = { enumerable: !0, configurable: !0, get: p, set: p },
      Fi = function Fi(e, t, n, r, i, a, o) {
    this.tag = e, this.data = t, this.children = n, this.text = r, this.elm = i, this.ns = void 0, this.context = a, this.functionalContext = void 0, this.key = t && t.key, this.componentOptions = o, this.child = void 0, this.parent = void 0, this.raw = !1, this.isStatic = !1, this.isRootInsert = !0, this.isComment = !1, this.isCloned = !1, this.isOnce = !1;
  },
      Ui = function Ui() {
    var e = new Fi();return e.text = "", e.isComment = !0, e;
  },
      Hi = null,
      Bi = { init: fe, prepatch: de, insert: pe, destroy: ve },
      Vi = Object.keys(Bi),
      zi = 0;Me(Ie), ee(Ie), De(Ie), oe(Ie), je(Ie);var Ji = [String, RegExp],
      Ki = { name: "keep-alive", abstract: !0, props: { include: Ji, exclude: Ji }, created: function created() {
      this.cache = Object.create(null);
    }, render: function render() {
      var e = Ae(this.$slots.default);if (e && e.componentOptions) {
        var t = e.componentOptions,
            n = t.Ctor.options.name || t.tag;if (n && (this.include && !Ve(this.include, n) || this.exclude && Ve(this.exclude, n))) return e;var r = null == e.key ? t.Ctor.cid + (t.tag ? "::" + t.tag : "") : e.key;this.cache[r] ? e.child = this.cache[r].child : this.cache[r] = e, e.data.keepAlive = !0;
      }return e;
    }, destroyed: function destroyed() {
      var e = this;for (var t in this.cache) {
        var n = e.cache[t];se(n.child, "deactivated"), n.child.$destroy();
      }
    } },
      qi = { KeepAlive: Ki };ze(Ie), Object.defineProperty(Ie.prototype, "$isServer", { get: vi }), Ie.version = "2.1.6";var Wi,
      Zi,
      Gi = n("input,textarea,option,select"),
      Yi = function Yi(e, t) {
    return "value" === t && Gi(e) || "selected" === t && "option" === e || "checked" === t && "input" === e || "muted" === t && "video" === e;
  },
      Qi = n("contenteditable,draggable,spellcheck"),
      Xi = n("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"),
      ea = "http://www.w3.org/1999/xlink",
      ta = function ta(e) {
    return ":" === e.charAt(5) && "xlink" === e.slice(0, 5);
  },
      na = function na(e) {
    return ta(e) ? e.slice(6, e.length) : "";
  },
      ra = function ra(e) {
    return null == e || e === !1;
  },
      ia = { svg: "http://www.w3.org/2000/svg", math: "http://www.w3.org/1998/Math/MathML", xhtml: "http://www.w3.org/1999/xhtml" },
      aa = n("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template"),
      oa = n("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", !0),
      sa = function sa(e) {
    return "pre" === e;
  },
      ca = function ca(e) {
    return aa(e) || oa(e);
  },
      la = Object.create(null),
      ua = Object.freeze({ createElement: Xe, createElementNS: et, createTextNode: tt, createComment: nt, insertBefore: rt, removeChild: it, appendChild: at, parentNode: ot, nextSibling: st, tagName: ct, setTextContent: lt, setAttribute: ut }),
      fa = { create: function create(e, t) {
      ft(t);
    }, update: function update(e, t) {
      e.data.ref !== t.data.ref && (ft(e, !0), ft(t));
    }, destroy: function destroy(e) {
      ft(e, !0);
    } },
      da = new Fi("", {}, []),
      pa = ["create", "activate", "update", "remove", "destroy"],
      va = { create: gt, update: gt, destroy: function destroy(e) {
      gt(e, da);
    } },
      ha = Object.create(null),
      ma = [fa, va],
      ga = { create: wt, update: wt },
      ya = { create: Ct, update: Ct },
      _a = { create: Ot, update: Ot },
      ba = { create: St, update: St },
      $a = o(function (e) {
    var t = {},
        n = /;(?![^(]*\))/g,
        r = /:(.+)/;return e.split(n).forEach(function (e) {
      if (e) {
        var n = e.split(r);n.length > 1 && (t[n[0].trim()] = n[1].trim());
      }
    }), t;
  }),
      wa = /^--/,
      xa = /\s*!important$/,
      Ca = function Ca(e, t, n) {
    wa.test(t) ? e.style.setProperty(t, n) : xa.test(n) ? e.style.setProperty(t, n.replace(xa, ""), "important") : e.style[Aa(t)] = n;
  },
      ka = ["Webkit", "Moz", "ms"],
      Aa = o(function (e) {
    if (Zi = Zi || document.createElement("div"), e = Gr(e), "filter" !== e && e in Zi.style) return e;for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < ka.length; n++) {
      var r = ka[n] + t;if (r in Zi.style) return r;
    }
  }),
      Oa = { create: Lt, update: Lt },
      Sa = si && !ui,
      Ta = "transition",
      Ea = "animation",
      ja = "transition",
      Na = "transitionend",
      La = "animation",
      Da = "animationend";Sa && (void 0 === window.ontransitionend && void 0 !== window.onwebkittransitionend && (ja = "WebkitTransition", Na = "webkitTransitionEnd"), void 0 === window.onanimationend && void 0 !== window.onwebkitanimationend && (La = "WebkitAnimation", Da = "webkitAnimationEnd"));var Ma = si && window.requestAnimationFrame || setTimeout,
      Pa = /\b(transform|all)(,|$)/,
      Ra = o(function (e) {
    return { enterClass: e + "-enter", leaveClass: e + "-leave", appearClass: e + "-enter", enterActiveClass: e + "-enter-active", leaveActiveClass: e + "-leave-active", appearActiveClass: e + "-enter-active" };
  }),
      Ia = si ? { create: qt, activate: qt, remove: function remove(e, t) {
      e.data.show ? t() : zt(e, t);
    } } : {},
      Fa = [ga, ya, _a, ba, Oa, Ia],
      Ua = Fa.concat(ma),
      Ha = mt({ nodeOps: ua, modules: Ua });ui && document.addEventListener("selectionchange", function () {
    var e = document.activeElement;
    e && e.vmodel && Xt(e, "input");
  });var Ba = { inserted: function inserted(e, t, n) {
      if ("select" === n.tag) {
        var r = function r() {
          Wt(e, t, n.context);
        };r(), (li || fi) && setTimeout(r, 0);
      } else "textarea" !== n.tag && "text" !== e.type || (e._vModifiers = t.modifiers, t.modifiers.lazy || (di || (e.addEventListener("compositionstart", Yt), e.addEventListener("compositionend", Qt)), ui && (e.vmodel = !0)));
    }, componentUpdated: function componentUpdated(e, t, n) {
      if ("select" === n.tag) {
        Wt(e, t, n.context);var r = e.multiple ? t.value.some(function (t) {
          return Zt(t, e.options);
        }) : t.value !== t.oldValue && Zt(t.value, e.options);r && Xt(e, "change");
      }
    } },
      Va = { bind: function bind(e, t, n) {
      var r = t.value;n = en(n);var i = n.data && n.data.transition,
          a = e.__vOriginalDisplay = "none" === e.style.display ? "" : e.style.display;r && i && !ui ? (n.data.show = !0, Vt(n, function () {
        e.style.display = a;
      })) : e.style.display = r ? a : "none";
    }, update: function update(e, t, n) {
      var r = t.value,
          i = t.oldValue;if (r !== i) {
        n = en(n);var a = n.data && n.data.transition;a && !ui ? (n.data.show = !0, r ? Vt(n, function () {
          e.style.display = e.__vOriginalDisplay;
        }) : zt(n, function () {
          e.style.display = "none";
        })) : e.style.display = r ? e.__vOriginalDisplay : "none";
      }
    } },
      za = { model: Ba, show: Va },
      Ja = { name: String, appear: Boolean, css: Boolean, mode: String, type: String, enterClass: String, leaveClass: String, enterActiveClass: String, leaveActiveClass: String, appearClass: String, appearActiveClass: String },
      Ka = { name: "transition", props: Ja, abstract: !0, render: function render(e) {
      var t = this,
          n = this.$slots.default;if (n && (n = n.filter(function (e) {
        return e.tag;
      }), n.length)) {
        var r = this.mode,
            i = n[0];if (an(this.$vnode)) return i;var a = tn(i);if (!a) return i;if (this._leaving) return rn(e, i);var o = a.key = null == a.key || a.isStatic ? "__v" + (a.tag + this._uid) + "__" : a.key,
            s = (a.data || (a.data = {})).transition = nn(this),
            c = this._vnode,
            u = tn(c);if (a.data.directives && a.data.directives.some(function (e) {
          return "show" === e.name;
        }) && (a.data.show = !0), u && u.data && u.key !== o) {
          var f = u.data.transition = l({}, s);if ("out-in" === r) return this._leaving = !0, be(f, "afterLeave", function () {
            t._leaving = !1, t.$forceUpdate();
          }, o), rn(e, i);if ("in-out" === r) {
            var d,
                p = function p() {
              d();
            };be(s, "afterEnter", p, o), be(s, "enterCancelled", p, o), be(f, "delayLeave", function (e) {
              d = e;
            }, o);
          }
        }return i;
      }
    } },
      qa = l({ tag: String, moveClass: String }, Ja);delete qa.mode;var Wa = { props: qa, render: function render(e) {
      for (var t = this.tag || this.$vnode.data.tag || "span", n = Object.create(null), r = this.prevChildren = this.children, i = this.$slots.default || [], a = this.children = [], o = nn(this), s = 0; s < i.length; s++) {
        var c = i[s];c.tag && null != c.key && 0 !== String(c.key).indexOf("__vlist") && (a.push(c), n[c.key] = c, (c.data || (c.data = {})).transition = o);
      }if (r) {
        for (var l = [], u = [], f = 0; f < r.length; f++) {
          var d = r[f];d.data.transition = o, d.data.pos = d.elm.getBoundingClientRect(), n[d.key] ? l.push(d) : u.push(d);
        }this.kept = e(t, null, l), this.removed = u;
      }return e(t, null, a);
    }, beforeUpdate: function beforeUpdate() {
      this.__patch__(this._vnode, this.kept, !1, !0), this._vnode = this.kept;
    }, updated: function updated() {
      var e = this.prevChildren,
          t = this.moveClass || (this.name || "v") + "-move";if (e.length && this.hasMove(e[0].elm, t)) {
        e.forEach(on), e.forEach(sn), e.forEach(cn);document.body.offsetHeight;e.forEach(function (e) {
          if (e.data.moved) {
            var n = e.elm,
                r = n.style;Rt(n, t), r.transform = r.WebkitTransform = r.transitionDuration = "", n.addEventListener(Na, n._moveCb = function e(r) {
              r && !/transform$/.test(r.propertyName) || (n.removeEventListener(Na, e), n._moveCb = null, It(n, t));
            });
          }
        });
      }
    }, methods: { hasMove: function hasMove(e, t) {
        if (!Sa) return !1;if (null != this._hasMove) return this._hasMove;Rt(e, t);var n = Ut(e);return It(e, t), this._hasMove = n.hasTransform;
      } } },
      Za = { Transition: Ka, TransitionGroup: Wa };Ie.config.isUnknownElement = Ye, Ie.config.isReservedTag = ca, Ie.config.getTagNamespace = Ge, Ie.config.mustUseProp = Yi, l(Ie.options.directives, za), l(Ie.options.components, Za), Ie.prototype.__patch__ = si ? Ha : p, Ie.prototype.$mount = function (e, t) {
    return e = e && si ? Qe(e) : void 0, this._mount(e, t);
  }, setTimeout(function () {
    ii.devtools && hi && hi.emit("init", Ie);
  }, 0);var Ga,
      Ya = !!si && ln("\n", "&#10;"),
      Qa = n("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr", !0),
      Xa = n("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source", !0),
      eo = n("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track", !0),
      to = /([^\s"'<>\/=]+)/,
      no = /(?:=)/,
      ro = [/"([^"]*)"+/.source, /'([^']*)'+/.source, /([^\s"'=<>`]+)/.source],
      io = new RegExp("^\\s*" + to.source + "(?:\\s*(" + no.source + ")\\s*(?:" + ro.join("|") + "))?"),
      ao = "[a-zA-Z_][\\w\\-\\.]*",
      oo = "((?:" + ao + "\\:)?" + ao + ")",
      so = new RegExp("^<" + oo),
      co = /^\s*(\/?)>/,
      lo = new RegExp("^<\\/" + oo + "[^>]*>"),
      uo = /^<!DOCTYPE [^>]+>/i,
      fo = /^<!--/,
      po = /^<!\[/,
      vo = !1;"x".replace(/x(.)?/g, function (e, t) {
    vo = "" === t;
  });var ho,
      mo,
      go,
      yo,
      _o,
      bo,
      $o,
      wo,
      xo,
      Co,
      ko,
      Ao,
      Oo,
      So,
      To,
      Eo,
      jo,
      No,
      Lo,
      Do,
      Mo,
      Po,
      Ro,
      Io,
      Fo = n("script,style", !0),
      Uo = function Uo(e) {
    return "lang" === e.name && "html" !== e.value;
  },
      Ho = function Ho(e, t, n) {
    return !!Fo(e) || !(!t || 1 !== n.length) && !("template" === e && !n[0].attrs.some(Uo));
  },
      Bo = {},
      Vo = /&lt;/g,
      zo = /&gt;/g,
      Jo = /&#10;/g,
      Ko = /&amp;/g,
      qo = /&quot;/g,
      Wo = /\{\{((?:.|\n)+?)\}\}/g,
      Zo = /[-.*+?^${}()|[\]\/\\]/g,
      Go = o(function (e) {
    var t = e[0].replace(Zo, "\\$&"),
        n = e[1].replace(Zo, "\\$&");return new RegExp(t + "((?:.|\\n)+?)" + n, "g");
  }),
      Yo = /^v-|^@|^:/,
      Qo = /(.*?)\s+(?:in|of)\s+(.*)/,
      Xo = /\((\{[^}]*\}|[^,]*),([^,]*)(?:,([^,]*))?\)/,
      es = /^:|^v-bind:/,
      ts = /^@|^v-on:/,
      ns = /:(.*)$/,
      rs = /\.[^.]+/g,
      is = o(un),
      as = /^xmlns:NS\d+/,
      os = /^NS\d+:/,
      ss = o(Gn),
      cs = /^\s*([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/,
      ls = /^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/,
      us = { esc: 27, tab: 9, enter: 13, space: 32, up: 38, left: 37, right: 39, down: 40, delete: [8, 46] },
      fs = { stop: "$event.stopPropagation();", prevent: "$event.preventDefault();", self: "if($event.target !== $event.currentTarget)return;", ctrl: "if(!$event.ctrlKey)return;", shift: "if(!$event.shiftKey)return;", alt: "if(!$event.altKey)return;", meta: "if(!$event.metaKey)return;" },
      ds = { bind: or, cloak: p },
      ps = { staticKeys: ["staticClass"], transformNode: Tr, genData: Er },
      vs = { staticKeys: ["staticStyle"], transformNode: jr, genData: Nr },
      hs = [ps, vs],
      ms = { model: Lr, text: Fr, html: Ur },
      gs = Object.create(null),
      ys = { expectHTML: !0, modules: hs, staticKeys: v(hs), directives: ms, isReservedTag: ca, isUnaryTag: Qa, mustUseProp: Yi, getTagNamespace: Ge, isPreTag: sa },
      _s = o(function (e) {
    var t = Qe(e);return t && t.innerHTML;
  }),
      bs = Ie.prototype.$mount;return Ie.prototype.$mount = function (e, t) {
    if (e = e && Qe(e), e === document.body || e === document.documentElement) return this;var n = this.$options;if (!n.render) {
      var r = n.template;if (r) {
        if ("string" == typeof r) "#" === r.charAt(0) && (r = _s(r));else {
          if (!r.nodeType) return this;r = r.innerHTML;
        }
      } else e && (r = zr(e));if (r) {
        var i = Br(r, { warn: yi, shouldDecodeNewlines: Ya, delimiters: n.delimiters }, this),
            a = i.render,
            o = i.staticRenderFns;n.render = a, n.staticRenderFns = o;
      }
    }return bs.call(this, e, t);
  }, Ie.compile = Br, Ie;
});
//# sourceMappingURL=vue.min.js.map

'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * vue-router v2.1.1
 * (c) 2016 Evan You
 * @license MIT
 */
(function (global, factory) {
  (typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : global.VueRouter = factory();
})(window, function () {
  'use strict';

  var View = {
    name: 'router-view',
    functional: true,
    props: {
      name: {
        type: String,
        default: 'default'
      }
    },
    render: function render(h, ref) {
      var props = ref.props;
      var children = ref.children;
      var parent = ref.parent;
      var data = ref.data;

      data.routerView = true;

      var route = parent.$route;
      var cache = parent._routerViewCache || (parent._routerViewCache = {});
      var depth = 0;
      var inactive = false;

      while (parent) {
        if (parent.$vnode && parent.$vnode.data.routerView) {
          depth++;
        }
        if (parent._inactive) {
          inactive = true;
        }
        parent = parent.$parent;
      }

      data.routerViewDepth = depth;
      var matched = route.matched[depth];
      if (!matched) {
        return h();
      }

      var name = props.name;
      var component = inactive ? cache[name] : cache[name] = matched.components[name];

      if (!inactive) {
        var hooks = data.hook || (data.hook = {});
        hooks.init = function (vnode) {
          matched.instances[name] = vnode.child;
        };
        hooks.prepatch = function (oldVnode, vnode) {
          matched.instances[name] = vnode.child;
        };
        hooks.destroy = function (vnode) {
          if (matched.instances[name] === vnode.child) {
            matched.instances[name] = undefined;
          }
        };
      }

      return h(component, data, children);
    }
  };

  /*  */

  function assert(condition, message) {
    if (!condition) {
      throw new Error("[vue-router] " + message);
    }
  }

  function warn(condition, message) {
    if (!condition) {
      typeof console !== 'undefined' && console.warn("[vue-router] " + message);
    }
  }

  /*  */

  var encode = encodeURIComponent;
  var decode = decodeURIComponent;

  function resolveQuery(query, extraQuery) {
    if (extraQuery === void 0) extraQuery = {};

    if (query) {
      var parsedQuery;
      try {
        parsedQuery = parseQuery(query);
      } catch (e) {
        "development" !== 'production' && warn(false, e.message);
        parsedQuery = {};
      }
      for (var key in extraQuery) {
        parsedQuery[key] = extraQuery[key];
      }
      return parsedQuery;
    } else {
      return extraQuery;
    }
  }

  function parseQuery(query) {
    var res = {};

    query = query.trim().replace(/^(\?|#|&)/, '');

    if (!query) {
      return res;
    }

    query.split('&').forEach(function (param) {
      var parts = param.replace(/\+/g, ' ').split('=');
      var key = decode(parts.shift());
      var val = parts.length > 0 ? decode(parts.join('=')) : null;

      if (res[key] === undefined) {
        res[key] = val;
      } else if (Array.isArray(res[key])) {
        res[key].push(val);
      } else {
        res[key] = [res[key], val];
      }
    });

    return res;
  }

  function stringifyQuery(obj) {
    var res = obj ? Object.keys(obj).map(function (key) {
      var val = obj[key];

      if (val === undefined) {
        return '';
      }

      if (val === null) {
        return encode(key);
      }

      if (Array.isArray(val)) {
        var result = [];
        val.slice().forEach(function (val2) {
          if (val2 === undefined) {
            return;
          }
          if (val2 === null) {
            result.push(encode(key));
          } else {
            result.push(encode(key) + '=' + encode(val2));
          }
        });
        return result.join('&');
      }

      return encode(key) + '=' + encode(val);
    }).filter(function (x) {
      return x.length > 0;
    }).join('&') : null;
    return res ? "?" + res : '';
  }

  /*  */

  function createRoute(record, location, redirectedFrom) {
    var route = {
      name: location.name || record && record.name,
      meta: record && record.meta || {},
      path: location.path || '/',
      hash: location.hash || '',
      query: location.query || {},
      params: location.params || {},
      fullPath: getFullPath(location),
      matched: record ? formatMatch(record) : []
    };
    if (redirectedFrom) {
      route.redirectedFrom = getFullPath(redirectedFrom);
    }
    return Object.freeze(route);
  }

  // the starting route that represents the initial state
  var START = createRoute(null, {
    path: '/'
  });

  function formatMatch(record) {
    var res = [];
    while (record) {
      res.unshift(record);
      record = record.parent;
    }
    return res;
  }

  function getFullPath(ref) {
    var path = ref.path;
    var query = ref.query;if (query === void 0) query = {};
    var hash = ref.hash;if (hash === void 0) hash = '';

    return (path || '/') + stringifyQuery(query) + hash;
  }

  var trailingSlashRE = /\/$/;
  function isSameRoute(a, b) {
    if (b === START) {
      return a === b;
    } else if (!b) {
      return false;
    } else if (a.path && b.path) {
      return a.path.replace(trailingSlashRE, '') === b.path.replace(trailingSlashRE, '') && a.hash === b.hash && isObjectEqual(a.query, b.query);
    } else if (a.name && b.name) {
      return a.name === b.name && a.hash === b.hash && isObjectEqual(a.query, b.query) && isObjectEqual(a.params, b.params);
    } else {
      return false;
    }
  }

  function isObjectEqual(a, b) {
    if (a === void 0) a = {};
    if (b === void 0) b = {};

    var aKeys = Object.keys(a);
    var bKeys = Object.keys(b);
    if (aKeys.length !== bKeys.length) {
      return false;
    }
    return aKeys.every(function (key) {
      return String(a[key]) === String(b[key]);
    });
  }

  function isIncludedRoute(current, target) {
    return current.path.indexOf(target.path.replace(/\/$/, '')) === 0 && (!target.hash || current.hash === target.hash) && queryIncludes(current.query, target.query);
  }

  function queryIncludes(current, target) {
    for (var key in target) {
      if (!(key in current)) {
        return false;
      }
    }
    return true;
  }

  /*  */

  // work around weird flow bug
  var toTypes = [String, Object];

  var Link = {
    name: 'router-link',
    props: {
      to: {
        type: toTypes,
        required: true
      },
      tag: {
        type: String,
        default: 'a'
      },
      exact: Boolean,
      append: Boolean,
      replace: Boolean,
      activeClass: String,
      event: {
        type: [String, Array],
        default: 'click'
      }
    },
    render: function render(h) {
      var this$1 = this;

      var router = this.$router;
      var current = this.$route;
      var ref = router.resolve(this.to, current, this.append);
      var normalizedTo = ref.normalizedTo;
      var resolved = ref.resolved;
      var href = ref.href;
      var classes = {};
      var activeClass = this.activeClass || router.options.linkActiveClass || 'router-link-active';
      var compareTarget = normalizedTo.path ? createRoute(null, normalizedTo) : resolved;
      classes[activeClass] = this.exact ? isSameRoute(current, compareTarget) : isIncludedRoute(current, compareTarget);

      var handler = function handler(e) {
        if (guardEvent(e)) {
          if (this$1.replace) {
            router.replace(normalizedTo);
          } else {
            router.push(normalizedTo);
          }
        }
      };

      var on = { click: guardEvent };
      if (Array.isArray(this.event)) {
        this.event.forEach(function (e) {
          on[e] = handler;
        });
      } else {
        on[this.event] = handler;
      }

      var data = {
        class: classes
      };

      if (this.tag === 'a') {
        data.on = on;
        data.attrs = { href: href };
      } else {
        // find the first <a> child and apply listener and href
        var a = findAnchor(this.$slots.default);
        if (a) {
          // in case the <a> is a static node
          a.isStatic = false;
          var extend = _Vue.util.extend;
          var aData = a.data = extend({}, a.data);
          aData.on = on;
          var aAttrs = a.data.attrs = extend({}, a.data.attrs);
          aAttrs.href = href;
        } else {
          // doesn't have <a> child, apply listener to self
          data.on = on;
        }
      }

      return h(this.tag, data, this.$slots.default);
    }
  };

  function guardEvent(e) {
    // don't redirect with control keys
    /* istanbul ignore if */
    if (e.metaKey || e.ctrlKey || e.shiftKey) {
      return;
    }
    // don't redirect when preventDefault called
    /* istanbul ignore if */
    if (e.defaultPrevented) {
      return;
    }
    // don't redirect on right click
    /* istanbul ignore if */
    if (e.button !== 0) {
      return;
    }
    // don't redirect if `target="_blank"`
    /* istanbul ignore if */
    var target = e.target.getAttribute('target');
    if (/\b_blank\b/i.test(target)) {
      return;
    }

    e.preventDefault();
    return true;
  }

  function findAnchor(children) {
    if (children) {
      var child;
      for (var i = 0; i < children.length; i++) {
        child = children[i];
        if (child.tag === 'a') {
          return child;
        }
        if (child.children && (child = findAnchor(child.children))) {
          return child;
        }
      }
    }
  }

  var _Vue;

  function install(Vue) {
    if (install.installed) {
      return;
    }
    install.installed = true;

    _Vue = Vue;

    Object.defineProperty(Vue.prototype, '$router', {
      get: function get() {
        return this.$root._router;
      }
    });

    Object.defineProperty(Vue.prototype, '$route', {
      get: function get$1() {
        return this.$root._route;
      }
    });

    Vue.mixin({
      beforeCreate: function beforeCreate() {
        if (this.$options.router) {
          this._router = this.$options.router;
          this._router.init(this);
          Vue.util.defineReactive(this, '_route', this._router.history.current);
        }
      }
    });

    Vue.component('router-view', View);
    Vue.component('router-link', Link);

    var strats = Vue.config.optionMergeStrategies;
    // use the same hook merging strategy for route hooks
    strats.beforeRouteEnter = strats.beforeRouteLeave = strats.created;
  }

  /*  */

  function resolvePath(relative, base, append) {
    if (relative.charAt(0) === '/') {
      return relative;
    }

    if (relative.charAt(0) === '?' || relative.charAt(0) === '#') {
      return base + relative;
    }

    var stack = base.split('/');

    // remove trailing segment if:
    // - not appending
    // - appending to trailing slash (last segment is empty)
    if (!append || !stack[stack.length - 1]) {
      stack.pop();
    }

    // resolve relative path
    var segments = relative.replace(/^\//, '').split('/');
    for (var i = 0; i < segments.length; i++) {
      var segment = segments[i];
      if (segment === '.') {
        continue;
      } else if (segment === '..') {
        stack.pop();
      } else {
        stack.push(segment);
      }
    }

    // ensure leading slash
    if (stack[0] !== '') {
      stack.unshift('');
    }

    return stack.join('/');
  }

  function parsePath(path) {
    var hash = '';
    var query = '';

    var hashIndex = path.indexOf('#');
    if (hashIndex >= 0) {
      hash = path.slice(hashIndex);
      path = path.slice(0, hashIndex);
    }

    var queryIndex = path.indexOf('?');
    if (queryIndex >= 0) {
      query = path.slice(queryIndex + 1);
      path = path.slice(0, queryIndex);
    }

    return {
      path: path,
      query: query,
      hash: hash
    };
  }

  function cleanPath(path) {
    return path.replace(/\/\//g, '/');
  }

  /*  */

  function createRouteMap(routes) {
    var pathMap = Object.create(null);
    var nameMap = Object.create(null);

    routes.forEach(function (route) {
      addRouteRecord(pathMap, nameMap, route);
    });

    return {
      pathMap: pathMap,
      nameMap: nameMap
    };
  }

  function addRouteRecord(pathMap, nameMap, route, parent, matchAs) {
    var path = route.path;
    var name = route.name;
    if ("development" !== 'production') {
      assert(path != null, "\"path\" is required in a route configuration.");
      assert(typeof route.component !== 'string', "route config \"component\" for path: " + String(path || name) + " cannot be a " + "string id. Use an actual component instead.");
    }

    var record = {
      path: normalizePath(path, parent),
      components: route.components || { default: route.component },
      instances: {},
      name: name,
      parent: parent,
      matchAs: matchAs,
      redirect: route.redirect,
      beforeEnter: route.beforeEnter,
      meta: route.meta || {}
    };

    if (route.children) {
      // Warn if route is named and has a default child route.
      // If users navigate to this route by name, the default child will
      // not be rendered (GH Issue #629)
      if ("development" !== 'production') {
        if (route.name && route.children.some(function (child) {
          return (/^\/?$/.test(child.path)
          );
        })) {
          warn(false, "Named Route '" + route.name + "' has a default child route.\n          When navigating to this named route (:to=\"{name: '" + route.name + "'\"), the default child route will not be rendered.\n          Remove the name from this route and use the name of the default child route for named links instead.");
        }
      }
      route.children.forEach(function (child) {
        addRouteRecord(pathMap, nameMap, child, record);
      });
    }

    if (route.alias !== undefined) {
      if (Array.isArray(route.alias)) {
        route.alias.forEach(function (alias) {
          addRouteRecord(pathMap, nameMap, { path: alias }, parent, record.path);
        });
      } else {
        addRouteRecord(pathMap, nameMap, { path: route.alias }, parent, record.path);
      }
    }

    if (!pathMap[record.path]) {
      pathMap[record.path] = record;
    }
    if (name) {
      if (!nameMap[name]) {
        nameMap[name] = record;
      } else if ("development" !== 'production') {
        warn(false, "Duplicate named routes definition: { name: \"" + name + "\", path: \"" + record.path + "\" }");
      }
    }
  }

  function normalizePath(path, parent) {
    path = path.replace(/\/$/, '');
    if (path[0] === '/') {
      return path;
    }
    if (parent == null) {
      return path;
    }
    return cleanPath(parent.path + "/" + path);
  }

  var __moduleExports = Array.isArray || function (arr) {
    return Object.prototype.toString.call(arr) == '[object Array]';
  };

  var isarray = __moduleExports;

  /**
   * Expose `pathToRegexp`.
   */
  var index = pathToRegexp;
  var parse_1 = parse;
  var compile_1 = compile;
  var tokensToFunction_1 = tokensToFunction;
  var tokensToRegExp_1 = tokensToRegExp;

  /**
   * The main path matching regexp utility.
   *
   * @type {RegExp}
   */
  var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');

  /**
   * Parse a string for the raw tokens.
   *
   * @param  {string}  str
   * @param  {Object=} options
   * @return {!Array}
   */
  function parse(str, options) {
    var tokens = [];
    var key = 0;
    var index = 0;
    var path = '';
    var defaultDelimiter = options && options.delimiter || '/';
    var res;

    while ((res = PATH_REGEXP.exec(str)) != null) {
      var m = res[0];
      var escaped = res[1];
      var offset = res.index;
      path += str.slice(index, offset);
      index = offset + m.length;

      // Ignore already escaped sequences.
      if (escaped) {
        path += escaped[1];
        continue;
      }

      var next = str[index];
      var prefix = res[2];
      var name = res[3];
      var capture = res[4];
      var group = res[5];
      var modifier = res[6];
      var asterisk = res[7];

      // Push the current path onto the tokens.
      if (path) {
        tokens.push(path);
        path = '';
      }

      var partial = prefix != null && next != null && next !== prefix;
      var repeat = modifier === '+' || modifier === '*';
      var optional = modifier === '?' || modifier === '*';
      var delimiter = res[2] || defaultDelimiter;
      var pattern = capture || group;

      tokens.push({
        name: name || key++,
        prefix: prefix || '',
        delimiter: delimiter,
        optional: optional,
        repeat: repeat,
        partial: partial,
        asterisk: !!asterisk,
        pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
      });
    }

    // Match any characters still remaining.
    if (index < str.length) {
      path += str.substr(index);
    }

    // If the path exists, push it onto the end.
    if (path) {
      tokens.push(path);
    }

    return tokens;
  }

  /**
   * Compile a string to a template function for the path.
   *
   * @param  {string}             str
   * @param  {Object=}            options
   * @return {!function(Object=, Object=)}
   */
  function compile(str, options) {
    return tokensToFunction(parse(str, options));
  }

  /**
   * Prettier encoding of URI path segments.
   *
   * @param  {string}
   * @return {string}
   */
  function encodeURIComponentPretty(str) {
    return encodeURI(str).replace(/[\/?#]/g, function (c) {
      return '%' + c.charCodeAt(0).toString(16).toUpperCase();
    });
  }

  /**
   * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
   *
   * @param  {string}
   * @return {string}
   */
  function encodeAsterisk(str) {
    return encodeURI(str).replace(/[?#]/g, function (c) {
      return '%' + c.charCodeAt(0).toString(16).toUpperCase();
    });
  }

  /**
   * Expose a method for transforming tokens into the path function.
   */
  function tokensToFunction(tokens) {
    // Compile all the tokens into regexps.
    var matches = new Array(tokens.length);

    // Compile all the patterns before compilation.
    for (var i = 0; i < tokens.length; i++) {
      if (_typeof(tokens[i]) === 'object') {
        matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
      }
    }

    return function (obj, opts) {
      var path = '';
      var data = obj || {};
      var options = opts || {};
      var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

      for (var i = 0; i < tokens.length; i++) {
        var token = tokens[i];

        if (typeof token === 'string') {
          path += token;

          continue;
        }

        var value = data[token.name];
        var segment;

        if (value == null) {
          if (token.optional) {
            // Prepend partial segment prefixes.
            if (token.partial) {
              path += token.prefix;
            }

            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to be defined');
          }
        }

        if (isarray(value)) {
          if (!token.repeat) {
            throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
          }

          if (value.length === 0) {
            if (token.optional) {
              continue;
            } else {
              throw new TypeError('Expected "' + token.name + '" to not be empty');
            }
          }

          for (var j = 0; j < value.length; j++) {
            segment = encode(value[j]);

            if (!matches[i].test(segment)) {
              throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
            }

            path += (j === 0 ? token.prefix : token.delimiter) + segment;
          }

          continue;
        }

        segment = token.asterisk ? encodeAsterisk(value) : encode(value);

        if (!matches[i].test(segment)) {
          throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
        }

        path += token.prefix + segment;
      }

      return path;
    };
  }

  /**
   * Escape a regular expression string.
   *
   * @param  {string} str
   * @return {string}
   */
  function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1');
  }

  /**
   * Escape the capturing group by escaping special characters and meaning.
   *
   * @param  {string} group
   * @return {string}
   */
  function escapeGroup(group) {
    return group.replace(/([=!:$\/()])/g, '\\$1');
  }

  /**
   * Attach the keys as a property of the regexp.
   *
   * @param  {!RegExp} re
   * @param  {Array}   keys
   * @return {!RegExp}
   */
  function attachKeys(re, keys) {
    re.keys = keys;
    return re;
  }

  /**
   * Get the flags for a regexp from the options.
   *
   * @param  {Object} options
   * @return {string}
   */
  function flags(options) {
    return options.sensitive ? '' : 'i';
  }

  /**
   * Pull out keys from a regexp.
   *
   * @param  {!RegExp} path
   * @param  {!Array}  keys
   * @return {!RegExp}
   */
  function regexpToRegexp(path, keys) {
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);

    if (groups) {
      for (var i = 0; i < groups.length; i++) {
        keys.push({
          name: i,
          prefix: null,
          delimiter: null,
          optional: false,
          repeat: false,
          partial: false,
          asterisk: false,
          pattern: null
        });
      }
    }

    return attachKeys(path, keys);
  }

  /**
   * Transform an array into a regexp.
   *
   * @param  {!Array}  path
   * @param  {Array}   keys
   * @param  {!Object} options
   * @return {!RegExp}
   */
  function arrayToRegexp(path, keys, options) {
    var parts = [];

    for (var i = 0; i < path.length; i++) {
      parts.push(pathToRegexp(path[i], keys, options).source);
    }

    var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

    return attachKeys(regexp, keys);
  }

  /**
   * Create a path regexp from string input.
   *
   * @param  {string}  path
   * @param  {!Array}  keys
   * @param  {!Object} options
   * @return {!RegExp}
   */
  function stringToRegexp(path, keys, options) {
    return tokensToRegExp(parse(path, options), keys, options);
  }

  /**
   * Expose a function for taking tokens and returning a RegExp.
   *
   * @param  {!Array}          tokens
   * @param  {(Array|Object)=} keys
   * @param  {Object=}         options
   * @return {!RegExp}
   */
  function tokensToRegExp(tokens, keys, options) {
    if (!isarray(keys)) {
      options = /** @type {!Object} */keys || options;
      keys = [];
    }

    options = options || {};

    var strict = options.strict;
    var end = options.end !== false;
    var route = '';

    // Iterate over the tokens and create our regexp string.
    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        route += escapeString(token);
      } else {
        var prefix = escapeString(token.prefix);
        var capture = '(?:' + token.pattern + ')';

        keys.push(token);

        if (token.repeat) {
          capture += '(?:' + prefix + capture + ')*';
        }

        if (token.optional) {
          if (!token.partial) {
            capture = '(?:' + prefix + '(' + capture + '))?';
          } else {
            capture = prefix + '(' + capture + ')?';
          }
        } else {
          capture = prefix + '(' + capture + ')';
        }

        route += capture;
      }
    }

    var delimiter = escapeString(options.delimiter || '/');
    var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

    // In non-strict mode we allow a slash at the end of match. If the path to
    // match already ends with a slash, we remove it for consistency. The slash
    // is valid at the end of a path match, not in the middle. This is important
    // in non-ending mode, where "/test/" shouldn't match "/test//route".
    if (!strict) {
      route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
    }

    if (end) {
      route += '$';
    } else {
      // In non-ending mode, we need the capturing groups to match as much as
      // possible by using a positive lookahead to the end or next path segment.
      route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
    }

    return attachKeys(new RegExp('^' + route, flags(options)), keys);
  }

  /**
   * Normalize the given path string, returning a regular expression.
   *
   * An empty array can be passed in for the keys, which will hold the
   * placeholder key descriptions. For example, using `/user/:id`, `keys` will
   * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
   *
   * @param  {(string|RegExp|Array)} path
   * @param  {(Array|Object)=}       keys
   * @param  {Object=}               options
   * @return {!RegExp}
   */
  function pathToRegexp(path, keys, options) {
    if (!isarray(keys)) {
      options = /** @type {!Object} */keys || options;
      keys = [];
    }

    options = options || {};

    if (path instanceof RegExp) {
      return regexpToRegexp(path, /** @type {!Array} */keys);
    }

    if (isarray(path)) {
      return arrayToRegexp( /** @type {!Array} */path, /** @type {!Array} */keys, options);
    }

    return stringToRegexp( /** @type {string} */path, /** @type {!Array} */keys, options);
  }

  index.parse = parse_1;
  index.compile = compile_1;
  index.tokensToFunction = tokensToFunction_1;
  index.tokensToRegExp = tokensToRegExp_1;

  /*  */

  var regexpCache = Object.create(null);

  function getRouteRegex(path) {
    var hit = regexpCache[path];
    var keys, regexp;

    if (hit) {
      keys = hit.keys;
      regexp = hit.regexp;
    } else {
      keys = [];
      regexp = index(path, keys);
      regexpCache[path] = { keys: keys, regexp: regexp };
    }

    return { keys: keys, regexp: regexp };
  }

  var regexpCompileCache = Object.create(null);

  function fillParams(path, params, routeMsg) {
    try {
      var filler = regexpCompileCache[path] || (regexpCompileCache[path] = index.compile(path));
      return filler(params || {}, { pretty: true });
    } catch (e) {
      if ("development" !== 'production') {
        warn(false, "missing param for " + routeMsg + ": " + e.message);
      }
      return '';
    }
  }

  /*  */

  function normalizeLocation(raw, current, append) {
    var next = typeof raw === 'string' ? { path: raw } : raw;
    // named target
    if (next.name || next._normalized) {
      return next;
    }

    // relative params
    if (!next.path && next.params && current) {
      next = assign({}, next);
      next._normalized = true;
      var params = assign(assign({}, current.params), next.params);
      if (current.name) {
        next.name = current.name;
        next.params = params;
      } else if (current.matched) {
        var rawPath = current.matched[current.matched.length - 1].path;
        next.path = fillParams(rawPath, params, "path " + current.path);
      } else if ("development" !== 'production') {
        warn(false, "relative params navigation requires a current route.");
      }
      return next;
    }

    var parsedPath = parsePath(next.path || '');
    var basePath = current && current.path || '/';
    var path = parsedPath.path ? resolvePath(parsedPath.path, basePath, append || next.append) : current && current.path || '/';
    var query = resolveQuery(parsedPath.query, next.query);
    var hash = next.hash || parsedPath.hash;
    if (hash && hash.charAt(0) !== '#') {
      hash = "#" + hash;
    }

    return {
      _normalized: true,
      path: path,
      query: query,
      hash: hash
    };
  }

  function assign(a, b) {
    for (var key in b) {
      a[key] = b[key];
    }
    return a;
  }

  /*  */

  function createMatcher(routes) {
    var ref = createRouteMap(routes);
    var pathMap = ref.pathMap;
    var nameMap = ref.nameMap;

    function match(raw, currentRoute, redirectedFrom) {
      var location = normalizeLocation(raw, currentRoute);
      var name = location.name;

      if (name) {
        var record = nameMap[name];
        var paramNames = getRouteRegex(record.path).keys.filter(function (key) {
          return !key.optional;
        }).map(function (key) {
          return key.name;
        });

        if (_typeof(location.params) !== 'object') {
          location.params = {};
        }

        if (currentRoute && _typeof(currentRoute.params) === 'object') {
          for (var key in currentRoute.params) {
            if (!(key in location.params) && paramNames.indexOf(key) > -1) {
              location.params[key] = currentRoute.params[key];
            }
          }
        }

        if (record) {
          location.path = fillParams(record.path, location.params, "named route \"" + name + "\"");
          return _createRoute(record, location, redirectedFrom);
        }
      } else if (location.path) {
        location.params = {};
        for (var path in pathMap) {
          if (matchRoute(path, location.params, location.path)) {
            return _createRoute(pathMap[path], location, redirectedFrom);
          }
        }
      }
      // no match
      return _createRoute(null, location);
    }

    function redirect(record, location) {
      var originalRedirect = record.redirect;
      var redirect = typeof originalRedirect === 'function' ? originalRedirect(createRoute(record, location)) : originalRedirect;

      if (typeof redirect === 'string') {
        redirect = { path: redirect };
      }

      if (!redirect || (typeof redirect === 'undefined' ? 'undefined' : _typeof(redirect)) !== 'object') {
        "development" !== 'production' && warn(false, "invalid redirect option: " + JSON.stringify(redirect));
        return _createRoute(null, location);
      }

      var re = redirect;
      var name = re.name;
      var path = re.path;
      var query = location.query;
      var hash = location.hash;
      var params = location.params;
      query = re.hasOwnProperty('query') ? re.query : query;
      hash = re.hasOwnProperty('hash') ? re.hash : hash;
      params = re.hasOwnProperty('params') ? re.params : params;

      if (name) {
        // resolved named direct
        var targetRecord = nameMap[name];
        if ("development" !== 'production') {
          assert(targetRecord, "redirect failed: named route \"" + name + "\" not found.");
        }
        return match({
          _normalized: true,
          name: name,
          query: query,
          hash: hash,
          params: params
        }, undefined, location);
      } else if (path) {
        // 1. resolve relative redirect
        var rawPath = resolveRecordPath(path, record);
        // 2. resolve params
        var resolvedPath = fillParams(rawPath, params, "redirect route with path \"" + rawPath + "\"");
        // 3. rematch with existing query and hash
        return match({
          _normalized: true,
          path: resolvedPath,
          query: query,
          hash: hash
        }, undefined, location);
      } else {
        warn(false, "invalid redirect option: " + JSON.stringify(redirect));
        return _createRoute(null, location);
      }
    }

    function alias(record, location, matchAs) {
      var aliasedPath = fillParams(matchAs, location.params, "aliased route with path \"" + matchAs + "\"");
      var aliasedMatch = match({
        _normalized: true,
        path: aliasedPath
      });
      if (aliasedMatch) {
        var matched = aliasedMatch.matched;
        var aliasedRecord = matched[matched.length - 1];
        location.params = aliasedMatch.params;
        return _createRoute(aliasedRecord, location);
      }
      return _createRoute(null, location);
    }

    function _createRoute(record, location, redirectedFrom) {
      if (record && record.redirect) {
        return redirect(record, redirectedFrom || location);
      }
      if (record && record.matchAs) {
        return alias(record, location, record.matchAs);
      }
      return createRoute(record, location, redirectedFrom);
    }

    return match;
  }

  function matchRoute(path, params, pathname) {
    var ref = getRouteRegex(path);
    var regexp = ref.regexp;
    var keys = ref.keys;
    var m = pathname.match(regexp);

    if (!m) {
      return false;
    } else if (!params) {
      return true;
    }

    for (var i = 1, len = m.length; i < len; ++i) {
      var key = keys[i - 1];
      var val = typeof m[i] === 'string' ? decodeURIComponent(m[i]) : m[i];
      if (key) {
        params[key.name] = val;
      }
    }

    return true;
  }

  function resolveRecordPath(path, record) {
    return resolvePath(path, record.parent ? record.parent.path : '/', true);
  }

  /*  */

  var inBrowser = typeof window !== 'undefined';

  var supportsHistory = inBrowser && function () {
    var ua = window.navigator.userAgent;

    if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) {
      return false;
    }

    return window.history && 'pushState' in window.history;
  }();

  /*  */

  function runQueue(queue, fn, cb) {
    var step = function step(index) {
      if (index >= queue.length) {
        cb();
      } else {
        if (queue[index]) {
          fn(queue[index], function () {
            step(index + 1);
          });
        } else {
          step(index + 1);
        }
      }
    };
    step(0);
  }

  /*  */

  var History = function History(router, base) {
    this.router = router;
    this.base = normalizeBase(base);
    // start with a route object that stands for "nowhere"
    this.current = START;
    this.pending = null;
  };

  History.prototype.listen = function listen(cb) {
    this.cb = cb;
  };

  History.prototype.transitionTo = function transitionTo(location, onComplete, onAbort) {
    var this$1 = this;

    var route = this.router.match(location, this.current);
    this.confirmTransition(route, function () {
      this$1.updateRoute(route);
      onComplete && onComplete(route);
      this$1.ensureURL();
    }, onAbort);
  };

  History.prototype.confirmTransition = function confirmTransition(route, onComplete, onAbort) {
    var this$1 = this;

    var current = this.current;
    var abort = function abort() {
      onAbort && onAbort();
    };
    if (isSameRoute(route, current)) {
      this.ensureURL();
      return abort();
    }

    var ref = resolveQueue(this.current.matched, route.matched);
    var deactivated = ref.deactivated;
    var activated = ref.activated;

    var queue = [].concat(
    // in-component leave guards
    extractLeaveGuards(deactivated),
    // global before hooks
    this.router.beforeHooks,
    // enter guards
    activated.map(function (m) {
      return m.beforeEnter;
    }),
    // async components
    resolveAsyncComponents(activated));

    this.pending = route;
    var iterator = function iterator(hook, next) {
      if (this$1.pending !== route) {
        return abort();
      }
      hook(route, current, function (to) {
        if (to === false) {
          // next(false) -> abort navigation, ensure current URL
          this$1.ensureURL(true);
          abort();
        } else if (typeof to === 'string' || (typeof to === 'undefined' ? 'undefined' : _typeof(to)) === 'object') {
          // next('/') or next({ path: '/' }) -> redirect
          (typeof to === 'undefined' ? 'undefined' : _typeof(to)) === 'object' && to.replace ? this$1.replace(to) : this$1.push(to);
          abort();
        } else {
          // confirm transition and pass on the value
          next(to);
        }
      });
    };

    runQueue(queue, iterator, function () {
      var postEnterCbs = [];
      var enterGuards = extractEnterGuards(activated, postEnterCbs, function () {
        return this$1.current === route;
      });
      // wait until async components are resolved before
      // extracting in-component enter guards
      runQueue(enterGuards, iterator, function () {
        if (this$1.pending !== route) {
          return abort();
        }
        this$1.pending = null;
        onComplete(route);
        if (this$1.router.app) {
          this$1.router.app.$nextTick(function () {
            postEnterCbs.forEach(function (cb) {
              return cb();
            });
          });
        }
      });
    });
  };

  History.prototype.updateRoute = function updateRoute(route) {
    var prev = this.current;
    this.current = route;
    this.cb && this.cb(route);
    this.router.afterHooks.forEach(function (hook) {
      hook && hook(route, prev);
    });
  };

  function normalizeBase(base) {
    if (!base) {
      if (inBrowser) {
        // respect <base> tag
        var baseEl = document.querySelector('base');
        base = baseEl ? baseEl.getAttribute('href') : '/';
      } else {
        base = '/';
      }
    }
    // make sure there's the starting slash
    if (base.charAt(0) !== '/') {
      base = '/' + base;
    }
    // remove trailing slash
    return base.replace(/\/$/, '');
  }

  function resolveQueue(current, next) {
    var i;
    var max = Math.max(current.length, next.length);
    for (i = 0; i < max; i++) {
      if (current[i] !== next[i]) {
        break;
      }
    }
    return {
      activated: next.slice(i),
      deactivated: current.slice(i)
    };
  }

  function extractGuard(def, key) {
    if (typeof def !== 'function') {
      // extend now so that global mixins are applied.
      def = _Vue.extend(def);
    }
    return def.options[key];
  }

  function extractLeaveGuards(matched) {
    return flatten(flatMapComponents(matched, function (def, instance) {
      var guard = extractGuard(def, 'beforeRouteLeave');
      if (guard) {
        return Array.isArray(guard) ? guard.map(function (guard) {
          return wrapLeaveGuard(guard, instance);
        }) : wrapLeaveGuard(guard, instance);
      }
    }).reverse());
  }

  function wrapLeaveGuard(guard, instance) {
    return function routeLeaveGuard() {
      return guard.apply(instance, arguments);
    };
  }

  function extractEnterGuards(matched, cbs, isValid) {
    return flatten(flatMapComponents(matched, function (def, _, match, key) {
      var guard = extractGuard(def, 'beforeRouteEnter');
      if (guard) {
        return Array.isArray(guard) ? guard.map(function (guard) {
          return wrapEnterGuard(guard, cbs, match, key, isValid);
        }) : wrapEnterGuard(guard, cbs, match, key, isValid);
      }
    }));
  }

  function wrapEnterGuard(guard, cbs, match, key, isValid) {
    return function routeEnterGuard(to, from, next) {
      return guard(to, from, function (cb) {
        next(cb);
        if (typeof cb === 'function') {
          cbs.push(function () {
            // #750
            // if a router-view is wrapped with an out-in transition,
            // the instance may not have been registered at this time.
            // we will need to poll for registration until current route
            // is no longer valid.
            poll(cb, match.instances, key, isValid);
          });
        }
      });
    };
  }

  function poll(cb, // somehow flow cannot infer this is a function
  instances, key, isValid) {
    if (instances[key]) {
      cb(instances[key]);
    } else if (isValid()) {
      setTimeout(function () {
        poll(cb, instances, key, isValid);
      }, 16);
    }
  }

  function resolveAsyncComponents(matched) {
    return flatMapComponents(matched, function (def, _, match, key) {
      // if it's a function and doesn't have Vue options attached,
      // assume it's an async component resolve function.
      // we are not using Vue's default async resolving mechanism because
      // we want to halt the navigation until the incoming component has been
      // resolved.
      if (typeof def === 'function' && !def.options) {
        return function (to, from, next) {
          var resolve = function resolve(resolvedDef) {
            match.components[key] = resolvedDef;
            next();
          };

          var reject = function reject(reason) {
            warn(false, "Failed to resolve async component " + key + ": " + reason);
            next(false);
          };

          var res = def(resolve, reject);
          if (res && typeof res.then === 'function') {
            res.then(resolve, reject);
          }
        };
      }
    });
  }

  function flatMapComponents(matched, fn) {
    return flatten(matched.map(function (m) {
      return Object.keys(m.components).map(function (key) {
        return fn(m.components[key], m.instances[key], m, key);
      });
    }));
  }

  function flatten(arr) {
    return Array.prototype.concat.apply([], arr);
  }

  /*  */

  var positionStore = Object.create(null);

  function saveScrollPosition(key) {
    if (!key) {
      return;
    }
    positionStore[key] = {
      x: window.pageXOffset,
      y: window.pageYOffset
    };
  }

  function getScrollPosition(key) {
    if (!key) {
      return;
    }
    return positionStore[key];
  }

  function getElementPosition(el) {
    var docRect = document.documentElement.getBoundingClientRect();
    var elRect = el.getBoundingClientRect();
    return {
      x: elRect.left - docRect.left,
      y: elRect.top - docRect.top
    };
  }

  function isValidPosition(obj) {
    return isNumber(obj.x) || isNumber(obj.y);
  }

  function normalizePosition(obj) {
    return {
      x: isNumber(obj.x) ? obj.x : window.pageXOffset,
      y: isNumber(obj.y) ? obj.y : window.pageYOffset
    };
  }

  function isNumber(v) {
    return typeof v === 'number';
  }

  /*  */

  var genKey = function genKey() {
    return String(Date.now());
  };
  var _key = genKey();

  var HTML5History = function (History) {
    function HTML5History(router, base) {
      var this$1 = this;

      History.call(this, router, base);

      var expectScroll = router.options.scrollBehavior;
      window.addEventListener('popstate', function (e) {
        _key = e.state && e.state.key;
        var current = this$1.current;
        this$1.transitionTo(getLocation(this$1.base), function (next) {
          if (expectScroll) {
            this$1.handleScroll(next, current, true);
          }
        });
      });

      if (expectScroll) {
        window.addEventListener('scroll', function () {
          saveScrollPosition(_key);
        });
      }
    }

    if (History) HTML5History.__proto__ = History;
    HTML5History.prototype = Object.create(History && History.prototype);
    HTML5History.prototype.constructor = HTML5History;

    HTML5History.prototype.go = function go(n) {
      window.history.go(n);
    };

    HTML5History.prototype.push = function push(location) {
      var this$1 = this;

      var current = this.current;
      this.transitionTo(location, function (route) {
        pushState(cleanPath(this$1.base + route.fullPath));
        this$1.handleScroll(route, current, false);
      });
    };

    HTML5History.prototype.replace = function replace(location) {
      var this$1 = this;

      var current = this.current;
      this.transitionTo(location, function (route) {
        replaceState(cleanPath(this$1.base + route.fullPath));
        this$1.handleScroll(route, current, false);
      });
    };

    HTML5History.prototype.ensureURL = function ensureURL(push) {
      if (getLocation(this.base) !== this.current.fullPath) {
        var current = cleanPath(this.base + this.current.fullPath);
        push ? pushState(current) : replaceState(current);
      }
    };

    HTML5History.prototype.handleScroll = function handleScroll(to, from, isPop) {
      var router = this.router;
      if (!router.app) {
        return;
      }

      var behavior = router.options.scrollBehavior;
      if (!behavior) {
        return;
      }
      if ("development" !== 'production') {
        assert(typeof behavior === 'function', "scrollBehavior must be a function");
      }

      // wait until re-render finishes before scrolling
      router.app.$nextTick(function () {
        var position = getScrollPosition(_key);
        var shouldScroll = behavior(to, from, isPop ? position : null);
        if (!shouldScroll) {
          return;
        }
        var isObject = (typeof shouldScroll === 'undefined' ? 'undefined' : _typeof(shouldScroll)) === 'object';
        if (isObject && typeof shouldScroll.selector === 'string') {
          var el = document.querySelector(shouldScroll.selector);
          if (el) {
            position = getElementPosition(el);
          } else if (isValidPosition(shouldScroll)) {
            position = normalizePosition(shouldScroll);
          }
        } else if (isObject && isValidPosition(shouldScroll)) {
          position = normalizePosition(shouldScroll);
        }

        if (position) {
          window.scrollTo(position.x, position.y);
        }
      });
    };

    return HTML5History;
  }(History);

  function getLocation(base) {
    var path = window.location.pathname;
    if (base && path.indexOf(base) === 0) {
      path = path.slice(base.length);
    }
    return (path || '/') + window.location.search + window.location.hash;
  }

  function pushState(url, replace) {
    // try...catch the pushState call to get around Safari
    // DOM Exception 18 where it limits to 100 pushState calls
    var history = window.history;
    try {
      if (replace) {
        history.replaceState({ key: _key }, '', url);
      } else {
        _key = genKey();
        history.pushState({ key: _key }, '', url);
      }
      saveScrollPosition(_key);
    } catch (e) {
      window.location[replace ? 'assign' : 'replace'](url);
    }
  }

  function replaceState(url) {
    pushState(url, true);
  }

  /*  */

  var HashHistory = function (History) {
    function HashHistory(router, base, fallback) {
      History.call(this, router, base);
      // check history fallback deeplinking
      if (fallback && this.checkFallback()) {
        return;
      }
      ensureSlash();
    }

    if (History) HashHistory.__proto__ = History;
    HashHistory.prototype = Object.create(History && History.prototype);
    HashHistory.prototype.constructor = HashHistory;

    HashHistory.prototype.checkFallback = function checkFallback() {
      var location = getLocation(this.base);
      if (!/^\/#/.test(location)) {
        window.location.replace(cleanPath(this.base + '/#' + location));
        return true;
      }
    };

    HashHistory.prototype.onHashChange = function onHashChange() {
      if (!ensureSlash()) {
        return;
      }
      this.transitionTo(getHash(), function (route) {
        replaceHash(route.fullPath);
      });
    };

    HashHistory.prototype.push = function push(location) {
      this.transitionTo(location, function (route) {
        pushHash(route.fullPath);
      });
    };

    HashHistory.prototype.replace = function replace(location) {
      this.transitionTo(location, function (route) {
        replaceHash(route.fullPath);
      });
    };

    HashHistory.prototype.go = function go(n) {
      window.history.go(n);
    };

    HashHistory.prototype.ensureURL = function ensureURL(push) {
      var current = this.current.fullPath;
      if (getHash() !== current) {
        push ? pushHash(current) : replaceHash(current);
      }
    };

    return HashHistory;
  }(History);

  function ensureSlash() {
    var path = getHash();
    if (path.charAt(0) === '/') {
      return true;
    }
    replaceHash('/' + path);
    return false;
  }

  function getHash() {
    // We can't use window.location.hash here because it's not
    // consistent across browsers - Firefox will pre-decode it!
    var href = window.location.href;
    var index = href.indexOf('#');
    return index === -1 ? '' : href.slice(index + 1);
  }

  function pushHash(path) {
    window.location.hash = path;
  }

  function replaceHash(path) {
    var i = window.location.href.indexOf('#');
    window.location.replace(window.location.href.slice(0, i >= 0 ? i : 0) + '#' + path);
  }

  /*  */

  var AbstractHistory = function (History) {
    function AbstractHistory(router) {
      History.call(this, router);
      this.stack = [];
      this.index = -1;
    }

    if (History) AbstractHistory.__proto__ = History;
    AbstractHistory.prototype = Object.create(History && History.prototype);
    AbstractHistory.prototype.constructor = AbstractHistory;

    AbstractHistory.prototype.push = function push(location) {
      var this$1 = this;

      this.transitionTo(location, function (route) {
        this$1.stack = this$1.stack.slice(0, this$1.index + 1).concat(route);
        this$1.index++;
      });
    };

    AbstractHistory.prototype.replace = function replace(location) {
      var this$1 = this;

      this.transitionTo(location, function (route) {
        this$1.stack = this$1.stack.slice(0, this$1.index).concat(route);
      });
    };

    AbstractHistory.prototype.go = function go(n) {
      var this$1 = this;

      var targetIndex = this.index + n;
      if (targetIndex < 0 || targetIndex >= this.stack.length) {
        return;
      }
      var route = this.stack[targetIndex];
      this.confirmTransition(route, function () {
        this$1.index = targetIndex;
        this$1.updateRoute(route);
      });
    };

    AbstractHistory.prototype.ensureURL = function ensureURL() {
      // noop
    };

    return AbstractHistory;
  }(History);

  /*  */

  var VueRouter = function VueRouter(options) {
    if (options === void 0) options = {};

    this.app = null;
    this.options = options;
    this.beforeHooks = [];
    this.afterHooks = [];
    this.match = createMatcher(options.routes || []);

    var mode = options.mode || 'hash';
    this.fallback = mode === 'history' && !supportsHistory;
    if (this.fallback) {
      mode = 'hash';
    }
    if (!inBrowser) {
      mode = 'abstract';
    }
    this.mode = mode;

    switch (mode) {
      case 'history':
        this.history = new HTML5History(this, options.base);
        break;
      case 'hash':
        this.history = new HashHistory(this, options.base, this.fallback);
        break;
      case 'abstract':
        this.history = new AbstractHistory(this);
        break;
      default:
        "development" !== 'production' && assert(false, "invalid mode: " + mode);
    }
  };

  var prototypeAccessors = { currentRoute: {} };

  prototypeAccessors.currentRoute.get = function () {
    return this.history && this.history.current;
  };

  VueRouter.prototype.init = function init(app /* Vue component instance */) {
    var this$1 = this;

    "development" !== 'production' && assert(install.installed, "not installed. Make sure to call `Vue.use(VueRouter)` " + "before creating root instance.");

    this.app = app;

    var history = this.history;

    if (history instanceof HTML5History) {
      history.transitionTo(getLocation(history.base));
    } else if (history instanceof HashHistory) {
      var setupHashListener = function setupHashListener() {
        window.addEventListener('hashchange', function () {
          history.onHashChange();
        });
      };
      history.transitionTo(getHash(), setupHashListener, setupHashListener);
    }

    history.listen(function (route) {
      this$1.app._route = route;
    });
  };

  VueRouter.prototype.beforeEach = function beforeEach(fn) {
    this.beforeHooks.push(fn);
  };

  VueRouter.prototype.afterEach = function afterEach(fn) {
    this.afterHooks.push(fn);
  };

  VueRouter.prototype.push = function push(location) {
    this.history.push(location);
  };

  VueRouter.prototype.replace = function replace(location) {
    this.history.replace(location);
  };

  VueRouter.prototype.go = function go(n) {
    this.history.go(n);
  };

  VueRouter.prototype.back = function back() {
    this.go(-1);
  };

  VueRouter.prototype.forward = function forward() {
    this.go(1);
  };

  VueRouter.prototype.getMatchedComponents = function getMatchedComponents(to) {
    var route = to ? this.resolve(to).resolved : this.currentRoute;
    if (!route) {
      return [];
    }
    return [].concat.apply([], route.matched.map(function (m) {
      return Object.keys(m.components).map(function (key) {
        return m.components[key];
      });
    }));
  };

  VueRouter.prototype.resolve = function resolve(to, current, append) {
    var normalizedTo = normalizeLocation(to, current || this.history.current, append);
    var resolved = this.match(normalizedTo, current);
    var fullPath = resolved.redirectedFrom || resolved.fullPath;
    var base = this.history.base;
    var href = createHref(base, fullPath, this.mode);
    return {
      normalizedTo: normalizedTo,
      resolved: resolved,
      href: href
    };
  };

  Object.defineProperties(VueRouter.prototype, prototypeAccessors);

  function createHref(base, fullPath, mode) {
    var path = mode === 'hash' ? '#' + fullPath : fullPath;
    return base ? cleanPath(base + '/' + path) : path;
  }

  VueRouter.install = install;

  if (inBrowser && window.Vue) {
    window.Vue.use(VueRouter);
  }

  return VueRouter;
});
//# sourceMappingURL=vue.router.js.map

'use strict';

(function () {
  var tm = '<div class="page-bar">' + '<ul>' + '<li v-if="cur!=1"><a v-on:click="cur--">上一页</a></li>' + '<li v-for="index in indexs"  v-bind:class="{ active: cur == index}">' + '<a v-on:click="btnClick(index)">{{ index }}</a>' + '</li>' + '<li v-if="cur!=all"><a v-on:click="cur++">下一页</a></li>' + '<li><a>共<i>{{all}}</i>页</a></li>' + '</ul>' + '</div>';

  var navBar = Vue.extend({
    template: tm,
    props: ['cur', 'all'],
    computed: {
      indexs: function indexs() {
        var left = 1;
        var right = this.all;
        var ar = [];
        if (this.all >= 11) {
          if (this.cur > 5 && this.cur < this.all - 4) {
            left = this.cur - 5;
            right = this.cur + 4;
          } else {
            if (this.cur <= 5) {
              left = 1;
              right = 10;
            } else {
              right = this.all;
              left = this.all - 9;
            }
          }
        }
        while (left <= right) {
          ar.push(left);
          left++;
        }
        return ar;
      }
    },
    methods: {
      btnClick: function btnClick(data) {
        if (data != this.cur) {
          this.cur = data;
          this.$emit('btn-click', data);
        }
      }
    }
  });

  window.Vnav = navBar;
})();
//# sourceMappingURL=vue.pagination.js.map
