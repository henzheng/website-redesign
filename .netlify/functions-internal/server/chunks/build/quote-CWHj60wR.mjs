import { useSSRContext, defineComponent, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "quote",
  __ssrInlineRender: true,
  props: {
    quote: {},
    author: {},
    source: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<blockquote${ssrRenderAttrs(mergeProps({ class: "font-satoshi text-sm md:self-start md:text-sm md:w-auto" }, _attrs))}> &quot;${ssrInterpolate(_ctx.quote)}&quot; <cite>- ${ssrInterpolate(_ctx.author)}, <span class="not-italic">${ssrInterpolate(_ctx.source)}</span></cite></blockquote>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/quote.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=quote-CWHj60wR.mjs.map
