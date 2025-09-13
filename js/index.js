page.posts.each(function (post) {
 var str = post.content;
 var pattern = '<img.*?>';
 var match = pattern.exec(str);
     if (match) {
      console.log(11111111);
      }else{
        console.log("No match found.");
      }
})
console.log(11111111);
