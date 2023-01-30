controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    burger = sprites.create(img`
        ...........ccccc66666...........
        ........ccc4444444444666........
        ......cc444444444bb4444466......
        .....cb4444bb4444b5b444444b.....
        ....eb4444b5b44444b44444444b....
        ...ebb44444b4444444444b444446...
        ..eb6bb444444444bb444b5b444446..
        ..e6bb5b44444444b5b444b44bb44e..
        .e66b4b4444444444b4444444b5b44e.
        .e6bb444444444444444444444bb44e.
        eb66b44444bb444444444444444444be
        eb66bb444b5b44444444bb44444444be
        fb666b444bb444444444b5b4444444bf
        fcb666b44444444444444bb444444bcf
        .fbb6666b44444444444444444444bf.
        .efbb66666bb4444444444444444bfe.
        .86fcbb66666bbb44444444444bcc688
        8772effcbbbbbbbbbbbbbbbbcfc22778
        87722222cccccccccccccccc22226678
        f866622222222222222222222276686f
        fef866677766667777776667777fffef
        fbff877768f86777777666776fffffbf
        fbeffeefffeff7766688effeeeefeb6f
        f6bfffeffeeeeeeeeeeeeefeeeeebb6e
        f66ddfffffeeeffeffeeeeeffeedb46e
        .c66ddd4effffffeeeeeffff4ddb46e.
        .fc6b4dddddddddddddddddddb444ee.
        ..ff6bb444444444444444444444ee..
        ....ffbbbb4444444444444444ee....
        ......ffebbbbbb44444444eee......
        .........fffffffcccccee.........
        ................................
        `, SpriteKind.Player)
    burger.setPosition(120, 87)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    pizza = sprites.create(img`
        .............beebbbb............
        ............eebbbb4bb...........
        ............eb344bb4bb..........
        ............e44334bb4bb.........
        ............eb433344b4be........
        ............4eb43344444be.......
        ...........bd4eb43333344bb......
        ..........b455d4443333444bb.....
        ..........4d5555d444333444bb....
        .........4555555dd4b4443444be...
        ........bd5555d555d4bb444444ee..
        ........b55ddd665555bb4b44444ee.
        .......bd5555677655554ebb44444eb
        .......43222558855555d4eeb44b4ee
        ......b422332ddd555222d4eebbb4be
        ......be22232ed55522332db4ebbbbe
        .....bde22222e555e22232edd4bbbbe
        .....b52e222e3555e22222eddd4ebee
        ....bd552eee355552e222e355544eee
        ....665dd5555555552eee355dd4deee
        ...6776555555555555555551554d4ee
        ...4885222555dddd6655551544d4eee
        ..b45522332555dd677611d444ddeee.
        ..4d5222232e55555881d44ddd4eee..
        .bdd5e22222e555115114d54d4ee....
        .b55d2e222e351144d1d55eeee......
        bd5ddd2eee3d444555dd4e..........
        b555115dddd55d544eede...........
        4511d444d5544ee...4de...........
        41d4555d4ee........44...........
        41554eede.......................
        44ee...4e.......................
        `, SpriteKind.Player)
    pizza.setPosition(120, 87)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    scene.setBackgroundImage(img`
        eeeee2222222222222222222222222222222222ee2222ee2222ee2222222eeeee2222222222222222222222222222222222ee22222eeee222ee2eeeee2222222222222222222222222222222222ee222
        222eeeee22222222222222222222222222222eee2222eeee2222ee222222222eeeee22222222222222222222222222222eee2222eeeee222ee22222eeeee22222222222222222222222222222eee2222
        222222eeeeeee222222222222222222222eeee22222eeeeee2222eee2222222222eeeeeee222222222222222222222eeee22222eeee2222ee222222222eeeeeee222222222222222222222eeee22222e
        2222222222eeeeeee222222222eeeee222eeeee22222eeeeeeee222222222222222eeeeeeeeeeeeeeeeeee2222222222eeeeeeeee2222223eeeeeee222222eeeeeee2222222222222222eeeeeeeeeeee
        2222222222eeeeeee222222222eeeee222eeeee22222eeeeeeee222222222222222eeeeeeeeeeeeeeeeeee2222222222eeeeeeeee2222223eeeeeee222222eeeeeee2222222222222222eeeeeeeeeeee
        2222222222eeeeeee222222222eeeee222eeeee22222eeeeeeee222222222222222eeeeeeeeeeeeeeeeeee2222222222eeeeeeeee2222223eeeeeee222222eeeeeee2222222222222222eeeeeeeeeeee
        2222222222eeeeeee222222222eeeee222eeeee22222eeeeeeee222222222222222eeeeeeeeeeeeeeeeeee2222222222eeeeeeeee2222223eeeeeee222222eeeeeee2222222222222222eeeeeeeeeeee
        2222222eeeeee22222222222eeeee22222222eef2222222eeeeeeee2222222222222222222222222222222222222222eeee23333333333eeeee22222222eee22eeeeeeee222222222222222222222222
        22222222222222222222eeeee222222222eeeeeeffe2222222222eeeeeeeeeeeee222222222222222222233333333333333333333222eee22222222222eff222222222eeeeeeeeeeeee2222222222222
        22222222222222222222eeeee222222222eeeeeeffe2222222222eeeeeeeeeeeee222222222222222222233333333333333333333222eee22222222222eff222222222eeeeeeeeeeeee2222222222222
        2222222222222222eeeeee222222222eeeeeeeeeeeffee2222222222222eeeeeeeeeeeee2222222233333333333333332222222eeeeee2223332222eeffeee2222223322222eeeeeeeeeeeeee2222222
        222222222222eeeee2222222222eeeeeeeeeeee2222efffffeee2222222222222222222222222222222222222222222222eeeeeee22233332eeffffffe222eeeeeee2233333222222222222222222222
        2222222222222222222222222eeeeeeeeeeeee222222eeeffffff2222222222222222222222222222222222222222222222333333333332effffffeee22222eeeeeeeee2223333333333333333333333
        2222222222222222222222222eeeeeeeeeeeee222222eeeffffff2222222222222222222222222222222222222222222222333333333332effffffeee22222eeeeeeeee2223333333333333333333333
        222222222222222222eeeeeeeee2222222222222eeeeeee22222ffffeee22222222222222333333333333333333333333333333332eeeffff22222eeeeeee2222222eeeeeee223333333333333333333
        222222222222eeeeeeeeee222222222222222eeeeee222222ffffeefffffffffffee2222222222222222233333333333332fffffffffffeefff2222222eeeeee2222222222eeeeeeeeeee22222222222
        eeeeeeeeeeeeee222eeeeeeeeeeee22222eeeee22222222fffffeeeeeeeeeeeeeefffffffffffffffffffffffffffffffffeeeeeeeeeeeeeefffff2222222eeeee222222eeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeee222eeeeeeeeeeee22222eeeee22222222fffffeeeeeeeeeeeeeefffffffffffffffffffffffffffffffffeeeeeeeeeeeeeefffff2222222eeeee222222eeeeeeeeeeeeeeeeeeeeeeee
        22222eeeeeee222222222222222222222222222effffeeeeeeeeeeeeeeeeeeeeeeeeee22eeeeeeeeeeeeeeeeeeeeeeeeee2eeeeeeeeeeeeeeeeeeeeeeffff2222222222222222222222222222eeeeeee
        2222222eeeeeeeeeee2222222222222eeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeeee2222222222eeeeeeeeeeeeeee2222eeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeee2222222222222eeeeeeeeeee22
        2222222eeeeeeeeeee2222222222222eeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeeee2222222222eeeeeeeeeeeeeee2222eeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeee2222222222222eeeeeeeeeee22
        2222222eeeeeeeeeeeeeeeeeeeeeeefffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee22222222222222222222222222222eeee22eeeeeeeeeeeeeeeeeeeeeeefffffffeeeeeeeeeeeeeeeeeeeeeee22
        2222222eee222222efffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee22222222222222222222222222222eeee222eeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffe22222eeee22
        2222222eee222222efffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee22222222222222222222222222222eeee222eeeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffe22222eeee22
        2222222eee222222eeeeee22efffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee22ee22222222222222222222222222222e222222eeeeeeeeeeeeeeeeeeeeeefffffffffffee2eeeeeee22222eeee22
        2222222eee222222eeeeee22efffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee22ee22222222222222222222222222222e222222eeeeeeeeeeeeeeeeeeeeeefffffffffffee2eeeeeee22222eeee22
        22222eeee2222222ee2222eeeffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee22ee22222222222222222222222222222e222222eeeeeeeeeeeeeeeeeeeeeefffffffffffeee22222ee222222eeeee
        2222eeeee2222222ee2222eefffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee22ee22222222222222222222222222222e222222eeeeeeeeeeeeeeeeeeeeeefffffffffffffe22222ee222222eeeee
        2222eee222222222e222eeeefffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee22ee22222222222222222222222222222e222222eeeeeeeeeeeeeeeeeeeeeefffffffffffffeeee222e222222222ee
        222ee222222222eee222eefffffffffffeeeeeeeeeeeeeeeeeeeeeeeeee2eeeeee22ee22222222222222222222222222222e222222eeeee2eeeeeeeeeeeeeeeeeeffffffffffffeee222eee222222222
        222ee222222222eee222eefffffffffffeeeeeeeeeeeeeeeeeeeeeeeeee2eeeeee22ee22222222222222222222222222222e222222eeeee2eeeeeeeeeeeeeeeeeeffffffffffffeee222eee222222222
        222ee222222222ee22eeeefffffffffffeeeeeeeeeeeeeeeeeeeeeeeeee2eeeeee22ee22222222222222222222222222222e22222222eee2eeeeeeeeeeeeeeeeeeffffffffffffeeeee22ee222222222
        2eee22222222ee222eeefffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeee2eeeee222e2222222222222222222222222222222eee22222eee2eeeeeeeeeeeeeeeeeefffffffffffffffee3222ee2222222
        2eee22222222ee222eeefffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeee2eeeee222e2222222222222222222222222222222eee22222eee2eeeeeeeeeeeeeeeeeefffffffffffffffee3222ee2222222
        eee222222222ee22eeeefffffffffffeeeeeeeeeeeeeeeeeeeeeeeeee222eeeee222e2222222222222222222222222222222eee22222eee2eeeeeeeeeeeeeeeeeefffffffffffffffee3e22ee2222222
        e222222222eee222eefffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeee222eeeee222e2222222222222222222222222222222eee22222eee22eeeeeeeeeeeeeeeeeeefffffffffffffffe3222ee222222
        e22222222eee22eeeffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeee222eeeee222e2222222222222222222222222222222eee22222eeee2eeeeeeeeeeeeeeeeeeeffffffffffffffff33322ee22222
        e22222222eee22eeeffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeee222eeeee222e2222222222222222222222222222222eee22222eeee2eeeeeeeeeeeeeeeeeeeffffffffffffffff33322ee22222
        222222222eee32eeeffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeee222eeeee222e2222222222222222222222222222222eee222222eee2eeeeeeeeeeeeeeeeeeeffffffffffffffffe3332ee22222
        2222222eee332eeefffffffffefffffeeeeeeeeeeeeeeeeeeeeeeeeee222eeeee222e2222222222222222222222222222222eee222222eee2eeeeeeeeeeeeeeeeeeefffffffffffffffff33322eeee22
        22222eeee233eeeefffffffffefffffeeeeeeeeeeeeeeeeeeeeeeeeee222eeeee222e2222222222222222222222222222222eee222222eee2eeeeeeeeeeeeeeeeeeefffffffffffffffffee3322eeeee
        22222eeee233eeeefffffffffefffffeeeeeeeeeeeeeeeeeeeeeeeeee222eeeee222e2222222222222222222222222222222eee222222eee2eeeeeeeeeeeeeeeeeeefffffffffffffffffee3322eeeee
        22222eeee322eefffffffffffeffffeeeeeeeeeeeeeeeeeeeeeeeeeee222eeeee222e2222222222222222222222222222222eee222222eee2eeeeeeeeeeeeeeeeeeeeefffffffffffffffffe332eeeee
        22222eeee322eefffffffffffeffffeeeeeeeeeeeeeeeeeeeeeeeeeee222eeeee222e2222222222222222222222222222222eee222222eee2eeeeeeeeeeeeeeeeeeeeefffffffffffffffffe332eeeee
        2222eee333eeeefffffffffffeffffeeefeeeeeeeeeeeeeeeeeeeeee2222eeeee22ee2222222222222222222222222222222eee222222eee222eeeeeeeeeeeeeeeeeeefffffffffffffffffe332222ee
        2222eee333eeeefffffffffffeffffeeefeeeeeeeeeeeeeeeeeeeeee2222eeeee22ee2222222222222222222222222222222eee222222eee222eeeeeeeeeeeeeeeeeeefffffffffffffffffe332222ee
        222ee3333eeeefffffffffffffffffeeefeeeeeeeeeeeeeeeeeeeeee222eeeeee22ee2222222222222222222222222222222eee222222eee222eeeeeeeeeeeeeeeeeeeffffffffffffffffffe3322222
        2eeee3333eeeffffffffffffefffffeeefeeeeeeeeeeeeeeeeeeeeee222eeeeee22ee2222222222222222222222222222222eee222222eee222eeeeeeeeeeeeeeeeeeefefffffffffffffffffe333322
        2eee333eeeeeffffffffffffefffffeeefeeeeeeeeeeeeeeeeeeeeee222ee222222ee2222222222222222222222222222222eee222222eee222eeeeeeeeeeeeeeeeeeefefffffefffffffffffe333333
        eee33eeeeeffffffffffffffefffffeeefeeeeeeeeeeeeeeeeeeeeee222ee222222e22222222222222222222222222222222eee222222eee222eeeeeeeeeeeeeeeeeeeeefffffeffffffffffffe33333
        eee33eeeeeffffffffffffffefffffeeefeeeeeeeeeeeeeeeeeeeeee222ee222222e22222222222222222222222222222222eee222222eee222eeeeeeeeeeeeeeeeeeeeefffffeffffffffffffe33333
        e3333eeeefffffffffffffffeffffeeeeeeeeeeeeeeeeeeeeeeeeeee222ee222222e22222222222222222222222222222222eee222222eee222eeeeeeeeeeeeeeeeeeeeeeefffefffffffffffffeee33
        e333eeeeefffffffffffffffeffffeeeeeeeeeeeeeeeeeeeeeeeeeee222ee222222e22222222222222222222222222222222eee2222222ee222eeeeeeeeeeeeeeeeeeeeeeefffefffffffffffffeeeee
        333eeeefffffffffffffffffeffffeeffeeeeeeeeeeeeeeeeeeeeeee222ee222222e22222222222222222222222222222222eeeee22222eee22eeeeeeeeeeeeeeeeeeeeeeefffeffffffffffffffffee
        333eeeefffffffffffffffffeffffeeffeeeeeeeeeeeeeeeeeeeeeee222ee222222e22222222222222222222222222222222eeeee22222eee22eeeeeeeeeeeeeeeeeeeeeeefffeffffffffffffffffee
        3eeeefffffffffffffffffeeeffffeeffeeeeeeeeeeeeeeeeeeeeee2222ee222222e22222222222222222222222222222222eeeee22222eee22222eeeeeeeeeeeeeeeeeeeeffffeeefffffffffffffff
        3eeeffffffffffffffffffeeeffffeeffeeeeeeeeeeeeeeeeeeeeee22eeee222222e22222222222222222222222222222222eeeee22222eee22222eeeeeeeeeeeeeeeeeeeeefffeeefffffffffffffff
        eeeeffffffffffffffffffeeeffffeeffeeeeeeeeeeeeeeeeeeeeee22eee2222222e22222222222222222222222222222222eeeee22222eee22222eeeeeeeeeeeeeeeeeeeeefffeeefffffffffffffff
        eeeeffffffffffffffffffeeeffffeeffeeeeeeeeeeeeeeeeeeeeee22eee2222222e22222222222222222222222222222222eeeee22222eee22222eeeeeeeeeeeeeeeeeeeeefffeeefffffffffffffff
        eeefffffffffffffffffffeeeffffeeffeeeeeeeeeeeeeeeeeeeeee22eee2222222e22222222222222222222222222222222eeeee22222eee22222eeeeeeeeeeeeeeeeeeeeefffeeefffffffffffffff
        ffffffffffffffffffffffeefffeeefeeeeeeeeeeeeeeeeeeeeeeee22eee2222222222222222222222222222222222222222eeeee22222eee22222eeeeeeeeeeeeeeeeeeeeefffeeeeefffffffffffff
        ffffffffffffffffffffffeefffeeefeeeeeeeeeeeeeeeeeeeeeeee22eee2222222222222222222222222222222222222222eeeee22222eee22222eeeeeeeeeeeeeeeeeeeeefffeeeeefffffffffffff
        ffffffffffffffffffffffeefffeeefeeeeeeeeeeeeeeeeeeeeeeee22eee2222222222222222222222222222222222222222eeeee22222eee22222eeeeeeeeeeeeeeeeeeeeefffeeeeefffffffffffff
        ffffffffffffffffffffeeeefffeeefeeeeeeeeeeeeeeeeeeeeee2222eee2222222222222222222222222222222222222222222ee22222eee22222eeeeeeeeeeeeeeeeeeeeefffeeeeefffffffffffff
        ffffffffffffffffffffeeeefffeeefeeeeeeeeeeeeeee2eeeeee2222eee2222222222222222222222222222222222222222222ee22222eee22222eeeeeeeeeeeeeeeeeeeeefffeeeeefffffffffffff
        ffffffffffffffffffffeeeefffeeefeeeeeeeeeeeeeee2eeeeee222eeee2222222222222222222222222222222222222222222ee22222eee22222eeeeeeeeeeeeeeeeeeeeeffffffeefffffffffffff
        ffffffffffffffffffffeeeefffeeefeeeeeeeeeeeeeee2eeeeee222eeee2222222222222222222222222222222222222222222ee22222eee22222eeeeeeeeeeeeeeeeeeeeeffffffeefffffffffffff
        ffffffffffffffffffffeeeefffeeefeeeeeeeeeeeeeeeeeeeeee222eeee2222222222222222222222222222222222222222222ee22222eeeee222eeeeeeeeeeeeeeeeeeeeeffffffeeeffffffffffff
        ffffffffffffffffffffeeeefffeeefeeeeeeeeeeeee22eeeeeee222eee22222222222222222222222222222222222222222222ee222222eeee2222eeeeeeeeeeeeeeeeeeeeeeffffeeeffffffffffff
        ffffffffffffffffffffeeeeffeeefeeeeeeeeeeeeee22eeeeeee222eee22222222222222222222222222222222222222222222ee222222eeee2222eeeeeeeeeeeeeeeeeeeeeeffffeeeffffffffffff
        ffffffffffffffffffffeeeeffeeefeeeeeeeeeeeeee22eeeeeee222eee22222222222222222222222222222222222222222222ee222222eeee2222eeeeeeeeeeeeeeeeeeeeeeffffeeeffffffffffff
        ffffffffffffffffffeeeeffffeeefeeeeeeeeeeeeee22eeeeeee222eee22222222222222222222222222222222222222222222ee222222eeee2222eeeeeeeeeeeeeeeeeeeeeeffffeeeffffffffffff
        ffffffffffffffffffeeeeffffeeefeeeeeeeeeeeeee22eeeeeee222eee22222222222222222222222222222222222222222222ee222222eeee2222eeeeeeeeeeeeeeeeeeeeeeffffffeffffffffffff
        ffffffffffffffffffeeeeffffeeefeeeeeeeeeeeeee22eeeeeee222eee22222222222222222222222222222222222222222222ee222222eeee2222eeeeeeeeeeeeeeeeeeeeeeffffffeefffffffffff
        ffffffffffffffffffeeeeffffeeefeeeeeeeeeeeee222eeeeeee222eee22222222222222222222222222222222222222222222ee222222eeee2222eeeeeeeeeeeeeeeeeeeeeeffffffeefffffffffff
        ffffffffffffffffffeeeeffffeeefeeeeeeeeeeeee2eeeeeeeee22eeee2222222222222222222222222222222222222222222222222222eeee2222eeeeeeeeeeeeeeeeeeeeeeefffffeefffffffffff
        ffffffffffffffffffeeeeffffeffeeeeeeeeeeeeee2eeeeeeeee22ee222222222222222222222222222222222222222222222222222222eeee2222eeeeeeeeeeeeeeeeeeeeeeefffffeefffffffffff
        fffffffffffffffffeeeffffffeffeeeeeeeeeeeeee2eeeeeeee222ee222222222222222222222222222222222222222222222222222222eeee2222eeeeeeeeeeeeeeeeeeeeeeeffffffefffffffffff
        fffffffffffffffffeeeffffffeffeeeeeeeeeeeeee2eeeeeeee222ee222222222222222222222222222222222222222222222222222222eeee2222eeeeeeeeeeeeeeeeeeeeeeeffffffefffffffffff
        fffffffffffffffffeeeffffffeffeeeeeeeeeeeee22eeeeeeee222ee222222222222222222222222222222222222222222222222222222eeee222222eeeeeeeeeeeeeeeeeeeeeffffffeeefffffffff
        fffffffffffffffffeeefffffeeffeeeeeeeeeeeee22eeeeeeee222ee222222222222222222222222222222222222222222222222222222eeee222222eeeeeeeeeeeeeeeeeeeeeffffffeeefffffffff
        fffffffffffffffffeeefffffeeffeeeeeeeeeeeee22eeeeeeee222ee222222222222222222222222222222222222222222222222222222eeeeeee222e2eeeeeeeeeeeeeeeeeeeffffffeeefffffffff
        fffffffffffffffffeeefffffeeffeeeeeeeeeeeee22eeeeeeee222ee222222222222222222222222222222222222222222222222222222eeeeeee222e2eeeeeeeeeeeeeeeeeeeffffffeeefffffffff
        fffffffffffffffffeeefffffeeffeeeeeeeeeeeee22eeeeeeee222ee222222222222222222222222222222222222222222222222222222eeeeeee222e2eeeeeeeeeeeeeeeeeeeffffffeeefffffffff
        fffffffffffffffffeeefffffeeffeeeeeeeeeeeee22eeeeeeee222ee222222222222222222222222222222222222222222222222222222eeeeeee222e2eeeeeeeeeeeeeeeeeeeffffffeeefffffffff
        fffffffffffffffffeeefffffefeeeeeeeeeeeeeee2eeeeeeeee222ee222222222222222222222222222222222222222222222222222222eeeeeee222eeeeeeeeeeeeeeeeeeeeeeeefffeeefffffffff
        ffffffffffffffffeeeefffffefeeeeeeeeeeeeeee2eeeeee2222eeee2222eeee2222222222222222222222222222222222222222222222eeeeeee222ee22eeeeeeeeeeeeeeeeeeeeffffeeeffffffff
        ffffffffffffffffeeeefffffefeeeeeeeeeeeeeee2eeeeee2222eeee2222eeee2222222222222222222222222222222222222222222222eeeeeee222ee22eeeeeeeeeeeeeeeeeeeeffffeeeffffffff
        ffffffffffffffffeefffffffefeeeeeeeeeeeee222eeeeee2222eee22222eeee2222222222222222222222222222222222222222222222eeeeeee222ee22eeeeeeeeeeeeeeeeeeeeffffeeeffffffff
        ffffffffffffffffeefffffffefeeeeeeeeeeeee222eeeeee2222eee22222eeee2222222222222222222222222222222222222222e222222eeeeee222ee22eeeeeeeeeeeeeeeeeeeeffffeeeffffffff
        ffffffffffffffffeefffffffefeeeeeeeeeeeee222eeeeee2222eee22222eeee2222222222222222222222222222222222222222e222222eeeeee222ee22eeeeeeeeeeeeeeeeeeeeffffeeeffffffff
        ffffffffffffffffeefffffffeeeeeeeeeeeeeee222eeeeee2222eee22222eeee2222222222222222222222222222222222222222e222222eeeeee222ee22eeeeeeeeeeeeeeeeeeeeeeffeeeffffffff
        ffffffffffffffffeefffffffeeeeeeeeeeeeeee22eeeeeee2222eee22222eeee2222222222222222222222222222222222222222e222222eeeeee2222e22eeeeeeeeeeeeeeeeeeeeeeffffeefffffff
        ffffffffffffffeeeeffffffeeeeeeeeeeeeeee222eeeee222222eee22222eeee2222222222222222222222222222222222222222e222222eeeeee2222e22eeeeeeeeeeeeeeeeeeeeeeffffeefffffff
        ffffffffffffffeeefffffffeeeeeeeeeeeeeee222eeeee222222ee222222eeee2222222222222222222222222222222222222222e222222eeeeee2222eeeeeeeeeeeeeeeeeeeeeeeeeffffeefffffff
        ffffffffffffffeeefffffffeeeeeeeeeeeeeee222eeeee222222ee222222eeee2222222222222222222222222222222222222222e222222eeeeee2222eeeeeeeeeeeeeeeeeeeeeeeeeffffeefffffff
        ffffffffffffffeeefffffffeeeeeeeeeeeeeee222eeeee222222ee222222eeee2222222222222222222222222222222222222222e222222eeeeeee222eeeeeeeeeeeeeeeeeeeeeeeeeefffeefffffff
        ffffffffffffffeeefffffffeeeeeeeeeeeeeee222eeeee222222ee222222eeee2222222222222222222222222222222222222222e222222eeeeeee222eeeeeeeeeeeeeeeeeeeeeeeeeeffffeeffffff
        ffffffffffffffeeefffffffeeeeeeeeeeeeee22eeeeeee222222ee22222eeeee2222222222222222222222222222222222222222e222222eeeeeee222eeeeeeeeeeeeeeeeeeeeeeeeeeffffeeffffff
        ffffffffffffffeeefffffffeeeeeeeeeeeeee22eeeeeee222222ee22222eeeee2222222222222222222222222222222222222222e222222eeeeeee222eeeeeeeeeeeeeeeeeeeeeeeeeeffffeeffffff
        ffffffffffffffeeefffffffeeeeeeeeeeeeee22eeeeee2222222ee22222eeeee2222222222222222222222222222222222222222e222222eeeeeee222eee2eeeeeeeeeeeeeeeeeeeeeeffffeeffffff
        fffffffffffffeeeefffffffeeeeeeeeeeeeee22eeeeee2222222ee22222eeeee2222222222222222222222222222222222222222e222222eeeeeee222eee2eeeeeeeeeeeeeeeeeeeeeeffffeeffffff
        fffffffffffffeeeefffffffeeeeeeeeeeeeee22eeeeee2222222ee22222eeeee2222222222222222222222222222222222222222e222222eeeeeee222eee2eeeeeeeeeeeeeeeeeeeeeeffffeeffffff
        fffffffffffffeeeffffffffeeeeeeeeeeeeee22eeeeee2222222ee22222eeeee2222222222222222222222222222222222222222e222222eeeeeee2222ee2eeeeeeeeeeeeeeeeeeeeeefffffeefffff
        fffffffffffffeeeffffffffeeeeeeeeeeeee22eeeeeee2222222ee22222eeeee2222222222222222222222222222222222222222e222222eeeeeee2222ee2eeeeeeeeeeeeeeeeeeeeeffffffeefffff
        fffffffffffffeeeffffffffeeeeeeeeeeeee22eeeee2222222222222222eeeee2222222222222222222222222222222222222222eee2222eeeeeee2222ee2eeeeeeeeeeeeeeeeeeeeeefffffeefffff
        fffffffffffffeeeffffffeeeeeeeeeeeeeee22eeeee2222222222222222eeeee2222222222222222222222222222222222222222eee2222eeeeeeeee22ee2eeeeeeeeeeeeeeeeeeeeeeffffffefffff
        fffffffffffffeeeffffffeeeeeeeeeeeeeee22eeeee2222222222222222eeeee2222222222222222222222222222222222222222eee2222eeeeeeeee22ee2eeeeeeeeeeeeeeeeeeeeeeffffffefffff
        fffffffffffffeeeffffffeeeeeeeeeeeeeee22eeeee2222222222222222eeeee2222222222222222222222222222222222222222eee2222eeeeeeeee22ee222eeeeeeeeeeeeeeeeeeeeffffffefffff
        fffffffffffffeffffffffeeeeeeeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeffffffffffff
        fffffffffffffeffffffffeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeefffffffffff
        fffffffffffffeffffffffeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeefffffffffff
        fffffffffffffeffffffffeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeefffffffffff
        ffffffffffffffffffffffeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeefffffffffff
        ffffffffffffffffffffffeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeefffffffff
        ffffffffffffffffffffffeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeefffffffff
        ffffffffffffffffffffffeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeefffffffff
        ffffffffffffffffffffeeeeeeeeeeeefeeeeeeeeeefffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffeeeeeeeeeeeeeefeeeeeeeeeeeeeffffffffffff
        ffffffffffffffffffffeeeeeeeeeeeefffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeffffffeeeeee
        ffffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeefffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffffffee222eeeeeeeeeeeeeeeeeeeeeeeffffffeeeeee
        `)
    server = sprites.create(img`
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        .......................................fffffffffffffffffff..........................................
        .......................................fffffffffffffffffff..........................................
        .......................................fffffffffffffffffff..........................................
        .......................................fffffffffffffffffff..........................................
        .......................................fffffffffffffffffff..........................................
        ..............................ffffffffffffffffffffffffffffffffffffff................................
        ..............................ffffffffffffffffffffffffffffffffffffff................................
        ..............................ffffffffffffffffffffffffffffffffffffff................................
        ..............................ffffffffffffffffffffffffffffffffffffff................................
        .........................fffffffffffffffffffffffffffccccccffffffffffffff............................
        .........................fffffffffffffffffffffffffffccccccffffffffffffff............................
        .........................fffffffffffffffffffffffffffccccccffffffffffffff............................
        .........................fffffffffffffffffffffffffffccccccffffffffffffff............................
        .........................fffffffffffffffffffffffffffccccccffffffffffffff............................
        ...................fffffffffffffffffffffffffffffccccccccccffffffffffffffcccc........................
        ...................fffffffffffffffffffffffffffffccccccccccffffffffffffffcccc........................
        ...................fffffffffffffffffffffffffffffccccccccccffffffffffffffcccc........................
        ...................fffffffffffffffffffffffffffffccccccccccffffffffffffffcccc........................
        ...................fffffffffffffffffffffffffffffccccccccccffffffffffffffcccc........................
        ...................fffffffffffffffcccccfffffffffffffffffffffffffffffffffcccc........................
        ...................fffffffffffffffcccccfffffffffffffffffffffffffffffffffcccc........................
        ...................fffffffffffffffcccccfffffffffffffffffffffffffffffffffcccc........................
        ...................fffffffffffffffcccccfffffffffffffffffffffffffffffffffcccc........................
        ...................fffffffffffffffcccccfffffffffffffffffffffffffffffffffcccc........................
        ...................cccccccccccccccffffffffffffffeeeeeeeeeeffffffffffcccccccc........................
        ...................cccccccccccccccffffffffffffffeeeeeeeeeeffffffffffcccccccc........................
        ...................cccccccccccccccffffffffffffffeeeeeeeeeeffffffffffcccccccc........................
        ...................cccccccccccccccffffffffffffffeeeeeeeeeeffffffffffcccccccc........................
        ...................ffffffffffffffffffffffffeeeeeeeeefffffffffffcccccccccffff........................
        ...................ffffffffffffffffffffffffeeeeeeeeefffffffffffcccccccccffff........................
        ...................ffffffffffffffffffffffffeeeeeeeeefffffffffffcccccccccffff........................
        ...................ffffffffffffffffffffffffeeeeeeeeefffffffffffcccccccccffff........................
        ...................ffffffffffffffffffffffffeeeeeeeeefffffffffffcccccccccffff........................
        ...................ffffffffffffffffffffffffeeeeeeeeefffffffffffcccccccccffff........................
        ...................fffffffffffffffbbbbbffffeeeeeeeeeffffffbbbbbfffffffffffff........................
        ...................fffffffffffffffbbbbbffffeeeeeeeeeffffffbbbbbfffffffffffff........................
        ...................fffffffffffffffbbbbbffffeeeeeeeeeffffffbbbbbfffffffffffff........................
        ...................fffffffffffffffbbbbbffffeeeeeeeeeffffffbbbbbfffffffffffff........................
        .........................fffff444411111ffff444444444ffffff1111144444ffff............................
        .........................fffff444411111ffff444444444ffffff1111144444ffff............................
        .........................fffff444411111ffff444444444ffffff1111144444ffff............................
        .........................fffff444411111ffff444444444ffffff1111144444ffff............................
        .........................fffff444411111ffff444444444ffffff1111144444ffff............................
        .........................fffffeeee44444444444444444444444444444eeeeeffff............................
        .........................fffffeeee44444444444444444444444444444eeeeeffff............................
        .........................fffffeeee44444444444444444444444444444eeeeeffff............................
        .........................fffffeeee44444444444444444444444444444eeeeeffff............................
        .........................fffffeeee44444444444444444444444444444eeeeeffff............................
        .........................ffffffffffffffeeeeeeeeeeeeeeeeeeeffffffffffffff............................
        .........................ffffffffffffffeeeeeeeeeeeeeeeeeeeffffffffffffff............................
        .........................ffffffffffffffeeeeeeeeeeeeeeeeeeeffffffffffffff............................
        .........................ffffffffffffffeeeeeeeeeeeeeeeeeeeffffffffffffff............................
        .........................ffffffffffffffeeeeeeeeeeeeeeeeeeeffffffffffffff............................
        ...................ffffffeeeeeffffbbbbb7777777777777777777bbbbbfffffeeeeffff........................
        ...................ffffffeeeeeffffbbbbb7777777777777777777bbbbbfffffeeeeffff........................
        ...................ffffffeeeeeffffbbbbb7777777777777777777bbbbbfffffeeeeffff........................
        ...................ffffffeeeeeffffbbbbb7777777777777777777bbbbbfffffeeeeffff........................
        ...................ffffffeeeeeffffbbbbb7777777777777777777bbbbbfffffeeeeffff........................
        ...................eeeeee44444ffff77777777777777777777777777777fffff4444eeee........................
        ...................eeeeee44444ffff77777777777777777777777777777fffff4444eeee........................
        ...................eeeeee44444ffff77777777777777777777777777777fffff4444eeee........................
        ...................eeeeee44444ffff77777777777777777777777777777fffff4444eeee........................
        ...................eeeeeeeeeeeffff66666666666666666666666666666fffffeeeeeeee........................
        ...................eeeeeeeeeeeffff66666666666666666666666666666fffffeeeeeeee........................
        ..............................ffff6666666666666666666666666666......................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        `, SpriteKind.Player)
    server.setPosition(80, 87)
    pause(1000)
    server.sayText("Would you like pizza or burger?\"")
})
function reservaition (question: string) {
    server.sayText(question)
    pause(2000)
    customer.sayText(game.askForString("Name"))
    pause(2000)
    server.sayText("okay follow me!")
    server.setVelocity(100, 0)
    customer.follow(server)
}
let pizza: Sprite = null
let burger: Sprite = null
let mySprite: Sprite = null
let customer: Sprite = null
let server: Sprite = null
scene.setBackgroundImage(img`
    eeeee2222222222222222222222222222222222ee2222ee2222ee2222222eeeee2222222222222222222222222222222222ee22222eeee222ee2eeeee2222222222222222222222222222222222ee222
    222eeeee22222222222222222222222222222eee2222eeee2222ee222222222eeeee22222222222222222222222222222eee2222eeeee222ee22222eeeee22222222222222222222222222222eee2222
    222222eeeeeee222222222222222222222eeee22222eeeeee2222eee2222222222eeeeeee222222222222222222222eeee22222eeee2222ee222222222eeeeeee222222222222222222222eeee22222e
    222222222eeeeeeeeeeeeee2222222eeeee222222eeee22eee2222eeee22222222222eeeeeeeeeeeeee2222222eeeee222223eeee22222eeee22222222222eeeeeeeeeeeeee2222222eeeee222222eee
    e222222222222222222222222222eeee2222222eeee22222eef22222eeeee222222222222222222222222222eeee2333333eeee22222efe2eeeee222222222222222222222222222eeee2222222eeee2
    eeeeeeee22222222222222222222222222222eee2222222eeeefe222222eeeeeeeee22222222222222333333333333322eee2222222efe22222eeeeeeeee22222222222222222222222222222eee2222
    2222eeeeeeeee222222222222222222222eeee2222222eeeeeeeffe222222222eeeeeeeee222223333333333322222eeee2223322effeee222322222eeeeeeeee222222222222222222222eeee222222
    2223322222222222222222222222222eeee2222222eeeeeeee222efffe222222222222222222222222222222222eeee2233332efffe22eeeee233333222222222222222222222222222eeee2222222ee
    2222233332222222222222222222222222222222eeeeeeeee22222eefffe2222222222222222222222222222222233333332efffee22222eeeee2233333333333333333332222222222222222222eeee
    eeee22233333333333333332222222222222eeeeee222222222eeeee22ffffee22222222223333333333333333333332eeffff22eeeee22222eeeeee23333333333333222222222222222222eeeeeeee
    eeeeeeeeee233333333332222222222eeeeeee2222222222eeeee2222ffeefffffffee2222222222223333333332fffffffeeff2222eeeee222222eeeeeeee222222222222222222222eeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee22eeeeeeee2222eee222222ffeeeeeeeeeeffffffffffffffffffffffffeeeeeeeeeeff222222eee2222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeee22222222222222ee22222222222222222222222222effeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffe22222222222222222222222222ee22222222222222eeeeeeeeeee
    eeeeeeeeee22222222222222222eeee2222222222222222222efffeeeeeeeeeeeeeeeeee2eeeeeeeeeeeeeeeeee2eeeeeeeeeeeeeefffe2222222222222222222eeee22222222222222222eeeeeeeeee
    eeeeeeeeee222222222222222222eeeeeeee222222222eeefffeeeeeeeeeeeeeeeeeeeee222222eeeeeeeeee2222eeeeeeeeeeeeeeeeefffeee222222222eeeeeeee222222222222222222eeeeeeeeee
    eeeeeeeee2222222222222222222eeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeee22222222222222222222ee2eeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeee2222222222222222222eeeeeeeee
    eeeeeeeee2222222222222222222ee2222effffffffffffeeeeeeeeeeeeeeeeeeeeeeeee22222222222222222222ee22eeeeeeeeeeeeeeeefffffffffffffe2222ee2222222222222222222eeeeeeeee
    eeeeeeee22e22222222222222222ee2222eeee2efffffffeeeeeeeeeeeeeeeeeeeee22ee22222222222222222222e222eeeeeeeeeeeeeeeeffffffffe2eeee2222ee22222222222222222e22eeeeeeee
    eeeeeeee2222222222222222222ee22222ee22eeffffffeeeeeeeeeeeeeeeeeeeeee22ee22222222222222222222e222eeeeeeeeeeeeeeeeffffffffee22ee22222ee2222222222222222222eeeeeeee
    eeeeeeee2e2222222222222222eee22222ee22efffffffeeeeeeeeeeeeeeeeeeeeee22ee22222222222222222222e222eeeeeeeeeeeeeeeefffffffffe22ee22222eee2222222222222222e2eeeeeeee
    eeeeeee22e2222222222222222ee222222e22eefffffffeeeeeeeeeeeeeeeeeeeeee22ee22222222222222222222e222eeeeeeeeeeeeeeeefffffffffee22e222222ee2222222222222222e22eeeeeee
    eeeeeee22e222222222222222ee222222ee22effffffffeeeeeeeeeeeeeeeeee2eee22ee22222222222222222222e222eeee2eeeeeeeeeeeefffffffffe22ee222222ee222222222222222e22eeeeeee
    eeeeee22e2222222222222222ee222222e22eeffffffffeeeeeeeeeeeeeeeeee2eee22ee22222222222222222222e2222eee2eeeeeeeeeeeefffffffffee22e222222ee2222222222222222e22eeeeee
    eeeeee22e222222222222222ee222222ee2eeeffffffffeeeeeeeeeeeeeeeeee2ee222e222222222222222222222e2222eee2eeeeeeeeeeeefffffffffe3e2ee222222ee222222222222222e22eeeeee
    eeeee22ee222222222222222ee22222ee22eefffffffffeeeeeeeeeeeeeeeeee2ee222e2222222222222222222222e222eee2eeeeeeeeeeeeffffffffffe322ee22222ee222222222222222ee22eeeee
    eeeee22e222222222222222ee222222ee2eeeffffffffeeeeeeeeeeeeeeeeee22ee222e2222222222222222222222e222eee2eeeeeeeeeeeeffffffffffe3e2ee222222ee222222222222222e22eeeee
    eeee22ee222222222222222e222222ee22eefffffffffeeeeeeeeeeeeeeeeee22ee222e2222222222222222222222e222eee22eeeeeeeeeeeeffffffffffe322ee222222e222222222222222ee22eeee
    eeee22ee22e22222222222ee22222ee22eeffffffffffeeeeeeeeeeeeeeeeee22ee222e2222222222222222222222e222eeee2eeeeeeeeeeeefffffffffff3322ee22222ee22222222222e22ee22eeee
    eeee2ee222222222222222e222222ee32eeffffffffffeeeeeeeeeeeeeeeeee22ee222e2222222222222222222222e2222eee2eeeeeeeeeeeefffffffffffe332ee222222e222222222222222ee2eeee
    eee22ee22e22222222222e222222ee32eeffffffeffffeeeeeeeeeeeeeeeeee22ee222e2222222222222222222222e2222eee2eeeeeeeeeeeeffffffffffff3322ee222222e22222222222e22ee22eee
    eee2ee222e22222222222e22222ee23eeeffffffeffffeeeeeeeeeeeeeeeeee22ee222e2222222222222222222222e2222eee2eeeeeeeeeeeeffffffffffffe3322ee22222e22222222222e222ee2eee
    ee22ee22e22222222222e222222ee32eefffffffefffeeeeeeeeeeeeeeeeeee22ee222e2222222222222222222222e2222eee2eeeeeeeeeeeeeffffffffffffe332ee222222e22222222222e22ee22ee
    ee2eee2ee2222222222e222222ee33eeefffffffefffeefeeeeeeeeeeeeeee222ee22ee2222222222222222222222e2222eee22eeeeeeeeeeeeffffffffffffe3322ee222222e2222222222ee2eee2ee
    eeeee22ee2222222222e22222ee33eeeffffffffffffeefeeeeeeeeeeeeeee22eee22ee2222222222222222222222e2222eee22eeeeeeeeeeeefffffffffffffe3322ee22222e2222222222ee22eeeee
    eeeee2ee2222222222222222eee33eeffffffffeffffeefeeeeeeeeeeeeeee22eee22ee2222222222222222222222e2222eee22eeeeeeeeeeeefeffffffffffffe332eee2222222222222222ee2eeeee
    eeee22ee2222222222222222ee33eeeffffffffeffffeefeeeeeeeeeeeeeee22ee222ee2222222222222222222222e2222eee22eeeeeeeeeeeefeffffefffffffe3332ee2222222222222222ee22eeee
    eeee2ee2222222222222222ee33eeefffffffffeffffeefeeeeeeeeeeeeeee22ee222e22222222222222222222222e2222eee22eeeeeeeeeeeeeeffffeffffffffe3322ee2222222222222222ee2eeee
    eeee2ee222222222222222ee333eeffffffffffefffeeeeeeeeeeeeeeeeeee22ee222e22222222222222222222222e2222eee22eeeeeeeeeeeeeeefffefffffffffe3322ee222222222222222ee2eeee
    eee2ee2222222222222222ee33eeeffffffffffefffeeeeeeeeeeeeeeeeeee22ee222e22222222222222222222222e22222ee22eeeeeeeeeeeeeeefffefffffffffee332ee2222222222222222ee2eee
    eee2ee222222222222222ee33eeefffffffffffefffeefeeeeeeeeeeeeeeee22ee222e22222222222222222222222ee2222eee2eeeeeeeeeeeeeeefffeffffffffffe3332ee222222222222222ee2eee
    ee2ee2222222222222222e33eeefffffffffffeefffeefeeeeeeeeeeeeeee222ee222e22222222222222222222222ee2222eee22eeeeeeeeeeeeeeffffeffffffffffe3322e2322222222222222ee2ee
    ee2ee222222222222232e333eeffffffffffffeefffeefeeeeeeeeeeeeeee22eee222e22222222222222222222222ee2222eee22eeeeeeeeeeeeeeefffefffffffffffe3322e322222222222222ee2ee
    e2ee2222222222222322e33eeeffffffffffffeefffeefeeeeeeeeeeeeeee22ee2222e22222222222222222222222ee2222eee22eeeeeeeeeeeeeeefffefffffffffffee332e2322222222222222ee2e
    e2ee222222222222332e33eeefffffffffffffeefffeefeeeeeeeeeeeeeee22ee2222e22222222222222222222222ee2222eee22eeeeeeeeeeeeeeefffeffffffffffffe3322e322222222222222ee2e
    eee222222222222332e33eeeffffffffffffffeeffeeeeeeeeeeeeeeeeeee22ee2222222222222222222222222222ee2222eee22eeeeeeeeeeeeeeefffefffffffffffffe3322e322222222222222eee
    eee222222222222322332eefffffffffffffffefffeefeeeeeeeeeeeeeeee22ee2222222222222222222222222222ee2222eee22eeeeeeeeeeeeeeeeffeefffffffffffffe3322322222222222222eee
    ee222222222222332333eeeffffffffffffffeefffeefeeeeeeeeeeeeeee222ee22222222222222222222222222222e2222eee22eeeeeeeeeeeeeeeeffeefffffffffffffee3223322222222222222ee
    ee22222222222332233eeefffffffffffffffeefffeefeeeeeeeeee2eeee222ee22222222222222222222222222222e2222eee22eeeeeeeeeeeeeeeeffeeffffffffffffffee322322222222222222ee
    e22222222222332233eeeffffffffffffffffeefffeefeeeeeeeeee2eeee22eee22222222222222222222222222222e2222eee22eeeeeeeeeeeeeeeefffefffffffffffffffe3323322222222222222e
    e22222222222332332eefffffffffffffffffeefffeefeeeeeeeeeeeeeee22eee22222222222222222222222222222e2222eeee2eeeeeeeeeeeeeeeefffeefffffffffffffffe322322222222222222e
    22222e22222332232eeefffffffffffffffffeefffeefeeeeeeeee2eeeee22ee222222222222222222222222222222e22222eee22eeeeeeeeeeeeeeeeffeefffffffffffffffeee23322222222e22222
    22222e2222332232eeeffffffffffffffffffeeffeefeeeeeeeeee2eeeee22ee222222222222222222222222222222e22222eee22eeeeeeeeeeeeeeeeffeeffffffffffffffffeee2322222222e22222
    222222222332222eeeffffffffffffffffffeefffeefeeeeeeeeee2eeee222ee222222222222222222222222222222e22222eee22eeeeeeeeeeeeeeeeffeefffffffffffffffffeee332222222222222
    2222e222233222eeefffffffffffffffffffeefffeefeeeeeeeeee2eeee222ee222222222222222222222222222222e22222eee22eeeeeeeeeeeeeeeefffeffffffffffffffffffeee322222222e2222
    2222e222332222eeefffffffffffffffffffeefffeefeeeeeeeeee2eeee222ee222222222222222222222222222222e22222eee22eeeeeeeeeeeeeeeefffeefffffffffffffffffeee332222222e2222
    222e222332222eeeffffffffffffffffffffeefffeefeeeeeeeee22eeee222ee222222222222222222222222222222e22222eee22eeeeeeeeeeeeeeeefffeeffffffffffffffffffeee322222222e222
    222e22232e22eeefffffffffffffffffffffeefffeefeeeeeeeee2eeeee22eee222222222222222222222222222222222222eee22eeeeeeeeeeeeeeeeeffeefffffffffffffffffffee332e22222e222
    222e22222e2eeeffffffffffffffffffffffeefffefeeeeeeeeee2eeeee22ee2222222222222222222222222222222222222eee22eeeeeeeeeeeeeeeeeffeeffffffffffffffffffffee32e22222e222
    22ee2222e2eeeffffffffffffffffffffffeeffffefeeeeeeeeee2eeee222ee2222222222222222222222222222222222222eee22eeeeeeeeeeeeeeeeefffefffffffffffffffffffffee32e2222ee22
    22e22222e2eeeffffffffffffffffffffffeeffffefeeeeeeeee22eeee222ee2222222222222222222222222222222222222eee222eeeeeeeeeeeeeeeefffeeffffffffffffffffffffee32e22222e22
    22e2222eeeeefffffffffffffffffffffffeefffeefeeeeeeeee22eeee222ee2222222222222222222222222222222222222eee222eeeeeeeeeeeeeeeefffeefffffffffffffffffffffeeeee2222e22
    2ee2222eeeeffffffffffffffffffffffffeefffeefeeeeeeeee22eeee222ee2222222222222222222222222222222222222eeee22e2eeeeeeeeeeeeeefffeeffffffffffffffffffffffeeee2222ee2
    2e2222eeeefffffffffffffffffffffffffeefffefeeeeeeeeee2eeeee222ee2222222222222222222222222222222222222eeee22eeeeeeeeeeeeeeeeeffeefffffffffffffffffffffffeeee2222e2
    2e222eee2effffffffffffffffffffffffeeefffefeeeeeeeeee2eeee222eee222e222222222222222222222222222222222eeee22ee2eeeeeeeeeeeeeefffeeffffffffffffffffffffffe2eee222e2
    2e222eee2effffffffffffffffffffffffeeffffefeeeeeeeee22eeee222ee2222e222222222222222222222222222222222eeee22ee2eeeeeeeeeeeeeefffeeffffffffffffffffffffffe2eee222e2
    ee22eeee2effffffffffffffffffffffffeeffffefeeeeeeeee22eeee222ee2222e2222222222222222222222222222e22222eee22ee2eeeeeeeeeeeeeefffeeffffffffffffffffffffffe2eeee22ee
    ee22eee22effffffffffffffffffffffffeeffffefeeeeeeeee22eeee222ee2222e2222222222222222222222222222e22222eee22ee2eeeeeeeeeeeeeefffeeffffffffffffffffffffffe22eee22ee
    eeeeee22eeffffffffffffffffffffffffeeffffeeeeeeeeeee22eeee222ee2222e2222222222222222222222222222e22222eee22ee2eeeeeeeeeeeeeeeffeeffffffffffffffffffffffee22eeeeee
    eeeee222efffffffffffffffffffffffffeeffffeeeeeeeeeee2eeeee222ee2222e2222222222222222222222222222e22222eee222e22eeeeeeeeeeeeeefffeeffffffffffffffffffffffe222eeeee
    2222222eeffffffffffffffffffffffffeeefffeeeeeeeeeee22eeee2222ee2222e2222222222222222222222222222e22222eee222e22eeeeeeeeeeeeeefffeeffffffffffffffffffffffee2222222
    222222eefffffffffffffffffffffffffeeffffeeeeeeeeeee22eeee2222e22222e2222222222222222222222222222e22222eee222ee2eeeeeeeeeeeeeefffeefffffffffffffffffffffffee222222
    22222eeefffffffffffffffffffffffffeeffffeeeeeeeeeee22eeee222ee22222e2222222222222222222222222222e22222eeee22ee2eeeeeeeeeeeeeeeffeefffffffffffffffffffffffeee22222
    222eeeeefffffffffffffffffffffffffeeffffeeeeeeeeeee22eeee222ee22222e2222222222222222222222222222e22222eeee22ee2eeeeeeeeeeeeeeefffeeffffffffffffffffffffffeeeee222
    eeee2eeeeffffffffffffffffffffffffeeffffeeeeeeeeee22eeeee222ee2222ee2222222222222222222222222222e22222eeee22ee2eeeeeeeeeeeeeeefffeefffffffffffffffffffffeeee2eeee
    222e2ee2effffffffffffffffffffffffeeffffeeeeeeeeee22eeee2222ee2222ee2222222222222222222222222222e22222eeee22ee22eeeeeeeeeeeeeefffeefffffffffffffffffffffe2ee2e222
    222e2ee2efffffffffffffffffffffffeeeffffeeeeeeeeee22eeee2222ee2222ee2222222222222222222222222222e22222eeee22ee22eeeeeeeeeeeeeefffeefffffffffffffffffffffe2ee2e222
    222e2ee2efffffffffffffffffffffffeefffffeeeeeeeeee22eeee2222ee2222ee2222222222222222222222222222e22222eeee222e22eeeeeeeeeeeeeeffffeeffffffffffffffffffffe2ee2e222
    222e2ee2efffffffffffffffffffffffeefffffeeeeeeeee22eeeee2222ee2222ee2222222222222222222222222222e22222eeee222e22eeeeeeeeeeeeefffffeeffffffffffffffffffffe2ee2e222
    222e2ee22effffffffffffffffffffffeefffffeeeeeeeee22eeee22222e22222ee2222222222222222222222222222ee2222eeee222ee2eeeeeeeeeeeeeeffffeefffffffffffffffffffe22ee2e222
    222e2ee22effffffffffffffffffffffeeffffeeeeeeeeee22eeee22222e22222ee2222222222222222222222222222ee2222eeeee22ee2eeeeeeeeeeeeeefffffefffffffffffffffffffe22ee2e222
    222e2eee2effffffffffffffffffffffeeffffeeeeeeeeee22eeee22222e22222ee2222222222222222222222222222ee2222eeeee22ee22eeeeeeeeeeeeefffffefffffffffffffffffffe2eee2e222
    222e22ee2eefffffffffffffffffffffefffffeeeeeeeee222eee22222ee22222ee2222222222222222222222222222ee2222eeeee22ee22eeeeeeeeeeeeeffffffffffffffffffffffffee2ee22e222
    222e22ee22efffffffffffffffffffffefffffeeeeeeeee22eeee22222ee22222ee2222222222222222222222222222ee2222eeeee22ee22eeeeeeeeeeeeeefffffffffffffffffffffffe22ee22e222
    222e22ee22efffffffffffffffffffffefffffeeeeeeeee22eeee22222ee22222e22222222222222222222222222222ee2222eeeee22ee22eeeeeeeeeeeeeefffffffffffffffffffffffe22ee22e222
    222e22ee22efffffffffffffffffffffffffffeeeeeeeee22eee222222ee22222e22222222222222222222222222222ee22222eeee222e22eeeeeeeeeeeeeefffffffffffffffffffffffe22ee22e222
    222e22ee222effffffffffffffffffffffffffeeeeeeeee22eee222222ee22222e22222222222222222222222222222ee22222eeee222ee2eeeeeeeeeeeeeeefffffffffffffffffffffe222ee22e222
    222e22eee22effffffffffffffffffffffffffeeeeeeee22eeee222222e222222e22222222222222222222222222222ee22222eeee222ee22eeeeeeeeeeeeeefffffffffffffffffffffe22eee22e222
    222e222ee22effffffffffffffffffffffffffeeeeeeee22eeee222222e222222e22222222222222222222222222222ee22222eeee222ee22eeeeeeeeeeeefffffffffffffffffffffffe22ee222e222
    222e222ee22eeffffffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee2ee22222eeee222eeee222eeee22222ee222222eeee22222eeeeeeeeeeeeeffffffffffffffffffffffee22ee222e222
    222e222ee222efffffffdffffffffddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddeeeeeeedeeeeeeeeeeeedeeeeeeeddeeeeeebeee22eeeeeeeedeeeeeddfffffdddffffffffdfffffe222ee222e222
    222e222ee222eddfffdddddfffffdddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedddddeeeddddeeeeddeeeeddddeeedddddeeeedbbbbeeeddddeeddddddddddddddddddfffffdddddfffe222ee222e222
    222ee22ee222eedddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddee222ee22ee222
    222ee22ee2222edddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeedddddddddddddddddde2222ee22ee222
    2222e222e2222eeddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeedddddddddddddddddee2222e222e2222
    2222e222ee2222edddddddddddddddddeeeeeddeeeedddddddeeeeedeeeeedddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddde2222ee222e2222
    2222e222ee2222edddddddddddddddddeeeeeddeeeedddddddeeeeedeeeeedddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddde2222ee222e2222
    2222e222ee2222eeddddddddddddddddeeeeeddeeeedddddddeeeeedeeeeedddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddee2222ee222e2222
    2222e2222e22e22eddddddddddddddddeeeeedddddddddddddddddddeeeeeddddddddddddddddddddddddddddddddddddddddddeeeeedddddddddddddeeeeedddddddddddddddddde22e22e2222e2222
    222222222e22e22eedddddddddddddddeeeeedddddddddddddddddddeeeeeddddddddddddddddddddddddddddddddddddddddddeeeeedddddddddddddeeeeedddddddddddddddddee22e22e222222222
    222222222e22e222edddddddddddddddeeeeedddddddddddddddddddeeeeeddddddddddddddddddddddddddddddddddddddddddeeeeedddddddddddddeeeeeddddddddddddddddde222e22e222222222
    2222222222e22e22eeddddddddddddddeeeeedddddddddddddddddddeeeeeddddddddddddddddddddddddddddddddddddddddddeeeeedddddddddddddeeeeeddddddddddddddddee22e22e2222222222
    222222e222e22e222edddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeedddddddddddddeeeeedddddddddddddddde222e22e222e222222
    222222e222222e222eedddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedddddeeeeedddddddddddddeeeeedddddddddddddddee222e222222e222222
    222222e2222222e222edddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddde222e2222222e222222
    222222ee222222e222eeddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddee222e222222ee222222
    2222222e222222e2222eddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedddddddddddddddddddddddddddddddddddddddddde2222e222222e2222222
    22222e2e2222222e222eedddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedddddddddddddddddddddddddddddddddddddddddee222e2222222e2e22222
    22222e2e2222222e222eedddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedddddddddddddddddddddddddddddddddddddddddee222e2222222e2e22222
    22222e2e22222222e22eddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedddddddddddddddddddddddddddddddddddddddddde22e22222222e2e22222
    22222e2ee2222222e22eddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedddddddddddddddddddddddddddddddddddddddddde22e2222222ee2e22222
    22222e2ee2222222eeeedddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddeeee2222222ee2e22222
    22222e22e2222222eeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeedddddddddddddddddddddddddddddddddddddddddddddddddddddddeee2222222e22e22222
    22222ee2e2222222eedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddee2222222e2ee22222
    22222ee2e222222eeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeedddddddddddddddddddddddddddddddddddddddddddddddddddddddddee222222e2ee22222
    222222e2ee22222edddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeedddddddddddddddddddddddddddddddddddddddddddddddddddddddddde22222ee2e222222
    222222e22e2222eedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddee2222e22e222222
    222222e22e22eeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeeeeeeedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeee22e22e222222
    222222e2eeeeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeeeee2e222222
    222222e2edddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddde2e222222
    222222eeeddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeee222222
    `)
server = sprites.create(img`
    ......fffff............
    ......fffff............
    ....fffffffff..........
    ...fffffffcfff.........
    .fffffffcccfffc........
    .fffffffcccfffc........
    .ffffcffffffffc........
    .ccccfffeeeffcc........
    .ffffffeeeffccf........
    .ffffffeeeffccf........
    .ffffbfeeefbfff........
    ...f41f444f14f.........
    ...fe4444444ef.........
    ...fe4444444ef.........
    ...fffeeeeefff.........
    .ffefb77777bfef........
    .ee4f7777777f4e........
    .ee4f7777777f4e........
    .eeef6666666fee........
    .....fffffff...........
    .....ff...ff...........
    .....ff...ff...........
    .......................
    .......................
    .......................
    .......................
    `, SpriteKind.Player)
customer = sprites.create(img`
    . . . . . f f 4 4 f f . . . . . 
    . . . . f 5 4 5 5 4 5 f . . . . 
    . . . f e 4 5 5 5 5 4 e f . . . 
    . . f b 3 e 4 4 4 4 e 3 b f . . 
    . . f 3 3 3 3 3 3 3 3 3 3 f . . 
    . f 3 3 e b 3 e e 3 b e 3 3 f . 
    . f 3 3 f f e e e e f f 3 3 f . 
    . f b b f b f e e f b f b b f . 
    . f b b e 1 f 4 4 f 1 e b b f . 
    f f b b f 4 4 4 4 4 4 f b b f f 
    f b b f f f e e e e f f f b b f 
    . f e e f b d d d d b f e e f . 
    . . e 4 c d d d d d d c 4 e . . 
    . . e f b d b d b d b b f e . . 
    . . . f f 1 d 1 d 1 d f f . . . 
    . . . . . f f b b f f . . . . . 
    `, SpriteKind.Player)
server.setPosition(70, 109)
customer.setPosition(100, 109)
reservaition("What is the name for the table?")
server.setPosition(77, 72)
customer.setPosition(96, 100)
game.splash("Thank you for choosing The best resturant in Chicago! see you soon!")
let customerSay = game.askForString("What drink would you like to have?")
if (customerSay == "Water") {
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
