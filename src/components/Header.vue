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
            <img class="w-37.5 rounded-[50%] blur-md animate-[blurAnimation_1s]" :src="avatar" alt="avatar background">
            <img class="absolute w-37.5 rounded-[50%]" :src="avatar" alt="avatar">
        </div>
        <!-- <h1 v-if="title.length > 0" class="text-center text-classic-p3 font-['SNPro']">{{ title }}</h1> -->
        <IconName></IconName>
        <p class="text-justify font-extralight text-classic">{{ resume }}</p>
    </div>
</template>

<script>
    import IconName from './icons/IconName.vue';

    export default {
        components: {
            IconName
        },
        props: {
            avatar: { type: String, default: "" },
            title: { type: String, default: "" },
            resume: { type: String, default: "" },
        },
    }
</script>
