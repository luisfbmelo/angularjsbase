module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		compass: {                  // Task
		    dist: {                   // Target
		      options: {              // Target options
		        sassDir: 'assets/styles/sass',
		        cssDir: 'assets/styles/stylesheets',
		        environment: 'production'
		      }
		    },
		    dev: {                    // Another target
		      options: {
		        sassDir: 'assets/styles/sass',
		        cssDir: 'assets/styles/stylesheets/dev'
		      }
		    }
	  	},	
		/*sass: {
			dist: {
				options: {
			      style: 'compressed'
			    },
				files: {
					'assets/styles/screen.css' : 'assets/styles/sass/screen.scss'
				}
			}
		},*/
		concat: {
			js: {
                src: [ 
                	'scripts/controllers/*.js',                 	
                	'scripts/filters/*.js',
                	'scripts/services/*.js',
                	'scripts/directives/*.js'
                ],
                dest: 'scripts/prjscript.js',
                
            },
	    },
	    uglify: {
		    my_target: {
		    	options:{
		    		mangle: false
		    	},
			    files: {
			    	'scripts/prjscript.min.js': ['scripts/prjscript.js']
			    }
		    }
		},
		/*cssmin: {
		  target: {
		    files: [{
		      expand: true,
		      cwd: 'assets/styles/stylesheets',
		      //src: ['*.css', '!*.min.css'],
		      src: ['screen.css'],
		      dest: 'assets/styles/stylesheets',
		      ext: '.min.css'
		    }]
		  }
		},*/
		watch: {
			compass: {
				files: ['**/*.{scss,sass}'],
				tasks: ['compass']
			},
			//css: {
				//files: '**/*.css',
				//tasks: ['sass','cssmin']
				//tasks: ['cssmin']
			//},
			concat: {
			    files: '**/*.js',
			    tasks: ['concat', 'uglify']
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-compass');
	//grunt.loadNpmTasks('grunt-contrib-sass');	
	//grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default',['watch']);
}