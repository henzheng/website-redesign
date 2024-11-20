import { _ as _sfc_main$2 } from './heading-q-DixHlN.mjs';
import { _ as _sfc_main$3 } from './quote-CWHj60wR.mjs';
import { useSSRContext, defineComponent, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderComponent } from 'vue/server-renderer';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "project",
  __ssrInlineRender: true,
  props: {
    url: {},
    imagePath: {},
    projectName: {},
    projectRole: {},
    description: {},
    technologies: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col w-[90vw] items-center md:items-start md:w-auto md:flex-row gap-4" }, _attrs))}><div class="flex items-center justify-center aspect-video w-[80%] lg:w-1/2 transition ease-in-out hover:opacity-75"><a${ssrRenderAttr("href", _ctx.url)} target="_blank"><img class="rounded-md"${ssrRenderAttr("src", _ctx.imagePath)}${ssrRenderAttr("alt", _ctx.projectName)}></a></div><div class="flex flex-col w-[80%] md:w-1/2"><h2 class="font-poppins text-lg">${ssrInterpolate(_ctx.projectName)}</h2><p class="font-poppins">${ssrInterpolate(_ctx.projectRole)}</p><div class="bg-slate-800 opacity-80 rounded-sm text-white p-3 my-4"><p class="text-white font-poppins text-sm">${ssrInterpolate(_ctx.description)}</p></div><ul class="flex flex-row gap-4"><!--[-->`);
      ssrRenderList(_ctx.technologies, (tech, index) => {
        _push(`<li class="${ssrRenderClass([`bg-${tech.technologyColor}-300`, "font-poppins text-black px-2 py-1 rounded-md text-sm"])}"${ssrRenderAttr("id", index.toString())}>${ssrInterpolate(tech.technologyName)}</li>`);
      });
      _push(`<!--]--></ul></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/project.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const data = [
  {
    url: "https://coursetable.com",
    imagePath: "/images/CourseTable.png",
    projectName: "CourseTable",
    projectRole: "Full Stack Developer",
    description: "CourseTable is an intuitive and helpful course-searching platform used by thousands of Yale students to browse courses, create makeshift schedules, and more. ",
    technologies: [
      {
        technologyName: "React",
        technologyColor: "blue"
      },
      {
        technologyName: "TypeScript",
        technologyColor: "blue"
      },
      {
        technologyName: "Docker",
        technologyColor: "blue"
      },
      {
        technologyName: "GraphQL",
        technologyColor: "pink"
      }
    ]
  },
  {
    url: "https://yhack.org",
    imagePath: "/images/YHack2024.png",
    projectName: "YHack",
    projectRole: "Developer",
    description: "YHack is Yale\u2019s premier annual hackathon, uniting students from across the nation to innovate and collaborate on software engineering projects. ",
    technologies: [
      {
        technologyName: "Vue",
        technologyColor: "green"
      },
      {
        technologyName: "Javascript",
        technologyColor: "yellow"
      },
      {
        technologyName: "HTML",
        technologyColor: "red"
      },
      {
        technologyName: "CSS",
        technologyColor: "blue"
      }
    ]
  },
  {
    url: "https://siths-catalog.netlify.app/",
    imagePath: "/images/SITHS_Course_Catalog_2.png",
    projectName: "SI Tech Course Selection",
    projectRole: "Full Stack Developer",
    description: "The lead project of my high school\u2019s 2023-2024 development cycle, this TypeScript and Python-powered course selection platform streamlined enrollment for 1K+ students.",
    technologies: [
      {
        technologyName: "Vue",
        technologyColor: "green"
      },
      {
        technologyName: "Django",
        technologyColor: "green"
      },
      {
        technologyName: "Tailwind",
        technologyColor: "blue"
      }
    ]
  }
];
const _sfc_main = {
  __name: "projects",
  __ssrInlineRender: true,
  setup(__props) {
    console.log(data);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Heading = _sfc_main$2;
      const _component_Quote = _sfc_main$3;
      const _component_Project = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pt-[6.5rem] px-0 mt-0 mx-[2rem]" }, _attrs))} data-v-7727194e><div class="flex flex-col items-center justify-center" data-v-7727194e>`);
      _push(ssrRenderComponent(_component_Heading, { text: "03. Featured Projects" }, null, _parent));
      _push(ssrRenderComponent(_component_Quote, {
        class: "fade",
        quote: "We do have a lot in common. The same earth, the same air, the same sky. Maybe if we started looking at what's the same, instead of looking at what's different, well, who knows?",
        author: "Meowth",
        source: "Pokemon Anime"
      }, null, _parent));
      _push(`</div><div class="flex flex-col items-center gap-[3.5rem] mb-5" data-v-7727194e><!--[-->`);
      ssrRenderList(unref(data), (project, index) => {
        _push(ssrRenderComponent(_component_Project, {
          class: "project mt-5 swap flex",
          url: project.url,
          "image-path": project.imagePath,
          "project-role": project.projectRole,
          description: project.description,
          technologies: project.technologies,
          "project-name": project.projectName,
          key: index
        }, null, _parent));
      });
      _push(`<!--]--></div><h3 class="font-satoshi text-base text-center pb-0 mb-[-2rem] mt-14 md:my-6 md:mr-[2rem]" data-v-7727194e> Want to see more of my work? View my <a target="_blank" class="text-[#00a6ed] inline-block transition ease-in-out hover:translate-y-[-2.5px]" href="https://github.com/nullZheng" data-v-7727194e> Github profile! </a></h3></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const projects = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7727194e"]]);

export { projects as default };
//# sourceMappingURL=projects-ClABkp9l.mjs.map
