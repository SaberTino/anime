<?php
  //功能:查询所有产品信息并且返回json数据
  //1：修改响应头格式json
  //2: 连接数据库
  //3: 设置编码
  require("init.php");
  //4:获取参数pno 当前页码
  @$pno = $_REQUEST["pno"];
  //5:如果当前页码参数不存在则显示第一页
  if(!$pno){
    $pno = 1;
  }else{
    $pno = intval($pno);//将字符串数据转换整数js parseInt()
  }
  //6:创建数组  拼装返回结果
  //总记录数  总页数  当前页  当前页数据
  $pageSize = 4;
  $output = ["recodeCount"=>0,     //满足条件的总记录数
            "pageCount"=>0,        //总页数
            "pno"=>$pno,           //当前数据所有页码
            "data"=>null,          //当前页中的数据
            "pageSize"=>$pageSize, //每个页大小
            ];
 //7:查询总记录数与总页  一行记录
 $sql = "SELECT COUNT(*) FROM lsj_list";
 $result = mysqli_query($conn,$sql);
 $row = mysqli_fetch_row($result);
 //下标0为索引数组,表示总记录数
 $output["recodeCount"]=intval($row[0]);
//向上取整,总记录/每页几条记录=总页数
 $output["pageCount"]=ceil($output["recodeCount"]/$output["pageSize"]);
 
 //8:查询当前页的内容
 //由于下标从0开始,则当前页要减1
 $start = ($output["pno"]-1)*$output["pageSize"];
 $count = $output["pageSize"];
 /*若为取多值,可进行以下操作,先取别名,再拼接,最后跨表查询*/
// $sql  .= " FROM lsj_laptop_family f, xz_laptop l, xz_laptop_pic p";
   $sql  = "SELECT l.lid,l.title,l.area,l.year,l.sing,l.play,l.look,l.introduce,l.src";
   $sql  .= " FROM lsj_list l";
// $sql  .= " WHERE l.lid=p.laptop_id AND l.family_id = f.fid";
 //$sql  .= " GROUP BY l.lid";
   $sql  .= "  LIMIT $start,$count";
 $result = mysqli_query($conn,$sql);
 $rows = mysqli_fetch_all($result,MYSQLI_ASSOC);
 $output["data"]=$rows;
 //最后一步
 echo json_encode($output);
?>