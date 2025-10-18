<template>
  <div class="min-h-screen bg-dark-900 text-white">
    <NuxtRouteAnnouncer />
    <NuxtLoadingIndicator color="#DC2626" :height="3" />
    <AppHeader />
    <main>
      <NuxtPage />
    </main>
    <AppFooter />
  </div>
</template>
