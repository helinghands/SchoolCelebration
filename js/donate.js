// 生成订单号
function GetDateNow() {
	var form = document.getElementById("form_submit");
	var vNow = new Date();
	var sNow = "";
	sNow += String(vNow.getFullYear());
	sNow += String(vNow.getMonth() + 1);
	sNow += String(vNow.getDate());
	sNow += String(vNow.getHours());
	sNow += String(vNow.getMinutes());
	sNow += String(vNow.getSeconds());
	sNow += String(vNow.getMilliseconds());
	var x = document.getElementById("WIDRQout_trade_no");
	x.value = sNow;
	// 判断表单数据
	if($("#money").val() == ''){
		$("#money").val('12.8');
	}
	if(typeof($("input:radio[name='relationship']:checked").val()) == 'undefined'){
		$(".relationError").html('<i class="glyphicon glyphicon-warning-sign"><span class="test">请选择与成大的关系</span>');
		$("#username").focus();
	}else if($("input:radio[name='relationship']:checked").val() == 'schoolfellow'){
		if($("#username").val() == ''){
			$("#username").focus();
			$(".nameError").html('<i class="glyphicon glyphicon-warning-sign"><span class="test">姓名不能为空</span>');
		}else if($("#institute").val() == ''){
			$("#institute").focus();
			$(".majorError").empty();
			$(".majorError").empty();
			$('.instituteError').html('<i class="glyphicon glyphicon-warning-sign"><span class="test">院系不能为空</span>');
		}else if($("#major").val() == ''){
			$("#major").focus();
			$(".instituteError").empty();
			$(".gradeError").empty();
			$('.majorError').html('<i class="glyphicon glyphicon-warning-sign"><span class="test">专业不能为空</span>');
		}else if($("#grade").val() == ''){
			$("#grade").focus();
			$(".instituteError").empty();
			$(".majorError").empty();
			$('.gradeError').html('<i class="glyphicon glyphicon-warning-sign"><span class="test">年级不能为空</span>');
		}else if(typeof($("input:radio[name='invoice']:checked").val()) == 'undefined'){
			$('.invoiceError').html('<i class="glyphicon glyphicon-warning-sign"><span class="test">请选择是否要发票</span>');
			$("#phone").focus();
		}else if($("input:radio[name='invoice']:checked").val() == 'yes'){
			if($("#phone").val() == ''){
				$("#phone").focus();
				$('.phoneError').html('<i class="glyphicon glyphicon-warning-sign"><span class="test">请输入11位号码</span>');
			}else if($("#email").val() == ''){
				$("#email").focus();
				$('.emailError').html('<i class="glyphicon glyphicon-warning-sign"><span class="test">邮箱不能为空</span>');
			}else if($("#address").val() == ''){
				$("#address").focus();
				$('.addressError').html('<i class="glyphicon glyphicon-warning-sign"><span class="test">地址不能为空</span>');
			}else{
				// 提交
				form.action = './test.html';
				form.submit();
			}
		}else{
			if($("#phone").val() == ''){
				$("#phone").focus();
				$('.phoneError').html('<i class="glyphicon glyphicon-warning-sign"><span class="test">请输入11位号码</span>');
			}else if($("#email").val() == ''){
				$("#email").focus();
				$('.emailError').html('<i class="glyphicon glyphicon-warning-sign"><span class="test">邮箱不能为空</span>');
			}else{
				// 提交
				form.action = './test.html';
				form.submit();
			}
		}
	}else if($("input:radio[name='relationship']:checked").val() == 'teachingStaff'){
		if($("#username").val() == ''){
			$("#username").focus();
			$(".nameError").html('<i class="glyphicon glyphicon-warning-sign"><span class="test">姓名不能为空</span>');
		}else if(typeof($("input:radio[name='invoice']:checked").val()) == 'undefined'){
			$('.invoiceError').html('<i class="glyphicon glyphicon-warning-sign"><span class="test">请选择是否要发票</span>');
			$("#phone").focus();
		}else if($("input:radio[name='invoice']:checked").val() == 'yes'){
			if($("#phone").val() == ''){
				$("#phone").focus();
				$('.phoneError').html('<i class="glyphicon glyphicon-warning-sign"><span class="test">请输入11位号码</span>');
			}else if($("#email").val() == ''){
				$("#email").focus();
				$('.emailError').html('<i class="glyphicon glyphicon-warning-sign"><span class="test">邮箱不能为空</span>');
			}else if($("#address").val() == ''){
				$("#address").focus();
				$('.addressError').html('<i class="glyphicon glyphicon-warning-sign"><span class="test">地址不能为空</span>');
			}else{
				// 提交
				form.action = './test.html';
				form.submit();
			}
		}else{
			if($("#phone").val() == ''){
				$("#phone").focus();
				$('.phoneError').html('<i class="glyphicon glyphicon-warning-sign"><span class="test">请输入11位号码</span>');
			}else if($("#email").val() == ''){
				$("#email").focus();
				$('.emailError').html('<i class="glyphicon glyphicon-warning-sign"><span class="test">邮箱不能为空</span>');
			}else{
				// 提交
				form.action = './test.html';
				form.submit();
			}
		}
	}else if($("input:radio[name='relationship']:checked").val() == 'anonymous'){
		if(typeof($("input:radio[name='invoice']:checked").val()) == 'undefined'){
			$('.invoiceError').html('<i class="glyphicon glyphicon-warning-sign"><span class="test">请选择是否要发票</span>');
			$("#blessing").focus();
		}else if($("input:radio[name='invoice']:checked").val() == 'yes'){
			if($("#address").val() == ''){
				$("#address").focus();
				$('.addressError').html('<i class="glyphicon glyphicon-warning-sign"><span class="test">地址不能为空</span>');
			}else{
				// 提交
				form.action = './test.html';
				form.submit();
			}
		}else{
			// 提交
			form.action = './test.html';
			form.submit();
		}
	}
}