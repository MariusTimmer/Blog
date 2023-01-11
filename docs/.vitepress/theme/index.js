// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import PostLayout from './PostLayout.vue'

export default {
    ...DefaultTheme,
    Layout: PostLayout
}