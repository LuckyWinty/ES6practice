// ES6写法
add=numAdd((val1,val2)=>val1+val2);

//es5写法
add=function numAdd(val1,val2){
	return val1+val2;
}


//es6写法
num.forEach((item,index,array)=>{
	if(item>0){
		arr.push(item);
	}
})
//es5写法
num.forEach(function(item,index,array){
	if(item>0){
		arr.push(item);
	}
})


//es6写法
this.num.forEach((item,index,array)=>{
	if(item>0){
		this.arr.push(item);
	}
})
//es5写法
this.num.forEach(function(item,index,array){
	if(item>0){
		this.arr.push(item);
	}
}).bind(this)
//或
var self=this;
this.num.forEach(function(item,index,array){
	if(item>0){
		self.arr.push(item);
	}
})