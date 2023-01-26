// Don't forget to comment your code as you work!
let mySprite: Sprite = null
let customer = ""
let server = game.askForString("What drink would you like to have?")
if (customer == "Water") {
    mySprite = sprites.create(assets.image`water`, SpriteKind.Player)
} else {
    mySprite = sprites.create(assets.image`other drinks`, SpriteKind.Player)
}
