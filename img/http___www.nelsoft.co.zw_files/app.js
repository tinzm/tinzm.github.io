Vue.component('question', {
	template: `
		<div class="question mb-4">
			<div class="bg-white mb-4 py-4 pl-8 pr-4 mx-2 sm:w-full rounded-lg sm:mx-0 sm:rounded-full">
				<div class="flex justify-between">
					<p class="text-grey leading-normal">{{question.question}}</p>
					<div class="button mx-3 self-center">
						<a  @click.prevent="show(question)" class="pointer py-2 px-4 rounded-full bg-brand text-white no-underline">
							Show
						</a>
					</div>
				</div>
			</div>
			<div class="answer pl-4 pr-4" v-show="active">
				<p class="w-3/4 mb-6 leading-loose">
					{{question.answer}}
				</p>
			</div>
		</div>


	`,

	props: ['question'],

	created() {
		console.log(this.active);
	},

	data() {
		return {
			active: false,
		}
	},

	methods: {
		show(question) {
			this.active = !this.active;
		}	
	}


});

new Vue({
	el: '#app',

});