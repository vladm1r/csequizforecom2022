(function(){"use strict";var t={7020:function(t,e,s){var n=s(8935),a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("MainPageView")],1)},r=[],i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"main-container"},[s("ArrowsSvg",{staticClass:"arrows",attrs:{isActive:t.animActive}}),s("transition",{attrs:{name:"fade",mode:"out-in"}},[s(t.currentStep,{tag:"component",staticClass:"step",attrs:{data:t.data,errorInputs:t.errorInputs,focusedInput:t.focusedInput},on:{next:t.onNext,back:t.onBack,skip:t.onSkip,backToMain:t.resetData,onInputFocus:t.onInputFocus,onInputChange:t.onInputChange}})],1),s("transition",{attrs:{name:"keyboard-fade"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.focusedInput,expression:"focusedInput"}],staticClass:"keyboard-container"},[s("SimpleKeyboard",{attrs:{input:t.data[t.focusedInput],inputName:t.focusedInput},on:{onChange:t.onChange}})],1)])],1)},o=[],p=(s(6699),s(1703),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hello-step"},[s("BirthdayLogo",{staticClass:"hello-step__logo"}),t._m(0),s("AppButton",t._g({attrs:{action:"next"}},t.$listeners),[t._v(" получить подарок ")])],1)}),l=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"hello-step__text"},[t._v(" Курьер Сервис Экспресс "),s("br"),s("span",[t._v("дарит подарки")]),t._v(" "),s("br"),t._v(" в честь своего 25-летия ")])}],c=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},u=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"birthday-logo"},[n("img",{attrs:{src:s(7751),alt:""}})])}],d={},h=d,L=s(1001),m=(0,L.Z)(h,c,u,!1,null,"08c06739",null),f=m.exports,_=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"btn-container"},[s("button",{staticClass:"btn",class:t.getClass(),attrs:{type:"button"},on:{click:t.onClick}},[t._t("default")],2)])},C=[],g={props:{btnType:{type:String,default:"main"},action:{type:String,default:""}},methods:{getClass(){return"simpleText"===this.btnType?"btn_simple-text":"bigText"===this.btnType?"btn_big-text":"btn_main"},onClick(){this.$emit(this.action)}}},v=g,b=(0,L.Z)(v,_,C,!1,null,"ff8af31c",null),y=b.exports,Z={components:{BirthdayLogo:f,AppButton:y}},M=Z,x=(0,L.Z)(M,p,l,!1,null,"83c06852",null),k=x.exports,A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"present-step"},[n("AppLogo",{staticClass:"present-step__logo"}),n("div",{staticClass:"present-list"},[n("PresentItem",{staticClass:"present-list__item",attrs:{name:"мини - путешествие"}},[n("img",{attrs:{src:s(2048),alt:""}})]),n("PresentItem",{staticClass:"present-list__item",attrs:{name:"поездка на теплоходе"}},[n("img",{attrs:{src:s(6016),alt:""}})]),n("PresentItem",{staticClass:"present-list__item",attrs:{name:"набор для барбекю"}},[n("img",{attrs:{src:s(5316),alt:""}})])],1),n("AppButton",t._g({attrs:{action:"next"}},t.$listeners),[t._v(" продолжить ")])],1)},w=[],I=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},$=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"logo"},[n("img",{attrs:{src:s(9574),alt:""}})])}],T={},S=T,B=(0,L.Z)(S,I,$,!1,null,"77a46e59",null),E=B.exports,O=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"present-item"},[s("div",{staticClass:"present-item__label"},[t._v(" "+t._s(t.name)+" ")]),t._t("default")],2)},F=[],P={props:{name:{type:String,require:!0}}},j=P,D=(0,L.Z)(j,O,F,!1,null,"36b5fb38",null),N=D.exports,K={components:{AppLogo:E,AppButton:y,PresentItem:N}},G=K,R=(0,L.Z)(G,A,w,!1,null,"6ea3b997",null),V=R.exports,q=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"personal-data-step"},[s("AppButton",t._g({staticClass:"back-to-main-btn",attrs:{btnType:"simpleText",action:"backToMain"}},t.$listeners),[t._v(" Главная страница ")]),s("AppLogo",{staticClass:"personal-data-step__logo"}),t._m(0),s("AppInput",t._g(t._b({staticClass:"personal-data-step__input",attrs:{name:"name",placeholder:"Ф.И.О"}},"AppInput",t.$attrs,!1),t.$listeners)),s("AppInput",t._g(t._b({staticClass:"personal-data-step__input",attrs:{name:"email",type:"email",placeholder:"Email"}},"AppInput",t.$attrs,!1),t.$listeners)),s("AppInput",t._g(t._b({staticClass:"personal-data-step__input",attrs:{name:"phone",type:"tel",placeholder:"+7 (000) 00-00-00"}},"AppInput",t.$attrs,!1),t.$listeners)),s("p",{staticClass:"personal-data-step__info"},[t._v(" Учавствуя в розыгрыше, вы даете согласие на участие персональных данных ")]),s("AppButton",t._g({attrs:{action:"next"}},t.$listeners),[t._v(" отправить ")])],1)},U=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"personal-data-step__text"},[t._v(" Для участия в конкурсе "),s("br"),t._v(" заполните анкету! ")])}],z=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"input-cont"},[s("input",{staticClass:"input",class:{error:t.isError,focus:t.isFocus},attrs:{id:t.name,type:t.type,placeholder:t.placeholder,readonly:""},domProps:{value:t.inputValue},on:{focus:t.onInputFocus,input:t.onInputChange}})])},H=[],J={props:{data:{type:Object},errorInputs:{type:Array},name:{type:String,required:!0},type:{type:String,default:"text"},placeholder:{type:String,default:""},focusedInput:{type:String,default:""}},data(){return{isError:!1,isFocus:!1}},computed:{inputValue:function(){return this.data[this.name]}},watch:{errorInputs:{handler(t){t.includes(this.name)?this.isError=!0:this.isError=!1}},focusedInput(t){t===this.name?this.isFocus=!0:this.isFocus=!1}},methods:{onInputChange(t){this.$emit("onInputChange",t)},onInputFocus(t){this.$emit("onInputFocus",t)}}},Q=J,W=(0,L.Z)(Q,z,H,!1,null,"1ab12322",null),X=W.exports,Y={components:{AppLogo:E,AppInput:X,AppButton:y}},tt=Y,et=(0,L.Z)(tt,q,U,!1,null,"732b2a3c",null),st=et.exports,nt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"company-data-step"},[s("AppButton",t._g({staticClass:"back-to-main-btn",attrs:{btnType:"simpleText",action:"backToMain"}},t.$listeners),[t._v(" Главная страница ")]),s("AppLogo",{staticClass:"company-data-step__logo"}),t._m(0),t._m(1),s("AppInput",t._g(t._b({staticClass:"company-data-step__input",attrs:{name:"company",placeholder:"ООО “Холдинг-траспорт”"}},"AppInput",t.$attrs,!1),t.$listeners)),s("AppButton",t._g({attrs:{action:"next"}},t.$listeners),[t._v(" отправить ")]),s("AppButton",t._g({staticClass:"back-btn",attrs:{btnType:"bigText",action:"back"}},t.$listeners),[t._v(" назад ")])],1)},at=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"company-data-step__main-text"},[s("strong",[t._v("Отлично!")]),t._v(" "),s("br"),t._v(" Теперь вы участвуете "),s("br"),t._v(" в розыгрыше призов от КСЭ! ")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"company-data-step__sup-text"},[t._v(" Уточните, пожалуйста, из какой Вы компании? "),s("br"),t._v(" Чтобы знать, кто поздравил КСЭ с 25-летием! ")])}],rt={components:{AppLogo:E,AppInput:X,AppButton:y}},it=rt,ot=(0,L.Z)(it,nt,at,!1,null,"29f62c60",null),pt=ot.exports,lt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"recommend-data-step"},[s("AppButton",t._g({staticClass:"back-to-main-btn",attrs:{btnType:"simpleText",action:"backToMain"}},t.$listeners),[t._v(" Главная страница ")]),s("AppLogo",{staticClass:"recommend-data-step__logo"}),s("p",{staticClass:"recommend-data-step__thanks-text"},[t._v(" Спасибо, "+t._s(t.data.name)+" "),s("br"),t._v(" и "+t._s(t.data.company)+"! ")]),t._m(0),s("p",{staticClass:"recommend-data-step__request-text"},[t._v(" Может Вы, "+t._s(t.data.name)+", "),s("br"),t._v(" хотите кого-то порекомендовать, "),s("br"),t._v(" кому могли бы быть интересны наши услуги? ")]),s("AppInput",t._g(t._b({staticClass:"recommend-data-step__input",attrs:{name:"recname",placeholder:"Ф.И.О",data:t.data}},"AppInput",t.$attrs,!1),t.$listeners)),s("AppInput",t._g(t._b({staticClass:"recommend-data-step__input",attrs:{name:"recphone",placeholder:"+7 (000) 00-00-00",data:t.data}},"AppInput",t.$attrs,!1),t.$listeners)),s("AppButton",t._g({attrs:{action:"next"}},t.$listeners),[t._v(" отправить ")]),s("AppButton",t._g({staticClass:"back-btn",attrs:{btnType:"bigText",action:"skip"}},t.$listeners),[t._v(" пропустить ")]),s("AppButton",t._g({staticClass:"back-btn",attrs:{btnType:"bigText",action:"back"}},t.$listeners),[t._v(" назад ")])],1)},ct=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"recommend-data-step__sale-text"},[t._v(" Поэтому «тсс», "),s("br"),t._v(" мы отправим Вам на почту "),s("br"),t._v(" скидку 15%! ")])}],ut={components:{AppLogo:E,AppInput:X,AppButton:y},props:{data:{type:Object}}},dt=ut,ht=(0,L.Z)(dt,lt,ct,!1,null,"ec8805d0",null),Lt=ht.exports,mt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"thanks-step"},[s("AppButton",t._g({staticClass:"back-to-main-btn",attrs:{btnType:"simpleText",action:"backToMain"}},t.$listeners),[t._v(" Главная страница ")]),s("BirthdayLogo",{staticClass:"thanks-step__logo"}),s("p",{staticClass:"thanks-step__text"},[t._v(" Хорошего дня, "+t._s(t.data.name)+"! "),s("br"),t._v(" Очень надеемся, что КСЭ "),s("br"),t._v(" и "+t._s(t.data.company)+" "),s("br"),t._v("станут партнёрами! ")]),s("AppButton",t._g({staticClass:"back-btn",attrs:{btnType:"bigText",action:"back"}},t.$listeners),[t._v(" назад ")])],1)},ft=[],_t={components:{BirthdayLogo:f,AppButton:y},props:{data:{type:Object}}},Ct=_t,gt=(0,L.Z)(Ct,mt,ft,!1,null,"613b9a46",null),vt=gt.exports,bt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("svg",{class:{active:t.isActive},attrs:{width:"8211",height:"1678",viewBox:"0 0 8211 1678",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("g",{attrs:{filter:"url(#filter0_i_330_45)"}},[s("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M208.387 52.53L7200.91 4.16063C7207.21 4.95672 7213.29 7.17257 7218.79 10.6714C7224.29 14.1702 7229.09 18.8801 7232.89 24.5068L7798.05 791.795C7804.35 799.108 7807.9 808.802 7807.97 818.902C7808.04 829.001 7804.62 838.744 7798.42 846.143L7167.24 1466C7158.39 1474.42 7147.17 1479.17 7135.49 1479.44L6529.37 1483.64C6541.04 1483.36 6552.26 1478.61 6561.11 1470.19L7192.29 850.336C7198.49 842.937 7201.9 833.194 7201.83 823.095C7201.76 812.995 7198.21 803.301 7191.91 795.988L6626.75 28.6997C6622.96 23.0729 6618.16 18.3631 6612.66 14.8642C6607.16 11.3654 6601.07 9.14956 6594.77 8.35346L208 52.5327C208.129 52.5312 208.258 52.5303 208.387 52.53Z",fill:"#4A3024"}})]),s("g",{staticStyle:{"mix-blend-mode":"exclusion"}},[s("path",{attrs:{id:"orange-vector",d:"M7440.25 887L6646.38 1676.35",stroke:"#FF5100","stroke-width":"3"}})]),s("g",{attrs:{filter:"url(#filter1_i_330_45)"}},[s("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M606.387 52.53L7598.91 4.16063C7605.21 4.95672 7611.29 7.17257 7616.79 10.6714C7622.29 14.1702 7627.09 18.8801 7630.89 24.5068L8196.05 791.795C8202.35 799.108 8205.9 808.802 8205.97 818.902C8206.04 829.001 8202.62 838.744 8196.42 846.143L7565.24 1466C7556.39 1474.42 7545.17 1479.17 7533.49 1479.44L6927.37 1483.64C6939.04 1483.36 6950.26 1478.61 6959.11 1470.19L7590.29 850.336C7596.49 842.937 7599.9 833.194 7599.83 823.095C7599.76 812.995 7596.21 803.301 7589.91 795.988L7024.75 28.6997C7020.96 23.0729 7016.16 18.3631 7010.66 14.8642C7005.16 11.3654 6999.07 9.14956 6992.77 8.35346L606 52.5327C606.129 52.5312 606.258 52.5303 606.387 52.53Z",fill:"#4A3024"}})]),s("g",{staticStyle:{"mix-blend-mode":"soft-light"}},[s("mask",{attrs:{id:"path-4-inside-1_330_45",fill:"white"}},[s("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M0.386883 57.53L6992.91 9.16063C6999.21 9.95672 7005.29 12.1726 7010.79 15.6714C7016.29 19.1702 7021.09 23.8801 7024.89 29.5068L7590.05 796.795C7596.35 804.108 7599.9 813.802 7599.97 823.902C7600.04 834.001 7596.62 843.744 7590.42 851.143L6959.24 1471C6950.39 1479.42 6939.17 1484.17 6927.49 1484.44L6321.37 1488.64C6333.04 1488.36 6344.26 1483.61 6353.11 1475.19L6984.29 855.336C6990.49 847.937 6993.9 838.194 6993.83 828.095C6993.76 817.995 6990.21 808.301 6983.91 800.988L6418.75 33.6997C6414.96 28.0729 6410.16 23.3631 6404.66 19.8642C6399.16 16.3654 6393.07 14.1496 6386.77 13.3535L3.10652e-06 57.5327C0.128914 57.5312 0.257875 57.5303 0.386883 57.53Z"}})]),s("path",{attrs:{id:"gray-arrow",d:"M6992.91 9.16063L6993.41 5.19219L6993.15 5.15888L6992.88 5.16072L6992.91 9.16063ZM0.386883 57.53L0.39695 61.53L0.405751 61.5299L0.414552 61.5299L0.386883 57.53ZM7010.79 15.6714L7008.65 19.0464L7008.65 19.0465L7010.79 15.6714ZM7024.89 29.5068L7021.57 31.7442L7021.62 31.8126L7021.67 31.879L7024.89 29.5068ZM7590.05 796.795L7586.83 799.168L7586.92 799.29L7587.02 799.406L7590.05 796.795ZM7590.42 851.143L7593.23 853.997L7593.36 853.861L7593.49 853.712L7590.42 851.143ZM6959.24 1471L6962 1473.9L6962.02 1473.87L6962.04 1473.85L6959.24 1471ZM6927.49 1484.44L6927.52 1488.44L6927.55 1488.44L6927.58 1488.44L6927.49 1484.44ZM6321.37 1488.64L6321.27 1484.64L6321.39 1492.64L6321.37 1488.64ZM6353.11 1475.19L6355.86 1478.09L6355.89 1478.07L6355.91 1478.05L6353.11 1475.19ZM6984.29 855.336L6987.09 858.19L6987.23 858.054L6987.36 857.905L6984.29 855.336ZM6983.91 800.988L6980.69 803.36L6980.78 803.483L6980.88 803.599L6983.91 800.988ZM6418.75 33.6997L6415.44 35.9371L6415.48 36.0054L6415.53 36.0719L6418.75 33.6997ZM6404.66 19.8642L6406.81 16.4893L6406.81 16.4892L6404.66 19.8642ZM6386.77 13.3535L6387.28 9.38502L6387.01 9.35172L6386.75 9.35356L6386.77 13.3535ZM3.10652e-06 57.5327L-0.0459108 53.5329L0.0276716 61.5326L3.10652e-06 57.5327ZM6992.88 5.16072L0.359215 53.5301L0.414552 61.5299L6992.94 13.1605L6992.88 5.16072ZM7012.94 12.2965C7006.96 8.48967 7000.31 6.06433 6993.41 5.19219L6992.41 13.1291C6998.1 13.8491 7003.63 15.8555 7008.65 19.0464L7012.94 12.2965ZM7028.2 27.2694C7024.11 21.2067 7018.92 16.1025 7012.94 12.2964L7008.65 19.0465C7013.66 22.238 7018.07 26.5535 7021.57 31.7442L7028.2 27.2694ZM7593.27 794.423L7028.11 27.1346L7021.67 31.879L7586.83 799.168L7593.27 794.423ZM7603.97 823.874C7603.89 812.873 7600.03 802.251 7593.08 794.184L7587.02 799.406C7592.67 805.965 7595.9 814.731 7595.97 823.929L7603.97 823.874ZM7593.49 853.712C7600.33 845.55 7604.04 834.875 7603.97 823.874L7595.97 823.929C7596.03 833.127 7592.92 841.938 7587.36 848.574L7593.49 853.712ZM6962.04 1473.85L7593.23 853.997L7587.62 848.289L6956.44 1468.14L6962.04 1473.85ZM6927.58 1488.44C6940.3 1488.15 6952.46 1482.96 6962 1473.9L6956.48 1468.1C6948.31 1475.87 6938.03 1480.2 6927.4 1480.44L6927.58 1488.44ZM6321.39 1492.64L6927.52 1488.44L6927.46 1480.44L6321.34 1484.64L6321.39 1492.64ZM6321.46 1492.63C6334.17 1492.34 6346.33 1487.16 6355.86 1478.09L6350.35 1472.29C6342.18 1480.06 6331.9 1484.39 6321.27 1484.64L6321.46 1492.63ZM6355.91 1478.05L6987.09 858.19L6981.49 852.482L6350.3 1472.34L6355.91 1478.05ZM6987.36 857.905C6994.19 849.742 6997.91 839.068 6997.83 828.067L6989.83 828.122C6989.9 837.32 6986.78 846.131 6981.22 852.767L6987.36 857.905ZM6997.83 828.067C6997.76 817.066 6993.89 806.444 6986.94 798.377L6980.88 803.599C6986.53 810.158 6989.77 818.924 6989.83 828.122L6997.83 828.067ZM6987.13 798.616L6421.97 31.3274L6415.53 36.0719L6980.69 803.36L6987.13 798.616ZM6422.07 31.4623C6417.98 25.3995 6412.79 20.2954 6406.81 16.4893L6402.51 23.2392C6407.53 26.4308 6411.94 30.7463 6415.44 35.9371L6422.07 31.4623ZM6406.81 16.4892C6400.82 12.6825 6394.18 10.2572 6387.28 9.38502L6386.27 17.3219C6391.97 18.0419 6397.5 20.0483 6402.51 23.2393L6406.81 16.4892ZM6386.75 9.35356L-0.0276654 53.5328L0.0276716 61.5326L6386.8 17.3534L6386.75 9.35356ZM0.376817 53.53C0.235856 53.5303 0.0949461 53.5313 -0.0459108 53.5329L0.0459171 61.5324C0.162883 61.5311 0.279895 61.5303 0.39695 61.53L0.376817 53.53Z",fill:"white",mask:"url(#path-4-inside-1_330_45)"}})]),s("g",{staticStyle:{"mix-blend-mode":"exclusion"}},[s("mask",{attrs:{id:"path-6-inside-2_330_45",fill:"white"}},[s("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M206.387 55.53L7198.91 7.16063C7205.21 7.95672 7211.29 10.1726 7216.79 13.6714C7222.29 17.1702 7227.09 21.8801 7230.89 27.5068L7796.05 794.795C7802.35 802.108 7805.9 811.802 7805.97 821.902C7806.04 832.001 7802.62 841.744 7796.42 849.143L7165.24 1469C7156.39 1477.42 7145.17 1482.17 7133.49 1482.44L6527.37 1486.64C6539.04 1486.36 6550.26 1481.61 6559.11 1473.19L7190.29 853.336C7196.49 845.937 7199.9 836.194 7199.83 826.095C7199.76 815.995 7196.21 806.301 7189.91 798.988L6624.75 31.6997C6620.96 26.0729 6616.16 21.3631 6610.66 17.8642C6605.16 14.3654 6599.07 12.1496 6592.77 11.3535L206 55.5327C206.129 55.5312 206.258 55.5303 206.387 55.53Z"}})]),s("path",{attrs:{id:"orange-arrow",d:"M7198.91 7.16063L7199.41 3.19219L7199.15 3.15888L7198.88 3.16072L7198.91 7.16063ZM206.387 55.53L206.397 59.53L206.406 59.5299L206.415 59.5299L206.387 55.53ZM7216.79 13.6714L7214.65 17.0464L7214.65 17.0465L7216.79 13.6714ZM7230.89 27.5068L7227.57 29.7442L7227.62 29.8126L7227.67 29.879L7230.89 27.5068ZM7796.05 794.795L7792.83 797.168L7792.92 797.29L7793.02 797.406L7796.05 794.795ZM7796.42 849.143L7799.23 851.997L7799.36 851.861L7799.49 851.712L7796.42 849.143ZM7165.24 1469L7168 1471.9L7168.02 1471.87L7168.04 1471.85L7165.24 1469ZM7133.49 1482.44L7133.52 1486.44L7133.55 1486.44L7133.58 1486.44L7133.49 1482.44ZM6527.37 1486.64L6527.27 1482.64L6527.39 1490.64L6527.37 1486.64ZM6559.11 1473.19L6561.86 1476.09L6561.89 1476.07L6561.91 1476.05L6559.11 1473.19ZM7190.29 853.336L7193.09 856.19L7193.23 856.054L7193.36 855.905L7190.29 853.336ZM7189.91 798.988L7186.69 801.36L7186.78 801.483L7186.88 801.599L7189.91 798.988ZM6624.75 31.6997L6621.44 33.9371L6621.48 34.0054L6621.53 34.0719L6624.75 31.6997ZM6610.66 17.8642L6612.81 14.4893L6612.81 14.4892L6610.66 17.8642ZM6592.77 11.3535L6593.28 7.38502L6593.01 7.35172L6592.75 7.35356L6592.77 11.3535ZM206 55.5327L205.954 51.5329L206.028 59.5326L206 55.5327ZM7198.88 3.16072L206.359 51.5301L206.415 59.5299L7198.94 11.1605L7198.88 3.16072ZM7218.94 10.2965C7212.96 6.48967 7206.31 4.06433 7199.41 3.19219L7198.41 11.1291C7204.1 11.8491 7209.63 13.8555 7214.65 17.0464L7218.94 10.2965ZM7234.2 25.2694C7230.11 19.2067 7224.92 14.1025 7218.94 10.2964L7214.65 17.0465C7219.66 20.238 7224.07 24.5535 7227.57 29.7442L7234.2 25.2694ZM7799.27 792.423L7234.11 25.1346L7227.67 29.879L7792.83 797.168L7799.27 792.423ZM7809.97 821.874C7809.89 810.873 7806.03 800.251 7799.08 792.184L7793.02 797.406C7798.67 803.965 7801.9 812.731 7801.97 821.929L7809.97 821.874ZM7799.49 851.712C7806.33 843.55 7810.04 832.875 7809.97 821.874L7801.97 821.929C7802.03 831.127 7798.92 839.938 7793.36 846.574L7799.49 851.712ZM7168.04 1471.85L7799.23 851.997L7793.62 846.289L7162.44 1466.14L7168.04 1471.85ZM7133.58 1486.44C7146.3 1486.15 7158.46 1480.96 7168 1471.9L7162.48 1466.1C7154.31 1473.87 7144.03 1478.2 7133.4 1478.44L7133.58 1486.44ZM6527.39 1490.64L7133.52 1486.44L7133.46 1478.44L6527.34 1482.64L6527.39 1490.64ZM6527.46 1490.63C6540.17 1490.34 6552.33 1485.16 6561.86 1476.09L6556.35 1470.29C6548.18 1478.06 6537.9 1482.39 6527.27 1482.64L6527.46 1490.63ZM6561.91 1476.05L7193.09 856.19L7187.49 850.482L6556.3 1470.34L6561.91 1476.05ZM7193.36 855.905C7200.19 847.742 7203.91 837.068 7203.83 826.067L7195.83 826.122C7195.9 835.32 7192.78 844.131 7187.22 850.767L7193.36 855.905ZM7203.83 826.067C7203.76 815.066 7199.89 804.444 7192.94 796.377L7186.88 801.599C7192.53 808.158 7195.77 816.924 7195.83 826.122L7203.83 826.067ZM7193.13 796.616L6627.97 29.3274L6621.53 34.0719L7186.69 801.36L7193.13 796.616ZM6628.07 29.4623C6623.98 23.3995 6618.79 18.2954 6612.81 14.4893L6608.51 21.2392C6613.53 24.4308 6617.94 28.7463 6621.44 33.9371L6628.07 29.4623ZM6612.81 14.4892C6606.82 10.6825 6600.18 8.25717 6593.28 7.38502L6592.27 15.3219C6597.97 16.0419 6603.5 18.0483 6608.51 21.2393L6612.81 14.4892ZM6592.75 7.35356L205.972 51.5328L206.028 59.5326L6592.8 15.3534L6592.75 7.35356ZM206.377 51.53C206.236 51.5303 206.095 51.5313 205.954 51.5329L206.046 59.5324C206.163 59.5311 206.28 59.5303 206.397 59.53L206.377 51.53Z",fill:"#FF5100",mask:"url(#path-6-inside-2_330_45)"}})]),s("g",{staticStyle:{"mix-blend-mode":"soft-light"}},[s("path",{attrs:{id:"gray-vector",d:"M7418 4L7969 752",stroke:"white","stroke-width":"3"}})]),s("defs",[s("filter",{attrs:{id:"filter0_i_330_45",x:"206",y:"-0.839355",width:"7601.97",height:"1484.47",filterUnits:"userSpaceOnUse","color-interpolation-filters":"sRGB"}},[s("feFlood",{attrs:{"flood-opacity":"0",result:"BackgroundImageFix"}}),s("feBlend",{attrs:{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}}),s("feColorMatrix",{attrs:{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}}),s("feOffset",{attrs:{dx:"-2",dy:"-5"}}),s("feGaussianBlur",{attrs:{stdDeviation:"63"}}),s("feComposite",{attrs:{in2:"hardAlpha",operator:"arithmetic",k2:"-1",k3:"1"}}),s("feColorMatrix",{attrs:{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"}}),s("feBlend",{attrs:{mode:"normal",in2:"shape",result:"effect1_innerShadow_330_45"}})],1),s("filter",{attrs:{id:"filter1_i_330_45",x:"604",y:"-0.839355",width:"7601.97",height:"1484.47",filterUnits:"userSpaceOnUse","color-interpolation-filters":"sRGB"}},[s("feFlood",{attrs:{"flood-opacity":"0",result:"BackgroundImageFix"}}),s("feBlend",{attrs:{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}}),s("feColorMatrix",{attrs:{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}}),s("feOffset",{attrs:{dx:"-2",dy:"-5"}}),s("feGaussianBlur",{attrs:{stdDeviation:"63"}}),s("feComposite",{attrs:{in2:"hardAlpha",operator:"arithmetic",k2:"-1",k3:"1"}}),s("feColorMatrix",{attrs:{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"}}),s("feBlend",{attrs:{mode:"normal",in2:"shape",result:"effect1_innerShadow_330_45"}})],1)])])])},yt=[],Zt={props:{isActive:{type:Boolean,default:!1}}},Mt=Zt,xt=(0,L.Z)(Mt,bt,yt,!1,null,"6b558352",null),kt=xt.exports,At=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{class:t.keyboardClass})},wt=[],It=s(3475),$t=s.n(It),Tt=s(5145),St=s(5354);const Bt={layout:{default:["1 2 3","4 5 6","7 8 9","+ 0 {bksp}"]}};var Et={name:"SimpleKeyboard",props:{keyboardClass:{default:"simple-keyboard",type:String},input:{type:String},inputName:{type:String}},data:()=>({keyboard:null}),mounted(){this.keyboard=new($t())({onChange:this.onChange,onKeyPress:this.onKeyPress,inputName:this.inputName,theme:"hg-theme-default hg-layout-default myTheme",...St.Z})},watch:{inputName(t){this.keyboard.setOptions({inputName:t}),"email"===t?(this.keyboard.setOptions({...Tt.Z}),this.keyboard.setOptions({theme:"hg-theme-default hg-layout-default myTheme"})):"phone"===t||"recphone"===t?(this.keyboard.setOptions({...Bt}),this.keyboard.setOptions({theme:"hg-theme-default hg-layout-default myTheme myThemeNum"})):(this.keyboard.setOptions({...St.Z}),this.keyboard.setOptions({theme:"hg-theme-default hg-layout-default myTheme"}))},input(t){this.keyboard.setInput(t)}},methods:{onChange(t){this.$emit("onChange",t)},onKeyPress(t){this.$emit("onKeyPress",t),"{shift}"!==t&&"{lock}"!==t||this.handleShift()},handleShift(){let t=this.keyboard.options.layoutName,e="default"===t?"shift":"default";this.keyboard.setOptions({layoutName:e})}}},Ot=Et,Ft=(0,L.Z)(Ot,At,wt,!1,null,null,null),Pt=Ft.exports;const jt="http://localhost:8080/";class Dt{async sendData(t={}){const e=await fetch(jt,{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify(t)});return e}}const Nt=new Dt;let Kt;const Gt=[k,V,st,pt,Lt,vt];function Rt(){return{name:"",email:"",phone:"",company:"",recname:"",recphone:""}}var Vt={components:{HelloStep:k,PresentStep:V,PersonalDataStep:st,CompanyDataStep:pt,RecommendDataStep:Lt,SimpleKeyboard:Pt,ThanksStep:vt,ArrowsSvg:kt},data(){return{step:0,data:Rt(),focusedInput:"",errorInputs:[],animActive:!1}},computed:{currentStep(){return Gt[this.step]}},mounted(){this.setupTimer()},methods:{onNext(){this.focusedInput="",this.isValid()&&(this.runAnimation(),this.step++)},onBack(){this.runAnimation(),this.step--,this.focusedInput="",this.errorInputs=[]},onSkip(){this.runAnimation(),this.step++,this.focusedInput=""},onChange(t){this.data[this.focusedInput]=t,this.removeError(this.focusedInput)},onInputChange(t){this.removeError(t.target.id),this.data[t.target.id]=t.target.value},onInputFocus(t){this.focusedInput=t.target.id},resetData(){this.runAnimation(),this.focusedInput="",this.step=0,this.data=Rt(),this.errorInputs=[]},removeError(t){this.errorInputs=this.errorInputs.filter((e=>e!=t))},isValid(){return 2===this.step&&(""==this.data.name&&this.errorInputs.push("name"),""!=this.data.email&&this.data.email.includes("@")||this.errorInputs.push("email"),""==this.data.phone&&this.errorInputs.push("phone")),3===this.step&&""==this.data.company&&this.errorInputs.push("company"),0==this.errorInputs.length},runAnimation(){this.animActive=!0,setTimeout((()=>{this.animActive=!1}),1500)},setupTimer(){window.onload=this.resetTimer,window.onmousemove=this.resetTimer,window.onmousedown=this.resetTimer,window.ontouchstart=this.resetTimer,window.onclick=this.resetTimer,window.onkeydown=this.resetTimer,window.addEventListener("scroll",this.resetTimer,!0)},resetTimer(){window.clearTimeout(Kt),Kt=window.setTimeout(this.resetData,45e3)},sendPersonalData(){const t=this.data.name+", "+this.data.email+", "+this.data.phone+", "+this.data.company;Nt.sendData({data:t}).then((t=>{if(!t.ok)throw new Error("Response was not OK");this.runAnimation(),this.step++})).catch((t=>{alert("Что-то пошло не так, попробуйте ещё раз или сообщите администратору"),console.error("Error:",t)}))},sendRecommendData(){const t=this.data.recname+", "+this.data.recphone;Nt.sendData({data:t}).then((t=>{if(!t.ok)throw new Error("Response was not OK");this.runAnimation(),this.step++})).catch((t=>{alert("Что-то пошло не так, попробуйте ещё раз или сообщите администратору"),console.error("Error:",t)}))}}},qt=Vt,Ut=(0,L.Z)(qt,i,o,!1,null,"6e0dfefc",null),zt=Ut.exports,Ht={name:"App",components:{MainPageView:zt}},Jt=Ht,Qt=(0,L.Z)(Jt,a,r,!1,null,null,null),Wt=Qt.exports;n.Z.config.productionTip=!1,new n.Z({render:t=>t(Wt)}).$mount("#app")},7751:function(t,e,s){t.exports=s.p+"img/logo-25.cb28f01a.svg"},9574:function(t,e,s){t.exports=s.p+"img/logo.0d452486.svg"},2048:function(t,e,s){t.exports=s.p+"img/present-1.106d0213.jpg"},6016:function(t,e,s){t.exports=s.p+"img/present-2.04754ea6.jpg"},5316:function(t,e,s){t.exports=s.p+"img/present-3.9da24053.jpg"}},e={};function s(n){var a=e[n];if(void 0!==a)return a.exports;var r=e[n]={exports:{}};return t[n].call(r.exports,r,r.exports,s),r.exports}s.m=t,function(){var t=[];s.O=function(e,n,a,r){if(!n){var i=1/0;for(c=0;c<t.length;c++){n=t[c][0],a=t[c][1],r=t[c][2];for(var o=!0,p=0;p<n.length;p++)(!1&r||i>=r)&&Object.keys(s.O).every((function(t){return s.O[t](n[p])}))?n.splice(p--,1):(o=!1,r<i&&(i=r));if(o){t.splice(c--,1);var l=a();void 0!==l&&(e=l)}}return e}r=r||0;for(var c=t.length;c>0&&t[c-1][2]>r;c--)t[c]=t[c-1];t[c]=[n,a,r]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var n in e)s.o(e,n)&&!s.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){s.p="/csequizforecom2022/"}(),function(){var t={143:0};s.O.j=function(e){return 0===t[e]};var e=function(e,n){var a,r,i=n[0],o=n[1],p=n[2],l=0;if(i.some((function(e){return 0!==t[e]}))){for(a in o)s.o(o,a)&&(s.m[a]=o[a]);if(p)var c=p(s)}for(e&&e(n);l<i.length;l++)r=i[l],s.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return s.O(c)},n=self["webpackChunkclient"]=self["webpackChunkclient"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=s.O(void 0,[998],(function(){return s(7020)}));n=s.O(n)})();
//# sourceMappingURL=app.8cf62422.js.map