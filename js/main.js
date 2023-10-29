"use strict";
//--------------------------------------------------topのテキストアニメーション
{
    const animationTargetElements = document.querySelectorAll(".textAnimation");

    for (let i = 0; i < animationTargetElements.length; i++) {
        const targetElement = animationTargetElements[i];
        const texts = targetElement.textContent;
        const textsArray = []; //空の配列

        targetElement.textContent = ""; //文字を見えなくしてるがデータとして残っている

        //splitで上で抽出して見えなくした文字列を一文字ずつ配列に入れる
        console.log(texts.split(""));
        //for文の中でfor文を回してるので、2つ目の変数jを使って
        //splitで一文字ずつ取り出す
        for (let j = 0; j < texts.split("").length; j++) {
            const txt = texts.split("")[j]; //変数txtに入れえる

            //ifはkを += してから書いた
            if (txt === " ") {
                //取り出した文字列が空白だったら
                textsArray.push(" "); //空白のまま追加する
            } else {
                //spanで囲って返す
                textsArray.push(
                    // "<span><span>" + txt + "</span></span>" //spanを二重にした
                    '<span><span style="animation-delay: ' +
                        j * 1 + //インクリメントされる速さの0.１倍秒で
                        's;">' + //spanにテキストを入れていく
                        txt +
                        "</span></span>" //spanを二重にした
                ); //textsArrayの<span>の中に順番に代入する
            } //spanの中にjがインクリメントされる順番＊秒の0.1倍で挿入される
        }
        //spanで囲んだ文字を元のtextAnimationに戻す変数k

        for (let k = 0; k < textsArray.length; k++) {
            targetElement.innerHTML += textsArray[k]; //一つのspanに一文字づつ入った。これをアニメーションさせる
        }
    }
}
//------------------------------------------blog のテキストアニメーション
{
    const animationTargetElements = document.querySelectorAll(
        ".textAnimation_blog"
    );

    for (let i = 0; i < animationTargetElements.length; i++) {
        const targetElement = animationTargetElements[i];
        const texts = targetElement.textContent;
        const textsArray = []; //空の配列

        targetElement.textContent = ""; //文字を見えなくしてるがデータとして残っている

        //splitで上で抽出して見えなくした文字列を一文字ずつ配列に入れる
        console.log(texts.split(""));
        //for文の中でfor文を回してるので、2つ目の変数jを使って
        //splitで一文字ずつ取り出す
        for (let j = 0; j < texts.split("").length; j++) {
            const txt = texts.split("")[j]; //変数txtに入れえる

            //ifはkを += してから書いた
            if (txt === " ") {
                //取り出した文字列が空白だったら
                textsArray.push(" "); //空白のまま追加する
            } else {
                //spanで囲って返す
                textsArray.push(
                    // "<span><span>" + txt + "</span></span>" //spanを二重にした
                    '<span><span style="animation-delay: ' +
                        j * 1 + //インクリメントされる速さの0.１倍秒で
                        's;">' + //spanにテキストを入れていく
                        txt +
                        "</span></span>" //spanを二重にした
                ); //textsArrayの<span>の中に順番に代入する
            } //spanの中にjがインクリメントされる順番＊秒の0.1倍で挿入される
        }
        //spanで囲んだ文字を元のtextAnimationに戻す変数k

        for (let k = 0; k < textsArray.length; k++) {
            targetElement.innerHTML += textsArray[k]; //一つのspanに一文字づつ入った。これをアニメーションさせる
        }
    }
}
//--------------------------BG_img topページのimg画像
{
    //                             これは何？
    document.addEventListener("DOMContentLoaded", function () {
        const contents = document.querySelectorAll(".contents");

        contents.forEach(function (elem) {
            const contentsTop = elem.offsetTop; //これは何？
            const showClass = "show";
            const timing = 100; // コンテンツが画面下端から300px見えたら表示

            window.addEventListener("load", checkVisibility);
            window.addEventListener("scroll", checkVisibility);
            window.addEventListener("resize", checkVisibility);

            function checkVisibility() {
                const winHeight = window.innerHeight;
                const scrollTop = window.scrollY;

                if (scrollTop >= contentsTop - winHeight + timing) {
                    elem.classList.add(showClass);
                } else {
                    elem.classList.remove(showClass);
                }
            }
        });
    });
}
//---------------------------bg予備
// {
//     document.addEventListener("DOMContentLoaded", function () {
//         var contents = document.querySelectorAll(".contents");

//         function checkElementVisibility() {
//             var winHeight = window.innerHeight;
//             var scrollTop = window.scrollY;
//             var timing = 100; // 100pxコンテンツが見えたら次のif文がtrue

//             contents.forEach(function (elem) {
//                 var contentsPos = elem.getBoundingClientRect().top;
//                 if (contentsPos - winHeight + timing <= 0) {
//                     elem.classList.add("show");
//                 } else {
//                     elem.classList.remove("show");
//                 }
//             });
//         }

//         // ウィンドウのスクロール、リサイズ時にチェック
//         window.addEventListener("scroll", checkElementVisibility);
//         window.addEventListener("resize", checkElementVisibility);
//     });
// }

//-----------------------jQuery
// {
// $(function () {
//     $(".contents").each(function (i, elem) {
//         var contentsPOS = $(elem).offset().top;
//         $(window).on("load scroll resize", function () {
//             var winHeight = $(window).height();
//             var scrollTop = $(window).scrollTop();
//             var showClass = "show";
//             var timing = 100; // 100pxコンテンツが見えたら次のif文がtrue
//             if (scrollTop >= contentsPOS - winHeight + timing) {
//                 $(elem).addClass(showClass);
//             } else {
//                 $(elem).removeClass(showClass);
//             }
//         });
//     });
// });

// }

//---------------------topへのボタン

// ページがスクロールされたときに実行される関数
window.addEventListener("scroll", function () {
    const scrollBtn = document.querySelector(".scrollBtn");
    if (window.scrollY > 300) {
        // 500はスクロール位置の閾値、適宜調整
        scrollBtn.classList.add("show");
    } else {
        scrollBtn.classList.remove("show");
    }
});

//-----------------header＿catchを消す
// {
//     window.addEventListener("scroll", () => {
//         const scrollBtn = document.querySelector(".scrollBtn");
//         const scroll = window.scrollY;

//         if (scroll > 500) {
//             scrollBtn.style.opacity = "0";
//         } else {
//             scrollBtn.style.opacity = "1";
//         }
//     });
// }
//----------------------キャッチコピーを消す
{
    window.addEventListener("scroll", () => {
        const topCatch = document.querySelector(".header__catch");
        const scroll = window.scrollY;

        if (scroll > 250) {
            topCatch.style.opacity = "0";
            // console.log("scroll");
        } else {
            topCatch.style.opacity = "1";
            // console.log("scroll");
        }
    });
}
//------------------------テキストアニメーションを消す
// {
//     window.addEventListener("scroll", () => {
//         const keyvisual = document.querySelector(".keyvisual");
//         const scroll = window.scrollY;

//         if (scroll > 300) {
//             keyvisual.style.opacity = "0";
//             // console.log("scroll");
//         } else {
//             keyvisual.style.opacity = "1";
//             // console.log("scroll");
//         }
//     });
// }
//------------------------ハンバーガー

//  ^^^^^^^^^^^^^^^^^^^  top   ^^^^^^^^^^^^^
{
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav_links");
    const navLinks = document.querySelectorAll(".nav_links_li");
    const keyvisual = document.querySelector(".keyvisual");

    burger.addEventListener("click", () => {
        nav.classList.toggle("nav_active");
        keyvisual.classList.toggle("hide");

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `navLinksFade 0.5s ease forwards ${
                    index / 3 + 0.2
                }s`;
            }

            console.log(link, index);
        });

        burger.classList.toggle("toggle");
    });
}

//^^^^^^^^^^^^^^^^^^^^^^ blog ^^^^^^^^^^^^^^^^^^^^
{
    const burgerBlog = document.querySelector(".burger_blog");
    const navBlog = document.querySelector(".nav_links_blog");
    const navLinksBlog = document.querySelectorAll(".nav_links_li_blog");

    burgerBlog.addEventListener("click", () => {
        navBlog.classList.toggle("nav_active_blog");

        navLinksBlog.forEach((nav_link_blog, index) => {
            if (nav_link_blog.style.animation) {
                nav_link_blog.style.animation = "";
            } else {
                nav_link_blog.style.animation = `navLinksFade 0.5s ease forwards ${
                    index / 3 + 0.2
                }s`;
            }

            console.log(nav_link_blog, index);
        });

        burgerBlog.classList.toggle("toggle");
    });
}
// ^^^^^^^^^^^^^^^^^^^^^^  island ^^^^^^^^^^^^^^^^^^^^^
// {
//     const burger = document.querySelector(".burger");
//     const nav = document.querySelector(".nav_links");
//     const navLinks = document.querySelectorAll(".nav_links_li");

//     burger.addEventListener("click", () => {
//         nav.classList.toggle("nav_active");

//         navLinks.forEach((link, index) => {
//             if (link.style.animation) {
//                 link.style.animation = "";
//             } else {
//                 link.style.animation = `navLinksFade 0.5s ease forwards ${
//                     index / 3 + 0.2
//                 }s`;
//             }

//             console.log(link, index);
//         });

//         burger.classList.toggle("toggle");
//     });
// }
