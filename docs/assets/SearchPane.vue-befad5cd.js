import { d as defineComponent, o as openBlock, e as createElementBlock, a7 as renderSlot, n as normalizeClass, m as withKeys, c as computed, a as unref, q as createBlock, I as Icon, f as createVNode, g as createBaseVNode, z as createTextVNode, t as toDisplayString, F as Fragment, p as renderList, h as createCommentVNode, u as useCssVars, r as ref, a1 as toRefs, a3 as useRouter, w as withCtx, Y as markRaw, k as watch, bP as useFocus, bQ as refDebounced, y as withDirectives, a8 as vModelText, a6 as withModifiers, _ as __vitePreload, bR as flexsearch_bundleExports } from "./vendor-8f547009.js";
import { _ as _export_sfc, u as useScrollOnActive, B as BaseListItemLink, a as useStoryStore } from "./MobileOverlay.vue2-2efa4ce2.js";
import { B as BaseEmpty } from "./BaseEmpty.vue-188f2ef8.js";
import { o as onKeyboardShortcut, u as useCommandStore } from "./bundle-main-4c15884e.js";
import "./GenericMountStory.vue2-be9f4f1a.js";
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
let searchData$1 = { "index": { "reg": '{"0":1,"1":1,"2":1,"3":1,"4":1,"5":1,"6":1,"7":1,"8":1,"9":1,"10":1,"11":1,"12":1,"13":1,"14":1,"15":1,"16":1,"17":1,"18":1,"19":1,"20":1,"21":1,"22":1,"23":1,"24":1,"25":1,"26":1,"27":1,"28":1,"29":1,"30":1,"31":1,"32":1,"33":1,"34":1,"35":1,"36":1,"37":1,"38":1,"39":1,"40":1,"41":1,"42":1,"43":1,"44":1,"45":1,"46":1,"47":1,"48":1,"49":1,"50":1,"51":1,"52":1,"53":1,"54":1,"55":1,"56":1,"57":1,"58":1,"59":1,"60":1,"61":1,"62":1,"63":1,"64":1,"65":1,"66":1,"67":1,"68":1,"69":1,"70":1,"71":1,"72":1,"73":1,"74":1,"75":1,"76":1,"77":1,"78":1,"79":1,"80":1,"81":1,"82":1}', "text.cfg": '{"doc":0,"opt":1}', "text.map": '[{"a":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,57,58,59,60,61,62,63,64,65],"ap":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,57,58,59,60,61,62,63,64,65],"f":[31,32,33,34,35,36,37,38,39,40,41,42],"fo":[31,32,33,34,35,38,39,40,41,42],"for":[31,32,33,34,35,38,39,40,41,42],"form":[31,32,33,34,35,38,39,40,41,42],"fe":[36,37],"fel":[36,37],"felt":[36,37],"s":[43,44,45,46,47,48,49,50,51,52,53,54,55,56],"se":[43,44,45,46,47,48,49],"sel":[43,44,45,46,47,48,49],"sele":[43,44,45,46,47,48,49],"selek":[43,44,45,46,47,48,49],"selekt":[43,44,45,46,47,48,49],"sl":[50,51,52,53,54,55,56],"sle":[50,51,52,53,54,55,56],"slet":[50,51,52,53,54,55,56],"slete":[50,51,52,53,54,55,56],"sleter":[50,51,52,53,54,55,56],"t":[66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82],"ta":[66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82],"tal":[66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82],"talf":[66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82],"talfe":[66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82],"talfem":[66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82],"talfemt":[66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82]},{"k":[0,1,31,32,33,34,35,59,60],"ko":[0,1,59,60],"kol":[0,1],"kola":[0,1],"kolap":[0,1],"kolaps":[0,1],"kolapse":[0,1],"t":[2,3,4,5,6,21,22,23,24,25,26,27,28,29,30,37,44,51,52,53,61,62,63],"te":[2,3,4,5,6,26,27,37,44,51,52,53,68],"tef":[2,3,4,5,6,37,44,51],"tefe":[2,3,4,5,6],"tefet":[2,3,4,5,6],"tefete":[2,3,4,5,6],"tefeter":[2,3,4,5,6],"e":[7,8,9,46,64,65,81],"em":[7,8,9,46],"ema":[7,8,9],"emak":[7,8,9],"emake":[7,8,9],"l":[10,11,45,75,76],"lo":[10,11,45],"loa":[10,11,45],"loat":[10,11,45],"loate":[10,11,45],"loater":[10,11],"m":[12,13,47,55,71],"mo":[12,13,47],"mot":[12,13],"mota":[12,13],"motal":[12,13],"p":[14,15,54,57,58,67,69,70,78,79],"pa":[14,15,67,70],"pak":[14,15,67],"pake":[14,15],"pakem":[14,15],"pakema":[14,15],"pakemat":[14,15],"pakemate":[14,15],"pakemateo":[14,15],"pakemateom":[14,15],"s":[16,17,18,19,20],"se":[16,17,18],"set":[16,17,18],"sete":[16,17,18],"setep":[16,17,18],"setepa":[16,17,18],"setepar":[16,17,18],"sm":[19,20],"sma":[19,20],"smak":[19,20],"smakp":[19,20],"smakpa":[19,20],"smakpar":[19,20],"ta":[21,22,23,24,25],"tap":[21,22,23,24,25],"tapl":[21,22],"taple":[21,22],"taps":[23,24,25],"tes":[26,27,52,53,68],"test":[26,27,68],"to":[28,29,30],"tol":[28,29,30],"tolt":[28,29,30],"tolte":[28,29,30],"toltep":[28,29,30],"ke":[31,32,33,34,35],"kek":[31,32,33,34,35],"kekp":[31,32,33,34,35],"kekpo":[31,32,33,34,35],"kekpos":[31,32,33,34,35],"tefa":[37,44,51],"tefao":[37,44,51],"tefaol":[37,44,51],"tefaolt":[37,44,51],"r":[38,39,40,41,42],"ra":[38,39,40,41,42],"rat":[38,39,40,41,42],"rate":[38,39,40,41,42],"rateo":[38,39,40,41,42],"loatem":[45],"loatemk":[45],"emp":[46],"empt":[46],"empte":[46],"mol":[47],"molt":[47],"molte":[47],"moltep":[47],"moltepl":[47],"molteple":[47],"sea":[48,49],"sear":[48,49],"seark":[48,49],"tesa":[52,53],"tesap":[52,53],"tesapl":[52,53],"tesaple":[52,53],"tesaplet":[52,53],"pe":[54],"per":[54],"perk":[54],"perke":[54],"perkem":[54],"perkemt":[54],"me":[55],"mea":[55],"meas":[55],"measo":[55],"measor":[55],"measore":[55],"measorem":[55],"measoreme":[55],"measoremem":[55],"measorememt":[55],"po":[57,58,69,78,79],"pot":[57,58],"poto":[57,58],"potom":[57,58],"kom":[59,60],"komf":[59,60],"komfe":[59,60],"komfer":[59,60],"komferm":[59,60],"tr":[61,62,63,77],"tro":[61,62,63,77],"trop":[61,62,63,77],"tropt":[61,62,63],"tropto":[61,62,63],"troptof":[61,62,63],"troptofm":[61,62,63],"ek":[64,65,81],"eko":[64,65],"ekom":[64,65],"pakr":[67],"pakro":[67],"pakrom":[67],"pakromt":[67],"por":[69,78,79],"port":[69,78,79],"porte":[69,78,79],"porter":[69,78,79],"pat":[70],"pate":[70],"patem":[70],"patemk":[70],"ma":[71],"mar":[71],"mark":[71],"marke":[71],"markem":[71],"f":[72,73,74,80,82],"fo":[72,73,74,82],"fom":[72,73,74],"fomt":[72,73,74],"le":[75,76],"let":[75],"lete":[75],"leter":[75],"lem":[76],"leme":[76],"fe":[80],"fet":[80],"ekt":[81],"fol":[82]},{"t":[1,8,11,13,15,17,20,32,39,58],"te":[1,8,11,13,15,17,20,22,24,29,32,39,58],"tef":[1,8,11,13,15,17,20,22,24,27,29,32,39,58],"tefa":[1,3,8,11,13,15,17,20,22,24,27,29,32,39,58],"tefao":[1,3,8,11,13,15,17,20,22,24,27,29,32,39,58],"tefaol":[1,3,8,11,13,15,17,20,22,24,27,29,32,39,58],"tefaolt":[1,3,8,11,13,15,17,20,22,24,27,29,32,39,58],"f":[4,5,6,25,49,52,79],"fe":[4,5,6,25,40,41,42,49,73,79],"fet":[4,5,6,40,41,42,49,79],"p":[9,55,59,60,61,62,63,64,65],"pr":[9,54,55],"pre":[9],"pref":[9],"prefe":[9],"prefef":[9],"m":[18],"me":[18],"mem":[18],"meme":[18],"memef":[18],"memefe":[18],"memefet":[18],"fer":[25],"fert":[25],"ferte":[25],"fertek":[25],"ferteka":[25],"fertekal":[25],"l":[30],"le":[30],"lef":[30],"left":[30],"kr":[33,34,35,56],"kro":[33,34,35,56],"krop":[33,34,35,56],"fa":[52,74],"fal":[52],"falo":[52],"pro":[54,55],"prok":[54,55],"prokr":[54,55],"prokre":[54,55],"prokres":[54,55],"k":[56,67,68,69,82],"krops":[56],"po":[59,60,61,62,63,64,65],"pot":[59,60,61,62,63,64,65],"poto":[59,60,61,62,63,64,65],"potom":[59,60,61,62,63,64,65],"ko":[67,68,69,82],"kol":[67,68,69],"kolo":[67,68,69],"kolor":[67,68,69],"s":[72,75,77],"se":[72],"ses":[72],"sese":[72],"fek":[73],"fekt":[73],"fam":[74],"fame":[74],"famel":[74],"famele":[74],"sp":[75],"spa":[75],"spak":[75],"spake":[75],"spakem":[75],"spakemk":[75],"e":[76],"ek":[76],"ekt":[76],"sa":[77],"sat":[77],"sato":[77],"satof":[77],"r":[78],"ra":[78],"rat":[78],"rate":[78],"rateo":[78],"rateos":[78],"kom":[82],"komf":[82],"komfe":[82],"komfek":[82]},{"k":[4,5,6],"ko":[4,5,6],"kom":[4,5,6],"komt":[4,5,6],"komte":[4,5,6],"komtem":[4,5,6],"komtemt":[4,5,6],"fe":[34,35,55],"fet":[34,35,55],"t":[40,60,65],"te":[40,60,62,65],"tet":[40],"tetl":[40],"tetle":[40],"l":[41,63],"la":[41],"lap":[41],"lape":[41],"lapel":[41],"s":[42],"sl":[42],"slo":[42],"slot":[42],"o":[49],"op":[49],"opk":[49],"opke":[49],"opkek":[49],"opkekt":[49],"opkekts":[49],"f":[55],"tef":[60,62,65],"tefa":[60,62,65],"tefao":[60,62,65],"tefaol":[60,62,65],"tefaolt":[60,62,65],"le":[63],"les":[63],"lest":[63]},{"m":[5],"me":[5],"met":[5],"metl":[5],"metle":[5],"e":[6],"em":[6],"emt":[6],"l":[34],"la":[34],"lap":[34],"lape":[34],"lapel":[34],"lapels":[34],"o":[35],"op":[35],"opk":[35],"opke":[35],"opkek":[35],"opkekt":[35],"opkekts":[35],"ma":[55],"mas":[55]},{"l":[55],"la":[55],"lap":[55],"lape":[55],"lapel":[55]},{},{},{}]', "text.ctx": "[{}]" }, "idMap": { "0": { "id": "src-modules-ui-components-app-collapse-appcollapse-story-vue", "kind": "story" }, "1": { "id": "src-modules-ui-components-app-collapse-appcollapse-story-vue:src-modules-ui-components-app-collapse-appcollapse-story-vue-0", "kind": "variant" }, "2": { "id": "src-modules-ui-components-app-divider-appdivider-story-vue", "kind": "story" }, "3": { "id": "src-modules-ui-components-app-divider-appdivider-story-vue:src-modules-ui-components-app-divider-appdivider-story-vue-0", "kind": "variant" }, "4": { "id": "src-modules-ui-components-app-divider-appdivider-story-vue:src-modules-ui-components-app-divider-appdivider-story-vue-1", "kind": "variant" }, "5": { "id": "src-modules-ui-components-app-divider-appdivider-story-vue:src-modules-ui-components-app-divider-appdivider-story-vue-2", "kind": "variant" }, "6": { "id": "src-modules-ui-components-app-divider-appdivider-story-vue:src-modules-ui-components-app-divider-appdivider-story-vue-3", "kind": "variant" }, "7": { "id": "src-modules-ui-components-app-image-appimage-story-vue", "kind": "story" }, "8": { "id": "src-modules-ui-components-app-image-appimage-story-vue:src-modules-ui-components-app-image-appimage-story-vue-0", "kind": "variant" }, "9": { "id": "src-modules-ui-components-app-image-appimage-story-vue:src-modules-ui-components-app-image-appimage-story-vue-1", "kind": "variant" }, "10": { "id": "src-modules-ui-components-app-loaders-apploader-story-vue", "kind": "story" }, "11": { "id": "src-modules-ui-components-app-loaders-apploader-story-vue:src-modules-ui-components-app-loaders-apploader-story-vue-0", "kind": "variant" }, "12": { "id": "src-modules-ui-components-app-modals-appmodal-story-vue", "kind": "story" }, "13": { "id": "src-modules-ui-components-app-modals-appmodal-story-vue:src-modules-ui-components-app-modals-appmodal-story-vue-0", "kind": "variant" }, "14": { "id": "src-modules-ui-components-app-pagination-apppagination-story-vue", "kind": "story" }, "15": { "id": "src-modules-ui-components-app-pagination-apppagination-story-vue:src-modules-ui-components-app-pagination-apppagination-story-vue-0", "kind": "variant" }, "16": { "id": "src-modules-ui-components-app-sidebar-appsidebar-story-vue", "kind": "story" }, "17": { "id": "src-modules-ui-components-app-sidebar-appsidebar-story-vue:src-modules-ui-components-app-sidebar-appsidebar-story-vue-0", "kind": "variant" }, "18": { "id": "src-modules-ui-components-app-sidebar-appsidebar-story-vue:src-modules-ui-components-app-sidebar-appsidebar-story-vue-1", "kind": "variant" }, "19": { "id": "src-modules-ui-components-app-snackbar-appsnackbar-story-vue", "kind": "story" }, "20": { "id": "src-modules-ui-components-app-snackbar-appsnackbar-story-vue:src-modules-ui-components-app-snackbar-appsnackbar-story-vue-0", "kind": "variant" }, "21": { "id": "src-modules-ui-components-app-table-apptable-story-vue", "kind": "story" }, "22": { "id": "src-modules-ui-components-app-table-apptable-story-vue:src-modules-ui-components-app-table-apptable-story-vue-0", "kind": "variant" }, "23": { "id": "src-modules-ui-components-app-tabs-apptabs-story-vue", "kind": "story" }, "24": { "id": "src-modules-ui-components-app-tabs-apptabs-story-vue:src-modules-ui-components-app-tabs-apptabs-story-vue-0", "kind": "variant" }, "25": { "id": "src-modules-ui-components-app-tabs-apptabs-story-vue:src-modules-ui-components-app-tabs-apptabs-story-vue-1", "kind": "variant" }, "26": { "id": "src-modules-ui-components-app-text-apptext-story-vue", "kind": "story" }, "27": { "id": "src-modules-ui-components-app-text-apptext-story-vue:_default", "kind": "variant" }, "28": { "id": "src-modules-ui-components-app-tooltip-apptooltip-story-vue", "kind": "story" }, "29": { "id": "src-modules-ui-components-app-tooltip-apptooltip-story-vue:src-modules-ui-components-app-tooltip-apptooltip-story-vue-0", "kind": "variant" }, "30": { "id": "src-modules-ui-components-app-tooltip-apptooltip-story-vue:src-modules-ui-components-app-tooltip-apptooltip-story-vue-1", "kind": "variant" }, "31": { "id": "src-modules-ui-components-forms-checkbox-formcheckbox-story-vue", "kind": "story" }, "32": { "id": "src-modules-ui-components-forms-checkbox-formcheckbox-story-vue:src-modules-ui-components-forms-checkbox-formcheckbox-story-vue-0", "kind": "variant" }, "33": { "id": "src-modules-ui-components-forms-checkbox-formcheckbox-story-vue:src-modules-ui-components-forms-checkbox-formcheckbox-story-vue-1", "kind": "variant" }, "34": { "id": "src-modules-ui-components-forms-checkbox-formcheckbox-story-vue:src-modules-ui-components-forms-checkbox-formcheckbox-story-vue-2", "kind": "variant" }, "35": { "id": "src-modules-ui-components-forms-checkbox-formcheckbox-story-vue:src-modules-ui-components-forms-checkbox-formcheckbox-story-vue-3", "kind": "variant" }, "36": { "id": "src-modules-ui-components-forms-field-forminputfield-story-vue", "kind": "story" }, "37": { "id": "src-modules-ui-components-forms-field-forminputfield-story-vue:src-modules-ui-components-forms-field-forminputfield-story-vue-0", "kind": "variant" }, "38": { "id": "src-modules-ui-components-forms-radio-formradio-story-vue", "kind": "story" }, "39": { "id": "src-modules-ui-components-forms-radio-formradio-story-vue:src-modules-ui-components-forms-radio-formradio-story-vue-0", "kind": "variant" }, "40": { "id": "src-modules-ui-components-forms-radio-formradio-story-vue:src-modules-ui-components-forms-radio-formradio-story-vue-1", "kind": "variant" }, "41": { "id": "src-modules-ui-components-forms-radio-formradio-story-vue:src-modules-ui-components-forms-radio-formradio-story-vue-2", "kind": "variant" }, "42": { "id": "src-modules-ui-components-forms-radio-formradio-story-vue:src-modules-ui-components-forms-radio-formradio-story-vue-3", "kind": "variant" }, "43": { "id": "src-modules-ui-components-forms-select-formselect-story-vue", "kind": "story" }, "44": { "id": "src-modules-ui-components-forms-select-formselect-story-vue:src-modules-ui-components-forms-select-formselect-story-vue-0", "kind": "variant" }, "45": { "id": "src-modules-ui-components-forms-select-formselect-story-vue:src-modules-ui-components-forms-select-formselect-story-vue-1", "kind": "variant" }, "46": { "id": "src-modules-ui-components-forms-select-formselect-story-vue:src-modules-ui-components-forms-select-formselect-story-vue-2", "kind": "variant" }, "47": { "id": "src-modules-ui-components-forms-select-formselect-story-vue:src-modules-ui-components-forms-select-formselect-story-vue-3", "kind": "variant" }, "48": { "id": "src-modules-ui-components-forms-select-formselect-story-vue:src-modules-ui-components-forms-select-formselect-story-vue-4", "kind": "variant" }, "49": { "id": "src-modules-ui-components-forms-select-formselect-story-vue:src-modules-ui-components-forms-select-formselect-story-vue-5", "kind": "variant" }, "50": { "id": "src-modules-ui-components-forms-slider-formslider-story-vue", "kind": "story" }, "51": { "id": "src-modules-ui-components-forms-slider-formslider-story-vue:src-modules-ui-components-forms-slider-formslider-story-vue-0", "kind": "variant" }, "52": { "id": "src-modules-ui-components-forms-slider-formslider-story-vue:src-modules-ui-components-forms-slider-formslider-story-vue-1", "kind": "variant" }, "53": { "id": "src-modules-ui-components-forms-slider-formslider-story-vue:src-modules-ui-components-forms-slider-formslider-story-vue-2", "kind": "variant" }, "54": { "id": "src-modules-ui-components-forms-slider-formslider-story-vue:src-modules-ui-components-forms-slider-formslider-story-vue-3", "kind": "variant" }, "55": { "id": "src-modules-ui-components-forms-slider-formslider-story-vue:src-modules-ui-components-forms-slider-formslider-story-vue-4", "kind": "variant" }, "56": { "id": "src-modules-ui-components-forms-slider-formslider-story-vue:src-modules-ui-components-forms-slider-formslider-story-vue-5", "kind": "variant" }, "57": { "id": "src-modules-ui-components-app-buttons-app-button-appbutton-story-vue", "kind": "story" }, "58": { "id": "src-modules-ui-components-app-buttons-app-button-appbutton-story-vue:src-modules-ui-components-app-buttons-app-button-appbutton-story-vue-0", "kind": "variant" }, "59": { "id": "src-modules-ui-components-app-buttons-app-confirm-button-appconfirmbutton-story-vue", "kind": "story" }, "60": { "id": "src-modules-ui-components-app-buttons-app-confirm-button-appconfirmbutton-story-vue:src-modules-ui-components-app-buttons-app-confirm-button-appconfirmbutton-story-vue-0", "kind": "variant" }, "61": { "id": "src-modules-ui-components-app-buttons-app-dropdown-button-appdropdownbutton-story-vue", "kind": "story" }, "62": { "id": "src-modules-ui-components-app-buttons-app-dropdown-button-appdropdownbutton-story-vue:src-modules-ui-components-app-buttons-app-dropdown-button-appdropdownbutton-story-vue-0", "kind": "variant" }, "63": { "id": "src-modules-ui-components-app-buttons-app-dropdown-button-appdropdownbutton-story-vue:src-modules-ui-components-app-buttons-app-dropdown-button-appdropdownbutton-story-vue-1", "kind": "variant" }, "64": { "id": "src-modules-ui-components-app-buttons-app-icon-button-appiconbutton-story-vue", "kind": "story" }, "65": { "id": "src-modules-ui-components-app-buttons-app-icon-button-appiconbutton-story-vue:src-modules-ui-components-app-buttons-app-icon-button-appiconbutton-story-vue-0", "kind": "variant" }, "66": { "id": "tailwind", "kind": "story" }, "67": { "id": "tailwind:background-color", "kind": "variant" }, "68": { "id": "tailwind:text-color", "kind": "variant" }, "69": { "id": "tailwind:border-color", "kind": "variant" }, "70": { "id": "tailwind:padding", "kind": "variant" }, "71": { "id": "tailwind:margin", "kind": "variant" }, "72": { "id": "tailwind:font-size", "kind": "variant" }, "73": { "id": "tailwind:font-weight", "kind": "variant" }, "74": { "id": "tailwind:font-family", "kind": "variant" }, "75": { "id": "tailwind:letter-spacing", "kind": "variant" }, "76": { "id": "tailwind:line-height", "kind": "variant" }, "77": { "id": "tailwind:drop-shadow", "kind": "variant" }, "78": { "id": "tailwind:border-radius", "kind": "variant" }, "79": { "id": "tailwind:border-width", "kind": "variant" }, "80": { "id": "tailwind:width", "kind": "variant" }, "81": { "id": "tailwind:height", "kind": "variant" }, "82": { "id": "tailwind:full-config", "kind": "variant" } } };
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
    const DocSearchData = () => __vitePreload(() => import("./search-docs-data-0e2f3357.js"), true ? ["assets/search-docs-data-0e2f3357.js","assets/vendor-8f547009.js"] : void 0);
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