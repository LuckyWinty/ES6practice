//es6写法
let [test1,test2,test3]=[1,2,3];

//es5写法
(function(){
	var test=['test1','test2','test3'];
	var res=[1,2,3];

	for(var i=0;i<test.length;i++){
		if(res[i]){
			test[i]=res[i];
		}else{
			test[i]='undefined';
		}
	}
})()

//例二
//es6写法
let [head, ...tail]=[1,2,3,4,5];

//es5写法
(function(){
	var test=['head','...test2'];
	var res=[1,2,3,4,5];

	for(var i=0;i<test.length;i++){
		if(res[i]){
			if(test[i].indexOf('...')!=-1){
				test[i]=res.slice(i);
			}else{
				test[i]=res[i];
			}
		}else{
			test[i]='undefined';
		}
	}
})()