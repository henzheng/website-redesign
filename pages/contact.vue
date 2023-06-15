<template>
    <div class="pt-[6.5rem] px-0 mt-0 mx-[2rem] w-full">
        <div class="flex flex-col items-center justify-center">
            <div class="flex flex-row w-full items-center pb-4">
                <h1 class="font-poppins text-[2rem] mr-4">05. Get In Touch </h1>
                <hr class="border-[1.5px] border-black w-[200px]">
            </div>
            <p class="font-poppins text-sm mt-5">
                Feel free to send a message through social media or email if you want to get in touch!
                <i>The best way to contact me is via email.</i>
                I'm always open to new opportunities and learning experiences. 
                I check my inboxes often, so I'll try my best to get back to you as soon as possible.
                If you prefer, you can also send me a friend request on Discord <i>@coori.</i>
                Let's connect and explore the possibilities together!
            </p>
            <!-- <img class="w-1/2" src="/images/pla-pokedex.png" alt="pla-pokedex"> -->
            <div class="flex flex-row items-center gap-8">
                <div class="flex flex-col justify-center items-center w-[400px] bg-white rounded shadow-2xl p-5">
                    <h3 class="font-poppins text-2xl mb-2">Send me a message!</h3>
                    <form 
                        @submit.prevent="sendEmail"
                        autocomplete="off"
                        class="font-poppins flex flex-col text-sm w-3/4 gap-5">
                        <label for="name" hidden>Name</label>
                        <input class="outline-none p-2 bg-slate-100 rounded-lg" type="text" id="name" placeholder="Your name">
                        <label for="name" hidden>Email</label>
                        <input class="outline-none p-2 bg-slate-100 rounded-lg" type="email" id="email" placeholder="Your email">
                        <label for="message" hidden>Message</label>
                        <textarea 
                            class="outline-none p-2 bg-slate-100 rounded-lg resize-none" 
                            name="message" 
                            id="message" 
                            placeholder="Your message"
                            rows="4"
                            cols="30"
                        >
                        </textarea>
                        <button class="bg-blue-500 w-[5rem] text-white rounded p-2 m-auto" type="submit">
                            <Icon name="ion:ios-paper-plane"/>
                            Send
                        </button>
                    </form>
                </div>
                <img class="h-1/3 w-1/3" src="/images/pla-rei-full.png" alt="profile">
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
