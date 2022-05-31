"use strict";

const loginBtn = document.querySelector("button");

// take code
const handleLogin = e => {
  e.preventDefault();

  const email = document.querySelector("#email"),
    password = document.querySelector("#password");

  const data = Qs.stringify({
    email: email.value,
    password: password.value,
  });

  // console.log(email.value);

  setTimeout(() => {
    const config = {
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
        window.location.href = "../dashboard.html";
      })
      .catch(function (error) {
        console.log(error);
        alert("로그인 중 에러 발생!");
      });
  });
};

loginBtn.addEventListener("click", handleLogin);
