<template>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" :width="size" :height="size" :aria-labelledby="uid" 
        role="img" class="transition-colors duration-300" :class="{'rounded-[15%]': $options.metadata.rounded}">
        <title :id="uid">{{ $options.metadata.name }}</title>
        <image href="data:image/webp;base64,UklGRqgEAABXRUJQVlA4IJwEAADwFACdASo8ADwAPm0ukkYkIqGhLBgMyIANiWwAuzOJzb/AfgB0KHPMFB5gNttlfMB+sHrgdIB/T+op/UDgbf3I9Id5Ym1Rxr6RrGJ6Jef96n9gj9Yur16KH7GIwhf4baDfI/yNez8YkAw03axAfjkV7+p9/OSEdSE6MXyjOtYk2VV2uZAsrsuMN1hi17NVXbBMvmOFUwLbmev2Lz5ORx+1By0gV8JO+bvEkC3JVYvYAAD+q0wudLcgmA/I9q8Xp7SID4FfrW2TjJi4zYS411oTYf/f3bjAeiHeMB///LDfbVvVoY//lKdwfkGQ/bDKU49Gn82OIPUGTzoQS6F8vO4fuZ8ZkxZHgLDbUwK5ENzjZ5tR+tYUqCvIcD04Gjnz2Mcz2KHfeNxoKx2aGlTYF1Ue/1GmGzS/rs9baAf3gPwoRr+hvTUAjYoTHTKZmquW2opQWpiqNcI6MEzQZzq6dmjnwdBmGNnw39u3nVhvzO83QMUVkeSCMMqvRbo/6FvZuf/Qt564XJn1fdp8vsYccwEXoQNCJUsw++ksIaA9X7r+b4EKzPHzdP0M9g8Z0patOObZq7TkSQ3QQQXK6Tn6rjBCIaxNH5vRqChqj0Ry+Cnk2hxjmlLs+RPtyl/dSoBR8SW4ADbZYxZ5tg3LN99/MzsIQAroEDJQ/rCU7SEotG02e7hPcwCF+IQk1EV866uMHceRSGf8+LS7yDQf3lrHYkCIhmQu1ana0dF3/UOSIvgYFYuH2KoXFhTQvwatJ9BfSwOJr19WOkrbJZU1Hv4sxD2cE6lrttf2NSVIp8+AcqFmgpwfkF8HCvXceF2lenI8kJ+xslHhqNqtSqaNyU77j/lc2rDUY19e97hIafHwxv5iucWfNIu3rg8kHBuHEeNantI/6gjvznfVPnu81t+AQTawV5uz5j1q3Nk/+te2uby+gSKqgTPrpwyBXk1UgmhkByFlZpDOd13AubGWrudB/Xdg/hMr8mGhMh2jzoysukCX6GOPTDXdT7e6SHGRCmM9XvyWs62isOKXR78Q85m4AyubUbHnuyuZLJDagiyX5azlSMkmPGsWr2MY2TxeKYHsFwQN2+2wjbQBGgQ/rS93QVXYfQQdzivyYwSDbTuwRGEdwo9vYVMMHkxbYiyN+m7KiLnCi/7kmUYiPfjO+C5wx9OgPYJm8dNjOkd4jGheZ7TZuqDrPjuSkQbwec9KL9DkoDeTXI7TqxgHB5mZRhfKeEIr1Qa5BivnuNA7ONlBi7LAZgsRQnnhu8GXmMVaIwMF9kzrRzk9hP78Sw4ZADpjQfkfmwj64cJ2xei/4Z3JBNx5KjiNjzdm6kJq0z7FD/CJPyICs32Voc7illkrb0/su4rO8ZzUQDaDX4zIFXw+uVsNmpo2FDoyCKs9PCmDYVBG4TAG7ewxriXR6mnxPT09PqyxigmMZFdniHeo0yDp1K2wlTojgdupci6SpmJUL5qndqmhSbtZipNEWH8qMt1rPf5Zx3Eq4QXHWZMn3vEnzWAf6gPnhVRuWtDHxPXgR/H7XZKhbmekrHkgXokRdGNUrvn5uSkI2Bjv7X04AAAA" width="200" height="200" />
    </svg>
</template>

<script>
    export default {
        props: {
            size: { type: [String, Number], default: 24 }
        },
        metadata: {
            name: "Windows Embedded 7",
            type: "Système d'exploitation",
            description: "Système d'exploitation développé par Microsoft.",
            experience: "",
            rounded: false,
            theme: {
            cp: { light: "#3474aa", dark: "#3474aa" },
            }
        },
        computed: {
            uid() { return `icon-${Math.random().toString(36).substr(2, 9)}` }
        }
    };
</script>