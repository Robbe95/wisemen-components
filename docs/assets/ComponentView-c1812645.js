import { as as defineComponent, b_ as useRoute, ax as openBlock, aP as createElementBlock, aT as toDisplayString } from "./vendor-8f547009.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const componentInfo = [
  {
    component: "AppButton",
    name: "Button",
    files: [
      {
        name: "AppButton.vue",
        dir: "./src/modules/ui/components/app/buttons/app-button",
        placementDir: "app/buttons",
        type: "components",
        content: `<script setup lang="ts">
import { twMerge } from 'tailwind-merge'
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
    :class="twMerge(buttonVariants({ variant, size }))" @click="handleClick"
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
`
      },
      {
        name: "appButtonVariants.ts",
        dir: "./src/modules/ui/components/app/buttons/app-button",
        placementDir: "app/buttons",
        type: "components",
        content: "import type { VariantProps } from 'class-variance-authority'\nimport { cva } from 'class-variance-authority'\n\nexport const variantOptions = {\n  default: 'bg-primary text-primary-foreground hover:bg-primary/90',\n  destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-focus-destructive',\n  outline: 'border border-primary hover:bg-secondary text-secondary-foreground',\n  secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',\n  ghost: 'hover:bg-secondary text-secondary-foreground',\n  link: 'text-primary underline-offset-4 hover:underline',\n}\n\nexport const sizeOptions = {\n  icon: 'h-10 p-3 w-10',\n  default: 'h-10 px-4 py-2',\n  sm: 'h-9 rounded px-3',\n  lg: 'h-11 rounded px-8',\n}\n\nexport const loaderVariantOptions = {\n  white: 'bg-white',\n  primary: 'bg-primary',\n}\n\nexport const buttonLoaderVariants = cva(\n  'shadow-focus absolute top-[1px] h-2 w-2 rounded-full',\n  {\n    variants: {\n      variant: loaderVariantOptions,\n    },\n    defaultVariants: {\n      variant: 'primary',\n    },\n  },\n)\n\nexport const buttonVariants = cva(\n  'relative inline-flex items-center justify-center rounded text-sm font-medium text-destructive-foreground transition-colors disabled:pointer-events-none disabled:opacity-50',\n  {\n    variants: {\n      variant: variantOptions,\n      size: sizeOptions,\n    },\n    defaultVariants: {\n      variant: 'default',\n      size: 'default',\n    },\n  },\n)\n\nexport type ButtonProps = VariantProps<typeof buttonVariants>\nexport type ButtonLoaderProps = VariantProps<typeof buttonLoaderVariants>\n\nexport const buttonVariantOptions = Object.keys(variantOptions)\nexport const buttonSizeOptions = Object.keys(sizeOptions)\nexport const buttonLoaderVariantOptions = Object.keys(loaderVariantOptions)\n"
      },
      {
        name: "AppButtonLoader.vue",
        dir: "./src/modules/ui/components/app/buttons/app-button",
        placementDir: "app/buttons",
        type: "components",
        content: `<script setup lang="ts">
import { twMerge } from 'tailwind-merge'
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
          v-for="i in 4" :key="i" class="orb" :class="twMerge(buttonLoaderVariants({ variant: loaderVariant }))"
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
`
      }
    ],
    internalDependencies: [
      "Transitions",
      "AppIcon"
    ],
    dependencies: [
      "class-variance-authority"
    ]
  },
  {
    component: "AppDropdownButton",
    name: "DropdownButton",
    files: [
      {
        name: "AppDropdownButton.vue",
        dir: "./src/modules/ui/components/app/buttons/app-dropdown-button",
        placementDir: "app/buttons",
        type: "components",
        content: `<script setup lang="ts">
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
`
      }
    ],
    dependencies: [
      "@headlessui-float/vue",
      "@headlessui/vue"
    ],
    internalDependencies: [
      "AppButton",
      "Transitions"
    ]
  },
  {
    component: "FormError",
    name: "FormError",
    files: [
      {
        name: "FormError.vue",
        dir: "./src/modules/ui/components/forms/error",
        placementDir: "forms/errors",
        type: "components",
        content: '<script setup lang="ts">\ninterface Props {\n  errorMessage?: string\n}\nconst { errorMessage } = defineProps<Props>()\n<\/script>\n\n<template>\n  <p class="text-sm text-destructive">\n    <slot>\n      {{ errorMessage }}\n    </slot>\n  </p>\n</template>\n'
      }
    ]
  },
  {
    component: "FormInputField",
    name: "FormInputField",
    files: [
      {
        name: "FormInputField.vue",
        dir: "./src/modules/ui/components/forms/field",
        placementDir: "forms/field",
        type: "components",
        content: `<script setup lang="ts" generic="TModel extends string | number | undefined">
import { twMerge } from 'tailwind-merge'
import { useClipboard } from '@vueuse/core'
import type { InputFieldProps } from './formInputFieldVariants'
import { inputFieldExtraContentVariants, inputFieldVariants } from './formInputFieldVariants'
import { generateUuid } from '@/helpers/uuid/generateUuid'
import { useFormInputGroup } from '@/modules/ui/composables/forms/group/useFormInputGroup'
import type { Icon } from '@/icons'

interface Props {
  isSuccess?: boolean
  isReadOnly?: boolean
  isDisabled?: boolean
  isTouched?: boolean
  isDirty?: boolean
  isCopyable?: boolean
  isOptional?: boolean
  hasExtraContentBorder: boolean
  placeholder?: string
  type?: TModel extends number ? 'number' : 'text' | 'password' | 'email' | 'tel' | 'url' | 'search'
  label?: string
  errors?: { _errors: string[] }
  backContent?: string
  frontContent?: string
  backIcon?: Icon
  frontIcon?: Icon
}

const {
  isSuccess = false,
  isReadOnly = false,
  isDisabled = false,
  isTouched = false,
  isDirty = false,
  isCopyable = false,
  placeholder,
  backContent,
  frontContent,
  backIcon,
  frontIcon,
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

// Extra content logic
const hasFrontContent = computed(() => frontContent || slots['front-content'] || frontIcon)
const hasBackContent = computed(() => backContent || slots['back-content'] || backIcon || isCopyable || type === 'password')
const currentExtraContent = computed<InputFieldProps['extraContent']>(() => {
  if (hasFrontContent.value && hasBackContent.value)
    return 'both'
  if (hasFrontContent.value)
    return 'front'
  if (hasBackContent.value)
    return 'back'
  return 'default'
})

// Input status logic
const currentStatus = computed<InputFieldProps['status']>(() => {
  if (errorShown.value)
    return 'error'
  if (isSuccess)
    return 'success'
  if (isReadOnly)
    return 'readonly'
  if (isDisabled)
    return 'disabled'
  return 'default'
})

// Copy logic
const copyModel = computed(() => model.value?.toString() ?? '')
const { copy } = useClipboard()

// Adds grouping logic if a wrapped in FormGroup component
if (type === 'number')
  useFormInputGroup({ model: model as Ref<number>, element, uuid, isDisabled: computed(() => isDisabled) })

// Password logic
const passwordShown = ref(false)
const togglePasswordShown = (): void => {
  passwordShown.value = !passwordShown.value
}
const inputType = computed<string>(() => (type === 'password' && passwordShown.value) ? 'text' : type)
<\/script>

<template>
  <div ref="element">
    <!-- Label -->
    <div class="flex items-center justify-between gap-4">
      <FormLabel :for="uuid">
        <slot name="label">
          {{ label }}
        </slot>
      </FormLabel>
      <p v-if="isOptional" class="text-xs text-muted-foreground">
        Optional
      </p>
    </div>

    <div class="flex">
      <!-- Content before the input -->
      <div
        v-if="hasFrontContent" :class="
          twMerge(inputFieldExtraContentVariants(
            {
              extraContentType: 'front',
              status: currentStatus,
              extraContentBorder: hasExtraContentBorder,
            },
          ))"
      >
        <slot name="front-content">
          <AppIcon v-if="frontIcon" :icon="frontIcon" />
          <div v-else-if="frontContent">
            {{ frontContent }}
          </div>
        </slot>
      </div>

      <!-- Input -->
      <input
        :id="uuid" v-model="model" :disabled="isDisabled" :type="inputType" min="0"
        :class="twMerge(inputFieldVariants({ status: currentStatus, extraContent: currentExtraContent }))"
        :placeholder="placeholder" :readonly="isReadOnly" @blur="emits('blur')"
      >

      <!-- Content after the input -->
      <div
        v-if="hasBackContent" :class="
          twMerge(inputFieldExtraContentVariants(
            {
              extraContentType: 'back',
              status: currentStatus,
              extraContentBorder: hasExtraContentBorder,
            },
          ))"
      >
        <slot name="back-content">
          <button v-if="type === 'password'" @click="togglePasswordShown">
            <AppIcon v-if="passwordShown" icon="eyeClosed" />
            <AppIcon v-else icon="eyeOpen" />
          </button>
          <button v-else-if="isCopyable" @click="copy(copyModel)">
            Copy
          </button>
          <AppIcon v-else-if="backIcon" :icon="backIcon" />
          <div v-else-if="backContent">
            {{ backContent }}
          </div>
        </slot>
      </div>
    </div>
    <!-- Error -->
    <TransitionExpand :duration="0.2">
      <FormError v-if="errorShown" :error-message="errors._errors[0]" />
    </TransitionExpand>
  </div>
</template>
`
      },
      {
        name: "formInputFieldVariants.ts",
        dir: "./src/modules/ui/components/forms/field",
        placementDir: "forms/field",
        type: "components",
        content: "import type { VariantProps } from 'class-variance-authority'\nimport { cva } from 'class-variance-authority'\n\nexport const statusOptions = {\n  default: 'border-border',\n  error: 'border-destructive',\n  success: 'border-success',\n  readonly: 'bg-muted text-muted-foreground',\n  disabled: 'opacity-60',\n}\n\nexport const extraContentOptions = {\n  default: '',\n  back: 'rounded-r-none border-r-0',\n  front: 'rounded-l-none border-l-0',\n  both: 'rounded-l-none border-l-0 rounded-r-none border-r-0',\n}\n\nexport const inputFieldVariants = cva(\n  'relative w-full rounded border border-border bg-input px-4 py-2 placeholder:transition-all placeholder:duration-300 focus:placeholder:translate-x-1 focus:placeholder:opacity-0',\n  {\n    variants: {\n      status: statusOptions,\n      extraContent: extraContentOptions,\n    },\n    defaultVariants: {\n      status: 'default',\n      extraContent: 'default',\n    },\n  },\n)\n\nexport const extraContentTypes = {\n  back: 'rounded-l-none border-l-0',\n  front: 'rounded-r-none border-r-0',\n}\n\nexport const extraContentBorderOptions = {\n  true: '',\n  false: '',\n}\n\nexport const inputFieldExtraContentVariants = cva(\n  'flex items-center justify-center rounded border border-border bg-input px-4',\n  {\n    variants: {\n      status: statusOptions,\n      extraContentType: extraContentTypes,\n      extraContentBorder: extraContentBorderOptions,\n    },\n    compoundVariants: [\n      {\n        extraContentBorder: true,\n        extraContentType: 'front',\n        class: 'border-r',\n      },\n      {\n        extraContentBorder: true,\n        extraContentType: 'back',\n        class: 'border-l',\n      },\n    ],\n    defaultVariants: {\n      extraContentType: 'back',\n    },\n  },\n)\n\nexport type InputFieldProps = VariantProps<typeof inputFieldVariants>\nexport const inputFieldStatusOptions = Object.keys(statusOptions)\n"
      }
    ],
    internalDependencies: [
      "FormError",
      "FormInputGroupComposable",
      "TransitionExpand"
    ],
    dependencies: [
      "@vueuse/core"
    ]
  },
  {
    component: "FormInputGroupComposable",
    name: "FormInputGroupComposable",
    files: [
      {
        name: "useFormInputGroup.ts",
        dir: "./src/modules/ui/composables/forms/group",
        placementDir: "forms/group",
        type: "composables",
        content: "import { useFormInputGroupContext } from '@/modules/ui/composables/forms/group/useFormInputGroupContext'\nimport type { Option } from '@/modules/ui/composables/forms/group/useFormInputGroupContext'\n\nexport interface UseFormInputGroupParams {\n  model: Ref<number | null>\n  isDisabled?: Ref<boolean>\n  uuid: string\n  element: Ref<HTMLElement | undefined>\n}\n\nexport const useFormInputGroup = ({ model, uuid, isDisabled, element }: UseFormInputGroupParams): void => {\n  const context = useFormInputGroupContext()\n  const propsRef = computed(() => ({\n    value: typeof model.value === 'number' ? model.value : 0,\n    disabled: isDisabled?.value,\n  }))\n  const option: Option = ref({ id: uuid, element: element.value, propsRef: propsRef.value }) as Option\n\n  const change = (value: number): void => {\n    if (isDisabled?.value || !context)\n      return\n\n    const newValue = context.change(option, value)\n    model.value = newValue\n  }\n\n  watch(\n    () => model.value, (value) => {\n      if (!value)\n        return\n      change(value)\n    },\n  )\n\n  onMounted(() => {\n    if (context)\n      context.registerOption(option)\n  })\n  onUnmounted(() => {\n    if (context)\n      context.unregisterOption(uuid)\n  })\n}\n"
      },
      {
        name: "useFormInputGroupContext.ts",
        dir: "./src/modules/ui/composables/forms/group",
        placementDir: "forms/group",
        type: "composables",
        content: "import { inject } from 'vue'\nimport type { ComputedRef, InjectionKey, Ref } from 'vue'\n\nexport type Option = Ref<{ id: string; element: HTMLElement | undefined; propsRef: { value: number; disabled: boolean } }>\n\nexport interface FormInputGroupStateDefinition {\n  // State\n  valueMeasurement?: ComputedRef<string>\n  percentProgress?: ComputedRef<boolean>\n  valueProgress?: ComputedRef<boolean>\n  maxLabel?: ComputedRef<boolean>\n\n  options: Ref<Option[]>\n  maxValue: ComputedRef<number | undefined>\n  valueUsed: ComputedRef<number>\n\n  disabled: Ref<boolean>\n  change(option: Option, newValue: number): number | null\n  registerOption(action: Option): void\n  unregisterOption(id: string): void\n}\n\nexport const FormInputGroupContext = Symbol('FormGroupContext') as InjectionKey<FormInputGroupStateDefinition>\n\nexport const useFormInputGroupContext = (): FormInputGroupStateDefinition | null => {\n  const context = inject(FormInputGroupContext, null)\n  return context\n}\n"
      }
    ]
  },
  {
    component: "AppTooltip",
    name: "Tooltip",
    files: [
      {
        name: "AppTooltip.vue",
        dir: "./src/modules/ui/components/app/tooltip",
        placementDir: "app/tooltip",
        type: "components",
        content: `<script setup lang="ts">
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
`
      }
    ],
    internalDependencies: [
      "Transitions"
    ],
    dependencies: [
      "@floating-ui/dom",
      "@vueuse/core"
    ]
  },
  {
    component: "TransitionExpand",
    name: "TransitionExpand",
    files: [
      {
        name: "TransitionExpand.vue",
        dir: "./src/modules/ui/components/transitions",
        placementDir: "transitions",
        type: "components",
        content: `<script lang="ts" setup>
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
`
      }
    ]
  },
  {
    component: "Transitions",
    name: "Transitions",
    files: [
      {
        name: "index.ts",
        dir: "./src/transitions",
        placementDir: "",
        type: "transitions",
        content: "export interface TransitionClasses {\n  enterFromClass?: string\n  enterActiveClass?: string\n  enterToClass?: string\n  leaveFromClass?: string\n  leaveActiveClass?: string\n  leaveToClass?: string\n  moveClass?: string\n}\n\nexport * from './scaleBounce.transition'\nexport * from './snackbar.transition'\nexport * from './fade.transition'\nexport * from './list.transition'\nexport * from './staticList.transition'\n"
      },
      {
        name: "fade.transition.ts",
        dir: "./src/transitions",
        placementDir: "",
        type: "transitions",
        content: "import type { TransitionClasses } from '.'\n\nexport const fadeTransition: TransitionClasses = {\n  enterActiveClass: 'transition-opacity ease duration-300',\n  leaveActiveClass: 'transition-opacity ease duration-300',\n  enterFromClass: 'opacity-0',\n  leaveToClass: 'opacity-0',\n}\n\nexport const widthExpand: TransitionClasses = {\n  enterActiveClass: 'transition-all ease duration-500',\n  leaveActiveClass: 'transition-all ease duration-500',\n  enterFromClass: 'w-0 text-red-500',\n  leaveToClass: 'w-0 text-red-500',\n}\n"
      },
      {
        name: "list.transition.ts",
        dir: "./src/transitions",
        placementDir: "",
        type: "transitions",
        content: "import type { TransitionClasses } from '.'\n\nexport const listTransition: TransitionClasses = {\n  moveClass: 'transition-all ease duration-500',\n  enterActiveClass: 'transition-all ease duration-500',\n  leaveActiveClass: 'transition-all ease duration-500 absolute',\n\n  enterFromClass: 'opacity-0',\n  leaveToClass: 'opacity-0',\n}\n"
      },
      {
        name: "scaleBounce.transition.ts",
        dir: "./src/transitions",
        placementDir: "",
        type: "transitions",
        content: "import type { TransitionClasses } from '.'\n\nexport const scaleBounceTransition: TransitionClasses = {\n  enterFromClass: 'scale-0 opacity-0',\n  enterActiveClass: '[transition:cubic-bezier(.8,.16,0,1.3)_0.5s_transform,0.2s_opacity]',\n  enterToClass: '',\n  leaveFromClass: '',\n  leaveActiveClass: '[transition:cubic-bezier(.8,.16,0,1.3)_0.5s_transform,0.2s_opacity]',\n  leaveToClass: 'scale-0 opacity-0',\n}\n"
      },
      {
        name: "snackbar.transition.ts",
        dir: "./src/transitions",
        placementDir: "",
        type: "transitions",
        content: "import type { TransitionClasses } from '.'\n\nexport const snackbarTransition: TransitionClasses = {\n  moveClass: 'transition-all ease duration-500',\n  enterActiveClass: 'transition-all ease duration-500',\n  leaveActiveClass: 'transition-all ease duration-500 absolute',\n\n  enterFromClass: 'scale-0 opacity-0',\n  leaveToClass: 'scale-0 opacity-0',\n\n}\n"
      },
      {
        name: "staticList.transition.ts",
        dir: "./src/transitions",
        placementDir: "",
        type: "transitions",
        content: "import type { TransitionClasses } from '.'\n\nexport const staticList: TransitionClasses = {\n  moveClass: 'transition-all ease duration-500',\n  enterActiveClass: 'transition-all ease duration-500',\n  leaveActiveClass: 'transition-all ease duration-500 absolute',\n\n  enterFromClass: 'translate-x-8 opacity-0',\n  leaveToClass: 'translate-x-8 opacity-0',\n}\n"
      }
    ]
  }
];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ComponentView",
  setup(__props, { expose: __expose }) {
    __expose();
    const componentName = useRoute().params.componentName;
    const foundComponent = componentInfo.find((component) => component.component === componentName);
    const __returned__ = { componentName, foundComponent };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _a;
  return openBlock(), createElementBlock(
    "div",
    null,
    toDisplayString((_a = $setup.foundComponent) == null ? void 0 : _a.files[0].content),
    1
    /* TEXT */
  );
}
_sfc_main.__file = "src/pages/ComponentView.vue";
const ComponentView = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/wisemen-components/wisemen-components/src/pages/ComponentView.vue"]]);
export {
  ComponentView as default
};
