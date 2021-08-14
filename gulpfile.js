const { src, dest } = require('gulp');
const webp = require('gulp-webp');
const image = require('gulp-image');
 
function webpImages() {
	return src('img/*')
			.pipe(webp())
			.pipe(dest('build/img/webp'))
}

function minifyImages() {
	return src('img/*')
			.pipe(image())
			.pipe(dest('build/img'))
}

exports.webpImages = webpImages;
exports.minifyImages = minifyImages;