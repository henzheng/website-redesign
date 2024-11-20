import { p as publicAssetsURL, b as buildAssetsURL } from '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'ipx';

const tailwind = `/*! tailwindcss v3.3.2 | MIT License | https://tailwindcss.com*/*,:after,:before{border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:""}html{line-height:1.5;-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-feature-settings:normal;font-variation-settings:normal;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:initial}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{color:inherit;font-family:inherit;font-size:100%;font-weight:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:initial;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:initial}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}*,::backdrop,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:#3b82f680;--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.visible{visibility:visible}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.inset-0{inset:0}.bottom-0{bottom:0}.left-12{left:3rem}.left-auto{left:auto}.right-12{right:3rem}.right-auto{right:auto}.top-0{top:0}.z-10{z-index:10}.z-20{z-index:20}.m-0{margin:0}.m-auto{margin:auto}.mx-\\[2rem\\]{margin-left:2rem;margin-right:2rem}.mx-auto{margin-left:auto;margin-right:auto}.my-0{margin-bottom:0;margin-top:0}.my-4{margin-bottom:1rem;margin-top:1rem}.my-6{margin-bottom:1.5rem;margin-top:1.5rem}.my-auto{margin-bottom:auto;margin-top:auto}.mb-2{margin-bottom:.5rem}.mb-4{margin-bottom:1rem}.mb-5{margin-bottom:1.25rem}.mb-\\[-2rem\\]{margin-bottom:-2rem}.mb-\\[40px\\]{margin-bottom:40px}.mb-\\[4rem\\]{margin-bottom:4rem}.mb-\\[6\\.5rem\\]{margin-bottom:6.5rem}.ml-1{margin-left:.25rem}.ml-auto{margin-left:auto}.mr-4{margin-right:1rem}.mr-auto{margin-right:auto}.mt-0{margin-top:0}.mt-10{margin-top:2.5rem}.mt-14{margin-top:3.5rem}.mt-4{margin-top:1rem}.mt-5{margin-top:1.25rem}.mt-6{margin-top:1.5rem}.mt-8{margin-top:2rem}.mt-\\[1\\.5rem\\]{margin-top:1.5rem}.mt-\\[10vh\\]{margin-top:10vh}.mt-\\[2\\.25rem\\]{margin-top:2.25rem}.mt-\\[3\\.5rem\\]{margin-top:3.5rem}.block{display:block}.inline-block{display:inline-block}.flex{display:flex}.grid{display:grid}.hidden{display:none}.aspect-auto{aspect-ratio:auto}.aspect-square{aspect-ratio:1/1}.aspect-video{aspect-ratio:16/9}.h-3\\/4{height:75%}.h-6{height:1.5rem}.h-\\[350px\\]{height:350px}.h-\\[6rem\\]{height:6rem}.h-\\[8rem\\]{height:8rem}.h-fit{height:fit-content}.h-full{height:100%}.min-h-screen{min-height:100vh}.w-1\\/2{width:50%}.w-12{width:3rem}.w-3\\/4{width:75%}.w-6{width:1.5rem}.w-\\[15vw\\]{width:15vw}.w-\\[200px\\]{width:200px}.w-\\[225px\\]{width:225px}.w-\\[5rem\\]{width:5rem}.w-\\[80\\%\\]{width:80%}.w-\\[90px\\]{width:90px}.w-\\[90vw\\]{width:90vw}.w-fit{width:fit-content}.w-full{width:100%}.max-w-\\[20rem\\]{max-width:20rem}.max-w-\\[768px\\]{max-width:768px}.rotate-90{--tw-rotate:90deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(90deg) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-\\[-90deg\\]{--tw-rotate:-90deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(-90deg) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-\\[-90deg\\],.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.cursor-pointer{cursor:pointer}.list-none{list-style-type:none}.flex-row{flex-direction:row}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-center{align-items:center}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-1{gap:.25rem}.gap-2{gap:.5rem}.gap-3{gap:.75rem}.gap-4{gap:1rem}.gap-5{gap:1.25rem}.gap-6{gap:1.5rem}.gap-8{gap:2rem}.gap-\\[0\\.35rem\\]{gap:.35rem}.gap-\\[0\\.375rem\\]{gap:.375rem}.gap-\\[1rem\\]{gap:1rem}.gap-\\[2\\.75rem\\]{gap:2.75rem}.gap-\\[3\\.5rem\\]{gap:3.5rem}.self-start{align-self:flex-start}.self-center{align-self:center}.whitespace-nowrap{white-space:nowrap}.rounded{border-radius:.25rem}.rounded-lg{border-radius:.5rem}.rounded-md{border-radius:.375rem}.rounded-sm{border-radius:.125rem}.border{border-width:1px}.border-\\[1\\.5px\\]{border-width:1.5px}.border-l-2{border-left-width:2px}.border-solid{border-style:solid}.border-black{--tw-border-opacity:1;border-color:#000;border-color:rgb(0 0 0/var(--tw-border-opacity))}.bg-blue-300{--tw-bg-opacity:1;background-color:#93c5fd;background-color:rgb(147 197 253/var(--tw-bg-opacity))}.bg-blue-500{--tw-bg-opacity:1;background-color:#3b82f6;background-color:rgb(59 130 246/var(--tw-bg-opacity))}.bg-gray-300{--tw-bg-opacity:1;background-color:#d1d5db;background-color:rgb(209 213 219/var(--tw-bg-opacity))}.bg-green-300{--tw-bg-opacity:1;background-color:#86efac;background-color:rgb(134 239 172/var(--tw-bg-opacity))}.bg-indigo-300{--tw-bg-opacity:1;background-color:#a5b4fc;background-color:rgb(165 180 252/var(--tw-bg-opacity))}.bg-orange-300{--tw-bg-opacity:1;background-color:#fdba74;background-color:rgb(253 186 116/var(--tw-bg-opacity))}.bg-pink-300{--tw-bg-opacity:1;background-color:#f9a8d4;background-color:rgb(249 168 212/var(--tw-bg-opacity))}.bg-purple-300{--tw-bg-opacity:1;background-color:#d8b4fe;background-color:rgb(216 180 254/var(--tw-bg-opacity))}.bg-red-300{--tw-bg-opacity:1;background-color:#fca5a5;background-color:rgb(252 165 165/var(--tw-bg-opacity))}.bg-rose-300{--tw-bg-opacity:1;background-color:#fda4af;background-color:rgb(253 164 175/var(--tw-bg-opacity))}.bg-slate-100{--tw-bg-opacity:1;background-color:#f1f5f9;background-color:rgb(241 245 249/var(--tw-bg-opacity))}.bg-slate-800{--tw-bg-opacity:1;background-color:#1e293b;background-color:rgb(30 41 59/var(--tw-bg-opacity))}.bg-teal-300{--tw-bg-opacity:1;background-color:#5eead4;background-color:rgb(94 234 212/var(--tw-bg-opacity))}.bg-white{--tw-bg-opacity:1;background-color:#fff;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.bg-yellow-300{--tw-bg-opacity:1;background-color:#fde047;background-color:rgb(253 224 71/var(--tw-bg-opacity))}.bg-\\[linear-gradient\\(hsla\\(0\\2c 0\\%\\2c 100\\%\\2c 0\\.925\\)\\2c hsla\\(0\\2c 0\\%\\2c 100\\%\\2c 0\\.925\\)\\)\\2c url\\(\\'\\/images\\/sinnoh\\.jpg\\'\\)\\]{background-image:linear-gradient(hsla(0,0%,100%,.925),hsla(0,0%,100%,.925)),url(` + publicAssetsURL("/images/sinnoh.jpg") + ")}.bg-cover{background-size:cover}.bg-fixed{background-attachment:fixed}.bg-no-repeat{background-repeat:no-repeat}.p-0{padding:0}.p-2{padding:.5rem}.p-3{padding:.75rem}.px-0{padding-left:0;padding-right:0}.px-2{padding-left:.5rem;padding-right:.5rem}.py-1{padding-bottom:.25rem;padding-top:.25rem}.py-4{padding-bottom:1rem;padding-top:1rem}.pb-0{padding-bottom:0}.pb-4{padding-bottom:1rem}.pb-8{padding-bottom:2rem}.pb-\\[5\\.5rem\\]{padding-bottom:5.5rem}.pt-10{padding-top:2.5rem}.pt-4{padding-top:1rem}.pt-\\[6\\.5rem\\]{padding-top:6.5rem}.text-center{text-align:center}.font-bogart{font-family:Bogart,sans-serif}.font-poppins{font-family:Poppins,sans-serif}.font-satoshi{font-family:Satoshi,sans-serif}.font-sentient{font-family:Sentient,sans-serif}.text-2xl{font-size:1.5rem;line-height:2rem}.text-\\[0\\.85rem\\]{font-size:.85rem}.text-\\[1\\.8rem\\]{font-size:1.8rem}.text-\\[3rem\\]{font-size:3rem}.text-base{font-size:1rem;line-height:1.5rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-xs{font-size:.75rem;line-height:1rem}.font-normal{font-weight:400}.italic{font-style:italic}.not-italic{font-style:normal}.leading-7{line-height:1.75rem}.text-\\[\\#00a6ed\\]{--tw-text-opacity:1;color:#00a6ed;color:rgb(0 166 237/var(--tw-text-opacity))}.text-\\[\\#4A90E2\\]{--tw-text-opacity:1;color:#4a90e2;color:rgb(74 144 226/var(--tw-text-opacity))}.text-black{--tw-text-opacity:1;color:#000;color:rgb(0 0 0/var(--tw-text-opacity))}.text-stone-300{--tw-text-opacity:1;color:#d6d3d1;color:rgb(214 211 209/var(--tw-text-opacity))}.text-white{--tw-text-opacity:1;color:#fff;color:rgb(255 255 255/var(--tw-text-opacity))}.underline{text-decoration-line:underline}.no-underline{text-decoration-line:none}.underline-offset-2{text-underline-offset:2px}.opacity-80{opacity:.8}.opacity-90{opacity:.9}.shadow-2xl{--tw-shadow:0 25px 50px -12px #00000040;--tw-shadow-colored:0 25px 50px -12px var(--tw-shadow-color);box-shadow:0 0 #0000,0 0 #0000,0 25px 50px -12px #00000040;box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.outline-none{outline:2px solid #0000;outline-offset:2px}.outline{outline-style:solid}.transition{transition-duration:.15s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1)}.transition-transform{transition-duration:.15s;transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1)}.duration-300{transition-duration:.3s}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.after\\:bg-black:after{content:var(--tw-content);--tw-bg-opacity:1;background-color:#000;background-color:rgb(0 0 0/var(--tw-bg-opacity))}.hover\\:translate-x-4:hover{--tw-translate-x:1rem;transform:translate(1rem,var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.hover\\:translate-y-\\[-0\\.25rem\\]:hover{--tw-translate-y:-0.25rem;transform:translate(var(--tw-translate-x),-.25rem) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.hover\\:translate-y-\\[-2\\.5px\\]:hover{--tw-translate-y:-2.5px;transform:translate(var(--tw-translate-x),-2.5px) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.hover\\:rotate-45:hover{--tw-rotate:45deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(45deg) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@keyframes bounce{0%,to{animation-timing-function:cubic-bezier(.8,0,1,1);transform:translateY(-25%)}50%{animation-timing-function:cubic-bezier(0,0,.2,1);transform:none}}.hover\\:animate-bounce:hover{animation:bounce 1s infinite}.hover\\:text-\\[\\#00a6ed\\]:hover{--tw-text-opacity:1;color:#00a6ed;color:rgb(0 166 237/var(--tw-text-opacity))}.hover\\:opacity-75:hover{opacity:.75}.focus\\:outline-none:focus{outline:2px solid #0000;outline-offset:2px}.focus\\:ring-2:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color),var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color),0 0 #0000;box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000)}.focus\\:ring-gray-300:focus{--tw-ring-opacity:1;--tw-ring-color:rgb(209 213 219/var(--tw-ring-opacity))}:is(.dark .dark\\:border-white){--tw-border-opacity:1;border-color:#fff;border-color:rgb(255 255 255/var(--tw-border-opacity))}:is(.dark .dark\\:bg-\\[\\#121212\\]){--tw-bg-opacity:1;background-color:#121212;background-color:rgb(18 18 18/var(--tw-bg-opacity))}:is(.dark .dark\\:bg-slate-600){--tw-bg-opacity:1;background-color:#475569;background-color:rgb(71 85 105/var(--tw-bg-opacity))}:is(.dark .dark\\:bg-slate-800){--tw-bg-opacity:1;background-color:#1e293b;background-color:rgb(30 41 59/var(--tw-bg-opacity))}:is(.dark .dark\\:bg-\\[linear-gradient\\(rgba\\(0\\2c 0\\2c 0\\2c 0\\.925\\)\\2c rgba\\(0\\2c 0\\2c 0\\2c 0\\.925\\)\\)\\2c url\\(\\'\\/images\\/sinnoh\\.jpg\\'\\)\\]){background-image:linear-gradient(rgba(0,0,0,.925),rgba(0,0,0,.925)),url(/images/sinnoh.jpg)}:is(.dark .dark\\:text-\\[\\#3A3A3A\\]){--tw-text-opacity:1;color:#3a3a3a;color:rgb(58 58 58/var(--tw-text-opacity))}:is(.dark .dark\\:text-blue-600){--tw-text-opacity:1;color:#2563eb;color:rgb(37 99 235/var(--tw-text-opacity))}:is(.dark .dark\\:text-white){--tw-text-opacity:1;color:#fff;color:rgb(255 255 255/var(--tw-text-opacity))}:is(.dark .dark\\:after\\:bg-white):after{content:var(--tw-content);--tw-bg-opacity:1;background-color:#fff;background-color:rgb(255 255 255/var(--tw-bg-opacity))}@media (min-width:768px){.md\\:my-6{margin-bottom:1.5rem;margin-top:1.5rem}.md\\:ml-8{margin-left:2rem}.md\\:mr-0{margin-right:0}.md\\:mr-\\[2rem\\]{margin-right:2rem}.md\\:mt-2{margin-top:.5rem}.md\\:mt-\\[5vh\\]{margin-top:5vh}.md\\:block{display:block}.md\\:inline-block{display:inline-block}.md\\:flex{display:flex}.md\\:hidden{display:none}.md\\:w-1\\/2{width:50%}.md\\:w-1\\/4{width:25%}.md\\:w-\\[28\\%\\]{width:28%}.md\\:w-\\[350px\\]{width:350px}.md\\:w-\\[55\\%\\]{width:55%}.md\\:w-\\[60\\%\\]{width:60%}.md\\:w-auto{width:auto}.md\\:flex-row{flex-direction:row}.md\\:items-start{align-items:flex-start}.md\\:items-center{align-items:center}.md\\:gap-\\[2rem\\]{gap:2rem}.md\\:self-start{align-self:flex-start}.md\\:text-\\[2rem\\]{font-size:2rem}.md\\:text-base{font-size:1rem;line-height:1.5rem}.md\\:text-sm{font-size:.875rem;line-height:1.25rem}.md\\:text-xl{font-size:1.25rem;line-height:1.75rem}}@media (min-width:1024px){.lg\\:w-1\\/2{width:50%}}";

const main = `/*! tailwindcss v3.3.2 | MIT License | https://tailwindcss.com*/*,:after,:before{border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:""}html{line-height:1.5;-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-feature-settings:normal;font-variation-settings:normal;-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{color:inherit;font-family:inherit;font-size:100%;font-weight:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{color:#9ca3af;opacity:1}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.visible{visibility:visible}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.inset-0{inset:0}.bottom-0{bottom:0}.left-12{left:3rem}.left-auto{left:auto}.right-12{right:3rem}.right-auto{right:auto}.top-0{top:0}.z-10{z-index:10}.z-20{z-index:20}.m-0{margin:0}.m-auto{margin:auto}.mx-\\[2rem\\]{margin-left:2rem;margin-right:2rem}.mx-auto{margin-left:auto;margin-right:auto}.my-0{margin-bottom:0;margin-top:0}.my-4{margin-bottom:1rem;margin-top:1rem}.my-6{margin-bottom:1.5rem;margin-top:1.5rem}.my-auto{margin-bottom:auto;margin-top:auto}.mb-2{margin-bottom:.5rem}.mb-4{margin-bottom:1rem}.mb-5{margin-bottom:1.25rem}.mb-\\[-2rem\\]{margin-bottom:-2rem}.mb-\\[40px\\]{margin-bottom:40px}.mb-\\[4rem\\]{margin-bottom:4rem}.mb-\\[6\\.5rem\\]{margin-bottom:6.5rem}.ml-1{margin-left:.25rem}.ml-auto{margin-left:auto}.mr-4{margin-right:1rem}.mr-auto{margin-right:auto}.mt-0{margin-top:0}.mt-10{margin-top:2.5rem}.mt-14{margin-top:3.5rem}.mt-4{margin-top:1rem}.mt-5{margin-top:1.25rem}.mt-6{margin-top:1.5rem}.mt-8{margin-top:2rem}.mt-\\[1\\.5rem\\]{margin-top:1.5rem}.mt-\\[10vh\\]{margin-top:10vh}.mt-\\[2\\.25rem\\]{margin-top:2.25rem}.mt-\\[3\\.5rem\\]{margin-top:3.5rem}.block{display:block}.inline-block{display:inline-block}.flex{display:flex}.grid{display:grid}.hidden{display:none}.aspect-auto{aspect-ratio:auto}.aspect-square{aspect-ratio:1/1}.aspect-video{aspect-ratio:16/9}.h-3\\/4{height:75%}.h-6{height:1.5rem}.h-\\[350px\\]{height:350px}.h-\\[6rem\\]{height:6rem}.h-\\[8rem\\]{height:8rem}.h-fit{height:-moz-fit-content;height:fit-content}.h-full{height:100%}.min-h-screen{min-height:100vh}.w-1\\/2{width:50%}.w-12{width:3rem}.w-3\\/4{width:75%}.w-6{width:1.5rem}.w-\\[15vw\\]{width:15vw}.w-\\[200px\\]{width:200px}.w-\\[225px\\]{width:225px}.w-\\[5rem\\]{width:5rem}.w-\\[80\\%\\]{width:80%}.w-\\[90px\\]{width:90px}.w-\\[90vw\\]{width:90vw}.w-fit{width:-moz-fit-content;width:fit-content}.w-full{width:100%}.max-w-\\[20rem\\]{max-width:20rem}.max-w-\\[768px\\]{max-width:768px}.rotate-90{--tw-rotate:90deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(90deg) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-\\[-90deg\\]{--tw-rotate:-90deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(-90deg) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-\\[-90deg\\],.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.cursor-pointer{cursor:pointer}.list-none{list-style-type:none}.flex-row{flex-direction:row}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-center{align-items:center}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-1{gap:.25rem}.gap-2{gap:.5rem}.gap-3{gap:.75rem}.gap-4{gap:1rem}.gap-5{gap:1.25rem}.gap-6{gap:1.5rem}.gap-8{gap:2rem}.gap-\\[0\\.35rem\\]{gap:.35rem}.gap-\\[0\\.375rem\\]{gap:.375rem}.gap-\\[1rem\\]{gap:1rem}.gap-\\[2\\.75rem\\]{gap:2.75rem}.gap-\\[3\\.5rem\\]{gap:3.5rem}.self-start{align-self:flex-start}.self-center{align-self:center}.whitespace-nowrap{white-space:nowrap}.rounded{border-radius:.25rem}.rounded-lg{border-radius:.5rem}.rounded-md{border-radius:.375rem}.rounded-sm{border-radius:.125rem}.border{border-width:1px}.border-\\[1\\.5px\\]{border-width:1.5px}.border-l-2{border-left-width:2px}.border-solid{border-style:solid}.border-black{--tw-border-opacity:1;border-color:#000;border-color:rgb(0 0 0/var(--tw-border-opacity))}.bg-blue-300{--tw-bg-opacity:1;background-color:#93c5fd;background-color:rgb(147 197 253/var(--tw-bg-opacity))}.bg-blue-500{--tw-bg-opacity:1;background-color:#3b82f6;background-color:rgb(59 130 246/var(--tw-bg-opacity))}.bg-gray-300{--tw-bg-opacity:1;background-color:#d1d5db;background-color:rgb(209 213 219/var(--tw-bg-opacity))}.bg-green-300{--tw-bg-opacity:1;background-color:#86efac;background-color:rgb(134 239 172/var(--tw-bg-opacity))}.bg-indigo-300{--tw-bg-opacity:1;background-color:#a5b4fc;background-color:rgb(165 180 252/var(--tw-bg-opacity))}.bg-orange-300{--tw-bg-opacity:1;background-color:#fdba74;background-color:rgb(253 186 116/var(--tw-bg-opacity))}.bg-pink-300{--tw-bg-opacity:1;background-color:#f9a8d4;background-color:rgb(249 168 212/var(--tw-bg-opacity))}.bg-purple-300{--tw-bg-opacity:1;background-color:#d8b4fe;background-color:rgb(216 180 254/var(--tw-bg-opacity))}.bg-red-300{--tw-bg-opacity:1;background-color:#fca5a5;background-color:rgb(252 165 165/var(--tw-bg-opacity))}.bg-rose-300{--tw-bg-opacity:1;background-color:#fda4af;background-color:rgb(253 164 175/var(--tw-bg-opacity))}.bg-slate-100{--tw-bg-opacity:1;background-color:#f1f5f9;background-color:rgb(241 245 249/var(--tw-bg-opacity))}.bg-slate-800{--tw-bg-opacity:1;background-color:#1e293b;background-color:rgb(30 41 59/var(--tw-bg-opacity))}.bg-teal-300{--tw-bg-opacity:1;background-color:#5eead4;background-color:rgb(94 234 212/var(--tw-bg-opacity))}.bg-white{--tw-bg-opacity:1;background-color:#fff;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.bg-yellow-300{--tw-bg-opacity:1;background-color:#fde047;background-color:rgb(253 224 71/var(--tw-bg-opacity))}.bg-\\[linear-gradient\\(hsla\\(0\\2c 0\\%\\2c 100\\%\\2c 0\\.925\\)\\2c hsla\\(0\\2c 0\\%\\2c 100\\%\\2c 0\\.925\\)\\)\\2c url\\(\\'\\/images\\/sinnoh\\.jpg\\'\\)\\]{background-image:linear-gradient(hsla(0,0%,100%,.925),hsla(0,0%,100%,.925)),url(` + publicAssetsURL("/images/sinnoh.jpg") + ")}.bg-cover{background-size:cover}.bg-fixed{background-attachment:fixed}.bg-no-repeat{background-repeat:no-repeat}.p-0{padding:0}.p-2{padding:.5rem}.p-3{padding:.75rem}.px-0{padding-left:0;padding-right:0}.px-2{padding-left:.5rem;padding-right:.5rem}.py-1{padding-bottom:.25rem;padding-top:.25rem}.py-4{padding-bottom:1rem;padding-top:1rem}.pb-0{padding-bottom:0}.pb-4{padding-bottom:1rem}.pb-8{padding-bottom:2rem}.pb-\\[5\\.5rem\\]{padding-bottom:5.5rem}.pt-10{padding-top:2.5rem}.pt-4{padding-top:1rem}.pt-\\[6\\.5rem\\]{padding-top:6.5rem}.text-center{text-align:center}.font-bogart{font-family:Bogart,sans-serif}.font-poppins{font-family:Poppins,sans-serif}.font-satoshi{font-family:Satoshi,sans-serif}.font-sentient{font-family:Sentient,sans-serif}.text-2xl{font-size:1.5rem;line-height:2rem}.text-\\[0\\.85rem\\]{font-size:.85rem}.text-\\[1\\.8rem\\]{font-size:1.8rem}.text-\\[3rem\\]{font-size:3rem}.text-base{font-size:1rem;line-height:1.5rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-xs{font-size:.75rem;line-height:1rem}.font-normal{font-weight:400}.italic{font-style:italic}.not-italic{font-style:normal}.leading-7{line-height:1.75rem}.text-\\[\\#00a6ed\\]{--tw-text-opacity:1;color:#00a6ed;color:rgb(0 166 237/var(--tw-text-opacity))}.text-\\[\\#4A90E2\\]{--tw-text-opacity:1;color:#4a90e2;color:rgb(74 144 226/var(--tw-text-opacity))}.text-black{--tw-text-opacity:1;color:#000;color:rgb(0 0 0/var(--tw-text-opacity))}.text-stone-300{--tw-text-opacity:1;color:#d6d3d1;color:rgb(214 211 209/var(--tw-text-opacity))}.text-white{--tw-text-opacity:1;color:#fff;color:rgb(255 255 255/var(--tw-text-opacity))}.underline{text-decoration-line:underline}.no-underline{text-decoration-line:none}.underline-offset-2{text-underline-offset:2px}.opacity-80{opacity:.8}.opacity-90{opacity:.9}.shadow-2xl{--tw-shadow:0 25px 50px -12px rgba(0,0,0,.25);--tw-shadow-colored:0 25px 50px -12px var(--tw-shadow-color);box-shadow:0 0 #0000,0 0 #0000,0 25px 50px -12px rgba(0,0,0,.25);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.outline-none{outline:2px solid transparent;outline-offset:2px}.outline{outline-style:solid}.transition{transition-duration:.15s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1)}.transition-transform{transition-duration:.15s;transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1)}.duration-300{transition-duration:.3s}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}@font-face{font-display:swap;font-family:Bogart;src:url(" + buildAssetsURL("Bogart-Regular.CzV1I1MJ.woff2") + ') format("woff2")}@font-face{font-display:swap;font-family:Mallory;src:url(' + buildAssetsURL("MalloryBook.BJTBznHZ.woff2") + ') format("woff2")}@font-face{font-display:swap;font-family:Satoshi;src:url(' + buildAssetsURL("Satoshi-Regular.CPM9dct4.woff2") + ') format("woff2")}@font-face{font-display:swap;font-family:Sentient;src:url(' + buildAssetsURL("Sentient-Regular.DwjSseAQ.woff2") + ') format("woff2")}@font-face{font-display:swap;font-family:Gambetta;src:url(' + buildAssetsURL("Gambetta-Regular.DHoZKy-k.woff2") + ') format("woff2")}@font-face{font-display:swap;font-family:Bespoke;src:url(' + buildAssetsURL("BespokeSerif-Regular.BmNkZBy9.woff2") + `) format("woff2")}.after\\:bg-black:after{content:var(--tw-content);--tw-bg-opacity:1;background-color:#000;background-color:rgb(0 0 0/var(--tw-bg-opacity))}.hover\\:translate-x-4:hover{--tw-translate-x:1rem;transform:translate(1rem,var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.hover\\:translate-y-\\[-0\\.25rem\\]:hover{--tw-translate-y:-0.25rem;transform:translate(var(--tw-translate-x),-.25rem) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.hover\\:translate-y-\\[-2\\.5px\\]:hover{--tw-translate-y:-2.5px;transform:translate(var(--tw-translate-x),-2.5px) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.hover\\:rotate-45:hover{--tw-rotate:45deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(45deg) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@keyframes bounce{0%,to{animation-timing-function:cubic-bezier(.8,0,1,1);transform:translateY(-25%)}50%{animation-timing-function:cubic-bezier(0,0,.2,1);transform:none}}.hover\\:animate-bounce:hover{animation:bounce 1s infinite}.hover\\:text-\\[\\#00a6ed\\]:hover{--tw-text-opacity:1;color:#00a6ed;color:rgb(0 166 237/var(--tw-text-opacity))}.hover\\:opacity-75:hover{opacity:.75}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.focus\\:ring-2:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color),var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color),0 0 #0000;box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000)}.focus\\:ring-gray-300:focus{--tw-ring-opacity:1;--tw-ring-color:rgb(209 213 219/var(--tw-ring-opacity))}:is(.dark .dark\\:border-white){--tw-border-opacity:1;border-color:#fff;border-color:rgb(255 255 255/var(--tw-border-opacity))}:is(.dark .dark\\:bg-\\[\\#121212\\]){--tw-bg-opacity:1;background-color:#121212;background-color:rgb(18 18 18/var(--tw-bg-opacity))}:is(.dark .dark\\:bg-slate-600){--tw-bg-opacity:1;background-color:#475569;background-color:rgb(71 85 105/var(--tw-bg-opacity))}:is(.dark .dark\\:bg-slate-800){--tw-bg-opacity:1;background-color:#1e293b;background-color:rgb(30 41 59/var(--tw-bg-opacity))}:is(.dark .dark\\:bg-\\[linear-gradient\\(rgba\\(0\\2c 0\\2c 0\\2c 0\\.925\\)\\2c rgba\\(0\\2c 0\\2c 0\\2c 0\\.925\\)\\)\\2c url\\(\\'\\/images\\/sinnoh\\.jpg\\'\\)\\]){background-image:linear-gradient(rgba(0,0,0,.925),rgba(0,0,0,.925)),url(/images/sinnoh.jpg)}:is(.dark .dark\\:text-\\[\\#3A3A3A\\]){--tw-text-opacity:1;color:#3a3a3a;color:rgb(58 58 58/var(--tw-text-opacity))}:is(.dark .dark\\:text-blue-600){--tw-text-opacity:1;color:#2563eb;color:rgb(37 99 235/var(--tw-text-opacity))}:is(.dark .dark\\:text-white){--tw-text-opacity:1;color:#fff;color:rgb(255 255 255/var(--tw-text-opacity))}:is(.dark .dark\\:after\\:bg-white):after{content:var(--tw-content);--tw-bg-opacity:1;background-color:#fff;background-color:rgb(255 255 255/var(--tw-bg-opacity))}@media (min-width:768px){.md\\:my-6{margin-bottom:1.5rem;margin-top:1.5rem}.md\\:ml-8{margin-left:2rem}.md\\:mr-0{margin-right:0}.md\\:mr-\\[2rem\\]{margin-right:2rem}.md\\:mt-2{margin-top:.5rem}.md\\:mt-\\[5vh\\]{margin-top:5vh}.md\\:block{display:block}.md\\:inline-block{display:inline-block}.md\\:flex{display:flex}.md\\:hidden{display:none}.md\\:w-1\\/2{width:50%}.md\\:w-1\\/4{width:25%}.md\\:w-\\[28\\%\\]{width:28%}.md\\:w-\\[350px\\]{width:350px}.md\\:w-\\[55\\%\\]{width:55%}.md\\:w-\\[60\\%\\]{width:60%}.md\\:w-auto{width:auto}.md\\:flex-row{flex-direction:row}.md\\:items-start{align-items:flex-start}.md\\:items-center{align-items:center}.md\\:gap-\\[2rem\\]{gap:2rem}.md\\:self-start{align-self:flex-start}.md\\:text-\\[2rem\\]{font-size:2rem}.md\\:text-base{font-size:1rem;line-height:1.5rem}.md\\:text-sm{font-size:.875rem;line-height:1.25rem}.md\\:text-xl{font-size:1.25rem;line-height:1.75rem}}@media (min-width:1024px){.lg\\:w-1\\/2{width:50%}}`;

const entryStyles_D4ysogqU = [tailwind, main];

export { entryStyles_D4ysogqU as default };
//# sourceMappingURL=entry-styles.D4ysogqU.mjs.map
