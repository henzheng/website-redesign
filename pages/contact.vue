<template>
    <div class="pt-[6.5rem] px-0 mt-0 mx-[2rem]">
        <div class="flex flex-col items-center justify-center">
            <Heading text="04. Get In Touch"/>
            <Quote
                quote="You said you have a dream… That dream… Make it come true! Wonderful dreams and ideals give you the power to change the world!"
                author="N"
                source="Pokemon Black & White"
            />
            <nuxt-img format="webp" class="py-4 w-3/4 md:w-1/2" src="/images/psm-pokedex.png" alt="pokedex"/>
            <p class="font-poppins text-sm mt-8">
                Alright, what's next?
                Feel free to send a message through social media or email if you want to get in touch!
                <i>The best way to contact me is via email.</i>
                I'm always open to new opportunities and learning experiences. 
                I check my inboxes often, so I'll try my best to get back to you as soon as possible!
            </p>
            <div class="flex flex-col items-center md:flex-row justify-center gap-[4rem] mt-8 md:pr-8">
                <Form/>
                <nuxt-img format="webp" class="w-3/4 rounded md:w-[300px]" src="/images/alola.png" alt="alola"/>
            </div>
        </div>
    </div>
</template>
