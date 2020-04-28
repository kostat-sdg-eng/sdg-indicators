---
title: <!--간행물-->
layoumlink: /publications/
layout: page
---

### 국내 보고서

<br/>
<div align="center">
<div align="center" style="width:100%; height: 300px; border: 0px solid orange; font-weight: bold; ">

<table border="0" style="width:98%; height: 235px;">
  <tr style="height: 200px;">
  <td align="center">
  <a href="https://kostat-sdg-kor.github.io/sdg-indicators/public/report/1.pdf">
  <img style="border:1px solid black; border-radius : 5px 5px 5px 5px; width:150px; height:215px;" src="https://kostat-sdg-kor.github.io/sdg-indicators/public/report/1.png" alt="1"/>  
  </a>
  
 </td>

  <td align="center">
  <a href="https://kostat-sdg-kor.github.io/sdg-indicators/public/report/2.pdf">
    <img style="border:1px solid black; border-radius : 5px 5px 5px 5px; width:150px; height:215px;"  src="https://kostat-sdg-kor.github.io/sdg-indicators/public/report/2.png" alt="2"/>    
    </a>  
  </td>
  
  <td align="center">
  <a href="https://kostat-sdg-kor.github.io/sdg-indicators/public/report/3.pdf">
    <img style="border:1px solid black; border-radius : 5px 5px 5px 5px; width:150px; height:215px;"  src="https://kostat-sdg-kor.github.io/sdg-indicators/public/report/3.png" alt="3"/>    
    </a>        
  </td>

  <td align="center">
  <a href="https://kostat-sdg-kor.github.io/sdg-indicators/public/report/4.pdf">  
    <img style="border:1px solid black; border-radius : 5px 5px 5px 5px; width:150px; height:215px;"  src="https://kostat-sdg-kor.github.io/sdg-indicators/public/report/4.png" alt="4"/>    
    </a>       
  </td>


  </tr>
  <tr>
  <td align="center">
  <div style="width:93%;">
   (통계개발원) 글로벌 렌즈로 본 한국의 SDGs 데이터와 이행현황
   </div>
  </td>
  <td align="center">  
  <div style="width:93%;">
   (Statistics Research Institute) SDGs in the ROK Progress Report  2019
   </div>
  </td>
  <td align="center">
  <div style="width:93%;">
  (Statistics Research Institute) SDGs in the ROK Progress Report  2019
  </div>
  </td>
  <td align="center">
  <div style="width:93%;">
   (ESCAP) ASIA AND THE PACIFIC SDG PROGRESS REPORT 2020
   </div>
  </td>  
  </tr>
  
</table>

</div>
</div>




















<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script>
//    페이지 로드 시 페이징 처리
   $(document).ready(function(){
      contentShow();
      createPage();
      
   });

   var isSearch = false;
   
   function contentShow(){
      var content = $(".content");
      for(var i=0; i < content.length; i++){
         if(i < 6){
            content.eq(i).css("display", "table-row");
         }else{
            content.eq(i).css("display", "none");
         }
      }
   }
   
   function createPage(){
      $(".pagination").remove();
      $(".page_form").append("<ul class='pagination'></ul>");
      var content = $(".content");
      
      var liCount = Math.ceil(content.length/6);
      for(var i=1; i <= liCount; i++){
         if(i==1){
            $(".pagination").append("<li onclick='changePage(this.innerHTML)' class='on'>"+i+"</li>");
         }else{
            $(".pagination").append("<li onclick='changePage(this.innerHTML)'>"+i+"</li>");
         }
      }
   }
   
//    검색 기능
   function search(){
      isSearch = true;
      var value = $(".srh_input").val();
      var title = $(".title");
      
      for(var i=0; i < title.length; i++){
         $(".content").eq(i).attr("class", "content");
         $(".content").eq(i).css("display", "none");
         
         if(title[i].innerHTML.indexOf(value) != -1){
            $(".content").eq(i).attr("class", "content isSearch");
         }
      }
      
      searchShow();
      searchPage();
   }
   
   function searchShow(){
      var content = $(".isSearch");
      var count = 0;
      while(count < 6){
         if(content.length == count){
            break;
         }else{
            content.eq(count).css("display", "table-row");
            count++;
         }
      }
      
   }
   
   function searchPage(){
      $(".pagination").remove();
      $(".page_form").append("<ul class='pagination'></ul>");
      
      var content = $(".isSearch");
      
      var liCount = Math.ceil(content.length/6);
      
      for(var i=1; i <= liCount; i++){
         if(i==1){
            $(".pagination").append("<li onclick='changePage(this.innerHTML)' class='on'>"+i+"</li>");
         }else{
            $(".pagination").append("<li onclick='changePage(this.innerHTML)'>"+i+"</li>");
         }
      }
      
      $(".report1_btn").css("background", "gray");
      $(".report2_btn").css("background", "gray");
      $(".report3_btn").css("background", "gray");
   }
   
//    페이징 처리
   function changePage(index){
      if(isSearch){
         var content = $(".isSearch");
         
         for(var i=0; i < content.length; i++){
            if(i >= 6*(index-1) && i < 6*index){
               content.eq(i).css("display", "table-row");
            }else{
               content.eq(i).css("display", "none");
            }
         }
         $(".on").attr("class", "");
         $("li").eq(index-1).attr("class", "on");
         
      }else{
         var content = $(".content");
         for(var i=0; i < content.length; i++){
            if(i >= 6*(index-1) && i < 6*index){
               content.eq(i).css("display", "table-row");
            }else{
               content.eq(i).css("display", "none");
            }
         }
         $(".on").attr("class", "");
         $("li").eq(index-1).attr("class", "on");
      }
      
   }
   
   function reportView(item){
      isSearch = true;
      var content = $(".content");
      for(var i=0; i < content.length; i++){
         content.eq(i).attr("class", "content");
         content.eq(i).css("display", "none");
      }
      
      var report = $("."+item);
      
      for(var i=0; i < report.length; i++){
         var parent = report[i].parentNode;
         parent.className = "content isSearch";
      }
      
      searchShow();
      searchPage();
      
      $(".report1_btn").css("background", "gray");
      $(".report2_btn").css("background", "gray");
      $(".report3_btn").css("background", "gray");
      
      var click_btn = $("."+item+"_btn");
      
      click_btn.css("background", "#5D5D5D");
   }
</script>






<style>
/*  공통 */
   body { padding:0; margin:0; }
/*    상단 제목검색 및 버튼 CSS */
   input[type=button]:hover { background:#5D5D5D; transition : all ease 0.5s 0s; cursor:pointer; }
   input[type=button]:visited { background:#5D5D5D; }
   
   .search_form { text-align : center; width:100%; height: 100px;   background : #BDBDBD; }
   


   .search_form .search_div { display : inline-block; width : 400px; background : #ffffff; margin-top : 30px; }
   .search_form .search_div .srh_input { font-size : 16px; width: 325px; height : 100%; padding : 10px; margin : 0px; border: 0px; outline : none; float:left; vertical-align: middle;}
   .search_form .search_div .srh_btn {   width: 50px; height: 40px; border: 0px; background : #FF4848; outline : none; color: #ffffff; float:right; margin:0px;   }
    
    .search_form .report_div { display : inline-block; width : 450px; height: 40px; background : #BDBDBD; margin-top : 30px; }
    .search_form .report1_btn, .report2_btn, .report3_btn { font-size:10pt; height: 40px; outline : none; background : gray; border : 0px; float: right; color : #ffffff; margin-right : 10px; }
    
    
/*  하단 게시판 CSS  */
   .board_form { margin : 4% 5% 0;}
   .board_form .board_table { width : 100%; border-collapse : collapse; border-bottom : 1px solid black; }
   .board_form .board_table .board_title { border-top : 2px solid black; border-bottom : 1px solid black;}
   .board_form .board_table tr:not(:first-child) { border-top : 1px dotted black; }
   .board_form .board_table tr:last-child { border-bottom : 1px solid black; }
   .board_form .board_table tr { height : 50px;}
   .board_form .board_table .board_title th { text-align : center; }
   .board_form .board_table tr td:nth-child(1) { padding-left : 10px; }
   .board_form .board_table tr td:nth-child(2), td:nth-child(3) { text-align : center; }
   
/*  하단 페이징 CSS  */   
   .board_form .page_form { text-align : center; vertical-align: middle; }
   .board_form .page_form .pagination { list-style: none; font-size:12pt; }
   .board_form .page_form .pagination li { display : inline-block; cursor : pointer; padding:0 9px 2px; margin:0 5px; border: 1px solid #BDBDBD; border-radius : 50px 50px 50px 50px; }
   .board_form .page_form .pagination li:hover { background:#6799FF; transition : all ease 0.5s 0s; color : #ffffff; }
   
   .on { background:#6799FF; color:#ffffff; }
</style>





   <div class="search_form">
      <div class="search_div">
         <input type="text" class="srh_input" name="search_input" placeholder="제목검색"/>
         <input type="button" class="srh_btn" name="search_button" value="검색" onclick="search();"/>
            
         
      </div>
      <div class="report_div">
         <input type="button" class="report3_btn" onclick="reportView('report3');" name="report3" value="국외 보고서"/>      
         <input type="button" class="report2_btn" onclick="reportView('report2');" name="report2" value="국내관계기관 보고서"/>
         <input type="button" class="report1_btn" onclick="reportView('report1');" name="report1" value="통계개발원 보고서"/>
      </div>
   </div>
   <div class="board_form">
      <table class="board_table">
         <tr class="board_title">
            <th width="60%">제목</th>
            <th width="30%">기관</th>
            <th width="10%">발간년도</th>
         </tr>
         <tr class="content">
            <td class="title">한국의 SDGs 데이터와 이행현황</td>
            <td class="report1">통계청 통계개발원</td>
            <td>2019</td>
         </tr>
         <tr class="content">
            <td class="title">2019 국가 지속가능발전목표(K-SDGs) 수립보고서</td>
            <td class="report2">환경부 지속가능발전위원회</td>
            <td>2019</td>
         </tr>
         <tr class="content">
            <td class="title">지속가능발전목표(SDGs)국내 대응전략 수립 연구 보고서</td>
            <td class="report2">한국환경정책평가연구원</td>
            <td>2014</td>
         </tr>
         <tr class="content">
            <td class="title">UN 지속가능발전목표(UN SDGs)와 문화정책의 대응 방안</td>
            <td class="report2">한국문화관광연구원</td>
            <td>2017</td>
         </tr>
         <tr class="content">
            <td class="title">SDGs와 한반도 평화</td>
            <td class="report3">유네스코한국위원회</td>
            <td>2018</td>
         </tr>
         <tr class="content">
            <td class="title">유네스코 SDG 국제교육협력 포럼 자료집</td>
            <td class="report3">유네스코한국위원회</td>
            <td>2015</td>
         </tr>
         <tr class="content">
            <td class="title">SDGs 연계 성과프레임워크 수립 및 활용방안</td>
            <td class="report2">한국국제협력단</td>
            <td>2017</td>
         </tr>
         <tr class="content">
            <td class="title">지속가능발전목표(SDGs) 이행 실태 분석 및 개선방안 연구</td>
            <td class="report2">한국행정연구원</td>
            <td>2017</td>
         </tr>
         <tr class="content">
            <td class="title">SDGs 도입 이후 개도국 협력전략과 대응과제: 무역과 기후변화의 정책일관성을 중심으로</td>
            <td class="report2">대외경제정책연구원</td>
            <td>2016</td>
         </tr>
         <tr class="content">
            <td class="title">한·중 유엔 지속가능발전목표(SDGs) 이행 비교 및 협력방안</td>
            <td class="report2">한국대외경제정책연구원</td>
            <td>2018</td>
         </tr>
         <tr class="content">
            <td class="title">SDGs 시대, 공유가치창출(CSV)과 비즈니스기회: 신흥국 진출 전략</td>
            <td class="report2">대한무역투자진흥공사</td>
            <td>2017</td>
         </tr>
         <tr class="content">
            <td class="title">유네스코 인문사회 자연과학분야 지속가능발전목표 국내 이행 방안 연구</td>
            <td class="report3">유네스코한국위원회</td>
            <td>2017</td>
         </tr>
         <tr class="content">
            <td class="title">지속가능발전목표(SDGs) 달성을 위한 청소년 삶의 질 실태 및 지원방안 연구</td>
            <td class="report2">한국청소년정책연구원</td>
            <td>2016</td>
         </tr>
         <tr class="content">
            <td class="title">한국의 SDG4 이행 현황 연구</td>
            <td class="report1">한국교육개발원</td>
            <td>2019</td>
         </tr>
         <tr class="content">
            <td class="title">포용성 증진을 위한 교육과 도시</td>
            <td class="report3">유네스코한국위원회</td>
            <td>2019</td>
         </tr>
         <tr class="content">
            <td class="title">SDG4-교육2030 포용성과 교육에 관한 연구 보고서</td>
            <td class="report1 report3">유네스코한국위원회, 한국교육개발원</td>
            <td>2019</td>
         </tr>
         <tr class="content">
            <td class="title">지속가능한 사회를 꿈꾸는 교육</td>
            <td class="report1 report3">유네스코한국위원회, 한국교육개발원</td>
            <td>2018</td>
         </tr>
         <tr class="content">
            <td class="title">문답으로 풀어보는 지속가능발전목표(SDG)4 교육 2030</td>
            <td class="report3">유네스코한국위원회</td>
            <td>2018</td>
         </tr>
         <tr class="content">
            <td class="title">2030 지속가능개발목표(SDGs)실천 방안 연구:교육 분야를 중심으로</td>
            <td class="report1">한국교육개발원</td>
            <td>2016</td>
         </tr>
         <tr class="content">
            <td class="title">지속가능발전목표(SDGs) 내 성평등 관련 지표의 국내이행 현황 및 정책과제</td>
            <td class="report2">한국여성정책연구원</td>
            <td>2018</td>
         </tr>
         <tr class="content">
            <td class="title">지속가능발전목표(SDGs) 관련, 한국 및 Kwater의 대응전략 연구</td>
            <td class="report2">한국수자원공사</td>
            <td>2017</td>
         </tr>
         <tr class="content">
            <td class="title">SDGs 관점의 물인권 지원을 위한 한국의 ODA 전략방향 연구</td>
            <td class="report2">한국환경정책평가연구원</td>
            <td>2014</td>
         </tr>
         <tr class="content">
            <td class="title">우리의 지속가능한 에너지(SDG 7)</td>
            <td class="report3">유네스코한국위원회</td>
            <td>2017</td>
         </tr>
         <tr class="content">
            <td class="title">자원순환분야 지속가능발전목표(SDGs) 이행 기반 마련을 위한 기초연구</td>
            <td class="report2">한국환경정책평가연구원</td>
            <td>2015</td>
         </tr>
         <tr class="content">
            <td class="title">지속가능발전목표(SDGs) 대비 건축·도시분야 대응방향 연구</td>
            <td class="report2">건축공간도시연구소</td>
            <td>2016</td>
         </tr>
         <tr class="content">
            <td class="title">우리의 지속가능한 도시(SDG 11)</td>
            <td class="report3">유네스코한국위원회</td>
            <td>2017</td>
         </tr>
         <tr class="content">
            <td class="title">우리의 지속가능한 해양</td>
            <td class="report3">한국유네스코위원회</td>
            <td>2019</td>
         </tr>
         <tr class="content">
            <td class="title">우리의 지속가능한 생물다양성</td>
            <td class="report3">유네스코한국위원회</td>
            <td>2018</td>
         </tr>
         <tr class="content">
            <td class="title">국내 보호지역의 UN SDGs 이행전략 수립 연구</td>
            <td class="report2">국립공원연구원</td>
            <td>2017</td>
         </tr>
         <tr class="content">
            <td class="title">토지환경 분야의 지속가능발전목표(SDGs) 이행을 위한 정책 방향</td>
            <td class="report2">한국환경정책평가연구원</td>
            <td>2016</td>
         </tr>
         <tr class="content">
            <td class="title">SDG16(평화) 논의 및 이행현황 분석: 한국과 국제기구를 중심으로</td>
            <td class="report2">한국국제협력단</td>
            <td>2019</td>
         </tr>
	 <tr class="content">
            <td class="title"></td>
            <td class="report1"></td>
            <td></td>
         </tr>
		 <tr class="content">
            <td class="title"></td>
            <td class="report2"></td>
            <td></td>
         </tr>
		 <tr class="content">
            <td class="title"></td>
            <td class="report3"></td>
            <td></td>
         </tr>
		 <tr class="content">
            <td class="title"></td>
            <td class="etc"></td>
            <td></td>
         </tr>
		 <tr class="content">
            <td class="title"></td>
            <td class="etc"></td>
            <td></td>
         </tr>
      </table>
      <div class="page_form">
         <ul class="pagination">
         </ul>
      </div>   
   </div>






### 주요 글로벌 웹사이트

**[IAEG-SDGs(Inter-agency and Expert Group on SDG Indicators)](https://unstats.un.org/sdgs/iaeg-sdgs/)** : 글로벌 지표 프레임워크 개발, 이행을 위해 조직. 공식적인 글로벌 SDG 정보 수록

**[UN World Data Forum](https://unstats.un.org/unsd/undataforum/)** : 지속가능발전 데이터 및 통계 개선을 목표로 한 세계 최대 규모의 협력 플랫폼

**[HLPF(High-Level Political Forum)](https://sustainabledevelopment.un.org/hlpf)** : SDGs 이행 점검, 후속 정책 논의를 위해 개설된 UN 차원의 플랫폼

**[UNESCAP(UN The Economic and Social Commission for Asia and the Pacific)](https://www.unescap.org/)** : UN 아시아 태평양 경제사회위원회

**[UNESCAP-ENEA(UN ESCAP East and North-East Asia Office)](https://www.unescap.org/subregional-office/east-north-east-asia)** : UN 아시아 태평양 경제사회위원회 동북아 사무소

**[UNECE(UN Economic Commission for Europe)](https://www.unece.org/info/ece-homepage.html)** : 유엔 유럽 경제 위원회

**[UNECA(UN Economic Commission for Africa)](https://www.uneca.org/)** : 유엔 아프리카 경제 위원회


### 주요 국내 웹사이트

**[통계청 국가지표체계(K-indicator)](http://www.index.go.kr/unify/main.do?clasCd=10&web=)** : 국가발전과 국민의 웰빙을 한눈에 파악할 수 있도록 다양한 지표를 한 곳에서 제공

**[환경부 지속가능발전포털](http://ncsd.go.kr/))** : 국가 지속가능발전목표(K-SDG)를 포함한 지속가능발전 관련 정보를 총망라한 서비스

