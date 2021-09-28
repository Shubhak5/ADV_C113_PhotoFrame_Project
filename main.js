function preload() {
    // no preload items
}

function setup() {
    canvas = createCanvas(600, 400);
    canvas.position(100, 200);
    fill('Orange');
    rect(30, 30, 530, 350);
    fill('purple');
    circle(35, 35, 40);
    circle(35, 370, 40);
    circle(550, 35, 40);
    circle(550, 370, 40);
    rect(55, 150, 10, 10);
    rect(35, 200, 10, 10);
    rect(45, 250, 10, 10);
    rect(35, 300, 10, 10);
    rect(535, 150, 10, 10);
    rect(553, 200, 10, 10);
    rect(530, 250, 10, 10);
    rect(550, 300, 10, 10);
    line(75, 370, 100, 370);
    line(175, 350, 200, 370);
    rect(275, 340, 10, 10);
    line(375, 340, 400, 370);

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 80, 80, 440, 240);
}

function take_snapshot() {
    save("photo.png");
}