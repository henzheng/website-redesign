import { _ as __nuxt_component_0$1 } from './nuxt-link-BXxPlIRz.mjs';
import __nuxt_component_0$2 from './Icon-BfhOSPAE.mjs';
import { useSSRContext, defineComponent, ref, mergeProps, unref, withCtx, createTextVNode, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderAttr, ssrRenderSlot } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../nitro/nitro.mjs';
import { _ as _export_sfc } from './server.mjs';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import './config-dnnvJUco.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'ipx';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _imports_0 = publicAssetsURL("/images/pokeball.png");
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "navbar",
  __ssrInlineRender: true,
  setup(__props) {
    const isLightTheme = ref(true);
    const menuOpen = ref(false);
    function changeTheme() {
      isLightTheme.value = !isLightTheme.value;
      if (isLightTheme.value) {
        (void 0).documentElement.classList.remove("dark");
        localStorage.theme = "light";
      } else {
        (void 0).documentElement.classList.add("dark");
        localStorage.theme = "dark";
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_Icon = __nuxt_component_0$2;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "top-0 md:ml-8 fixed w-full max-w-[768px] m-auto z-20 flex" }, _attrs))} data-v-cf16bffb><button id="hamburger" aria-label="hamburger menu" class="ml-auto mr-4 mt-4 md:hidden p-2 focus:outline-none focus:ring-2 focus:ring-gray-300 z-20" data-v-cf16bffb><svg class="${ssrRenderClass([unref(menuOpen) ? "rotate-90" : "", "w-6 h-6 transition-transform transform"])}" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-v-cf16bffb>`);
      if (!unref(menuOpen)) {
        _push(`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" data-v-cf16bffb></path>`);
      } else {
        _push(`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-v-cf16bffb></path>`);
      }
      _push(`</svg></button>`);
      if (unref(menuOpen)) {
        _push(`<nav id="navbar" class="fixed inset-0 bg-white dark:bg-[#121212] flex flex-col pt-10 pb-4 gap-5 w-full itmes-center font-satoshi z-10 justify-center" data-v-cf16bffb><ul class="flex flex-col md:flex-row gap-5 text-2xl md:text-base items-center justify-center" data-v-cf16bffb><li data-v-cf16bffb>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "hover-underline-animation after:bg-black dark:after:bg-white",
          to: "/"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Home`);
            } else {
              return [
                createTextVNode("Home")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li><li data-v-cf16bffb>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "hover-underline-animation after:bg-black dark:after:bg-white",
          to: "/about"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`About`);
            } else {
              return [
                createTextVNode("About")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li><li data-v-cf16bffb>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "hover-underline-animation after:bg-black dark:after:bg-white",
          to: "/experience"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Experience`);
            } else {
              return [
                createTextVNode("Experience")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li><li data-v-cf16bffb>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "hover-underline-animation after:bg-black dark:after:bg-white",
          to: "/projects"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Projects`);
            } else {
              return [
                createTextVNode("Projects")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li><li data-v-cf16bffb>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "hover-underline-animation after:bg-black dark:after:bg-white",
          to: "/contact"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Contact`);
            } else {
              return [
                createTextVNode("Contact")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li><li data-v-cf16bffb><a class="hover-underline-animation after:bg-black dark:after:bg-white" href="/resume.pdf" data-v-cf16bffb>Resume</a></li></ul></nav>`);
      } else {
        _push(`<nav id="navbar" class="hidden md:flex flex-row pt-10 pb-4 gap-5 w-full font-satoshi items-center bg-no-repeat bg-fixed bg-cover bg-[linear-gradient(hsla(0,0%,100%,0.925),hsla(0,0%,100%,0.925)),url(&#39;/images/sinnoh.jpg&#39;)] dark:bg-[linear-gradient(rgba(0,0,0,0.925),rgba(0,0,0,0.925)),url(&#39;/images/sinnoh.jpg&#39;)]" data-v-cf16bffb><ul class="flex flex-col md:flex-row gap-5 text-[0.85rem] md:text-base" data-v-cf16bffb><li data-v-cf16bffb>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "hover-underline-animation after:bg-black dark:after:bg-white",
          to: "/"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Home`);
            } else {
              return [
                createTextVNode("Home")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li><li data-v-cf16bffb>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "hover-underline-animation after:bg-black dark:after:bg-white",
          to: "/about"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`About`);
            } else {
              return [
                createTextVNode("About")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li><li data-v-cf16bffb>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "hover-underline-animation after:bg-black dark:after:bg-white",
          to: "/experience"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Experience`);
            } else {
              return [
                createTextVNode("Experience")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li><li data-v-cf16bffb>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "hover-underline-animation after:bg-black dark:after:bg-white",
          to: "/projects"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Projects`);
            } else {
              return [
                createTextVNode("Projects")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li><li data-v-cf16bffb>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "hover-underline-animation after:bg-black dark:after:bg-white",
          to: "/contact"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Contact`);
            } else {
              return [
                createTextVNode("Contact")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li><li data-v-cf16bffb><a class="hover-underline-animation after:bg-black dark:after:bg-white" href="/resume.pdf" data-v-cf16bffb>Resume</a></li></ul><div class="flex flex-row gap-3 items-center ml-auto" data-v-cf16bffb>`);
        if (unref(isLightTheme)) {
          _push(ssrRenderComponent(_component_Icon, {
            class: "text-xl cursor-pointer transition ease-in-out hover:rotate-45",
            name: "material-symbols:dark-mode",
            onClick: changeTheme
          }, null, _parent));
        } else {
          _push(ssrRenderComponent(_component_Icon, {
            class: "text-xl cursor-pointer text-white transition ease-in-out hover:rotate-45",
            name: "material-symbols:light-mode",
            onClick: changeTheme
          }, null, _parent));
        }
        _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img format="webp" class="w-6 h-6 transition ease-in-out hover:animate-bounce"${ssrRenderAttr("src", _imports_0)} alt="pokeball" data-v-cf16bffb${_scopeId}>`);
            } else {
              return [
                createVNode("img", {
                  format: "webp",
                  class: "w-6 h-6 transition ease-in-out hover:animate-bounce",
                  src: _imports_0,
                  alt: "pokeball"
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></nav>`);
      }
      _push(`</header>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/navbar.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-cf16bffb"]]);
const _sfc_main$2 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_Icon = __nuxt_component_0$2;
  _push(`<!--[--><div class="fixed w-12 left-12 right-auto bottom-0 z-10 flex-col items-center hidden md:flex"><div class="rotate-[-90deg] mb-[6.5rem]"><a class="font-satoshi no-underline transition ease-in-out hover:text-[#00a6ed]" href="mailto:zhenghenry2@gmail.com">henryzheng1227@gmail.com</a></div><div class="border-l-2 border-solid border-black dark:border-white h-[8rem] ml-1 mb-[40px]"></div><ul class="flex flex-col items-center m-0 p-0 list-none text-black dark:text-white text-2xl gap-4 mb-[4rem]"><a target="_blank" href="https://github.com/henzheng/">`);
  _push(ssrRenderComponent(_component_Icon, {
    class: "transition ease-in-out hover:translate-y-[-0.25rem] cursor-pointer",
    name: "ion:logo-github"
  }, null, _parent));
  _push(`</a><a target="_blank" href="https://www.instagram.com/henryy.zheng/">`);
  _push(ssrRenderComponent(_component_Icon, {
    class: "transition ease-in-out hover:translate-y-[-0.25rem] cursor-pointer",
    name: "ion:logo-instagram"
  }, null, _parent));
  _push(`</a><a target="_blank" href="https://www.linkedin.com/in/henryzheng1227/">`);
  _push(ssrRenderComponent(_component_Icon, {
    class: "transition ease-in-out hover:translate-y-[-0.25rem] cursor-pointer",
    name: "ion:logo-linkedin"
  }, null, _parent));
  _push(`</a></ul></div><div class="fixed w-12 right-12 left-auto top-0 z-10 flex-col items-center hidden md:flex"><div class="border-l-2 border-solid border-black dark:border-white h-[6rem] ml-1 mb-[40px]"></div><div class="rotate-[-90deg] mt-[3.5rem]"><span class="font-satoshi whitespace-nowrap text-md no-underline">Copyright \xA9 Henry Zheng.</span></div></div><!--]-->`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/social.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_Icon = __nuxt_component_0$2;
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "m-auto w-fit flex flex-col justify-center items-center pb-8 gap-2 mt-[10vh] md:mt-[5vh]" }, _attrs))}><div class="flex flex-row"><a class="font-satoshi text-base no-underline" href="mailto:henryzheng1227@gmail.com">henryzheng1227@gmail.com</a></div><ul class="my-4 list-none flex flex-row justify-center items-center gap-5 text-2xl text-black dark:text-white"><a target="_blank" href="https://github.com/henzheng">`);
  _push(ssrRenderComponent(_component_Icon, {
    class: "transition ease-in-out hover:translate-y-[-0.25rem] cursor-pointer",
    name: "ion:logo-github"
  }, null, _parent));
  _push(`</a><a target="_blank" href="https://www.instagram.com/henryy.zheng/">`);
  _push(ssrRenderComponent(_component_Icon, {
    class: "transition ease-in-out hover:translate-y-[-0.25rem] cursor-pointer",
    name: "ion:logo-instagram"
  }, null, _parent));
  _push(`</a><a target="_blank" href="https://www.linkedin.com/in/zheng-henry2006/">`);
  _push(ssrRenderComponent(_component_Icon, {
    class: "transition ease-in-out hover:translate-y-[-0.25rem] cursor-pointer",
    name: "ion:logo-linkedin"
  }, null, _parent));
  _push(`</a></ul><h3 class="font-satoshi font-normal text-base">Created &amp; Deployed by Henry Zheng.</h3></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/credits.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Navbar = __nuxt_component_0;
  const _component_Social = __nuxt_component_1;
  const _component_Credits = __nuxt_component_2;
  _push(`<!--[--><div class="my-0 mx-auto min-h-screen max-w-[768px]">`);
  _push(ssrRenderComponent(_component_Navbar, null, null, _parent));
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
  _push(ssrRenderComponent(_component_Social, null, null, _parent));
  _push(ssrRenderComponent(_component_Credits, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-C0RBU49U.mjs.map
