import { _ as _sfc_main$1 } from './heading-q-DixHlN.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'ipx';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Heading = _sfc_main$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "pt-[6.5rem] px-0 mt-0 mx-[2rem] w-full" }, _attrs))} data-v-ecc60e14><div class="flex flex-col items-center justify-center" data-v-ecc60e14>`);
  _push(ssrRenderComponent(_component_Heading, { text: "05. My Blog" }, null, _parent));
  _push(`<div class="flex flex-col mb-5" data-v-ecc60e14><h2 class="font-sentient text-xl mb-2 self-start" data-v-ecc60e14>Gotta Code &#39;Em All!</h2><p class="font-sentient text-sm" data-v-ecc60e14> Join me as I document my journey and challenges I encounter during my programming adventure. I&#39;ll share my experiences, insights, and lessons learned as I navigate through new technologies in the ever-evolving landscape of coding, design and user experience. My goal is to provide valuable content that educates and inspires fellow developers as well as beginners. </p></div><div class="banner" data-v-ecc60e14><h3 class="font-sentient text-white text-xl opacity-90" data-v-ecc60e14>Page Under Construction, Check Back Soon!</h3></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const blog = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-ecc60e14"]]);

export { blog as default };
//# sourceMappingURL=blog-DasKKGuz.mjs.map
