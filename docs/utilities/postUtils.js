export default {
    sortPosts: (a, b) => {
        if (a.date < b.date) {
            return 1;
        } else if (a.date > b.date) {
            return -1;
        }
        return 0;
    },
    getPostsNavigation: (posts, limit) => {
        let current_index = 0;
        let result = [];
        posts.sort().forEach(item => {
            if (current_index < limit) {
                result.push({
                    text: item.title,
                    link: item.href
                });
            } else if (current_index === limit) {
                result.push({
                    text: "Liste aller Beiträge",
                    link: "/post/"
                });
            }
            current_index++;
        });
        return result;
    }
}