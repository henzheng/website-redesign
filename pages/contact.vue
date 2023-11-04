<template>
    <div class="pt-[6.5rem] px-0 mt-0 mx-[2rem] w-full">
        <div class="flex flex-col items-center justify-center">
            <Heading text="04. Get In Touch"/>
            <Quote
                quote="You said you have a dream… That dream… Make it come true! Wonderful dreams and ideals give you the power to change the world!"
                author="N"
                source="Pokemon Black & White"
            />
            <img class="w-1/2" src="/images/psm-pokedex.png" alt="torchic">
            <p class="font-poppins text-sm mt-8">
                Alright, what's next?
                Feel free to send a message through social media or email if you want to get in touch!
                <i>The best way to contact me is via email.</i>
                I'm always open to new opportunities and learning experiences. 
                I check my inboxes often, so I'll try my best to get back to you as soon as possible.
                If you prefer, you can also send me a friend request on Discord @coori.
                Let's connect and explore the possibilities together!
            </p>
            <div class="flex flex-row justify-center gap-[4rem] mt-8 pr-8 w-full">
                <div class="flex flex-col justify-center items-center w-1/2 h-[300px] bg-white dark:bg-slate-800 rounded shadow-2xl p-8">
                    <h3 class="font-poppins text-xl mt-10 mb-4">Send me a message!</h3>
                    <form @submit.prevent="sendEmail" autocomplete="off"
                        class="font-poppins flex flex-col text-sm gap-4">
                        <input class="outline-none p-2 bg-slate-100 dark:bg-slate-600 rounded-lg" 
                            placeholder="Your name"
                            type="text" id="name">
                        <input class="outline-none p-2 bg-slate-100 dark:bg-slate-600 rounded-lg" 
                            placeholder="Your email"
                            type="email" id="email">
                        <textarea class="block outline-none p-2 bg-slate-100 dark:bg-slate-600 rounded-lg resize-none"
                            placeholder="Your message"
                            name="message" 
                            id="message" 
                            rows="3"
                            cols="30">
                        </textarea>
                        <button class="bg-blue-500 w-[5rem] text-white rounded p-2 mx-auto mb-8" type="submit">
                            <Icon name="ion:ios-paper-plane"/>
                            Send
                        </button>
                    </form>
                </div>
                <img class="w-[300px] h-[300px] rounded" src="/images/alola.png" alt="alola">
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const email = reactive({
    name: String,
    content: String,
})
async function sendEmail(){

}
</script>
