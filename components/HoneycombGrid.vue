<template>
    <div :class="getGridClass(index)" v-for="(row, index) in technologies" :key="`row-${index}`">
        <div v-for="(technology, imageIndex) in row" :key="`image-${imageIndex}`" class="hexagon">
            <img class="hexagon-image" :src="'/technologies/' + (technology.toLowerCase() === 'aws' ? 'aws.jpg' : technology.toLowerCase() + '.png')" :alt="technology">
        </div>
    </div>
</template>

<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  gsap.from('.hexagon', {
    scale: 0, 
    opacity: 0, 
    stagger: 0.1, 
    duration: 0.6, 
    ease: 'back.out(1.7)',
    scrollTrigger: {
      trigger: '.hexagon',
      start: 'top 80%',
      once: true
    }
  });
});

const getGridClass = (index) => {
    return {
        'honeycomb-grid': true,
        'honeycomb-grid-odd': index % 2 === 0,
        'honeycomb-grid-even': index % 2 !== 0,
        'honeycomb-grid-third': index === 2,
    };
};

const technologies = [
    ['CSS', 'Django', 'Docker', 'HTML', 'JavaScript', 'MongoDB', 'Nuxt'],
    ['Python', 'React', 'Supabase', 'Svelte', 'TailwindCSS', 'Ubuntu', 'Vue'],
    ['TypeScript', 'Git', 'Node', 'GitHub', 'Figma', 'Huggingface', 'AWS'],
]
</script>

<style scoped>
.honeycomb-grid {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
}

.hexagon {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #181616;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 90px;
    height: 103.9236px;
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    margin: 4px;
}

@media (prefers-color-scheme: light) {
    .hexagon {
        background-color: #f2f2f2;
    }
}

.hexagon-image {
    width: 40px;
    height: 40px;
    object-fit: contain;
    object-position: center;
    flex-shrink: 0;
}


.honeycomb-grid-odd {
    margin-left: 47px;
}

.honeycomb-grid-even, .honeycomb-grid-third {
    margin-top: -26px;
}

.honeycomb-grid-third {
    justify-content: center;
    margin-left: 47px;
}

@media (max-width: 768px) {
  .hexagon {
    width: 10vw;
    height: 11.4236vw;
    margin: 0.8vw;
  }

  .hexagon-image {
    width: 28px;
    height: 28px;
  }

  .honeycomb-grid-odd {
    margin-left: 5.2vw;
  }

  .honeycomb-grid-even, .honeycomb-grid-third {
    margin-top: -2.8vw;
  }
}

@media (max-width: 480px) {
  .hexagon {
    width: 15vw;
    height: 17.4236vw;
    margin: 1.2vw;
  }

  .hexagon-image {
    width: 24px;
    height: 24px;
  }

  .honeycomb-grid-odd, .honeycomb-grid-even, .honeycomb-grid-third {
    margin-left: 0;
    justify-content: center;
  }
}
</style>