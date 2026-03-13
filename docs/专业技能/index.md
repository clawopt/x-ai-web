# 🛠️ 专业技能

欢迎来到专业技能板块。掌握数据库、存储、大数据等核心技术，构建坚实的工程能力。

## 📚 教程列表

<div class="course-grid">

<div class="course-card">
  <div class="course-icon">🗄️</div>
  <div class="course-title">数据库</div>
  <div class="course-desc">MySQL、PostgreSQL、Redis等主流数据库</div>
  <a href="/专业技能/database" class="course-link">开始学习 →</a>
</div>

<div class="course-card">
  <div class="course-icon">💾</div>
  <div class="course-title">存储技术</div>
  <div class="course-desc">文件系统、分布式存储、RAID等</div>
  <a href="/专业技能/storage" class="course-link">开始学习 →</a>
</div>

<div class="course-card">
  <div class="course-icon">📊</div>
  <div class="course-title">大数据</div>
  <div class="course-desc">Hadoop、Spark、Kafka等大数据技术</div>
  <a href="/专业技能/bigdata" class="course-link">开始学习 →</a>
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
