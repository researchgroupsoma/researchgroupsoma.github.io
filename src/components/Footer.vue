<template>
  <div id="footer">
    <div class="contact_section_3">
    	<div class="container">
    		<div class="contact_taital">
    			<div class="row web">
    				<div class="col-sm-12 col-md-12 col-lg-4">
    					<div class="map_main">
    						<img src="@/assets/map-icon.png">
    						<span class="londan_text">Campo Grande - MS - Brasil</span>
    					</div>
    				</div>
    				<div class="col-sm-6 col-md-6 col-lg-4">
    					<div class="map_main">
    						<img src="@/assets/phone-icon.png">
    						<span class="londan_text">+7586656566</span>
    					</div>
    				</div>
    				<div class="col-sm-6 col-md-6 col-lg-4">
    					<div class="map_main">
    						<img src="@/assets/email-icon.png">
    						<span class="londan_text">email@gmail.com</span>
    					</div>
    				</div>
    			</div>
    		</div>
    		<div class="contact_product">
    			<div class="row">
    					<h1 class="useful_text">Links Úteis</h1>
    				<div class="menu">
    					<ul>
    						<li><a href="https://ufms.br" target="_blank" ><img src="@/assets/bulit-icon.png" style="padding-right: 10px;">UFMS</a></li>
    						<li><a href="https://www.facom.ufms.br"vtarget="_blank" ><img src="@/assets/bulit-icon.png" style="padding-right: 10px;">FACOM</a></li>
    					</ul>
    				</div>	
    			</div>
    		</div>
    		<div class="icon_main">
    			<div class="row">
    				<div class="col-sm-12">
    					<div class="menu_text">
    						<ul>
    						   <li><a href="#"><img src="@/assets/fb-icon.png"></a></li>
    						   <li><a href="#"><img src="@/assets/twitter-icon.png"></a></li>
    						   <li><a href="#"><img src="@/assets/in-icon.png"></a></li>
    						   <li><a href="#"><img src="@/assets/google-icon.png"></a></li>
    					    </ul>
    					</div>
    				</div>
    			</div>
    		</div>
    	</div>
    </div>
    <div class="copyright_main">
    	<div class="container">
    		<p class="copy_text">© 2022 All Rights Reserved. <a href="https://html.design">Free Website Templates</a></p>
    	</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
.contact_section_3{
	width: 100%;
	float: left;
	background-color: #2c2c2c;
	padding-bottom: 30px;	
	padding-top: 30px;
  margin-top: -80px;
}

.contact_taital{
	width: 100%;
	float: left;
	padding-left: 100px;
	padding-right: 100px;
	margin-top: 100px;
}

.web{
	background-color: #ffffff;
	border-radius: 30px;
	height: auto;
	padding-top: 20px;	
	padding-bottom: 20px;
}

.map_main{
	width: 100%;
	float: left;
	font-size: 17px;
	color: #afafaf;
	padding-left: 17px;
	text-align: center;
}

.londan_text{ padding-left: 20px;}

.contact_product{
	width: 100%;
	float: left;
	padding-bottom: 20px;
	padding-top: 65px;
}


.useful_text{ 
	width: 100%; 
	float: left; 
	color: #fcfcfc; 
	font-size: 24px; 
	font-weight: bold; 
	margin-top: 15px; 
}

.menu{
	width: 100%;
	float: left;
	margin-top: 15px;
}
.menu ul{margin: 0px; padding: 0px;}

.menu ul li{ color: #fcfcfc; }
.menu ul li a:hover{ color: #fcfcfc; }

.menu.multi_column_menu li {
    float: left;
    width: 33.33%;
}

.footer_menu{ padding-right: 10px; }

.icon_main{ width: 100%; float: left; text-align: center;}

.copyright_main{ 
  width: 100%; 
  float: left; 
  background-color: #17ad74;
	height: auto; 
  padding-bottom: 5px; 
  padding-top: 5px; }


.copy_text{ width: 100%; float: left; text-align: center; color: #ffffff;   
  margin-left: 0px; margin-right: 0px; }
.copy_text a:hover{ color: #000; }

.menu_text {width: 20%;
    margin: 0 auto;
    text-align: center;}
.menu_text ul { margin: 0px; padding: 0px;}	
.menu_text li { float: left; padding-left: 6px; padding-right: 25px; }
.subsrcibe_bt {
    border-top-right-radius: 30px !important;
    border-bottom-right-radius: 30px !important;
    color: #fff;
    padding-bottom: 10px;
    padding-top: 10px;
    background-color: #2ba879;
    padding: 15px 45px;
    border: 0px;
}

.form-control:not(:last-child) {
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
    padding-left: 25px;
}


ul,
li,
ol {
     margin: 0px;
     padding: 0px;
     list-style: none;
}

a {
     color: #1f1f1f;
     text-decoration: none !important;
     outline: none !important;
     -webkit-transition: all .3s ease-in-out;
     -moz-transition: all .3s ease-in-out;
     -ms-transition: all .3s ease-in-out;
     -o-transition: all .3s ease-in-out;
     transition: all .3s ease-in-out;
}

body {
     color: #666666;
     font-size: 14px;
     font-family: 'Raleway', sans-serif;;
     line-height: 1.80857;
     font-weight: normal;
     overflow-x: hidden;
}

* {
     box-sizing: border-box !important;
     transition: ease all 0.5s;
}

a {
     color: #ffffff;
     text-decoration: none;
     outline: none !important;
}

button:focus {
     outline: none;
}

button.btn.btn-primary, button.btn.btn-primary:hover, button.btn.btn-primary:focus {
    background: #136af8;
    padding: 10 40px;
}

button.main_bt a:hover {
	color: #ffffff;
}
.email-bt {
    background: #ececec;
    border: none;
    color: #000;
    width: 100%;
    height: 55px;
    font-size: 22px;
    padding: 20px;
    border-radius: 10px;
    margin-top: 6px;
}

</style>
