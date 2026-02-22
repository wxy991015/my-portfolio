// add 
<template>
  <section class="education-background">
    <h2 class="section-title colorful-title">Education Background(教育背景)</h2>
    <div class="education-list">
      <Card 
        v-for="(education, idx) in educations"
        :key="idx" 
        @click="openDetails(education)" 
        :class="{ clickable: true }"
      >
        <template v-slot:logo>
          <div class="school-logo-wrap">
            <img class="school-logo" :src="education.logo" :alt="education.school + ' Logo'" />
          </div>
        </template>
        <div class="school-main">
          <div class="school-title">{{ education.school }}</div>
          <div class="school-degree">{{ education.degree }}</div>
          <div class="school-duration">{{ education.startDate }} - {{ education.endDate }}</div>
          <div v-if="education.gpa" class="school-gpa">GPA: {{ education.gpa }}</div>
        </div>
      </Card>
    </div>
    <transition name="slide-panel">
      <EducationBackgroundDetails
        v-if="showModal && (selectedEducation?.coreCourses || selectedEducation?.projects)"
        :schoolName="selectedEducation?.school"
        :duration="`${selectedEducation?.startDate} - ${selectedEducation?.endDate}`"
        :coreCourses="selectedEducation?.coreCourses"
        :projects="selectedEducation?.projects"
        @close="closeModal"
      />
    </transition>
  </section>
</template>

<script>
  import { ref } from 'vue'
  import { educations as educationsData } from '../data/educations'
  import EducationBackgroundDetails from './EducationBackgroundDetails.vue'
  import Card from './Card.vue'

  export default {
    components: {
      Card,
      EducationBackgroundDetails,
    },
    setup() {
      const educations = ref(educationsData)

      const showModal = ref(false)
      const selectedEducation = ref(null)

      function openDetails(education) {
        selectedEducation.value = education
        showModal.value = true
      }

      function closeModal() {
        showModal.value = false
        selectedEducation.value = null
      }

      return {
        educations,
        showModal,
        selectedEducation,
        openDetails,
        closeModal
      }
    }
  }
</script>

<style scoped>
  .education-background {
    margin-bottom: 2rem;
  }
  .education-list {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  .education-card {
    width: 100%;
  }
  .education-card.clickable {
    cursor: pointer;
    user-select: none;
    transition: box-shadow 0.2s, border-color 0.2s, background 0.2s;
  }
  .education-card.clickable:hover {
    background: #1a1d22;
    border-color: #48cae4;
  }
  .colorful-title {
    background: linear-gradient(90deg, #00b4d8 0%, #7c3aed 50%, #f59e42 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 900;
    letter-spacing: 0.01em;
    margin-bottom: 1.2rem;
  }
  .school-logo-wrap {
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
  }
  .school-logo {
    height: 40px;
    max-width: 120px;
    object-fit: contain;
    background: #fff;
    border-radius: 6px;
    border: 1px solid #e0e6ed;
    box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    padding: 2px 8px;
  }
  .school-row {
    display: flex;
    align-items: center;
    gap: 1.2rem;
  }
  .school-main {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .school-title {
    font-size: 1.18rem;
    font-weight: 700;
    color: #0ea5e9;
    letter-spacing: 0.01em;
    margin-bottom: 0.1rem;
  }
  .school-duration {
    font-size: 0.95rem;
    font-weight: 500;
    color: #b0c4d8;
    margin-bottom: 0.1rem;
  }
  .school-gpa {
    font-size: 0.95rem;
    font-weight: 500;
    color: #b0c4d8;
    margin-bottom: 0.1rem;
  }
  .school-degree {
    font-size: 1.02rem;
    font-weight: 500;
    color: #4f5d75;
    margin-bottom: 0.1rem;
  }
  .school-extra {
    margin-left: 2.5rem;
    color: #b0c4d8;
    font-size: 0.98rem;
    margin-top: 0.2rem;
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