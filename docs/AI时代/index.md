# 🤖 AI时代

欢迎来到AI时代板块。掌握数据结构算法、大模型、深度学习，紧跟AI浪潮。

## 📚 教程列表

<div class="course-grid">

<div class="course-card">
  <div class="course-icon">🧠</div>
  <div class="course-title">数据结构与算法</div>
  <div class="course-desc">算法基础、刷题指南、面试必备</div>
  <a href="/AI时代/algorithm" class="course-link">开始学习 →</a>
</div>

<div class="course-card">
  <div class="course-icon">📝</div>
  <div class="course-title">大模型</div>
  <div class="course-desc">LLM入门、Prompt工程、RAG架构</div>
  <a href="/AI时代/llm" class="course-link">开始学习 →</a>
</div>

<div class="course-card">
  <div class="course-icon">🔥</div>
  <div class="course-title">深度学习</div>
  <div class="course-desc">PyTorch、CNN、RNN、Transformer</div>
  <a href="/AI时代/deeplearning" class="course-link">开始学习 →</a>
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
