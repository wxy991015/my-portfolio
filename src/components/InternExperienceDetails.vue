<template>
  <div class="resume-panel-overlay" @click.self="$emit('close')">
    <div class="resume-panel">
      <button class="close-btn" @click="$emit('close')" aria-label="Close">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 9l6 6 6-6" stroke="#222" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <div class="resume-card">
        <div class="project-section">
          <div class="project-title">{{ projectName }}</div>
          <ul class="project-details">
            <li v-for="(detail, idx) in projectDetails" :key="idx">{{ detail }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      company: {
        type: String,
        required: true
      },
      projectName: {
        type: String,
        required: true
      },
      time: {
        type: String,
        required: true
      },
      projectDetails: {
        type: Array,
        required: false
      }
    }
  }
</script>

<style scoped>
  .resume-panel-overlay {
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(0,0,0,0.13);
    z-index: 9999;
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
  }
  .resume-panel {
    position: fixed;
    top: 8rem;
    right: 0;
    width: 360px;
    max-width: 98vw;
    height: calc(100vh - 8.5rem);
    background: #f8fafc;
    box-shadow: -2px 0 32px rgba(0,0,0,0.13);
    border-top-left-radius: 18px;
    border-bottom-left-radius: 18px;
    border-left: 4px solid #00b4d8;
    padding: 0;
    display: flex;
    flex-direction: column;
    z-index: 10000;
  }
  .resume-card {
    background: #fff;
    margin: 0.6rem 1rem 0.8rem 0.6rem;
    border-radius: 14px;
    box-shadow: 0 2px 12px rgba(124,58,237,0.06);
    padding: 1.8rem 1.6rem 1rem 1.6rem;
    display: flex;
    flex-direction: column;
  }
  .close-btn {
    position: absolute;
    top: 1.1rem;
    right: 1.2rem;
    background: none;
    border: none;
    padding: 0.2rem;
    font-size: 2rem;
    color: #222;
    cursor: pointer;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.15s;
  }
  .close-btn:hover {
    background: rgba(0,180,216,0.08);
    border-radius: 50%;
  }
  .project-section {
    margin-top: 0.1rem;
  }
  .project-title {
    font-size: 1rem;
    font-weight: 600;
    color: #22223b;
    margin-bottom: 0.5rem;
    letter-spacing: 0.01em;
  }
  .project-details {
    padding-left: 1em;
    color: #333;
    font-size: 0.95rem;
    margin: 0;
    line-height: 1.5;
  }
  .project-details li {
    margin-bottom: 0.2rem;
  }
  @media (max-width: 600px) {
    .resume-panel {
      width: 100vw;
      max-width: 100vw;
      border-radius: 0;
      top: 8rem;
      height: calc(100vh - 8.5rem);
    }
    .resume-card {
      margin: 0.5rem 0.2rem 0.7rem 0.2rem;
      padding: 1.2rem 0.5rem 1.2rem 0.5rem;
    }
  }
</style>
  