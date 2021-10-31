kaboom({
    font: "sinko",
    background: [ 0, 0, 1, ],
});

loadSprite("ghost", "./sprites/ghost.png")
loadSprite("candy", "./sprites/candy.png")
loadSound("lost", "./audio/lost.mp3")
loadSound("win", "./audio/win.mp3")

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
            walk_front: { from: 0, to: 7, loop: true, speed: 10 },
            walk_back: { from: 8, to: 15, loop: true, speed: 10 },
            walk_right: { from: 16, to: 23, loop: true, speed: 10 },
            walk_left: { from: 24, to: 31, loop: true, speed: 10 },
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

loadSpriteAtlas("./sprites/TX Props.png", {
    "statue": {
        x: 70*6,
        y: 22,
        width: 70,
        height: 70,
    },

    "bench-right": {
        x: 70*5,
        y: 100,
        width: 70,
        height: 70,
    },

    "grave": {
        x: 70*4,
        y: 20*8,
        width: 50,
        height: 70
    },

    "platform": {
        x: 70*5,
        y: 30*9,
        width: 100,
        height: 70
    },

    "biggest-stone": {
        x: 0,
        y: 70*6,
        width: 70,
        height: 70,
    },

    "stones": {
        x: 0,
        y: 70*7-10,
        width: 200,
        height: 70,
        sliceX: 6,
        anims: {
            "stone-smallest": { from: 0, to: 0 },
            "stone-small": { from: 1, to: 1 },
            "stone-med": { from: 2, to: 2 },
            "stone-med-2": { from: 3, to: 3 },
            "stone-med-3": { from: 4, to: 4 },
            "stone-big": { from: 5, to: 5 },
        }
    },

    "props": {
        x: 70*2,
        y: 0,
        width: 70,
        height: 70*6,
        sliceY: 6,
        anims: {
            "prop-1": { from: 0, to: 0 },
            "prop-2": { from: 1, to: 1 },
            "prop-3": { from: 2, to: 2 },
            "prop-4": { from: 3, to: 3 },
            "prop-5": { from: 4, to: 4 },
            "prop-6": { from: 5, to: 5 },
        }
    }

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

loadSpriteAtlas("./sprites/jack.png", {
    "jack": {
        x: 0,
        y: 0,
        width: 750,
        height: 250,
        sliceX: 3,
        anims: {
            front: { from: 0, to: 0},
            back: { from: 1, to: 1 },
            side: { from: 2, to: 2 }
        }
    }
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
    
    play("lost", {
        volume: 0.1,
    });

    keyPress("space", () => {
        go("game")
    })
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

    play("win", {
        volume: 0.2,
    });

    keyPress("space", () => {
        go("game")
    })
});

scene("game", () => {

    const win_num = randi(1, 7);
    const MOVE_SPEED = 300;

    if (win_num === 3 || win_num === 6) {
        const ghost_1 = add([
            sprite("ghost"),
            pos(400, 120),
            scale(.5),
            area(),
            solid(),
            "ghost"
        ])

        const door_1 = add([
            sprite("door"),
            pos(300, 0),
            scale(6),
            area(),
            solid(),
            "door"
        ])

        const ghost_2 = add([
            sprite("ghost"),
            pos(850, 120),
            scale(.5),
            area(),
            solid(),
            "ghost"
        ])

        const door_2 = add([
            sprite("door"),
            pos(750, 0),
            scale(6),
            area(),
            solid(),
            "door"
        ])

        const candy_3 = add([
            sprite("candy"),
            pos(1350, 120),
            scale(.5),
            area(),
            solid(),
            "candy"
        ])

        const door_3 = add([
            sprite("door"),
            pos(1200, 0),
            scale(6),
            area(),
            solid(),
            "door_win"
        ])

    } else if (win_num === 2 || win_num === 5) {
        const ghost_1 = add([
            sprite("ghost"),
            pos(400, 120),
            scale(.5),
            area(),
            solid(),
            "ghost"
        ])

        const door_1 = add([
            sprite("door"),
            pos(300, 0),
            scale(6),
            area(),
            solid(),
            "door"
        ])

        const candy_2 = add([
            sprite("candy"),
            pos(900, 120),
            scale(.5),
            area(),
            solid(),
            "candy"
        ])

        const door_2 = add([
            sprite("door"),
            pos(750, 0),
            scale(6),
            area(),
            solid(),
            "door_win"
        ])

        const ghost_3 = add([
            sprite("ghost"),
            pos(1300, 120),
            scale(.5),
            area(),
            solid(),
            "ghost"
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
        const candy_1 = add([
            sprite("candy"),
            pos(450, 120),
            scale(.5),
            area(),
            solid(),
            "candy"
        ])

        const door_1 = add([
            sprite("door"),
            pos(300, 0),
            scale(6),
            area(),
            solid(),
            "door_win"
        ])

        const ghost_2 = add([
            sprite("ghost"),
            pos(850, 120),
            scale(.5),
            area(),
            solid(),
            "ghost"
        ])

        const door_2 = add([
            sprite("door"),
            pos(750, 0),
            scale(6),
            area(),
            solid(),
            "door"
        ])

        const ghost_3 = add([
            sprite("ghost"),
            pos(1300, 120),
            scale(.5),
            area(),
            solid(),
            "ghost"
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

    add([
        sprite("jack", {anim: "front"}),
        pos(660, 260),
        scale(.6),
        opacity(.6)
    ]);

    add([
        sprite("jack", {anim: "front"}),
        pos(660*1.5+130, 260),
        scale(.6),
        opacity(.6)
    ]);

    add([
        sprite("grave"),
        scale(4),
        area(),
        solid(),
        pos(width()-400, height()-250)
    ]);

    add([
        sprite("grave"),
        scale(4),
        area(),
        solid(),
        pos(width()-250, height()-250)
    ]);

    add([
        sprite("biggest-stone"),
        pos(width()-350, height()-450),
        scale(3),
        area(),
        solid()
    ]);

    add([
        sprite("platform"),
        scale(3),
        pos(width()/4+300, height()-240)
    ]);

    
    const player = add([
        sprite("player"),
        scale(7),
        pos(width()/2-90, height()/2+200),
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
    ]);

    const skeleton_2 = add([
        sprite("skeleton", {flipX: true}),
        pos(width()-300, height()/20),
        scale(10),
        area(),
        "skeleton",
        solid(),
    ]);

    add([
        sprite("props", {anim: "prop-3"}),
        pos(-20 , height()/2-20),
        scale(4)
    ]);

    add([
        sprite("jack", {anim: "side", flipX: true}),
        pos(120, height()-300),
        scale(.4),
        opacity(.7)
    ]);

    add([
        sprite("stones", { anim: "stone-smallest" }),
        pos(170, height()-200),
        scale(3),
        area(),
        solid()
    ]);

    add([
        sprite("stones", { anim: "stone-small" }),
        pos(250, height()-150),
        scale(2.5),
        area(),
        solid()
    ]);

    add([
        sprite("bench-right"),
        pos(-90, height()-270),
        scale(4),
        area(),
        solid()
    ]);

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
