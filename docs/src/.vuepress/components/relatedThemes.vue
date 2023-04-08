<template>
  <div>
    <ul>
      <li v-for="theme in themes">
        <a :href="theme.href">{{ theme.text }} </a>
      </li>
    </ul>
  </div>
</template>

<script>
    import * as path from 'path';

    export default { 
        computed: {
          themes() {
            return this.$page.frontmatter.temas
          }
        },
        methods: {
        },
    }
</script>

