module.exports = function(grunt){


	grunt.initConfig({
	
	
	jshint: {
	    all: ['javascripts/*.js']
	  },
	  


	uglify: {
	    my_target: {
	      options: {
	        sourceMap: true,
	        sourceMapName: 'path/to/sourcemap.map'
	      },
	      files: {
	        'javascripts/minJS.js': ['javascripts/script.js']
	      }
	    }
	  },



	  compass: {
	    dist: {
	      options: {
	        config: 'config.rb'
	      }
	    },
	    done: {
	     options: {
	        outputStyle: "compressed"
	    }
	  }
	},
	


	jade: {
	  compile: {
	    options: {
	      pretty:true,
	      data: {
	        debug: false
	      }
	    },
	    files: {
	      "index.html": ["index.jade"]
	    }
	  }
	},



	watch: {
	  css: {
	    files: ['index.jade','sass/*.scss','javascripts/*.js','!js/minJS.js'],
	    tasks: ['wip'],
	    options: {
	      spawn: false,
	    },
	  },
	},


	


	});	


	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-jade');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask("done",["jshint","uglify","compass:done","jade"]);
	grunt.registerTask("wip",["jshint","compass:dist","jade"]);


}