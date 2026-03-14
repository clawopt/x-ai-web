---
layout: doc
---

# 数字人教程：从入门到精通

&lt;style&gt;
  .digital-human-tutorial {
    font-family: 'Noto Sans SC', -apple-system, BlinkMacSystemFont, sans-serif;
  }
  
  .card-hover {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .card-hover:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.1);
  }
  
  .gradient-bg {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  }
  
  .gradient-text {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  .step-number {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  }
  
  .tool-icon {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  }
  
  .comparison-card {
    border-left: 4px solid #667eea;
  }
  
  .dark .comparison-card {
    border-left-color: #818cf8;
  }
  
  .dark .card-hover:hover {
    box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.3);
  }
&lt;/style&gt;

&lt;div class="digital-human-tutorial"&gt;

  &lt;!-- 介绍部分 --&gt;
  &lt;div class="gradient-bg rounded-3xl p-8 mb-12 text-white"&gt;
    &lt;div class="flex flex-col md:flex-row items-center gap-8"&gt;
      &lt;div class="flex-1"&gt;
        &lt;div class="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4"&gt;
          &lt;span class="iconify" data-icon="solar:sparkles-bold-duotone"&gt;&lt;/span&gt;
          &lt;span class="text-sm font-medium"&gt;2026 最新教程&lt;/span&gt;
        &lt;/div&gt;
        &lt;h1 class="text-4xl md:text-5xl font-bold mb-4"&gt;数字人从入门到精通&lt;/h1&gt;
        &lt;p class="text-lg opacity-90 mb-6"&gt;全面了解数字人技术，掌握主流工具使用，开启你的虚拟数字人之旅&lt;/p&gt;
        &lt;div class="flex flex-wrap gap-3"&gt;
          &lt;div class="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2"&gt;
            &lt;span class="iconify" data-icon="solar:check-circle-bold-duotone"&gt;&lt;/span&gt;
            &lt;span class="text-sm"&gt;工具介绍&lt;/span&gt;
          &lt;/div&gt;
          &lt;div class="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2"&gt;
            &lt;span class="iconify" data-icon="solar:check-circle-bold-duotone"&gt;&lt;/span&gt;
            &lt;span class="text-sm"&gt;优劣对比&lt;/span&gt;
          &lt;/div&gt;
          &lt;div class="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2"&gt;
            &lt;span class="iconify" data-icon="solar:check-circle-bold-duotone"&gt;&lt;/span&gt;
            &lt;span class="text-sm"&gt;使用教程&lt;/span&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
      &lt;div class="w-full md:w-64 h-64 flex-shrink-0"&gt;
        &lt;div class="w-full h-full bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center"&gt;
          &lt;span class="iconify text-9xl" data-icon="solar:users-group-rounded-bold-duotone" style="color: white;"&gt;&lt;/span&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;

  &lt;!-- 目录导航 --&gt;
  &lt;div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12"&gt;
    &lt;a href="#intro" class="block bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 card-hover no-underline"&gt;
      &lt;div class="w-12 h-12 tool-icon text-white rounded-xl flex items-center justify-center mb-4"&gt;
        &lt;span class="iconify text-2xl" data-icon="solar:book-open-bold-duotone"&gt;&lt;/span&gt;
      &lt;/div&gt;
      &lt;h3 class="font-bold text-lg mb-2 text-slate-900 dark:text-white"&gt;数字人介绍&lt;/h3&gt;
      &lt;p class="text-sm text-slate-500 dark:text-slate-400"&gt;了解什么是数字人，技术原理和应用场景&lt;/p&gt;
    &lt;/a&gt;
    &lt;a href="#tools" class="block bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 card-hover no-underline"&gt;
      &lt;div class="w-12 h-12 tool-icon text-white rounded-xl flex items-center justify-center mb-4"&gt;
        &lt;span class="iconify text-2xl" data-icon="solar:widget-bold-duotone"&gt;&lt;/span&gt;
      &lt;/div&gt;
      &lt;h3 class="font-bold text-lg mb-2 text-slate-900 dark:text-white"&gt;主流工具&lt;/h3&gt;
      &lt;p class="text-sm text-slate-500 dark:text-slate-400"&gt;详细介绍7大数字人平台&lt;/p&gt;
    &lt;/a&gt;
    &lt;a href="#tutorial" class="block bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 card-hover no-underline"&gt;
      &lt;div class="w-12 h-12 tool-icon text-white rounded-xl flex items-center justify-center mb-4"&gt;
        &lt;span class="iconify text-2xl" data-icon="solar:play-circle-bold-duotone"&gt;&lt;/span&gt;
      &lt;/div&gt;
      &lt;h3 class="font-bold text-lg mb-2 text-slate-900 dark:text-white"&gt;使用教程&lt;/h3&gt;
      &lt;p class="text-sm text-slate-500 dark:text-slate-400"&gt;手把手教你创建第一个数字人视频&lt;/p&gt;
    &lt;/a&gt;
  &lt;/div&gt;

  &lt;!-- 数字人介绍 --&gt;
  &lt;section id="intro" class="mb-16"&gt;
    &lt;div class="flex items-center gap-3 mb-8"&gt;
      &lt;div class="w-1 h-8 gradient-bg rounded-full"&gt;&lt;/div&gt;
      &lt;h2 class="text-3xl font-bold text-slate-900 dark:text-white"&gt;什么是数字人？&lt;/h2&gt;
    &lt;/div&gt;

    &lt;div class="bg-white dark:bg-slate-800 rounded-3xl p-8 mb-8 border border-slate-100 dark:border-slate-700"&gt;
      &lt;div class="grid grid-cols-1 md:grid-cols-2 gap-8"&gt;
        &lt;div&gt;
          &lt;h3 class="text-xl font-bold mb-4 text-slate-900 dark:text-white"&gt;
            &lt;span class="iconify mr-2" data-icon="solar:info-circle-bold-duotone"&gt;&lt;/span&gt;
            数字人定义
          &lt;/h3&gt;
          &lt;p class="text-slate-600 dark:text-slate-300 mb-4"&gt;
            数字人（Digital Human）是指通过计算机技术创造的虚拟人物形象，具有逼真的外貌、表情和动作。它们可以：
          &lt;/p&gt;
          &lt;ul class="space-y-3"&gt;
            &lt;li class="flex items-start gap-3"&gt;
              &lt;span class="iconify text-indigo-500 flex-shrink-0 mt-1" data-icon="solar:check-circle-bold-duotone"&gt;&lt;/span&gt;
              &lt;span class="text-slate-600 dark:text-slate-300"&gt;进行自然的语言交流&lt;/span&gt;
            &lt;/li&gt;
            &lt;li class="flex items-start gap-3"&gt;
              &lt;span class="iconify text-indigo-500 flex-shrink-0 mt-1" data-icon="solar:check-circle-bold-duotone"&gt;&lt;/span&gt;
              &lt;span class="text-slate-600 dark:text-slate-300"&gt;展示丰富的面部表情&lt;/span&gt;
            &lt;/li&gt;
            &lt;li class="flex items-start gap-3"&gt;
              &lt;span class="iconify text-indigo-500 flex-shrink-0 mt-1" data-icon="solar:check-circle-bold-duotone"&gt;&lt;/span&gt;
              &lt;span class="text-slate-600 dark:text-slate-300"&gt;执行各种肢体动作&lt;/span&gt;
            &lt;/li&gt;
            &lt;li class="flex items-start gap-3"&gt;
              &lt;span class="iconify text-indigo-500 flex-shrink-0 mt-1" data-icon="solar:check-circle-bold-duotone"&gt;&lt;/span&gt;
              &lt;span class="text-slate-600 dark:text-slate-300"&gt;应用于多个领域&lt;/span&gt;
            &lt;/li&gt;
          &lt;/ul&gt;
        &lt;/div&gt;
        &lt;div&gt;
          &lt;h3 class="text-xl font-bold mb-4 text-slate-900 dark:text-white"&gt;
            &lt;span class="iconify mr-2" data-icon="solar:code-square-bold-duotone"&gt;&lt;/span&gt;
            技术路线
          &lt;/h3&gt;
          &lt;div class="space-y-4"&gt;
            &lt;div class="bg-indigo-50 dark:bg-slate-700 rounded-xl p-4"&gt;
              &lt;h4 class="font-bold text-indigo-600 dark:text-indigo-400 mb-2"&gt;CGI 技术&lt;/h4&gt;
              &lt;p class="text-sm text-slate-600 dark:text-slate-300"&gt;计算机生成图像，高保真、实时互动，适合企业级应用&lt;/p&gt;
            &lt;/div&gt;
            &lt;div class="bg-purple-50 dark:bg-slate-700 rounded-xl p-4"&gt;
              &lt;h4 class="font-bold text-purple-600 dark:text-purple-400 mb-2"&gt;Deepfake&lt;/h4&gt;
              &lt;p class="text-sm text-slate-600 dark:text-slate-300"&gt;深度学习生成视频，快速批量生产，适合内容创作&lt;/p&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;

    &lt;!-- 应用场景 --&gt;
    &lt;h3 class="text-2xl font-bold mb-6 text-slate-900 dark:text-white"&gt;应用场景&lt;/h3&gt;
    &lt;div class="grid grid-cols-1 md:grid-cols-4 gap-4"&gt;
      &lt;div class="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 card-hover"&gt;
        &lt;div class="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4"&gt;
          &lt;span class="iconify text-2xl" data-icon="solar:chat-square-like-bold-duotone"&gt;&lt;/span&gt;
        &lt;/div&gt;
        &lt;h4 class="font-bold text-slate-900 dark:text-white"&gt;内容创作&lt;/h4&gt;
        &lt;p class="text-sm text-slate-500 dark:text-slate-400"&gt;短视频、直播、广告&lt;/p&gt;
      &lt;/div&gt;
      &lt;div class="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 card-hover"&gt;
        &lt;div class="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center mb-4"&gt;
          &lt;span class="iconify text-2xl" data-icon="solar:user-heart-bold-duotone"&gt;&lt;/span&gt;
        &lt;/div&gt;
        &lt;h4 class="font-bold text-slate-900 dark:text-white"&gt;客户服务&lt;/h4&gt;
        &lt;p class="text-sm text-slate-500 dark:text-slate-400"&gt;智能客服、虚拟导购&lt;/p&gt;
      &lt;/div&gt;
      &lt;div class="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 card-hover"&gt;
        &lt;div class="w-12 h-12 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center mb-4"&gt;
          &lt;span class="iconify text-2xl" data-icon="solar:book-bold-duotone"&gt;&lt;/span&gt;
        &lt;/div&gt;
        &lt;h4 class="font-bold text-slate-900 dark:text-white"&gt;教育培训&lt;/h4&gt;
        &lt;p class="text-sm text-slate-500 dark:text-slate-400"&gt;虚拟讲师、AI导师&lt;/p&gt;
      &lt;/div&gt;
      &lt;div class="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 card-hover"&gt;
        &lt;div class="w-12 h-12 bg-pink-50 text-pink-600 rounded-xl flex items-center justify-center mb-4"&gt;
          &lt;span class="iconify text-2xl" data-icon="solar:star-bold-duotone"&gt;&lt;/span&gt;
        &lt;/div&gt;
        &lt;h4 class="font-bold text-slate-900 dark:text-white"&gt;品牌代言&lt;/h4&gt;
        &lt;p class="text-sm text-slate-500 dark:text-slate-400"&gt;虚拟偶像、数字员工&lt;/p&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/section&gt;

  &lt;!-- 主流工具 --&gt;
  &lt;section id="tools" class="mb-16"&gt;
    &lt;div class="flex items-center gap-3 mb-8"&gt;
      &lt;div class="w-1 h-8 gradient-bg rounded-full"&gt;&lt;/div&gt;
      &lt;h2 class="text-3xl font-bold text-slate-900 dark:text-white"&gt;主流数字人工具&lt;/h2&gt;
    &lt;/div&gt;

    &lt;!-- 工具卡片 --&gt;
    &lt;div class="space-y-6"&gt;
      &lt;!-- HeyGen --&gt;
      &lt;div class="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-100 dark:border-slate-700 card-hover"&gt;
        &lt;div class="flex flex-col md:flex-row gap-8"&gt;
          &lt;div class="w-full md:w-48 flex-shrink-0"&gt;
            &lt;div class="w-full h-48 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center"&gt;
              &lt;span class="iconify text-8xl" data-icon="solar:video-play-bold-duotone" style="color: white;"&gt;&lt;/span&gt;
            &lt;/div&gt;
          &lt;/div&gt;
          &lt;div class="flex-1"&gt;
            &lt;div class="flex items-center gap-3 mb-4"&gt;
              &lt;h3 class="text-2xl font-bold text-slate-900 dark:text-white"&gt;HeyGen&lt;/h3&gt;
              &lt;span class="bg-green-100 text-green-600 text-xs font-bold px-3 py-1 rounded-full"&gt;推荐&lt;/span&gt;
            &lt;/div&gt;
            &lt;p class="text-slate-600 dark:text-slate-300 mb-4"&gt;
              创作者友好的AI视频平台，提供230+预制头像，支持140+语言，可创建全身数字分身
            &lt;/p&gt;
            &lt;div class="flex flex-wrap gap-2 mb-4"&gt;
              &lt;span class="bg-blue-100 dark:bg-slate-700 text-blue-600 dark:text-blue-400 text-xs px-3 py-1 rounded-full"&gt;创作者友好&lt;/span&gt;
              &lt;span class="bg-purple-100 dark:bg-slate-700 text-purple-600 dark:text-purple-400 text-xs px-3 py-1 rounded-full"&gt;多语言支持&lt;/span&gt;
              &lt;span class="bg-green-100 dark:bg-slate-700 text-green-600 dark:text-green-400 text-xs px-3 py-1 rounded-full"&gt;快速上手&lt;/span&gt;
            &lt;/div&gt;
            &lt;div class="flex items-center gap-4"&gt;
              &lt;div class="flex items-center gap-2"&gt;
                &lt;span class="iconify text-yellow-500" data-icon="solar:money-dollar-bold-duotone"&gt;&lt;/span&gt;
                &lt;span class="text-sm text-slate-600 dark:text-slate-300"&gt;$24/月起&lt;/span&gt;
              &lt;/div&gt;
              &lt;div class="flex items-center gap-2"&gt;
                &lt;span class="iconify text-green-500" data-icon="solar:check-circle-bold-duotone"&gt;&lt;/span&gt;
                &lt;span class="text-sm text-slate-600 dark:text-slate-300"&gt;有免费额度&lt;/span&gt;
              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;

      &lt;!-- D-ID --&gt;
      &lt;div class="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-100 dark:border-slate-700 card-hover"&gt;
        &lt;div class="flex flex-col md:flex-row gap-8"&gt;
          &lt;div class="w-full md:w-48 flex-shrink-0"&gt;
            &lt;div class="w-full h-48 bg-gradient-to-br from-pink-500 to-red-600 rounded-2xl flex items-center justify-center"&gt;
              &lt;span class="iconify text-8xl" data-icon="solar:image-square-bold-duotone" style="color: white;"&gt;&lt;/span&gt;
            &lt;/div&gt;
          &lt;/div&gt;
          &lt;div class="flex-1"&gt;
            &lt;div class="flex items-center gap-3 mb-4"&gt;
              &lt;h3 class="text-2xl font-bold text-slate-900 dark:text-white"&gt;D-ID&lt;/h3&gt;
              &lt;span class="bg-blue-100 text-blue-600 text-xs font-bold px-3 py-1 rounded-full"&gt;低成本&lt;/span&gt;
            &lt;/div&gt;
            &lt;p class="text-slate-600 dark:text-slate-300 mb-4"&gt;
              照片变视频神器，几分钟内从脚本生成视频，API优先，开发者友好
            &lt;/p&gt;
            &lt;div class="flex flex-wrap gap-2 mb-4"&gt;
              &lt;span class="bg-pink-100 dark:bg-slate-700 text-pink-600 dark:text-pink-400 text-xs px-3 py-1 rounded-full"&gt;照片驱动&lt;/span&gt;
              &lt;span class="bg-red-100 dark:bg-slate-700 text-red-600 dark:text-red-400 text-xs px-3 py-1 rounded-full"&gt;API优先&lt;/span&gt;
              &lt;span class="bg-orange-100 dark:bg-slate-700 text-orange-600 dark:text-orange-400 text-xs px-3 py-1 rounded-full"&gt;快速演示&lt;/span&gt;
            &lt;/div&gt;
            &lt;div class="flex items-center gap-4"&gt;
              &lt;div class="flex items-center gap-2"&gt;
                &lt;span class="iconify text-yellow-500" data-icon="solar:money-dollar-bold-duotone"&gt;&lt;/span&gt;
                &lt;span class="text-sm text-slate-600 dark:text-slate-300"&gt;$5.9/月起&lt;/span&gt;
              &lt;/div&gt;
              &lt;div class="flex items-center gap-2"&gt;
                &lt;span class="iconify text-green-500" data-icon="solar:check-circle-bold-duotone"&gt;&lt;/span&gt;
                &lt;span class="text-sm text-slate-600 dark:text-slate-300"&gt;有免费额度&lt;/span&gt;
              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;

      &lt;!-- Synthesia --&gt;
      &lt;div class="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-100 dark:border-slate-700 card-hover"&gt;
        &lt;div class="flex flex-col md:flex-row gap-8"&gt;
          &lt;div class="w-full md:w-48 flex-shrink-0"&gt;
            &lt;div class="w-full h-48 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center"&gt;
              &lt;span class="iconify text-8xl" data-icon="solar:folder-video-bold-duotone" style="color: white;"&gt;&lt;/span&gt;
            &lt;/div&gt;
          &lt;/div&gt;
          &lt;div class="flex-1"&gt;
            &lt;div class="flex items-center gap-3 mb-4"&gt;
              &lt;h3 class="text-2xl font-bold text-slate-900 dark:text-white"&gt;Synthesia&lt;/h3&gt;
              &lt;span class="bg-purple-100 text-purple-600 text-xs font-bold px-3 py-1 rounded-full"&gt;企业级&lt;/span&gt;
            &lt;/div&gt;
            &lt;p class="text-slate-600 dark:text-slate-300 mb-4"&gt;
              AI视频领域的市场领导者，支持140+语言，模板丰富，适合企业培训
            &lt;/p&gt;
            &lt;div class="flex flex-wrap gap-2 mb-4"&gt;
              &lt;span class="bg-green-100 dark:bg-slate-700 text-green-600 dark:text-green-400 text-xs px-3 py-1 rounded-full"&gt;市场领先&lt;/span&gt;
              &lt;span class="bg-teal-100 dark:bg-slate-700 text-teal-600 dark:text-teal-400 text-xs px-3 py-1 rounded-full"&gt;企业培训&lt;/span&gt;
              &lt;span class="bg-cyan-100 dark:bg-slate-700 text-cyan-600 dark:text-cyan-400 text-xs px-3 py-1 rounded-full"&gt;模板丰富&lt;/span&gt;
            &lt;/div&gt;
            &lt;div class="flex items-center gap-4"&gt;
              &lt;div class="flex items-center gap-2"&gt;
                &lt;span class="iconify text-yellow-500" data-icon="solar:money-dollar-bold-duotone"&gt;&lt;/span&gt;
                &lt;span class="text-sm text-slate-600 dark:text-slate-300"&gt;$22/月起&lt;/span&gt;
              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;

    &lt;!-- 优劣对比 --&gt;
    &lt;h3 class="text-2xl font-bold mt-12 mb-6 text-slate-900 dark:text-white"&gt;工具优劣对比&lt;/h3&gt;
    &lt;div class="overflow-x-auto"&gt;
      &lt;div class="bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700"&gt;
        &lt;table class="w-full"&gt;
          &lt;thead&gt;
            &lt;tr class="border-b border-slate-100 dark:border-slate-700"&gt;
              &lt;th class="text-left p-4 font-bold text-slate-900 dark:text-white"&gt;工具&lt;/th&gt;
              &lt;th class="text-left p-4 font-bold text-slate-900 dark:text-white"&gt;优势&lt;/th&gt;
              &lt;th class="text-left p-4 font-bold text-slate-900 dark:text-white"&gt;劣势&lt;/th&gt;
              &lt;th class="text-left p-4 font-bold text-slate-900 dark:text-white"&gt;适合人群&lt;/th&gt;
            &lt;/tr&gt;
          &lt;/thead&gt;
          &lt;tbody&gt;
            &lt;tr class="border-b border-slate-100 dark:border-slate-700"&gt;
              &lt;td class="p-4 font-medium text-slate-900 dark:text-white"&gt;HeyGen&lt;/td&gt;
              &lt;td class="p-4 text-slate-600 dark:text-slate-300"&gt;头像多、语言全、易上手&lt;/td&gt;
              &lt;td class="p-4 text-slate-600 dark:text-slate-300"&gt;定制化有限&lt;/td&gt;
              &lt;td class="p-4 text-slate-600 dark:text-slate-300"&gt;个人创作者&lt;/td&gt;
            &lt;/tr&gt;
            &lt;tr class="border-b border-slate-100 dark:border-slate-700"&gt;
              &lt;td class="p-4 font-medium text-slate-900 dark:text-white"&gt;D-ID&lt;/td&gt;
              &lt;td class="p-4 text-slate-600 dark:text-slate-300"&gt;成本低、API好、快速&lt;/td&gt;
              &lt;td class="p-4 text-slate-600 dark:text-slate-300"&gt;质量一般&lt;/td&gt;
              &lt;td class="p-4 text-slate-600 dark:text-slate-300"&gt;开发者、快速演示&lt;/td&gt;
            &lt;/tr&gt;
            &lt;tr&gt;
              &lt;td class="p-4 font-medium text-slate-900 dark:text-white"&gt;Synthesia&lt;/td&gt;
              &lt;td class="p-4 text-slate-600 dark:text-slate-300"&gt;质量高、模板多、企业级&lt;/td&gt;
              &lt;td class="p-4 text-slate-600 dark:text-slate-300"&gt;价格贵&lt;/td&gt;
              &lt;td class="p-4 text-slate-600 dark:text-slate-300"&gt;企业用户&lt;/td&gt;
            &lt;/tr&gt;
          &lt;/tbody&gt;
        &lt;/table&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/section&gt;

  &lt;!-- 使用教程 --&gt;
  &lt;section id="tutorial" class="mb-16"&gt;
    &lt;div class="flex items-center gap-3 mb-8"&gt;
      &lt;div class="w-1 h-8 gradient-bg rounded-full"&gt;&lt;/div&gt;
      &lt;h2 class="text-3xl font-bold text-slate-900 dark:text-white"&gt;使用教程&lt;/h2&gt;
    &lt;/div&gt;

    &lt;!-- HeyGen 教程 --&gt;
    &lt;div class="bg-white dark:bg-slate-800 rounded-3xl p-8 mb-8 border border-slate-100 dark:border-slate-700"&gt;
      &lt;div class="flex items-center gap-4 mb-6"&gt;
        &lt;div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-xl flex items-center justify-center"&gt;
          &lt;span class="iconify text-2xl" data-icon="solar:video-play-bold-duotone"&gt;&lt;/span&gt;
        &lt;/div&gt;
        &lt;div&gt;
          &lt;h3 class="text-xl font-bold text-slate-900 dark:text-white"&gt;HeyGen 快速上手&lt;/h3&gt;
          &lt;p class="text-sm text-slate-500 dark:text-slate-400"&gt;5分钟创建你的第一个数字人视频&lt;/p&gt;
        &lt;/div&gt;
      &lt;/div&gt;

      &lt;div class="space-y-6"&gt;
        &lt;div class="flex gap-4"&gt;
          &lt;div class="flex-shrink-0 w-10 h-10 step-number text-white rounded-full flex items-center justify-center font-bold"&gt;1&lt;/div&gt;
          &lt;div class="flex-1"&gt;
            &lt;h4 class="font-bold text-slate-900 dark:text-white mb-2"&gt;注册账号并登录&lt;/h4&gt;
            &lt;p class="text-slate-600 dark:text-slate-300"&gt;访问 HeyGen 官网，使用邮箱注册账号并完成登录&lt;/p&gt;
          &lt;/div&gt;
        &lt;/div&gt;

        &lt;div class="flex gap-4"&gt;
          &lt;div class="flex-shrink-0 w-10 h-10 step-number text-white rounded-full flex items-center justify-center font-bold"&gt;2&lt;/div&gt;
          &lt;div class="flex-1"&gt;
            &lt;h4 class="font-bold text-slate-900 dark:text-white mb-2"&gt;选择数字人形象&lt;/h4&gt;
            &lt;p class="text-slate-600 dark:text-slate-300"&gt;从230+预制头像中选择喜欢的数字人，或上传自己的照片&lt;/p&gt;
          &lt;/div&gt;
        &lt;/div&gt;

        &lt;div class="flex gap-4"&gt;
          &lt;div class="flex-shrink-0 w-10 h-10 step-number text-white rounded-full flex items-center justify-center font-bold"&gt;3&lt;/div&gt;
          &lt;div class="flex-1"&gt;
            &lt;h4 class="font-bold text-slate-900 dark:text-white mb-2"&gt;输入脚本文字&lt;/h4&gt;
            &lt;p class="text-slate-600 dark:text-slate-300"&gt;输入你想要数字人说的话，支持140+种语言&lt;/p&gt;
          &lt;/div&gt;
        &lt;/div&gt;

        &lt;div class="flex gap-4"&gt;
          &lt;div class="flex-shrink-0 w-10 h-10 step-number text-white rounded-full flex items-center justify-center font-bold"&gt;4&lt;/div&gt;
          &lt;div class="flex-1"&gt;
            &lt;h4 class="font-bold text-slate-900 dark:text-white mb-2"&gt;选择配音和语言&lt;/h4&gt;
            &lt;p class="text-slate-600 dark:text-slate-300"&gt;选择合适的语音音色，调整语速和语调&lt;/p&gt;
          &lt;/div&gt;
        &lt;/div&gt;

        &lt;div class="flex gap-4"&gt;
          &lt;div class="flex-shrink-0 w-10 h-10 step-number text-white rounded-full flex items-center justify-center font-bold"&gt;5&lt;/div&gt;
          &lt;div class="flex-1"&gt;
            &lt;h4 class="font-bold text-slate-900 dark:text-white mb-2"&gt;生成并下载视频&lt;/h4&gt;
            &lt;p class="text-slate-600 dark:text-slate-300"&gt;点击生成，等待渲染完成后下载视频&lt;/p&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;

    &lt;!-- 选型建议 --&gt;
    &lt;h3 class="text-2xl font-bold mb-6 text-slate-900 dark:text-white"&gt;选型建议&lt;/h3&gt;
    &lt;div class="grid grid-cols-1 md:grid-cols-2 gap-4"&gt;
      &lt;div class="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700"&gt;
        &lt;div class="flex items-center gap-3 mb-4"&gt;
          &lt;div class="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center"&gt;
            &lt;span class="iconify text-xl" data-icon="solar:user-bold-duotone"&gt;&lt;/span&gt;
          &lt;/div&gt;
          &lt;h4 class="font-bold text-slate-900 dark:text-white"&gt;个人创作者&lt;/h4&gt;
        &lt;/div&gt;
        &lt;p class="text-slate-600 dark:text-slate-300 mb-3"&gt;推荐：HeyGen、D-ID&lt;/p&gt;
        &lt;p class="text-sm text-slate-500 dark:text-slate-400"&gt;理由：效果好、上手快、成本可控&lt;/p&gt;
      &lt;/div&gt;
      &lt;div class="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700"&gt;
        &lt;div class="flex items-center gap-3 mb-4"&gt;
          &lt;div class="w-10 h-10 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center"&gt;
            &lt;span class="iconify text-xl" data-icon="solar:building-bold-duotone"&gt;&lt;/span&gt;
          &lt;/div&gt;
          &lt;h4 class="font-bold text-slate-900 dark:text-white"&gt;企业用户&lt;/h4&gt;
        &lt;/div&gt;
        &lt;p class="text-slate-600 dark:text-slate-300 mb-3"&gt;推荐：Synthesia、UneeQ&lt;/p&gt;
        &lt;p class="text-sm text-slate-500 dark:text-slate-400"&gt;理由：企业级、可定制、品牌感强&lt;/p&gt;
      &lt;/div&gt;
      &lt;div class="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700"&gt;
        &lt;div class="flex items-center gap-3 mb-4"&gt;
          &lt;div class="w-10 h-10 bg-green-50 text-green-600 rounded-xl flex items-center justify-center"&gt;
            &lt;span class="iconify text-xl" data-icon="solar:code-bold-duotone"&gt;&lt;/span&gt;
          &lt;/div&gt;
          &lt;h4 class="font-bold text-slate-900 dark:text-white"&gt;开发者集成&lt;/h4&gt;
        &lt;/div&gt;
        &lt;p class="text-slate-600 dark:text-slate-300 mb-3"&gt;推荐：D-ID&lt;/p&gt;
        &lt;p class="text-sm text-slate-500 dark:text-slate-400"&gt;理由：API优先、文档完善、成本低&lt;/p&gt;
      &lt;/div&gt;
      &lt;div class="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700"&gt;
        &lt;div class="flex items-center gap-3 mb-4"&gt;
          &lt;div class="w-10 h-10 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center"&gt;
            &lt;span class="iconify text-xl" data-icon="solar:lightning-bold-duotone"&gt;&lt;/span&gt;
          &lt;/div&gt;
          &lt;h4 class="font-bold text-slate-900 dark:text-white"&gt;快速演示&lt;/h4&gt;
        &lt;/div&gt;
        &lt;p class="text-slate-600 dark:text-slate-300 mb-3"&gt;推荐：D-ID&lt;/p&gt;
        &lt;p class="text-sm text-slate-500 dark:text-slate-400"&gt;理由：快速、成本低、效果好&lt;/p&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/section&gt;

  &lt;!-- 总结 --&gt;
  &lt;div class="gradient-bg rounded-3xl p-8 text-white"&gt;
    &lt;div class="flex flex-col md:flex-row items-center gap-8"&gt;
      &lt;div class="flex-1"&gt;
        &lt;h2 class="text-2xl md:text-3xl font-bold mb-4"&gt;开始你的数字人之旅&lt;/h2&gt;
        &lt;p class="opacity-90 mb-6"&gt;
          数字人技术正在快速发展，选择适合自己的工具，开始创作吧！
        &lt;/p&gt;
        &lt;div class="flex flex-wrap gap-3"&gt;
          &lt;a href="https://heygen.com" target="_blank" class="inline-flex items-center gap-2 bg-white text-indigo-600 font-bold px-6 py-3 rounded-xl hover:bg-opacity-90 transition-all"&gt;
            &lt;span class="iconify" data-icon="solar:arrow-right-bold-duotone"&gt;&lt;/span&gt;
            立即体验 HeyGen
          &lt;/a&gt;
        &lt;/div&gt;
      &lt;/div&gt;
      &lt;div class="w-32 h-32 flex-shrink-0"&gt;
        &lt;div class="w-full h-full bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center"&gt;
          &lt;span class="iconify text-7xl" data-icon="solar:rocket-bold-duotone" style="color: white;"&gt;&lt;/span&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;

&lt;/div&gt;
