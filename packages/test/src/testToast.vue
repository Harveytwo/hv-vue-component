<template>
	<transition name="hv-toast">
		<div class="hv-toast" v-show="visible" :class="customClass">
			<span style="padding: 5px 10px">{{ message }}</span>
		</div>
	</transition>
</template>

<script type="text/javascript">
	export default {
		props: {
			message: String,
      position: {
        type: String,
        default: 'middle'
      },
      className: {
        type: String,
        default: ''
      },
		},
		data: function () {
			return {
				visible: false
			}
		},
		computed: {
			customClass() {
				var classes = [];
				switch (this.position) {
					case 'top':
						classes.push('is-placetop');
            break;
          case 'bottom':
          classes.push('is-placebottom');
            break;
          default:
          	classes.push('is-placemiddle');
				}
				classes.push(this.className)
				return classes.join(' ');
			}
		}
	}
</script>

<style scoped>
	.hv-toast {
		background: rgba(112,12,33,.5);
		position: fixed;
		transition: opacity .3s linear;
		transform: translate(-50%, -50%);
		left: 50%;
		/*transform: translate(-50%, -50%);*/
	}
	.hv-toast.is-placetop {
		top: 20%;
		
	}
	.hv-toast.is-placemiddle {
		top: 50%;
	}
	.hv-toast.is-placebottom {
		top: 80%;
	}

	.hv-toast-enter,
	.hv-toast-leave-active {
		opacity: 0;
	}
</style>