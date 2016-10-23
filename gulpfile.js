

var gulp = require('gulp');
var connect = require('gulp-connect'); // runs a local dev server
var open    = require('gulp-open'); //open a RUl in a web-server
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var concat = require('gulp-concat'); // to join file
var lint = require('gulp-eslint');
var liveServer = require('gulp-live-server');

var config = { 

	port: 7000,
	devBaseUrl:'http://localhost',
	paths : {
           html: './src/*.html',
           js :   '.src/**/*.js',
          css:   './src/css/*.css',
           views: './views',
           bundle :'./views/scripts',
           mainJs :'./src/main.js'

	}
};
//start a local

/*gulp.task('liveserver',function () {
    var server = new liveServer('Server.js');
    server.start();
});*/

gulp.task('connect',function() {

  connect.server ({
      root:['views'],
        port: config.port,
        base : config.devBaseUrl,
        livereload:true

  });

});
gulp.task('lint',function() {

	return gulp.src(config.paths.js)
	   .pipe(lint({config:'eslint.config.json'}))
	    .pipe(lint.format());
});

gulp.task('open',['connect','js'],function() {
	 console.log("Its loading from here");
  gulp.src('views/index.html')

       .pipe(open({uri: config.devBaseUrl + ':' + config.port + '/' }))


});

gulp.task('html',function() {
  gulp.src(config.paths.html)
  .pipe(gulp.dest(config.paths.views))
  .pipe(connect.reload());

});

gulp.task('js',function(){
	browserify(config.paths.mainJs)
	.transform(reactify)
	.bundle()
	.on('error',console.error.bind(console))
	.pipe(source('bundle.js'))
	.pipe(gulp.dest(config.paths.bundle ))
	.pipe(connect.reload());

});
gulp.task('css',function() {
    
     gulp.src(config.paths.css)
     .pipe(concat('bundle.css'))
     .pipe(gulp.dest(config.paths.views + '/css'))

});



gulp.task('watch',function() {
  gulp.watch(config.paths.html,['html']);
  gulp.watch(config.paths.js,['js','lint']);

});

gulp.task('default',['html','js','css','lint','open','watch'],function(){
  var options = {
    
       script : 'server.js',
       env: {
          'PORT':3000

       }
     
  }


});










