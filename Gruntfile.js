module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				options: {
					style: 'compressed'
				},
				files: {
					'public/css/style.css' : 'sass/style.sass'
				}
			}
		},
		exec: {
			mocha: {
				command: './node_modules/mocha/bin/mocha'
			}
		},
		watch: {
			options: {
				livereload: true,
			},
			css: {
				files: '**/*.sass',
				tasks: ['sass'],
			},
			exec: {
				files: ['**/*.js', '**/*.jade'],
				tasks: ['exec']
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-exec');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default',['watch']);
}
