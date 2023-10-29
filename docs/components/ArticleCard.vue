<template>
    <div class="card">
        <div class="flex">
            <div class="details">
                <h2 class="title"><a :href="href.slice(0, -3)">{{ title }}</a></h2>
                <p v-if="excerpt" class="excerpt">{{ excerpt }}</p>
                <div class="author">
                    <div>
                        <p class="date">{{ formatDate(date) }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
        };
    },
    methods: {
        formatDate: (value) => {
            let date_object = new Date(value);
            return date_object.toLocaleDateString();
        }
    },
    props: {
        title: {
            type: String,
            required: true,
        },
        excerpt: {
            type: String,
            required: false,
        },
        date: {
            type: String,
            required: false,
        },
        href: {
            type: String,
            required: true,
        }
    }
};
</script>
<style scoped>
.card {
    border-radius: 0.5rem;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    margin-bottom: 1.5rem;
    overflow: hidden;
    width: 100%;
}

.card:hover {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.25);
    transition: ease-in-out 0.2s all;
}

.flex {
    display: flex;
}

.details {
    margin-left: 1.2rem;
}

.title {
    border-top: none;
    margin: 0 0;
}

.name {
    margin: 0 0;
    font-size: 0.7rem;
    color: #999;
}
</style>