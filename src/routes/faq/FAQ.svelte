<script lang="ts">
  type FAQ = {
    question: string;
    answer: string;
  };
  const faqs: FAQ[] = [
    {
      question: '견적은 얼마나 걸리나요?',
      answer: '요청서 접수 후 평균 2영업일 이내 회신드립니다.'
    },
    {
      question: '결제 방식은 어떻게 되나요?',
      answer: '선금 50% + 완료 후 잔금 50% 결제.'
    },
    {
      question: '수정 요청은 몇 번까지 가능한가요?',
      answer: '최대 2회까지 무상 수정 지원합니다.'
    }
  ];
  let openIndex: number | null = null;
  function toggle(idx: number) {
    openIndex = openIndex === idx ? null : idx;
  }
</script>

<section class="faq-container">
  <h1>자주 묻는 질문</h1>
  <div class="faq-list">
    {#each faqs as faq, idx}
      <div class="faq-item">
        <button class="faq-question" on:click={() => toggle(idx)} aria-expanded={openIndex === idx}>
          <span>{faq.question}</span>
          <span class="arrow">{openIndex === idx ? '▲' : '▼'}</span>
        </button>
        {#if openIndex === idx}
          <div class="faq-answer">{faq.answer}</div>
        {/if}
      </div>
    {/each}
  </div>
</section>

<style>
.faq-container {
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  background: rgba(36,36,48,0.92);
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.18);
  color: #e3e6ed;
}
.faq-list {
  margin-top: 2rem;
}
.faq-item + .faq-item {
  margin-top: 1.2rem;
}
.faq-question {
  width: 100%;
  background: #23263a;
  color: #e3e6ed;
  border: 1px solid #353a4a;
  border-radius: 8px;
  padding: 1em 1.2em;
  font-size: 1.08em;
  font-weight: 600;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
}
.faq-question[aria-expanded="true"] {
  background: #8ab4f8;
  color: #181a20;
}
.arrow {
  font-size: 1.1em;
  margin-left: 1em;
  color: #8ab4f8;
}
.faq-answer {
  background: #23263a;
  color: #cfd8e3;
  border-radius: 0 0 8px 8px;
  padding: 1.1em 1.2em;
  font-size: 1em;
  margin-top: -0.2em;
  box-shadow: 0 2px 8px rgba(0,0,0,0.18);
  animation: fadeIn 0.2s;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-8px); }
  to { opacity: 1; transform: translateY(0); }
}
h1 {
  color: #e3e6ed;
}
@media (prefers-color-scheme: light) {
  .faq-container {
    background: #fff;
    color: #213547;
    box-shadow: 0 4px 24px rgba(100,108,255,0.06);
  }
  .faq-question {
    background: #f3f3ff;
    color: #646cff;
    border: 1px solid #e0e7ff;
  }
  .faq-question[aria-expanded="true"] {
    background: #646cff;
    color: #fff;
  }
  .arrow {
    color: #646cff;
  }
  .faq-answer {
    background: #fff;
    color: #222;
    box-shadow: 0 2px 8px rgba(100,108,255,0.06);
  }
  h1 {
    color: #213547;
  }
}
@media (prefers-color-scheme: dark) {
  .faq-container {
    background: rgba(36,36,48,0.92);
    color: #e3e6ed;
    box-shadow: 0 4px 24px rgba(0,0,0,0.18);
  }
  .faq-question {
    background: #23263a;
    color: #e3e6ed;
    border: 1px solid #353a4a;
  }
  .faq-question[aria-expanded="true"] {
    background: #8ab4f8;
    color: #181a20;
  }
  .arrow {
    color: #8ab4f8;
  }
  .faq-answer {
    background: #23263a;
    color: #cfd8e3;
    box-shadow: 0 2px 8px rgba(0,0,0,0.18);
  }
  h1 {
    color: #e3e6ed;
  }
}
@media (max-width: 600px) {
  .faq-container {
    padding: 1rem;
  }
  .faq-question, .faq-answer {
    font-size: 0.98em;
    padding: 0.8em 0.7em;
  }
}
</style>