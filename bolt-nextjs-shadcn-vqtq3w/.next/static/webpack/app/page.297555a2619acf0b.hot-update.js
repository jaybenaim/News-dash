"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/StocksSection.tsx":
/*!**************************************!*\
  !*** ./components/StocksSection.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ StocksSection; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ui_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/card */ \"(app-pages-browser)/./components/ui/card.tsx\");\n/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/api */ \"(app-pages-browser)/./lib/api.ts\");\n/* harmony import */ var _barrel_optimize_names_ResponsiveContainer_AreaChart_Area_XAxis_YAxis_Tooltip_recharts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=ResponsiveContainer,AreaChart,Area,XAxis,YAxis,Tooltip!=!recharts */ \"(app-pages-browser)/./node_modules/recharts/es6/component/ResponsiveContainer.js\");\n/* harmony import */ var _barrel_optimize_names_ResponsiveContainer_AreaChart_Area_XAxis_YAxis_Tooltip_recharts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=ResponsiveContainer,AreaChart,Area,XAxis,YAxis,Tooltip!=!recharts */ \"(app-pages-browser)/./node_modules/recharts/es6/chart/AreaChart.js\");\n/* harmony import */ var _barrel_optimize_names_ResponsiveContainer_AreaChart_Area_XAxis_YAxis_Tooltip_recharts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=ResponsiveContainer,AreaChart,Area,XAxis,YAxis,Tooltip!=!recharts */ \"(app-pages-browser)/./node_modules/recharts/es6/cartesian/XAxis.js\");\n/* harmony import */ var _barrel_optimize_names_ResponsiveContainer_AreaChart_Area_XAxis_YAxis_Tooltip_recharts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=ResponsiveContainer,AreaChart,Area,XAxis,YAxis,Tooltip!=!recharts */ \"(app-pages-browser)/./node_modules/recharts/es6/cartesian/YAxis.js\");\n/* harmony import */ var _barrel_optimize_names_ResponsiveContainer_AreaChart_Area_XAxis_YAxis_Tooltip_recharts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=ResponsiveContainer,AreaChart,Area,XAxis,YAxis,Tooltip!=!recharts */ \"(app-pages-browser)/./node_modules/recharts/es6/component/Tooltip.js\");\n/* harmony import */ var _barrel_optimize_names_ResponsiveContainer_AreaChart_Area_XAxis_YAxis_Tooltip_recharts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! __barrel_optimize__?names=ResponsiveContainer,AreaChart,Area,XAxis,YAxis,Tooltip!=!recharts */ \"(app-pages-browser)/./node_modules/recharts/es6/cartesian/Area.js\");\n/* harmony import */ var _barrel_optimize_names_TrendingUp_TrendingDown_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=TrendingUp,TrendingDown!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/trending-up.js\");\n/* harmony import */ var _barrel_optimize_names_TrendingUp_TrendingDown_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=TrendingUp,TrendingDown!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/trending-down.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst CustomTooltip = (param)=>{\n    let { active, payload, label } = param;\n    if (active && payload && payload.length) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-background border rounded p-2 shadow-lg\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"font-semibold\",\n                    children: label\n                }, void 0, false, {\n                    fileName: \"/Users/jacobbenaim/projects/News-dash/bolt-nextjs-shadcn-vqtq3w/components/StocksSection.tsx\",\n                    lineNumber: 13,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-sm\",\n                    children: [\n                        \"$\",\n                        payload[0].value.toFixed(2)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/jacobbenaim/projects/News-dash/bolt-nextjs-shadcn-vqtq3w/components/StocksSection.tsx\",\n                    lineNumber: 14,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/jacobbenaim/projects/News-dash/bolt-nextjs-shadcn-vqtq3w/components/StocksSection.tsx\",\n            lineNumber: 12,\n            columnNumber: 7\n        }, undefined);\n    }\n    return null;\n};\n_c = CustomTooltip;\nfunction StocksSection() {\n    _s();\n    const [stocks, setStocks] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const loadStocks = async ()=>{\n            try {\n                const data = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_3__.fetchStocks)();\n                setStocks(data);\n            } catch (error) {\n                console.error(\"Error loading stocks:\", error);\n            } finally{\n                setLoading(false);\n            }\n        };\n        loadStocks();\n    }, []);\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"animate-pulse space-y-4\",\n            children: [\n                ...Array(3)\n            ].map((_, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.Card, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardContent, {\n                        className: \"h-32 bg-gray-100 dark:bg-gray-800\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jacobbenaim/projects/News-dash/bolt-nextjs-shadcn-vqtq3w/components/StocksSection.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 11\n                    }, this)\n                }, i, false, {\n                    fileName: \"/Users/jacobbenaim/projects/News-dash/bolt-nextjs-shadcn-vqtq3w/components/StocksSection.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, this))\n        }, void 0, false, {\n            fileName: \"/Users/jacobbenaim/projects/News-dash/bolt-nextjs-shadcn-vqtq3w/components/StocksSection.tsx\",\n            lineNumber: 42,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid grid-cols-1 lg:grid-cols-3 gap-4\",\n        children: stocks.map((stock)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.Card, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardContent, {\n                    className: \"p-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-between items-start mb-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                            className: \"font-semibold\",\n                                            children: stock.symbol\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jacobbenaim/projects/News-dash/bolt-nextjs-shadcn-vqtq3w/components/StocksSection.tsx\",\n                                            lineNumber: 58,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"text-sm text-muted-foreground\",\n                                            children: stock.name\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jacobbenaim/projects/News-dash/bolt-nextjs-shadcn-vqtq3w/components/StocksSection.tsx\",\n                                            lineNumber: 59,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/jacobbenaim/projects/News-dash/bolt-nextjs-shadcn-vqtq3w/components/StocksSection.tsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"text-right\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"font-semibold\",\n                                            children: [\n                                                \"$\",\n                                                stock.price.toFixed(2)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/jacobbenaim/projects/News-dash/bolt-nextjs-shadcn-vqtq3w/components/StocksSection.tsx\",\n                                            lineNumber: 62,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex items-center text-sm \".concat(stock.change >= 0 ? \"text-green-500\" : \"text-red-500\"),\n                                            children: [\n                                                stock.change >= 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_TrendingUp_TrendingDown_lucide_react__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                                    className: \"w-4 h-4 mr-1\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/jacobbenaim/projects/News-dash/bolt-nextjs-shadcn-vqtq3w/components/StocksSection.tsx\",\n                                                    lineNumber: 65,\n                                                    columnNumber: 21\n                                                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_TrendingUp_TrendingDown_lucide_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                                    className: \"w-4 h-4 mr-1\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/jacobbenaim/projects/News-dash/bolt-nextjs-shadcn-vqtq3w/components/StocksSection.tsx\",\n                                                    lineNumber: 67,\n                                                    columnNumber: 21\n                                                }, this),\n                                                Math.abs(stock.change).toFixed(2),\n                                                \"%\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/jacobbenaim/projects/News-dash/bolt-nextjs-shadcn-vqtq3w/components/StocksSection.tsx\",\n                                            lineNumber: 63,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/jacobbenaim/projects/News-dash/bolt-nextjs-shadcn-vqtq3w/components/StocksSection.tsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/jacobbenaim/projects/News-dash/bolt-nextjs-shadcn-vqtq3w/components/StocksSection.tsx\",\n                            lineNumber: 56,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"h-32\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ResponsiveContainer_AreaChart_Area_XAxis_YAxis_Tooltip_recharts__WEBPACK_IMPORTED_MODULE_6__.ResponsiveContainer, {\n                                width: \"100%\",\n                                height: \"100%\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ResponsiveContainer_AreaChart_Area_XAxis_YAxis_Tooltip_recharts__WEBPACK_IMPORTED_MODULE_7__.AreaChart, {\n                                    data: stock.chartData,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"defs\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"linearGradient\", {\n                                                id: \"gradient-\".concat(stock.symbol),\n                                                x1: \"0\",\n                                                y1: \"0\",\n                                                x2: \"0\",\n                                                y2: \"1\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"stop\", {\n                                                        offset: \"5%\",\n                                                        stopColor: \"hsl(var(--primary))\",\n                                                        stopOpacity: 0.3\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/jacobbenaim/projects/News-dash/bolt-nextjs-shadcn-vqtq3w/components/StocksSection.tsx\",\n                                                        lineNumber: 78,\n                                                        columnNumber: 23\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"stop\", {\n                                                        offset: \"95%\",\n                                                        stopColor: \"hsl(var(--primary))\",\n                                                        stopOpacity: 0\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/jacobbenaim/projects/News-dash/bolt-nextjs-shadcn-vqtq3w/components/StocksSection.tsx\",\n                                                        lineNumber: 79,\n                                                        columnNumber: 23\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/jacobbenaim/projects/News-dash/bolt-nextjs-shadcn-vqtq3w/components/StocksSection.tsx\",\n                                                lineNumber: 77,\n                                                columnNumber: 21\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jacobbenaim/projects/News-dash/bolt-nextjs-shadcn-vqtq3w/components/StocksSection.tsx\",\n                                            lineNumber: 76,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ResponsiveContainer_AreaChart_Area_XAxis_YAxis_Tooltip_recharts__WEBPACK_IMPORTED_MODULE_8__.XAxis, {\n                                            dataKey: \"time\",\n                                            tick: {\n                                                fontSize: 12\n                                            },\n                                            tickFormatter: (value)=>value.split(\":\")[0],\n                                            interval: \"preserveStartEnd\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jacobbenaim/projects/News-dash/bolt-nextjs-shadcn-vqtq3w/components/StocksSection.tsx\",\n                                            lineNumber: 82,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ResponsiveContainer_AreaChart_Area_XAxis_YAxis_Tooltip_recharts__WEBPACK_IMPORTED_MODULE_9__.YAxis, {\n                                            hide: true,\n                                            domain: [\n                                                \"auto\",\n                                                \"auto\"\n                                            ]\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jacobbenaim/projects/News-dash/bolt-nextjs-shadcn-vqtq3w/components/StocksSection.tsx\",\n                                            lineNumber: 88,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ResponsiveContainer_AreaChart_Area_XAxis_YAxis_Tooltip_recharts__WEBPACK_IMPORTED_MODULE_10__.Tooltip, {\n                                            content: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomTooltip, {}, void 0, false, void 0, void 0)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jacobbenaim/projects/News-dash/bolt-nextjs-shadcn-vqtq3w/components/StocksSection.tsx\",\n                                            lineNumber: 92,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ResponsiveContainer_AreaChart_Area_XAxis_YAxis_Tooltip_recharts__WEBPACK_IMPORTED_MODULE_11__.Area, {\n                                            type: \"monotone\",\n                                            dataKey: \"value\",\n                                            stroke: \"hsl(var(--primary))\",\n                                            fillOpacity: 1,\n                                            fill: \"url(#gradient-\".concat(stock.symbol, \")\")\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jacobbenaim/projects/News-dash/bolt-nextjs-shadcn-vqtq3w/components/StocksSection.tsx\",\n                                            lineNumber: 93,\n                                            columnNumber: 19\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/jacobbenaim/projects/News-dash/bolt-nextjs-shadcn-vqtq3w/components/StocksSection.tsx\",\n                                    lineNumber: 75,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/jacobbenaim/projects/News-dash/bolt-nextjs-shadcn-vqtq3w/components/StocksSection.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/jacobbenaim/projects/News-dash/bolt-nextjs-shadcn-vqtq3w/components/StocksSection.tsx\",\n                            lineNumber: 73,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/jacobbenaim/projects/News-dash/bolt-nextjs-shadcn-vqtq3w/components/StocksSection.tsx\",\n                    lineNumber: 55,\n                    columnNumber: 11\n                }, this)\n            }, stock.symbol, false, {\n                fileName: \"/Users/jacobbenaim/projects/News-dash/bolt-nextjs-shadcn-vqtq3w/components/StocksSection.tsx\",\n                lineNumber: 54,\n                columnNumber: 9\n            }, this))\n    }, void 0, false, {\n        fileName: \"/Users/jacobbenaim/projects/News-dash/bolt-nextjs-shadcn-vqtq3w/components/StocksSection.tsx\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, this);\n}\n_s(StocksSection, \"hy/W5lhb9YPUw5x5OrbyRvdgQgk=\");\n_c1 = StocksSection;\nvar _c, _c1;\n$RefreshReg$(_c, \"CustomTooltip\");\n$RefreshReg$(_c1, \"StocksSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvU3RvY2tzU2VjdGlvbi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU0QztBQUNhO0FBQ2pCO0FBQytDO0FBQy9CO0FBRXhELE1BQU1hLGdCQUFnQjtRQUFDLEVBQUVDLE1BQU0sRUFBRUMsT0FBTyxFQUFFQyxLQUFLLEVBQU87SUFDcEQsSUFBSUYsVUFBVUMsV0FBV0EsUUFBUUUsTUFBTSxFQUFFO1FBQ3ZDLHFCQUNFLDhEQUFDQztZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ0M7b0JBQUVELFdBQVU7OEJBQWlCSDs7Ozs7OzhCQUM5Qiw4REFBQ0k7b0JBQUVELFdBQVU7O3dCQUFVO3dCQUNuQkosT0FBTyxDQUFDLEVBQUUsQ0FBQ00sS0FBSyxDQUFDQyxPQUFPLENBQUM7Ozs7Ozs7Ozs7Ozs7SUFJbkM7SUFDQSxPQUFPO0FBQ1Q7S0FaTVQ7QUFjUyxTQUFTVTs7SUFDdEIsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUd4QiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3ZDLE1BQU0sQ0FBQ3lCLFNBQVNDLFdBQVcsR0FBRzFCLCtDQUFRQSxDQUFDO0lBRXZDRCxnREFBU0EsQ0FBQztRQUNSLE1BQU00QixhQUFhO1lBQ2pCLElBQUk7Z0JBQ0YsTUFBTUMsT0FBTyxNQUFNekIscURBQVdBO2dCQUM5QnFCLFVBQVVJO1lBQ1osRUFBRSxPQUFPQyxPQUFPO2dCQUNkQyxRQUFRRCxLQUFLLENBQUMseUJBQXlCQTtZQUN6QyxTQUFVO2dCQUNSSCxXQUFXO1lBQ2I7UUFDRjtRQUNBQztJQUNGLEdBQUcsRUFBRTtJQUVMLElBQUlGLFNBQVM7UUFDWCxxQkFBTyw4REFBQ1I7WUFBSUMsV0FBVTtzQkFDbkI7bUJBQUlhLE1BQU07YUFBRyxDQUFDQyxHQUFHLENBQUMsQ0FBQ0MsR0FBR0Msa0JBQ3JCLDhEQUFDakMscURBQUlBOzhCQUNILDRFQUFDQyw0REFBV0E7d0JBQUNnQixXQUFVOzs7Ozs7bUJBRGRnQjs7Ozs7Ozs7OztJQUtqQjtJQUVBLHFCQUNFLDhEQUFDakI7UUFBSUMsV0FBVTtrQkFDWkssT0FBT1MsR0FBRyxDQUFDLENBQUNHLHNCQUNYLDhEQUFDbEMscURBQUlBOzBCQUNILDRFQUFDQyw0REFBV0E7b0JBQUNnQixXQUFVOztzQ0FDckIsOERBQUNEOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ0Q7O3NEQUNDLDhEQUFDbUI7NENBQUdsQixXQUFVO3NEQUFpQmlCLE1BQU1FLE1BQU07Ozs7OztzREFDM0MsOERBQUNsQjs0Q0FBRUQsV0FBVTtzREFBaUNpQixNQUFNRyxJQUFJOzs7Ozs7Ozs7Ozs7OENBRTFELDhEQUFDckI7b0NBQUlDLFdBQVU7O3NEQUNiLDhEQUFDQzs0Q0FBRUQsV0FBVTs7Z0RBQWdCO2dEQUFFaUIsTUFBTUksS0FBSyxDQUFDbEIsT0FBTyxDQUFDOzs7Ozs7O3NEQUNuRCw4REFBQ0o7NENBQUlDLFdBQVcsNkJBQW1GLE9BQXREaUIsTUFBTUssTUFBTSxJQUFJLElBQUksbUJBQW1COztnREFDakZMLE1BQU1LLE1BQU0sSUFBSSxrQkFDZiw4REFBQzlCLG1HQUFVQTtvREFBQ1EsV0FBVTs7Ozs7eUVBRXRCLDhEQUFDUCxtR0FBWUE7b0RBQUNPLFdBQVU7Ozs7OztnREFFekJ1QixLQUFLQyxHQUFHLENBQUNQLE1BQU1LLE1BQU0sRUFBRW5CLE9BQU8sQ0FBQztnREFBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQ0FJekMsOERBQUNKOzRCQUFJQyxXQUFVO3NDQUNiLDRFQUFDZCx1SUFBbUJBO2dDQUFDdUMsT0FBTTtnQ0FBT0MsUUFBTzswQ0FDdkMsNEVBQUN2Qyw2SEFBU0E7b0NBQUN1QixNQUFNTyxNQUFNVSxTQUFTOztzREFDOUIsOERBQUNDO3NEQUNDLDRFQUFDQztnREFBZUMsSUFBSSxZQUF5QixPQUFiYixNQUFNRSxNQUFNO2dEQUFJWSxJQUFHO2dEQUFJQyxJQUFHO2dEQUFJQyxJQUFHO2dEQUFJQyxJQUFHOztrRUFDdEUsOERBQUNDO3dEQUFLQyxRQUFPO3dEQUFLQyxXQUFVO3dEQUFzQkMsYUFBYTs7Ozs7O2tFQUMvRCw4REFBQ0g7d0RBQUtDLFFBQU87d0RBQU1DLFdBQVU7d0RBQXNCQyxhQUFhOzs7Ozs7Ozs7Ozs7Ozs7OztzREFHcEUsOERBQUNqRCx5SEFBS0E7NENBQ0prRCxTQUFROzRDQUNSQyxNQUFNO2dEQUFFQyxVQUFVOzRDQUFHOzRDQUNyQkMsZUFBZSxDQUFDeEMsUUFBVUEsTUFBTXlDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTs0Q0FDN0NDLFVBQVM7Ozs7OztzREFFWCw4REFBQ3RELHlIQUFLQTs0Q0FDSnVELElBQUk7NENBQ0pDLFFBQVE7Z0RBQUM7Z0RBQVE7NkNBQU87Ozs7OztzREFFMUIsOERBQUN2RCw0SEFBT0E7NENBQUN3RCx1QkFBUyw4REFBQ3JEOzs7Ozs7c0RBQ25CLDhEQUFDTix5SEFBSUE7NENBQ0g0RCxNQUFLOzRDQUNMVCxTQUFROzRDQUNSVSxRQUFPOzRDQUNQQyxhQUFhOzRDQUNiQyxNQUFNLGlCQUE4QixPQUFibEMsTUFBTUUsTUFBTSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2VBNUNyQ0YsTUFBTUUsTUFBTTs7Ozs7Ozs7OztBQXNEL0I7R0FyRndCZjtNQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1N0b2Nrc1NlY3Rpb24udHN4P2JkZTUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDYXJkLCBDYXJkQ29udGVudCB9IGZyb20gJ0AvY29tcG9uZW50cy91aS9jYXJkJztcbmltcG9ydCB7IGZldGNoU3RvY2tzIH0gZnJvbSAnQC9saWIvYXBpJztcbmltcG9ydCB7IFJlc3BvbnNpdmVDb250YWluZXIsIEFyZWFDaGFydCwgQXJlYSwgWEF4aXMsIFlBeGlzLCBUb29sdGlwIH0gZnJvbSAncmVjaGFydHMnO1xuaW1wb3J0IHsgVHJlbmRpbmdVcCwgVHJlbmRpbmdEb3duIH0gZnJvbSAnbHVjaWRlLXJlYWN0JztcblxuY29uc3QgQ3VzdG9tVG9vbHRpcCA9ICh7IGFjdGl2ZSwgcGF5bG9hZCwgbGFiZWwgfTogYW55KSA9PiB7XG4gIGlmIChhY3RpdmUgJiYgcGF5bG9hZCAmJiBwYXlsb2FkLmxlbmd0aCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWJhY2tncm91bmQgYm9yZGVyIHJvdW5kZWQgcC0yIHNoYWRvdy1sZ1wiPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkXCI+e2xhYmVsfTwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbVwiPlxuICAgICAgICAgICR7cGF5bG9hZFswXS52YWx1ZS50b0ZpeGVkKDIpfVxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG4gIHJldHVybiBudWxsO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3RvY2tzU2VjdGlvbigpIHtcbiAgY29uc3QgW3N0b2Nrcywgc2V0U3RvY2tzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBsb2FkU3RvY2tzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoU3RvY2tzKCk7XG4gICAgICAgIHNldFN0b2NrcyhkYXRhKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGxvYWRpbmcgc3RvY2tzOicsIGVycm9yKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgfVxuICAgIH07XG4gICAgbG9hZFN0b2NrcygpO1xuICB9LCBbXSk7XG5cbiAgaWYgKGxvYWRpbmcpIHtcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJhbmltYXRlLXB1bHNlIHNwYWNlLXktNFwiPlxuICAgICAge1suLi5BcnJheSgzKV0ubWFwKChfLCBpKSA9PiAoXG4gICAgICAgIDxDYXJkIGtleT17aX0+XG4gICAgICAgICAgPENhcmRDb250ZW50IGNsYXNzTmFtZT1cImgtMzIgYmctZ3JheS0xMDAgZGFyazpiZy1ncmF5LTgwMFwiIC8+XG4gICAgICAgIDwvQ2FyZD5cbiAgICAgICkpfVxuICAgIDwvZGl2PjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIGxnOmdyaWQtY29scy0zIGdhcC00XCI+XG4gICAgICB7c3RvY2tzLm1hcCgoc3RvY2s6IGFueSkgPT4gKFxuICAgICAgICA8Q2FyZCBrZXk9e3N0b2NrLnN5bWJvbH0+XG4gICAgICAgICAgPENhcmRDb250ZW50IGNsYXNzTmFtZT1cInAtNFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1zdGFydCBtYi00XCI+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGRcIj57c3RvY2suc3ltYm9sfTwvaDM+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LW11dGVkLWZvcmVncm91bmRcIj57c3RvY2submFtZX08L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkXCI+JHtzdG9jay5wcmljZS50b0ZpeGVkKDIpfTwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGZsZXggaXRlbXMtY2VudGVyIHRleHQtc20gJHtzdG9jay5jaGFuZ2UgPj0gMCA/ICd0ZXh0LWdyZWVuLTUwMCcgOiAndGV4dC1yZWQtNTAwJ31gfT5cbiAgICAgICAgICAgICAgICAgIHtzdG9jay5jaGFuZ2UgPj0gMCA/IChcbiAgICAgICAgICAgICAgICAgICAgPFRyZW5kaW5nVXAgY2xhc3NOYW1lPVwidy00IGgtNCBtci0xXCIgLz5cbiAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIDxUcmVuZGluZ0Rvd24gY2xhc3NOYW1lPVwidy00IGgtNCBtci0xXCIgLz5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICB7TWF0aC5hYnMoc3RvY2suY2hhbmdlKS50b0ZpeGVkKDIpfSVcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC0zMlwiPlxuICAgICAgICAgICAgICA8UmVzcG9uc2l2ZUNvbnRhaW5lciB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCI+XG4gICAgICAgICAgICAgICAgPEFyZWFDaGFydCBkYXRhPXtzdG9jay5jaGFydERhdGF9PlxuICAgICAgICAgICAgICAgICAgPGRlZnM+XG4gICAgICAgICAgICAgICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD17YGdyYWRpZW50LSR7c3RvY2suc3ltYm9sfWB9IHgxPVwiMFwiIHkxPVwiMFwiIHgyPVwiMFwiIHkyPVwiMVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjUlXCIgc3RvcENvbG9yPVwiaHNsKHZhcigtLXByaW1hcnkpKVwiIHN0b3BPcGFjaXR5PXswLjN9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiOTUlXCIgc3RvcENvbG9yPVwiaHNsKHZhcigtLXByaW1hcnkpKVwiIHN0b3BPcGFjaXR5PXswfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxuICAgICAgICAgICAgICAgICAgPC9kZWZzPlxuICAgICAgICAgICAgICAgICAgPFhBeGlzIFxuICAgICAgICAgICAgICAgICAgICBkYXRhS2V5PVwidGltZVwiIFxuICAgICAgICAgICAgICAgICAgICB0aWNrPXt7IGZvbnRTaXplOiAxMiB9fSBcbiAgICAgICAgICAgICAgICAgICAgdGlja0Zvcm1hdHRlcj17KHZhbHVlKSA9PiB2YWx1ZS5zcGxpdCgnOicpWzBdfVxuICAgICAgICAgICAgICAgICAgICBpbnRlcnZhbD1cInByZXNlcnZlU3RhcnRFbmRcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxZQXhpcyBcbiAgICAgICAgICAgICAgICAgICAgaGlkZSBcbiAgICAgICAgICAgICAgICAgICAgZG9tYWluPXtbJ2F1dG8nLCAnYXV0byddfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxUb29sdGlwIGNvbnRlbnQ9ezxDdXN0b21Ub29sdGlwIC8+fSAvPlxuICAgICAgICAgICAgICAgICAgPEFyZWFcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm1vbm90b25lXCJcbiAgICAgICAgICAgICAgICAgICAgZGF0YUtleT1cInZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiaHNsKHZhcigtLXByaW1hcnkpKVwiXG4gICAgICAgICAgICAgICAgICAgIGZpbGxPcGFjaXR5PXsxfVxuICAgICAgICAgICAgICAgICAgICBmaWxsPXtgdXJsKCNncmFkaWVudC0ke3N0b2NrLnN5bWJvbH0pYH1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9BcmVhQ2hhcnQ+XG4gICAgICAgICAgICAgIDwvUmVzcG9uc2l2ZUNvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgIDwvQ2FyZD5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICApO1xufSJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkNhcmQiLCJDYXJkQ29udGVudCIsImZldGNoU3RvY2tzIiwiUmVzcG9uc2l2ZUNvbnRhaW5lciIsIkFyZWFDaGFydCIsIkFyZWEiLCJYQXhpcyIsIllBeGlzIiwiVG9vbHRpcCIsIlRyZW5kaW5nVXAiLCJUcmVuZGluZ0Rvd24iLCJDdXN0b21Ub29sdGlwIiwiYWN0aXZlIiwicGF5bG9hZCIsImxhYmVsIiwibGVuZ3RoIiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsInZhbHVlIiwidG9GaXhlZCIsIlN0b2Nrc1NlY3Rpb24iLCJzdG9ja3MiLCJzZXRTdG9ja3MiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImxvYWRTdG9ja3MiLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwiQXJyYXkiLCJtYXAiLCJfIiwiaSIsInN0b2NrIiwiaDMiLCJzeW1ib2wiLCJuYW1lIiwicHJpY2UiLCJjaGFuZ2UiLCJNYXRoIiwiYWJzIiwid2lkdGgiLCJoZWlnaHQiLCJjaGFydERhdGEiLCJkZWZzIiwibGluZWFyR3JhZGllbnQiLCJpZCIsIngxIiwieTEiLCJ4MiIsInkyIiwic3RvcCIsIm9mZnNldCIsInN0b3BDb2xvciIsInN0b3BPcGFjaXR5IiwiZGF0YUtleSIsInRpY2siLCJmb250U2l6ZSIsInRpY2tGb3JtYXR0ZXIiLCJzcGxpdCIsImludGVydmFsIiwiaGlkZSIsImRvbWFpbiIsImNvbnRlbnQiLCJ0eXBlIiwic3Ryb2tlIiwiZmlsbE9wYWNpdHkiLCJmaWxsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/StocksSection.tsx\n"));

/***/ })

});