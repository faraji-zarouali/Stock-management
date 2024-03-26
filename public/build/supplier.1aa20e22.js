(self.webpackChunk=self.webpackChunk||[]).push([[290],{1810:(e,r,t)=>{var a=t(9755),s=t(8901);t(4338),t(8324),t(4284),t(6203),a(document).ready((function(){var e=a("#supplier-datatable").DataTable({pageLength:8,lengthMenu:[[8,25,50,-1],[8,25,50,"All"]],ajax:{url:Routing.generate("app_supplier_getlist")},order:[[0,"asc"]],columns:[{name:"s.id",data:"id",orderable:!0,searchable:!0},{name:"s.name",data:"name",orderable:!0,searchable:!0},{name:"s.address",data:"address",orderable:!0,searchable:!0},{name:"s.email",data:"email",orderable:!0,searchable:!0},{name:"s.phone",data:"phone",orderable:!0,searchable:!0},{name:"s.isActive",data:"isActive",render:function(e){return'<i class="'+(e?"fas fa-check text-success":"fas fa-times text-danger")+'"></i>'},orderable:!1},{data:"id",render:function(e,r,t){var a='<button class="btn btn-'.concat(t.status?"danger":"secondary",' action-button" data-supplier-id="').concat(e,'">Activate</button>'),s='<button class="btn btn-primary edit-button" data-supplier-id="'.concat(e,'">Update</button>');return"".concat(a).concat(s)}}],dom:"Bfrtip",autoWidth:!1});a("body").on("click","#add-supplier-button",(function(){a("#add-supplier-modal").modal("show")})),a("#add-supplier-modal").on("click","#add-supplier-btn",(function(){var r={name:a("#newSupplierName").val(),address:a("#newSupplierAddress").val(),email:a("#newSupplierEmail").val(),phone:a("#newSupplierPhone").val()};a.ajax({url:Routing.generate("app_new_supplier"),type:"POST",contentType:"application/json",data:JSON.stringify(r),success:function(r,t,n){200===n.status?(e.ajax.reload(null,!1),a("#add-supplier-modal").modal("hide"),a("#newSupplierName").val(""),a("#newSupplierAddress").val(""),a("#newSupplierEmail").val(""),a("#newSupplierPhone").val(""),s.success("New supplier Added successfully","Success")):console.error("Unexpected success status code:",n.status)},error:function(e){e.responseJSON&&e.responseJSON.errors?s.error(e.responseJSON.errors):s.error("An error occurred")}})})),a(document).on("click",".close",(function(){a("#add-supplier-modal").hide()})),a("body").on("click",".edit-button",(function(){var e=a(this).data("supplier-id");a.ajax({url:Routing.generate("app_get_supplier",{id:e}),type:"GET",success:function(e){a("#sId").val(e.supplier.id),a("#editSupplierName").val(e.supplier.name),a("#editSupplierAddress").val(e.supplier.address),a("#editSupplierEmail").val(e.supplier.email),a("#editSupplierPhone").val(e.supplier.phone),a("#edit-supplier-modal").modal("show")}})})),a(".modal").on("click","#edit-supplier-btn",(function(){var r={id:a("#sId").val(),name:a("#editSupplierName").val(),address:a("#editSupplierAddress").val(),email:a("#editSupplierEmail").val(),phone:a("#editSupplierPhone").val()};a.ajax({url:Routing.generate("app_update_supplier"),type:"POST",contentType:"application/json",data:JSON.stringify(r),success:function(r,t,n){console.log(r),200===n.status?(e.ajax.reload(null,!1),a("#edit-supplier-modal").modal("hide"),s.success("Update successfully","Success")):console.error("Unexpected success status code:",n.status)},error:function(e){e.responseJSON&&e.responseJSON.errors?(s.error(e.responseJSON.errors),s.error("Validation errors:\n"+e.responseJSON.errors.join("\n"))):s.error("An error occurred")}})})),a("body").on("click",".action-button",(function(){var r=a(this).data("supplier-id");a.ajax({url:Routing.generate("app_update_supplier_status",{id:r}),type:"GET",success:function(r,t,a){console.log(r),200===a.status?(e.ajax.reload(null,!1),s.success("Status Update successfully","Success")):console.error("Unexpected success status code:",a.status)},error:function(e,r,t){console.error("Status Update failed:",t),e.status>=400&&e.status<500?alert("Status Update failed: Client error"):e.status>=500&&alert("Status Update failed: Server error")}})}))}))},9042:(e,r,t)=>{"use strict";var a=t(3689),s=t(4201),n=t(3615),o=s("species");e.exports=function(e){return n>=51||!a((function(){var r=[];return(r.constructor={})[o]=function(){return{foo:1}},1!==r[e](Boolean).foo}))}},6834:(e,r,t)=>{"use strict";var a=t(3689);e.exports=function(e,r){var t=[][e];return!!t&&a((function(){t.call(null,r||function(){return 1},1)}))}},2148:(e,r,t)=>{"use strict";var a=t(8702),s=t(2560);e.exports=function(e,r,t){return t.get&&a(t.get,r,{getter:!0}),t.set&&a(t.set,r,{setter:!0}),s.f(e,r,t)}},4338:(e,r,t)=>{"use strict";var a=t(9989),s=t(3689),n=t(2297),o=t(8999),i=t(690),u=t(6310),l=t(5565),c=t(6522),p=t(7120),d=t(9042),f=t(4201),v=t(3615),m=f("isConcatSpreadable"),S=v>=51||!s((function(){var e=[];return e[m]=!1,e.concat()[0]!==e})),b=function(e){if(!o(e))return!1;var r=e[m];return void 0!==r?!!r:n(e)};a({target:"Array",proto:!0,arity:1,forced:!S||!d("concat")},{concat:function(e){var r,t,a,s,n,o=i(this),d=p(o,0),f=0;for(r=-1,a=arguments.length;r<a;r++)if(b(n=-1===r?o:arguments[r]))for(s=u(n),l(f+s),t=0;t<s;t++,f++)t in n&&c(d,f,n[t]);else l(f+1),c(d,f++,n);return d.length=f,d}})},6203:(e,r,t)=>{"use strict";var a=t(9989),s=t(8844),n=t(4413),o=t(5290),i=t(6834),u=s([].join);a({target:"Array",proto:!0,forced:n!==Object||!i("join",",")},{join:function(e){return u(o(this),void 0===e?",":e)}})},4284:(e,r,t)=>{"use strict";var a=t(7697),s=t(1236).EXISTS,n=t(8844),o=t(2148),i=Function.prototype,u=n(i.toString),l=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,c=n(l.exec);a&&!s&&o(i,"name",{configurable:!0,get:function(){try{return c(l,u(this))[1]}catch(e){return""}}})}},e=>{e.O(0,[755,393],(()=>{return r=1810,e(e.s=r);var r}));e.O()}]);