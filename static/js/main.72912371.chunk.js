(this.webpackJsonpbibleforall=this.webpackJsonpbibleforall||[]).push([[0],{27:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a.n(s),n=a(16),r=a.n(n),o=a(3),i=a(11),l=a(2),b=a(7),d=a.n(b),j=a(17),u=function(e){var t=Object(s.useState)(),a=Object(o.a)(t,2),c=a[0],n=a[1],r=Object(s.useState)(!0),i=Object(o.a)(r,2),l=i[0],b=i[1],u=Object(s.useState)(),h=Object(o.a)(u,2),p=h[0],O=h[1];return Object(s.useEffect)((function(){var t=new AbortController;return Object(j.a)(d.a.mark((function a(){var s,c;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,fetch(e,{signal:t.signal});case 3:if((s=a.sent).ok){a.next=6;break}throw new Error(s.statusText);case 6:return c=null,a.next=9,s.json();case 9:c=a.sent,n(c),a.next=16;break;case 13:a.prev=13,a.t0=a.catch(0),O(a.t0.message);case 16:return a.prev=16,b(!1),a.finish(16);case 19:case"end":return a.stop()}}),a,null,[[0,13,16,19]])})))(),function(){t.abort()}}),[e]),{data:c,isPending:l,error:p}},h=function(){var e="fd37d8f28e95d3be8cb4fbc37e15e18e",t="https://api.biblia.com/v1/bible/contents/".concat("LEB","?key=").concat(e),a=u(t).data,c=Object(s.useState)(),n=Object(o.a)(c,2),r=n[0],i=n[1];return Object(s.useEffect)((function(){if(a){var e=a.books[0];i({currentChapter:1,name:e.passage,bookIndex:0,chaptersCount:e.chapters.length})}}),[a]),{displayedBookData:r,setDisplayedBookData:i,bookList:a,API_KEY:e,bibleId:"LEB"}},p=a(20),O=a(1),v=function(){var e=d.a.mark(i),t=Object(s.useContext)(x),a=t.isSelectNameClicked,c=t.setIsSelectNameClicked,n=t.isSelectChapterClicked,r=t.setIsSelectChapterClicked;function i(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=1;case 1:if(!(a<=t)){e.next=7;break}return e.next=4,a;case 4:a++,e.next=1;break;case 7:case"end":return e.stop()}}),e)}var l=Object(s.useContext)(I).setIsPassagePending,b=Object(s.useContext)(P),j=b.bookList,u=b.displayedBookData,h=b.setDisplayedBookData,v=j.books,f=Object(s.useState)(),m=Object(o.a)(f,2),k=m[0],g=m[1];Object(s.useEffect)((function(){g({name:u.name,chaptersCount:u.chaptersCount})}),[u]);var C=a||n;return Object(O.jsx)(O.Fragment,{children:C&&Object(O.jsxs)("div",{className:"book-select__options",children:[Object(O.jsx)("div",{className:"book-select__name-options no-visible-scrollbar",children:null===v||void 0===v?void 0:v.map((function(e,t){return Object(O.jsx)("div",{className:"btn ".concat(e.passage===k.name?"btn--active":""," book-select__name-option"),"data-name":e.passage,"data-chapter-count":e.chapters.length,onClick:function(e){var t=e.target;t.classList.contains("book-select__name-option")&&(null===g||void 0===g||g({name:t.dataset.name,chaptersCount:t.dataset.chapterCount})),r(!0)},children:e.passage},t)}))}),Object(O.jsx)("div",{className:"book-select__chapter-options no-visible-scrollbar",children:n&&Object(p.a)(i(k.chaptersCount)).map((function(e){return Object(O.jsx)("div",{className:"btn book-select__chapter-option","data-chapter":e,onClick:function(e){var t=e.target,a={};j.books.forEach((function(e,s){if(e.passage===k.name)return a={currentChapter:parseInt(t.dataset.chapter),name:e.passage,bookIndex:s,chaptersCount:e.chapters.length},!0})),h(a),l(!0),c(!1),r(!1)},children:e},e)}))})]})})},x=Object(s.createContext)(),f=function(){var e=Object(s.useContext)(P).displayedBookData,t=Object(s.useState)(!1),a=Object(o.a)(t,2),c=a[0],n=a[1],r=Object(s.useState)(!1),i=Object(o.a)(r,2),l=i[0],b=i[1];return Object(O.jsxs)("div",{className:"book-select",children:[Object(O.jsxs)("div",{className:"book-select__controls",children:[Object(O.jsx)("div",{className:"book-select__name-control btn ".concat(c?"btn--active":""),onClick:function(){n((function(e){return!e}))},children:e&&e.name}),Object(O.jsx)("div",{className:"book-select__chapter-control btn ".concat(l?"btn--active":""),onClick:function(){b((function(e){return!e}))},children:e&&e.currentChapter})]}),Object(O.jsx)(x.Provider,{value:{isSelectNameClicked:c,setIsSelectNameClicked:n,isSelectChapterClicked:l,setIsSelectChapterClicked:b},children:Object(O.jsx)(v,{})})]})},m=function(){var e=u("https://labs.bible.org/api/?passage=votd&type=json&formatting=para").data,t=Object(s.useState)(!1),a=Object(o.a)(t,2),c=a[0],n=a[1];return Object(O.jsxs)("div",{className:"votd ".concat(c&&"btn--active"),children:[Object(O.jsx)("div",{className:"votd__control btn",onClick:function(){n((function(e){return!e}))},children:"VOTD"}),e&&Object(O.jsxs)("div",{className:"votd__content no-visible-scrollbar ".concat(!c&&"no-height"),children:[Object(O.jsx)("h2",{className:"votd__header",children:"Verse(s) Of The Day"}),Object(O.jsx)("ul",{className:"votd__textlist",children:e&&e.map((function(e,t){return Object(O.jsxs)("li",{className:"votd__text",children:[Object(O.jsxs)("div",{className:"votd__passage",children:[Object(O.jsx)("span",{children:e.bookname}),Object(O.jsxs)("span",{children:[e.chapter,":"]}),Object(O.jsx)("span",{children:e.verse})]},t),Object(O.jsx)("div",{className:"votd__passage-msg",dangerouslySetInnerHTML:{__html:e.text}})]},t)}))})]})," "]})},k=function(){return Object(O.jsxs)("div",{className:"header",children:[Object(O.jsx)(f,{}),Object(O.jsx)("div",{children:Object(O.jsx)(m,{})})]})},g=a(6),C=function(e){var t=Object(s.useContext)(I),a=t.isPassagePending,c=t.setIsPassagePending,n=Object(s.useContext)(P),r=n.bookList,o=n.displayedBookData,i=n.setDisplayedBookData,l=n.API_KEY,b=n.bibleId,d=o.name,j=o.currentChapter,h=o.chaptersCount,p=function(e){e.scrollTop=0},O=function(e,t){var a=e.bookIndex,s=Object(g.a)({},e);j<h?s=Object(g.a)(Object(g.a)({},s),{},{currentChapter:j+1}):a<t.length-1&&(s=Object(g.a)(Object(g.a)({},s),{},{bookIndex:a+1,name:t[a+1].passage,currentChapter:1,chaptersCount:t[a+1].chapters.length})),i(s)},v=function(e,t){var a=e.bookIndex,s=Object(g.a)({},e);j>1?s=Object(g.a)(Object(g.a)({},s),{},{currentChapter:j-1}):a>0&&(s=Object(g.a)(Object(g.a)({},s),{},{bookIndex:a-1,name:t[a-1].passage,currentChapter:t[a-1].chapters.length,chaptersCount:t[a-1].chapters.length})),i(s)},x="https://api.biblia.com/v1/bible/content/".concat(b,".html.json?passage=").concat(d).concat(j,"&style=fullyFormatted&key=").concat(l),f=u(x),m=f.data,k=f.isPending;return Object(s.useEffect)((function(){m&&(c(!1),e.current&&p(e.current))}),[m]),{passageToShow:m,isPending:k,nextPassage:O,prevPassage:v,scrollTop:p,displayedBookData:o,isPassagePending:a,setIsPassagePending:c,handlePassageChange:function(e){var t=o.bookIndex,a=r.length,s=e.target;if(!s.classList.contains("view-direction"))return!1;if(c(!0),s.classList.contains("next")){if(t===a-1&&j===h)return c(!1);O(o,r.books)}else if(s.classList.contains("prev")){if(0===t&&1===j)return c(!1);v(o,r.books)}}}},_=function(){var e=Object(s.useRef)(),t=C(e),a=t.passageToShow,c=t.handlePassageChange;return Object(O.jsxs)("div",{className:"scripture-view",onClick:c,children:[Object(O.jsx)("div",{className:"view-direction prev btn",children:"PREV"}),a&&Object(O.jsx)("div",{className:"viewing-passage no-visible-scrollbar",ref:e,dangerouslySetInnerHTML:{__html:a.text}}),Object(O.jsx)("div",{className:"view-direction next btn",children:"NEXT"})]})},N=(a(27),function(){return Object(O.jsx)("div",{className:"not-found",children:Object(O.jsxs)(i.b,{to:"/",children:[Object(O.jsx)("div",{className:"location-404",children:"404"}),Object(O.jsx)("div",{className:"location-home",children:"GO HOME"})]})})}),P=Object(s.createContext)(),I=Object(s.createContext)(),S=function(){var e=Object(s.useState)(!0),t=Object(o.a)(e,2),a=t[0],c=t[1],n=h(),r=n.displayedBookData,b=n.setDisplayedBookData,d=n.bookList,j=n.API_KEY,u=n.bibleId;return Object(O.jsx)(O.Fragment,{children:r&&d&&Object(O.jsx)(I.Provider,{value:{isPassagePending:a,setIsPassagePending:c},children:Object(O.jsx)(P.Provider,{value:{displayedBookData:r,setDisplayedBookData:b,bookList:d,API_KEY:j,bibleId:u},children:Object(O.jsx)(i.a,{children:Object(O.jsxs)(l.c,{children:[Object(O.jsxs)(l.a,{exact:!0,path:"/",children:[Object(O.jsx)(k,{}),a&&Object(O.jsx)("div",{className:"pending"}),Object(O.jsx)(_,{})]}),Object(O.jsx)(l.a,{path:"/*",children:Object(O.jsx)(N,{})})]})})})})})};r.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(S,{})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.72912371.chunk.js.map