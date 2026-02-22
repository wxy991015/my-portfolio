<template>
  <section class="certifications-section">
    <h2 class="section-title colorful-title">Certifications(认证)</h2>
    <div class="cert-section">
      <h3 class="cert-section-title">Already Obtained</h3>
      <div class="certifications-list">
        <div class="certification-card" v-for="cert in alreadyGot" :key="cert.name">
          <span class="certification-icon">
            <template v-if="cert.icon.startsWith('http')">
              <img :src="cert.icon" :alt="cert.name + ' logo'" class="icon-img" />
            </template>
            <template v-else>
              {{ cert.icon }}
            </template>
          </span>
          <span class="certification-label">{{ cert.name }}</span>
          <span class="certification-issuer">{{ cert.issuer }}</span>
          <span class="certification-date">{{ cert.date }}</span>
        </div>
      </div>
    </div>
    <div class="cert-section">
      <h3 class="cert-section-title">Currently Learning</h3>
      <div class="certifications-list">
        <div class="certification-card" v-for="cert in learningNow" :key="cert.name">
          <span class="certification-icon">
            <template v-if="cert.icon.startsWith('http')">
              <img :src="cert.icon" :alt="cert.name + ' logo'" class="icon-img" />
            </template>
            <template v-else>
              {{ cert.icon }}
            </template>
          </span>
          <span class="certification-label">{{ cert.name }}</span>
          <span class="certification-issuer">{{ cert.issuer }}</span>
          <span class="certification-date">{{ cert.date }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import { certifications } from '../data/certifications'

  // 只用在script内部调用的函数(内部调用)
  function parseDate(dateStr) {
    // dateStr: 'YYYY.MM'
    const [year, month] = dateStr.split('.').map(Number)
    return new Date(year, month - 1)
  }
  
  export default {
    data() {
      const now = new Date()
      const alreadyGot = certifications.filter(cert => parseDate(cert.date) <= now)
      const learningNow = certifications.filter(cert => parseDate(cert.date) > now)
      return {
        certifications,
        alreadyGot, // 可以在后面增加表达式
        learningNow
      }
    },
  }
</script>

<style scoped>
  .certifications-section {
    margin-bottom: 2rem;
  }
  .section-title.colorful-title {
    background: linear-gradient(90deg, #22c55e 0%, #00b4d8 50%, #7c3aed 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 900;
    letter-spacing: 0.01em;
    margin-bottom: 1.2rem;
    text-align: center;
  }
  .certifications-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.2rem;
    margin-bottom: 0.5rem;
  }
  .certification-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(120deg, #23272f 80%, #22223b 100%);
    border: 1.5px solid #22c55e;
    border-radius: 12px;
    box-shadow: 0 2px 12px rgba(34, 197, 94, 0.08);
    padding: 1.2em 0.8em 1em 0.8em;
    transition: box-shadow 0.2s, border-color 0.2s, background 0.2s, transform 0.2s;
    cursor: default;
    position: relative;
    overflow: hidden;
  }
  .certification-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #22c55e, #16a34a, #22c55e);
    opacity: 0.8;
  }
  .certification-card:hover {
    border-color: #16a34a;
    box-shadow: 0 4px 24px rgba(34, 197, 94, 0.15);
    background: linear-gradient(120deg, #1a1d22 80%, #23272f 100%);
    transform: translateY(-2px);
  }
  .certification-icon {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .icon-img {
    width: 2.5rem;
    height: 2.5rem;
    object-fit: contain;
    display: block;
  }
  .icon-img[src*="amazonwebservices"],
  .icon-img[src*="microsoftazure"],
  .icon-img[src*="googlecloud"] {
    background: #fff;
    border-radius: 8px;
    border: 1.5px solid #e0e6ed;
    box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    padding: 3px 6px;
  }
  .icon-img[src*="comptia"] {
    background: #fff;
    border-radius: 8px;
    border: 1.5px solid #e0e6ed;
    box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    padding: 3px 6px;
  }
  .icon-img[src*="oracle"] {
    background: #fff;
    border-radius: 8px;
    border: 1.5px solid #e0e6ed;
    box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    padding: 3px 6px;
  }
  .certification-label {
    font-size: 0.95rem;
    color: #e0e6ed;
    font-weight: 700;
    text-align: center;
    margin-bottom: 0.3rem;
    line-height: 1.3;
  }
  .certification-issuer {
    font-size: 0.85rem;
    color: #94a3b8;
    font-weight: 500;
    text-align: center;
    margin-bottom: 0.2rem;
  }
  .certification-date {
    font-size: 0.8rem;
    color: #22c55e;
    font-weight: 600;
    text-align: center;
    background: rgba(34, 197, 94, 0.1);
    padding: 0.2rem 0.6rem;
    border-radius: 12px;
    border: 1px solid rgba(34, 197, 94, 0.2);
  }
  .cert-section-title {
    font-size: 1.1rem;
    font-weight: 700;
    color: #0a2540; /* deep navy blue for strong contrast */
    margin-bottom: 0.7rem;
    margin-top: 0.5rem;
    letter-spacing: 0.01em;
  }
  @media (max-width: 768px) {
    .certifications-list {
      grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
      gap: 1rem;
    }
    .certification-card {
      padding: 1em 0.6em 0.8em 0.6em;
    }
    .certification-label {
      font-size: 0.9rem;
    }
    .certification-issuer {
      font-size: 0.8rem;
    }
    .certification-date {
      font-size: 0.75rem;
    }
  }
</style> 