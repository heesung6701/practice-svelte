<section class="about-container">
  <h1>회사 소개</h1>
  <div class="company-summary card">
    <h2>회사 개요</h2>
    <ul>
      <li><strong>회사명:</strong> (주)프랙티스</li>
      <li><strong>설립년도:</strong> 2021년</li>
      <li><strong>미션:</strong> 혁신적인 IT 솔루션으로 세상을 더 편리하게</li>
      <li><strong>비전:</strong> 모두가 신뢰하는 글로벌 IT 리더</li>
    </ul>
  </div>

  <div class="team-section card">
    <h2>팀 멤버</h2>
    <div class="team-list">
      <div class="member">
        <img src="/vite.svg" alt="홍길동 사진" class="profile-img" />
        <div>
          <strong>홍길동</strong> <span class="role">CEO</span>
          <p>“도전을 즐기는 리더입니다.”</p>
        </div>
      </div>
      <div class="member">
        <img src="/vite.svg" alt="김영희 사진" class="profile-img" />
        <div>
          <strong>김영희</strong> <span class="role">CTO</span>
          <p>“기술로 세상을 바꿉니다.”</p>
        </div>
      </div>
      <!-- 필요시 멤버 추가 -->
    </div>
  </div>

  <div class="history-section card">
    <h2>주요 연혁 & 인증</h2>
    <ul class="history-list">
      <li>2023년 대한민국 IT 혁신상 수상 <span class="badge">🏆</span></li>
      <li>2022년 한국서비스품질지수 인증 <span class="badge">✔️</span></li>
      <li>2021년 창업 및 서비스 론칭</li>
    </ul>
  </div>
</section>

<style>
.about-container {
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background: rgba(36,36,48,0.92);
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.18);
  color: #e3e6ed;
}
.card {
  margin-bottom: 2rem;
  background: rgba(36,36,48,0.92);
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.18);
  color: #e3e6ed;
}
.company-summary ul,
.history-list,
.team-section .team-list {
  color: #cfd8e3;
}
.company-summary li {
  margin-bottom: 0.5rem;
  font-size: 1.1em;
}
.team-section .team-list {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.member {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: rgba(255,255,255,0.12);
  padding: 1rem 1.5rem;
  border-radius: 8px;
  min-width: 220px;
}
.profile-img {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  border: 2px solid #646cff;
  background: #fff;
}
.role {
  color: #8ab4f8;
  font-size: 0.95em;
  margin-left: 0.5em;
}
.history-list {
  list-style: none;
  padding: 0;
}
.history-list li {
  margin-bottom: 0.7rem;
  font-size: 1.1em;
  display: flex;
  align-items: center;
}
.badge {
  margin-left: 0.5em;
  font-size: 1.2em;
  color: #ffd600;
}
.about-container a {
  color: #8ab4f8;
  text-decoration: underline;
}
h1, h2 {
  color: #e3e6ed;
}
@media (max-width: 600px) {
  .about-container {
    padding: 1rem;
  }
  .team-section .team-list {
    flex-direction: column;
    gap: 1rem;
  }
}
@media (prefers-color-scheme: light) {
  .about-container {
    background: #fff;
    color: #213547;
    box-shadow: 0 4px 24px rgba(100,108,255,0.06);
  }
  .card {
    background: #fff;
    color: #213547;
    box-shadow: 0 2px 8px rgba(100,108,255,0.06);
  }
  .company-summary ul,
  .history-list,
  .team-section .team-list {
    color: #222;
  }
  .role {
    color: #646cff;
  }
  .about-container a {
    color: #646cff;
  }
  h1, h2 {
    color: #213547;
  }
}
@media (prefers-color-scheme: dark) {
  .about-container {
    background: rgba(36,36,48,0.92);
    color: #e3e6ed;
    box-shadow: 0 4px 24px rgba(0,0,0,0.18);
  }
  .card {
    background: rgba(36,36,48,0.92);
    color: #e3e6ed;
    box-shadow: 0 2px 8px rgba(0,0,0,0.18);
  }
  .company-summary ul,
  .history-list,
  .team-section .team-list {
    color: #cfd8e3;
  }
  .role {
    color: #8ab4f8;
  }
  .about-container a {
    color: #8ab4f8;
  }
  h1, h2 {
    color: #e3e6ed;
  }
}
</style>