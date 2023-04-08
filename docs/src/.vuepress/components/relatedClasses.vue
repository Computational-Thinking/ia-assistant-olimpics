<template>
  <div>
      <li v-if="relatedClasses.length > 0">Related Classes: 
      <span v-for="cl in relatedClasses">
        "<a :href="cl.regularPath">{{ cl.title }}</a>"
      </span>
      </li>
  </div>
</template>

<script>
import * as path from 'path';

export default {
  props: {
    lab: {
      type: String,
      required: true
    },
  },
  data() {
    return {
      path: path,
      currentMonth: 0
    }
  },
  methods: {
    getBaseName(page) {
      return path.basename(page.path)
    },
    getDate(page) {
      let m = /(\d+.\d+.\d+)/.exec(page.relativePath);
      return m ? m[1] : null
    },
    getUrl(idOrurl) {
      if (/https/.test(idOrurl)) return idOrurl;
      return "https://youtu.be/" + idOrurl;
    },
    getUrls(list) {
      return list.map(name => ({ href: `/practicas/${name}`, text: name }));
    }

  },
  computed: {
    classFiles() {
      let compare = (pageA, pageB) => {
        let a = this.getDate(pageA);
        let b = this.getDate(pageB);

        if (a < b) {
          return -1;
        }
        if (a > b) {
          return 1;
        }
        // a must be equal to b
        return 0;
      }
      let clases = this.$site.pages.filter(page => /clases.\d+/.test(page.relativePath));
      //console.log(this.getDate(clases[0]));
      return clases.sort(compare);
    },
    relatedClasses() {
      return this.classFiles.filter(page => page.frontmatter.labs.includes(this.lab));
    },
  }
}
</script>
