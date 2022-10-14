def on_received_number(receivedNumber):
    if receivedNumber == 0:
        pins.digital_write_pin(DigitalPin.P1, 0)
        basic.show_number(0)
    elif receivedNumber == 1:
        pins.digital_write_pin(DigitalPin.P1, 1)
        basic.show_number(1)
    elif receivedNumber == 2:
        pins.digital_write_pin(DigitalPin.P0, 0)
        basic.show_number(2)
    elif receivedNumber == 3:
        pins.digital_write_pin(DigitalPin.P0, 1)
        basic.show_number(3)
radio.on_received_number(on_received_number)

def on_data_received():
    global cmd
    cmd = serial.read_until(serial.delimiters(Delimiters.HASH))
    if cmd == "0":
        pins.digital_write_pin(DigitalPin.P1, 0)
        basic.show_number(0)
    elif cmd == "1":
        pins.digital_write_pin(DigitalPin.P1, 1)
        basic.show_number(1)
    elif cmd == "2":
        pins.digital_write_pin(DigitalPin.P0, 0)
        basic.show_number(2)
    elif cmd == "3":
        pins.digital_write_pin(DigitalPin.P0, 1)
        basic.show_number(3)
serial.on_data_received(serial.delimiters(Delimiters.HASH), on_data_received)

cmd = ""
radio.set_group(1)

def on_forever():
    pass
basic.forever(on_forever)