function display_random_image() {

    let images = [
        {
            src: "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg",
            width: 240,
            height: 160
        },
        {
            src: "http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg",
            width: 320,
            height: 195
        },
        {
            src: "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg",
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