const __resolved__virtual_storySource_srcModulesUiComponentsAppButtonsAppConfirmButtonAppconfirmbuttonStoryVue = `<script setup lang="ts">
const handleConfirm = (): void => {
  console.error('confirmed')
}
<\/script>

<template>
  <Story
    title="App/Buttons/AppConfirmButton"
  >
    <Variant title="Default">
      <AppConfirmButton @component:confirm="handleConfirm">
        <AppButton>
          Delete
        </AppButton>
      </appconfirmbutton>
    </Variant>
  </Story>
</template>
`;
export {
  __resolved__virtual_storySource_srcModulesUiComponentsAppButtonsAppConfirmButtonAppconfirmbuttonStoryVue as default
};
