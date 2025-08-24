<template>
    <div class="flex flex-col w-[90vw] items-center md:items-start md:w-auto md:flex-row gap-4">
        <div class="flex items-center justify-center aspect-video w-[80%] lg:w-1/2 transition ease-in-out hover:opacity-75">
            <a :href="url" target="_blank">
                <img class="rounded-md" :src="imagePath" :alt="projectName" />
            </a>
        </div>
        <div class="flex flex-col w-[80%] md:w-1/2">
            <h2 class="font-nunito text-lg">{{ projectName }}</h2>
            <p class="text-sm font-nunito leading-7 text-gray-700 dark:text-gray-300">{{ projectRole }}</p>
            <div class="bg-slate-800 opacity-80 rounded-sm text-white p-3 my-4">
                <p class="text-white text-sm font-nunito leading-7">{{ description }}</p>
            </div>
            <div class="tech-tags-container">
                <div v-for="(tech, index) in technologies" 
                     :key="index" 
                     class="tech-tag"
                     :data-color="tech.technologyColor">
                    {{ tech.technologyName }}
                </div>
            </div>
            <!-- <div class="flex flex-row gap-3 text-xl mt-4">
                <Icon class="cursor-pointer" name="ion:logo-github" />
                <Icon class="cursor-pointer" name="iconoir:open-new-window" />
            </div> -->
        </div>
    </div>
</template>

<script setup lang="ts">
interface Technology {
    technologyName: string,
    technologyColor: string
}

interface Props {
    url: string,
    imagePath: string,
    projectName: string,
    projectRole: string,
    description: string,
    technologies: Technology[]
}

const props = defineProps<Props>()

</script>

<style scoped>
.tech-tags-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.tech-tag {
  font-family: 'Nunito', sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  padding: 0.5rem 0.75rem;
  border-radius: 0.375rem;
  border: 1px solid;
  transition: all 0.3s ease;
  cursor: default;
  white-space: nowrap;
}

/* Color variants based on data-color attribute */
.tech-tag[data-color="blue"] {
  background-color: #dbeafe;
  color: #1e40af;
  border-color: #93c5fd;
}

.tech-tag[data-color="blue"]:hover {
  background-color: #bfdbfe;
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(59, 130, 246, 0.2);
}

.tech-tag[data-color="green"] {
  background-color: #d1fae5;
  color: #047857;
  border-color: #86efac;
}

.tech-tag[data-color="green"]:hover {
  background-color: #a7f3d0;
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(16, 185, 129, 0.2);
}

.tech-tag[data-color="yellow"] {
  background-color: #fef3c7;
  color: #92400e;
  border-color: #fcd34d;
}

.tech-tag[data-color="yellow"]:hover {
  background-color: #fde68a;
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(245, 158, 11, 0.2);
}

.tech-tag[data-color="red"] {
  background-color: #fee2e2;
  color: #b91c1c;
  border-color: #fca5a5;
}

.tech-tag[data-color="red"]:hover {
  background-color: #fecaca;
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(239, 68, 68, 0.2);
}

.tech-tag[data-color="pink"] {
  background-color: #fce7f3;
  color: #be185d;
  border-color: #f9a8d4;
}

.tech-tag[data-color="pink"]:hover {
  background-color: #fbcfe8;
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(236, 72, 153, 0.2);
}

.tech-tag[data-color="purple"] {
  background-color: #ede9fe;
  color: #7c3aed;
  border-color: #c4b5fd;
}

.tech-tag[data-color="purple"]:hover {
  background-color: #ddd6fe;
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(139, 92, 246, 0.2);
}

/* Default fallback styling */
.tech-tag:not([data-color]) {
  background-color: #f1f5f9;
  color: #334155;
  border-color: #cbd5e1;
}

.tech-tag:not([data-color]):hover {
  background-color: #e2e8f0;
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(100, 116, 139, 0.2);
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  .tech-tag[data-color="blue"] {
    background-color: rgba(59, 130, 246, 0.2);
    color: #93c5fd;
    border-color: rgba(59, 130, 246, 0.3);
  }
  
  .tech-tag[data-color="blue"]:hover {
    background-color: rgba(59, 130, 246, 0.3);
  }
  
  .tech-tag[data-color="green"] {
    background-color: rgba(16, 185, 129, 0.2);
    color: #86efac;
    border-color: rgba(16, 185, 129, 0.3);
  }
  
  .tech-tag[data-color="green"]:hover {
    background-color: rgba(16, 185, 129, 0.3);
  }
  
  .tech-tag[data-color="yellow"] {
    background-color: rgba(245, 158, 11, 0.2);
    color: #fcd34d;
    border-color: rgba(245, 158, 11, 0.3);
  }
  
  .tech-tag[data-color="yellow"]:hover {
    background-color: rgba(245, 158, 11, 0.3);
  }
  
  .tech-tag[data-color="red"] {
    background-color: rgba(239, 68, 68, 0.2);
    color: #fca5a5;
    border-color: rgba(239, 68, 68, 0.3);
  }
  
  .tech-tag[data-color="red"]:hover {
    background-color: rgba(239, 68, 68, 0.3);
  }
  
  .tech-tag[data-color="pink"] {
    background-color: rgba(236, 72, 153, 0.2);
    color: #f9a8d4;
    border-color: rgba(236, 72, 153, 0.3);
  }
  
  .tech-tag[data-color="pink"]:hover {
    background-color: rgba(236, 72, 153, 0.3);
  }
  
  .tech-tag[data-color="purple"] {
    background-color: rgba(139, 92, 246, 0.2);
    color: #c4b5fd;
    border-color: rgba(139, 92, 246, 0.3);
  }
  
  .tech-tag[data-color="purple"]:hover {
    background-color: rgba(139, 92, 246, 0.3);
  }
  
  .tech-tag:not([data-color]) {
    background-color: rgba(100, 116, 139, 0.2);
    color: #cbd5e1;
    border-color: rgba(100, 116, 139, 0.3);
  }
  
  .tech-tag:not([data-color]):hover {
    background-color: rgba(100, 116, 139, 0.3);
  }
}

/* Mobile responsiveness */
@media (max-width: 640px) {
  .tech-tags-container {
    gap: 0.375rem;
  }
  
  .tech-tag {
    font-size: 0.8rem;
    padding: 0.375rem 0.625rem;
  }
}

/* Ensure tags don't break layout on small screens */
@media (max-width: 480px) {
  .tech-tag {
    font-size: 0.75rem;
    padding: 0.3rem 0.5rem;
  }
}
</style>
