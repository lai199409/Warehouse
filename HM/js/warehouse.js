$(function(){
	var dianchifastr = null;
	var mifengjianstr = null;
	var qigangstr = null;
	
	$.ajax({
			type:"post",
			url:"http://127.0.0.1:8080/SSM_HM/countproduct",
			async:true,
			dataType:"text",
			success:function(data){
				data = decodeURIComponent(data);
				data = JSON.parse(data);
				//console.log(data[0]);//data[0]气缸;data[1]密封件;data[2]电磁阀
				for(var i=0;i<data[0].length;i++){
						var typename = data[0][i]["category_id"];
						if( typename == "1" ){
							typename = "气缸";
						}else if( typename == "2" ){
							typename = "电磁阀";
						}else if( typename == "3" ){
							typename = "密封件";
						}
						qigangstr += "<tr class='info'><td style='display: none;'>"+data[0][i]["id"]+"</td><td>"+data[0][i]["product_name"]+"</td><td>"+typename+"</td><td>"+data[0][i]["product_number"]+"</td><td>"+data[0][i]["product_price"]+"</td><td><a href='#'><i class='glyphicon glyphicon-search'></i>查看</a></td><td style='display: none;'>"+"</td></tr>";
				}
				for(var i=0;i<data[1].length;i++){
						var typename = data[1][i]["category_id"];
						if( typename == "1" ){
							typename = "气缸";
						}else if( typename == "2" ){
							typename = "电磁阀";
						}else if( typename == "3" ){
							typename = "密封件";
						}
						mifengjianstr += "<tr class='info'><td style='display: none;'>"+data[1][i]["id"]+"</td><td>"+data[1][i]["product_name"]+"</td><td>"+typename+"</td><td>"+data[1][i]["product_number"]+"</td><td>"+data[1][i]["product_price"]+"</td><td><a href='#'><i class='glyphicon glyphicon-search'></i>查看</a></td><td style='display: none;'>"+"</td></tr>";
				}
				for(var i=0;i<data[2].length;i++){
						var typename = data[2][i]["category_id"];
						if( typename == "1" ){
							typename = "气缸";
						}else if( typename == "2" ){
							typename = "电磁阀";
						}else if( typename == "3" ){
							typename = "密封件";
						}
						dianchifastr += "<tr class='info'><td style='display: none;'>"+data[2][i]["id"]+"</td><td>"+data[2][i]["product_name"]+"</td><td>"+typename+"</td><td>"+data[2][i]["product_number"]+"</td><td>"+data[2][i]["product_price"]+"</td><td><a href='#'><i class='glyphicon glyphicon-search'></i>查看</a></td><td style='display: none;'>"+"</td></tr>";
				}
				$("#displaytable").append(qigangstr);
				
				$("#qigang").click(function(){
					$("#mifengjian").removeClass("active");
					$("#dianchifa").removeClass("active");
					$("#qigang").addClass("active");
					$("#displaytable").html("");
					$("#displaytable").append(qigangstr);
				});
				$("#mifengjian").click(function(){
					$("#qigang").removeClass("active");
					$("#dianchifa").removeClass("active");
					$("#mifengjian").addClass("active");
					$("#displaytable").html("");
					$("#displaytable").append(mifengjianstr);
				});
				$("#dianchifa").click(function(){
					$("#mifengjian").removeClass("active");
					$("#qigang").removeClass("active");
					$("#dianchifa").addClass("active");
					$("#displaytable").html("");
					$("#displaytable").append(dianchifastr);
				});
			}
	});
	
	$.ajax({
			type:"post",
			url:"http://127.0.0.1:8080/SSM_HM//classiftproduct",
			async:true,
			dataType:"text",
			success:function(data){
				data = decodeURIComponent(data);
				data = JSON.parse(data);
				//console.log(data);
				var classstr = null;
				
				for(var i=0;i<data.length;i++){
					classstr += "<tr class='info'><td>"+data[i]["product_category"]+"</td><td>"+data[i]["category_id"]+"</td><td>"+data[i]["id"]+"</td><td><a href='#'>删除</a></td><td style='display: none;'>"+"</td></tr>";
				}
				$("#classtable").append(classstr);
				
				$("#classtable").on("click","a",function(e){
					console.log($(this).parent().parent().remove());
				});
			}
	});
	
	
	$("#addclass").click(function(){
		var classname = $("#classname").val();
		var classid = $("#classid").val();
		
		$.ajax({
				type:"post",
				url:"http://127.0.0.1:8080/SSM_HM/addClass",
				async:true,
				data:{"classname":classname,"classid":classid},
				dataType:"text",
				success:function(data){
					console.log(data);
					if(data == "1"){
						alert("添加成功");
					}
					$("#myModal").modal("hide");
				}
		});
	});
	
});