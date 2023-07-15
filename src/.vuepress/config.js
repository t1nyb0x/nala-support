import { defaultTheme } from "@vuepress/theme-default"

export default {
    title: 'ナーラ公苑内放牧地サポートサイト',
    dest: 'docs/',
    markdown: {
        extendMarkdown: md => {
            md.set({breaks: true})
        }
    },
    theme: defaultTheme({
        navbar: [
            { text: 'Home', link: '/'},
            { text: 'サポーター', link: '/supporter.html'},
            { text: '利用規約', link: '/terms.html'},
            { text: 'プライバシーポリシー', link: '/privacy.html'},
            { text: 'ナーラ公苑内放牧地', link: 'https://misskey.t1nyb0x.cloud'}
        ]
    })
}