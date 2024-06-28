<template>
    <div class="pt-5">
        <div class="author-card shadow-sm rounded-4 bg-bg-secondary">
            <img src="@/assets/img/new.png" alt="Author Image">
            <h5 class="mt-2 font-meduim weight-meduim">Author Name</h5>
            <p class="m-0 font-x-small weight-regular">
                Here And In This Place Is Written The Description Of The Author
                For Whom We Are Agents Here
                And In This Place Is Written The Description Of The Author
                For Whom We Are Agents
            </p>
        </div>
    </div>
</template>
<style scoped>
.author-card {
            max-width: 300px;
            margin: auto;
            padding: 20px;
            border-radius: 10px;
            background-color: #f8f9fa;
            text-align: center;
        }
        .author-card img {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            object-fit: cover;
            position: relative;
            margin-top: -60px;
        }
        .author-card h5 {
            margin-top: 15px;
            margin-bottom: 10px;
        }
        .author-card p {
            font-size: 0.9rem;
            color: #6c757d;
        }
</style>