<template>
  <section class="project-experience">
    <h2 class="section-title colorful-title">Project Experience</h2>
    <div class="experience-list">
      <Card v-for="(project, idx) in projects" :key="idx" @click="openDetails(project)" :class="{ clickable: true }">
        <template #logo>
          <div class="logo-upload" style="cursor:default;">
            <div v-if="!project.logo" class="logo-placeholder">Logo</div>
            <img v-else :src="project.logo" alt="Project Logo" class="logo-img" />
          </div>
        </template>
        <div class="main-info">
          <strong>{{ project.name }}</strong><br>
          <div>{{ project.role }}</div>
          <div>{{ project.year }}</div>
        </div>
      </Card>
    </div>
    <transition name="slide-panel">
      <ProjectDetails
        v-if="showModal"
        :name="selectedProject?.name"
        :role="selectedProject?.role"
        :year="selectedProject?.year"
        :details="selectedProject?.details"
        @close="closeModal"
      />
    </transition>
  </section>
</template>

<script>
import { ref } from 'vue'
import Card from './Card.vue'
import { projects as projectsData } from '../data/projects'
import ProjectDetails from './ProjectDetails.vue'

export default {
  components: {
    Card,
    ProjectDetails
  },
  setup() {
    const projects = ref(projectsData)
    const showModal = ref(false)
    const selectedProject = ref(null)

    function openDetails(project) {
      selectedProject.value = project
      showModal.value = true
    }

    function closeModal() {
      showModal.value = false
      selectedProject.value = null
    }

    return {
      projects,
      showModal,
      selectedProject,
      openDetails,
      closeModal
    }
  }
}

</script>

<style scoped>
.project-experience {
  margin-bottom: 2rem;
}
.section-title {
  margin-bottom: 0.7rem;
}
.project-type-selector {
  display: flex;
  gap: 2.5rem;
  justify-content: center;
  margin-bottom: 1.5rem;
}
.type-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(120deg, #23272f 80%, #22223b 100%);
  border: 2.5px solid #7c3aed;
  border-radius: 18px;
  box-shadow: 0 2px 12px rgba(124,58,237,0.10);
  padding: 1.2em 2.2em 1em 2.2em;
  cursor: pointer;
  transition: box-shadow 0.2s, border-color 0.2s, background 0.2s, transform 0.18s;
  min-width: 140px;
  min-height: 120px;
  font-weight: 700;
  font-size: 1.1rem;
  color: #7c3aed;
  user-select: none;
  text-decoration: none;
}
.type-card .type-icon {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}
.type-card:hover {
  border-color: #00b4d8;
  background: linear-gradient(120deg, #1a1d22 80%, #23272f 100%);
  color: #00b4d8;
  transform: scale(1.06);
  box-shadow: 0 4px 24px rgba(0,180,216,0.13);
}
.subsection-title {
  font-size: 1.15rem;
  font-weight: 700;
  color: #22c55e;
  margin: 1.2rem 0 0.7rem 0;
  letter-spacing: 0.01em;
  text-align: center;
}
.experience-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 0.5rem;
}
.logo-upload {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
.logo-placeholder {
  width: 60px;
  height: 60px;
  border-radius: 8px;
  background: #23272f;
  border: 1.5px dashed #00b4d8;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #00b4d8;
  font-size: 0.9rem;
  font-weight: 600;
}
.logo-img {
  width: 60px;
  height: 60px;
  object-fit: contain;
  border-radius: 8px;
  border: 1.5px solid #00b4d8;
  background: #181c20;
}
.card.clickable {
  cursor: pointer;
  user-select: none;
  transition: box-shadow 0.2s, border-color 0.2s, background 0.2s;
}
.card.clickable:hover {
  background: #1a1d22;
  border-color: #48cae4;
}
.main-info {
  font-size: 1.05rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}
.details {
  margin-top: 0.5rem;
  color: #b0c4d8;
  font-size: 0.98rem;
}
.colorful-title {
  background: linear-gradient(90deg, #7c3aed 0%, #00b4d8 50%, #22c55e 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 900;
  letter-spacing: 0.01em;
  margin-bottom: 1.2rem;
}
</style> 