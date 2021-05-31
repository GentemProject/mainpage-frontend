(function() {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 1881:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8261);
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_module_scss__WEBPACK_IMPORTED_MODULE_1__);



function Container(props) {
  const {
    children
  } = props;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_1___default().container),
    children: children
  });
}

/* harmony default export */ __webpack_exports__["Z"] = (Container);

/***/ }),

/***/ 8016:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ App; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
;// CONCATENATED MODULE: external "react-gtm-module"
var external_react_gtm_module_namespaceObject = require("react-gtm-module");;
var external_react_gtm_module_default = /*#__PURE__*/__webpack_require__.n(external_react_gtm_module_namespaceObject);
// EXTERNAL MODULE: ./api/index.ts
var api = __webpack_require__(1916);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(8074);
// EXTERNAL MODULE: ./components/svg/close.tsx
var svg_close = __webpack_require__(8271);
// EXTERNAL MODULE: ./components/utils/architecture/Layout/headerNew/style.module.scss
var style_module = __webpack_require__(8844);
var style_module_default = /*#__PURE__*/__webpack_require__.n(style_module);
// EXTERNAL MODULE: ./components/utils/interactive/inputs/link/index.tsx
var inputs_link = __webpack_require__(2679);
;// CONCATENATED MODULE: ./components/utils/architecture/Layout/headerNew/menu-user.tsx






function MenuUser() {
  const user = false;
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: (style_module_default()).auth,
    children: user ? /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
      children: "menu usuario"
    }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(inputs_link/* default */.Z, {
        size: "s",
        className: "simple",
        href: "/",
        label: "Ingresar",
        color: {
          color: '#fff'
        }
      }), /*#__PURE__*/jsx_runtime_.jsx(inputs_link/* default */.Z, {
        size: "s",
        className: "border",
        href: "/",
        label: "Registra tu proyecto",
        color: {
          borderColor: '#fff',
          color: '#fff'
        }
      })]
    })
  });
}

/* harmony default export */ var menu_user = (MenuUser);
// EXTERNAL MODULE: ./components/svg/Logo.tsx
var Logo = __webpack_require__(6346);
;// CONCATENATED MODULE: ./components/svg/menu.tsx



function Menu() {
  return /*#__PURE__*/jsx_runtime_.jsx("svg", {
    width: "24",
    height: "18",
    viewBox: "0 0 24 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/jsx_runtime_.jsx("g", {
      id: "menu",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("g", {
        id: "lines",
        children: [/*#__PURE__*/jsx_runtime_.jsx("line", {
          id: "line 1",
          x1: "23",
          y1: "1.5",
          x2: "1",
          y2: "1.5",
          stroke: "white",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }), /*#__PURE__*/jsx_runtime_.jsx("line", {
          id: "line 2",
          x1: "1",
          y1: "16.5",
          x2: "23",
          y2: "16.5",
          stroke: "white",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        })]
      })
    })
  });
}

/* harmony default export */ var svg_menu = (Menu);
;// CONCATENATED MODULE: ./components/utils/architecture/Layout/headerNew/index.tsx










function Header(props) {
  const {
    type
  } = props;
  const isRef = (0,external_react_.useRef)(null);
  const user = false;
  const {
    0: device,
    1: setDevice
  } = (0,external_react_.useState)('');
  const {
    0: menu,
    1: setMenu
  } = (0,external_react_.useState)(false);

  const handleMenu = () => {
    setMenu(menu => !menu);
  };

  (0,external_react_.useEffect)(() => {
    function getScroll() {
      if (window.scrollY >= 500) {
        isRef.current.classList.add((style_module_default()).blur);
      } else {
        isRef.current.classList.remove((style_module_default()).blur);
      }
    }

    document.addEventListener('scroll', getScroll);
    return () => {
      document.removeEventListener('scroll', getScroll);
    };
  });
  (0,external_react_.useEffect)(() => {
    function getWidth() {
      if (document.body.clientWidth > 1140) {
        setDevice('desktop');
      } else {
        setDevice('mobile');
      }
    }

    getWidth();
    document.addEventListener('resize', getWidth);
    return () => {
      document.removeEventListener('resize', getWidth);
    };
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    ref: isRef,
    className: type === null ? `${(style_module_default()).header}` : `${(style_module_default()).header} ${(style_module_default())[type]}`,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (style_module_default()).content,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (style_module_default()).logo,
        children: [/*#__PURE__*/jsx_runtime_.jsx(Logo/* default */.Z, {
          fill: type === 'solid' ? '#47398e' : '#fff'
        }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
          children: user ? user : 'gentem'
        })]
      }), device === 'desktop' ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (style_module_default()).actions,
        children: [' ', /*#__PURE__*/jsx_runtime_.jsx(Links, {
          device: device,
          user: user
        })]
      }) : /*#__PURE__*/jsx_runtime_.jsx("button", {
        onClick: () => handleMenu(),
        children: /*#__PURE__*/jsx_runtime_.jsx(svg_menu, {})
      })]
    }), device === 'mobile' && /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: menu ? `${(style_module_default()).menuMobile} ${(style_module_default()).active}` : (style_module_default()).menuMobile,
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (style_module_default()).menu,
        children: /*#__PURE__*/jsx_runtime_.jsx(Links, {})
      })
    })]
  });
}

function Links(props) {
  const {
    device,
    user
  } = props;

  const elem = /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (style_module_default()).item,
      children: /*#__PURE__*/jsx_runtime_.jsx(inputs_link/* default */.Z, {
        size: "s",
        className: "simple",
        href: "/",
        label: "Ayuda",
        color: {
          color: '#fff'
        }
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (style_module_default()).item,
      children: /*#__PURE__*/jsx_runtime_.jsx(inputs_link/* default */.Z, {
        size: "s",
        className: "simple",
        href: "/",
        label: "Nosotros",
        color: {
          color: '#fff'
        }
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(menu_user, {})]
  });

  return elem;
}

/* harmony default export */ var headerNew = (Header);
// EXTERNAL MODULE: ./components/utils/architecture/Layout/footerNew/style.module.scss
var footerNew_style_module = __webpack_require__(1505);
var footerNew_style_module_default = /*#__PURE__*/__webpack_require__.n(footerNew_style_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./components/svg/index.tsx + 16 modules
var svg = __webpack_require__(5056);
;// CONCATENATED MODULE: ./components/utils/architecture/Layout/footerNew/index.tsx







function Footer() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (footerNew_style_module_default()).footer,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (footerNew_style_module_default()).list,
      children: [/*#__PURE__*/jsx_runtime_.jsx(inputs_link/* default */.Z, {
        href: "/",
        className: "simple",
        label: "Preguntas frecuentes",
        size: "m",
        color: {
          color: '#888888'
        }
      }), /*#__PURE__*/jsx_runtime_.jsx(inputs_link/* default */.Z, {
        href: "/",
        className: "simple",
        label: "Politica de privacidad",
        size: "m",
        color: {
          color: '#888888'
        }
      }), /*#__PURE__*/jsx_runtime_.jsx(inputs_link/* default */.Z, {
        href: "/",
        className: "simple",
        label: "Terminos y condiciones",
        size: "m",
        color: {
          color: '#888888'
        }
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (footerNew_style_module_default()).social,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (footerNew_style_module_default()).icons,
        children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (footerNew_style_module_default()).i,
            children: /*#__PURE__*/jsx_runtime_.jsx(svg/* FacebookIcon */.Vq, {})
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (footerNew_style_module_default()).i,
            children: /*#__PURE__*/jsx_runtime_.jsx(svg/* TwitterIcon */.Zm, {})
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (footerNew_style_module_default()).i,
            children: /*#__PURE__*/jsx_runtime_.jsx(svg/* InstagramIcon */.yu, {})
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (footerNew_style_module_default()).i,
            children: /*#__PURE__*/jsx_runtime_.jsx(svg/* LinkedinIcon */.pA, {})
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (footerNew_style_module_default()).gratitude,
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          children: "Hecho con "
        }), /*#__PURE__*/jsx_runtime_.jsx(svg/* Heart */.Xd, {}), /*#__PURE__*/jsx_runtime_.jsx("span", {
          children: " por el equipo de gentem"
        })]
      })]
    })]
  });
}

/* harmony default export */ var footerNew = (Footer);
// EXTERNAL MODULE: ./components/utils/architecture/Layout/container.tsx
var container = __webpack_require__(1881);
;// CONCATENATED MODULE: ./components/utils/architecture/Layout/index.tsx







function Layout(props) {
  const {
    children
  } = props;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(headerNew, {
      type: "transparent"
    }), /*#__PURE__*/jsx_runtime_.jsx(container/* default */.Z, {
      children: children
    }), /*#__PURE__*/jsx_runtime_.jsx(footerNew, {})]
  });
}

/* harmony default export */ var architecture_Layout = (Layout);
;// CONCATENATED MODULE: external "nprogress"
var external_nprogress_namespaceObject = require("nprogress");;
var external_nprogress_default = /*#__PURE__*/__webpack_require__.n(external_nprogress_namespaceObject);
;// CONCATENATED MODULE: ./pages/_app.tsx




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 // Apollo


 // Components


 // Loading


router_default().events.on('routeChangeStart', () => external_nprogress_default().start());
router_default().events.on('routeChangeComplete', () => external_nprogress_default().done());
router_default().events.on('routeChangeError', () => external_nprogress_default().done()); // Styles


const tagManagerArgs = {
  gtmId: 'GTM-KS8MP9B'
};
function App({
  Component,
  pageProps
}) {
  // Apollo
  const client = (0,api/* useApollo */.U)(pageProps.initialApolloState); // Cookies visible

  let cookiesVisible;

  if (false) {}

  const active =  false || 'active';
  const {
    0: visible,
    1: setVisible
  } = (0,external_react_.useState)(cookiesVisible === active ? false : true);
  const {
    0: visibleEffect,
    1: setVisibleEffect
  } = (0,external_react_.useState)('beta');
  (0,external_react_.useEffect)(() => {
    external_react_gtm_module_default().initialize(tagManagerArgs);
  }, []);

  const handleVisible = async () => {
    await setVisibleEffect('beta betaClose');
    await setTimeout(() => {
      setVisible(false);
    }, 300);
    localStorage.setItem('cookies-visible', visible ? 'active' : 'inactive');
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "gentem | Directorio abierto de organizaciones sin \xE1nimo de lucro"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:title",
        content: "gentem"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:description",
        content: "Directorio abierto de organizaciones sin \xE1nimo de lucro"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:type",
        content: "website"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:url",
        content: "https://gentem.org/"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:locale",
        content: "es_AR"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:image",
        content: "/logoDefault.png"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:image:secure_url",
        content: "/logoDefault.png"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:image:type",
        content: "image/jpeg"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:image:width",
        content: "400"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:image:height",
        content: "300"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:image:alt",
        content: "Directorio abierto de organizaciones sin \xE1nimo de lucro"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "fb:app_id",
        content: "741948256347443"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "facebook-domain-verification",
        content: "krvnpqtmsw0yghzqjvndx6x58jjc9p"
      }), /*#__PURE__*/jsx_runtime_.jsx("script", {
        type: "application/ld+json",
        children: `{
            "@context": "https://schema.org/",
        "@type": "BreadcrumbList",
        "itemListElement": [{
                  "@type": "ListItem",
          "position": 1,
          "name": "Registra tu organización",
          "item": "https://gentem.org/registro.html"
        },{
                  "@type": "ListItem",
          "position": 2,
          "name": "Instagram",
          "item": "https://www.instagram.com/gentem_org/"
        },{
                  "@type": "ListItem",
          "position": 3,
          "name": "LinkedIn",
          "item": "https://www.linkedin.com/company/gentem-org/"
        },{
                  "@type": "ListItem",
          "position": 4,
          "name": "Facebook",
          "item": "https://www.facebook.com/gentemorg/"
        }]
      }`
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "description",
        content: "Gentem es una plataforma donde las organizaciones sin \xE1nimo de lucro pueden darse a conocer a donantes potenciales y mejorar su presencia online, lo que genera nuevas y mejores oportunidades en t\xE9rminos de donaciones y de alianzas estrat\xE9gicas."
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "icon",
        href: "/favicons/favicon-16x16.png",
        sizes: "16x16"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "icon",
        href: "/favicons/favicon-32x32.png",
        sizes: "32x32"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "icon",
        href: "/favicons/favicon-96x96.png",
        sizes: "96x96"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "shortcut icon",
        sizes: "36x36",
        href: "/favicons/android/android-icon-36x36.png"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "shortcut icon",
        sizes: "48x48",
        href: "/favicons/android/android-icon-48x48.png"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "shortcut icon",
        sizes: "72x72",
        href: "/favicons/android/android-icon-72x72.png"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "shortcut icon",
        sizes: "96x96",
        href: "/favicons/android/android-icon-96x96.png"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "shortcut icon",
        sizes: "144x144",
        href: "/favicons/android/android-icon-144x144.png"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "shortcut icon",
        sizes: "192x192",
        href: "/favicons/android/android-icon-192x192.png"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "apple-touch-icon",
        href: "/favicons/apple/apple-icon-57x57.png",
        sizes: "57x57"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "apple-touch-icon",
        href: "/favicons/apple/apple-icon-60x60.png",
        sizes: "60x60"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "apple-touch-icon",
        href: "/favicons/apple/apple-icon-72x72.png",
        sizes: "72x72"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "apple-touch-icon",
        href: "/favicons/apple/apple-icon-76x76.png",
        sizes: "76x76"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "apple-touch-icon",
        href: "/favicons/apple/apple-icon-114x114.png",
        sizes: "114x114"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "apple-touch-icon",
        href: "/favicons/apple/apple-icon-120x120.png",
        sizes: "120x120"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "apple-touch-icon",
        href: "/favicons/apple/apple-icon-144x144.png",
        sizes: "144x144"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "apple-touch-icon",
        href: "/favicons/apple/apple-icon-152x152.png",
        sizes: "152x152"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "apple-touch-icon",
        href: "/favicons/apple/apple-icon-180x180.png",
        sizes: "180x180"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "msapplication-TileColor",
        content: "#FFFFFF"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "msapplication-TileImage",
        content: "/favicons/ms/ms-icon-70x70"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "msapplication-config",
        content: "/favicons/ms/browserconfig.xml"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(architecture_Layout, {
      children: /*#__PURE__*/jsx_runtime_.jsx(client_.ApolloProvider, {
        client: client,
        children: /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))
      })
    }), visible && /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: visibleEffect,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "betaContainer",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "betaText",
          children: "Al usar este sitio, autom\xE1ticamente aceptas el uso de cookies para anal\xEDticas, contenido personalizado y ads."
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          onClick: handleVisible,
          className: "betaBtn",
          children: /*#__PURE__*/jsx_runtime_.jsx(svg_close/* default */.Z, {})
        })]
      })
    })]
  });
}

/***/ }),

/***/ 1505:
/***/ (function(module) {

// Exports
module.exports = {
	"footer": "style_footer__1CzFs",
	"list": "style_list__2aGFa",
	"social": "style_social__oVIsW",
	"icons": "style_icons__1K0gE",
	"i": "style_i__1uaVi",
	"gratitude": "style_gratitude__1zUwN"
};


/***/ }),

/***/ 8844:
/***/ (function(module) {

// Exports
module.exports = {
	"header": "style_header__2PzK8",
	"content": "style_content__h_Nmi",
	"logo": "style_logo__1qMPY",
	"actions": "style_actions__1dveV",
	"menuMobile": "style_menuMobile__e9Stm",
	"menu": "style_menu__3mrvh",
	"active": "style_active__2-uv6",
	"auth": "style_auth__SHk35",
	"item": "style_item__25auf",
	"blur": "style_blur__3jWnN",
	"solid": "style_solid__twEdR",
	"mobile": "style_mobile__HUud-"
};


/***/ }),

/***/ 8261:
/***/ (function(module) {

// Exports
module.exports = {
	"container": "style_container__3oA4o",
	"block": "style_block__1RrZx",
	"max": "style_max__3G5yC",
	"layoutCenter": "style_layoutCenter__1Wbg3",
	"layout": "style_layout__3X60N",
	"layout-top": "style_layout-top__3jAIk"
};


/***/ }),

/***/ 8074:
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/client");;

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 701:
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ 6731:
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [664,681,668,916,171], function() { return __webpack_exec__(8016); });
module.exports = __webpack_exports__;

})();