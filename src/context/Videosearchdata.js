import React, { useEffect, useState } from 'react';
import Videosearchcontext from './Videosearchcontext.js';
import Apikey from './Apikey.js';
let TrandingApiInitial_Url = "https://youtube.googleapis.com/youtube/v3/videos?";
const Videosearchdata = (props)=>{
    let Tranding = [
        {
            kind: "youtube#searchListResponse",
            etag: "d9DPx2yGn-BoJXziPnsxGOLp-Mk",
            nextPageToken: "CAoQAA",
            regionCode: "IN",
            pageInfo: {
            totalResults: 1000000,
            resultsPerPage: 10
            },
            items: [
            {
            kind: "youtube#searchResult",
            etag: "DP9-zpk9vafkjKL4JeOvAZICw-s",
            id: {
            kind: "youtube#video",
            videoId: "L_2eqs0jkrM"
            },
            snippet: {
            publishedAt: "2021-12-23T23:00:20Z",
            channelId: "UCGpf7WX7R1one-NwOvg_PbQ",
            title: "G⚽⚽⚽⚽⚽dbye, 2021! | Highlights Ajax - Fortuna | Eredivisie",
            description: "Ajax sluit het jaar 2021 in stijl af met een 5-0-overwinning op Fortuna Sittard. #AJAFOR ▻SUBSCRIBE NOW ...",
            thumbnails: {
            default: {
            url: "https://i.ytimg.com/vi/L_2eqs0jkrM/default.jpg",
            width: 120,
            height: 90
            },
            medium: {
            url: "https://i.ytimg.com/vi/L_2eqs0jkrM/mqdefault.jpg",
            width: 320,
            height: 180
            },
            high: {
            url: "https://i.ytimg.com/vi/L_2eqs0jkrM/hqdefault.jpg",
            width: 480,
            height: 360
            }
            },
            channelTitle: "AFC Ajax",
            liveBroadcastContent: "none",
            publishTime: "2021-12-23T23:00:20Z"
            }
            },
            {
            kind: "youtube#searchResult",
            etag: "vk4KRVSmkREDexDUf0BPRwNPmSw",
            id: {
            kind: "youtube#video",
            videoId: "o2kpb-012h0"
            },
            snippet: {
            publishedAt: "2021-12-24T14:00:34Z",
            channelId: "UCGpf7WX7R1one-NwOvg_PbQ",
            title: "Van der Sar over 2021: &#39;De naam van Ajax gaat de wereld over&#39; 🌍✨",
            description: "Algemeen directeur Edwin van der Sar blikt terug op het bewogen jaar 2021. Het publiek keerde terug maar verdween vervolgens ...",
            thumbnails: {
            default: {
            url: "https://i.ytimg.com/vi/o2kpb-012h0/default.jpg",
            width: 120,
            height: 90
            },
            medium: {
            url: "https://i.ytimg.com/vi/o2kpb-012h0/mqdefault.jpg",
            width: 320,
            height: 180
            },
            high: {
            url: "https://i.ytimg.com/vi/o2kpb-012h0/hqdefault.jpg",
            width: 480,
            height: 360
            }
            },
            channelTitle: "AFC Ajax",
            liveBroadcastContent: "none",
            publishTime: "2021-12-24T14:00:34Z"
            }
            },
            {
            kind: "youtube#searchResult",
            etag: "rxaXaVXTkaSxd42qVupkHOMS3i4",
            id: {
            kind: "youtube#video",
            videoId: "czgrJ8n_qoI"
            },
            snippet: {
            publishedAt: "2021-12-24T11:00:23Z",
            channelId: "UCGpf7WX7R1one-NwOvg_PbQ",
            title: "Dusan Tadic 🔥 Goals &amp; Assists  | BEST OF 2021 ✨",
            description: "Dusan Tadic was weer 'on fire' in 2021. Geniet mee van al zijn goals en assists van het afgelopen jaar. #TADIC #BestOf2021 ...",
            thumbnails: {
            default: {
            url: "https://i.ytimg.com/vi/czgrJ8n_qoI/default.jpg",
            width: 120,
            height: 90
            },
            medium: {
            url: "https://i.ytimg.com/vi/czgrJ8n_qoI/mqdefault.jpg",
            width: 320,
            height: 180
            },
            high: {
            url: "https://i.ytimg.com/vi/czgrJ8n_qoI/hqdefault.jpg",
            width: 480,
            height: 360
            }
            },
            channelTitle: "AFC Ajax",
            liveBroadcastContent: "none",
            publishTime: "2021-12-24T11:00:23Z"
            }
            },
            {
            kind: "youtube#searchResult",
            etag: "-tazoXWD-UUeAtibopSfU5y2YqQ",
            id: {
            kind: "youtube#video",
            videoId: "rJesac0_Ftw"
            },
            snippet: {
            publishedAt: "2016-10-27T04:47:10Z",
            channelId: "UCHRp19HU7Y2LwfI0Ai6WAGQ",
            title: "JSON and AJAX Tutorial: With Real Examples",
            description: "I just recorded a new 2020 version of this video https://www.youtube.com/watch?v=AVmGmLFcukM My front-end course: ...",
            thumbnails: {
            default: {
            url: "https://i.ytimg.com/vi/rJesac0_Ftw/default.jpg",
            width: 120,
            height: 90
            },
            medium: {
            url: "https://i.ytimg.com/vi/rJesac0_Ftw/mqdefault.jpg",
            width: 320,
            height: 180
            },
            high: {
            url: "https://i.ytimg.com/vi/rJesac0_Ftw/hqdefault.jpg",
            width: 480,
            height: 360
            }
            },
            channelTitle: "LearnWebCode",
            liveBroadcastContent: "none",
            publishTime: "2016-10-27T04:47:10Z"
            }
            },
            {
            kind: "youtube#searchResult",
            etag: "NtkfpYZszt_g5mxqpK55aUWtxco",
            id: {
            kind: "youtube#video",
            videoId: "qn6YiVIz5rg"
            },
            snippet: {
            publishedAt: "2021-10-24T21:59:01Z",
            channelId: "UCGpf7WX7R1one-NwOvg_PbQ",
            title: "Payback time it was 😎 | Highlights Ajax - PSV | Eredivisie",
            description: "Ajax heeft de toch al sterke week een heerlijk vervolg gegeven in de Johan Cruijff ArenA. Na de 4-0-overwinning op Borussia ...",
            thumbnails: {
            default: {
            url: "https://i.ytimg.com/vi/qn6YiVIz5rg/default.jpg",
            width: 120,
            height: 90
            },
            medium: {
            url: "https://i.ytimg.com/vi/qn6YiVIz5rg/mqdefault.jpg",
            width: 320,
            height: 180
            },
            high: {
            url: "https://i.ytimg.com/vi/qn6YiVIz5rg/hqdefault.jpg",
            width: 480,
            height: 360
            }
            },
            channelTitle: "AFC Ajax",
            liveBroadcastContent: "none",
            publishTime: "2021-10-24T21:59:01Z"
            }
            },
            {
            kind: "youtube#searchResult",
            etag: "576GbHhbtuiJi7po-gshBu08HHw",
            id: {
            kind: "youtube#video",
            videoId: "0yUwfS7LD_g"
            },
            snippet: {
            publishedAt: "2021-06-07T13:00:11Z",
            channelId: "UCgXdzCO7gzpI8_DPdHwOujQ",
            title: "Ajax ● Road to The Champions League Semi-finals 2018/2019",
            description: "",
            thumbnails: {
            default: {
            url: "https://i.ytimg.com/vi/0yUwfS7LD_g/default.jpg",
            width: 120,
            height: 90
            },
            medium: {
            url: "https://i.ytimg.com/vi/0yUwfS7LD_g/mqdefault.jpg",
            width: 320,
            height: 180
            },
            high: {
            url: "https://i.ytimg.com/vi/0yUwfS7LD_g/hqdefault.jpg",
            width: 480,
            height: 360
            }
            },
            channelTitle: "Football Flashback 3",
            liveBroadcastContent: "none",
            publishTime: "2021-06-07T13:00:11Z"
            }
            },
            {
            kind: "youtube#searchResult",
            etag: "AlvLAxiCv-XXHXmWvTgmhZaTVHs",
            id: {
            kind: "youtube#video",
            videoId: "36uem3F3Inw"
            },
            snippet: {
            publishedAt: "2021-12-19T23:00:01Z",
            channelId: "UCg_DGzRRIQlXpHxCrMMiAIQ",
            title: "Highlights | Feyenoord - Ajax | Eredivisie 2021-2022",
            description: "Bekijk hier de samenvatting van de 191ste Klassieker die op 19 december in De Kuip werd gespeeld. #feyaja ABONNEER ...",
            thumbnails: {
            default: {
            url: "https://i.ytimg.com/vi/36uem3F3Inw/default.jpg",
            width: 120,
            height: 90
            },
            medium: {
            url: "https://i.ytimg.com/vi/36uem3F3Inw/mqdefault.jpg",
            width: 320,
            height: 180
            },
            high: {
            url: "https://i.ytimg.com/vi/36uem3F3Inw/hqdefault.jpg",
            width: 480,
            height: 360
            }
            },
            channelTitle: "Feyenoord",
            liveBroadcastContent: "none",
            publishTime: "2021-12-19T23:00:01Z"
            }
            },
            {
            kind: "youtube#searchResult",
            etag: "BwYWm97YX65G06yIPIV2pjQdq2Y",
            id: {
            kind: "youtube#video",
            videoId: "X5zQ1a6anm4"
            },
            snippet: {
            publishedAt: "2021-10-21T22:00:13Z",
            channelId: "UCGpf7WX7R1one-NwOvg_PbQ",
            title: "Epische avond in Amsterdam 🔥🔥 | Highlights Ajax - Borussia Dortmund | UEFA Champions League",
            description: "Ajax heeft een heel bijzondere prestatie neergezet tegen UEFA Champions League-tegenstander Borussia Dortmund.",
            thumbnails: {
            default: {
            url: "https://i.ytimg.com/vi/X5zQ1a6anm4/default.jpg",
            width: 120,
            height: 90
            },
            medium: {
            url: "https://i.ytimg.com/vi/X5zQ1a6anm4/mqdefault.jpg",
            width: 320,
            height: 180
            },
            high: {
            url: "https://i.ytimg.com/vi/X5zQ1a6anm4/hqdefault.jpg",
            width: 480,
            height: 360
            }
            },
            channelTitle: "AFC Ajax",
            liveBroadcastContent: "none",
            publishTime: "2021-10-21T22:00:13Z"
            }
            },
            {
            kind: "youtube#searchResult",
            etag: "_vIKl-ZRNaTnF8wXNZIr8IRHpCA",
            id: {
            kind: "youtube#video",
            videoId: "9Np9rJaDHU0"
            },
            snippet: {
            publishedAt: "2021-12-24T08:00:03Z",
            channelId: "UCGpf7WX7R1one-NwOvg_PbQ",
            title: "Halfway there: Eredivisie season 21/22 ⏳",
            description: "De eerste seizoenshelft in de Eredivisie zit er op. Zo ging het voor Ajax. ▻SUBSCRIBE NOW http://ajax.ms/subscribe ▻FOLLOW ...",
            thumbnails: {
            default: {
            url: "https://i.ytimg.com/vi/9Np9rJaDHU0/default.jpg",
            width: 120,
            height: 90
            },
            medium: {
            url: "https://i.ytimg.com/vi/9Np9rJaDHU0/mqdefault.jpg",
            width: 320,
            height: 180
            },
            high: {
            url: "https://i.ytimg.com/vi/9Np9rJaDHU0/hqdefault.jpg",
            width: 480,
            height: 360
            }
            },
            channelTitle: "AFC Ajax",
            liveBroadcastContent: "none",
            publishTime: "2021-12-24T08:00:03Z"
            }
            },
            {
            kind: "youtube#searchResult",
            etag: "eUIjSy35ZBlEw746TF4V_IoVv1A",
            id: {
            kind: "youtube#video",
            videoId: "oHhR1Hiobq4"
            },
            snippet: {
            publishedAt: "2021-09-16T22:00:31Z",
            channelId: "UCGpf7WX7R1one-NwOvg_PbQ",
            title: "Haller maakt er 4!! 🤩 | Highlights Sporting CP - Ajax | UEFA Champions League",
            description: "Ajax heeft er een wervelend optreden in het José Alvalade Stadion opzitten. Het duel met Sporting CP eindigde in 1-5. Sébastien ...",
            thumbnails: {
            default: {
            url: "https://i.ytimg.com/vi/oHhR1Hiobq4/default.jpg",
            width: 120,
            height: 90
            },
            medium: {
            url: "https://i.ytimg.com/vi/oHhR1Hiobq4/mqdefault.jpg",
            width: 320,
            height: 180
            },
            high: {
            url: "https://i.ytimg.com/vi/oHhR1Hiobq4/hqdefault.jpg",
            width: 480,
            height: 360
            }
            },
            channelTitle: "AFC Ajax",
            liveBroadcastContent: "none",
            publishTime: "2021-09-16T22:00:31Z"
            }
            }
            ]
            }
    ];
    let Tranding1 = [
        {
            kind: "youtube#videoListResponse",
            etag: "ucmnFmtiwgoXtbn3xUE1HuT_9yE",
            items: [
                {
                kind: "youtube#video",
                etag: "lOkqOsbxza0eGJQKbjPQfoXy9gg",
                id: "HHWoW8urQJQ",
                snippet: {
                publishedAt: "2021-12-22T12:58:50Z",
                channelId: "UCvVEcGPPEkn3zSdc-rniGMg",
                title: "ladki hone ka galat faida na uthaye #shorts #armaanmalik",
                description: "",
                thumbnails: {
                default: {
                url: "https://i.ytimg.com/vi/HHWoW8urQJQ/default.jpg",
                width: 120,
                height: 90
                },
                medium: {
                url: "https://i.ytimg.com/vi/HHWoW8urQJQ/mqdefault.jpg",
                width: 320,
                height: 180
                },
                high: {
                url: "https://i.ytimg.com/vi/HHWoW8urQJQ/hqdefault.jpg",
                width: 480,
                height: 360
                }
                },
                channelTitle: "Family Fitness",
                categoryId: "24",
                liveBroadcastContent: "none",
                localized: {
                title: "ladki hone ka galat faida na uthaye #shorts #armaanmalik",
                description: ""
                }
                }
                },
            {
            kind: "youtube#video",
            etag: "D99sIMRppa4jgTlcQq_6M0qUrZk",
            id: "F2C9cRkgZZc",
            snippet: {
            publishedAt: "2021-12-21T00:30:03Z",
            channelId: "UC7y0fBOJOAPh-IpZqBGKUxw",
            title: "insaaniyat 🥺🙏 | mr roshan | | roshan | | Deepesh zo | | Deepesh | | gogo2728 | #ytshorts #shorts",
            description: "",
            thumbnails: {
            default: {
            url: "https://i.ytimg.com/vi/F2C9cRkgZZc/default.jpg",
            width: 120,
            height: 90
            },
            medium: {
            url: "https://i.ytimg.com/vi/F2C9cRkgZZc/mqdefault.jpg",
            width: 320,
            height: 180
            },
            high: {
            url: "https://i.ytimg.com/vi/F2C9cRkgZZc/hqdefault.jpg",
            width: 480,
            height: 360
            }
            },
            channelTitle: "Mr Roshan",
            categoryId: "22",
            liveBroadcastContent: "none",
            localized: {
            title: "insaaniyat 🥺🙏 | mr roshan | | roshan | | Deepesh zo | | Deepesh | | gogo2728 | #ytshorts #shorts",
            description: ""
            }
            }
            },
            {
            kind: "youtube#video",
            etag: "PxlDmR70nGs0Ptlvroayb-TNiT0",
            id: "KDwQ60C6lF8",
            snippet: {
            publishedAt: "2021-12-22T10:00:14Z",
            channelId: "UCn4rEMqKtwBQ6-oEwbd4PcA",
            title: "Valimai  - Whistle Theme Video | Ajith Kumar | Yuvan Shankar Raja, Vinoth, Boney Kapoor, Zee Studios",
            description: "Movie - Valimai Music  Composed & Arranged by Yuvan Shankar Raja Starring: Ajith Kumar, Huma S Qureshi, Karthikeya, Bani, Sumithra, Achyunth Kumar, Yogi Babu, Raj Ayyappa, Pugazh & others Written and Directed by H. Vinoth Produced by Zee Studios & Boney Kapoor DOP : Nirav Shah Music Director: Yuvan Shankar Raja Art Director: K. Kadhir Editor: Vijay Velukutty Stunts : Dhilip Subbarayan Costume Designer: Anu Vardhan Pro: Suresh Chandra & Rekha D'one Publicity Campaign by Rahul Nanda CFO & General Manager – Rajiv Arora COO – Punkej Kharabanda Executive Producer P. Jayraj Music Label - Sony Music Entertainment India Pvt. Ltd.  © 2021 Sony Music Entertainment India Pvt. Ltd. Subscribe Now: http://bit.ly/SonyMusicSouthVevo Subscribe Now: http://bit.ly/SonyMusicSouthYT Follow us: https://www.instagram.com/sonymusic_south/ Follow us: Twitter: https://twitter.com/SonyMusicSouth Like us: Facebook: https://www.facebook.com/SonyMusicSouth",
            thumbnails: {
            default: {
            url: "https://i.ytimg.com/vi/KDwQ60C6lF8/default.jpg",
            width: 120,
            height: 90
            },
            medium: {
            url: "https://i.ytimg.com/vi/KDwQ60C6lF8/mqdefault.jpg",
            width: 320,
            height: 180
            },
            high: {
            url: "https://i.ytimg.com/vi/KDwQ60C6lF8/hqdefault.jpg",
            width: 480,
            height: 360
            },
            standard: {
            url: "https://i.ytimg.com/vi/KDwQ60C6lF8/sddefault.jpg",
            width: 640,
            height: 480
            },
            maxres: {
            url: "https://i.ytimg.com/vi/KDwQ60C6lF8/maxresdefault.jpg",
            width: 1280,
            height: 720
            }
            },
            channelTitle: "Sony Music South",
            tags: [
            "Sony Music South","Sony Music","Latest Song","Tamil Latest Song","Tamil Latest Songs 2020",
],
            categoryId: "10",
            liveBroadcastContent: "none",
            defaultLanguage: "en-GB",
            localized: {
            title: "Valimai  - Whistle Theme Video | Ajith Kumar | Yuvan Shankar Raja, Vinoth, Boney Kapoor, Zee Studios",
            description: "Movie - Valimai Music  Composed & Arranged by Yuvan Shankar Raja"
            },
            defaultAudioLanguage: "en-IN"
            }
            },
            {
            kind: "youtube#video",
            etag: "gB47ca6y_eg-e2paWxmBbjCeFQQ",
            id: "zEvJlNf37pE",
            snippet: {
            publishedAt: "2021-12-19T14:56:07Z",
            channelId: "UCw9DyZg3_F0bIks2jrEgQAA",
            title: "Watch until the end",
            description: "",
            thumbnails: {
            default: {
            url: "https://i.ytimg.com/vi/zEvJlNf37pE/default.jpg",
            width: 120,
            height: 90
            },
            medium: {
            url: "https://i.ytimg.com/vi/zEvJlNf37pE/mqdefault.jpg",
            width: 320,
            height: 180
            },
            high: {
            url: "https://i.ytimg.com/vi/zEvJlNf37pE/hqdefault.jpg",
            width: 480,
            height: 360
            },
            standard: {
            url: "https://i.ytimg.com/vi/zEvJlNf37pE/sddefault.jpg",
            width: 640,
            height: 480
            },
            maxres: {
            url: "https://i.ytimg.com/vi/zEvJlNf37pE/maxresdefault.jpg",
            width: 1280,
            height: 720
            }
            },
            channelTitle: "Sadiq Ahmed",
            categoryId: "22",
            liveBroadcastContent: "none",
            localized: {
            title: "Watch until the end",
            description: ""
            }
            }
            },
            {
            kind: "youtube#video",
            etag: "CUxOP_qLXbjfatOoGgX6W3QwZv4",
            id: "T6pD1YNY-hY",
            snippet: {
            publishedAt: "2021-12-22T00:30:04Z",
            channelId: "UC7y0fBOJOAPh-IpZqBGKUxw",
            title: "A sad story 🥺 | mr roshan | | roshan | | Deepesh zo | | Deepesh | | gogo2728 | #ytshorts #shorts",
            description: "",
            thumbnails: {
            default: {
            url: "https://i.ytimg.com/vi/T6pD1YNY-hY/default.jpg",
            width: 120,
            height: 90
            },
            medium: {
            url: "https://i.ytimg.com/vi/T6pD1YNY-hY/mqdefault.jpg",
            width: 320,
            height: 180
            },
            high: {
            url: "https://i.ytimg.com/vi/T6pD1YNY-hY/hqdefault.jpg",
            width: 480,
            height: 360
            }
            },
            channelTitle: "Mr Roshan",
            categoryId: "22",
            liveBroadcastContent: "none",
            localized: {
            title: "A sad story 🥺 | mr roshan | | roshan | | Deepesh zo | | Deepesh | | gogo2728 | #ytshorts #shorts",
            description: ""
            }
            }
            },
            {
            kind: "youtube#video",
            etag: "AuoEXVbqxXrUQrtXUlYWjZ3WfxU",
            id: "R0eb-_8Qj68",
            snippet: {
            publishedAt: "2021-12-19T08:52:01Z",
            channelId: "UCIhJOWBJywuJKeF61CWCrMw",
            title: "Uss bacche ki sirf majburi thi😭💔🙏🏻 #trending #humanity #shorts",
            description: "",
            thumbnails: {
            default: {
            url: "https://i.ytimg.com/vi/R0eb-_8Qj68/default.jpg",
            width: 120,
            height: 90
            },
            medium: {
            url: "https://i.ytimg.com/vi/R0eb-_8Qj68/mqdefault.jpg",
            width: 320,
            height: 180
            },
            high: {
            url: "https://i.ytimg.com/vi/R0eb-_8Qj68/hqdefault.jpg",
            width: 480,
            height: 360
            }
            },
            channelTitle: "Noman Official",
            categoryId: "1",
            liveBroadcastContent: "none",
            localized: {
            title: "Uss bacche ki sirf majburi thi😭💔🙏🏻 #trending #humanity #shorts",
            description: ""
            }
            }
            },
            {
            kind: "youtube#video",
            etag: "4t3FjdiEL3rcCM5GApV5MDcm5Ww",
            id: "ILDEnJGAVMA",
            snippet: {
            publishedAt: "2021-12-20T06:44:35Z",
            channelId: "UCMfyiLGzptAStxYf7GEIQYQ",
            title: "Specially Abled Man Selling Sindhi Rice😯😯 इनके जज्बे को सलाम🙏🏻🙏🏻 #indianstreetfood #india #shorts",
            description: "",
            thumbnails: {
            default: {
            url: "https://i.ytimg.com/vi/ILDEnJGAVMA/default.jpg",
            width: 120,
            height: 90
            },
            medium: {
            url: "https://i.ytimg.com/vi/ILDEnJGAVMA/mqdefault.jpg",
            width: 320,
            height: 180
            },
            high: {
            url: "https://i.ytimg.com/vi/ILDEnJGAVMA/hqdefault.jpg",
            width: 480,
            height: 360
            },
            standard: {
            url: "https://i.ytimg.com/vi/ILDEnJGAVMA/sddefault.jpg",
            width: 640,
            height: 480
            },
            maxres: {
            url: "https://i.ytimg.com/vi/ILDEnJGAVMA/maxresdefault.jpg",
            width: 1280,
            height: 720
            }
            },
            channelTitle: "Foodie Incarnate",
            categoryId: "22",
            liveBroadcastContent: "none",
            localized: {
            title: "Specially Abled Man Selling Sindhi Rice😯😯 इनके जज्बे को सलाम🙏🏻🙏🏻 #indianstreetfood #india #shorts",
            description: ""
            },
            defaultAudioLanguage: "hi"
            }
            },
            {
            kind: "youtube#video",
            etag: "BS6DMgfSC4CHOCRSKnCKV9-iKk4",
            id: "4uec5gQQMAw",
            snippet: {
            publishedAt: "2021-12-21T04:30:13Z",
            channelId: "UCpZe6c7I8kkQuME1T4uMa_g",
            title: "old couple wants to start this business😮👌#shorts",
            description: "#shorts i've donated all my 2021 earning to full-fill the dreams of many families but how?watch a new short everyday around 10am.",
            thumbnails: {
            default: {
            url: "https://i.ytimg.com/vi/4uec5gQQMAw/default.jpg",
            width: 120,
            height: 90
            },
            medium: {
            url: "https://i.ytimg.com/vi/4uec5gQQMAw/mqdefault.jpg",
            width: 320,
            height: 180
            },
            high: {
            url: "https://i.ytimg.com/vi/4uec5gQQMAw/hqdefault.jpg",
            width: 480,
            height: 360
            }
            },
            channelTitle : "Harsha Sai - For You Hindi",
            categoryId: "24",
            liveBroadcastContent: "none",
            localized: {
            title: "old couple wants to start this business😮👌#shorts",
            description: "#shorts  i've donated all my 2021 earning to full-fill the dreams of many families  but how? watch a new short everyday around 10am."
            },
            defaultAudioLanguage: "hi"
            }
            },
            {
            kind: "youtube#video",
            etag: "tzidvgS2Tjqqa2SRN82C1cJRxDU",
            id: "dqYLcvyyGhs",
            snippet: {
            publishedAt: "2021-12-20T13:08:53Z",
            channelId: "UC26ostnW8IbSxcD35YiAJgw",
            title: "😵‍💫இது கூட தெரியாம இருந்துட்டோமே✂️⁉️ ச்சை💇🏻‍♂️✨🔥",
            description: "😵‍💫இது கூட தெரியாம இருந்துட்டோமே⁉️ ச்சை💇🏻‍♂️✂️✨🔥  😵‍💫Fire Haircut-ல Master Vijay Hair Style-ஆ✂️வேற Level-லு 🔥🧯 #Shorts I went to this Instagram Fame Saloon -Evan Vandhalum Vettucom and Tried Fire hair cut for Master Vijay Hair Style. #maduraifood #maduraimuthucomedy #maduraivlog #maduraibunparotta #maduraichickencurry #maduraidaytodayshop #maduraijigarthanda #maduraikaridosai #maduraiperiyarbusstand #maduraiprivatebuses #maduraispecial #maduraistreetfood #maduraishops #maduraitotheni #maduraitouristplaces peanut sundal வேர்க்கடலை",
            thumbnails: {
            default: {
            url: "https://i.ytimg.com/vi/dqYLcvyyGhs/default.jpg",
            width: 120,
            height: 90
            },
            medium: {
            url: "https://i.ytimg.com/vi/dqYLcvyyGhs/mqdefault.jpg",
            width: 320,
            height: 180
            },
            high: {
            url: "https://i.ytimg.com/vi/dqYLcvyyGhs/hqdefault.jpg",
            width: 480,
            height: 360
            }
            },
            channelTitle: "Aarif's MindVoice",
            tags: [
            "master vijay hairstyle",
            "vijay hairstyle",
            "evan vanthalum vettuvom hairstyle",
            "evan vanthalum vettuvom hairstyle location",
            "aarif mind voice",
            "irfansview hair cut",
            "evan vanthalum vettuvom",
            "evan vanthalum vettuvom salon",
            "fire hair cut",
            "fire haircut gone wrong",
            "fire haircut asmr",
            "fire haircut indian",
            "fire hair cutting",
            "fire burning haircut",
            "fire for haircut",
            "expensive hair cut",
            "fire on hair",
            "hair transformation",
            "cheap and best salon in chennai",
            "peppa foodie",
            "idris explores"
            ],
            categoryId: "22",
            liveBroadcastContent: "none",
            localized: {
            title: "😵‍💫இது கூட தெரியாம இருந்துட்டோமே✂️⁉️ ச்சை💇🏻‍♂️✨🔥",
            description: "😵‍💫இது கூட தெரியாம இருந்துட்டோமே⁉️ ச்சை💇🏻‍♂️✂️✨🔥  வேர்க்கடலை"
            }
            }
            },
            {
            kind: "youtube#video",
            etag: "757INAGcD7OG-0pFkr6bllaaYWc",
            id: "zqp9Jv-KOig",
            snippet: {
            publishedAt: "2021-12-20T00:30:09Z",
            channelId: "UC7y0fBOJOAPh-IpZqBGKUxw",
            title: "Maa ❤️ | mr roshan | | roshan | | Deepesh zo | | Deepesh | | gogo2728 | #ytshorts #shorts #maa",
            description: "",
            thumbnails: {
            default: {
            url: "https://i.ytimg.com/vi/zqp9Jv-KOig/default.jpg",
            width: 120,
            height: 90
            },
            medium: {
            url: "https://i.ytimg.com/vi/zqp9Jv-KOig/mqdefault.jpg",
            width: 320,
            height: 180
            },
            high: {
            url: "https://i.ytimg.com/vi/zqp9Jv-KOig/hqdefault.jpg",
            width: 480,
            height: 360
            }
            },
            channelTitle: "Mr Roshan",
            categoryId: "22",
            liveBroadcastContent: "none",
            localized: {
            title: "Maa ❤️ | mr roshan | | roshan | | Deepesh zo | | Deepesh | | gogo2728 | #ytshorts #shorts #maa",
            description: ""
            }
            }
            }
            ],
            nextPageToken: "CAoQAA",
            pageInfo: {
            totalResults: 200,
            resultsPerPage: 10
            }
            }
    ]

const [data,setUpdate] = useState(Tranding1[0].items)

  let TrandingFun = async(Fatchurl)=>{
    // await fetch(TrandingApiInitial_Url + new URLSearchParams({
    //     key: Apikey,
    //     part:'snippet',
    //     chart:'mostPopular',
    //     maxResult:10,
    //     regionCode:'IN'
    // })).then(res=>res.json()).then(data=>{Tranding.push(data)})
    // await console.log("Tranding=================",Tranding);
    // await setUpdate(Tranding[0].items);
}
TrandingFun('https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=10&regionCode=IN&key='+Apikey,);

// Search Value
let searchValueContext;
let updateSearchValue = async(searchValue)=>{
    searchValueContext = searchValue;
    console.log("SearchValue ======================== ",searchValueContext);
    // Tranding = []
    // await fetch('https://youtube.googleapis.com/youtube/v3/search?' + new URLSearchParams({
    //     key: Apikey,
    //     channelType:'any',
    //     part:'snippet',
    //     maxResults:10,
    //     order:'relevance',
    //     q:searchValueContext,
    //     type:'video'
        
    // })).then(res=>res.json()).then(data=>{Tranding.push(data)})
    // await console.log("Search Tranding Data=================",Tranding);
    await setUpdate(Tranding[0].items);
       
}

let menuStateValue = 1;
let menuState = async()=>{
    await menuStateValue ++;
    await console.log("MenuState Context API Launched",menuStateValue);
}

        return (
        <Videosearchcontext.Provider value={{data,setUpdate,updateSearchValue,menuState,menuStateValue}}>
            {props.children}
        </Videosearchcontext.Provider>
    )
}
export default Videosearchdata;