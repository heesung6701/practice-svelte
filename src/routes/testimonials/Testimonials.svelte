<script lang="ts">
  type Testimonial = {
    name: string;
    company?: string;
    photo?: string;
    quote: string;
    rating: number;
  };
  const testimonials: Testimonial[] = [
    {
      name: '이민수',
      company: 'A사',
      photo: '/vite.svg',
      quote: '“정말 빠르고 만족스러운 결과였습니다!”',
      rating: 5
    },
    {
      name: '박지현',
      company: 'B사',
      photo: '/vite.svg',
      quote: '“소통이 원활하고 퀄리티가 높아요.”',
      rating: 4
    },
    {
      name: '김영수',
      quote: '“기대 이상으로 프로젝트가 잘 마무리됐어요.”',
      rating: 5
    }
  ];
</script>

<section class="testimonials-container">
  <h1>고객 후기</h1>
  <div class="testimonials-list">
    {#each testimonials as t}
      <div class="testimonial-card">
        {#if t.photo}
          <img src={t.photo} alt={t.name + ' 사진'} class="testimonial-photo" />
        {/if}
        <div class="testimonial-content">
          <div class="testimonial-header">
            <span class="testimonial-name">{t.name}</span>
            {#if t.company}
              <span class="testimonial-company">({t.company})</span>
            {/if}
          </div>
          <p class="testimonial-quote">{t.quote}</p>
          <div class="testimonial-rating">
            {#each Array(5) as _, i}
              <span class="star">{i < t.rating ? '★' : '☆'}</span>
            {/each}
          </div>
        </div>
      </div>
    {/each}
  </div>
  <div class="testimonial-cta">
    <a href="https://forms.gle/your-google-form-link" target="_blank" class="cta-btn">나도 후기 남기기</a>
  </div>
</section>

<style>
.testimonials-container {
  max-width: 700px;
  margin: 2rem auto;
  padding: 2rem;
  background: rgba(36,36,48,0.92);
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.18);
  color: #e3e6ed;
}
.testimonials-list {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 2rem;
}
.testimonial-card {
  background: rgba(36,36,48,0.92);
  color: #e3e6ed;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.18);
  padding: 1.5rem 1.2rem;
  min-width: 220px;
  max-width: 260px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.15s, box-shadow 0.15s;
}
.testimonial-card:hover {
  transform: translateY(-4px) scale(1.03);
  box-shadow: 0 6px 24px rgba(100,108,255,0.12);
}
.testimonial-photo {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 2px solid #646cff;
  background: #fff;
  margin-bottom: 0.7em;
}
.testimonial-content {
  width: 100%;
}
.testimonial-header {
  font-weight: 600;
  margin-bottom: 0.3em;
}
.testimonial-name {
  color: #8ab4f8;
}
.testimonial-company {
  color: #a3c9fa;
  font-size: 0.95em;
  margin-left: 0.3em;
}
.testimonial-quote {
  font-size: 1.05em;
  margin: 0.5em 0 0.7em 0;
  color: #cfd8e3;
}
.testimonial-rating {
  color: #cfd8e3;
  font-size: 1.2em;
  letter-spacing: 0.1em;
}
.star {
  margin-right: 0.05em;
}
.testimonial-cta {
  margin-top: 1.5rem;
}
.cta-btn {
  display: inline-block;
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
@media (max-width: 700px) {
  .testimonials-list {
    flex-direction: column;
    gap: 1.2rem;
    align-items: center;
  }
  .testimonial-card {
    max-width: 95vw;
  }
}
@media (prefers-color-scheme: light) {
  .testimonials-container {
    background: #fff;
    color: #213547;
    box-shadow: 0 4px 24px rgba(100,108,255,0.06);
  }
  .testimonial-card {
    background: #fff;
    color: #213547;
    box-shadow: 0 2px 8px rgba(100,108,255,0.06);
  }
  .testimonial-name {
    color: #646cff;
  }
  .testimonial-company {
    color: #535bf2;
  }
  .testimonial-quote, .testimonial-rating {
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
  .testimonials-container {
    background: rgba(36,36,48,0.92);
    color: #e3e6ed;
    box-shadow: 0 4px 24px rgba(0,0,0,0.18);
  }
  .testimonial-card {
    background: rgba(36,36,48,0.92);
    color: #e3e6ed;
    box-shadow: 0 2px 8px rgba(0,0,0,0.18);
  }
  .testimonial-name {
    color: #8ab4f8;
  }
  .testimonial-company {
    color: #a3c9fa;
  }
  .testimonial-quote, .testimonial-rating {
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