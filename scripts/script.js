document.addEventListener("DOMContentLoaded", () => {
    const images = [
        "https://cdn.idntimes.com/content-images/post/20220827/bunga-krisan-a4f07eb6c97e5d25f9c4d4125e0f9017.jpg",
        "https://images.unsplash.com/photo-1447875569765-2b3db822bec9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1546842931-886c185b4c8c?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ];
    const asideImg = document.querySelector("aside img");
    let currentIndex = 0;

    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        asideImg.src = images[currentIndex];
    }, 2000);
});
