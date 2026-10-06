function display_random_image() {

    let images = [
        {
            src: "https://cdn-media.sforum.vn/storage/app/media/anh-dep-83.jpg",
            width: 240,
            height: 160
        },
        {
            src: "https://internetviettel.vn/wp-content/uploads/2017/05/1-2.jpg",
            width: 320,
            height: 195 
        },
        {
            src: "https://theselfishmeme.co.uk/wp-content/uploads/2025/11/anh-meme-chiu-2.webp",
            width: 500,
            height: 343
        }
    ];

    let random = Math.floor(Math.random() * images.length);

    let image = document.createElement("img");

    image.src = images[random].src;
    image.width = images[random].width;
    image.height = images[random].height;

    document.getElementById("image").innerHTML = "";
    document.getElementById("image").appendChild(image);
}