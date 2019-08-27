package project.restsharingimage.controller

import org.springframework.http.MediaType
import org.springframework.web.bind.annotation.*
import project.restsharingimage.ApplicationConstants
import project.restsharingimage.models.ImageModel
import project.restsharingimage.services.ImagesServices
import javax.servlet.http.HttpServletResponse


@RestController
@CrossOrigin(origins = ["http://localhost:4200", "http://localhost:4201"])
@RequestMapping(ApplicationConstants.BASE_RESOURCE_PATH)
class ImagesController(private val imageService: ImagesServices, private val response: HttpServletResponse) {
    @GetMapping("/imagesList")
    fun imagesList(): List<ImageModel> {
        return imageService.getImages();
    }

    @GetMapping(value = "/thumbnail/{idMap}", produces = [MediaType.IMAGE_JPEG_VALUE])
    fun ThumbnailsImages(@PathVariable idMap: String): ByteArray {
        var imageName = this.imageService.createThumbnail(idMap);
        return imageName.readBytes();
    }

}