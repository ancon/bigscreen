/*global module:false*/
module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    //测试文件
    qunit: {
      files: ['index.html']
    },
    //js代码验证
    jshint: {
      files: ['Gruntfile.js','static/js/*.js'],
      options: {
        globals: {
          jQuery: true,
          console: true,
          module: true
        }
      },
    },
    //合并文件
    concat: {
      options: {
        separator: '\n\n\n\n'
      },
      concatcss: {
        src: '_src/css/*.css',
        dest: 'static/css//<%= pkg.name %>.css'
      },
      concatjs: {
        src: '_src/js/*.js',
        dest: 'static/js/<%= pkg.name %>.js'
      }
    },
    //压缩JS文件
    uglify: {
      dist: {
        files: {
          'static/js/<%= pkg.name %>.min.js':['<%= concat.concatjs.dest %>'],
        }
      },
      options: {
        banner: '/*! <%= pkg.name %>\nauthor:<%= pkg.author.name %>\n<%= grunt.template.today("yyyy-mm-dd") %>*/\n',
        report: 'min'
      }
    },
    //压缩CSS
    cssmin: {
      css: {
        src: ['<%= concat.concatcss.dest %>'],
        dest: 'static/css/<%= pkg.name %>.min.css'
      }
    },
    //侦听
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint','qunit']
    }
  });

  // Lib tasks.
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-css');
  grunt.loadNpmTasks('grunt-contrib-watch');


  //默认任务:命令行输入grunt
  defaultTasks = ['concat','uglify','cssmin','qunit','cssmin','watch'];
  grunt.registerTask('default', defaultTasks);

  //自定义任务，命令行输入 grunt min,合并压缩JS/CSS
  minTasks = ['concat','uglify','cssmin'];
  grunt.registerTask('min', minTasks);

};
