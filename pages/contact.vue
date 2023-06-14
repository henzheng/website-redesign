<template>
    <div class="pt-[6.5rem] px-0 mt-0 mx-[2rem] w-full">
        <div class="flex flex-col items-center justify-center">
            <div class="flex flex-row w-full items-center pb-4">
                <h1 class="font-poppins text-[2rem] mr-4">05. Get In Touch </h1>
                <hr class="border-[1.5px] border-black w-[200px]">
            </div>
            <img class="w-1/2" src="/images/pla-pokedex.png" alt="pla-pokedex">
            <p class="font-poppins text-sm mt-5">
                Feel free to send a message through social media or email if you want to get in touch!
                <i>The best way to contact me is via email.</i>
                I'm always open to new opportunities and learning experiences. 
                I check my inboxes often, so I'll try my best to get back to you <i>as soon as possible.</i>
                If you prefer, you can also send me a friend request on Discord <i>@coori.</i>
                Let's connect and explore the possibilities together!
            </p>
        </div>
        <!-- <div class="flex flex-row">
            <form @submit.prevent="sendEmail" 
                class="font-poppins flex flex-col w-1/2 p-4">
                <label for="name">Name</label>
                <input type="text" id="name" placeholder="Your name">
                <label for="name">Email</label>
                <input type="email" id="email" placeholder="Your email">
                <label for="message">Message</label>
                <textarea name="message" id="message" placeholder="Your message"></textarea>
                <button type="submit">Send</button>
            </form>
        </div> -->
    </div>
</template>

<!-- <script setup lang="ts">
const email = reactive({
    name: String,
    content: String,
})
async function sendEmail(){

}
</script> -->