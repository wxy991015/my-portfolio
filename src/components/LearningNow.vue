<template>
  <section class="learning-section">
    <h2 class="section-title colorful-title">Currently Learning</h2>
    <div class="learning-list">
      <div class="learning-card" v-for="item in learningSkills" :key="item.name">
        <span class="learning-icon">
          <template v-if="item.icon.startsWith('http')">
            <img :src="item.icon" :alt="item.name + ' logo'" class="icon-img" />
          </template>
          <template v-else>
            {{ item.icon }}
          </template>
        </span>
        <span class="learning-label">{{ item.name }}</span>
      </div>
    </div>
  </section>
</template>

<script>

// make sure data exports to template directly
import { learningSkills } from '../data/skills'

export default {
  data() {
    return {
      learningSkills: learningSkills
    }
  }
}

</script>

<style scoped>
  .learning-section {
    margin-bottom: 2rem;
  }
  .section-title.colorful-title {
    background: linear-gradient(90deg, #00b4d8 0%, #7c3aed 50%, #f59e42 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 900;
    letter-spacing: 0.01em;
    margin-bottom: 1.2rem;
    text-align: center;
  }
  .learning-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 1.1rem;
    margin-bottom: 0.5rem;
  }
  .learning-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(120deg, #23272f 80%, #22223b 100%);
    border: 1.5px solid #00b4d8;
    border-radius: 10px;
    box-shadow: 0 2px 12px rgba(124,58,237,0.08);
    padding: 1.1em 0.5em 0.7em 0.5em;
    transition: box-shadow 0.2s, border-color 0.2s, background 0.2s;
    cursor: default;
  }
  .learning-card:hover {
    border-color: #f59e42;
    box-shadow: 0 4px 24px rgba(245,158,66,0.13);
    background: linear-gradient(120deg, #1a1d22 80%, #23272f 100%);
  }
  .learning-icon {
    font-size: 2.1rem;
    margin-bottom: 0.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .icon-img {
    width: 2.1rem;
    height: 2.1rem;
    object-fit: contain;
    display: block;
  }
  .learning-label {
    font-size: 1rem;
    color: #e0e6ed;
    font-weight: 600;
    text-align: center;
  }
</style> 