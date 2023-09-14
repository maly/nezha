let i = 0
let go = 20
let goback = go * -1
let full = 100
basic.showIcon(IconNames.Diamond)
neZha.setMotorSpeed(neZha.MotorList.M1, go)
neZha.setMotorSpeed(neZha.MotorList.M4, go)
basic.forever(function () {
    i = PlanetX_Basic.ultrasoundSensor(PlanetX_Basic.DigitalRJPin.J1, PlanetX_Basic.Distance_Unit_List.Distance_Unit_cm)
    if (i >= 4 && i <= 20) {
        neZha.setMotorSpeed(neZha.MotorList.M1, goback)
        neZha.setMotorSpeed(neZha.MotorList.M4, goback)
        basic.pause(1000)
        neZha.setMotorSpeed(neZha.MotorList.M1, full)
        neZha.setMotorSpeed(neZha.MotorList.M4, full * -1)
        basic.pause(250)
        neZha.setMotorSpeed(neZha.MotorList.M1, go)
        neZha.setMotorSpeed(neZha.MotorList.M4, go)
    }
})
basic.forever(function () {
    neZha.setServoAngel(neZha.ServoTypeList._360, neZha.ServoList.S1, 180)
    basic.pause(500)
    neZha.setServoAngel(neZha.ServoTypeList._360, neZha.ServoList.S1, 90)
    basic.pause(500)
})
