let saved = false
let Alien = game.createSprite(2, 0)
let Farmer = game.createSprite(0, 5)
let Sheep = game.createSprite(randint(0, 4), randint(0, 4))
Sheep.set(LedSpriteProperty.Blink, 8)
game.setLife(3)
basic.forever(function () {
    basic.pause(2000)
    saved = false
    Alien.set(LedSpriteProperty.Blink, 0)
    Alien.move(1)
    Alien.ifOnEdgeBounce()
    if (Alien.get(LedSpriteProperty.X) == Sheep.get(LedSpriteProperty.X)) {
        for (let index = 0; index < 4; index++) {
            basic.pause(1000)
            Alien.set(LedSpriteProperty.Blink, 12)
            Alien.set(LedSpriteProperty.X, Alien.get(LedSpriteProperty.X))
        }
        if (saved == false) {
            Sheep.delete()
            game.removeLife(1)
        }
        Sheep.delete()
        Sheep = game.createSprite(randint(0, 4), randint(0, 4))
        Sheep.set(LedSpriteProperty.Blink, 8)
    }
})
basic.forever(function () {
    basic.pause(500)
    if (input.acceleration(Dimension.X) > 100) {
        Farmer.change(LedSpriteProperty.X, 1)
    }
    if (input.acceleration(Dimension.X) < -100) {
        Farmer.change(LedSpriteProperty.X, -1)
    }
    if (input.acceleration(Dimension.Y) > 100) {
        Farmer.change(LedSpriteProperty.Y, 1)
    }
    if (input.acceleration(Dimension.Y) < -100) {
        Farmer.change(LedSpriteProperty.Y, -1)
    }
    if (Farmer.isTouching(Sheep)) {
        Sheep.delete()
        saved = true
        Sheep = game.createSprite(randint(0, 4), randint(0, 4))
        Sheep.set(LedSpriteProperty.Blink, 8)
        game.addScore(1)
    }
})
