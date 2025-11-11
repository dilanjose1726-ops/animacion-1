basic.forever(function () {
    basic.showLeds(`
        # # # # #
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(1000)
    basic.showLeds(`
        # # # # #
        . # # # .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showNumber(1000)
    basic.showLeds(`
        # # # # #
        . # # # .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showNumber(1000)
    basic.showLeds(`
        # # # # #
        . # . # .
        . . # . .
        . # # # .
        . . . . .
        `)
    basic.showNumber(1000)
    basic.showLeds(`
        # # # # #
        . # . # .
        . . # . .
        . # # # .
        # # # # #
        `)
})
