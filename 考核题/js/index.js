var cloud = document.querySelector('.cloud');
var nav=document.querySelector('.nav')
var lis = nav.querySelectorAll('li');
var curren = 0;

//滑块效果
for (var i = 0; i < lis.length; i++) { 
    lis[i].index = i;
    lis[i].addEventListener('mouseenter', function () { 
        //引用缓动动画
        animate(cloud, this.offsetLeft);
        
    })
    lis[i].addEventListener('mouseleave', function () { 
        animate(cloud, curren);  
    })

    lis[i].addEventListener('click', function () { 
        curren = this.offsetLeft;   
    })
}

//轮播图
var leftbtn = document.querySelector('.last');
var rightbtn = document.querySelector('.next');
var Rotation_plot = document.querySelector('.Rotation-plot');
var ul = Rotation_plot.querySelector('ul');
var ol = Rotation_plot.querySelector('ol');
var pictureWidth = Rotation_plot.offsetWidth;//获取图片大小

Rotation_plot.addEventListener('mouseenter', function () { 
    leftbtn.style.display = 'block';
    rightbtn.style.display = 'block';
    clearInterval(timer);
    timer = null;
})

Rotation_plot.addEventListener('mouseleave', function () { 
    leftbtn.style.display = 'none';
    rightbtn.style.display = 'none';
    timer = setInterval(function () {
        //手动调用点击事件
        rightbtn.click();

    }, 2000)
})

//动态生成ol里的li
for (var i = 0; i < ul.children.length; i++) { 
    var li = document.createElement('li');
    li.setAttribute('data-index', i);//给li添加自定义属性
    ol.appendChild(li);

    li.addEventListener('click', function () { 
        for (var i = 0; i < ol.children.length; i++) { 
            ol.children[i].className = "";
        }
        this.className = "curren";
        
        var index = this.getAttribute('data-index');//获取当前自定义属性
        num = chlis = index;
        var target = index * pictureWidth; //获得移动的大小
        animate(ul, -target);
    })


}

ol.children[0].className = "curren";

var num = 0;
var chlis = 0;
//克隆li
var chlisLi = ul.children[0].cloneNode(true);
ul.appendChild(chlisLi);
function gest() { 
    for (var i = 0; i < ol.children.length; i++) { 
        ol.children[i].className = "";
    }
    ol.children[chlis].className = "curren";
}

rightbtn.addEventListener('click', function () { 

    if (num == ul.children.length-1) { 
        
        ul.style.left = 0;
        num = 0;
    }
    num++;
    animate(ul, -num * pictureWidth);
    chlis++;
    if (chlis == ol.children.length ) { 
        chlis = 0;
    }
    gest()

})

leftbtn.addEventListener('click', function () {
    if (num == 0) {
        num = ul.children.length-1;
        ul.style.left = -num * pictureWidth + "px";
    }
    num--;
    animate(ul,-num * pictureWidth);
    chlis--;
    if (chlis <0) {
        chlis = ol.children.length-1;
    }
    gest()
})

var timer = setInterval(function () {
    //手动调用点击事件
    rightbtn.click();

}, 2000)

var Ul = document.querySelector('.uls');
var a = Ul.querySelectorAll('a');
for (var i = 0; i < a.length; i++) {
    a[i].addEventListener('click', function () { 
        for (var i = 0; i < a.length; i++) {
            a[i].className = "";
        }
        this.className = "border";
    })
    
}
        


