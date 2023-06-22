import { as as defineComponent, bS as useRouter, bT as useQueryClient, aF as ref, bU as useElementVisibility, bV as useElementHover, b5 as watch, bW as queryFunctions, aw as resolveComponent, ax as openBlock, ay as createBlock, az as withCtx, aC as renderSlot, b3 as useI18n, aJ as createElementBlock, aB as createBaseVNode, aL as toDisplayString, aD as normalizeClass, bX as withModifiers, a_ as Fragment, a$ as renderList, aH as createCommentVNode, bY as useHead, aA as createVNode, bZ as routeNames, aE as createTextVNode } from "./vendor-f004de5e.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import { g as generateUuid } from "./generateUuid-c290b5d9.js";
import { _ as __unplugin_components_0 } from "./AppButton-3695a3e4.js";
import "./fade.transition-ff73e3ee.js";
import "./AppIcon-2a55f03c.js";
import "./CheckmarkIcon-3247db73.js";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "PrefetchLink",
  props: {
    to: { type: null, required: true },
    useHover: { type: Boolean, required: false, default: false }
  },
  setup(__props, { expose: __expose }) {
    var _a, _b, _c;
    __expose();
    const router = useRouter();
    const queryClient = useQueryClient();
    const chosenRoute = router.resolve({ name: __props.to });
    const prefetchData = async () => {
      var _a2, _b2;
      (_b2 = (_a2 = chosenRoute == null ? void 0 : chosenRoute.meta) == null ? void 0 : _a2.prefetchRoutes) == null ? void 0 : _b2.forEach((queryKey) => {
        queryClient.prefetchQuery({
          queryKey: [queryKey],
          queryFn: queryFunctions[queryKey],
          staleTime: 5e4
        });
      });
    };
    const routerLink = ref();
    if (((_a = chosenRoute == null ? void 0 : chosenRoute.meta) == null ? void 0 : _a.prefetchRoutes) && ((_c = (_b = chosenRoute == null ? void 0 : chosenRoute.meta) == null ? void 0 : _b.prefetchRoutes) == null ? void 0 : _c.length) > 0) {
      const isVisible = useElementVisibility(routerLink);
      const isHovering = useElementHover(routerLink);
      if (!__props.useHover) {
        watch(() => isVisible.value, () => {
          if (isVisible.value)
            prefetchData();
        }, { immediate: true });
      } else {
        watch(() => isHovering.value, () => {
          if (isHovering.value)
            prefetchData();
        }, { immediate: true });
      }
    }
    const __returned__ = { router, queryClient, chosenRoute, prefetchData, routerLink };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_RouterLink = resolveComponent("RouterLink");
  return openBlock(), createBlock(_component_RouterLink, {
    ref: "routerLink",
    to: { name: $props.to }
  }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["to"]);
}
_sfc_main$2.__file = "src/components/navigation/PrefetchLink.vue";
const __unplugin_components_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__file", "/home/runner/work/wisemen-components/wisemen-components/src/components/navigation/PrefetchLink.vue"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "FormFileUpload",
  props: {
    accept: { type: String, required: false, default: "*" },
    hasMultiple: { type: Boolean, required: false }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const { t } = useI18n();
    const uploadUuid = ref(`${generateUuid()}_upload`);
    const files = ref([]);
    const fileOverDropArea = ref(false);
    const fileUpload = (file) => {
      const fileUrl = URL.createObjectURL(file);
      const fileName = file.name;
      files.value.push({
        file,
        url: fileUrl,
        name: fileName
      });
    };
    const handleFileChange = (event) => {
      var _a;
      const file = (_a = event.target.files) == null ? void 0 : _a[0];
      if (!file)
        return;
      fileUpload(file);
    };
    const dropFile = (e) => {
      var _a;
      const droppedFile = (_a = e == null ? void 0 : e.dataTransfer) == null ? void 0 : _a.files[0];
      if (!droppedFile)
        return;
      fileUpload(droppedFile);
    };
    const __returned__ = { t, uploadUuid, files, fileOverDropArea, fileUpload, handleFileChange, dropFile };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$1 = { class: "container mx-auto py-20" };
const _hoisted_2 = ["for", "onDrop"];
const _hoisted_3 = { key: 0 };
const _hoisted_4 = { key: 1 };
const _hoisted_5 = ["src", "alt"];
const _hoisted_6 = ["id", "accept"];
const _hoisted_7 = {
  key: 0,
  class: "flex flex-wrap gap-1"
};
const _hoisted_8 = ["src", "alt"];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$1, [
    createBaseVNode("label", {
      class: normalizeClass(["flex min-h-40 w-full items-center justify-center rounded-md border border-dashed border-primary-500 bg-primary-100 p-8 text-secondary-500 transition", {
        "border-primary-700 bg-primary-100/20": $setup.fileOverDropArea
      }]),
      for: $setup.uploadUuid,
      onDragover: _cache[0] || (_cache[0] = withModifiers(() => {
      }, ["prevent"])),
      onDragenter: _cache[1] || (_cache[1] = withModifiers(($event) => $setup.fileOverDropArea = true, ["prevent"])),
      onDragleave: _cache[2] || (_cache[2] = withModifiers(($event) => $setup.fileOverDropArea = false, ["prevent"])),
      onDrop: withModifiers($setup.dropFile, ["prevent"])
    }, [
      $setup.files.length === 0 && !$props.hasMultiple ? (openBlock(), createElementBlock(
        "div",
        _hoisted_3,
        toDisplayString($setup.t("label.drop_file")),
        1
        /* TEXT */
      )) : (openBlock(), createElementBlock("div", _hoisted_4, [
        createBaseVNode("img", {
          src: $setup.files[0].url,
          alt: $setup.files[0].name,
          class: "h-full max-h-80 w-full overflow-hidden rounded-md bg-contain object-contain"
        }, null, 8, _hoisted_5)
      ]))
    ], 42, _hoisted_2),
    createBaseVNode("input", {
      id: $setup.uploadUuid,
      type: "file",
      accept: $props.accept,
      class: "h-0 w-0 overflow-hidden",
      onChange: $setup.handleFileChange
    }, null, 40, _hoisted_6),
    $props.hasMultiple ? (openBlock(), createElementBlock("div", _hoisted_7, [
      (openBlock(true), createElementBlock(
        Fragment,
        null,
        renderList($setup.files, (file) => {
          return openBlock(), createElementBlock("img", {
            key: file.url,
            src: file.url,
            alt: file.name,
            class: "h-32 w-32 object-cover"
          }, null, 8, _hoisted_8);
        }),
        128
        /* KEYED_FRAGMENT */
      ))
    ])) : createCommentVNode("v-if", true)
  ]);
}
_sfc_main$1.__file = "src/modules/ui/components/forms/file-upload/FormFileUpload.vue";
const __unplugin_components_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/wisemen-components/wisemen-components/src/modules/ui/components/forms/file-upload/FormFileUpload.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Index",
  setup(__props, { expose: __expose }) {
    __expose();
    useHead({
      title: "Test",
      meta: [
        {
          name: "description",
          content: "Dit is een test component"
        }
      ]
    });
    const isLoading = ref(false);
    const __returned__ = { isLoading, get routeNames() {
      return routeNames;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "div",
  { class: "h-[100vh]" },
  null,
  -1
  /* HOISTED */
);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_AppButton = __unplugin_components_0;
  const _component_FormFileUpload = __unplugin_components_1;
  const _component_PrefetchLink = __unplugin_components_2;
  return openBlock(), createElementBlock("div", null, [
    createVNode(_component_AppButton, {
      "onComponent:click": _cache[0] || (_cache[0] = ($event) => $setup.isLoading = !$setup.isLoading)
    }, {
      default: withCtx(() => [
        createTextVNode(" Dit is een button ")
      ]),
      _: 1
      /* STABLE */
    }),
    createVNode(_component_AppButton, { "is-ready": $setup.isLoading }, {
      default: withCtx(() => [
        createTextVNode(" Dit is een button ")
      ]),
      _: 1
      /* STABLE */
    }, 8, ["is-ready"]),
    createVNode(_component_FormFileUpload),
    _hoisted_1,
    createVNode(_component_PrefetchLink, {
      to: $setup.routeNames.EXAMPLE_INDEX,
      "use-hover": ""
    }, {
      default: withCtx(() => [
        createVNode(_component_AppButton, null, {
          default: withCtx(() => [
            createTextVNode(" Go to example ")
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      _: 1
      /* STABLE */
    }, 8, ["to"])
  ]);
}
_sfc_main.__file = "src/pages/Index.vue";
const Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/wisemen-components/wisemen-components/src/pages/Index.vue"]]);
export {
  Index as default
};
