"use strict";(self.webpackChunktweets_test_task=self.webpackChunktweets_test_task||[]).push([[814],{814:function(s,e,t){t.r(e),t.d(e,{default:function(){return p}});var r=t(439),a=t(791),n=t(434),l=t(97),i="UserCard_UserCard__D8++g",o="UserCard_UserName__sE2sk",u="UserCard_AvatarThumb__pKnrd",c="UserCard_Avatar__Gc9Nd",d="UserCard_DekorLine__4mChq",_="UserCard_CardText__riTWv",w="UserCard_FollowBtn__WBeN5",f="UserCard_FollowingBtn__uMzFK",m=t(184),v=function(s){var e=s.user,t=s.tweets,r=s.followres,a=s.avatar,v=s.following,x=s.id,C=(0,n.I0)(),h=function(){var s=!v,n=r;s?n+=1:n-=1,C((0,l.u)({user:e,tweets:t,updatedFollowersAmount:n,avatar:a,followingStatus:s,id:x}))};return(0,m.jsxs)("div",{className:i,children:[(0,m.jsx)("p",{className:o,children:e}),(0,m.jsx)("div",{className:u,children:(0,m.jsx)("img",{className:c,src:a,alt:"avatar"})}),(0,m.jsx)("span",{className:d}),(0,m.jsxs)("p",{className:_,children:[t," tweets"]}),(0,m.jsxs)("p",{className:_,children:[r," followers"]}),v?(0,m.jsx)("button",{onClick:h,type:"button",className:f,children:"Following"}):(0,m.jsx)("button",{onClick:h,className:w,type:"button",children:"Follow"})]})},x="UsersList_UsersList__Cpk3t",C=function(s){var e=s.users;return(0,m.jsx)("ul",{className:x,children:e&&e.map((function(s){var e=s.user,t=s.tweets,r=s.followres,a=s.avatar,n=s.id,l=s.following;return(0,m.jsx)("li",{children:(0,m.jsx)(v,{user:e,tweets:t,followres:r,avatar:a,id:n,following:l})},n)}))})},h=function(s){return s.users.users},j="Tweets_BtnWraper__F8ei1",N="Tweets_PaginationBtn__w3AUC",p=function(){var s=(0,a.useState)(1),e=(0,r.Z)(s,2),t=e[0],i=e[1],o=(0,n.I0)(),u=(0,n.v9)(h);return(0,a.useEffect)((function(){o((0,l.m)(t))}),[o,t]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(C,{users:u}),(0,m.jsxs)("div",{className:j,children:[(0,m.jsx)("button",{className:N,type:"button",disabled:1===t,onClick:function(){return i(t-1)},children:"Previous"}),(0,m.jsx)("button",{className:N,type:"button",disabled:3===t,onClick:function(){return i(t+1)},children:"Next"})]})]})}}}]);
//# sourceMappingURL=814.382fa6df.chunk.js.map