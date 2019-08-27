package project.restsharingimage

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.context.annotation.Configuration
import org.springframework.stereotype.Component
import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter


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
        return "forward:/"
    }
}

@Configuration
class StaticResourceConfiguration : WebMvcConfigurerAdapter() {
    override fun addResourceHandlers(registry: ResourceHandlerRegistry) {
        registry.addResourceHandler("files/**", "thumbnails/**").addResourceLocations("file:/" + ApplicationConstants.FOLDER_FULL_IMAGES, "file:/" + ApplicationConstants.FOLDER_THUMBNAILS)
    }
}

@Component
class ApplicationConstants {
    companion object {
        const val BASE_RESOURCE_PATH = "/api"
        const val FOLDER_FULL_IMAGES = "Folder Images";
        const val FOLDER_THUMBNAILS = "src\\main\\resources\\thumbnails\\"
        const val WATERMARK_IMAGE = "src\\main\\resources\\watermark\\mainImage.png"
        const val NOT_AVAILABLE_IMAGE = "src\\main\\resources\\static\\not-available.png"
    }
}