var searchFunc=function(t,r,i){"use strict";$.ajax({url:t,dataType:"xml",success:function(t){var e=$("entry",t).map(function(){return{title:$("title",this).text(),content:$("content",this).text(),url:$("url",this).text()}}).get(),t=document.getElementById(r),n=document.getElementById(i);t.addEventListener("input",function(){var o='<ul class="search-result-list">',h=this.value.trim().toLowerCase().split(/[\s\-]+/);n.innerHTML="",this.value.trim().length<=0||(e.forEach(function(t){var n,e,r,i=!0,l=(t.title&&""!==t.title.trim()||(t.title="Untitled"),t.title.trim().toLowerCase()),s=t.content.trim().replace(/<[^>]+>/g,"").toLowerCase(),a=t.url,c=-1,u=-1;""!==s?h.forEach(function(t,e){n=l.indexOf(t),c=s.indexOf(t),n<0&&c<0?i=!1:(c<0&&(c=0),0==e&&(u=c))}):i=!1,i&&(o+="<li><a href='"+a+"' class='search-result-title'>"+l+"</a>",a=t.content.trim().replace(/<[^>]+>/g,""),0<=u&&(t=u+80,(t=0==(e=(e=u-20)<0?0:e)?100:t)>a.length&&(t=a.length),r=a.substr(e,t),h.forEach(function(t){var e=new RegExp(t,"gi");r=r.replace(e,'<em class="search-keyword">'+t+"</em>")}),o+='<p class="search-result">'+r+"...</p>"),o+="</li>")}),o+="</ul>",n.innerHTML=o)})}})};