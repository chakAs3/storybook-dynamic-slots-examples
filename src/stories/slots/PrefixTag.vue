<script lang="ts" setup>


const slots = defineSlots<{
  prefix?: () => any;

  suffix?: () => any;
}>();

const props = defineProps<{
  label: string;
}>()
</script>

<template>
  <div style="padding: 20px;">
    <span v-if="slots.prefix" class="prefix">
      <slot name="prefix"></slot>
    </span>
    <span>{{ props.label }}</span>
    <span v-if="slots.suffix" class="suffix">
      <slot name="suffix"></slot>
    </span>
  </div>
</template>
<style scoped>
span {
  padding: 10px;
  border: 1px solid gray;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

span+span {
  border-left: 0px;
  border-radius: 0;
}

.prefix {
  border-radius: 6px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  background-color: wheat;
}

.suffix {
  border-radius: 6px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  background-color: wheat;
}
</style>
`;