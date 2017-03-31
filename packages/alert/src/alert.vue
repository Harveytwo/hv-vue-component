<template>
  <transition name="el-alert-fade">
    <div class="el-alert" :class="[ typeClass ]" v-show="visible">
      <i class="el-alert__icon" :class="[ iconClass, isBigIcon ]" v-if="showIcon"></i>
      <div class="el-alert__content">
        <span class="el-alert__title" :class="[ isBoldTitle ]" v-if="title">{{ title }}</span>
        <slot>
          <p class="el-alert__description" v-if="description">{{ description }}</p>
        </slot>
        <i class="el-alert__closebtn" :class="{ 'is-customed': closeText !== '', 'el-icon-close': closeText === '' }" v-show="closable" @click="close()">{{closeText}}</i>
      </div>
    </div>
  </transition>
</template>

<script type="text/babel">
  const TYPE_CLASSES_MAP = {
    'success': 'el-icon-circle-check',
    'warning': 'el-icon-warning',
    'error': 'el-icon-circle-cross'
  };
  export default {
    name: 'ElAlert',

    props: {
      title: {
        type: String,
        default: '',
        required: true
      },
      description: {
        type: String,
        default: ''
      },
      type: {
        type: String,
        default: 'info'
      },
      closable: {
        type: Boolean,
        default: true
      },
      closeText: {
        type: String,
        default: ''
      },
      showIcon: {
        type: Boolean,
        default: false
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
  .el-alert {
    width: 100%;
    padding: 8px 16px;
    margin: 0;
    box-sizing: border-box;
    border-radius: 4px;
    position: relative;
    background-color: #fff;
    overflow: hidden;
    color: #fff;
    opacity: 1;
    display: table;
    transition: opacity .2s;
    text-align: left;
  }

  .el-alert .el-alert__description {
    color: #fff;
    font-size: 12px;
    margin: 5px 0 0
  }

  .el-alert--success {
    background-color: #13ce66
  }

  .el-alert--info {
    background-color: #50bfff
  }

  .el-alert--warning {
    background-color: #f7ba2a
  }

  .el-alert--error {
    background-color: #ff4949
  }

  .el-alert__content {
    display: table-cell;
    padding: 0 8px
  }

  .el-alert__icon {
    font-size: 16px;
    width: 16px;
    display: table-cell;
    color: #fff;
    vertical-align: middle
  }

  .el-alert__icon.is-big {
    font-size: 28px;
    width: 28px
  }

  .el-alert__title {
    font-size: 13px;
    line-height: 18px
  }

  .el-alert__title.is-bold {
    font-weight: 700
  }

  .el-alert__closebtn {
    font-size: 12px;
    color: #fff;
    opacity: 1;
    top: 12px;
    right: 15px;
    position: absolute;
    cursor: pointer
  }

  .el-alert__closebtn.is-customed {
    font-style: normal;
    font-size: 13px;
    top: 9px
  }

  .el-alert-fade-enter,
  .el-alert-fade-leave-active {
    opacity: 0
  }
</style>