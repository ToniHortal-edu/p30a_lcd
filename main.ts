input.onButtonPressed(Button.A, function () {
    OLED12864_I2C.showString(
    0,
    0,
    "Temperatura",
    1
    )
    OLED12864_I2C.showNumber(
    0,
    1,
    input.temperature(),
    1
    )
    OLED12864_I2C.showString(
    4,
    1,
    " graus",
    1
    )
})
input.onButtonPressed(Button.B, function () {
    I2C_LCD1602.ShowString("Temperatura", 1, 0)
    I2C_LCD1602.ShowNumber(input.temperature(), 1, 1)
    I2C_LCD1602.ShowString(" graus", 4, 1)
})
OLED12864_I2C.init(60)
I2C_LCD1602.LcdInit(0)
basic.forever(function () {
	
})
