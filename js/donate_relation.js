$(function(){
	$(".relationship").click(function(){
		$(this).attr('checked','checked');
		$(".relationError").css({
			display:'none'
		});
		if($("input:radio[name='invoice']:checked").val() != ''){
			if($("input:radio[name='invoice']:checked").val() == 'yes'){
				switch ($(this).val()) {
					case 'schoolfellow':
						// statements_1
						$(".schoolfellow").css({
							display:'block'
						});
						$(".teachingStaff").css({
				   			display: 'none'
				   		});
				   		$(".other").css({
				   			display: 'block'
				   		});
				   		$(".address").css({
				   			display:'block'
				   		});
						$(".donate-content-item2").css({
							height:'1080px'
						});
						$(".content-item2-left").css({
							height:'1065px'
						});
						$(".div-group").css({
							height:'1045px'
						});
						break;
					case 'teachingStaff':
						// statements_1
						$(".schoolfellow").css({
							display:'none'
						});
						$(".teachingStaff").css({
				   			display: 'block'
				   		});
				   		$(".other").css({
				   			display: 'block'
				   		});
				   		$(".address").css({
				   			display:'block'
				   		});
						$(".donate-content-item2").css({
							height:'930px'
						});
						$(".content-item2-left").css({
							height:'915px'
						});
						$(".div-group").css({
							height:'895px'
						});
						break;
					case 'anonymous':
						$(".schoolfellow").css({
							display:'none'
						});
						$(".teachingStaff").css({
				   			display: 'none'
				   		});
				   		$(".address").css({
				   			display:'block'
				   		});
				   		$(".anonymous").css({
				   			display: 'none'
				   		});
				   		$(".address").css({
				   			display:'block'
				   		})
						$(".donate-content-item2").css({
							height:'630px'
						});
						$(".content-item2-left").css({
							height:'615px'
						});
						$(".div-group").css({
							height:'635px'
						});
						break;
				}
			}else{
				switch ($(this).val()) {
					case 'schoolfellow':
						// statements_1
						$(".schoolfellow").css({
							display:'block'
						});
						$(".teachingStaff").css({
				   			display: 'none'
				   		});
				   		$(".other").css({
				   			display: 'block'
				   		});
				   		$(".address").css({
				   			display:'none'
				   		})
						$(".donate-content-item2").css({
							height:'1005px'
						});
						$(".content-item2-left").css({
							height:'990px'
						});
						$(".div-group").css({
							height:'970px'
						});
						break;
					case 'teachingStaff':
						// statements_1
						$(".schoolfellow").css({
							display:'none'
						});
						$(".teachingStaff").css({
				   			display: 'block'
				   		});
				   		$(".other").css({
				   			display: 'block'
				   		});
				   		$(".address").css({
				   			display:'none'
				   		});
						$(".donate-content-item2").css({
							height:'855px'
						});
						$(".content-item2-left").css({
							height:'840px'
						});
						$(".div-group").css({
							height:'820px'
						});
						break;
					case 'anonymous':
						// statements_1
						$(".schoolfellow").css({
							display:'none'
						});
						$(".teachingStaff").css({
				   			display: 'none'
				   		});
				   		$(".address").css({
				   			display:'none'
				   		});
				   		$(".anonymous").css({
				   			display: 'none'
				   		});
				   		$(".address").css({
				   			display:'none'
				   		})
						$(".donate-content-item2").css({
							height:'555px'
						});
						$(".content-item2-left").css({
							height:'540px'
						});
						$(".div-group").css({
							height:'520px'
						});
						break;
				}
			}
		}else{
			switch ($(this).val()) {
				case 'schoolfellow':
					// statements_1
					$(".schoolfellow").css({
						display:'block'
					});
					$(".teachingStaff").css({
			   			display: 'none'
			   		});
			   		$(".other").css({
			   			display: 'block'
			   		});
			   		$(".address").css({
			   			display:'none'
			   		})
					$(".donate-content-item2").css({
						height:'1005px'
					});
					$(".content-item2-left").css({
						height:'990px'
					});
					$(".div-group").css({
						height:'970px'
					});
					break;
				case 'teachingStaff':
					// statements_1
					$(".schoolfellow").css({
						display:'none'
					});
					$(".teachingStaff").css({
			   			display: 'block'
			   		});
			   		$(".other").css({
			   			display: 'block'
			   		});
			   		$(".address").css({
			   			display:'none'
			   		});
					$(".donate-content-item2").css({
						height:'855px'
					});
					$(".content-item2-left").css({
						height:'840px'
					});
					$(".div-group").css({
						height:'820px'
					});
					break;
				case 'anonymous':
					// statements_1
					$(".schoolfellow").css({
						display:'none'
					});
					$(".teachingStaff").css({
			   			display: 'none'
			   		});
			   		$(".address").css({
			   			display:'none'
			   		});
			   		$(".anonymous").css({
			   			display: 'none'
			   		});
			   		$(".address").css({
			   			display:'block'
			   		})
					$(".donate-content-item2").css({
						height:'555px'
					});
					$(".content-item2-left").css({
						height:'540px'
					});
					$(".div-group").css({
						height:'520px'
					});
					break;
			}
		}
	});
	$(".invoice").click(function(){
		// alert($("input:radio[name='relationship']:checked").val());
		$(".invoiceError").css({
			display:'none'
		});
		$(this).attr('checked','checked');
		switch ($("input:radio[name='relationship']:checked").val()) {
			case 'schoolfellow':
				// statements_1
				switch ($(this).val()) {
					case 'yes':
						// statements_1
						$(".schoolfellow").css({
							display:'block'
						});
						$(".teachingStaff").css({
				   			display: 'none'
				   		});
				   		$(".other").css({
				   			display: 'block'
				   		});
				   		$(".address").css({
				   			display:'block'
				   		});
						$(".donate-content-item2").css({
							height:'1080px'
						});
						$(".content-item2-left").css({
							height:'1065px'
						});
						$(".div-group").css({
							height:'1045px'
						});
						break;
					case 'no':
						// statements_1
						$(".schoolfellow").css({
							display:'block'
						});
						$(".teachingStaff").css({
				   			display: 'none'
				   		});
				   		$(".other").css({
				   			display: 'block'
				   		});
				   		$(".address").css({
				   			display:'none'
				   		})
						$(".donate-content-item2").css({
							height:'1005px'
						});
						$(".content-item2-left").css({
							height:'990px'
						});
						$(".div-group").css({
							height:'970px'
						});
						break;
				}
				break;
			case 'teachingStaff':
				// statements_1
				switch ($(this).val()) {
					case 'yes':
						// statements_1
						$(".schoolfellow").css({
							display:'none'
						});
						$(".teachingStaff").css({
				   			display: 'block'
				   		});
				   		$(".other").css({
				   			display: 'block'
				   		});
				   		$(".address").css({
				   			display:'block'
				   		});
						$(".donate-content-item2").css({
							height:'930px'
						});
						$(".content-item2-left").css({
							height:'915px'
						});
						$(".div-group").css({
							height:'895px'
						});
						break;
					case 'no':
						// statements_1
						$(".schoolfellow").css({
							display:'none'
						});
						$(".teachingStaff").css({
				   			display: 'block'
				   		});
				   		$(".other").css({
				   			display: 'block'
				   		});
				   		$(".address").css({
				   			display:'none'
				   		});
						$(".donate-content-item2").css({
							height:'855px'
						});
						$(".content-item2-left").css({
							height:'840px'
						});
						$(".div-group").css({
							height:'820px'
						});
						break;
				}
				break;
			case 'anonymous':
				// statements_1
				switch ($(this).val()) {
					case 'yes':
						// statements_1
						$(".schoolfellow").css({
							display:'none'
						});
						$(".teachingStaff").css({
				   			display: 'none'
				   		});
				   		$(".address").css({
				   			display:'block'
				   		});
				   		$(".anonymous").css({
				   			display: 'none'
				   		});
				   		$(".address").css({
				   			display:'block'
				   		})
						$(".donate-content-item2").css({
							height:'630px'
						});
						$(".content-item2-left").css({
							height:'615px'
						});
						$(".div-group").css({
							height:'635px'
						});
						break;
					case 'no':
						// statements_1
						$(".schoolfellow").css({
							display:'none'
						});
						$(".teachingStaff").css({
				   			display: 'none'
				   		});
				   		$(".address").css({
				   			display:'none'
				   		});
				   		$(".anonymous").css({
				   			display: 'none'
				   		});
				   		$(".address").css({
				   			display:'none'
				   		})
						$(".donate-content-item2").css({
							height:'555px'
						});
						$(".content-item2-left").css({
							height:'540px'
						});
						$(".div-group").css({
							height:'520px'
						});
						break;
				}
				break;
			default:
				switch ($(this).val()) {
					case 'yes':
						// statements_1
						$(".address").css({
							display:'block'
						});
						$(".donate-content-item2").css({
							height:'855px'
						});
						$(".content-item2-left").css({
							height:'840px'
						});
						$(".div-group").css({
							height:'820px'
						});
						break;
					default:
						// statements_def
						$(".address").css({
							display:'none'
						});
						$(".donate-content-item2").css({
							height:'780px'
						});
						$(".content-item2-left").css({
							height:'765px'
						});
						$(".div-group").css({
							height:'745px'
						});
						break;
				}
				break;
		}
	});
});