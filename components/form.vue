<template>
    <div class="flex flex-col justify-center items-center w-full h-[350px] md:w-[350px]
                rounded shadow-2xl bg-white dark:bg-slate-800">
        <h3 class="font-poppins text-lg md:text-xl mt-10 mb-4">Send me a message!</h3>
        <form
              action="https://docs.google.com/forms/d/e/1FAIpQLSd4DhlVsmVRcgd0sKzOdg5ofAQcCwhv_ZBgn_wvE7tObK51GQ/formResponse"
              method="post" target="_blank"
              autocomplete="off" class="font-poppins flex flex-col text-sm gap-4 w-3/4 h-3/4">
            <input
                name="entry.268733639"
                class="outline-none p-2 rounded-lg bg-slate-100 dark:bg-slate-600" 
                required placeholder="Your name" type="text">
            <input
                name="entry.810499223" 
                class="outline-none p-2 rounded-lg bg-slate-100 dark:bg-slate-600" 
                required placeholder="Your email" type="email">
            <input
                name="entry.2004209441"
                class="block outline-none p-2 rounded-lg bg-slate-100 dark:bg-slate-600"
                required placeholder="Your message" type="text">
            <button class="bg-blue-500 w-[5rem] text-white rounded p-2 my-auto mx-auto" type="submit">
                <Icon name="ion:ios-paper-plane" />
                Send
            </button>
        </form>
    </div>
</template>