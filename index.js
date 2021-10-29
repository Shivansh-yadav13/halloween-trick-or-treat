kaboom();

// kaboom({
//     width: 320,
//     height: 240,
//     font: "sinko",
//     background: [0, 0, 255,],
// });

loadSprite('bg', 'sprites/background.png')
loadSprite('mark', 'sprites/player.png');
loadSprite('zombie', 'sprites/zombie.png');

// const player = add([
//     sprite('player'),
//     pos(120, 80),
//     area(),
//     body(),
// ])

// keyPress("space", () => {
//     player.jump();
// })

scene("game", () => {
    add([
        sprite("bg", { width: width(), height: height() })
    ]);

    add([
        pos(0, height() - 20),
        rect(width(), 40),
        outline(4),
        opacity(0),
        area(),
        solid(),
    ]);



    // function produceMoon() {
    //     const moon_posi = randi(height() / 2, height() / 4)
    //     add([
    //         sprite("moon"),
    //         pos(width(), moon_posi),
    //         area(),
    //         "moon",
    //     ])
    // }

    function producezombie() {
        add([
            sprite("zombie", { flipX: true }),
            scale(.1),
            pos(width() - 20, height() - 75),
            area(),
            "zombie",
        ])
    }

    // loop(3, () => {
    //     produceMoon();
    // })

    loop(5, () => {
        producezombie();
    })

    // action("moon", (moon) => {
    //     moon.move(-500, 0)
    // });

    action("zombie", (zombie) => {
        zombie.move(-300, 0)
    });

    const player = add([
        sprite("mark"),
        scale(1),
        pos(80, 40),
        area(),
        body(),
    ]);

    player.collides("moon", () => {
        go("gameover")
    })

    player.collides("zombie", () => {
        go("gameover")
    })


    keyPress("space", () => {
        player.jump(900);
    })

});

scene("gameover", () => {
    add([
        text("Game Over"),
        scale(.5)
    ]);

    keyPress("space", () => {
        go("game")
    })
});

go("game")