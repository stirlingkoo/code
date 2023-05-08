let reading = 0
led.setBrightness(64)
basic.forever(function () {
    pins.analogWritePin(AnalogPin.P1, 1023)
    reading = pins.analogReadPin(AnalogPin.P0)
    pins.analogWritePin(AnalogPin.P1, 0)
    led.plotBarGraph(
    reading,
    1023
    )
})
loops.everyInterval(3600000, function () {
    if (reading < 500) {
        wuKong.setMotorSpeed(wuKong.MotorList.M1, 50)
        basic.pause(5000)
        wuKong.stopMotor(wuKong.MotorList.M1)
    }
})
