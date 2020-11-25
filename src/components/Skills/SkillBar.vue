<template>
  <div>
    <div class="skill-text" :style="skill_text_style">
      <label class="vue-skill-level__skill"
        :style="font_style">
        {{ skill }}
      </label>
      <label class="vue-skill-level__value"
        :style="font_style">
        {{ level + '%' }}
      </label>
    </div>
		<div class="vue-skill-level"
			:style="bar_style">
			<div class="vue-skill-level__bar"
				:style="progress_style">
			</div>
		</div>
  </div>
</template>
<script>
let isNum = function(n) {
	return !isNaN(parseFloat(n)) && isFinite(n)
}
export default {
	name: 'SkillBar',
	data: function() {
		return {
			intervalID: '',
      increment: 1,
      initLevel: 0,
			maxLevel: 100,
		}
	},
	props: {
		'skill': {
			type: String,
			default: ''
		},
		'level': {
			default: 0
		},
		'barSize': {
			default: 10
		},
		'bgColor': {
			type: String,
			default: '#f2f3f5'
		},
		'barColor': {
			type: String,
			default: '#0563bb'
		},
		'fontColor': {
			type: String,
			default: '#45505b'
		},
		'fontSize': {
			default: 12
		}
	},
	mounted() {
		this.intervalID = setInterval(() => {
			this.getLevelProgress()
		}, 15)
	},
	methods: {
		getLevelProgress: function() {
			this.initLevel = this.level
			
			clearInterval(this.intervalID)
		}
	},
	computed: {
    skill_text_style() {
      let style = {
        'position': 'relative',
        'display': 'flex',
        'justify-content': 'space-between'
			}
			return style
    },
		font_style() {
			let style = {
				'color': this.fontColor,
				'font-size': this.fontSize + 'px',
				'font-family': 'Poppins',
				'font-weight': '600',
				'text-transform': 'uppercase',
				'display': 'block',
				'padding': '10px 0',
        'user-select': 'none',
        'margin': '0 0 6px 0'
			}
			return style
		},
		bar_size_px() {
			switch(this.barSize) {
				case 'small': return 24
				case 'medium': return 32
				case 'large': return 48
			}
			return isNum(this.barSize) ? this.barSize : 32
		},
		bar_style() {
			let style = {
        'position': 'relative',
				'background': this.bgColor,
				'border': '0.1em transparent',
				'margin': '0.2em 0',
				'overflow': 'hidden'
			}	
			return style
		},
		progress_style() {
			let style = {
				'position': 'relative',
				'background': this.barColor,
				'width': this.initLevel + '%',
				'height': this.bar_size_px + 'px',
				'transition': 'width 1s linear',
				'display': 'flex',
				'align-items': 'center'
			}
			return style 
		}
	}
};
</script>
<style>
*, *::before, *::after {
	margin: 0; padding: 0;
	box-sizing: border-box;
}
</style>