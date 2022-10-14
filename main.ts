radio.onReceivedNumber(function on_received_number(receivedNumber: number) {
    if (receivedNumber == 0) {
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.showNumber(0)
    } else if (receivedNumber == 1) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.showNumber(1)
    } else if (receivedNumber == 2) {
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.showNumber(2)
    } else if (receivedNumber == 3) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.showNumber(3)
    }
    
})
serial.onDataReceived(serial.delimiters(Delimiters.Hash), function on_data_received() {
    
    cmd = serial.readUntil(serial.delimiters(Delimiters.Hash))
    if (cmd == "0") {
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.showNumber(0)
    } else if (cmd == "1") {
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.showNumber(1)
    } else if (cmd == "2") {
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.showNumber(2)
    } else if (cmd == "3") {
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.showNumber(3)
    }
    
})
let cmd = ""
radio.setGroup(1)
basic.forever(function on_forever() {
    
})
