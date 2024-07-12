document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("blog-posts")) {
        const blogPosts = [
            {
                title: "First Blog Post",
                content: "This is the content of the first blog post."
            },
            {
                title: "Second Blog Post",
                content: "This is the content of the second blog post."
            },
            // Add more blog posts as needed
        ];

        const blogPostsContainer = document.getElementById("blog-posts");

        blogPosts.forEach(post => {
            const postElement = document.createElement("div");
            postElement.className = "blog-post";

            const postTitle = document.createElement("h2");
            postTitle.textContent = post.title;

            const postContent = document.createElement("p");
            postContent.textContent = post.content;

            postElement.appendChild(postTitle);
            postElement.appendChild(postContent);
            blogPostsContainer.appendChild(postElement);
        });
    }

    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault();
            alert("Form submitted! We will get back to you soon.");
        });
    }
});
