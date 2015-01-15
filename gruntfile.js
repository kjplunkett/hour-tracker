module.exports = function (grunt) {

	'use strict';

	// Project configuration
	grunt.initConfig({
		
		// Read the package file
		pkg: grunt.file.readJSON('package.json'),

		// Configure SASS plugin
		sass: {
			dist: {
				files: {
					'styles/style.css' : 'styles/style.scss'
				}
			}
		},

		// Configure Watch plugin
		watch: {
			sass: {
				files: ['styles/*.scss'],
				tasks: ['sass']
			}
		}
	});
	
	// Load the SASS tasks
	grunt.loadNpmTasks('grunt-contrib-sass');

	// Load the Watch task
	grunt.loadNpmTasks('grunt-contrib-watch');
};