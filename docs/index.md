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
    details: "编程语言：Java/Python/Go/C++/JS 构建工具：Git/CMake/Make"
    link: "/计算机语言"

  - title: "🛠️ 专业技能"
    details: "前端框架/后端框架/计算机基础/Linux/DevOps/容器化/数据库/大数据/游戏开发/AI"
    link: "/专业技能"

  - title: "🤖 AI时代"
    details: "算法与数据结构/大语言模型/深度学习"
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
    <div class="stat-number">70+</div>
    <div class="stat-label">核心教程</div>
  </div>
  <div class="stat-card">
    <div class="stat-number">100%</div>
    <div class="stat-label">免费开放</div>
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
  text-align: center;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 800;
}

.stat-label {
  font-size: 0.95rem;
  opacity: 0.9;
}

@media (max-width: 768px) {
  .stats-grid {
    grid-template-columns: 1fr;
  }
}
</style>
