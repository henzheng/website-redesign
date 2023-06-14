<template>
    <div class="pt-[6.5rem] px-0 mt-0 mx-[2rem] w-full">
        <div class="flex flex-col items-center justify-center">
            <div class="flex flex-row w-full items-center pb-4">
                <h1 class="font-poppins text-[2rem] mr-4">02. Working Experiences </h1>
                <hr class="border-[1.5px] border-black w-[200px]">
            </div>
            <img class="w-1/2" src="/images/mining.png" alt="mining">
        </div>
        <div class="flex flex-col justify-between gap-8">
            <p class="text-sm font-poppins leading-7 mt-2">
                Over the course of my high school career, I have always been proactive in seeking out internship opportunities. 
                I've been fortunate enough to have the opportunity to work for various tech companies, where <i>I honed my programming abilities and learned to adapt to a professional environment.</i> 
                These internships have provided me with invaluable insights into the tech industry, and allowed me to work alongside experienced professionals.
                Through these experiences, I have grown both personally and professionally, paving the way for a promising future in the field of technology.
                For a more comprehensive overview, take a look at my resume!
            </p>
            <Tabs/>
        </div>
        <div class="flex flex-row w-full items-center">
            <h1 class="font-poppins text-2xl mr-4">My Skills </h1>
            <hr class="border-[1.5px] border-black w-[200px]">
        </div>
        <!-- <h2 class="font-poppins text-2xl">My Skills</h2> -->
        <div class="flex flex-row flex-wrap items-center mt-4 mb-2 h-[200px]">
            <div class="flex flex-col items-center h-full w-1/4 gap-3">
                <p class="font-poppins">Languages</p>
                <img class="aspect-square w-[90px]" src="/images/Heat_Badge.png" alt="Heat_Badge">
                <p class="font-poppins text-sm text-center">HTML, CSS, Javascript, Typescript, Python</p>
            </div>
            <div class="flex flex-col items-center h-full w-1/4 gap-3">
                <p class="font-poppins">Frameworks</p>
                <img class="aspect-square w-[90px]" src="/images/Knuckle_Badge.png" alt="Knuckle_Badge">
                <p class="font-poppins text-sm text-center">Nuxt.js, Vue.js, React, Express.js, Django</p>
            </div>
            <div class="flex flex-col items-center h-full w-1/4 gap-3">
                <p class="font-poppins">Certifications</p>
                <img class="aspect-square w-[90px]" src="/images/Dynamo_Badge.png" alt="Dynamo_Badge">
                <p class="font-poppins text-sm text-center">TestDome Certified in Javascript and Python</p>
            </div>
            <div class="flex flex-col items-center h-full w-1/4 gap-3">
                <p class="font-poppins">Collaboration</p>
                <img class="aspect-square w-[90px]" src="/images/Feather_Badge.png" alt="Feather_Badge">
                <p class="font-poppins text-sm text-center">Adaptable, Familiar with Git workflows</p>
            </div>
        </div>
    </div>
</template>
