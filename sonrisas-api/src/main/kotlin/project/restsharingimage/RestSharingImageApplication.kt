package project.restsharingimage

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.context.annotation.Configuration
import org.springframework.stereotype.Component
import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry


@SpringBootApplication
class RestSharingImageApplication

fun main(args: Array<String>) {
    runApplication<RestSharingImageApplication>(*args) {
    }
}

@Controller
@CrossOrigin(origins = ["http://localhost:4200", "http://localhost:4201"])
class ForwarderController {
    @RequestMapping("/{path:[^\\.]*}")
    fun forward(): String {
        return "forward:/"
    }
}

@Configuration
class StaticResourceConfiguration {
    fun addResourceHandlers(registry: ResourceHandlerRegistry) {
        registry.addResourceHandler("files/**").addResourceLocations("file:/" + ApplicationConstants.FOLDER_FULL_IMAGES)
    }
}

@Component
class ApplicationConstants {
    companion object {
        const val BASE_RESOURCE_PATH = "/api"
        const val FOLDER_FULL_IMAGES = "Photos folder";
        const val FOLDER_THUMBNAILS = "src\\main\\resources\\thumbnails\\"
        const val WATERMARK_IMAGE = "src\\main\\resources\\watermark\\mainImage.png"
        const val NOT_AVAILABLE_IMAGE = "src\\main\\resources\\static\\not-available.png"
    }
}