---
title: <!--간행물-->
layoumlink: /publications/
layout: page
---

### 국내 보고서



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
            $(".pagination").append("<li onclick='changePage(this.innerHTML)' class='pageLi on'>"+i+"</li>");
         }else{
            $(".pagination").append("<li onclick='changePage(this.innerHTML)' class='pageLi'>"+i+"</li>");
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
      
      createGaraData("isSearch");
      
      var liCount = Math.ceil(content.length/6);
      
      for(var i=1; i <= liCount; i++){
         if(i==1){
            $(".pagination").append("<li onclick='changePage(this.innerHTML)' class='pageLi on'>"+i+"</li>");
         }else{
            $(".pagination").append("<li onclick='changePage(this.innerHTML)' class='pageLi'>"+i+"</li>");
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
         
         createGaraData("isSearch");
         
         $(".pageLi").each(function(number, value){
            if(index-1 == number){
               $(".pageLi").eq(number).attr("class", "pageLi on");
            }else{
               $(".pageLi").eq(number).attr("class", "pageLi");
            }
         });
         
      }else{
         var content = $(".content");
         for(var i=0; i < content.length; i++){
            if(i >= 6*(index-1) && i < 6*index){
               content.eq(i).css("display", "table-row");
            }else{
               content.eq(i).css("display", "none");
            }
         }
         
         createGaraData("content");
         
         $(".pageLi").each(function(number, value){
            if(index-1 == number){
               $(".pageLi").eq(number).attr("class", "pageLi on");
            }else{
               $(".pageLi").eq(number).attr("class", "pageLi");
            }
         });         
         
      }
      
   }
   
   function reportView(item){
      isSearch = true;
      $(".srh_input").val("");
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
      
      createGaraData("isSearch");
      
      
      $(".report1_btn").css("background", "gray");
      $(".report2_btn").css("background", "gray");
      $(".report3_btn").css("background", "gray");
      
      var click_btn = $("."+item+"_btn");
      
      click_btn.css("background", "#5D5D5D");
   }
   
   function createGaraData(data){
      $(".gara").remove();
      var content = $("."+data);
      var count = 0;
      content.each(function(i, value){
         if(content.eq(i).css("display") == "table-row"){
            count++;
         }
      });
      
      var str = "";
      str += "<tr class='gara'>";
      str += "<td></td>";
      str += "<td></td>";
      str += "<td></td>";
      str += "</tr>";
      
      if(6-count != 0){
         for(var i=0; i < (6-count); i++){
            $(".board_table").append(str);
         }
      }else{
         $(".gara").remove();
      }
   }
</script>
<style>
@media ( min-width: 768px ){
   /*  공통 */
      body { padding:0; margin:0; }
      a { text-decoration:none; } 
   /*    상단 제목검색 및 버튼 CSS */
      input[type=button]:hover { background:#5D5D5D; transition : all ease 0.5s 0s; cursor:pointer; }
      input[type=button]:visited { background:#5D5D5D; }
      
      .search_form { text-align : center; width:100%; height: 100px;   background : #BDBDBD; }
      
      .search_form .search_div { display : inline-block; width : 350px; background : #ffffff; margin-top : 30px; }
      .search_form .search_div .srh_input { font-size : 16px; width: 80%; height : 100%; padding : 10px; margin : 0px; border: 0px; outline : none; float:left; }
      .search_form .search_div .srh_btn {   width: 50px; height: 40px; border: 0px; background : #FF4848; outline : none; color: #ffffff; float:right; margin:0px;   }
       
       .report_div { display : inline-block; width : 100%; height: 40px; text-align:center; margin-bottom: 20px;}
       .report1_btn, .report2_btn, .report3_btn { font-size:10pt; height: 40px; outline : none; background : gray; border : 0px; color : #ffffff; margin-right : 10px; border-radius:10px;}
       
       
   /*  하단 게시판 CSS  */
      .board_form { margin : 20px 5% 0;}
      .board_form .board_table { width : 100%; border-collapse : collapse; border-bottom : 1px solid black; }
      .board_form .board_table .board_title { border-top : 2px solid black; border-bottom : 1px solid black;}
      .board_form .board_table tr:not(:first-child) { border-top : 1px dotted black; }
      .board_form .board_table tr:last-child { border-bottom : 1px solid black; }
      .board_form .board_table tr { height : 50px;}
      .board_form .board_table .board_title th { text-align : center; }
      .board_form .board_table tr td:nth-child(1) { padding-left : 10px; }
      .board_form .board_table tr td:nth-child(2), td:nth-child(3) { text-align : center; }
      
   /*  하단 페이징 CSS  */   
      .board_form .page_form { text-align : center; }
      .board_form .page_form .pagination { list-style: none; font-size:18pt; }
      .board_form .page_form .pagination li { display : inline-block; cursor : pointer; padding:0 10px 0; margin:0 5px; border: 1px solid #BDBDBD; border-radius : 25px; }
      .board_form .page_form .pagination li:hover { background:#6799FF; transition : all ease 0.5s 0s; color : #ffffff; }
      
      .on { background:#6799FF; color:#ffffff; }
      
      .top_div { text-align : center; width:99%; border:0; font-weight:bold;}
      .top_div .item { display:inline-block; width:250px;}
      .top_div .item a img { border:1px solid black; border-radius:5px 5px 5px 5px; width:150px; height:215px; }
}
         
   @media ( max-width: 767px ){
      /*  공통 */
         body { padding:0; margin:0; }
      /*    상단 제목검색 및 버튼 CSS */
         input[type=button]:hover { background:#5D5D5D; transition : all ease 0.5s 0s; cursor:pointer; font-size:13pt;}
         input[type=button]:visited { background:#5D5D5D; }
         
         .search_form { text-align : center; width:100%; height: 100px;   background : #BDBDBD; }
         
         .search_form .search_div { display : inline-block; width : 350px; background : #ffffff; margin-top : 30px; }
         .search_form .search_div .srh_input { font-size : 16px; width: 80%; height : 100%; padding : 10px; margin : 0px; border: 0px; outline : none; float:left; }
         .search_form .search_div .srh_btn {   width: 50px; height: 40px; border: 0px; background : #FF4848; outline : none; color: #ffffff; float:right; margin:0px;   }
          
          .report_div { display : inline-block; width: 100%; text-align:center; margin-bottom: 20px;}
          .report1_btn, .report2_btn, .report3_btn { display: block; width: 100%; height: 40px; font-size:11pt; outline : none; background : gray; border : 0px; color : #ffffff;}
          
          
      /*  하단 게시판 CSS  */
         .board_form { margin : 20px 5% 0;}
         .board_form .board_table { width : 100%; border-collapse : collapse; border-bottom : 1px solid black; }
         .board_form .board_table .board_title { border-top : 2px solid black; border-bottom : 1px solid black;}
         .board_form .board_table tr:not(:first-child) { border-top : 1px dotted black; }
         .board_form .board_table tr:last-child { border-bottom : 1px solid black; }
         .board_form .board_table tr { height : 50px;}
         .board_form .board_table .board_title th { text-align : center; }
         .board_form .board_table tr td:nth-child(1) { padding-left : 10px; }
         .board_form .board_table tr td:nth-child(2), td:nth-child(3) { text-align : center; }
         
      /*  하단 페이징 CSS  */   
         .board_form .page_form { text-align : center; }
         .board_form .page_form .pagination { list-style: none; font-size:18pt; }
         .board_form .page_form .pagination li { display : inline-block; cursor : pointer; padding:0 10px 0; margin:0 5px; border: 1px solid #BDBDBD; border-radius : 25px; }
         .board_form .page_form .pagination li:hover { background:#6799FF; transition : all ease 0.5s 0s; color : #ffffff; }
         
         .on { background:#6799FF; color:#ffffff; }
         
         .top_div { text-align : center; width:100%; border:0; font-weight:bold;}
         .top_div .item { display:inline-block; width:400px;}
         .top_div .item a img { border:1px solid black; border-radius:5px 5px 5px 5px; width:150px; height:215px; }
   }
</style>

<br/>
<div class="top_div">
   <div class="item">
      <div>
         <a href="https://kostat-sdg-kor.github.io/sdg-indicators/public/report/1.pdf">
            <img src="https://kostat-sdg-kor.github.io/sdg-indicators/public/report/1.png" alt="1"/>
         </a>
      </div>
      <div>
         <p>(통계개발원) 글로벌 렌즈로 본 한국의 SDGs 데이터와 이행현황</p>
      </div>
   </div>
   <div class="item">
      <div>
         <a href="https://kostat-sdg-kor.github.io/sdg-indicators/public/report/2.pdf">
             <img src="https://kostat-sdg-kor.github.io/sdg-indicators/public/report/2.png" alt="2"/>    
          </a>
      </div>
      <div>
         <p>(Statistics Research Institute) SDGs in the ROK Progress Report  2019</p>
      </div>
   </div>
   <div class="item">
      <div>
         <a href="https://kostat-sdg-kor.github.io/sdg-indicators/public/report/3.pdf">
              <img src="https://kostat-sdg-kor.github.io/sdg-indicators/public/report/3.png" alt="3"/>    
           </a>
      </div>
      <div>
         <p>(Statistics Research Institute) SDGs in the ROK Progress Report  2019</p>
      </div>
   </div>
   <div class="item">
      <div>
         <a href="https://kostat-sdg-kor.github.io/sdg-indicators/public/report/4.pdf">  
              <img src="https://kostat-sdg-kor.github.io/sdg-indicators/public/report/4.png" alt="4"/>    
            </a>
      </div>
      <div>
         <p>(ESCAP) ASIA AND THE PACIFIC SDG PROGRESS REPORT 2020</p>
      </div>
   </div>
</div>
<div class="search_form">
   <div class="search_div">
      <input type="text" class="srh_input" name="search_input" placeholder="제목검색"/>
      <input type="button" class="srh_btn" name="search_button" value="검색" onclick="search();"/>
         
      
   </div>
</div>
<div class="board_form">
   <div class="report_div">
      <input type="button" class="report1_btn" onclick="reportView('report1');" name="report1" value="통계개발원 보고서"/>
      <input type="button" class="report2_btn" onclick="reportView('report2');" name="report2" value="국내관계기관 보고서"/>
      <input type="button" class="report3_btn" onclick="reportView('report3');" name="report3" value="국외 보고서"/>      
   </div>

   <table class="board_table">
      <tr class="board_title">
         <th>제목</th>
         <th>기관</th>
         <th>발간년도</th>
      </tr>

      <tr class="content"><!-- 1 -->
         <td class="title"><a href="https://kostat-sdg-kor.github.io/sdg-indicators/public/report/1.pdf">한국의 SDGs 데이터와 이행현황</a></td>
         <td class="report1">통계청 통계개발원</td>
         <td>2019</td>
      </tr>

      <tr class="content"><!-- 2 -->
         <td class="title">2019 국가 지속가능발전목표(K-SDGs) 수립보고서</td>
         <td class="report2">환경부 지속가능발전위원회</td>
         <td>2019</td>
      </tr>

      <tr class="content"><!-- 3 -->
         <td class="title"><a href="http://lib.koica.go.kr/search/media/img/CAT000000039786?metsno=000000015736&fileid=M000000015736_FILE000001">알기쉬운 지속가능발전목표 SDGs</a></td>
         <td class="report2">국제개발협력시민사회포럼, 한국국제협력단(KOICA)</td>
         <td>2016</td>
      </tr>

      <tr class="content"><!-- 8 -->
         <td class="title"><a href="https://www.unesco.or.kr/assets/data/report/iqn7PJJd2HUioDtVDGTz7aVlBgIN5u_1545633687_2.pdf">SDGs와 한반도 평화</a></td>
         <td class="report2">유네스코한국위원회</td>
         <td>2018</td>
      </tr>

      <tr class="content"><!-- 11 -->
         <td class="title"><a href="https://kostat-sdg-kor.github.io/sdg-indicators/public/report/openData_SDG.pdf">오픈데이터와 지속가능개발목표(SDG)</a></td>
         <td class="report2">정보통신정책연구원</td>
         <td>2015</td>
      </tr>

      <tr class="content"><!-- 12 -->
         <td class="title"><a href="https://kostat-sdg-kor.github.io/sdg-indicators/public/report/12.pdf">SDGs 연계 성과프레임워크 수립 및 활용방안</a></td>
         <td class="report2">한국국제협력단(KOICA)</td>
         <td>2017</td>
      </tr>

      <tr class="content"><!-- 13 -->
         <td class="title"><a href="https://kostat-sdg-kor.github.io/sdg-indicators/public/report/openData_SDG.pdf">지속가능개발목표(SDGs) 수립현황과 대응방안</a></td>
         <td class="report2">한국국제협력단(KOICA)</td>
         <td>2015</td>
      </tr>
      
      <tr class="content"><!-- 14 -->
         <td class="title"><a href="https://kostat-sdg-kor.github.io/sdg-indicators/public/report/14.pdf">한·중 유엔 지속가능발전목표(SDGs) 이행 비교 및 협력방안</a></td>
         <td class="report2">한국대외경제정책연구원</td>
         <td>2018</td>
      </tr>

      <tr class="content"><!-- 20 -->
         <td class="title"><a href="https://www.kipa.re.kr/synap/skin/doc.html?fn=FILE_0000000000051891&rs=/convert/result/201512/">지속가능발전목표(SDGs) 이행 실태 분석 및 개선방안 연구</a></td>
         <td class="report2">한국행정연구원</td>
         <td>2017</td>
      </tr>

      <tr class="content"><!-- 22 -->
         <td class="title"><a href="https://kostat-sdg-kor.github.io/sdg-indicators/public/report/22.pdf">지속가능발전목표(SDGs) 세부대응전략 수립 연구</a></td>
         <td class="report2">한국환경정책평가연구원</td>
         <td>2014</td>
      </tr>
      
      <tr class="content"><!-- 26 -->
         <td class="title"><a href="https://kostat-sdg-kor.github.io/sdg-indicators/public/report/26.pdf">UN SDGs 보건·복지분야 지표 관리체계 구축방안 연구</a></td>
         <td class="report2">보건복지부</td>
         <td>2016</td>
      </tr>

      <tr class="content"><!-- 27 -->
         <td class="title"><a href="http://www.klri.re.kr/viewer/skin/doc.html?fn=6%ED%98%B8_UN%EC%9D%98%20%EC%A7%80%EC%86%8D%EA%B0%80%EB%8A%A5%EB%B0%9C%EC%A0%84%EB%AA%A9%ED%91%9C-%EB%B9%88%EA%B3%A4%EA%B3%BC%20%EB%B6%88%ED%8F%89%EB%93%B1.pdf&rs=/doc_convert/FILE_0000000000261036Jfvl">SDGs 시대, 공유가치창출(CSV)과 비즈니스기회: 신흥국 진출 전략</a></td>
         <td class="report2">한국법제연구원</td>
         <td>2018</td>
      </tr>

      <tr class="content"><!-- 29 -->
         <td class="title"><a href="https://www.krei.re.kr/krei/researchReportView.do?key=67&pageType=010101&biblioId=518120&pageUnit=10&searchCnd=all&searchKrwd=SDGs%20%EB%8B%AC%EC%84%B1%EC%9D%84%20%EC%9C%84%ED%95%9C%20%EB%86%8D%EB%A6%BC%EB%B6%84%EC%95%BC%20ODA%20%EC%A4%91%EC%9E%A5%EA%B8%B0%20%EC%A0%84%EB%9E%B5&pageIndex=1&engView=">SDGs 달성을 위한 농림분야 ODA 중장기 전략</a></td>
         <td class="report2">한국농촌경제연구원</td>
         <td>2018</td>
      </tr>

      <tr class="content"><!-- 30 -->
         <td class="title"><a href="https://www.unesco.or.kr/assets/data/report/kUBzCt7Rs5swF6lB10Zg5c5AFRroz2_1573104458_2.pdf">포용성 증진을 위한 교육과 도시</a></td>
         <td class="report2">유네스코한국위원회</td>
         <td>2019</td>
      </tr>

      <tr class="content"><!-- 31 -->
         <td class="title"><a href="https://www.unesco.or.kr/assets/data/report/4Q03otQgPqVWaO6UqAnmELZtei28UL_1531982225_2.pdf">문답으로 풀어보는 지속가능발전목표(SDG)4 교육 2030</a></td>
         <td class="report2">유네스코한국위원회</td>
         <td>2018</td>
      </tr>
      
      <tr class="content"><!-- 32 -->
         <td class="title"><a href="https://www.unesco.or.kr/assets/data/report/tqnJNGIqaKI6WDd4MBZSEwWACWWSjC__2.pdf">유네스코 SDG 국제교육협력 포럼 자료집</a></td>
         <td class="report2">유네스코한국위원회</td>
         <td>2015</td>
      </tr>

      <tr class="content"><!-- 33 -->
         <td class="title"><a href="https://www.unesco.or.kr/assets/data/report/JPZCFQ3y82b98Bm5tkJgwIstZ3HneT_1573104541_2.pdf">SDG4-교육2030 포용성과 교육에 관한 연구 보고서</a></td>
         <td class="report2">유네스코한국위원회, 한국교육개발원</td>
         <td>2019</td>
      </tr>
      
      <tr class="content"><!-- 35 -->
         <td class="title"><a href="https://www.unesco.or.kr/assets/data/report/Lg0UTQ7aY1amLxfWLkvfPyTO35u6XY_1567147136_2.pdf">한국의 SDG4 이행 현황 연구</a></td>
         <td class="report2">한국교육개발원</td>
         <td>2019</td>
      </tr>
      
      <tr class="content"><!-- 37 -->
         <td class="title"><a href="https://kostat-sdg-kor.github.io/sdg-indicators/public/report/37.pdf">지속가능개발목표(SDGs) 달성을 위한 교육개발협력연구(Ⅱ): 직업교육훈련(TVET) 실천 전략</a></td>
         <td class="report2">한국교육개발원</td>
         <td>2018</td>
      </tr>

      <tr class="content"><!-- 39 -->
         <td class="title"><a href="https://kostat-sdg-kor.github.io/sdg-indicators/public/report/39.pdf">지속가능개발목표(SDGs) 달성을 위한 교육개발협력 연구(Ⅰ) :기초교육 실천 전략</a></td>
         <td class="report2">한국교육개발원</td>
         <td>2017</td>
      </tr>

      <tr class="content"><!-- 42 -->
         <td class="title"><a href="https://kostat-sdg-kor.github.io/sdg-indicators/public/report/RR2016-25.pdf">2030 지속가능개발목표(SDGs)실천 방안 연구:교육 분야를 중심으로</a></td>
         <td class="report2">한국교육개발원</td>
         <td>2016</td>
      </tr>
      
      <tr class="content"><!-- 43 -->
         <td class="title"><a href="http://www.klri.re.kr/viewer/skin/doc.html?fn=12%ED%98%B8_%EC%A7%80%EC%86%8D%EA%B0%80%EB%8A%A5%EB%B0%9C%EC%A0%84%EB%AA%A9%ED%91%9C%20%EC%8B%A4%ED%98%84%EC%9D%84%20%EC%9C%84%ED%95%9C%20%ED%8A%B9%EC%88%98%EA%B5%90%EC%9C%A1%EB%B2%95%EC%A0%9C%20%EA%B0%9C%EC%84%A0%EB%B0%A9%EC%95%88.pdf&rs=/doc_convert/FILE_000000000026098Y6ZtM">지속가능발전목표(SDGs) 실현을 위한 특수교육법제 개선방안</a></td>
         <td class="report2">한국청소년정책연구원</td>
         <td>2018</td>
      </tr>

      <tr class="content"><!-- 45 -->
         <td class="title"><a href="https://www.naver.com">여성과 ICT : 지속가능발전목표 5 (양성평등과 여성권익향상)의 이행</a></td>
         <td class="report2">정보통신정책연구원</td>
         <td>2016</td>
      </tr>

      <tr class="content"><!-- 46 -->
         <td class="title"><a href="http://www.klri.re.kr/viewer/skin/doc.html?fn=10%ED%98%B8_%EC%97%AC%EC%84%B1%EC%9D%98%20%EB%85%B8%EB%8F%99%ED%8F%89%EB%93%B1%EA%B6%8C%20%ED%99%95%EB%B3%B4%EB%A5%BC%20%ED%86%B5%ED%95%9C%20%EC%A7%80%EC%86%8D%EA%B0%80%EB%8A%A5%EB%B0%9C%EC%A0%84%EB%AA%A9%ED%91%9C%20%EC%8B%A4%ED%98%84%EA%B3%BC%EC%A0%9C.pdf&rs=/doc_convert/FILE_000000000026094anoOa">여성과 ICT : 지속가능발전목표 5 (양성평등과 여성권익향상)의 이행</a></td>
         <td class="report2">한국법제연구원</td>
         <td>2016</td>
      </tr>
      
      <tr class="content"><!-- 47 -->
         <td class="title"><a href="http://www.klri.re.kr/viewer/skin/doc.html?fn=7%ED%98%B8_%EC%A7%80%EC%86%8D%EA%B0%80%EB%8A%A5%EB%B0%9C%EC%A0%84%EB%AA%A9%ED%91%9C%EB%82%B4%205%EB%B2%88%20%EC%84%B1%ED%8F%89%EB%93%B1%20%EB%8F%85%EC%9E%90%EB%AA%A9%ED%91%9C%EC%9D%98%20%EC%A0%A0%EB%8D%94%EC%A0%81%20%EA%B4%80%EC%A0%90%EC%9D%98%20%ED%95%B4%EC%84%9D%EA%B3%BC%20%EA%B5%AD%EB%82%B4%20%EC%9D%B4%ED%96%89%20%EB%B0%A9%EC%95%88.pdf&rs=/doc_convert/FILE_000000000026105HIulh">지속가능발전목표(SDGs) 내 5번 성평등 독자목표의 젠더적 관점의 해석과 국내 이행 방안</a></td>
         <td class="report2">한국법제연구원</td>
         <td>2018</td>
      </tr>

      <tr class="content"><!-- 48 -->
         <td class="title"><a href="http://www.klri.re.kr/viewer/skin/doc.html?fn=11%ED%98%B8_%EC%A7%80%EC%86%8D%EA%B0%80%EB%8A%A5%EB%B0%9C%EC%A0%84%EB%AA%A9%ED%91%9C%EC%99%80%20%EC%97%AC%EC%84%B1%EB%85%B8%EC%9D%B8%EC%9D%B8%EA%B6%8C.pdf&rs=/doc_convert/FILE_000000000026096CSHFX">지속가능발전목표(SDGs)와 여성노인인권</a></td>
         <td class="report2">한국법제연구원</td>
         <td>2018</td>
      </tr>

      <tr class="content"><!-- 49 -->
         <td class="title"><a href="https://www.naver.com">글로벌 여성의제 국내이행 점검</a></td>
         <td class="report2">한국여성정책연구원</td>
         <td>2019</td>
      </tr>

      
      
      <tr class="content">
         <td class="title">여성의 노동평등권 확보를 통한 지속가능발전목표(SDGs) 실현과제</td>
         <td class="report1 report3">한국법제연구원</td>
         <td>2018</td>
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

<br/>
<br/>

