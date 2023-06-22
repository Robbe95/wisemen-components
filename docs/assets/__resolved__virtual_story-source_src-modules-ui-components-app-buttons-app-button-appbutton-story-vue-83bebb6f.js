const __resolved__virtual_storySource_srcModulesUiComponentsAppButtonsAppButtonAppbuttonStoryVue = `<script setup lang="ts">
import { buttonSizeOptions, buttonVariantOptions } from './appButtonVariants'
import type { ButtonProps } from './appButtonVariants'
import { iconNames } from '@/icons'
import type { Icon } from '@/icons'

interface State {
  isDisabled: boolean
  isLoading: boolean
  size: ButtonProps['size']
  variant: ButtonProps['variant']
  frontIcon?: Icon
  backIcon?: Icon
  content: string
}

const state: State = reactive({
  isDisabled: false,
  isLoading: false,
  size: 'default',
  variant: 'default',
  frontIcon: undefined,
  backIcon: undefined,
  content: 'Click me',
})
<\/script>

<template>
  <Story
    title="App/Buttons/AppButton"
  >
    <Variant title="Default" auto-props-disabled>
      <template #controls>
        <HstCheckbox v-model="state.isDisabled" title="Disabled" />
        <HstCheckbox v-model="state.isLoading" title="Loading" />
        <HstSelect v-model="state.size" title="Size" :options="buttonSizeOptions" />
        <HstSelect v-model="state.variant" title="Variant" :options="buttonVariantOptions" />
        <HstSelect v-model="state.frontIcon" title="Front Icon" :options="['none', ...iconNames]" />
        <HstSelect v-model="state.backIcon" title="Back Icon" :options="['none', ...iconNames]" />
        <HstText v-model="state.content" title="Text" />
      </template>

      <AppButton v-bind="state">
        {{ state.content }}
      </AppButton>
    </Variant>
  </Story>
</template>
`;
export {
  __resolved__virtual_storySource_srcModulesUiComponentsAppButtonsAppButtonAppbuttonStoryVue as default
};