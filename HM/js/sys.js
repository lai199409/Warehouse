$(function(){
	var logflag = window.sessionStorage.getItem("logflag");
	if( logflag == "1" ){//出库
		$("#displaylogtable").html("");
		$.ajax({
			type:"post",
			url:"http://127.0.0.1:8080/SSM_HM/outgoingLog",
			async:true,
			dataType:"text",
			success:function(data){
				data = decodeURIComponent(data);
				data = JSON.parse(data);
				console.log(data);
				var datastr = "";
				for(var i=0;i<data.length;i++){
					datastr += "<tr class='info'><td>"+(i+1)+"</td><td>"+data[i]["operation_context"]+"</td><td>"+data[i]["operation_employee"]+"</td><td>"+data[i]["operation_date"]+"</td></tr>";
				}
				$("#displaylogtable").append(datastr);
			}
		});
	}
	
	if( logflag == "2" ){//入库
		$("#displaylogtable").html("");
		$.ajax({
			type:"post",
			url:"http://127.0.0.1:8080/SSM_HM/storageLog",
			async:true,
			dataType:"text",
			success:function(data){
				data = decodeURIComponent(data);
				data = JSON.parse(data);
				console.log(data);
				var datastr = "";
				for(var i=0;i<data.length;i++){
					datastr += "<tr class='info'><td>"+(i+1)+"</td><td>"+data[i]["operation_context"]+"</td><td>"+data[i]["operation_employee"]+"</td><td>"+data[i]["operation_date"]+"</td></tr>";
				}
				$("#displaylogtable").append(datastr);
			}
		});
	}
	
	if( logflag == "3" ){//操作
		$("#displaylogtable").html("");
		$.ajax({
			type:"post",
			url:"http://127.0.0.1:8080/SSM_HM/operationLog",
			async:true,
			dataType:"text",
			success:function(data){
				data = decodeURIComponent(data);
				data = JSON.parse(data);
				console.log(data);
				var datastr = "";
				for(var i=0;i<data.length;i++){
					datastr += "<tr class='info'><td>"+(i+1)+"</td><td>"+data[i]["operation_context"]+"</td><td>"+data[i]["operation_employee"]+"</td><td>"+data[i]["operation_date"]+"</td></tr>";
				}
				$("#displaylogtable").append(datastr);
			}
		});
	}
	
});