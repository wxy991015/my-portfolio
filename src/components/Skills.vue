<template>
  <section class="skills-section">
    <h2 class="section-title colorful-title">Skills(技能)</h2>
    <div class="skills-group">
      <h3 class="skills-subtitle">Technical Skills</h3>
      <div class="skills-list">
        <div class="skill-card" v-for="skill in technicalSkills" :key="skill.name">
          <span class="skill-icon">
            <template v-if="skill.icon.startsWith('http')">
              <img :src="skill.icon" :alt="skill.name + ' logo'" class="icon-img" />
            </template>
            <template v-else>
              {{ skill.icon }}
            </template>
          </span>
          <span class="skill-label">{{ skill.name }}</span>
        </div>
      </div>
    </div>
    <div class="skills-group">
      <h3 class="skills-subtitle">Language Skills</h3>
      <div class="skills-list">
        <div class="skill-card" v-for="skill in languageSkills" :key="skill.name">
          <span class="skill-icon">{{ skill.icon }}</span>
          <span class="skill-label">{{ skill.name }}</span>
        </div>
      </div>
    </div>
    <div class="skills-group">
      <h3 class="skills-subtitle">Other Skills</h3>
      <div class="skills-list">
        <div class="skill-card" v-for="skill in otherSkills" :key="skill.name">
          <span class="skill-icon">{{ skill.icon }}</span>
          <span class="skill-label">{{ skill.name }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

import { technicalSkills, languageSkills, otherSkills } from '../data/skills'

export default {
  data() {
    return {
      technicalSkills: technicalSkills,
      languageSkills: languageSkills,
      otherSkills: otherSkills
    }
  }
}

</script>

<style scoped>
  .skills-section {
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
  .skills-group {
    margin-bottom: 1.5rem;
  }
  .skills-subtitle {
    font-size: 1.1rem;
    font-weight: 700;
    color: #7c3aed;
    margin-bottom: 0.7rem;
    margin-top: 0.5rem;
    letter-spacing: 0.01em;
  }
  .skills-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 1.1rem;
    margin-bottom: 0.5rem;
  }
  .skill-card {
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
  .skill-card:hover {
    border-color: #f59e42;
    box-shadow: 0 4px 24px rgba(245,158,66,0.13);
    background: linear-gradient(120deg, #1a1d22 80%, #23272f 100%);
  }
  .skill-icon {
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
  .icon-img[src*="amazonwebservices"],
  .icon-img[src*="apachekafka"] {
    background: #fff;
    border-radius: 6px;
    border: 1.5px solid #e0e6ed;
    box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    padding: 2px 4px;
  }
  .skill-label {
    font-size: 1rem;
    color: #e0e6ed;
    font-weight: 600;
    text-align: center;
  }
</style> 