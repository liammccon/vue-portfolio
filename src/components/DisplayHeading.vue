<template>
  <div class="ltm-heading">
    <!--Add the display-size and borderbottom as classes -->
    <div :class="['display-'+size, borderBottom? 'ltm-border-bottom': '', 'ltm-text-yellow', 'text-center' ]">
        {{text}}
    </div>
  </div>
</template>

<script>
export default {
    props: {
        text: String,
        size: { type: Number, default: 1, },
        borderBottom: {type: Boolean, default: true}
    }
}
</script>

<style scoped>

.ltm-border-bottom {
    border-bottom: 1px solid rgb(217, 188, 70) !important;
}
.ltm-text-yellow {
    color: rgb(217, 188, 70) !important;
}

</style>