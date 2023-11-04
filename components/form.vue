<template>
    <div class="flex flex-col justify-center items-center md:w-1/2 h-[300px]
                rounded shadow-2xl p-8 bg-white dark:bg-slate-800">
        <h3 class="font-poppins text-xl mt-10 mb-4">Send me a message!</h3>
        <form @submit.prevent="sendEmail" autocomplete="off" class="font-poppins flex flex-col text-sm gap-4">
            <input 
                class="outline-none p-2 rounded-lg bg-slate-100 dark:bg-slate-600" 
                required placeholder="Your name" type="text" id="name">
            <input 
                class="outline-none p-2 rounded-lg bg-slate-100 dark:bg-slate-600" 
                required placeholder="Your email" type="email" id="email">
            <textarea 
                class="block outline-none p-2 rounded-lg resize-none bg-slate-100 dark:bg-slate-600"
                required placeholder="Your message" name="message" id="message" rows="3" cols="30">
            </textarea>
            <button class="bg-blue-500 w-[5rem] text-white rounded p-2 mx-auto mb-8" type="submit">
                <Icon name="ion:ios-paper-plane" />
                Send
            </button>
        </form>
    </div>
</template>

<script setup>
const email = reactive({
    name: String,
    content: String,
})

async function sendEmail() {
    console.log("Email button clicked")
}
</script>