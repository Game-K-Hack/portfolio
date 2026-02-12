<style>
@keyframes blurAnimation {
  from {
    filter: blur(0px);
  }
  to {
    filter: blur(var(--blur-md));
  }
}
</style>

<template>
    <div class="flex flex-col gap-7.5 my-32 mx-[10%] lg:mx-[20%] 2xl:mx-[30%]">
        <div class="flex justify-center">
            <img class="w-37.5 rounded-[50%] blur-md animate-[blurAnimation_1s]" :src="avatar">
            <img class="absolute w-37.5 rounded-[50%]" :src="avatar">
        </div>
        <h1 v-if="title.length > 0" class="text-center text-classic-p4 font-['SNPro']">{{ title }}</h1>
        <p class="text-justify font-extralight text-classic-p1">{{ resume }}</p>
    </div>
</template>

<script>
export default {
  props: {
    avatar: { type: String, default: "" },
    title: { type: String, default: "" },
    resume: { type: String, default: "" },
  },
}
</script>
