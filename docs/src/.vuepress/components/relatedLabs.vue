<template>
  <div>
  <ul>
    <li v-for="lab in getUrls(this.$frontmatter.labs)">
      <a :href="lab.href">{{ lab.text }} </a>
    </li>
  </ul>
  </div>
</template>

<script>
    import * as path from 'path';

    export default { 
        data() {
            return {
                path: path,
                currentMonth: 0
            }
        },
        methods: {
            getUrls(list) {
                 return list.map(name => ({href: `/practicas/${name}`, text: name}));
            }
        },

    }
</script>

