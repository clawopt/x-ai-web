---
layout: home

hero:
  name: "ByteTech"
  text: "，迈向AI"
  tagline: "面向 AI 时代的计算机学习入口 • 系统化学习路径 • 实战导向"
  actions:
    - theme: brand
      text: "🚀 开始学习"
      link: "/计算机语言"
    - theme: alt
      text: "📚 浏览教程"
      link: "/专业技能"

features:
  - title: "💻 计算机语言"
    details: "Java、C++、Git、CMake、Make等编程语言和开发工具"
    link: "/计算机语言"

  - title: "🛠️ 专业技能"
    details: "数据库、存储、大数据等核心技术能力"
    link: "/专业技能"

  - title: "🤖 AI时代"
    details: "数据结构、算法、大模型、深度学习等AI核心技术"
    link: "/AI时代"

---

<div class="hero-stats">

## 📊 学习数据

<div class="stats-grid">
  <div class="stat-card">
    <div class="stat-number">3</div>
    <div class="stat-label">学习方向</div>
  </div>
  <div class="stat-card">
    <div class="stat-number">11</div>
    <div class="stat-label">核心教程</div>
  </div>
  <div class="stat-card">
    <div class="stat-number">100%</div>
    <div class="stat-label">免费开放</div>
  </div>
</div>

</div>

<div class="quick-links">

## 📚 热门教程

<div class="quick-links-grid">
  <div class="quick-link-card">
    <span class="icon">☕</span>
    <div class="title">Java</div>
    <a href="/计算机语言" class="link">查看教程 →</a>
  </div>
  <div class="quick-link-card">
    <span class="icon">⚡</span>
    <div class="title">C++</div>
    <a href="/计算机语言" class="link">查看教程 →</a>
  </div>
  <div class="quick-link-card">
    <span class="icon">🔰</span>
    <div class="title">Git</div>
    <a href="/计算机语言" class="link">查看教程 →</a>
  </div>
  <div class="quick-link-card">
    <span class="icon">⚙️</span>
    <div class="title">CMake</div>
    <a href="/计算机语言" class="link">查看教程 →</a>
  </div>
  <div class="quick-link-card">
    <span class="icon">🗄️</span>
    <div class="title">数据库</div>
    <a href="/专业技能" class="link">查看教程 →</a>
  </div>
  <div class="quick-link-card">
    <span class="icon">🧠</span>
    <div class="title">算法</div>
    <a href="/AI时代" class="link">查看教程 →</a>
  </div>
</div>

</div>

<style>
.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.stat-card {
  background: linear-gradient(135deg, #2563eb 0%, #8b5cf6 100%);
  border-radius: 16px;
  padding: 32px 24px;
  color: white;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 800;
}

.stat-label {
  font-size: 0.95rem;
  opacity: 0.9;
}

.quick-links-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 16px;
}

.quick-link-card {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 20px;
  text-align: center;
  transition: all 0.3s ease;
}

.quick-link-card:hover {
  border-color: var(--vp-c-brand-1);
  transform: translateY(-2px);
}

.quick-link-card .icon {
  font-size: 28px;
  display: block;
  margin-bottom: 8px;
}

.quick-link-card .title {
  font-weight: 600;
  margin-bottom: 8px;
}

.quick-link-card .link {
  font-size: 0.85rem;
  color: var(--vp-c-brand-1);
}

@media (max-width: 768px) {
  .stats-grid {
    grid-template-columns: 1fr;
  }
  
  .quick-links-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
