$(function(){
	var flag = window.sessionStorage.getItem("customerclick");
	
	$("#addcustomer").click(function(){
		var khgsm = $("#khgsmc").val();
		var khlx = $("#custype").val();
		var lxr = $("#lxr").val();
		var lxdh = $("#lxdh").val();
		var khdz = $("#dz").val();
		var sp = $("#sp").val();
		console.log(khgsm+","+khlx+","+lxr+","+lxdh+","+khdz);
		if(khlx == "供应商"){
			$.ajax({
				type:"post",
				url:"http://127.0.0.1:8080/SSM_HM/addsupplier",
				async:true,
				data:{"name":khgsm,"addr":khdz,"tel":lxdh,"pdt":sp,"con":lxr},
				dataType:"text",
				success:function(data){
					console.log(data);
					if(data == "1"){
						alert("添加成功");
					}
				}
			});
		}
		if(khlx == "采购商"){
			$.ajax({
				type:"post",
				url:"http://127.0.0.1:8080/SSM_HM/addpurchaser",
				async:true,
				data:{"name":khgsm,"addr":khdz,"tel":lxdh,"pdt":sp,"con":lxr},
				dataType:"text",
				success:function(data){
					console.log(data);
					if(data == "1"){
						alert("添加成功");
					}
					$("#myModal").modal("hide");
				}
			});
		}
		
		
	});
	
	if(flag == "1"){
		$.ajax({
				type:"post",
				url:"http://127.0.0.1:8080/SSM_HM/allsupplier",
				async:true,
				dataType:"text",
				success:function(data){
					data = decodeURIComponent(data);
					data = JSON.parse(data);
					var customerstr = null;
					
					for(var i=0;i<data.length;i++){
						customerstr += "<tr class='info'><td>"+data[i]["supplier_name"]+"</td><td>"+data[i]["supply_products"]+"</td><td>"+data[i]["supplier_contact"]+"</td><td>"+data[i]["supplier_contact_tel"]+"</td><td>"+data[i]["supplier_address"]+"</td><td><a href='#'>删除</a></td><td style='display: none;'>"+data[i]["id"]+"</td></tr>";
					}
					$("#customertable").append(customerstr);
					
					$("#gys").click(function(){
						$("#cgs").removeClass("active");
						$("#gys").addClass("active");
						$("#customertable").html("");
						$("#customertable").append(customerstr);
					});
					
					$("#cgs").click(function(){
						$("#gys").removeClass("active");
						$("#cgs").addClass("active");
						$("#customertable").html("");
						
						$.ajax({
								type:"post",
								url:"http://127.0.0.1:8080/SSM_HM/allpurchasers",
								async:true,
								dataType:"text",
								success:function(data){
									data = decodeURIComponent(data);
									data = JSON.parse(data);
									var customerstr = null;
									
									for(var i=0;i<data.length;i++){
										customerstr += "<tr class='info'><td>"+data[i]["purchasers_name"]+"</td><td>"+data[i]["purchasers_products"]+"</td><td>"+data[i]["purchasers_contact"]+"</td><td>"+data[i]["purchasers_contact_tel"]+"</td><td>"+data[i]["purchasers_address"]+"</td><td><a href='#'>删除</a></td></tr>";
									}
									$("#customertable").append(customerstr);
					
								}
						});
						
					});
	
				}
		});
	}
	if(flag == "2"){
		$("#gys").removeClass("active");
		$("#cgs").addClass("active");
		$.ajax({
				type:"post",
				url:"http://127.0.0.1:8080/SSM_HM/allpurchasers",
				async:true,
				dataType:"text",
				success:function(data){
					data = decodeURIComponent(data);
					data = JSON.parse(data);
					var customerstr = null;
					
					for(var i=0;i<data.length;i++){
						customerstr += "<tr class='info'><td>"+data[i]["purchasers_name"]+"</td><td>"+data[i]["purchasers_products"]+"</td><td>"+data[i]["purchasers_contact"]+"</td><td>"+data[i]["purchasers_contact_tel"]+"</td><td>"+data[i]["purchasers_address"]+"</td><td><a href='#'>删除</a></td><td style='display: none;'>"+data[i]["id"]+"</td></tr>";
					}
					$("#customertable").append(customerstr);
					
					$("#cgs").click(function(){
						$("#gys").removeClass("active");
						$("#cgs").addClass("active");
						$("#customertable").html("");
						$("#customertable").append(customerstr);
					});
					
					$("#gys").click(function(){
						$("#cgs").removeClass("active");
						$("#gys").addClass("active");
						$("#customertable").html("");
						
						$.ajax({
								type:"post",
								url:"http://127.0.0.1:8080/SSM_HM/allsupplier",
								async:true,
								dataType:"text",
								success:function(data){
									data = decodeURIComponent(data);
									data = JSON.parse(data);
									var customerstr = null;
									
									for(var i=0;i<data.length;i++){
										customerstr += "<tr class='info'><td>"+data[i]["supplier_name"]+"</td><td>"+data[i]["supply_products"]+"</td><td>"+data[i]["supplier_contact"]+"</td><td>"+data[i]["supplier_contact_tel"]+"</td><td>"+data[i]["supplier_address"]+"</td><td><a href='#'>删除</a></td></tr>";
									}
									$("#customertable").append(customerstr);
					
								}
						});
						
					});
	
				}
		});
	}
	
	$("#customertable").on("click","a",function(){
		$(this).parent().parent().remove();
	});
	
	
	
	
	
});