---
layout: home

hero:
  name: "ByteAI"
  text: "AI 时代的智能入口"
  tagline: "探索 AI 工具、赛道与案例，引领智能未来"
  actions:
    - theme: brand
      text: "🚀 探索工具"
      link: "/tools"
    - theme: alt
      text: "� 了解赛道"
      link: "/tracks"

---

<div class="ai-sections">
  <!-- 热门赛道板块 -->
  <section class="tracks-section">
    <h2 class="section-title">� 热门赛道</h2>
    <div class="tracks-grid">
      <div class="track-card">
        <div class="track-icon">🎬</div>
        <div class="track-title">短剧</div>
        <div class="track-desc">AI 生成短剧脚本与视频</div>
      </div>
      <div class="track-card">
        <div class="track-icon">👤</div>
        <div class="track-title">数字人</div>
        <div class="track-desc">AI 驱动的虚拟数字人技术</div>
      </div>
      <div class="track-card">
        <div class="track-icon">📚</div>
        <div class="track-title">漫画</div>
        <div class="track-desc">AI 创作漫画内容</div>
      </div>
      <div class="track-card">
        <div class="track-icon">🎥</div>
        <div class="track-title">视频剪辑</div>
        <div class="track-desc">AI 辅助视频编辑与特效</div>
      </div>
      <div class="track-card">
        <div class="track-icon">🎨</div>
        <div class="track-title">设计创作</div>
        <div class="track-desc">AI 生成设计与创意内容</div>
      </div>
      <div class="track-card">
        <div class="track-icon">💻</div>
        <div class="track-title">编程</div>
        <div class="track-desc">AI 辅助编程与代码生成</div>
      </div>
      <div class="track-card more">
        <div class="track-icon">➕</div>
        <div class="track-title">更多</div>
        <div class="track-desc">探索其他 AI 赛道</div>
      </div>
    </div>
  </section>

  <!-- 顶流工具板块 -->
  <section class="tools-section">
    <h2 class="section-title">🚀 顶流工具</h2>
    <div class="tools-grid">
      <div class="tool-card">
        <div class="tool-logo">ClawGPT</div>
        <div class="tool-name">ClawGPT</div>
        <div class="tool-desc">智能对话助手</div>
      </div>
      <div class="tool-card">
        <div class="tool-logo">Seedance</div>
        <div class="tool-name">Seedance 2.0</div>
        <div class="tool-desc">AI 视频生成</div>
      </div>
      <div class="tool-card">
        <div class="tool-logo">Sora</div>
        <div class="tool-name">Sora</div>
        <div class="tool-desc">AI 视频生成</div>
      </div>
      <div class="tool-card">
        <div class="tool-logo">Midjourney</div>
        <div class="tool-name">Midjourney</div>
        <div class="tool-desc">AI 图像生成</div>
      </div>
      <div class="tool-card">
        <div class="tool-logo">Suno</div>
        <div class="tool-name">Suno AI</div>
        <div class="tool-desc">AI 音乐生成</div>
      </div>
      <div class="tool-card">
        <div class="tool-logo">ChatGPT</div>
        <div class="tool-name">ChatGPT</div>
        <div class="tool-desc">智能对话助手</div>
      </div>
      <div class="tool-card more">
        <div class="tool-logo">➕</div>
        <div class="tool-name">更多</div>
        <div class="tool-desc">探索其他 AI 工具</div>
      </div>
    </div>
  </section>

  <!-- 案例解析板块 -->
  <section class="cases-section">
    <h2 class="section-title">📊 案例解析</h2>
    <div class="cases-grid">
      <div class="case-card">
        <div class="case-title">AI 驱动的短视频创作</div>
        <div class="case-desc">如何利用 AI 工具快速生成高质量短视频内容</div>
        <div class="case-tag">视频创作</div>
      </div>
      <div class="case-card">
        <div class="case-title">数字人在直播中的应用</div>
        <div class="case-desc">企业如何通过数字人技术提升直播效果</div>
        <div class="case-tag">数字人</div>
      </div>
      <div class="case-card">
        <div class="case-title">AI 辅助的编程效率提升</div>
        <div class="case-desc">开发者如何利用 AI 工具提高代码质量和开发速度</div>
        <div class="case-tag">编程</div>
      </div>
      <div class="case-card">
        <div class="case-title">AI 生成内容的商业化路径</div>
        <div class="case-desc">如何将 AI 生成的内容转化为商业价值</div>
        <div class="case-tag">商业化</div>
      </div>
    </div>
  </section>
</div>

<style>
/* AI 板块通用样式 */
.ai-sections {
  max-width: 1400px;
  margin: 0 auto;
  padding: 60px 20px;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 40px;
  text-align: center;
  background: linear-gradient(135deg, #06b6d4 0%, #8b5cf6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 20px rgba(6, 182, 212, 0.3);
}

/* 热门赛道样式 */
.tracks-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
  margin-bottom: 80px;
}

.track-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: 32px 24px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  text-align: center;
}

.track-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #06b6d4 0%, #8b5cf6 100%);
}

.track-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  border-color: #06b6d4;
}

.track-icon {
  font-size: 3rem;
  margin-bottom: 16px;
}

.track-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 8px;
  color: var(--text-primary);
}

.track-desc {
  font-size: 0.95rem;
  color: var(--text-secondary);
}

.track-card.more {
  background: linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%);
  border: 2px dashed var(--border);
}

/* 顶流工具样式 */
.tools-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
  margin-bottom: 80px;
}

.tool-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: 32px 24px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  text-align: center;
}

.tool-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #8b5cf6 0%, #ec4899 100%);
}

.tool-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  border-color: #8b5cf6;
}

.tool-logo {
  width: 80px;
  height: 80px;
  margin: 0 auto 16px;
  background: linear-gradient(135deg, #06b6d4 0%, #8b5cf6 100%);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: white;
  font-size: 1rem;
}

.tool-name {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 8px;
  color: var(--text-primary);
}

.tool-desc {
  font-size: 0.95rem;
  color: var(--text-secondary);
}

.tool-card.more {
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%);
  border: 2px dashed var(--border);
}

/* 案例解析样式 */
.cases-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
}

.case-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: 32px 24px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.case-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #10b981 0%, #06b6d4 100%);
}

.case-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  border-color: #10b981;
}

.case-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 12px;
  color: var(--text-primary);
}

.case-desc {
  font-size: 0.95rem;
  color: var(--text-secondary);
  margin-bottom: 16px;
  line-height: 1.6;
}

.case-tag {
  display: inline-block;
  padding: 6px 16px;
  background: rgba(16, 185, 129, 0.1);
  color: #10b981;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .ai-sections {
    padding: 40px 16px;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .tracks-grid,
  .tools-grid {
    grid-template-columns: 1fr;
  }
  
  .cases-grid {
    grid-template-columns: 1fr;
  }
  
  .track-card,
  .tool-card,
  .case-card {
    padding: 24px 20px;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .tracks-grid,
  .tools-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .cases-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
