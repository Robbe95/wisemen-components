import { _ as __unplugin_components_1$1 } from "./AppDropdownButton-6913f280.js";
import { _ as __unplugin_components_0 } from "./AppButton-f3d84d8e.js";
import { as as defineComponent, ba as useI18n, ax as openBlock, ay as createBlock, az as withCtx, aC as renderSlot, aB as createBaseVNode, aL as toDisplayString, aA as createVNode, aE as createTextVNode, aw as resolveComponent } from "./vendor-72f13f2a.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import "./fade.transition-ff73e3ee.js";
import "./AppIcon-81b2fcde.js";
import "./CheckmarkIcon-ef85db79.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AppConfirmButton",
  emits: ["component:confirm", "component:decline"],
  setup(__props, { expose: __expose, emit }) {
    __expose();
    const { t } = useI18n();
    const decline = (close) => {
      close();
      emit("component:decline");
    };
    const accept = (close) => {
      close();
      setTimeout(() => {
        emit("component:confirm");
      }, 200);
    };
    const __returned__ = { emit, t, decline, accept };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "whitespace-normal" };
const _hoisted_2 = { class: "flex gap-2" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_AppButton = __unplugin_components_0;
  const _component_AppDropdownButton = __unplugin_components_1$1;
  return openBlock(), createBlock(_component_AppDropdownButton, {
    "has-arrow": "",
    placement: "bottom-start"
  }, {
    button: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    panel: withCtx(({ close }) => [
      createBaseVNode(
        "div",
        _hoisted_1,
        toDisplayString($setup.t("label.confirm_text")),
        1
        /* TEXT */
      ),
      createBaseVNode("div", _hoisted_2, [
        createVNode(_component_AppButton, {
          "onComponent:click": ($event) => $setup.accept(close)
        }, {
          default: withCtx(() => [
            createTextVNode(
              toDisplayString($setup.t("label.confirm")),
              1
              /* TEXT */
            )
          ]),
          _: 2
          /* DYNAMIC */
        }, 1032, ["onComponent:click"]),
        createVNode(_component_AppButton, {
          variant: "secondary",
          "onComponent:click": ($event) => $setup.decline(close)
        }, {
          default: withCtx(() => [
            createTextVNode(
              toDisplayString($setup.t("label.cancel")),
              1
              /* TEXT */
            )
          ]),
          _: 2
          /* DYNAMIC */
        }, 1032, ["onComponent:click"])
      ])
    ]),
    _: 3
    /* FORWARDED */
  });
}
_sfc_main$1.__file = "src/modules/ui/components/app/buttons/app-confirm-button/AppConfirmButton.vue";
const __unplugin_components_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/wisemen-components/wisemen-components/src/modules/ui/components/app/buttons/app-confirm-button/AppConfirmButton.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AppConfirmButton.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const handleConfirm = () => {
      console.error("confirmed");
    };
    const __returned__ = { handleConfirm };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_AppButton = __unplugin_components_0;
  const _component_AppConfirmButton = __unplugin_components_1;
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "App/Buttons/AppConfirmButton" }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Default" }, {
        default: withCtx(() => [
          createVNode(_component_AppConfirmButton, { "onComponent:confirm": $setup.handleConfirm }, {
            default: withCtx(() => [
              createVNode(_component_AppButton, null, {
                default: withCtx(() => [
                  createTextVNode(" Delete ")
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "src/modules/ui/components/app/buttons/app-confirm-button/AppConfirmButton.story.vue";
const AppConfirmButton_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/wisemen-components/wisemen-components/src/modules/ui/components/app/buttons/app-confirm-button/AppConfirmButton.story.vue"]]);
export {
  AppConfirmButton_story as default
};
