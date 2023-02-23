import React from "react";
import AddPost from "./AddPost";

export const Middle = () => {
  return (
    <div>
      <div className="">
        {/* create post */}
        <AddPost />
        {/* fetch posts */}
        <div className="postsBox" id="element" />
      </div>
    </div>
  );
};

// fetching the api of posts first

// (function () {
//   var ga = document.createElement("script");
//   ga.type = "text/javascript";
//   ga.async = true;
//   ga.src =
//     ("https:" == document.location.protocol ? "https://ssl" : "http://www") +
//     ".google-analytics.com/ga.js";
//   var s = document.getElementsByTagName("script")[0];
//   s.parentNode.insertBefore(ga, s);
// })();
// $(".postsBox");
// $.getJSON("https://dummyjson.com/posts", function (data) {
//   // console.log(data.posts);
//   var posts = data.posts.map(
//     (post) => `
//           <div
//           class='post bg-white rounded-2  border p-3 mb-3' is-load-list>

//             <div
//             class="postTop d-flex gap-2 align-content-center">

//               <div> <i class="fa-solid fa-circle-user text-primary fs-1"></i> </div>
//               <h3 class="PostTitle text-uppercase">
//                 ${post.tags[0]}
//               </h3>

//             </div>

//               <div
//               class="postBodyContent">
//                 <h4
//                   class="PostDescription text-body-secondary mt-2">
//                   ${post.title}
//                 </h4>
//                 <p
//                   class="PostBody text-light-emphasis mt-2">
//                   ${post.body}
//                 </ p>
//             </div>
//               <hr class='text-light-emphasis'>
//             <div class="postTail d-flex justify-content-between align-content-center ">

//               <button class="btn text-body-secondary ">
//                 <i class="fa-regular fa-thumbs-up"></i>
//                 <span>Like </span>
//               </button>

//               <button class="btn text-body-secondary">
//                 <i class="fa-regular fa-comment-dots"></i>
//                 <span>Comment </span>
//               </button>

//               <button class="btn text-body-secondary">
//                 <i class="fa-solid fa-retweet"></i>
//                 <span>Repost </span>
//               </button>

//               <button class="btn text-body-secondary">
//                 <i class="fa-solid fa-paper-plane"></i>
//                 <span>Send</span>
//               </button>
//               </div>

//           </div>`
//   );

//   // text = `<h2>${data.license_title}</h2><br>
//   //  ${posts.join("")}`;
//   // console.log(posts);
//   $(".postsBox").html(posts);
// });
