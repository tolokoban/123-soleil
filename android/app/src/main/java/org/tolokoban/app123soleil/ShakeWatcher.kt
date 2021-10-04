package org.tolokoban.app123soleil

import android.content.Context
import android.hardware.Sensor
import android.hardware.SensorEvent
import android.hardware.SensorManager
import android.hardware.SensorEventListener
import android.util.Log
import androidx.activity.ComponentActivity
import kotlin.math.floor
import kotlin.math.sqrt

const val DEG_PER_RAD = 57.29577951308232

/**
 * Once instantiated an object of this class will keep calling `onShake` every time the device
 * moves. The only argument is a positive double. While it is less than 1.0, we consider the
 * device is almost still.
 */
class ShakeWatcher(private val activity: ComponentActivity, private val onShake: (value: Double)->Unit): SensorEventListener {
    private var senSensorManager: SensorManager? = activity.getSystemService(Context.SENSOR_SERVICE) as SensorManager?
    private var senAccelerometer: Sensor? = senSensorManager?.getDefaultSensor(Sensor.TYPE_ACCELEROMETER)
    var sensorInitialized = false
    var lastX = 0.0
    var lastY = 0.0
    var lastZ = 0.0

    init {
        if (senSensorManager == null) {
            Log.e("DEBUG", "senSensorManager == null")
        }
        senSensorManager?.registerListener(
                this,
                senAccelerometer,
                SensorManager.SENSOR_DELAY_NORMAL
        )
    }

    override fun onSensorChanged(sensorEvent: SensorEvent?) {
        if (sensorEvent == null) {
            Log.e("DEBUG", "sensorEvent == null")
            return
        }

        val mySensor: Sensor = sensorEvent.sensor
        if (mySensor.type != Sensor.TYPE_ACCELEROMETER) return

        val currentX = floor(sensorEvent.values[0] * DEG_PER_RAD)
        val currentY = floor(sensorEvent.values[1] * DEG_PER_RAD)
        val currentZ = floor(sensorEvent.values[2] * DEG_PER_RAD)
        if (sensorInitialized) {
            val x = lastX - currentX
            val y = lastY - currentY
            val z = lastZ - currentZ
            val length = sqrt(x*x + y*y + z*z) / 50
            onShake(length)
        } else {
            sensorInitialized = true
        }
        lastX = currentX
        lastY = currentY
        lastZ = currentZ
    }

    override fun onAccuracyChanged(sensor: Sensor?, accuracy: Int) {

    }
}