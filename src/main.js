import Vue from 'vue';
import './style.scss';
import genres from './util/genres.js';

new Vue({
	el: '#app',

	components: {
		'movie-list': {
			data() {
				return { movies: [
						{title: 'Pulp Fiction'}, 
						{title: 'Home Alone'}, 
						{title: 'Austin Powers'}
						]
					}
			},
			template: `<div id="movie-list">
			<h1>Movie List</h1>
					<div v-for="movie in movies" class="movie">{{ movie.title }}</div>
				</div>
			`,
		},
		'movie-filter': {
			template: `
				<div id="movie-filter">
					<h2>Filter Results</h2>
					<div class="filter-group">
						<check-filter v-for="genre in genres" v-bind:title="genre"></check-filter>

					</div>

				</div>
			`,


			data() {
				return {
					genres
				}
			},
			components: {
				'check-filter': {
					template: `
						<div class="check-filter">
							<span class="check-box"></span>
							<span class="check-filter-title">
								{{ title }}
							</span>
						</div>`,
					
					props: [
						'title'
					],
				}
			}

		},

	}
});