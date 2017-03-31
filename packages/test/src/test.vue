<template>
  <transition name="test-fade">
    <div v-show="visible" class="test" :class="['test-'+type]">
      <span>{{ title }}</span>
      <slot>
        <p v-if="discription">{{ discription }}</p>
      </slot>
      <i v-if="closable" @click="close"></i>
    </div>
  </transition>
</template>

<script type="text/babel">
  
  export default {
    name: 'testCp',

    props: {
      title: {
        type: String,
        default: '',
        required: true
      },
      type: {
        type: String,
        default: 'info'
      },
      discription: {
        type: String,
        default: ''
      },
      closable: {
        type: Boolean,
        default: true
      }
    },

    data() {
      return {
        visible: true
      };
    },

    methods: {
      close() {
        this.visible = false;
        this.$emit('close');
      }
    },

    computed: {
      typeClass() {
        return `el-alert--${ this.type }`;
      },

      iconClass() {
        return TYPE_CLASSES_MAP[this.type] || 'el-icon-information';
      },

      isBigIcon() {
        return this.description ? 'is-big' : '';
      },

      isBoldTitle() {
        return this.description ? 'is-bold' : '';
      }
    }
  };
</script>

<style scoped>
  @charset "UTF-8";
  .test {
    width: 100%;
    padding: 5px 10px;
    border-radius: 4px;
    position: relative;
    text-align: left;
    transition: opacity .5s;
  }
  .test-info {
    background: #50bfff;
  }
  .test-success {
    background: #13ce66;
  }
  .test-warning {
    background: #f7ba2a;
  }
  .test-error {
    background: #ff4949;
  }
  i {
    display: inline-block;
    width: 16px;
    height: 16px;
    background: yellow;
    position: absolute;
    right: 33px;
    top: 50%;
    margin-top: -8px;
    cursor: pointer;
  }

  .test-fade-enter,
  .test-fade-leave-active {
    opacity: 0;
  }
</style>