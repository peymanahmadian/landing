const gulp=require("gulp");
const sass=require("gulp-sass")(require('sass'));
const del=require("del");

gulp.task('styles',()=>{
   return gulp.src("./assets/sass/**/*.scss") 
   .pipe(sass().on('error',sass.logError))
   .pipe(gulp.dest("./public/css/"))
})
gulp.task('clean',()=>{
    return del(['./public/css/main.css'])
})
gulp.task('default',gulp.series(['clean','styles']));
gulp.task('watch',()=>{
    gulp.watch('./assets/sass/**/*.scss',(done)=>{
        gulp.series(['clean','styles'])(done);
    })
})