<script lang="ts">
  import { onMount } from 'svelte';
  let selectedCategory: string = '전체';
  let showModal: boolean = false;
  type Project = {
    id: number;
    name: string;
    image: string;
    category: string;
    summary: string;
    goal: string;
    period: string;
    role: string;
    tech: string[];
    result: string;
    comment: string;
  };
  let selectedProject: Project | null = null;

  const categories: string[] = ['전체', '웹', '앱', '클라우드'];
  const projects: Project[] = [
    {
      id: 1,
      name: '스마트 쇼핑몰 구축',
      image: '/vite.svg',
      category: '웹',
      summary: '반응형 쇼핑몰 플랫폼 개발',
      goal: '사용자 친화적 UI/UX와 모바일 최적화',
      period: '2023.01 ~ 2023.06',
      role: 'PM, 프론트엔드 개발',
      tech: ['Svelte', 'Firebase', 'TailwindCSS'],
      result: '월 방문자 10만명, 전환율 25% 증가',
      comment: '“빠른 개발과 멋진 결과에 만족합니다!” – 고객사 A'
    },
    {
      id: 2,
      name: '헬스케어 앱',
      image: '/vite.svg',
      category: '앱',
      summary: '건강 관리 앱 개발',
      goal: '실시간 건강 데이터 트래킹',
      period: '2022.05 ~ 2022.12',
      role: '앱 개발, 백엔드 연동',
      tech: ['Flutter', 'Node.js', 'AWS'],
      result: '앱 다운로드 5만+, 평점 4.8/5',
      comment: '“UI가 직관적이고 사용이 편리해요.” – 고객사 B'
    },
    {
      id: 3,
      name: '클라우드 자동화 시스템',
      image: '/vite.svg',
      category: '클라우드',
      summary: '인프라 자동화 및 모니터링 구축',
      goal: '운영 효율화 및 장애 대응 자동화',
      period: '2021.09 ~ 2022.03',
      role: '설계, DevOps',
      tech: ['Terraform', 'GCP', 'Prometheus'],
      result: '운영 비용 30% 절감',
      comment: '“운영이 훨씬 쉬워졌어요!” – 고객사 C'
    }
  ];

  $: filteredProjects = selectedCategory === '전체'
    ? projects
    : projects.filter((p: Project) => p.category === selectedCategory);

  function openModal(project: Project) {
    selectedProject = project;
    showModal = true;
  }
  function closeModal() {
    showModal = false;
    selectedProject = null;
  }
</script>

<section class="portfolio-container">
  <h1>포트폴리오</h1>
  <nav class="portfolio-nav">
    {#each categories as cat}
      <button
        class:selected={selectedCategory === cat}
        on:click={() => selectedCategory = cat}
      >{cat}</button>
    {/each}
    <button class="all-btn" on:click={() => selectedCategory = '전체'}>모든 사례 보기</button>
  </nav>
  <div class="portfolio-list">
    {#each filteredProjects as project}
      <div class="portfolio-card" on:click={() => openModal(project)}>
        <img src={project.image} alt={project.name + ' 대표 이미지'} />
        <div class="card-content">
          <h2>{project.name}</h2>
          <p>{project.summary}</p>
        </div>
      </div>
    {/each}
  </div>

  {#if showModal && selectedProject}
    <div class="modal-backdrop" on:click={closeModal}></div>
    <div class="modal">
      <button class="close-btn" on:click={closeModal}>×</button>
      <img src={selectedProject.image} alt={selectedProject.name + ' 대표 이미지'} class="modal-img" />
      <h2>{selectedProject.name}</h2>
      <ul class="modal-info">
        <li><strong>프로젝트 목표:</strong> {selectedProject.goal}</li>
        <li><strong>기간:</strong> {selectedProject.period}</li>
        <li><strong>역할:</strong> {selectedProject.role}</li>
        <li><strong>사용 기술/툴:</strong> {selectedProject.tech.join(', ')}</li>
        <li><strong>성과:</strong> {selectedProject.result}</li>
        <li><strong>고객 코멘트:</strong> <em>{selectedProject.comment}</em></li>
      </ul>
    </div>
  {/if}
</section>

<style>
.portfolio-container {
  max-width: 1000px;
  margin: 2rem auto;
  padding: 2rem;
  background: rgba(255,255,255,0.03);
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
}
.portfolio-nav {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}
.portfolio-nav button {
  background: #f3f3ff;
  color: #646cff;
  border: none;
  border-radius: 6px;
  padding: 0.5em 1.2em;
  font-size: 1em;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
}
.portfolio-nav button.selected,
.portfolio-nav .all-btn.selected {
  background: #646cff;
  color: #fff;
}
.portfolio-nav .all-btn {
  margin-left: auto;
  background: #e0e7ff;
  color: #535bf2;
}
.portfolio-list {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: flex-start;
}
.portfolio-card {
  background: rgba(255,255,255,0.08);
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  width: 280px;
  cursor: pointer;
  overflow: hidden;
  transition: transform 0.15s, box-shadow 0.15s;
  display: flex;
  flex-direction: column;
}
.portfolio-card:hover {
  transform: translateY(-6px) scale(1.03);
  box-shadow: 0 6px 24px rgba(100,108,255,0.12);
}
.portfolio-card img {
  width: 100%;
  height: 160px;
  object-fit: cover;
  background: #fff;
}
.card-content {
  padding: 1rem;
}
.card-content h2 {
  margin: 0 0 0.5em 0;
  font-size: 1.2em;
  color: #646cff;
}
.card-content p {
  margin: 0;
  color: #333;
  font-size: 1em;
}
/* 모달 스타일 */
.modal-backdrop {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.35);
  z-index: 1000;
}
.modal {
  position: fixed;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  color: #222;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.18);
  padding: 2rem 2.5rem 1.5rem 2.5rem;
  z-index: 1001;
  min-width: 320px;
  max-width: 90vw;
  max-height: 90vh;
  overflow-y: auto;
  text-align: left;
}
.close-btn {
  position: absolute;
  top: 1rem;
  right: 1.2rem;
  background: none;
  border: none;
  font-size: 2em;
  color: #646cff;
  cursor: pointer;
}
.modal-img {
  width: 100%;
  max-width: 320px;
  border-radius: 10px;
  margin-bottom: 1.2rem;
  display: block;
}
.modal-info {
  list-style: none;
  padding: 0;
  margin: 0;
}
.modal-info li {
  margin-bottom: 0.7em;
  font-size: 1.05em;
}
@media (max-width: 900px) {
  .portfolio-list {
    justify-content: center;
    gap: 1.2rem;
  }
  .portfolio-card {
    width: 90vw;
    max-width: 340px;
  }
}
@media (max-width: 600px) {
  .portfolio-container {
    padding: 1rem;
  }
  .modal {
    padding: 1rem 0.5rem 1rem 0.5rem;
  }
}
</style>