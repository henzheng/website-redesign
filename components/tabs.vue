<template>
    <div class="tab-container">
        <div class="tab">
            <button v-for="(experience, index) in data" @click="openTab" :link="experience.id" class="tablinks">
                <span>{{ experience.workplace }}</span>
            </button>
        </div>
        <div v-for="(experience, index) in data" :class="index === 0 ? 'tabcontent active' : 'tabcontent'" :id="experience.id">
            <h3>{{ experience.position }} <a :href="experience.url" target="_blank">@ {{ experience.workplace }}</a></h3>
            <p>{{ experience.timeframe }}</p>
            <div class="tab-description">
                <ul>
                    <li v-for="(bullet, index) in experience.description" class="bullet-point">{{ bullet }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import data from "~/assets/content/experiences.json";
console.log(data);

onMounted(async () => {
    document.querySelectorAll(".tablinks")[0]?.click();
})

function openTab(event) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";

    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    const tabId = event.currentTarget.getAttribute("link");
    document.getElementById(tabId).style.display = "block";
    event.currentTarget.className += " active";
}
</script>

<style scoped>
.tab-container {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 200px;
    font-family: 'Poppins', sans-serif;
    gap: 3rem;
}

.tab {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    width: 33%;
}

.tab button {
    font-family: 'Poppins', sans-serif;
    font-size: 0.9rem;
    line-height: 1.25rem;
    border: none;
    border-left: black solid 2px;
    outline: none;
    cursor: pointer;
    padding: 0.2rem;
    transition: 0.3s;
    text-align: left;
}

.tab button > span {
    margin-left: 1rem;
    white-space: nowrap;
}

.tab button.active {
    border-left: #00a6ed solid 2px;
}

.tab button.active > span {
    color: #00a6ed ;
}

.tab button:hover {
    color: #00a6ed;
}

.tabcontent {
    display: none;
    width: 66%;
    border: none;
    border-top: none;
    animation: fadeEffect 1s;
}

.tabcontent h3 {
    font-size: 1.125rem;
    line-height: 1.75rem;
}

.tabcontent p {
    font-size: 0.875rem;
    line-height: 1.25rem;
    margin-bottom: 10px;
}

.tabcontent a {
    display: inline-block;
    transition: all ease-in-out 150ms;
    color: #00a6ed
}

.tabcontent a:hover {
    transform: translateY(-2.5px);
}

.tabcontent li {
    pointer-events: none;
    margin-bottom: 10px;
    list-style-type: '➡️   ';
}
.tab-description {
    font-size: 0.875rem;
    line-height: 1.25rem;
    pointer-events: none;
}


@keyframes fadeEffect {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

@media only screen and (max-width: 640px) {
    .tab-container {
        flex-direction: column;
        align-items: center;
        height: 50vh;
        width: 90vw;
        gap: 2rem;
    }

    .tab {
        width: 65%;
    }
}

@media (prefers-color-scheme: dark) {
    .tab button {
        border-left: white solid 2px;
    }
}
</style>
