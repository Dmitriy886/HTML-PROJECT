/** Photo Preview */
const riverPhotos = document.querySelectorAll(".river-photos-card")
const shadowBgr = document.querySelector(".shadow-background")
const riverPhotoPreview = document.querySelector(".river-photos-preview")
const closePhotoBtn = document.querySelector("#river-photos-preview-close")

let riverPreviewState = false

const toggleRiverPhoto = ({ target }) => {
  if (!riverPreviewState) {
    shadowBgr.style.display = "initial"
    riverPhotoPreview.style.backgroundImage = target.style.backgroundImage
    riverPhotoPreview.style.display = "initial"
  } else {
    riverPhotoPreview.style.display = "none"
    shadowBgr.style.display = "none"
  }
  riverPreviewState = !riverPreviewState
}

closePhotoBtn.addEventListener("click", toggleRiverPhoto)

for (let i = 0; i < riverPhotos.length; i++) {
  riverPhotos[i].addEventListener("click", toggleRiverPhoto)
}