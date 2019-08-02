<!-- In this example we will change default component's template and script. Styles will be the same -->

<!-- Create a .html file with new template nearby to this index.vue file -->
<!-- <template src="./template.html"></template> -->
<template src="../../../../components/button/template.html"></template>
<!-- Create a .ts (or .js) file with new script nearby to this index.vue file -->
<!-- <script lang="ts" src="./script.ts"></script> -->
<script lang="ts" src="../../../../components/button/script.ts"></script>
<!-- Import default component's styles (because we won't change it) -->
<style lang="scss" src="./style.scss" scoped></style>
