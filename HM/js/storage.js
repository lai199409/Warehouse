var E = window.wangEditor
var editor = new E('#editor')
// 或者 var editor = new E( document.getElementById('editor') )
editor.create()
$(function(){
	
	$("#storagebtn").click(function(){
		
		var cpmc = $("#cpmcval").val();//产品名称
		var cplx = $("#cplxval").val();//产品类型
		var cpjg = $("#cpjgval").val();//产品价格
		var cptp = $("#cptpval").val();//产品图片
		var rksl = $("#rkslval").val();//入库数量
		var rkms = editor.txt.text();//产品描述
		var user = window.sessionStorage.getItem("username");
		
		if(cplx == "气缸"){
			cplx = "1";
		}
		if(cplx == "电磁阀"){
			cplx = "2";
		}else{
			cplx = "3";
		}

		$.ajax({
			type:"post",
			url:"http://127.0.0.1:8080/SSM_HM/storage_product",
			async:true,
			data:{"category_id":cplx,"product_name":cpmc,"storage_number":rksl,"one_price":cpjg,"storage_employee":user},
			dataType:"text",
			success:function(data){
				data = decodeURIComponent(data);
				if(data==0){
					alert("入库失败");
				}else{
					alert("入库成功");
				}
			}
		});
		
	});
	

});