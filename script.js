// =========================================
// GOLD COMMUNITY
// =========================================


// =========================================
// DATA
// =========================================

let posts = [

    {
        id: 1,

        user: "Sardor Dev",

        avatar: "SD",

        community: "IT O‘zbekiston",

        time: "18 daqiqa oldin",

        title:
            "2026-yilda Web Development qayerga ketyapti?",

        text:
            "Bugun zamonaviy web development juda tez o‘zgaryapti. AI, WebAssembly, yangi JavaScript frameworklar va edge computing kelajakni shakllantirmoqda. Sizningcha, keyingi katta trend nima bo‘ladi?",

        tags:
            "#webdevelopment #javascript #future",

        likes: 428,

        comments: 86,

        views: 6200,

        liked: false,

        image: "🚀",

        score: 95

    },


    {
        id: 2,

        user: "Madina UI",

        avatar: "MU",

        community: "Design UZ",

        time: "42 daqiqa oldin",

        title:
            "Minimalist UI dizayn uchun 7 qoida",

        text:
            "Yaxshi interfeys faqat chiroyli ko‘rinish emas. U foydalanuvchiga kerakli narsani tez va tushunarli yetkazishi kerak. Mana men doim foydalanadigan 7 ta qoida.",

        tags:
            "#design #uiux #minimalism",

        likes: 312,

        comments: 54,

        views: 4800,

        liked: false,

        image: "🎨",

        score: 87

    },


    {
        id: 3,

        user: "Akmal Startup",

        avatar: "AS",

        community: "Startup UZ",

        time: "1 soat oldin",

        title:
            "Startup boshlashdan oldin bilish kerak bo‘lgan narsalar",

        text:
            "Eng yaxshi g‘oya emas, eng yaxshi bajarilish yutadi. Startup qurishda muammo, bozor va foydalanuvchini tushunish eng muhim bosqichlardan biridir.",

        tags:
            "#startup #business #entrepreneur",

        likes: 267,

        comments: 71,

        views: 3900,

        liked: false,

        image: "💡",

        score: 80

    },


    {
        id: 4,

        user: "Dilnoza Study",

        avatar: "DS",

        community: "Study Club",

        time: "2 soat oldin",

        title:
            "Dasturlashni o‘rganish uchun mening roadmapim",

        text:
            "Agar bugun dasturlashni boshlayotgan bo‘lsangiz, birinchi navbatda HTML, CSS va JavaScript asoslarini mustahkamlang. Keyin Git, API va frameworklarga o‘ting.",

        tags:
            "#study #programming #roadmap",

        likes: 194,

        comments: 43,

        views: 2700,

        liked: false,

        image: "📚",

        score: 70

    }

];


// =========================================
// ELEMENTS
// =========================================

const postsContainer =
    document.getElementById("posts");

const searchInput =
    document.getElementById("searchInput");

const sortSelect =
    document.getElementById("sortSelect");

const postModal =
    document.getElementById("postModal");

const messageModal =
    document.getElementById("messageModal");

const newPostText =
    document.getElementById("newPostText");

const communitySelect =
    document.getElementById("communitySelect");


// =========================================
// RENDER
// =========================================

function renderPosts(list = posts) {

    postsContainer.innerHTML = "";


    if (!list.length) {

        postsContainer.innerHTML = `

            <div class="empty">

                <div>⌕</div>

                <h3>
                    Hech narsa topilmadi
                </h3>

                <p>
                    Boshqa kalit so‘z bilan qidirib ko‘ring.
                </p>

            </div>

        `;

        return;

    }


    list.forEach(post => {

        const article =
            document.createElement("article");


        article.className = "post";


        article.innerHTML = `

            <div class="post-header">

                <div class="post-avatar">
                    ${post.avatar}
                </div>


                <div class="post-user">

                    <strong>
                        ${escapeHTML(post.user)}
                    </strong>

                    <span>
                        ${escapeHTML(post.community)}
                        •
                        ${post.time}
                    </span>

                </div>


                <button
                    class="post-menu"
                    data-id="${post.id}"
                >
                    •••
                </button>

            </div>


            <div class="post-content">

                <h3>
                    ${escapeHTML(post.title)}
                </h3>

                <p>
                    ${escapeHTML(post.text)}
                </p>

                <div class="hashtags">
                    ${escapeHTML(post.tags)}
                </div>

            </div>


            <div class="post-image">
                ${post.image}
            </div>


            <div class="post-footer">

                <button
                    class="post-action like-btn
                    ${post.liked ? "liked" : ""}"
                    data-id="${post.id}"
                >
                    ${post.liked ? "♥" : "♡"}
                    ${formatNumber(post.likes)}
                </button>


                <button
                    class="post-action comment-btn"
                    data-id="${post.id}"
                >
                    💬
                    ${formatNumber(post.comments)}
                </button>


                <button
                    class="post-action"
                    data-share="${post.id}"
                >
                    ↗ Ulashish
                </button>


                <button
                    class="post-action save-btn"
                    data-save="${post.id}"
                >
                    🔖
                </button>

            </div>

        `;


        postsContainer.appendChild(article);

    });


    bindPostEvents();

}


// =========================================
// POST EVENTS
// =========================================

function bindPostEvents() {

    document
        .querySelectorAll(".like-btn")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const id =
                        Number(
                            button.dataset.id
                        );


                    const post =
                        posts.find(
                            item =>
                                item.id === id
                        );


                    if (!post) return;


                    post.liked =
                        !post.liked;


                    if (post.liked) {

                        post.likes++;

                    } else {

                        post.likes--;

                    }


                    renderPosts(
                        getCurrentPosts()
                    );

                    save();

                }
            );

        });


    document
        .querySelectorAll(".comment-btn")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const comment =
                        prompt(
                            "Izohingizni yozing:"
                        );


                    if (!comment?.trim())
                        return;


                    const id =
                        Number(
                            button.dataset.id
                        );


                    const post =
                        posts.find(
                            item =>
                                item.id === id
                        );


                    post.comments++;


                    alert(
                        "✓ Izoh qo‘shildi!"
                    );


                    renderPosts(
                        getCurrentPosts()
                    );

                    save();

                }
            );

        });


    document
        .querySelectorAll("[data-share]")
        .forEach(button => {

            button.addEventListener(
                "click",
                async () => {

                    const id =
                        Number(
                            button.dataset.share
                        );


                    const post =
                        posts.find(
                            item =>
                                item.id === id
                        );


                    const text =
                        post.title;


                    try {

                        await navigator.clipboard
                            .writeText(text);

                        alert(
                            "✓ Post nomi nusxalandi!"
                        );

                    } catch {

                        alert(
                            "Post ulashish menyusi ochildi."
                        );

                    }

                }
            );

        });


    document
        .querySelectorAll("[data-save]")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    button.classList.toggle(
                        "saved"
                    );


                    button.innerText =
                        button.classList.contains(
                            "saved"
                        )
                        ? "✓"
                        : "🔖";

                }
            );

        });


    document
        .querySelectorAll(".post-menu")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    alert(
                        "Post menyusi:\n\n" +
                        "• Saqlash\n" +
                        "• Ulashish\n" +
                        "• Shikoyat qilish"
                    );

                }
            );

        });

}


// =========================================
// SEARCH
// =========================================

searchInput.addEventListener(
    "input",
    () => {

        renderPosts(
            getCurrentPosts()
        );

    }
);


function getCurrentPosts() {

    const query =
        searchInput.value
            .toLowerCase()
            .trim();


    let result =
        [...posts];


    if (query) {

        result =
            result.filter(post =>

                post.title
                    .toLowerCase()
                    .includes(query)

                ||

                post.text
                    .toLowerCase()
                    .includes(query)

                ||

                post.user
                    .toLowerCase()
                    .includes(query)

                ||

                post.community
                    .toLowerCase()
                    .includes(query)

                ||

                post.tags
                    .toLowerCase()
                    .includes(query)

            );

    }


    const sort =
        sortSelect.value;


    if (sort === "popular") {

        result.sort(
            (a, b) =>
                b.score - a.score
        );

    }


    if (sort === "new") {

        result.sort(
            (a, b) =>
                b.id - a.id
        );

    }


    if (sort === "discussed") {

        result.sort(
            (a, b) =>
                b.comments - a.comments
        );

    }


    return result;

}


// =========================================
// SORT
// =========================================

sortSelect.addEventListener(
    "change",
    () => {

        renderPosts(
            getCurrentPosts()
        );

    }
);


// =========================================
// CREATE POST
// =========================================

document
    .getElementById("createPostBtn")
    .addEventListener(
        "click",
        () => {

            postModal.classList.add(
                "show"
            );

            newPostText.focus();

        }
    );


document
    .getElementById("closeModal")
    .addEventListener(
        "click",
        () => {

            postModal.classList.remove(
                "show"
            );

        }
    );


document
    .getElementById("publishBtn")
    .addEventListener(
        "click",
        publishPost
    );


function publishPost() {

    const text =
        newPostText.value.trim();


    if (!text) {

        alert(
            "Avval post matnini yozing."
        );

        return;

    }


    const community =
        communitySelect.value;


    const newPost = {

        id:
            Date.now(),

        user:
            "Jadra Akramjanova",

        avatar:
            "AJ",

        community:
            community.replace(
                /^[^ ]+ /,
                ""
            ),

        time:
            "Hozirgina",

        title:
            text.length > 55
                ? text.substring(0, 55) + "..."
                : text,

        text:
            text,

        tags:
            "#community #goldcommunity",

        likes: 0,

        comments: 0,

        views: 0,

        liked: false,

        image: "✨",

        score: 100

    };


    posts.unshift(newPost);


    newPostText.value = "";


    postModal.classList.remove(
        "show"
    );


    renderPosts(
        getCurrentPosts()
    );


    save();

}


// =========================================
// MESSAGES
// =========================================

document
    .getElementById("messageBtn")
    .addEventListener(
        "click",
        () => {

            messageModal.classList.add(
                "show"
            );

        }
    );


document
    .getElementById("closeMessage")
    .addEventListener(
        "click",
        () => {

            messageModal.classList.remove(
                "show"
            );

        }
    );


// =========================================
// NOTIFICATION
// =========================================

document
    .getElementById("notificationBtn")
    .addEventListener(
        "click",
        () => {

            alert(
                "🔔 5 ta yangi bildirishnoma:\n\n" +
                "• 12 ta yangi like\n" +
                "• 4 ta yangi izoh\n" +
                "• 2 ta yangi follower\n" +
                "• 1 ta community taklifi"
            );

        }
    );


// =========================================
// JOIN COMMUNITY
// =========================================

document
    .querySelectorAll(".join-btn")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                if (
                    button.classList.contains(
                        "joined"
                    )
                ) {

                    button.classList.remove(
                        "joined"
                    );

                    button.innerText = "+";

                } else {

                    button.classList.add(
                        "joined"
                    );

                    button.innerText = "✓";

                }

            }
        );

    });


// =========================================
// PROFILE
// =========================================

document
    .querySelector(".profile-btn")
    .addEventListener(
        "click",
        () => {

            alert(
                "👤 Profil:\n\n" +
                "Jadra Akramjanova\n" +
                "@jadra_dev\n\n" +
                "Level 24 • 4.8K follower"
            );

        }
    );


// =========================================
// KEYBOARD
// =========================================

document.addEventListener(
    "keydown",
    event => {

        if (
            (event.ctrlKey ||
             event.metaKey) &&
            event.key.toLowerCase() === "k"
        ) {

            event.preventDefault();

            searchInput.focus();

        }


        if (
            event.key === "Escape"
        ) {

            postModal.classList.remove(
                "show"
            );

            messageModal.classList.remove(
                "show"
            );

        }

    }
);


// =========================================
// LOCAL STORAGE
// =========================================

function save() {

    localStorage.setItem(
        "goldCommunityPosts",
        JSON.stringify(posts)
    );

}


function load() {

    const saved =
        localStorage.getItem(
            "goldCommunityPosts"
        );


    if (!saved) return;


    try {

        const data =
            JSON.parse(saved);


        if (
            Array.isArray(data)
        ) {

            posts = data;

        }

    } catch {

        console.log(
            "Saqlangan ma'lumotni yuklab bo‘lmadi."
        );

    }

}


// =========================================
// HELPERS
// =========================================

function formatNumber(number) {

    if (number >= 1000) {

        return (
            (number / 1000)
                .toFixed(
                    number >= 10000
                        ? 0
                        : 1
                )
            + "K"
        );

    }


    return number;

}


function escapeHTML(text) {

    const div =
        document.createElement(
            "div"
        );


    div.textContent = text;


    return div.innerHTML;

}


// =========================================
// MODAL BACKDROP
// =========================================

document
    .querySelectorAll(".modal")
    .forEach(modal => {

        modal.addEventListener(
            "click",
            event => {

                if (
                    event.target === modal
                ) {

                    modal.classList.remove(
                        "show"
                    );

                }

            }
        );

    });


// =========================================
// EMPTY STATE CSS
// =========================================

const emptyStyle =
    document.createElement("style");


emptyStyle.textContent = `

    .empty {
        text-align: center;
        padding: 70px 20px;
        border: 1px solid rgba(212,175,55,.12);
        border-radius: 14px;
        background: #090909;
    }

    .empty div {
        font-size: 35px;
        color: #d4af37;
        margin-bottom: 12px;
    }

    .empty h3 {
        font-size: 12px;
        margin-bottom: 7px;
    }

    .empty p {
        color: #555;
        font-size: 8px;
    }

    .saved {
        color: #d4af37 !important;
    }

`;


document.head.appendChild(
    emptyStyle
);


// =========================================
// START
// =========================================

load();

renderPosts();