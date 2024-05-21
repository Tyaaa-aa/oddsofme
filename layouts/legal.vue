<template>
  <div>
    <div class="container px-0 flex items-center justify-between">
      <LogoSvg color="legal" />
      <DarkLightButton />
    </div>
    <main class="container max-h-[80dvh] rounded-md p-5 overflow-y-auto border-2" id="legal">
      <slot />
    </main>
  </div>
</template>

<style>
#legal a {
  text-decoration: underline !important;
  color: hsl(var(--popover-foreground)) !important;
  font-style: italic;
  font-weight: bold;
}
</style>