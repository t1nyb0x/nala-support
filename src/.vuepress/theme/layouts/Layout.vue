<script setup>
    import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue'
</script>

<template>
    <ParentLayout>
        <template #page-bottom>
            <div class="my-footer">©2023 ナーラ公苑内放牧地</div>
        </template>
    </ParentLayout>
</template>

<style lang="css">
.my-footer {
    text-align: center;
}
</style>