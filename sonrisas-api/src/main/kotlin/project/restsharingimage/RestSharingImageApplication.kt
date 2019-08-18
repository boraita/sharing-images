package project.restsharingimage

import org.springframework.boot.Banner
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.stereotype.Component
import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.RequestMapping

@SpringBootApplication
class RestSharingImageApplication

fun main(args: Array<String>) {
    runApplication<RestSharingImageApplication>(*args) {
    }
}

@Controller
class ForwarderController {
    @RequestMapping("/{path:[^\\.]*}")
    fun forward(): String {
        return "forward:/" + ApplicationConstants.BASE_RESOURCE_PATH + "hello"
    }
}

@Component
class ApplicationConstants {
    companion object {
        const val BASE_RESOURCE_PATH = "/api"
    }
}