<template>
  <div class="responsive-video-container">
    <iframe
      :src="src"
      frameborder="0"
      webkitAllowFullScreen
      mozallowfullscreen
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
    // https://www.youtube-nocookie.com/embed/{{ id }}
    export default { 
        props: [ "id" ],
        data() {
            return {
            }
        },
        computed: {
          src() {
            let id = this.id; // from the property
            if (!id) {
              id = (this.$page && this.$page.frontmatter && this.$page.frontmatter.video);
            }
            //console.log("id =", JSON.stringify(this.$page.frontmatter.video));

            // https://youtu.be/DRP-_bmTdto
            let m = /https:.*\.be\/(.+)$/.exec(id); // hyphen may appear in youtube id
            //console.log('m = ',JSON.stringify(m));
            if (m && m[1]) id = m[1];

            let url = "https://www.youtube-nocookie.com/embed/"+id;
            // console.log(url);
            return url;
          }
        } 
    }
</script>
