import { defineComponent, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-BXxPlIRz.mjs';
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

const _sfc_main$1 = {
  __name: "SplitText",
  __ssrInlineRender: true,
  props: {
    text: String
  },
  setup(__props) {
    const props = __props;
    const characters = props.text.split("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "reveal",
        class: "font-sentient inline-block"
      }, _attrs))} data-v-50f27932><!--[-->`);
      ssrRenderList(unref(characters), (char, index) => {
        _push(`<div class="char inline-block" data-v-50f27932>${ssrInterpolate(char === " " ? "\xA0" : char)}</div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SplitText.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-50f27932"]]);
const _imports_0 = publicAssetsURL("/images/profile.png");
const data = [
  {
    emoji: "\u2728",
    url: "/about",
    text: "Learn more about me."
  },
  {
    emoji: "\u{1F680}",
    url: "/experience",
    text: "My skills & experiences."
  },
  {
    emoji: "\u{1F50D}",
    url: "/projects",
    text: "Explore my projects."
  },
  {
    emoji: "\u{1F4EC}",
    url: "/contact",
    text: "Get in touch."
  }
];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    console.log(data);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SplitText = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pt-[6.5rem] px-0 pb-[5.5rem] mt-0 mx-[2rem]" }, _attrs))}><div class="text-[3rem] mr-auto flex flex-col gap-2"><div class="flex flex-col md:flex-row items-center gap-[0.35rem] justify-between"><div class="flex flex-col justify-center gap-1"><h1 class="font-sentient"><span class="font-sentient text-xl">Hey I&#39;m</span><br>`);
      _push(ssrRenderComponent(_component_SplitText, { text: "Henry Zheng" }, null, _parent));
      _push(`</h1><h2 class="text-xl font-sentient">Programmer, Tech Enthusiast</h2><span class="hidden md:inline-block text-lg font-sentient"> CS &amp; Econ at <a target="_blank" class="text-[#00a6ed] inline-block transition ease-in-out hover:translate-y-[-2.5px]" href="https://yale.edu/">Yale\u{1F393} </a></span></div><img class="w-1/2 aspect-square md:w-[28%]"${ssrRenderAttr("src", _imports_0)} alt="avatar"></div></div><div class="flex flex-col items-center gap-4 mt-[2.25rem]"><p class="text-base font-satoshi leading-7"> Henry is an aspiring <u>software engineer</u> from NYC with a passion for creating <u>engaging, accessible apps for the web.</u> With over four years of coding experience, he specializes in <u>full-stack web development</u>. Recently, Henry is interested in <u>machine learning</u> and <u>competitive programming</u>. Thanks for visiting! </p><nav class="font-satoshi text-base mt-[1.5rem] self-start"><!--[-->`);
      ssrRenderList(unref(data), (link) => {
        _push(`<ul class="flex flex-col gap-[0.375rem]"><li class="flex flex-row gap-2 pt-4"><div>${ssrInterpolate(link.emoji)}</div>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "underline underline-offset-2 transition-transform duration-300 hover:translate-x-4",
          to: link.url
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(link.text)}`);
            } else {
              return [
                createTextVNode(toDisplayString(link.text), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li></ul>`);
      });
      _push(`<!--]--></nav></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-yF6BEQK7.mjs.map
