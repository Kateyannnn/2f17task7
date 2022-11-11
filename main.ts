input.onButtonPressed(Button.A, function () {
    x = input.lightLevel()
    basic.showNumber(x)
    if (x < 50) {
        led.setBrightness(255)
    } else if (x >= 50 && x < 100) {
        led.setBrightness(128)
    } else if (x >= 100 && x < 200) {
        led.setBrightness(64)
    } else if (x >= 200) {
        led.setBrightness(0)
    }
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
let x = 0
basic.showString("2F17Kate")
basic.forever(function () {
	
})
