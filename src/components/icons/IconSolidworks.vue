<template>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" :width="size" :height="size" :aria-labelledby="uid" role="img" class="transition-colors duration-300" :class="{'rounded-[5px]': $options.metadata.rounded}">
        <title :id="uid">{{ $options.metadata.name }}</title>
        <image
            href="data:image/png;base64,UklGRooDAABXRUJQVlA4IH4DAABQEgCdASo8ADwAPm0uk0akIqGhKBv9UIANiWwAwRWN/wGmO95/Gb2RbPrZvqA2wHmA/XfqW+gB+tfWAegB5Yf7YfB1+1n7VezpWJuT3yrHzJC3wZQPADSBTLv1987/0p7BP62dWX0KERvMj+IZJi0SH6tIEWNB1eez+NAFYQ1Jzfb+XJZtMwslF8Ium4lOA+ph3DdD9yri/74SAAD+8MQLlKYDhVZeJC+MqeMqf4gKPgxLh5VdVGbt9HAcu4vo889wt9KkLFDNft31X9RD/4BAljP+zMWWZPAXf9tz/oUxIDyFQCq/VcyG4ew4elCEl5knEwZTltp7LytU5tsBvjXV+evb9SAEUVRbON60mbdStpUATulEnO9+jrPy54fH0AIyFIdol4mVXYhIsP6zA+3kyx/mRHfmbt0t2gJ1SDrwFm98ba5D6i1XiInIuQe4h/8fc+ndXdyTyPfm70nwIzC8ES++6S+qJo3/5yvA7axPt1fd60hNmso/PZI3+EUuTkNJBwRtC8Eld2uQanlxPh85liLwNlZ9w7oB+3nUYUX+bKY1XppgAQ6DmOEoKtSP05jwTEfJxfS4bS3SHMTuABlv/egDoiSAZhjP+0UNIG5tYfcFD/tZXVC4xLf7OKvqkUhO2rH5/+PFfl868oy7sHoC/PjtGfE+56wARlME46qbwnKItWiLsThWvnNt3wBzUsBpUleKjN5/ovfrsFAw62DEKj63nDu0s/7ePXXoxv/17Pv9cbp4KCwd5vXhoBjuSQZbBDepFkzlTs9h3fqpCLcMH0xCtynZC0/A7Yx2C0Z7SmcwlidVAkivltUy+gYgViIXkeu5+UK14M1/OgplY9hZHzcp7hORJozqrfzL44NZDy2dQcVs9HNmOMBPfUNNiH+Oud8ConeYJruJ7mXBqm5uPjK3Rwv+yzGbIrp2Nryl0C2k66a7/W8xsPeyrnkd12ZHb124XfGL2M+8G6dkKlCqaq5qAbAduVODAc01gT9OjQiOuFUEQnOam+/khieLp+fiLAFhY2mfVbbuJRrZeF1AYtqe3a60BURNyF0zL/QNBjCN5qgdZL/6fO4TPtnWqP9ClIQclsmmCCk5gBSl5ElKWAECgo8zg6JEB8b9CK6M2RsdwumcuxBxxDJ+uCqoTWsEFyEUDpgqBQqpHyPI6s3HiChcCi/UPq8X2gAAAAA="
            width="60" height="60" />
    </svg>
</template>

<script>
    export default {
        props: {
            size: { type: [String, Number], default: 24 }
        },
        metadata: {
            name: "SolidWorks",
            type: "Conception 3D",
            description: "Logiciel propriétaire de conception assistée par ordinateur 3D fonctionnant sous Windows",
            experience: "",
            rounded: true,
            theme: {
                cp: { light: "#da291c", dark: "#da291c" },
            }
        },
        computed: {
            uid() { return `icon-${Math.random().toString(36).substr(2, 9)}` },
            themeClasses() { return this.$options.metadata.theme; }
        }
    };
</script>