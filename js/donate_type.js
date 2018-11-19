$(function(){
  	$("#donate_select").change(function(){
  		switch ($(this).children('option:selected').val()) {
  			case '基本建设项目':
  				$("#donate_select2").empty();
  				$("#donate_select2").append('<option value="基本建设基金">基本建设基金</option>');
  				break;
  			case '学生成长项目':
  				$("#donate_select2").empty();
  				$("#donate_select2").append('<option value="奖学金">奖学金</option>');
  				$("#donate_select2").append('<option value="助学金">助学金</option>');
  				$("#donate_select2").append('<option value="创新创业基金">创新创业基金</option>');
  				$("#donate_select2").append('<option value="学生活动基金">学生活动基金</option>');
  				$("#donate_select2").append('<option value="爱心饭卡">爱心饭卡</option>');
  				break;
  			case '教师发展项目':
  				$("#donate_select2").empty();
  				$("#donate_select2").append('<option value="奖教金">奖教金</option>');
  				$("#donate_select2").append('<option value="师资队伍建设基金">师资队伍建设基金</option>');
  				break;
  			case '校园文化建设项目':
  				$("#donate_select2").empty();
  				$("#donate_select2").append('<option value="文娱活动基金">文娱活动基金</option>');
  				$("#donate_select2").append('<option value="文化基础设施基金">文化基础设施基金</option>');
  				$("#donate_select2").append('<option value="文化传播">文化传播</option>');
  				break;
  			case '校友工作项目':
  				$("#donate_select2").empty();
  				$("#donate_select2").append('<option value="校友林">校友林</option>');
  				$("#donate_select2").append('<option value="校友工作基金">校友工作基金</option>');
  				break;
  			case '基金会工作项目':
  				$("#donate_select2").empty();
  				$("#donate_select2").append('<option value="基金工作基金">基金工作基金</option>');
  				break;
  			case '非限定性项目':
  				$("#donate_select2").empty();
  				$("#donate_select2").append('<option value="非限定性基金">非限定性基金</option>');
  				break;
  			case '校友年度捐赠':
  				$("#donate_select2").empty();
  				$("#donate_select2").append('<option value="校友年度捐赠">校友年度捐赠</option>');
  				break;
  			case '其他捐赠项目':
  				$("#donate_select2").empty();
  				$("#donate_select2").append('<option value="微基金">微基金</option>');
  				break;
  		}

  	});
 });