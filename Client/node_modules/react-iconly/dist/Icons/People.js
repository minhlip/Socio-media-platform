var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

// node_modules/prop-types/node_modules/react-is/cjs/react-is.production.min.js
var require_react_is_production_min = __commonJS({
  "node_modules/prop-types/node_modules/react-is/cjs/react-is.production.min.js"(exports) {
    "use strict";
    var b = "function" === typeof Symbol && Symbol.for;
    var c = b ? Symbol.for("react.element") : 60103;
    var d = b ? Symbol.for("react.portal") : 60106;
    var e = b ? Symbol.for("react.fragment") : 60107;
    var f = b ? Symbol.for("react.strict_mode") : 60108;
    var g = b ? Symbol.for("react.profiler") : 60114;
    var h = b ? Symbol.for("react.provider") : 60109;
    var k = b ? Symbol.for("react.context") : 60110;
    var l = b ? Symbol.for("react.async_mode") : 60111;
    var m = b ? Symbol.for("react.concurrent_mode") : 60111;
    var n = b ? Symbol.for("react.forward_ref") : 60112;
    var p = b ? Symbol.for("react.suspense") : 60113;
    var q = b ? Symbol.for("react.suspense_list") : 60120;
    var r = b ? Symbol.for("react.memo") : 60115;
    var t = b ? Symbol.for("react.lazy") : 60116;
    var v = b ? Symbol.for("react.block") : 60121;
    var w = b ? Symbol.for("react.fundamental") : 60117;
    var x = b ? Symbol.for("react.responder") : 60118;
    var y = b ? Symbol.for("react.scope") : 60119;
    function z(a) {
      if ("object" === typeof a && null !== a) {
        var u = a.$$typeof;
        switch (u) {
          case c:
            switch (a = a.type, a) {
              case l:
              case m:
              case e:
              case g:
              case f:
              case p:
                return a;
              default:
                switch (a = a && a.$$typeof, a) {
                  case k:
                  case n:
                  case t:
                  case r:
                  case h:
                    return a;
                  default:
                    return u;
                }
            }
          case d:
            return u;
        }
      }
    }
    function A(a) {
      return z(a) === m;
    }
    exports.AsyncMode = l;
    exports.ConcurrentMode = m;
    exports.ContextConsumer = k;
    exports.ContextProvider = h;
    exports.Element = c;
    exports.ForwardRef = n;
    exports.Fragment = e;
    exports.Lazy = t;
    exports.Memo = r;
    exports.Portal = d;
    exports.Profiler = g;
    exports.StrictMode = f;
    exports.Suspense = p;
    exports.isAsyncMode = function(a) {
      return A(a) || z(a) === l;
    };
    exports.isConcurrentMode = A;
    exports.isContextConsumer = function(a) {
      return z(a) === k;
    };
    exports.isContextProvider = function(a) {
      return z(a) === h;
    };
    exports.isElement = function(a) {
      return "object" === typeof a && null !== a && a.$$typeof === c;
    };
    exports.isForwardRef = function(a) {
      return z(a) === n;
    };
    exports.isFragment = function(a) {
      return z(a) === e;
    };
    exports.isLazy = function(a) {
      return z(a) === t;
    };
    exports.isMemo = function(a) {
      return z(a) === r;
    };
    exports.isPortal = function(a) {
      return z(a) === d;
    };
    exports.isProfiler = function(a) {
      return z(a) === g;
    };
    exports.isStrictMode = function(a) {
      return z(a) === f;
    };
    exports.isSuspense = function(a) {
      return z(a) === p;
    };
    exports.isValidElementType = function(a) {
      return "string" === typeof a || "function" === typeof a || a === e || a === m || a === g || a === f || a === p || a === q || "object" === typeof a && null !== a && (a.$$typeof === t || a.$$typeof === r || a.$$typeof === h || a.$$typeof === k || a.$$typeof === n || a.$$typeof === w || a.$$typeof === x || a.$$typeof === y || a.$$typeof === v);
    };
    exports.typeOf = z;
  }
});

// node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js
var require_react_is_development = __commonJS({
  "node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    if (process.env.NODE_ENV !== "production") {
      (function() {
        "use strict";
        var hasSymbol = typeof Symbol === "function" && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
        function isValidElementType(type) {
          return typeof type === "string" || typeof type === "function" || type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object) {
          if (typeof object === "object" && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_ASYNC_MODE_TYPE:
                  case REACT_CONCURRENT_MODE_TYPE:
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
            }
          }
          return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object) {
          return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.AsyncMode = AsyncMode;
        exports.ConcurrentMode = ConcurrentMode;
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
      })();
    }
  }
});

// node_modules/prop-types/node_modules/react-is/index.js
var require_react_is = __commonJS({
  "node_modules/prop-types/node_modules/react-is/index.js"(exports, module2) {
    "use strict";
    if (process.env.NODE_ENV === "production") {
      module2.exports = require_react_is_production_min();
    } else {
      module2.exports = require_react_is_development();
    }
  }
});

// node_modules/object-assign/index.js
var require_object_assign = __commonJS({
  "node_modules/object-assign/index.js"(exports, module2) {
    "use strict";
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;
    function toObject(val) {
      if (val === null || val === void 0) {
        throw new TypeError("Object.assign cannot be called with null or undefined");
      }
      return Object(val);
    }
    function shouldUseNative() {
      try {
        if (!Object.assign) {
          return false;
        }
        var test1 = new String("abc");
        test1[5] = "de";
        if (Object.getOwnPropertyNames(test1)[0] === "5") {
          return false;
        }
        var test2 = {};
        for (var i = 0; i < 10; i++) {
          test2["_" + String.fromCharCode(i)] = i;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
          return test2[n];
        });
        if (order2.join("") !== "0123456789") {
          return false;
        }
        var test3 = {};
        "abcdefghijklmnopqrst".split("").forEach(function(letter) {
          test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
          return false;
        }
        return true;
      } catch (err) {
        return false;
      }
    }
    module2.exports = shouldUseNative() ? Object.assign : function(target, source) {
      var from;
      var to = toObject(target);
      var symbols;
      for (var s = 1; s < arguments.length; s++) {
        from = Object(arguments[s]);
        for (var key in from) {
          if (hasOwnProperty.call(from, key)) {
            to[key] = from[key];
          }
        }
        if (getOwnPropertySymbols) {
          symbols = getOwnPropertySymbols(from);
          for (var i = 0; i < symbols.length; i++) {
            if (propIsEnumerable.call(from, symbols[i])) {
              to[symbols[i]] = from[symbols[i]];
            }
          }
        }
      }
      return to;
    };
  }
});

// node_modules/prop-types/lib/ReactPropTypesSecret.js
var require_ReactPropTypesSecret = __commonJS({
  "node_modules/prop-types/lib/ReactPropTypesSecret.js"(exports, module2) {
    "use strict";
    var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    module2.exports = ReactPropTypesSecret;
  }
});

// node_modules/prop-types/lib/has.js
var require_has = __commonJS({
  "node_modules/prop-types/lib/has.js"(exports, module2) {
    module2.exports = Function.call.bind(Object.prototype.hasOwnProperty);
  }
});

// node_modules/prop-types/checkPropTypes.js
var require_checkPropTypes = __commonJS({
  "node_modules/prop-types/checkPropTypes.js"(exports, module2) {
    "use strict";
    var printWarning = function() {
    };
    if (process.env.NODE_ENV !== "production") {
      ReactPropTypesSecret = require_ReactPropTypesSecret();
      loggedTypeFailures = {};
      has = require_has();
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    var ReactPropTypesSecret;
    var loggedTypeFailures;
    var has;
    function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
      if (process.env.NODE_ENV !== "production") {
        for (var typeSpecName in typeSpecs) {
          if (has(typeSpecs, typeSpecName)) {
            var error;
            try {
              if (typeof typeSpecs[typeSpecName] !== "function") {
                var err = Error(
                  (componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                );
                err.name = "Invariant Violation";
                throw err;
              }
              error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
            } catch (ex) {
              error = ex;
            }
            if (error && !(error instanceof Error)) {
              printWarning(
                (componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
              );
            }
            if (error instanceof Error && !(error.message in loggedTypeFailures)) {
              loggedTypeFailures[error.message] = true;
              var stack = getStack ? getStack() : "";
              printWarning(
                "Failed " + location + " type: " + error.message + (stack != null ? stack : "")
              );
            }
          }
        }
      }
    }
    checkPropTypes.resetWarningCache = function() {
      if (process.env.NODE_ENV !== "production") {
        loggedTypeFailures = {};
      }
    };
    module2.exports = checkPropTypes;
  }
});

// node_modules/prop-types/factoryWithTypeCheckers.js
var require_factoryWithTypeCheckers = __commonJS({
  "node_modules/prop-types/factoryWithTypeCheckers.js"(exports, module2) {
    "use strict";
    var ReactIs = require_react_is();
    var assign = require_object_assign();
    var ReactPropTypesSecret = require_ReactPropTypesSecret();
    var has = require_has();
    var checkPropTypes = require_checkPropTypes();
    var printWarning = function() {
    };
    if (process.env.NODE_ENV !== "production") {
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    function emptyFunctionThatReturnsNull() {
      return null;
    }
    module2.exports = function(isValidElement, throwOnDirectAccess) {
      var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = "@@iterator";
      function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === "function") {
          return iteratorFn;
        }
      }
      var ANONYMOUS = "<<anonymous>>";
      var ReactPropTypes = {
        array: createPrimitiveTypeChecker("array"),
        bigint: createPrimitiveTypeChecker("bigint"),
        bool: createPrimitiveTypeChecker("boolean"),
        func: createPrimitiveTypeChecker("function"),
        number: createPrimitiveTypeChecker("number"),
        object: createPrimitiveTypeChecker("object"),
        string: createPrimitiveTypeChecker("string"),
        symbol: createPrimitiveTypeChecker("symbol"),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        elementType: createElementTypeTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker
      };
      function is(x, y) {
        if (x === y) {
          return x !== 0 || 1 / x === 1 / y;
        } else {
          return x !== x && y !== y;
        }
      }
      function PropTypeError(message, data) {
        this.message = message;
        this.data = data && typeof data === "object" ? data : {};
        this.stack = "";
      }
      PropTypeError.prototype = Error.prototype;
      function createChainableTypeChecker(validate) {
        if (process.env.NODE_ENV !== "production") {
          var manualPropTypeCallCache = {};
          var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
          componentName = componentName || ANONYMOUS;
          propFullName = propFullName || propName;
          if (secret !== ReactPropTypesSecret) {
            if (throwOnDirectAccess) {
              var err = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
              );
              err.name = "Invariant Violation";
              throw err;
            } else if (process.env.NODE_ENV !== "production" && typeof console !== "undefined") {
              var cacheKey = componentName + ":" + propName;
              if (!manualPropTypeCallCache[cacheKey] && manualPropTypeWarningCount < 3) {
                printWarning(
                  "You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
                );
                manualPropTypeCallCache[cacheKey] = true;
                manualPropTypeWarningCount++;
              }
            }
          }
          if (props[propName] == null) {
            if (isRequired) {
              if (props[propName] === null) {
                return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
              }
              return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
            }
            return null;
          } else {
            return validate(props, propName, componentName, location, propFullName);
          }
        }
        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);
        return chainedCheckType;
      }
      function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName, secret) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== expectedType) {
            var preciseType = getPreciseType(propValue);
            return new PropTypeError(
              "Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."),
              { expectedType }
            );
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
      }
      function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
          }
          var propValue = props[propName];
          if (!Array.isArray(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
          }
          for (var i = 0; i < propValue.length; i++) {
            var error = typeChecker(propValue, i, componentName, location, propFullName + "[" + i + "]", ReactPropTypesSecret);
            if (error instanceof Error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!isValidElement(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!ReactIs.isValidElementType(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
          if (!(props[propName] instanceof expectedClass)) {
            var expectedClassName = expectedClass.name || ANONYMOUS;
            var actualClassName = getClassName(props[propName]);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
          if (process.env.NODE_ENV !== "production") {
            if (arguments.length > 1) {
              printWarning(
                "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
              );
            } else {
              printWarning("Invalid argument supplied to oneOf, expected an array.");
            }
          }
          return emptyFunctionThatReturnsNull;
        }
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          for (var i = 0; i < expectedValues.length; i++) {
            if (is(propValue, expectedValues[i])) {
              return null;
            }
          }
          var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
            var type = getPreciseType(value);
            if (type === "symbol") {
              return String(value);
            }
            return value;
          });
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
          }
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
          }
          for (var key in propValue) {
            if (has(propValue, key)) {
              var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
              if (error instanceof Error) {
                return error;
              }
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
          process.env.NODE_ENV !== "production" ? printWarning("Invalid argument supplied to oneOfType, expected an instance of array.") : void 0;
          return emptyFunctionThatReturnsNull;
        }
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          if (typeof checker !== "function") {
            printWarning(
              "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i + "."
            );
            return emptyFunctionThatReturnsNull;
          }
        }
        function validate(props, propName, componentName, location, propFullName) {
          var expectedTypes = [];
          for (var i2 = 0; i2 < arrayOfTypeCheckers.length; i2++) {
            var checker2 = arrayOfTypeCheckers[i2];
            var checkerResult = checker2(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
            if (checkerResult == null) {
              return null;
            }
            if (checkerResult.data && has(checkerResult.data, "expectedType")) {
              expectedTypes.push(checkerResult.data.expectedType);
            }
          }
          var expectedTypesMessage = expectedTypes.length > 0 ? ", expected one of type [" + expectedTypes.join(", ") + "]" : "";
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`" + expectedTypesMessage + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createNodeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          if (!isNode(props[propName])) {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function invalidValidatorError(componentName, location, propFullName, key, type) {
        return new PropTypeError(
          (componentName || "React class") + ": " + location + " type `" + propFullName + "." + key + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + type + "`."
        );
      }
      function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          for (var key in shapeTypes) {
            var checker = shapeTypes[key];
            if (typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          var allKeys = assign({}, props[propName], shapeTypes);
          for (var key in allKeys) {
            var checker = shapeTypes[key];
            if (has(shapeTypes, key) && typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            if (!checker) {
              return new PropTypeError(
                "Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  ")
              );
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function isNode(propValue) {
        switch (typeof propValue) {
          case "number":
          case "string":
          case "undefined":
            return true;
          case "boolean":
            return !propValue;
          case "object":
            if (Array.isArray(propValue)) {
              return propValue.every(isNode);
            }
            if (propValue === null || isValidElement(propValue)) {
              return true;
            }
            var iteratorFn = getIteratorFn(propValue);
            if (iteratorFn) {
              var iterator = iteratorFn.call(propValue);
              var step;
              if (iteratorFn !== propValue.entries) {
                while (!(step = iterator.next()).done) {
                  if (!isNode(step.value)) {
                    return false;
                  }
                }
              } else {
                while (!(step = iterator.next()).done) {
                  var entry = step.value;
                  if (entry) {
                    if (!isNode(entry[1])) {
                      return false;
                    }
                  }
                }
              }
            } else {
              return false;
            }
            return true;
          default:
            return false;
        }
      }
      function isSymbol(propType, propValue) {
        if (propType === "symbol") {
          return true;
        }
        if (!propValue) {
          return false;
        }
        if (propValue["@@toStringTag"] === "Symbol") {
          return true;
        }
        if (typeof Symbol === "function" && propValue instanceof Symbol) {
          return true;
        }
        return false;
      }
      function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
          return "array";
        }
        if (propValue instanceof RegExp) {
          return "object";
        }
        if (isSymbol(propType, propValue)) {
          return "symbol";
        }
        return propType;
      }
      function getPreciseType(propValue) {
        if (typeof propValue === "undefined" || propValue === null) {
          return "" + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === "object") {
          if (propValue instanceof Date) {
            return "date";
          } else if (propValue instanceof RegExp) {
            return "regexp";
          }
        }
        return propType;
      }
      function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch (type) {
          case "array":
          case "object":
            return "an " + type;
          case "boolean":
          case "date":
          case "regexp":
            return "a " + type;
          default:
            return type;
        }
      }
      function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
          return ANONYMOUS;
        }
        return propValue.constructor.name;
      }
      ReactPropTypes.checkPropTypes = checkPropTypes;
      ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
      ReactPropTypes.PropTypes = ReactPropTypes;
      return ReactPropTypes;
    };
  }
});

// node_modules/prop-types/factoryWithThrowingShims.js
var require_factoryWithThrowingShims = __commonJS({
  "node_modules/prop-types/factoryWithThrowingShims.js"(exports, module2) {
    "use strict";
    var ReactPropTypesSecret = require_ReactPropTypesSecret();
    function emptyFunction() {
    }
    function emptyFunctionWithReset() {
    }
    emptyFunctionWithReset.resetWarningCache = emptyFunction;
    module2.exports = function() {
      function shim(props, propName, componentName, location, propFullName, secret) {
        if (secret === ReactPropTypesSecret) {
          return;
        }
        var err = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        err.name = "Invariant Violation";
        throw err;
      }
      ;
      shim.isRequired = shim;
      function getShim() {
        return shim;
      }
      ;
      var ReactPropTypes = {
        array: shim,
        bigint: shim,
        bool: shim,
        func: shim,
        number: shim,
        object: shim,
        string: shim,
        symbol: shim,
        any: shim,
        arrayOf: getShim,
        element: shim,
        elementType: shim,
        instanceOf: getShim,
        node: shim,
        objectOf: getShim,
        oneOf: getShim,
        oneOfType: getShim,
        shape: getShim,
        exact: getShim,
        checkPropTypes: emptyFunctionWithReset,
        resetWarningCache: emptyFunction
      };
      ReactPropTypes.PropTypes = ReactPropTypes;
      return ReactPropTypes;
    };
  }
});

// node_modules/prop-types/index.js
var require_prop_types = __commonJS({
  "node_modules/prop-types/index.js"(exports, module2) {
    if (process.env.NODE_ENV !== "production") {
      ReactIs = require_react_is();
      throwOnDirectAccess = true;
      module2.exports = require_factoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
    } else {
      module2.exports = require_factoryWithThrowingShims()();
    }
    var ReactIs;
    var throwOnDirectAccess;
  }
});

// src/Icons/People.js
var People_exports = {};
__export(People_exports, {
  default: () => People_default
});
module.exports = __toCommonJS(People_exports);
var React3 = __toESM(require("react"));
var import_prop_types2 = __toESM(require_prop_types());

// src/lib/withIcon.js
var import_react2 = __toESM(require("react"));

// src/lib/constants.js
var sizes = {
  small: "16px",
  medium: "24px",
  large: "32px",
  xlarge: "48px"
};
var strokes = {
  light: "1px",
  regular: "1.5px",
  bold: "2px"
};

// src/lib/utils.js
var getSize = (size) => {
  if (Number.isInteger(size)) {
    return `${size}px`;
  }
  return size && sizes[size] ? sizes[size] : null;
};
var getStroke = (stroke) => {
  return stroke && strokes[stroke] ? strokes[stroke] : null;
};
var getOpacity = (primaryColor, secondaryColor) => {
  if (!secondaryColor) {
    return "0.4";
  }
  return primaryColor === secondaryColor ? "0.4" : "1";
};
var getThemeProp = (prop, theme) => {
  return theme && theme[prop] ? theme[prop] : null;
};

// src/lib/context.js
var import_react = __toESM(require("react"));
var IconlyContext = (0, import_react.createContext)();
IconlyContext.displayName = "IconlyIconlyContext";

// src/lib/withIcon.js
var import_prop_types = __toESM(require_prop_types());
function withIcon(Component) {
  class IconWrapper extends import_react2.default.Component {
    render() {
      const {
        size,
        label,
        primaryColor,
        secondaryColor,
        filled,
        set,
        style,
        stroke,
        ...restProps
      } = this.props;
      const theme = this.context;
      const iconSize = getSize(size) || getSize(getThemeProp("size", theme)) || "24px";
      const iconPrimaryColor = primaryColor || getThemeProp("primaryColor", theme) || "currentColor";
      const iconSecondaryColor = secondaryColor || getThemeProp("secondaryColor", theme) || iconPrimaryColor || "currentColor";
      return /* @__PURE__ */ import_react2.default.createElement(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          width: iconSize,
          height: iconSize,
          viewBox: "0 0 24 24",
          role: label ? "img" : "presentation",
          "aria-label": label || void 0,
          style,
          ...restProps
        },
        /* @__PURE__ */ import_react2.default.createElement(
          Component,
          {
            color: iconPrimaryColor,
            opacity: getOpacity(primaryColor, secondaryColor),
            secondaryColor: iconSecondaryColor,
            set: filled ? "bold" : set || getThemeProp("set", theme) || "light",
            strokeWidth: stroke ? getStroke(stroke) : getStroke(getThemeProp("stroke", theme)) || "1.5px"
          }
        )
      );
    }
  }
  __publicField(IconWrapper, "contextType", IconlyContext);
  IconWrapper.propTypes = {
    label: import_prop_types.default.string,
    filled: import_prop_types.default.bool,
    primaryColor: import_prop_types.default.string,
    secondaryColor: import_prop_types.default.string,
    size: import_prop_types.default.oneOfType([
      import_prop_types.default.number,
      import_prop_types.default.oneOf(["small", "medium", "large", "xlarge"])
    ]),
    set: import_prop_types.default.oneOf([
      "bold",
      "bulk",
      "light",
      "broken",
      "two-tone",
      "curved"
    ]),
    stroke: import_prop_types.default.oneOf(["light", "regular", "bold"]),
    style: import_prop_types.default.oneOfType([import_prop_types.default.object, import_prop_types.default.array])
  };
  const MemoIcon = (0, import_react2.memo)(IconWrapper);
  return MemoIcon;
}
var withIcon_default = withIcon;

// src/Icons/People.js
var People = ({ color, secondaryColor, strokeWidth, opacity, set }) => {
  const Bold = () => /* @__PURE__ */ React3.createElement("g", { transform: "translate(1 4)" }, /* @__PURE__ */ React3.createElement(
    "path",
    {
      d: "M4.588,13.28c0-2.177,2.911-2.741,6.361-2.741,3.431,0,6.36.544,6.36,2.721S14.4,16,10.949,16C7.518,16,4.588,15.456,4.588,13.28Zm14.5.4A4.453,4.453,0,0,0,16.431,9.3a.045.045,0,0,1-.029-.047.038.038,0,0,1,.032-.026,15.49,15.49,0,0,1,3.244.284,2.76,2.76,0,0,1,2.131,1.3,1.927,1.927,0,0,1,0,1.67c-.461,1-1.944,1.319-2.521,1.4l-.027,0A.183.183,0,0,1,19.086,13.684Zm-16.375.205c-.576-.083-2.06-.4-2.52-1.4a1.913,1.913,0,0,1,0-1.669,2.756,2.756,0,0,1,2.13-1.305,15.644,15.644,0,0,1,3.244-.283.037.037,0,0,1,.032.025.046.046,0,0,1-.028.048,4.449,4.449,0,0,0-2.656,4.38.182.182,0,0,1-.176.208ZM6.74,4.233a4.209,4.209,0,1,1,8.419,0,4.209,4.209,0,1,1-8.419,0Zm9.823,3.609a3.4,3.4,0,0,1-.483-.047.159.159,0,0,1-.106-.245A5.841,5.841,0,0,0,15.889.939a.106.106,0,0,1-.016-.111.13.13,0,0,1,.083-.049,3.507,3.507,0,0,1,.708-.073A3.576,3.576,0,0,1,20.088,5.22a3.51,3.51,0,0,1-3.429,2.623ZM1.912,5.22A3.576,3.576,0,0,1,5.336.706a3.53,3.53,0,0,1,.709.073.135.135,0,0,1,.082.049.1.1,0,0,1-.016.11A5.84,5.84,0,0,0,6.027,7.55a.159.159,0,0,1-.107.245,3.281,3.281,0,0,1-.483.047h-.1A3.512,3.512,0,0,1,1.912,5.22Z",
      fill: color
    }
  ));
  const Bulk = () => /* @__PURE__ */ React3.createElement("g", { transform: "translate(1 4)" }, /* @__PURE__ */ React3.createElement(
    "path",
    {
      d: "M6.361,0C2.911,0,0,.564,0,2.739S2.93,5.46,6.361,5.46c3.45,0,6.361-.564,6.361-2.739S9.792,0,6.361,0",
      transform: "translate(4.588 10.54)",
      fill: color
    }
  ), /* @__PURE__ */ React3.createElement(
    "path",
    {
      d: "M4.209,8.467A4.207,4.207,0,0,0,8.419,4.234,4.209,4.209,0,1,0,0,4.234,4.207,4.207,0,0,0,4.209,8.467",
      transform: "translate(6.74 0)",
      fill: secondaryColor,
      opacity
    }
  ), /* @__PURE__ */ React3.createElement(
    "path",
    {
      d: "M4.225,4.513A3.574,3.574,0,0,0,.8,0,3.587,3.587,0,0,0,.092.073.136.136,0,0,0,.01.122a.1.1,0,0,0,.017.11A5.807,5.807,0,0,1,1.094,3.6,5.762,5.762,0,0,1,.11,6.844a.158.158,0,0,0,.107.244A3.282,3.282,0,0,0,.7,7.135,3.513,3.513,0,0,0,4.225,4.513",
      transform: "translate(15.863 0.707)",
      fill: secondaryColor,
      opacity
    }
  ), /* @__PURE__ */ React3.createElement(
    "path",
    {
      d: "M5.407,1.59A2.755,2.755,0,0,0,3.276.286,15.555,15.555,0,0,0,.033,0,.037.037,0,0,0,0,.027.046.046,0,0,0,.029.075,4.451,4.451,0,0,1,2.684,4.456a.181.181,0,0,0,.2.205c.577-.083,2.06-.4,2.521-1.4a1.922,1.922,0,0,0,0-1.67",
      transform: "translate(16.402 9.227)",
      fill: color
    }
  ), /* @__PURE__ */ React3.createElement(
    "path",
    {
      d: "M4.252.073A3.514,3.514,0,0,0,3.543,0,3.573,3.573,0,0,0,.12,4.513,3.511,3.511,0,0,0,3.644,7.135a3.4,3.4,0,0,0,.484-.047.158.158,0,0,0,.107-.244A5.841,5.841,0,0,1,4.318.232a.1.1,0,0,0,.016-.11.129.129,0,0,0-.082-.05",
      transform: "translate(1.793 0.707)",
      fill: secondaryColor,
      opacity
    }
  ), /* @__PURE__ */ React3.createElement(
    "path",
    {
      d: "M2.322.285a2.753,2.753,0,0,0-2.13,1.3,1.918,1.918,0,0,0,0,1.671c.46,1,1.944,1.319,2.521,1.4a.18.18,0,0,0,.2-.205A4.45,4.45,0,0,1,5.569.075.047.047,0,0,0,5.6.027.034.034,0,0,0,5.566,0,15.517,15.517,0,0,0,2.322.285",
      transform: "translate(0 9.228)",
      fill: color
    }
  ));
  const Light = () => /* @__PURE__ */ React3.createElement("g", { transform: "translate(1 3.5)" }, /* @__PURE__ */ React3.createElement(
    "path",
    {
      d: "M0,5.8A2.9,2.9,0,1,0,0,0",
      transform: "translate(16.595 1.629)",
      fill: "none",
      stroke: color,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth
    }
  ), /* @__PURE__ */ React3.createElement(
    "path",
    {
      d: "M0,0A9.435,9.435,0,0,1,1.423.206a2.337,2.337,0,0,1,1.712.978,1.381,1.381,0,0,1,0,1.184,2.361,2.361,0,0,1-1.712.984",
      transform: "translate(17.929 10.585)",
      fill: "none",
      stroke: color,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth
    }
  ), /* @__PURE__ */ React3.createElement(
    "path",
    {
      d: "M2.9,5.8A2.9,2.9,0,1,1,2.9,0",
      transform: "translate(2.388 1.629)",
      fill: "none",
      stroke: color,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth
    }
  ), /* @__PURE__ */ React3.createElement(
    "path",
    {
      d: "M3.268,0A9.435,9.435,0,0,0,1.845.206a2.334,2.334,0,0,0-1.711.978,1.375,1.375,0,0,0,0,1.184,2.358,2.358,0,0,0,1.711.984",
      transform: "translate(0.688 10.585)",
      fill: "none",
      stroke: color,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth
    }
  ), /* @__PURE__ */ React3.createElement(
    "path",
    {
      d: "M6.021,0c3.247,0,6.021.491,6.021,2.458S9.286,4.933,6.021,4.933C2.773,4.933,0,4.441,0,2.475S2.756,0,6.021,0Z",
      transform: "translate(4.917 11.21)",
      fill: "none",
      stroke: color,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth
    }
  ), /* @__PURE__ */ React3.createElement(
    "path",
    {
      d: "M3.858,7.717A3.859,3.859,0,1,1,7.716,3.858,3.845,3.845,0,0,1,3.858,7.717Z",
      transform: "translate(7.08 0.688)",
      fill: "none",
      stroke: color,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth
    }
  ));
  const Broken = () => /* @__PURE__ */ React3.createElement("g", { transform: "translate(1 3.5)" }, /* @__PURE__ */ React3.createElement(
    "path",
    {
      d: "M10.308,16.3a.694.694,0,0,1,.692-.7c2.443,0,5.356-.313,5.356-1.8,0-1.186-1.8-1.786-5.356-1.786-2.443,0-5.355.312-5.355,1.8,0,.332.1.76.853,1.132a5.118,5.118,0,0,0,1.167.381A.7.7,0,0,1,7.377,16.7a6.575,6.575,0,0,1-1.489-.491,2.574,2.574,0,0,1-1.628-2.383c0-3.2,5.072-3.2,6.739-3.2,1.844,0,6.74,0,6.74,3.179C17.74,17,12.668,17,11,17A.7.7,0,0,1,10.308,16.3Zm8.467-2.085a.7.7,0,0,1,.539-.823c.944-.2,1.177-.492,1.233-.611a.693.693,0,0,0,0-.6c-.118-.25-.577-.476-1.229-.606a9.063,9.063,0,0,0-1.341-.2A.7.7,0,0,1,18.069,10a10.223,10.223,0,0,1,1.534.221A2.855,2.855,0,0,1,21.8,11.588a2.085,2.085,0,0,1,0,1.8,2.891,2.891,0,0,1-2.2,1.376.621.621,0,0,1-.14.015A.694.694,0,0,1,18.775,14.218Zm-16.362.535A2.892,2.892,0,0,1,.2,13.374a2.091,2.091,0,0,1,0-1.8A2.865,2.865,0,0,1,2.417,10.2a10.04,10.04,0,0,1,1.52-.219.7.7,0,0,1,.094,1.389,8.737,8.737,0,0,0-1.328.193c-.671.133-1.13.359-1.25.61a.707.707,0,0,0,0,.6c.058.12.29.418,1.238.614a.7.7,0,0,1-.139,1.377A.74.74,0,0,1,2.413,14.754ZM8.191,8.222a.7.7,0,0,1-.122-.977.688.688,0,0,1,.972-.122A3.156,3.156,0,0,0,11,7.793a3.2,3.2,0,1,0-3.184-3.2.692.692,0,1,1-1.384,0A4.568,4.568,0,1,1,11,9.185,4.517,4.517,0,0,1,8.191,8.222Zm7.8-.714a.694.694,0,0,1,.692-.7,2.234,2.234,0,0,0,0-4.468.7.7,0,0,1,0-1.392,3.627,3.627,0,0,1,0,7.253A.694.694,0,0,1,15.991,7.508ZM1.714,4.548A3.629,3.629,0,0,1,5.328.913a.7.7,0,0,1,0,1.392,2.242,2.242,0,0,0,0,4.484.7.7,0,0,1,0,1.392A3.628,3.628,0,0,1,1.714,4.548Z",
      fill: color
    }
  ));
  const TwoTone = () => /* @__PURE__ */ React3.createElement("g", { transform: "translate(1 3.5)" }, /* @__PURE__ */ React3.createElement(
    "path",
    {
      d: "M0,5.8A2.9,2.9,0,1,0,0,0",
      transform: "translate(16.595 1.629)",
      fill: "none",
      stroke: secondaryColor,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth,
      opacity
    }
  ), /* @__PURE__ */ React3.createElement(
    "path",
    {
      d: "M0,0A9.435,9.435,0,0,1,1.423.206a2.337,2.337,0,0,1,1.712.978,1.381,1.381,0,0,1,0,1.184,2.361,2.361,0,0,1-1.712.984",
      transform: "translate(17.929 10.585)",
      fill: "none",
      stroke: color,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth
    }
  ), /* @__PURE__ */ React3.createElement(
    "path",
    {
      d: "M2.9,5.8A2.9,2.9,0,1,1,2.9,0",
      transform: "translate(2.388 1.629)",
      fill: "none",
      stroke: secondaryColor,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth,
      opacity
    }
  ), /* @__PURE__ */ React3.createElement(
    "path",
    {
      d: "M3.268,0A9.435,9.435,0,0,0,1.845.206a2.334,2.334,0,0,0-1.711.978,1.375,1.375,0,0,0,0,1.184,2.358,2.358,0,0,0,1.711.984",
      transform: "translate(0.688 10.585)",
      fill: "none",
      stroke: color,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth
    }
  ), /* @__PURE__ */ React3.createElement(
    "path",
    {
      d: "M6.021,0c3.247,0,6.021.491,6.021,2.458S9.286,4.933,6.021,4.933C2.773,4.933,0,4.441,0,2.475S2.756,0,6.021,0Z",
      transform: "translate(4.917 11.21)",
      fill: "none",
      stroke: color,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth
    }
  ), /* @__PURE__ */ React3.createElement(
    "path",
    {
      d: "M3.858,7.717A3.859,3.859,0,1,1,7.716,3.858,3.845,3.845,0,0,1,3.858,7.717Z",
      transform: "translate(7.08 0.688)",
      fill: "none",
      stroke: secondaryColor,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth,
      opacity
    }
  ));
  const Curved = () => /* @__PURE__ */ React3.createElement("g", { transform: "translate(1 3)" }, /* @__PURE__ */ React3.createElement(
    "path",
    {
      d: "M6.006,6.122C2.767,6.122,0,5.632,0,3.67S2.749,0,6.006,0c3.239,0,6.006,1.692,6.006,3.653S9.263,6.122,6.006,6.122Z",
      transform: "translate(4.966 11.246)",
      fill: "none",
      stroke: color,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth
    }
  ), /* @__PURE__ */ React3.createElement(
    "path",
    {
      d: "M3.85,7.7a3.837,3.837,0,1,0-.027,0Z",
      transform: "translate(7.122 0.75)",
      fill: "none",
      stroke: color,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth
    }
  ), /* @__PURE__ */ React3.createElement(
    "path",
    {
      d: "M.166,5.643a2.9,2.9,0,0,0,2.149-2.8A2.9,2.9,0,0,0,0,0",
      transform: "translate(17.196 1.749)",
      fill: "none",
      stroke: color,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth
    }
  ), /* @__PURE__ */ React3.createElement(
    "path",
    {
      d: "M0,0C1.754,0,3.252,1.189,3.252,2.251a1.64,1.64,0,0,1-1.3,1.49",
      transform: "translate(17.943 10.544)",
      fill: "none",
      stroke: color,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth
    }
  ), /* @__PURE__ */ React3.createElement(
    "path",
    {
      d: "M2.15,5.643A2.9,2.9,0,0,1,2.315,0",
      transform: "translate(2.434 1.749)",
      fill: "none",
      stroke: color,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth
    }
  ), /* @__PURE__ */ React3.createElement(
    "path",
    {
      d: "M3.252,0C1.5,0,0,1.189,0,2.251a1.64,1.64,0,0,0,1.3,1.49",
      transform: "translate(0.75 10.544)",
      fill: "none",
      stroke: color,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth
    }
  ));
  switch (set) {
    case "bold":
      return /* @__PURE__ */ React3.createElement(Bold, null);
    case "bulk":
      return /* @__PURE__ */ React3.createElement(Bulk, null);
    case "broken":
      return /* @__PURE__ */ React3.createElement(Broken, null);
    case "two-tone":
      return /* @__PURE__ */ React3.createElement(TwoTone, null);
    case "curved":
      return /* @__PURE__ */ React3.createElement(Curved, null);
    default:
      return /* @__PURE__ */ React3.createElement(Light, null);
  }
};
People.displayName = "IconlyPeople";
People.propTypes = {
  opacity: import_prop_types2.default.string,
  color: import_prop_types2.default.string,
  secondaryColor: import_prop_types2.default.string,
  set: import_prop_types2.default.string,
  strokeWidth: import_prop_types2.default.oneOfType([import_prop_types2.default.string, import_prop_types2.default.number])
};
var People_default = withIcon_default(People);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
