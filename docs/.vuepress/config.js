import { defaultTheme } from "@vuepress/theme-default"

export default {
    title: 'ナーラ公苑内放牧地サポートサイト',
    dest: 'build/',
    markdown: {
        extendMarkdown: md => {
            md.set({breaks: true})
        }
    },
    theme: defaultTheme({
        navbar: [
            { text: 'Home', link: '/nala-support/'},
            { text: 'サポーター', link: '/nala-support/supporter.html'},
            { text: '利用規約', link: '/nala-support/terms.html'},
            { text: 'プライバシーポリシー', link: '/nala-support/privacy.html'},
            { text: 'ナーラ公苑内放牧地', link: 'https://misskey.t1nyb0x.cloud'}
        ]
    })
}