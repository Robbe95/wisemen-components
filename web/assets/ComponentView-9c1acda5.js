import{d as s,B as i,o as r,c as a,t as l,m as p}from"./index-4f486ab0.js";const c=[{component:"AppButton",name:"Button",files:[{name:"AppButton.vue",dir:"./src/modules/ui/components/app/buttons/app-button",placementDir:"app/buttons",type:"components",content:`<script setup lang="ts">
import { buttonVariants } from './appButtonVariants'
import type { ButtonProps } from './appButtonVariants'
import type { Icon } from '@/icons'

interface Props {
  isDisabled?: boolean
  isLoading?: boolean
  variant?: ButtonProps['variant']
  size?: ButtonProps['size']
  frontIcon?: Icon
  backIcon?: Icon
}

const {
  variant = 'default',
  size = 'default',
  isDisabled = false,
  isLoading = false,
  frontIcon,
  backIcon,
} = defineProps<Props>()

const emits = defineEmits(['component:click'])

const handleClick = (): void => {
  if (!isDisabled && !isLoading)
    emits('component:click')
}
<\/script>

<template>
  <button
    :class="buttonVariants({ variant, size })" @click="handleClick"
  >
    <div :class="{ 'opacity-30': isLoading }" class="flex items-center gap-2 whitespace-nowrap transition-opacity">
      <slot name="front-icon">
        <AppIcon v-if="frontIcon" :icon="frontIcon" />
      </slot>
      <slot />
      <slot name="back-icon">
        <AppIcon v-if="backIcon" :icon="backIcon" />
      </slot>
    </div>
    <AppButtonLoader :variant="variant" :is-loading="isLoading" />
  </button>
</template>
`},{name:"appButtonVariants.ts",dir:"./src/modules/ui/components/app/buttons/app-button",placementDir:"app/buttons",type:"components",content:`import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

export const variantOptions = {
  default: 'bg-primary text-primary-foreground hover:bg-primary/90',
  destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
  outline: 'border border-input hover:bg-accent hover:text-accent-foreground',
  secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
  ghost: 'hover:bg-accent hover:text-accent-foreground',
  link: 'text-primary underline-offset-4 hover:underline',
}

export const sizeOptions = {
  icon: 'h-10 p-3 w-10',
  default: 'h-10 px-4 py-2',
  sm: 'h-9 rounded-md px-3',
  lg: 'h-11 rounded-md px-8',
}

export const loaderVariantOptions = {
  white: 'bg-white',
  primary: 'bg-primary',
}

export const buttonLoaderVariants = cva(
  'absolute top-[1px] h-2 w-2 rounded-full',
  {
    variants: {
      variant: loaderVariantOptions,
    },
    defaultVariants: {
      variant: 'primary',
    },
  },
)

export const buttonVariants = cva(
  'relative inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: variantOptions,
      size: sizeOptions,
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export type ButtonProps = VariantProps<typeof buttonVariants>
export type ButtonLoaderProps = VariantProps<typeof buttonLoaderVariants>

export const buttonVariantOptions = Object.keys(variantOptions)
export const buttonSizeOptions = Object.keys(sizeOptions)
export const buttonLoaderVariantOptions = Object.keys(loaderVariantOptions)
`},{name:"AppButtonLoader.vue",dir:"./src/modules/ui/components/app/buttons/app-button",placementDir:"app/buttons",type:"components",content:`<script setup lang="ts">
import { type ButtonLoaderProps, type ButtonProps, buttonLoaderVariants } from './appButtonVariants'
import { fadeTransition } from '@/transitions'

interface Props {
  isLoading: boolean
  variant: ButtonProps['variant']
}
const {
  isLoading,
  variant,
} = defineProps<Props>()

const loaderVariant = computed<ButtonLoaderProps['variant']>(() => {
  if ((['primary', 'destructive', 'ghost', 'secondary', 'link', 'outline'] as ButtonProps['variant'][]).includes(variant))
    return 'primary'
  return 'white'
})
<\/script>

<template>
  <!-- eslint-disable tailwindcss/no-custom-classname -->

  <Transition v-bind="fadeTransition">
    <div v-if="isLoading" class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <div class="relative inline-block h-2.5 w-10">
        <div
          v-for="i in 4" :key="i" class="orb" :class="buttonLoaderVariants({ variant: loaderVariant })"
        />
      </div>
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
.orb:nth-child(1) {
  left: 4px;
  animation: lds-ellipsis1 0.6s infinite;
}

.orb:nth-child(2) {
  left: 4px;
  animation: lds-ellipsis2 0.6s infinite;
}

.orb:nth-child(3) {
  left: 16px;
  animation: lds-ellipsis2 0.6s infinite;
}

.orb:nth-child(4) {
  left: 28px;
  animation: lds-ellipsis3 0.6s infinite;
}

@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }

  100% {
    transform: scale(1);
  }
}

@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }

  100% {
    transform: scale(0);
  }
}

@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }

  100% {
    transform: translate(12px, 0);
  }
}
</style>
`}],internalDependencies:["Transitions","AppIcon"],dependencies:["class-variance-authority"]},{component:"AppDropdownButton",name:"DropdownButton",files:[{name:"AppDropdownButton.vue",dir:"./src/modules/ui/components/app/buttons/app-dropdown-button",placementDir:"app/buttons",type:"components",content:`<script setup lang="ts">
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'

import { Float, FloatArrow } from '@headlessui-float/vue'

interface Props {
  placement?: 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end' | 'right' | 'right-start' | 'right-end'
  transitionName?: string

  hasArrow?: boolean
  hasFlip?: boolean
  hasShift?: boolean
}

withDefaults(defineProps<Props>(), {
  hasFlip: true,
  hasShift: true,
  placement: 'bottom-start',
  transitionName: 'scale-bounce-transition',
  hasArrow: false,
})
<\/script>

<template>
  <Popover>
    <Float
      :flip="hasFlip"
      :shift="hasShift"
      :placement="placement"
      :transition-name="transitionName"
      :arrow="hasArrow"
      :offset="hasArrow ? 15 : 4"
    >
      <PopoverButton>
        <slot name="button" />
      </PopoverButton>

      <PopoverPanel v-slot="{ close }">
        <div v-if="hasArrow" class="absolute -z-10 h-full w-full rounded bg-white shadow-main" />

        <FloatArrow v-if="hasArrow" class="absolute -z-10 h-5 w-5 rotate-45 bg-white shadow-main" />
        <div class="z-50 flex flex-col gap-2 rounded bg-white p-2 shadow-main">
          <slot name="panel" :close="close" />
        </div>
      </PopoverPanel>
    </Float>
  </Popover>
</template>
`}],dependencies:["@headlessui-float/vue","@headlessui/vue"],internalDependencies:["AppButton","Transitions"]},{component:"FormError",name:"FormError",files:[{name:"FormError.vue",dir:"./src/modules/ui/components/forms/error",placementDir:"forms/errors",type:"components",content:`<script setup lang="ts">
interface Props {
  errorMessage?: string
}
const { errorMessage } = defineProps<Props>()
<\/script>

<template>
  <p class="text-danger-500 text-sm">
    <slot>
      {{ errorMessage }}
    </slot>
  </p>
</template>
`}]},{component:"FormInputField",name:"FormInputField",files:[{name:"FormInputField.vue",dir:"./src/modules/ui/components/forms/field",placementDir:"forms/field",type:"components",content:`<script setup lang="ts" generic="TModel extends string | number | undefined">
import { generateUuid } from '@/helpers/uuid/generateUuid'
import { useFormInputGroup } from '@/modules/ui/composables/forms/group/useFormInputGroup'

interface Props {
  hasSuccess?: boolean
  isReadOnly?: boolean
  isDisabled?: boolean
  isTouched?: boolean
  isDirty?: boolean
  placeholder?: string
  unit?: string
  type?: TModel extends number ? 'number' : 'text' | 'password' | 'email' | 'tel' | 'url' | 'search'
  label?: string
  errors?: { _errors: string[] }
}

const {
  hasSuccess = false,
  isReadOnly = false,
  isDisabled = false,
  isTouched = false,
  isDirty = false,
  placeholder,
  unit,
  label,
  errors = { _errors: [] },
  type = 'text',
} = defineProps<Props>()

const emits = defineEmits<{
  blur: []
}>()

const model = defineModel<TModel>()

const uuid = generateUuid()
const element = ref<HTMLElement>()

const slots = defineSlots<{
  label?: (props: {}) => any
  'front-content'?: (props: {}) => any
  'back-content'?: (props: {}) => any
}>()

const errorShown = computed(() => errors._errors.length > 0 && (isTouched || isDirty))

const borderColor = computed(() => {
  if (errorShown.value)
    return 'border-danger-500'
  if (hasSuccess)
    return 'border-success-500'
  if (isReadOnly)
    return 'border-gray-300'
  return 'border-primary-500'
})

// Adds grouping logic if a wrapped in FormGroup component
if (type === 'number')
  useFormInputGroup({ model: model as Ref<number>, element, uuid, isDisabled: computed(() => isDisabled) })
<\/script>

<template>
  <!-- eslint-disable vue/no-extra-parens -->
  <div ref="element">
    <!-- Label -->
    <FormLabel :for="uuid">
      <slot name="label">
        {{ label }}
      </slot>
    </FormLabel>

    <div class="flex">
      <!-- Content before the input -->
      <div v-if="slots['front-content']" class="flex rounded rounded-r-none border bg-gray-200 px-4" :class="borderColor">
        <slot name="front-content" />
      </div>

      <!-- Input -->
      <div
        class="flex h-full rounded border"
        :class="[
          borderColor,
          {
            'rounded-l-none border-l-0': slots['front-content'],
            'rounded-r-none border-r-0': slots['back-content'],
          },
        ]"
      >
        <input
          :id="uuid" v-model="model" :disabled="isDisabled" :type="(type as string)" min="0"
          class="relative w-full rounded px-4 py-2 placeholder:transition-all placeholder:duration-300 focus:placeholder:translate-x-1 focus:placeholder:opacity-0"
          :placeholder="placeholder" :readonly="isReadOnly" @blur="emits('blur')"
        >

        <div
          v-if="unit" :class="[borderColor, {
            'rounded-r-none border-r-0': slots['back-content'],
          }]" class="flex min-w-max items-center rounded rounded-l-none border-l bg-white px-3 text-primary-500"
        >
          {{ unit }}
        </div>
      </div>

      <!-- Content after the input -->
      <div v-if="slots['back-content']" class="flex rounded rounded-l-none border bg-gray-200 px-4" :class="borderColor">
        <slot name="back-content" />
      </div>
    </div>

    <!-- Error -->
    <TransitionExpand :duration="0.2">
      <FormError :error-message="errors._errors[0]" />
    </TransitionExpand>
  </div>
</template>
`}],internalDependencies:["FormError","FormInputGroupComposable","TransitionExpand"]},{component:"FormInputGroupComposable",name:"FormInputGroupComposable",files:[{name:"useFormInputGroup.ts",dir:"./src/modules/ui/composables/forms/group",placementDir:"forms/group",type:"composables",content:`import { useFormInputGroupContext } from '@/modules/ui/composables/forms/group/useFormInputGroupContext'
import type { Option } from '@/modules/ui/composables/forms/group/useFormInputGroupContext'

export interface UseFormInputGroupParams {
  model: Ref<number | null>
  isDisabled?: Ref<boolean>
  uuid: string
  element: Ref<HTMLElement | undefined>
}

export const useFormInputGroup = ({ model, uuid, isDisabled, element }: UseFormInputGroupParams): void => {
  const context = useFormInputGroupContext()
  const propsRef = computed(() => ({
    value: typeof model.value === 'number' ? model.value : 0,
    disabled: isDisabled?.value,
  }))
  const option: Option = ref({ id: uuid, element: element.value, propsRef: propsRef.value }) as Option

  const change = (value: number): void => {
    if (isDisabled?.value || !context)
      return

    const newValue = context.change(option, value)
    model.value = newValue
  }

  watch(
    () => model.value, (value) => {
      if (!value)
        return
      change(value)
    },
  )

  onMounted(() => {
    if (context)
      context.registerOption(option)
  })
  onUnmounted(() => {
    if (context)
      context.unregisterOption(uuid)
  })
}
`},{name:"useFormInputGroupContext.ts",dir:"./src/modules/ui/composables/forms/group",placementDir:"forms/group",type:"composables",content:`import { inject } from 'vue'
import type { ComputedRef, InjectionKey, Ref } from 'vue'

export type Option = Ref<{ id: string; element: HTMLElement | undefined; propsRef: { value: number; disabled: boolean } }>

export interface FormInputGroupStateDefinition {
  // State
  valueMeasurement?: ComputedRef<string>
  percentProgress?: ComputedRef<boolean>
  valueProgress?: ComputedRef<boolean>
  maxLabel?: ComputedRef<boolean>

  options: Ref<Option[]>
  maxValue: ComputedRef<number | undefined>
  valueUsed: ComputedRef<number>

  disabled: Ref<boolean>
  change(option: Option, newValue: number): number | null
  registerOption(action: Option): void
  unregisterOption(id: string): void
}

export const FormInputGroupContext = Symbol('FormGroupContext') as InjectionKey<FormInputGroupStateDefinition>

export const useFormInputGroupContext = (): FormInputGroupStateDefinition | null => {
  const context = inject(FormInputGroupContext, null)
  return context
}
`}]},{component:"AppTooltip",name:"Tooltip",files:[{name:"AppTooltip.vue",dir:"./src/modules/ui/components/app/tooltip",placementDir:"app/tooltip",type:"components",content:`<script setup lang="ts">
import {
  onMounted,
  ref,
} from 'vue'

import type { Middleware } from '@floating-ui/dom'
import {
  computePosition,
  flip,
  offset,
  shift,
} from '@floating-ui/dom'
import { useMouseInElement, watchDebounced } from '@vueuse/core'
import { scaleBounceTransition } from '@/transitions'

interface SlotEvents {
  onBlur: () => void
  onFocus: () => void
  onKeydown: (event: KeyboardEvent) => void
}

interface Props {
  offset: number
  hasNoFlip: boolean
  hasNoShift: boolean
  placement: 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end' | 'right' | 'right-start' | 'right-end'
}

const props = withDefaults(defineProps<Props>(), {
  offset: 12,
  hasNoFlip: false,
  hasNoShift: false,
  placement: 'bottom',
})

defineSlots<{
  element: (props: { events: SlotEvents }) => any
  tooltip: (props: {}) => any
}>()

const tooltipSlot = ref()
const element = ref<HTMLElement>()
const tooltip = ref<HTMLElement>()
const tooltipWrapper = ref<HTMLElement>()

const { isOutside: tooltipWrapperOutside } = useMouseInElement(tooltipWrapper)
const { isOutside: tooltipOutside } = useMouseInElement(tooltip)

const update = (): void => {
  if (!element.value || !tooltip.value)
    return

  const middleware: Middleware[] = []

  if (props.offset)
    middleware.push(offset(props.offset))

  if (!props.hasNoFlip)
    middleware.push(flip())

  if (!props.hasNoShift)
    middleware.push(shift())

  computePosition(element.value, tooltip.value, {
    placement: props.placement,
    middleware,
  }).then(({ x, y }) => {
    if (!tooltip.value)
      return
    Object.assign(tooltip.value.style, {
      left: \`\${x}px\`,
      top: \`\${y}px\`,
    })
  })
}
const tooltipShow = ref(false)
const showTooltip = (): void => {
  tooltipShow.value = true

  nextTick(() => {
    update()
  })
}

const hideTooltip = (): void => {
  if (tooltipOutside.value && tooltipWrapperOutside.value)
    tooltipShow.value = false
}

onMounted(() => {
  hideTooltip();
  ([
    ['focus', showTooltip],
    ['blur', hideTooltip],
  ] as const).forEach(([event, listener]) => {
    if (!element.value)
      return
    element.value.addEventListener(event, listener)
  })
})

const handleEscape = (event: KeyboardEvent): void => {
  if (event.key === 'Escape')
    hideTooltip()
}

watchDebounced(() => [tooltipOutside.value, tooltipWrapperOutside.value], () => {
  hideTooltip()
}, { debounce: 200, maxWait: 1000 })

watch(() => [tooltipOutside.value, tooltipWrapperOutside.value], () => {
  if (!tooltipOutside.value || !tooltipWrapperOutside.value)
    showTooltip()
})

const slotEvents = {
  onBlur: hideTooltip,
  onFocus: showTooltip,
  onKeydown: handleEscape,
}
<\/script>

<template>
  <div ref="tooltipWrapper" class="relative max-w-max">
    <div ref="element" class="grid max-w-max place-items-center">
      <slot name="element" :events="slotEvents" />
    </div>
    <Teleport to="body">
      <Transition v-bind="scaleBounceTransition">
        <div v-if="tooltipShow" id="tooltip" ref="tooltip" role="tooltip"
          :class="[tooltipSlot?.childElementCount === 0 ? 'opacity-0' : 'opacity-100']"
          class="absolute z-50 flex min-w-max rounded text-black shadow-main">
          <div ref="tooltipSlot" class="flex w-full max-w-[60ch] flex-col items-center justify-center">
            <slot name="tooltip" />
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>
`}],internalDependencies:["Transitions"],dependencies:["@floating-ui/dom","@vueuse/core"]},{component:"TransitionExpand",name:"TransitionExpand",files:[{name:"TransitionExpand.vue",dir:"./src/modules/ui/components/transitions",placementDir:"transitions",type:"components",content:`<script lang="ts" setup>
interface Props {
  duration?: number
}

const props = withDefaults(defineProps<Props>(), {
  duration: 0.5,
})

const durationString = computed(() => \`\${props.duration}s\`)

const enter = (element: Element): void => {
  const htmlElement: HTMLElement = element as HTMLElement
  const width = getComputedStyle(htmlElement).width

  htmlElement.style.width = width
  htmlElement.style.position = 'absolute'
  htmlElement.style.visibility = 'hidden'
  htmlElement.style.height = 'auto'

  const height = getComputedStyle(htmlElement).height

  htmlElement.style.width = ''
  htmlElement.style.position = ''
  htmlElement.style.visibility = ''
  htmlElement.style.height = ''

  getComputedStyle(htmlElement)

  requestAnimationFrame(() => {
    htmlElement.style.height = height
  })
}

const afterEnter = (element: Element): void => {
  const htmlElement: HTMLElement = element as HTMLElement
  htmlElement.style.height = 'auto'
}

const leave = (element: Element): void => {
  const htmlElement: HTMLElement = element as HTMLElement
  const height = getComputedStyle(htmlElement).height

  htmlElement.style.height = height
  getComputedStyle(htmlElement)

  requestAnimationFrame(() => {
    htmlElement.style.height = '0'
  })
}
<\/script>

<template>
  <transition
    name="expand"
    @after-enter="afterEnter"
    @enter="enter"
    @leave="leave"
  >
    <slot />
  </transition>
</template>

<style scoped>
.expand-enter-active,
.expand-leave-active {
  transition: height v-bind(durationString) cubic-bezier(0.645, 0.045, 0.355, 1), opacity v-bind(durationString);
  overflow: hidden;
}

.expand-enter-from,
.expand-leave-to {
  opacity: 0;
  height: 0;
}

* {
  will-change: height;
  transform: translateZ(0);
  backface-visibility: hidden;
}
</style>
`}]},{component:"Transitions",name:"Transitions",files:[{name:"index.ts",dir:"./src/transitions",placementDir:"",type:"transitions",content:`export interface TransitionClasses {
  enterFromClass?: string
  enterActiveClass?: string
  enterToClass?: string
  leaveFromClass?: string
  leaveActiveClass?: string
  leaveToClass?: string
  moveClass?: string
}

export * from './scaleBounce.transition'
export * from './snackbar.transition'
export * from './fade.transition'
export * from './list.transition'
export * from './staticList.transition'
`},{name:"fade.transition.ts",dir:"./src/transitions",placementDir:"",type:"transitions",content:`import type { TransitionClasses } from '.'

export const fadeTransition: TransitionClasses = {
  enterActiveClass: 'transition-opacity ease duration-300',
  leaveActiveClass: 'transition-opacity ease duration-300',
  enterFromClass: 'opacity-0',
  leaveToClass: 'opacity-0',
}

export const widthExpand: TransitionClasses = {
  enterActiveClass: 'transition-all ease duration-500',
  leaveActiveClass: 'transition-all ease duration-500',
  enterFromClass: 'w-0 text-red-500',
  leaveToClass: 'w-0 text-red-500',
}
`},{name:"list.transition.ts",dir:"./src/transitions",placementDir:"",type:"transitions",content:`import type { TransitionClasses } from '.'

export const listTransition: TransitionClasses = {
  moveClass: 'transition-all ease duration-500',
  enterActiveClass: 'transition-all ease duration-500',
  leaveActiveClass: 'transition-all ease duration-500 absolute',

  enterFromClass: 'opacity-0',
  leaveToClass: 'opacity-0',
}
`},{name:"scaleBounce.transition.ts",dir:"./src/transitions",placementDir:"",type:"transitions",content:`import type { TransitionClasses } from '.'

export const scaleBounceTransition: TransitionClasses = {
  enterFromClass: 'scale-0 opacity-0',
  enterActiveClass: '[transition:cubic-bezier(.8,.16,0,1.3)_0.5s_transform,0.2s_opacity]',
  enterToClass: '',
  leaveFromClass: '',
  leaveActiveClass: '[transition:cubic-bezier(.8,.16,0,1.3)_0.5s_transform,0.2s_opacity]',
  leaveToClass: 'scale-0 opacity-0',
}
`},{name:"snackbar.transition.ts",dir:"./src/transitions",placementDir:"",type:"transitions",content:`import type { TransitionClasses } from '.'

export const snackbarTransition: TransitionClasses = {
  moveClass: 'transition-all ease duration-500',
  enterActiveClass: 'transition-all ease duration-500',
  leaveActiveClass: 'transition-all ease duration-500 absolute',

  enterFromClass: 'scale-0 opacity-0',
  leaveToClass: 'scale-0 opacity-0',

}
`},{name:"staticList.transition.ts",dir:"./src/transitions",placementDir:"",type:"transitions",content:`import type { TransitionClasses } from '.'

export const staticList: TransitionClasses = {
  moveClass: 'transition-all ease duration-500',
  enterActiveClass: 'transition-all ease duration-500',
  leaveActiveClass: 'transition-all ease duration-500 absolute',

  enterFromClass: 'translate-x-8 opacity-0',
  leaveToClass: 'translate-x-8 opacity-0',
}
`}]}],f=s({__name:"ComponentView",setup(d){const t=i().params.componentName,o=c.find(n=>n.component===t);return(n,m)=>{var e;return r(),a("div",null,l((e=p(o))==null?void 0:e.files[0].content),1)}}});export{f as default};
