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
  
  <style>
  .hero {
    position: relative;
    background: linear-gradient(120deg, #e0e7ff 0%, #fff 100%);
    padding: 5rem 1.5rem 4rem 1.5rem;
    text-align: center;
    overflow: hidden;
    border-radius: 0 0 2.5rem 2.5rem;
    box-shadow: 0 4px 24px rgba(100,108,255,0.08);
  }
  .hero-bg {
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: url('https://placehold.co/1200x400?text=Hero+Image') center/cover no-repeat;
    opacity: 0.13;
    z-index: 0;
  }
  .hero-content {
    position: relative;
    z-index: 1;
    max-width: 600px;
    margin: 0 auto;
  }
  .hero h1 {
    font-size: 2.5rem;
    margin-bottom: 0.7rem;
    color: #213547;
    font-weight: 800;
    letter-spacing: -1px;
  }
  .hero p {
    color: #555;
    margin-bottom: 2rem;
    font-size: 1.15rem;
  }
  .cta {
    display: inline-block;
    background: linear-gradient(90deg, #646cff 60%, #8ab4f8 100%);
    color: #fff;
    padding: 1em 2.5em;
    border-radius: 2em;
    font-weight: bold;
    text-decoration: none;
    font-size: 1.1rem;
    box-shadow: 0 2px 8px rgba(100,108,255,0.10);
    transition: background 0.2s, box-shadow 0.2s, transform 0.15s;
  }
  .cta:hover {
    background: linear-gradient(90deg, #535bf2 60%, #8ab4f8 100%);
    box-shadow: 0 4px 16px rgba(100,108,255,0.18);
    transform: translateY(-2px) scale(1.03);
  }

  section {
    margin-bottom: 3.5rem;
  }
  .services, .portfolio-preview, .testimonials {
    padding: 2.5rem 0.5rem 1.5rem 0.5rem;
    background: #f8faff;
    border-radius: 1.5rem;
    box-shadow: 0 2px 12px rgba(100,108,255,0.04);
    max-width: 1100px;
    margin: 0 auto 3.5rem auto;
  }
  .services h2, .portfolio-preview h2, .testimonials h2 {
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
    font-weight: 700;
    color: #213547;
  }
  .service-list, .portfolio-list, .testimonial-list {
    display: flex;
    justify-content: center;
    gap: 2.2rem;
    flex-wrap: wrap;
  }
  .service-card, .portfolio-card, .testimonial-card {
    background: #fff;
    border-radius: 1.2rem;
    box-shadow: 0 2px 12px rgba(100,108,255,0.07);
    padding: 1.5rem 1.7rem;
    min-width: 150px;
    max-width: 220px;
    margin-bottom: 1.2rem;
    transition: box-shadow 0.18s, transform 0.18s;
  }
  .service-card:hover, .portfolio-card:hover, .testimonial-card:hover {
    box-shadow: 0 6px 24px rgba(100,108,255,0.13);
    transform: translateY(-3px) scale(1.03);
  }
  .service-card .icon {
    font-size: 2.3rem;
    margin-bottom: 0.7rem;
  }
  .service-card .title {
    font-weight: bold;
    margin-bottom: 0.4rem;
    font-size: 1.08rem;
  }
  .service-card .desc {
    color: #666;
    font-size: 0.98rem;
  }
  .portfolio-card img {
    width: 100%;
    border-radius: 0.7rem;
    margin-bottom: 0.7rem;
  }
  .ptitle {
    font-size: 1.08rem;
    font-weight: 600;
    color: #213547;
  }
  .more-btn {
    display: inline-block;
    margin-top: 0.7rem;
    color: #646cff;
    font-weight: bold;
    text-decoration: underline;
    font-size: 1.05rem;
    transition: color 0.18s;
  }
  .more-btn:hover { color: #535bf2; }

  .stars {
    color: #ffd600;
    font-size: 1.2rem;
    margin-bottom: 0.3rem;
  }
  .comment {
    font-style: italic;
    color: #333;
    margin-bottom: 0.3rem;
    font-size: 1.01rem;
  }
  .name {
    color: #888;
    font-size: 0.97rem;
  }

  .main-footer {
    background: #222;
    color: #fff;
    text-align: center;
    padding: 1.2rem 1rem 1.5rem 1rem;
    margin-top: 2rem;
    border-radius: 1.2rem 1.2rem 0 0;
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

  @media (max-width: 1100px) {
    .services, .portfolio-preview, .testimonials {
      max-width: 98vw;
      padding-left: 0.5rem;
      padding-right: 0.5rem;
    }
  }
  @media (max-width: 900px) {
    .service-list, .portfolio-list, .testimonial-list {
      flex-direction: column;
      align-items: center;
      gap: 1.2rem;
    }
    .hero {
      padding: 3.5rem 0.5rem 2.5rem 0.5rem;
      border-radius: 0 0 1.2rem 1.2rem;
    }
  }
  @media (max-width: 600px) {
    .hero h1 {
      font-size: 1.3rem;
    }
    .hero-content {
      padding: 0 0.2rem;
    }
    .services, .portfolio-preview, .testimonials {
      padding: 1.2rem 0.2rem 0.7rem 0.2rem;
      border-radius: 0.7rem;
    }
    .service-card, .portfolio-card, .testimonial-card {
      padding: 0.7rem 0.5rem;
      min-width: 120px;
      max-width: 98vw;
    }
  }
  .services {
    background: #f4f7fd;
    color: #213547;
  }
  .portfolio-preview {
    background: #eaf1fa;
    color: #213547;
  }
  .testimonials {
    background: #f4f7fd;
    color: #213547;
  }
  @media (prefers-color-scheme: dark) {
    .hero {
      background: linear-gradient(120deg, #23263a 0%, #181a20 100%);
    }
    .hero h1 {
      color: #e3e6ed;
    }
    .hero p {
      color: #cfd8e3;
    }
    .cta {
      background: linear-gradient(90deg, #8ab4f8 60%, #646cff 100%);
      color: #181a20;
    }
    .cta:hover {
      background: linear-gradient(90deg, #a3c9fa 60%, #646cff 100%);
      color: #181a20;
    }
    .services {
      background: #23263a;
      color: #e3e6ed;
    }
    .portfolio-preview {
      background: #20243a;
      color: #e3e6ed;
    }
    .testimonials {
      background: #23263a;
      color: #e3e6ed;
    }
    .service-card, .testimonial-card {
      background: rgba(36,36,48,0.92);
      color: #e3e6ed;
      box-shadow: 0 2px 12px rgba(0,0,0,0.18);
    }
    .service-card .desc {
      color: #cfd8e3;
    }
    .portfolio-card {
      background: rgba(36,36,48,0.92);
      color: #e3e6ed;
      box-shadow: 0 2px 12px rgba(0,0,0,0.18);
    }
    .ptitle {
      color: #8ab4f8;
    }
    .more-btn {
      color: #8ab4f8;
    }
    .main-footer {
      background: #23263a;
      color: #e3e6ed;
    }
    .main-footer .links a {
      color: #8ab4f8;
    }
    .main-footer .links a:hover { color: #ffd600; }
  }
  </style>