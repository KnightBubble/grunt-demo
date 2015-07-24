module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'static/<%= pkg.name %>.js',
        dest: 'output/<%= pkg.name %>.min.js'
      }
    },

    // jshint js 语法检测
    jshint: {
        otherJs: ['static/about.js', 'static/index.js','Gruntfile.js'],
        gruntDemo: ['static/grunt-demo.js'],
        options: {
          // 通过文件配置规则
            jshintrc: '.jshintrc'
        }
    },
    // csslint 语法检测 
    csslint: {
        build: ['static/invalid.css'],
        options: {
          csslintrc: '.csslintrc'
        }
    },

    // watch 
    watch:{
        files: ['static/*.css','static/*.js'],
        task: ['jshint', 'csslint'],
        options: {
            spawn:false
        }
    },
    // 合并
    concat: {
        options: {
          separator: ';',
          stripBanners: true,
           banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %> */',
        },
        dist: {
          src: ['static/about.css', 'static/invalid.css'],
          dest: 'static/all.css',
        }
    },
    // css 压缩
    cssmin: {
        options: {
            banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +'<%= grunt.template.today("yyyy-mm-dd") %> */'
        },
        dist: {
                src: 'static/all.css',
                dest: 'output/all.min.css'
        }
    },


  });

  // Load the plugin that provides the "uglify" task. js 压缩
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // js 检查
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // csslint load  css检查
  grunt.loadNpmTasks('grunt-contrib-csslint');

  // watch 监控
  grunt.loadNpmTasks('grunt-contrib-watch');

   // 文件合并
  grunt.loadNpmTasks('grunt-contrib-concat');

  // css 压缩
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Default task(s).
  grunt.registerTask('default', ['uglify','csslint','watch','concat','cssmin']);
  grunt.registerTask('release', ['concat','cssmin']);

};