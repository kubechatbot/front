"use strict";

// function login() {
//   // console.log(id.value);
//   const req = {
//     email: email.value,
//     password: password.value,
//   };
//   console.log(req, JSON.stringify(req));

//   fetch("/login", {
//     method: "POST", // body를 통해서 전달할때는 http method도 같이 보내줘야함.
//     headers: {
//       "Content-Type" : "application/json",
//     }// 내가 전달하는 데이터는 JSON 형태야!
//     body : JSON.stringify(req), // 우리의 데이터는 JSON형태니까
//   }).then((res)=> res.json())
//     .then((res)=> {
//       if(res.success){
//         location.href="/";
//       }
//       else {
//         alert(res.msg);
//       }
//     })
//     .catch((err) => {
//       console.error("로그인 중 에러 발생");
//     });
// }

// const handleSignup = (e) => {
//   e.preventDefault();
//   const id = document.querySelector("#id").value;
//   constemail = document.querySelector("email").value;
//   const data = {
//    "email" : email,
//    "password" : password
// };
//   axios({
//       method: 'post',
//       url: 'http://localhost:3003/signup',
//       data: data
//   })
//   .then(loginSuccess)
//   .catch(error => {
//   alert("signup error!")
// });
// }

const loginBtn = document.querySelector("button");
// take code
const handleLogin = e => {
  e.preventDefault();

  //my code
  const email = document.querySelector("#email"),
    password = document.querySelector("#password");
  // console.log(email);

  // var qs = require("qs");
  var data = Qs.stringify({
    email: email,
    password: password,
  });
  console.log(data);
  var config = {
    method: "post",
    url: "https://asia-northeast3-kubechat-351013.cloudfunctions.net/member-4",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      // window.location.href = "/";
    })
    .catch(function (error) {
      console.log(error);
      alert("로그인 중 에러 발생!");
    });
};

// const handleLogin = e => {
//   e.preventDefault();
//   const email = document.querySelector("#email").value;
//   const password = document.querySelector("#password").value;
//   // const data = {
//   //   email: email,
//   //   password: password,
//   // };
//   // console.log(data);
//   axios({
//     headers: {
//       "Content-Type": "application/x-www-form-urlencoded",
//     },
//     method: "post",
//     url: "https://asia-northeast3-kubechat-351013.cloudfunctions.net/member-4",
//     data: {
//       email: "test@naver.com",
//       password: "abcd1234",
//     },
//   })
//     .then(loginSuccess)
//     .catch(error => {
//       alert("로그인 중 에러 발생!");
//       console.log(error.response.data);
//     });
// };

// const loginSuccess = response => {
//   const { accessToken } = response.data;
//   console.log(response.data);
//   // window.location.href = "/";
// };

loginBtn.addEventListener("click", handleLogin);

// axios({
//     url: 'https://test/api/cafe/list/today', // 통신할 웹문서
//     method: 'get', // 통신할 방식
//     data: { // 인자로 보낼 데이터
//       foo: 'diary'
//     }
//   });
