<template>
  <section class="intern-experience">
    <h2 class="section-title colorful-title">Intern Experience(实习经历)</h2>
    <div class="experience-list">
      <Card v-for="(intern, idx) in interns" :key="idx" @click="openDetails(intern)" :class="{ clickable: true }">
        <template #logo>
          <div class="logo-upload" style="cursor:default;">
            <div v-if="!intern.logo" class="logo-placeholder">Logo</div>
            <img v-else :src="intern.logo" alt="Intern Logo" class="logo-img" />
          </div>
        </template>
        <div class="main-info">
          <strong>{{ intern.company }}</strong><br>
          <div>{{ intern.position }}</div>
          <div>{{ intern.year }}</div>
        </div>
      </Card>
    </div>
    <transition name="slide-panel">
      <InternExperienceDetails
        v-if="showModal && selectedExperience?.projectDetails"
        :company="selectedExperience?.company"
        :projectName="selectedExperience?.projectName"
        :time="selectedExperience?.year"
        :projectDetails="selectedExperience?.projectDetails"
        @close="closeModal"
      />
    </transition>
  </section>
</template>

<script>
  import { ref, provide } from 'vue'
  import Card from './Card.vue'
  import { interns as internsData } from '../data/interns'
  import InternExperienceDetails from './InternExperienceDetails.vue'

  export default {
    components: {
      Card,
      InternExperienceDetails
    },
    setup() {
      const interns = ref(internsData)
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
        interns,
        showModal,
        selectedExperience,
        openDetails,
        closeModal
      }
    }
  }
</script>

<style scoped>
  .intern-experience {
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
    background: #fff;
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
    background: linear-gradient(90deg, #22c55e 0%, #00b4d8 50%, #f59e42 100%);
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