<template>
  <div class="skills-container mt-8 max-w-4xl">
    <div v-if="!skills || skills.length === 0" class="text-red-500">
      No skills data available
    </div>
    <div v-for="(category, index) in skills" :key="index" class="skill-category mb-6 sm:mb-8">
      <h3 class="skill-category-title font-sentient text-lg sm:text-xl text-black dark:text-white mb-3 sm:mb-4">{{ category.title }}</h3>
      <ul class="skills-list">
        <li v-for="(skill, skillIndex) in getSkillsArray(category.description)" 
            :key="skillIndex" 
            class="skill-item">
          {{ skill }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import skills from "~/assets/content/skills.json";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Skills data loaded successfully

onMounted(() => {
  nextTick(() => {
    const skillItems = document.querySelectorAll('.skill-item');
    
    if (skillItems.length === 0) {
      console.warn('No skill items found');
      return;
    }
    
    // Simple fade-in animation for each bullet point
    gsap.from('.skill-item', {
      opacity: 0,
      y: 20,
      duration: 0.5,
      stagger: 0.08,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.skills-container',
        start: 'top 80%',
        once: true
      }
    });
  });
});

const getSkillsArray = (description) => {
  if (!description) return [];
  
  // Smart parsing to handle parentheses
  const skills = [];
  let currentSkill = '';
  let parenthesesDepth = 0;
  
  for (let i = 0; i < description.length; i++) {
    const char = description[i];
    
    if (char === '(') {
      parenthesesDepth++;
      currentSkill += char;
    } else if (char === ')') {
      parenthesesDepth--;
      currentSkill += char;
    } else if (char === ',' && parenthesesDepth === 0) {
      // Only split on commas outside of parentheses
      if (currentSkill.trim()) {
        skills.push(currentSkill.trim());
      }
      currentSkill = '';
      // Skip the space after comma if it exists
      if (description[i + 1] === ' ') {
        i++;
      }
    } else {
      currentSkill += char;
    }
  }
  
  // Add the last skill
  if (currentSkill.trim()) {
    skills.push(currentSkill.trim());
  }
  
  return skills;
};
</script>

<style scoped>
.skills-container {
  width: 100%;
  padding: 0 1rem;
}

/* Responsive container sizing */
@media (min-width: 640px) {
  .skills-container {
    padding: 0;
  }
}

.skills-list {
  list-style: none;
  padding: 0;
  margin: 0;
  columns: 1;
  column-gap: 1.5rem;
  column-fill: balance;
}

/* Responsive column layout */
@media (min-width: 640px) {
  .skills-list {
    columns: 2;
    column-gap: 2rem;
  }
}

@media (min-width: 1024px) {
  .skills-list {
    columns: 3;
    column-gap: 2.5rem;
  }
}

.skill-item {
  font-family: 'Nunito', sans-serif;
  font-size: 0.92rem;
  font-weight: 500;
  color: #334155;
  padding: 0.25rem 0;
  margin-bottom: 0.5rem;
  break-inside: avoid;
  position: relative;
  padding-left: 1.1rem;
  line-height: 1.5;
  
  /* Custom bullet point */
  &::before {
    content: '•';
    position: absolute;
    left: 0;
    color: #64748b;
    font-weight: bold;
    font-size: 1.035rem;
  }
}

/* Responsive text sizing */
@media (min-width: 640px) {
  .skill-item {
    font-size: 0.875rem;
    padding: 0.25rem 0;
    margin-bottom: 0.5rem;
    padding-left: 1rem;
    
    &::before {
      font-size: 0.9rem;
    }
  }
}

@media (min-width: 1024px) {
  .skill-item {
    font-size: 0.875rem;
    line-height: 1.5;
  }
}

/* Dark mode styles */
@media (prefers-color-scheme: dark) {
  .skill-item {
    color: #e2e8f0;
    
    &::before {
      color: #94a3b8;
    }
  }
}

.skill-category-title {
  font-weight: 600;
  letter-spacing: -0.025em;
  font-size: 1.294rem;
}

@media (min-width: 640px) {
  .skill-category-title {
    font-size: 1.438rem;
  }
}

/* Additional mobile optimizations */
@media (max-width: 480px) {
  .skills-container {
    margin-top: 1.5rem;
    padding: 0 0.75rem;
  }
  
  .skill-category {
    margin-bottom: 1.25rem !important;
  }
  
  .skill-category-title {
    font-size: 1.15rem !important;
    margin-bottom: 0.75rem !important;
  }
  
  .skill-item {
    font-size: 0.87rem !important;
    padding: 0.2rem 0 !important;
    margin-bottom: 0.4rem !important;
    padding-left: 0.95rem !important;
    
    &::before {
      font-size: 0.98rem !important;
    }
  }
}
</style>