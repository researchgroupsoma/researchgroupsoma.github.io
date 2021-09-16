<template>
<div id="missions">
    <div id="about" class="choose_section">
        <div class="container">
            <div class="col-sm-12">
                    <h1 class="choose_text">Missões</h1>
            </div>
        </div>
    </div>

    <div class="choose_section_2">
    	<div class="container">
    	    <div class="row">
    		    <div class="col-sm-4">
    			    <div class="power_full">
    				    <div class="icon"><a href="#"><img src="@/assets/power-full-icon.png"></a></div>
    				    <h2 class="powerful_text">Contribuir</h2>
    				    <p class="making_tetx">Contribuir para o conhecimento em Engenharia de Software.</p>
    			    </div>
    		    </div>
    		    <div class="col-sm-4">
    			    <div class="power_full">
    				    <div class="icon"><a href="#"><img src="@/assets/power-full-icon.png"></a></div>
    				    <h2 class="powerful_text">Interagir</h2>
    				    <p class="making_tetx">Fomentar a interação entre pesquisadores da área de Engeharia de Software.</p>
    			    </div>
    		    </div>
    		    <div class="col-sm-4">
    			    <div class="power_full">
    				    <div class="icon"><a href="#"><img src="@/assets/power-full-icon.png"></a></div>
    				    <h2 class="powerful_text">Despertar</h2>
    				    <p class="making_tetx">Despertar interesse de estudantes para a pesquisa em Engenharia de Software.</p>
    			    </div>
    		    </div>
    	    </div>    		
    	</div>
    </div>
</div>  
</template>

<script>
export default {
name: "Missions"
}
</script>

<style>
.choose_section{
	width: 100%;
	float: left;
	margin-top: 40px;
	margin-bottom: 40px;
}

.choose_section_2{
	width: 100%;
	float: left;
}
.power_full{
	width: 100%;
	float: left;
	background-color: #2aaf80;
	border-radius: 30px;
	padding: 20px;
	box-shadow: 0px 0px 8px 0px;
	height: 350px;
}
.icon{
	text-align: center;
	margin-top: 0px;
}
.powerful_text{
	width: 100%;
	float: left;
	text-align: center;
	margin-top: 20px;	
	color: #ffffff;

}

.making_tetx{
	width: 100%;
	float: left;
	text-align: center;
	margin-top: 20px;	
	color: #ffffff;
	margin-left: 0;

}
</style>