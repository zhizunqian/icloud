var myapp=angular.module("myapp",[]);
/*myapp.filter("search",[function(){
	return function(data,key){
		var xx=function(item){
			for(var i=0;i<item.length;i++){
				if(item[i].title.indexOf(key)!=-1){
					return true;
				}
			}
			return false;
		}
		var r=[];
		for(var i=0;i<data.length;i++){
			if(data[i].name.indexOf(key)!=-1){
				r.push(data[i]);
			}*//*
			var newa=$scope.data[i].items;
				var re=[];
				for(var j=0;j<newa.length;j++){
					if(newa.items)
				}
			if(xx(data[i].items)){
				r.push(data[i]);
			}
		}
		return r;
	}
}])*/
myapp.controller('mycontroll', ['$scope', function($scope){
 	$scope.sjlblist=localStorage.data?JSON.parse(localStorage.data):[];
 	$scope.color=["purple","green","blue","yellow","brown","pink","orange"];
 	$scope.curlistindex=0;
 	$scope.qiehuan=function(index){
 		$scope.curlistindex=index;
 	}
 	$scope.copy=angular.copy($scope.sjlblist);
 	$scope.addsj=function(){
 		var data={
 			name:"新列表"+($scope.sjlblist.length+1),
 			color:$scope.color[$scope.sjlblist.length%7],
 			items:[]
 		}
 		$scope.sjlblist.push(data);
 		localStorage.data=JSON.stringify($scope.sjlblist);
 	}
 	$scope.zz=function(ev){
 		ev.stopPropagation();
 	}
 	// $scope.clear=function(){
 	// 	localStorage.clear();
 	// 	location.reload();
 	// }
 	$scope.delete=function(){
 		var r=[];
 		for(var i=0;i<$scope.sjlblist.length;i++){
 			if(i!=$scope.curlistindex){
 				r.push($scope.sjlblist[i]);
 			}
 		}
 		$scope.sjlblist=r;
 		$scope.curlistindex=0;
 		 localStorage.data=JSON.stringify($scope.sjlblist);
 	}
 	$scope.additem=function(){
 		var cur=$scope.sjlblist[$scope.curlistindex];
 		var data={title:"新条目"+(cur.items.length+1),done:false};
 		cur.items.push(data);
 		 localStorage.data=JSON.stringify($scope.sjlblist);
 	}
 	$scope.deleteitem=function(index){
 		var r=[];
 		var cur=$scope.sjlblist[$scope.curlistindex];
 		for(var i=0;i<cur.items.length;i++){
 			if(i!=index){
 				r.push(cur.items[i]);
 			}
 		}
 		$scope.sjlblist[$scope.curlistindex].items=r;
 		 localStorage.data=JSON.stringify($scope.sjlblist);
 	}
 	$scope.save=function(){
 		 localStorage.data=JSON.stringify($scope.sjlblist);
 	}
 	$scope.cutdone=function(){
 		var lis=$scope.sjlblist[$scope.curlistindex].items;
 		var r=0;
 		for(var i=0;i<lis.length;i++){
 			if(lis[i].done){
 				r+=1;
 			}
 		}
 		return r;
 	}
}])

window.onload=function(){
	var f=true;
	kaiguan.onclick=function(){
		if(f){
			xuanxiang.style.display="block";
			f=false;
		}
		else{
			xuanxiang.style.display="none";
			f=true;
		}
	}
	var xxbtn2=document.querySelector(".xxbtn2");
	xxbtn2.onclick=function(){
			xuanxiang.style.display="none";
	}
}

/*
http://api.map.baidu.com/telematics/v3/weather?location=112.56,37.73&output=json&ak=	F0PsTcEg0F5s0L9ayxio3GTA
http://api.map.baidu.com/telematics/v3/weather?location=112.56,37.73&output=json&ak=LKBmNhKRiG3BfQqFlo6sE8dF*/