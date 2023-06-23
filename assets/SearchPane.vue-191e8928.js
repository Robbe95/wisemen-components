import { d as defineComponent, o as openBlock, e as createElementBlock, a7 as renderSlot, n as normalizeClass, m as withKeys, c as computed, a as unref, q as createBlock, I as Icon, f as createVNode, g as createBaseVNode, z as createTextVNode, t as toDisplayString, F as Fragment, p as renderList, h as createCommentVNode, u as useCssVars, r as ref, a1 as toRefs, a3 as useRouter, w as withCtx, Y as markRaw, k as watch, bP as useFocus, bQ as refDebounced, y as withDirectives, a8 as vModelText, a6 as withModifiers, _ as __vitePreload, bR as flexsearch_bundleExports } from "./vendor-80f665be.js";
import { _ as _export_sfc, u as useScrollOnActive, B as BaseListItemLink, a as useStoryStore } from "./MobileOverlay.vue2-b0d039b1.js";
import { B as BaseEmpty } from "./BaseEmpty.vue-e11a0816.js";
import { o as onKeyboardShortcut, u as useCommandStore } from "./bundle-main-023de9db.js";
import "./GenericMountStory.vue2-b9e95e70.js";
function pipeline(a, b, c, d) {
  if (a && (b && (a = replace(a, b)), this.matcher && (a = replace(a, this.matcher)), this.stemmer && 1 < a.length && (a = replace(a, this.stemmer)), d && 1 < a.length && (a = collapse(a)), c || "" === c)) {
    const b2 = a.split(c);
    return this.filter ? filter$1(b2, this.filter) : b2;
  }
  return a;
}
const regex_whitespace = /[\p{Z}\p{S}\p{P}\p{C}]+/u;
const regex_normalize = /[\u0300-\u036f]/g;
function normalize(a) {
  return a.normalize && (a = a.normalize("NFD").replace(regex_normalize, "")), a;
}
function replace(a, b) {
  for (let c = 0, d = b.length; c < d && (a = a.replace(b[c], b[c + 1]), !!a); c += 2)
    ;
  return a;
}
function regex(a) {
  return new RegExp(a, "g");
}
function collapse(a) {
  let b = "", c = "";
  for (let d, e = 0, f = a.length; e < f; e++)
    (d = a[e]) !== c && (b += c = d);
  return b;
}
function filter$1(a, b) {
  const c = a.length, d = [];
  for (let e = 0, f = 0; e < c; e++) {
    const c2 = a[e];
    c2 && !b[c2] && (d[f++] = c2);
  }
  return d;
}
const regex_a = regex("[àáâãäå]"), regex_e = regex("[èéêë]"), regex_i = regex("[ìíîï]"), regex_o = regex("[òóôõöő]"), regex_u = regex("[ùúûüű]"), regex_y = regex("[ýŷÿ]"), regex_n = regex("ñ"), regex_c = regex("[çc]"), regex_s = regex("ß"), regex_and = regex(" & "), pairs$1 = [regex_a, "a", regex_e, "e", regex_i, "i", regex_o, "o", regex_u, "u", regex_y, "y", regex_n, "n", regex_c, "k", regex_s, "s", regex_and, " and "];
function encode$2(a) {
  return a = "" + a, pipeline.call(this, normalize(a).toLowerCase(), !a.normalize && pairs$1, regex_whitespace, false);
}
const regex_strip = /[^a-z0-9]+/, soundex = { b: "p", v: "f", w: "f", z: "s", x: "s", ß: "s", d: "t", n: "m", c: "k", g: "k", j: "k", q: "k", i: "e", y: "e", u: "o" };
function encode$1(a) {
  a = encode$2.call(this, a).join(" ");
  const b = [];
  if (a) {
    const c = a.split(regex_strip), d = c.length;
    for (let e, f = 0, g = 0; f < d; f++)
      if ((a = c[f]) && (!this.filter || !this.filter[a])) {
        e = a[0];
        let c2 = soundex[e] || e, d2 = c2;
        for (let b2 = 1; b2 < a.length; b2++) {
          e = a[b2];
          const f2 = soundex[e] || e;
          f2 && f2 !== d2 && (c2 += f2, d2 = f2);
        }
        b[g++] = c2;
      }
  }
  return b;
}
const charset = { encode, rtl: false, tokenize: "" };
const regex_ae = regex("ae"), regex_oe = regex("oe"), regex_sh = regex("sh"), regex_th = regex("th"), regex_ph = regex("ph"), regex_pf = regex("pf"), pairs = [regex_ae, "a", regex_oe, "o", regex_sh, "s", regex_th, "t", regex_ph, "f", regex_pf, "f", regex("(?![aeo])h(?![aeo])"), "", regex("(?!^[aeo])h(?!^[aeo])"), ""];
function encode(a, b) {
  return a && (a = encode$1.call(this, a).join(" "), 2 < a.length && (a = replace(a, pairs)), !b && (1 < a.length && (a = collapse(a)), a && (a = a.split(" ")))), a;
}
const filter = ["a", "about", "above", "after", "again", "against", "all", "also", "am", "an", "and", "any", "are", "aren't", "as", "at", "be", "because", "been", "before", "being", "below", "both", "but", "by", "can", "cannot", "can't", "come", "could", "couldn't", "did", "didn't", "do", "does", "doesn't", "doing", "dont", "down", "during", "each", "even", "few", "first", "for", "from", "further", "get", "go", "had", "hadn't", "has", "hasn't", "have", "haven't", "having", "he", "hed", "her", "here", "here's", "hers", "herself", "hes", "him", "himself", "his", "how", "how's", "i", "id", "if", "ill", "im", "in", "into", "is", "isn't", "it", "it's", "itself", "i've", "just", "know", "let's", "like", "make", "me", "more", "most", "mustn't", "my", "myself", "new", "no", "nor", "not", "now", "of", "off", "on", "once", "only", "or", "other", "ought", "our", "our's", "ourselves", "out", "over", "own", "same", "say", "see", "shan't", "she", "she'd", "shell", "shes", "should", "shouldn't", "so", "some", "such", "than", "that", "that's", "the", "their", "theirs", "them", "themselves", "then", "there", "there's", "these", "they", "they'd", "they'll", "they're", "they've", "this", "those", "through", "time", "to", "too", "until", "up", "us", "very", "want", "was", "wasn't", "way", "we", "wed", "well", "were", "weren't", "we've", "what", "what's", "when", "when's", "where", "where's", "which", "while", "who", "whom", "who's", "why", "why's", "will", "with", "won't", "would", "wouldn't", "you", "you'd", "you'll", "your", "you're", "your's", "yourself", "yourselves", "you've"];
const stemmer = { ational: "ate", iveness: "ive", fulness: "ful", ousness: "ous", ization: "ize", tional: "tion", biliti: "ble", icate: "ic", ative: "", alize: "al", iciti: "ic", entli: "ent", ousli: "ous", alism: "al", ation: "ate", aliti: "al", iviti: "ive", ement: "", enci: "ence", anci: "ance", izer: "ize", alli: "al", ator: "ate", logi: "log", ical: "ic", ance: "", ence: "", ness: "", able: "", ible: "", ment: "", eli: "e", bli: "ble", ful: "", ant: "", ent: "", ism: "", ate: "", iti: "", ous: "", ive: "", ize: "", al: "", ou: "", er: "", ic: "" };
const matcher = {};
const language = { filter, stemmer, matcher };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "BaseListItem",
  props: {
    isActive: { type: Boolean }
  },
  emits: ["navigate"],
  setup(__props, { emit }) {
    function handleNavigate() {
      emit("navigate");
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("a", {
        class: normalizeClass(["istoire-base-list-ite htw-flex htw-items-center htw-gap-2 htw-text-gray-900 dark:htw-text-gray-100", [
          _ctx.$attrs.class,
          __props.isActive ? "active htw-bg-primary-500 hover:htw-bg-primary-600 htw-text-white dark:htw-text-black" : "hover:htw-bg-primary-100 dark:hover:htw-bg-primary-900"
        ]]),
        onClick: _cache[0] || (_cache[0] = ($event) => handleNavigate()),
        onKeyup: [
          _cache[1] || (_cache[1] = withKeys(($event) => handleNavigate(), ["enter"])),
          _cache[2] || (_cache[2] = withKeys(($event) => handleNavigate(), ["space"]))
        ]
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 34);
    };
  }
});
const _hoisted_1$3 = ["src", "alt"];
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "BaseIcon",
  props: {
    icon: null
  },
  setup(__props) {
    const props = __props;
    const isUrl = computed(() => props.icon.startsWith("http") || props.icon.startsWith("data:image") || props.icon.startsWith(".") || props.icon.startsWith("/"));
    return (_ctx, _cache) => {
      return unref(isUrl) ? (openBlock(), createElementBlock("img", {
        key: 0,
        src: __props.icon,
        alt: __props.icon,
        class: "histoire-base-icon"
      }, null, 8, _hoisted_1$3)) : (openBlock(), createBlock(unref(Icon), {
        key: 1,
        icon: __props.icon,
        class: "histoire-base-icon"
      }, null, 8, ["icon"]));
    };
  }
});
const BaseIcon = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-74182813"]]);
const _hoisted_1$2 = { class: "htw-flex-1" };
const _hoisted_2 = { class: "htw-flex" };
const _hoisted_3 = { class: "htw-ml-auto htw-opacity-40" };
const _hoisted_4 = {
  key: 0,
  class: "htw-flex htw-items-center htw-gap-0.5 htw-opacity-60"
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "SearchItemContent",
  props: {
    result: null,
    selected: { type: Boolean }
  },
  setup(__props) {
    const defaultIcons = {
      story: "carbon:cube",
      variant: "carbon:cube"
    };
    const kindLabels = {
      story: "Story",
      variant: "Variant",
      command: "Command"
    };
    return (_ctx, _cache) => {
      var _a;
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(BaseIcon, {
          icon: __props.result.icon ?? defaultIcons[__props.result.kind],
          class: normalizeClass(["htw-w-4 htw-h-4", [
            !__props.selected ? [
              __props.result.iconColor ? "bind-icon-color" : {
                "htw-text-primary-500": __props.result.kind === "story",
                "htw-text-gray-500": __props.result.kind === "variant"
              }
            ] : [],
            {
              "colorize-black": __props.selected
            }
          ]])
        }, null, 8, ["icon", "class"]),
        createBaseVNode("div", _hoisted_1$2, [
          createBaseVNode("div", _hoisted_2, [
            createTextVNode(toDisplayString(__props.result.title) + " ", 1),
            createBaseVNode("span", _hoisted_3, toDisplayString(kindLabels[__props.result.kind]), 1)
          ]),
          ((_a = __props.result.path) == null ? void 0 : _a.length) ? (openBlock(), createElementBlock("div", _hoisted_4, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(__props.result.path, (p, index) => {
              return openBlock(), createElementBlock("div", {
                key: index,
                class: "htw-flex htw-items-center htw-gap-0.5"
              }, [
                index > 0 ? (openBlock(), createBlock(unref(Icon), {
                  key: 0,
                  icon: "carbon:chevron-right",
                  class: "htw-w-4 htw-h-4 htw-mt-0.5 htw-opacity-50"
                })) : createCommentVNode("", true),
                createBaseVNode("span", null, toDisplayString(p), 1)
              ]);
            }), 128))
          ])) : createCommentVNode("", true)
        ])
      ], 64);
    };
  }
});
const _hoisted_1$1 = ["data-selected"];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SearchItem",
  props: {
    result: {
      type: Object,
      required: true
    },
    selected: {
      type: Boolean,
      default: false
    }
  },
  emits: {
    close: () => true
  },
  setup(__props, { emit }) {
    const props = __props;
    useCssVars((_ctx) => ({
      "a8c1277e": __props.result.iconColor
    }));
    const el = ref();
    const { selected } = toRefs(props);
    useScrollOnActive(selected, el);
    const router = useRouter();
    onKeyboardShortcut(["enter"], () => {
      if (!props.selected)
        return;
      action();
    });
    function action(fromClick = false) {
      if ("route" in props.result && !fromClick) {
        router.push(props.result.route);
      }
      if ("onActivate" in props.result) {
        props.result.onActivate();
      }
      emit("close");
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "el",
        ref: el,
        class: "histoire-search-item",
        "data-test-id": "search-item",
        "data-selected": unref(selected) ? "" : void 0
      }, [
        "route" in __props.result ? (openBlock(), createBlock(BaseListItemLink, {
          key: 0,
          to: __props.result.route,
          "is-active": unref(selected),
          class: "htw-px-6 htw-py-4 htw-gap-4",
          onNavigate: _cache[0] || (_cache[0] = ($event) => action(true))
        }, {
          default: withCtx(() => [
            createVNode(_sfc_main$2, {
              result: __props.result,
              selected: unref(selected)
            }, null, 8, ["result", "selected"])
          ]),
          _: 1
        }, 8, ["to", "is-active"])) : createCommentVNode("", true),
        "onActivate" in __props.result ? (openBlock(), createBlock(_sfc_main$4, {
          key: 1,
          "is-active": unref(selected),
          class: "htw-px-6 htw-py-4 htw-gap-4",
          onNavigate: _cache[1] || (_cache[1] = ($event) => action(true))
        }, {
          default: withCtx(() => [
            createVNode(_sfc_main$2, {
              result: __props.result,
              selected: unref(selected)
            }, null, 8, ["result", "selected"])
          ]),
          _: 1
        }, 8, ["is-active"])) : createCommentVNode("", true)
      ], 8, _hoisted_1$1);
    };
  }
});
const SearchItem = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-6c8e9661"]]);
let searchData$1 = { "index": { "reg": '{"0":1,"1":1,"2":1,"3":1,"4":1,"5":1,"6":1,"7":1,"8":1,"9":1,"10":1,"11":1,"12":1,"13":1,"14":1,"15":1,"16":1,"17":1,"18":1,"19":1,"20":1,"21":1,"22":1,"23":1,"24":1,"25":1,"26":1,"27":1,"28":1,"29":1,"30":1,"31":1,"32":1,"33":1,"34":1,"35":1,"36":1,"37":1,"38":1,"39":1,"40":1,"41":1,"42":1,"43":1,"44":1,"45":1,"46":1,"47":1,"48":1,"49":1,"50":1,"51":1,"52":1,"53":1,"54":1,"55":1,"56":1,"57":1,"58":1,"59":1,"60":1,"61":1,"62":1,"63":1,"64":1,"65":1,"66":1,"67":1,"68":1,"69":1,"70":1,"71":1,"72":1,"73":1,"74":1,"75":1,"76":1,"77":1,"78":1,"79":1,"80":1,"81":1,"82":1,"83":1,"84":1,"85":1}', "text.cfg": '{"doc":0,"opt":1}', "text.map": '[{"a":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,59,60,61,62,63,64,65,66,67],"ap":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,59,60,61,62,63,64,65,66,67],"f":[33,34,35,36,37,38,39,40,41,42,43,44],"fo":[33,34,35,36,37,40,41,42,43,44],"for":[33,34,35,36,37,40,41,42,43,44],"form":[33,34,35,36,37,40,41,42,43,44],"fe":[38,39],"fel":[38,39],"felt":[38,39],"s":[45,46,47,48,49,50,51,52,53,54,55,56,57,58],"se":[45,46,47,48,49,50,51],"sel":[45,46,47,48,49,50,51],"sele":[45,46,47,48,49,50,51],"selek":[45,46,47,48,49,50,51],"selekt":[45,46,47,48,49,50,51],"sl":[52,53,54,55,56,57,58],"sle":[52,53,54,55,56,57,58],"slet":[52,53,54,55,56,57,58],"slete":[52,53,54,55,56,57,58],"sleter":[52,53,54,55,56,57,58],"e":[68],"em":[68],"emt":[68],"emtr":[68],"emtro":[68],"emtrot":[68],"emtroto":[68],"emtrotok":[68],"emtrotokt":[68],"emtrotokte":[68],"emtrotokteo":[68],"emtrotokteom":[68],"t":[69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85],"ta":[69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85],"tal":[69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85],"talf":[69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85],"talfe":[69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85],"talfem":[69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85],"talfemt":[69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85]},{"k":[0,1,33,34,35,36,37,61,62],"ko":[0,1,61,62],"kol":[0,1],"kola":[0,1],"kolap":[0,1],"kolaps":[0,1],"kolapse":[0,1],"t":[2,3,4,5,6,23,24,25,26,27,28,29,30,31,32,39,46,53,54,55,63,64,65],"te":[2,3,4,5,6,28,29,39,46,53,54,55,71],"tef":[2,3,4,5,6,39,46,53],"tefe":[2,3,4,5,6],"tefet":[2,3,4,5,6],"tefete":[2,3,4,5,6],"tefeter":[2,3,4,5,6],"e":[7,8,9,48,66,67,84],"em":[7,8,9,48],"ema":[7,8,9],"emak":[7,8,9],"emake":[7,8,9],"l":[10,11,47,78,79],"lo":[10,11,47],"loa":[10,11,47],"loat":[10,11,47],"loate":[10,11,47],"loater":[10,11],"m":[12,13,49,57,74],"mo":[12,13,49],"mot":[12,13],"mota":[12,13],"motal":[12,13],"p":[14,15,16,17,56,59,60,70,72,73,81,82],"pa":[14,15,70,73],"pak":[14,15,70],"pake":[14,15],"pakem":[14,15],"pakema":[14,15],"pakemat":[14,15],"pakemate":[14,15],"pakemateo":[14,15],"pakemateom":[14,15],"po":[16,17,59,60,72,81,82],"pop":[16,17],"popo":[16,17],"popof":[16,17],"popofe":[16,17],"popofer":[16,17],"s":[18,19,20,21,22],"se":[18,19,20],"set":[18,19,20],"sete":[18,19,20],"setep":[18,19,20],"setepa":[18,19,20],"setepar":[18,19,20],"sm":[21,22],"sma":[21,22],"smak":[21,22],"smakp":[21,22],"smakpa":[21,22],"smakpar":[21,22],"ta":[23,24,25,26,27],"tap":[23,24,25,26,27],"tapl":[23,24],"taple":[23,24],"taps":[25,26,27],"tes":[28,29,54,55,71],"test":[28,29,71],"to":[30,31,32],"tol":[30,31,32],"tolt":[30,31,32],"tolte":[30,31,32],"toltep":[30,31,32],"ke":[33,34,35,36,37],"kek":[33,34,35,36,37],"kekp":[33,34,35,36,37],"kekpo":[33,34,35,36,37],"kekpos":[33,34,35,36,37],"tefa":[39,46,53],"tefao":[39,46,53],"tefaol":[39,46,53],"tefaolt":[39,46,53],"r":[40,41,42,43,44],"ra":[40,41,42,43,44],"rat":[40,41,42,43,44],"rate":[40,41,42,43,44],"rateo":[40,41,42,43,44],"loatem":[47],"loatemk":[47],"emp":[48],"empt":[48],"empte":[48],"mol":[49],"molt":[49],"molte":[49],"moltep":[49],"moltepl":[49],"molteple":[49],"sea":[50,51],"sear":[50,51],"seark":[50,51],"tesa":[54,55],"tesap":[54,55],"tesapl":[54,55],"tesaple":[54,55],"tesaplet":[54,55],"pe":[56],"per":[56],"perk":[56],"perke":[56],"perkem":[56],"perkemt":[56],"me":[57],"mea":[57],"meas":[57],"measo":[57],"measor":[57],"measore":[57],"measorem":[57],"measoreme":[57],"measoremem":[57],"measorememt":[57],"pot":[59,60],"poto":[59,60],"potom":[59,60],"kom":[61,62],"komf":[61,62],"komfe":[61,62],"komfer":[61,62],"komferm":[61,62],"tr":[63,64,65,80],"tro":[63,64,65,80],"trop":[63,64,65,80],"tropt":[63,64,65],"tropto":[63,64,65],"troptof":[63,64,65],"troptofm":[63,64,65],"ek":[66,67,84],"eko":[66,67],"ekom":[66,67],"pakr":[70],"pakro":[70],"pakrom":[70],"pakromt":[70],"por":[72,81,82],"port":[72,81,82],"porte":[72,81,82],"porter":[72,81,82],"pat":[73],"pate":[73],"patem":[73],"patemk":[73],"ma":[74],"mar":[74],"mark":[74],"marke":[74],"markem":[74],"f":[75,76,77,83,85],"fo":[75,76,77,85],"fom":[75,76,77],"fomt":[75,76,77],"le":[78,79],"let":[78],"lete":[78],"leter":[78],"lem":[79],"leme":[79],"fe":[83],"fet":[83],"ekt":[84],"fol":[85]},{"t":[1,8,11,13,15,17,19,22,34,41,60],"te":[1,8,11,13,15,17,19,22,24,26,31,34,41,60],"tef":[1,8,11,13,15,17,19,22,24,26,29,31,34,41,60],"tefa":[1,3,8,11,13,15,17,19,22,24,26,29,31,34,41,60],"tefao":[1,3,8,11,13,15,17,19,22,24,26,29,31,34,41,60],"tefaol":[1,3,8,11,13,15,17,19,22,24,26,29,31,34,41,60],"tefaolt":[1,3,8,11,13,15,17,19,22,24,26,29,31,34,41,60],"f":[4,5,6,27,51,54,82],"fe":[4,5,6,27,42,43,44,51,76,82],"fet":[4,5,6,42,43,44,51,82],"p":[9,57,61,62,63,64,65,66,67],"pr":[9,56,57],"pre":[9],"pref":[9],"prefe":[9],"prefef":[9],"m":[20],"me":[20],"mem":[20],"meme":[20],"memef":[20],"memefe":[20],"memefet":[20],"fer":[27],"fert":[27],"ferte":[27],"fertek":[27],"ferteka":[27],"fertekal":[27],"l":[32],"le":[32],"lef":[32],"left":[32],"kr":[35,36,37,58],"kro":[35,36,37,58],"krop":[35,36,37,58],"fa":[54,77],"fal":[54],"falo":[54],"pro":[56,57],"prok":[56,57],"prokr":[56,57],"prokre":[56,57],"prokres":[56,57],"k":[58,70,71,72,85],"krops":[58],"po":[61,62,63,64,65,66,67],"pot":[61,62,63,64,65,66,67],"poto":[61,62,63,64,65,66,67],"potom":[61,62,63,64,65,66,67],"ko":[70,71,72,85],"kol":[70,71,72],"kolo":[70,71,72],"kolor":[70,71,72],"s":[75,78,80],"se":[75],"ses":[75],"sese":[75],"fek":[76],"fekt":[76],"fam":[77],"fame":[77],"famel":[77],"famele":[77],"sp":[78],"spa":[78],"spak":[78],"spake":[78],"spakem":[78],"spakemk":[78],"e":[79],"ek":[79],"ekt":[79],"sa":[80],"sat":[80],"sato":[80],"satof":[80],"r":[81],"ra":[81],"rat":[81],"rate":[81],"rateo":[81],"rateos":[81],"kom":[85],"komf":[85],"komfe":[85],"komfek":[85]},{"k":[4,5,6],"ko":[4,5,6],"kom":[4,5,6],"komt":[4,5,6],"komte":[4,5,6],"komtem":[4,5,6],"komtemt":[4,5,6],"fe":[36,37,57],"fet":[36,37,57],"t":[42,62,67],"te":[42,62,64,67],"tet":[42],"tetl":[42],"tetle":[42],"l":[43,65],"la":[43],"lap":[43],"lape":[43],"lapel":[43],"s":[44],"sl":[44],"slo":[44],"slot":[44],"o":[51],"op":[51],"opk":[51],"opke":[51],"opkek":[51],"opkekt":[51],"opkekts":[51],"f":[57],"tef":[62,64,67],"tefa":[62,64,67],"tefao":[62,64,67],"tefaol":[62,64,67],"tefaolt":[62,64,67],"le":[65],"les":[65],"lest":[65]},{"m":[5],"me":[5],"met":[5],"metl":[5],"metle":[5],"e":[6],"em":[6],"emt":[6],"l":[36],"la":[36],"lap":[36],"lape":[36],"lapel":[36],"lapels":[36],"o":[37],"op":[37],"opk":[37],"opke":[37],"opkek":[37],"opkekt":[37],"opkekts":[37],"ma":[57],"mas":[57]},{"l":[57],"la":[57],"lap":[57],"lape":[57],"lapel":[57]},{},{},{}]', "text.ctx": "[{}]" }, "idMap": { "0": { "id": "src-modules-ui-components-app-collapse-appcollapse-story-vue", "kind": "story" }, "1": { "id": "src-modules-ui-components-app-collapse-appcollapse-story-vue:src-modules-ui-components-app-collapse-appcollapse-story-vue-0", "kind": "variant" }, "2": { "id": "src-modules-ui-components-app-divider-appdivider-story-vue", "kind": "story" }, "3": { "id": "src-modules-ui-components-app-divider-appdivider-story-vue:src-modules-ui-components-app-divider-appdivider-story-vue-0", "kind": "variant" }, "4": { "id": "src-modules-ui-components-app-divider-appdivider-story-vue:src-modules-ui-components-app-divider-appdivider-story-vue-1", "kind": "variant" }, "5": { "id": "src-modules-ui-components-app-divider-appdivider-story-vue:src-modules-ui-components-app-divider-appdivider-story-vue-2", "kind": "variant" }, "6": { "id": "src-modules-ui-components-app-divider-appdivider-story-vue:src-modules-ui-components-app-divider-appdivider-story-vue-3", "kind": "variant" }, "7": { "id": "src-modules-ui-components-app-image-appimage-story-vue", "kind": "story" }, "8": { "id": "src-modules-ui-components-app-image-appimage-story-vue:src-modules-ui-components-app-image-appimage-story-vue-0", "kind": "variant" }, "9": { "id": "src-modules-ui-components-app-image-appimage-story-vue:src-modules-ui-components-app-image-appimage-story-vue-1", "kind": "variant" }, "10": { "id": "src-modules-ui-components-app-loaders-apploader-story-vue", "kind": "story" }, "11": { "id": "src-modules-ui-components-app-loaders-apploader-story-vue:src-modules-ui-components-app-loaders-apploader-story-vue-0", "kind": "variant" }, "12": { "id": "src-modules-ui-components-app-modal-appmodal-story-vue", "kind": "story" }, "13": { "id": "src-modules-ui-components-app-modal-appmodal-story-vue:src-modules-ui-components-app-modal-appmodal-story-vue-0", "kind": "variant" }, "14": { "id": "src-modules-ui-components-app-pagination-apppagination-story-vue", "kind": "story" }, "15": { "id": "src-modules-ui-components-app-pagination-apppagination-story-vue:src-modules-ui-components-app-pagination-apppagination-story-vue-0", "kind": "variant" }, "16": { "id": "src-modules-ui-components-app-popover-apppopover-story-vue", "kind": "story" }, "17": { "id": "src-modules-ui-components-app-popover-apppopover-story-vue:src-modules-ui-components-app-popover-apppopover-story-vue-0", "kind": "variant" }, "18": { "id": "src-modules-ui-components-app-sidebar-appsidebar-story-vue", "kind": "story" }, "19": { "id": "src-modules-ui-components-app-sidebar-appsidebar-story-vue:src-modules-ui-components-app-sidebar-appsidebar-story-vue-0", "kind": "variant" }, "20": { "id": "src-modules-ui-components-app-sidebar-appsidebar-story-vue:src-modules-ui-components-app-sidebar-appsidebar-story-vue-1", "kind": "variant" }, "21": { "id": "src-modules-ui-components-app-snackbar-appsnackbar-story-vue", "kind": "story" }, "22": { "id": "src-modules-ui-components-app-snackbar-appsnackbar-story-vue:src-modules-ui-components-app-snackbar-appsnackbar-story-vue-0", "kind": "variant" }, "23": { "id": "src-modules-ui-components-app-table-apptable-story-vue", "kind": "story" }, "24": { "id": "src-modules-ui-components-app-table-apptable-story-vue:src-modules-ui-components-app-table-apptable-story-vue-0", "kind": "variant" }, "25": { "id": "src-modules-ui-components-app-tabs-apptabs-story-vue", "kind": "story" }, "26": { "id": "src-modules-ui-components-app-tabs-apptabs-story-vue:src-modules-ui-components-app-tabs-apptabs-story-vue-0", "kind": "variant" }, "27": { "id": "src-modules-ui-components-app-tabs-apptabs-story-vue:src-modules-ui-components-app-tabs-apptabs-story-vue-1", "kind": "variant" }, "28": { "id": "src-modules-ui-components-app-text-apptext-story-vue", "kind": "story" }, "29": { "id": "src-modules-ui-components-app-text-apptext-story-vue:src-modules-ui-components-app-text-apptext-story-vue-0", "kind": "variant" }, "30": { "id": "src-modules-ui-components-app-tooltip-apptooltip-story-vue", "kind": "story" }, "31": { "id": "src-modules-ui-components-app-tooltip-apptooltip-story-vue:src-modules-ui-components-app-tooltip-apptooltip-story-vue-0", "kind": "variant" }, "32": { "id": "src-modules-ui-components-app-tooltip-apptooltip-story-vue:src-modules-ui-components-app-tooltip-apptooltip-story-vue-1", "kind": "variant" }, "33": { "id": "src-modules-ui-components-forms-checkbox-formcheckbox-story-vue", "kind": "story" }, "34": { "id": "src-modules-ui-components-forms-checkbox-formcheckbox-story-vue:src-modules-ui-components-forms-checkbox-formcheckbox-story-vue-0", "kind": "variant" }, "35": { "id": "src-modules-ui-components-forms-checkbox-formcheckbox-story-vue:src-modules-ui-components-forms-checkbox-formcheckbox-story-vue-1", "kind": "variant" }, "36": { "id": "src-modules-ui-components-forms-checkbox-formcheckbox-story-vue:src-modules-ui-components-forms-checkbox-formcheckbox-story-vue-2", "kind": "variant" }, "37": { "id": "src-modules-ui-components-forms-checkbox-formcheckbox-story-vue:src-modules-ui-components-forms-checkbox-formcheckbox-story-vue-3", "kind": "variant" }, "38": { "id": "src-modules-ui-components-forms-field-forminputfield-story-vue", "kind": "story" }, "39": { "id": "src-modules-ui-components-forms-field-forminputfield-story-vue:src-modules-ui-components-forms-field-forminputfield-story-vue-0", "kind": "variant" }, "40": { "id": "src-modules-ui-components-forms-radio-formradio-story-vue", "kind": "story" }, "41": { "id": "src-modules-ui-components-forms-radio-formradio-story-vue:src-modules-ui-components-forms-radio-formradio-story-vue-0", "kind": "variant" }, "42": { "id": "src-modules-ui-components-forms-radio-formradio-story-vue:src-modules-ui-components-forms-radio-formradio-story-vue-1", "kind": "variant" }, "43": { "id": "src-modules-ui-components-forms-radio-formradio-story-vue:src-modules-ui-components-forms-radio-formradio-story-vue-2", "kind": "variant" }, "44": { "id": "src-modules-ui-components-forms-radio-formradio-story-vue:src-modules-ui-components-forms-radio-formradio-story-vue-3", "kind": "variant" }, "45": { "id": "src-modules-ui-components-forms-select-formselect-story-vue", "kind": "story" }, "46": { "id": "src-modules-ui-components-forms-select-formselect-story-vue:src-modules-ui-components-forms-select-formselect-story-vue-0", "kind": "variant" }, "47": { "id": "src-modules-ui-components-forms-select-formselect-story-vue:src-modules-ui-components-forms-select-formselect-story-vue-1", "kind": "variant" }, "48": { "id": "src-modules-ui-components-forms-select-formselect-story-vue:src-modules-ui-components-forms-select-formselect-story-vue-2", "kind": "variant" }, "49": { "id": "src-modules-ui-components-forms-select-formselect-story-vue:src-modules-ui-components-forms-select-formselect-story-vue-3", "kind": "variant" }, "50": { "id": "src-modules-ui-components-forms-select-formselect-story-vue:src-modules-ui-components-forms-select-formselect-story-vue-4", "kind": "variant" }, "51": { "id": "src-modules-ui-components-forms-select-formselect-story-vue:src-modules-ui-components-forms-select-formselect-story-vue-5", "kind": "variant" }, "52": { "id": "src-modules-ui-components-forms-slider-formslider-story-vue", "kind": "story" }, "53": { "id": "src-modules-ui-components-forms-slider-formslider-story-vue:src-modules-ui-components-forms-slider-formslider-story-vue-0", "kind": "variant" }, "54": { "id": "src-modules-ui-components-forms-slider-formslider-story-vue:src-modules-ui-components-forms-slider-formslider-story-vue-1", "kind": "variant" }, "55": { "id": "src-modules-ui-components-forms-slider-formslider-story-vue:src-modules-ui-components-forms-slider-formslider-story-vue-2", "kind": "variant" }, "56": { "id": "src-modules-ui-components-forms-slider-formslider-story-vue:src-modules-ui-components-forms-slider-formslider-story-vue-3", "kind": "variant" }, "57": { "id": "src-modules-ui-components-forms-slider-formslider-story-vue:src-modules-ui-components-forms-slider-formslider-story-vue-4", "kind": "variant" }, "58": { "id": "src-modules-ui-components-forms-slider-formslider-story-vue:src-modules-ui-components-forms-slider-formslider-story-vue-5", "kind": "variant" }, "59": { "id": "src-modules-ui-components-app-buttons-app-button-appbutton-story-vue", "kind": "story" }, "60": { "id": "src-modules-ui-components-app-buttons-app-button-appbutton-story-vue:src-modules-ui-components-app-buttons-app-button-appbutton-story-vue-0", "kind": "variant" }, "61": { "id": "src-modules-ui-components-app-buttons-app-confirm-button-appconfirmbutton-story-vue", "kind": "story" }, "62": { "id": "src-modules-ui-components-app-buttons-app-confirm-button-appconfirmbutton-story-vue:src-modules-ui-components-app-buttons-app-confirm-button-appconfirmbutton-story-vue-0", "kind": "variant" }, "63": { "id": "src-modules-ui-components-app-buttons-app-dropdown-button-appdropdownbutton-story-vue", "kind": "story" }, "64": { "id": "src-modules-ui-components-app-buttons-app-dropdown-button-appdropdownbutton-story-vue:src-modules-ui-components-app-buttons-app-dropdown-button-appdropdownbutton-story-vue-0", "kind": "variant" }, "65": { "id": "src-modules-ui-components-app-buttons-app-dropdown-button-appdropdownbutton-story-vue:src-modules-ui-components-app-buttons-app-dropdown-button-appdropdownbutton-story-vue-1", "kind": "variant" }, "66": { "id": "src-modules-ui-components-app-buttons-app-icon-button-appiconbutton-story-vue", "kind": "story" }, "67": { "id": "src-modules-ui-components-app-buttons-app-icon-button-appiconbutton-story-vue:src-modules-ui-components-app-buttons-app-icon-button-appiconbutton-story-vue-0", "kind": "variant" }, "68": { "id": "docs-introduction-story-js", "kind": "story" }, "69": { "id": "tailwind", "kind": "story" }, "70": { "id": "tailwind:background-color", "kind": "variant" }, "71": { "id": "tailwind:text-color", "kind": "variant" }, "72": { "id": "tailwind:border-color", "kind": "variant" }, "73": { "id": "tailwind:padding", "kind": "variant" }, "74": { "id": "tailwind:margin", "kind": "variant" }, "75": { "id": "tailwind:font-size", "kind": "variant" }, "76": { "id": "tailwind:font-weight", "kind": "variant" }, "77": { "id": "tailwind:font-family", "kind": "variant" }, "78": { "id": "tailwind:letter-spacing", "kind": "variant" }, "79": { "id": "tailwind:line-height", "kind": "variant" }, "80": { "id": "tailwind:drop-shadow", "kind": "variant" }, "81": { "id": "tailwind:border-radius", "kind": "variant" }, "82": { "id": "tailwind:border-width", "kind": "variant" }, "83": { "id": "tailwind:width", "kind": "variant" }, "84": { "id": "tailwind:height", "kind": "variant" }, "85": { "id": "tailwind:full-config", "kind": "variant" } } };
const searchData = markRaw(searchData$1);
function useSelection(list) {
  const selectedIndex = ref(0);
  watch(list, () => {
    selectedIndex.value = 0;
  });
  function selectNext() {
    selectedIndex.value++;
    if (selectedIndex.value > list.value.length - 1) {
      selectedIndex.value = 0;
    }
  }
  function selectPrevious() {
    selectedIndex.value--;
    if (selectedIndex.value < 0) {
      selectedIndex.value = list.value.length - 1;
    }
  }
  return {
    selectedIndex: computed(() => selectedIndex.value),
    selectNext,
    selectPrevious
  };
}
const _hoisted_1 = {
  key: 1,
  class: "htw-max-h-[400px] htw-overflow-y-auto htw-rounded-b-lg"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SearchPane",
  props: {
    shown: {
      type: Boolean,
      default: false
    }
  },
  emits: {
    close: () => true
  },
  setup(__props, { emit }) {
    const props = __props;
    const DocSearchData = () => __vitePreload(() => import("./search-docs-data-5e7a1036.js"), true ? ["assets/search-docs-data-5e7a1036.js","assets/vendor-80f665be.js"] : void 0);
    function close() {
      emit("close");
    }
    const input = ref();
    const { focused } = useFocus(input, {
      initialValue: true
    });
    watch(() => props.shown, (value) => {
      if (value) {
        requestAnimationFrame(() => {
          focused.value = true;
          input.value.select();
        });
      }
    });
    const searchInputText = ref("");
    const rateLimitedSearch = refDebounced(searchInputText, 50);
    const storyStore = useStoryStore();
    let titleSearchIndex;
    let titleIdMap;
    function createIndex() {
      return new flexsearch_bundleExports.Document({
        preset: "match",
        document: {
          id: "id",
          index: [
            "text"
          ]
        },
        worker: true,
        charset,
        language,
        tokenize: "forward"
      });
    }
    async function loadSearchIndex(data) {
      titleSearchIndex = createIndex();
      for (const key of Object.keys(data.index)) {
        await titleSearchIndex.import(key, data.index[key]);
      }
      titleIdMap = data.idMap;
    }
    loadSearchIndex(searchData);
    let docSearchIndex;
    let docIdMap;
    async function loadDocSearchIndex() {
      async function load(data) {
        docSearchIndex = createIndex();
        for (const key of Object.keys(data.index)) {
          await docSearchIndex.import(key, data.index[key]);
        }
        docIdMap = data.idMap;
        if (rateLimitedSearch.value) {
          searchOnDocField(rateLimitedSearch.value);
        }
      }
      const searchDataModule = await DocSearchData();
      load(searchDataModule.searchData);
      searchDataModule.onUpdate((searchData2) => {
        load(searchData2);
      });
    }
    loadDocSearchIndex();
    const titleResults = ref([]);
    watch(rateLimitedSearch, async (value) => {
      const list = [];
      const raw = await titleSearchIndex.search(value);
      let rank = 0;
      for (const field of raw) {
        for (const id of field.result) {
          const idMapData = titleIdMap[id];
          if (!idMapData)
            continue;
          switch (idMapData.kind) {
            case "story": {
              list.push(storyResultFactory(storyStore.getStoryById(idMapData.id), rank));
              rank++;
              break;
            }
            case "variant": {
              const [storyId] = idMapData.id.split(":");
              const story = storyStore.getStoryById(storyId);
              const variant = storyStore.getVariantById(idMapData.id);
              list.push(variantResultFactory(story, variant, rank));
              rank++;
              break;
            }
          }
        }
      }
      titleResults.value = list;
    });
    const docsResults = ref([]);
    async function searchOnDocField(query) {
      if (docSearchIndex) {
        const list = [];
        const raw = await docSearchIndex.search(query);
        let rank = 0;
        for (const field of raw) {
          for (const id of field.result) {
            const idMapData = docIdMap[id];
            if (!idMapData)
              continue;
            switch (idMapData.kind) {
              case "story": {
                list.push(storyResultFactory(storyStore.getStoryById(idMapData.id), rank, "docs"));
                rank++;
                break;
              }
            }
          }
        }
        docsResults.value = list;
      }
    }
    watch(rateLimitedSearch, searchOnDocField);
    function storyResultFactory(story, rank, type = "title") {
      return {
        kind: "story",
        rank,
        id: `story:${story.id}`,
        title: story.title,
        route: {
          name: "story",
          params: {
            storyId: story.id
          },
          query: {
            ...type === "docs" ? { tab: "docs" } : {}
          }
        },
        path: story.file.path.slice(0, -1),
        icon: story.icon,
        iconColor: story.iconColor
      };
    }
    function variantResultFactory(story, variant, rank, type = "title") {
      return {
        kind: "variant",
        rank,
        id: `variant:${story.id}:${variant.id}`,
        title: variant.title,
        route: {
          name: "story",
          params: {
            storyId: story.id
          },
          query: {
            variantId: variant.id,
            ...type === "docs" ? { tab: "docs" } : {}
          }
        },
        path: [...story.file.path ?? [], story.title],
        icon: variant.icon,
        iconColor: variant.iconColor
      };
    }
    const commandResults = computed(() => {
      return [];
    });
    useCommandStore();
    const results = computed(() => {
      const list = [
        ...commandResults.value,
        ...titleResults.value
      ];
      const seen = {};
      for (const r of titleResults.value) {
        seen[r.id] = true;
      }
      for (const r of docsResults.value) {
        if (!seen[r.id]) {
          list.push(r);
        }
      }
      return list;
    });
    const {
      selectedIndex,
      selectNext,
      selectPrevious
    } = useSelection(results);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", {
          class: "histoire-search-pane htw-flex htw-items-center htw-gap-4 htw-pl-6 htw-border htw-border-transparent focus-visible:htw-border-primary-500",
          onClick: _cache[4] || (_cache[4] = ($event) => focused.value = true)
        }, [
          createVNode(unref(Icon), {
            icon: "carbon:search",
            class: "flex-none htw-w-4 htw-h-4"
          }),
          withDirectives(createBaseVNode("input", {
            ref_key: "input",
            ref: input,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => searchInputText.value = $event),
            placeholder: "Search for stories, variants...",
            class: "htw-bg-transparent htw-w-full htw-flex-1 htw-pl-0 htw-pr-6 htw-py-4 htw-outline-none",
            onKeydown: [
              _cache[1] || (_cache[1] = withKeys(withModifiers(($event) => unref(selectNext)(), ["prevent"]), ["down"])),
              _cache[2] || (_cache[2] = withKeys(withModifiers(($event) => unref(selectPrevious)(), ["prevent"]), ["up"])),
              _cache[3] || (_cache[3] = withKeys(($event) => close(), ["escape"]))
            ]
          }, null, 544), [
            [vModelText, searchInputText.value]
          ])
        ]),
        unref(rateLimitedSearch) && !unref(results).length ? (openBlock(), createBlock(BaseEmpty, {
          key: 0,
          class: "no-animation"
        }, {
          default: withCtx(() => [
            createTextVNode(" No results ")
          ]),
          _: 1
        })) : unref(results).length ? (openBlock(), createElementBlock("div", _hoisted_1, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(results), (result, index) => {
            return openBlock(), createBlock(SearchItem, {
              key: result.id,
              result,
              selected: index === unref(selectedIndex),
              onClose: _cache[5] || (_cache[5] = ($event) => close())
            }, null, 8, ["result", "selected"]);
          }), 128))
        ])) : createCommentVNode("", true)
      ], 64);
    };
  }
});
export {
  _sfc_main as default
};
