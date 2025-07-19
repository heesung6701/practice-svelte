<script lang="ts">
  let menuOpen = false;
  function toggleMenu() {
    menuOpen = !menuOpen;
  }
</script>

<nav class="navbar">
  <div class="container">
    <div class="logo">
      <a href="#/">MyCompany</a>
    </div>
    <button class="menu-toggle" on:click={toggleMenu} aria-label="메뉴 열기">
      ☰
    </button>
    <ul class:open={menuOpen}>
      <li><a href="#/">홈</a></li>
      <li><a href="#/about">회사소개</a></li>
      <li><a href="#/services">서비스</a></li>
      <li><a href="#/portfolio">포트폴리오</a></li>
      <li><a href="#/testimonials">고객후기</a></li>
      <li><a href="#/faq">FAQ</a></li>
      <li><a href="#/contact">문의</a></li>
    </ul>
  </div>
</nav>

<style>
  .navbar {
    background: #fff;
    border-bottom: 1px solid #eee;
    position: sticky;
    top: 0;
    z-index: 100;
  }
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
  }
  .logo a {
    font-size: 1.5rem;
    font-weight: bold;
    color: #213547;
    text-decoration: none;
    letter-spacing: 1px;
  }
  ul {
    list-style: none;
    display: flex;
    gap: 1.5rem;
    margin: 0;
    padding: 0;
    align-items: center;
    transition: max-height 0.3s;
  }
  ul li a {
    color: #213547;
    text-decoration: none;
    font-weight: 500;
    padding: 0.5rem 0.8rem;
    border-radius: 4px;
    transition: background 0.2s, color 0.2s;
  }
  ul li a:hover,
  ul li a:focus {
    background: #f0f4ff;
    color: #646cff;
  }
  .menu-toggle {
    display: none;
    background: none;
    border: none;
    font-size: 2rem;
    cursor: pointer;
    color: #213547;
  }

  /* 반응형 (모바일) */
  @media (max-width: 768px) {
    .container {
      flex-direction: row;
      height: auto;
    }
    ul {
      position: absolute;
      top: 60px;
      left: 0;
      right: 0;
      background: #fff;
      flex-direction: column;
      gap: 0;
      max-height: 0;
      overflow: hidden;
      border-bottom: 1px solid #eee;
    }
    ul.open {
      max-height: 400px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }
    ul li {
      border-bottom: 1px solid #f0f0f0;
    }
    .menu-toggle {
      display: block;
    }
  }

  @media (prefers-color-scheme: dark) {
    .navbar {
      background: #23263a;
      border-bottom: 1px solid #23263a;
    }
    .logo a {
      color: #e3e6ed;
    }
    ul {
      background: #23263a;
    }
    ul li a {
      color: #e3e6ed;
    }
    ul li a:hover,
    ul li a:focus {
      background: #353a4a;
      color: #8ab4f8;
    }
    .menu-toggle {
      color: #e3e6ed;
    }
    @media (max-width: 768px) {
      ul {
        background: #23263a;
        border-bottom: 1px solid #353a4a;
      }
      ul li {
        border-bottom: 1px solid #353a4a;
      }
    }
  }
</style>