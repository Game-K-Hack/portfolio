<template>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" :width="size" :height="size" :aria-labelledby="uid" role="img" class="transition-colors duration-300">
        <title :id="uid">{{ $options.metadata.name }}</title>
        <image
            href="data:image/png;base64,UklGRnAFAABXRUJQVlA4WAoAAAAQAAAAOwAAOwAAQUxQSLkDAAABoChJtmnbqjHnWNe2bdu2bdu2bfveZ9u2bdu2/fY+ZzxsrL3OD0TEBIB4VUcO9fzfS0jeeZcJhZHr59cDCcUBuAzQ9JmzZq978HyQEBx9H7m+Ci68qm+0BTh6PS49R20ze5YM3j6TPD5wXD8cn5Yy2n7++/cySGivFERA6X0OmpZQ8muzu1FCf4r/O5pfRJAWjhp7N9xTCw3thaIIBEw6F9SlgwNaPxPgwjpvNYEGcNNr5zUA79PAaR4m34qTkPI9NAHIffkilj11XUcQTQ0IOHCYICQKX3TlziN3zwQY/+BdQwCV1HDcPI0gHA/V+/bIhxMFet/8yAwBlTT8063QUBAPoADeQfNLnlxVANSlgFL9haL4UEC8ExJ7D9WOPb2nHKhLRsDAB0DCSdMpFN/85Fl1wfskBKy/AI0AiEKu+Q9f0Q6cJkK5dAVBFEAUGH3XLQMAlf8JPNybALx6EVXJAIgKdL/u3kmACuAp+UIlcglJVTIAeAdNz39oST5QBwEdnvTQfu+dzzx+2Yzi4DICXqHKgUe2lQZ15GLBRfUfscQ/rgOfGXAKRdc9dKwWeJeLq82yYvF4PBYzezAfLkMgCsGsey5sBQyJW8wSZ/9lT5CiqPpQQBQYfvP1nar8aXFL8U/bm8wBiIQCqEDXi760uKWabX/VSuTIu+DQEJDQNRe1LctSj9mBBELe583sMBldY7E0suzVBMoC++PvbOtcqGzpsMvludriaZj9luSg/W1xe/by668N+7orPrLstLITePqb/W1WFyFsz36LpfVrAhzbzWwxntCVaWll2UuJgBr9KiOE7nLhv7fs1GK2K5kHPGGKE1wAJXf9YPGUsu23Kslw3hGmBwIod/S1vdU/sHgqf9kmMu0o3ACqnHllZxFoZRZLkvWX3U2mPZ2/s/uPvLoxP2hAZ7OsWDwej8XMbvK4DAnP2592P6BCwLILbrLEn80DR8bfsl9tDXkFlM6PQNut1z9wx8kReRFHpj1jzN6vgICQ9+mqKEmVCAq1BhfEAcpVUwnw6p1XFSLpAAcEzL8IJerOC+Cp94RDIpdQ4JGWKDkz4NRqAnJmwIib8ERfvBdH6aeL4KKnAJ47+qFEXaBkv5EN2X6IgKgLbLp+w9YbHrwCIfKeYwcAlt5K9D19rkUCDTi0CY2act5QFByVb0ai5rixNQ4gz8W5ibpy1UgUhLIXI1HzTHwQAg3YuhaNGsJ95wLMeU6RHKDXvXrO0YcfKYMj+g6aLd3QGzw5UTyAOHKoU/WEDwBWUDggkAEAABAKAJ0BKjwAPAA+WSSORaOiIZ39tgA4BYS2AGNXwCLQqz1rIIev273mA/Un1zPRTvF+8k+UdmEv0AU7IRkfVk9d2GkZxqI4V1ePlMnt9n3BeK2EeOYp3QcAAP7sC0v/8wTq9SG38Jo0asbLkNvwaQwPpd2ADh3tN2NyD7MXOi9aY3r73OcuZKCV7onBfa6FEvXzSYPhuvEQssAplCEtGP5/7f7Ii+eDkmrAnY5tVfaW561HxpaFyZaszq2ebNR4iAePoIDJ+XN2i4K57fFzP/3XwVSrOP1TgqlbrzbnaQhvq/G8+CoKfG9oKOwfjOfxECXPp7vK0QDyKbKf8/AhDPKY8g/wGTI+7/4xv//Y8f/2GZ//2JAIXZvd3k+kf+s///8I3TZd47vHNnk+ry75x5PUB/cMr4sCt64KgIhgHM1gs4qZ9C7SrSJReMxnXiNh4Z2OGVp9N/6jfR6wDGn2UJbR/rJ+EuGXWDGSvy/43o76NJ4dYbYKwp8sujv/jW/Sr8SC0olPDm4/4SWSS6lcYAA="
            width="60" height="60" />
    </svg>
</template>

<script>
    export default {
        props: {
            size: { type: [String, Number], default: 24 }
        },
        metadata: {
            name: "Talend",
            type: "Extract Transform and Load",
            description: "",
            experience: "",
            rounded: false,
            theme: {
                cp: { light: "#85bd44", dark: "#85bd44" },
            }
        },
        computed: {
            uid() { return `icon-${Math.random().toString(36).substr(2, 9)}` },
            themeClasses() { return this.$options.metadata.theme; }
        }
    };
</script>