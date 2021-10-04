package org.tolokoban.app123soleil

import android.R
import android.util.Log
import android.webkit.JavascriptInterface
import android.webkit.WebView
import androidx.activity.ComponentActivity

class DeviceAPI(private val webView: WebView, private val activity: ComponentActivity) {
    private var shakeWatcher: ShakeWatcher? = null

    @JavascriptInterface
    fun version(): String {
        return "1.0.0"
    }

    @JavascriptInterface
    fun start() {
        activity.runOnUiThread {
            if (shakeWatcher == null)
                shakeWatcher = ShakeWatcher(activity) { this.call("shake", "$it") }
        }
    }

    private fun call(name: String, args: String) {
        activity.runOnUiThread {
            val script = "postMessage({type: 'DeviceAPI', name: '${name}', args: ${args}})"
            val value = args.toDoubleOrNull()
            if (value != null && value > 0.0) Log.i("DEBUG", script)
            webView.evaluateJavascript( script,null )
        }
    }

}