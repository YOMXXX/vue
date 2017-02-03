<template>
	<div class="stars">
		<span class="star" v-for="(_star, index) in _stars" :class="_star">{{index}}</span>
	</div>
</template>
<script>
	export default {
		data () {
			return {}
		},
		'props': {
			'score': {
				'type': Number
			}
		},
		computed: {
			'_stars': function () {
				let _startResult = []
				let _score = this.score
				let _allStar = Math.floor(_score)
				let _halfStar = _score % 1 !== 0
				let offStars = 5 - _allStar
				for (var i = 0; i < _allStar; i++) {
					_startResult.push('all')
				}
				_halfStar && _startResult.push('half')
				if (offStars > 0) {
					for (var w = 0; w < offStars; w++) {
						_startResult.push('off')
					}
				}
				return _startResult
			}
		}
	}
</script>
<style scoped>
	.stars {
		text-align: center;
		height: 19px;
		margin: 16px 0 28px 0;
	}
	.star {
		display: inline-block;
		margin-right: 15px;
	}
 .stars .all {
 	background: url(../../assets/star48_on@2x.png) center top no-repeat;
 	width: 20px;
 	height: 19px;
	background-size: cover;
 }
 .stars .half {
 	background: url(../../assets/star48_half@2x.png) center top no-repeat;
 	width: 20px;
 	height: 19px;
	background-size: cover;
 }
  .stars .off {
 	background: url(../../assets/star48_off@2x.png) center top no-repeat;
 	width: 20px;
 	height: 19px;
	background-size: cover;
 }
</style>