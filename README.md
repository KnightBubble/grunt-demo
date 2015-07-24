# grunt-demo
grunt-study
## 开始
 npm install -g grunt-cli

## 插件的作用 (更多)[http://www.gruntjs.net/plugins]

- contrib-jshint——javascript语法错误检查；
- contrib-watch——实时监控文件变化、调用相应的任务重新执行；
- contrib-clean——清空文件、文件夹；
- contrib-uglify——压缩javascript代码
- contrib-copy——复制文件、文件夹
- contrib-concat——合并多个文件的代码到一个文件中
- karma——前端自动化测试工具


` --registry=http://npm.internal.baidu.com ` npm 安装代理

# 基本使用方法

## 1. 第一步，在grunt.initConfig方法中配置 uglify 的配置参数
```
grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'), // 读取package 的json配置
    uglify: {
      options: {
        // banner 是在build的文件开头的注释 　“options”中规定允许生成的压缩文件带banner，
        // 即在生成的压缩文件第一行加一句话说明
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'static/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    }
  });
```

## 2. 第二步，在 grunt.initConfig 方法之后，要让grunt去加载这一个插件。光配置了，不加载上,是没法用的

```
    grunt.loadNpmTasks('grunt-contrib-uglify');
```

## 2. 第二步，在grunt命令执行时，要不要立即执行uglify插件？如果要，就写上，否则不写。不写就在执行的时候根据需要加载grunt 命令后面 


## jshint 检测语法的使用
可以通过文件.jshintrc 配置规则，格式为json
也可以在直接config去配置，如果文件有合并需要配置在合并前
```
concat: {
    dist: {
          src: ['src/foo.js', 'src/bar.js'],
          dest: 'dist/output.js'
        }
      },
    jshint: {
        beforeconcat: ['src/foo.js', 'src/bar.js'],
        afterconcat: ['dist/output.js']
    }
}
```