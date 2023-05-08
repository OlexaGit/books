// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"fso6b":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "3030afcee150bafc";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, importScripts */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else if ("reload" in location) location.reload();
            else {
                // Web extension context
                var ext = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
                if (ext && ext.runtime && ext.runtime.reload) ext.runtime.reload();
            }
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                if (asset.type === "js") {
                    if (typeof document !== "undefined") {
                        let script = document.createElement("script");
                        script.src = asset.url;
                        return new Promise((resolve, reject)=>{
                            var _document$head;
                            script.onload = ()=>resolve(script);
                            script.onerror = reject;
                            (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
                        });
                    } else if (typeof importScripts === "function") return new Promise((resolve, reject)=>{
                        try {
                            importScripts(asset.url);
                        } catch (err) {
                            reject(err);
                        }
                    });
                }
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id1][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"ahg1i":[function(require,module,exports) {
var _supportUkraineArray = require("./support-ukraine-array");
const container = document.querySelector("#support-ukraine");
const loadMoreBtn = document.querySelector("button.button-support-ukraine");
let limit = 0;
let inc = 2;
(function() {
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    console.log(vw);
    if (vw < 768) {
        limit = 4;
        renderListSupport((0, _supportUkraineArray.array), limit);
    } else {
        limit = 6;
        renderListSupport((0, _supportUkraineArray.array), limit);
    }
})();
function renderListSupport(array, limit1) {
    // console.log(array);
    clearContainer();
    const markup = array.map(({ title , url , img , img2  }, index)=>{
        index += 1;
        if (index < limit1 + 1) // console.log(index);
        return `        
          <div class="logo-support-ukraine">
            0${index}<a
              href="${url}"
              title="${title}"
              target="_blank"
              rel="noopener noreferrer"
              ><img
                srcset="${img} 1x, ${img2} 2x"
                src="${img}"
                alt="${title}"
                height="32"
            /></a>
            </div>
  `;
    }).join("");
    // loadMoreBtn.style.display = 'inline-block';
    container.insertAdjacentHTML("beforeend", markup);
}
loadMoreBtn.addEventListener("click", scrolList);
function scrolList() {
    clearContainer();
    if (limit === 6) {
        if (inc < limit - 1) {
            renderListScrol((0, _supportUkraineArray.array), limit, inc);
            inc += 1;
        } else {
            renderListSupport((0, _supportUkraineArray.array), limit);
            inc = 2;
            return;
        }
    } else if (inc < limit + 3) {
        renderListScrol((0, _supportUkraineArray.array), limit, inc);
        inc += 1;
    } else {
        renderListSupport((0, _supportUkraineArray.array), limit);
        inc = 2;
        return;
    }
}
function renderListScrol(array, limit2, inc1) {
    console.log("inc", inc1);
    const markup = array.map(({ title , url , img , img2  }, index)=>{
        index += 1;
        if (index >= inc1 && index < limit2 + inc1) return `        
          <div class="logo-support-ukraine">
            0${index}<a
              href="${url}"
              title="${title}"
              target="_blank"
              rel="noopener noreferrer"
              ><img
                srcset="${img} 1x, ${img2} 2x"
                src="${img}"
                alt="${title}"
                height="32"
            /></a>
            </div>
  `;
    }).join("");
    // loadMoreBtn.style.display = 'inline-block';
    container.innerHTML = markup;
}
function clearContainer() {
    container.innerHTML = "";
// loadMoreBtn.style.display = 'none';
} // console.log(window.innerWidth);
 //  or
 // const vw = Math.max(
 //   document.documentElement.clientWidth || 0,
 //   window.innerWidth || 0
 // );
 // console.log(vw);

},{"./support-ukraine-array":"kp43m"}],"kp43m":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "array", ()=>array);
const array = [
    {
        title: "Save the Children",
        url: "https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",
        img: new URL(require("fb15467892e6b371")),
        img2: new URL(require("ea599c2706b16520"))
    },
    {
        title: "Project HOPE",
        url: "https://www.projecthope.org/country/ukraine/",
        img: new URL(require("cfd4db7242e10fc0")),
        img2: new URL(require("ed6db30044ac7ede"))
    },
    {
        title: "UNITED24",
        url: "https://u24.gov.ua/uk",
        img: new URL(require("beea9e438a852900")),
        img2: new URL(require("f0ea3a05e104bb58"))
    },
    {
        title: "International Medical Corps",
        url: "https://internationalmedicalcorps.org/country/ukraine/",
        img: new URL(require("e891a8651ad596e4")),
        img2: new URL(require("455f16c79d883db6"))
    },
    {
        title: "Medicins Sans Frontieres",
        url: "https://www.msf.org/ukraine",
        img: new URL(require("f623bfb5be3a239a")),
        img2: new URL(require("50a54b6e4b43bd99"))
    },
    {
        title: "RAZOM",
        url: "https://www.razomforukraine.org/",
        img: new URL(require("3ed326aec6da68f2")),
        img2: new URL(require("45306c4c8c5a066"))
    },
    {
        title: "Action against hunger",
        url: "https://www.actionagainsthunger.org/location/europe/ukraine/",
        img: new URL(require("4ec8c2c56bd434c5")),
        img2: new URL(require("e135d93919bbaf9f"))
    },
    {
        title: "World vision",
        url: "https://www.wvi.org/emergencies/ukraine",
        img: new URL(require("e76fd527ea094393")),
        img2: new URL(require("e5744f1a346fff50"))
    },
    {
        title: "Serhiy Prytula Charity Foundation",
        url: "https://prytulafoundation.org/en",
        img: new URL(require("f664da2fd546cdd9")),
        img2: new URL(require("1444fbe89cdf0f77"))
    }, 
];

},{"fb15467892e6b371":"aeCrd","ea599c2706b16520":"3R1oB","cfd4db7242e10fc0":"cSNyO","ed6db30044ac7ede":"k3wpT","beea9e438a852900":"c5M6s","f0ea3a05e104bb58":"dUi2u","e891a8651ad596e4":"aeaPv","455f16c79d883db6":"i1boh","f623bfb5be3a239a":"2jH9b","50a54b6e4b43bd99":"faj3P","3ed326aec6da68f2":"fwbwx","45306c4c8c5a066":"8kUvN","4ec8c2c56bd434c5":"5xEOC","e135d93919bbaf9f":"9XsEf","e76fd527ea094393":"as6lp","e5744f1a346fff50":"jdvYr","f664da2fd546cdd9":"9LsZV","1444fbe89cdf0f77":"joDJP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aeCrd":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("48vWt") + "save.bfaf3b74.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"3R1oB":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("48vWt") + "save@2x.45fd6a7e.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"cSNyO":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("48vWt") + "hope.086ee61f.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"k3wpT":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("48vWt") + "hope@2x.bfdae9e4.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"c5M6s":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("48vWt") + "united.7b68a5b7.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"dUi2u":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("48vWt") + "united@2x.05ebd2f1.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"aeaPv":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("48vWt") + "medical.838b5395.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"i1boh":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("48vWt") + "medical@2x.b0859f93.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"2jH9b":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("48vWt") + "medecins.de4de288.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"faj3P":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("48vWt") + "medecins@2x.fb0bb394.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"fwbwx":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("48vWt") + "razom.d86ca132.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"8kUvN":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("48vWt") + "razom@2x.844864eb.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"5xEOC":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("48vWt") + "action.80bcbc8c.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"9XsEf":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("48vWt") + "action@2x.38851e94.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"as6lp":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("48vWt") + "world.830d38ec.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"jdvYr":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("48vWt") + "world@2x.3335fd21.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"9LsZV":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("48vWt") + "prytula.f5dcfa86.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"joDJP":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("48vWt") + "prytula@2x.1c50f32a.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["fso6b","ahg1i"], "ahg1i", "parcelRequired7c6")

//# sourceMappingURL=index.e150bafc.js.map
