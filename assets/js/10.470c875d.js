(window.webpackJsonp=window.webpackJsonp||[]).push([[10,13,15,25,31,36],{295:function(t,e,s){},296:function(t,e,s){"use strict";s.r(e);var i=s(14),n={props:{item:{required:!0}},computed:{link(){return Object(i.c)(this.item.link)},exact(){return this.$site.locales?Object.keys(this.$site.locales).some(t=>t===this.link):"/"===this.link}},methods:{isExternal:i.g,isMailto:i.h,isTel:i.i,focusoutAction(){this.$emit("focusout")}}},o=s(1),a=Object(o.a)(n,(function(){var t=this,e=t._self._c;return t.isExternal(t.link)?e("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.isMailto(t.link)||t.isTel(t.link)?null:"_blank",rel:t.isMailto(t.link)||t.isTel(t.link)?null:"noopener noreferrer"},on:{focusout:t.focusoutAction}},[t._v("\n  "+t._s(t.item.text)+"\n  "),e("OutboundLink")],1):e("router-link",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact},nativeOn:{focusout:function(e){return t.focusoutAction.apply(null,arguments)}}},[t._v(t._s(t.item.text))])}),[],!1,null,null,null);e.default=a.exports},297:function(t,e,s){},298:function(t,e,s){"use strict";s.r(e);var i={name:"DropdownTransition",methods:{setHeight(t){t.style.height=t.scrollHeight+"px"},unsetHeight(t){t.style.height=""}}},n=(s(299),s(1)),o=Object(n.a)(i,(function(){return(0,this._self._c)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)}),[],!1,null,null,null);e.default=o.exports},299:function(t,e,s){"use strict";s(295)},303:function(t,e,s){},305:function(t,e,s){"use strict";s(297)},309:function(t,e,s){},313:function(t,e,s){"use strict";s.r(e);var i=s(296),n=s(298),o=s(118),a=s.n(o),r={components:{NavLink:i.default,DropdownTransition:n.default},data:()=>({open:!1,isMQMobile:!1}),props:{item:{required:!0}},computed:{dropdownAriaLabel(){return this.item.ariaLabel||this.item.text}},beforeMount(){this.isMQMobile=window.innerWidth<720,window.addEventListener("resize",()=>{this.isMQMobile=window.innerWidth<720})},methods:{toggle(){this.isMQMobile&&(this.open=!this.open)},isLastItemOfArray:(t,e)=>a()(e)===t},watch:{$route(){this.open=!1}}},l=(s(305),s(1)),u=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[e("button",{staticClass:"dropdown-title",attrs:{type:"button","aria-label":t.dropdownAriaLabel},on:{click:t.toggle}},[t.item.link?e("router-link",{staticClass:"link-title",attrs:{to:t.item.link}},[t._v(t._s(t.item.text))]):t._e(),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:!t.item.link,expression:"!item.link"}],staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),e("span",{staticClass:"arrow",class:t.open?"down":"right"})],1),t._v(" "),e("DropdownTransition",[e("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,(function(s,i){return e("li",{key:s.link||i,staticClass:"dropdown-item"},["links"===s.type?e("h4",[t._v(t._s(s.text))]):t._e(),t._v(" "),"links"===s.type?e("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(s.items,(function(i){return e("li",{key:i.link,staticClass:"dropdown-subitem"},[e("NavLink",{attrs:{item:i},on:{focusout:function(e){t.isLastItemOfArray(i,s.items)&&t.isLastItemOfArray(s,t.item.items)&&t.toggle()}}})],1)})),0):e("NavLink",{attrs:{item:s},on:{focusout:function(e){t.isLastItemOfArray(s,t.item.items)&&t.toggle()}}})],1)})),0)])],1)}),[],!1,null,null,null);e.default=u.exports},318:function(t,e,s){"use strict";s(303)},320:function(t,e,s){"use strict";s.r(e);var i=s(313),n=s(14),o={components:{NavLink:s(296).default,DropdownLink:i.default},computed:{userNav(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav(){const{locales:t}=this.$site;if(t&&Object.keys(t).length>1){const e=this.$page.path,s=this.$router.options.routes,i=this.$site.themeConfig.locales||{},n={text:this.$themeLocaleConfig.selectText||"Languages",ariaLabel:this.$themeLocaleConfig.ariaLabel||"Select language",items:Object.keys(t).map(n=>{const o=t[n],a=i[n]&&i[n].label||o.lang;let r;return o.lang===this.$lang?r=e:(r=e.replace(this.$localeConfig.path,n),s.some(t=>t.path===r)||(r=n)),{text:a,link:r}})};return[...this.userNav,n]}return this.userNav},userLinks(){return(this.nav||[]).map(t=>Object.assign(Object(n.k)(t),{items:(t.items||[]).map(n.k)}))},repoLink(){const{repo:t}=this.$site.themeConfig;return t?/^https?:/.test(t)?t:"https://github.com/"+t:null},repoLabel(){if(!this.repoLink)return;if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;const t=this.repoLink.match(/^https?:\/\/[^/]+/)[0],e=["GitHub","GitLab","Bitbucket"];for(let s=0;s<e.length;s++){const i=e[s];if(new RegExp(i,"i").test(t))return i}return"Source"}}},a=(s(318),s(1)),r=Object(a.a)(o,(function(){var t=this,e=t._self._c;return t.userLinks.length||t.repoLink?e("nav",{staticClass:"nav-links"},[t._l(t.userLinks,(function(t){return e("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?e("DropdownLink",{attrs:{item:t}}):e("NavLink",{attrs:{item:t}})],1)})),t._v(" "),t.repoLink?e("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),e("OutboundLink")],1):t._e()],2):t._e()}),[],!1,null,null,null);e.default=r.exports},335:function(t,e,s){},336:function(t,e,s){"use strict";s(309)},337:function(t,e,s){},350:function(t,e,s){"use strict";s.r(e);s(336);var i=s(1),n=Object(i.a)({},(function(){var t=this,e=t._self._c;return e("div",{staticClass:"sidebar-button",attrs:{title:"目录"},on:{click:function(e){return t.$emit("toggle-sidebar")}}},[e("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[e("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])])}),[],!1,null,null,null);e.default=n.exports},359:function(t,e,s){"use strict";s(335)},360:function(t,e,s){"use strict";s(337)},374:function(t,e,s){"use strict";s.r(e);s(15);var i={data:()=>({query:"",focused:!1,focusIndex:0,placeholder:void 0}),mounted(){this.placeholder=this.$site.themeConfig.searchPlaceholder||"",document.addEventListener("keydown",this.onHotkey)},beforeDestroy(){document.removeEventListener("keydown",this.onHotkey)},computed:{showSuggestions(){return this.focused&&this.suggestions},suggestions(){const t=this.query.trim().toLowerCase();if(!t)return;const{pages:e}=this.$site,s=this.$site.themeConfig.searchMaxSuggestions||5,i=this.$localePath,n=e=>e&&e.title&&e.title.toLowerCase().indexOf(t)>-1,o=[];for(let t=0;t<e.length&&!(o.length>=s);t++){const a=e[t];if(this.getPageLocalePath(a)===i&&this.isSearchable(a))if(n(a))o.push(a);else if(a.headers)for(let t=0;t<a.headers.length&&!(o.length>=s);t++){const e=a.headers[t];n(e)&&o.push(Object.assign({},a,{path:a.path+"#"+e.slug,header:e}))}}return[{title:"在Baidu中搜索",frontUrl:"https://www.baidu.com/s?wd=site%3Axiaoliutalk.cn%20"},{title:"在Bing中搜索",frontUrl:"https://cn.bing.com/search?q="}].length&&[{title:"在Baidu中搜索",frontUrl:"https://www.baidu.com/s?wd=site%3Axiaoliutalk.cn%20"},{title:"在Bing中搜索",frontUrl:"https://cn.bing.com/search?q="}].forEach(t=>{t.thirdparty=!0,t.title=`${t.title}"${this.query}"`,t.behindUrl=t.behindUrl||"",o.push(t)}),o},alignRight(){return(this.$site.themeConfig.nav||[]).length+(this.$site.repo?1:0)<=2}},methods:{getPageLocalePath(t){for(const e in this.$site.locales||{})if("/"!==e&&0===t.path.indexOf(e))return e;return"/"},isSearchable(t){let e=null;return null===e||(e=Array.isArray(e)?e:new Array(e),e.filter(e=>t.path.match(e)).length>0)},onHotkey(t){t.srcElement===document.body&&["s","/"].includes(t.key)&&(this.$refs.input.focus(),t.preventDefault())},onUp(){this.showSuggestions&&(this.focusIndex>0?this.focusIndex--:this.focusIndex=this.suggestions.length-1)},onDown(){this.showSuggestions&&(this.focusIndex<this.suggestions.length-1?this.focusIndex++:this.focusIndex=0)},go(t){if(!this.showSuggestions)return;const e=this.suggestions[t];e.thirdparty?window.open(e.frontUrl+this.query+e.behindUrl,"_blank"):(this.$router.push(e.path),this.query="",this.focusIndex=0)},focus(t){this.focusIndex=t},unfocus(){this.focusIndex=-1}}},n=(s(359),s(1)),o=Object(n.a)(i,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"search-box"},[e("input",{ref:"input",class:{focused:t.focused},attrs:{"aria-label":"Search",placeholder:t.placeholder,autocomplete:"off",spellcheck:"false"},domProps:{value:t.query},on:{input:function(e){t.query=e.target.value},focus:function(e){t.focused=!0},blur:function(e){t.focused=!1},keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.go(t.focusIndex)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:t.onUp.apply(null,arguments)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.onDown.apply(null,arguments)}]}}),t._v(" "),t.showSuggestions?e("ul",{staticClass:"suggestions",class:{"align-right":t.alignRight},on:{mouseleave:t.unfocus}},t._l(t.suggestions,(function(s,i){return e("li",{staticClass:"suggestion",class:{focused:i===t.focusIndex},on:{mousedown:function(e){return t.go(i)},mouseenter:function(e){return t.focus(i)}}},[s.thirdparty?e("a",{attrs:{href:"javascript:;"},on:{click:function(t){t.preventDefault()}}},[e("span",{staticClass:"page-title"},[t._v(t._s(s.title))]),t._v(" "),e("svg",{staticClass:"icon outbound",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15"}},[e("path",{attrs:{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}}),t._v(" "),e("polygon",{attrs:{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"}})])]):e("a",{attrs:{href:s.path},on:{click:function(t){t.preventDefault()}}},[e("span",{staticClass:"page-title"},[t._v(t._s(s.title||s.path))]),t._v(" "),s.header?e("span",{staticClass:"header"},[t._v("> "+t._s(s.header.title))]):t._e()])])})),0):t._e()])}),[],!1,null,null,null).exports,a=s(350),r=s(320);function l(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var u={components:{SidebarButton:a.default,NavLinks:r.default,SearchBox:o,AlgoliaSearchBox:{}},data:()=>({linksWrapMaxWidth:null}),mounted(){const t=parseInt(l(this.$el,"paddingLeft"))+parseInt(l(this.$el,"paddingRight")),e=()=>{document.documentElement.clientWidth<719?this.linksWrapMaxWidth=null:this.linksWrapMaxWidth=this.$el.offsetWidth-t-(this.$refs.siteName&&this.$refs.siteName.offsetWidth||0)};e(),window.addEventListener("resize",e,!1)},computed:{algolia(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}}},c=(s(360),Object(n.a)(u,(function(){var t=this,e=t._self._c;return e("header",{staticClass:"navbar blur"},[e("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),e("router-link",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?e("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?e("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":t.$site.themeConfig.logo}},[t._v(t._s(t.$siteTitle))]):t._e()]),t._v(" "),e("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[t.isAlgoliaSearch?e("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?e("SearchBox"):t._e(),t._v(" "),e("NavLinks",{staticClass:"can-hide"})],1)],1)}),[],!1,null,null,null));e.default=c.exports}}]);