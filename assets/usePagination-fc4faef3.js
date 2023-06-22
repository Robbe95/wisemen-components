import { as as defineComponent, ax as openBlock, aJ as createElementBlock, aC as renderSlot, aD as normalizeClass, aY as computed, b5 as watch, aF as ref, b8 as nextTick, b9 as onMounted, aH as createCommentVNode, aB as createBaseVNode, aA as createVNode, az as withCtx, aE as createTextVNode, aL as toDisplayString, ba as normalizeStyle, a_ as Fragment, a$ as renderList, ay as createBlock } from "./vendor-f004de5e.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import { g as generateUuid } from "./generateUuid-c290b5d9.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AppPaginationItem",
  props: {
    isDots: { type: Boolean, required: false, default: false },
    isActive: { type: Boolean, required: false, default: false }
  },
  emits: ["component:click"],
  setup(__props, { expose: __expose, emit }) {
    __expose();
    const __returned__ = { emit };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "button",
    {
      class: normalizeClass([{
        "border border-primary-500 shadow-main": !$props.isDots,
        "bg-primary-500 text-white shadow-lg shadow-primary-200": $props.isActive,
        "text-black": !$props.isActive
      }, "h-8 w-8 rounded-md"]),
      onClick: _cache[0] || (_cache[0] = ($event) => $setup.emit("component:click"))
    },
    [
      renderSlot(_ctx.$slots, "default")
    ],
    2
    /* CLASS */
  );
}
_sfc_main$1.__file = "src/modules/ui/components/app/pagination/AppPaginationItem.vue";
const __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/wisemen-components/wisemen-components/src/modules/ui/components/app/pagination/AppPaginationItem.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AppPagination",
  props: {
    options: { type: Array, required: true },
    currentOption: { type: Number, required: true }
  },
  emits: ["page:next", "page:prev", "page:set"],
  setup(__props, { expose: __expose, emit }) {
    __expose();
    const props = __props;
    const setPage = (page) => {
      if (typeof page === "number")
        emit("page:set", page);
    };
    const currentSelectionPosition = computed(() => {
      return props.options.findIndex((option) => typeof option === "number");
    });
    watch(currentSelectionPosition, (position) => {
      if (position === 0)
        emit("page:prev");
      if (position === props.options.length - 1)
        emit("page:next");
    });
    const calculatedPostion = ref();
    const calculateNewPosition = () => {
      var _a;
      const getCurrentPosition = (_a = document.querySelector(".current-item")) == null ? void 0 : _a.getBoundingClientRect();
      if (getCurrentPosition === void 0)
        return;
      calculatedPostion.value = `left: ${getCurrentPosition.left}px`;
    };
    watch(() => [props.currentOption, props.options], () => {
      nextTick(() => calculateNewPosition());
    }, { deep: true });
    onMounted(() => {
      calculateNewPosition();
    });
    const __returned__ = { props, emit, setPage, currentSelectionPosition, calculatedPostion, calculateNewPosition };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "flex items-center justify-end gap-2" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_AppPaginationItem = __unplugin_components_0;
  return openBlock(), createElementBlock(
    Fragment,
    null,
    [
      createCommentVNode(" eslint-disable tailwindcss/no-custom-classname "),
      createBaseVNode("div", _hoisted_1, [
        createVNode(_component_AppPaginationItem, {
          "is-active": "",
          style: normalizeStyle($setup.calculatedPostion),
          class: "absolute z-50 transition-all"
        }, {
          default: withCtx(() => [
            createTextVNode(
              toDisplayString($props.currentOption),
              1
              /* TEXT */
            )
          ]),
          _: 1
          /* STABLE */
        }, 8, ["style"]),
        (openBlock(true), createElementBlock(
          Fragment,
          null,
          renderList($props.options, (option) => {
            return openBlock(), createBlock(_component_AppPaginationItem, {
              key: option,
              class: normalizeClass({
                "current-item": $props.currentOption === option
              }),
              "is-dots": option === "...",
              value: option,
              "onComponent:click": ($event) => $setup.setPage(option)
            }, {
              default: withCtx(() => [
                createTextVNode(
                  toDisplayString(option),
                  1
                  /* TEXT */
                )
              ]),
              _: 2
              /* DYNAMIC */
            }, 1032, ["class", "is-dots", "value", "onComponent:click"]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ])
    ],
    2112
    /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
  );
}
_sfc_main.__file = "src/modules/ui/components/app/pagination/AppPagination.vue";
const __unplugin_components_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/wisemen-components/wisemen-components/src/modules/ui/components/app/pagination/AppPagination.vue"]]);
const dataFactory = (amount) => {
  const data2 = [];
  for (let i = 0; i < amount; i++) {
    data2.push({
      phone: generateUuid(),
      name: generateUuid(),
      postalZip: generateUuid(),
      region: generateUuid(),
      email: generateUuid(),
      country: generateUuid(),
      address: generateUuid()
    });
  }
  return data2;
};
const data = dataFactory(1e3);
const usePagination = (inputData, options = { rowsPerPage: 10 }) => {
  const data2 = ref(inputData);
  const currentPage = ref(1);
  const rowsPerPage = ref(options.rowsPerPage);
  const rowsAmount = ref(0);
  const maxPage = computed(() => {
    var _a;
    return Math.ceil(((_a = data2.value) == null ? void 0 : _a.length) / rowsPerPage.value);
  });
  const nextPage = () => {
    if (currentPage.value < rowsAmount.value / rowsPerPage.value - 1)
      currentPage.value++;
  };
  const previousPage = () => {
    if (currentPage.value > 0)
      currentPage.value--;
  };
  const setPage = (page) => {
    if (page >= 0 && page <= maxPage.value)
      currentPage.value = page;
  };
  const paginationOptions = computed(() => {
    const delta = 2;
    const left = currentPage.value - delta;
    const right = currentPage.value + delta + 1;
    const range = [];
    const rangeWithDots = [];
    let l;
    for (let i = 1; i <= maxPage.value; i++) {
      if (i === 1 || i === maxPage.value || i >= left && i < right)
        range.push(i);
    }
    for (const i of range) {
      if (l) {
        if (i - l === 2)
          rangeWithDots.push(l + 1);
        else if (i - l !== 1)
          rangeWithDots.push("...");
      }
      rangeWithDots.push(i);
      l = i;
    }
    return rangeWithDots;
  });
  const paginatedData = computed(() => {
    var _a;
    const start = (currentPage.value - 1) * rowsPerPage.value;
    const end = start + rowsPerPage.value;
    return (_a = data2.value) == null ? void 0 : _a.slice(start, end);
  });
  return {
    currentPage,
    rowsPerPage,
    rowsAmount,
    nextPage,
    previousPage,
    paginationOptions,
    maxPage,
    paginatedData,
    setPage
  };
};
export {
  __unplugin_components_2 as _,
  data as d,
  usePagination as u
};
