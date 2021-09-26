const headeritem = document.querySelectorAll(".header__item"),
  headerlink = document.querySelectorAll(".headerlink");

for (let a = 0; a < headeritem.length; a++) {
  headeritem[a].addEventListener("mouseover", function () {
    headeritem[a].style = "transform: translateY(10px)";
  });

  headeritem[a].addEventListener("mouseout", function () {
    headeritem[a].style = "transform: translateX(0)";
  });
}

/*===============================================================*/

const vlogicons = document.querySelectorAll(".vlog-icons"),
  vlogtxt = document.querySelectorAll(".vlog__txt");

for (let i = 0; i < vlogicons.length; i++) {
  vlogicons[i].addEventListener("mouseover", function () {
    vlogicons[i].style = "transform: translateX(20px)";
  });

  vlogicons[i].addEventListener("mouseout", function () {
    vlogicons[i].style = "transform: translateX(0)";
  });
}
/*===============================================================*/

// const google__p = document.querySelector('.googl__p'),
const google__p = document.querySelector(".google__sign-link"),
  googlesigntxt = document.querySelector(".google__sign-txt");

// for (let i = 0; i < googlesigntxt.length; i++) {

google__p.addEventListener("mouseover", function () {
  google__p.style = "transform: scale(1.1)";
});

google__p.addEventListener("mouseout", function () {
  google__p.style = "transform: scale(1)";
});

const linkfor = document.querySelectorAll(".link__for"),
  headertxtsign = document.querySelector(".header__txt-sign");

for (let i = 0; i < linkfor.length; i++) {
  linkfor[i].addEventListener("mouseover", function () {
    linkfor[i].style = "transform: scale(1.1)";
  });

  linkfor[i].addEventListener("mouseout", function () {
    linkfor[i].style = "transform: scale(1)";
  });
}

/*===============================================================*/

const group__logo = document.querySelectorAll(".group__logo"),
  groups__logos = document.querySelectorAll(".groups__logos");

for (let i = 0; i < group__logo.length; i++) {
  group__logo[i].addEventListener("mouseover", function () {
    group__logo[i].style = "transform: scale(1.6)";
  });

  group__logo[i].addEventListener("mouseout", function () {
    group__logo[i].style = "transform: scale(1)";
  });
}
/*===============================================================*/

const bloc = document.querySelectorAll(".bloc"),
  groupsvlog3 = document.querySelectorAll(".groups__vlog-3");

for (let i = 0; i < bloc.length; i++) {
  bloc[i].addEventListener("mouseover", function () {
    bloc[i].style = "transform: translateX(20px)";
  });

  bloc[i].addEventListener("mouseout", function () {
    bloc[i].style = "transform: translateX(0)";
  });
}

/*===============================================================*/

const block = document.querySelectorAll(".block"),
  vloggrouptxt = document.querySelectorAll(".vlog__group-txt");

for (let i = 0; i < block.length; i++) {
  block[i].addEventListener("mouseover", function () {
    block[i].style = "transform: translateY(20px)";
  });

  block[i].addEventListener("mouseout", function () {
    block[i].style = "transform: translateX(0)";
  });
}

/*===============================================================*/
let timerNum = document.querySelectorAll(".timer__num"),
  vlog4Y = document.querySelector(".vlog-4").offsetTop;
  

window.addEventListener("scroll", function onScroll(e) {
  if (vlog4Y < window.scrollY + window.innerHeight) {
    timerNum.forEach((el) => {
      let elTimer = el.getAttribute("data-timer");
      el.innerHTML = 0;

      function scrollCount(k = 0) {
        el.innerHTML = k;
        k++;
        if (k <= elTimer) {
          setTimeout(() => {
            scrollCount(k);
          }, 20);
        }
      }
      scrollCount();
    });
    this.removeEventListener("scroll", onScroll);
  }
});

/*===============================================================*/

let upper__txt = document.querySelector(".upper__txt");
let many__txt = document.querySelector(".many__txt");
let min__title = document.querySelector(".min__title");
let min__txt = document.querySelector(".min__txt");
let vlog__title = document.querySelector(".vlog__title");
let many__title = document.querySelector(".many__title");
let header__title = document.querySelector(".header__title");

function textPress(text) {
  let innerText = text.innerHTML;
  text.innerHTML = "";
  let i = 0;

  function typing(text2) {
    text2.innerHTML += innerText[i];
    i++;
    if (i < innerText.length) {
      setTimeout(() => {
        typing(text);
      }, 40);
    }
  }
  typing(text);
}

let checkers = [false, false, false, false, false, false, false];

window.addEventListener("scroll", (e) => {
  const scroll = scrollY;
  console.log(scroll);
  if (scroll + upper__txt.clientHeight >= upper__txt.offsetTop /1.3) {
    if (!checkers[0]) {
        textPress(upper__txt);
        checkers[0] = true;
    }
  }
  if (scroll + many__txt.clientHeight >= many__txt.offsetTop /1.3) {
    if (!checkers[1]) {
        textPress(many__txt);
        checkers[1] = true;
    }
  }
  if (scroll + min__title.clientHeight >= min__title.offsetTop /1.3) {
    if (!checkers[2]) {
        textPress(min__title);
        checkers[2] = true;
    }
  }
  if (scroll + vlog__title.clientHeight >= vlog__title.offsetTop /1.3) {
    if (!checkers[3]) {
        textPress(vlog__title);
        checkers[3] = true;
    }
  }
  if (scroll + header__title.clientHeight >= header__title.offsetTop /1.3) {
    if (!checkers[4]) {
        textPress(header__title);
        checkers[4] = true;
    }
  }
  if (scroll + many__title.clientHeight >= many__title.offsetTop /1.3) {
    if (!checkers[5]) {
        textPress(many__title);
        checkers[5] = true;
    }
  }
  if (scroll + min__txt.clientHeight >= min__txt.offsetTop /1.3) {
    if (!checkers[6]) {
        textPress(min__txt);
        checkers[6] = true;
    }
  }
});
