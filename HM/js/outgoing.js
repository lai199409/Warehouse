$(function(){
	$("#ckcplx").change(function(){
		var cplx = $("#ckcplx").val();
		$("#ckbtn").removeAttr("disabled");
	});
	
	
	$("#ckbtn").click(function(){
		var ckcplx= $("#ckcplx").val();//类型
		var ckmc = $("#ckcpmc").val();//出库名称
		var ckjg = $("#ckjg").val();//出库价格
		var cgsl = $("#chsl").val();//出库数量
		var cggs = $("#cggs").val();//采购公司
		var user = window.sessionStorage.getItem("username");
		
		if(ckcplx == "气缸"){
			ckcplx = "1";
		}
		if(ckcplx == "电磁阀"){
			ckcplx = "2";
		}else{
			ckcplx = "3";
		}
		console.log(ckcplx+","+ckmc+","+ckjg+","+cgsl+","+cggs);
		//category_id  product_name  outgoing_number  one_price  outgoing_employee
		$.ajax({
			type:"post",
			url:"http://127.0.0.1:8080/SSM_HM/outgoing_product",
			async:true,
			data:{"category_id":ckcplx,"product_name":ckmc,"outgoing_number":cgsl,"one_price":ckjg,"outgoing_employee":user},
			dataType:"text",
			success:function(data){
				if(data==0){
					alert("出库失败");
				}else{
					alert("出库成功");
				}
			}
		});
		
	});
	
});