(this["webpackJsonpmpkmb-admin"]=this["webpackJsonpmpkmb-admin"]||[]).push([[0],{179:function(e,t,a){e.exports=a.p+"static/media/logo.c66f91c8.svg"},208:function(e,t,a){e.exports=a(368)},213:function(e,t,a){},215:function(e,t,a){},269:function(e,t,a){},347:function(e,t,a){},354:function(e,t,a){},368:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(16),l=a.n(i),s=(a(213),a(370)),c=a(66),u=Object(c.a)(),o=a(52),m=a.n(o),d=a(40),p=(a(214),a(369)),h=a(63),b=a(377),g=a(383),f=a(382),y=a(381),E=(a(215),a(179)),T=a.n(E),O=(p.a.Header,p.a.Content),v=p.a.Footer,k=p.a.Sider,S=(h.a.SubMenu,b.a.Text),I=b.a.Link,j=[{id:"1",route:"/",name:"Dashboard",icon:r.a.createElement(g.a,null)},{id:"2",route:"/penugasan",name:"Penugasan",icon:r.a.createElement(f.a,null)}];function $(e){var t=e.children,a=Object(n.useState)(!1),i=Object(d.a)(a,2),l=i[0],c=i[1],u=Object(s.e)();return r.a.createElement(p.a,{className:"layout-container"},r.a.createElement(k,{collapsible:!0,collapsed:l,onCollapse:function(e){c(e)}},r.a.createElement("div",{className:"layout-logo"},r.a.createElement("img",{src:T.a,alt:"Logo MPKMB 2020"})),r.a.createElement(h.a,{theme:"dark",defaultSelectedKeys:["1"],mode:"inline"},j.map((function(e){var t=e.id,a=e.icon,n=e.name,i=e.route;return r.a.createElement(h.a.Item,{key:t,icon:a,onClick:function(){return function(e){u.push("/admin".concat(e))}(i)}},n)})),r.a.createElement(h.a.Item,{key:"logout",icon:r.a.createElement(y.a,null),onClick:function(){m.a.remove("MPKMB_ADMIN_TOKEN"),setTimeout((function(){alert("Anda telah keluar dari aplikasi ini."),u.push("/")}))}},"Keluar"))),r.a.createElement(p.a,{className:"site-layout"},r.a.createElement(O,{className:"layout-content-container"},t),r.a.createElement(v,{style:{textAlign:"center"}},r.a.createElement(S,{mark:!0,className:"with-love-text"},"Created with"," ",r.a.createElement("span",{role:"img","aria-label":"love-emoji"},"\u2764\ufe0f")," ","by ",r.a.createElement(I,{href:"https://codepanda.id/"},"Codepanda")))))}var P=a(49),C=a.n(P),M=a(53),x=a(74),w=a(134);a(269);function N(){var e=Object(n.useState)(!1),t=Object(d.a)(e,2),a=t[0],r=t[1];return[a,function(){r(!0)},function(){r(!1)}]}var D="http://api.mpkmb.ipb.ac.id/graphql";function B(e){var t=e.headers,a=e.query,n=e.variables,r=new URL(D);r.searchParams.append("hash",Object(w.sha256)(a)),r.searchParams.append("variables",JSON.stringify(n));var i={method:"GET",headers:Object(M.a)({"Content-Type":"application/json"},t)},l={method:"POST",headers:i.headers,body:JSON.stringify({query:a,variables:n})};return new Promise((function(e,t){fetch(r,i).then((function(e){if(e&&(400===e.status||405===e.status))throw Error(e.status);return e.json()})).then((function(t){e(t)})).catch((function(a){"400"===a.message||"405"===a.message?fetch(new URL(D),l).then((function(e){return e.json()})).then((function(a){if(a.errors&&a.errors.length>0)return t(a.errors[0]);e(a)})).catch((function(e){t(e)})):t(a)}))}))}function A(e){return B({query:"\n      mutation(\n        $Email: String!,\n        $Password: String!\n      ) {\n        Login(\n          Email: $Email,\n          Password: $Password\n        ) {\n          Token\n        }\n      }\n    ",variables:{Email:e.Email,Password:e.Password}})}var K=a(374),U=a(204),L=a(373),_=a(378),q=a(43),F=b.a.Title,J=b.a.Text,R=b.a.Link,z={labelCol:{span:5}},G={wrapperCol:{offset:5}};var V=a(376),H=a(379);a(347),b.a.Title;var W=a(201),Y=a(372),Q=a(375),X=a(102),Z=a(384),ee=a(385),te=a(371),ae=a(386),ne=a(387),re=a(380),ie=a(115),le={layout:"vertical"},se=ie.a.Option;function ce(e){var t=e.isVisible,a=e.isEdit,n=e.addLoading,i=e.handleSubmit,l=e.handleCancel,s=e.formObject;return r.a.createElement(Q.a,{title:"Tambah Tugas/Materi Baru",visible:t,onOk:i,onCancel:l,okText:a?"Simpan":"Buat Baru",cancelText:"Batal",confirmLoading:n,forceRender:!0},r.a.createElement(K.a,Object.assign({},le,{form:s,name:"addNewAssignmentForm",initialValues:{remember:!0},className:"add-assignment"}),r.a.createElement(K.a.Item,{style:{marginBottom:"15px"},label:"Judul",name:"Title",rules:[{required:!0,message:"Isi Judul terlebih dahulu!"}]},r.a.createElement(_.a,{placeholder:"Judul tugas/materi"})),r.a.createElement(K.a.Item,{style:{marginBottom:"15px"},label:"Tipe",name:"Type",rules:[{required:!0,message:"Isi Tipe terlebih dahulu!"}]},r.a.createElement(ie.a,{style:{width:"100%"}},r.a.createElement(se,{value:"TUGAS"},"Penugasan"),r.a.createElement(se,{value:"MATERI"},"Materi"))),r.a.createElement(K.a.Item,{style:{marginBottom:"15px"},label:"Deskripsi",name:"Description",rules:[{required:!0,message:"Isi Deskripsi terlebih dahulu!"}]},r.a.createElement(_.a.TextArea,{placeholder:"Deskripsi tugas/materi",autoSize:{minRows:3,maxRows:6}})),r.a.createElement(K.a.Item,{style:{marginBottom:"15px"},label:"Thumbnail Tugas/Materi",name:"Thumbnail",rules:[{required:!0,message:"Isi link gambar thumbnail terlebih dahulu!"}]},r.a.createElement(_.a,{placeholder:"Link untuk thumbnail"})),r.a.createElement(K.a.Item,{style:{marginBottom:"15px"},label:"Link Tugas/Materi",name:"Url",rules:[{required:!0,message:"Isi link untuk tugas/materi terlebih dahulu!"}]},r.a.createElement(_.a,{placeholder:"Link untuk tugas/materi"})),r.a.createElement(K.a.Item,{style:{marginBottom:"15px"},label:"Kategori",name:"Category",rules:[{required:!0,message:"Isi kategori terlebih dahulu!"}]},r.a.createElement(_.a,{placeholder:"Ketegori untuk judul pada tab"}))))}function ue(e){var t=e.Page,a=e.Limit,n=void 0===a?10:a;return B({headers:{Authorization:"".concat(m.a.getJSON("MPKMB_ADMIN_TOKEN").Token)},query:"\n    query (\n      $Limit: Int!, \n      $Page: Int!, \n      $OrderBy: ContentOrderBy, \n      $OrderType: OrderType, \n      $PublishStatus: Boolean, \n      $Title: String, \n      $Category: String, \n      $Type: String\n    ) {\n      Contents(\n        Limit: $Limit,\n        Page: $Page, \n        OrderBy: $OrderBy, \n        OrderType: $OrderType, \n        PublishStatus: $PublishStatus, \n        Title: $Title, \n        Category: $Category, \n        Type: $Type\n      ) {\n        Data {\n          Id\n          Title\n          Description\n          Thumbnail\n          Url\n          PublishStatus\n          Category\n          Type\n          Order\n        }\n        DataCount\n      }\n    }  \n  ",variables:{Limit:n,Page:t,OrderBy:"CreatedDate",OrderType:"DESC"}})}function oe(e){var t=e.Title,a=e.Description,n=e.Thumbnail,r=e.Url,i=e.Category,l=e.Type;return B({headers:{Authorization:"".concat(m.a.getJSON("MPKMB_ADMIN_TOKEN").Token)},query:"\n    mutation (\n      $Title: String!, \n      $Description: String, \n      $Thumbnail: String, \n      $Url: String,\n      $PublishStatus: Boolean!, \n      $Category: String!, \n      $Type: String!, \n      $Order: Int\n    ) {\n      CreateContent(\n        Title: $Title, \n        Description: $Description,\n        Thumbnail: $Thumbnail,\n        Url: $Url,\n        PublishStatus: $PublishStatus, \n        Category: $Category, \n        Type: $Type,\n        Order: $Order\n      ) {\n        Id\n        Title\n        Description\n        Thumbnail\n        Url\n        PublishStatus\n        Category\n        Type\n        Order\n      }\n    }  \n  ",variables:{Title:t,Description:a,Thumbnail:n,Url:r,Category:i,Type:l,PublishStatus:!0,Order:null}})}function me(e){var t=e.Id,a=e.Title,n=e.Description,r=e.Thumbnail,i=e.Url,l=e.Category,s=e.Type;return B({headers:{Authorization:"".concat(m.a.getJSON("MPKMB_ADMIN_TOKEN").Token)},query:"\n    mutation (\n      $Id: String!,\n      $Title: String, \n      $Description: String, \n      $Thumbnail: String, \n      $Url: String,\n      $PublishStatus: Boolean, \n      $Category: String, \n      $Type: String, \n      $Order: Int\n    ) {\n      UpdateContent(\n        Id: $Id,\n        Title: $Title, \n        Description: $Description,\n        Thumbnail: $Thumbnail,\n        Url: $Url,\n        PublishStatus: $PublishStatus, \n        Category: $Category, \n        Type: $Type,\n        Order: $Order\n      ) {\n        Id\n        Title\n        Description\n        Thumbnail\n        Url\n        PublishStatus\n        Category\n        Type\n        Order\n      }\n    }  \n  ",variables:{Id:t,Title:a,Description:n,Thumbnail:r,Url:i,Category:l,Type:s,Order:null}})}function de(e){var t=e.Id,a=e.PublishStatus;return B({headers:{Authorization:"".concat(m.a.getJSON("MPKMB_ADMIN_TOKEN").Token)},query:"\n    mutation (\n      $Id: String!,\n      $PublishStatus: Boolean, \n    ) {\n      UpdateContent(\n        Id: $Id,\n        PublishStatus: $PublishStatus, \n      ) {\n        Id\n        PublishStatus\n      }\n    }  \n  ",variables:{Id:t,PublishStatus:a}})}function pe(e){var t=e.Id;return B({headers:{Authorization:"".concat(m.a.getJSON("MPKMB_ADMIN_TOKEN").Token)},query:"\n    mutation ($Id: String!) {\n      DeleteContent(Id: $Id) {\n        message\n      }\n    }  \n  ",variables:{Id:t}})}a(354);var he=Y.a.Column,be=Q.a.confirm;var ge=[{path:"/login",key:"LOGIN",exact:!0,layout:!1,component:function(){var e=K.a.useForm(),t=Object(d.a)(e,1)[0],a=Object(s.e)(),i=N(),l=Object(d.a)(i,3),c=l[0],u=l[1],o=l[2];function p(){return(p=Object(x.a)(C.a.mark((function e(){var n,r,i,l,s,c,d;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(),n=Object(M.a)({},t.getFieldsValue()),r=n.email,i=n.password,l=Object(w.sha256)(i),e.prev=4,e.next=7,A({Email:r,Password:l});case 7:s=e.sent,c=s.data.Login,m.a.set("MPKMB_ADMIN_TOKEN",c),U.b.success("Anda berhasil masuk"),setTimeout((function(){a.push("/admin")}),1e3),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(4),d=e.t0.message,U.b.error(d);case 18:return e.prev=18,o(),e.finish(18);case 21:case"end":return e.stop()}}),e,null,[[4,14,18,21]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){m.a.get("MPKMB_ADMIN_TOKEN")&&a.push("/admin")}),[]),r.a.createElement("div",{className:"container login-container"},r.a.createElement(F,null,"MPKMB 2020"),r.a.createElement(L.a,{title:"Login untuk Masuk",bordered:!1,className:"login-card"},r.a.createElement(K.a,Object.assign({},z,{form:t,name:"basic",className:"login-form",onFinish:function(){return p.apply(this,arguments)}}),r.a.createElement(K.a.Item,{label:"Email",name:"email",rules:[{required:!0,message:"Isi Email terlebih dahulu!"}]},r.a.createElement(_.a,null)),r.a.createElement(K.a.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Isi Password terlebih dahulu!"}]},r.a.createElement(_.a.Password,null)),r.a.createElement(K.a.Item,Object.assign({},G,{className:"login-button-submit"}),r.a.createElement(q.a,{type:"primary",htmlType:"submit",block:!0,loading:c},"Submit")))),r.a.createElement(J,{mark:!0,className:"with-love-text"},"Created with"," ",r.a.createElement("span",{role:"img","aria-label":"love-emoji"},"\u2764\ufe0f")," ","by ",r.a.createElement(R,{href:"https://codepanda.id/"},"Codepanda")))}},{path:"/admin",key:"ADMIN_ROUTES",component:function(e){if(!m.a.get("MPKMB_ADMIN_TOKEN"))return alert("Anda harus login terlebih dahulu!"),r.a.createElement(s.a,{to:"/"});return r.a.createElement(ye,e)},routes:[{path:"/admin",key:"DASHBOARD",exact:!0,layout:!0,component:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(V.a,{title:"Dashboard"}),r.a.createElement("div",{className:"dashboard-container"},r.a.createElement(H.a,{message:"Selamat datang di panel admin MPKMB 2020",description:"Saat ini panel admin MPKMB 2020 sedang dalam tahap pengembangan. Apabila pengguna menemukan kesalahan pada sistem, silahkan hubungi pengembang.",type:"warning",showIcon:!0})))}},{path:"/admin/penugasan",key:"ASSIGNMENT",exact:!0,layout:!0,component:function(){var e=Object(n.useState)(!0),t=Object(d.a)(e,2),a=t[0],i=t[1],l=Object(n.useState)([]),s=Object(d.a)(l,2),c=s[0],u=s[1],o=Object(n.useState)({current:1,dataCount:1}),m=Object(d.a)(o,2),p=m[0],h=m[1],b=Object(n.useState)(!1),g=Object(d.a)(b,2),y=g[0],E=g[1],T=Object(n.useState)(null),O=Object(d.a)(T,2),v=O[0],k=O[1],S=function(){var e=Object(n.useState)(!1),t=Object(d.a)(e,2),a=t[0],r=t[1];return[a,function(){r(!0)},function(){r(!1)}]}(),I=Object(d.a)(S,3),j=I[0],$=I[1],P=I[2],w=N(),D=Object(d.a)(w,3),B=D[0],A=D[1],L=D[2],_=N(),F=Object(d.a)(_,3),J=F[0],R=F[1],z=F[2],G=N(),H=Object(d.a)(G,3),Q=H[0],ie=H[1],le=H[2],se=K.a.useForm(),ge=Object(d.a)(se,1)[0];function fe(){return ye.apply(this,arguments)}function ye(){return(ye=Object(x.a)(C.a.mark((function e(){var t,n,r,l,s;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return R(),e.prev=1,e.next=4,ue({Page:p.current});case 4:t=e.sent,n=t.data.Contents,r=n.DataCount,l=n.Data,a&&i(!1),u(Object(W.a)(l)),h(Object(M.a)(Object(M.a)({},p),{},{dataCount:r})),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(1),s=e.t0.message,U.b.error(s);case 17:return e.prev=17,z(),e.finish(17);case 20:case"end":return e.stop()}}),e,null,[[1,13,17,20]])})))).apply(this,arguments)}function Ee(e){be({title:"Apakah Anda yakin?",icon:r.a.createElement(ae.a,null),okText:"Ya",okType:"danger",cancelText:"Batalkan",onOk:function(){!function(e){ke.apply(this,arguments)}(e)},onCancel:function(){}})}function Te(){return(Te=Object(x.a)(C.a.mark((function e(t,a){var n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return ie(),e.prev=1,e.next=4,de({Id:t,PublishStatus:!a});case 4:e.sent,fe(),U.b.success("Status Tugas/Materi berhasil diubah"),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),n=e.t0.message,U.b.error(n);case 13:return e.prev=13,le(),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[1,9,13,16]])})))).apply(this,arguments)}function Oe(){return(Oe=Object(x.a)(C.a.mark((function e(t){var a,n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return A(),e.prev=1,e.next=4,oe(Object(M.a)({},t));case 4:a=e.sent,a.data,fe(),ge.resetFields(),P(),U.b.success("Tugas/Materi berhasil ditambahkan"),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),n=e.t0.message,U.b.error(n);case 16:return e.prev=16,L(),e.finish(16);case 19:case"end":return e.stop()}}),e,null,[[1,12,16,19]])})))).apply(this,arguments)}function ve(){return(ve=Object(x.a)(C.a.mark((function e(t){var a,n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return A(),e.prev=1,e.next=4,me(Object(M.a)({},t));case 4:a=e.sent,a.data,fe(),ge.resetFields(),P(),U.b.success("Tugas/Materi berhasil diubah"),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),n=e.t0.message,U.b.error(n);case 16:return e.prev=16,L(),e.finish(16);case 19:case"end":return e.stop()}}),e,null,[[1,12,16,19]])})))).apply(this,arguments)}function ke(){return(ke=Object(x.a)(C.a.mark((function e(t){var a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,pe({Id:t});case 3:e.sent,fe(),U.b.success("Tugas/Materi berhasil dihapus"),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),a=e.t0.message,U.b.error(a);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){fe()}),[]),Object(n.useEffect)((function(){a||fe()}),[p.current,h]),r.a.createElement(r.a.Fragment,null,r.a.createElement(V.a,{title:"Penugasan"}),r.a.createElement("div",{className:"assignment-table-container"},r.a.createElement(X.a,{className:"assignment-add-container",align:"middle",justify:"end"},r.a.createElement(q.a,{type:"primary",icon:r.a.createElement(f.a,null),onClick:function(){$()}},"Tambah Tugas/Materi Baru")),r.a.createElement(Y.a,{dataSource:c,pagination:{position:["bottomCenter"],current:p.current,total:p.dataCount,onChange:function(e){h(Object(M.a)(Object(M.a)({},p),{},{current:e}))}},rowKey:"Id",loading:J},r.a.createElement(he,{title:"Judul Tugas",dataIndex:"Title",key:"Title"}),r.a.createElement(he,{title:"Kategori",dataIndex:"Category",key:"Category"}),r.a.createElement(he,{title:"Tipe",dataIndex:"Type",key:"Type",render:function(e){return"TUGAS"===e?r.a.createElement(Z.a,{color:"blue"},"Penugasan"):"MATERI"===e?r.a.createElement(Z.a,{color:"red"},"Materi"):void 0}}),r.a.createElement(he,{title:"Tampilkan",dataIndex:"PublishStatus",key:"PublishStatus",render:function(e,t){return r.a.createElement(ee.a,{loading:Q,checked:t.PublishStatus,onChange:function(){return function(e,t){return Te.apply(this,arguments)}(t.Id,t.PublishStatus)}})}}),r.a.createElement(he,{title:"Aksi",key:"action",render:function(e,t){return r.a.createElement(te.a,{size:"middle"},r.a.createElement(q.a,{type:"primary",icon:r.a.createElement(ne.a,null),onClick:function(){return k(e=t),E(!0),ge.setFieldsValue(e),void $();var e}},"Sunting"),r.a.createElement(q.a,{danger:!0,type:"primary",icon:r.a.createElement(re.a,null),onClick:function(){return Ee(t.Id)}},"Hapus"))}}))),r.a.createElement(ce,{isVisible:j,isEdit:y,addLoading:B,handleCancel:function(){y&&E(!1),P(),ge.resetFields()},handleSubmit:function(){ge.validateFields().then((function(e){return y?function(e){return ve.apply(this,arguments)}(Object(M.a)(Object(M.a)({},v),e)):function(e){return Oe.apply(this,arguments)}(e)}))},formObject:ge}))}}]}];function fe(e){return e.layout?r.a.createElement($,null,r.a.createElement(s.b,{path:e.path,exact:e.exact,render:function(t){return r.a.createElement(e.component,Object.assign({},t,{routes:e.routes}))}})):r.a.createElement(s.b,{path:e.path,exact:e.exact,render:function(t){return r.a.createElement(e.component,Object.assign({},t,{routes:e.routes}))}})}function ye(e){var t=e.routes;return r.a.createElement(s.c,{history:u},r.a.createElement(s.d,null,t.map((function(e){return r.a.createElement(fe,Object.assign({key:e.key},e))})),r.a.createElement(s.b,{exact:!0,path:"/",component:function(){return r.a.createElement(s.a,{to:"/login"})}}),r.a.createElement(s.b,null,r.a.createElement("h1",null,"Not Found!"))))}var Ee=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(ye,{routes:ge}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ee,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[208,1,2]]]);
//# sourceMappingURL=main.358d3d84.chunk.js.map