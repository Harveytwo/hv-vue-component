<template>
	<label class="hv-radio">
		<span 
			class="hv-radio__input"
			:class="{
				'is-checked': model === label,
				'is-focus': focus
			}">
		
			<span class="hv-radio__inner"></span>

		  <input
		  	class="hv-radio_original"
		  	type="radio"
		  	name="test"
		  	v-model="model"
		  	@focus="focus = true"
		  	@blur="focus = false"
		  	:value = "label"/>
	  </span>

	  <span>
	  	<slot></slot>
	  	<template v-if="!$slots.default">{{ label }}</template>
	  </span>

	</label>
</template>

<script type="text/javascript">
	export default {
		name: 'hv-radio',
		data: function () {
			return {
				focus: false
			}
		},
		props: {
      value: {},
      label: {},
      disabled: Boolean,
      name: String
    },
		computed: {
			model: {
				get() {
					return this.value;
				},
				set(val) {
					this.$emit('input', val);
				}
			}
		}
	}
</script>

<style scoped>
	.hv-radio {
		color: #1f2d3d;
		cursor: pointer
	}
	.hv-radio_original {
		opacity: 0;
		outline: 0;
		position: absolute;
		z-index: -1;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		margin: 0
	}

	.el-radio__input {
		line-height: 1;
		vertical-align: middle;
		outline: 0
	}
	.hv-radio,
	.hv-radio__inner,
	.hv-radio__input {
		position: relative;
		display: inline-block
	}

	.hv-radio__input {
		line-height: 1;
		vertical-align: middle;
		outline: 0
	}
	.hv-radio {
		white-space: nowrap;
	}

	.hv-radio+.hv-radio {
		margin-left: 15px
	}

	.hv-radio__input {
		white-space: nowrap;
		cursor: pointer
	}
	.hv-radio__inner {
		border: 1px solid #bfcbd9;
		width: 18px;
		height: 18px;
		border-radius: 50%;
		cursor: pointer;
		box-sizing: border-box
	}

	.hv-radio__inner:hover {
		border-color: #20a0ff
	}
	.hv-radio__inner::after {
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background-color: #fff;
		content: "";
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%) scale(0);
		transition: transform .15s cubic-bezier(.71, -.46, .88, .6)
	}

	.hv-radio__input.is-checked .hv-radio__inner {
		border-color: #20a0ff;
		background: #20a0ff
	}

	.hv-radio__input.is-checked .hv-radio__inner::after {
		transform: translate(-50%, -50%) scale(1)
	}
	.hv-radio__input.is-focus .hv-radio__inner {
		border-color: #20a0ff
	}

	
</style>