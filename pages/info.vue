<script lang="ts" setup>
import { AlertCircle, Loader2 } from 'lucide-vue-next'
const handleTerms = async () => await navigateTo('/terms-and-conditions')
const handlePrivacy = async () => await navigateTo('/privacy')
const handleDisclaimer = async () => await navigateTo('/disclaimer')

const loadSource = ref<boolean>(false)
const handleSources = async () => {
  await navigateTo('/sources')
  loadSource.value = true
}


</script>
<template>
  <div class="flex flex-col place-items-center h-[50dvh]">
    <Alert class="md:max-w-[50%]">
      <AlertCircle class="w-4 h-4" />
      <AlertTitle>Info</AlertTitle>
      <AlertDescription>
        Our service is <strong>designed for entertainment purposes</strong> only. While we strive to ensure the accuracy of the Oddsofme
        scores and results, they should not be taken seriously. We make every effort to provide realistic data, but
        individual uniqueness and numerous variables can affect the outcomes. This app is meant for fun, so enjoy it and
        have a great time!
      </AlertDescription>
    </Alert>

    <div class="flex items-center gap-2 mt-5 flex-wrap justify-center">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger as-child>
            <Button variant="secondary" @click="handleDisclaimer">
              Disclaimer
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Visit</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger as-child>
            <Button variant="secondary" @click="handleTerms">
              Terms and Conditions
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Visit</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger as-child>
            <Button variant="secondary" @click="handlePrivacy">
              Privacy Policy
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Visit</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger as-child>
            <Button variant="secondary" @click="handleSources" v-auto-animate>
              <Loader2 class="w-4 h-4 mr-2 animate-spin" v-if="loadSource" />
              Sources
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Visit</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  </div>
</template>