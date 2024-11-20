import { _ as _sfc_main$3 } from './heading-q-DixHlN.mjs';
import { _ as _sfc_main$4 } from './quote-CWHj60wR.mjs';
import { mergeProps, useSSRContext, ref, computed } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import gsap$1, { gsap } from 'gsap';
import { S as ScrollTrigger } from '../_/ScrollTrigger.mjs';
import { _ as _export_sfc } from './server.mjs';
import { p as publicAssetsURL } from '../nitro/nitro.mjs';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'ipx';

const _sfc_main$2 = {
  __name: "circle",
  __ssrInlineRender: true,
  props: {
    title: String,
    line1: String,
    line2: String,
    percentage: Number
  },
  setup(__props) {
    gsap$1.registerPlugin(ScrollTrigger);
    ref(null);
    const props = __props;
    const dashArray = computed(() => 55 * 2 * Math.PI);
    computed(dashArray.value);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<svg${ssrRenderAttrs(mergeProps({
        width: "160",
        height: "160",
        viewBox: "0 0 160 160",
        "shape-rendering": "auto"
      }, _attrs))}><circle class="text-stone-300 dark:text-[#3A3A3A]" stroke-width="4.5" stroke="currentColor" fill="transparent" r="55" cx="80" cy="80"></circle><circle class="text-[#4A90E2] dark:text-blue-600" stroke-width="5" stroke-linecap="round" stroke="currentColor" fill="transparent"${ssrRenderAttr("stroke-dasharray", 55 * 2 * Math.PI)}${ssrRenderAttr("stroke-dashoffset", 55 * 2 * Math.PI - props.percentage / 100 * 55 * 2 * Math.PI)} r="55" cx="80" cy="80" transform="rotate(-270, 80, 80)"></circle><text x="80" y="65" dominant-baseline="middle" text-anchor="middle" class="font-sentient text-2xl text-[#4A90E2] dark:text-white" fill="currentColor"><tspan>${ssrInterpolate(props.title)}</tspan><tspan class="font-sentient text-xs" x="80" dy="2em">${ssrInterpolate(props.line1)}</tspan><tspan class="font-sentient text-xs" x="80" dy="1.5em">${ssrInterpolate(props.line2)}</tspan></text></svg>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/circle.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Circle = _sfc_main$2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-row items-center" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_Circle, {
    title: "03",
    line1: "Internships",
    line2: "Worked",
    percentage: 60
  }, null, _parent));
  _push(ssrRenderComponent(_component_Circle, {
    title: "07",
    line1: "Web",
    line2: "Frameworks",
    percentage: 85
  }, null, _parent));
  _push(ssrRenderComponent(_component_Circle, {
    title: "04+",
    line1: "Years of",
    line2: "Experience",
    percentage: 80
  }, null, _parent));
  _push(ssrRenderComponent(_component_Circle, {
    title: "1K+",
    line1: "Hours",
    line2: "Coding",
    percentage: 100
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/progess.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _imports_0 = publicAssetsURL("/images/pla-camp.png");
const _imports_1 = publicAssetsURL("/images/pxy-lumiose-city-street.jpg");
const _sfc_main = {
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    gsap.registerPlugin(ScrollTrigger);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Heading = _sfc_main$3;
      const _component_Quote = _sfc_main$4;
      const _component_Progess = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pt-[6.5rem] px-0 mt-0 mx-[2rem] w-fit" }, _attrs))}><div class="flex flex-col items-center justify-center">`);
      _push(ssrRenderComponent(_component_Heading, { text: "01. My Journey" }, null, _parent));
      _push(ssrRenderComponent(_component_Quote, {
        class: "fade",
        quote: "Now, what did you say your name was? <player>, are you ready? You'll face fun times and tough challenges. A world of dreams and adventures awaits! Let's go!",
        author: "Professor Oak",
        source: "Pok\xE9mon Yellow"
      }, null, _parent));
      _push(`<img class="fade mt-4 md:w-[60%] md:mr-0"${ssrRenderAttr("src", _imports_0)} alt="camp"></div><div class="flex flex-col justify-between w-full md:items-center gap-8"><p class="fade text-sm mt-6 font-poppins leading-7 md:mt-2 md:w-auto"> Hey, Henry here! My intro to programming came from coding on the TI-calculator. This experience sparked my interest in tech, leading me to learn <u>Python</u> as my first programming language. Many of my early projects are bots made using <u>Discord.py</u>, an API wrapper for Discord. In recent years, however, I&#39;ve been more interested in all aspects of <u>web development</u>. Fun fact: this website was built using <u>Nuxt.js</u> and <u>TailwindCSS</u>! </p>`);
      _push(ssrRenderComponent(_component_Progess, { class: "flex-wrap justify-center" }, null, _parent));
      _push(`<div class="flex flex-col md:flex-row gap-[2.75rem] w-full"><div class="flex flex-col gap-6 md:gap-[2rem] mb-4"><h2 class="fade font-sentient text-2xl italic self-start mt-0">Excelsior. Ever Upward.</h2><img class="md:hidden fade w-[225px] h-fit self-center aspect-auto rounded"${ssrRenderAttr("src", _imports_1)} alt="city street"><p class="fade text-sm mt-6 font-bogart leading-7 md:mt-2 md:w-auto"> &quot;Excelsior&quot;\u2014my motto from the vibrant streets of New York\u2014reflects my approach to programming. With each project, I strive to <u>learn something new, push boundaries, and deliver exceptional work.</u> The future holds endless possibilities for growth, and I can&#39;t wait to see where this journey takes me. </p></div><img class="hidden md:block fade w-[15vw] max-w-[20rem] self-center rounded"${ssrRenderAttr("src", _imports_1)} alt="city street"></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=about-CTUzVH_4.mjs.map
