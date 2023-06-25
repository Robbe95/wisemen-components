import { _ as __unplugin_components_2$1, u as usePagination, d as data } from "./usePagination-8c2a3a39.js";
import { _ as __unplugin_components_1$1 } from "./AppIconButton-2ee2b0b0.js";
import { _ as __unplugin_components_0$1 } from "./FormInputField-34f3d330.js";
import { b6 as inject, as as defineComponent, bc as useI18n, b5 as computed, aw as resolveComponent, ax as openBlock, aJ as createElementBlock, aB as createBaseVNode, ay as createBlock, aH as createCommentVNode, aA as createVNode, az as withCtx, aC as renderSlot, aD as normalizeClass, bd as getCurrentInstance, aI as resolveDynamicComponent, aF as ref, be as watch, bf as provide, bg as unref, b8 as renderList, b7 as Fragment, aE as createTextVNode, aN as toDisplayString } from "./vendor-0d4e1342.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import "./generateUuid-c290b5d9.js";
import "./TransitionExpand-50512321.js";
import "./AppIcon-59dbebe4.js";
import "./CheckmarkIcon-c691b98e.js";
import "./useFormInputGroupContext-87f80587.js";
const TableContext = Symbol("TableContext");
const useTableContext = () => {
  const context = inject(TableContext, null);
  return context;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "AppTable",
  props: {
    hasPagination: { type: Boolean, required: false, default: false }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const { t } = useI18n();
    const context = useTableContext();
    const hasGlobalFilter = computed(() => {
      return !!(context == null ? void 0 : context.filters.find((filter2) => filter2.field === "global"));
    });
    const filter = computed({
      get: () => {
        var _a;
        return (_a = context == null ? void 0 : context.filters.find((filter2) => filter2.field === "global")) == null ? void 0 : _a.value;
      },
      set: (value) => {
        const relevantFilter = context == null ? void 0 : context.filters.find((filter2) => filter2.field === "global");
        if (relevantFilter && value !== void 0)
          relevantFilter.value = value;
      }
    });
    const isFilterEnabled = computed(() => {
      var _a;
      return (_a = context == null ? void 0 : context.filters.find((filter2) => filter2.field === "global")) == null ? void 0 : _a.isEnabled;
    });
    const setFilterEnabled = (enabled) => {
      const relevantFilter = context == null ? void 0 : context.filters.find((filter2) => filter2.field === "global");
      if (relevantFilter)
        relevantFilter.isEnabled = enabled;
    };
    const currentPage = computed(() => {
      return context == null ? void 0 : context.pagination.currentPage.value;
    });
    const pageOptions = computed(() => {
      return context == null ? void 0 : context.pagination.paginationOptions.value;
    });
    const setPage = (page) => {
      context == null ? void 0 : context.pagination.setPage(page);
    };
    const __returned__ = { t, context, hasGlobalFilter, filter, isFilterEnabled, setFilterEnabled, currentPage, pageOptions, setPage };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$2 = { class: "mb-2 flex items-center justify-end" };
const _hoisted_2$1 = { class: "relative overflow-x-auto rounded-lg" };
const _hoisted_3$1 = { class: "w-full table-auto text-left text-sm" };
const _hoisted_4$1 = { class: "sticky top-0 bg-gray-700 text-xs uppercase text-white" };
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_FormInputField = __unplugin_components_0$1;
  const _component_FilterIcon = resolveComponent("FilterIcon");
  const _component_NoFilterIcon = resolveComponent("NoFilterIcon");
  const _component_AppIconButton = __unplugin_components_1$1;
  const _component_AppPagination = __unplugin_components_2$1;
  return openBlock(), createElementBlock("div", null, [
    createBaseVNode("div", _hoisted_1$2, [
      $setup.hasGlobalFilter ? (openBlock(), createBlock(_component_FormInputField, {
        key: 0,
        modelValue: $setup.filter,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.filter = $event),
        placeholder: $setup.t("label.filter")
      }, null, 8, ["modelValue", "placeholder"])) : createCommentVNode("v-if", true),
      createVNode(_component_AppIconButton, {
        "onComponent:click": _cache[1] || (_cache[1] = ($event) => $setup.setFilterEnabled(!$setup.isFilterEnabled))
      }, {
        default: withCtx(() => [
          $setup.isFilterEnabled ? (openBlock(), createBlock(_component_FilterIcon, { key: 0 })) : (openBlock(), createBlock(_component_NoFilterIcon, { key: 1 }))
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    createBaseVNode("div", _hoisted_2$1, [
      createBaseVNode("table", _hoisted_3$1, [
        createBaseVNode("thead", _hoisted_4$1, [
          renderSlot(_ctx.$slots, "header")
        ]),
        createBaseVNode("tbody", null, [
          renderSlot(_ctx.$slots, "body")
        ])
      ])
    ]),
    $props.hasPagination && $setup.pageOptions && $setup.currentPage ? (openBlock(), createBlock(_component_AppPagination, {
      key: 0,
      class: "mt-1",
      "current-option": $setup.currentPage,
      options: $setup.pageOptions,
      "onPage:set": $setup.setPage
    }, null, 8, ["current-option", "options"])) : createCommentVNode("v-if", true)
  ]);
}
_sfc_main$3.__file = "src/modules/ui/components/app/table/AppTable.vue";
const __unplugin_components_2 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["__file", "/home/runner/work/wisemen-components/wisemen-components/src/modules/ui/components/app/table/AppTable.vue"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "AppTableRow",
  props: {
    isHeader: { type: Boolean, required: false, default: false }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = {};
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "tr",
    {
      class: normalizeClass({ "border-b border-gray-700 bg-gray-600 text-white duration-200 hover:bg-gray-400": !$props.isHeader })
    },
    [
      renderSlot(_ctx.$slots, "default")
    ],
    2
    /* CLASS */
  );
}
_sfc_main$2.__file = "src/modules/ui/components/app/table/AppTableRow.vue";
const __unplugin_components_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__file", "/home/runner/work/wisemen-components/wisemen-components/src/modules/ui/components/app/table/AppTableRow.vue"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AppTableItem",
  props: {
    isHeader: { type: Boolean, required: false, default: false }
  },
  setup(__props, { expose: __expose }) {
    var _a;
    __expose();
    const { t } = useI18n();
    const context = useTableContext();
    const headerKey = (_a = getCurrentInstance()) == null ? void 0 : _a.vnode.key;
    const sortableRows = computed(() => context == null ? void 0 : context.sortableRows);
    const currentSort = computed(() => context == null ? void 0 : context.currentSort);
    const isSortable = computed(() => {
      var _a2;
      return (_a2 = sortableRows == null ? void 0 : sortableRows.value) == null ? void 0 : _a2.includes(headerKey);
    });
    const sort = () => {
      if (isSortable.value)
        context == null ? void 0 : context.sort(headerKey);
    };
    const filter = computed({
      get: () => {
        var _a2;
        return (_a2 = context == null ? void 0 : context.filters.find((filter2) => filter2.field === headerKey)) == null ? void 0 : _a2.value;
      },
      set: (value) => {
        const relevantFilter = context == null ? void 0 : context.filters.find((filter2) => filter2.field === headerKey);
        if (relevantFilter && value !== void 0)
          relevantFilter.value = value;
      }
    });
    const isFilterEnabled = computed(() => {
      var _a2;
      return (_a2 = context == null ? void 0 : context.filters.find((filter2) => filter2.field === headerKey)) == null ? void 0 : _a2.isEnabled;
    });
    const filterType = computed(() => {
      var _a2;
      return (_a2 = context == null ? void 0 : context.filters.find((filter2) => filter2.field === headerKey)) == null ? void 0 : _a2.type;
    });
    const setFilterEnabled = (enabled) => {
      const relevantFilter = context == null ? void 0 : context.filters.find((filter2) => filter2.field === headerKey);
      if (relevantFilter)
        relevantFilter.isEnabled = enabled;
    };
    const isFilterable = computed(() => {
      return !!(context == null ? void 0 : context.filters.find((filter2) => filter2.field === headerKey));
    });
    const __returned__ = { t, context, headerKey, sortableRows, currentSort, isSortable, sort, filter, isFilterEnabled, filterType, setFilterEnabled, isFilterable, FormInputField: __unplugin_components_0$1 };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$1 = { class: "flex h-full flex-col gap-2" };
const _hoisted_2 = { class: "flex h-full flex-row items-start justify-between gap-2 whitespace-nowrap" };
const _hoisted_3 = {
  key: 0,
  class: "flex items-center gap-2"
};
const _hoisted_4 = {
  key: 1,
  class: "flex items-center gap-2"
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_SortAscendingIcon = resolveComponent("SortAscendingIcon");
  const _component_SortDescendingIcon = resolveComponent("SortDescendingIcon");
  const _component_AppIconButton = __unplugin_components_1$1;
  const _component_FilterIcon = resolveComponent("FilterIcon");
  const _component_NoFilterIcon = resolveComponent("NoFilterIcon");
  return openBlock(), createBlock(resolveDynamicComponent($props.isHeader ? "th" : "td"), {
    scope: "col",
    class: "h-[1px] px-6 py-3"
  }, {
    default: withCtx(() => [
      createBaseVNode("div", _hoisted_1$1, [
        createBaseVNode("div", _hoisted_2, [
          renderSlot(_ctx.$slots, "default"),
          $setup.isSortable ? (openBlock(), createBlock(_component_AppIconButton, {
            key: 0,
            "onComponent:click": $setup.sort
          }, {
            default: withCtx(() => {
              var _a;
              return [
                ((_a = $setup.currentSort) == null ? void 0 : _a.field) === $setup.headerKey && $setup.currentSort.direction === "asc" ? (openBlock(), createBlock(_component_SortAscendingIcon, { key: 0 })) : (openBlock(), createBlock(_component_SortDescendingIcon, { key: 1 }))
              ];
            }),
            _: 1
            /* STABLE */
          })) : createCommentVNode("v-if", true)
        ]),
        $setup.isFilterable && $setup.filterType === "input" ? (openBlock(), createElementBlock("div", _hoisted_3, [
          createVNode($setup["FormInputField"], {
            modelValue: $setup.filter,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.filter = $event),
            placeholder: $setup.t("label.filter"),
            class: "w-full text-black"
          }, null, 8, ["modelValue", "placeholder"]),
          createVNode(_component_AppIconButton, {
            "onComponent:click": _cache[1] || (_cache[1] = ($event) => $setup.setFilterEnabled(!$setup.isFilterEnabled))
          }, {
            default: withCtx(() => [
              $setup.isFilterEnabled ? (openBlock(), createBlock(_component_FilterIcon, { key: 0 })) : (openBlock(), createBlock(_component_NoFilterIcon, { key: 1 }))
            ]),
            _: 1
            /* STABLE */
          })
        ])) : createCommentVNode("v-if", true),
        $setup.isFilterable && $setup.filterType === "dropdown" ? (openBlock(), createElementBlock("div", _hoisted_4, [
          createVNode($setup["FormInputField"], {
            modelValue: $setup.filter,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.filter = $event),
            placeholder: $setup.t("label.filter"),
            class: "w-full text-black"
          }, null, 8, ["modelValue", "placeholder"]),
          createVNode(_component_AppIconButton, {
            "onComponent:click": _cache[3] || (_cache[3] = ($event) => $setup.setFilterEnabled(!$setup.isFilterEnabled))
          }, {
            default: withCtx(() => [
              $setup.isFilterEnabled ? (openBlock(), createBlock(_component_FilterIcon, { key: 0 })) : (openBlock(), createBlock(_component_NoFilterIcon, { key: 1 }))
            ]),
            _: 1
            /* STABLE */
          })
        ])) : createCommentVNode("v-if", true)
      ])
    ]),
    _: 3
    /* FORWARDED */
  });
}
_sfc_main$1.__file = "src/modules/ui/components/app/table/AppTableItem.vue";
const __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/wisemen-components/wisemen-components/src/modules/ui/components/app/table/AppTableItem.vue"]]);
const useTable = (data2, options = { rowsPerPage: 10 }) => {
  const tableData = ref(data2);
  const fillEmptyData = () => {
    const emptyData = tableData.value[0];
    const emptyDataKeys = Object.keys(emptyData);
    tableData.value = tableData.value.map((row) => {
      emptyDataKeys.forEach((key) => {
        if (row[key] === void 0)
          row[key] = "";
      });
      return row;
    });
  };
  watch(() => data2, () => {
    fillEmptyData();
  }, { deep: true });
  fillEmptyData();
  const tableHeaders = computed(() => data2.reduce((acc, curr) => [.../* @__PURE__ */ new Set([...acc, ...Object.keys(curr)])], []));
  const rowsAmount = computed(() => tableData.value.length);
  const currentSort = ref({ field: null, direction: "asc" });
  const sort = (key) => {
    if (currentSort.value.field === key) {
      tableData.value.reverse();
      currentSort.value.direction = currentSort.value.direction === "asc" ? "desc" : "asc";
    } else {
      tableData.value = tableData.value.sort((a, b) => {
        if (a[key] < b[key])
          return -1;
        if (a[key] > b[key])
          return 1;
        return 0;
      });
      currentSort.value.direction = "asc";
    }
    currentSort.value.field = unref(ref(key));
  };
  const filters = ref([]);
  const setupFilters = () => {
    if (options.filterableRows) {
      options.filterableRows.forEach((filter) => {
        filters.value.push({
          field: filter.field,
          type: filter.type,
          value: "",
          isEnabled: true
        });
      });
      filters.value.push({
        field: "global",
        type: "input",
        value: "",
        isEnabled: true
      });
    }
  };
  const applyFilterRow = (filter, row) => {
    var _a, _b;
    if (!filter.isEnabled)
      return true;
    if (filter.type === "dropdown")
      return row[filter.field] === filter.value || filter.value === "";
    else if (filter.type === "input")
      return (_b = row[filter.field]) == null ? void 0 : _b.toLowerCase().includes((_a = filter.value) == null ? void 0 : _a.toLowerCase());
    return false;
  };
  const applyGlobalFilterRow = (filter, row) => {
    if (!(filter == null ? void 0 : filter.isEnabled))
      return true;
    if (filter.type === "input")
      return Object.values(row).some((value) => {
        var _a;
        return value.toString().toLowerCase().includes((_a = filter.value) == null ? void 0 : _a.toLowerCase());
      });
    else if (filter.type === "dropdown")
      return Object.values(row).includes((value) => {
        var _a;
        return value === ((_a = filter.value) == null ? void 0 : _a.toLowerCase());
      }) || filter.value === "";
    return false;
  };
  const filteredData = computed(() => {
    let filteredData2 = tableData.value.filter((row) => {
      const globalFilter = filters.value.find((filter) => filter.field === "global");
      if (!globalFilter)
        return true;
      return applyGlobalFilterRow(globalFilter, row);
    });
    if (filters.value.length > 0) {
      filteredData2 = filteredData2.filter((row) => {
        return filters.value.filter((filter) => filter.field !== "global").every((filter) => {
          return applyFilterRow(filter, row);
        });
      });
    }
    return filteredData2;
  });
  setupFilters();
  const {
    currentPage,
    nextPage,
    previousPage,
    paginatedData,
    paginationOptions,
    setPage
  } = usePagination(filteredData, { rowsPerPage: options.rowsPerPage });
  const provideData = () => {
    provide(TableContext, {
      sort,
      filters: filters.value ?? [],
      sortableRows: options.sortableRows ?? [],
      currentSort: currentSort.value,
      pagination: {
        rowsPerPage: options.rowsPerPage,
        setPage,
        currentPage,
        nextPage,
        previousPage,
        paginationOptions
      }
    });
  };
  provideData();
  return {
    tableHeaders,
    tableData,
    filteredData,
    rowsAmount,
    currentPage,
    nextPage,
    previousPage,
    paginationOptions,
    filters,
    paginatedData,
    setPage,
    provideData
  };
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AppTable.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const tableData = ref(data);
    const sortableRows = ref(["postalZip", "postalZip", "email"]);
    const filterableRows = ref(
      [
        { field: "email", type: "input" },
        { field: "phone", type: "input" },
        { field: "global", type: "input" }
      ]
    );
    const { tableHeaders, paginatedData, provideData } = useTable(tableData.value, {
      sortableRows: sortableRows.value,
      filterableRows: filterableRows.value,
      rowsPerPage: 10
    });
    const changeData = () => {
      tableData.value[0].name = "Changed";
      tableData.value[0].otherStuff = "Changed";
    };
    provideData();
    const __returned__ = { tableData, sortableRows, filterableRows, tableHeaders, paginatedData, provideData, changeData };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "p-4" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_AppTableItem = __unplugin_components_0;
  const _component_AppTableRow = __unplugin_components_1;
  const _component_AppTable = __unplugin_components_2;
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "App/Table/AppTable" }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Default" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createBaseVNode("button", { onClick: $setup.changeData }, " Change some stuff "),
            createBaseVNode("div", null, [
              createVNode(_component_AppTable, { "has-pagination": "" }, {
                header: withCtx(() => [
                  createVNode(_component_AppTableRow, { "is-header": "" }, {
                    default: withCtx(() => [
                      (openBlock(true), createElementBlock(
                        Fragment,
                        null,
                        renderList($setup.tableHeaders, (tableHeader) => {
                          return openBlock(), createBlock(
                            _component_AppTableItem,
                            {
                              key: tableHeader,
                              "is-header": ""
                            },
                            {
                              default: withCtx(() => [
                                createTextVNode(
                                  toDisplayString(tableHeader),
                                  1
                                  /* TEXT */
                                )
                              ]),
                              _: 2
                              /* DYNAMIC */
                            },
                            1024
                            /* DYNAMIC_SLOTS */
                          );
                        }),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                body: withCtx(() => [
                  (openBlock(true), createElementBlock(
                    Fragment,
                    null,
                    renderList($setup.paginatedData, (tableRow) => {
                      return openBlock(), createBlock(
                        _component_AppTableRow,
                        {
                          key: tableRow.name
                        },
                        {
                          default: withCtx(() => [
                            (openBlock(true), createElementBlock(
                              Fragment,
                              null,
                              renderList(tableRow, (tableItem) => {
                                return openBlock(), createBlock(
                                  _component_AppTableItem,
                                  { key: tableItem },
                                  {
                                    default: withCtx(() => [
                                      createTextVNode(
                                        toDisplayString(tableItem),
                                        1
                                        /* TEXT */
                                      )
                                    ]),
                                    _: 2
                                    /* DYNAMIC */
                                  },
                                  1024
                                  /* DYNAMIC_SLOTS */
                                );
                              }),
                              128
                              /* KEYED_FRAGMENT */
                            ))
                          ]),
                          _: 2
                          /* DYNAMIC */
                        },
                        1024
                        /* DYNAMIC_SLOTS */
                      );
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ]),
                _: 1
                /* STABLE */
              })
            ])
          ])
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "src/modules/ui/components/app/table/AppTable.story.vue";
const AppTable_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/wisemen-components/wisemen-components/src/modules/ui/components/app/table/AppTable.story.vue"]]);
export {
  AppTable_story as default
};
