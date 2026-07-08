const postsContainer = document.querySelector("#posts");
const loading = document.querySelector("#loading");

axios.interceptors.request.use(config => {
    console.log("API call started:", config.url);
    return config;
});

async function loadPosts() {

    loading.textContent = "Loading Posts...";
    postsContainer.innerHTML = "";

    try {

        const response = await axios.get(
            "https://jsonplaceholder.typicode.com/posts",
            {
                params: {
                    userId: 1
                },
                timeout: 5000
            }
        );

        loading.textContent = "";

        response.data.forEach((post, index) => {

            const card = document.createElement("div");

            card.className = "post-card";

            card.innerHTML = `
                <h3>Course Notification ${index + 1}</h3>

                <p>Your course information has been loaded successfully.</p>

                <p>Status: Active</p>
            `;

            postsContainer.appendChild(card);

        });

    }
    catch (error) {

        loading.textContent = "Failed to load posts.";

    }

}

document
    .querySelector("#load-posts")
    .addEventListener("click", loadPosts);