kaboom({
    font: "sinko",
    background: [ 0, 0, 1, ],
});

loadSprite("zombie", "./sprites/zombie.png")

loadSound("evil laugh", "./audio/evil laugh.mp3")

loadSpriteAtlas('./sprites/elf_spritesheet.png', {
    "player": {
        x: 0,
        y: 0,
        width: 144,
        height: 72,
        sliceX: 8,
        sliceY: 4,
        anims: {
            idle_front: { from: 0, to: 1 },
            idle_back: { from: 12, to: 13 },
            idle_right: { from: 20, to: 21 },
            idle_left: { from: 28, to: 29 },
            walk_front: { from: 0, to: 7, loop: true },
            walk_back: { from: 8, to: 15, loop: true },
            walk_right: { from: 16, to: 23, loop: true },
            walk_left: { from: 24, to: 31, loop: true },
        },
    },
})

loadSpriteAtlas("./sprites/Skeleton Idle.png", {
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

loadSpriteAtlas("./sprites/TX Plant.png", {
    "bigTree": {
        x: 0,
        y: 0,
        width: 512,
        height: 512,
        sliceX: 3.5,
        sliceY: 3,
    },
})

loadSpriteAtlas("./sprites/TX Plant.png", {
    "bushes": {
        x: 80,
        y: 160,
        width: 512,
        height: 512,
    },
})

loadSpriteAtlas("./sprites/TX Door.png", {
    "door": {
        x: 0,
        y: 0,
        width: 70,
        height: 135,
        sliceY: 2,
        anims: {
            door_idle: { from: 0, to: 0 },
            door_open: {from: 0, to: 1},
        },
    },
})

scene("gameover", () => {

    add([
        text("Game Over"),
        scale(15),
        pos(width()/4-100,height()/4)
    ]);

    add([
        text("press 'space' key to play again."),
        scale(5),
        pos(width()/4-200,height()/2)
    ]);

    keyPress("space", () => {
        go("game")
    })

    const music = play("evil laugh", {
        volume: 0.1,
    });

});

scene("gamewinner", () => {

    add([
        text("You Found the Candy!"),
        scale(10),
        pos(width()/4-300,height()/4)
    ]);

    add([
        text("press 'space' key to play again."),
        scale(5),
        pos(width()/4-200,height()/2)
    ]);

    keyPress("space", () => {
        go("game")
    })

    const music = play("evil laugh", {
        volume: 0.1,
    });

});

scene("game", () => {

    const win_num = randi(1, 4);
    const MOVE_SPEED = 500;

    if (win_num === 3) {
        const zombie_1 = add([
            sprite("zombie"),
            pos(450, 160),
            scale(.5),
            area(),
            solid(),
            "zombie"
        ])

        const door_1 = add([
            sprite("door"),
            pos(300, 0),
            scale(6),
            area(),
            solid(),
            "door"
        ])

        const zombie_2 = add([
            sprite("zombie"),
            pos(900, 160),
            scale(.5),
            area(),
            solid(),
            "zombie"
        ])

        const door_2 = add([
            sprite("door"),
            pos(750, 0),
            scale(6),
            area(),
            solid(),
            "door"
        ])

        const zombie_3 = add([
            sprite("zombie"),
            pos(1350, 160),
            scale(.5),
            area(),
            solid(),
            "zombie"
        ])

        const door_3 = add([
            sprite("door"),
            pos(1200, 0),
            scale(6),
            area(),
            solid(),
            "door_win"
        ])

    } else if (win_num === 2) {
        const zombie_1 = add([
            sprite("zombie"),
            pos(450, 160),
            scale(.5),
            area(),
            solid(),
            "zombie"
        ])

        const door_1 = add([
            sprite("door"),
            pos(300, 0),
            scale(6),
            area(),
            solid(),
            "door"
        ])

        const zombie_2 = add([
            sprite("zombie"),
            pos(900, 160),
            scale(.5),
            area(),
            solid(),
            "zombie"
        ])

        const door_2 = add([
            sprite("door"),
            pos(750, 0),
            scale(6),
            area(),
            solid(),
            "door_win"
        ])

        const zombie_3 = add([
            sprite("zombie"),
            pos(1350, 160),
            scale(.5),
            area(),
            solid(),
            "zombie"
        ])

        const door_3 = add([
            sprite("door"),
            pos(1200, 0),
            scale(6),
            area(),
            solid(),
            "door"
        ])
    } else {
        const zombie_1 = add([
            sprite("zombie"),
            pos(450, 160),
            scale(.5),
            area(),
            solid(),
            "zombie"
        ])

        const door_1 = add([
            sprite("door"),
            pos(300, 0),
            scale(6),
            area(),
            solid(),
            "door_win"
        ])

        const zombie_2 = add([
            sprite("zombie"),
            pos(900, 160),
            scale(.5),
            area(),
            solid(),
            "zombie"
        ])

        const door_2 = add([
            sprite("door"),
            pos(750, 0),
            scale(6),
            area(),
            solid(),
            "door"
        ])

        const zombie_3 = add([
            sprite("zombie"),
            pos(1350, 160),
            scale(.5),
            area(),
            solid(),
            "zombie"
        ])

        const door_3 = add([
            sprite("door"),
            pos(1200, 0),
            scale(6),
            area(),
            solid(),
            "door"
        ])
    }

    
    const player = add([
        sprite("player"),
        scale(7),
        pos(width()/4, height() / 2),
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


    // player.action(() => {
    //     camPos(player.pos)
    // })

    player.collides("door", (door) => {
        door.play("door_open");
        setTimeout(() => {
            go("gameover")
        }, 1000);
    });

    player.collides("door_win", (door) => {
        door.play("door_open")
        setTimeout(() => {
            go("gamewinner")
        }, 1000);
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

go("game")
