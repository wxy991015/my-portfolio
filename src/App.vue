<script setup>
  import { ref, onMounted } from 'vue'
  import BasicInformation from './components/BasicInformation.vue'
  import EducationBackground from './components/EducationBackground.vue'
  import InternExperience from './components/InternExperience.vue'
  import WorkExperience from './components/WorkExperience.vue'
  import Skills from './components/Skills.vue'
  import LearningNow from './components/LearningNow.vue'
  import Certifications from './components/Certifications.vue'
  import ProjectExperience from './components/ProjectExperience.vue'
  import NavBar from './components/NavBar.vue'

  const navItems = [
    { key: 'basic', label: 'Basic Information' },
    { key: 'education', label: 'Education' },
    { key: 'project', label: 'Project Experience' },
    { key: 'intern', label: 'Intern Experience' },
    { key: 'work', label: 'Work Experience' },
    { key: 'skills', label: 'Skills' },
    { key: 'certifications', label: 'Certifications' },
  ]
  const currentSection = ref('basic')
  const theme = ref('dark')

  // Initialize theme immediately to prevent flash
  document.documentElement.classList.add('dark-mode')

  function setTheme(newTheme) {
    theme.value = newTheme
    document.documentElement.classList.remove('dark-mode', 'light-mode')
    document.documentElement.classList.add(`${newTheme}-mode`)
    localStorage.setItem('theme', newTheme)
  }

  function toggleTheme() {
    setTheme(theme.value === 'dark' ? 'light' : 'dark')
  }

  onMounted(() => {
    const saved = localStorage.getItem('theme')
    if (saved === 'dark' || saved === 'light') {
      setTheme(saved)
    } else {
      // Use system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setTheme(prefersDark ? 'dark' : 'light')
    }
  })
</script>

<template>
  <div class="background-effects">
    <!-- Animated gradient blobs -->
    <div class="blob blob1"></div>
    <div class="blob blob2"></div>
    <div class="lines-bg">
      <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
        <line x1="0" y1="10" x2="100" y2="30" stroke="#7c3aed33" stroke-width="2" />
        <line x1="0" y1="60" x2="100" y2="80" stroke="#00b4d833" stroke-width="2" />
        <line x1="0" y1="90" x2="100" y2="50" stroke="#f59e4233" stroke-width="2" />
      </svg>
    </div>
  </div>
  <div>
    <header class="site-title">Welcome to www.潇洋是帅哥.com
      <button class="theme-toggle-btn" @click="toggleTheme">
        {{ theme === 'dark' ? '🌙 Dark' : '☀️ Light' }}
      </button>
    </header>
    <NavBar 
      :navItems="navItems" 
      :currentSection="currentSection" 
      @update:currentSection="currentSection = $event"
    />
    <main>
      <BasicInformation v-if="currentSection === 'basic'" />
      <EducationBackground v-if="currentSection === 'education'" />
      <ProjectExperience v-if="currentSection === 'project'" />
      <InternExperience v-if="currentSection === 'intern'" />
      <WorkExperience v-if="currentSection === 'work'" />
      <Skills v-if="currentSection === 'skills'" />
      <LearningNow v-if="currentSection === 'skills'" />
      <Certifications v-if="currentSection === 'certifications'" />
    </main>
  </div>
</template>

<style>
.background-effects {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
}
.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(32px);
  opacity: 0.45;
  animation: blobMove 18s infinite alternate ease-in-out;
}
.blob1 {
  width: 420px;
  height: 420px;
  background: radial-gradient(circle at 30% 30%, #7c3aed 0%, #38bdf8 100%);
  top: -120px;
  left: -120px;
  animation-delay: 0s;
}
.blob2 {
  width: 340px;
  height: 340px;
  background: radial-gradient(circle at 70% 70%, #f59e42 0%, #22c55e 100%);
  bottom: -100px;
  right: -100px;
  animation-delay: 4s;
}
@keyframes blobMove {
  0% {
    transform: scale(1) translate(0, 0);
  }
  100% {
    transform: scale(1.15) translate(40px, 40px);
  }
}
.lines-bg {
  position: absolute;
  inset: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  pointer-events: none;
}
.site-title {
  text-align: center;
  font-size: 2.2rem;
  font-weight: 800;
  letter-spacing: 0.02em;
  color: var(--primary);
  margin-top: 2.5rem;
  margin-bottom: 0.5rem;
  font-family: 'Fira Mono', 'Menlo', 'Monaco', 'Consolas', monospace;
  text-shadow: 0 2px 12px rgba(0,180,216,0.10);
  z-index: 2;
  position: relative;
  transition: color 0.2s;
}

main {
  max-width: 700px;
  margin: 2rem auto;
  padding: 2rem;
  background: var(--surface);
  border-radius: 12px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.07);
  z-index: 2;
  position: relative;
  border: 1.5px solid var(--primary);
  transition: background 0.2s, border-color 0.2s;
}
</style>
