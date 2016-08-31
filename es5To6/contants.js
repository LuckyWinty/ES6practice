// ES6写法
const PI = 3.141593
PI > 3.0

//es5写法
Object.defineProperty(typeof global==='object'?global:window,'PI',{
	value:3.141493,
	enumberable:true,
	writable:false,
	configurable:false
})
