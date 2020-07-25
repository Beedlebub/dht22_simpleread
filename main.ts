basic.forever(function () {
    dht11_dht22.queryData(
    DHTtype.DHT22,
    DigitalPin.P0,
    true,
    false,
    true
    )
    basic.showString("T:" + dht11_dht22.readData(dataType.temperature) + "*C")
    basic.showString("H:" + dht11_dht22.readData(dataType.humidity) + "%")
})
