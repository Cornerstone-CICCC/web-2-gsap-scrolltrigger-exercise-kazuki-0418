gsap.registerPlugin(ScrollTrigger);

const container = document.getElementsByClassName('.container')

const lineOne = document.querySelector('.line-one')
const lineTwo = document.querySelector('.line-two')
const lineThree = document.querySelector('.line-three')
const sections = document.querySelectorAll("section")

const arrSection = gsap.utils.toArray(sections)

const tl = gsap.timeline({})

// 各要素を対象にアニメーションを設定
gsap.from(".line-one span", {
    scrollTrigger: {
        trigger: ".line-one",
        start: "top 20%",
    },
    y: 1500,
    x: 100,
    stagger: 0.2,
    duration: 1,
    ease: "power3.out",
});

gsap.to(".container", {
    scrollTrigger: {
        trigger: ".line-one",
        start: "top 40%",
    },
    duration: 2,
    delay: 2,
    backgroundColor: 'yellow',
})

gsap.from(".line-one .sun", {
    scrollTrigger: {
        trigger: ".line-one",
        start: "top 90%",
    },
    x: 300,
    delay: 3,
    duration: 2,
    ease: "power3.out",
});




gsap.to(".line-one span", {
    scrollTrigger: {
        trigger: ".line-two",
    },

    delay: 5,
    duration: 2,
    x: 1500,
})

gsap.to(".line-one .sun", {
    scrollTrigger: {
        trigger: ".line-two",
    },
    x: -2000,
    delay: 5,
    duration: 2,
    ease: "power3.out",
});

gsap.to(".container", {
    scrollTrigger: {
        trigger: ".line-two",
    },
    backgroundColor: 'white',

    delay: 5,
    duration: 2,
})

tl.fromTo(
    ".line-two span", // アニメーション対象
    1,
    {
        opacity: 0,                         // 初期状態: 非表示
        transform: "translateZ(1500px) scale(1.5)", // 初期状態: 手前に配置、大きめ
    },
    {
        opacity: 1,                         // 最終状態: 表示
        transform: "translateZ(0) scale(1)", // 最終状態: 通常サイズで中央に配置
        ease: "power4.out",
        scrollTrigger: {
            trigger: ".line-two span:nth-child(2)",
            start: 'center center', // アニメーションの開始位置の指定
            start: "top 90%",                 // アニメーション開始位置
            end: "top 20%",
            duration: 2,           // アニメーション終了位置
            scrub: 10,                         // スクロールに同期（数値は滑らかさ）
        },
    }
)

gsap.to(".line-two span", {
    scrollTrigger: {
        trigger: ".line-two",
        start: "center center",
        end: "top 20%",

    },
    stagger: 0.2,
    duration: 1,
    ease: "power3.out",
    y: "-100%"
});

gsap.to(".line-two span", {
    scrollTrigger: {
        trigger: ".line-two",
        start: "center center",
        end: "top 20%",
    },
    stagger: 0.2,
    delay: 1,
    duration: 1,
    ease: "power3.out",
    y: "100%"
});


gsap.to(".line-two span", {
    scrollTrigger: {
        trigger: ".line-two",
        start: "center center",
        end: "top 20%",

    },
    stagger: 0.2,
    duration: 1,
    ease: "power3.out",
    y: "-100%"
});

const tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".line-three",
        start: "top 50%",      // アニメーション開始位置
        end: "center 80%",        // アニメーション終了位置
        scrub: 10,              // スクロールとの同期（滑らかさ）
    },
});

tl2.from(".line-three span", {
    y: 1500,                 // 縦方向に移動
    x: 100,                  // 横方向に移動
    stagger: 0.2,            // 各文字の遅延
    duration: 1,             // アニメーション時間
    ease: "power3.out",       // 緩やかな終了
}).to(".line-three", {
    backgroundPosition: "0% 0", // 背景を左にスライド
    color: "white",
    ease: "power2.out",         // 滑らかな遷移
})