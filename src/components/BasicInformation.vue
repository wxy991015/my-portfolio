<template>
  <div class="card basic-info-card">
    <div class="image-upload">
      <div class="img-label">
        <img src="../assets/白底个人照片.jpg" alt="Profile Image" class="profile-img" />
      </div>
    </div>
    <h2>Basic Information(个人基本信息)</h2>
    <ul>
      <li><strong>Name(姓名):</strong> Xiaoyang Wei</li>
      <li><strong>Email(邮箱):</strong> wxy3247365379@gmail.com</li>
      <li><strong>Phone(电话号码):</strong> (+86)18327054369</li>
      <li><strong>Location(地址):</strong> Wuhan, Hubei, China</li>
    </ul>
  </div>
</template>

<style scoped>
  .basic-info-card {
    max-width: 500px;
    margin: 0 auto 2rem auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .image-upload {
    margin-bottom: 1.5rem;
    display: flex;
    justify-content: center;
  }
  .img-label {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .img-placeholder {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background: #23272f;
    border: 2px dashed #00b4d8;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #00b4d8;
    font-size: 1rem;
    font-weight: 600;
    transition: background 0.2s, border-color 0.2s;
  }
  .profile-img {
    width: 120px;
    height: 120px;
    object-fit: cover;
    border-radius: 50%;
    border: 2px solid #00b4d8;
    box-shadow: 0 2px 8px rgba(0,180,216,0.10);
  }
  .basic-info-card ul {
    list-style: none;
    padding: 0;
  }
  .basic-info-card li {
    margin-bottom: 0.5rem;
  }
</style> 