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
    <footer>
      <div class="container mx-auto px-4 py-4 flex items-center justify-between">
        <p>&copy; 2024 All rights reserved</p>
        <NuxtLink to="/info"
          class="hover:border-b-foreground border-b-2 border-b-transparent transition-color duration-200 p-0.5">
          Learn More
        </NuxtLink>
      </div>
    </footer>
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