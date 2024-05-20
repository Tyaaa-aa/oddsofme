<template>
  <div>
    <div class="container pl-4">
      <LogoSvg />
    </div>
    <main class="container max-h-[80dvh] rounded-md py-5 overflow-y-auto border-2" id="legal">
      <slot />
    </main>
  </div>
</template>

<style>
#legal a {
  text-decoration: underline !important;
  color: hsl(var(--primary)) !important;
}
</style>