(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["News","Classes","Projects","Publications","ResearchLines","SoftwaresAndDatabases","Vacancies"],{"0b9c":function(e,t,s){(function(e){function t(){this.months=["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"],this.notKey=[",","{","}"," ","="],this.pos=0,this.input="",this.entries=new Array,this.currentEntry="",this.setInput=function(e){this.input=e},this.getEntries=function(){return this.entries},this.isWhitespace=function(e){return" "==e||"\r"==e||"\t"==e||"\n"==e},this.match=function(e,t){if(void 0!=t&&null!=t||(t=!0),this.skipWhitespace(t),this.input.substring(this.pos,this.pos+e.length)!=e)throw TypeError("Token mismatch: match","expected "+e+", found "+this.input.substring(this.pos));this.pos+=e.length,this.skipWhitespace(t)},this.tryMatch=function(e,t){return void 0!=t&&null!=t||(t=!0),this.skipWhitespace(t),this.input.substring(this.pos,this.pos+e.length)==e},this.matchAt=function(){while(this.input.length>this.pos&&"@"!=this.input[this.pos])this.pos++;return"@"==this.input[this.pos]},this.skipWhitespace=function(e){while(this.isWhitespace(this.input[this.pos]))this.pos++;if("%"==this.input[this.pos]&&1==e){while("\n"!=this.input[this.pos])this.pos++;this.skipWhitespace(e)}},this.value_braces=function(){var e=0;this.match("{",!1);var t=this.pos,s=!1;while(1){if(!s)if("}"==this.input[this.pos]){if(!(e>0)){var a=this.pos;return this.match("}",!1),this.input.substring(t,a)}e--}else if("{"==this.input[this.pos])e++;else if(this.pos>=this.input.length-1)throw TypeError("Unterminated value: value_braces");s="\\"==this.input[this.pos]&&0==s,this.pos++}},this.value_comment=function(){var e="",t=0;while(!this.tryMatch("}",!1)||0!=t){if(e+=this.input[this.pos],"{"==this.input[this.pos]&&t++,"}"==this.input[this.pos]&&t--,this.pos>=this.input.length-1)throw TypeError("Unterminated value: value_comment",+this.input.substring(start));this.pos++}return e},this.value_quotes=function(){this.match('"',!1);var e=this.pos,t=!1;while(1){if(!t){if('"'==this.input[this.pos]){var s=this.pos;return this.match('"',!1),this.input.substring(e,s)}if(this.pos>=this.input.length-1)throw TypeError("Unterminated value: value_quotes",this.input.substring(e))}t="\\"==this.input[this.pos]&&0==t,this.pos++}},this.single_value=function(){var e=this.pos;if(this.tryMatch("{"))return this.value_braces();if(this.tryMatch('"'))return this.value_quotes();var t=this.key();if(t.match("^[0-9]+$"))return t;if(this.months.indexOf(t.toLowerCase())>=0)return t.toLowerCase();throw"Value expected: single_value"+this.input.substring(e)+" for key: "+t},this.value=function(){var e=[];e.push(this.single_value());while(this.tryMatch("#"))this.match("#"),e.push(this.single_value());return e.join("")},this.key=function(e){var t=this.pos;while(1){if(this.pos>=this.input.length)throw TypeError("Runaway key: key");if(this.notKey.indexOf(this.input[this.pos])>=0)return e&&","!=this.input[this.pos]?(this.pos=t,null):this.input.substring(t,this.pos);this.pos++}},this.key_equals_value=function(){var e=this.key();if(this.tryMatch("=")){this.match("=");var t=this.value();return e=e.trim(),[e,t]}throw TypeError("Value expected, equals sign missing: key_equals_value",this.input.substring(this.pos))},this.key_value_list=function(){var e=this.key_equals_value();this.currentEntry["entryTags"]={},this.currentEntry["entryTags"][e[0]]=e[1];while(this.tryMatch(",")){if(this.match(","),this.tryMatch("}"))break;e=this.key_equals_value(),this.currentEntry["entryTags"][e[0]]=e[1]}},this.entry_body=function(e){this.currentEntry={},this.currentEntry["citationKey"]=this.key(!0),this.currentEntry["entryType"]=e.substring(1),null!=this.currentEntry["citationKey"]&&this.match(","),this.key_value_list(),this.entries.push(this.currentEntry)},this.directive=function(){return this.match("@"),"@"+this.key()},this.preamble=function(){this.currentEntry={},this.currentEntry["entryType"]="PREAMBLE",this.currentEntry["entry"]=this.value_comment(),this.entries.push(this.currentEntry)},this.comment=function(){this.currentEntry={},this.currentEntry["entryType"]="COMMENT",this.currentEntry["entry"]=this.value_comment(),this.entries.push(this.currentEntry)},this.entry=function(e){this.entry_body(e)},this.alernativeCitationKey=function(){this.entries.forEach((function(e){!e.citationKey&&e.entryTags&&(e.citationKey="",e.entryTags.author&&(e.citationKey+=e.entryTags.author.split(",")[0]+=", "),e.citationKey+=e.entryTags.year)}))},this.bibtex=function(){while(this.matchAt()){var e=this.directive();this.match("{"),"@STRING"==e.toUpperCase()?this.string():"@PREAMBLE"==e.toUpperCase()?this.preamble():"@COMMENT"==e.toUpperCase()?this.comment():this.entry(e),this.match("}")}this.alernativeCitationKey()}}e.toJSON=function(e){var s=new t;return s.setInput(e),s.bibtex(),s.entries},e.toBibtex=function(e,t){void 0===t&&(t=!0);var s="",a=",",n="";for(var r in t||(a=",\n",n="    "),e){if(s+="@"+e[r].entryType,s+="{",e[r].citationKey&&(s+=e[r].citationKey+a),e[r].entry&&(s+=e[r].entry),e[r].entryTags){var i=n;for(var o in e[r].entryTags)0!=i.trim().length&&(i+=a+n),i+=o+(t?"={":" = {")+e[r].entryTags[o]+"}";s+=i}s+=t?"}\n":"\n}\n\n"}return s}})(t)},"12a8":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"research-lines"}},[s("b-container",[s("h1",[e._v("Research Lines")]),s("research-lines-group",{attrs:{researchLines:e.researchLines}})],1)],1)},n=[],r=s("3e8a"),i=s("f32b"),o={components:{ResearchLinesGroup:i["default"]},computed:{researchLines:function(){return r["default"].getResearchLines()}}},c=o,u=s("2877"),l=Object(u["a"])(c,a,n,!1,null,"18e8c042",null);t["default"]=l.exports},1360:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"projects-group"}},e._l(e.projects,(function(t){return s("b-card",{attrs:{title:t.name,"sub-title":"Powered by: "+t.fundingOrganization+" | Coordinator: Bruno Cafeo"}},[e._v(" "+e._s(""+t.description)+" ")])})),1)},n=[],r={name:"ProjectsGroup",props:{projects:Array}},i=r,o=s("2877"),c=Object(o["a"])(i,a,n,!1,null,"899daf88",null);t["default"]=c.exports},"13d9":function(e,t){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,s=[],a=0;a<e.rangeCount;a++)s.push(e.getRangeAt(a));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null;break}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||s.forEach((function(t){e.addRange(t)})),t&&t.focus()}}},"140b":function(e,t,s){e.exports=s.p+"img/bruno-cafeo.3eada5d0.jpeg"},3936:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"card-list"}},[a("b-row",{attrs:{cols:"1","cols-sm":"2","cols-md":"4","cols-lg":"6","align-h":"center"}},e._l(e.people,(function(t){return a("b-card",{key:t.id,staticClass:"m-3",attrs:{title:t.name,"img-src":s("a8ec")("./"+t.imageSource),"img-alt":t.name,"img-top":"","img-height":"200","img-width":"140"},on:{click:function(s){return e.$emit("click",t.id)}}})})),1)],1)},n=[],r={name:"PersonCardList",props:{people:Array}},i=r,o=s("2877"),c=Object(o["a"])(i,a,n,!1,null,"b8bacff0",null);t["default"]=c.exports},"440f":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"news"}},[s("b-container",[s("h1",[e._v("News")]),s("news-group",{attrs:{news:e.news}})],1)],1)},n=[],r=s("93fd"),i=s("3e8a"),o={name:"News",components:{NewsGroup:r["default"]},computed:{news:function(){return i["default"].getNews()}}},c=o,u=s("2877"),l=Object(u["a"])(c,a,n,!1,null,"4045c375",null);t["default"]=l.exports},"44c4":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"projects"}},[s("b-container",[s("h1",[e._v("Projects")]),s("projects-group",{attrs:{projects:e.projects}})],1)],1)},n=[],r=s("3e8a"),i=s("1360"),o={name:"Projetcs",components:{ProjectsGroup:i["default"]},computed:{projects:function(){return r["default"].getProjects()}}},c=o,u=s("2877"),l=Object(u["a"])(c,a,n,!1,null,"4f0c5636",null);t["default"]=l.exports},"496a":function(e,t,s){e.exports=s.p+"img/foto-do-grupo.f305b34b.jpg"},"6eab":function(e,t,s){e.exports=s.p+"img/sabia-belle.c9841de3.png"},7134:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"softwares"}},[s("b-container",[s("h1",[e._v("Softwares and Databases")]),e.softwares.length?s("h2",[e._v("Softwares")]):e._e(),e._l(e.softwares,(function(t){return s("b-list-group",[s("b-list-group-item",[s("a",{attrs:{href:t.link,target:"_blank"}},[e._v(e._s(t.name))]),e._v(": "+e._s(t.description)+" ")])],1)})),e.datasets.length?s("h2",[e._v("Datasets")]):e._e(),e._l(e.datasets,(function(t){return s("b-list-group",[s("b-list-group-item",[s("a",{attrs:{href:t.link,target:"_blank"}},[e._v(e._s(t.name))]),e._v(": "+e._s(t.description)+" ")])],1)}))],2)],1)},n=[],r=s("3e8a"),i={name:"Softwares",computed:{softwares:function(){return r["default"].getSoftwares()},datasets:function(){return r["default"].getDatasets()}}},o=i,c=s("2877"),u=Object(c["a"])(o,a,n,!1,null,"86e04f94",null);t["default"]=u.exports},"734e":function(e,t,s){e.exports=s.p+"img/matheus-m.8641b9ee.png"},"913c":function(e,t,s){e.exports=s.p+"img/gabriel-menezes.0fa8bd3f.jpg"},"93fd":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"news-group"}},e._l(e.news,(function(t){return a("b-card",{staticClass:"mb-3",attrs:{"img-src":s("a8ec")("./"+t.imageSource),"img-left":"","img-width":"20%",title:t.title,"sub-title":t.date}},[e._v(e._s(t.description))])})),1)},n=[],r={name:"NewsGroup",props:{news:Array}},i=r,o=s("2877"),c=Object(o["a"])(i,a,n,!1,null,"102de9e4",null);t["default"]=c.exports},9456:function(e,t,s){e.exports=s.p+"img/celso-junior.74b8237f.jpeg"},a8ec:function(e,t,s){var a={"./App":"3dfd","./App.vue":"3dfd","./assets/foto-do-grupo.jpg":"496a","./assets/logo.png":"cf05","./assets/news/new-computer.jpeg":"b591","./assets/professors/awdren-fontao.jpeg":"ac35","./assets/professors/bruno-cafeo.jpeg":"140b","./assets/students/adriano-marques.png":"f5d8","./assets/students/celso-junior.jpeg":"9456","./assets/students/elder-cirilo.png":"cd1a","./assets/students/gabriel-menezes.jpg":"913c","./assets/students/karolina-neves.png":"f04a","./assets/students/matheus-m.png":"734e","./assets/students/sabia-belle.png":"6eab","./components/Footer":"fd2d","./components/Footer.vue":"fd2d","./components/NavBar":"d000","./components/NavBar.vue":"d000","./components/PersonCardList":"3936","./components/PersonCardList.vue":"3936","./components/PersonPerfil":"c4be","./components/PersonPerfil.vue":"c4be","./database":"3e8a","./database/":"3e8a","./database/classes":"02bb","./database/classes/":"02bb","./database/classes/001_Introduction_Software_Engineering":"4f45","./database/classes/001_Introduction_Software_Engineering.json":"4f45","./database/classes/002_Database":"74f1","./database/classes/002_Database.json":"74f1","./database/classes/003_Software_Testing_Verification_Validation":"8aa6","./database/classes/003_Software_Testing_Verification_Validation.json":"8aa6","./database/classes/index":"02bb","./database/classes/index.js":"02bb","./database/home":"c727","./database/home/":"c727","./database/home/home":"e223","./database/home/home.json":"e223","./database/home/index":"c727","./database/home/index.js":"c727","./database/index":"3e8a","./database/index.js":"3e8a","./database/news":"25c0","./database/news/":"25c0","./database/news/001_New_Computer":"7e7d","./database/news/001_New_Computer.json":"7e7d","./database/news/index":"25c0","./database/news/index.js":"25c0","./database/professors":"a32e","./database/professors/":"a32e","./database/professors/001_Bruno_Cafeo":"ca66","./database/professors/001_Bruno_Cafeo.json":"ca66","./database/professors/index":"a32e","./database/professors/index.js":"a32e","./database/projects":"6c52","./database/projects/":"6c52","./database/projects/001_Project_Name":"5f6b","./database/projects/001_Project_Name.json":"5f6b","./database/projects/index":"6c52","./database/projects/index.js":"6c52","./database/publications":"a0ce","./database/publications/":"a0ce","./database/publications/001_Menezes_2019_Framework":"da0a","./database/publications/001_Menezes_2019_Framework.json":"da0a","./database/publications/002_Braga_2020_Quero":"b57f","./database/publications/002_Braga_2020_Quero.json":"b57f","./database/publications/index":"a0ce","./database/publications/index.js":"a0ce","./database/reserchlines":"86e3","./database/reserchlines/":"86e3","./database/reserchlines/001_Research_Line_Name":"769d","./database/reserchlines/001_Research_Line_Name.json":"769d","./database/reserchlines/002_Research_Line_Name":"af22","./database/reserchlines/002_Research_Line_Name.json":"af22","./database/reserchlines/index":"86e3","./database/reserchlines/index.js":"86e3","./database/softwares":"1a43","./database/softwares/":"1a43","./database/softwares/001_Nome_2019":"0406","./database/softwares/001_Nome_2019.json":"0406","./database/softwares/002_Nome_2019":"361d","./database/softwares/002_Nome_2019.json":"361d","./database/softwares/003_Nome_2019":"cd6a","./database/softwares/003_Nome_2019.json":"cd6a","./database/softwares/index":"1a43","./database/softwares/index.js":"1a43","./database/students":"f55c","./database/students/":"f55c","./database/students/001_Gabriel_Menezes":"62e7","./database/students/001_Gabriel_Menezes.json":"62e7","./database/students/002_Karolina_Neves":"899d","./database/students/002_Karolina_Neves.json":"899d","./database/students/003_Adriano_Marques":"9d67","./database/students/003_Adriano_Marques.json":"9d67","./database/students/004_Sabia_Belle":"584f","./database/students/004_Sabia_Belle.json":"584f","./database/students/005_Matheus_M":"4ae5","./database/students/005_Matheus_M.json":"4ae5","./database/students/006_Celso_Junior":"d0ae","./database/students/006_Celso_Junior.json":"d0ae","./database/students/007_Elder_Cirilo":"cc14","./database/students/007_Elder_Cirilo.json":"cc14","./database/students/index":"f55c","./database/students/index.js":"f55c","./database/vacancies":"1e57","./database/vacancies/":"1e57","./database/vacancies/001_Vacancy":"b0b3","./database/vacancies/001_Vacancy.json":"b0b3","./database/vacancies/002_Vacancy":"82e3","./database/vacancies/002_Vacancy.json":"82e3","./database/vacancies/index":"1e57","./database/vacancies/index.js":"1e57","./main":"56d7","./main.js":"56d7","./plugins/bootstrap-vue":"135e","./plugins/bootstrap-vue.js":"135e","./plugins/vue-scroll-loader":"c5e8","./plugins/vue-scroll-loader.js":"c5e8","./router":"a18c","./router/":"a18c","./router/index":"a18c","./router/index.js":"a18c","./views/Classes/Classes":"f445","./views/Classes/Classes.vue":"f445","./views/Classes/ClassesGroup":"e826","./views/Classes/ClassesGroup.vue":"e826","./views/Home":"bb51","./views/Home.vue":"bb51","./views/News/News":"440f","./views/News/News.vue":"440f","./views/News/NewsGroup":"93fd","./views/News/NewsGroup.vue":"93fd","./views/Professors/Professor":"f40c","./views/Professors/Professor.vue":"f40c","./views/Professors/Professors":"f58e","./views/Professors/Professors.vue":"f58e","./views/Projects/ProjectsGroup":"1360","./views/Projects/ProjectsGroup.vue":"1360","./views/Projects/Projetcs":"44c4","./views/Projects/Projetcs.vue":"44c4","./views/Publications/PublicationGroup":"ce05","./views/Publications/PublicationGroup.vue":"ce05","./views/Publications/Publications":"ac78","./views/Publications/Publications.vue":"ac78","./views/ResearchLines/ResearchLines":"12a8","./views/ResearchLines/ResearchLines.vue":"12a8","./views/ResearchLines/ResearchLinesGroup":"f32b","./views/ResearchLines/ResearchLinesGroup.vue":"f32b","./views/Softwares/Softwares":"7134","./views/Softwares/Softwares.vue":"7134","./views/Students/Student":"e313","./views/Students/Student.vue":"e313","./views/Students/Students":"f64e","./views/Students/Students.vue":"f64e","./views/Vacancies/Vacancies":"ecd5","./views/Vacancies/Vacancies.vue":"ecd5","./views/Vacancies/VacanciesGroup":"efb0","./views/Vacancies/VacanciesGroup.vue":"efb0"};function n(e){var t=r(e);return s(t)}function r(e){if(!s.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}n.keys=function(){return Object.keys(a)},n.resolve=r,e.exports=n,n.id="a8ec"},ac35:function(e,t,s){e.exports=s.p+"img/awdren-fontao.620ab3d0.jpeg"},ac78:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"publications"}},[s("b-container",[s("h1",[e._v("Publications")]),s("publication-group",{attrs:{publications:e.publications}})],1)],1)},n=[],r=s("ce05"),i=s("3e8a"),o={components:{PublicationGroup:r["default"]},computed:{publications:function(){return i["default"].getPublications()}}},c=o,u=s("2877"),l=Object(u["a"])(c,a,n,!1,null,"a5de0be8",null);t["default"]=l.exports},b591:function(e,t,s){e.exports=s.p+"img/new-computer.06596071.jpeg"},bf19:function(e,t,s){"use strict";var a=s("23e7");a({target:"URL",proto:!0,enumerable:!0},{toJSON:function(){return URL.prototype.toString.call(this)}})},c4be:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"person-perfil"}},[a("h2",{staticClass:"mb-4"},[e._v(e._s(e.person.name))]),a("b-container",{staticClass:"mb-4"},[a("b-row",[a("b-col",[e.person.imageSource?a("b-img",{staticClass:"mb-3",attrs:{src:s("a8ec")("./"+e.person.imageSource),fluid:"",alt:"",height:"200px",width:"300px"}}):e._e(),void 0!=e.person.interestAreas?a("div",[a("b-card-group",e._l(e.person.interestAreas,(function(t){return a("b-card",[e._v(e._s(t))])})),1)],1):e._e()],1),a("b-col",{attrs:{cols:"8"}},[e.person.description?a("div",[a("p",[e._v(e._s(e.person.description))])]):e._e()])],1)],1),void 0!=e.person.publications?a("div",{staticClass:"mb-4"},[e.person.publications.length?a("h3",[e._v("Publications")]):e._e(),e.person.publications?a("publication-group",{attrs:{publications:e.person.publications}}):e._e()],1):e._e(),void 0!=e.person.students?a("div",{staticClass:"mb-4"},[e.person.students.length?a("h3",[e._v("Students")]):e._e(),a("person-card-list",{attrs:{people:e.person.students},on:{click:function(t){return e.$emit("click",t)}}})],1):e._e(),e.person.advisor?a("div",[a("h3",[e._v("Advisor")]),a("person-card-list",{attrs:{people:[e.person.advisor]},on:{click:function(t){return e.goToAdvisorPage(t)}}})],1):e._e(),void 0!=e.person.courses?a("div",[e.person.courses.length?a("h3",[e._v("Courses")]):e._e(),a("classes-group",{attrs:{courses:e.person.courses}})],1):e._e(),void 0!=e.person.projects?a("div",[e.person.projects.length?a("h3",[e._v("Projects")]):e._e(),a("projects-group",{attrs:{projects:e.person.projects}})],1):e._e()],1)},n=[],r=s("ce05"),i=s("3936"),o=s("e826"),c=s("1360"),u=s("f32b"),l={name:"PersonPerfil",components:{PersonCardList:i["default"],PublicationGroup:r["default"],ClassesGroup:o["default"],ProjectsGroup:c["default"],ResearchLinesGroup:u["default"]},props:{person:Object}},d=l,p=s("2877"),f=Object(p["a"])(d,a,n,!1,null,"0e4a0f3e",null);t["default"]=f.exports},cd1a:function(e,t){e.exports="data:image/png;base64,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"},ce05:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"publication-group"}},[e._l(e.publications,(function(t){return s("b-card",{attrs:{"img-left":"","body-class":"card-publication"}},[e._v(" "+e._s(e.getAuthor(t.bibtex)+" ("+e.getYear(t.bibtex)+"). "+e.getTitle(t.bibtex)+", In "+e.getConference(t.bibtex))+" "),s("b-button",{attrs:{target:"_blank"},on:{click:function(s){return e.openModal(t)}}},[s("b-icon",{attrs:{icon:"info-circle","aria-hidden":"true"}})],1)],1)})),s("b-modal",{attrs:{id:"modal",title:"More information",centered:""}},[s("div",{staticStyle:{display:"flex","flex-direction":"column"},attrs:{className:"mx-5"}},[e.selected_publication.filePath?s("b-button",{attrs:{className:"button-publication m-2",href:e.publication.filePath}},[s("b-icon",{attrs:{icon:"download","aria-hidden":"true"}}),e._v(" Download File ")],1):e._e(),e.selected_publication.bibtex?s("b-button",{attrs:{className:"button-publication m-2"},on:{click:function(t){return e.copyToClipboard(e.selected_publication.bibtex)}}},[s("b-icon",{attrs:{icon:"clipboard","aria-hidden":"true"}}),e._v(" Copy Bibtex ")],1):e._e(),e.selected_publication.officialLink?s("b-button",{attrs:{className:"button-publication m-2",href:e.selected_publication.officialLink,target:"_blank"}},[s("b-icon",{attrs:{icon:"link","aria-hidden":"true"}}),e._v(" Go to Official page ")],1):e._e(),e.selected_publication.arxivLink?s("b-button",{attrs:{className:"button-publication m-2",href:e.selected_publication.arxivLink,target:"_blank"}},[s("b-icon",{attrs:{icon:"link","aria-hidden":"true"}}),e._v(" Go to Arxiv page ")],1):e._e()],1)])],2)},n=[],r=(s("bf19"),s("0b9c")),i=s.n(r),o=s("f904"),c=s.n(o),u={name:"PublicationGroup",props:{publications:Array},computed:{showModal:function(){return!1}},data:function(){return{selected_publication:Object}},methods:{getAuthor:function(e){return i.a.toJSON(e)[0].entryTags.author},getYear:function(e){return i.a.toJSON(e)[0].entryTags.year},getTitle:function(e){return i.a.toJSON(e)[0].entryTags.title},getConference:function(e){return i.a.toJSON(e)[0].entryTags.booktitle},copyToClipboard:function(e){try{c()(e),this.clipboardSuccessHandler()}catch(t){this.clipboardErrorHandler()}},clipboardSuccessHandler:function(){this.$bvToast.toast("The bibtex was successfully copied",{title:"Copied successfully",autoHideDelay:5e3,appendToast:!0})},clipboardErrorHandler:function(){this.$bvToast.toast("Failed to copy bibtex to clipboard",{title:"Failed to copy",autoHideDelay:5e3,appendToast:!0})},openModal:function(e){this.selected_publication=e,this.$bvModal.show("modal")}}},l=u,d=s("2877"),p=Object(d["a"])(l,a,n,!1,null,"45d3907f",null);t["default"]=p.exports},cf05:function(e,t,s){e.exports=s.p+"img/logo.82b9c7a5.png"},e313:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"student"}},[s("b-container",[s("person-perfil",{attrs:{person:this.getStudentById}})],1)],1)},n=[],r=s("c4be"),i=s("3e8a"),o={components:{PersonPerfil:r["default"]},computed:{getStudentById:function(){return i["default"].getStudentById(this.$route.params.id)}}},c=o,u=s("2877"),l=Object(u["a"])(c,a,n,!1,null,"f923df9e",null);t["default"]=l.exports},e826:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"classes-group"}},e._l(e.classes,(function(t){return s("b-card",[e._v(e._s(t.name))])})),1)},n=[],r={name:"ClassesGroup",props:{classes:Array}},i=r,o=s("2877"),c=Object(o["a"])(i,a,n,!1,null,"4ab19f00",null);t["default"]=c.exports},ecd5:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"vacancies"}},[s("b-container",[s("h1",[e._v("Vacancies")]),s("vacancies-group",{attrs:{vacancies:e.vacancies}})],1)],1)},n=[],r=s("efb0"),i=s("3e8a"),o={components:{VacanciesGroup:r["default"]},computed:{vacancies:function(){return i["default"].getVacancies()}}},c=o,u=s("2877"),l=Object(u["a"])(c,a,n,!1,null,"f3c5f1d6",null);t["default"]=l.exports},efb0:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"vacancies-group"}},e._l(e.vacancies,(function(t){return s("b-card",{attrs:{title:t.title,"sub-title":"Type: "+t.type}},[e._v(" "+e._s(""+t.description)+" ")])})),1)},n=[],r={name:"VacanciesGroup",props:{vacancies:Array}},i=r,o=s("2877"),c=Object(o["a"])(i,a,n,!1,null,"20243d06",null);t["default"]=c.exports},f04a:function(e,t,s){e.exports=s.p+"img/karolina-neves.f6c8ac82.png"},f32b:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"research-lines-group"}},e._l(e.researchLines,(function(t){return s("b-card",{attrs:{title:t.name}},[e._v(e._s(t.description))])})),1)},n=[],r={name:"ResearchLinesGroup",props:{researchLines:Array}},i=r,o=s("2877"),c=Object(o["a"])(i,a,n,!1,null,"5f6aeb0b",null);t["default"]=c.exports},f40c:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"professor"}},[s("b-container",[s("person-perfil",{attrs:{person:this.professor},on:{click:function(t){return e.clickHandler(t)}}})],1)],1)},n=[],r=s("c4be"),i=s("3e8a"),o={components:{PersonPerfil:r["default"]},computed:{professor:function(){return i["default"].getProfessorById(this.$route.params.id)}},methods:{clickHandler:function(e){this.$router.push({name:"Student",params:{id:e}})}}},c=o,u=s("2877"),l=Object(u["a"])(c,a,n,!1,null,"1b7937a7",null);t["default"]=l.exports},f445:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"classes"}},[s("b-container",[s("h1",[e._v("Classes")]),s("classes-group",{attrs:{classes:e.classes}})],1)],1)},n=[],r=s("3e8a"),i=s("e826"),o={name:"Classes",components:{ClassesGroup:i["default"]},computed:{classes:function(){return r["default"].getClasses()}}},c=o,u=s("2877"),l=Object(u["a"])(c,a,n,!1,null,"352750cf",null);t["default"]=l.exports},f58e:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"professors"}},[s("b-container",[s("h1",[e._v("Professors")]),s("person-card-list",{attrs:{people:this.professors},on:{click:function(t){return e.clickHandler(t)}}})],1)],1)},n=[],r=s("3936"),i=s("3e8a"),o={components:{PersonCardList:r["default"]},computed:{professors:function(){return i["default"].getProfessors()}},methods:{clickHandler:function(e){this.$router.push({name:"Professor",params:{id:e}})}}},c=o,u=s("2877"),l=Object(u["a"])(c,a,n,!1,null,"60fb05b2",null);t["default"]=l.exports},f5d8:function(e,t,s){e.exports=s.p+"img/adriano-marques.4b608452.png"},f64e:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"students"}},[s("b-container",[s("h1",[e._v("Students")]),s("person-card-list",{attrs:{people:e.students},on:{click:function(t){return e.clickHandler(t)}}})],1)],1)},n=[],r=s("3936"),i=s("3e8a"),o={components:{PersonCardList:r["default"]},computed:{students:function(){return i["default"].getStudents()}},methods:{clickHandler:function(e){this.$router.push({name:"Student",params:{id:e}})}}},c=o,u=s("2877"),l=Object(u["a"])(c,a,n,!1,null,"f9d09680",null);t["default"]=l.exports},f904:function(e,t,s){"use strict";var a=s("13d9"),n={"text/plain":"Text","text/html":"Url",default:"Text"},r="Copy to clipboard: #{key}, Enter";function i(e){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}function o(e,t){var s,o,c,u,l,d,p=!1;t||(t={}),s=t.debug||!1;try{c=a(),u=document.createRange(),l=document.getSelection(),d=document.createElement("span"),d.textContent=e,d.style.all="unset",d.style.position="fixed",d.style.top=0,d.style.clip="rect(0, 0, 0, 0)",d.style.whiteSpace="pre",d.style.webkitUserSelect="text",d.style.MozUserSelect="text",d.style.msUserSelect="text",d.style.userSelect="text",d.addEventListener("copy",(function(a){if(a.stopPropagation(),t.format)if(a.preventDefault(),"undefined"===typeof a.clipboardData){s&&console.warn("unable to use e.clipboardData"),s&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var r=n[t.format]||n["default"];window.clipboardData.setData(r,e)}else a.clipboardData.clearData(),a.clipboardData.setData(t.format,e);t.onCopy&&(a.preventDefault(),t.onCopy(a.clipboardData))})),document.body.appendChild(d),u.selectNodeContents(d),l.addRange(u);var f=document.execCommand("copy");if(!f)throw new Error("copy command was unsuccessful");p=!0}catch(b){s&&console.error("unable to copy using execCommand: ",b),s&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),p=!0}catch(b){s&&console.error("unable to copy using clipboardData: ",b),s&&console.error("falling back to prompt"),o=i("message"in t?t.message:r),window.prompt(o,e)}}finally{l&&("function"==typeof l.removeRange?l.removeRange(u):l.removeAllRanges()),d&&document.body.removeChild(d),c()}return p}e.exports=o}}]);
//# sourceMappingURL=News.96edf55f.js.map