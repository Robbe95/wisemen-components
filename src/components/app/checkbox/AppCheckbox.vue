<!-- eslint-disable vue/valid-v-model -->
<script setup lang="ts" generic="T, TValue extends T">
import {
  Switch,
  SwitchDescription,
  SwitchGroup,
  SwitchLabel,
} from '@headlessui/vue'

interface Props {
  option: T
  optionLabel?: TValue
  optionValue?: TValue
  optionDescription?: TValue
  optionDisabled?: TValue
  // variant?: RadioProps['variant']
}
const {
  option = {},
  // variant = 'default',
} = defineProps<Props>()

const model = defineModel<T[keyof T]>()
</script>

<template>
  <div>
    <SwitchGroup>
      <div>
        <SwitchLabel class="text-body font-medium">
          Enable notifications
        </SwitchLabel>
        <SwitchDescription class="text-subtext">
          Description
        </SwitchDescription>
      </div>
      <Switch
        v-slot="{ checked }"
        v-model="(model as any)"
        :class="checked ? 'bg-teal-900' : 'bg-teal-700'"
        class="relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
      >
        <span class="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          :class="checked ? 'translate-x-9' : 'translate-x-0'"
          class="pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white ring-0 transition duration-200 ease-in-out"
        />
      </Switch>
    </SwitchGroup>
  </div>
</template>
