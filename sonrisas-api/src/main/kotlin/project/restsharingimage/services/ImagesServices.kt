package project.restsharingimage.services

import net.coobird.thumbnailator.Thumbnails
import net.coobird.thumbnailator.geometry.Positions
import org.springframework.stereotype.Service
import project.restsharingimage.ApplicationConstants
import project.restsharingimage.models.ImageModel
import java.io.File
import java.io.FileInputStream
import javax.annotation.processing.FilerException
import javax.imageio.ImageIO

@Service
class ImagesServices {
    private var imagesListModel: ArrayList<ImageModel> = ArrayList();
    private var mapListImages: HashMap<String, String> = HashMap<String, String>();


    fun getImages(): List<ImageModel> {
        this.checkFolderImages();
        return this.imagesListModel;
    }

    fun getUrlImage(idMAp: String): String {
        return this.mapListImages.getValue(idMAp);
    }

    private fun checkFolderImages() {
        val directory = File(ApplicationConstants.FOLDER_FULL_IMAGES);
        val files: Array<File>? = directory.listFiles();
        if (files != null && files.size > this.imagesListModel.size) {
            files.sortWith(compareBy({ it.lastModified() }, { it.lastModified() }))
            var newFiles = files.sliceArray(this.imagesListModel.size until files.size)
            newFiles.forEach { file: File ->
                if (file.exists() && file.length() > 0) {
                    var mapId = file.lastModified().toString() + file.name.split('.')[0];
                    this.imagesListModel.add(ImageModel(mapId, file.name, file.lastModified(), file.length()))
                    this.mapListImages[mapId] = file.toPath().toString();
                }
            }
        }
    }

    fun createThumbnail(idName: String): File {


        try {
            val urlImage = this.getUrlImage(idName);
            Thumbnails.of(urlImage)
                    .size(640, 480)
                    .outputFormat("jpg")
                    .watermark(Positions.BOTTOM_RIGHT, ImageIO.read(File(ApplicationConstants.WATERMARK_IMAGE)), 0.2f)
                    .toFile(ApplicationConstants.FOLDER_THUMBNAILS + idName);
            return File(ApplicationConstants.FOLDER_THUMBNAILS + idName + ".jpg");
        } catch (e: FilerException) {
            return File(ApplicationConstants.NOT_AVAILABLE_IMAGE);
        }
    }
}