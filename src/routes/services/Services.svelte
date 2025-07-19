<section class="services-container">
  <h1>서비스</h1>
  <div class="service-list">
    <!-- 서비스 A -->
    <div class="service-card">
      <div class="service-header">
        <span class="service-icon">💻</span>
        <h2>웹사이트 제작</h2>
      </div>
      <p class="service-desc">반응형, SEO 최적화, 맞춤형 디자인을 포함한 웹사이트 제작 서비스를 제공합니다.</p>
      <ol class="service-process">
        <li>기획</li>
        <li>디자인</li>
        <li>개발</li>
        <li>런칭</li>
      </ol>
    </div>
    <!-- 서비스 B -->
    <div class="service-card">
      <div class="service-header">
        <span class="service-icon">📱</span>
        <h2>모바일 앱 개발</h2>
      </div>
      <p class="service-desc">iOS/Android 모두 지원하는 하이브리드 및 네이티브 앱 개발 서비스를 제공합니다.</p>
      <ol class="service-process">
        <li>요구사항 분석</li>
        <li>UI/UX 설계</li>
        <li>앱 개발</li>
        <li>스토어 등록</li>
      </ol>
    </div>
    <!-- 서비스 C -->
    <div class="service-card">
      <div class="service-header">
        <span class="service-icon">☁️</span>
        <h2>클라우드 솔루션</h2>
      </div>
      <p class="service-desc">AWS, GCP 등 다양한 클라우드 환경에서 인프라 구축 및 운영 자동화 서비스를 제공합니다.</p>
      <ol class="service-process">
        <li>컨설팅</li>
        <li>설계</li>
        <li>구축</li>
        <li>운영 지원</li>
      </ol>
    </div>
  </div>
  <div class="cta-section">
    <p>이 서비스가 궁금하다면 언제든 문의해 주세요!</p>
    <a href="https://forms.gle/your-google-form-link" target="_blank" class="cta-btn">문의하기</a>
  </div>
</section>

<style>
.services-container {
  max-width: 900px;
  margin: 2rem auto;
  padding: 2rem;
  background: rgba(36,36,48,0.92);
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.18);
  color: #e3e6ed;
}
.service-list {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: space-between;
}
.service-card {
  flex: 1 1 260px;
  min-width: 260px;
  background: rgba(36,36,48,0.92);
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.18);
  padding: 1.5rem 1.2rem;
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #e3e6ed;
}
.service-header {
  display: flex;
  align-items: center;
  gap: 0.7em;
  margin-bottom: 0.5em;
}
.service-header h2 {
  color: #8ab4f8;
}
.service-icon {
  font-size: 2.2em;
}
.service-desc, .service-process {
  color: #cfd8e3;
}
.service-process {
  margin: 0;
  padding-left: 1.2em;
  font-size: 0.98em;
}
.cta-section {
  text-align: center;
  margin-top: 2.5rem;
}
.cta-btn {
  display: inline-block;
  margin-top: 0.7em;
  padding: 0.7em 2em;
  background: #8ab4f8;
  color: #181a20;
  border-radius: 8px;
  font-size: 1.1em;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.2s;
}
.cta-btn:hover {
  background: #a3c9fa;
  color: #181a20;
}
h1 {
  color: #e3e6ed;
}
@media (max-width: 800px) {
  .service-list {
    flex-direction: column;
    gap: 1.2rem;
  }
  .service-card {
    min-width: 0;
  }
}
@media (prefers-color-scheme: light) {
  .services-container {
    background: #fff;
    color: #213547;
    box-shadow: 0 4px 24px rgba(100,108,255,0.06);
  }
  .service-card {
    background: #fff;
    color: #213547;
    box-shadow: 0 2px 8px rgba(100,108,255,0.06);
  }
  .service-header h2 {
    color: #646cff;
  }
  .service-desc, .service-process {
    color: #222;
  }
  .cta-btn {
    background: #646cff;
    color: #fff;
  }
  .cta-btn:hover {
    background: #747bff;
    color: #fff;
  }
  h1 {
    color: #213547;
  }
}
@media (prefers-color-scheme: dark) {
  .services-container {
    background: rgba(36,36,48,0.92);
    color: #e3e6ed;
    box-shadow: 0 4px 24px rgba(0,0,0,0.18);
  }
  .service-card {
    background: rgba(36,36,48,0.92);
    color: #e3e6ed;
    box-shadow: 0 2px 8px rgba(0,0,0,0.18);
  }
  .service-header h2 {
    color: #8ab4f8;
  }
  .service-desc, .service-process {
    color: #cfd8e3;
  }
  .cta-btn {
    background: #8ab4f8;
    color: #181a20;
  }
  .cta-btn:hover {
    background: #a3c9fa;
    color: #181a20;
  }
  h1 {
    color: #e3e6ed;
  }
}
</style>