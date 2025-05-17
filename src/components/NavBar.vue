<template>
  <nav class="flex items-center justify-between p-4 bg-white shadow-md">
    <router-link to="/" class="text-xl font-bold text-blue-600">푸드스트라다무스</router-link>
    <div class="space-x-4">
      <router-link to="/analyze" class="text-gray-700 hover:text-blue-600">분석</router-link>
      <router-link to="/scrap" class="text-gray-700 hover:text-blue-600">스크랩</router-link>
      <router-link to="/mypage" class="text-gray-700 hover:text-blue-600">마이페이지</router-link>
    </div>
    <div class="space-x-2">
      <router-link to="/login" class="px-4 py-2 text-sm text-gray-600 hover:text-blue-600">로그인</router-link>
      <router-link to="/signup" class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm">회원가입</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>
