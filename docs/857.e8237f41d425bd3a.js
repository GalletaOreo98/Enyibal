"use strict";(self.webpackChunkEnyibal=self.webpackChunkEnyibal||[]).push([[857],{8857:(S,d,e)=>{e.r(d),e.d(d,{AccountingModule:()=>v});var A=e(6895),g=e(2655),c=e(8256);let s=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=c.Xpm({type:n,selectors:[["app-acc-journal"]],decls:2,vars:0,template:function(o,i){1&o&&(c.TgZ(0,"p"),c._uU(1,"acc-journal works!"),c.qZA())}}),n})(),r=(()=>{class n{constructor(){this.accounts=[{idAccountingAccount:1,code:"A",name:"Activo",AccountingAccount:0},{idAccountingAccount:2,code:"P",name:"Pasivo",AccountingAccount:0},{idAccountingAccount:3,code:"PN",name:"Patrimonio",AccountingAccount:0},{idAccountingAccount:122,code:"ER",name:"Estado de resultados",AccountingAccount:0},{idAccountingAccount:4,code:"AC",name:"Activo corriente",AccountingAccount:1},{idAccountingAccount:5,code:"ANC",name:"Activo no corriente",AccountingAccount:1},{idAccountingAccount:6,code:"PC",name:"Pasivo corriente",AccountingAccount:2},{idAccountingAccount:7,code:"PNC",name:"Pasivo no corriente",AccountingAccount:2},{idAccountingAccount:8,code:"PNCI",name:"Comerciante individual",AccountingAccount:3},{idAccountingAccount:9,code:"PNEJ",name:"Empresa Jur\xeddica (sociedad)",AccountingAccount:3},{idAccountingAccount:10,code:"EEF",name:"Efectivo y equivalente al efectivo",AccountingAccount:4},{idAccountingAccount:11,code:"INVERS",name:"Inversiones",AccountingAccount:4},{idAccountingAccount:12,code:"CC",name:"Cuentas y documentos por cobrar",AccountingAccount:4},{idAccountingAccount:13,code:"I",name:"Inventarios",AccountingAccount:4},{idAccountingAccount:14,code:"PA",name:"Pagos anticipados",AccountingAccount:4},{idAccountingAccount:15,code:"INVERSV",name:"Inversiones y valores",AccountingAccount:5},{idAccountingAccount:16,code:"PPE",name:"Propiedad, planta y equipo",AccountingAccount:5},{idAccountingAccount:17,code:"INT",name:"Intangibles",AccountingAccount:5},{idAccountingAccount:18,code:"PI",name:"Propiedades de inversi\xf3n",AccountingAccount:5},{idAccountingAccount:19,code:"OA",name:"Otros activos",AccountingAccount:5},{idAccountingAccount:20,code:"CP",name:"Cuentas y documentos por pagar",AccountingAccount:6},{idAccountingAccount:21,code:"PRE",name:"Pr\xe9stamos",AccountingAccount:6},{idAccountingAccount:22,code:"PROV",name:"Provisiones",AccountingAccount:6},{idAccountingAccount:23,code:"CA",name:"Cobros anticipados",AccountingAccount:6},{idAccountingAccount:24,code:"CPNC",name:"Cuentas y documentos por pagar",AccountingAccount:7},{idAccountingAccount:25,code:"PRENC",name:"Pr\xe9stamos",AccountingAccount:7},{idAccountingAccount:26,code:"PROVNC",name:"Provisiones",AccountingAccount:7},{idAccountingAccount:27,code:"CANC",name:"Cobros anticipados",AccountingAccount:7},{idAccountingAccount:28,code:"C",name:"Capital",AccountingAccount:8},{idAccountingAccount:29,code:"RA",name:"Resultados acumulados",AccountingAccount:8},{idAccountingAccount:30,code:"CS",name:"Capital Social",AccountingAccount:9},{idAccountingAccount:31,code:"R",name:"Reservas",AccountingAccount:9},{idAccountingAccount:32,code:"RAJ",name:"Resultados acumulados",AccountingAccount:9},{idAccountingAccount:33,code:"CJ",name:"Caja",AccountingAccount:10},{idAccountingAccount:34,code:"CJ2",name:"Caja chica",AccountingAccount:10},{idAccountingAccount:35,code:"BANC",name:"Bancos",AccountingAccount:10},{idAccountingAccount:36,code:"DEP",name:"Dep\xf3sitos a plazo",AccountingAccount:10},{idAccountingAccount:37,code:"INVERSB",name:"Inversiones en bonos",AccountingAccount:10},{idAccountingAccount:38,code:"INVERSBB",name:"Inversiones en bonos",AccountingAccount:11},{idAccountingAccount:39,code:"DEPB",name:"Dep\xf3sitos a plazo",AccountingAccount:11},{idAccountingAccount:40,code:"CLI",name:"Clientes (deudores comerciales)",AccountingAccount:12},{idAccountingAccount:41,code:"DEU",name:"Deudores varios",AccountingAccount:12},{idAccountingAccount:42,code:"FE",name:"Funcionarios y empleados",AccountingAccount:12},{idAccountingAccount:43,code:"INTC",name:"Intereses por cobrar",AccountingAccount:12},{idAccountingAccount:44,code:"IMPDC",name:"Impuestos diferidos por cobrar",AccountingAccount:12},{idAccountingAccount:45,code:"RENTC",name:"Rentas por cobrar",AccountingAccount:12},{idAccountingAccount:46,code:"IMPC",name:"Impuestos por cobrar",AccountingAccount:12},{idAccountingAccount:47,code:"DIVC",name:"Dividendos por cobrar",AccountingAccount:12},{idAccountingAccount:48,code:"DOCC",name:"Documentos por cobrar",AccountingAccount:12},{idAccountingAccount:49,code:"INVE",name:"Inventario (Almac\xe9n)",AccountingAccount:13},{idAccountingAccount:50,code:"PAPE",name:"Papeler\xeda y \xfatiles",AccountingAccount:14},{idAccountingAccount:51,code:"MATEMP",name:"Material de empaque",AccountingAccount:14},{idAccountingAccount:52,code:"MATAS",name:"Material de aseo",AccountingAccount:14},{idAccountingAccount:53,code:"PRIMS",name:"Primas de seguro",AccountingAccount:14},{idAccountingAccount:54,code:"PUBLIC",name:"Propaganda y publicidad",AccountingAccount:14},{idAccountingAccount:55,code:"ANTPROVE",name:"Anticipos a proveedores",AccountingAccount:14},{idAccountingAccount:56,code:"RENTPANT",name:"Rentas pagadas por anticipado",AccountingAccount:14},{idAccountingAccount:57,code:"INTPANT",name:"Intereses pagados por anticipado",AccountingAccount:14},{idAccountingAccount:58,code:"SUSPANT",name:"Suscripciones pagadas por anticipado",AccountingAccount:14},{idAccountingAccount:59,code:"IMPPANT",name:"Impuestos pagados por anticipado",AccountingAccount:14},{idAccountingAccount:60,code:"INVERSBNC",name:"Inversiones en bonos",AccountingAccount:15},{idAccountingAccount:61,code:"INVERSAC",name:"Inversiones en acciones (inversiones en asociadas)",AccountingAccount:15},{idAccountingAccount:62,code:"INVERSNEG",name:"Inversiones en negocios conjuntos",AccountingAccount:15},{idAccountingAccount:63,code:"DEPNC",name:"Dep\xf3sitos a plazo",AccountingAccount:15},{idAccountingAccount:64,code:"TERR",name:"Terrenos",AccountingAccount:16},{idAccountingAccount:65,code:"EDIF",name:"Edificios",AccountingAccount:16},{idAccountingAccount:66,code:"MAQU",name:"Maquinaria",AccountingAccount:16},{idAccountingAccount:67,code:"MOVEO",name:"Mobiliario y equipo de oficina (muebles y enseres)",AccountingAccount:16},{idAccountingAccount:68,code:"VEH",name:"Veh\xedculos",AccountingAccount:16},{idAccountingAccount:69,code:"ETRANSP",name:"Equipo de transporte",AccountingAccount:16},{idAccountingAccount:70,code:"EREPART",name:"Equipo de reparto",AccountingAccount:16},{idAccountingAccount:71,code:"HERR",name:"Herramientas",AccountingAccount:16},{idAccountingAccount:72,code:"PLUSV",name:"Plusval\xeda (Cr\xe9dito mercant\xedl)",AccountingAccount:17},{idAccountingAccount:73,code:"DERAUT",name:"Derechos de autor",AccountingAccount:17},{idAccountingAccount:74,code:"MARCPATE",name:"Marcas y patentes",AccountingAccount:17},{idAccountingAccount:75,code:"LICE",name:"Licencias",AccountingAccount:17},{idAccountingAccount:76,code:"PROG",name:"Programas inform\xe1ticos",AccountingAccount:17},{idAccountingAccount:77,code:"TERRINVERS",name:"Terrenos",AccountingAccount:18},{idAccountingAccount:78,code:"EDIFINVERS",name:"Edificios",AccountingAccount:18},{idAccountingAccount:79,code:"DEPOA",name:"Dep\xf3sitos en garant\xeda",AccountingAccount:19},{idAccountingAccount:80,code:"DOCCOA",name:"Documentos por cobrar (a largo plazo)",AccountingAccount:19},{idAccountingAccount:81,code:"BANCOA",name:"Bancos",AccountingAccount:19},{idAccountingAccount:82,code:"PROVE",name:"Proveedores (acreedores comerciales)",AccountingAccount:20},{idAccountingAccount:83,code:"SSPP",name:"Sueldos y salarios por pagar",AccountingAccount:20},{idAccountingAccount:84,code:"IMPP",name:"Impuestos por pagar",AccountingAccount:20},{idAccountingAccount:85,code:"INTP",name:"Intereses por pagar",AccountingAccount:20},{idAccountingAccount:86,code:"ACREE",name:"Acreedores varios",AccountingAccount:20},{idAccountingAccount:87,code:"DOCP",name:"Documentos por pagar",AccountingAccount:20},{idAccountingAccount:88,code:"DIVP",name:"Dividendos por pagar",AccountingAccount:20},{idAccountingAccount:89,code:"PREBANC",name:"Pr\xe9stamos bancarios",AccountingAccount:21},{idAccountingAccount:90,code:"PREHIP",name:"Pr\xe9stamos hipotecarios",AccountingAccount:21},{idAccountingAccount:91,code:"PROVCE",name:"Provisiones para compensaciones a empleados",AccountingAccount:22},{idAccountingAccount:92,code:"PROVGC",name:"Provisiones para cubrir garant\xedas a clientes",AccountingAccount:22},{idAccountingAccount:93,code:"PROVRL",name:"Provisiones para cubrir reclamos legales",AccountingAccount:22},{idAccountingAccount:94,code:"RENTANT",name:"Rentas cobradas por anticipado",AccountingAccount:23},{idAccountingAccount:95,code:"INTANT",name:"Intereses cobrados por anticipado",AccountingAccount:23},{idAccountingAccount:96,code:"SERVANT",name:"Servivios cobrados por anticipado",AccountingAccount:23},{idAccountingAccount:97,code:"SUSCANT",name:"Suscripciones cobradas por anticipado",AccountingAccount:23},{idAccountingAccount:98,code:"ANTC",name:"Anticipos de clientes",AccountingAccount:23},{idAccountingAccount:99,code:"ACREEV",name:"Acreedores varios",AccountingAccount:24},{idAccountingAccount:100,code:"DOCPLP",name:"Documentos por pagar",AccountingAccount:24},{idAccountingAccount:101,code:"PREBANCLP",name:"Pr\xe9stamos bancarios",AccountingAccount:25},{idAccountingAccount:102,code:"PREHIPLP",name:"Pr\xe9stamos hipotecarios",AccountingAccount:25},{idAccountingAccount:103,code:"BANCOA",name:"Provisiones para compensaciones de empleados",AccountingAccount:26},{idAccountingAccount:104,code:"BANCOA",name:"Provisiones para cubrir garant\xedas a clientes",AccountingAccount:26},{idAccountingAccount:105,code:"BANCOA",name:"Provisiones para cubrir reclamos legales",AccountingAccount:26},{idAccountingAccount:106,code:"BANCOA",name:"Rentas cobradas por anticipado",AccountingAccount:27},{idAccountingAccount:107,code:"BANCOA",name:"Intereses cobrados por anticipado",AccountingAccount:27},{idAccountingAccount:108,code:"BANCOA",name:"Servicios cobrados por anticipado",AccountingAccount:27},{idAccountingAccount:109,code:"CAP",name:"Capital",AccountingAccount:28},{idAccountingAccount:110,code:"PERDACUM",name:"P\xe9rdidas de a\xf1os anteriores",AccountingAccount:29},{idAccountingAccount:111,code:"UTILACUM",name:"Utilidades de a\xf1os anteriores",AccountingAccount:29},{idAccountingAccount:112,code:"PERDNET",name:"P\xe9rdida neta del periodo",AccountingAccount:29},{idAccountingAccount:113,code:"UTILINET",name:"Utilidad neta del periodo",AccountingAccount:29},{idAccountingAccount:114,code:"CAPS",name:"Capital Social",AccountingAccount:30},{idAccountingAccount:115,code:"RESL",name:"Reserva legal",AccountingAccount:31},{idAccountingAccount:116,code:"RESEST",name:"Reservas estartuarias",AccountingAccount:31},{idAccountingAccount:117,code:"RESVOL",name:"Reservas voluntarias",AccountingAccount:31},{idAccountingAccount:118,code:"RESACUM",name:"Resultados acumulados",AccountingAccount:32},{idAccountingAccount:119,code:"PERDACUMJ",name:"Perdidas acumulados",AccountingAccount:32},{idAccountingAccount:120,code:"PERDNETJ",name:"P\xe9rdida neta del periodo",AccountingAccount:32},{idAccountingAccount:121,code:"UTILNETJ",name:"Utilidad neta del periodo",AccountingAccount:32},{idAccountingAccount:123,code:"VENT",name:"Ventas",AccountingAccount:122},{idAccountingAccount:124,code:"RDSV",name:"Rebajas y descuentos sobre ventas",AccountingAccount:122},{idAccountingAccount:125,code:"DSV",name:"Devoluciones sobre ventas",AccountingAccount:122},{idAccountingAccount:126,code:"COMP",name:"Compras",AccountingAccount:122},{idAccountingAccount:127,code:"RDSC",name:"Rebajas y descuentos sobre compras",AccountingAccount:122},{idAccountingAccount:128,code:"DSC",name:"Devoluciones sobre compras",AccountingAccount:122},{idAccountingAccount:129,code:"GSC",name:"Gastos sobre compras",AccountingAccount:122},{idAccountingAccount:130,code:"GA",name:"Gastos de administraci\xf3n",AccountingAccount:122},{idAccountingAccount:131,code:"GV",name:"Gastos de venta",AccountingAccount:122},{idAccountingAccount:132,code:"GF",name:"Gastos de financieros",AccountingAccount:122},{idAccountingAccount:133,code:"OG",name:"Otros gastos",AccountingAccount:122},{idAccountingAccount:134,code:"OI",name:"Otros ingresos",AccountingAccount:122}],this.firstOrderAccounts=this.getFirstOrderAccountsL(),this.secondOrderAccounts=this.getSecondOrderAccountsL(),this.thirdOrderAccounts=this.getExtraOrdersAccountsL(this.secondOrderAccounts),this.fourthOrderAccounts=this.getExtraOrdersAccountsL(this.thirdOrderAccounts),this.fifthOrderAccounts=this.getIncomeStatementAccountsL()}getFirstOrderAccounts(){return this.firstOrderAccounts}getSecondOrderAccounts(){return this.secondOrderAccounts}getThirdOrderAccounts(){return this.thirdOrderAccounts}getFourthOrderAccounts(){return this.fourthOrderAccounts}getFifthOrderAccounts(){return this.fifthOrderAccounts}getAllAccounts(){return[this.firstOrderAccounts,this.secondOrderAccounts,this.thirdOrderAccounts,this.fourthOrderAccounts,this.fifthOrderAccounts]}getFirstOrderAccountsL(){return this.accounts.filter(o=>0===o.AccountingAccount)}getSecondOrderAccountsL(){return this.accounts.filter(o=>1===o.AccountingAccount||2===o.AccountingAccount||3===o.AccountingAccount)}getExtraOrdersAccountsL(o){return this.filterArray(o,this.accounts)}getIncomeStatementAccountsL(){return this.accounts.filter(o=>122===o.AccountingAccount)}filterArray(o,i){return i.filter(function(a){return o.some(function(x){return x.idAccountingAccount===a.AccountingAccount})})}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275prov=c.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var u=e(2517);function m(n,t){if(1&n&&(c.TgZ(0,"h3"),c._uU(1),c.TgZ(2,"b"),c._uU(3),c.qZA(),c._uU(4),c.qZA()),2&n){const o=c.oxw().$implicit;c.xp6(1),c.hij("",o.idAccountingAccount,". "),c.xp6(2),c.Oqu(o.name),c.xp6(1),c.hij(" (",o.code,")")}}function p(n,t){if(1&n&&(c.TgZ(0,"h4"),c._uU(1),c.TgZ(2,"b"),c._uU(3),c.qZA(),c._uU(4),c.qZA()),2&n){const o=c.oxw().$implicit;c.xp6(1),c.hij("",o.idAccountingAccount,". "),c.xp6(2),c.Oqu(o.name),c.xp6(1),c.hij(" (",o.code,")")}}function l(n,t){if(1&n&&(c.TgZ(0,"h5"),c._uU(1),c.TgZ(2,"b"),c._uU(3),c.qZA(),c._uU(4),c.qZA()),2&n){const o=c.oxw().$implicit;c.xp6(1),c.hij("",o.idAccountingAccount,". "),c.xp6(2),c.Oqu(o.name),c.xp6(1),c.hij(" (",o.code,") ")}}function _(n,t){if(1&n&&(c.TgZ(0,"ul")(1,"li",3)(2,"h6"),c._uU(3),c.TgZ(4,"b"),c._uU(5),c.qZA(),c._uU(6),c.qZA()()()),2&n){const o=t.$implicit;c.xp6(3),c.hij(" ",o.idAccountingAccount,". "),c.xp6(2),c.Oqu(o.name),c.xp6(1),c.hij(" (",o.code,") ")}}function C(n,t){if(1&n&&c.YNc(0,_,7,3,"ul",2),2&n){const o=c.oxw().$implicit,i=c.oxw(6);c.Q6J("ngForOf",i.getChildrenAccounts2(o.idAccountingAccount,3))}}function P(n,t){1&n&&(c.TgZ(0,"ngb-panel"),c.YNc(1,l,5,3,"ng-template",3),c.YNc(2,C,1,1,"ng-template",4),c.qZA())}function b(n,t){if(1&n&&(c.TgZ(0,"ngb-accordion",1),c.YNc(1,P,3,0,"ngb-panel",2),c.qZA()),2&n){const o=c.oxw().$implicit,i=c.oxw(4);c.Q6J("closeOthers",!0),c.xp6(1),c.Q6J("ngForOf",i.getChildrenAccounts2(o.idAccountingAccount,2))}}function f(n,t){1&n&&(c.TgZ(0,"ngb-panel"),c.YNc(1,p,5,3,"ng-template",3),c.YNc(2,b,2,2,"ng-template",4),c.qZA())}function h(n,t){if(1&n&&(c.TgZ(0,"ngb-accordion",1),c.YNc(1,f,3,0,"ngb-panel",2),c.qZA()),2&n){const o=c.oxw(2).$implicit,i=c.oxw();c.Q6J("closeOthers",!0),c.xp6(1),c.Q6J("ngForOf",i.getChildrenAccounts(o.idAccountingAccount))}}function E(n,t){if(1&n&&(c.TgZ(0,"li",3)(1,"h6"),c._uU(2),c.TgZ(3,"b"),c._uU(4),c.qZA(),c._uU(5),c.qZA()()),2&n){const o=t.$implicit;c.xp6(2),c.hij(" ",o.idAccountingAccount,". "),c.xp6(2),c.Oqu(o.name),c.xp6(1),c.hij("(",o.code,") ")}}function O(n,t){if(1&n&&(c.TgZ(0,"ul"),c.YNc(1,E,6,3,"li",7),c.qZA()),2&n){const o=c.oxw(2).$implicit,i=c.oxw();c.xp6(1),c.Q6J("ngForOf",i.getChildrenAccounts(o.idAccountingAccount))}}function T(n,t){if(1&n&&(c.YNc(0,h,2,2,"ngb-accordion",5),c.YNc(1,O,2,1,"ul",6)),2&n){const o=c.oxw().$implicit;c.Q6J("ngIf",122!=o.idAccountingAccount),c.xp6(1),c.Q6J("ngIf",122==o.idAccountingAccount)}}function R(n,t){1&n&&(c.TgZ(0,"ngb-panel"),c.YNc(1,m,5,3,"ng-template",3),c.YNc(2,T,2,2,"ng-template",4),c.qZA())}const I=[{path:"",children:[{path:"acc-list",component:(()=>{class n{constructor(o){this.accService=o,this.accountingAccounts=this.accService.getAllAccounts()}ngOnInit(){}getChildrenAccounts(o){return 122==o?this.accountingAccounts[4].filter(i=>i.AccountingAccount===o):this.accountingAccounts[1].filter(i=>i.AccountingAccount===o)}getChildrenAccounts2(o,i){return this.accountingAccounts[i].filter(a=>a.AccountingAccount===o)}}return n.\u0275fac=function(o){return new(o||n)(c.Y36(r))},n.\u0275cmp=c.Xpm({type:n,selectors:[["app-acc-list"]],decls:3,vars:2,consts:[[1,"mx-2","my-2"],[3,"closeOthers"],[4,"ngFor","ngForOf"],["ngbPanelTitle",""],["ngbPanelContent",""],[3,"closeOthers",4,"ngIf"],[4,"ngIf"],["ngbPanelTitle","",4,"ngFor","ngForOf"]],template:function(o,i){1&o&&(c.TgZ(0,"div",0)(1,"ngb-accordion",1),c.YNc(2,R,3,0,"ngb-panel",2),c.qZA()()),2&o&&(c.xp6(1),c.Q6J("closeOthers",!0),c.xp6(1),c.Q6J("ngForOf",i.accountingAccounts[0]))},dependencies:[A.sg,A.O5,u.gY,u.Gk,u.Cu,u.gW]}),n})()},{path:"acc-journal",component:s},{path:"**",redirectTo:""}]}];let N=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=c.oAB({type:n}),n.\u0275inj=c.cJS({imports:[g.Bz.forChild(I),g.Bz]}),n})(),v=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=c.oAB({type:n}),n.\u0275inj=c.cJS({imports:[A.ez,N,u.IJ]}),n})()}}]);