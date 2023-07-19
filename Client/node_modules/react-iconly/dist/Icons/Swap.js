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

// src/Icons/Swap.js
var Swap_exports = {};
__export(Swap_exports, {
  default: () => Swap_default
});
module.exports = __toCommonJS(Swap_exports);
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

// src/Icons/Swap.js
var Swap = ({ color, secondaryColor, strokeWidth, opacity, set }) => {
  const Bold = () => /* @__PURE__ */ React3.createElement("g", { transform: "translate(2 3)" }, /* @__PURE__ */ React3.createElement(
    "path",
    {
      d: "M14.454,17.721a4.445,4.445,0,0,1-.434-.394A17.665,17.665,0,0,1,10.909,12.7a4.061,4.061,0,0,1-.32-1.078V11.57a1.461,1.461,0,0,1,.779-1.288,6.515,6.515,0,0,1,1.04-.28A20.9,20.9,0,0,1,15.3,9.83a17.926,17.926,0,0,1,2.985.2,7.45,7.45,0,0,1,.835.209,1.5,1.5,0,0,1,.709.65,1.633,1.633,0,0,1,.171.732,3.875,3.875,0,0,1-.264.963,17.773,17.773,0,0,1-3.155,4.736c-.16.162-.355.337-.4.382a1.43,1.43,0,0,1-.891.3A1.363,1.363,0,0,1,14.454,17.721Zm-10.94-2.3.257-4.578a.934.934,0,1,1,1.867,0L5.9,15.417a1.191,1.191,0,1,1-2.381,0Zm-1.8-7.444A7.4,7.4,0,0,1,.88,7.764a1.491,1.491,0,0,1-.709-.65A1.62,1.62,0,0,1,0,6.384a3.943,3.943,0,0,1,.262-.963A17.762,17.762,0,0,1,3.418.685c.161-.162.355-.337.4-.383A1.433,1.433,0,0,1,4.712,0a1.368,1.368,0,0,1,.834.278,4.586,4.586,0,0,1,.435.4A17.751,17.751,0,0,1,9.091,5.3a4.108,4.108,0,0,1,.321,1.079v.047a1.464,1.464,0,0,1-.778,1.287A6.442,6.442,0,0,1,7.593,8,20.9,20.9,0,0,1,4.7,8.17,17.926,17.926,0,0,1,1.715,7.973Zm12.647-.811L14.1,2.583a1.191,1.191,0,1,1,2.381,0l-.257,4.579a.934.934,0,1,1-1.867,0Z",
      transform: "translate(0 0)",
      fill: color
    }
  ));
  const Bulk = () => /* @__PURE__ */ React3.createElement("g", { transform: "translate(2 3)" }, /* @__PURE__ */ React3.createElement(
    "path",
    {
      d: "M1.191,0A.941.941,0,0,0,.257.948L0,5.527A1.2,1.2,0,0,0,1.191,6.734a1.2,1.2,0,0,0,1.19-1.208L2.125.948A.941.941,0,0,0,1.191,0",
      transform: "translate(3.514 9.891)",
      fill: secondaryColor,
      opacity
    }
  ), /* @__PURE__ */ React3.createElement(
    "path",
    {
      d: "M5.98.673a4.62,4.62,0,0,0-.434-.4A1.371,1.371,0,0,0,4.712,0a1.432,1.432,0,0,0-.893.3c-.046.046-.24.221-.4.384A17.743,17.743,0,0,0,.262,5.421,3.917,3.917,0,0,0,0,6.384a1.628,1.628,0,0,0,.171.73,1.491,1.491,0,0,0,.709.65,7.394,7.394,0,0,0,.834.209,17.975,17.975,0,0,0,2.986.2A20.868,20.868,0,0,0,7.593,8a6.358,6.358,0,0,0,1.04-.279A1.465,1.465,0,0,0,9.412,6.43V6.384A4.123,4.123,0,0,0,9.091,5.3,17.742,17.742,0,0,0,5.98.673",
      transform: "translate(0 0)",
      fill: color
    }
  ), /* @__PURE__ */ React3.createElement(
    "path",
    {
      d: "M1.191,6.735a.941.941,0,0,0,.934-.948l.256-4.579A1.2,1.2,0,0,0,1.191,0,1.2,1.2,0,0,0,0,1.208L.257,5.787a.941.941,0,0,0,.934.948",
      transform: "translate(14.103 1.375)",
      fill: secondaryColor,
      opacity
    }
  ), /* @__PURE__ */ React3.createElement(
    "path",
    {
      d: "M9.241,1.056a1.5,1.5,0,0,0-.709-.65A7.457,7.457,0,0,0,7.7.2,17.975,17.975,0,0,0,4.712,0,20.868,20.868,0,0,0,1.819.173,6.484,6.484,0,0,0,.778.453,1.463,1.463,0,0,0,0,1.741v.046A4.065,4.065,0,0,0,.321,2.866,17.694,17.694,0,0,0,3.431,7.5a4.5,4.5,0,0,0,.434.394,1.361,1.361,0,0,0,.836.279,1.434,1.434,0,0,0,.892-.3c.046-.046.24-.221.4-.382A17.777,17.777,0,0,0,9.148,2.751a3.881,3.881,0,0,0,.263-.963,1.629,1.629,0,0,0-.171-.732",
      transform: "translate(10.588 9.829)",
      fill: color
    }
  ));
  const Light = () => /* @__PURE__ */ React3.createElement("g", { transform: "translate(2 3)" }, /* @__PURE__ */ React3.createElement(
    "path",
    {
      d: "M.556,13.618V0",
      transform: "translate(14.284 3.546)",
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
      d: "M8.156,0,4.078,4.1,0,0",
      transform: "translate(10.762 13.068)",
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
      d: "M.556,0V13.618",
      transform: "translate(4.356 0.833)",
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
      d: "M0,4.1,4.078,0,8.156,4.1",
      transform: "translate(0.833 0.832)",
      fill: "none",
      stroke: color,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth
    }
  ));
  const Broken = () => /* @__PURE__ */ React3.createElement("g", { transform: "translate(2.5 3)" }, /* @__PURE__ */ React3.createElement(
    "path",
    {
      d: "M14.359,17.937a.834.834,0,0,1-.509-.77V3.546a.824.824,0,1,1,1.648,0v11.6l2.042-2.077a.82.82,0,0,1,1.166,0,.842.842,0,0,1,0,1.179l-3.451,3.506a.816.816,0,0,1-.9.183Zm-2.7-2.65-1.6-1.629a.841.841,0,0,1,0-1.179.817.817,0,0,1,1.165,0l1.6,1.631a.84.84,0,0,1,0,1.178.818.818,0,0,1-1.166,0Zm-7.628-.835V.833a.832.832,0,0,1,.509-.77.817.817,0,0,1,.9.182l4.033,4.1a.84.84,0,0,1,0,1.179.817.817,0,0,1-1.165,0L5.681,2.852v11.6a.824.824,0,1,1-1.648,0ZM.243,5.519a.839.839,0,0,1,0-1.178l1.6-1.63a.818.818,0,0,1,1.166,0,.842.842,0,0,1,0,1.18l-1.6,1.629a.815.815,0,0,1-1.165,0Z",
      transform: "translate(0 0)",
      fill: color
    }
  ));
  const TwoTone = () => /* @__PURE__ */ React3.createElement("g", { transform: "translate(2 3)" }, /* @__PURE__ */ React3.createElement(
    "path",
    {
      d: "M.556,13.618V0",
      transform: "translate(14.284 3.546)",
      fill: "none",
      stroke: color,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth,
      opacity
    }
  ), /* @__PURE__ */ React3.createElement(
    "path",
    {
      d: "M8.156,0,4.078,4.1,0,0",
      transform: "translate(10.762 13.068)",
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
      d: "M.556,0V13.618",
      transform: "translate(4.356 0.833)",
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
      d: "M0,4.1,4.078,0,8.156,4.1",
      transform: "translate(0.833 0.832)",
      fill: "none",
      stroke: color,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeWidth
    }
  ));
  const Curved = () => /* @__PURE__ */ React3.createElement("g", { transform: "translate(2.9 4.6)" }, /* @__PURE__ */ React3.createElement(
    "path",
    {
      d: "M.5,0V12.618",
      transform: "translate(3.579 0.001)",
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
      d: "M0,4.1S2.169,0,4.078,0,8.156,4.1,8.156,4.1",
      transform: "translate(0 0)",
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
      d: "M.5,12.618V0",
      transform: "translate(13.506 2.21)",
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
      d: "M8.156,0S5.986,4.1,4.078,4.1,0,0,0,0",
      transform: "translate(9.929 10.728)",
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
Swap.displayName = "IconlySwap";
Swap.propTypes = {
  opacity: import_prop_types2.default.string,
  color: import_prop_types2.default.string,
  secondaryColor: import_prop_types2.default.string,
  set: import_prop_types2.default.string,
  strokeWidth: import_prop_types2.default.oneOfType([import_prop_types2.default.string, import_prop_types2.default.number])
};
var Swap_default = withIcon_default(Swap);
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
