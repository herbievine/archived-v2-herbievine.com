<template>
    <div class="main">
        <div class="wrapper">
            <div class="header">
                <h2>Hey! I'm Herbie 👋</h2>
                <div title="CV">
                    <Fa
                        @click="openLink('https://herbievine.com/CV.pdf')"
                        class="hover"
                        icon="align-justify"
                        prefix="fas"
                        width="16"
                        height="16"
                        color="#111111"
                        title="CV"
                    />
                </div>
            </div>
            <div class="body">
                <p>
                    I'm a student at Highlands College, Jersey, studying
                    Information Technology.
                </p>
                <p>
                    I love creating & developing web apps. I've always been
                    captured by the endless possibilities of the web and what it
                    has to offer.
                </p>
                <p>
                    I'm fluent in JavaScript, TypeScript, Vue and many other
                    languages/frameworks.
                </p>
            </div>
            <div class="footer">
                <div
                    v-for="(icon, i) in icons"
                    :key="i"
                    :title="icon.icon.toUpperCase()"
                    @click="openLink(icon.url)"
                >
                    <Fa
                        :icon="icon.icon"
                        prefix="fab"
                        width="20"
                        height="20"
                        class="hover"
                        color="#111111"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Main',
    data: () => ({
        icons: [
            {
                icon: 'twitter',
                url: 'https://swooo.sh/twitter'
            },
            {
                icon: 'github',
                url: 'https://swooo.sh/github'
            },
            {
                icon: 'linkedin',
                url: 'https://swooo.sh/linkedin'
            },
            {
                icon: 'medium',
                url: 'https://swooo.sh/medium'
            },
            {
                icon: 'npm',
                url: 'https://swooo.sh/npm'
            },
            {
                icon: 'stack-overflow',
                url: 'https://swooo.sh/so'
            }
        ]
    }),
    methods: {
        openLink(url) {
            window.open(url, '_BLANK')
        }
    }
}
</script>

<style scoped lang="scss">
.main {
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    & .wrapper {
        margin: 80px auto auto auto;
        max-width: 500px;
        width: 90%;
        padding: 20px;
        box-shadow: 0 18px 53px 0 rgba(0, 0, 0, 0.2);
        border-radius: 20px;

        & .hover:hover {
            cursor: pointer;
        }

        & .header {
            font-weight: 300;
            font-size: 14px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        & .body {
            margin-top: 20px;
            font-weight: 300;

            & p {
                margin-bottom: 10px;
            }
        }

        & .footer {
            margin-top: 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            max-width: 200px;
        }
    }
}
</style>
