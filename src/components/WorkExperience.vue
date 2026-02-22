<template>
  <section class="work-experience">
    <h2 class="section-title colorful-title">Work Experience(工作经历)</h2>
    <div class="experience-list">
      <Card v-for="(work, idx) in works" :key="idx" @click="openDetails(work)" :class="{ clickable: true }">
        <template #logo>
          <div class="logo-upload" style="cursor:default;">
            <div v-if="!work.logo" class="logo-placeholder">Logo</div>
            <img v-else :src="work.logo" alt="Work Logo" class="logo-img" />
          </div>
        </template>
        <div class="main-info">
          <strong>{{ work.company }}</strong><br>
          <div>{{ work.position }}</div>
          <div>{{ work.year }}</div>
        </div>
      </Card>
    </div>
    <transition name="slide-panel">
      <WorkExperienceDetails
        v-if="showModal && selectedExperience?.projects"
        :company="selectedExperience?.company"
        :time="selectedExperience?.year"
        :projects="selectedExperience?.projects"
        @close="closeModal"
      />
    </transition>
  </section>
</template>

<script>
import { ref } from 'vue'
import Card from './Card.vue'
import WorkExperienceDetails from './WorkExperienceDetails.vue'
import { works as worksData } from '../data/works.js'

export default {
  components: {
    Card,
    WorkExperienceDetails
  },
  setup() {
    const works = ref(worksData)
    const showModal = ref(false)
    const selectedExperience = ref(null)

    function openDetails(experience) {
      selectedExperience.value = experience
      showModal.value = true
    }

    function closeModal() {
      showModal.value = false
      selectedExperience.value = null
    }

    return {
      works,
      showModal,
      selectedExperience,
      openDetails,
      closeModal
    }
  }
}
</script>

<style scoped>
  .work-experience {
    margin-bottom: 2rem;
  }
  .experience-list {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
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
    background: #f3f4f6;
    border: 1.5px dashed #f59e42;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #f59e42;
    font-size: 0.9rem;
    font-weight: 600;
  }
  .logo-img {
    width: 60px;
    height: 60px;
    object-fit: contain;
    border-radius: 8px;
    border: 1.5px solid #f59e42;
    background: #fff;
  }
  .card.clickable {
    cursor: pointer;
    user-select: none;
    transition: box-shadow 0.2s, border-color 0.2s, background 0.2s;
  }
  .card.clickable:hover {
    background: #1a1d22;
    border-color: #fbbf24;
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
    background: linear-gradient(90deg, #f59e42 0%, #7c3aed 50%, #00b4d8 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 900;
    letter-spacing: 0.01em;
    margin-bottom: 1.2rem;
  }
  /* Slide panel animation */
  .slide-panel-enter-active, .slide-panel-leave-active {
    transition: transform 0.3s cubic-bezier(.4,2,.6,1), opacity 0.3s;
  }
  .slide-panel-enter-from, .slide-panel-leave-to {
    transform: translateX(100%);
    opacity: 0;
  }
  .slide-panel-enter-to, .slide-panel-leave-from {
    transform: translateX(0);
    opacity: 1;
  }
</style> 