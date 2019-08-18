package project.restsharingimage.controller

import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController
import project.restsharingimage.ApplicationConstants
import project.restsharingimage.models.ImageModel
import java.util.*
import kotlin.collections.ArrayList

@RestController
@CrossOrigin(origins = ["http://localhost:4200"])
class ImagesController {
    @GetMapping(ApplicationConstants.BASE_RESOURCE_PATH + "/imagesList")
    fun imagesList(): ArrayList<ImageModel> {
        val list = ArrayList<ImageModel>();
        list.add(ImageModel("http://placehold.it/1920x1024&text=image1",Date().toInstant().toString(),"5000"))
        list.add(ImageModel("http://placehold.it/1920x1024&text=image2",Date().toInstant().toString(),"5000"))
        list.add(ImageModel("http://placehold.it/1920x1024&text=image3",Date().toInstant().toString(),"5000"))
        list.add(ImageModel("http://placehold.it/1920x1024&text=image4",Date().toInstant().toString(),"5000"))
        list.add(ImageModel("http://placehold.it/1920x1024&text=image5",Date().toInstant().toString(),"5000"))
        list.add(ImageModel("http://placehold.it/1920x1024&text=image6",Date().toInstant().toString(),"5000"))
        list.add(ImageModel("http://placehold.it/1920x1024&text=image7",Date().toInstant().toString(),"5000"))
        return list;
    }
}