basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        wuKong.setAllMotor(100, 100)
        basic.pause(5000)
        wuKong.stopAllMotor()
    }
    if (input.buttonIsPressed(Button.B)) {
        wuKong.setAllMotor(100, -100)
        basic.pause(5000)
        wuKong.stopAllMotor()
    }
    if (input.buttonIsPressed(Button.A)) {
        wuKong.setAllMotor(-100, 100)
        basic.pause(5000)
        wuKong.stopAllMotor()
    }
})
