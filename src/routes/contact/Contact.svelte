<section class="contact-container">
  <h1>문의 / 견적 요청</h1>
  <div class="contact-content">
    <div class="contact-form-section card">
      <h2>온라인 문의</h2>
      <!-- 실제 구글 폼 임베드 시 아래 iframe src를 본인 폼으로 교체 -->
      <iframe class="google-form" src="https://docs.google.com/forms/d/e/1FAIpQLSe-example-form/viewform?embedded=true" width="100%" height="520" frameborder="0" marginheight="0" marginwidth="0">로드 중...</iframe>
      <div class="form-guide">
        <p>필수 입력 항목:</p>
        <ul>
          <li>이름</li>
          <li>이메일 또는 연락처</li>
          <li>요청 서비스</li>
          <li>상세 요청사항(자유입력)</li>
        </ul>
        <p>폼이 보이지 않으면 <a href="https://forms.gle/your-google-form-link" target="_blank" class="form-link">여기서 문의하기</a></p>
      </div>
    </div>
    <div class="contact-info-section card">
      <h2>직접 연락처</h2>
      <ul class="contact-info-list">
        <li><strong>전화:</strong> 02-1234-5678</li>
        <li><strong>이메일:</strong> contact@example.com</li>
      </ul>
      <div class="location-section">
        <h3>오시는 길</h3>
        <img src="https://maps.googleapis.com/maps/api/staticmap?center=Seoul&zoom=13&size=300x120&key=YOUR_API_KEY" alt="지도 이미지" class="map-img" />
        <p><a href="https://goo.gl/maps/example" target="_blank" class="map-link">지도 보기</a></p>
      </div>
    </div>
  </div>
</section>

<style>
.contact-container {
  max-width: 900px;
  margin: 2rem auto;
  padding: 2rem;
  background: rgba(36,36,48,0.92);
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.18);
  color: #e3e6ed;
}
.contact-content {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: space-between;
}
.card {
  flex: 1 1 340px;
  min-width: 320px;
  background: rgba(36,36,48,0.92);
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.18);
  padding: 1.5rem 1.2rem;
  margin-bottom: 1.5rem;
  color: #e3e6ed;
}
.contact-form-section {
  max-width: 500px;
}
.google-form {
  width: 100%;
  min-height: 320px;
  border: none;
  border-radius: 8px;
  background: #fff;
  margin-bottom: 1em;
}
.form-guide {
  font-size: 0.98em;
  color: #333;
}
.form-link {
  color: #8ab4f8;
  text-decoration: underline;
}
.contact-info-list {
  list-style: none;
  padding: 0;
  margin-bottom: 1.2em;
}
.contact-info-list li {
  margin-bottom: 0.5em;
  font-size: 1.08em;
}
.location-section {
  margin-top: 1.2em;
  text-align: left;
}
.map-img {
  width: 100%;
  max-width: 300px;
  border-radius: 8px;
  margin-bottom: 0.5em;
  background: #fff;
}
.map-link {
  color: #8ab4f8;
  font-size: 0.98em;
  text-decoration: underline;
}
h1, h2, h3 {
  color: #e3e6ed;
}
@media (prefers-color-scheme: light) {
  .contact-container {
    background: #fff;
    color: #213547;
    box-shadow: 0 4px 24px rgba(100,108,255,0.06);
  }
  .card {
    background: #fff;
    color: #213547;
    box-shadow: 0 2px 8px rgba(100,108,255,0.06);
  }
  .form-link, .map-link {
    color: #646cff;
  }
  h1, h2, h3 {
    color: #213547;
  }
}
@media (prefers-color-scheme: dark) {
  .contact-container {
    background: rgba(36,36,48,0.92);
    color: #e3e6ed;
    box-shadow: 0 4px 24px rgba(0,0,0,0.18);
  }
  .card {
    background: rgba(36,36,48,0.92);
    color: #e3e6ed;
    box-shadow: 0 2px 8px rgba(0,0,0,0.18);
  }
  .form-link, .map-link {
    color: #8ab4f8;
  }
  h1, h2, h3 {
    color: #e3e6ed;
  }
}
@media (max-width: 900px) {
  .contact-content {
    flex-direction: column;
    gap: 1.2rem;
  }
  .card {
    min-width: 0;
  }
}
@media (max-width: 600px) {
  .contact-container {
    padding: 1rem;
  }
  .card {
    padding: 1rem 0.5rem;
  }
}
</style>