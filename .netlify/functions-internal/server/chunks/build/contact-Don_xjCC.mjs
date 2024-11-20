import { _ as _sfc_main$2 } from './heading-q-DixHlN.mjs';
import { _ as _sfc_main$3 } from './quote-CWHj60wR.mjs';
import __nuxt_component_0 from './Icon-BfhOSPAE.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import { p as publicAssetsURL } from '../nitro/nitro.mjs';
import { gsap } from 'gsap';
import { S as ScrollTrigger } from '../_/ScrollTrigger.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import './config-dnnvJUco.mjs';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'ipx';

const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Icon = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col justify-center items-center w-full h-[350px] md:w-[350px] rounded shadow-2xl bg-white dark:bg-slate-800" }, _attrs))}><h3 class="font-sentient text-lg md:text-xl mt-10 mb-4">Send me a message!</h3><form action="https://docs.google.com/forms/d/e/1FAIpQLSd4DhlVsmVRcgd0sKzOdg5ofAQcCwhv_ZBgn_wvE7tObK51GQ/formResponse" method="post" target="_blank" autocomplete="off" class="font-sentient flex flex-col text-sm gap-4 w-3/4 h-3/4"><input name="entry.268733639" class="outline-none p-2 rounded-lg bg-slate-100 dark:bg-slate-600" required placeholder="Your name" type="text"><input name="entry.810499223" class="outline-none p-2 rounded-lg bg-slate-100 dark:bg-slate-600" required placeholder="Your email" type="email"><input name="entry.2004209441" class="block outline-none p-2 rounded-lg bg-slate-100 dark:bg-slate-600" required placeholder="Your message" type="text"><button class="bg-blue-500 w-[5rem] text-white rounded p-2 my-auto mx-auto" type="submit">`);
  _push(ssrRenderComponent(_component_Icon, { name: "ion:ios-paper-plane" }, null, _parent));
  _push(` Send </button></form></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/form.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _imports_0 = publicAssetsURL("/images/psm-pokedex.png");
const _imports_1 = publicAssetsURL("/images/alola.png");
const _sfc_main = {
  __name: "contact",
  __ssrInlineRender: true,
  setup(__props) {
    gsap.registerPlugin(ScrollTrigger);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Heading = _sfc_main$2;
      const _component_Quote = _sfc_main$3;
      const _component_Form = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pt-[6.5rem] px-0 mt-0 mx-[2rem]" }, _attrs))}><div class="flex flex-col items-center justify-center">`);
      _push(ssrRenderComponent(_component_Heading, { text: "04. Get In Touch" }, null, _parent));
      _push(ssrRenderComponent(_component_Quote, {
        class: "fade",
        quote: "You said you have a dream\u2026 That dream\u2026 Make it come true! Wonderful dreams and ideals give you the power to change the world!",
        author: "N",
        source: "Pokemon Black & White"
      }, null, _parent));
      _push(`<img class="fade py-4 w-3/4 md:w-1/2"${ssrRenderAttr("src", _imports_0)} alt="pokedex"><p class="fade text-sm mt-8 font-bogart leading-7 md:mt-2 md:w-auto"> What&#39;s next? Send a message through social media or email if you want to get in touch! <u>The best way to contact me is via email.</u> I&#39;m always open to new opportunities and learning experiences. </p><div class="flex flex-col items-center md:flex-row justify-between gap-[1rem] mt-8">`);
      _push(ssrRenderComponent(_component_Form, { class: "fade" }, null, _parent));
      _push(`<img class="fade w-3/4 rounded md:w-[350px]"${ssrRenderAttr("src", _imports_1)} alt="alola"></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=contact-Don_xjCC.mjs.map
