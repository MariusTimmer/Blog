import postdata from "../../postdata.json";
import postUtils from "./../utilities/postUtils.js";

export default {
    title: "Timmers Blog",
    description: "Marius Timmers persönlicher Blog",
    lang: "de",
    author: {
        name: "Marius Timmer",
        mail: "info@mariustimmer.de"
    },
    head: [
        [
            'link',
            {
                rel: "me",
                href: "https://mastodon.mariustimmer.de/@timmer"
            }
        ]
    ],
    markdown: {
        theme: "material-palenight",
        lineNumbers: true
    },
    themeConfig: {
        logo: {
            src: "/favicon.png",
            alt: "Kleines monochromes Bild von Marius Timmer im Profil"
        },
        nav: [
            {
                text: "Startseite",
                link: "/"
            },
            {
                text: "Beiträge",
                link: "/post/"
            },
            {
                text: "Fotografie",
                link: "/photos"
            },
            {
                text: "Referenzen",
                link: "/references"
            },
            {
                text: "Über mich",
                link: "/aboutme"
            }
        ],
        sidebar: {
            "/post/": [
                {
                    text: "Alle Beiträge",
                    collapsible: true,
                    collapsed: true,
                    items: postUtils.getPostsNavigation(
                        postdata.sort(
                            postUtils.sortPosts
                        ),
                        100
                    )
                }
            ],
            "/": [
                {
                    text: "OTRS",
                    collapsable: true,
                    collapsed: false,
                    items: [
                        {
                            text: "OTRS CE lebt",
                            link: "/post/otrs_lebt"
                        },
                        {
                            text: "Ende von OTRS CE?",
                            link: "/post/otrs_ce"
                        },
                        {
                            text: "Bug im OTRS Protokoll",
                            link: "/post/otrs_log_bug"
                        }
                    ]
                }
            ]
        },
        footer: {
            message: "Zusammengebastelt mit <a href=\"https://vitepress.vuejs.org/\">VitePress</a>",
            copyright: "Copyright &copy; seit 2017 bis heute: <a href=\"/aboutme\">Marius Timmer</a>"
        }
    }
}