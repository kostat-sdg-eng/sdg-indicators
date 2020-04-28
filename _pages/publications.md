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
	$(document).ready(function(){
		paging();
	});


   var isSearch = false;
//    페이지 로드 시 페이징 처리
   function paging(){
   
      contentShow();
      
      createPage();
      
   }
   
   function contentShow(){
      var content = document.getElementsByClassName('content');
      for(var i=0; i < content.length; i++){
         if(i < 6){
            document.getElementsByClassName('content')[i].style.display = "table-row";
         }else{
            document.getElementsByClassName('content')[i].style.display = "none";
         }
      }
   }
   
   function createPage(){
      document.getElementsByClassName('pagination')[0].remove();
      
      document.getElementsByClassName('page_form')[0].innerHTML = "<ul class='pagination'></ul>";
      
      var content = document.getElementsByClassName('content');
      
      var liCount = Math.ceil(content.length/6);
      var liStr = "";
      for(var i=1; i <= liCount; i++){
         if(i==1){
            liStr = "<li onclick='changePage(this.innerHTML)' class='on'>"+i+"</li>";
         }else{
            liStr += "<li onclick='changePage(this.innerHTML)'>"+i+"</li>";
         }
      }
      
      document.getElementsByClassName('pagination')[0].innerHTML = liStr;
         
   }
   
//    검색 기능
   function search(){
      isSearch = true;
      var value = document.getElementsByClassName('srh_input')[0].value;
      
      var title = document.getElementsByClassName('title');
      var count = 0;
      for(var i=0; i < title.length; i++){
         document.getElementsByClassName('content')[i].className = "content";
         document.getElementsByClassName('content')[i].style.display = "none";
         
         if(title[i].innerHTML.indexOf(value) != -1){
            document.getElementsByClassName('content')[i].className = "content isSearch";
         }
      }
      
      searchShow();
      searchPage();
      
   }
   
   function searchShow(){
      var content = document.getElementsByClassName('isSearch');
      var count = 0;
      
      while(count < 6){
         if(document.getElementsByClassName('isSearch').length == count){
            break;
         }else{
            document.getElementsByClassName('isSearch')[count].style.display = "table-row";
            count++;
         }
      }
      
   }
   
   function searchPage(){
      document.getElementsByClassName('pagination')[0].remove();
      
      document.getElementsByClassName('page_form')[0].innerHTML = "<ul class='pagination'></ul>";
      
      var content = document.getElementsByClassName('isSearch');
      
      var liCount = Math.ceil(content.length/6);
      
      
      var liStr = "";
      for(var i=1; i <= liCount; i++){
         if(i==1){
            liStr = "<li onclick='changePage(this.innerHTML)' class='on'>"+i+"</li>";
         }else{
            liStr += "<li onclick='changePage(this.innerHTML)'>"+i+"</li>";
         }
      }
      
      document.getElementsByClassName('pagination')[0].innerHTML = liStr;
      
      document.getElementsByClassName('report1_btn')[0].style.background = "gray";
      document.getElementsByClassName('report2_btn')[0].style.background = "gray";
      document.getElementsByClassName('report3_btn')[0].style.background = "gray";
         
   }
   
//    페이징 처리
   function changePage(index){
      if(isSearch){
         var content = document.getElementsByClassName('isSearch');
         
         for(var i=0; i < content.length; i++){
            if(i >= 6*(index-1) && i < 6*index){
               document.getElementsByClassName('isSearch')[i].style.display = "table-row";
            }else{
               document.getElementsByClassName('isSearch')[i].style.display = "none";
            }
         }
         document.getElementsByClassName('on')[0].className = "";
         document.getElementsByTagName('li')[index-1].className = "on";
         
      }else{
         var content = document.getElementsByClassName('content');
         for(var i=0; i < content.length; i++){
            if(i >= 6*(index-1) && i < 6*index){
               document.getElementsByClassName('content')[i].style.display = "table-row";
            }else{
               document.getElementsByClassName('content')[i].style.display = "none";
            }
         }
         document.getElementsByClassName('on')[0].className = "";
         document.getElementsByTagName('li')[index-1].className = "on";
      }
      
   }
   
   function reportView(item){
      isSearch = true;
      var content = document.getElementsByClassName('content');
      for(var i=0; i < content.length; i++){
         content[i].className = "content";
         content[i].style.display = "none";
      }
      
      var report = document.getElementsByClassName(item);
      for(var i=0; i < report.length; i++){
         var parent = report[i].parentNode;
         parent.className = "content isSearch";
      }
      
      searchShow();
      searchPage();
      
      document.getElementsByClassName('report1_btn')[0].style.background = "gray";
      document.getElementsByClassName('report2_btn')[0].style.background = "gray";
      document.getElementsByClassName('report3_btn')[0].style.background = "gray";
      
      var click_btn = document.getElementsByClassName(item+"_btn")[0];
//       click_btn.className = item+"_btn cr";
      click_btn.style.background = "#5D5D5D";
      
      
   }
</script>



<style>
/*  공통 */
   body { padding:0; margin:0; }
/*    상단 제목검색 및 버튼 CSS */
   input[type=button]:hover { background:#5D5D5D; transition : all ease 0.5s 0s; cursor:pointer; }
   input[type=button]:visited { background:#5D5D5D; }
   
   .search_form { text-align : center; width:100%; height: 100px;   background : #BDBDBD; }
   
   .search_form .search_div { display : inline-block; width : 400px; height: 40px; background : #ffffff; margin-top : 30px; }
   .search_form .search_div .srh_input { font-size : 16px; width: 325px; height : 20px; padding : 10px; margin : 0px; border: 0px; outline : none; float:left; vertical-align: middle;}
   .search_form .search_div .srh_btn {   width: 50px; height: 40px; border: 0px; background : #FF4848; outline : none; color: #ffffff; float:right; margin:0px;   }
    
    .search_form .report_div { display : inline-block; width : 400px; height: 40px; background : #BDBDBD; margin-top : 30px; }
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
   .board_form .page_form .pagination li { display : inline-block; cursor : pointer; padding:0 9px 2px; margin:0 5px; border: 1px solid #BDBDBD; border-radius : 50px; }
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
            <th>제목</th>
            <th>기관</th>
            <th>발간년도</th>
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














----- TEST -----

<!--간행물 게시와 관련된 문의사항은 <a href="mailto:{{site.email_contacts.suggestions}}">{{site.email_contacts.suggestions}}</a>로 연락주시기 바랍니다. -->

### 일반

**[한국의 SDGs 데이터와 이행현황 (2019)](http://kostat.go.kr/sri/srikor/srikor_pbl/2/index.board?bmode=download&bSeq=&aSeq=374478&ord=1)** 통계청 통계개발원

**[2019 국가 지속가능발전목표(K-SDGs) 수립보고서 (2019)](http://ncsd.go.kr/api/1572586046142_K-SDGs_report.pdf)** 환경부 지속가능발전위원회

**[지속가능발전목표(SDGs)국내 대응전략 수립 연구 보고서 (2014)](http://www.me.go.kr/home/file/readDownloadFile.do?fileId=111484&fileSeq=1)** 한국환경정책평가연구원

**[UN 지속가능발전목표(UN SDGs)와 문화정책의 대응 방안 (2017)](
http://udic.idi.re.kr/boardCnts/fileDown.do?fileSeq=1b016160c359b434c9282caeabcfd1a8)** 한국문화관광연구원

**[SDGs와 한반도 평화 (2018)](https://www.unesco.or.kr/assets/data/report/iqn7PJJd2HUioDtVDGTz7aVlBgIN5u_1545633687_2.pdf)** 유네스코한국위원회

**[유네스코 SDG 국제교육협력 포럼 자료집 (2015)](https://www.unesco.or.kr/assets/data/report/tqnJNGIqaKI6WDd4MBZSEwWACWWSjC__2.pdf)** 유네스코한국위원회

**[SDGs 연계 성과프레임워크 수립 및 활용방안 (2017)](http://lib.koica.go.kr/search/media/img/CAT000000041378?metsno=000000015702&fileid=M000000015702_FILE000001)** 한국국제협력단

**[지속가능발전목표(SDGs) 이행 실태 분석 및 개선방안 연구 (2017)](https://www.kipa.re.kr/synap/skin/doc.html?fn=FILE_0000000000051891&rs=/convert/result/201512/)** 한국행정연구원

**[SDGs 도입 이후 개도국 협력전략과 대응과제: 무역과 기후변화의 정책일관성을 중심으로 (2016)](http://www.kiep.go.kr/sub/view.do?bbsId=breifing&nttId=192944)** 대외경제정책연구원

**[한·중 유엔 지속가능발전목표(SDGs) 이행 비교 및 협력방안 (2018)](http://www.kiep.go.kr/sub/view.do?bbsId=search_report&nttId=203561)** 한국대외경제정책연구원

**[SDGs 시대, 공유가치창출(CSV)과 비즈니스기회: 신흥국 진출 전략 (2017)](http://news.kotra.or.kr/user/reports/kotranews/20/usrReportsView.do?reportsIdx=8515)** 대한무역투자진흥공사

**[유네스코 인문사회 자연과학분야 지속가능발전목표 국내 이행 방안 연구 (2017)](https://www.unesco.or.kr/assets/data/report/h8n5wKbp5Tylc5486JJUxS4TYuGr9k__2.pdf)** 유네스코한국위원회

**[지속가능발전목표(SDGs) 달성을 위한 청소년 삶의 질 실태 및 지원방안 연구 (2016)](https://nypi.re.kr/brdrr/boardrrView.do?menu_nix=4o9771b7&brd_id=BDIDX_PJk7xvf7L096m1g7Phd3YC&cont_idx=568&seltab_idx=0&edomweivgp=R)** 한국청소년정책연구원



### 목표 4 양질의 교육

**[한국의 SDG4 이행 현황 연구 (2019)](https://www.unesco.or.kr/assets/data/report/Lg0UTQ7aY1amLxfWLkvfPyTO35u6XY_1567147136_2.pdf)** 한국교육개발원

**[포용성 증진을 위한 교육과 도시 (2019)](https://www.unesco.or.kr/assets/data/report/kUBzCt7Rs5swF6lB10Zg5c5AFRroz2_1573104458_2.pdf)** 유네스코한국위원회

**[SDG4-교육2030 포용성과 교육에 관한 연구 보고서 (2019)](https://www.unesco.or.kr/assets/data/report/JPZCFQ3y82b98Bm5tkJgwIstZ3HneT_1573104541_2.pdf)** 유네스코한국위원회, 한국교육개발원

**[지속가능한 사회를 꿈꾸는 교육 (2018)](https://www.unesco.or.kr/assets/data/report/LdLQ3Ez2sisXPD9zUBpHRiJtMuPVGl_1545959970_2.pdf)** 유네스코한국위원회, 한국교육개발원

**[문답으로 풀어보는 지속가능발전목표(SDG) 4 교육 2030 (2018)](https://www.unesco.or.kr/assets/data/report/4Q03otQgPqVWaO6UqAnmELZtei28UL_1531982225_2.pdf)** 유네스코한국위원회

**[2030 지속가능개발목표(SDGs)실천 방안 연구: 교육 분야를 중심으로 (2016)](https://www.kedi.re.kr/khome/main/research/selectPubForm.do?plNum0=11295)** 한국교육개발원



### 목표 5 양성평등

**[지속가능발전목표(SDGs) 내 성평등 관련 지표의 국내이행 현황 및 정책과제 (2018)](https://www.kwdi.re.kr/inc/download.do?ut=A&upIdx=115014&no=1)** 한국여성정책연구원



### 목표 6 물과 위생

**[지속가능발전목표(SDGs) 관련, 한국 및 Kwater의 대응전략 연구 (2017)](http://www.alio.go.kr/download.dn?fileNo=2223880)** 한국수자원공사

**[SDGs 관점의 물인권 지원을 위한 한국의 ODA 전략방향 연구 (2014)](https://library.kei.re.kr:444/dmme/img/001/009/005/%ea%b8%b0%eb%b3%b82014_21_%ec%a1%b0%ec%9d%84%ec%83%9d.pdf)** 한국환경정책평가연구원



### 목표 7 깨끗한 에너지

**[우리의 지속가능한 에너지(SDG 7) (2017)](https://www.unesco.or.kr/assets/data/report/ELJcHwllZDLUGvi9GpWaCpoMUQveOw__2.pdf)** 유네스코한국위원회



### 목표 9 산업, 혁신과 사회기반시설

**[자원순환분야 지속가능발전목표(SDGs) 이행 기반 마련을 위한 기초연구 (2015)](https://library.kei.re.kr:444/dmme/img/001/012/004/%ea%b8%b0%ec%b4%882015_08_%ec%9e%84%ed%98%9c%ec%88%99.pdf)** 한국환경정책평가연구원



### 목표 11 지속가능한 도시와 공동체

**[지속가능발전목표(SDGs) 대비 건축·도시분야 대응방향 연구 (2016)](http://ncsd.go.kr/api/%EC%A7%80%EC%86%8D%EA%B0%80%EB%8A%A5%EB%B0%9C%EC%A0%84%EB%AA%A9%ED%91%9C(SDGs)%20%EB%8C%80%EB%B9%84%20%EA%B1%B4%EC%B6%95%C2%B7%EB%8F%84%EC%8B%9C%EB%B6%84%EC%95%BC%20%EB%8C%80%EC%9D%91%EB%B0%A9%ED%96%A5%20%EC%97%B0%EA%B5%AC.pdf)** 건축공간도시연구소

**[우리의 지속가능한 도시(SDG 11) (2017)](https://www.unesco.or.kr/assets/data/report/xNoBXzg8AvKzsQ1zmRL4MCN39Ji3JV__2.pdf)** 유네스코한국위원회



### 목표 14 해양 생태계

**[우리의 지속가능한 해양 (2019)](https://www.unesco.or.kr/assets/data/report/Tiop5H5KP4p8xfZ65chbYUviB6h3Bg_1572326682_2.pdf)** 한국유네스코위원회



### 목표 15 육상 생태계

**[우리의 지속가능한 생물다양성 (2018)](https://www.unesco.or.kr/assets/data/report/m8xCs1z3ObBt4D81Dax9c2KyIXMHnB_1543384964_2.pdf)** 유네스코한국위원회

**[국내 보호지역의 UN SDGs 이행전략 수립 연구 (2017)](http://www.knps.or.kr/front/research/research/researchDtl.do?menuNo=7040011&bbsId=REFM000351&searchAllValue=SDG&bType=SR&page=1)** 국립공원연구원

**[토지환경 분야의 지속가능발전목표(SDGs) 이행을 위한 정책 방향 (2016)](https://library.kei.re.kr:444/dmme/img/001/012/005/%ea%b8%b0%ec%b4%88_2016_11_%eb%aa%85%ec%88%98%ec%a0%95.pdf)** 한국환경정책평가연구원



### 목표 16 평화와 정의

**[SDG16(평화) 논의 및 이행현황 분석: 한국과 국제기구를 중심으로 (2019)](http://lib.koica.go.kr/search/media/img/CAT000000042712?metsno=000000016511&fileid=M000000016511_FILE000002)** 한국국제협력단
