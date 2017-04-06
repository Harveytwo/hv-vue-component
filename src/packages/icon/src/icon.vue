<template>
  <i :class="'el-icon-' + name"></i>
</template>

<script>
  export default {
    name: 'ElIcon',
    data: function () {
    	return {
    		class: this.name
    	}
    },
    props: {
      name: String
    },
    created: function () {
    	// alert(this.class)
    }
  };
</script>

<style scoped>
	
</style>
