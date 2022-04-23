var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toESM(require("react"));
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return node.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return node.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// server-entry-module:@remix-run/dev/server-build
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = require("react-dom/server");
var import_remix = __toESM(require_remix());
var import_i18next = __toESM(require("i18next"));
var import_react_i18next = require("react-i18next");
async function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  await import_i18next.default.use(import_react_i18next.initReactI18next).init({
    supportedLngs: ["en", "es"],
    defaultNS: "common",
    fallbackLng: "en",
    react: { useSuspense: false }
  });
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_react_i18next.I18nextProvider, {
    i18n: import_i18next.default
  }, /* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  })));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/Users/daguilera/dev/personal/losDanisWedding/app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  loader: () => loader,
  meta: () => meta
});
init_react();
var import_remix2 = __toESM(require_remix());

// i18n.server.ts
init_react();
var import_remix_i18next = require("remix-i18next");
var backend = new import_remix_i18next.FileSystemBackend("./public/locales");
var i18n = new import_remix_i18next.RemixI18Next(backend, {
  fallbackLng: "en",
  supportedLanguages: ["en", "es"]
});

// route:/Users/daguilera/dev/personal/losDanisWedding/app/root.tsx
var import_remix_i18next2 = require("remix-i18next");

// app/styles/app.css
var app_default = "/build/_assets/app-NWELA6VU.css";

// route:/Users/daguilera/dev/personal/losDanisWedding/app/root.tsx
var loader = async ({ request }) => {
  let locale = await i18n.getLocale(request);
  return (0, import_remix2.json)({ locale });
};
var links = () => {
  return [
    { rel: "stylesheet", href: app_default },
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com"
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com"
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,wght@0,400;0,700;1,400;1,700&display=swap"
    },
    {
      rel: "stylesheet",
      href: "http://fonts.cdnfonts.com/css/leky-calgria"
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Parisienne&display=swap"
    }
  ];
};
var meta = () => {
  return { title: "Los Danis Wedding" };
};
function App() {
  let { locale } = (0, import_remix2.useLoaderData)();
  (0, import_remix_i18next2.useSetupTranslations)(locale);
  return /* @__PURE__ */ React.createElement("html", {
    lang: "es"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement(import_remix2.Meta, null), /* @__PURE__ */ React.createElement(import_remix2.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(import_remix2.Outlet, null), /* @__PURE__ */ React.createElement(import_remix2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix2.Scripts, null), false));
}

// route:/Users/daguilera/dev/personal/losDanisWedding/app/routes/posts/index.tsx
var posts_exports = {};
__export(posts_exports, {
  default: () => Posts,
  loader: () => loader2
});
init_react();
var import_remix3 = __toESM(require_remix());
var loader2 = () => {
  return [
    {
      slug: "my-first-post",
      title: "My First Post"
    },
    {
      slug: "90s-mixtape",
      title: "A Mixtape I Made Just For You"
    }
  ];
};
function Posts() {
  const posts = (0, import_remix3.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "Posts"), /* @__PURE__ */ React.createElement("ul", null, posts.map((post) => /* @__PURE__ */ React.createElement("li", {
    key: post.slug
  }, /* @__PURE__ */ React.createElement(import_remix3.Link, {
    to: post.slug
  }, post.title)))));
}

// route:/Users/daguilera/dev/personal/losDanisWedding/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  links: () => links3
});
init_react();

// app/components/envelope/index.tsx
init_react();
var import_react = __toESM(require("react"));

// app/components/envelope/envelope.css
var envelope_default = "/build/_assets/envelope-BHSIOE3O.css";

// app/components/envelope/index.tsx
var links2 = () => [{ rel: "stylesheet", href: envelope_default }];
var colors = {
  purple: "#A181A6",
  bone: "#F7EDE2",
  wedYellow: "#F6D294",
  orange: "#EBA57D",
  brown: "#BF8960"
};
var Envelope = (props) => {
  (0, import_react.useEffect)(() => openEnvelope(), []);
  function openEnvelope() {
    const seal = document.getElementById("seal");
    const triangle = document.getElementById("triangle");
    seal == null ? void 0 : seal.classList.add("open-seal");
    triangle == null ? void 0 : triangle.classList.add("open");
    setTimeout(() => {
      props.navigate();
    }, 2500);
  }
  return /* @__PURE__ */ import_react.default.createElement("div", {
    className: "envelope-wrapper bg-orange"
  }, /* @__PURE__ */ import_react.default.createElement("svg", {
    onClick: openEnvelope,
    preserveAspectRatio: "xMidYMid meet",
    className: "svg-envelope",
    id: "envelope",
    width: "100%",
    viewBox: "0 0 20 12",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ import_react.default.createElement("g", {
    className: "svg-envelope__group"
  }, /* @__PURE__ */ import_react.default.createElement("rect", {
    strokeWidth: "0.2%",
    stroke: colors.brown,
    className: "svg-envelope__bg",
    fill: colors.bone,
    height: "100%",
    width: "100%",
    rx: ".3",
    ry: ".3",
    x: "0",
    y: "0"
  }), /* @__PURE__ */ import_react.default.createElement("path", {
    stroke: colors.brown,
    strokeWidth: "0.2%",
    d: "M0.3 0 L 10 7 L 19.7 0 L 12 0",
    fill: colors.wedYellow
  }), /* @__PURE__ */ import_react.default.createElement("defs", null, /* @__PURE__ */ import_react.default.createElement("pattern", {
    id: "letter",
    x: "0%",
    y: "0%",
    height: "100%",
    width: "100%",
    viewBox: "0 0 512 512"
  }, /* @__PURE__ */ import_react.default.createElement("image", {
    x: "0%",
    y: "0%",
    width: "512",
    height: "512",
    href: "/images/logo_full_white_brown.jpg"
  }))), /* @__PURE__ */ import_react.default.createElement("rect", {
    x: "0%",
    y: "-12%",
    height: "75%",
    width: "100%",
    rx: "10",
    ry: "20",
    fill: "url(#letter)"
  }), /* @__PURE__ */ import_react.default.createElement("polygon", {
    points: "10,6 0.3,12 19.7,12",
    radius: "0.5",
    fill: colors.bone,
    stroke: colors.brown,
    strokeWidth: "0.2%"
  }), /* @__PURE__ */ import_react.default.createElement("polygon", {
    points: "10,6 0.3,12 0.3,0.3",
    fill: colors.bone
  }), /* @__PURE__ */ import_react.default.createElement("polygon", {
    points: "10,6 19.7,12 19.7,0.3",
    fill: colors.bone
  }), /* @__PURE__ */ import_react.default.createElement("path", {
    strokeWidth: "0.2%",
    strokeOpacity: "0.5",
    stroke: colors.brown,
    id: "triangle",
    opacity: "1",
    d: "M0.3 0 L 10 7 L 19.7 0 L 12 0",
    fill: colors.bone
  }), /* @__PURE__ */ import_react.default.createElement("defs", null, /* @__PURE__ */ import_react.default.createElement("pattern", {
    id: "logo",
    x: "0%",
    y: "0%",
    height: "100%",
    width: "100%",
    viewBox: "0 0 512 512"
  }, /* @__PURE__ */ import_react.default.createElement("image", {
    x: "0%",
    y: "0%",
    width: "512",
    height: "512",
    href: "/images/logo_small_brown.png"
  }))), /* @__PURE__ */ import_react.default.createElement("circle", {
    id: "seal",
    cx: "50%",
    cy: "30%",
    r: "12%",
    fill: "url(#logo)"
  }))));
};

// route:/Users/daguilera/dev/personal/losDanisWedding/app/routes/index.tsx
var import_react_router_dom = require("react-router-dom");
var links3 = () => [
  ...links2()
];
function Index() {
  const navigate = (0, import_react_router_dom.useNavigate)();
  const goHome = () => {
    navigate("home", { replace: true });
  };
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Envelope, {
    navigate: () => goHome()
  }));
}

// route:/Users/daguilera/dev/personal/losDanisWedding/app/routes/home.tsx
var home_exports = {};
__export(home_exports, {
  default: () => Home,
  links: () => links4,
  loader: () => loader3
});
init_react();
var import_remix4 = __toESM(require_remix());
var import_react4 = __toESM(require("react"));
var import_react_i18next2 = require("react-i18next");
var import_add_to_calendar_button = require("add-to-calendar-button");

// app/components/header/index.tsx
init_react();
var import_react2 = __toESM(require("react"));
var Header = ({ t }) => {
  const [scrollY2, setScrollY] = (0, import_react2.useState)(0);
  function logit() {
    setScrollY(window.pageYOffset);
    const header = document.getElementById("header");
    if (window.pageYOffset > 200) {
      header == null ? void 0 : header.classList.remove("opacity-0");
      header == null ? void 0 : header.classList.remove("absolute");
      header == null ? void 0 : header.classList.add("sticky");
    } else {
      header == null ? void 0 : header.classList.add("opacity-0");
      header == null ? void 0 : header.classList.add("absolute");
      header == null ? void 0 : header.classList.remove("sticky");
    }
  }
  (0, import_react2.useEffect)(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", logit);
    };
  }, []);
  return /* @__PURE__ */ import_react2.default.createElement("header", {
    id: "header",
    className: "p-6 bg-bone flex justify-around text-xl opacity-0 absolute top-0 transition-opacity duration-200"
  }, /* @__PURE__ */ import_react2.default.createElement("div", null, t("header.people")), /* @__PURE__ */ import_react2.default.createElement("div", null, t("header.party")), /* @__PURE__ */ import_react2.default.createElement("div", null, t("header.place")), /* @__PURE__ */ import_react2.default.createElement("div", null, t("header.accomodations")), /* @__PURE__ */ import_react2.default.createElement("div", null, t("header.rsvp")), /* @__PURE__ */ import_react2.default.createElement("div", null, t("header.photos")));
};

// app/styles/home.css
var home_default = "/build/_assets/home-NZ3LR54M.css";

// app/styles/datetime.css
var datetime_default = "/build/_assets/datetime-A4JQ4AGE.css";

// node_modules/add-to-calendar-button/assets/css/atcb.min.css
var atcb_min_default = "/build/_assets/atcb.min-O3SL4WBR.css";

// app/components/timer/CountDownTimer.tsx
init_react();

// app/components/timer/DateTimeDisplay.tsx
init_react();
var DateTimeDisplay = ({ value, type }) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "countdown"
  }, /* @__PURE__ */ React.createElement("p", null, value), /* @__PURE__ */ React.createElement("span", null, type));
};
var DateTimeDisplay_default = DateTimeDisplay;

// app/components/timer/useCountDown.tsx
init_react();
var import_react3 = require("react");
var useCountDown = (targetDate) => {
  const countDownDate = new Date(targetDate).getTime();
  const [countDown, setCountDown] = (0, import_react3.useState)(countDownDate - new Date().getTime());
  (0, import_react3.useEffect)(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1e3);
    return () => clearInterval(interval);
  }, [countDownDate]);
  return getReturnValues(countDown);
};
var getReturnValues = (countDown) => {
  const days = Math.floor(countDown / (1e3 * 60 * 60 * 24));
  const hours = Math.floor(countDown % (1e3 * 60 * 60 * 24) / (1e3 * 60 * 60));
  const minutes = Math.floor(countDown % (1e3 * 60 * 60) / (1e3 * 60));
  const seconds = Math.floor(countDown % (1e3 * 60) / 1e3);
  return [days, hours, minutes, seconds];
};
var useCountDown_default = useCountDown;

// app/components/timer/CountDownTimer.tsx
var ExpiredNotice = () => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "expired-notice"
  }, /* @__PURE__ */ React.createElement("span", null, "Expired!!!"), /* @__PURE__ */ React.createElement("p", null, "Please select a future date and time."));
};
var ShowCounter = ({ days, hours, minutes, seconds, t }) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "show-counter"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "countdown-link text-yellow-800"
  }, /* @__PURE__ */ React.createElement(DateTimeDisplay_default, {
    value: days,
    type: t("days")
  }), /* @__PURE__ */ React.createElement("p", null, ":"), /* @__PURE__ */ React.createElement(DateTimeDisplay_default, {
    value: hours,
    type: t("hours")
  }), /* @__PURE__ */ React.createElement("p", null, ":"), /* @__PURE__ */ React.createElement(DateTimeDisplay_default, {
    value: minutes,
    type: t("mins")
  }), /* @__PURE__ */ React.createElement("p", null, ":"), /* @__PURE__ */ React.createElement(DateTimeDisplay_default, {
    value: seconds,
    type: t("secs")
  })));
};
var CountDownTimer = ({ targetDate, t }) => {
  const [days, hours, minutes, seconds] = useCountDown_default(targetDate);
  if (days + hours + minutes + seconds <= 0) {
    return /* @__PURE__ */ React.createElement(ExpiredNotice, null);
  } else {
    return /* @__PURE__ */ React.createElement(ShowCounter, {
      t,
      days,
      hours,
      minutes,
      seconds
    });
  }
};
var CountDownTimer_default = CountDownTimer;

// route:/Users/daguilera/dev/personal/losDanisWedding/app/routes/home.tsx
var loader3 = async ({ request }) => {
  return (0, import_remix4.json)({
    i18n: await i18n.getTranslations(request, ["common"])
  });
};
var links4 = () => {
  return [
    { rel: "stylesheet", href: home_default },
    { rel: "stylesheet", href: datetime_default },
    { rel: "stylesheet", href: atcb_min_default }
  ];
};
function Home() {
  const { t } = (0, import_react_i18next2.useTranslation)("common");
  (0, import_react4.useEffect)(() => {
    const config = {
      name: t("weddingName"),
      startDate: "2022-10-01",
      endDate: "2022-10-02",
      startTime: "20:00",
      endTime: "02:00",
      options: ["Apple", "Google", "iCal", "Microsoft365", "Outlook.com", "MicrosoftTeams", "Yahoo"],
      timeZone: "America/Chihuahua",
      trigger: "click",
      iCalFileName: "Danis Wedding"
    };
    const button = document.querySelector("#calendar-button");
    button == null ? void 0 : button.addEventListener("click", () => (0, import_add_to_calendar_button.atcb_action)(config, button));
  }, [t]);
  return /* @__PURE__ */ import_react4.default.createElement(import_react4.default.Fragment, null, /* @__PURE__ */ import_react4.default.createElement("section", null, /* @__PURE__ */ import_react4.default.createElement(Header, {
    t
  }), /* @__PURE__ */ import_react4.default.createElement("div", {
    className: "flex items-center min-h-screen justify-center bg-img"
  }, /* @__PURE__ */ import_react4.default.createElement("div", null, /* @__PURE__ */ import_react4.default.createElement("h1", {
    className: "text-5xl text-yellow-700 mb-4"
  }, t("landing.ourWedding")), /* @__PURE__ */ import_react4.default.createElement("h2", {
    className: "text-4xl md:text-7xl lg:text-9xl text-yellow-900"
  }, "Daniela & Daniel"), /* @__PURE__ */ import_react4.default.createElement("p", {
    className: "py-1 pt-6 md:text-center text-xl text-yellow-700"
  }, "SAVE THE DATE"), /* @__PURE__ */ import_react4.default.createElement("div", {
    className: "counter-container"
  }, /* @__PURE__ */ import_react4.default.createElement(CountDownTimer_default, {
    targetDate: new Date("10-01-2022 20:00:00"),
    t
  }), /* @__PURE__ */ import_react4.default.createElement("p", {
    className: "text-center text-yellow-800 font-bold md:text-2xl text-xl"
  }, t("date"))), /* @__PURE__ */ import_react4.default.createElement("div", {
    className: "w-full flex"
  }, /* @__PURE__ */ import_react4.default.createElement("button", {
    id: "calendar-button",
    className: "md:m-auto font-bold w-full md:w-auto"
  }, t("landing.addCalendar")))))), /* @__PURE__ */ import_react4.default.createElement("section", {
    className: "py-16 text-center"
  }, /* @__PURE__ */ import_react4.default.createElement("div", {
    className: "w-40 m-auto"
  }, /* @__PURE__ */ import_react4.default.createElement("svg", {
    viewBox: "120.303 37.766 245.27 390.61",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "#BF8960",
    fill: "#BF8960"
  }, /* @__PURE__ */ import_react4.default.createElement("path", {
    className: "st0",
    d: "M 241.973 414.916 C 181.513 414.916 132.323 365.726 132.323 305.266 L 132.323 159.616 C 132.323 99.156 181.513 49.966 241.973 49.966 C 302.433 49.966 351.623 99.156 351.623 159.616 L 351.623 305.266 C 351.623 365.726 302.433 414.916 241.973 414.916 Z M 241.973 53.636 C 183.533 53.636 135.993 101.176 135.993 159.616 L 135.993 305.266 C 135.993 363.706 183.533 411.256 241.973 411.256 C 300.413 411.256 347.953 363.706 347.953 305.266 L 347.953 159.616 C 347.953 101.176 300.413 53.636 241.973 53.636 Z"
  }), /* @__PURE__ */ import_react4.default.createElement("path", {
    className: "st0",
    d: "M 245.633 428.376 L 240.243 428.376 C 174.103 428.376 120.303 374.566 120.303 308.436 L 120.303 157.706 C 120.303 91.566 174.103 37.766 240.243 37.766 L 245.633 37.766 C 311.773 37.766 365.573 91.566 365.573 157.706 L 365.573 308.426 C 365.573 374.566 311.773 428.376 245.633 428.376 Z M 240.243 41.436 C 176.133 41.436 123.973 93.596 123.973 157.706 L 123.973 308.426 C 123.973 372.546 176.133 424.706 240.243 424.706 L 245.633 424.706 C 309.743 424.706 361.903 372.546 361.903 308.426 L 361.903 157.706 C 361.903 93.596 309.743 41.436 245.633 41.436 L 240.243 41.436 L 240.243 41.436 Z"
  }), /* @__PURE__ */ import_react4.default.createElement("path", {
    className: "st0",
    d: "M 283.083 106.896 C 287.893 111.706 291.563 117.166 294.093 123.306 C 296.623 129.436 297.893 135.886 297.893 142.636 L 297.893 156.046 C 297.893 162.776 296.623 169.206 294.093 175.336 C 291.553 181.466 287.883 186.936 283.083 191.746 C 274.633 200.076 264.583 204.916 252.933 206.256 C 252.263 206.316 249.563 206.366 244.823 206.406 C 240.093 206.446 234.733 206.496 228.743 206.536 C 222.753 206.576 215.143 206.626 205.913 206.686 C 206.813 206.686 207.543 206.196 208.103 205.196 C 208.653 204.206 209.083 202.956 209.393 201.456 C 209.703 199.956 209.913 198.386 210.023 196.756 C 210.053 196.146 210.063 191.036 210.063 181.446 C 210.063 171.846 210.063 161.146 210.063 149.356 C 210.063 137.556 210.063 126.856 210.063 117.266 C 210.063 107.666 210.053 102.566 210.023 101.956 C 209.903 100.326 209.693 98.766 209.393 97.276 C 209.083 95.796 208.653 94.556 208.103 93.566 C 207.553 92.576 206.823 92.086 205.913 92.086 L 247.333 92.086 C 250.533 92.086 253.683 92.376 256.773 92.956 C 266.853 94.876 275.623 99.526 283.083 106.896 Z M 243.843 93.836 L 225.583 93.836 C 225.553 93.836 225.513 93.886 225.473 93.986 C 225.433 94.086 225.373 94.226 225.323 94.376 C 225.263 94.536 225.203 94.686 225.123 94.836 C 225.053 94.986 225.003 95.096 224.973 95.186 C 224.363 97.076 223.963 99.226 223.793 101.606 C 223.733 102.306 223.693 102.986 223.663 103.656 C 223.663 104.206 223.663 108.966 223.663 117.926 C 223.663 126.886 223.653 137.236 223.643 148.996 C 223.623 160.746 223.623 175.776 223.623 194.066 C 223.623 194.186 223.633 194.446 223.663 194.856 C 223.693 195.266 223.723 195.676 223.753 196.106 C 223.783 196.526 223.793 196.866 223.793 197.136 C 223.963 199.526 224.363 201.666 224.973 203.556 C 225.033 203.726 225.103 203.926 225.193 204.146 C 225.283 204.366 225.363 204.546 225.433 204.696 C 225.503 204.846 225.553 204.916 225.583 204.916 L 247.343 204.826 C 248.213 204.826 249.093 204.796 249.983 204.736 C 250.873 204.676 251.643 204.616 252.303 204.556 C 252.963 204.496 253.333 204.466 253.413 204.466 C 255.533 204.026 257.333 203.406 258.783 202.606 C 260.243 201.806 261.153 201.246 261.533 200.926 C 261.563 200.896 261.583 200.876 261.603 200.856 C 261.613 200.846 261.633 200.826 261.643 200.816 C 261.653 200.796 261.683 200.796 261.713 200.796 C 265.873 197.536 269.483 193.686 272.523 189.236 C 275.563 184.786 277.933 179.906 279.623 174.576 C 281.313 169.246 282.153 163.626 282.153 157.716 L 282.153 143.336 C 282.153 136.606 281.063 130.246 278.903 124.266 C 276.733 118.276 273.713 112.926 269.833 108.206 C 265.963 103.486 261.433 99.596 256.243 96.536 C 254.643 95.666 253.063 95.036 251.503 94.656 C 249.943 94.276 248.643 94.046 247.593 93.956 C 247.593 93.926 247.593 93.926 247.593 93.956 C 246.413 93.876 245.163 93.836 243.843 93.836 Z"
  }), /* @__PURE__ */ import_react4.default.createElement("path", {
    className: "st0",
    d: "M 283.083 283.586 C 287.893 288.396 291.563 293.856 294.093 299.996 C 296.623 306.126 297.893 312.576 297.893 319.326 L 297.893 332.736 C 297.893 339.466 296.623 345.896 294.093 352.026 C 291.553 358.156 287.883 363.626 283.083 368.436 C 274.633 376.766 264.583 381.606 252.933 382.946 C 252.263 383.006 249.563 383.056 244.823 383.096 C 240.093 383.136 234.733 383.186 228.743 383.226 C 222.753 383.266 215.143 383.316 205.913 383.376 C 206.813 383.376 207.543 382.886 208.103 381.886 C 208.653 380.896 209.083 379.646 209.393 378.146 C 209.703 376.646 209.913 375.076 210.023 373.446 C 210.053 372.836 210.063 367.726 210.063 358.136 C 210.063 348.536 210.063 337.836 210.063 326.046 C 210.063 314.246 210.063 303.546 210.063 293.956 C 210.063 284.366 210.053 279.256 210.023 278.646 C 209.903 277.016 209.693 275.456 209.393 273.966 C 209.083 272.486 208.653 271.246 208.103 270.256 C 207.553 269.266 206.823 268.776 205.913 268.776 L 247.333 268.776 C 250.533 268.776 253.683 269.066 256.773 269.646 C 266.853 271.566 275.623 276.216 283.083 283.586 Z M 243.843 270.526 L 225.583 270.526 C 225.553 270.526 225.513 270.576 225.473 270.676 C 225.433 270.776 225.373 270.916 225.323 271.066 C 225.273 271.216 225.203 271.376 225.123 271.526 C 225.053 271.676 225.003 271.786 224.973 271.876 C 224.363 273.766 223.963 275.916 223.793 278.296 C 223.733 278.996 223.693 279.676 223.663 280.346 C 223.663 280.896 223.663 285.656 223.663 294.616 C 223.663 303.576 223.653 313.926 223.643 325.686 C 223.623 337.436 223.623 352.466 223.623 370.756 C 223.623 370.876 223.633 371.136 223.663 371.546 C 223.693 371.956 223.723 372.366 223.753 372.796 C 223.783 373.216 223.793 373.556 223.793 373.826 C 223.963 376.216 224.363 378.356 224.973 380.246 C 225.033 380.416 225.103 380.616 225.193 380.836 C 225.283 381.056 225.363 381.236 225.433 381.386 C 225.503 381.536 225.553 381.606 225.583 381.606 L 247.343 381.516 C 248.213 381.516 249.093 381.486 249.983 381.426 C 250.873 381.366 251.643 381.306 252.303 381.246 C 252.963 381.186 253.333 381.156 253.413 381.156 C 255.533 380.716 257.333 380.096 258.783 379.296 C 260.243 378.496 261.153 377.936 261.533 377.616 C 261.563 377.586 261.583 377.566 261.603 377.546 C 261.613 377.536 261.633 377.516 261.643 377.506 C 261.653 377.486 261.683 377.486 261.713 377.486 C 265.873 374.226 269.483 370.376 272.523 365.926 C 275.563 361.476 277.933 356.596 279.623 351.266 C 281.313 345.936 282.153 340.316 282.153 334.406 L 282.153 320.026 C 282.153 313.296 281.063 306.936 278.903 300.956 C 276.733 294.966 273.713 289.616 269.833 284.896 C 265.953 280.176 261.433 276.286 256.243 273.226 C 254.643 272.356 253.063 271.726 251.503 271.346 C 249.943 270.966 248.643 270.736 247.593 270.646 C 247.593 270.616 247.593 270.616 247.593 270.646 C 246.413 270.566 245.163 270.526 243.843 270.526 Z"
  }), /* @__PURE__ */ import_react4.default.createElement("path", {
    className: "st0",
    d: "M 310.703 236.716 L 249.323 236.716 C 248.783 235.206 247.373 234.106 245.673 234.106 C 243.973 234.106 242.563 235.206 242.023 236.716 L 180.643 236.716 L 180.643 239.316 L 242.023 239.316 C 242.563 240.826 243.973 241.926 245.673 241.926 C 247.373 241.926 248.783 240.826 249.323 239.316 L 310.703 239.316 L 310.703 236.716 Z"
  }))), /* @__PURE__ */ import_react4.default.createElement("p", {
    className: "text-6xl pt-4 font-parisienne text-brown"
  }, "Nuestra Historia"), /* @__PURE__ */ import_react4.default.createElement("div", {
    className: "w-5/6 md:w-1/2 m-auto p-4"
  }, /* @__PURE__ */ import_react4.default.createElement("p", {
    className: "text-yellow-900"
  }, "Nuestra historia comienza un verano del 2017 en Camargo. Luego de sobrevivir 4 a\xF1os de universidad, el destino nos unio en la ciudad de Chihuahua donde vivimos logros, risas y hermosos momentos. Y hoy queremos celebrar con ustedes nuestra decisi\xF3n de unir nuestras vidas para siempre.")), /* @__PURE__ */ import_react4.default.createElement("div", {
    className: "flex justify-center pt-4"
  }, /* @__PURE__ */ import_react4.default.createElement("p", {
    className: "item-start p-4 "
  }, "Daniela"), /* @__PURE__ */ import_react4.default.createElement("img", {
    className: "p-4 rounded-full",
    src: "https://via.placeholder.com/300",
    alt: ""
  }), /* @__PURE__ */ import_react4.default.createElement("p", {
    className: "self-end p-4"
  }, "Daniel"))));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "9f5d068a", "entry": { "module": "/build/entry.client-RBEYSORF.js", "imports": ["/build/_shared/chunk-HQ5AJLQK.js", "/build/_shared/chunk-H7TH6PYK.js", "/build/_shared/chunk-GFGGYHFO.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-ZDFRCTDY.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/home": { "id": "routes/home", "parentId": "root", "path": "home", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/home-ZU33JMLK.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-HZNFUMXY.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/posts/index": { "id": "routes/posts/index", "parentId": "root", "path": "posts", "index": true, "caseSensitive": void 0, "module": "/build/routes/posts/index-3UGT7RDT.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-9F5D068A.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/posts/index": {
    id: "routes/posts/index",
    parentId: "root",
    path: "posts",
    index: true,
    caseSensitive: void 0,
    module: posts_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: "home",
    index: void 0,
    caseSensitive: void 0,
    module: home_exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
/**
 * @remix-run/node v1.4.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.4.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.4.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
