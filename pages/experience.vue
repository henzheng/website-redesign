<template>
    <div class="pt-[6.5rem] px-0 mt-0 mx-[2rem] w-full">
        <div class="flex flex-col items-center justify-center">
            <div class="flex flex-row w-full items-center pb-4">
                <h1 class="font-poppins text-[2rem] mr-4">02. Working Experiences </h1>
                <hr class="border-[1.5px] border-black w-[200px]">
            </div>
            <blockquote class="font-poppins text-sm italic">
                "I see now that the circumstances of one’s birth are irrelevant; it is what you do with the gift of life that determines who you are."
                <cite>- Metwo, <span class="not-italic">Pokemon: The Movie.</span></cite>
            </blockquote>
            <img class="w-1/2" src="/images/pla-mining.png" alt="working experiences">
        </div>
        <div class="flex flex-col justify-between gap-8">
            <p class="text-sm font-poppins leading-7 mt-2">
                Over the course of my high school career, I have always been proactive in seeking out internship opportunities. 
                I've been fortunate enough to have the opportunity to work for various tech companies, where <i>I honed my programming abilities and learned to adapt to a professional environment.</i> 
                These internships have provided me with invaluable insights into the tech industry, and allowed me to work alongside experienced professionals.
                Through these experiences, I have grown both personally and professionally, paving the way for a promising future in the field of technology.
                For a more comprehensive overview, take a look at my resume!
            </p>
            <div class="flex flex-row w-full items-center">
                <h1 class="font-poppins text-2xl mr-4">Where I've Worked </h1>
                <hr class="border-[1.5px] border-black w-[200px]">
            </div>
            <Tabs/>
        </div>
        <div class="flex flex-row w-full items-center">
            <h1 class="font-poppins text-2xl mr-4">Skills & Technologies </h1>
            <hr class="border-[1.5px] border-black w-[200px]">
        </div>
        <div class="flex flex-row flex-wrap items-center mt-4 mb-2 w-full h-[200px]">
            <div class="flex flex-col items-center h-full w-1/4 gap-3">
                <p class="font-poppins text-lg">Languages</p>
                <img class="aspect-square w-[90px]" src="/images/heat-badge.png" alt="heat badge">
                <p class="font-poppins text-sm text-center">HTML, CSS, Javascript, Typescript, Python</p>
            </div>
            <div class="flex flex-col items-center h-full w-1/4 gap-3">
                <p class="font-poppins text-lg">Frameworks</p>
                <img class="aspect-square w-[90px]" src="/images/knuckle-badge.png" alt="knuckle badge">
                <p class="font-poppins text-sm text-center">Nuxt.js, Vue.js, React, Express.js, Django</p>
            </div>
            <div class="flex flex-col items-center h-full w-1/4 gap-3">
                <p class="font-poppins text-lg">Certifications</p>
                <img class="aspect-square w-[90px]" src="/images/dynamo-badge.png" alt="dynamo badge">
                <p class="font-poppins text-sm text-center">TestDome Certified in Python and JS</p>
            </div>
            <div class="flex flex-col items-center h-full w-1/4 gap-3">
                <p class="font-poppins text-lg">Collaboration</p>
                <img class="aspect-square w-[90px]" src="/images/feather-badge.png" alt="feather badge">
                <p class="font-poppins text-sm text-center">Adaptable, Familiar with Git workflows</p>
            </div>
        </div>
    </div>
</template>
