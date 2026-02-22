<script setup>
import { defineEmits } from 'vue'

const props = defineProps({
  navItems: {
    type: Array,
    required: true
  },
  currentSection: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['update:currentSection'])

function setCurrentSection(section) {
  emit('update:currentSection', section)
}
</script>

<template>
  <nav class="navbar longer-navbar">
    <button 
      v-for="item in navItems" 
      :key="item.key" 
      :class="['nav-btn', {active: currentSection === item.key}]" 
      @click="setCurrentSection(item.key)"
    >
        {{ item.label }}
    </button>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 5.5rem 1rem 5.5rem;
  background: var(--surface);
  border-bottom: 1.5px solid var(--primary);
  margin: 0 auto 2rem auto;
  max-width: 1100px;
  border-radius: 32px;
  position: sticky;
  top: 0.5rem;
  z-index: 10;
  transition: background 0.2s, border-color 0.2s;
}
.navbar.longer-navbar {
  max-width: 1400px;
  padding-left: 2rem;
  padding-right: 2rem;
  flex-wrap: wrap;
  overflow-x: auto;
}
@media (max-width: 900px) {
  .navbar.longer-navbar {
    max-width: 98vw;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    gap: 0.5rem;
    font-size: 0.98rem;
  }
}
.nav-btn {
  background: none;
  border: none;
  color: inherit;
  font-family: inherit;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 0.5rem 1.2rem;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.18s, color 0.18s;
}
.nav-btn.active, .nav-btn:hover {
  background: var(--primary);
  color: var(--surface);
}
</style> 