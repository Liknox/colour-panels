const cols = document.querySelectorAll(".col")

function generateRandomColor() {
	const hexCodes = "0123456789ABCDEF"

	let color = ""
	for (let i = 0; i < 6; i++) {
		color += hexCodes[Math.floor(Math.random() * hexCodes.length)]
	}
	return "#" + color
}

function setRandomColors() {
	cols.forEach(e => {
      const text = e.querySelector("h2")
      const button = e.querySelector("button")
      const color = chroma.random()
      
      text.textContent = color
		e.style.background = color

      setTextColor(text, color)
      setTextColor(button, color)
	})
}

function setTextColor(text, color) {
   const luminance = chroma(color).luminance()
   text.style.color = luminance > 0.5 ? "black" : "white"
}
setRandomColors()
