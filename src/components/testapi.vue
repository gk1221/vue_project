

<template> 
    <div>
        <p>A1:{{ datamsg }}</p>
      <div>
        <input type="text" v-model="datamsg">
      </div>
      <button @click="handler">click</button>
      
      <p>{{ msg }}</p>
      <div>
        <input type="text" v-model="msg">
      </div>
      <button @click="handler">click</button>
    </div>
  </template>

<script>
    import { ref, computed } from 'vue';

const count = ref(1);
const plusOne = computed(() => count.value + 1);

console.log(plusOne.value); // 2

plusOne.value++; // 錯誤
export default plusOne;
</script>