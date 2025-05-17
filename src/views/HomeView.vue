<template>
  <BaseLayout>
    <section class="hero bg-gray-100 text-center py-20">
      <h1 class="text-4xl font-bold mb-4">AI 기반 식료품 가격 예측 및 트렌드 분석</h1>
      <p class="text-lg text-gray-700 mb-6">
        실시간 가격 예측과 소비 트렌드 분석으로 똑똑한 소비를 시작하세요.
      </p>
      <router-link to="/analyze" class="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
        가격 예측 시작하기
      </router-link>
    </section>

    <section class="features grid grid-cols-1 md:grid-cols-3 gap-8 py-16 px-8 bg-white">
      <div>
        <h2 class="text-xl font-semibold mb-2">가격 예측 리포트</h2>
        <p>LLM 기반 AI가 품목별로 다음 주 가격을 예측해 드립니다.</p>
      </div>
      <div>
        <h2 class="text-xl font-semibold mb-2">트렌드 분석</h2>
        <p>최근 시장 변동성과 소비자 패턴을 시각화된 리포트로 제공합니다.</p>
      </div>
      <div>
        <h2 class="text-xl font-semibold mb-2">스크랩 및 비교</h2>
        <p>관심 품목을 저장하고 다른 상품과 가격을 비교해보세요.</p>
      </div>
    </section>

    <section class="cta bg-blue-50 py-16 text-center">
      <h3 class="text-2xl font-bold mb-4">당신만의 식료품 소비 전략을 지금 시작하세요</h3>
      <router-link to="/signup" class="bg-blue-600 text-white px-5 py-3 rounded hover:bg-blue-700">
        시작하기
      </router-link>
    </section>
  </BaseLayout>
</template>

<script>
import BaseLayout from "@/layouts/BaseLayout.vue";

export default {
  name: "HomeView",
  components: {
    BaseLayout,
  },
};
</script>

<style scoped>
.hero {
  background-image: linear-gradient(to right, #f8fafc, #e0f2fe);
}
</style>
