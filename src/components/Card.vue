<template>
    <div class="card custom-card">
      <div v-if="$slots.logo" class="card-logo">
        <slot name="logo" />
      </div>
      <div class="card-content">
        <slot />
      </div>
    </div>
</template>
  
<style scoped>
  .custom-card {
    display: flex;
    align-items: center;
    gap: 2.5rem;
    padding: 2em 3em;
    min-width: 520px;
    max-width: 900px;
    width: 100%;
    background: linear-gradient(135deg, #23272f 70%, #1a1d22 100%);
    border: 1.5px solid #00b4d8;
    border-radius: 10px;
    box-shadow: 0 2px 16px rgba(0,180,216,0.10);
    margin-bottom: 2rem;
    transition: box-shadow 0.2s, border-color 0.2s;
  }
  .custom-card:hover {
    box-shadow: 0 4px 32px rgba(0,180,216,0.18);
    border-color: #48cae4;
  }
  .card-logo {
    min-width: 60px;
    min-height: 60px;
    max-width: 80px;
    max-height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .card-logo img {
    width: 60px;
    height: 60px;
    object-fit: contain;
    border-radius: 8px;
    border: 1.5px solid #00b4d8;
    background: #181c20;
  }
  .card-content {
    flex: 1;
  }
</style>