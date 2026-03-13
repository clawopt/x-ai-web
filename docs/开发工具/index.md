# 🔧 开发工具

欢迎来到开发工具学习板块。掌握这些工具，让你的开发效率起飞！

## 📚 教程列表

<div class="course-grid">

<div class="course-card">
  <div class="course-icon">🔰</div>
  <div class="course-title">Git</div>
  <div class="course-desc">分布式版本控制系统，团队协作必备</div>
  <a href="/开发工具/git" class="course-link">开始学习 →</a>
</div>

<div class="course-card">
  <div class="course-icon">⚙️</div>
  <div class="course-title">CMake</div>
  <div class="course-desc">跨平台构建系统生成器</div>
  <a href="/开发工具/cmake" class="course-link">开始学习 →</a>
</div>

<div class="course-card">
  <div class="course-icon">🔨</div>
  <div class="course-title">Make</div>
  <div class="course-desc">自动化构建工具，Makefile入门</div>
  <a href="/开发工具/make" class="course-link">开始学习 →</a>
</div>

</div>

<style>
.course-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  margin: 24px 0;
}

.course-card {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 24px;
  transition: all 0.3s ease;
}

.course-card:hover {
  border-color: var(--vp-c-brand-1);
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.course-icon {
  font-size: 36px;
  margin-bottom: 12px;
}

.course-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 8px;
  color: var(--vp-c-text-1);
}

.course-desc {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  margin-bottom: 16px;
  line-height: 1.6;
}

.course-link {
  display: inline-block;
  color: var(--vp-c-brand-1);
  font-weight: 600;
  text-decoration: none;
  transition: color 0.2s;
}

.course-link:hover {
  color: var(--vp-c-brand-2);
}
</style>
