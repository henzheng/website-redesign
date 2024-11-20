import { _ as _sfc_main$3 } from './heading-q-DixHlN.mjs';
import { _ as _sfc_main$4 } from './quote-CWHj60wR.mjs';
import { mergeProps, useSSRContext, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import { gsap } from 'gsap';
import { S as ScrollTrigger } from '../_/ScrollTrigger.mjs';
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

const data = [
  {
    position: "Project Manager",
    url: "https://www.siths.org/",
    workplace: "Staten Island Tech",
    timeframe: "Sep 2023 - Present",
    description: [
      "Lead development of school-wide apps improving quality of life",
      "Delegate tasks; manage GitHub repos; maintain & deploy apps"
    ],
    id: "SITHS"
  },
  {
    position: "Web Dev Intern",
    url: "https://www.tygasmart.com/",
    workplace: "TygaSmart Systems",
    timeframe: "Feb 2023 - Apr 2023",
    description: [
      "Collaborate with dev. team in Mexico; implement web app layouts",
      "Compile collection of furniture assets for firm\u2019s digital floor planner"
    ],
    id: "TS"
  },
  {
    position: "Lead Developer",
    url: "https://bruzzeses.com/",
    workplace: "Bruzzese\u2019s",
    timeframe: "Sep 2022 - Nov 2022",
    description: [
      "Built a local order management system for a local business",
      "Conducted extensive testing and debugging to ensure robustness"
    ],
    id: "BG"
  },
  {
    position: "IT Intern",
    url: "https://agscard.com/",
    workplace: "AGS Grading",
    timeframe: "Jul 2022 - Aug 2022",
    description: [
      "Utilize AV editing to assist with ad production & customer acquisition",
      "Research competitors and present insights to peers & supervisors"
    ],
    id: "AGS"
  }
];
const _sfc_main$2 = {
  __name: "tabs",
  __ssrInlineRender: true,
  setup(__props) {
    console.log(data);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "tab-container" }, _attrs))} data-v-e3762578><div class="tab" data-v-e3762578><!--[-->`);
      ssrRenderList(unref(data), (experience, index) => {
        _push(`<button${ssrRenderAttr("link", experience.id)} class="tablinks" data-v-e3762578><span data-v-e3762578>${ssrInterpolate(experience.workplace)}</span></button>`);
      });
      _push(`<!--]--></div><!--[-->`);
      ssrRenderList(unref(data), (experience, index) => {
        _push(`<div class="${ssrRenderClass(index === 0 ? "tabcontent active" : "tabcontent")}"${ssrRenderAttr("id", experience.id)} data-v-e3762578><h3 data-v-e3762578>${ssrInterpolate(experience.position)} <a${ssrRenderAttr("href", experience.url)} target="_blank" data-v-e3762578>@ ${ssrInterpolate(experience.workplace)}</a></h3><p data-v-e3762578>${ssrInterpolate(experience.timeframe)}</p><div class="tab-description" data-v-e3762578><ul data-v-e3762578><!--[-->`);
        ssrRenderList(experience.description, (bullet, index2) => {
          _push(`<li class="bullet-point" data-v-e3762578>${ssrInterpolate(bullet)}</li>`);
        });
        _push(`<!--]--></ul></div></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/tabs.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-e3762578"]]);
const _sfc_main$1 = {
  __name: "HoneycombGrid",
  __ssrInlineRender: true,
  setup(__props) {
    gsap.registerPlugin(ScrollTrigger);
    const getGridClass = (index) => {
      return {
        "honeycomb-grid": true,
        "honeycomb-grid-odd": index % 2 === 0,
        "honeycomb-grid-even": index % 2 !== 0,
        "honeycomb-grid-third": index === 2
      };
    };
    const technologies = [
      ["CSS", "Django", "Docker", "HTML", "JavaScript", "MongoDB", "Nuxt"],
      ["Python", "React", "Supabase", "Svelte", "TailwindCSS", "Ubuntu", "Vue"],
      ["TypeScript", "Git", "Node", "GitHub", "Figma", "HuggingFace", "PyTorch"]
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      ssrRenderList(technologies, (row, index) => {
        _push(`<div class="${ssrRenderClass(getGridClass(index))}" data-v-194aec4e><!--[-->`);
        ssrRenderList(row, (technology, imageIndex) => {
          _push(`<div class="hexagon" data-v-194aec4e><img class="hexagon-image"${ssrRenderAttr("src", "/technologies/" + technology.toLowerCase() + ".png")}${ssrRenderAttr("alt", technology)} data-v-194aec4e><div class="hexagon-text font-satoshi text-sm" data-v-194aec4e>${ssrInterpolate(technology)}</div></div>`);
        });
        _push(`<!--]--></div>`);
      });
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HoneycombGrid.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-194aec4e"]]);
const _imports_0 = publicAssetsURL("/images/pla-mining.png");
const skills = [
  {
    title: "Languages",
    imageUrl: "/images/heat-badge.png",
    imageName: "heat badge",
    description: "HTML, CSS, Javascript, Typescript, Python"
  },
  {
    title: "Frameworks",
    imageUrl: "/images/knuckle-badge.png",
    imageName: "knuckle badge",
    description: "Nuxt.js, Vue.js, React, Express.js, Django"
  },
  {
    title: "Certifications",
    imageUrl: "/images/dynamo-badge.png",
    imageName: "dynamo badge",
    description: "TestDome Certified in Python and JS"
  },
  {
    title: "Collaboration",
    imageUrl: "/images/feather-badge.png",
    imageName: "feather badge",
    description: "Adaptable, Familiar with Git workflows"
  }
];
const _sfc_main = {
  __name: "experience",
  __ssrInlineRender: true,
  setup(__props) {
    gsap.registerPlugin(ScrollTrigger);
    console.log(skills);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Heading = _sfc_main$3;
      const _component_Quote = _sfc_main$4;
      const _component_Tabs = __nuxt_component_2;
      const _component_HoneycombGrid = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pt-[6.5rem] px-0 mt-0 mx-[2rem]" }, _attrs))}><div class="flex flex-col items-center justify-center">`);
      _push(ssrRenderComponent(_component_Heading, { text: "02. Work Experience" }, null, _parent));
      _push(ssrRenderComponent(_component_Quote, {
        class: "fade",
        quote: "I see now that the circumstances of one's birth are irrelevant; it is what you do with the gift of life that determines who you are.",
        author: "Mewtwo",
        source: "Pokemon: The Movie."
      }, null, _parent));
      _push(`<img class="fade md:w-[55%] md:mr-0"${ssrRenderAttr("src", _imports_0)} alt="working experiences"></div><div class="flex flex-col justify-between gap-8"><p class="fade text-sm mt-6 font-bogart leading-7 md:mt-2 md:w-auto"> Over the years, I&#39;ve always been proactive in gaining <u>real-world experience</u>. Working with industry professionals, I&#39;ve adapted to <u>collaborative workflows</u> and familiarized myself with various <u>tech stacks</u> and <u>frameworks</u>. For a more comprehensive overview of my expertise, please take a look at my resume. </p><div class="fade flex flex-row w-full items-center"><h2 class="font-sentient text-2xl mr-4">Where I&#39;ve Worked </h2><hr class="border-[1.5px] border-black dark:border-white w-[200px] hidden md:block"></div>`);
      _push(ssrRenderComponent(_component_Tabs, { class: "fade" }, null, _parent));
      _push(`</div><div class="fade flex flex-row w-full items-center"><h3 class="font-sentient text-2xl mr-4">Skills &amp; Technologies </h3><hr class="border-[1.5px] border-black dark:border-white w-[200px] hidden md:block"></div><p class="fade font-bogart text-sm my-6 leading-7 md:mt-2"> Constantly experimenting, I&#39;m familiar with a wide array of industry-standard tools and languages. </p>`);
      _push(ssrRenderComponent(_component_HoneycombGrid, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/experience.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=experience-DZaifR-d.mjs.map
