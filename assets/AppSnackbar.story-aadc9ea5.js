import { _ as __unplugin_components_0$1 } from "./AppButton-f3d84d8e.js";
import { as as defineComponent, b3 as computed, ax as openBlock, aJ as createElementBlock, aB as createBaseVNode, aL as toDisplayString, aA as createVNode, aD as normalizeClass, b4 as inject, ay as createBlock, az as withCtx, b5 as Fragment, b6 as renderList, b7 as TransitionGroup, aF as ref, b8 as createApp, b9 as h, aw as resolveComponent, aE as createTextVNode } from "./vendor-72f13f2a.js";
import { g as generateUuid } from "./generateUuid-c290b5d9.js";
import { C as CloseIcon } from "./AppIcon-81b2fcde.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import "./fade.transition-ff73e3ee.js";
import "./CheckmarkIcon-ef85db79.js";
const AppSnackbar_vue_vue_type_style_index_0_scoped_47f2fc6a_lang = "";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "AppSnackbar",
  props: {
    snackbar: { type: Object, required: true }
  },
  emits: ["close"],
  setup(__props, { expose: __expose, emit }) {
    __expose();
    const props = __props;
    const classes = computed(() => {
      switch (props.snackbar.type) {
        case "success":
          return "bg-success-100 border border-success-500";
        case "error":
          return "bg-danger-100 border border-danger-500";
        case "info":
          return "bg-primary-100 border border-primary-500";
        case "warning":
          return "bg-secondary-100 border border-secondary-500";
      }
    });
    const textColor = computed(() => {
      switch (props.snackbar.type) {
        case "success":
          return "text-success-500";
        case "error":
          return "text-danger-500";
        case "info":
          return "text-primary-500";
        case "warning":
          return "text-secondary-500";
      }
    });
    const closeSnackbar = () => {
      emit("close");
    };
    const __returned__ = { props, emit, classes, textColor, closeSnackbar, CloseIcon };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass(["flex w-80 items-center justify-between gap-4 rounded px-4 py-2", $setup.classes]),
      role: "alert"
    },
    [
      createBaseVNode(
        "div",
        null,
        toDisplayString($props.snackbar.message),
        1
        /* TEXT */
      ),
      createBaseVNode("div", null, [
        createBaseVNode("button", { onClick: $setup.closeSnackbar }, [
          createVNode($setup["CloseIcon"], {
            class: normalizeClass(["h-3", $setup.textColor])
          }, null, 8, ["class"])
        ])
      ])
    ],
    2
    /* CLASS */
  );
}
_sfc_main$2.__file = "src/modules/ui/components/app/snackbar/AppSnackbar.vue";
const __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__scopeId", "data-v-47f2fc6a"], ["__file", "/home/runner/work/wisemen-components/wisemen-components/src/modules/ui/components/app/snackbar/AppSnackbar.vue"]]);
const AppSnackbarContainer_vue_vue_type_style_index_0_scoped_91e33d77_lang = "";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AppSnackbarContainer",
  setup(__props, { expose: __expose }) {
    __expose();
    const snackbarContainer = inject("snackbarContainer");
    const clearSnackbar = inject("clearSnackbar");
    const snackbars = computed(() => snackbarContainer.snackbars);
    const __returned__ = { snackbarContainer, clearSnackbar, snackbars };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_AppSnackbar = __unplugin_components_0;
  return openBlock(), createBlock(TransitionGroup, { name: "snackbar" }, {
    default: withCtx(() => [
      (openBlock(true), createElementBlock(
        Fragment,
        null,
        renderList($setup.snackbars.value, (snackbar) => {
          return openBlock(), createBlock(_component_AppSnackbar, {
            key: snackbar.uuid,
            snackbar,
            onClose: ($event) => $setup.clearSnackbar($setup.snackbarContainer, snackbar.uuid)
          }, null, 8, ["snackbar", "onClose"]);
        }),
        128
        /* KEYED_FRAGMENT */
      ))
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main$1.__file = "src/modules/ui/components/app/snackbar/AppSnackbarContainer.vue";
const AppSnackbarContainer = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-91e33d77"], ["__file", "/home/runner/work/wisemen-components/wisemen-components/src/modules/ui/components/app/snackbar/AppSnackbarContainer.vue"]]);
const snackbarContainers = [];
const useSnackbar = () => {
  const positionToCss = (element, position) => {
    switch (position) {
      case "top-left":
        element.style.top = "4px";
        element.style.left = "4px";
        break;
      case "top-right":
        element.style.top = "4px";
        element.style.right = "4px";
        break;
      case "bottom-left":
        element.style.bottom = "4px";
        element.style.left = "4px";
        break;
      case "bottom-right":
        element.style.bottom = "4px";
        element.style.right = "4px";
        break;
    }
  };
  const clearSnackbar = (container, snackbarUuid) => {
    const snackbar = container.snackbars.value.find((snackbar2) => snackbar2.uuid === snackbarUuid);
    if (snackbar) {
      container.snackbars.value.splice(container.snackbars.value.indexOf(snackbar), 1);
      if (container.snackbars.value.length === 0) {
        setTimeout(() => {
          var _a;
          container.container.remove();
          (_a = container.render) == null ? void 0 : _a.unmount();
          snackbarContainers.splice(snackbarContainers.indexOf(container), 1);
        }, 500);
      }
    }
  };
  const renderContainer = (position) => {
    const container = document.createElement("div");
    container.id = position;
    container.style.position = "fixed";
    container.style.zIndex = "9999";
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.gap = "0.25rem";
    positionToCss(container, position);
    document.body.appendChild(container);
    let relevantContainer = snackbarContainers.find((container2) => container2.container.id === position);
    if (!relevantContainer) {
      relevantContainer = {
        container,
        div: document.createElement("div"),
        snackbars: ref([])
      };
      snackbarContainers.push(relevantContainer);
    }
    const instance = createApp({
      render: () => h(AppSnackbarContainer)
    });
    relevantContainer.render = instance;
    instance.provide("snackbarContainer", relevantContainer);
    instance.provide("clearSnackbar", clearSnackbar);
    instance.mount(container);
    return relevantContainer;
  };
  const addSnackbar = ({ message, type, time = 5e3, position = "bottom-left" }) => {
    const relevantContainer = snackbarContainers.find((container) => container.container.id === position) || renderContainer(position);
    const newSnackbarUuid = generateUuid();
    relevantContainer.snackbars.value.push({
      uuid: newSnackbarUuid,
      message,
      type,
      time
    });
    setTimeout(() => {
      clearSnackbar(relevantContainer, newSnackbarUuid);
    }, time);
  };
  return {
    addSnackbar
  };
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AppSnackbar.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const { addSnackbar } = useSnackbar();
    const handleClick = (type, position) => {
      addSnackbar({
        message: "lorem ipsum",
        type,
        position
      });
    };
    const __returned__ = { addSnackbar, handleClick };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "flex gap-1" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_AppButton = __unplugin_components_0$1;
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "App/Snackbars/AppSnackbar" }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Default" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createVNode(_component_AppButton, {
              "onComponent:click": _cache[0] || (_cache[0] = ($event) => $setup.handleClick("info", "bottom-right"))
            }, {
              default: withCtx(() => [
                createTextVNode(" Add info snackbar ")
              ]),
              _: 1
              /* STABLE */
            }),
            createVNode(_component_AppButton, {
              "onComponent:click": _cache[1] || (_cache[1] = ($event) => $setup.handleClick("success", "top-right"))
            }, {
              default: withCtx(() => [
                createTextVNode(" Add success snackbar ")
              ]),
              _: 1
              /* STABLE */
            }),
            createVNode(_component_AppButton, {
              "onComponent:click": _cache[2] || (_cache[2] = ($event) => $setup.handleClick("warning", "top-left"))
            }, {
              default: withCtx(() => [
                createTextVNode(" Add warning snackbar ")
              ]),
              _: 1
              /* STABLE */
            }),
            createVNode(_component_AppButton, {
              "onComponent:click": _cache[3] || (_cache[3] = ($event) => $setup.handleClick("error", "bottom-left"))
            }, {
              default: withCtx(() => [
                createTextVNode(" Add error snackbar ")
              ]),
              _: 1
              /* STABLE */
            })
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
_sfc_main.__file = "src/modules/ui/components/app/snackbar/AppSnackbar.story.vue";
const AppSnackbar_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/wisemen-components/wisemen-components/src/modules/ui/components/app/snackbar/AppSnackbar.story.vue"]]);
export {
  AppSnackbar_story as default
};
