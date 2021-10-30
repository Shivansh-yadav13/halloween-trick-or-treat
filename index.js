// import player from './sprites/elf_spritesheet.png'

kaboom({
    font: "sinko",
    background: [ 0, 0, 1, ],
});

loadSpriteAtlas('sprites/elf_spritesheet.png', {
    "player": {
        x: 0,
        y: 0,
        width: 144,
        height: 72,
        sliceX: 8,
        sliceY: 4,
        anims: {
            idle_front: { from: 0, to: 0 },
            idle_back: { from: 12, to: 12 },
            idle_right: { from: 20, to: 20 },
            idle_left: { from: 28, to: 28 },
            walk_front: { from: 0, to: 7 },
            walk_back: { from: 8, to: 15 },
            walk_right: { from: 16, to: 23 },
            walk_left: { from: 24, to: 31 },
        },
    },
})

loadSpriteAtlas("sprites/Skeleton Idle.png", {
    "skeleton": {
        x: 0,
        y: 0,
        width: 264,
        height: 32,
        sliceX: 11,
        anims: {
            idle: { from: 0, to: 10 },
        },
    },
})

// loadSpriteAtlas("/sprites/TX Plant.png", {
//     "bigTree": {
//         x: 0,
//         y: 0,
//         width: 512,
//         height: 512,
//         sliceX: 3.5,
//         sliceY: 3,
//     },
// })

// loadSpriteAtlas("/sprites/TX Plant.png", {
//     "bushes": {
//         x: 80,
//         y: 160,
//         width: 512,
//         height: 512,
//         // sliceX: 6,
//     },
// })


scene("game", () => {

    const MOVE_SPEED = 900;
    
    const player = add([
        sprite("player"),
        scale(7),
        pos(width() / 2, height() / 2),
        area(),
        solid(),
    ]);

    const skeleton_1 = add([
        sprite("skeleton"),
        pos(50, height()/20),
        scale(10),
        area(),
        "skeleton",
        solid(),
    ])

    const skeleton_2 = add([
        sprite("skeleton", {flipX: true}),
        pos(width()-300, height()/20),
        scale(10),
        area(),
        "skeleton",
        solid(),
    ])

    const big_tree = add([
        sprite("bigTree"),
        pos(-70, height()-550),
        scale(3),
    ])

    add([
        pos(135, height()-150),
        rect(70, 70),
        outline(4),
        opacity(0),
        outline(0),
        area(),
        solid(),
    ]);


    player.action(() => {
        camPos(player.pos)
    })

    loop(1, () => {
        skeleton_1.play("idle")
        skeleton_2.play("idle")
    })

    keyRelease("w", () => {
        player.play("idle_back")
    })

    keyRelease("s", () => {
        player.play("idle_front")
    })

    keyRelease("d", () => {
        player.play("idle_right")
    })

    keyRelease("a", () => {
        player.play("idle_left")
    })

    /// KEY PRESSS

    keyPress("w", () => {
        player.play("walk_back")
    })

    keyPress("s", () => {
        player.play("walk_front")
    })

    keyPress("d", () => {
        player.play("walk_right")
    })

    keyPress("a", () => {
        player.play("walk_left")
    })

    /// KEY DOWNN

    keyDown("w", () => {
        player.move(0, -MOVE_SPEED)
    })

    keyDown("s", () => {
        player.move(0, MOVE_SPEED)
    })

    keyDown("d", () => {
        player.move(MOVE_SPEED, 0)
    })

    keyDown("a", () => {
        player.move(-MOVE_SPEED, 0)
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
