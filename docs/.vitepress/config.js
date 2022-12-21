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
        editLink: {
            pattern: "https://github.com/mariustimmer/blog/edit/main/docs/:path",
            text: "auf Github Bearbeiten"
        },
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
        sidebar: [
            {
                text: "Aktuelle Beiträge",
                collapsible: true,
                items: [
                    {
                        text: "Meine Mastodon-Instanz",
                        link: "/post/mastodon"
                    },
                    {
                        text: "Sprengstoff am Longinusturm",
                        link: "/post/sprengunglonginusturm"
                    },
                    {
                        text: "Gentoo auf dem PowerPC",
                        link: "/post/powerpcgentoo"
                    }
                ]
            },
            {
                text: "Klassiker",
                collapsible: true,
                items: [
                    {
                        text: "Gentoo auf dem PowerPC",
                        link: "/post/powerpcgentoo"
                    },
                    {
                        text: "OTRS lebt",
                        link: "/post/otrs_lebt"
                    },
                    {
                        text: "Gamescom 2019",
                        link: "/post/gamescom_2019"
                    }
                ]
            }
        ]
    }
}