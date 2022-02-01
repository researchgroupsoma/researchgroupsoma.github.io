<template>
  <div id="group-description">
      <div class="header_main">
        <!-- header inner -->
        <div class="header">
          <div class="container">
            <div class="row">
              <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                <div class="full">
                  <div class="center-desk">
                    <div class="logo"><a href="#home"><img src="images/logo.png" style="max-width: 100%;"></a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                <div class="menu-area">
                  <div class="limit-box">
                    <nav class="main-menu">
                      <ul class="menu-area-main">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#service">Service</a></li>
                        <li><a href="#testimonial">Testimonial</a></li>
                        <li><a href="#contact">Contact Us</a></li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- end header inner -->
          <div class="bannen_inner">
            <div class="container">
              <div class="row marginii">
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                  <h1 class="web_text"><strong>Grupo de Pesquisa SOMA</strong></h1>
                  <p class="donec_text">Seja bem-vindo(a) ao website do grupo de pesquisa SOftware Maintenance Analytics (SOMA). O grupo foi fundado em 2020 pelo professor Bruno Cafeo em pareceria com outros colegas da área de Engenharia de Software da Faculdade de Computação (FACOM) localizada na Universidade Federal de Mato Grosso do Sul (UFMS).</p>                    </div>
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                  <div class="container">
                    <div class="row marginii">
                      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <div class="img-box">
                          <figure><img src="@/assets/engineering.png" alt="img" style="max-width: 120%;"></figure>
                        </div>
                      </div>
                      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <div class="img-box">
                          <figure><img src="@/assets/engineering2.png" alt="img" style="max-width: 120%;"></figure>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "GroupDescription"
}
</script>

<style scoped>
.bannen_inner{
  width: 100%;
  float: left;
}
.header_main{
  width: 100%;
  float: left;
  background-image: url(../../assets/banner.png);
  height: auto;
  padding-top: 20px;
  padding-bottom: 20px;
  background-size:cover;
  background-size: 100%;
  background-repeat: no-repeat;
}

.center-desk{ width: 100%; float: left; padding-bottom: 20px; }

.logo{ width: 100%; float: left; }

.main-menu ul>li a {
  line-height: 20px;
  font-size: 16px;
  display: block;
  font-weight: 500;
  color: #ffffff;
  padding: 22px 20px;
  text-transform: uppercase;
}
main-menu {
  float: right;
  margin-left: 0;
}

.main-menu ul {
  margin: 0;
  list-style-type: none;
  margin-bottom: 10px;
}

.main-menu ul li:first-child {
  margin-left: 0;
}
.main-menu ul>li {
  position: inherit;
  display: inline-block;
  vertical-align: middle;
}

.main-menu ul>li a:hover {
  color: #fff;
}

.web_text{ width: 100%; float: left; font-size: 48px; padding-top: 160px;}

.donec_text{
  font-size: 17px;
  color: #110f0a;
  margin-left: 0;
  padding-bottom: 20px;
  z-index: 9;
  position: relative;
}

</style>