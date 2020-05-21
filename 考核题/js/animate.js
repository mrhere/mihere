// JavaScript Document
function animate(obj, target) {
		clearInterval(obj.timer);
		obj.timer=setInterval(function(){
			//步长值
			var step=(target-obj.offsetLeft)/10;
			//有小数时让step为整数 不然位置会不准
			step=step>0  ?Math.ceil (step) : Math.floor(step);
			
			
			obj.style.left = obj.offsetLeft + step + "px";
			
			
		 
		}, 30);
	}