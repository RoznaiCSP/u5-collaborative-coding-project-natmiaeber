let mySprite: Sprite = null
let customer = ""
// Don't forget to comment your code as you work!
scene.setBackgroundImage(img`
    ddddddddddddddddddddddddbbbdddddddddddddddddddddddddddddddddddddddddd11111111111111155111dddddddddddddddddddddddddddddddddddddddddbbbddddddddddddddddddddddddddd
    ddddddddddddddddddddddddbbbdddddddddddddddddddddddddddddddddddddddddd11511111111111115111dddddddddddddddddddddddddddddddddddddddddbbbddddddddddddddddddddddddddd
    ddddddddddddddddddddddddbbbdddddddddddddddddddddddddddddddddddddddddd15511111511111115111dddddddddddddddddddddddddddddddddddddddddbbbddddddddddddddddddddddddddd
    ddddddddddddddddddddddddbbbdddddddddddddddddddddddddddddddddddddddddd15111111111511115111ddddddddddddddddddfffffffffddddddddddddddbbbddddddddddddddddddddddddddd
    ddddddddddddddddddddddddbbbdddddddddddddddddddddddddddddddddddddddddd155551111111111111dddddddddddddddddddf111111111fdddddddddddddbbbddddddddddddddddddddddddddd
    ddddddddddddddddddddddddbbbdddddddddddddddddddddddddddddddddddddddddd111111111111ddd111ddddddddddddddddddf11111111111fddddddddddddbbbddddddddddddddddddddddddddd
    ddddddddddddddddddddddddbbbddddddddddddddddddddddddddddddddddddddddddd1111dddd111dd1111dddddddddddddddddf111111f111111fdddddddddddbbbddddddddddddddddddddddddddd
    ddddddddddddddddddddddddbbbddddddddddddddddddddddddddddddddddddddddddd1111dddd151dd1151ddddddddddddddddf1111111f1111111fddddddddddbbbddddddddddddddddddddddddddd
    ddddddddddddddddddddddddbbbddddddddddddddddddddddddddddddddddddddddddd1151dddd111dd1111ddddddddddddddddf11f111111111f11fddddddddddbbbddddddddddddddddddddddddddd
    ddddddddddddddddddddddddbbbddddddddddddddddddddddddddddddddddddddddddd111ddddd115dd111dddddddddddddddddf11f111111111b11fddddddddddbbbddddddddddddddddddddddddddd
    ddddddddddddddddddddddddbbbddddddddddddddddddddddddddddddddddddddddddd111ddd11115dd111dddddddddddddddddf11111111111b111fddddddddddbbbddddddddddddddddddddddddddd
    ddddddddddddddddddddddddbbbddddddddddddddddddddddddddddddddddddddddddd111ddd11511dd111dddddddddddddddddf1111111111b1111fddddddddddbbbddddddddddddddddddddddddddd
    ddddddddddddddddddddddddbbbddddddddddddddddddddddddddddddddddddddddddd511ddd11111dd111dddddddddddddddddf1111111f1b11111fddddddddddbbbddddddddddddddddddddddddddd
    ddddddddddddddddddddddddbbbddddddddddddddddddddddddddddddddddddddddddd111ddd11111dd11111dddddddddddddddf111111112111111fddddddddddbbbddddddddddddddddddddddddddd
    ddddddddddddddddddddddddbbbddddddddddddddddddddddddddddddddddddddddd111111ddddddddd11511dddddddddddddddf11f111112111f11fddddddddddbbbddddddddddddddddddddddddddd
    ddddddddddddddddddddddddbbbddddddddddddddddddddddddddddddddddddddddd111111ddddddddd11111dddddddddddddddf11f111112111f11fddddddddddbbbddddddddddddddddddddddddddd
    ddddddddddddddddddddddddbbbddddddddddddddddddddddddddddddddddddddddd111111ddddddddddddddddddddddddddddddf111111f211111fdddddddddddbbbddddddddddddddddddddddddddd
    ddddddddddddddddddddddddbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf11111f21111fddddddddddddbbbddddddddddddddddddddddddddd
    ddddddddddddddddddddddddbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf111111111fdddddddddddddbbbddddddddddddddddddddddddddd
    ddddddddddddddddddddddddbbbddddddddddddddddddddfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffffffddddddddddddddbbbddddddddddddddddddddddddddd
    ddddddddddddddddddddddddbbbddddddddddddddddddffdffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbddddddddddddddddddddddddddd
    ddddddddddddddddddddddddbbbdddddddddddddddddfdddddffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbddddddddddddddddddddddddddd
    ddddddddddddddddddddddddbbbdddddddddddddddffddddddddffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbddddddddddddddddddddddddddd
    ddddddddddddddddddddddddbbbdddddddddddddffddddddddddddffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbddddddddddddddddddddddddddd
    ddddddddddddddddddddddddbbbddddddddddddfddddddddddddddddfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbddddddddddddddddddddddddddd
    ddddddddddddddddddddddddbbbddddddddddffddddddddddddddddddffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbddddddddddddddddddddddddddd
    ddddddddddddddddddddddddbbbdddddddddfddddddddddddddddddddddffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbddddddddddddddddddddddddddd
    ddddddddddddddddddddddddbbbdddddddffdddddddddddddddddddddddddffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbddddddddddddddddddddddddddd
    ddddddddddddddddddddddddbbbdddddffffffffffffffffffffffffffffffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbddddddddddddddddddddddddddd
    ddddddddddddddddddddddddbbbdddddf666666666666666666666666666666fddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbddddddddddddddddddddddddddd
    ddddddddddddddddddddddddbbbdddddf666666661666666661116666666666fddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbddddddddddddddddddddddddddd
    ddddddddddddddddddddddddbbbdddddf655566611116666111111166666666fddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbddddddddddddddddddddddddddd
    ddddddddddddddddddddddddbbbdddddf655566661116666111111166616666fddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbddddddddddddddddddddddddddd
    ddddddddddddddddddddddddbbbdddddf655566666666666666666666611666fddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbddddddddddddddddddddddddddd
    ddddddddddddddddddddddddbbbdddddf666666666666666666666666611666fddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbddddddddddddddddddddddddddd
    ddddddddddddddddddddddddbbbdddddf666666666677777666666666666666fddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbddddddddddddddddddddddddddd
    ddddddddddddddddddddddddbbbdddddf666666666677777776666666666666fddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbddddddddddddddddddddddddddd
    ddddddddddddddddddddddddbbbdddddf666666666677777777776666666666fddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbddddddddddddddddddddddddddd
    ddddddddddddddddddddddddbbbdddddf666666777777777777777777777777fddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbddddddddddddddddddddddddddd
    ddddddddddddddddddddddddbbbdddddf777777777777a77777777777777777fddddddddddddddddddddddddddddddddddddddddffddddddddddddddddddddddddbbbddddddddddddddddddddddddddd
    ddddddddddddddddddddddddbbbdddddf7777a77777777777777777777a7777fdddddddddddddddddddddddddddddddddddddddffffdddddddddddddddddddddddbbbddddddddddddddddddddddddddd
    ddddddddddddddddddddddddbbbdddddf7777777777777777a7777777777777fdddddddddddddddddddddddddddddddddddddffddddffdddddddddddddddddddddbbbddddddddddddddddddddddddddd
    ddddddddddddddddddddddddbbbdddddf77777777777a777777777777777777fdddddddddddddddddddddddddddddddddddffddddddddffdddddddddddddddddddbbbddddddddddddddddddddddddddd
    ddddddddddddddddddddddddbbbdddddf777777777777777777777777777777fdddddddddddddddddddddddddddddddddffddddddddddddfddddddddddddddddddbbbddddddddddddddddddddddddddd
    ddddddddddddddddddddddddbbbdddddffffffffffffffffffffffffffffffffdddddddddddddddddddddddddddddddffdddddddddddddddffddddddddddddddddbbbddddddddddddddddddddddddddd
    ddddddddddddddddddddddddbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffdddddddddddddddddddffddddddddddddddbbbddddddddddddddddddddddddddd
    ddddddddddddddddddddddddbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffffffffffffffffffffffffddddddddddddbbbddddddddddddddddddddddddddd
    ddddddddddddddddddddddddbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffffffffffffffffffffffffddddddddddddbbbddddddddddddddddddddddddddd
    ddddddddddddddddddddddddbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffffffffffffffffffffffffddddddddddddbbbddddddddddddddddddddddddddd
    ddddddddddddddddddddddddbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddff1ffffffffffffffffffffffffddddddddddddbbbddddddddddddddddddddddddddd
    ddddddddddddddddddddddddbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffff1fffffff1fffff1ffffffddddddddddddbbbddddddddddddddddddddddddddd
    ddddddddddddddddddddddddbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffdddffffffffffffffffffffffddddddddddddbbbddddddddddddddddddddddddddd
    ddddddddddddddddddddddddbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffdddffff1fffffffffffffffffddddddddddddbbbddddddddddddddddddddddddddd
    ddddddddddddddddddddddddbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffdddffffffffffff1ffff1ffffddddddddddddbbbddddddddddddddddddddddddddd
    ddddddddddddddddddddddddbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffffffffffffffffffffffffddddddddddddbbbddddddddddddddddddddddddddd
    ddddddddddddddddddddddddbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffffffffffffffffffffffffddddddddddddbbbddddddddddddddddddddddddddd
    ddddddddddddddddddddddddbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffffffffffffffffffffffffddddddddddddbbbddddddddddddddddddddddddddd
    ddddddddddddddddddddddddbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffffffffffffffffffffffffddddddddddddbbbddddddddddddddddddddddddddd
    ddddddddddddddddddddddddbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffffffffbbbbbfffffffffffddddddddddddbbbddddddddddddddddddddddddddd
    ddddddddddddddddddddddddbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffbbbbbbbbbbbbbbbbbbbbbbbfddddddddddddbbbddddddddddddddddddddddddddd
    ddddddddddddddddddddddddbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffbbbbbbbbbbbbbbbbbbbbbbffddddddddddddbbbddddddddddddddddddddddddddd
    ddddddddddddddddddddddddbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffffffffffffffffffffffffddddddddddddbbbddddddddddddddddddddddddddd
    ddddddddddddddddddddddddbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbddddddddddddddddddddddddddd
    ddddddddddddddddddddddddbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbddddddddddddddddddddddddddd
    ddddddddddddddddddddddddbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbddddddddddddddddddddddddddd
    ddddddddddddddddddddddddbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbddddddddddddddddddddddddddd
    ddddddddddddddddddddddddbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbddddddddddddddddddddddddddd
    ddddddddddddddddddddddddbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbddddddddddddddddddddddddddd
    ddddddddddddddddddddddddbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbddddddddddddddddddddddddddd
    ddddddddddddddddddddddddbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbddddddddddddddddddddddddddd
    ddddddddddddddddddddddddbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbddddddddddddddddddddddddddd
    ddddddddddddddddddddddddbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbddddddddddddddddddddddddddd
    ddddddddddddddddddddddddbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbddddddddddddddddddddddddddd
    ddddddddddddddddddddddddbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbddddddddddddddddddddddddddd
    ddddddddddddddddddddddddbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbddddddddddddddddddddddddddd
    ddddddddddddddddddddddddbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbddddddddddddddddddddddddddd
    ddddddddddddddddddddddddbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeddddddddddddddddddddddddddd
    ddddddddddddddddddddddddbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeddddddddddddddddddddddddddddddddddddddddeeeeddddddddddddddddddddddddddd
    ddddddddddddddddddddddddbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeddddddddddddddddddddddddddddddddddddddddeeeeddddddddddddddddddddddddddd
    ddddddddddddddddddddddddbbeeeddddddddddddddddddddddddddddeeedddddddddddddddddddddddddeeeeddddddddddddddddddddddddddddddddddddddddeeeeddddddddddddddddddddddddddd
    ddddddddddddddddddddddddbbeeedddeeeeeeeeeeeeeeeeeeeeeedddeeedddddddddddddddddddddddddeeeedddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeedddddeeeeddddddddddddddddddddddddddd
    ddddddddddddddddddddddddbbeeedddeeeeeeeeeeeeeeeeeeeeeedddeeedddddddddddddddddddddddddeeeedddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeedddddeeeeddddddddddddddddddddddddddd
    ddddddddddddddddddddddddbbeeedddeeeeeeeeeeeeeeeeeeeeeedddeeedddddddddddddddddddddddddeeeedddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeedddddeeeeddddddddddddddddddddddddddd
    ddddddddddddddddddddddddbbeeedddeeeeeeeeeeeeeeeeeeeeeedddeeedddddddddddddddddddddddddeeeedddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeedddddeeeeddddddddddddddddddddddddddd
    ddddddddddddddddddddddddbbeeedddeeeeeeeeeeeeeeeeeeeeeedddeeedddddddddddddddddddddddddeeeedddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeedddddeeeeddddddddddddddddddddddddddd
    ddddddddddddddddddddddddbbeeedddeeeeeeeeeeeeeeeeeeeeeedddeeedddddddddddddddddddddddddeeeedddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeedddddeeeeddddddddddddddddddddddddddd
    ddddddddddddddddddddddddbbeeedddeeeeeeeeeeeeeeeeeeeeeedddeeedddddddddddddddddddddddddeeeedddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeedddddeeeeddddddddddddddddddddddddddd
    ddddddddddddddddddddddddbbeeedddeeeeeeeeeeeeeeeeeeeeeedddeeedddddddddddddddddddddddddeeeedddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeedddddeeeeddddddddddddddddddddddddddd
    ddddddddddddddddddddddddbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedddddddddddddddddddddddddeeeedddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeedddddeeeeddddddddddddddddddddddddddd
    ddddddddddddddddddddddddbbeeeeeeeeedeeedddddddeeedeeeeeeeeeedddddddddddddddddddddddddeeeedddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeedddddeeeeddddddddddddddddddddddddddd
    ddddddddddddddddddddddddbbeeeeeeeeebeeebbbbbbbeeebeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddd
    ddddddddddddddddddddddddbbeeeeeeeeebeeebbbbbbbeeebeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddd
    dddddddddddddddddddddddbbbeeeeeeeeebeeebbbbbbbeeebeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebdddddddddddddddddddddddddd
    ddddddddddddddddddddddbbbbeeedddeeedeeedddddddeeedeeeeeeeeeedddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbddddddddddddddddddddddddd
    dddddddddddddddddddddbbbbbeeedddeeedeeedddddddeeedeeeedddeeedddddddddddddddddddddddddeeeeeeeeeeeeeeddeeedddddddddddddeeedeeeeeeeeeeeebbbdddddddddddddddddddddddd
    ddddddddddddddddddddbbbbbdeeedddeeedeeedddddddeeedeeeedddeeedddddddddddddddddddddddddeeeddddddddeeeddeeedddddddddddddeeedeeeddddddeeebbbbddddddddddddddddddddddd
    dddddddddddddddddddbbbbbddeeedddeeedddddddddddddddeeeedddeeedddddddddddddddddddddddddeeeddddddddeeeddeeedddddddddddddeeedeeeddddddeeebbbbbdddddddddddddddddddddd
    ddddddddddddddddddbbbbbdddeeedddeeedddddddddddddddeeeedddeeedddddddddddddddddddddddddeeeddddddddeeeddddddddddddddddddddddeeeddddddeeedbbbbbddddddddddddddddddddd
    ddddddddddddddddddbbbbddddeeedddeeedddddddddddddddeeeedddeeedddddddddddddddddddddddddeeeddddddddeeeddddddddddddddddddddddeeeddddddeeeddbbbbbdddddddddddddddddddd
    dddddddddddddddddbbbbdddddeeedddeeedddddddddddddddeeeedddeeedddddddddddddddddddddddddeeeddddddddeeeddddddddddddddddddddddeeeddddddeeedddbbbbbddddddddddddddddddd
    ddddddddddddddddbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeddddddddeeeddddddddddddddddddddddeeeddddddeeeddddbbbbbdddddddddddddddddd
    dddddddddddddddbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeddddddddeeeddddddddddddddddddddddeeeddddddeeedddddbbbbbddddddddddddddddd
    ddddddddddddddbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeddddddddeeeddddddddddddddddddddddeeeddddddeeeddddddbbbbbdddddddddddddddd
    dddddddddddddbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeddddddddeeeddddddddddddddddddddddeeeddddddeeedddddddbbbbbddddddddddddddd
    ddddddddddddbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeddddddddeeeddddddddddddddddddddddeeeddddddeeeddddddddbbbbbdddddddddddddd
    dddddddddddbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbddddddddddddd
    ddddddddddbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbdddddddddddd
    dddddddddbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbddddddddddd
    ddddddddbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbdddddddddd
    dddddddbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbddddddddd
    ddddddbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbdddddddd
    ddddddbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbddddddd
    dddddbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbdddddd
    ddddbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbddddd
    dddbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbdddd
    ddbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbddd
    dbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbdd
    bbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbd
    bbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbb
    bbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbb
    `)
let server = game.askForString("What drink would you like to have?")
if (customer == "Water") {
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
} else {
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
}
