"use strict";

const loginBtn = document.querySelector("button");

// take code
const handleSignup = e => {
  e.preventDefault();

  const username = document.querySelector("#val-username"),
    email = document.querySelector("#val-email"),
    password = document.querySelector("#val-password");
  // confirm_password = document.querySelector("#val-confirm-password");

  const data = Qs.stringify({
    name: username.value,
    email: email.value,
    password: password.value,
  });

  console.log(username.value);

  setTimeout(() => {
    const config = {
      method: "post",
      url: "https://asia-northeast3-kubechat-351013.cloudfunctions.net/member-5",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        alert("회원가입 성공!");
        window.location.href = "../page-login.html";
      })
      .catch(function (error) {
        console.log(error);
        alert("회원가입 중 에러 발생!");
      });
  });
};

loginBtn.addEventListener("click", handleSignup);
