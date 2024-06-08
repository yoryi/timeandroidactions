package expo.modules.timeandroidactions
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import kotlinx.coroutines.*

class TimeandroidactionsModule : Module() {
  private val job = Job();
  override fun definition() = ModuleDefinition {
    Name("Timeandroidactions")

    Function("start") { delayMs: Int? ->
      var result: Boolean? = null
      val coroutineScope = CoroutineScope(Dispatchers.Default + job)
      val delayTime = delayMs ?: 2000

      coroutineScope.launch {
        delay(delayTime.toLong())
        result = true
      }
      runBlocking {
        while (result == null) {
          delay(100)
        }
      }
      result!!
    }

    Function("clean") {
      job.cancel();
    }
  }
}
