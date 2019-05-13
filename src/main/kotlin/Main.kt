import org.w3c.dom.Element
import org.w3c.dom.HTMLDivElement
import org.w3c.dom.HTMLHeadingElement
import org.w3c.dom.HTMLImageElement
import kotlin.browser.document

private val content = document.getElementById("content") as HTMLDivElement

fun main() {

    val topContainerElement = document.createElement("div") as HTMLDivElement
    val textContainerElement = document.createElement("div") as HTMLDivElement
    val imageElement = document.createElement("img") as  HTMLImageElement
    val titleElement = document.createElement("h1") as HTMLHeadingElement
    val designationElement = document.createElement("h3") as HTMLHeadingElement
    val emailElement = document.createElement("h3") as HTMLHeadingElement


    imageElement.src = "https://media.licdn.com/dms/image/C5603AQGWF8Lu85Cmaw/profile-displayphoto-shrink_200_200/0?e=1560988800&v=beta&t=dF6DPHFx31ndEOYQ3_X211di58ZPrw1ix2Ve_XNaPAw"
    titleElement.innerHTML = "Mayank Wadhwa"
    designationElement.innerHTML = "Mobile and Frontend Engineer"
    emailElement.innerHTML = "mayank.wadhwa@outlook.in"

    textContainerElement.appendChild(imageElement, titleElement, designationElement, emailElement)

    content.appendChild(textContainerElement)


}

private fun Element.appendChild(vararg elements: Element) {
    elements.forEach {
        this.appendChild(it)
    }
}
