require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

//获取图片相关的数据,
var  imageDatas = require('../data/imageDates.json');
//利用自执行函数,将图片名信息转成图片URL路劲信息
imageDatas = (function getImageURL(imageDatasArr){
	for(var i =0,j = imageDatas.length; i < j; i++){
		var singleImageData = imageDatas[i];
		singleImageData.imageUrl = require('../images/'+ singleImageData.fileName);
		imageDatasArr[i] = singleImageData;
	}
	return imageDatasArr;
})(imageDatas);

class AppComponent extends React.Component {
  render() {
    return (
    	<section className="stage">
    		<section className="img-sec">
    		</section>
    		<nav className="controller-nav">
    		</nav>
    	</section>
    )
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
