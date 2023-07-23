<template>
    <div class="pt-[6.5rem] px-0 mt-0 mx-[2rem] w-full">
        <div class="flex flex-col items-center justify-center">
            <Heading text="01. My Journey"/>
            <Quote 
                quote="Now, what did you say your name was? <player>, are you ready?
                Your very own Pokémon legend is about to unfold. You'll face fun times and tough challenges. 
                A world of dreams and adventures with Pokémon awaits! Let's go!"
                author="Professor Oak"
                source="Pokémon Yellow"
            />
            <img class="w-3/4 mr-[3rem] md:w-1/2 md:mr-0" src="/images/pla-camp.png" alt="camp">
        </div>
        <div class="flex flex-col justify-between items-start md:items-center gap-8">
            <p class="text-sm w-[85%] mt-6 font-poppins leading-7 md:mt-2 md:w-auto">
                Hey, Henry here!
                I was introduced to the world of programming through the TI-84 Calculator. 
                Surprisingly, messing around with TI-Basic teaches you a lot of <i>core programming principles!</i>
                After this experience sparked my curiousity, I went on to learn <i>Python</i> as my first programming language. 
                Many of my early projects were Discord bots made using Discord.py, an API wrapper for Discord.
                I have four years of programming experience and three years of web development experience. 
                However, in recent years, I have been much more interested in <i>web development and machine learning</i>. 
                In fact, this website was built using <i>Nuxt.js and Tailwind CSS!</i>
            </p>
            <div class="flex flex-col-reverse md:flex-row gap-[2.75rem] mt-2 mb-4">
                <p class="text-sm w-[85%] mt-6 font-poppins leading-7 md:mt-2 md:w-auto">
                    Growing up in the vibrant metropolis of New York City, I've always lived by the motto "Excelsior," meaning "ever upward." 
                    This motto resonates deeply with my approach to programming. 
                    I firmly believe in the power of constant improvement and never settling for mediocrity. 
                    With each project, I strive to push boundaries, embrace innovation, and deliver exceptional web experiences.
                    As I look ahead, I'm excited to pursue my dreams of becoming a software engineer by majoring in Computer Science. 
                    The future holds endless possibilities, and I can't wait to see where this journey takes me.
                </p>
                <img class="w-[200px] h-fit self-center mr-[3rem] md:w-1/3 md:h-auto aspect-auto rounded md:mr-6" src="/images/pbw-promo-artwork.jpg" alt="childhood">
            </div>
        </div>
    </div>
</template>
