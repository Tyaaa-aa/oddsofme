<template>
  <div>
    <div class="container pr-4 pl-4 md:px-4 flex items-center justify-between mx-auto">
      <LogoSvg color="legal" />
      <DarkLightButton />
    </div>
    <main class="container px-4 flex items-center justify-between mx-auto"
      id="legal">
      <div class="p-4 max-h-[80dvh] rounded-md overflow-y-auto border-2">
        <slot />
      </div>
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