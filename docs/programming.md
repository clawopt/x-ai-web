---
layout: home
---

<style>
body {
font-family: 'Noto Sans SC', sans-serif;
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

.step-number {
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.tool-icon {
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

a {
text-decoration: none !important;
}

a:hover {
text-decoration: none !important;
}
</style>

<section class="relative pt-16 pb-12 overflow-hidden">
<div class="max-w-6xl mx-auto px-6">
<div class="gradient-bg rounded-3xl p-8 md:p-12 text-white">
<div class="flex flex-col md:flex-row items-center gap-8">
<div class="flex-1">
<div class="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
<span class="iconify" data-icon="solar:sparkles-bold-duotone"></span>
<span class="text-sm font-medium">2026 最新教程</span>
</div>
<h1 class="text-4xl md:text-5xl font-bold mb-4">AI编程从入门到精通</h1>
<p class="text-lg opacity-90 mb-6">全面了解AI编程技术，掌握主流工具使用，开启你的智能开发之旅</p>
<div class="flex flex-wrap gap-3">
<div class="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
<span class="iconify" data-icon="solar:check-circle-bold-duotone"></span>
<span class="text-sm">工具介绍</span>
</div>
<div class="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
<span class="iconify" data-icon="solar:check-circle-bold-duotone"></span>
<span class="text-sm">优劣对比</span>
</div>
<div class="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
<span class="iconify" data-icon="solar:check-circle-bold-duotone"></span>
<span class="text-sm">选型建议</span>
</div>
</div>
</div>
<div class="w-full md:w-64 h-64 flex-shrink-0">
<div class="w-full h-full bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center">
<span class="iconify text-9xl" data-icon="solar:code-bold-duotone" style="color: white;"></span>
</div>
</div>
</div>
</div>
</div>
</section>

<section class="py-8 max-w-6xl mx-auto px-6">
<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
<a href="#intro" class="block bg-white p-6 rounded-2xl border border-slate-100 card-hover no-underline text-center">
<div class="flex items-center justify-center mb-4">
<div class="w-12 h-12 tool-icon text-white rounded-xl flex items-center justify-center">
<span class="iconify text-2xl" data-icon="mdi:code-braces"></span>
</div>
</div>
<h3 class="font-bold text-lg mb-2 text-slate-900">编程介绍</h3>
<p class="text-sm text-slate-500">了解什么是AI编程，技术原理和应用场景</p>
</a>
<a href="#tools" class="block bg-white p-6 rounded-2xl border border-slate-100 card-hover no-underline text-center">
<div class="flex items-center justify-center mb-4">
<div class="w-12 h-12 tool-icon text-white rounded-xl flex items-center justify-center">
<span class="iconify text-2xl" data-icon="mdi:apps"></span>
</div>
</div>
<h3 class="font-bold text-lg mb-2 text-slate-900">主流工具</h3>
<p class="text-sm text-slate-500">详细介绍国内外AI编程平台</p>
</a>
<a href="#comparison" class="block bg-white p-6 rounded-2xl border border-slate-100 card-hover no-underline text-center">
<div class="flex items-center justify-center mb-4">
<div class="w-12 h-12 tool-icon text-white rounded-xl flex items-center justify-center">
<span class="iconify text-2xl" data-icon="mdi:compare"></span>
</div>
</div>
<h3 class="font-bold text-lg mb-2 text-slate-900">优劣对比</h3>
<p class="text-sm text-slate-500">全面对比各平台优劣势</p>
</a>
</div>
</section>

<section id="intro" class="py-8 max-w-6xl mx-auto px-6">
<div class="flex items-center gap-3 mb-8">
<div class="w-1 h-8 gradient-bg rounded-full"></div>
<h2 class="text-3xl font-bold text-slate-900">什么是AI编程？</h2>
</div>

<div class="bg-white rounded-3xl p-8 mb-8 border border-slate-100">
<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
<div>
<h3 class="text-xl font-bold mb-4 text-slate-900 flex items-center gap-2">
<span class="iconify" data-icon="mdi:information"></span>
AI编程定义
</h3>
<p class="text-slate-600 mb-4">
AI编程是指利用人工智能技术，自动生成、补全、调试、重构代码的开发方式。它们可以：
</p>
<ul class="space-y-3">
<li class="flex items-start gap-3">
<span class="iconify text-indigo-500 flex-shrink-0 mt-1" data-icon="mdi:check-circle"></span>
<span class="text-slate-600">自动生成代码片段和完整项目</span>
</li>
<li class="flex items-start gap-3">
<span class="iconify text-indigo-500 flex-shrink-0 mt-1" data-icon="mdi:check-circle"></span>
<span class="text-slate-600">智能代码补全和错误修复</span>
</li>
<li class="flex items-start gap-3">
<span class="iconify text-indigo-500 flex-shrink-0 mt-1" data-icon="mdi:check-circle"></span>
<span class="text-slate-600">代码重构和安全审计</span>
</li>
<li class="flex items-start gap-3">
<span class="iconify text-indigo-500 flex-shrink-0 mt-1" data-icon="mdi:check-circle"></span>
<span class="text-slate-600">多语言转换和环境配置</span>
</li>
</ul>
</div>
<div>
<h3 class="text-xl font-bold mb-4 text-slate-900 flex items-center gap-2">
<span class="iconify" data-icon="mdi:code-braces"></span>
技术路线
</h3>
<div class="space-y-4">
<div class="bg-indigo-50 rounded-xl p-4">
<h4 class="font-bold text-indigo-600 mb-2">IDE集成模式</h4>
<p class="text-sm text-slate-600">深度集成到VS Code、JetBrains等IDE，实时补全</p>
</div>
<div class="bg-purple-50 rounded-xl p-4">
<h4 class="font-bold text-purple-600 mb-2">AI原生IDE模式</h4>
<p class="text-sm text-slate-600">基于AI重构的IDE，支持多文件协同和项目生成</p>
</div>
</div>
</div>
</div>
</div>

<h3 class="text-2xl font-bold mb-6 text-slate-900">应用场景</h3>
<div class="grid grid-cols-1 md:grid-cols-4 gap-4">
<div class="bg-white p-6 rounded-2xl border border-slate-100 card-hover">
<div class="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4">
<span class="iconify text-2xl" data-icon="mdi:code-tags"></span>
</div>
<h4 class="font-bold text-slate-900">日常编码</h4>
<p class="text-sm text-slate-500">代码补全、调试、重构</p>
</div>
<div class="bg-white p-6 rounded-2xl border border-slate-100 card-hover">
<div class="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center mb-4">
<span class="iconify text-2xl" data-icon="mdi:folder-multiple"></span>
</div>
<h4 class="font-bold text-slate-900">项目生成</h4>
<p class="text-sm text-slate-500">全栈项目快速搭建</p>
</div>
<div class="bg-white p-6 rounded-2xl border border-slate-100 card-hover">
<div class="w-12 h-12 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center mb-4">
<span class="iconify text-2xl" data-icon="mdi:shield-check"></span>
</div>
<h4 class="font-bold text-slate-900">安全审计</h4>
<p class="text-sm text-slate-500">漏洞检测、代码审计</p>
</div>
<div class="bg-white p-6 rounded-2xl border border-slate-100 card-hover">
<div class="w-12 h-12 bg-pink-50 text-pink-600 rounded-xl flex items-center justify-center mb-4">
<span class="iconify text-2xl" data-icon="mdi:cloud-sync"></span>
</div>
<h4 class="font-bold text-slate-900">云原生开发</h4>
<p class="text-sm text-slate-500">云服务SDK、部署脚本</p>
</div>
</div>
</section>

<section id="tools" class="py-8 max-w-6xl mx-auto px-6">
<div class="flex items-center gap-3 mb-8">
<div class="w-1 h-8 gradient-bg rounded-full"></div>
<h2 class="text-3xl font-bold text-slate-900">国际标杆型AI编程工具</h2>
</div>
<p class="text-slate-600 mb-8">生态最强、专业级</p>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
<div class="bg-white rounded-3xl p-6 border border-slate-100 card-hover">
<div class="w-full h-40 bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl flex items-center justify-center mb-4">
<span class="iconify text-white text-7xl" data-icon="mdi:github"></span>
</div>
<h3 class="text-xl font-bold text-slate-900 mb-2">GitHub Copilot</h3>
<p class="text-slate-600 mb-4 text-sm">微软+OpenAI，全球市占第一，VS Code/IntelliJ深度集成，支持实时代码补全、多语言适配、Copilot Workspace全流程自动化</p>
<div class="flex flex-wrap gap-2 mb-4">
<span class="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">生态无缝</span>
<span class="bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full">补全准确90%+</span>
<span class="bg-green-100 text-green-600 text-xs px-3 py-1 rounded-full">100+语言</span>
</div>
<div class="flex items-center gap-3 mb-4">
<span class="iconify text-yellow-500" data-icon="solar:money-dollar-bold-duotone"></span>
<span class="text-sm text-slate-600">$10/月Pro版</span>
</div>
<div class="flex gap-2">
<a href="https://github.com/features/copilot" target="_blank" class="flex-1 bg-gradient-to-r from-gray-700 to-gray-900 text-white text-center font-bold px-4 py-2 rounded-xl hover:opacity-90 transition-all no-underline text-sm">
<span class="iconify mr-1" data-icon="solar:link-bold-duotone"></span>
官网
</a>
<a href="https://docs.github.com/copilot" target="_blank" class="flex-1 bg-slate-100 text-slate-600 text-center font-bold px-4 py-2 rounded-xl hover:bg-slate-200 transition-all no-underline text-sm">
<span class="iconify mr-1" data-icon="solar:book-bookmark-bold-duotone"></span>
教程
</a>
</div>
</div>

<div class="bg-white rounded-3xl p-6 border border-slate-100 card-hover">
<div class="w-full h-40 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-4">
<span class="iconify text-white text-7xl" data-icon="mdi:cursor-default-click"></span>
</div>
<h3 class="text-xl font-bold text-slate-900 mb-2">Cursor</h3>
<p class="text-slate-600 mb-4 text-sm">AI原生IDE，代码编辑神器，支持Composer模式多文件协同、一句话生成完整项目、自动执行终端命令、图像转代码</p>
<div class="flex flex-wrap gap-2 mb-4">
<span class="bg-purple-100 text-purple-600 text-xs px-3 py-1 rounded-full">IDE深度融合</span>
<span class="bg-indigo-100 text-indigo-600 text-xs px-3 py-1 rounded-full">免费额度足</span>
<span class="bg-violet-100 text-violet-600 text-xs px-3 py-1 rounded-full">新手友好</span>
</div>
<div class="flex items-center gap-3 mb-4">
<span class="iconify text-yellow-500" data-icon="solar:money-dollar-bold-duotone"></span>
<span class="text-sm text-slate-600">$20/月Pro版</span>
</div>
<div class="flex gap-2">
<a href="https://cursor.sh/" target="_blank" class="flex-1 bg-gradient-to-r from-purple-500 to-indigo-600 text-white text-center font-bold px-4 py-2 rounded-xl hover:opacity-90 transition-all no-underline text-sm">
<span class="iconify mr-1" data-icon="solar:link-bold-duotone"></span>
官网
</a>
<a href="https://cursor.sh/docs" target="_blank" class="flex-1 bg-slate-100 text-slate-600 text-center font-bold px-4 py-2 rounded-xl hover:bg-slate-200 transition-all no-underline text-sm">
<span class="iconify mr-1" data-icon="solar:book-bookmark-bold-duotone"></span>
教程
</a>
</div>
</div>

<div class="bg-white rounded-3xl p-6 border border-slate-100 card-hover">
<div class="w-full h-40 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center mb-4">
<span class="iconify text-white text-7xl" data-icon="mdi:terminal"></span>
</div>
<h3 class="text-xl font-bold text-slate-900 mb-2">Claude Code</h3>
<p class="text-slate-600 mb-4 text-sm">Anthropic出品，大型项目重构王者，支持200k+上下文、代码审计、复杂重构、语音编码、安全漏洞检测</p>
<div class="flex flex-wrap gap-2 mb-4">
<span class="bg-orange-100 text-orange-600 text-xs px-3 py-1 rounded-full">推理顶尖</span>
<span class="bg-amber-100 text-amber-600 text-xs px-3 py-1 rounded-full">大上下文</span>
<span class="bg-yellow-100 text-yellow-600 text-xs px-3 py-1 rounded-full">代码审计</span>
</div>
<div class="flex items-center gap-3 mb-4">
<span class="iconify text-yellow-500" data-icon="solar:money-dollar-bold-duotone"></span>
<span class="text-sm text-slate-600">按Token计费</span>
</div>
<div class="flex gap-2">
<a href="https://www.anthropic.com/" target="_blank" class="flex-1 bg-gradient-to-r from-orange-500 to-amber-600 text-white text-center font-bold px-4 py-2 rounded-xl hover:opacity-90 transition-all no-underline text-sm">
<span class="iconify mr-1" data-icon="solar:link-bold-duotone"></span>
官网
</a>
<a href="https://docs.anthropic.com/" target="_blank" class="flex-1 bg-slate-100 text-slate-600 text-center font-bold px-4 py-2 rounded-xl hover:bg-slate-200 transition-all no-underline text-sm">
<span class="iconify mr-1" data-icon="solar:book-bookmark-bold-duotone"></span>
教程
</a>
</div>
</div>

<div class="bg-white rounded-3xl p-6 border border-slate-100 card-hover relative">
<div class="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">🔥 2026新锐</div>
<div class="w-full h-40 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4">
<span class="iconify text-white text-7xl" data-icon="mdi:rocket-launch"></span>
</div>
<h3 class="text-xl font-bold text-slate-900 mb-2">Antigravity</h3>
<p class="text-slate-600 mb-4 text-sm">国际新锐，全栈项目生成标杆，支持自然语言→完整可运行项目全流程、环境自动配置、多端适配</p>
<div class="flex flex-wrap gap-2 mb-4">
<span class="bg-cyan-100 text-cyan-600 text-xs px-3 py-1 rounded-full">项目生成效率80%</span>
<span class="bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full">环境零门槛</span>
<span class="bg-indigo-100 text-indigo-600 text-xs px-3 py-1 rounded-full">多端适配</span>
</div>
<div class="flex items-center gap-3 mb-4">
<span class="iconify text-yellow-500" data-icon="solar:money-dollar-bold-duotone"></span>
<span class="text-sm text-slate-600">$29/月Pro版</span>
</div>
<div class="flex gap-2">
<a href="https://antigravity.ai/" target="_blank" class="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center font-bold px-4 py-2 rounded-xl hover:opacity-90 transition-all no-underline text-sm">
<span class="iconify mr-1" data-icon="solar:link-bold-duotone"></span>
官网
</a>
<a href="https://antigravity.ai/docs" target="_blank" class="flex-1 bg-slate-100 text-slate-600 text-center font-bold px-4 py-2 rounded-xl hover:bg-slate-200 transition-all no-underline text-sm">
<span class="iconify mr-1" data-icon="solar:book-bookmark-bold-duotone"></span>
教程
</a>
</div>
</div>
</div>

<div class="flex items-center gap-3 mb-8 mt-16">
<div class="w-1 h-8 gradient-bg rounded-full"></div>
<h2 class="text-3xl font-bold text-slate-900">国内全能型AI编程工具</h2>
</div>
<p class="text-slate-600 mb-8">中文友好、全场景适配</p>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
<div class="bg-white rounded-3xl p-6 border border-slate-100 card-hover relative">
<div class="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">完全免费</div>
<div class="w-full h-40 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-4">
<span class="iconify text-white text-7xl" data-icon="mdi:lightning-bolt"></span>
</div>
<h3 class="text-xl font-bold text-slate-900 mb-2">Trae</h3>
<p class="text-slate-600 mb-4 text-sm">字节跳动出品，免费顶流，支持Builder模式可视化项目生成、图像转代码、Chat调试、错误自动修复、多模型切换</p>
<div class="flex flex-wrap gap-2 mb-4">
<span class="bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full">100%免费</span>
<span class="bg-indigo-100 text-indigo-600 text-xs px-3 py-1 rounded-full">中文极强</span>
<span class="bg-violet-100 text-violet-600 text-xs px-3 py-1 rounded-full">图像转代码</span>
</div>
<div class="flex items-center gap-3 mb-4">
<span class="iconify text-green-500" data-icon="solar:check-circle-bold-duotone"></span>
<span class="text-sm text-slate-600">完全免费无限制</span>
</div>
<div class="flex gap-2">
<a href="https://trae.dev/" target="_blank" class="flex-1 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-center font-bold px-4 py-2 rounded-xl hover:opacity-90 transition-all no-underline text-sm">
<span class="iconify mr-1" data-icon="solar:link-bold-duotone"></span>
官网
</a>
<a href="https://trae.dev/docs" target="_blank" class="flex-1 bg-slate-100 text-slate-600 text-center font-bold px-4 py-2 rounded-xl hover:bg-slate-200 transition-all no-underline text-sm">
<span class="iconify mr-1" data-icon="solar:book-bookmark-bold-duotone"></span>
教程
</a>
</div>
</div>

<div class="bg-white rounded-3xl p-6 border border-slate-100 card-hover">
<div class="w-full h-40 bg-gradient-to-br from-red-500 to-orange-600 rounded-2xl flex items-center justify-center mb-4">
<span class="iconify text-white text-7xl" data-icon="mdi:robot-industrial"></span>
</div>
<h3 class="text-xl font-bold text-slate-900 mb-2">文心快码 Comate</h3>
<p class="text-slate-600 mb-4 text-sm">百度出品，企业级全栈智能体，覆盖需求分析→代码生成→测试→部署全流程，支持企业级安全审计、私有化部署</p>
<div class="flex flex-wrap gap-2 mb-4">
<span class="bg-red-100 text-red-600 text-xs px-3 py-1 rounded-full">全栈自动化</span>
<span class="bg-orange-100 text-orange-600 text-xs px-3 py-1 rounded-full">企业安全</span>
<span class="bg-amber-100 text-amber-600 text-xs px-3 py-1 rounded-full">私有化</span>
</div>
<div class="flex items-center gap-3 mb-4">
<span class="iconify text-yellow-500" data-icon="solar:money-dollar-bold-duotone"></span>
<span class="text-sm text-slate-600">企业版5万/年起</span>
</div>
<div class="flex gap-2">
<a href="https://comate.baidu.com/" target="_blank" class="flex-1 bg-gradient-to-r from-red-500 to-orange-600 text-white text-center font-bold px-4 py-2 rounded-xl hover:opacity-90 transition-all no-underline text-sm">
<span class="iconify mr-1" data-icon="solar:link-bold-duotone"></span>
官网
</a>
<a href="https://comate.baidu.com/docs" target="_blank" class="flex-1 bg-slate-100 text-slate-600 text-center font-bold px-4 py-2 rounded-xl hover:bg-slate-200 transition-all no-underline text-sm">
<span class="iconify mr-1" data-icon="solar:book-bookmark-bold-duotone"></span>
教程
</a>
</div>
</div>

<div class="bg-white rounded-3xl p-6 border border-slate-100 card-hover">
<div class="w-full h-40 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center mb-4">
<span class="iconify text-white text-7xl" data-icon="mdi:source-branch"></span>
</div>
<h3 class="text-xl font-bold text-slate-900 mb-2">通义代码 CodeGeeX 4</h3>
<p class="text-slate-600 mb-4 text-sm">阿里开源，支持代码补全、生成、重构、调试、注释自动生成，可集成主流IDE，本地部署无隐私风险</p>
<div class="flex flex-wrap gap-2 mb-4">
<span class="bg-orange-100 text-orange-600 text-xs px-3 py-1 rounded-full">开源免费</span>
<span class="bg-amber-100 text-amber-600 text-xs px-3 py-1 rounded-full">本地部署</span>
<span class="bg-yellow-100 text-yellow-600 text-xs px-3 py-1 rounded-full">国产芯片</span>
</div>
<div class="flex items-center gap-3 mb-4">
<span class="iconify text-green-500" data-icon="solar:check-circle-bold-duotone"></span>
<span class="text-sm text-slate-600">开源免费</span>
</div>
<div class="flex gap-2">
<a href="https://code.aliyun.com/" target="_blank" class="flex-1 bg-gradient-to-r from-orange-500 to-amber-600 text-white text-center font-bold px-4 py-2 rounded-xl hover:opacity-90 transition-all no-underline text-sm">
<span class="iconify mr-1" data-icon="solar:link-bold-duotone"></span>
官网
</a>
<a href="https://github.com/codegeex" target="_blank" class="flex-1 bg-slate-100 text-slate-600 text-center font-bold px-4 py-2 rounded-xl hover:bg-slate-200 transition-all no-underline text-sm">
<span class="iconify mr-1" data-icon="solar:book-bookmark-bold-duotone"></span>
教程
</a>
</div>
</div>
</div>

<div class="flex items-center gap-3 mb-8 mt-16">
<div class="w-1 h-8 gradient-bg rounded-full"></div>
<h2 class="text-3xl font-bold text-slate-900">IDE原生型AI编程工具</h2>
</div>
<p class="text-slate-600 mb-8">深度集成、专业级适配</p>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
<div class="bg-white rounded-3xl p-6 border border-slate-100 card-hover">
<div class="w-full h-40 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-4">
<span class="iconify text-white text-7xl" data-icon="mdi:language-java"></span>
</div>
<h3 class="text-xl font-bold text-slate-900 mb-2">JetBrains AI Assistant</h3>
<p class="text-slate-600 mb-4 text-sm">JetBrains生态首选，IntelliJ/PyCharm/CLion原生集成，支持代码补全、重构、调试、文档生成、跨语言转换</p>
<div class="flex flex-wrap gap-2 mb-4">
<span class="bg-purple-100 text-purple-600 text-xs px-3 py-1 rounded-full">IDE无缝融合</span>
<span class="bg-pink-100 text-pink-600 text-xs px-3 py-1 rounded-full">重构顶尖</span>
<span class="bg-rose-100 text-rose-600 text-xs px-3 py-1 rounded-full">专业级</span>
</div>
<div class="flex items-center gap-3 mb-4">
<span class="iconify text-yellow-500" data-icon="solar:money-dollar-bold-duotone"></span>
<span class="text-sm text-slate-600">$149/年</span>
</div>
<div class="flex gap-2">
<a href="https://www.jetbrains.com/ai/" target="_blank" class="flex-1 bg-gradient-to-r from-purple-500 to-pink-600 text-white text-center font-bold px-4 py-2 rounded-xl hover:opacity-90 transition-all no-underline text-sm">
<span class="iconify mr-1" data-icon="solar:link-bold-duotone"></span>
官网
</a>
<a href="https://www.jetbrains.com/help/ai/" target="_blank" class="flex-1 bg-slate-100 text-slate-600 text-center font-bold px-4 py-2 rounded-xl hover:bg-slate-200 transition-all no-underline text-sm">
<span class="iconify mr-1" data-icon="solar:book-bookmark-bold-duotone"></span>
教程
</a>
</div>
</div>

<div class="bg-white rounded-3xl p-6 border border-slate-100 card-hover">
<div class="w-full h-40 bg-gradient-to-br from-orange-500 to-yellow-600 rounded-2xl flex items-center justify-center mb-4">
<span class="iconify text-white text-7xl" data-icon="mdi:aws"></span>
</div>
<h3 class="text-xl font-bold text-slate-900 mb-2">Amazon Q Developer</h3>
<p class="text-slate-600 mb-4 text-sm">AWS云原生专家，深度适配AWS生态，支持云服务SDK自动生成、Lambda函数编写、安全扫描、代码转换</p>
<div class="flex flex-wrap gap-2 mb-4">
<span class="bg-orange-100 text-orange-600 text-xs px-3 py-1 rounded-full">云原生适配</span>
<span class="bg-yellow-100 text-yellow-600 text-xs px-3 py-1 rounded-full">免费个人版</span>
<span class="bg-amber-100 text-amber-600 text-xs px-3 py-1 rounded-full">安全扫描</span>
</div>
<div class="flex items-center gap-3 mb-4">
<span class="iconify text-green-500" data-icon="solar:check-circle-bold-duotone"></span>
<span class="text-sm text-slate-600">个人版免费</span>
</div>
<div class="flex gap-2">
<a href="https://aws.amazon.com/q/developer/" target="_blank" class="flex-1 bg-gradient-to-r from-orange-500 to-yellow-600 text-white text-center font-bold px-4 py-2 rounded-xl hover:opacity-90 transition-all no-underline text-sm">
<span class="iconify mr-1" data-icon="solar:link-bold-duotone"></span>
官网
</a>
<a href="https://docs.aws.amazon.com/amazonq/" target="_blank" class="flex-1 bg-slate-100 text-slate-600 text-center font-bold px-4 py-2 rounded-xl hover:bg-slate-200 transition-all no-underline text-sm">
<span class="iconify mr-1" data-icon="solar:book-bookmark-bold-duotone"></span>
教程
</a>
</div>
</div>
</div>

<div class="flex items-center gap-3 mb-8 mt-16">
<div class="w-1 h-8 gradient-bg rounded-full"></div>
<h2 class="text-3xl font-bold text-slate-900">特色/开源型AI编程工具</h2>
</div>
<p class="text-slate-600 mb-8">垂直场景、高性价比</p>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
<div class="bg-white rounded-3xl p-6 border border-slate-100 card-hover">
<div class="w-full h-40 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4">
<span class="iconify text-white text-7xl" data-icon="mdi:code-braces-box"></span>
</div>
<h3 class="text-xl font-bold text-slate-900 mb-2">CodeLlama</h3>
<p class="text-slate-600 mb-4 text-sm">Meta开源，代码模型天花板，支持代码生成、补全、调试、多语言翻译，可本地部署、高度定制化</p>
<div class="flex flex-wrap gap-2 mb-4">
<span class="bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full">完全开源</span>
<span class="bg-purple-100 text-purple-600 text-xs px-3 py-1 rounded-full">定制化强</span>
<span class="bg-indigo-100 text-indigo-600 text-xs px-3 py-1 rounded-full">本地部署</span>
</div>
<div class="flex items-center gap-3 mb-4">
<span class="iconify text-green-500" data-icon="solar:check-circle-bold-duotone"></span>
<span class="text-sm text-slate-600">完全免费</span>
</div>
<div class="flex gap-2">
<a href="https://ai.meta.com/llama/" target="_blank" class="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center font-bold px-4 py-2 rounded-xl hover:opacity-90 transition-all no-underline text-sm">
<span class="iconify mr-1" data-icon="solar:link-bold-duotone"></span>
官网
</a>
<a href="https://github.com/facebookresearch/codellama" target="_blank" class="flex-1 bg-slate-100 text-slate-600 text-center font-bold px-4 py-2 rounded-xl hover:bg-slate-200 transition-all no-underline text-sm">
<span class="iconify mr-1" data-icon="solar:book-bookmark-bold-duotone"></span>
教程
</a>
</div>
</div>

<div class="bg-white rounded-3xl p-6 border border-slate-100 card-hover">
<div class="w-full h-40 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-4">
<span class="iconify text-white text-7xl" data-icon="mdi:shield-lock"></span>
</div>
<h3 class="text-xl font-bold text-slate-900 mb-2">Tabnine</h3>
<p class="text-slate-600 mb-4 text-sm">企业级安全优先，主打隐私优先，支持本地代码模型运行、企业级数据隔离、多IDE集成、代码规范检测</p>
<div class="flex flex-wrap gap-2 mb-4">
<span class="bg-teal-100 text-teal-600 text-xs px-3 py-1 rounded-full">数据本地处理</span>
<span class="bg-cyan-100 text-cyan-600 text-xs px-3 py-1 rounded-full">企业安全</span>
<span class="bg-sky-100 text-sky-600 text-xs px-3 py-1 rounded-full">多IDE兼容</span>
</div>
<div class="flex items-center gap-3 mb-4">
<span class="iconify text-yellow-500" data-icon="solar:money-dollar-bold-duotone"></span>
<span class="text-sm text-slate-600">$15/人/月企业版</span>
</div>
<div class="flex gap-2">
<a href="https://www.tabnine.com/" target="_blank" class="flex-1 bg-gradient-to-r from-teal-500 to-cyan-600 text-white text-center font-bold px-4 py-2 rounded-xl hover:opacity-90 transition-all no-underline text-sm">
<span class="iconify mr-1" data-icon="solar:link-bold-duotone"></span>
官网
</a>
<a href="https://www.tabnine.com/docs/" target="_blank" class="flex-1 bg-slate-100 text-slate-600 text-center font-bold px-4 py-2 rounded-xl hover:bg-slate-200 transition-all no-underline text-sm">
<span class="iconify mr-1" data-icon="solar:book-bookmark-bold-duotone"></span>
教程
</a>
</div>
</div>

<div class="bg-white rounded-3xl p-6 border border-slate-100 card-hover">
<div class="w-full h-40 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl flex items-center justify-center mb-4">
<span class="iconify text-white text-7xl" data-icon="mdi:microphone"></span>
</div>
<h3 class="text-xl font-bold text-slate-900 mb-2">讯飞星火编程助手</h3>
<p class="text-slate-600 mb-4 text-sm">语音编程标杆，核心特色是语音生成代码、方言编程、语音调试、报错语音解释，适合不方便手动输入的场景</p>
<div class="flex flex-wrap gap-2 mb-4">
<span class="bg-red-100 text-red-600 text-xs px-3 py-1 rounded-full">语音识别98%+</span>
<span class="bg-pink-100 text-pink-600 text-xs px-3 py-1 rounded-full">多方言</span>
<span class="bg-rose-100 text-rose-600 text-xs px-3 py-1 rounded-full">新手友好</span>
</div>
<div class="flex items-center gap-3 mb-4">
<span class="iconify text-green-500" data-icon="solar:check-circle-bold-duotone"></span>
<span class="text-sm text-slate-600">免费版可用</span>
</div>
<div class="flex gap-2">
<a href="https://www.xfyun.cn/" target="_blank" class="flex-1 bg-gradient-to-r from-red-500 to-pink-600 text-white text-center font-bold px-4 py-2 rounded-xl hover:opacity-90 transition-all no-underline text-sm">
<span class="iconify mr-1" data-icon="solar:link-bold-duotone"></span>
官网
</a>
<a href="https://www.xfyun.cn/doc/" target="_blank" class="flex-1 bg-slate-100 text-slate-600 text-center font-bold px-4 py-2 rounded-xl hover:bg-slate-200 transition-all no-underline text-sm">
<span class="iconify mr-1" data-icon="solar:book-bookmark-bold-duotone"></span>
教程
</a>
</div>
</div>
</div>

<div class="max-w-6xl mx-auto">
<div class="flex items-center gap-3 mb-8">
<div class="w-1 h-8 gradient-bg rounded-full"></div>
<h2 id="comparison" class="text-3xl font-bold text-slate-900">选型建议</h2>
</div>
<div class="overflow-x-auto w-full">
<table class="w-full">
<thead>
<tr class="border-b-2 border-slate-200">
<th class="text-left p-4 font-bold text-slate-900 bg-blue-100 rounded-tl-xl">工具</th>
<th class="text-left p-4 font-bold text-slate-900 bg-purple-100">类型</th>
<th class="text-left p-4 font-bold text-slate-900 bg-green-100">中文支持</th>
<th class="text-left p-4 font-bold text-slate-900 bg-orange-100">IDE集成</th>
<th class="text-left p-4 font-bold text-slate-900 bg-pink-100">免费版</th>
<th class="text-left p-4 font-bold text-slate-900 bg-cyan-100">核心优势</th>
<th class="text-left p-4 font-bold text-slate-900 bg-red-100 rounded-tr-xl">适合场景</th>
</tr>
</thead>
<tbody>
<tr class="border-b border-slate-200 bg-white">
<td class="p-4 font-medium text-slate-900">GitHub Copilot</td>
<td class="p-4 text-slate-600">国际标杆</td>
<td class="p-4 text-slate-600">★★★☆☆</td>
<td class="p-4 text-slate-600">VS Code/IntelliJ</td>
<td class="p-4 text-slate-600">低</td>
<td class="p-4 text-slate-600">生态强、补全准、响应快</td>
<td class="p-4 text-slate-600">日常编码、开源项目</td>
</tr>
<tr class="border-b border-slate-200 bg-purple-50">
<td class="p-4 font-medium text-slate-900">Cursor</td>
<td class="p-4 text-slate-600">AI原生IDE</td>
<td class="p-4 text-slate-600">★★★☆☆</td>
<td class="p-4 text-slate-600">VS Code</td>
<td class="p-4 text-slate-600">高</td>
<td class="p-4 text-slate-600">多文件协同、图像转代码</td>
<td class="p-4 text-slate-600">项目开发、新手入门</td>
</tr>
<tr class="border-b border-slate-200 bg-orange-50">
<td class="p-4 font-medium text-slate-900">Claude Code</td>
<td class="p-4 text-slate-600">终端专业</td>
<td class="p-4 text-slate-600">★★★☆☆</td>
<td class="p-4 text-slate-600">终端</td>
<td class="p-4 text-slate-600">低</td>
<td class="p-4 text-slate-600">大上下文、重构强、审计准</td>
<td class="p-4 text-slate-600">大型项目、代码重构</td>
</tr>
<tr class="border-b border-slate-200 bg-cyan-50">
<td class="p-4 font-medium text-slate-900">Antigravity</td>
<td class="p-4 text-slate-600">国际新锐</td>
<td class="p-4 text-slate-600">★★☆☆☆</td>
<td class="p-4 text-slate-600">原生IDE</td>
<td class="p-4 text-slate-600">中</td>
<td class="p-4 text-slate-600">全栈项目生成、环境自动配置</td>
<td class="p-4 text-slate-600">快速搭建项目、多端适配</td>
</tr>
<tr class="border-b border-slate-200 bg-blue-50">
<td class="p-4 font-medium text-slate-900">Trae</td>
<td class="p-4 text-slate-600">国内全能</td>
<td class="p-4 text-slate-600">★★★★★</td>
<td class="p-4 text-slate-600">原生IDE</td>
<td class="p-4 text-slate-600">无限</td>
<td class="p-4 text-slate-600">免费、中文强、图像转代码</td>
<td class="p-4 text-slate-600">全场景开发、个人/小团队</td>
</tr>
<tr class="border-b border-slate-200 bg-red-50">
<td class="p-4 font-medium text-slate-900">文心快码</td>
<td class="p-4 text-slate-600">国内企业级</td>
<td class="p-4 text-slate-600">★★★★★</td>
<td class="p-4 text-slate-600">多IDE</td>
<td class="p-4 text-slate-600">低</td>
<td class="p-4 text-slate-600">全流程自动化、企业安全</td>
<td class="p-4 text-slate-600">企业开发、大型项目</td>
</tr>
<tr class="border-b border-slate-200 bg-purple-50">
<td class="p-4 font-medium text-slate-900">JetBrains AI</td>
<td class="p-4 text-slate-600">IDE原生</td>
<td class="p-4 text-slate-600">★★★☆☆</td>
<td class="p-4 text-slate-600">JetBrains系</td>
<td class="p-4 text-slate-600">低</td>
<td class="p-4 text-slate-600">重构强、规范严、专业级</td>
<td class="p-4 text-slate-600">Java/Kotlin/Python</td>
</tr>
<tr class="border-b border-slate-200 bg-blue-50">
<td class="p-4 font-medium text-slate-900">CodeLlama</td>
<td class="p-4 text-slate-600">开源免费</td>
<td class="p-4 text-slate-600">★★★☆☆</td>
<td class="p-4 text-slate-600">无</td>
<td class="p-4 text-slate-600">无限</td>
<td class="p-4 text-slate-600">开源、定制化、本地部署</td>
<td class="p-4 text-slate-600">技术向、私有化</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>

<section class="py-8 max-w-6xl mx-auto px-6">
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
<div class="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl border-2 border-blue-200">
<div class="flex items-center gap-3 mb-4">
<div class="w-10 h-10 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
<span class="iconify text-xl" data-icon="solar:user-bold-duotone"></span>
</div>
<h4 class="font-bold text-slate-900">个人/新手/免费</h4>
</div>
<p class="text-slate-600 mb-3">优先选择：</p>
<div class="flex flex-wrap gap-2">
<span class="bg-white text-blue-600 text-sm px-3 py-1 rounded-full">Trae</span>
<span class="bg-white text-blue-600 text-sm px-3 py-1 rounded-full">Cursor</span>
</div>
</div>

<div class="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-2xl border-2 border-cyan-200">
<div class="flex items-center gap-3 mb-4">
<div class="w-10 h-10 bg-cyan-100 text-cyan-600 rounded-xl flex items-center justify-center">
<span class="iconify text-xl" data-icon="solar:rocket-bold-duotone"></span>
</div>
<h4 class="font-bold text-slate-900">全栈项目快速搭建</h4>
</div>
<p class="text-slate-600 mb-3">优先选择：</p>
<div class="flex flex-wrap gap-2">
<span class="bg-white text-cyan-600 text-sm px-3 py-1 rounded-full">Antigravity</span>
<span class="bg-white text-cyan-600 text-sm px-3 py-1 rounded-full">Trae</span>
</div>
</div>

<div class="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-2xl border-2 border-orange-200">
<div class="flex items-center gap-3 mb-4">
<div class="w-10 h-10 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center">
<span class="iconify text-xl" data-icon="solar:folder-bold-duotone"></span>
</div>
<h4 class="font-bold text-slate-900">大型项目/重构/审计</h4>
</div>
<p class="text-slate-600 mb-3">优先选择：</p>
<div class="flex flex-wrap gap-2">
<span class="bg-white text-orange-600 text-sm px-3 py-1 rounded-full">Claude Code</span>
<span class="bg-white text-orange-600 text-sm px-3 py-1 rounded-full">文心快码</span>
</div>
</div>

<div class="bg-gradient-to-br from-gray-50 to-slate-50 p-6 rounded-2xl border-2 border-gray-200">
<div class="flex items-center gap-3 mb-4">
<div class="w-10 h-10 bg-gray-100 text-gray-600 rounded-xl flex items-center justify-center">
<span class="iconify text-xl" data-icon="mdi:github"></span>
</div>
<h4 class="font-bold text-slate-900">日常编码/开源项目</h4>
</div>
<p class="text-slate-600 mb-3">优先选择：</p>
<div class="flex flex-wrap gap-2">
<span class="bg-white text-gray-600 text-sm px-3 py-1 rounded-full">GitHub Copilot</span>
</div>
</div>

<div class="bg-gradient-to-br from-orange-50 to-yellow-50 p-6 rounded-2xl border-2 border-orange-200">
<div class="flex items-center gap-3 mb-4">
<div class="w-10 h-10 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center">
<span class="iconify text-xl" data-icon="mdi:aws"></span>
</div>
<h4 class="font-bold text-slate-900">云原生开发/AWS生态</h4>
</div>
<p class="text-slate-600 mb-3">优先选择：</p>
<div class="flex flex-wrap gap-2">
<span class="bg-white text-orange-600 text-sm px-3 py-1 rounded-full">Amazon Q Developer</span>
</div>
</div>

<div class="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl border-2 border-blue-200">
<div class="flex items-center gap-3 mb-4">
<div class="w-10 h-10 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
<span class="iconify text-xl" data-icon="solar:code-bold-duotone"></span>
</div>
<h4 class="font-bold text-slate-900">技术向/本地部署/定制</h4>
</div>
<p class="text-slate-600 mb-3">优先选择：</p>
<div class="flex flex-wrap gap-2">
<span class="bg-white text-blue-600 text-sm px-3 py-1 rounded-full">CodeLlama</span>
</div>
</div>
</div>
</section>

<section class="py-8 max-w-6xl mx-auto px-6">
<div class="gradient-bg rounded-3xl p-8 text-white">
<div class="flex flex-col md:flex-row items-center gap-8">
<div class="flex-1">
<h2 class="text-2xl md:text-3xl font-bold mb-4">开始你的AI编程之旅</h2>
<p class="opacity-90 mb-6">
AI编程技术正在快速发展，选择适合自己的工具，开始开发吧！
</p>
<div class="flex flex-wrap gap-3">
<a href="https://trae.dev/" target="_blank" class="inline-flex items-center gap-2 bg-white text-indigo-600 font-bold px-6 py-3 rounded-xl hover:bg-opacity-90 transition-all no-underline">
<span class="iconify" data-icon="solar:play-bold-duotone"></span>
体验Trae
</a>
<a href="https://cursor.sh/" target="_blank" class="inline-flex items-center gap-2 bg-white/20 text-white font-bold px-6 py-3 rounded-xl hover:bg-white/30 transition-all no-underline">
<span class="iconify" data-icon="solar:download-bold-duotone"></span>
下载Cursor
</a>
</div>
</div>
<div class="w-full md:w-48 h-48 flex-shrink-0">
<div class="w-full h-full bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center">
<span class="iconify text-7xl" data-icon="solar:code-bold-duotone" style="color: white;"></span>
</div>
</div>
</div>
</div>
</section>
