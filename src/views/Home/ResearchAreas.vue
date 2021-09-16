<template>
  <div id="research-areas">
      <div id="service" class="choose_section">
    	<div class="container">
    		<div class="col-sm-12">
    			<h1 class="choose_text">Áreas de Pesquisa</h1>
    		</div>
    	</div>
    </div>
    <div class="choose_section_2">
    	<div class="container">
    	    <div class="row">
    		    <div class="col-sm-4">
    			    <div class="dedicated">
    				    <div class="icon"><a href="#"><img src="@/assets/icon-1.png"></a></div>
    				    <h2 class="hosting_text">Manutenção de Software</h2>
    				    <p class="justo_text">Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci.</p>
    			    </div>
    		    </div>
    		    <div class="col-sm-4">
    			    <div class="dedicated">
    				    <div class="icon"><a href="#"><img src="@/assets/icon-2.png"></a></div>
    				    <h2 class="hosting_text">Mineração de Repositórios</h2>
    				    <p class="justo_text">Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci.</p>
    			    </div>
    		    </div>
    		    <div class="col-sm-4">
    			    <div class="dedicated">
    				    <div class="icon"><a href="#"><img src="@/assets/icon-3.png"></a></div>
    				    <h2 class="hosting_text">Autoria de Código</h2>
    				    <p class="justo_text">Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci.</p>
    			    </div>
    		    </div>
    	    </div>    		
    	</div>
    </div>
  </div>
</template>

<script>
export default {
name: "ResearhAreas"
}
</script>

<style>
.choose_section{
	width: 100%;
	float: left;
	margin-top: 40px;
	margin-bottom: 40px;
}

.choose_text{
	width: 100%;
	float: left;
	text-align: center;
	color: #030907;
	    font-weight: 600;

}

.choose_section_2{
	width: 100%;
	float: left;
}

.dedicated{
	width: 100%;
	float: left;
	margin-top: 10px;
	margin-bottom: 10px;	
	background-color: #2ba879;
	border-radius: 20px;
	box-shadow: 0px 0px 8px 0px;
    height: 350px;
}

.icon{
	text-align: center;
	margin-top: 40px;
}

.hosting_text{
	color: #ffffff;
	text-align: center;
	margin-top: 20px;

}

.justo_text{
	width: 100%;
	text-align: center;
	float: left;
	margin: 0px;
	padding-bottom: 20px;
	padding-top: 20px;
	color: #ffffff;
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
</style>