<template>
    <div :class="getGridClass(index)" v-for="(row, index) in technologies" :key="`row-${index}`">
        <div v-for="(technology, imageIndex) in row" :key="`image-${imageIndex}`" class="hexagon">
            <img class="hexagon-image" :src="'/technologies/' + technology.toLowerCase() + '.png'" :alt="technology">
            <div class="hexagon-text font-satoshi text-sm">{{ technology }}</div>
        </div>
    </div>
</template>

<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  gsap.from('.hexagon', {
    delay: 0.5,
    scale: 0, 
    opacity: 0, 
    stagger: 0.1, 
    duration: 0.5, 
    ease: 'elastic.out(1, 0.3)', 
    scrollTrigger: '.hexagon',
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
    ['TypeScript', 'Git', 'Node', 'GitHub', 'Figma', 'HuggingFace', 'PyTorch'],
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
    flex-direction: column;
    justify-items: center;
    justify-content: center;
    background-color: #181616;
    /* use #f2f2f2 for light */
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 90px;
    height: 103.9236px;
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    margin: 2.5px 1.5px;
}

@media (prefers-color-scheme: light) {
    .hexagon {
        background-color: #f2f2f2;
    }
}
.hexagon-image:hover {
    cursor: pointer;
    opacity: 0.1;
}
.hexagon-image {
    height: 50%;
    object-fit: contain;
    object-position: center;
}
.hexagon-text {
    visibility: hidden;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white; /* Choose the text color that fits your design */
    text-align: center;
    transition: visibility 0s linear 0.3s, opacity 0.3s ease;
    pointer-events: none;
}

.hexagon:hover .hexagon-text {
    visibility: visible;
    opacity: 1;
    transition-delay: 0s;
    transition: opacity 0.75s linear;
}

.honeycomb-grid-odd {
    margin-left: 45px;
}

.honeycomb-grid-even, .honeycomb-grid-third {
    margin-top: -25px;
}

.honeycomb-grid-third {
    justify-content: flex-start;
    margin-left: 74px;
}
@media (max-width: 768px) {
  .hexagon {
    width: 10vw; /* Adjust hexagon size based on viewport width */
    height: 11.4236vw; /* Adjust hexagon height based on viewport width */
    margin: 1vw; /* Smaller margins for smaller screens */
  }

  .hexagon-text {
    font-size: 3vw; /* Larger text for smaller screens */
  }

  .honeycomb-grid-odd {
    margin-left: 5vw; /* Adjust the offset of odd rows for alignment */
  }

  .honeycomb-grid-even, .honeycomb-grid-third {
    margin-top: -2.5vw; /* Adjust the overlap of rows */
  }
}

@media (max-width: 480px) {
  .hexagon {
    width: 15vw; /* Even larger hexagons for very small screens */
    height: 17.4236vw;
  }

  .hexagon-text {
    font-size: 4vw; /* Even larger text for very small screens */
  }

  /* Simplify the grid for very small screens if necessary */
  .honeycomb-grid-odd, .honeycomb-grid-even, .honeycomb-grid-third {
    margin-left: 0;
    justify-content: center;
  }
}
</style>
