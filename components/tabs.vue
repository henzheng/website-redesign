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
    min-height: 250px;
    font-family: 'Nunito', sans-serif;
    gap: 2rem;
}

.tab {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    min-width: fit-content;
    flex-shrink: 0;
}

.tab button {
    font-family: 'Nunito', sans-serif;
    font-size: 0.9rem;
    line-height: 1.25rem;
    border: none;
    border-left: black solid 2px;
    outline: none;
    cursor: pointer;
    padding: 0.5rem 0.2rem;
    transition: 0.3s;
    text-align: left;
    min-height: 3rem;
    display: flex;
    align-items: center;
}

.tab button > span {
    margin-left: 1rem;
    white-space: nowrap;
    font-weight: 500;
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
    flex: 1;
    border: none;
    border-top: none;
    animation: fadeEffect 1s;
    padding-left: 1rem;
}

.tabcontent h3 {
    font-size: 1.25rem;
    line-height: 1.75rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
}

.tabcontent p {
    font-size: 0.875rem;
    line-height: 1.25rem;
    margin-bottom: 1rem;
    color: #6b7280;
    font-weight: 500;
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
    margin-bottom: 12px;
    list-style-type: '▸';
    padding-left: 0.5rem;
}
.tab-description {
    font-size: 0.875rem;
    line-height: 1.5rem;
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

@media only screen and (max-width: 768px) {
    .tab-container {
        flex-direction: column;
        gap: 1.5rem;
        min-height: auto;
    }

    .tab {
        width: 100%;
        flex-direction: column;
        gap: 0;
        overflow-x: auto;
        scrollbar-width: none;
        -ms-overflow-style: none;
    }

    .tab::-webkit-scrollbar {
        display: none;
    }

    .tab button {
        width: 100%;
        min-width: auto;
        border-left: none;
        border-bottom: black solid 2px;
        text-align: left;
        min-height: 3rem;
        padding: 0.75rem 1rem;
    }

    .tab button.active {
        border-left: none;
        border-bottom: #00a6ed solid 2px;
        background-color: rgba(0, 166, 237, 0.05);
    }

    .tab button > span {
        margin-left: 0;
        font-size: 0.875rem;
        font-weight: 500;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .tabcontent {
        padding-left: 0;
    }
}

@media (prefers-color-scheme: dark) {
    .tab button {
        border-left: white solid 2px;
    }
    
    .tabcontent p {
        color: #9ca3af;
    }
    
    @media only screen and (max-width: 768px) {
        .tab button {
            border-left: none;
            border-bottom: white solid 2px;
        }
        
        .tab button.active {
            border-left: none;
            border-bottom: #00a6ed solid 2px;
            background-color: rgba(0, 166, 237, 0.1);
        }
    }
}
</style>
