<script lang="ts">
    // 실제 서비스/포트폴리오/후기 데이터는 추후 props나 store로 분리 가능
    const services = [
      { icon: "💻", title: "웹사이트 제작", desc: "반응형, SEO 최적화" },
      { icon: "📱", title: "앱 개발", desc: "iOS/Android 동시 지원" },
      { icon: "🎨", title: "브랜딩 디자인", desc: "로고, CI/BI, 패키지" }
    ];
    const portfolios = [
      { img: "https://placehold.co/120x80", title: "프로젝트 A" },
      { img: "https://placehold.co/120x80", title: "프로젝트 B" },
      { img: "https://placehold.co/120x80", title: "프로젝트 C" }
    ];
    const testimonials = [
      { stars: 5, comment: "정말 만족스러운 결과였습니다!", name: "김고객" },
      { stars: 5, comment: "소통이 빨라서 좋았어요.", name: "이클라이언트" }
    ];
  </script>
  
  <section class="hero">
    <div class="hero-bg"></div>
    <div class="hero-content">
      <h1>당신의 비즈니스를 한 단계 높여드립니다</h1>
      <p>전문가와 함께 성장하는 디지털 파트너</p>
      <a class="cta" href="#/contact">견적 문의하기</a>
    </div>
  </section>
  
  <section class="services">
    <h2>주요 서비스</h2>
    <div class="service-list">
      {#each services as s}
        <div class="service-card">
          <div class="icon">{s.icon}</div>
          <div class="title">{s.title}</div>
          <div class="desc">{s.desc}</div>
        </div>
      {/each}
    </div>
  </section>
  
  <section class="portfolio-preview">
    <h2>포트폴리오 미리보기</h2>
    <div class="portfolio-list">
      {#each portfolios as p}
        <div class="portfolio-card">
          <img src={p.img} alt={p.title} />
          <div class="ptitle">{p.title}</div>
        </div>
      {/each}
    </div>
    <a class="more-btn" href="#/portfolio">더 많은 사례 보기</a>
  </section>
  
  <section class="testimonials">
    <h2>고객 후기</h2>
    <div class="testimonial-list">
      {#each testimonials as t}
        <div class="testimonial-card">
          <div class="stars">
            {'★'.repeat(t.stars)}{'☆'.repeat(5 - t.stars)}
          </div>
          <div class="comment">"{t.comment}"</div>
          <div class="name">- {t.name}</div>
        </div>
      {/each}
    </div>
  </section>
  
  <footer class="main-footer">
    <div class="contact">
      <span>문의: contact@company.com | 02-1234-5678</span>
    </div>
    <div class="sns">
      <a href="#" aria-label="Instagram">📷</a>
      <a href="#" aria-label="Facebook">📘</a>
      <a href="#" aria-label="Twitter">🐦</a>
    </div>
    <div class="links">
      <a href="#/policy/privacy">개인정보처리방침</a> | 
      <a href="#/policy/terms">이용약관</a>
    </div>
  </footer>
  
  <style>
  .hero {
    position: relative;
    background: linear-gradient(120deg, #e0e7ff 0%, #fff 100%);
    padding: 4rem 1rem 3rem 1rem;
    text-align: center;
    overflow: hidden;
  }
  .hero-bg {
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: url('https://placehold.co/800x300?text=Hero+Image') center/cover no-repeat;
    opacity: 0.15;
    z-index: 0;
  }
  .hero-content {
    position: relative;
    z-index: 1;
  }
  .hero h1 {
    font-size: 2.2rem;
    margin-bottom: 0.5rem;
    color: #213547;
  }
  .hero p {
    color: #555;
    margin-bottom: 1.5rem;
  }
  .cta {
    display: inline-block;
    background: #646cff;
    color: #fff;
    padding: 0.8em 2em;
    border-radius: 2em;
    font-weight: bold;
    text-decoration: none;
    transition: background 0.2s;
  }
  .cta:hover { background: #535bf2; }
  
  .services {
    padding: 2.5rem 1rem 1.5rem 1rem;
    background: #f8faff;
    text-align: center;
  }
  .services h2 { margin-bottom: 1.2rem; }
  .service-list {
    display: flex;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
  }
  .service-card {
    background: #fff;
    border-radius: 1rem;
    box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    padding: 1.2rem 1.5rem;
    min-width: 140px;
    max-width: 180px;
    margin-bottom: 1rem;
  }
  .service-card .icon {
    font-size: 2.2rem;
    margin-bottom: 0.5rem;
  }
  .service-card .title {
    font-weight: bold;
    margin-bottom: 0.3rem;
  }
  .service-card .desc {
    color: #666;
    font-size: 0.95rem;
  }
  
  .portfolio-preview {
    padding: 2.5rem 1rem 1.5rem 1rem;
    text-align: center;
  }
  .portfolio-list {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    flex-wrap: wrap;
    margin-bottom: 1rem;
  }
  .portfolio-card {
    background: #fff;
    border-radius: 0.7rem;
    box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    padding: 0.7rem;
    width: 130px;
  }
  .portfolio-card img {
    width: 100%;
    border-radius: 0.5rem;
    margin-bottom: 0.5rem;
  }
  .ptitle {
    font-size: 1rem;
    font-weight: 500;
  }
  .more-btn {
    display: inline-block;
    margin-top: 0.5rem;
    color: #646cff;
    font-weight: bold;
    text-decoration: underline;
    font-size: 1rem;
  }
  
  .testimonials {
    padding: 2.5rem 1rem 1.5rem 1rem;
    background: #f8faff;
    text-align: center;
  }
  .testimonials h2 { margin-bottom: 1.2rem; }
  .testimonial-list {
    display: flex;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
  }
  .testimonial-card {
    background: #fff;
    border-radius: 1rem;
    box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    padding: 1.2rem 1.5rem;
    min-width: 180px;
    max-width: 220px;
    margin-bottom: 1rem;
  }
  .stars {
    color: #ffd600;
    font-size: 1.2rem;
    margin-bottom: 0.3rem;
  }
  .comment {
    font-style: italic;
    color: #333;
    margin-bottom: 0.3rem;
  }
  .name {
    color: #888;
    font-size: 0.95rem;
  }
  
  .main-footer {
    background: #222;
    color: #fff;
    text-align: center;
    padding: 1.2rem 1rem 1.5rem 1rem;
    margin-top: 2rem;
  }
  .main-footer .contact {
    margin-bottom: 0.5rem;
  }
  .main-footer .sns a {
    margin: 0 0.3rem;
    font-size: 1.2rem;
    color: #fff;
    text-decoration: none;
    transition: color 0.2s;
  }
  .main-footer .sns a:hover { color: #ffd600; }
  .main-footer .links {
    margin-top: 0.5rem;
    font-size: 0.95rem;
  }
  .main-footer .links a {
    color: #fff;
    text-decoration: underline;
    margin: 0 0.2rem;
  }
  .main-footer .links a:hover { color: #ffd600; }
  
  @media (max-width: 900px) {
    .service-list, .portfolio-list, .testimonial-list {
      flex-direction: column;
      align-items: center;
    }
  }
  </style>